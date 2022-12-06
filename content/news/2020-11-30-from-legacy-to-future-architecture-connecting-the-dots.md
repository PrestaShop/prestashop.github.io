---
layout: post
title:  "From legacy to future architecture: Connecting the dots"
subtitle: "Some ideas on how we'll get from Point A to Point B"
date:   2020-11-30 09:00:00
authors: [ PabloBorowicz ]
icon: icon-compass
tags: [1.7, architecture]

---

This is the fourth and final article in a [series we introduced last year][introduction], that aims to describe where we are, where we are going, and some ideas on how we'll get there.

# Connecting the dots

_(or "Some ideas on how we'll get from Point A to Point B")_

During this series "PrestaShop in 2019 and beyond", we described the [current architecture][part-1] (or "Point A"), its [pain points][part-2], and what we think PrestaShop's [future architecture][part-3] (or "Point B") should look like. This fourth and final article aims to explore some concrete ideas to allow the project to move towards Point B – some of which are already being implemented in PrestaShop. 



## Choosing the right pace

Carrying out an architecture change for a project like PrestaShop is a massive undertaking, and it would be a grave mistake to try doing it in a single shot. Indeed, history tells us that refactoring from the ground up is the [number one thing that you should never do][things-you-should-never-do]: it would require an enormous development effort for a long time, which would leave the community without new releases for too long. Worse, once released, it would carry an extremely high adoption cost, because no existing module would work with it without significant modifications. Other CMSs made this mistake in the past and found their communities struggle to adopt their new version.

That is why we think that the sensible thing to do is to split the work in chunks, put them in a neat roadmap, work on one subset at a time, and deliver them progressively. Of course, it will probably require more effort during a longer timeframe than doing it in one shot. But on the other hand, **performing progressive and limited changes in well-defined parts of the system and delivering them iteratively in predictable milestones** will allow the community to keep up with the Core, as the changes will be smaller and less expensive to adopt than if the whole thing was done at once.

Now, let's explore those "chunks" individually.



## Reduce entropy to increase reliability

A stable system relies on pre-established business rules being respected at all times. If a system's business logic requires all products to have a name and a non-negative price, then it is _expected_ that if a product exists, it will adhere to these rules. Unfulfilled expectations produce inconsistencies, which result in errors.

PrestaShop is a very complex system. As such, it needs to enforce a very high number of business rules corresponding to a wide range of use cases. One of the biggest problems of the current architecture is that extensions can tap anywhere into the Core: since the system is very complex, extensions hooking, overriding or just _using_ Core classes can lead to problems if some business rule is overlooked by a developer who was most likely not even aware of the existence of such rule.

For example, when an order's carrier is updated, an email should be sent to the customer informing them that the order is on its way. This is done automatically when the action is performed using the appropriate service. However, if the order's carrier is modified manually through ObjectModel, for example by a module developer not aware of this rule, then the required email is not sent.

This problem of thick service layers manipulating thin models devoid of domain logic was identified over 15 years ago by Martin Fowler, who described it the [Anemic Domain Model][anemic-domain-model] anti-pattern. His answer was simple: business logic should be put in the same place as data is – [entity objects][ddd-entities].

This means that **there should be one single, obvious way to perform any given system action**. If there is only one possible way to update an order's carrier, and if this is done in an intuitive way through the Order entity, then we can ensure that all business rules are being enforced regardless of where this task is initiated.

Here is how you would update an order's shipping details:

```php
$someCustomer // this is a Customer
  ->getOrderById($orderId) // this returns an Order
	->updateShippingDetails($newCarrier, $trackingNumber);
```

Of course, this is easier said that done: getting to this kind of workflow in PrestaShop would require a complete rewrite of the Core, and as we said earlier, we don't want to do that. Which brings us to the next issue...

### Extensions need a reliable interface to the Core

As the Core evolves, its components will inevitably need to be split, renamed, change their methods' signatures, and so on. However, doing this would provoke breaking changes for extensions that rely on the core components' interfaces staying unchanged.

This situation can be assimilated to the [double bind dilemma][double-bind-dilemma], where two conflicting needs prevent the situation from evolving satisfactorily:

