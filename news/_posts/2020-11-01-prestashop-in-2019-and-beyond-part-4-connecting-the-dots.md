---
layout: post
title:  "PrestaShop in 2019 and beyond, part 4: Connecting the dots"
subtitle: "aka Some ideas on how we'll get from Point A to Point B"
date:   2020-11-01 09:30:00
authors: [ PabloBorowicz ]
icon: icon-compass
tags: [1.7, architecture]

---

This is the fourth and final article in a [series we introduced last year][introduction], that aims to describe where we are, where we are going, and some ideas on how we'll get there.

# Connecting the dots

_(or "Some ideas on how we'll get from Point A to Point B")_

During this series, we described the [current architecture][part-1] (or "Point A"), the [pain points][part-2] of that architecture, and what we think PrestaShop's [future architecture][part-3] (or "Point B") should look like. This fourth and final article aims to explore some concrete ideas to allow the project to move towards Point B – some of which are already being implemented in PrestaShop. 



## Choosing the right pace

Carrying out an architecture change for a project like PrestaShop is a massive undertaking, and it would be a grave mistake to try and do it in a single shot. Indeed, history tells us that refactoring from the ground up is the [number one thing that you should never do][things-you-should-never-do]: it would require an enormous development effort for a long time, which would leave the community without new releases for too long. Worse, once released, it would carry an extremely steep adoption cost for users, because no existing module would work with it without significant modifications. Other CMSs made this mistake in the past and found their communities struggle to adopt their new version.

This is why we think that the sensible thing to do is to split the work in chunks, put them in a neat roadmap, work on one subset at a time, and deliver them progressively. Of course, it will probably require more effort during a longer timeframe than doing it in one shot. But on the other hand, **performing progressive and limited changes in well-defined parts of the system and delivering them iteratively in predictable milestones** will allow the community to keep up with the Core, as the changes will be smaller and less expensive to adopt than if the whole thing was done at once.

Therefore, we think the best way to advance towards the Future Architecture is through planned, more frequent major releases that focus on refactoring, followed by one or two minor releases focusing on new features. The exact timeline, however, is yet to be determined.

Now, let's see how we are planning to move forward.

## Reduce entropy to increase reliability

A stable system relies on pre-established business rules being respected at all times. If a system's business logic requires all products to have a name and a non-negative price, then it is _expected_ that if a product exists, it will adhere to these rules. Unfulfilled expectations produce inconsistencies, which result in errors.

PrestaShop is a very complex system. As such, it needs to enforce a very high number of business rules corresponding to a wide range of use cases. One of the biggest problems of the current architecture is that extensions can tap anywhere into the Core: since the system is very complex, extensions hooking, overriding or just _using_ Core classes can lead to problems if some business rule is overlooked by a developer who was most likely not even aware of the existence of such rule.

For example, when an order's carrier is updated, an email should be sent to the customer informing them that the order is on its way. This is done automatically when the action is performed using the appropriate service. However, if the order's carrier is modified manually through ObjectModel, for example by a module developer not aware of this rule, then the required email is not sent.

This problem of thick service layers manipulating thin models devoid of domain logic was identified over 15 years ago by Martin Fowler, who described it the [Anemic Domain Model][anemic-domain-model] anti-pattern. His answer was simple: domain logic should be put in the [entities][ddd-entities].

This means that **there should be one single, obvious way to perform any given system action**. If there is only one possible way to update an order's carrier, and if this is done in an intuitive way through the Order entity, then we can ensure that all business rules are being enforced regardless of where this task is initiated.

Here is how you would update an order's shipping details:

```php
$someCustomer // this is a Customer
  ->getOrderById($orderId) // this returns an Order
	->updateShippingDetails($newCarrier, $trackingNumber);
```

Of course, this is easier said that done: getting to this kind of workflow in PrestaShop would require a complete rewrite of the Core, and we don't want to do that yet. But we'd like to get that _someday_, so the question is how do we do that progressively.

In my view, this can only be achieved by **isolating the Core, then refactoring it**. This brings us to the next issue...

### Extensions need a reliable interface to the Core

As the Core evolves, its components will inevitably need to be split, renamed, change their methods' signatures, and so on. However, doing this would provoke breaking changes for extensions that rely on the core components' interfaces staying unchanged.

This situation can be assimilated to the [double bind dilemma][double-bind-dilemma], where two conflicting needs prevent the situation from evolving satisfactorily:

