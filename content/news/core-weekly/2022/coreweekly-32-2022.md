---
layout: post
aliases: ["/news/coreweekly-32-2022"]
title:  "PrestaShop Core Weekly - Week 32 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-08-16
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 8th to Sunday 14th of August 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week maintainers team [released PrestaShop 8 Beta](https://build.prestashop.com/news/prestashop-8-0-beta-release/). This is a major release, and your feedback is essential. You can [report bugs on Github](https://github.com/PrestaShop/PrestaShop/issues/new/choose) or [contribute to fixing bugs](https://devdocs.prestashop.com/8/contribute/contribute-pull-requests/). The team is waiting for your feedback until September 5, 2022.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [35 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-08-08..2022-08-14) have been created in the project repositories;
- [39 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-08-08..2022-08-14), including [23 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-08-08..2022-08-14) on the core;
- [43 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-08-08..2022-08-14) in the project repositories;
- [41 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-08-08..2022-08-14), including [36 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-08-08..2022-08-14).
        


## Code changes in the 'develop' branch


### Core
* [#29113](https://github.com/PrestaShop/PrestaShop/pull/29113): More data available for the productoutofstock email, by [@kpodemski](https://github.com/kpodemski)
* [#26788](https://github.com/PrestaShop/PrestaShop/pull/26788): Cart: replace this->getAssociatedLanguage()->getId() by equivalent th…. Thank you [@lmeyer1](https://github.com/lmeyer1)


### Back office
* [#29161](https://github.com/PrestaShop/PrestaShop/pull/29161): [29152] Fix update order status settings with readonly user. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#29114](https://github.com/PrestaShop/PrestaShop/pull/29114): BO > Customers > Addresses - Required fields are not used in back office. Thank you [@okom3pom](https://github.com/okom3pom)
* [#28762](https://github.com/PrestaShop/PrestaShop/pull/28762): Target the table on the reload of the page after a sort, by [@Progi1984](https://github.com/Progi1984)
* [#28441](https://github.com/PrestaShop/PrestaShop/pull/28441): IP white list should not be preconfigured. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#27987](https://github.com/PrestaShop/PrestaShop/pull/27987): States : Migrate Add & Edit Forms, by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '8.0.x' branch


### Core
* [#29319](https://github.com/PrestaShop/PrestaShop/pull/29319): Upgrade symfony version, by [@kpodemski](https://github.com/kpodemski)


### Back office
* [#29306](https://github.com/PrestaShop/PrestaShop/pull/29306): Fix specific price creation for dedicated customer. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29278](https://github.com/PrestaShop/PrestaShop/pull/29278): Fix undefined quantity index in light product list. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29272](https://github.com/PrestaShop/PrestaShop/pull/29272): Making PHP8.1 implicit conversion explicit. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#29256](https://github.com/PrestaShop/PrestaShop/pull/29256): When there no module upgrade script to run, make module upgrade succeed, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#29230](https://github.com/PrestaShop/PrestaShop/pull/29230): Add help.prestashop-project.org documentation links & fix popup opening. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#29180](https://github.com/PrestaShop/PrestaShop/pull/29180): Fix order payment currency unit. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#28886](https://github.com/PrestaShop/PrestaShop/pull/28886): Refacto bridge controller initiation and resolve feedback. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28752](https://github.com/PrestaShop/PrestaShop/pull/28752): Improve extendability of the new product page form, by [@jolelievre](https://github.com/jolelievre)


### Tests
* [#29311](https://github.com/PrestaShop/PrestaShop/pull/29311): Functional tests - Skip some steps on 'FO > Edit information' test after the new behavior. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29290](https://github.com/PrestaShop/PrestaShop/pull/29290): Fix nightly 8.0.x - 09/08/2022 - 'Enable/Disable guest checkout' and 'Check links in footer page'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28846](https://github.com/PrestaShop/PrestaShop/pull/28846): Functional tests - Add new test 'Change Currency' in FO. Thank you [@sallemiines](https://github.com/sallemiines)


## Code changes in the '1.7.8.x' branch


### Core
* [#29227](https://github.com/PrestaShop/PrestaShop/pull/29227): Bump wishlist to 2.1.2, by [@NeOMakinG](https://github.com/NeOMakinG)


### Back office
* [#29307](https://github.com/PrestaShop/PrestaShop/pull/29307): Remove module_card.js from the product page v1, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#29214](https://github.com/PrestaShop/PrestaShop/pull/29214): Fix logo on pdf for RTL. Thank you [@MeKeyCool](https://github.com/MeKeyCool)


## Code changes in modules, themes & tools


### Hummingbird theme
* [#362](https://github.com/PrestaShop/hummingbird/pull/362): Fix import overrides scss file order according to boostrap doc. Thank you [@ga-devfront](https://github.com/ga-devfront)


### Stylelint configuration
* [#44](https://github.com/PrestaShop/stylelint-config/pull/44): Bump stylelint from 14.9.1 to 14.10.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### GDPR module
* [#178](https://github.com/PrestaShop/psgdpr/pull/178): adaptation to the hummingbird theme. Thank you [@JBLach](https://github.com/JBLach)


### Changes in developer documentation sources
* [#1443](https://github.com/PrestaShop/docs/pull/1443): Backport of 1442. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1442](https://github.com/PrestaShop/docs/pull/1442): Fix minor typo and syntax. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Core Weekly Generator tool
* [#127](https://github.com/PrestaShop/core-weekly-generator/pull/127): Map new repositories to their more meaningful names, by [@kpodemski](https://github.com/kpodemski)


### Module Releases Monitor
* [#10](https://github.com/PrestaShop/ps-monitor-module-releases/pull/10): Minor improvements, by [@kpodemski](https://github.com/kpodemski)


### Faceted search module
* [#692](https://github.com/PrestaShop/ps_facetedsearch/pull/692): Fix: BO - New filters template - an error is displayed in the console when we click save. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Customer reassurance block module
* [#432](https://github.com/PrestaShop/blockreassurance/pull/432): Fix: BO - Titles are not well displayed (overlap labels) with mobile. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#430](https://github.com/PrestaShop/blockreassurance/pull/430): Fix: non-svg custom icon is hidden in FO after editing in BO. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Product Comments module
* [#137](https://github.com/PrestaShop/productcomments/pull/137): Fix hookFilterProductContent to allow hook chain. Thank you [@idnovate](https://github.com/idnovate)


### Example modules
* [#50](https://github.com/PrestaShop/example-modules/pull/50): Example module for product form in BO. Thank you [@zuk3975](https://github.com/zuk3975)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@ga-devfront](https://github.com/ga-devfront), [@kpodemski](https://github.com/kpodemski), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@NeOMakinG](https://github.com/NeOMakinG), [@zuk3975](https://github.com/zuk3975), [@dependabot[bot]](https://github.com/apps/dependabot), [@JBLach](https://github.com/JBLach), [@leemyongpakvn](https://github.com/leemyongpakvn), [@jolelievre](https://github.com/jolelievre), [@FabienPapet](https://github.com/FabienPapet), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@MeKeyCool](https://github.com/MeKeyCool), [@matthieu-rolland](https://github.com/matthieu-rolland), [@okom3pom](https://github.com/okom3pom), [@sallemiines](https://github.com/sallemiines), [@Progi1984](https://github.com/Progi1984), [@lmeyer1](https://github.com/lmeyer1), [@idnovate](https://github.com/idnovate)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

