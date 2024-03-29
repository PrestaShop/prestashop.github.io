---
layout: post
aliases: ["/news/coreweekly-52-2020"]
title:  "PrestaShop Core Weekly - Week 52 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-12-28
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 21th to Sunday 27th of December 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week, maintainer [@kpodemski](https://github.com/kpodemski), helped by [@Progi1984](https://github.com/Progi1984) built the ZIP archive for [PrestaShop 1.7.7.1](https://github.com/PrestaShop/PrestaShop/issues/22306) and delivered it to QA team for validation. This is the first time a PrestaShop release is built by someone who is not an employee of PrestaShop company! Congratulations [@kpodemski](https://github.com/kpodemski)!

As the end of this year is coming, we also wanted to say thank you to all PrestaShop developers for this year, although it has been difficult for many.

Looking forward to 2021 :)

## Releases

* [php-dev-tools](https://github.com/PrestaShop/php-dev-tools): [v3.13](https://github.com/PrestaShop/php-dev-tools/releases/tag/v3.13)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [53 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-12-21..2020-12-27) have been created in the project repositories;
- [46 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-12-21..2020-12-27), including [9 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-12-21..2020-12-27) on the core;
- [72 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-12-21..2020-12-27) in the project repositories;
- [64 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-12-21..2020-12-27), including [53 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-12-21..2020-12-27).



## Code changes in the 'develop' branch


### Core
* [#22346](https://github.com/PrestaShop/PrestaShop/pull/22346): Fix minor code issue in FrontController.php. Thank you [@PululuK](https://github.com/PululuK)


### Back office
* [#22365](https://github.com/PrestaShop/PrestaShop/pull/22365): Fix order view pan overflow, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22284](https://github.com/PrestaShop/PrestaShop/pull/22284): Improve grid definition action column extendability. Thank you [@zuk3975](https://github.com/zuk3975)
* [#22280](https://github.com/PrestaShop/PrestaShop/pull/22280): Add product specific price command, by [@jolelievre](https://github.com/jolelievre)
* [#22185](https://github.com/PrestaShop/PrestaShop/pull/22185): Add UpdateCombinationStock command. Thank you [@zuk3975](https://github.com/zuk3975)
* [#22136](https://github.com/PrestaShop/PrestaShop/pull/22136): Integrate CQRS commands into new product page, by [@jolelievre](https://github.com/jolelievre)
* [#21909](https://github.com/PrestaShop/PrestaShop/pull/21909): Change every toggle on grids to the new ps-switch component, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21653](https://github.com/PrestaShop/PrestaShop/pull/21653): Simplify webservices forms. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#21472](https://github.com/PrestaShop/PrestaShop/pull/21472): Simplify traffic and seo. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)


### Tests
* [#22562](https://github.com/PrestaShop/PrestaShop/pull/22562): Fix click on checkbox while deleting customer, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#22549](https://github.com/PrestaShop/PrestaShop/pull/22549): Update php-cs-fixer to 2.17.2, by [@matks](https://github.com/matks)


## Code changes in the '1.7.7.x' branch


### Core
* [#22532](https://github.com/PrestaShop/PrestaShop/pull/22532): Hook keys must be in lowercase, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#22432](https://github.com/PrestaShop/PrestaShop/pull/22432): Don't redirect to http from https if it is homepage (Fix Chrome security alert when customer register). Thank you [@ludoc](https://github.com/ludoc)
* [#22293](https://github.com/PrestaShop/PrestaShop/pull/22293): Use PS cache config as driver.cache, by [@atomiix](https://github.com/atomiix)


### Back office
* [#22535](https://github.com/PrestaShop/PrestaShop/pull/22535): Method assertCmsCategoryExists doesn't return anything, it throws an exception, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#22249](https://github.com/PrestaShop/PrestaShop/pull/22249): Create Order - Cart details modal - Fix refresh for cart total, by [@sowbiba](https://github.com/sowbiba)
* [#22161](https://github.com/PrestaShop/PrestaShop/pull/22161): Fix group reduction when specific price is set, by [@sowbiba](https://github.com/sowbiba)
* [#21692](https://github.com/PrestaShop/PrestaShop/pull/21692): Refresh order products when a product is added or deleted, by [@sowbiba](https://github.com/sowbiba)


### Tests
* [#22543](https://github.com/PrestaShop/PrestaShop/pull/22543): Add test 'Page for terms and conditions'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#22523](https://github.com/PrestaShop/PrestaShop/pull/22523): Add test 'Activate merchandise returns'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#22521](https://github.com/PrestaShop/PrestaShop/pull/22521): Refactoring alert blocks in UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#22491](https://github.com/PrestaShop/PrestaShop/pull/22491): Add test 'View customer service message page'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#22490](https://github.com/PrestaShop/PrestaShop/pull/22490): Add new FO tests 'Edit account information', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#22433](https://github.com/PrestaShop/PrestaShop/pull/22433): Add test 'Check to delete shop groups'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Simple HTML table display module
* [#19](https://github.com/PrestaShop/gridhtml/pull/19): Bump prestashop/php-dev-tools from 3.12 to 3.13. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Dashboard Trends module
* [#41](https://github.com/PrestaShop/dashtrends/pull/41): Bump prestashop/php-dev-tools from 3.12 to 3.13. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### OnBoarding module
* [#98](https://github.com/PrestaShop/welcome/pull/98): Bump prestashop/php-dev-tools from 3.12 to 3.13. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Custom text module
* [#52](https://github.com/PrestaShop/ps_customtext/pull/52): Bump prestashop/php-dev-tools from 3.12 to 3.13. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#296](https://github.com/PrestaShop/ps_facetedsearch/pull/296): Bump prestashop/php-dev-tools from 3.12 to 3.13. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#294](https://github.com/PrestaShop/ps_facetedsearch/pull/294): Fix cs fixer action, by [@PierreRambaud](https://github.com/PierreRambaud)


### Check payment module
* [#45](https://github.com/PrestaShop/ps_checkpayment/pull/45): Bump prestashop/php-dev-tools from 3.12 to 3.13. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Product Comments module
* [#94](https://github.com/PrestaShop/productcomments/pull/94): Bump prestashop/php-dev-tools from 3.12 to 3.13. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#93](https://github.com/PrestaShop/productcomments/pull/93): Fixed PHPCS Github Action, by [@Progi1984](https://github.com/Progi1984)
* [#89](https://github.com/PrestaShop/productcomments/pull/89): Fixing the bug that appeared when anonymize customer last name option has been added.. Thank you [@Oksydan](https://github.com/Oksydan)


### Theme customization module
* [#40](https://github.com/PrestaShop/ps_themecusto/pull/40): Bump prestashop/php-dev-tools from 3.12 to 3.13. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Order Notifications on the Favicon module
* [#26](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/26): Bump prestashop/php-dev-tools from 3.12 to 3.13. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### PHP Developer Tools
* [#43](https://github.com/PrestaShop/php-dev-tools/pull/43): Add stubs to avoid false positive reports, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Changes in developer documentation
* [#840](https://github.com/PrestaShop/docs/pull/840): Update list-of-hooks.md add displayHeaderCategory. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#837](https://github.com/PrestaShop/docs/pull/837): Explain PR template row impacts, by [@matks](https://github.com/matks)
* [#830](https://github.com/PrestaShop/docs/pull/830): Introduce tips & tricks in FAQ - 1st tip about hooks. Thank you [@zuk3975](https://github.com/zuk3975)
* [#829](https://github.com/PrestaShop/docs/pull/829): Bump ini from 1.3.5 to 1.3.8 in `/src/themes/hugo-theme-learn/_src`. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Links list module
* [#106](https://github.com/PrestaShop/ps_linklist/pull/106): Allow adding product categories. Thank you [@tswfi](https://github.com/tswfi)


### Google Analytics module
* [#86](https://github.com/PrestaShop/ps_googleanalytics/pull/86): Update HookDisplayBackOfficeHeader.php. Thank you [@Shoprunners](https://github.com/Shoprunners)


### Customer "Sign in" link module
* [#29](https://github.com/PrestaShop/ps_customersignin/pull/29): Bump prestashop/php-dev-tools from 3.11 to 3.12. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Example modules
* [#30](https://github.com/PrestaShop/example-modules/pull/30): Adds demo module for grid extension demonstrations. Thank you [@zuk3975](https://github.com/zuk3975)


### PrestaShop Cleaner module
* [#54](https://github.com/PrestaShop/pscleaner/pull/54): Truncate also search related table "alias". Thank you [@nenes25](https://github.com/nenes25)


### PrestaShop Specifications
* [#164](https://github.com/PrestaShop/prestashop-specs/pull/164): Update advanced_parameters-webservice.md. Thank you [@MatShir](https://github.com/MatShir)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@matks](https://github.com/matks), [@boubkerbribri](https://github.com/boubkerbribri), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@Progi1984](https://github.com/Progi1984), [@kpodemski](https://github.com/kpodemski), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@PierreRambaud](https://github.com/PierreRambaud), [@jolelievre](https://github.com/jolelievre), [@Hlavtox](https://github.com/Hlavtox), [@tswfi](https://github.com/tswfi), [@Shoprunners](https://github.com/Shoprunners), [@zuk3975](https://github.com/zuk3975), [@ludoc](https://github.com/ludoc), [@NeOMakinG](https://github.com/NeOMakinG), [@PululuK](https://github.com/PululuK), [@Oksydan](https://github.com/Oksydan), [@atomiix](https://github.com/atomiix), [@sowbiba](https://github.com/sowbiba), [@nenes25](https://github.com/nenes25), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@MatShir](https://github.com/MatShir)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