- The system is complex, has bugs or needs to accommodate new features, **so components must change**.
- Extensions rely on the current implementation, **so component mustn't change**.

This has been slowing down PrestaShop's progress for quite a while. But luckily, I think there's a way out. 

Let's revisit the D in [SOLID][solid] for a minute. The [Dependency Inversion Principle][dependency-inversion-principle] states the following:

> 1. High level modules should not depend on low level modules. Both must depend on abstractions.
> 2. Abstractions should not depend on details. The details must depend on the abstractions.

The solution to this dilemma should actually be quite simple: by **making extensions rely on an API** (abstraction) rather than directly upon the Core, the Core will become free to evolve without introducing breaking changes for extensions.



## Isolate the Core behind the Core API

The Core API acts as an [anti-corruption layer][anti-corruption-layer], or bridge, between the application code (Controllers, Services, Extensions...) and Core components. Whenever an application level component needs something from the Core, it access it through the Core API. 

Thanks to this, application components will no longer depend on Core components directly. Therefore, if for example a Core component should need to be removed and replaced with another, it would be completely transparent from the application point of view, as all changes would happen "behind the scenes".

[![Decoupled dependencies][decoupled-dependencies]][decoupled-dependencies]

To allow this, all code behind this API must become "private", or internal. This means that once the API is complete, only the components belonging to it will be part of the [SemVer][semver] compatibility engagement.

Of course, this doesn't mean developers _will not_ be allowed use Core components directly. PrestaShop being an open system, developers will always be free to shape it in any way they want. However, as this API is put in place, the official compatibility engagement will become limited to the API alone, and while an effort will be made to limit them, changes may occur from one version to the other. If you choose to go around the API, you will know what to expect.

### An intuitive API

The question now is, how do we plan to implement this internal API? For that, we have chosen the [CQRS][cqrs] pattern. At its heart, CQRS (Command Query Responsibility Segregation) is about separating the Write model from the Read model. But once we couple it with the Command & Query Buses, things get more interesting. 

The Core API should perform two type of operations:

- **Commands** – mutations, or changes in the system state
- **Queries** – information retrieval, based on the current system state

Each operation is defined by a simple object whose only job is to describe the task we want to perform, and carry the information needed to perform it. Inspired by [Domain-Driven Design][ddd]'s Ubiquitous Language, these operations are named in such a way that they are self-explanatory: Commands are named like `AddProductToCartCommand($cartId, $productId, $quantity)` and Queries like `GetCustomerOrders($customerId)`.

The beauty of this pattern, when coupled with Command & Query Buses, is that not only operations are very easy to discover and understand, but API consumers don't even need to care about how to perform them. Commands and Queries are messages, and the Bus works as a dispatcher that matches a given Command or Query to their respective service handler responsible with processing the request. As a developer, you just need to issue the message, and the system will take care of the rest.

Here's a code example of how to issue a Command and a Query from a controller:

```php
// add 2 items of $productId to $cartId
$this->getCommandBus()->handle(new AddProductToCartCommand($cartId, $productId, 2));

// retrieve all orders for $customerId
$customerOrders = $this->getQueryBus()->handle(new GetCustomerOrders($customerId));
```

And here's a schema of how this works:

[![CQRS in PrestaShop][cqrs-in-ps]][cqrs-in-ps]

This pattern is being progressively implemented since PrestaShop 1.7.5, in parallel to the Symfony Migration.

### An extensible API

PrestaShop is a development platform, and as such it requires a balance between extensibility and predictability. In an ecosystem as rich as PrestaShop's, it is impossible to foresee the needs of each individual project in advance; the Core API must then be **open for extension** so that new features can be added as needed. At the same time, extension needs the system to behave in a predictable way; in consequence the API must also be **closed to modification**. As you might have guessed, I'm talking about the O in SOLID: the [Open/Closed principle][open-closed-principle].

This principle essentially states that objects should be made in such a way that you can add new functionality without modifying the existing code. In the engineering literature, Bertrand Meyers originally suggested to achieve this through subclassing, while Robert C. Martin encourages doing it through interface reimplementation. The Core API leverages CQRS and Command & Query buses in the spirit of this.

The API's "interface" is composed of **Commands** that describe an action that can be performed by the system, **Queries** that define a data retrieval operation, and **Query Result Types** (also commonly described as Data Transfer Objects or DTOs), which specify the structure for the data returned by a given Query operation. Since these objects (in particular Commands and Queries) are hardwired throughout the project, they can be considered closed to modification.

