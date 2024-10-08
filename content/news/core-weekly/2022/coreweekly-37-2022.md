---
layout: post
aliases: ["/news/coreweekly-37-2022"]
title:  "PrestaShop Core Weekly - Week 37 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-09-19
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 12th to Sunday 18th of September 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [34 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-09-12..2022-09-18) have been created in the project repositories;
- [37 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-09-12..2022-09-18), including [10 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-09-12..2022-09-18) on the core;
- [63 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-09-12..2022-09-18) in the project repositories;
- [59 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-09-12..2022-09-18), including [49 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-09-12..2022-09-18).
        


## Code changes in the 'develop' branch


### Back office
* [#29635](https://github.com/PrestaShop/PrestaShop/pull/29635):  Do not reset customization in FO when changing combination (178x). Thank you [@zuk3975](https://github.com/zuk3975)
* [#29590](https://github.com/PrestaShop/PrestaShop/pull/29590): Replaces non-existent route by the correct one in geolocation controller. Thank you [@nicosomb](https://github.com/nicosomb)
* [#29548](https://github.com/PrestaShop/PrestaShop/pull/29548): Remove related products from search index when removing tag. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29173](https://github.com/PrestaShop/PrestaShop/pull/29173): Limit min date and max date of the movements page, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#29552](https://github.com/PrestaShop/PrestaShop/pull/29552): Only show active CMS categories in breadcrumb. Thank you [@lmeyer1](https://github.com/lmeyer1)


## Code changes in the '8.0.x' branch


### Core
* [#29484](https://github.com/PrestaShop/PrestaShop/pull/29484): Fix doctrine cache configuration, by [@atomiix](https://github.com/atomiix)


### Back office
* [#29589](https://github.com/PrestaShop/PrestaShop/pull/29589): Wrong error message display on NumberType symfony input. Thank you [@lartist](https://github.com/lartist)
* [#29575](https://github.com/PrestaShop/PrestaShop/pull/29575): Functional tests - Refacto test BO - Invoices - Enable Disable Invoices, by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#29567](https://github.com/PrestaShop/PrestaShop/pull/29567): Functional tests - Refacto the BO - Invoices -  generate invoice by status test, by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#29322](https://github.com/PrestaShop/PrestaShop/pull/29322): Fix decorating controllers from module. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29281](https://github.com/PrestaShop/PrestaShop/pull/29281): Fix overflow of combination history. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29280](https://github.com/PrestaShop/PrestaShop/pull/29280): Fix updating empty combination reference from list. Thank you [@zuk3975](https://github.com/zuk3975)


### Front office
* [#29400](https://github.com/PrestaShop/PrestaShop/pull/29400): Fix "undefined" error when modifying product quantity in FO product quick view . Thank you [@yanmakouf](https://github.com/yanmakouf)


### Web services
* [#29638](https://github.com/PrestaShop/PrestaShop/pull/29638): WS: Handle PATCH requests for attachments, by [@matks](https://github.com/matks)


### Tests
* [#29643](https://github.com/PrestaShop/PrestaShop/pull/29643): Lock sebastian/comparator to 4.0.6, by [@atomiix](https://github.com/atomiix)
* [#29639](https://github.com/PrestaShop/PrestaShop/pull/29639): Functional Tests - Add new tests to display all products on FO Page. Thank you [@cfarhani06](https://github.com/cfarhani06)
* [#29620](https://github.com/PrestaShop/PrestaShop/pull/29620): Sanity tests - Fix enable/disable new product page method. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29578](https://github.com/PrestaShop/PrestaShop/pull/29578): Functional tests - Refacto test BO - Invoices - Enable Disable Tax Breakdown, by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#29576](https://github.com/PrestaShop/PrestaShop/pull/29576): Functional tests - Add test "FO - Send message while logged out", by [@Progi1984](https://github.com/Progi1984)
* [#29378](https://github.com/PrestaShop/PrestaShop/pull/29378): Functional tests - Add new test "Customers > Outstanding page" Pagination - Sort - Filter, by [@khouloudbelguith](https://github.com/khouloudbelguith)


## Code changes in the '1.7.8.x' branch


### Core
* [#29172](https://github.com/PrestaShop/PrestaShop/pull/29172): Save Smarty caching type setting in file instead of DB, by [@atomiix](https://github.com/atomiix)


### Back office
* [#29551](https://github.com/PrestaShop/PrestaShop/pull/29551): Text troncated on combine several attribute input. Thank you [@lartist](https://github.com/lartist)
* [#29549](https://github.com/PrestaShop/PrestaShop/pull/29549): Fix validateSql method not accepting EXISTS after WHERE, by [@atomiix](https://github.com/atomiix)
* [#29392](https://github.com/PrestaShop/PrestaShop/pull/29392): Fix menu items not showing on mobile, by [@NeOMakinG](https://github.com/NeOMakinG)


## Code changes in modules, themes & tools


### PrestonBot
* [#135](https://github.com/PrestaShop/prestonbot/pull/135): Bump smarty/smarty from 3.1.45 to 3.1.47. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#506](https://github.com/PrestaShop/autoupgrade/pull/506): Cherry pick a52214e to dev, by [@atomiix](https://github.com/atomiix)
* [#504](https://github.com/PrestaShop/autoupgrade/pull/504): Add method to recursively remove tabs, and use it for PS8 upgrade, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#495](https://github.com/PrestaShop/autoupgrade/pull/495): Remove PS_SMARTY_CACHING_TYPE configuration in 1.7.8.8, by [@atomiix](https://github.com/atomiix)


### Changes in developer documentation sources
* [#1483](https://github.com/PrestaShop/docs/pull/1483): Update tutorial.md - changed wording. Thank you [@stylesamazing](https://github.com/stylesamazing)
* [#1482](https://github.com/PrestaShop/docs/pull/1482): Note about routing config during controller decoration. Thank you [@zuk3975](https://github.com/zuk3975)
* [#1481](https://github.com/PrestaShop/docs/pull/1481): Update tutorial typo. Thank you [@stylesamazing](https://github.com/stylesamazing)
* [#1434](https://github.com/PrestaShop/docs/pull/1434): Remove TextWithUnitType add UnitTypeExtension. Thank you [@okom3pom](https://github.com/okom3pom)


### Faceted search module
* [#713](https://github.com/PrestaShop/ps_facetedsearch/pull/713): Bump got and webpack-cli. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#712](https://github.com/PrestaShop/ps_facetedsearch/pull/712): Bump @babel/eslint-parser from 7.18.9 to 7.19.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#711](https://github.com/PrestaShop/ps_facetedsearch/pull/711): Bump @babel/node from 7.18.10 to 7.19.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#710](https://github.com/PrestaShop/ps_facetedsearch/pull/710): Bump @babel/preset-env from 7.19.0 to 7.19.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#709](https://github.com/PrestaShop/ps_facetedsearch/pull/709): Bump @babel/core from 7.19.0 to 7.19.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#708](https://github.com/PrestaShop/ps_facetedsearch/pull/708): Bump eslint from 8.23.0 to 8.23.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer reassurance block module
* [#446](https://github.com/PrestaShop/blockreassurance/pull/446): Bump @babel/core from 7.19.0 to 7.19.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#445](https://github.com/PrestaShop/blockreassurance/pull/445): Bump @babel/eslint-parser from 7.18.9 to 7.19.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#444](https://github.com/PrestaShop/blockreassurance/pull/444): Bump eslint from 8.23.0 to 8.23.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation site
* [#13](https://github.com/PrestaShop/devdocs-site/pull/13): Change domain to devdocs.prestashop-project.org, by [@eternoendless](https://github.com/eternoendless)


### Stylelint configuration
* [#47](https://github.com/PrestaShop/stylelint-config/pull/47): Bump stylelint-no-unsupported-browser-features from 5.0.3 to 5.0.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Share Buttons module
* [#55](https://github.com/PrestaShop/ps_sharebuttons/pull/55): The hook "displayProductButtons" is deprecated. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Classic theme
* [#45](https://github.com/PrestaShop/classic-theme/pull/45): restore `form_field` block. Thank you [@balejk](https://github.com/balejk)


### Viewed products block module
* [#25](https://github.com/PrestaShop/ps_viewedproduct/pull/25): Prevent cookie overflow. Thank you [@daresh](https://github.com/daresh)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@atomiix](https://github.com/atomiix), [@matks](https://github.com/matks), [@stylesamazing](https://github.com/stylesamazing), [@zuk3975](https://github.com/zuk3975), [@cfarhani06](https://github.com/cfarhani06), [@eternoendless](https://github.com/eternoendless), [@lartist](https://github.com/lartist), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@matthieu-rolland](https://github.com/matthieu-rolland), [@nicosomb](https://github.com/nicosomb), [@khouloudbelguith](https://github.com/khouloudbelguith), [@Progi1984](https://github.com/Progi1984), [@lmeyer1](https://github.com/lmeyer1), [@yanmakouf](https://github.com/yanmakouf), [@NeOMakinG](https://github.com/NeOMakinG), [@jolelievre](https://github.com/jolelievre), [@okom3pom](https://github.com/okom3pom), [@leemyongpakvn](https://github.com/leemyongpakvn), [@balejk](https://github.com/balejk), [@daresh](https://github.com/daresh)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

