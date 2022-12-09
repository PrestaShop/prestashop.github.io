---
layout: post
slug: "introducing-horizontal-migration"
title: An update on the Symfony migration
subtitle: What's next?
date: 2022-07-04
authors: [MathieuFerment, PabloBorowicz]
icon: icon-road
tags: [news, symfony, migration]
---

In December 2015, a groundbreaking change in PrestaShop was announced: the [introduction of the Symfony framework](/news/prestashop-1-7-and-symfony/) into the CMS. The goal was to gradually replace PrestaShop’s custom framework with Symfony, and switch its templating system from Smarty to Twig. This project was known as “The Symfony migration”. Looking back, we realize that referring to this project as a "migration" wasn't really accurate at all.

Currently, _migrating_ one page to Symfony involves several steps:

- Analyze the page's features and its business logic, then specify any unclear or ambiguous behavior
- Create a new Symfony controller, identify the different "actions" and set them up (routing, access control...)
- Reimplement the page's original behavior using modern components (Grid, Symfony forms, Twig, [CQRS](https://devdocs.prestashop.com/1.7/development/architecture/migration-guide/strategy/#phase-3-cqrscqrs)...)
- Implement any feature required in order to reproduce the original behavior using the new components (Twig layouts, form theme, js...)
- Implement adapters for any legacy component used in the original controller (as required by the [architecture rules](/releases/new-architecture-1-6-1-0/) established in 2015)
- Fix old bugs discovered while reimplementing the old features, or reimagine the existing features to improve them
- Add automated tests
- Remove the old controller and rerouting it to the new controller

That's a lot of steps, right? 

To us, this shows that the _migration_ process isn't really just about changing the underlying framework or a few components. It's much more than that: **it's a full-on refactoring.**

At the time of writing, over 90 back office pages have been _refactored_ using the process above. It's a thorough process and we are proud of how it has contributed to increasing PrestaShop's overall software quality in the recent years. However, it has its downsides.

Migrating a page this way is slow and requires a major effort. It basically amounts to building the page again – a _better_ version of it. With several dozen modified files, refactoring a typical page takes several weeks of development, and months of review and refinement. There are still 50 pages left to migrate in the back office. That's _years'_ worth of work! 

In the meantime, PrestaShop's architecture has become heterogeneous. Although the pages migrated to Symfony benefit from all the modern concepts built over the years, a third of the back office pages remain largely identical to what they were in PrestaShop 1.6 – not to mention the whole front office and the Web service API. 

This means developers have to deal with some parts of the software working in a certain way and others working completely differently. As mentioned in previous articles, this is problematic: having more than one way of performing the same action carries a higher risk of bugs, lower performance, increased maintenance work, and a steeper learning curve for people new to the platform.

Moreover, every bit of the legacy framework must be preserved until the migration has been fully completed. Even if in a few years only a single page that few people use was left to migrate, everything it relies on, Dispatcher, ObjectModel, Smarty, Helpers... the entire legacy stack must remain in place, alive and maintained.

Of course, in time, the migration will be finished, we will be able to remove any remaining legacy components, and reduce the platform's complexity. But as the saying goes, "in the long-term, we will all be dead". PrestaShop's attractiveness as a platform is at risk if we don't accelerate the migration.

**We need a better strategy.** How can we accelerate the transition to Symfony, increase the platform's homogeneity, and phase out legacy components faster?

## Thinking outside the box

Let's analyze our current strategy. Migrating a page takes a list of known steps. Currently, we perform all those steps on a single page, then move on to the next page, and so on. 

What if we focused on delivering a single step at a time, progressively across all pages? 

Take the controller part, for example. At its root, a Symfony controller takes a `Request` and provides a `Response`, that's all. How the request is processed in order to build that response has no impact on the nature of the controller. Who says a Symfony controller must use Twig? Or Grid? Or Symfony forms, for that matter? Theoretically, it should be possible to take the content of the legacy controller and paste it into a Symfony controller. As long as the original code is rearranged into actions, and we get a response, it doesn't matter if the output is built using Smarty helpers: HTML is HTML.

Following that logic, we could say that the first step to migrating a controller is "transforming" it into a Symfony controller. Strictly speaking, this requires minimal changes to the original code. It might not be pretty, but it provides all the benefits of a full-fledged Symfony controller (routing, kernel events, debug features, translator, container, etc) – for a very low price.

Migrating a page using this "shortcut" should take fewer modifications compared to the traditional way. This means less developer effort (making it easier for contributors to participate), less effort to review and, hopefully, less effort to verify. If we did this to all remaining controllers, we could have 100% of the back office running on Symfony controllers much sooner than if we performed all the refactoring steps to each of them as we do now. This would allow us to phase out Dispatcher, Link, AdminController, and other legacy components much faster.

Now, rest assured, this wouldn't mean abandoning Twig, Grid, Symfony forms, and CQRS – quite the opposite. Once all controllers had been running on Symfony, we could start the second step: removing Smarty in favor of Twig. If we managed to make HelperList and HelperForm work using Twig, we could easily phase out Smarty. This would simply require refactoring the helpers (in which case we wouldn't need to change any of the controllers), or creating new components that follow the same signature as the old helpers (which would require minimal changes to the controllers). Again, this could be applied everywhere, allowing us to phase out Smarty, the legacy back office theme, and the legacy layout that wraps Symfony Twig pages.

After that, we could go on to phase out HelperLists in favor of Grids, then HelperForms in favor of Symfony forms and CQRS. And then, the migration of the back office would be complete.

We call this approach “horizontal migration”, because it focuses on replacing one layer of legacy components with its modern equivalent across all pages before moving on to the next layer. In contrast, we call our current approach "vertical migration", because it focuses on migrating all layers of a page at once. The end result is the same: full migration to Symfony. It's the path to get there that changes.

## What's next?

We think the horizontal approach provides two major benefits compared to our current approach:
- A quicker reduction of the system's overall complexity, because legacy components can be sunset as soon as they are no longer needed, instead of having to wait until the whole migration has been completed.
- A gentler learning curve for PrestaShop developers not familiar with Symfony, who will be able to use HelperList and HelperForm in Symfony controllers.

The main downside of the horizontal approach is that lists and forms need to be migrated twice: once with helpers, then again using the newer components. However, we think its benefits are worth the effort.

The horizontal approach has been [recently approved](https://github.com/PrestaShop/ADR/pull/26) by maintainers, and the [first example of a listing page migrated using HelperList](https://github.com/PrestaShop/PrestaShop/pull/27246) has been merged. This means that this should be the main approach to migration from now on.

The vertical approach is not completely abandoned, though: it might still be used in pages where the horizontal approach would not make tactical sense, either because the page is too simple to benefit from the advantages of horizontal migration, or because it requires extensive refactoring (for example, the product page).

## Tell us what you think!

The horizontal migration is an idea we are actively experimenting with, but our understanding of its impact is limited by our knowledge of PrestaShop's ecosystem. If you have any questions, ideas or suggestions about this subject, please share them in the comments below, or come [chat with us on Slack](https://www.prestashop-project.org/slack/).
