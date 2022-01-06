---
layout: post
title: Introducing horizontal migration
subtitle: Announcing a new step in the migration to Symfony
date: 2022-01-06
authors: [MathieuFerment]
icon: icon-road
tags: [news, symfony, migration]
---

Looking back at the work carried out on the Symfony migration over the last years, we are now considering another approach.

## Symfony migration, years 2016 to 2021

If you remember well, in 2015, the maintainer team [decided to bring a massive change into PrestaShop](https://build.prestashop.com/news/prestashop-1-7-and-symfony/): the introduction of the Symfony framework into the CMS. The project was titled “The Symfony migration” and its objective was to eventually replace PrestaShop’s in-house web framework with Symfony.

Calling this project a migration would not be totally accurate though. This is because until 1.6, PrestaShop had been built using a custom framework, and most of the application’s business logic was very tightly coupled with the framework itself. In order to migrate the framework layer to Symfony, it became necessary to also rewrite the code coupled to it. As a consequence, migrating a back-office page from PrestaShop legacy framework to Symfony is actually a two-steps process:
- Migrating the framework layer for this page: routing, security...
- Refactoring the business logic to fit with the new architecture: rebuilding forms using Symfony form component, rebuilding views with Twig...

If we have a deeper look at the above, we can actually split the work into these milestones:

- Analyze back-office page in order to write down all of its behavior and logic
- Create a new Symfony page and configure it (routing, security...)
- Implement the behaviors using modern components: Grid component, Symfony forms, Twig, the modern layout, [CQRS](https://devdocs.prestashop.com/1.7/development/architecture/migration-guide/strategy/#phase-3-cqrscqrs)...
- Then come an exploration of QA analysts that aim to validate the new Symfony page can replace the legacy page
- Finally we plug a few bridge component that redirect and preserve other components of the software connected to legacy page to the new page
- Following previous step, the legacy page has been successfully replaced by its Symfony heir.

You can read more about it on the [developer documentation](https://devdocs.prestashop.com/1.7/development/architecture/migration-guide/strategy/).

The above process has been applied to 90 back-office pages, page after page. We picked a back-office page, we migrated it to Symfony, we also used this opportunity to bring many improvements such as bug fixes, enhancements, we also added automated tests and documented it. Then we moved on to the next page. And we repeated.

At the time of writing, 90 back-office pages have been migrated. 50 pages remain powered by the legacy framework. These numbers though do not represent accurately the amount of work needed to complete the project because back-office pages are not equally complex.

## A two-faces back-office, between past and future

While we are proud of the work we achieved, we do acknowledge the situation is far from ideal.

While the 90 pages migrated to Symfony benefit from all the modern concepts we have built over the years, the 50 pages not migrated yet remain fully untouched. The code of these legacy back-office pages is almost identical between PrestaShop 1.7 and PrestaShop 1.6 .

So we have a split back-office, stuck between a far past and the future.

A split back-office means an heterogeneous architecture, and this is never a good thing. It means more work for the maintainer team, it means more concepts to master for module developers, it means multiple ways of doing things - for example we do have Twig and Smarty, two rendering engines, used in the software although they hold the same role.

Moreover until every back-office page has been migrated to Symfony, we have to preserve every bit of the legacy framework as some back-office pages still rely on them. Maybe in 2024 there will be only 5 back-office pages left to be migrated while the other hundred will be Symfony back-office pages, and yet, since these 5 pages will rely on ObjectModel, and Smarty, and the legacy framework, we will have to keep the full legacy stack on the back-office, alive and maintained.

That situation will end eventually, once the back-office is completely migrated. Unfortunately after all these years, what we also learnt is how gigantic this project is. Following our current rhythm, and given that some of the most complex back-office pages are still to be migrated, we can expect the Symfony migration to continue for a few years before we can look at a fully migrated PrestaShop back-office. And don’t forget the end goal is for PrestaShop to become a full Symfony application! This means the Front-office and the Webservice have to be migrated too.

We now look for a new way to migrate the back-office that would allow us to bring improvements and modernisation to all of the back-office together, rather than page per page, resulting in a more homogenous architecture.

## Introducing the horizontal migration

Instead of choosing one back-office page and applying the full migration process, switching the view from Smarty to twig, switching listings from HelperList to Grid, switching forms from HelperForm to Symfony forms… we could rather apply one of these changes globally, at once, in all back-office pages.

For example tomorrow we could decide to replace all back-office Smarty views by Twig views, while leaving untouched the rest of the code.
Or we could decide to replace all back-office HelperForms by Grids, while leaving intact all of the code around.

This approach, which is to replace a legacy component by a modern component at once, globally in the software, has two clear benefits:
- Just after it’s done we can sunset the legacy component, decreasing the maintenance burden of having to keep it running
- We have a single component that addresses a need, instead of having two which coexist, one modern and one legacy

We have titled this approach “the horizontal migration” while the previous process we have followed for years has been titled “vertical migration”.

## The horizontal migration scope and plan

This is a quite recent idea and we are still in the process of exploring the obstacles, the challenges and the consequences of this approach.

But we can already tell you what we hope will happen.

Given that we successfully find a reliable way to perform this approach globally, we aim to perform 2 first steps of horizontal migration:

1. We want to replace all back-office controllers by Symfony controllers. In other words, we want the admin/controller/AdminController not used anymore by the Core.

If every back-office controller is a Symfony controller, this allows module developers to benefit from Symfony built-in features everywhere in the back-office and to be able to plug themselves on a single modern stack.

2. Following this step, we could deprecate the admin/controller/AdminController class, leave it there to allow module developers to stop relying on it and leave it behind in a future major version. 
We want to replace all back-office Smarty views by Twig views.

This would give the back-office view layer homogeneity, and if we are to be honest, Twig has surpassed Smarty from a long time as a templating engine.

Similarly to admin/controller/AdminController, Smarty would remain deprecated but available in the back-office for a little longer in order to allow module developers to release new versions of their applications that do not depend on Smarty, allowing smoother upgrades.

## What do you think?

The horizontal migration is an idea we are actively exploring, but our understanding of its impact is limited by our knowledge of the PrestaShop ecosystem. We would be happy to hear your ideas, worries, suggestions or warnings about this direction in the comment or [on Slack](https://www.prestashop-project.org/slack/).