- The system is complex, has bugs or needs to accommodate new features, **so components must change**.
- Extensions rely on the current implementation, **so component mustn't change**.

This has been slowing down PrestaShop's progress for quite a while. But luckily, I think there's a way out. 

Let's revisit the D in [SOLID][solid] for a minute. The [Dependency Inversion Principle][dependency-inversion-principle] states the following:

> 1. High level modules should not depend on low level modules. Both must depend on abstractions.
> 2. Abstractions should not depend on details. Details must depend on abstractions.

The solution to this dilemma should actually be quite simple: by **making extensions rely on an API** (abstraction) rather than directly upon the Core, the Core will become free to evolve without introducing breaking changes for extensions. 

The answer is to **progressively isolate the Core, then refactor it**.



## Isolate the Core behind the Core API

The Core API acts as an [anti-corruption layer][anti-corruption-layer], or bridge, between the application code (Controllers, Services, Extensions...) and Core components. Whenever an application level component needs something from the Core, it accesses it through the Core API. 

Thanks to this, application components will no longer depend on Core components directly. Therefore, if for example a Core component should need to be removed and replaced with another, it would be completely transparent from the application point of view, as all changes would happen "behind the scenes".

[![Decoupled dependencies][decoupled-dependencies]][decoupled-dependencies]

To allow this, all code behind this API must become "private", or internal. This means that **once the API is complete, the [SemVer][semver] compatibility engagement will be limited to API components only**. 

Of course, this doesn't mean developers _will not_ be allowed to use Core components directly. PrestaShop being an open system, developers will always be free to shape it in any way they want. However, as this API is put in place, the official compatibility engagement will become limited to the API alone, and while an effort will be made to avoid performing breaking changes, they might happen from time to time.

### An intuitive API

To implement this internal API, we have chosen the [CQRS][cqrs] pattern. At its heart, CQRS (Command Query Responsibility Segregation) is about separating the Write model from the Read model. But once we couple it with the Command & Query Buses, things get more interesting. 

The Core API performs two types of operations:

- **Commands** – mutations, or changes in the system state
- **Queries** – information retrieval, based on the current system state

Each operation is defined by a simple object whose only job is to describe the task we want to perform, and carry the information needed to perform it. Inspired by [Domain-Driven Design][ddd]'s Ubiquitous Language, these operations are named in such a way that they are self-explanatory: Commands are named like `AddProductToCartCommand($cartId, $productId, $quantity)` and Queries like `GetCustomerOrders($customerId)`.

The beauty of this pattern, when coupled with Command & Query Buses, is that not only operations are very easy to discover and understand, but API consumers don't even need to care about *how* to perform them. Commands and Queries are messages, and the Bus works as a dispatcher that matches a given Command or Query to the appropriate service handler in charge of processing that specific request. As a developer using the Core API, you just need to issue the message, and the system will take care of the rest.

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

This principle essentially states that objects should be made in such a way that you can add new functionality without modifying the existing code. In the engineering literature, Bertrand Meyers originally suggested achieving this through subclassing, while Robert C. Martin encourages doing it through interface reimplementation. The Core API leverages CQRS and Command & Query buses in the spirit of this.

The API's "interface" is composed of **Commands** that describe an action that can be performed by the system, **Queries** that define a data retrieval operation, and **Query Result Types** (also commonly described as Data Transfer Objects or DTOs), which specify the structure for the data returned by a given Query operation. Since these objects (in particular Commands and Queries) are hardwired throughout the project, they can be considered closed to modification.

The _implementation_, on the other hand, is performed by Handler services which _subscribe_ to a given Command or Query. These services can be easily rewired through [Symfony service decoration][sf-service-decoration], so any extension can redefine the behavior of any given use case by decorating the original handler or reimplementing its interface. Additionally, in some cases, multiple extensions can decorate the same service through a _decoration chain_, where each service "hooks" into the input or output of the previous decorator.

The Core API is the better replacement for the obsolete [legacy class override system][class-override], which will progressively be phased out as legacy classes are removed from the root namespace.

### A domain-oriented API

Consider the following application use cases:

- Create a customer through a form in BO.
- Load customer information for update.
- Issue a partial refund in an order.
- Activate debug mode.

