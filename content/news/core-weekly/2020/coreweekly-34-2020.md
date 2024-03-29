---
layout: post
aliases: ["/news/coreweekly-34-2020"]
title:  "PrestaShop Core Weekly - Week 34 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-08-26
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 17th to Sunday 23th of August 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The 1.7.7.0 Beta 2 build has been issued and is currently being tested by the QA team. If the test campaign does not report any major issues, we will be able to release it on September 1st as scheduled.

In the meanwhile, two long awaited Pull Requests are experiencing extensive code review:

- [The refactoring of the Translation Backend](https://github.com/PrestaShop/PrestaShop/pull/19487), a huge work started by [@eternoendless](https://github.com/eternoendless) and completed by [@sowbiba](https://github.com/sowbiba)
- [PrestaShop compatibility with php7.4](https://github.com/PrestaShop/PrestaShop/pull/18787) by [@PierreRambaud](https://github.com/PierreRambaud)

Feel free to have a look, these two pull requests are the result of weeks of work and the more eyes the better!


## A quick update about PrestaShop's GitHub issues and pull requests:

- [55 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-08-17..2020-08-23) have been created in the project repositories;
- [43 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-08-17..2020-08-23), including [7 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-08-17..2020-08-23) on the core;
- [59 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-08-17..2020-08-23) in the project repositories;
- [50 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-08-17..2020-08-23), including [36 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-08-17..2020-08-23).



## Code changes in the 'develop' branch


### Core
* [#20658](https://github.com/PrestaShop/PrestaShop/pull/20658): Fix doc comments to reflect actual signatures. Thank you [@mcdado](https://github.com/mcdado)
* [#20646](https://github.com/PrestaShop/PrestaShop/pull/20646): Bad static call to oneself in OrderDetail. Thank you [@jordiweblidera](https://github.com/jordiweblidera)
* [#20593](https://github.com/PrestaShop/PrestaShop/pull/20593): Remove useless comments in HTMLTemplateInvoice.php. Thank you [@PululuK](https://github.com/PululuK)
* [#20453](https://github.com/PrestaShop/PrestaShop/pull/20453): Search combination by ean. Thank you [@camlafit](https://github.com/camlafit)


### Back office
* [#20387](https://github.com/PrestaShop/PrestaShop/pull/20387): Allow duplicates in log when an error is thrown in hooks, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#20375](https://github.com/PrestaShop/PrestaShop/pull/20375): Correct stylelint browsers on new-theme, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#20305](https://github.com/PrestaShop/PrestaShop/pull/20305): Better form errors display for Address form, by [@matks](https://github.com/matks)


### Front office
* [#20592](https://github.com/PrestaShop/PrestaShop/pull/20592):  The delivery note's name is wrong after the download . Thank you [@PululuK](https://github.com/PululuK)
* [#20556](https://github.com/PrestaShop/PrestaShop/pull/20556): Fix images quickview also updating product page by changing product i…, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#20211](https://github.com/PrestaShop/PrestaShop/pull/20211): Fix missing pagination for alternative lang url. Thank you [@Sinepel](https://github.com/Sinepel)


### Tests
* [#20664](https://github.com/PrestaShop/PrestaShop/pull/20664): Update selector for exchange currencies rates and faker for tax group rule, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20647](https://github.com/PrestaShop/PrestaShop/pull/20647): Fix selectors for Seo options form after merge 1.7.7.x into develop, by [@boubkerbribri](https://github.com/boubkerbribri)


### Merge
* [#20624](https://github.com/PrestaShop/PrestaShop/pull/20624): Merge 177x into develop 19/08/2020, by [@matks](https://github.com/matks)


## Code changes in the '1.7.7.x' branch


### Back office
* [#20644](https://github.com/PrestaShop/PrestaShop/pull/20644): Check for address id before creating CartAddress, by [@atomiix](https://github.com/atomiix)
* [#20626](https://github.com/PrestaShop/PrestaShop/pull/20626): Fix duplicate ids in order page, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front office
* [#20598](https://github.com/PrestaShop/PrestaShop/pull/20598): Do not reconvert discounts, by [@atomiix](https://github.com/atomiix)


### Tests
* [#20599](https://github.com/PrestaShop/PrestaShop/pull/20599): Functional tests -  Add CRUD and Bulk actions tests for image types, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20551](https://github.com/PrestaShop/PrestaShop/pull/20551): Functional tests - Add tests 'CRUD and bulk delete Groups', by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#673](https://github.com/PrestaShop/docs/pull/673): Add maintainer's guide, by [@eternoendless](https://github.com/eternoendless)
* [#671](https://github.com/PrestaShop/docs/pull/671): Add 'magic' actionObject hooks. Thank you [@zalexki](https://github.com/zalexki)
* [#670](https://github.com/PrestaShop/docs/pull/670): Split contribution guidelines, by [@eternoendless](https://github.com/eternoendless)
* [#668](https://github.com/PrestaShop/docs/pull/668): Update contribute-by-testing-pull-requests.md. Thank you [@prestaforum](https://github.com/prestaforum)
* [#667](https://github.com/PrestaShop/docs/pull/667): Missing close parentheses. Thank you [@TeapotLex](https://github.com/TeapotLex)
* [#666](https://github.com/PrestaShop/docs/pull/666): Update 1.7.7.md. Thank you [@MatShir](https://github.com/MatShir)
* [#665](https://github.com/PrestaShop/docs/pull/665): Notice on translatable type. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#664](https://github.com/PrestaShop/docs/pull/664): Correct typo on compile assets part, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#662](https://github.com/PrestaShop/docs/pull/662): Add smarty scope to actionFrontControllerSetVariables hook. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#661](https://github.com/PrestaShop/docs/pull/661): Explain the bridge between SF and legacy hooks, by [@matks](https://github.com/matks)
* [#660](https://github.com/PrestaShop/docs/pull/660): Pupeteer link. Thank you [@Rho-bur](https://github.com/Rho-bur)


### Nightly board
* [#46](https://github.com/PrestaShop/nightly-board/pull/46): Fix google translation bug and toggle darkmode by default if OS is using it, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#45](https://github.com/PrestaShop/nightly-board/pull/45): Align results to the left, by [@NeOMakinG](https://github.com/NeOMakinG)


### PrestonBot
* [#95](https://github.com/PrestaShop/prestonbot/pull/95): Add new translation strings detection feature, by [@atomiix](https://github.com/atomiix)


### PrestaShop Specifications
* [#113](https://github.com/PrestaShop/prestashop-specs/pull/113): Disabled tabs, Errors in tabs, Edit combination modal. Thank you [@TristanLDD](https://github.com/TristanLDD)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@eternoendless](https://github.com/eternoendless), [@boubkerbribri](https://github.com/boubkerbribri), [@zalexki](https://github.com/zalexki), [@mcdado](https://github.com/mcdado), [@prestaforum](https://github.com/prestaforum), [@TeapotLex](https://github.com/TeapotLex), [@jordiweblidera](https://github.com/jordiweblidera), [@atomiix](https://github.com/atomiix), [@NeOMakinG](https://github.com/NeOMakinG), [@MatShir](https://github.com/MatShir), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@jf-viguier](https://github.com/jf-viguier), [@PierreRambaud](https://github.com/PierreRambaud), [@matks](https://github.com/matks), [@jolelievre](https://github.com/jolelievre), [@Rho-bur](https://github.com/Rho-bur), [@PululuK](https://github.com/PululuK), [@camlafit](https://github.com/camlafit), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@Sinepel](https://github.com/Sinepel), [@TristanLDD](https://github.com/TristanLDD)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
