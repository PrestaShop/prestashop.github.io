---
layout: post
aliases: ["/news/coreweekly-27-2022"]
title:  "PrestaShop Core Weekly - Week 27 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-07-12
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 4th to Sunday 10th of July 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week, the maintainer team said goodbye to @Progi1984, who decided to quit the role of maintainer, leaving behind a big gap and making it very close to the top of the contributors podium. Thank you for your outstanding work on the project, Franck!

Work continues on 8.0.0, the QA team submitted the [campaign report](https://github.com/PrestaShop/PrestaShop/issues/26427#issuecomment-1179142296) that details all regressions detected during the audit.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [67 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-07-04..2022-07-10) have been created in the project repositories;
- [39 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-07-04..2022-07-10), including [10 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-07-04..2022-07-10) on the core;
- [81 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-07-04..2022-07-10) in the project repositories;
- [80 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-07-04..2022-07-10), including [68 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-07-04..2022-07-10).


## Code changes in the 'develop' branch


### Core
* [#28949](https://github.com/PrestaShop/PrestaShop/pull/28949): Change PrestaShop URL in footer of emails. Thank you [@micka-fdz](https://github.com/micka-fdz)


### Back office
* [#28843](https://github.com/PrestaShop/PrestaShop/pull/28843): Remove Addons reference in the Improve > Theme page, by [@Progi1984](https://github.com/Progi1984)
* [#28827](https://github.com/PrestaShop/PrestaShop/pull/28827): Fix default theme compatibility with npm 8, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#28553](https://github.com/PrestaShop/PrestaShop/pull/28553): Autofill empty link_rewrite in product update handlers. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28246](https://github.com/PrestaShop/PrestaShop/pull/28246): Fix DisabledProductGridDefinitionFactory. Thank you [@zuk3975](https://github.com/zuk3975)


### Front office
* [#28541](https://github.com/PrestaShop/PrestaShop/pull/28541): New method Tools::getCurrentUrl(). Thank you [@jf-viguier](https://github.com/jf-viguier)


### Tests
* [#28926](https://github.com/PrestaShop/PrestaShop/pull/28926): Set permissions for GitHub actions. Thank you [@naveensrinivasan](https://github.com/naveensrinivasan)


## Code changes in the '8.0.x' branch


### Back office
* [#28984](https://github.com/PrestaShop/PrestaShop/pull/28984): Fix customer edit/add select all group access, by [@atomiix](https://github.com/atomiix)
* [#28973](https://github.com/PrestaShop/PrestaShop/pull/28973): Do not allow 0 as number of products per page, by [@atomiix](https://github.com/atomiix)
* [#28936](https://github.com/PrestaShop/PrestaShop/pull/28936): Fix configure warning when module is disabled or uninstalled. Thank you [@okom3pom](https://github.com/okom3pom)
* [#28898](https://github.com/PrestaShop/PrestaShop/pull/28898): BO - Customer view page - The status of the voucher is always disabled. Thank you [@okom3pom](https://github.com/okom3pom)


### Front office
* [#28524](https://github.com/PrestaShop/PrestaShop/pull/28524): Fix select2 style in order view. Thank you [@MeKeyCool](https://github.com/MeKeyCool)


### Tests
* [#28962](https://github.com/PrestaShop/PrestaShop/pull/28962): Fix nightly 8.0.x - Fix 'CRUD customer' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Back office
* [#28829](https://github.com/PrestaShop/PrestaShop/pull/28829): Fix performances links spaces and URLs, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#28904](https://github.com/PrestaShop/PrestaShop/pull/28904): Fix responsive for product quick view.. Thank you [@MeKeyCool](https://github.com/MeKeyCool)


### Installer
* [#28845](https://github.com/PrestaShop/PrestaShop/pull/28845): Update to latest blockwishlist module version 2.1.1, by [@jolelievre](https://github.com/jolelievre)


## Code changes in modules, themes & tools


### Hummingbird theme
* [#341](https://github.com/PrestaShop/hummingbird/pull/341): Improve form errors UX. Thank you [@mparvazi](https://github.com/mparvazi)
* [#339](https://github.com/PrestaShop/hummingbird/pull/339): Fix event handling for QI. Thank you [@mparvazi](https://github.com/mparvazi)
* [#336](https://github.com/PrestaShop/hummingbird/pull/336): hiding the quick view after adding a product to the cart. Thank you [@JBLach](https://github.com/JBLach)
* [#335](https://github.com/PrestaShop/hummingbird/pull/335): active table of return fix dekstop/mobile. Thank you [@JBLach](https://github.com/JBLach)
* [#333](https://github.com/PrestaShop/hummingbird/pull/333): Use accordions as categories with childs on categorytree, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#332](https://github.com/PrestaShop/hummingbird/pull/332): Add !important to our custom helpers, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#329](https://github.com/PrestaShop/hummingbird/pull/329): Change PrestaShop URL in footer. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#327](https://github.com/PrestaShop/hummingbird/pull/327): Fix npm 8 compatibility, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#326](https://github.com/PrestaShop/hummingbird/pull/326): Fix category duplication and image sizes. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#320](https://github.com/PrestaShop/hummingbird/pull/320): Style social follow module. Thank you [@rodriciru](https://github.com/rodriciru)
* [#312](https://github.com/PrestaShop/hummingbird/pull/312): Stylise psgdpr page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#269](https://github.com/PrestaShop/hummingbird/pull/269): Ps_banner module image display fix. Thank you [@Oksydan](https://github.com/Oksydan)


###  Project health files
* [#4](https://github.com/PrestaShop/.github/pull/4): Fix run Os project composite workflow, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#3](https://github.com/PrestaShop/.github/pull/3): Add Composite action to run OS tests projects from another repo, by [@boubkerbribri](https://github.com/boubkerbribri)


### Issues Bot
* [#80](https://github.com/PrestaShop/issuebot/pull/80): Add kanban 1.7.8.7 and change milestone, by [@NeOMakinG](https://github.com/NeOMakinG)


### Traces
* [#30](https://github.com/PrestaShop/traces/pull/30): Add missing psgdpr repository. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#29](https://github.com/PrestaShop/traces/pull/29): Fix Hummingbird repository name. Thank you [@micka-fdz](https://github.com/micka-fdz)


### Customer reassurance block module
* [#420](https://github.com/PrestaShop/blockreassurance/pull/420): Bump vue from 2.7.2 to 2.7.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#419](https://github.com/PrestaShop/blockreassurance/pull/419): Bump vue from 2.7.0 to 2.7.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#418](https://github.com/PrestaShop/blockreassurance/pull/418): Bump eslint from 8.18.0 to 8.19.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#417](https://github.com/PrestaShop/blockreassurance/pull/417): Bump vue from 2.6.14 to 2.7.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### The PrestaShop open source project
* [#110](https://github.com/PrestaShop/open-source/pull/110): New committers, by [@kpodemski](https://github.com/kpodemski)
* [#108](https://github.com/PrestaShop/open-source/pull/108): Add AureRita and sLorenzini to organization. Thank you [@AureRita](https://github.com/AureRita)
* [#107](https://github.com/PrestaShop/open-source/pull/107): Remove Progi1984 from maintainers, by [@Progi1984](https://github.com/Progi1984)


### Nightly board
* [#86](https://github.com/PrestaShop/nightly-board/pull/86): Deliver to master, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#83](https://github.com/PrestaShop/nightly-board/pull/83): Bind filters & pagination with url query params, by [@atomiix](https://github.com/atomiix)


### Banner module
* [#47](https://github.com/PrestaShop/ps_banner/pull/47): Bump version to 2.1.2, by [@NeOMakinG](https://github.com/NeOMakinG)


### Changes in developer documentation sources
* [#1404](https://github.com/PrestaShop/docs/pull/1404): Add 2 missing namespaces.. Thank you [@PrestaSafe](https://github.com/PrestaSafe)
* [#1403](https://github.com/PrestaShop/docs/pull/1403): Fix minor typos for Modules section. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1402](https://github.com/PrestaShop/docs/pull/1402): Fix missing grid's namespaces example. Thank you [@PrestaSafe](https://github.com/PrestaSafe)
* [#1397](https://github.com/PrestaShop/docs/pull/1397): Fix link to PHP CS Fixer. Thank you [@Sasni](https://github.com/Sasni)
* [#1396](https://github.com/PrestaShop/docs/pull/1396): Fix old link to https://cs.sensiolabs.org/ . Thank you [@Sasni](https://github.com/Sasni)
* [#1394](https://github.com/PrestaShop/docs/pull/1394): Fix catalog tabs parent. Thank you [@PululuK](https://github.com/PululuK)
* [#1389](https://github.com/PrestaShop/docs/pull/1389): Fix minor typos for Modules section. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### MJML Theme Converter
* [#25](https://github.com/PrestaShop/mjml-theme-converter/pull/25): Change PrestaShop URL in footer. Thank you [@micka-fdz](https://github.com/micka-fdz)


### Classic theme
* [#42](https://github.com/PrestaShop/classic-theme/pull/42): Change PrestaShop URL in footer. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#41](https://github.com/PrestaShop/classic-theme/pull/41): Fix responsive for product quick view.. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#21](https://github.com/PrestaShop/classic-theme/pull/21): Add strict password policy, by [@NeOMakinG](https://github.com/NeOMakinG)


### Faceted search module
* [#678](https://github.com/PrestaShop/ps_facetedsearch/pull/678): Bump eslint from 8.18.0 to 8.19.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Best customers statistics module
* [#28](https://github.com/PrestaShop/statsbestcustomers/pull/28): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Viewed products block module
* [#26](https://github.com/PrestaShop/ps_viewedproduct/pull/26): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Theme customization module
* [#52](https://github.com/PrestaShop/ps_themecusto/pull/52): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Share Buttons module
* [#54](https://github.com/PrestaShop/ps_sharebuttons/pull/54): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Language selector module
* [#29](https://github.com/PrestaShop/ps_languageselector/pull/29): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Product Comments module
* [#145](https://github.com/PrestaShop/productcomments/pull/145): Fix rating is not displayed in the second Quick view. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Dashboard Trends module
* [#54](https://github.com/PrestaShop/dashtrends/pull/54): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Dashboard Activity module
* [#32](https://github.com/PrestaShop/dashactivity/pull/32): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### PrestaShop Project Metrics
* [#39](https://github.com/PrestaShop/ps-project-metrics/pull/39): Remove Progi1984 from maintainers, by [@Progi1984](https://github.com/Progi1984)


### PrestaShop contributors website
* [#82](https://github.com/PrestaShop/TopContributors/pull/82): Remove Progi1984 from maintainers, by [@Progi1984](https://github.com/Progi1984)


### presthubot
* [#55](https://github.com/PrestaShop/presthubot/pull/55): Remove Progi1984 from maintainers, by [@Progi1984](https://github.com/Progi1984)


### PrestaShop Specifications
* [#349](https://github.com/PrestaShop/prestashop-specs/pull/349): Update Product V2 specs. Thank you [@MatShir](https://github.com/MatShir)


### Auto Upgrade module
* [#441](https://github.com/PrestaShop/autoupgrade/pull/441): Add SQL upgrade queries for new unit price column, by [@jolelievre](https://github.com/jolelievre)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@mparvazi](https://github.com/mparvazi), [@boubkerbribri](https://github.com/boubkerbribri), [@NeOMakinG](https://github.com/NeOMakinG), [@JBLach](https://github.com/JBLach), [@micka-fdz](https://github.com/micka-fdz), [@dependabot[bot]](https://github.com/apps/dependabot), [@atomiix](https://github.com/atomiix), [@kpodemski](https://github.com/kpodemski), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@PrestaSafe](https://github.com/PrestaSafe), [@leemyongpakvn](https://github.com/leemyongpakvn), [@AureRita](https://github.com/AureRita), [@okom3pom](https://github.com/okom3pom), [@naveensrinivasan](https://github.com/naveensrinivasan), [@MeKeyCool](https://github.com/MeKeyCool), [@Progi1984](https://github.com/Progi1984), [@Hlavtox](https://github.com/Hlavtox), [@jolelievre](https://github.com/jolelievre), [@Sasni](https://github.com/Sasni), [@PululuK](https://github.com/PululuK), [@MatShir](https://github.com/MatShir), [@rodriciru](https://github.com/rodriciru), [@zuk3975](https://github.com/zuk3975), [@jf-viguier](https://github.com/jf-viguier), [@Oksydan](https://github.com/Oksydan)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

