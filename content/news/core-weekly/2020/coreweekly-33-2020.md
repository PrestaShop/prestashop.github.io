---
layout: post
aliases: ["/news/coreweekly-33-2020"]
title:  "PrestaShop Core Weekly - Week 33 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-08-18
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 10th to Sunday 16th of August 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

As announced on [Release 1.7.7.0 tracking issue](https://github.com/PrestaShop/PrestaShop/issues/18647#issuecomment-672940163), it has been decided to issue a second beta build that contains all fixes merged since Beta 1. Over 130 PRs have been merged to branch `1.7.7.x` and we want to provide the community with a more up to date version to continue testing, while giving ourselves more time to continue squashing bugs.

We're targeting a Beta 2 to be released on September 1st. This will be followed by an RC early October at the latest.


## Releases

* [Productcomments](https://github.com/PrestaShop/productcomments): [v4.1.0](https://github.com/PrestaShop/productcomments/releases/tag/v4.1.0)
* [Ps_emailalerts](https://github.com/PrestaShop/ps_emailalerts): [v2.2.1](https://github.com/PrestaShop/ps_emailalerts/releases/tag/v2.2.1)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [53 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-08-10..2020-08-16) have been created in the project repositories;
- [66 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-08-10..2020-08-16), including [20 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-08-10..2020-08-16) on the core;
- [57 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-08-10..2020-08-16) in the project repositories;
- [65 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-08-10..2020-08-16), including [57 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-08-10..2020-08-16).


## Code changes in the 'develop' branch


### Core
* [#20581](https://github.com/PrestaShop/PrestaShop/pull/20581): Remove useless files, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#20511](https://github.com/PrestaShop/PrestaShop/pull/20511): Typo Error In CSV.php. Thank you [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul)


### Back office
* [#20532](https://github.com/PrestaShop/PrestaShop/pull/20532): Add RemoveAllAssociatedProductCategoriesCommand. Thank you [@zuk3975](https://github.com/zuk3975)
* [#20515](https://github.com/PrestaShop/PrestaShop/pull/20515): Fix supplier service name to fit namespace convention. Thank you [@zuk3975](https://github.com/zuk3975)
* [#20491](https://github.com/PrestaShop/PrestaShop/pull/20491): Fix UpdateCustomizationFieldsHandler todo. Thank you [@zuk3975](https://github.com/zuk3975)
* [#20488](https://github.com/PrestaShop/PrestaShop/pull/20488): Implement combinations generator which uses php Generator. Thank you [@zuk3975](https://github.com/zuk3975)
* [#20449](https://github.com/PrestaShop/PrestaShop/pull/20449): Add undeclared variables in AdminController. Thank you [@justeen35](https://github.com/justeen35)
* [#20434](https://github.com/PrestaShop/PrestaShop/pull/20434): Fixed default value for the form Add Employee, by [@Progi1984](https://github.com/Progi1984)
* [#20381](https://github.com/PrestaShop/PrestaShop/pull/20381): Order return states grid - Remove unnecessary filters merge, by [@sowbiba](https://github.com/sowbiba)


### Front office
* [#20403](https://github.com/PrestaShop/PrestaShop/pull/20403): Remove useless assignment of logout_url in MyAccountController. Thank you [@Sinepel](https://github.com/Sinepel)
* [#20384](https://github.com/PrestaShop/PrestaShop/pull/20384): Add classic stylelint, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#17712](https://github.com/PrestaShop/PrestaShop/pull/17712): Prevent from loading old carts. Thank you [@daresh](https://github.com/daresh)


### Tests
* [#20516](https://github.com/PrestaShop/PrestaShop/pull/20516): Functional tests - Fix selector changes for email themes form, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.7.x' branch


### Core
* [#20570](https://github.com/PrestaShop/PrestaShop/pull/20570): Update _PS_JQUERY_VERSION_ to match the included jQuery version, by [@eternoendless](https://github.com/eternoendless)
* [#20547](https://github.com/PrestaShop/PrestaShop/pull/20547): Update module productcommentsto v4.1.0, by [@matks](https://github.com/matks)
* [#12578](https://github.com/PrestaShop/PrestaShop/pull/12578): Fix wrong use of alias when registering new hook, by [@eternoendless](https://github.com/eternoendless)


### Back office
* [#20571](https://github.com/PrestaShop/PrestaShop/pull/20571): Return an int instead of a float (in some cases) for Pack::getQuantity(), by [@atomiix](https://github.com/atomiix)
* [#20538](https://github.com/PrestaShop/PrestaShop/pull/20538): Fix order cart rule deletion, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#20529](https://github.com/PrestaShop/PrestaShop/pull/20529): Fix links in footer - https is better than http, by [@matks](https://github.com/matks)
* [#20524](https://github.com/PrestaShop/PrestaShop/pull/20524): Fix bad call in HTMLTemplateOrderSlip, by [@matks](https://github.com/matks)
* [#20492](https://github.com/PrestaShop/PrestaShop/pull/20492): Remove call to updateOrderInvoice - not needed anymore, by [@matks](https://github.com/matks)
* [#20482](https://github.com/PrestaShop/PrestaShop/pull/20482): Set CartRule amount with tax in BO instead of without tax, by [@atomiix](https://github.com/atomiix)
* [#20477](https://github.com/PrestaShop/PrestaShop/pull/20477): Fixed cast for primary key in PrestaShopCollection, by [@Progi1984](https://github.com/Progi1984)
* [#20451](https://github.com/PrestaShop/PrestaShop/pull/20451): Fix TinyMCE error on product page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#20335](https://github.com/PrestaShop/PrestaShop/pull/20335): Remove discount from order (persist state), by [@jolelievre](https://github.com/jolelievre)


### Front office
* [#20555](https://github.com/PrestaShop/PrestaShop/pull/20555): Fix images quickview also updating product page by changing product i…, by [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#20586](https://github.com/PrestaShop/PrestaShop/pull/20586): Functional tests - Add test 'Filter image types', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20569](https://github.com/PrestaShop/PrestaShop/pull/20569): Functional tests - Add new tests for stores page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20559](https://github.com/PrestaShop/PrestaShop/pull/20559): Functional tests - Add test 'Filter stores', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20543](https://github.com/PrestaShop/PrestaShop/pull/20543): Functional tests - Add test 'Filter groups', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20540](https://github.com/PrestaShop/PrestaShop/pull/20540): Functional tests - Add tests for seo pages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20539](https://github.com/PrestaShop/PrestaShop/pull/20539): Functional tests - Update exchange rate. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#20521](https://github.com/PrestaShop/PrestaShop/pull/20521): Functional tests - Add new test 'Configure module', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20502](https://github.com/PrestaShop/PrestaShop/pull/20502): Functional tests - Add new test 'Create customer from create order page', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20486](https://github.com/PrestaShop/PrestaShop/pull/20486): Functional tests - Enable/Disable display attributes in product meta title. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Email Alerts module
* [#68](https://github.com/PrestaShop/ps_emailalerts/pull/68): Release 2.2.1, by [@matks](https://github.com/matks)
* [#67](https://github.com/PrestaShop/ps_emailalerts/pull/67): Bump v2.2.1, by [@matks](https://github.com/matks)


### Changes in developer documentation
* [#659](https://github.com/PrestaShop/docs/pull/659): The Webservice key must have a length of 32 characters. Thank you [@wgroenewold](https://github.com/wgroenewold)
* [#658](https://github.com/PrestaShop/docs/pull/658): Vhost config, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#655](https://github.com/PrestaShop/docs/pull/655): Update introduction.md. Thank you [@ksaandev](https://github.com/ksaandev)
* [#647](https://github.com/PrestaShop/docs/pull/647): Update image for PR process and add tips to see image in full size, by [@matks](https://github.com/matks)


### Buy button lite module
* [#37](https://github.com/PrestaShop/ps_buybuttonlite/pull/37): Github improvements, by [@PierreRambaud](https://github.com/PierreRambaud)


### PrestaShop Specifications
* [#125](https://github.com/PrestaShop/prestashop-specs/pull/125): Fix for markdown typo in Contributing.md file. Thank you [@sam-pires](https://github.com/sam-pires)


### php-ps-info
* [#14](https://github.com/PrestaShop/php-ps-info/pull/14): Fix toBytes method, by [@PierreRambaud](https://github.com/PierreRambaud)


### Product Comments module
* [#69](https://github.com/PrestaShop/productcomments/pull/69): Bump symfony/css-selector from 3.4.37 to 3.4.43. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#68](https://github.com/PrestaShop/productcomments/pull/68): Ignore HTML parsing errors in CategoryFetcher::getDescription(), by [@matks](https://github.com/matks)
* [#66](https://github.com/PrestaShop/productcomments/pull/66): Release 4.1.0, by [@Progi1984](https://github.com/Progi1984)


### Quality Assurance module
* [#2](https://github.com/PrestaShop/ps_qualityassurance/pull/2): Improve README, by [@matks](https://github.com/matks)


### Core Weekly Generator tool
* [#44](https://github.com/PrestaShop/core-weekly-generator/pull/44): Update core-weekly data, by [@matks](https://github.com/matks)


### Nightly board
* [#44](https://github.com/PrestaShop/nightly-board/pull/44): Change search wording, by [@NeOMakinG](https://github.com/NeOMakinG)


### PrestaShop contributors website
* [#15](https://github.com/PrestaShop/TopContributors/pull/15): Remove the key updated in the new JSON, by [@Progi1984](https://github.com/Progi1984)


### Customer "Sign in" link module
* [#23](https://github.com/PrestaShop/ps_customersignin/pull/23): Remove useless assignments. Thank you [@Sinepel](https://github.com/Sinepel)
* [#21](https://github.com/PrestaShop/ps_customersignin/pull/21): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)


### Currency selector
* [#19](https://github.com/PrestaShop/ps_currencyselector/pull/19): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)


### Cross-selling module
* [#12](https://github.com/PrestaShop/ps_crossselling/pull/12): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)


### Faceted search module
* [#159](https://github.com/PrestaShop/ps_facetedsearch/pull/159): Fix price indexing for products with specific prices only for some currencies. Thank you [@Perfecticus](https://github.com/Perfecticus)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@boubkerbribri](https://github.com/boubkerbribri), [@matks](https://github.com/matks), [@wgroenewold](https://github.com/wgroenewold), [@PierreRambaud](https://github.com/PierreRambaud), [@atomiix](https://github.com/atomiix), [@eternoendless](https://github.com/eternoendless), [@NeOMakinG](https://github.com/NeOMakinG), [@sam-pires](https://github.com/sam-pires), [@dependabot[bot]](https://github.com/apps/dependabot), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@matthieu-rolland](https://github.com/matthieu-rolland), [@zuk3975](https://github.com/zuk3975), [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul), [@Progi1984](https://github.com/Progi1984), [@justeen35](https://github.com/justeen35), [@ksaandev](https://github.com/ksaandev), [@Sinepel](https://github.com/Sinepel), [@sowbiba](https://github.com/sowbiba), [@jolelievre](https://github.com/jolelievre), [@Perfecticus](https://github.com/Perfecticus), [@daresh](https://github.com/daresh)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!


