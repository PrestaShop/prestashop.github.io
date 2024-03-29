---
layout: post
aliases: ["/news/coreweekly-week-14-2019"]
title:  "PrestaShop Core Weekly - Week 14 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-04-08 14:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 01st to Sunday 07th of April 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

The code is frozen!!! 🍾️ 🎉️ ☃️

A quick look at the work done on 1.7.6:

- [120 issues have been fixed](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+milestone%3A1.7.6.0+is%3Aclosed+label%3AFixed)
- [521 pull requests have been merged](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+milestone%3A1.7.6.0+is%3Amerged)

What a huge amount of work!

If you can't wait for an Alpha build, don't forget that you can use the [nightly builds](https://nightly.prestashop-project.org/). And of course, test it with your infrastructure, your modules and themes, your data, your configuration. And then, please, let us know if you find something to fix: [open an issue on GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose).


## A quick update about PrestaShop's GitHub issues and pull requests:

- [68 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-04-01..2019-04-07) have been created in the project repositories;
- [65 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-04-01..2019-04-07), including [16 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-04-01..2019-04-07) on the core;
- [42 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-04-01..2019-04-07) in the project repositories;
- [58 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-04-01..2019-04-07), including [49 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-04-01..2019-04-07).


## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#12708](https://github.com/PrestaShop/PrestaShop/pull/12708): Deprecate admin endpoints outside index.php, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#12926](https://github.com/PrestaShop/PrestaShop/pull/12926): Migration of Manufacturers view action. Thank you [@sarjon](https://github.com/sarjon)
* [#12941](https://github.com/PrestaShop/PrestaShop/pull/12941): Remove unnecessary return on update, by [@eternoendless](https://github.com/eternoendless)
* [#12996](https://github.com/PrestaShop/PrestaShop/pull/12996): Domain improvements: naming and namespace. Thank you [@sarjon](https://github.com/sarjon)
* [#12999](https://github.com/PrestaShop/PrestaShop/pull/12999): Remove calls to old CLDR, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#13115](https://github.com/PrestaShop/PrestaShop/pull/13115): Fix strpos arguments order. Thank you [@quasilyte](https://github.com/quasilyte)
* [#13141](https://github.com/PrestaShop/PrestaShop/pull/13141): Performance : avoid useless attributes queries. Thank you [@123monsite-regis](https://github.com/123monsite-regis)
* [#13146](https://github.com/PrestaShop/PrestaShop/pull/13146): Fixes missing fields validation in Language command handlers. Thank you [@sarjon](https://github.com/sarjon)
* [#13208](https://github.com/PrestaShop/PrestaShop/pull/13208): Broken page when request a duplicate _legacy_link, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13209](https://github.com/PrestaShop/PrestaShop/pull/13209): Properly set error headers, by [@jocel1](https://github.com/jocel1)


### Back office

* [#12331](https://github.com/PrestaShop/PrestaShop/pull/12331): Migration of Theme & Logo page with style and ux improvements. Thank you [@tomas862](https://github.com/tomas862)
* [#12436](https://github.com/PrestaShop/PrestaShop/pull/12436): Introduces new File type input design for all new and migrated back-office pages . Thank you [@tomas862](https://github.com/tomas862)
* [#12707](https://github.com/PrestaShop/PrestaShop/pull/12707): New design for employee profile [Back-Office]. Thank you [@YeLnatSs](https://github.com/YeLnatSs)
* [#12795](https://github.com/PrestaShop/PrestaShop/pull/12795): Brand address create/edit actions migration. Thank you [@zuk3975](https://github.com/zuk3975)
* [#12931](https://github.com/PrestaShop/PrestaShop/pull/12931): Make footer on product page spreads itself when the menu is hidden. Thank you [@dineshbadrukhiya](https://github.com/dineshbadrukhiya)
* [#12974](https://github.com/PrestaShop/PrestaShop/pull/12974): Cms page category listing position update. Thank you [@tomas862](https://github.com/tomas862)
* [#12995](https://github.com/PrestaShop/PrestaShop/pull/12995): Migrate Cms page create/edit actions. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13033](https://github.com/PrestaShop/PrestaShop/pull/13033): Filter registered hooks in module possible hooks list. Thank you [@unlocomqx](https://github.com/unlocomqx)
* [#13048](https://github.com/PrestaShop/PrestaShop/pull/13048): Integrate mail generator, by [@jolelievre](https://github.com/jolelievre)
* [#13088](https://github.com/PrestaShop/PrestaShop/pull/13088): Ensure translations are always saved with the selected theme in back office, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#13093](https://github.com/PrestaShop/PrestaShop/pull/13093): Add missing label and delete legacy tax controller as it was migrated. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)
* [#13105](https://github.com/PrestaShop/PrestaShop/pull/13105): Validate theme zip file and show error messages. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)
* [#13108](https://github.com/PrestaShop/PrestaShop/pull/13108): Fix missing lang entries in Configuration. Thank you [@rblaurin](https://github.com/rblaurin)
* [#13122](https://github.com/PrestaShop/PrestaShop/pull/13122): Fix notice when iso code does not exist in array, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#13123](https://github.com/PrestaShop/PrestaShop/pull/13123): Display shop path in Information page. Thank you [@unlocomqx](https://github.com/unlocomqx)
* [#13125](https://github.com/PrestaShop/PrestaShop/pull/13125): Add CMS page listing position update functionality. Thank you [@tomas862](https://github.com/tomas862)
* [#13145](https://github.com/PrestaShop/PrestaShop/pull/13145): fixes bug with incorrect errors display within the forms. . Thank you [@tomas862](https://github.com/tomas862)
* [#13157](https://github.com/PrestaShop/PrestaShop/pull/13157): Fix Add/Edit brand icon, by [@matks](https://github.com/matks)
* [#13158](https://github.com/PrestaShop/PrestaShop/pull/13158): Sets error bubbling inside the translatable type. Thank you [@tomas862](https://github.com/tomas862)
* [#13159](https://github.com/PrestaShop/PrestaShop/pull/13159): Remove 'Constraint' suffix from TypedRegex constraint and validator. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13161](https://github.com/PrestaShop/PrestaShop/pull/13161): Remove icons from Customers form. Thank you [@sarjon](https://github.com/sarjon)
* [#13164](https://github.com/PrestaShop/PrestaShop/pull/13164): Manufacturer page fixes. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13177](https://github.com/PrestaShop/PrestaShop/pull/13177): Fix notice undefined index: icon on Design -> Positions, by [@Matt75](https://github.com/Matt75)
* [#13199](https://github.com/PrestaShop/PrestaShop/pull/13199): Fix Profiles form twig template compatibility with twig v2, by [@matks](https://github.com/matks)
* [#13216](https://github.com/PrestaShop/PrestaShop/pull/13216): Enable help bar on suppliers page, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front office

* [#12872](https://github.com/PrestaShop/PrestaShop/pull/12872): Fix label "Web only" . Thank you [@YeLnatSs](https://github.com/YeLnatSs)
* [#13103](https://github.com/PrestaShop/PrestaShop/pull/13103): Introduce new hooks displayProductActions & displayPersonalInformationTop, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#13106](https://github.com/PrestaShop/PrestaShop/pull/13106): Checkout proceeds automatically go to latest step, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13135](https://github.com/PrestaShop/PrestaShop/pull/13135): Add variable to tell if prices are tax included or not, by [@eternoendless](https://github.com/eternoendless)
* [#13150](https://github.com/PrestaShop/PrestaShop/pull/13150): Add a missing space that could trigger an SQL error. Thank you [@chrisvanberg](https://github.com/chrisvanberg)
* [#13171](https://github.com/PrestaShop/PrestaShop/pull/13171): Outdated assets, by [@PierreRambaud](https://github.com/PierreRambaud)


### Tests

* [#13127](https://github.com/PrestaShop/PrestaShop/pull/13127): Do not run tests with the StarterTheme anymore, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#13167](https://github.com/PrestaShop/PrestaShop/pull/13167): Move lint checks in GitHub action, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#13176](https://github.com/PrestaShop/PrestaShop/pull/13176): Allow to use date as parameter for nightly builds, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools

### Starter theme

* [#240](https://github.com/PrestaShop/StarterTheme/pull/240): Add deprecation notice in Readme, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Legal Compliance

* [#45](https://github.com/PrestaShop/ps_legalcompliance/pull/45): Fixed undefined array index declaration, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### NVD3 Charts

* [#6](https://github.com/PrestaShop/graphnvd3/pull/6): Deploy v2.0.1 of the graphnvd3 module, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Changes in Documentation

* [#236](https://github.com/PrestaShop/docs/pull/236): Fix paths of files and fold. Thank you [@cr998](https://github.com/cr998)
* [#237](https://github.com/PrestaShop/docs/pull/237): Docs for custom product flags. Thank you [@kpodemski](https://github.com/kpodemski)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @123monsite-regis, @chrisvanberg, @cr998, @dineshbadrukhiya, @kpodemski, @quasilyte, @rblaurin, @sarjo, @tomas862, @unlocomqx!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
