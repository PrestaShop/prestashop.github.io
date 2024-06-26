---
layout: post
aliases: ["/news/coreweekly-41-2022"]
title:  "PrestaShop Core Weekly - Week 41 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-10-18
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 10th to Sunday 16th of October 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week, the maintainers team released PrestaShop 8.0 release candidate 1. You can read more in a [dedicated article](/news/prestashop-8-0-rc1-release/). If no major or critical regression is reported before October 20th, the final version of 8.0 will be made available later this month.

## Releases

* [welcome](https://github.com/PrestaShop/welcome): [v6.0.8](https://github.com/PrestaShop/welcome/releases/tag/v6.0.8)
* [classic-theme](https://github.com/PrestaShop/classic-theme): [2.0.2](https://github.com/PrestaShop/classic-theme/releases/tag/2.0.2)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [43 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-10-10..2022-10-16) have been created in the project repositories;
- [47 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-10-10..2022-10-16), including [6 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-10-10..2022-10-16) on the core;
- [97 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-10-10..2022-10-16) in the project repositories;
- [90 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-10-10..2022-10-16), including [79 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-10-10..2022-10-16).
        


## Code changes in the 'develop' branch


### Core
* [#29958](https://github.com/PrestaShop/PrestaShop/pull/29958): Add comments to hook class. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#29781](https://github.com/PrestaShop/PrestaShop/pull/29781): Add possibility for modules to return custom order number. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#29645](https://github.com/PrestaShop/PrestaShop/pull/29645): Fix typo into phpDoc. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Back office
* [#29934](https://github.com/PrestaShop/PrestaShop/pull/29934): Center icon into sidebar. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#29909](https://github.com/PrestaShop/PrestaShop/pull/29909): Fix join on product lang to retrieve correctly the product's name. Thank you [@0x346e3730](https://github.com/0x346e3730)
* [#29515](https://github.com/PrestaShop/PrestaShop/pull/29515): Fix tag relation with product in Tag form. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28465](https://github.com/PrestaShop/PrestaShop/pull/28465): Simplify Employee Form, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#29953](https://github.com/PrestaShop/PrestaShop/pull/29953): Deprecate Customer::validateController. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#29822](https://github.com/PrestaShop/PrestaShop/pull/29822): Fix accessing disabled product, further refacto of controller. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#29801](https://github.com/PrestaShop/PrestaShop/pull/29801): Fix group when converting customer through front office form. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Tests
* [#29976](https://github.com/PrestaShop/PrestaShop/pull/29976): Functional Tests : Fixes Dependabot (Remove assignees team / Fixes reviewers team), by [@Progi1984](https://github.com/Progi1984)
* [#29907](https://github.com/PrestaShop/PrestaShop/pull/29907): Functional Tests : Add dependabot for UI Tests, by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '8.0.x' branch


### Back office
* [#29942](https://github.com/PrestaShop/PrestaShop/pull/29942): Fix alert spacing inside modal content of product page v2, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#29021](https://github.com/PrestaShop/PrestaShop/pull/29021): Add webP to allowed format on the DropZone help. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Tests
* [#29980](https://github.com/PrestaShop/PrestaShop/pull/29980): Functional Tests : Nightly - Fixed the successful message for the My Profile Page, by [@Progi1984](https://github.com/Progi1984)
* [#29960](https://github.com/PrestaShop/PrestaShop/pull/29960): Functional Tests : BO - Search bar, by [@Progi1984](https://github.com/Progi1984)
* [#29956](https://github.com/PrestaShop/PrestaShop/pull/29956): Functional tests - Fix nightly 10/10/2022. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29954](https://github.com/PrestaShop/PrestaShop/pull/29954): Functional Tests : BO - View my shop, by [@Progi1984](https://github.com/Progi1984)
* [#29928](https://github.com/PrestaShop/PrestaShop/pull/29928): Refacto tests - Delete 'Data>FO' & fix nightly. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29860](https://github.com/PrestaShop/PrestaShop/pull/29860): Functional tests - Add new test 'FO > Quick view product'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29805](https://github.com/PrestaShop/PrestaShop/pull/29805): Functional tests - Add new test 'BO > Catalog > Cart rules carrier restriction'. Thank you [@cfarhani06](https://github.com/cfarhani06)


## Code changes in the '1.7.8.x' branch


### Core
* [#29235](https://github.com/PrestaShop/PrestaShop/pull/29235): Update prestashop 1.7.8.x composer dependencies, by [@matks](https://github.com/matks)


### Front office
* [#29910](https://github.com/PrestaShop/PrestaShop/pull/29910): Fix image size when zooming on tablet, by [@NeOMakinG](https://github.com/NeOMakinG)


## Code changes in modules, themes & tools


### Example modules
* [#116](https://github.com/PrestaShop/example-modules/pull/116): Bump ansi-html and webpack-dev-server in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#109](https://github.com/PrestaShop/example-modules/pull/109): Add compatibility with Prestashop 8.0.0 on demodoctrine module. Thank you [@mflasquin](https://github.com/mflasquin)
* [#106](https://github.com/PrestaShop/example-modules/pull/106): DemoMultistoreForm:  use Symfony ColorType as it is simpler and more modern. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#105](https://github.com/PrestaShop/example-modules/pull/105): Demodoctrine: nullable Quote's content for nonDefault language. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#100](https://github.com/PrestaShop/example-modules/pull/100): DemoGrid - add new columns and filters, add support for PS 1.7.7. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Changes in developer documentation sources
* [#1555](https://github.com/PrestaShop/docs/pull/1555): Re-order items, fix minor typo in core changes for 8.x. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1553](https://github.com/PrestaShop/docs/pull/1553): Module extension : webservices - Backport 1410. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1552](https://github.com/PrestaShop/docs/pull/1552): Fix KpiRowHook location - backport 1471. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1551](https://github.com/PrestaShop/docs/pull/1551): Add doc about sendemail on webservices / order_carriers - Backport 1475. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1550](https://github.com/PrestaShop/docs/pull/1550): Update webservice reference.md, fix stock_availables methods - Backport 1480. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1549](https://github.com/PrestaShop/docs/pull/1549): Change referenced module name - backport 1506. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1548](https://github.com/PrestaShop/docs/pull/1548): Update instructions on how to fill PR. Backport of #1528. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1547](https://github.com/PrestaShop/docs/pull/1547): Install module from cli and clean doc - Backport of 1534. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1546](https://github.com/PrestaShop/docs/pull/1546): Install from cli documentation - Backport of 1538. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1542](https://github.com/PrestaShop/docs/pull/1542): Change urls from build.prestashop.com to build.prestashop-project.org for 1.7.x. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1541](https://github.com/PrestaShop/docs/pull/1541): Change urls from build.prestashop.com to build.prestashop-project.org for 8.x. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1538](https://github.com/PrestaShop/docs/pull/1538): Add install method from cli in doc. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1536](https://github.com/PrestaShop/docs/pull/1536): Fix release lifecycle links (1.7.x backport), by [@matks](https://github.com/matks)
* [#1534](https://github.com/PrestaShop/docs/pull/1534): Add installation method module and remove duplicated doc from configuration. Thank you [@thomasnares](https://github.com/thomasnares)


### PrestaShop open source website theme
* [#6](https://github.com/PrestaShop/ps-org-theme/pull/6): Add support for Google Analytics, by [@eternoendless](https://github.com/eternoendless)
* [#5](https://github.com/PrestaShop/ps-org-theme/pull/5): meta description tag, by [@kpodemski](https://github.com/kpodemski)


### The PrestaShop open source project website
* [#130](https://github.com/PrestaShop/open-source/pull/130): Fix meta description for the project's website, by [@kpodemski](https://github.com/kpodemski)
* [#128](https://github.com/PrestaShop/open-source/pull/128): Update theme, by [@kpodemski](https://github.com/kpodemski)
* [#127](https://github.com/PrestaShop/open-source/pull/127): Add PR breakdown process, by [@matks](https://github.com/matks)
* [#120](https://github.com/PrestaShop/open-source/pull/120): Landing page ps8, by [@kpodemski](https://github.com/kpodemski)


### Customer reassurance block module
* [#454](https://github.com/PrestaShop/blockreassurance/pull/454): Bump vue from 2.7.12 to 2.7.13. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#453](https://github.com/PrestaShop/blockreassurance/pull/453): Bump vue from 2.7.11 to 2.7.12. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#452](https://github.com/PrestaShop/blockreassurance/pull/452): Bump vue from 2.7.10 to 2.7.11. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#451](https://github.com/PrestaShop/blockreassurance/pull/451): Bump eslint from 8.24.0 to 8.25.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#450](https://github.com/PrestaShop/blockreassurance/pull/450): Bump sass-loader from 13.0.2 to 13.1.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Classic theme
* [#62](https://github.com/PrestaShop/classic-theme/pull/62): Bring back lost 410.tpl, by [@kpodemski](https://github.com/kpodemski)
* [#61](https://github.com/PrestaShop/classic-theme/pull/61): Fix image size when zooming on tablet, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#60](https://github.com/PrestaShop/classic-theme/pull/60): Fix too long customization value on preview, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#57](https://github.com/PrestaShop/classic-theme/pull/57): Bad display of Customer data privacy message when the text contains a link. Thank you [@AlexTechDev](https://github.com/AlexTechDev)


### OnBoarding module
* [#147](https://github.com/PrestaShop/welcome/pull/147): Release v6.0.8, by [@atomiix](https://github.com/atomiix)


### Faceted search module
* [#722](https://github.com/PrestaShop/ps_facetedsearch/pull/722): Bump @babel/preset-env from 7.19.3 to 7.19.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#721](https://github.com/PrestaShop/ps_facetedsearch/pull/721): Bump eslint from 8.24.0 to 8.25.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#720](https://github.com/PrestaShop/ps_facetedsearch/pull/720): Bump sass-loader from 13.0.2 to 13.1.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Translation Files repository
* [#32](https://github.com/PrestaShop/TranslationFiles/pull/32): Use 1.0.2, by [@atomiix](https://github.com/atomiix)
* [#31](https://github.com/PrestaShop/TranslationFiles/pull/31): Use -core-oss in bucket name, by [@atomiix](https://github.com/atomiix)
* [#30](https://github.com/PrestaShop/TranslationFiles/pull/30): Use Translation v1.0.1, by [@jolelievre](https://github.com/jolelievre)


### PHP Developer Tools
* [#72](https://github.com/PrestaShop/php-dev-tools/pull/72): Allow v6.x of Symfony components to be loaded, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### New Products module
* [#15](https://github.com/PrestaShop/ps_newproducts/pull/15): Display "Invalid number" error on invalid number of days. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### PrestaShop Specifications
* [#350](https://github.com/PrestaShop/prestashop-specs/pull/350): Fix link to prestashop project. Thank you [@sarahdib](https://github.com/sarahdib)


### Issues Bot
* [#87](https://github.com/PrestaShop/issuebot/pull/87): Don't add Topwatcher label to closed issues, by [@Progi1984](https://github.com/Progi1984)


### Product Comments module
* [#141](https://github.com/PrestaShop/productcomments/pull/141): Simplify Average code. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@thomasnares](https://github.com/thomasnares), [@eternoendless](https://github.com/eternoendless), [@kpodemski](https://github.com/kpodemski), [@Progi1984](https://github.com/Progi1984), [@atomiix](https://github.com/atomiix), [@jf-viguier](https://github.com/jf-viguier), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@mflasquin](https://github.com/mflasquin), [@matks](https://github.com/matks), [@NeOMakinG](https://github.com/NeOMakinG), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@jolelievre](https://github.com/jolelievre), [@PrestaEdit](https://github.com/PrestaEdit), [@sarahdib](https://github.com/sarahdib), [@0x346e3730](https://github.com/0x346e3730), [@Hlavtox](https://github.com/Hlavtox), [@cfarhani06](https://github.com/cfarhani06), [@AlexTechDev](https://github.com/AlexTechDev), [@leemyongpakvn](https://github.com/leemyongpakvn), [@zuk3975](https://github.com/zuk3975)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

