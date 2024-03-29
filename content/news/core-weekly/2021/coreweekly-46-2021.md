---
layout: post
aliases: ["/news/coreweekly-46-2021"]
title:  "PrestaShop Core Weekly - Week 46 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-11-22
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 15th to Sunday 21th of November 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [64 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-11-15..2021-11-21) have been created in the project repositories;
- [49 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-11-15..2021-11-21), including [19 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-11-15..2021-11-21) on the core;
- [73 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-11-15..2021-11-21) in the project repositories;
- [86 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-11-15..2021-11-21), including [56 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-11-15..2021-11-21).
        


## Code changes in the 'develop' branch


### Core
* [#26571](https://github.com/PrestaShop/PrestaShop/pull/26571): Use the ModuleInterface interface instead of class Module, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#26324](https://github.com/PrestaShop/PrestaShop/pull/26324): Remove deprecated methods into taxes related classes. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26264](https://github.com/PrestaShop/PrestaShop/pull/26264): Add new cli command for getting and setting debug mode. Thank you [@tswfi](https://github.com/tswfi)
* [#25713](https://github.com/PrestaShop/PrestaShop/pull/25713): Remove PrestaShop API Calls (native, native_all, customer, must-have), by [@Progi1984](https://github.com/Progi1984)
* [#24172](https://github.com/PrestaShop/PrestaShop/pull/24172): Bump version to 8.0.0. Thank you [@PululuK](https://github.com/PululuK)


### Back office
* [#26560](https://github.com/PrestaShop/PrestaShop/pull/26560): In BackOffice, fixed the missing link of CSS bundles for RTL languages. Thank you [@mparvazi](https://github.com/mparvazi)
* [#26509](https://github.com/PrestaShop/PrestaShop/pull/26509): Fix module manager wrong behaviors, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#26430](https://github.com/PrestaShop/PrestaShop/pull/26430): Fix legacy tinymce layout is too small, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#26425](https://github.com/PrestaShop/PrestaShop/pull/26425): Fix duplication of specific prices that apply to a single combination. Thank you [@samaij](https://github.com/samaij)
* [#26239](https://github.com/PrestaShop/PrestaShop/pull/26239): Move dashboard right column elements into a hook. Thank you [@intraordinaire](https://github.com/intraordinaire)
* [#26062](https://github.com/PrestaShop/PrestaShop/pull/26062): Clean Back-office templates, part 3 - improve. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#25562](https://github.com/PrestaShop/PrestaShop/pull/25562): Move TranslationsController into Admin/Improve/International, by [@eternoendless](https://github.com/eternoendless)
* [#25327](https://github.com/PrestaShop/PrestaShop/pull/25327): Improve layout of datetime columns when there's not enough space, by [@eternoendless](https://github.com/eternoendless)


### Front office
* [#26586](https://github.com/PrestaShop/PrestaShop/pull/26586): Added modules to hook DisplayHome in classic theme, by [@Progi1984](https://github.com/Progi1984)
* [#25818](https://github.com/PrestaShop/PrestaShop/pull/25818): Change jQuery-ui position before theme.js to avoid overriding bootstrap ones, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#25204](https://github.com/PrestaShop/PrestaShop/pull/25204): Fix return for virtual product . Thank you [@okom3pom](https://github.com/okom3pom)
* [#25069](https://github.com/PrestaShop/PrestaShop/pull/25069): In case multiple payment options are available. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#24798](https://github.com/PrestaShop/PrestaShop/pull/24798): Get quantity_wanted for product only when it is needed, by [@kpodemski](https://github.com/kpodemski)


### Tests
* [#26652](https://github.com/PrestaShop/PrestaShop/pull/26652): Add config SMTP and reset SMTP to common tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#26649](https://github.com/PrestaShop/PrestaShop/pull/26649): Move (data, commonTests, tools, utils) from campaigns to UI directory . Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#26615](https://github.com/PrestaShop/PrestaShop/pull/26615): Functional tests - Add new test to check 'Payment block in view order page'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#26505](https://github.com/PrestaShop/PrestaShop/pull/26505): Functional tests - Add new test 'Check merchandise returns tab from view order page'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Back office
* [#26524](https://github.com/PrestaShop/PrestaShop/pull/26524): Fix webpack production build, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#26526](https://github.com/PrestaShop/PrestaShop/pull/26526): Fixed wishlist button disappear when products are filtered. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)


## Code changes in modules, themes & tools


### Changes in developer documentation sources
* [#1227](https://github.com/PrestaShop/docs/pull/1227): Fix version of the prestashop where you can use new grid hooks, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#1225](https://github.com/PrestaShop/docs/pull/1225): Update localhost.md. Thank you [@rickygzz](https://github.com/rickygzz)
* [#1223](https://github.com/PrestaShop/docs/pull/1223): Update how-to-handle-multi-lang-doctrine-entity fix mistake. Thank you [@WebHelpersPau](https://github.com/WebHelpersPau)
* [#1222](https://github.com/PrestaShop/docs/pull/1222): Fix typo in heading. Thank you [@templatin](https://github.com/templatin)
* [#1221](https://github.com/PrestaShop/docs/pull/1221): Fixed the link that points to the correct phpCs configuration file. Thank you [@mimou78](https://github.com/mimou78)
* [#1220](https://github.com/PrestaShop/docs/pull/1220): Add documentation for debug command. Thank you [@tswfi](https://github.com/tswfi)
* [#1219](https://github.com/PrestaShop/docs/pull/1219): Update how-to-handle-multi-lang-doctrine-entity, fix error. Thank you [@WebHelpersPau](https://github.com/WebHelpersPau)
* [#1218](https://github.com/PrestaShop/docs/pull/1218): Replaced deprecated method. Thank you [@copostic](https://github.com/copostic)
* [#1217](https://github.com/PrestaShop/docs/pull/1217): Explain supported branches and regressions better, by [@eternoendless](https://github.com/eternoendless)
* [#1216](https://github.com/PrestaShop/docs/pull/1216): Precise version for grid hooks, by [@kpodemski](https://github.com/kpodemski)
* [#1213](https://github.com/PrestaShop/docs/pull/1213): Document changes to the assets loading and a few improvements, by [@kpodemski](https://github.com/kpodemski)


### Simple HTML table display module
* [#26](https://github.com/PrestaShop/gridhtml/pull/26): Release 2.0.2, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#25](https://github.com/PrestaShop/gridhtml/pull/25): Bump to  2.0.2, by [@PierreRambaud](https://github.com/PierreRambaud)


### NVD3 Charts module
* [#18](https://github.com/PrestaShop/graphnvd3/pull/18): Release 2.0.2, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17](https://github.com/PrestaShop/graphnvd3/pull/17): Bump to 2.0.2, by [@PierreRambaud](https://github.com/PierreRambaud)


### New 8.0.0 Front-office theme
* [#118](https://github.com/PrestaShop/theme-refacto/pull/118): Fix position of cart crosselling hook. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#116](https://github.com/PrestaShop/theme-refacto/pull/116): Bs4 classes qv carousel. Thank you [@rodriciru](https://github.com/rodriciru)
* [#111](https://github.com/PrestaShop/theme-refacto/pull/111): Style subcategories, sitemap, stores. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Customer reassurance block module
* [#314](https://github.com/PrestaShop/blockreassurance/pull/314): Bump mini-css-extract-plugin from 2.4.4 to 2.4.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#313](https://github.com/PrestaShop/blockreassurance/pull/313): Bump webpack from 5.64.0 to 5.64.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#558](https://github.com/PrestaShop/ps_facetedsearch/pull/558): Bump @babel/preset-env from 7.16.0 to 7.16.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#557](https://github.com/PrestaShop/ps_facetedsearch/pull/557): Bump webpack from 5.64.0 to 5.64.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#550](https://github.com/PrestaShop/ps_facetedsearch/pull/550): By default put "indexable" option to No in add/edit attributes & features pages. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Docker images
* [#281](https://github.com/PrestaShop/docker/pull/281): Add PrestaShop 1.7.8.1 images, by [@atomiix](https://github.com/atomiix)


### Product Comments module
* [#117](https://github.com/PrestaShop/productcomments/pull/117): Bump version to 5.0.0, by [@Progi1984](https://github.com/Progi1984)


### Sales and orders statistics module
* [#24](https://github.com/PrestaShop/statssales/pull/24): Fixed error when there are no orders, by [@Progi1984](https://github.com/Progi1984)


### Email subscription module
* [#84](https://github.com/PrestaShop/ps_emailsubscription/pull/84): Add newsletter registration hook to email verification handler. Thank you [@samaij](https://github.com/samaij)


### Best customers statistics module
* [#21](https://github.com/PrestaShop/statsbestcustomers/pull/21): Fixed number of visits on module statsbestcustomers, by [@Progi1984](https://github.com/Progi1984)


### TranslationTools Bundle
* [#87](https://github.com/PrestaShop/TranslationToolsBundle/pull/87): Add ability to exclude directories when extracting, by [@sowbiba](https://github.com/sowbiba)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@PierreRambaud](https://github.com/PierreRambaud), [@rickygzz](https://github.com/rickygzz), [@Hlavtox](https://github.com/Hlavtox), [@dependabot[bot]](https://github.com/apps/dependabot), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@WebHelpersPau](https://github.com/WebHelpersPau), [@templatin](https://github.com/templatin), [@mimou78](https://github.com/mimou78), [@tswfi](https://github.com/tswfi), [@rodriciru](https://github.com/rodriciru), [@Progi1984](https://github.com/Progi1984), [@atomiix](https://github.com/atomiix), [@copostic](https://github.com/copostic), [@eternoendless](https://github.com/eternoendless), [@kpodemski](https://github.com/kpodemski), [@mparvazi](https://github.com/mparvazi), [@Kaudaj](https://github.com/Kaudaj), [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds), [@NeOMakinG](https://github.com/NeOMakinG), [@samaij](https://github.com/samaij), [@PrestaEdit](https://github.com/PrestaEdit), [@intraordinaire](https://github.com/intraordinaire), [@okom3pom](https://github.com/okom3pom), [@moncef-essid](https://github.com/moncef-essid), [@sowbiba](https://github.com/sowbiba), [@PululuK](https://github.com/PululuK)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

