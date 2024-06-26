---
layout: post
aliases: ["/news/coreweekly-35-2022"]
title:  "PrestaShop Core Weekly - Week 35 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-09-05
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 29th of August to Sunday 4th of September 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

PrestaShop 8 beta phase has ended. Quality Assurance team will post all the regressions discovered after exploratory tests in the [release progress page on GitHub](https://github.com/PrestaShop/PrestaShop/issues/26427). QA and Maintainers' team will now focus on fixing and testing issues considered as blocking for the release, as well as on the work on the [autoupgrade module](https://github.com/PrestaShop/autoupgrade) to ensure that the upgrade path from 1.7 to 8.0 is stable.

In other news, Maintainers' team released a security patch for the [Product Comments](https://github.com/PrestaShop/productcomments) module. We highly recommend upgrading it.

Last but not least, a reminder about this week's Public Demo that will [take place on Wednesday](https://build.prestashop.com/news/upcoming-demo-6-2022/).

## Releases

* [productcomments](https://github.com/PrestaShop/productcomments): [v5.0.2](https://github.com/PrestaShop/productcomments/releases/tag/v5.0.2)
* [ps_linklist](https://github.com/PrestaShop/ps_linklist): [v5.0.5](https://github.com/PrestaShop/ps_linklist/releases/tag/v5.0.5)
* [ps_distributionapiclient](https://github.com/PrestaShop/ps_distributionapiclient): [v1.0.2](https://github.com/PrestaShop/ps_distributionapiclient/releases/tag/v1.0.2)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [28 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-08-29..2022-09-04) have been created in the project repositories;
- [28 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-08-29..2022-09-04), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-08-29..2022-09-04) on the core;
- [63 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-08-29..2022-09-04) in the project repositories;
- [68 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-08-29..2022-09-04), including [52 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-08-29..2022-09-04).
        


## Code changes in the 'develop' branch


### Back office
* [#28794](https://github.com/PrestaShop/PrestaShop/pull/28794): Deprecate AdminPdf calls and use Sf routes, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#29264](https://github.com/PrestaShop/PrestaShop/pull/29264): Add manufacturer and supplier body classes. Thank you [@Hlavtox](https://github.com/Hlavtox)


## Code changes in the '8.0.x' branch


### Core
* [#29502](https://github.com/PrestaShop/PrestaShop/pull/29502): Do not add theme translation resources if theme is null, by [@atomiix](https://github.com/atomiix)
* [#29410](https://github.com/PrestaShop/PrestaShop/pull/29410): Update hooks for dynamic hooks, by [@jolelievre](https://github.com/jolelievre)


### Back office
* [#29417](https://github.com/PrestaShop/PrestaShop/pull/29417): Fix delivery time for multishop. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#29416](https://github.com/PrestaShop/PrestaShop/pull/29416): Fix customer form validation from module. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29388](https://github.com/PrestaShop/PrestaShop/pull/29388): Fix customer voucher "active" column in customer view page. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29324](https://github.com/PrestaShop/PrestaShop/pull/29324): Fix click event not sent in addPaymentButton. Thank you [@FabienPapet](https://github.com/FabienPapet)


### Front office
* [#29122](https://github.com/PrestaShop/PrestaShop/pull/29122): fix FO address forms reload when switching address's country. Thank you [@yanmakouf](https://github.com/yanmakouf)


### Web services
* [#29320](https://github.com/PrestaShop/PrestaShop/pull/29320): Update class name used by product_option_values ressource. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Tests
* [#29514](https://github.com/PrestaShop/PrestaShop/pull/29514): Sanity tests - Fix random error in 'Create product' V2 test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29511](https://github.com/PrestaShop/PrestaShop/pull/29511): Fix nightly 8.0.x 01/09/2022 - Fix 'FO > Edit information' , 'FO > CRUD address' and 'BO > Payment block' tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29468](https://github.com/PrestaShop/PrestaShop/pull/29468): Sanity tests - Refacto and add new test 'CRUD virtual product'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29452](https://github.com/PrestaShop/PrestaShop/pull/29452): Functional tests - Fix 'FO > User account> Edit information' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29443](https://github.com/PrestaShop/PrestaShop/pull/29443): Functional tests - Fix errors on nightly 8.0.x. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29438](https://github.com/PrestaShop/PrestaShop/pull/29438): Sanity tests - Add new test 'CRUD product with combinations' V2. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Core
* [#29504](https://github.com/PrestaShop/PrestaShop/pull/29504): Cherry-pick #29502, by [@atomiix](https://github.com/atomiix)


### Front office
* [#29373](https://github.com/PrestaShop/PrestaShop/pull/29373): Fix checkout when one module and no cgv validation. Thank you [@okom3pom](https://github.com/okom3pom)


## Code changes in modules, themes & tools


### Hummingbird theme
* [#368](https://github.com/PrestaShop/hummingbird/pull/368):  Fix undefined index on category-footer. Thank you [@lramos-prolaser](https://github.com/lramos-prolaser)
* [#365](https://github.com/PrestaShop/hummingbird/pull/365): Update theme name. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#364](https://github.com/PrestaShop/hummingbird/pull/364): order return table fix. Thank you [@JBLach](https://github.com/JBLach)


### Distribution API Client
* [#9](https://github.com/PrestaShop/ps_distributionapiclient/pull/9): Release 1.0.2, by [@jolelievre](https://github.com/jolelievre)
* [#8](https://github.com/PrestaShop/ps_distributionapiclient/pull/8): Bump version 1.0.2, by [@jolelievre](https://github.com/jolelievre)
* [#7](https://github.com/PrestaShop/ps_distributionapiclient/pull/7): Fix translation domain, by [@jolelievre](https://github.com/jolelievre)


### Google Analytics module
* [#124](https://github.com/PrestaShop/ps_googleanalytics/pull/124): Add missing domains and use trans instead of l, by [@jolelievre](https://github.com/jolelievre)


### Changes in developer documentation sources
* [#1477](https://github.com/PrestaShop/docs/pull/1477): Update jQuery version. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1476](https://github.com/PrestaShop/docs/pull/1476): Fix jQuery version. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1474](https://github.com/PrestaShop/docs/pull/1474): Correct the folder and extension of css output. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1473](https://github.com/PrestaShop/docs/pull/1473): Correct the folder and extension of css output. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1463](https://github.com/PrestaShop/docs/pull/1463): Define missing hooks in list. Thank you [@zuk3975](https://github.com/zuk3975)
* [#1332](https://github.com/PrestaShop/docs/pull/1332): Add hint about var/cache folder for upgrade. Thank you [@pkirk](https://github.com/pkirk)


### Classic theme
* [#50](https://github.com/PrestaShop/classic-theme/pull/50): feat: Adds mobile and phone preview for future updates. Thank you [@amaury-hanser](https://github.com/amaury-hanser)
* [#49](https://github.com/PrestaShop/classic-theme/pull/49): Add class for additional category description. Thank you [@JBWModules](https://github.com/JBWModules)
* [#43](https://github.com/PrestaShop/classic-theme/pull/43): Fix ps_facetedsearch - bad display after clearing a filter of no result. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Nightly board
* [#92](https://github.com/PrestaShop/nightly-board/pull/92): Bump axios and @nuxtjs/axios. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#91](https://github.com/PrestaShop/nightly-board/pull/91): Bump minimist from 1.2.0 to 1.2.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#90](https://github.com/PrestaShop/nightly-board/pull/90): Bump moment-timezone from 0.5.27 to 0.5.37. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### TranslationTools Bundle
* [#107](https://github.com/PrestaShop/TranslationToolsBundle/pull/107): TranslationNodeVisitor loses messages when parsing multiple files, by [@jolelievre](https://github.com/jolelievre)


### Prestashop UI Kit
* [#194](https://github.com/PrestaShop/prestashop-ui-kit/pull/194): Change link from prestashop.com to prestashop-project.org, by [@Progi1984](https://github.com/Progi1984)


### Docker images
* [#314](https://github.com/PrestaShop/docker/pull/314): Update version manager to handle PS 8.0.0 versions, by [@atomiix](https://github.com/atomiix)
* [#312](https://github.com/PrestaShop/docker/pull/312): Updated the domain update script to update data depending on domain. Thank you [@Clovel](https://github.com/Clovel)


### Customer reassurance block module
* [#440](https://github.com/PrestaShop/blockreassurance/pull/440): Bump eslint from 8.22.0 to 8.23.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#702](https://github.com/PrestaShop/ps_facetedsearch/pull/702): Bump eslint from 8.22.0 to 8.23.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#701](https://github.com/PrestaShop/ps_facetedsearch/pull/701): Bump json-schema from 0.2.3 to 0.4.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#499](https://github.com/PrestaShop/autoupgrade/pull/499): Instert configuration values for password policy. Thank you [@zuk3975](https://github.com/zuk3975)


### stylelint configuration
* [#45](https://github.com/PrestaShop/stylelint-config/pull/45): Bump stylelint from 14.10.0 to 14.11.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Links list module
* [#153](https://github.com/PrestaShop/ps_linklist/pull/153): Release v5.0.5, by [@kpodemski](https://github.com/kpodemski)


### presthubot
* [#57](https://github.com/PrestaShop/presthubot/pull/57): Upgrade vendor versions. Thank you [@Amoifr](https://github.com/Amoifr)
* [#56](https://github.com/PrestaShop/presthubot/pull/56): Create command to list CQRS endpoints. Thank you [@Amoifr](https://github.com/Amoifr)


### Wire payment module
* [#78](https://github.com/PrestaShop/ps_wirepayment/pull/78): Allow only integers for the configuration 'Reservation period', by [@Progi1984](https://github.com/Progi1984)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@lramos-prolaser](https://github.com/lramos-prolaser), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@atomiix](https://github.com/atomiix), [@jolelievre](https://github.com/jolelievre), [@PrestaEdit](https://github.com/PrestaEdit), [@amaury-hanser](https://github.com/amaury-hanser), [@dependabot[bot]](https://github.com/apps/dependabot), [@Progi1984](https://github.com/Progi1984), [@FabienPapet](https://github.com/FabienPapet), [@zuk3975](https://github.com/zuk3975), [@MeKeyCool](https://github.com/MeKeyCool), [@Clovel](https://github.com/Clovel), [@JBWModules](https://github.com/JBWModules), [@JBLach](https://github.com/JBLach), [@okom3pom](https://github.com/okom3pom), [@kpodemski](https://github.com/kpodemski), [@Amoifr](https://github.com/Amoifr), [@Hlavtox](https://github.com/Hlavtox), [@yanmakouf](https://github.com/yanmakouf), [@leemyongpakvn](https://github.com/leemyongpakvn), [@pkirk](https://github.com/pkirk)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

