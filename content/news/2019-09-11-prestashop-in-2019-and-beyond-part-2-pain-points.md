---
layout: post
title:  "PrestaShop in 2019 and beyond, part 2: The Pain Points"
subtitle: "aka What needs to be improved"
date:   2019-10-07 08:00:00
authors: [ PabloBorowicz ]
icon: icon-compass
tags: [1.7, architecture]
---

This is the second in a [series of articles][introduction] we introduced earlier this year, which aims to describe where we are, where we are going, and some ideas on how we'll get there.

# The Pain Points
_(or "What needs to be improved")_

![The only valid measurement of code quality: WTFs/minute](/assets/images/2019/09/wtf-per-minute.png)
{: .text-center style="margin: 5rem auto"}

In the [previous part][part-1], we described what the current architecture looks like. This article aims to analyze what are the main "pain points", that is, fundamental problems that are dragging the project down.

But before getting to that, let's address the elephant in the room. After reading the previous part in this series, probably the number one thing you thought of was "why _the hell_ is this so complicated?". 

There are many reasons for that, but I think there's one that can be found at the root of it. This will be a long article, so please bear with me.

## Introduction

First of all, I believe there is an all-too-common misunderstanding about the very nature of PrestaShop. Many people think of PrestaShop as a product: something that you download and install to build and run your shop from your browser. But it's not. Or at least I don't see it that way.

When I meet people and tell them what I do for a living, I usually describe PrestaShop as an _open-source platform for developing e-commerce websites_. This is in my view, a more accurate description of what this project is about.

