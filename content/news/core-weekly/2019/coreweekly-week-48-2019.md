---
layout: post
aliases: ["/news/coreweekly-week-48-2019"]
title:  "PrestaShop Core Weekly - Week 48 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-12-13
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 25th of November to Sunday 1st of December 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear Developers,

PrestaShop 1.7.6.2 is now available. This maintenance release fixes 31 issues reported on versions 1.7.6.0 and 1.7.6.1. Please [read the release note](https://build.prestashop.com/news/prestashop-1-7-6-2-maintenance-release/) for more informations.

## A quick update about PrestaShop's GitHub issues and pull requests:

- [87 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-11-25..2019-12-01) have been created in the project repositories;
- [59 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-11-25..2019-12-01), including [23 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-11-25..2019-12-01) on the core;
- [65 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-11-25..2019-12-01) in the project repositories;
- [51 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-11-25..2019-12-01), including [51 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-11-25..2019-12-01).


## Code changes in the 'develop' branch


### Core
* [#16586](https://github.com/PrestaShop/PrestaShop/pull/16586): Do not escape translations when using the legacy translator from the new one, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16473](https://github.com/PrestaShop/PrestaShop/pull/16473): Adding the Code of Conduct, by [@ttoine](https://github.com/ttoine)
* [#16459](https://github.com/PrestaShop/PrestaShop/pull/16459): Fix behavior of Module::isRegisteredInHook(), by [@Matt75](https://github.com/Matt75)
* [#16410](https://github.com/PrestaShop/PrestaShop/pull/16410): Make sure to get correct lang fields for shop. Thank you [@kpodemski](https://github.com/kpodemski)
* [#16383](https://github.com/PrestaShop/PrestaShop/pull/16383): Currency are customizable and prices are shown accordingly, by [@jolelievre](https://github.com/jolelievre)
* [#16596](https://github.com/PrestaShop/PrestaShop/pull/16596): Merge 1.7.6.x in develop. Thank you [@atomiix](https://github.com/atomiix)


### Back office
* [#16621](https://github.com/PrestaShop/PrestaShop/pull/16621): Remove legacy unused Order Slip files, by [@matks](https://github.com/matks)
* [#16588](https://github.com/PrestaShop/PrestaShop/pull/16588): Unhide monitoring sf page, by [@matks](https://github.com/matks)
* [#16560](https://github.com/PrestaShop/PrestaShop/pull/16560): Fix header for migrated Orders pages, by [@matks](https://github.com/matks)
* [#16548](https://github.com/PrestaShop/PrestaShop/pull/16548): Use CMSCategory instead of CMS object model, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16542](https://github.com/PrestaShop/PrestaShop/pull/16542): Specific prices are not displayed in the BO, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16541](https://github.com/PrestaShop/PrestaShop/pull/16541): Repair pagination on product page listing, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16535](https://github.com/PrestaShop/PrestaShop/pull/16535): Fixing a JS bug where TinyMCE was not loaded on safari in page content textarea. Thank you [@NeOMakinG](https://github.com/NeOMakinG)
* [#16532](https://github.com/PrestaShop/PrestaShop/pull/16532): Remove useless debug controller actions, by [@matks](https://github.com/matks)
* [#16530](https://github.com/PrestaShop/PrestaShop/pull/16530): Use country id while creating the Supplier form, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16510](https://github.com/PrestaShop/PrestaShop/pull/16510): Avoiding dropdowns from module page to be under header element. Thank you [@NeOMakinG](https://github.com/NeOMakinG)
* [#16457](https://github.com/PrestaShop/PrestaShop/pull/16457): Enable TinyMCE on add/edit supplier page BO, by [@matks](https://github.com/matks)
* [#16318](https://github.com/PrestaShop/PrestaShop/pull/16318): Make migrated order page's grid rows clickable, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#13903](https://github.com/PrestaShop/PrestaShop/pull/13903): Migrate Sell > Orders > Credit slips page. Thank you [@zuk3975](https://github.com/zuk3975)


### Front office
* [#16571](https://github.com/PrestaShop/PrestaShop/pull/16571): Fix total tax in order confirmation. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#16550](https://github.com/PrestaShop/PrestaShop/pull/16550): Fix var not displayed in emails when mail address is in uppercase, by [@marionf](https://github.com/marionf)
* [#16531](https://github.com/PrestaShop/PrestaShop/pull/16531): Fix round remaining value of reduction amount. Thank you [@202-ecommerce](https://github.com/202-ecommerce)
* [#16526](https://github.com/PrestaShop/PrestaShop/pull/16526): Changing suppliers select into bootstrap dropdown. Thank you [@NeOMakinG](https://github.com/NeOMakinG)
* [#16504](https://github.com/PrestaShop/PrestaShop/pull/16504): Displaying 3 products on the same line on home with 2 columns layout. Thank you [@NeOMakinG](https://github.com/NeOMakinG)
* [#16503](https://github.com/PrestaShop/PrestaShop/pull/16503): Hiding pack products prices when pack's show price is disabled. Thank you [@NeOMakinG](https://github.com/NeOMakinG)
* [#16013](https://github.com/PrestaShop/PrestaShop/pull/16013): Mobile Homepage slider , by [@Progi1984](https://github.com/Progi1984)


### Installer
* [#16506](https://github.com/PrestaShop/PrestaShop/pull/16506): Set minimum PHP version to 7.1.3 (and not 7.1), by [@eternoendless](https://github.com/eternoendless)
* [#16104](https://github.com/PrestaShop/PrestaShop/pull/16104): Update order status colors. Thank you [@sarjon](https://github.com/sarjon)


### Tests
* [#16564](https://github.com/PrestaShop/PrestaShop/pull/16564): Tests - Fixing tests 04_filterAndQuickEditCategories (functional campaign), by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16534](https://github.com/PrestaShop/PrestaShop/pull/16534): Tests - Adding scripts to run puppteer tests on nightly for develop, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16533](https://github.com/PrestaShop/PrestaShop/pull/16533): Test- Update functional test Supplier, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16496](https://github.com/PrestaShop/PrestaShop/pull/16496): Tests - Fix test CRUD Page Category in functional campaign, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.6.x' branch (for 1.7.6.2)


### Core
* [#16522](https://github.com/PrestaShop/PrestaShop/pull/16522): Prevent getter from changing class state, by [@eternoendless](https://github.com/eternoendless)
* [#16500](https://github.com/PrestaShop/PrestaShop/pull/16500): Incorrect email subject and template variable {shop_name}, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16591](https://github.com/PrestaShop/PrestaShop/pull/16591): Release 1.7.6.2. Thank you [@atomiix](https://github.com/atomiix)


## Code changes in modules, themes & tools


### Developer tools
* [#18](https://github.com/PrestaShop/php-dev-tools/pull/18): Update order of php-parser loading, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#17](https://github.com/PrestaShop/php-dev-tools/pull/17): Set _PS_VERSION_ as dynamic constant to avoid false positive reports, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Docker images
* [#196](https://github.com/PrestaShop/docker/pull/196): Update dockerfiles to use ps 1.7.6.2. Thank you [@atomiix](https://github.com/atomiix)


### Amzpayments module
* [#89](https://github.com/PrestaShop/amzpayments/pull/89): v2.3.1. Thank you [@paeddl](https://github.com/paeddl)
* [#88](https://github.com/PrestaShop/amzpayments/pull/88): v3.3.0. Thank you [@paeddl](https://github.com/paeddl)


### Changes in developer documentation
* [#414](https://github.com/PrestaShop/docs/pull/414): Fix double line break in listing elements, by [@SimonGrn](https://github.com/SimonGrn)
* [#413](https://github.com/PrestaShop/docs/pull/413): Adding web acceptance test description, by [@SimonGrn](https://github.com/SimonGrn)
* [#411](https://github.com/PrestaShop/docs/pull/411): grammatical fix. Thank you [@cuchalin](https://github.com/cuchalin)


### Currency selector module
* [#13](https://github.com/PrestaShop/ps_currencyselector/pull/13): Add release drafter, cs fix and auto deployment of the archive via travi, by [@jolelievre](https://github.com/jolelievre)
* [#12](https://github.com/PrestaShop/ps_currencyselector/pull/12): Bump version 2.0.1, by [@jolelievre](https://github.com/jolelievre)


### Classic-rocket theme
* [#113](https://github.com/PrestaShop/classic-rocket/pull/113): Fix mistake on Smarty block name. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#103](https://github.com/PrestaShop/classic-rocket/pull/103): Add rel="nofollow" to prestashop link. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#101](https://github.com/PrestaShop/classic-rocket/pull/101): Wrong classes causes invisible or empty button. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#97](https://github.com/PrestaShop/classic-rocket/pull/97): Checkout page improvement. Thank you [@micka-fdz](https://github.com/micka-fdz)


### QA nightly results
* [#11](https://github.com/PrestaShop/QANightlyResults/pull/11): Removed filters, remove var_dump, by [@SimonGrn](https://github.com/SimonGrn)


### Theme custo module
* [#18](https://github.com/PrestaShop/ps_themecusto/pull/18): Release v1.1.0 of ps_themecusto, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@matks](https://github.com/matks), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@atomiix](https://github.com/atomiix), [@PierreRambaud](https://github.com/PierreRambaud), [@paeddl](https://github.com/paeddl), [@Hlavtox](https://github.com/Hlavtox), [@boubkerbribri](https://github.com/boubkerbribri), [@SimonGrn](https://github.com/SimonGrn), [@marionf](https://github.com/marionf), [@jolelievre](https://github.com/jolelievre), [@NeOMakinG](https://github.com/NeOMakinG), [@202-ecommerce](https://github.com/202-ecommerce), [@micka-fdz](https://github.com/micka-fdz), [@eternoendless](https://github.com/eternoendless), [@cuchalin](https://github.com/cuchalin), [@ttoine](https://github.com/ttoine), [@Matt75](https://github.com/Matt75), [@kpodemski](https://github.com/kpodemski), [@matthieu-rolland](https://github.com/matthieu-rolland), [@sarjon](https://github.com/sarjon), [@Progi1984](https://github.com/Progi1984), [@jf-viguier](https://github.com/jf-viguier), [@zuk3975](https://github.com/zuk3975)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

