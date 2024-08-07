---
layout: post
aliases: ["/news/coreweekly-week-08-2020"]
title:  "PrestaShop Core Weekly - Week 8 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-02-24
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 17th to Sunday 23th of February 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [68 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-02-17..2020-02-23) have been created in the project repositories;
- [58 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-02-17..2020-02-23), including [17 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-02-17..2020-02-23) on the core;
- [112 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-02-17..2020-02-23) in the project repositories;
- [91 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-02-17..2020-02-23), including [66 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-02-17..2020-02-23).


## Code changes in the 'develop' branch


### Core
* [#17738](https://github.com/PrestaShop/PrestaShop/pull/17738): Simplify mathematical operation in StockAvailable::setQuantity(). Thank you [@davidglezz](https://github.com/davidglezz)
* [#17116](https://github.com/PrestaShop/PrestaShop/pull/17116): Unnecessary localhost string when using getRemoteAddr. Thank you [@mvorisek](https://github.com/mvorisek)
* [#16818](https://github.com/PrestaShop/PrestaShop/pull/16818): Force Configuration::updateValue to return a bool. Thank you [@zalexki](https://github.com/zalexki)


### Back office
* [#17497](https://github.com/PrestaShop/PrestaShop/pull/17497): Increase bo cookie lifetime from 15 to 60 minutes. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Front office
* [#17664](https://github.com/PrestaShop/PrestaShop/pull/17664): Disallow birth year in two digits. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#17633](https://github.com/PrestaShop/PrestaShop/pull/17633): Cart object is undefined after refreshing the cart. Thank you [@arouiadib](https://github.com/arouiadib)
* [#17607](https://github.com/PrestaShop/PrestaShop/pull/17607): Add displayBanner hook. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#16928](https://github.com/PrestaShop/PrestaShop/pull/16928): Adding subcategories on category page, by [@NeOMakinG](https://github.com/NeOMakinG)



## Code changes in the '1.7.7.x' branch (for v1.7.7.0)


### Core
* [#17733](https://github.com/PrestaShop/PrestaShop/pull/17733): Unwanted spaces in 1.7.7.0.sql file, by [@matks](https://github.com/matks)
* [#17731](https://github.com/PrestaShop/PrestaShop/pull/17731): Fix license headers, by [@matks](https://github.com/matks)


### Back office
* [#17715](https://github.com/PrestaShop/PrestaShop/pull/17715): Fix print css, by [@matks](https://github.com/matks)
* [#17702](https://github.com/PrestaShop/PrestaShop/pull/17702): Order Page: Keep email failure from blocking product cancellation (and some refactor), by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17700](https://github.com/PrestaShop/PrestaShop/pull/17700): Wrong address update when changing the shipping adresse of an order, by [@atomiix](https://github.com/atomiix)
* [#17660](https://github.com/PrestaShop/PrestaShop/pull/17660): Migration of order view page printing functionality and layout changes - part 4, by [@matks](https://github.com/matks)
* [#17641](https://github.com/PrestaShop/PrestaShop/pull/17641): Fixed Exception for not defined variables when editing a product quantity in an order, by [@Progi1984](https://github.com/Progi1984)
* [#17568](https://github.com/PrestaShop/PrestaShop/pull/17568): Order price font size, by [@atomiix](https://github.com/atomiix)
* [#17535](https://github.com/PrestaShop/PrestaShop/pull/17535): Fix deleted customer's order preview/details, by [@atomiix](https://github.com/atomiix)
* [#17528](https://github.com/PrestaShop/PrestaShop/pull/17528): Fix all 1.7.7.x controllers and routes to comply with conventions. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)
* [#17305](https://github.com/PrestaShop/PrestaShop/pull/17305): Adds optional DNI field and missing post_code handling in supplier form. Thank you [@zuk3975](https://github.com/zuk3975)
* [#17220](https://github.com/PrestaShop/PrestaShop/pull/17220): Fix multiple bugs in order view page. Thank you [@zuk3975](https://github.com/zuk3975)


### Front office
* [#17677](https://github.com/PrestaShop/PrestaShop/pull/17677): Reintroduce hook displayAdditionalCustomerAddressFields, by [@eternoendless](https://github.com/eternoendless)
* [#17577](https://github.com/PrestaShop/PrestaShop/pull/17577): Prevent email enumeration, by [@PierreRambaud](https://github.com/PierreRambaud)


### Tests
* [#17756](https://github.com/PrestaShop/PrestaShop/pull/17756): Functional tests - Add test 'Sort customers', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17741](https://github.com/PrestaShop/PrestaShop/pull/17741): Functional tests - Add test 'Sort contacts', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17735](https://github.com/PrestaShop/PrestaShop/pull/17735): Functional tests - Adding wait for navigation in goToHomePage function, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17724](https://github.com/PrestaShop/PrestaShop/pull/17724): Functional tests - Add test 'Sort brands and addresses', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17722](https://github.com/PrestaShop/PrestaShop/pull/17722): Functional tests - Product settings Enable/Disable display available quantities. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17720](https://github.com/PrestaShop/PrestaShop/pull/17720): Functional tests - Add test 'Sort products', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17714](https://github.com/PrestaShop/PrestaShop/pull/17714): Functional tests - Fix Sort tests , by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17710](https://github.com/PrestaShop/PrestaShop/pull/17710): Functional tests - Add movement check after update stocks quantity, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17708](https://github.com/PrestaShop/PrestaShop/pull/17708): Functional tests - Fix validation message selector name. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17697](https://github.com/PrestaShop/PrestaShop/pull/17697): Functional tests - Add test 'Sort Taxes', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17693](https://github.com/PrestaShop/PrestaShop/pull/17693): Functional tests - Add test 'Sort languages', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17678](https://github.com/PrestaShop/PrestaShop/pull/17678): Functional tests - Add context to orders tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17674](https://github.com/PrestaShop/PrestaShop/pull/17674): Functional tests - Add context to catalog tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17640](https://github.com/PrestaShop/PrestaShop/pull/17640): Functional tests - Customer settings enable/disable re-display cart at login. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17605](https://github.com/PrestaShop/PrestaShop/pull/17605): Functional tests - Product settings enable/disable default activation status. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17582](https://github.com/PrestaShop/PrestaShop/pull/17582): Functional tests - Add context to customers, addresses and customer service tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17567](https://github.com/PrestaShop/PrestaShop/pull/17567): Functional tests - Add context to international tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17543](https://github.com/PrestaShop/PrestaShop/pull/17543): Functional tests - Add context for shop params tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17534](https://github.com/PrestaShop/PrestaShop/pull/17534): Functional tests - Add context for advanced params tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17530](https://github.com/PrestaShop/PrestaShop/pull/17530): Functional tests - Add context to functional tests (Modules And Design), by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.6.x' branch (for v1.7.6.4)


### Back office
* [#17613](https://github.com/PrestaShop/PrestaShop/pull/17613): Files translations.css and product_page.css do not exist, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front office
* [#17638](https://github.com/PrestaShop/PrestaShop/pull/17638): Prevent email enumeration, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16616](https://github.com/PrestaShop/PrestaShop/pull/16616): Fix round remaining value of reduction amount (backport #16531), by [@matks](https://github.com/matks)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#467](https://github.com/PrestaShop/docs/pull/467): Add answer for first shipping question in FAQ, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#462](https://github.com/PrestaShop/docs/pull/462): Adding an FAQ section, by [@toutantic](https://github.com/toutantic)
* [#455](https://github.com/PrestaShop/docs/pull/455): Note deprecated hook. Thank you [@BenNewman](https://github.com/BenNewman)
* [#453](https://github.com/PrestaShop/docs/pull/453): Update package.json for security reason, by [@PierreRambaud](https://github.com/PierreRambaud)


### PrestaShop Specifications
* [#94](https://github.com/PrestaShop/prestashop-specs/pull/94): Added contributions guidelines. Thank you [@sam-pires](https://github.com/sam-pires)
* [#91](https://github.com/PrestaShop/prestashop-specs/pull/91): Cleaned the repository tree. Thank you [@sam-pires](https://github.com/sam-pires)
* [#90](https://github.com/PrestaShop/prestashop-specs/pull/90): Update and improve the readme. Thank you [@sam-pires](https://github.com/sam-pires)


### Classic-rocket theme
* [#137](https://github.com/PrestaShop/classic-rocket/pull/137): Clean custom.js file. Thank you [@micka-fdz](https://github.com/micka-fdz)


### Nightly board
* [#10](https://github.com/PrestaShop/nightly-board/pull/10): New nightly board, by [@NeOMakinG](https://github.com/NeOMakinG)


### Faceted search module
* [#157](https://github.com/PrestaShop/ps_facetedsearch/pull/157): Fix order by price indexation without tax rate. Thank you [@clotaire202](https://github.com/clotaire202)


### Product Comments module
* [#49](https://github.com/PrestaShop/productcomments/pull/49): Add Symfony 5 support. Thank you [@mvorisek](https://github.com/mvorisek)


### Share Buttons module
* [#25](https://github.com/PrestaShop/ps_sharebuttons/pull/25): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#24](https://github.com/PrestaShop/ps_sharebuttons/pull/24): Single blank line at EOF. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#23](https://github.com/PrestaShop/ps_sharebuttons/pull/23): Cast spaces. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#19](https://github.com/PrestaShop/ps_sharebuttons/pull/19): Trailing comma in multiline array. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#14](https://github.com/PrestaShop/ps_sharebuttons/pull/14): Test isset of var. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@sam-pires](https://github.com/sam-pires), [@jolelievre](https://github.com/jolelievre), [@boubkerbribri](https://github.com/boubkerbribri), [@toutantic](https://github.com/toutantic), [@tdavidsonas88](https://github.com/tdavidsonas88), [@davidglezz](https://github.com/davidglezz), [@matks](https://github.com/matks), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@micka-fdz](https://github.com/micka-fdz), [@matthieu-rolland](https://github.com/matthieu-rolland), [@NeOMakinG](https://github.com/NeOMakinG), [@clotaire202](https://github.com/clotaire202), [@atomiix](https://github.com/atomiix), [@eternoendless](https://github.com/eternoendless), [@jf-viguier](https://github.com/jf-viguier), [@Progi1984](https://github.com/Progi1984), [@BenNewman](https://github.com/BenNewman), [@PierreRambaud](https://github.com/PierreRambaud), [@arouiadib](https://github.com/arouiadib), [@mvorisek](https://github.com/mvorisek), [@zuk3975](https://github.com/zuk3975), [@zalexki](https://github.com/zalexki), [@MathiasReker](https://github.com/MathiasReker), [@PrestaEdit](https://github.com/PrestaEdit)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

