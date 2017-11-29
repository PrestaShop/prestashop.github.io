---
layout: post
title:  "Make modules on Back Office great again!"
subtitle: "What is coming on 1.7.3 for module developers"
date:   2017-11-29 09:10:11
authors: [ mickaelandrieu ]
icon: icon-blaster
tags:
 - 1.7
 - 1.7.3.x
---

Since the release of 1.7.0, we are working hard on improving the way developers can customize and enhancing the quality of PrestaShop.

An extra theme system has been integrated that introduces new helpers, widgets and inheritance scheme between templates. It's now easier for everyone to create new themes with PrestaShop, especially for those who are more designers than developers.

We have also started the migration of the back office with the framework Symfony 2, first with the Product and Modules pages and then with the Translation and Stock Management pages. Now we are migrating the pages related to the Advanced Parameters section. We are doing it for many reasons but, to sum up, we want to focus on our core business, what we do the best: providing features to merchants. Indeed, working on a professional, fully tested and documented framework is great for PrestaShop developers, our core team included.

But that is not all, the main reason is to allow the PrestaShop developers to use the Symfony ecosystem to make better, more powerful and maintainable modules while being able to evolve with the last features of PHP.

### Current situation of Back Office modules (pre 1.7.3)

In the modern pages (migrated to Symfony 2) of the back office, PrestaShop developers can go on using hooks as usual. But the difference is that they are not allowed to override templates, forms or data returned by the controllers.

In Product page, a specific hook called `hookDisplayAdminProductsExtra` can display all modules into a specific tab and we have added some hooks at bottom, middle and top positions of each tab. However, it's not easy to hook at a specific position into the forms to add or re-order fields, buttons or blocks of information.

Reviewing the actual hooks made us realize that they are not located at the right place (considering the new UX of this page) and that some of them are missing if we want to make basic additions. Like adding buttons to the menu.

![PrestaShop Hooks on Product Page](/assets/images/2017/11/product_page_hooks.png)

Finally, and like in 1.6, it's still really difficult to know when, where and if a hook has been called, how many times and what are the modules hooked.

### PrestaShop 1.7.3, the module experience re-invented

The first new feature we would like to acquaint you with is the hooks debugger. Migrated pages of the back office all grant access to the PrestaShop debug toolbar, now enriched with a "Hooks" section.

![PrestaShop Hooks Debugger section](/assets/images/2017/11/hooks_debugger_section.png)

At first look, in every modern page you can know which and how many times hooks have been called. If you access the section panel, you have access to many additional information:

* modules and hooks arguments
* called and uncalled (but available) hooks
* which modules react to hooks (the order is respected)

![PrestaShop Hooks Debugger](/assets/images/2017/11/hooks_debugger.png)

It allows PrestaShop developers not only to pick the right hook but also to understand behaviors in case a specific hook would not fulfill its function. Now we can spot the guilty one without having to enable/disable each module.

So we have introduced two hooks in the Product Catalog page in order to ease contributions on menus::

* `displayDashboardToolbarTopMenu` to add a new action to the top menu
* `displayDashboardToolbarIcons` to add new icons to the Dashboard block (will be available in every Dashboard modern pages)

![New Hooks](/assets/images/2017/11/new_hooks.png)

One more feature in PrestaShop 1.7.3: we have introduced a system called **"modules as bundle"** which lets the overrides of templates, services (classes), commands, forms, etc. used in the modern pages in your modules. We are still documenting this new system now but we can already tell you it will work the same way as it does with the front office theme templates.

### PrestaShop 1.7.4 and beyond?

PrestaShop 1.7.4 will use Symfony 3, therefore PHP 5.6 (or above) is required. Indeed, for security reason, we have decided to stop keeping up unmaintained PHP versions, so it is time to upgrade it - ideally to the latest version which is 7.1 at the moment.

Moreover, there will be no broken compatibility in the PrestaShop (source?) code between version 1.7.3 and future 1.7.4. And Symfony 3 allows all the developers to work with a PHP framework maintained until at least 2022.

We will keep on the back office migration to Symfony as we want to finish the Advanced Parameters section and improve our UI Kit. All the more since Bootstrap 4 is close to its stable release. We will also carry on with the amelioration of the module developer experience. For instance, we are already able to [display more information](https://github.com/PrestaShop/PrestaShop/pull/8557) about modules and hooks or in [our current templates](https://github.com/PrestaShop/PrestaShop/pull/8489) to simplify overriding.

We are also working on new [form helpers](https://github.com/PrestaShop/PrestaShop/pull/8368) so that developers can use better the forms available in the modern pages. Like they were able to do in PrestaShop 1.6.

And many, many others new features, stay tuned!