The _implementation_, on the other hand, is performed by Handler services which _subscribe_ to a given Command or Query. These services can be easily rewired through [symfony service decoration][sf-service-decoration], so any extension can redefine the behavior of any given use case by decorating the original handler or reimplementing its interface. Additionally, in some cases, multiple extensions can decorate the same service through a _decoration chain_, where each services "hooks" into the input or output of the previous decorator.

The Core API is the better replacement for the obsolete [legacy class override system][class-override], which will progressively be phased out as legacy classes are removed from the root namespace.

### A domain-oriented API

Consider the following application use cases:

- Create a customer through a form in BO.
- Load customer information for update.
- Issue a partial refund in an order.
- Activate debug mode.

Each one of these is a unique and complete user interaction with the system. Whenever a request is issued to the backend, it can usually be matched with exactly one use case. 

The Core API is built around these use cases. This means that all its operations are  based on the things the software does from a user standpoint, rather than what its _underlying components_ are able to do. This is a subtle, yet very important difference.

Some would argue that Core API operations should be optimized for reuse and composition. This is normal: as developers, we are used to constantly search for abstractions and generalizations so that we can build reusable components. We don't like duplication because it's inefficient and prone to inconsistencies. 

A low-level API would be the obvious answer, because it's optimized for reusability. After all, use cases are built on top of low level components, and the more low level components there are the less code you need to write whenever you add a new use case. It also helps reduce inconsistencies, because each single thing is done in a single way by a single component, and if that process has to change, you only need to change it in a single place, and then it's changed consistently everywhere. But there's a catch: what if you need to make it work _slightly_ differently for one use case only?

A high-level API, on the other hand, is optimized for customizability. This kind of API answers to a single use case, and nothing else. This provides much more freedom for customization compared to the low-level API, because modifications made to a high level API will be less prone to provoke unexpected side effects in other parts of the system. Its downside, however, is the need for more code, and potentially duplicate logic when two use cases are similar (e.g: single delete and bulk delete).

The Core API minimizes this problem by delegating most of the business logic to lower level Domain components. Therefore, a domain-oriented Core API works like a controller or interface to a domain-oriented Core. It doesn't implement logic, it works as a facade to other services which implement the logic themselves.

### How it fits together

[![Application, Core API, Core API Services, Core Domain][how-it-fits-together]][how-it-fits-together]

As you can see in the schema above, this architecture is made out of four main layers:

- **Application layer** – where Controllers, Extensions and Application Services (like the ones from PrestaShopBundle) live.
- **Core API** – the interface to the Core, composed Commands, Queries and Query Result Types
- **Core API Services** – intermediate services which govern the behavior of the Core API
- **Core Domain** – made out of Orchestration services and Entity Models (eg. Product, Cart, etc.) that contain all the business logic.


[introduction]: /news/prestashop-in-2019-and-beyond-introduction/
[part-1]: /news/prestashop-in-2019-and-beyond-part-1-current-architecture/
[part-2]: /news/prestashop-in-2019-and-beyond-part-2-pain-points/
[part-3]: /news/prestashop-in-2019-and-beyond-part-3-the-future-architecture/
[things-you-should-never-do]: https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/
[anemic-domain-model]: https://www.martinfowler.com/bliki/AnemicDomainModel.html
[ddd-entities]: https://martinfowler.com/bliki/EvansClassification.html
[double-bind-dilemma]: https://en.wikipedia.org/wiki/Double_bind
[solid]: https://en.wikipedia.org/wiki/SOLID
[dependency-inversion-principle]: https://en.wikipedia.org/wiki/Dependency_inversion_principle
[anti-corruption-layer]: https://docs.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
[semver]: https://semver.org/
[cqrs]: https://martinfowler.com/bliki/CQRS.html
[ddd]: https://martinfowler.com/bliki/DomainDrivenDesign.html
[open-closed-principle]: https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle
[sf-service-decoration]: https://symfony.com/doc/3.4/service_container/service_decoration.html
[class-override]: https://devdocs.prestashop.com/1.7/modules/concepts/overrides/

[decoupled-dependencies]: /assets/images/2020/11/architecture-decoupled-dependencies.png
[cqrs-in-ps]: /assets/images/2020/11/architecture-cqrs.png
[how-it-fits-together]: /assets/images/2020/11/architecture-fit-together.png