Yes, I have met people who download it and use it as-is, but I think they belong to a declining minority. To my best understanding, most people who are choosing to use the PrestaShop project in 2019  and succeed in doing so, do it to kickstart their own development—that is, a _product_ based on the PrestaShop _project_ (remember [not to confuse projects and products](https://opensource.com/business/15/8/open-source-products-four-rules)). They are usually agencies or experts, and often they are also part of our rich community of module and theme developers who sell on the [Addons Marketplace][addons].

This means that we, the people who work on PrestaShop's Core code, have to keep three kinds of "users" into account:

1. The shoppers who buy things on PrestaShop shops,
2. ... the merchants who run PrestaShop shops (and ultimately, pay for),
3. ... and the **developers** who use PrestaShop to build sites, or develop modules and themes.

This third "user", is very, _very_ important to us. [I mean it like Steve Ballmer](https://www.youtube.com/watch?v=1VgVJpVx9bc).

It's not just because we _love_ developers (incidentally, we do!). It's because PrestaShop cannot survive without them. As such, we want to encourage them to develop for our platform. 

As platform developers, we face a big challenge that most developers (or at least, web developers) usually don't need to care about: **backward compatibility**.

Developers who work with PrestaShop (or any platform for that matter) expect things to work in a certain, predictable way. Either because the vendor explicitly described them that way through documentation, or because they spent time figuring out how it works on their own, in many cases through excruciating trial-and-error and reverse engineering of undocumented code. The bottom line is, once they get something working, developers expect it to _continue working that way_—and it's a natural thing to do.

This expectation about how two independent pieces of software are supposed to work together is usually based on an _interface_, a kind of contract or agreement between the two parties, that can be either explicit (i.e. clearly defined) or not. If it's implicit, then it's an _understanding_ of sorts, where one of the parties basically assumes the terms while the other party does neither validate nor challenge them. 

Of course, after having invested time and money in making something work, developers won't appreciate having to update their code regularly every time there's a new platform version—ideally, it should "just work". Therefore, it goes without saying that introducing any change that breaks this agreed-upon _interface_ (a "breaking change") won't help with keeping developers interested in adopting a new version of said platform. Again, this is true for _all_ platforms.

As a result, many platform vendors—PrestaShop included—will go out of their way to avoid introducing breaking changes as much as possible. But this is a double-edged sword.

It is well-known that, in time, [software rots](https://en.wikipedia.org/wiki/Software_rot). Most developers agree that the best medicine for avoiding software decay is applying frequent [refactoring](https://refactoring.com/), because once code rots for good, it becomes unmaintainable and has to be rewritten—and history shows us that [rewriting from scratch is a terrible idea](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/).

However, refactoring can only get you so far until it starts to require introducing breaking changes. And once you hit that brick wall, you're stuck: either you let that part of the code rot or you introduce breaking changes that will undermine the adoption of your platform. Or worse, you introduce a _new_ subsystem that does the same thing as the old one, and keep the previous one for compatibility, consequently increasing the overall software complexity.

That's one of the top reasons PrestaShop's architecture has become so complex. It was pushed too far. By constantly trying our best to maintain backward compatibility, even when doing so was detrimental to the platform's overall technical quality, we have substantially undermined its capacity to move forward.

That said, let's find out what other problems are hiding under the hood...

## Plan

* [An aging architecture](#an-aging-architecture)
* [No clearly-defined API](#no-clearly-defined-api)
* [1.7 was released too soon](#17-was-released-too-soon)
* [Too many dependencies with external services](#too-many-dependencies-with external-services)
* [Testing is very hard](#testing-is-very-hard)
* [Other problems](#other-problems)

## An aging architecture

PrestaShop has deeply-rooted design issues that can be explained simply by the age of its architecture.

Web technologies have evolved massively in the last years, and industry standards are now very different compared to what they were 10 years ago, when the current foundations of PrestaShop were laid out. Back then, web applications were still being built using the classic backend-generated, form-centric approach that became commonplace during the [CGI-based era](https://en.wikipedia.org/wiki/Common_Gateway_Interface), which forged the modern Internet.

Fast forward to 2019, the web is a very different place. It's a mobile-first world, where experiences provided by [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) have become so rich that the frontier between a web site and a native phone app is now at its thinnest. A world where interacting with a form while offline, infinite scroll and instant interaction is now normal, and reloading a page is archaic. A world made of rich front-end applications, and simple API-based backends.

Let's face it, PrestaShop's architecture, as we know it, shows its age. PrestaShop was designed for [a world of Smarty and jQuery][legacy-controllers], but we currently live in a world of React (or Vue, or Angular) and GraphQL.

### Systemic problems

PrestaShop was also designed using design patterns that were commonplace in the PHP world 10 years ago but have now become obsolete.

#### Bottom up, data-centric design

PrestaShop's architecture was designed in a database-centric, [bottom-up way](https://en.wikipedia.org/wiki/Top-down_and_bottom-up_design#Software_development). This is a classic design pattern where you start building small blocks, then build bigger blocks based on those. Typically, it starts by designing the database schema, then creating your models based on that, then the code that manipulates those models.

If done right, this kind of design approach can be good for reusability when working in an iterative, exploratory way. But it can be a nightmare for platform maintainers that need to keep interoperability and code longevity in mind. Let me explain.

In this approach, components are designed and built _before_ they are actually used, meaning their behavior is mainly based on _guesses_ regarding what future needs they will address. Therefore, it's usually not long until an unforeseen use case is found for which the component's design is not well-adapted.

When working in an iterative fashion this is not a problem, because you can go back to the drawing board, redesign the component and deploy it to production. It's part of the workflow. But when you're building a development platform, where this will most likely happen _after_ it is first released, this means that the maintainer will have to find a way to alter the component so that it addresses this particular behavior, **without introducing breaking changes**. This is how spaghetti code creeps in and it's also one of the most common ways technical debt is created.

In PrestaShop, this problem is exacerbated by widespread data micromanagement, where state changes are handled through direct model manipulation (e.g. "get instance of Product, change property value, save", or worse, an SQL update query) instead of transitions. In theory, models should know little about each other, and controllers should be slim on logic. Who's responsible for ensuring that products inside an order exist and are in stock, for instance? If someone updates a product, who's in charge of updating search indexes? 

Currently, there's no unique structure in the core that guarantees this vital system-wide coherence.

#### Global State

PrestaShop's legacy code is mainly made out of static classes which are heavily dependent on global or semi-global states, like `Context` and `Db`. 

While this approach could initially have seemed like a good idea (no need to think about dependencies, "cleaner", easy-to-use code that "just works"), it actually brings [a great deal of classic, well-known problems](https://softwareengineering.stackexchange.com/a/148154), including two that are very bad for any project:

* Global state and tightly interweaved dependencies are bug-prone, meaning that bugs are harder to fix and regressions are more likely to creep in.
* It's much harder to create automated tests, which aggravates the risk of undetected regressions.

The new architecture introduced in PrestaShop 1.7 ultimately aims at removing all static classes and replacing them with components designed following the [SOLID principles](https://en.wikipedia.org/wiki/SOLID). However, due to the enormous amount of work it represents and the number of breaking changes it will introduce, most of the lower-level components are and will still be present for the whole lifetime of 1.7. This means that unfortunately, `Context`, `Db`, `ObjectModel` and the such aren't going away anytime soon—nor are the problems they bring.

#### Technical debt

Technical debt is a problem for all mature projects, and PrestaShop is not the exception there. As stated before, the best way to avoid software rot is to apply frequent refactoring. But if refactoring is limited by breaking changes, then it cannot be applied properly and technical debt starts piling up.

Even though continuous efforts are being made to avoid this, having to circle around breaking changes ultimately increases complexity. And indeed, the current architecture has become quite complex, with a legacy part that contains a great number of crisscrossing dependencies, and a new-generation part that still requires following many not-so-obvious rules and many workarounds. In addition, more layers means more code to load in memory, which in some cases can also result in a performance penalty.


## No clearly-defined API

As we said before, interoperability is a big subject in platform development. Since refactoring is, in the long term, unavoidable, breaking changes are bound to occur sooner or later.

Remember back in 2015, when [PrestaShop started following SemVer][semver-article]? The Semantic Versioning (SemVer) [specification](https://semver.org/) defines that only major versions can introduce backward incompatible API changes, while minor and patch versions must ensure backward compatibility. 

This is good for interoperability: it means that as long as integrations respect the software's API, they can be sure they will keep working with the main software, even if that software is upgraded to the next minor or patch version.

In the case of PrestaShop, merchants want to be able to upgrade their shop seamlessly and benefit from the new features and bug fixes, without having to change their theme, modules and customizations, or fear something will break down. As stated before, SemVer is supposed to ensure this, as long as third parties respect PrestaShop's API. This is true—in theory.

**But... what _exactly_ constitutes PrestaShop's API?**

Right now there's no article documenting it out anywhere. If there was, we would be able to say: "This is PrestaShop's API. It is something that we are committing on. Respect it, and enjoy forward compatibility!".

So, if it's not clearly defined anywhere... then what is this unwritten contract made up from? Let's find out.

First, we must first identify **who** are our technical [stakeholders](https://en.wikipedia.org/wiki/Stakeholder_management). Then, we have to establish **what** are the technical resources they need to interact with, and finally define **how** those interactions will take place. Sounds familiar? We have already depicted that in the [previous article][part-1] (see [figure][comprehensive-overview]).

By looking at the architecture overview, we can easily pinpoint PrestaShop's four main technical stakeholders:

- Themes
- Modules
- Web service clients
- Customizations (custom code for custom functionality; that is, overrides or rewritten core code)

If we look at the lines going in and out of them, we can see the relationships between these stakeholders and the rest of the system:

- **Themes** depend on...
	- Smarty 
	- Any parent theme (like Classic, for instance)
	- Module templates (if they "skin" those modules)
	- Data structures provided to templates
	- Core JavaScript library (jQuery)
- **Modules** depend on...
	- Smarty and/or Twig
	- Base module features provided by the Core
	- Hooks
	- Overridable templates in the BO
	- BO themes, their CSS and JavaScript
	- Core classes
- **Web service clients** depend on...
	- Web service API (which itself is tightly coupled to ObjectModel)
- **Customizations** depend on...
	- The Override system
	- Core services
	- Core classes

We have now established **who** are the stakeholders and **what** resources they need. But what about the **how**?

Well, if the **how** is not clearly defined, then we are left with two choices: either there's _no_ API, or **_everything_ used by stakeholders is the API**.

[Let that sink in for a minute](https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif). That's a _pretty big_ API, isn't it?

Big indeed. As we can see, the level of dependencies is _massive_. That means that essentially, PrestaShop's "API" is made out of every template file, every public member of every PHP class, and every JavaScript object. Oh, and assets, too.

![Use all the things](/assets/images/2019/09/use-all-the-things.jpg)
{: .center style="margin: 5rem auto"}

Of course, this level of access is fantastic for customizations. _Everything_ is right there, available for use and modification. But at what cost?

Having everything open up for use and modification severely limits PrestaShop's freedom to implement changes in the Core (be it features, bug fixes, or refactoring) without introducing backward incompatible changes.

How severely does this affect us? Here are some examples of things that _shouldn't_ be done until the next major version of PrestaShop:

- Change any public method signature in any class (rename, change its return type or structure, remove a parameter, or change its type).
- Change any public property in any class.
- Rename, move, or delete any class or class namespace.
- Add new requirements (like dropping support for old versions of PHP or browsers, requiring new server-side libraries, etc.)
- Replace any subsystem (like updating libraries to new major versions or replacing a library with another).

Obviously, these requirements are incompatible with the stakes of 1.7, so we have been forced to take [some liberties][sf-upgrade] in order to be able to move forward, even if it's a rule that we try not to break if we can help it. Still, this is a recurrent pain: 

- **Want to implement a new feature**? _Better think of a way to do that in a retrocompatible way_.
- **Want to replace ObjectModels with Doctrine?** _Nope, BC break_.
- **Want to refactor that class to make it testable?** _No can do, that would require changing its signature_.
- **Want to upgrade that dependency to benefit from cool new features?** _Not if it's a major version upgrade_.
- :'(

### Everything is public

As if making every class part of our API was not enough of a problem, a lot of legacy core classes suffer from _public_-itis. It means that classes have lots of public methods and properties that needn't be, just for convenience's sake (violating the [encapsulation principle](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming))).

This is particularly troublesome in PrestaShop, because once a class member has become public—even if it was a mistake—it becomes part of the public API as soon as it's released... and therefore cannot be refactored until the next major version!

It gets _even worse_ because of the [Overrides system][overrides-system], which allows developers to replace any legacy core class with a custom one (violating the [Open–Closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle), by the way). Since the Overrides system is based on inheritance, and inheritance grants overrides access to protected class members of the extended class, and any accessible code is considered part of the API... then **protected members of legacy core classes can be considered part of the public API as well**, because they are accessible. 

Having no clearly-defined contracts means we can't change anything without introducing a breaking change, which severely limits the options for improving PrestaShop.

## 1.7 was released too soon

PrestaShop 1.7.0 was a very ambitious release. It featured a [new architecture](/news/new-architecture-1-6-1-0/), a [new framework (Symfony)](/news/prestashop-1-7-and-symfony/), a new Back Office theme (later based on our [UI kit](/news/PrestaShop-UI-Kit/)), a [new default Front Office theme](/news/new-theme-1-7-introduction/) and [Starter Theme](/news/starter-theme-kickoff/), a [new Product page experience](/news/product-page-evolution/), a [new Modules page experience](/news/module-page-awakens/), a [new translation system](/news/new-translation-system-prestashop-17/), and [use of CLDR](/news/cldr-composer-jshint/), among many other features. 

That's an impressive list. Unfortunately, that objective was proven to be too ambitious, and the result was an underwhelming initial release.

Before continuing, it's important to say that following this release and between 2016 and 2018, most of the original team that developed PrestaShop 1.7 left the company or was reassigned. In 2017, a new CTO (Aurélien Pelletier) and I arrived at PrestaShop. We agreed on a new long-term vision that would point the project in the right direction, and started building a new team to make it happen. Early 2018, with the support of the newly appointed PrestaShop CEO, Alexandre Eruimy, the team started growing and the project started picking up speed again.

Now, even though PrestaShop 1.7 is [getting better and better with every release](https://www.webbax.ch/2019/01/10/unboxing-decouverte-prestashop-1-7-5-0/), we find that some decisions taken during early development of 1.7 were ultimately proven to be bad calls, since they are now making it harder to move the project forward.

### No clear vision

To me, it looks like PrestaShop 1.7.0 was developed and released without a clear, global vision of what the ultimate objective of this major version was, and how long it would take to do it. 

In addition, a tradition of word-of-mouth knowledge sharing at PrestaShop meant that if there ever was a vision, it was unknown to most and is now forever lost. This is something we are meaning to change, and this series is part of that.

### Too many new things

Too many technical projects were started in parallel, and were released before being properly finished.
 
As I said before, this would have been acceptable in a SaaS software where you can work iteratively and release often, but doesn't work well for a development platform like PrestaShop, where upgrades are costly and infrequent. Unsurprisingly, releasing this way resulted in a giant, arguably well-deserved backlash from the community, who described PrestaShop 1.7 as "unfinished software".

Here's an example. Back in 2017, we announced that we had started [introducing Vue JS in the Back Office][vuejs], supported by a BO API, which would be used in the Stocks and Translations pages.

While I think this is the way of the future (no spoilers!), in hindsight, I believe that it was too early to introduce it in 1.7, and will probably have to be redone.

Don't start screaming at me just yet! Let me explain why.

First of all, if you take a glance at the [architecture overview][comprehensive-overview], you'll notice that there are two different stacks in the Back Office: the _Legacy stack_ and the _New stack_. The former is pretty much unchanged since 1.6, while the latter is essentially made out of Symfony controllers and Symfony forms, rendered with Twig. Two stacks, one that will progressively replace the other. Right? 

**Wrong.** If you look closer, you'll see that the _New stack_ actually has not one, but **two** implementations: the Symfony one that I described, and another one, based on VueJS and an API.

So, we don't have _two_ different ways of doing things, we have _three_. 

This is because the initial idea was that VueJS frontend and API backend was supposed to be the way the migration to Symfony should have continued starting on 1.7.3.0. But we chose to put that on hold and continue working with Symfony forms and Twig. Why?

Because of _customization_.

PrestaShop owes its success mainly to its ability to be [extended][extension-concepts] and customized. For this, developers rely on extension points that allow them to add behavior in specific points, as well as conventions that allow them to replace certain bits of the software by their own.

We think that this aspect wasn't thoroughly accounted for when designing the VueJS stack, as current extension methods do not work with VueJS pages. And of course they don't, because they behave in a drastically different way. This means that **there's no defined way to customize a VueJS page in PrestaShop right now**.

If we want to allow these pages to be customizable, we have to think about how, and provide a stable, clearly-defined way of doing it. That is a very long process that cannot be improvised in the middle of a major migration, so we have to go back to the drawing board and start over. In the meantime, we need to think about making those pages extensible again.

Consequently, our only option right now to make all three systems converge is to continue down the classic, Twig form-based path before switching to something else. This decision will make more sense once you read the next two articles in this series.

In the meantime, we will continue adding VueJS in the Back Office, but only as standalone components like the [live search engine results preview component][serp] that we added in the Product Page in 1.7.5.0.


### Duplicate systems

Many of the new systems in PrestaShop 1.7 don't replace the previous ones, but feature a new, semi-independent way of doing the same thing that coexists with the previous way—which is kept for backward compatibility. 

Having more than one way of doing a given thing is bad for many reasons. First, it introduces cognitive friction, because as a developer you have to think about in when you should use one or the other. Second, because a business logic or dependency change in one must be replicated in the other. And third, if they don't produce the same output or side-effects for some reason, then it might produce systemwide inconsistencies.

There are several examples of this in PrestaShop 1.7. One of them is the "Core–Adapter–Legacy" architecture. Let's explore four problems tied to this example:

**1. Shared responsibility**
	
As described in the previous article, in order to allow old code to progressively be replaced by new code, the Core namespace conventions prohibit developers from using legacy classes directly in Core classes. When developers need legacy functionality in a Core class, it needs to be wrapped in an Adapter class that can then be injected into the Core class.
	
**The problem:** Since all the Adapter does is wrap legacy features in a non-static class, we now have two classes that do the same: one in Adapter, one in legacy. Overall complexity has increased.

**2. Different implementations/side effects**

The idea behind Adapters is that they should eventually be replaced by Core code that reimplements the feature, allowing us to delete the legacy class later. However, some developers chose to partially reimplement some legacy features in Adapters, but introducing a _slightly_ different behavior.
	
**The problem:** Not only do we have two classes that do the same thing, but they do it in a _different_ way and produce _different_ side effects. Which one should we use, and when?

**3. Little or no added value**

Looking at the code, we can see that many hastily-made Adapters have been designed [as dumb bridges to legacy code][bad-example], even replicating method signatures and design flaws of their legacy counterparts. Some even have static methods!

**The problem:** Many adapters do not even add any value to legacy classes and exist only to comply with the "no use of legacy classes in new code".

**4. Hard dependencies**

To make matters worse, most Adapters do not even implement an [interface](https://www.php.net/manual/en/language.oop5.interfaces.php), which makes it impossible to replace them with Core reimplementations without modifying the dependent classes.

**The problem:** Most adapters are hard dependencies and cannot be replaced without changing the dependent code. 

**Bonus: No single source of truth**

And finally, there's the matter of Database access. Since most interactions with the database are performed through ObjectModels, and since ObjectModels are too difficult to reimplement with an Adapter (we want to get rid of them anyway), some developers reimplemented them using Doctrine.

**The problem:** Even models have been duplicated. Some of them _aren't even in the Adapter namespace_ and work in a _completely different way_... so there's no single source of truth anymore.

There are many other duplicate systems in 1.7:

- Symfony controllers vs Legacy controllers
- Twig vs Smarty
- Symfony translation system vs Legacy translation system
- New BO theme (based on Bootstrap 4) for Symfony pages vs legacy one (based on Bootstrap 3) for legacy pages

### Legacy layout

Contrary to what it might seem, Symfony-based BO pages are not fully independent from the legacy stack. In fact, not at all: whenever a Symfony controller is loaded, the whole legacy stack (including Smarty) is loaded as well. 

Why? Because the main page layout (top menu & sidebar) hasn't been migrated yet and is handled by the legacy stack. Therefore all the content generated by the Symfony controller is actually being rendered by a legacy controller called [LegacyLayout][legacy-layout] that wraps around it.

Having it done this way instead of the other way around (wrapping legacy controllers inside Symfony) means that as the migration progresses, complexity increases.

If you are interested in this topic, [join the discussion on GitHub][legacy-layout-issue].

### Translation system

PrestaShop 1.7 introduced the Symfony translator, which is used for all Core and Native modules (the ones bundled with PrestaShop). While the Symfony translator itself is better than the system it replaced, its integration into PrestaShop has some rough edges that need to be worked out:

1. The default translation catalogue (a collection of files containing all translatable wordings) is bundled with PrestaShop and frozen at the time of release. This means that even though existing wordings can receive new translations as needed, new wordings cannot be added until the following release is out. Once new wordings are added to the catalogue, existing PrestaShop shops must be updated to be able to use the newly added wordings.
2. The wordings of native modules are tied to a given PrestaShop version, because contrary to third-party modules (who are stuck with the legacy translation system), their default catalogues are bundled with PrestaShop itself. This means that a module update containing new wordings will be impossible to translate until the shop is updated to the next PrestaShop version.

We have already started improving this in PrestaShop 1.7.6, but there is still some way to go. In addition, having two translation systems working in parallel (the legacy one and the Symfony one) is very confusing for newcomers.

## Testing is very hard

![Testing is doubting][testing-is-doubting]{: style="height:400px"}
_Testing is doubting, by [CommitStrip](http://www.commitstrip.com/)_
{: .text-center }

This is one of the classic _consequences_ of complex, static, globally-stateful code. Since components are so tightly interweaved and depend on global states, putting the system in a state that allows testing a feature in an isolated and predictable way is really, really hard. In some cases, dependencies and hidden state can become extremely difficult and time-consuming to understand, especially when dealing with static in-memory cache (i.e. variables that maintain their value between calls to the same method on the same thread).

Unsurprisingly, hard-to-test code also leads to complex, hard-to-maintain test scripts.

Ideally, we should be able to classify tests into three types:

- **Unit** – Where a single, completely isolated class is tested at a time.
- **Integration** – Where a subsystem is tested in its entirety, with carefully selected dependencies replaced by test doubles.
- **E2E** – Where the system is tested in its entirety from a user standpoint, using browser automation.

Here's what we currently have:

- A mix of PhpUnit-based, unit/integration/survival tests, located in the `tests-legacy` folder (bound to be rewritten).
- PhpUnit-based Unit tests, located in `tests/Unit`.
- PhpUnit-based Integration tests, located in `tests/Integration`.
- [Behat](https://behat.org/en/latest/)-based Behavior tests, located in `tests/Integration/Behaviour`.
- Two stacks of End-to-end (E2E) tests, based on Mocha and Selenium:
	- An old one called "starter theme", located in the `tests/Selenium` folder that we are phasing out.
	- A more recent one in the `tests/E2E` folder.

We have been struggling with automated tests failing unexpectedly, not because the feature they tested had stopped working, but because of diverse, unrelated technical issues:

- Some unit tests aren't really unit (usually because they tested several classes at once).
- Many unit tests that aren't unit were also extremely hard to understand and maintain, because of all the boilerplate code needed to put the shop in the state we needed for testing.
- Some tests were producing side-effects that made other tests fail because of unexpected/inconsistent state (usually due to hidden data caching in legacy code).
- E2E tests fail randomly because of timeouts and/or issues with our task runner (Travis).

We believe that bugs are a natural side-effect of changing things, and that automated tests are the only way to be able to consistently move forward without breaking stuff... but for that, we need good-quality tests. Because of PrestaShop legacy architecture, these tests are really hard to write.

## Other problems

### Too many dependencies with external services

Have you ever tried installing or even running the PrestaShop BO locally on a slow connection? 

One of the main culprits for PrestaShop's sluggishness is its dependency on several external services, like the language packs repository, Addons marketplace, and such. Most requests to these services are performed synchronously by the back-end. This means that if the external request takes a long time, then the BO will take a long time to load as well. Worse, in some cases it might even timeout, rendering the BO unusable.

This is of course not acceptable, and [some measures are already being put in place][circuit-breaker] to improve performance in this respect.

### Obsolete dependencies

PrestaShop depends on several third-party pieces of software to function. The more obvious ones are PHP and MySQL. But it also requires lots of libraries, like Symfony, PhpUnit, jQuery, Bootstrap, and VueJS.

These pieces of software live a life of their own. Some get abandoned as their community gravitates to another tool, some get updated with new features, and some just receive bug fixes. Keeping up to date with dependencies is very important for several reasons, but mainly:

- It ensures getting security and bug fixes as well as performance improvements and new features.
- Given the choice, most developers will want to avoid working on older technologies.

However, it's not always easy to keep up _while ensuring backward compatibility_. For example, PrestaShop uses [Guzzle](http://guzzlephp.org/), a widely-used HTTP library. Currently, we are stuck on version 5 which is no longer maintained, and we cannot upgrade to v6 because it would be considered a breaking change.

Here's another example. Early 2016, during the development of the Classic theme (the default theme for PrestaShop 1.7), [the team chose to use Bootstrap 4][team-chose-bs4], even though it was still in [alpha stages at the time][bs4-alpha]. To my best understanding, they were hoping that the final version would be released in time for 1.7.0. 

As [Murphy's Law](https://en.wikipedia.org/wiki/Murphy%27s_law) dictates, this turned out to work out wrong. Not only Bootstrap 4 _didn't_ ship in time for 1.7.0 (which forced the Classic theme to be released based on Boostrap 4 alpha 5), but the Bootstrap team also decided to [introduce major layout changes][bs4-layout-changes] in alpha 6, _after PrestaShop 1.7.0 was released_. This effectively blocked the team from upgrading Bootstrap on the Classic theme, because that would break all their child themes (and there are lots of them)... so Classic is now stuck with an obsolete dependency that cannot be upgraded.

**Not all is lost though.** We have encouraged the development a community-driven project called [Classic-rocket][classic-rocket], which is an improved version of Classic built on top of the latest Bootstrap version. Thanks to this project, merchants can choose between backward compatibility and benefits from the latest Bootstrap version.

Regarding PHP compatibility, PrestaShop currently supports PHP versions 5.6 through 7.2. Support for older language versions means that PrestaShop cannot benefit from language features introduced in more recent versions. Moreover, PHP 5.6 is no longer maintained as of 2019, even for security fixes. Since most libraries have dropped support for obsolete PHP versions, PrestaShop cannot support newer PHP versions nor update those dependencies without dropping support for older PHP versions as well. This is why we announced recently that PrestaShop would [stop supporting obsolete PHP versions][eos-obsolete-php] starting on the upcoming 1.7.7.

On another note, as pointed out in the previous article, there are currently three jQuery versions coexisting in PrestaShop 1.7:

- jQuery 1.x in the legacy BO pages,
- jQuery 2.x in core.js,
- jQuery 3.x in the migrated BO pages and in the Classic theme.

For a long time we have been wary about upgrading older jQuery versions because of backward-incompatible changes. However, for the upcoming PrestaShop 1.7.7, we are upgrading all the outdated jQuery versions to the latest version in all stacks without introducing breaking changes, thanks to [jQuery migrate][jquery-migrate].

Finally, as mentioned earlier, another less-visible problem about using older language or library versions is that as the technical stack falls further and further behind the most recent, bleeding-edge, state-of-the-art technology, it becomes harder to find developers who are interested in working with it, and keep them in the ecosystem. Most developers (especially the better ones) enjoy learning new stuff and keeping up to date with the industry advances. If PrestaShop doesn't keep up, it risks being shunned by developers and becoming obsolete out of pure lack of interest.

### Inefficient module management system

Traditionally, PrestaShop modules have been distributed as self-contained packages. You just drop them in the modules directory and that's it. This works fine, but has some trade-offs:

1. Current module development conventions encourage a [single God class](https://en.wikipedia.org/wiki/God_object) that does everything.
2. Said class must not be namespaced.
3. Modules can use dependencies via Composer, but risk collisions with PrestaShop or other modules if they use different versions of the same library.
4. Modules cannot declare their compatibility (or requirement dependency) with other modules.

In PrestaShop 1.7, we started using [Composer][composer] to manage the libraries on which PrestaShop depends as well as the list of "native" modules that are bundled with it. Composer is great for that: it allows us to lock the required module versions so that newer, maybe-incompatible versions aren't accidentally installed during the build process, dependencies shared between modules and PrestaShop are installed only once, there's no risk of library incompatibility, and there's no building or packaging needed to distribute the modules. Cool!

Except most modules aren't distributed this way. Most modules are distributed through the Addons marketplace as self-contained packages. Even native module updates are distributed this way, because PrestaShop only knows how to update modules in production using self-contained packages.

We are thinking of changing everything to Composer, but it involves several technical challenges. One of them is the fact that Composer requires very large amounts of RAM to run an update (around 1-2 GB) and is therefore unsuitable to run in most server configurations.

### No specification

A huge challenge when developing PrestaShop is that no formal, written specification record has been kept. This means that the way PrestaShop is _supposed_ to work resides mainly in the brain of a small group of very experienced people who have been working with PrestaShop for years.

Some people insist that written specifications are not needed, because "the code is the specification". According to their logic, if you need to know how a feature works, you just look at the source code and that's it. I have heard this fallacy multiple times in my career, and my conclusion is that these are the same people who also like saying "there are no bugs, just undocumented features".

Because once a bug appears, and specially when it's a consequence of two contradicting pieces of code, things get uncomfortable—if code _is_ the specification, which part is right and which part is a bug?

In a project as complex as PrestaShop, it's vital that all expected behavior is well-documented. Otherwise, inconsistencies will keep creeping up again and again.

This is why this year we started the [PrestaShop Specs Project][prestashop-specs], which aims at documenting the expected behavior of PrestaShop, so that whenever anyone is in doubt regarding how a specific part is _supposed_ to work, it will be written down somewhere. This is a huge project and most of the work is to be done, so the Product team is currently focusing on recording important decisions, tricky or unintuitive behavior, and new features first.



#### Poor documentation

Back in 2017 when I joined PrestaShop, I was surprised to learn how little technical documentation there was. It was hard getting around the code with so many things to learn and so little sources of knowledge. At that time, documentation was hosted in a Confluence server and was 100% written by PrestaShop employees. There was little to no information for 1.7. There were some articles for 1.6, but many of them were outdated and didn't apply for 1.7 code anyway. If learning how PrestaShop works is already hard as it is even when you have some teammates around you to help you, how on Earth could we expect the community to adopt and contribute to 1.7 with no documentation?

For that reason, last year we launched the [DevDocs Project][devdocs], which contains the technical documentation of PrestaShop 1.7. It's [hosted on GitHub][devdocs-gh] so that anyone can contribute. At the time of writing, this doc already has about 200 articles written by over 60 contributors. However, there are still many subjects that [remain to be documented][devdocs-issues].

## Final words

"This has been a very difficult article to write". That's my poor attempt of an excuse for having taken 6 months to put it out the door, and I sincerely apologize for that.
 
This piece isn't meant to be a "character destruction" for PrestaShop 1.7—quite the opposite. After all, I work for PrestaShop and I'm writing on the official blog, so I'm a little biased. But perfect, pristine, legacy-less software doesn't exist, and it's no news that PrestaShop is not the exception. I think that in the spirit of an open source project, and especially one that aims to become _more_ open, it's important be honest and to tell things as they are. Be proud of our strengths, yes, but also, and above all, acknowledge the things that need improving. Above all, _knowing_ yourself and your weakness is the first step towards doing something meaningful about it.

And that's precisely what we mean to do.

In the next part, things will get more interesting: we'll discuss our long-term vision for PrestaShop's **Future Architecture**, and how it will address many of the problems that we currently face.

---

### About the series

In case you forgot, here are the topics that will be covered during this series:

1. [The Current Architecture][part-1] (or _"Point A – Where we are"_)
2. Pain Points (or _"What needs to be improved"_)
3. [The Future Architecture (or _"Point B – Where we are going"_)](/news/prestashop-in-2019-and-beyond-part-3-the-future-architecture/)
4. [Connecting the dots][part-4] (or _"Some ideas on how we'll get there"_)

[introduction]: /news/prestashop-in-2019-and-beyond-introduction/
[part-1]: /news/prestashop-in-2019-and-beyond-part-1-current-architecture/
[addons]: https://addons.prestashop.com
[legacy-layout]: https://github.com/PrestaShop/PrestaShop/blob/1.7.6.0/controllers/admin/AdminLegacyLayoutController.php
[legacy-layout-issue]: https://github.com/PrestaShop/PrestaShop/issues/12925
[testing-is-doubting]: /assets/images/2019/09/tester-cest-douter.jpg
[behat]: https://github.com/PrestaShop/PrestaShop/pull/12634
[puppeteer]: https://developers.google.com/web/tools/puppeteer/
[semver-article]: /news/a-more-semantic-versioning-scheme/
[comprehensive-overview]: /assets/images/2019/02/architecture-comprehensive-overview-current.jpg
[sf-upgrade]: /news/prestashop-1-7-is-moving-to-symfony-3-4-and-php-5-6/
[overrides-system]: https://devdocs.prestashop.com/1.7/modules/concepts/overrides/
[legacy-controllers]: https://devdocs.prestashop.com/1.7/development/architecture/legacy/legacy-controllers/
[bad-example]: https://github.com/PrestaShop/PrestaShop/blob/95683248751795b1e927445d57abaf45708fea09/src/Adapter/Attribute/AttributeDataProvider.php
[vuejs]: /news/introducing-vuejs-symfony-api/
[extension-concepts]: https://devdocs.prestashop.com/1.7/modules/concepts/
[serp]: /news/prestashop-1-7-5-0-available/#product-page
[team-chose-bs4]: /news/new-theme-1-7-introduction/
[bs4-alpha]: https://blog.getbootstrap.com/2015/12/08/bootstrap-4-alpha-2/
[bs4-layout-changes]: https://blog.getbootstrap.com/2017/01/06/bootstrap-4-alpha-6/
[classic-rocket]: https://github.com/PrestaShop/classic-rocket
[jquery-migrate]: https://github.com/jquery/jquery-migrate
[eos-obsolete-php]: /news/announcing-end-of-support-for-obsolete-php-versions/
[composer]: https://getcomposer.org/
[prestashop-specs]: https://github.com/PrestaShop/prestashop-specs
[devdocs]: https://devdocs.prestashop.com/
[devdocs-gh]: https://github.com/PrestaShop/docs/
[devdocs-issues]: https://github.com/PrestaShop/docs/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
[circuit-breaker]: /news/resilient-php-applications/
[part-4]: /news/from-legacy-to-future-architecture-connecting-the-dots/
