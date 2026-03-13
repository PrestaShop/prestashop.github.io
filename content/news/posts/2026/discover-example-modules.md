---
layout: post
title: "Discover the PrestaShop example modules repository"
subtitle: "A hands-on library of working code examples to help you understand how PrestaShop module development really works."
date: 2026-03-13
authors: [ kpodemski ]
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
icon: icon-puzzle
tags:
 - module
 - tutorial
 - development
---

If you've ever read through the [PrestaShop developer documentation](https://devdocs.prestashop-project.org/) and thought "this makes sense in theory, but I wish I could see it working in a real module": the [example-modules repository](https://github.com/PrestaShop/example-modules) is exactly what you're looking for.

Maintained by the PrestaShop project, this repository contains over 20 small, focused modules, each built to demonstrate a specific feature or technique. They're not production modules, and they don't try to do everything at once. Each one has a clear purpose: show you how a particular pattern is implemented in practice.

## Learning by reading code

The developer documentation does a solid job of explaining concepts. But there's a gap between reading how something works and knowing what the actual files should look like, how they fit together, and what pitfalls to watch for. Example modules bridge that gap.

Because they're real, installable modules, you can install them on a test PrestaShop instance, explore what they produce in the back office, and then trace that back to the source code. That loop (behavior to code to understanding) is often the fastest way to build solid knowledge.

{{% notice type="note" title="A note on the examples" %}}
The example modules cover a wide range of techniques, and they were written at different points in time by different contributors. Some of them approach the same problem in slightly different ways. Some use patterns that were standard at the time but may have since been refined.

Rather than treating any single module as a definitive template for your production code, treat the repository as a learning space: a set of working references to help you understand the options available, the APIs you can use, and how the framework behaves. Once you understand the examples, the documentation and your own judgment will guide you toward the most appropriate approach for your specific case.
{{% /notice %}}

## What's in the repository

The modules are organized loosely by topic. Here's a tour of what you'll find.

### Configuration pages and basic forms

