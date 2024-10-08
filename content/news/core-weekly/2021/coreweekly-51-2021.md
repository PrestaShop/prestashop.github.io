---
layout: post
aliases: ["/news/coreweekly-51-2021"]
title:  "PrestaShop Core Weekly - Week 51 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-12-28
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 20th to Sunday 26th of December 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear all, the PrestaShop maintainer team hopes that you are having a good time as the end of the year gets closer! The next Core Weekly will be published in 2022. We would like to thank you once again for being part of this community in 2021. One small step for each of you, one giant leap for the project!

This year has featured many important changes in PrestaShop and PHP.

[PHP 8.0.0](https://www.php.net/releases/8.0/en.php) was released at the end of 2020 and we have seen it slowly being adopted everywhere during 2021. The same happened for [PrestaShop 1.7.7](https://build.prestashop.com/news/prestashop-1-7-7-0-available/). We launched the [public demos](https://build.prestashop.com/news/first-public-oss-demo/), we released [PrestaShop 1.7.8](https://build.prestashop.com/news/prestashop-1-7-8-0-available/) and finally we announced what we expect to happen for the [future of PrestaShop](https://build.prestashop.com/news/prestashop-beyond-1-7/). We do not forget the birth of [the PHP foundation](https://blog.jetbrains.com/phpstorm/2021/11/the-php-foundation/) that we hope will improve greatly how the language evolves.

We hope to see more great news in 2022...


## Releases

* [TranslationToolsBundle](https://github.com/PrestaShop/TranslationToolsBundle): [v5.0.2](https://github.com/PrestaShop/TranslationToolsBundle/releases/tag/v5.0.2)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [51 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-12-20..2021-12-26) have been created in the project repositories;
- [36 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-12-20..2021-12-26), including [17 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-12-20..2021-12-26) on the core;
- [64 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-12-20..2021-12-26) in the project repositories;
- [80 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-12-20..2021-12-26), including [66 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-12-20..2021-12-26).



## Code changes in the 'develop' branch


### Core
* [#27092](https://github.com/PrestaShop/PrestaShop/pull/27092): Deprecate stripslashes, by [@kpodemski](https://github.com/kpodemski)
* [#27082](https://github.com/PrestaShop/PrestaShop/pull/27082): Fix wording about footer display in Controller class. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#27057](https://github.com/PrestaShop/PrestaShop/pull/27057): Add missing smarty variable, by [@atomiix](https://github.com/atomiix)
* [#27004](https://github.com/PrestaShop/PrestaShop/pull/27004): PHPStan (Level 3) on controllers/, by [@Progi1984](https://github.com/Progi1984)
* [#26947](https://github.com/PrestaShop/PrestaShop/pull/26947): Removed PrestaShop API Calls (install-modules & check-customer), by [@Progi1984](https://github.com/Progi1984)
* [#26874](https://github.com/PrestaShop/PrestaShop/pull/26874): Simplify huge IF-ELSE blocks in validateOrder. Thank you [@pnucci](https://github.com/pnucci)
* [#26682](https://github.com/PrestaShop/PrestaShop/pull/26682): Remove Combination::location and quantity, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#26662](https://github.com/PrestaShop/PrestaShop/pull/26662): Remove code linked to `trackingfront` & `watermark` Modules, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#27091](https://github.com/PrestaShop/PrestaShop/pull/27091): Return integer instead of bool into checkModulesNames(). Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#27066](https://github.com/PrestaShop/PrestaShop/pull/27066): Allow null for ip maintenance and maintenance message fields, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#27006](https://github.com/PrestaShop/PrestaShop/pull/27006): Update node-sass in order to be compatible with Node 16, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#26994](https://github.com/PrestaShop/PrestaShop/pull/26994): Multistore: fix configuration value not saved for current context, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#26475](https://github.com/PrestaShop/PrestaShop/pull/26475): Fix Combination::getIdByReference returns wrong id. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)
* [#26024](https://github.com/PrestaShop/PrestaShop/pull/26024): New add product modal, by [@jolelievre](https://github.com/jolelievre)
* [#26022](https://github.com/PrestaShop/PrestaShop/pull/26022): Add some more precises TypeScript interfaces, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22520](https://github.com/PrestaShop/PrestaShop/pull/22520): Update HookRepository.php. Thank you [@Prestaworks](https://github.com/Prestaworks)


### Front office
* [#27022](https://github.com/PrestaShop/PrestaShop/pull/27022): Do not autohook ps_featuredproducts on displayCrossSellingShoppingCart. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#26898](https://github.com/PrestaShop/PrestaShop/pull/26898): Display fixed index in profiling for easier navigation. Thank you [@unlocomqx](https://github.com/unlocomqx)
* [#26663](https://github.com/PrestaShop/PrestaShop/pull/26663): Fix position of cart crosselling hook. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Tests
* [#27067](https://github.com/PrestaShop/PrestaShop/pull/27067): Do not trust the new composer binary mode for CI, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27053](https://github.com/PrestaShop/PrestaShop/pull/27053): Fix script to run tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27046](https://github.com/PrestaShop/PrestaShop/pull/27046): Fix behat configuration, by [@matks](https://github.com/matks)
* [#27002](https://github.com/PrestaShop/PrestaShop/pull/27002): Improve exception checking in Behat tests, by [@jolelievre](https://github.com/jolelievre)
* [#26592](https://github.com/PrestaShop/PrestaShop/pull/26592): PHPStan (Level 1) on tests/, by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '1.7.8.x' branch


### Core
* [#27083](https://github.com/PrestaShop/PrestaShop/pull/27083): add allow-plugins entry for composer 2.2.x, by [@atomiix](https://github.com/atomiix)
* [#27035](https://github.com/PrestaShop/PrestaShop/pull/27035): Let Symfony handle kernel reboot, by [@atomiix](https://github.com/atomiix)


### Back office
* [#27011](https://github.com/PrestaShop/PrestaShop/pull/27011): Use reverse translation for Tabs with no wording and domain, by [@eternoendless](https://github.com/eternoendless)
* [#26839](https://github.com/PrestaShop/PrestaShop/pull/26839): Exclude directories when extracting module wordings, by [@sowbiba](https://github.com/sowbiba)


### Front office
* [#26995](https://github.com/PrestaShop/PrestaShop/pull/26995): Add IE11 support to FO webpack, by [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#27071](https://github.com/PrestaShop/PrestaShop/pull/27071): Do not trust the new composer binary mode (cherry pick of #27067), by [@atomiix](https://github.com/atomiix)


## Code changes in modules, themes & tools


### Google Analytics module
* [#107](https://github.com/PrestaShop/ps_googleanalytics/pull/107): Check if array key products exists before using it, by [@atomiix](https://github.com/atomiix)
* [#106](https://github.com/PrestaShop/ps_googleanalytics/pull/106): Make sure autoload file exists before loading it, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#104](https://github.com/PrestaShop/ps_googleanalytics/pull/104): Update sent transaction date with type sql NOW(). Thank you [@gadnis](https://github.com/gadnis)
* [#99](https://github.com/PrestaShop/ps_googleanalytics/pull/99): Prevent error when GoogleAnalyticEnhancedECommerce is not set. Thank you [@camlafit](https://github.com/camlafit)


### Dashboard Activity module
* [#28](https://github.com/PrestaShop/dashactivity/pull/28): The next verison is 2.1.0 not 2.1.1, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27](https://github.com/PrestaShop/dashactivity/pull/27): Remove code related to live update (`push`), by [@atomiix](https://github.com/atomiix)


### User documentation landing page
* [#171](https://github.com/PrestaShop/user-documentation-landing/pull/171): fix(deps): bump core-js from 3.20.0 to 3.20.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#170](https://github.com/PrestaShop/user-documentation-landing/pull/170): chore(deps-dev): bump sass from 1.45.0 to 1.45.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation sources
* [#1259](https://github.com/PrestaShop/docs/pull/1259): Add Module dependencies attribute. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1258](https://github.com/PrestaShop/docs/pull/1258): Add displayAdminOrderCreateExtraButtons hook 1.7.x. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1257](https://github.com/PrestaShop/docs/pull/1257): Add displayAdminOrderCreateExtraButtons hook 8.x. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1255](https://github.com/PrestaShop/docs/pull/1255): Update product_suppliers.md. Thank you [@mullerpetr76](https://github.com/mullerpetr76)
* [#1251](https://github.com/PrestaShop/docs/pull/1251): Improved behat docs for new optimizations, by [@jolelievre](https://github.com/jolelievre)
* [#1245](https://github.com/PrestaShop/docs/pull/1245): Adds an example to override a front/admin controller inside a module. Thank you [@WebHelpersPau](https://github.com/WebHelpersPau)


### Dashboard Trends module
* [#49](https://github.com/PrestaShop/dashtrends/pull/49): Remove code related to live update (`push`), by [@atomiix](https://github.com/atomiix)


### Dashboard Products module
* [#37](https://github.com/PrestaShop/dashproducts/pull/37): Remove code related to live update (`push`), by [@atomiix](https://github.com/atomiix)


### LocalizationFiles
* [#25](https://github.com/PrestaShop/LocalizationFiles/pull/25): Added states (regions) in gy.xml according to ISO 3166-2 and updated …. Thank you [@rickygzz](https://github.com/rickygzz)
* [#24](https://github.com/PrestaShop/LocalizationFiles/pull/24): Added states in ve.xml according to ISO 3166-2 and updated distance u…. Thank you [@rickygzz](https://github.com/rickygzz)
* [#23](https://github.com/PrestaShop/LocalizationFiles/pull/23): Added states (departments) in uy.xml according to ISO 3166-2 and upda…. Thank you [@rickygzz](https://github.com/rickygzz)
* [#21](https://github.com/PrestaShop/LocalizationFiles/pull/21): Added states (departments) in py.xml according to ISO 3166-2, updated…. Thank you [@rickygzz](https://github.com/rickygzz)
* [#20](https://github.com/PrestaShop/LocalizationFiles/pull/20): Added states (provinces) in ec.xml according to ISO 3166-2.. Thank you [@rickygzz](https://github.com/rickygzz)
* [#18](https://github.com/PrestaShop/LocalizationFiles/pull/18): Added states (regions) to cl.xml according to ISO 3166-2.. Thank you [@rickygzz](https://github.com/rickygzz)
* [#15](https://github.com/PrestaShop/LocalizationFiles/pull/15): Added NY, moved DC, added outlying areas AS, GU, MP and UM.. Thank you [@rickygzz](https://github.com/rickygzz)


### MJML Theme Converter
* [#19](https://github.com/PrestaShop/mjml-theme-converter/pull/19): Remove link tags generated by mjml.. Thank you [@lmeyer1](https://github.com/lmeyer1)


### Customer reassurance block module
* [#329](https://github.com/PrestaShop/blockreassurance/pull/329): Bump eslint from 8.4.1 to 8.5.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#575](https://github.com/PrestaShop/ps_facetedsearch/pull/575): Bump eslint from 8.4.1 to 8.5.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Featured products module
* [#45](https://github.com/PrestaShop/ps_featuredproducts/pull/45): Do not autohook on displayCrossSellingShoppingCart. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Traces
* [#19](https://github.com/PrestaShop/traces/pull/19): Fix notices for each non listed project. Thank you [@intraordinaire](https://github.com/intraordinaire)


### PrestaShop Specifications
* [#281](https://github.com/PrestaShop/prestashop-specs/pull/281): Update multistore specs share orders, by [@marionf](https://github.com/marionf)
* [#269](https://github.com/PrestaShop/prestashop-specs/pull/269): Create search-listing.md. Thank you [@Saimis777](https://github.com/Saimis777)


### Auto Upgrade module
* [#439](https://github.com/PrestaShop/autoupgrade/pull/439): Fix untranslatable Tabs for shops upgraded to 1.7.8.0. Thank you [@Prestaworks](https://github.com/Prestaworks)
* [#437](https://github.com/PrestaShop/autoupgrade/pull/437): Drop column id_tax_rules_group in carrier table. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Modules Distribution API
* [#1](https://github.com/PrestaShop/distribution-api/pull/1): Refacto, adds new /prestashop endpoints and delete module download endpoint, by [@atomiix](https://github.com/atomiix)


### Product Comments module
* [#115](https://github.com/PrestaShop/productcomments/pull/115): Remove addons suggestion in module configuration. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Wishlist block module
* [#133](https://github.com/PrestaShop/blockwishlist/pull/133): Extend addedToWishlist by chosen product attribute id. Thank you [@mleczakm](https://github.com/mleczakm)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@kpodemski](https://github.com/kpodemski), [@PrestaEdit](https://github.com/PrestaEdit), [@atomiix](https://github.com/atomiix), [@PierreRambaud](https://github.com/PierreRambaud), [@dependabot[bot]](https://github.com/apps/dependabot), [@jf-viguier](https://github.com/jf-viguier), [@rickygzz](https://github.com/rickygzz), [@matthieu-rolland](https://github.com/matthieu-rolland), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@matks](https://github.com/matks), [@lmeyer1](https://github.com/lmeyer1), [@mullerpetr76](https://github.com/mullerpetr76), [@Hlavtox](https://github.com/Hlavtox), [@eternoendless](https://github.com/eternoendless), [@intraordinaire](https://github.com/intraordinaire), [@NeOMakinG](https://github.com/NeOMakinG), [@Progi1984](https://github.com/Progi1984), [@jolelievre](https://github.com/jolelievre), [@marionf](https://github.com/marionf), [@WebHelpersPau](https://github.com/WebHelpersPau), [@Prestaworks](https://github.com/Prestaworks), [@unlocomqx](https://github.com/unlocomqx), [@pnucci](https://github.com/pnucci), [@sowbiba](https://github.com/sowbiba), [@Saimis777](https://github.com/Saimis777), [@gadnis](https://github.com/gadnis), [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds), [@mleczakm](https://github.com/mleczakm), [@camlafit](https://github.com/camlafit)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
