---
layout: post
aliases: ["/news/coreweekly-33-2022"]
title:  "PrestaShop Core Weekly - Week 33 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-08-22
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 15th to Sunday 21th of August 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

PrestaShop 8 Beta 1 phase continues. Remember that you have time until September 5th, 2022, to test and [report](https://github.com/PrestaShop/PrestaShop/issues/new/choose) any issues you find.

Last week there was a significant update of the developer documentation that summarizes [notable changes in PrestaShop 8](https://devdocs.prestashop.com/8/modules/core-updates/8.0/#notable-changes). We highly recommend to check them.

## Releases

* [Ps_customersignin](https://github.com/PrestaShop/ps_customersignin) module: [v2.0.5](https://github.com/PrestaShop/ps_customersignin/releases/tag/v2.0.5)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [52 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-08-15..2022-08-21) have been created in the project repositories;
- [23 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-08-15..2022-08-21), including [6 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-08-15..2022-08-21) on the core;
- [69 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-08-15..2022-08-21) in the project repositories;
- [36 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-08-15..2022-08-21), including [28 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-08-15..2022-08-21).
        


## Code changes in the 'develop' branch


### Core
* [#29367](https://github.com/PrestaShop/PrestaShop/pull/29367): Update the theme argument description. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#29325](https://github.com/PrestaShop/PrestaShop/pull/29325): Fix exception message while removing configuration. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Back office
* [#28872](https://github.com/PrestaShop/PrestaShop/pull/28872): [BO] : Class name must be allowed from controller in select render list column. Thank you [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul)


## Code changes in the '8.0.x' branch


### Back office
* [#29288](https://github.com/PrestaShop/PrestaShop/pull/29288): Restructurize horizontal migration Bridge directories. Thank you [@zuk3975](https://github.com/zuk3975)


### Tests
* [#28906](https://github.com/PrestaShop/PrestaShop/pull/28906): Functional tests - Fix CRUD address test on FO. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Changes in developer documentation sources
* [#1459](https://github.com/PrestaShop/docs/pull/1459): Remove tests-legacy. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1457](https://github.com/PrestaShop/docs/pull/1457): Remove extra -v of classname modifier output. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1456](https://github.com/PrestaShop/docs/pull/1456): Update theme argument description. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1454](https://github.com/PrestaShop/docs/pull/1454): Update theme argument description. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1453](https://github.com/PrestaShop/docs/pull/1453): Remove extra -v and update ouptput of classname modifier. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1452](https://github.com/PrestaShop/docs/pull/1452): Javascript file extension and import path changes since PS 8.0.0. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1444](https://github.com/PrestaShop/docs/pull/1444): Update sql link, ts extensions, and branch links. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1427](https://github.com/PrestaShop/docs/pull/1427): Documentation for BC Breaks and changes in 8.0, by [@kpodemski](https://github.com/kpodemski)


### The PrestaShop open source project
* [#115](https://github.com/PrestaShop/open-source/pull/115): Readme : Rendering the site locally. Thank you [@okom3pom](https://github.com/okom3pom)
* [#113](https://github.com/PrestaShop/open-source/pull/113): Fix install script. Thank you [@okom3pom](https://github.com/okom3pom)
* [#67](https://github.com/PrestaShop/open-source/pull/67): Update README, by [@matks](https://github.com/matks)


### Module Releases Monitor
* [#13](https://github.com/PrestaShop/ps-monitor-module-releases/pull/13): Add PHP CS Fixer and run it in CI, by [@matks](https://github.com/matks)
* [#12](https://github.com/PrestaShop/ps-monitor-module-releases/pull/12): Add last release date, and last PR on main or master. Thank you [@okom3pom](https://github.com/okom3pom)


### Hummingbird theme
* [#363](https://github.com/PrestaShop/hummingbird/pull/363): customization modal fix. Thank you [@JBLach](https://github.com/JBLach)


### GDPR module
* [#180](https://github.com/PrestaShop/psgdpr/pull/180): Bump version 1.4.3, by [@kpodemski](https://github.com/kpodemski)


### Check payment module
* [#60](https://github.com/PrestaShop/ps_checkpayment/pull/60): Deleting unnecessary files. Thank you [@okom3pom](https://github.com/okom3pom)


### Customer "Sign in" link module
* [#47](https://github.com/PrestaShop/ps_customersignin/pull/47): bump version to 2.0.5, by [@kpodemski](https://github.com/kpodemski)
* [#46](https://github.com/PrestaShop/ps_customersignin/pull/46): Release v2.0.5, by [@kpodemski](https://github.com/kpodemski)


### Links list module
* [#154](https://github.com/PrestaShop/ps_linklist/pull/154): bump version to 5.0.5, by [@kpodemski](https://github.com/kpodemski)


### Customer reassurance block module
* [#436](https://github.com/PrestaShop/blockreassurance/pull/436): Bump eslint from 8.21.0 to 8.22.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#698](https://github.com/PrestaShop/ps_facetedsearch/pull/698): Bump eslint from 8.21.0 to 8.22.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Traces
* [#33](https://github.com/PrestaShop/traces/pull/33): Sort alphabetically. Thank you [@okom3pom](https://github.com/okom3pom)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@PrestaEdit](https://github.com/PrestaEdit), [@okom3pom](https://github.com/okom3pom), [@matks](https://github.com/matks), [@leemyongpakvn](https://github.com/leemyongpakvn), [@JBLach](https://github.com/JBLach), [@kpodemski](https://github.com/kpodemski), [@jolelievre](https://github.com/jolelievre), [@dependabot[bot]](https://github.com/apps/dependabot), [@zuk3975](https://github.com/zuk3975), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

