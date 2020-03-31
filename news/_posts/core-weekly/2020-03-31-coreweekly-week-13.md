---
layout: post
title:  "PrestaShop Core Weekly - Week 13 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date: 2020-03-31
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 23rd to Sunday 29th of March 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [58 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-03-23..2020-03-29) have been created in the project repositories;
- [76 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-03-23..2020-03-29), including [25 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-03-23..2020-03-29) on the core;
- [60 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-03-23..2020-03-29) in the project repositories;
- [81 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-03-23..2020-03-29), including [70 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-03-23..2020-03-29).
        


## Code changes in the 'develop' branch


### Back office
* [#18314](https://github.com/PrestaShop/PrestaShop/pull/18314): Removed redundant code. Thank you [@Hk-tang](https://github.com/Hk-tang)
* [#18176](https://github.com/PrestaShop/PrestaShop/pull/18176): Remove double border in TinyMCE translatable field. Thank you [@davidglezz](https://github.com/davidglezz)
* [#17923](https://github.com/PrestaShop/PrestaShop/pull/17923): Correct generatorRuntime on new-theme to fix an error on add currency page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#17703](https://github.com/PrestaShop/PrestaShop/pull/17703): #17082 : Grid row delete confirmation modal - Catalog > Files, by [@sowbiba](https://github.com/sowbiba)
* [#17426](https://github.com/PrestaShop/PrestaShop/pull/17426): Update new-theme webpack to v4.41 and its dependencies, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#17562](https://github.com/PrestaShop/PrestaShop/pull/17562): Mailto - Spam Bot improvement - thanks @waschier-design, by [@matks](https://github.com/matks)
* [#15100](https://github.com/PrestaShop/PrestaShop/pull/15100): Change the way to get the price without discounts. Thank you [@levyn](https://github.com/levyn)


### Tests
* [#18285](https://github.com/PrestaShop/PrestaShop/pull/18285): Fix case in path. Thank you [@mvorisek](https://github.com/mvorisek)


### Merge
* [#18331](https://github.com/PrestaShop/PrestaShop/pull/18331): Merge 1.7.7.x into develop - 26/03/2020, by [@matks](https://github.com/matks)
* [#18244](https://github.com/PrestaShop/PrestaShop/pull/18244): Merge 1.7.7.x into develop - 20/03/2020, by [@matks](https://github.com/matks)


## Code changes in the '1.7.7.x' branch


### Core
* [#18144](https://github.com/PrestaShop/PrestaShop/pull/18144): Fixed on CartRule : Discount on selected product excluding discounted products, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#18294](https://github.com/PrestaShop/PrestaShop/pull/18294): Return null when value is an empty string in ArabicToLatinDigitDataTransformer, by [@atomiix](https://github.com/atomiix)
* [#18288](https://github.com/PrestaShop/PrestaShop/pull/18288): Fix wrong number of orders when filter 'New client' on, by [@atomiix](https://github.com/atomiix)
* [#18266](https://github.com/PrestaShop/PrestaShop/pull/18266): Add target options to index grid of orders on customer column, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#18245](https://github.com/PrestaShop/PrestaShop/pull/18245): Fix orders page dropdown going under header by adding a flip false property, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#18208](https://github.com/PrestaShop/PrestaShop/pull/18208): Increase quantity when adding an already added product when creating order, by [@atomiix](https://github.com/atomiix)
* [#18164](https://github.com/PrestaShop/PrestaShop/pull/18164): Use hasBeenPaid instead of hasInvoice to enable refund feature, by [@jolelievre](https://github.com/jolelievre)
* [#18124](https://github.com/PrestaShop/PrestaShop/pull/18124): Modifying address from order should duplicate it and soft delete former address, by [@jolelievre](https://github.com/jolelievre)
* [#18102](https://github.com/PrestaShop/PrestaShop/pull/18102): Fix sidebar submenu opening by changing style and adding JS, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#18063](https://github.com/PrestaShop/PrestaShop/pull/18063): Use localized dates for order page, by [@matks](https://github.com/matks)
* [#17975](https://github.com/PrestaShop/PrestaShop/pull/17975): Convert arabic/persian digits to latin digits in DatePickerType, by [@atomiix](https://github.com/atomiix)
* [#17938](https://github.com/PrestaShop/PrestaShop/pull/17938): Fix conversion when adding payment to order, by [@sowbiba](https://github.com/sowbiba)
* [#17853](https://github.com/PrestaShop/PrestaShop/pull/17853): BO: Fix shipping price tax issue on order creation page, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17801](https://github.com/PrestaShop/PrestaShop/pull/17801): View and Create Order feedbacks corrections, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#17526](https://github.com/PrestaShop/PrestaShop/pull/17526): Fix customer address form. Thank you [@zuk3975](https://github.com/zuk3975)
* [#17385](https://github.com/PrestaShop/PrestaShop/pull/17385): Confirm modal on restoring currency settings, by [@sowbiba](https://github.com/sowbiba)


### Front office
* [#18221](https://github.com/PrestaShop/PrestaShop/pull/18221): Backport #16837 to 1.7.7.x : Add breadcrumbs to my account pages, by [@matks](https://github.com/matks)


### Tests
* [#18339](https://github.com/PrestaShop/PrestaShop/pull/18339): Fix behat tests that add payments, by [@jolelievre](https://github.com/jolelievre)
* [#18317](https://github.com/PrestaShop/PrestaShop/pull/18317): Functional tests - Add test 'Update number of products displayed per page', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18306](https://github.com/PrestaShop/PrestaShop/pull/18306): Functional tests - Add test 'Check invoice downloaded from orders list', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18290](https://github.com/PrestaShop/PrestaShop/pull/18290): Functional tests - Test minimum purchase total required in order to validate the order. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18272](https://github.com/PrestaShop/PrestaShop/pull/18272): Functional tests - Add test 'Export Orders', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18269](https://github.com/PrestaShop/PrestaShop/pull/18269): Functional tests - Add test 'Help card' for Stocks page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18268](https://github.com/PrestaShop/PrestaShop/pull/18268): Functional tests - Add test 'Help card' for Monitoring page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18267](https://github.com/PrestaShop/PrestaShop/pull/18267): Functional tests - Fix update successful message on addresses page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18250](https://github.com/PrestaShop/PrestaShop/pull/18250): Functional tests - Add test 'Filter orders', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18242](https://github.com/PrestaShop/PrestaShop/pull/18242): Functional tests - Add test 'Help card' for orders page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18231](https://github.com/PrestaShop/PrestaShop/pull/18231): Functional tests - Fix default timeout for waiting for selector, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18197](https://github.com/PrestaShop/PrestaShop/pull/18197): Functional tests - Order settings enable/disable reordering option. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18161](https://github.com/PrestaShop/PrestaShop/pull/18161): Functional tests - Add test Enable and disable B2B mode, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17965](https://github.com/PrestaShop/PrestaShop/pull/17965): Add HTML IDs and classes to View Customer BO page, by [@matks](https://github.com/matks)


## Code changes in the '1.7.6.x' branch


### Back office
* [#18064](https://github.com/PrestaShop/PrestaShop/pull/18064): Fix error when trying to translate Serbian using the BO interface, by [@eternoendless](https://github.com/eternoendless)
* [#17920](https://github.com/PrestaShop/PrestaShop/pull/17920): Wrong redirection when using the quick search for a category. Thank you [@PululuK](https://github.com/PululuK)


### Front office
* [#18103](https://github.com/PrestaShop/PrestaShop/pull/18103): Duplicate address when submitting a form with errors, by [@PierreRambaud](https://github.com/PierreRambaud)


### Tests
* [#18309](https://github.com/PrestaShop/PrestaShop/pull/18309): Change test fixtures that need to be in the future, by [@jolelievre](https://github.com/jolelievre)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#495](https://github.com/PrestaShop/docs/pull/495): Change node version as we now support 12.x LTS, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#494](https://github.com/PrestaShop/docs/pull/494): Fix typo mistake. Thank you [@gadnis](https://github.com/gadnis)


### open-source
* [#30](https://github.com/PrestaShop/open-source/pull/30): Update channels.md, by [@ttoine](https://github.com/ttoine)


### Faceted search module
* [#166](https://github.com/PrestaShop/ps_facetedsearch/pull/166): remove trailing space, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#165](https://github.com/PrestaShop/ps_facetedsearch/pull/165): Release 3.5.0, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#164](https://github.com/PrestaShop/ps_facetedsearch/pull/164): Bump to 3.5.0, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#163](https://github.com/PrestaShop/ps_facetedsearch/pull/163): Update npm packages, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#154](https://github.com/PrestaShop/ps_facetedsearch/pull/154): Sort products: InStock, available with qty 0, OutOfStock. Thank you [@gadnis](https://github.com/gadnis)


### Live translation
* [#5](https://github.com/PrestaShop/ps_livetranslation/pull/5): Remove trailing space in wording, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Core Weekly Generator tool
* [#27](https://github.com/PrestaShop/core-weekly-generator/pull/27): Add ps_wirepayment repository to the list, by [@ttoine](https://github.com/ttoine)


### Contact informations module
* [#26](https://github.com/PrestaShop/ps_contactinfo/pull/26): Release v3.3.0, by [@jolelievre](https://github.com/jolelievre)


### Email subscription module
* [#51](https://github.com/PrestaShop/ps_emailsubscription/pull/51): Do not send voucher when customer signs up if he did not register for newsletter , by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Theme customization
* [#23](https://github.com/PrestaShop/ps_themecusto/pull/23): Bump version 1.1.1, by [@jolelievre](https://github.com/jolelievre)
* [#22](https://github.com/PrestaShop/ps_themecusto/pull/22): Update references of strings in translations, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Prestashop UI Kit
* [#90](https://github.com/PrestaShop/prestashop-ui-kit/pull/90): Update webpack from 3.22 to 4.42, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#89](https://github.com/PrestaShop/prestashop-ui-kit/pull/89): Update bootstrap version from 4.0 to 4.4.1, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#88](https://github.com/PrestaShop/prestashop-ui-kit/pull/88): Do improvements corrections of UIKit evolutions, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#87](https://github.com/PrestaShop/prestashop-ui-kit/pull/87): Adding error to group input and adjusting some things, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#86](https://github.com/PrestaShop/prestashop-ui-kit/pull/86): Adding PSInputNumber component, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#79](https://github.com/PrestaShop/prestashop-ui-kit/pull/79): Refactor yes/no toggle component, by [@NeOMakinG](https://github.com/NeOMakinG)


### Cross-selling
* [#7](https://github.com/PrestaShop/ps_crossselling/pull/7): Cross selling products not displayed on displayShoppingCartFooter hook. Thank you [@Nukium](https://github.com/Nukium)


### Visitors online
* [#8](https://github.com/PrestaShop/statslive/pull/8): Release 2.1.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### psgdpr
* [#76](https://github.com/PrestaShop/psgdpr/pull/76): Use customerpersonaldata in translations only. Thank you [@pablopolyte](https://github.com/pablopolyte)
* [#71](https://github.com/PrestaShop/psgdpr/pull/71): Fix long2ip() parameter type. Thank you [@davidglezz](https://github.com/davidglezz)


### Shopping cart module
* [#55](https://github.com/PrestaShop/ps_shoppingcart/pull/55): Fix "On reset, module ps_shoppingcart is hooked in the wrong place"  issue #16968. Thank you [@arouiadib](https://github.com/arouiadib)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@NeOMakinG](https://github.com/NeOMakinG), [@jolelievre](https://github.com/jolelievre), [@gadnis](https://github.com/gadnis), [@ttoine](https://github.com/ttoine), [@matks](https://github.com/matks), [@boubkerbribri](https://github.com/boubkerbribri), [@Hk-tang](https://github.com/Hk-tang), [@matthieu-rolland](https://github.com/matthieu-rolland), [@atomiix](https://github.com/atomiix), [@PierreRambaud](https://github.com/PierreRambaud), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@mvorisek](https://github.com/mvorisek), [@davidglezz](https://github.com/davidglezz), [@Progi1984](https://github.com/Progi1984), [@eternoendless](https://github.com/eternoendless), [@sowbiba](https://github.com/sowbiba), [@Nukium](https://github.com/Nukium), [@PululuK](https://github.com/PululuK), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@pablopolyte](https://github.com/pablopolyte), [@zuk3975](https://github.com/zuk3975), [@arouiadib](https://github.com/arouiadib), [@levyn](https://github.com/levyn)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