Each one of these is a unique and complete user interaction with the system. Whenever a request is issued to the backend, it can usually be matched with exactly one use case. 

The Core API is built around these use cases. This means that all its operations are based on the things the software does from a user standpoint, rather than what its _underlying components_ are able to do. This is a subtle, yet very important difference.

Some would argue that Core API operations should be optimized for reuse and composition. This is normal: as developers, we are used to constantly search for abstractions and generalizations so that we can build reusable components. We don't like duplication because it's inefficient and prone to inconsistencies. 

A low-level API would be the obvious answer, because it's optimized for reusability. After all, use cases are built on top of low level components, and the more low level components there are the less code you need to write whenever you add a new use case. It also helps reduce inconsistencies, because each single thing is done in a single way by a single component, and if that process has to change, you only need to change it in a single place, and then it's changed consistently everywhere. But there's a catch: what if you need to make it work _slightly_ differently for one use case only?

A high-level API, on the other hand, is optimized for customizability. This kind of API answers to a single use case, and nothing else. This provides much more freedom for customization compared to the low-level API, because modifications made to a high level API will be less prone to provoke unexpected side effects in other parts of the system. Its downside, however, is the need for more code, and potentially duplicate logic when two use cases are similar (e.g: single delete and bulk delete).

The Core API minimizes this problem by delegating most of the business logic to lower level Domain components. Therefore, a domain-oriented Core API works like a controller or interface to a domain-oriented Core. It doesn't implement logic, it works as a facade to other services which implement the logic themselves.

Here's how you create a customer using the Core API:

```php
$customerId = $this->commandBus->handle(
    new AddCustomerCommand(
       'John',
       'Doe',
       'john.doe@example.com',
       'examplepasswd',
       $defaultGroupId,
       $groupIds,
       $shopId
   )
);
```

### How it fits together

With the Core API in place, PrestaShop's backend architecture consists of four main layers:

- **Application layer** – composed of Controllers, Extensions and Application Services (like the ones from PrestaShop Bundle).
- **Core API** – the interface to the Core: Commands, Queries and Query Result Types.
- **Core API Services** – intermediate services which govern the behavior of the Core API and that can be decorated or replaced by modules.
- **Core Domain** – made out of Entity Models (eg. Product, Cart, etc.) containing all the business logic and orchestration services.

[![Application, Core API, Core API Services, Core Domain][how-it-fits-together]][how-it-fits-together]



## Homogenize the FO & BO architecture

In 1.7, the Back Office is being migrated to Symfony and Twig. It's only natural that the next step should be migrating the Front Office to Symfony as well. In terms of raw lines of code, the Front Office is much simpler than the Back Office, so it should take less time to migrate, even taking into account that we'd need to implement the Core API in FO as well.

Homogenizing the FO and the BO will not only enhance developer experience and ease up the learning curve for newcomers, but it will also allow us to get rid of all the ancient legacy-based components like `Dispatcher`, `Tools`, `Helper`, legacy controllers... as well as the `Adapter` namespace.



## Refactor the Core Domain

The Core Domain must progressively become domain oriented, using Entities and Aggregates. While some refactoring projects may be started as soon as the next major version, they will become easier to perform once the FO and BO architecture has been homogenized and the Core Domain has been isolated behind the Core API. Here are three top priorities.

### 1. Enforce strict typing

[Strict typing][strict-types] is an essential technique to help detect errors before they happen. Following last year's decision to [drop support for old PHP versions][eos-old-php], newly added classes and methods are already enforcing strict types since 1.7.7. Starting on the next major, existing code will start to be adapted to enforce strict types as well.

### 2. Get rid of ObjectModel

ObjectModel is PrestaShop's own custom [ORM][orm]. It served well over the years, but it's past time for it to retire. What should we replace it with? 

To answer that, let's start with an [interesting insight by Matthias Noback][doctrine-and-ddd] about DDD and persistance:

> When you (re)learn how to design domain objects using Domain-Driven Design patterns, you first need to get rid of the idea that the objects you're designing are ever going to be persisted. [...] **You should not let the fact that you're using a relational database get in the way**. Design the objects in such a way that they are useful, that you can do meaningful things with them, and that they are trustworthy [...].