The best place to start is **[demosymfonyformsimple](https://github.com/PrestaShop/example-modules/tree/master/demosymfonyformsimple)**, which shows you how to create a simple module configuration page using Symfony form types. If you've ever needed a settings page in a module, this is the reference to start from. Its companion, **[demosymfonyform](https://github.com/PrestaShop/example-modules/tree/master/demosymfonyform)**, goes further, showing how to reuse PrestaShop's own Symfony form types on a custom admin page.

Both modules are a practical complement to the [Forms](https://devdocs.prestashop-project.org/9/development/components/form/) section of the developer documentation.

![demosymfonyform in action](https://raw.githubusercontent.com/PrestaShop/example-modules/master/demosymfonyform/demosymfonyform-screenshot.png)

### Grids: listing data in the back office

PrestaShop's grid system is one of the most powerful tools available for displaying tabular data in the back office, and it comes with a learning curve. **[demo_grid](https://github.com/PrestaShop/example-modules/tree/master/demo_grid)** walks you through building a grid from scratch: defining columns, row actions, bulk actions, filters, and search. Once you understand the base structure, **[demoextendgrid](https://github.com/PrestaShop/example-modules/tree/master/demoextendgrid)** shows how to inject new row actions into an existing PrestaShop grid using hooks, without modifying the core.

The [Grid component documentation](https://devdocs.prestashop-project.org/9/development/components/grid/) is the natural companion to these modules.

![demo_grid in action](https://raw.githubusercontent.com/PrestaShop/example-modules/master/demo_grid/demo_grid_screenshot.png)

### Extending Symfony forms with hooks

Three modules are dedicated to extending existing PrestaShop forms, each tackling the problem from a different angle.

**[demoextendsymfonyform1](https://github.com/PrestaShop/example-modules/tree/master/demoextendsymfonyform1)** demonstrates how to add fields to an existing identifiable object form (the Customer form, in this case) and connect it to grid hooks. **[demoextendsymfonyform2](https://github.com/PrestaShop/example-modules/tree/master/demoextendsymfonyform2)** takes this further by showing how to handle image uploads in such a form, using DoctrineORM to persist the data. **[demoextendsymfonyform3](https://github.com/PrestaShop/example-modules/tree/master/demoextendsymfonyform3)** then introduces the CQRS pattern into this workflow, showing how hooks can interact with command and query objects.

Reading all three together gives you a progressive understanding of how form extension works at increasing levels of complexity. The [Hooks](https://devdocs.prestashop-project.org/9/modules/concepts/hooks/) and [CQRS](https://devdocs.prestashop-project.org/9/development/architecture/domain/cqrs/) documentation pages are worth keeping open alongside.

![demoextendsymfonyform1: extra field added to the Customer form](https://raw.githubusercontent.com/PrestaShop/example-modules/master/demoextendsymfonyform1/demo_form.png)

![demoextendsymfonyform1: extra column in the Customers grid](https://raw.githubusercontent.com/PrestaShop/example-modules/master/demoextendsymfonyform1/demo_list.png)

For multistore setups, **[demomultistoreform](https://github.com/PrestaShop/example-modules/tree/master/demomultistoreform)** shows how to create a CRUD page with proper multistore awareness built in, which is a genuinely tricky area to get right.

The **[demoformdataproviders](https://github.com/PrestaShop/example-modules/tree/master/demoformdataproviders)** module demonstrates the `FormDataProviderData` and `FormDataProviderDefaultData` hooks, which allow modules to inject or modify form data before a form is displayed.

### Controllers and admin tabs

**[democontrollertabs](https://github.com/PrestaShop/example-modules/tree/master/democontrollertabs)** is a focused example of creating modern Symfony-based admin controllers and associating them with tabs in the back office navigation. If you're building a new admin section for your module and want to follow the modern approach rather than legacy controllers, this is the right reference.

The module pairs well with the [Tabs](https://devdocs.prestashop-project.org/9/modules/concepts/controllers/admin-controllers/tabs/) & [Admin Controllers](https://devdocs.prestashop-project.org/9/modules/concepts/controllers/admin-controllers/) documentation.

![democontrollertabs: module tab registered in the back office navigation](https://raw.githubusercontent.com/PrestaShop/example-modules/master/democontrollertabs/democontrollertabs-screenshot.png)

### Database: Doctrine and ObjectModel

PrestaShop supports two approaches to working with the database: the legacy ObjectModel system and Doctrine ORM. Both have their place.

**[demodoctrine](https://github.com/PrestaShop/example-modules/tree/master/demodoctrine)** demonstrates how to define a Doctrine entity inside a module and interact with it using repositories. **[demooverrideobjectmodel](https://github.com/PrestaShop/example-modules/tree/master/demooverrideobjectmodel)** shows how to extend an existing PrestaShop ObjectModel to add custom database fields. It's worth knowing this technique exists, but it is generally not recommended for production modules, as ObjectModel overrides can conflict with other modules and make upgrades fragile. If you need to store extra data alongside core entities, a separate Doctrine entity with a foreign key is the safer approach.

**[demowsextend](https://github.com/PrestaShop/example-modules/tree/master/demowsextend)** shows how to expose module data through the PrestaShop WebService API by registering an ObjectModel as a new API resource. This is useful for integrations that rely on the REST API.

### Hooks on product and order pages

Two modules cover one of the most common module use cases: adding custom content or behavior to the product and order pages.

**[demoproductextracontent](https://github.com/PrestaShop/example-modules/tree/master/demoproductextracontent)** adds extra content to the front office product page using hooks. **[demoproductform](https://github.com/PrestaShop/example-modules/tree/master/demoproductform)** explores the product form extendability options in the back office, showing how modules can add custom fields to the product editor. And **[demovieworderhooks](https://github.com/PrestaShop/example-modules/tree/master/demovieworderhooks)** catalogs the hooks available on the order detail view page, which is useful when you need to inject content into the order management interface.

### Templates and the JS router

**[demoextendtemplates](https://github.com/PrestaShop/example-modules/tree/master/demoextendtemplates)** demonstrates how to extend or override Twig templates used in the back office, which is how modules can modify the appearance of existing pages without touching the core files.

**[demojsrouting](https://github.com/PrestaShop/example-modules/tree/master/demojsrouting)** shows how to use the JavaScript Router component that PrestaShop provides, allowing your front-end JavaScript to call back-end routes by name rather than hardcoding URLs.

### Modern infrastructure: API, console commands, and routing

**[api_module](https://github.com/PrestaShop/example-modules/tree/master/api_module)** covers the modern Admin API (built on API Platform), showing how modules can extend it with new endpoints. This is particularly relevant for PrestaShop 9.0+ projects that rely on API-driven integrations.

**[democonsolecommand](https://github.com/PrestaShop/example-modules/tree/master/democonsolecommand)** demonstrates how to register a Symfony console command inside a module, which is useful for maintenance scripts, data migration, and scheduled tasks.

**[demomoduleroutes](https://github.com/PrestaShop/example-modules/tree/master/demomoduleroutes)** shows how modules can register custom front office routes using the `moduleRoutes` hook, giving them clean URLs.

### Email themes

**[example_module_mailtheme](https://github.com/PrestaShop/example-modules/tree/master/example_module_mailtheme)** demonstrates how to add a custom mail theme to PrestaShop, including how to structure the templates and hook into the theme system.

### Filtering modules

**[demofiltermodules](https://github.com/PrestaShop/example-modules/tree/master/demofiltermodules)** shows how to prevent specific modules from being executed by filtering them out by name. The practical use case is cookie consent and privacy compliance: if you're building a module that manages user consent, you can use this technique to block tracking or analytics modules from injecting their code until the visitor has explicitly agreed.

## Where to go next

The example modules work best alongside the official documentation. The [Module concepts](https://devdocs.prestashop-project.org/9/modules/concepts/) section is the most relevant starting point, covering hooks, controllers, services, and more.

If you want to go deeper on the architecture patterns used by the core, the [Domain layer and CQRS](https://devdocs.prestashop-project.org/9/development/architecture/domain/cqrs/) documentation explains the approach that several of the more advanced example modules are built around.

All modules are available in the [PrestaShop/example-modules](https://github.com/PrestaShop/example-modules) repository under the AFL-3.0 license, and they are compatible with the upcoming PrestaShop 9.1. If you're preparing modules for the new release, the examples are a great way to get familiar with the APIs and patterns that 9.1 builds on. If you spot something outdated, have a question, or want to contribute an example of your own, the repository welcomes issues and pull requests.

Happy coding.

---

Is there a pattern or use case you'd like to see covered by a new example module? Or do you have a question about one of the existing ones? Let us know in the comments below.
