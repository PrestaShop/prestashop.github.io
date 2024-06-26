---
layout: post
aliases: ["/news/coreweekly-20-2020"]
title:  "PrestaShop Core Weekly - Week 20 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-05-25 10:00:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 11th to Sunday 17th of May 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [89 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-05-11..2020-05-17) have been created in the project repositories;
- [49 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-05-11..2020-05-17), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-05-11..2020-05-17) on the core;
- [58 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-05-11..2020-05-17) in the project repositories;
- [61 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-05-11..2020-05-17), including [47 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-05-11..2020-05-17).



## Code changes in the 'develop' branch


### Tests
* [#19115](https://github.com/PrestaShop/PrestaShop/pull/19115): Functional tests - Fix order message grid modal, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19065](https://github.com/PrestaShop/PrestaShop/pull/19065): Functional tests - Fix nightly 11/05/2020. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


### Merge
* [#19107](https://github.com/PrestaShop/PrestaShop/pull/19107): Merge 1.7.7.x into develop - 13/05/2020, by [@jolelievre](https://github.com/jolelievre)


## Code changes in the '1.7.7.x' branch


### Core
* [#19063](https://github.com/PrestaShop/PrestaShop/pull/19063): Fix simplfied url not properly set for multilang categories, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#15871](https://github.com/PrestaShop/PrestaShop/pull/15871): Avoid error when trying to translate an invalid module. Thank you [@PululuK](https://github.com/PululuK)


### Back office
* [#19103](https://github.com/PrestaShop/PrestaShop/pull/19103): Redirect to dashboard when employee default page is unauthorized, by [@sowbiba](https://github.com/sowbiba)
* [#19089](https://github.com/PrestaShop/PrestaShop/pull/19089): Fix bug keeping user from accessing his profile page in BO, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#19086](https://github.com/PrestaShop/PrestaShop/pull/19086): BO - New Product - In MultiLang BO, the default name input wasn't in the employee language, by [@Progi1984](https://github.com/Progi1984)
* [#19058](https://github.com/PrestaShop/PrestaShop/pull/19058): Refresh invoices total when product price is updated, by [@sowbiba](https://github.com/sowbiba)
* [#19039](https://github.com/PrestaShop/PrestaShop/pull/19039): Fix product pagination in order with customization, by [@atomiix](https://github.com/atomiix)
* [#19032](https://github.com/PrestaShop/PrestaShop/pull/19032): Update ps_themecusto to the latest version, by [@atomiix](https://github.com/atomiix)


### Front office
* [#18993](https://github.com/PrestaShop/PrestaShop/pull/18993): Fix discount display on multicurrency context, by [@sowbiba](https://github.com/sowbiba)
* [#18884](https://github.com/PrestaShop/PrestaShop/pull/18884): FO: Display 'free' as shipping cost in the cart when a cart rule grants free shipping, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Tests
* [#19157](https://github.com/PrestaShop/PrestaShop/pull/19157): Functional tests - Delete bo base page from invoices tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19137](https://github.com/PrestaShop/PrestaShop/pull/19137): Functional tests - Sort order messages table. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19133](https://github.com/PrestaShop/PrestaShop/pull/19133): Functional tests - Delete boBasePage for functional tests orders, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19127](https://github.com/PrestaShop/PrestaShop/pull/19127): Functional tests - Delete bo base page from sanity tests , by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19126](https://github.com/PrestaShop/PrestaShop/pull/19126): Functional tests - Sort all tables in monitoring page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19109](https://github.com/PrestaShop/PrestaShop/pull/19109): Functional tests - Add test subscribe to newsletter from BO, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19092](https://github.com/PrestaShop/PrestaShop/pull/19092): Functional tests - Edit home category. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19088](https://github.com/PrestaShop/PrestaShop/pull/19088): Functional tests - Filter and sort files. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19074](https://github.com/PrestaShop/PrestaShop/pull/19074): Functional tests - Add test pagination order message, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19071](https://github.com/PrestaShop/PrestaShop/pull/19071): Functional tests - Add test taxes pagination, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19069](https://github.com/PrestaShop/PrestaShop/pull/19069): Functional tests - Profiles pagination. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19067](https://github.com/PrestaShop/PrestaShop/pull/19067): Functional tests - Sort profiles. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19066](https://github.com/PrestaShop/PrestaShop/pull/19066): Functional test - Add test quick edit languages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19027](https://github.com/PrestaShop/PrestaShop/pull/19027): Functional tests - Export sql query. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#540](https://github.com/PrestaShop/docs/pull/540): Add a validation rule to avoid collisions between modules , by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#539](https://github.com/PrestaShop/docs/pull/539): Update dependencies for security reasons, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#536](https://github.com/PrestaShop/docs/pull/536): Add info about the CQRS debug toolbar, by [@jolelievre](https://github.com/jolelievre)
* [#535](https://github.com/PrestaShop/docs/pull/535): Update index.md. Thank you [@derekjwhitten](https://github.com/derekjwhitten)
* [#534](https://github.com/PrestaShop/docs/pull/534): Update src/content/1.7/modules/introduction.md. Thank you [@aunhappy](https://github.com/aunhappy)
* [#532](https://github.com/PrestaShop/docs/pull/532): Provide an example for cron tasks in modules, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#510](https://github.com/PrestaShop/docs/pull/510): Explain how to test pull requests and branches with our vagrant box, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#421](https://github.com/PrestaShop/docs/pull/421): Modules: replace "addCSS" and "addJS" by "registerStylesheet" and "registerJavascript". Thank you [@yannicka](https://github.com/yannicka)


### nightly-board
* [#30](https://github.com/PrestaShop/nightly-board/pull/30): Fix bug on report with failures that overflows, by [@NeOMakinG](https://github.com/NeOMakinG)


### Translation Files repository
* [#8](https://github.com/PrestaShop/TranslationFiles/pull/8): Update latest symlinks for 1.7.7, by [@jolelievre](https://github.com/jolelievre)


### Core Weekly Generator tool
* [#30](https://github.com/PrestaShop/core-weekly-generator/pull/30): add new modules, by [@ttoine](https://github.com/ttoine)


### Wishlist block
* [#36](https://github.com/PrestaShop/blockwishlist/pull/36): Wishlist controller. Thank you [@pablopolyte](https://github.com/pablopolyte)
* [#34](https://github.com/PrestaShop/blockwishlist/pull/34): [wip]add a product to a wishlist. Thank you [@pablopolyte](https://github.com/pablopolyte)


### Faceted search module
* [#169](https://github.com/PrestaShop/ps_facetedsearch/pull/169): Add option to enable / disable cache system, by [@PierreRambaud](https://github.com/PierreRambaud)


### Data mining for statistics
* [#10](https://github.com/PrestaShop/statsdata/pull/10): Make sure id_guest is defined, by [@PierreRambaud](https://github.com/PierreRambaud)


### Traces
* [#4](https://github.com/PrestaShop/traces/pull/4): Fetch contributors from an organization, by [@Progi1984](https://github.com/Progi1984)


### Search bar autocomplete
* [#3](https://github.com/PrestaShop/ps_searchbarjqauto/pull/3): Fix error when there is no cover images in product. Thank you [@jonnydevv](https://github.com/jonnydevv)


### ps_productinfo
* [#11](https://github.com/PrestaShop/ps_productinfo/pull/11): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@boubkerbribri](https://github.com/boubkerbribri), [@jolelievre](https://github.com/jolelievre), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@NeOMakinG](https://github.com/NeOMakinG), [@PierreRambaud](https://github.com/PierreRambaud), [@sowbiba](https://github.com/sowbiba), [@derekjwhitten](https://github.com/derekjwhitten), [@matthieu-rolland](https://github.com/matthieu-rolland), [@Progi1984](https://github.com/Progi1984), [@ttoine](https://github.com/ttoine), [@pablopolyte](https://github.com/pablopolyte), [@aunhappy](https://github.com/aunhappy), [@atomiix](https://github.com/atomiix), [@yannicka](https://github.com/yannicka), [@PululuK](https://github.com/PululuK), [@jonnydevv](https://github.com/jonnydevv), [@MathiasReker](https://github.com/MathiasReker)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