Today, ObjectModels are half database mapping, half domain logic. We need to rebuild the Core Domain in such a way that the Entity Model reflects the Domain logic *(i.e. what the application is meant to do)* instead of database tables. In DDD, the Domain doesn't care about how or where data is stored. The database is just a _storage adapter_, so there's no reason why it should define how we interact with the Domain at all.

A refactored Core in the spirit of DDD would work primarily with a Domain-oriented Entity Model, leaving Entity Repositories to implement how data is stored and retrieved. The latter would most likely delegate data storage to Doctrine or DBAL adapters, depending on the need.

Getting rid of ObjectModel will also require **rewriting the Web services API**, because its current implementation is tightly coupled with this system. Thanks to the Core API, however, this task should be fairly straightforward: endpoints will be rewritten as Symfony controllers, but they only need to handle I/O. The heavy lifting is delegated to the Core API – which will be already implemented.

### 3. Get rid of global state

As said in previous articles, [global state is evil][global-state] and [should be avoided][global-state-2]. It causes weird, hard to find bugs that end up forcing developers to engineer around them using nonsensical concepts like [ContextStateManager](https://github.com/PrestaShop/PrestaShop/blob/1.7.7.x/src/Adapter/ContextStateManager.php) and [ContextMocker](https://github.com/PrestaShop/PrestaShop/blob/1.7.7.x/tests-legacy/Unit/ContextMocker.php).

All objects that are available globally using either static state or singleton instances, including `Context` and `Db`, must be replaced by concrete dependencies made available through [Dependency Injection][dependency-injection].



## Moving forward

Paying up your technical debt is not only about refactoring, it's also about modernization. PrestaShop's Front Office as we know it is meant to offer a simple and powerful store implementation, based on traditional server-side rendering and page reload. This implementation, however, is not suitable for everyone.

During the last few years, the web has been transforming faster than ever, adopting new technologies at a much higher rate than 10 or 15 years ago, thanks to the swift and widespread deployment of new features by self-updating browsers like Chrome (which released as many as 87 major versions in only 12 years!). 

Modern day websites are increasingly leaning towards rich, high-performance, mobile-first experiences based on powerful Javascript frameworks like VueJs, and advanced browser APIs like web workers, local storage, and push notifications. The current Front Office architecture, out of the box, doesn't satisfy these needs. For example:

- If you want to allow offline browsing with [Progressive Web Apps (PWA)][pwa]
- If you want to go omnichannel (like mobile app, kiosk...)
- Or if you just want to create your own tailor-made interface to suit your needs

PrestaShop needs to embrace the modern web and bring powerful new features to front end developers, allowing them to benefit from greater flexibility to build their projects. The first building block for that is a powerful Front Office API.

### Allow hybrid headless with the Front Office API

[Headless CMS][headless] is a fancy expression used to describe a Content Management System (CMS) that provides a Back Office to create and manage content, and an API (often REST-based) for content presentation. These CMSs are becoming increasingly popular because they offer developers the freedom to build their consumer experiences as they see fit, without the burden of an opinionated presentation interface. However, compared to monolithic software like PrestaShop, they offer no built-in Front Office – developers using them must create one from scratch or based on other projects.

Hybrid Headless CMSs bring the best of both worlds: an opinionated, ready-to-use Front Office, and an unopinionated, generic API. This way, developers can choose to use one, the other, or both. By creating a **Front Office API**, we can allow PrestaShop developers to leverage PrestaShop's catalog, customer account, checkout and order management features to create the experience they wish – whether they choose to use the built-in Front Office or not.

We don't know exactly how the Front Office API will be implemented yet; it could be REST, it could be GraphQL... all bets are off. But what we do know is that it's a completely new component that sits at application layer (the topmost layer in the backend architecture described above). Because of that, its initial implementation won't be burdened by the Core's SemVer restrictions – it doesn't require us to wait for a major release. It could even be released as a composer package to allow for fast, iterative experimentation before it's fully merged into the Core. We can't wait to start working on it. 

### Modernize front end development

With the Front Office API in place, we will be able to start working a modern reference implementation for the Front Office, based on this new API and built with VueJS. However, building a modern web app is a complex matter, and building an extensible one is **even harder**. As this essay dives farther into the future, it's difficult for me to outline it in detail.

That said, one thing is certain for me: such an app must be based on [reusable components][ui-kit], data stores and [event-driven state management][flux-data-flow]. They are the building blocks for a Software Development Kit (SDK) that core developers, module developers and integrators alike will be able to use to build PrestaShop and customize it through modules. Once more, I think it would be unwise to move the Front Office to VueJS without building this SDK first, and it's the reason why we stopped building fully VueJS-based Back Office pages in the first place.

#### What about the Back Office?

Once the Front-end SDK has been designed, it will be possible to move the Back Office into the VueJS / API world as well. Thanks to the Core API, building a Back Office API that powers VueJS pages will be a piece of cake, because everything will be already in place: Back Office API controllers will output JSON instead of HTML pages, but will still consume the same Commands and Queries as their current counterparts.

## Final notes

We don't yet know the exact order in which these ideas will be implemented, or for that matter, if all of them will be done precisely as I envision them today, or done at all. However, the intent of this series of articles isn't just to communicate "this is what we are going to do", and be done with it. These articles are a way put our analysis and our vision into words and share them with the community. They are meant to trigger a discussion so that we can find the best possible path to a common objective, a desirable future that we can look forward to building together: **making PrestaShop the best open source e-commerce platform there is**.

In this article, I have shared some ideas on how we can move PrestaShop towards the Future Architecture, a very long path that will take a tremendous amount of hard work. In my view, if we want it to see it through in a realistic timeframe, the best way is through **smaller, more frequent releases**.

In that scenario, we would release one major version every year, focusing on refactoring and technical improvements, followed by one or two minor releases, focusing on new features, and a patch releases every six weeks. I can see you smirking: _"they didn't even manage to release a single minor version in a year, and they plan to release a major every year?"_ – Yes, I know. To sustain an increased release pace, we would need to set up two ground rules:

1. **A major version is done when (and only when) its scope is done.** The release date is pushed back as much as needed until the job is finished.
2. **A minor or patch release is released at a given date, regardless of scope.** If a given feature is not ready by the time of freeze, then that feature is either removed from the version, or it's included as "experimental" behind a [feature flag][feature-flag]. The release date is fixed, and the released content is variable.

What do you think? Tell us in the comments, or [find us on Slack][slack].

---

### About the series

These are the topics that have been covered during this series:

1. [The Current Architecture][part-1] (or _"Point A – Where we are"_)
2. [Pain Points][part-2] (or _"What needs to be improved"_)
3. [The Future Architecture][part-3] (or _"Point B – Where we are going"_)
4. Connecting the dots (or _"Some ideas on how we'll get there"_)


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
[strict-types]: https://www.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration.strict
[eos-old-php]: https://build.prestashop.com/news/announcing-end-of-support-for-obsolete-php-versions/
[orm]: https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping
[doctrine-and-ddd]: https://matthiasnoback.nl/2018/06/doctrine-orm-and-ddd-aggregates/
[global-state]: https://build.prestashop.com/news/prestashop-in-2019-and-beyond-part-2-pain-points/#global-state
[global-state-2]: https://build.prestashop.com/news/prestashop-in-2019-and-beyond-part-3-the-future-architecture/#global-state
[dependency-injection]: https://en.wikipedia.org/wiki/Dependency_injection
[pwa]: https://en.wikipedia.org/wiki/Progressive_web_application
[headless]: https://en.wikipedia.org/wiki/Headless_content_management_system
[ui-kit]: https://github.com/PrestaShop/prestashop-ui-kit/
[flux-data-flow]: https://facebook.github.io/flux/docs/in-depth-overview#structure-and-data-flow
[feature-flag]: https://martinfowler.com/articles/feature-toggles.html
[slack]: https://github.com/PrestaShop/open-source/tree/master/slack#joining-the-prestashop-open-source-projects-slack


[decoupled-dependencies]: /assets/images/2020/11/architecture-decoupled-dependencies.png
[cqrs-in-ps]: /assets/images/2020/11/architecture-cqrs.png
[how-it-fits-together]: /assets/images/2020/11/architecture-fit-together.png
