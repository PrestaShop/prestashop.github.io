---
layout: post
aliases: ["/news/coreweekly-46-2020"]
title:  "PrestaShop Core Weekly - Week 46 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-11-17
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 9th to Sunday 15th of November 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear Developers,

This week is filled with lot of interesting events!

First, PrestaShop [1.7.6.9](https://build.prestashop.com/news/prestashop-1-7-6-9-maintenance-release/) has been released. don't forget to update as this patch version fixes one important security issue.

The maintainer team also released Product Comments module [security release v4.2.0](https://build.prestashop.com/news/productcomments-4-2-0-maintenance-release/) which fixes another security issue.

Second, we are October 17th, which means that tomorrow if no critical or major regression has been reported, PrestaShop 1.7.7.0 will be delivered as a stable version. Now is the very last moment to test [PrestaShop 1.7.7.0 Release Candidate 1](https://build.prestashop.com/news/prestashop-1-7-7-0-rc-release/)!

Finally, the huge work on PrestaShop UI Kit by [@NeOMakinG](https://github.com/NeOMakinG) has finally been [merged](https://github.com/PrestaShop/PrestaShop/pull/17253) with the release of PrestaShop UI Kit v1.2.0.


## Releases

* [PrestaShop](https://github.com/PrestaShop/PrestaShop) [Core 1.7.6.9](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.6.9)
* [productcomments](https://github.com/PrestaShop/productcomments) module: [v4.2.0](https://github.com/PrestaShop/productcomments/releases/tag/v4.2.0)
* [TranslationToolsBundle](https://github.com/PrestaShop/TranslationToolsBundle): [v4.0.4](https://github.com/PrestaShop/TranslationToolsBundle/releases/tag/v4.0.4)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [96 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-11-09..2020-11-15) have been created in the project repositories;
- [63 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-11-09..2020-11-15), including [16 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-11-09..2020-11-15) on the core;
- [71 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-11-09..2020-11-15) in the project repositories;
- [72 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-11-09..2020-11-15), including [55 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-11-09..2020-11-15).



## Code changes in the 'develop' branch


### Core
* [#21896](https://github.com/PrestaShop/PrestaShop/pull/21896): Fix dependency which is targeting the v1.3.0 instead of the 1.3 branch, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#21874](https://github.com/PrestaShop/PrestaShop/pull/21874): Fix TCPD::Output() method name call. Thank you [@comxd](https://github.com/comxd)
* [#21616](https://github.com/PrestaShop/PrestaShop/pull/21616): Do not use the cache when checking if data exists in the database (Part 1). Thank you [@PululuK](https://github.com/PululuK)


### Back office
* [#21883](https://github.com/PrestaShop/PrestaShop/pull/21883): Fixing phpstan errors after cart rules. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#21861](https://github.com/PrestaShop/PrestaShop/pull/21861): Add behat tests for UpdateProductStatusCommand [product page migration]. Thank you [@zuk3975](https://github.com/zuk3975)
* [#21856](https://github.com/PrestaShop/PrestaShop/pull/21856): Adjust birthday inputs on create customer page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21796](https://github.com/PrestaShop/PrestaShop/pull/21796): Improve attachment tests to check multiple languages. Thank you [@zuk3975](https://github.com/zuk3975)
* [#21690](https://github.com/PrestaShop/PrestaShop/pull/21690): Handle '+' sign in url when using 'back' parameter to redirect, by [@atomiix](https://github.com/atomiix)
* [#21684](https://github.com/PrestaShop/PrestaShop/pull/21684):  Fix customer addresses edit/delete redirection, by [@atomiix](https://github.com/atomiix)
* [#21576](https://github.com/PrestaShop/PrestaShop/pull/21576): No alert displayed when changing the status with bulk action in legacy controllers. Thank you [@PululuK](https://github.com/PululuK)
* [#21289](https://github.com/PrestaShop/PrestaShop/pull/21289): Refactor admin notifications.js. Thank you [@davidglezz](https://github.com/davidglezz)
* [#19048](https://github.com/PrestaShop/PrestaShop/pull/19048): Migrate Cart Rule listing. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#17253](https://github.com/PrestaShop/PrestaShop/pull/17253): Upgrade to PrestaShop UI KIT v1.2.0, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#21814](https://github.com/PrestaShop/PrestaShop/pull/21814): FO: fix wrong redirection after address edition in checkout process, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#21783](https://github.com/PrestaShop/PrestaShop/pull/21783): Get page title respecting dedicated meta title and combination information. Thank you [@kpodemski](https://github.com/kpodemski)
* [#21732](https://github.com/PrestaShop/PrestaShop/pull/21732): Fixed `displayPackPrice` not defined to true due to a type comparision. Thank you [@Prestaworks](https://github.com/Prestaworks)
* [#21578](https://github.com/PrestaShop/PrestaShop/pull/21578): Added a new hook call "displayProductPriceBlock" with type "custom_price". Thank you [@zapalm](https://github.com/zapalm)
* [#20565](https://github.com/PrestaShop/PrestaShop/pull/20565): Filter variations by qty at FO. Thank you [@Guisardo](https://github.com/Guisardo)


### Web services
* [#21613](https://github.com/PrestaShop/PrestaShop/pull/21613): Fix webservice accessory xlink href. Thank you [@Dakror](https://github.com/Dakror)


### Tests
* [#21907](https://github.com/PrestaShop/PrestaShop/pull/21907): Update README.md for UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21858](https://github.com/PrestaShop/PrestaShop/pull/21858): Add test 'Quick edit tax rules'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21854](https://github.com/PrestaShop/PrestaShop/pull/21854): Fix tests after new UI kit version merged, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21412](https://github.com/PrestaShop/PrestaShop/pull/21412): Add a new test "import file". Thank you [@SD1982](https://github.com/SD1982)


## Code changes in the '1.7.7.x' branch


### Back office
* [#21853](https://github.com/PrestaShop/PrestaShop/pull/21853): Add missing use in CancelOrderProductHandler, by [@matks](https://github.com/matks)
* [#21830](https://github.com/PrestaShop/PrestaShop/pull/21830): Correctly generate cart error messages, by [@jolelievre](https://github.com/jolelievre)
* [#21816](https://github.com/PrestaShop/PrestaShop/pull/21816): Remove useless logic Product customization images in Order Page and handle exotic chars in name, by [@matks](https://github.com/matks)
* [#21555](https://github.com/PrestaShop/PrestaShop/pull/21555): Fixed increment button when adding a product out of stock and with allow order, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### Best customers statistics module
* [#19](https://github.com/PrestaShop/statsbestcustomers/pull/19): Bump version to 2.0.3, by [@Progi1984](https://github.com/Progi1984)
* [#18](https://github.com/PrestaShop/statsbestcustomers/pull/18): Improve project, by [@Progi1984](https://github.com/Progi1984)


### Search Bar module
* [#23](https://github.com/PrestaShop/ps_searchbar/pull/23): Bump version to 2.0.2, by [@Progi1984](https://github.com/Progi1984)
* [#22](https://github.com/PrestaShop/ps_searchbar/pull/22): Improve project, by [@Progi1984](https://github.com/Progi1984)


### Changes in developer documentation
* [#806](https://github.com/PrestaShop/docs/pull/806): Fix doc Module concept. Thank you [@PululuK](https://github.com/PululuK)
* [#797](https://github.com/PrestaShop/docs/pull/797): Add JqXHR error in Upgrade FAQ, by [@matks](https://github.com/matks)
* [#794](https://github.com/PrestaShop/docs/pull/794): Update PHPStan version. Thank you [@comxd](https://github.com/comxd)
* [#792](https://github.com/PrestaShop/docs/pull/792): Some performance tips, by [@matks](https://github.com/matks)
* [#788](https://github.com/PrestaShop/docs/pull/788): Update nginx.md performance and requirements. Thank you [@gnovaro](https://github.com/gnovaro)


### Customer reassurance block module
* [#76](https://github.com/PrestaShop/blockreassurance/pull/76): Bump mini-css-extract-plugin from 1.3.0 to 1.3.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#75](https://github.com/PrestaShop/blockreassurance/pull/75): Bump sass-loader from 10.0.5 to 10.1.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#74](https://github.com/PrestaShop/blockreassurance/pull/74): Bump babel-loader from 8.1.0 to 8.2.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#72](https://github.com/PrestaShop/blockreassurance/pull/72): Update npm dependencies and webpack, by [@NeOMakinG](https://github.com/NeOMakinG)


### TranslationTools Bundle
* [#80](https://github.com/PrestaShop/TranslationToolsBundle/pull/80): Fix composer dump autoload for composer v2, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#79](https://github.com/PrestaShop/TranslationToolsBundle/pull/79): Add test cases for $this->trans() in TranslatorAwareType, by [@eternoendless](https://github.com/eternoendless)


### Faceted search module
* [#258](https://github.com/PrestaShop/ps_facetedsearch/pull/258): Bump sass-loader from 10.0.5 to 10.1.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#257](https://github.com/PrestaShop/ps_facetedsearch/pull/257): Bump babel-loader from 8.1.0 to 8.2.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#256](https://github.com/PrestaShop/ps_facetedsearch/pull/256): Bump eslint-config-airbnb-base from 14.2.0 to 14.2.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#247](https://github.com/PrestaShop/ps_facetedsearch/pull/247): Bump friendsofphp/php-cs-fixer from 2.16.4 to 2.16.5. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Gamification module
* [#77](https://github.com/PrestaShop/gamification/pull/77): Updated dependency friendsofphp/php-cs-fixer, by [@Progi1984](https://github.com/Progi1984)
* [#76](https://github.com/PrestaShop/gamification/pull/76): Update logo and About section of README. Thank you [@Julievrz](https://github.com/Julievrz)


### Prestashop UI Kit
* [#115](https://github.com/PrestaShop/prestashop-ui-kit/pull/115): Change package.json version for the release, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#114](https://github.com/PrestaShop/prestashop-ui-kit/pull/114): Release 1.2.0, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#113](https://github.com/PrestaShop/prestashop-ui-kit/pull/113): Fix link colors inside form-text helpers, by [@NeOMakinG](https://github.com/NeOMakinG)


### PrestaShop Specifications
* [#168](https://github.com/PrestaShop/prestashop-specs/pull/168): Update Order Page View.md. Thank you [@MatShir](https://github.com/MatShir)


### blockmyaccountfooter
* [#2](https://github.com/PrestaShop/blockmyaccountfooter/pull/2): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)


### Google Analytics module
* [#81](https://github.com/PrestaShop/ps_googleanalytics/pull/81): Improve some comments in the code. Thank you [@prestaforum](https://github.com/prestaforum)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@boubkerbribri](https://github.com/boubkerbribri), [@Progi1984](https://github.com/Progi1984), [@PululuK](https://github.com/PululuK), [@dependabot[bot]](https://github.com/apps/dependabot), [@PierreRambaud](https://github.com/PierreRambaud), [@eternoendless](https://github.com/eternoendless), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@comxd](https://github.com/comxd), [@zuk3975](https://github.com/zuk3975), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@NeOMakinG](https://github.com/NeOMakinG), [@matks](https://github.com/matks), [@jolelievre](https://github.com/jolelievre), [@micka-fdz](https://github.com/micka-fdz), [@matthieu-rolland](https://github.com/matthieu-rolland), [@kpodemski](https://github.com/kpodemski), [@Prestaworks](https://github.com/Prestaworks), [@MatShir](https://github.com/MatShir), [@atomiix](https://github.com/atomiix), [@Julievrz](https://github.com/Julievrz), [@Dakror](https://github.com/Dakror), [@gnovaro](https://github.com/gnovaro), [@zapalm](https://github.com/zapalm), [@SD1982](https://github.com/SD1982), [@davidglezz](https://github.com/davidglezz), [@prestaforum](https://github.com/prestaforum), [@Guisardo](https://github.com/Guisardo)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
