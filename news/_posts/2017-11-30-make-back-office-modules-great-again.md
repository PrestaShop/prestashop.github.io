---
layout: post
title:  "Make modules on Back Office great again!"
subtitle: "What is coming on 1.7.3 for module developers"
date:   2017-11-30 09:10:11
authors: [ mickaelandrieu ]
icon: icon-blaster
tags:
 - 1.7
 - 1.7.2.x
---

Since the release of 1.7.0, we are working hard on improving the way the PrestaShop developers can customize and improve shops for their customers.

We have released a new theme system, introducing new helpers, widgets and inheritance system between templates: in the end it's now easier for everyone to make new themes with PrestaShop, specially for whom who are more designers than developers.

We have started the migration of Back Office with the framework Symfony 2, first with Product and Module pages, then the Translation, Stock Management pages and we are actually migrating pages of Advanced Parameters section. We do it for so many reasons but to sum up, we want to focus as what we are the best: providing features for the e-merchants. Be able to Work on top of a professional, fully tested and documented framework is good for PrestaShop developers, Core team included.

But it was not the main reason. The main reason is allowing every PrestaShop developer to use the Symfony ecosystem to make better, powerful and maintainable modules, to be able to evolve with the last features of PHP ecosystem.

### Current situation of Back Office modules (pre 1.7.3)

In Back Office, for the modern pages (migrated to Symfony 2), PrestaShop developers can still use Hooks like in the old ways. But they are not allowed to override templates, forms or data returned by the controllers. This is forbidden by design, because we are removing the old `override` system.

In Product page, we have introduced a specific a specific hook called `hookDisplayAdminProductsExtra` to display modules in a specific tab, but it's really painful to hook into the forms to add new fields, new buttons or new blocks of information.

Reviewing the actual hooks, they are not located wisely regarding the new UX of this page and some hooks are missing to make basic additions (like adding new buttons to menus for instance).

Finally, and like in 1.6, it's still really difficult to know when, where and if a hook has been called, how many times and what are the modules hooked.

### PrestaShop 1.7.3, the module experience re-invented

The first new feature we'd like to present is the Hooks debugger. In all modern pages of Back Office, you have access to the PrestaShop debug toolbar, now enriched by a "Hooks" section.

![PrestaShop Hooks Debugger section](/assets/images/2017/11/hooks_debugger_section.png)

At first look, in every modern page you can know which and how many times hooks have been called. If you access the section panel, you have access to many additional information:

* modules and hooks arguments
* called and uncalled (but available) hooks
* which modules react to hooks (the order is respected)

![PrestaShop Hooks Debugger](/assets/images/2017/11/hooks_debugger.png)

This allow every PrestaShop developer to choice wisely the right hook, but also to understand some behaviors if a specific hook doesn't render the expected view without have to enable/disable every module until find the guilty one.

Then, we have introduced two hooks in Product Catalog page to make the contribution of menus simple:

* `displayDashboardToolbarTopMenu` to be able to add new action to the top menu
* `displayDashboardToolbarIcons` to allow the addition of new icons in Dashboard block (will be available in every Dashboard modern pages)

![New Hooks](/assets/images/2017/11/new_hooks.png)

One more think with PrestaShop 1.7.3, the introduction of **"modules as bundle" system**, allowing the override of templates, services (classes), commands, forms and everything from modern pages in your modules. We are documenting this new system right now, but regarding the templating override we can tell this will work mostly the same way we already work with override in Front Office theme templates.

### PrestaShop 1.7.4 and beyond?

PrestaShop 1.7.4 will use Symfony 3 and will require PHP 5.6, we have decided to stop the maintenance of unmaintained PHP versions for security reason: it's time to upgrade PHP, ideally to the latest version (7.1 at this moment).

There is not broken compatibility in PrestaShop code between PrestaShop 1.7.3 and 1.7.4, and Symfony 3 will allow every developer to work with a PHP framework maintained until 2022.

We will continue to migrate Back Office to Symfony, we want to finish "Advanced Parameters" section and improve our UI Kit since Bootstrap 4 is close to the stable release. We will continue to improve the module developer experience, for instance we are already able to [display more information](https://github.com/PrestaShop/PrestaShop/pull/8557) from modules and hooks or in [our current templates](https://github.com/PrestaShop/PrestaShop/pull/8489) to simplify the overrides.

We are working on a new [form helpers](https://github.com/PrestaShop/PrestaShop/pull/8368) to allow developers to hook into modern forms like they were able to do in PrestaShop 1.6.

And many, many others new features, stay tuned!