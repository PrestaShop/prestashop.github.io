---
layout: post
aliases: ["/news/coreweekly-week-42-2019"]
title:  "PrestaShop Core Weekly - Week 42 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-11-05 15:50:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 14th to Sunday 20th of October 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [80 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-10-14..2019-10-20) have been created in the project repositories;
- [56 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-10-14..2019-10-20), including [17 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-10-14..2019-10-20) on the core;
- [61 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-10-14..2019-10-20) in the project repositories;
- [60 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-10-14..2019-10-20), including [50 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-10-14..2019-10-20).
        

## Code changes in the 'develop' branch

### Core

* [#15974](https://github.com/PrestaShop/PrestaShop/pull/15974): Fix condition check count languages in getAlternativeLangsUrl. Thank you [@dariusakafest](https://github.com/dariusakafest)
* [#15967](https://github.com/PrestaShop/PrestaShop/pull/15967): Use midnight for birthdate verification, by [@eternoendless](https://github.com/eternoendless)
* [#15903](https://github.com/PrestaShop/PrestaShop/pull/15903): Hides bad vouchers that should not be displayed to customers, by [@matks](https://github.com/matks)
* [#15805](https://github.com/PrestaShop/PrestaShop/pull/15805): Fix Cannot use object of type ParameterBag as array. Thank you [@davidglezz](https://github.com/davidglezz)
* [#13636](https://github.com/PrestaShop/PrestaShop/pull/13636): Adding zones for: Austria, Switzerland, Denkmark, Netherlands, Thaila…. Thank you [@manfield](https://github.com/manfield)
* [#15951](https://github.com/PrestaShop/PrestaShop/pull/15951): Merge modifications from branch 176 back to develop, by [@jolelievre](https://github.com/jolelievre)

### Back office

* [#16008](https://github.com/PrestaShop/PrestaShop/pull/16008): Add Order status update in Order View page. Thank you [@sarjon](https://github.com/sarjon)
* [#15969](https://github.com/PrestaShop/PrestaShop/pull/15969): Update Mexican tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#15968](https://github.com/PrestaShop/PrestaShop/pull/15968): Update Swedish tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#15955](https://github.com/PrestaShop/PrestaShop/pull/15955): Migrates Customer block of Order view page. Thank you [@sarjon](https://github.com/sarjon)
* [#15926](https://github.com/PrestaShop/PrestaShop/pull/15926): Fix error SQL in getRecurseCategory method, by [@marionf](https://github.com/marionf)
* [#15909](https://github.com/PrestaShop/PrestaShop/pull/15909): Fix for product images in multishop BO. Thank you [@PrestaworksJonas](https://github.com/PrestaworksJonas)
* [#15908](https://github.com/PrestaShop/PrestaShop/pull/15908): Introduces list dropdown - uses it in order list page. Thank you [@tomas862](https://github.com/tomas862)
* [#15901](https://github.com/PrestaShop/PrestaShop/pull/15901): Implement discounts management in Order View page. Thank you [@sarjon](https://github.com/sarjon)
* [#15900](https://github.com/PrestaShop/PrestaShop/pull/15900): Replace usages of jQuery.live usages and add polyfill, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#15899](https://github.com/PrestaShop/PrestaShop/pull/15899): BO order creation page - part 2. Handle shipping block. Thank you [@zuk3975](https://github.com/zuk3975)
* [#15886](https://github.com/PrestaShop/PrestaShop/pull/15886): Improve pop up information on Category deletion, by [@Progi1984](https://github.com/Progi1984)
* [#15798](https://github.com/PrestaShop/PrestaShop/pull/15798): Remove a field from the employee creation form, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#15778](https://github.com/PrestaShop/PrestaShop/pull/15778): Migrate Payment block of Order view page. Thank you [@sarjon](https://github.com/sarjon)
* [#15757](https://github.com/PrestaShop/PrestaShop/pull/15757): Fix monitoring grids id configuration. Thank you [@zuk3975](https://github.com/zuk3975)
* [#15428](https://github.com/PrestaShop/PrestaShop/pull/15428): Add check for required fields in BO > Country > Address format, by [@matthieu-rolland](https://github.com/matthieu-rolland)

### Front office

* [#16014](https://github.com/PrestaShop/PrestaShop/pull/16014): Fix html being displayed in download virtual product text mail. Thank you [@atomiix](https://github.com/atomiix)
* [#15872](https://github.com/PrestaShop/PrestaShop/pull/15872): Check mimum quantity for products in the basket order, by [@matthieu-rolland](https://github.com/matthieu-rolland)

### Tests

* [#15984](https://github.com/PrestaShop/PrestaShop/pull/15984): [Test] - Improve quick view product, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#15978](https://github.com/PrestaShop/PrestaShop/pull/15978): Functional Tests - Add BO tests for  taxes, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#15905](https://github.com/PrestaShop/PrestaShop/pull/15905): Tests - Add module alias, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#15865](https://github.com/PrestaShop/PrestaShop/pull/15865): Functional Tests - Add BO tests for customers, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.6.x' branch (for 1.7.6.2)

### Core

* [#16026](https://github.com/PrestaShop/PrestaShop/pull/16026): Remove final keyword from Lang entity, by [@jolelievre](https://github.com/jolelievre)

### Back office

* [#15643](https://github.com/PrestaShop/PrestaShop/pull/15643): Allow CLDR to display deleted/inactive currencies, by [@jolelievre](https://github.com/jolelievre)

### Front office

* [#15964](https://github.com/PrestaShop/PrestaShop/pull/15964): Use product url (including combination) rather than canonical one in the miniatures, by [@jolelievre](https://github.com/jolelievre)
* [#15963](https://github.com/PrestaShop/PrestaShop/pull/15963): Add rel="nofollow" to prestashop website link, by [@matks](https://github.com/matks)
* [#15930](https://github.com/PrestaShop/PrestaShop/pull/15930): Fix on product-flags class for product cards, by [@Progi1984](https://github.com/Progi1984)

## Code changes in modules, themes & tools

### PrestaShop Specifications

* [#77](https://github.com/PrestaShop/prestashop-specs/pull/77): Update product image management, by [@marionf](https://github.com/marionf)
* [#76](https://github.com/PrestaShop/prestashop-specs/pull/76): Update specs accordingly to issue 12773, by [@marionf](https://github.com/marionf)
* [#75](https://github.com/PrestaShop/prestashop-specs/pull/75): Created specs for FO produc lists - flags links. Thank you [@samuel-pires](https://github.com/samuel-pires)

### Cleaner module

* [#39](https://github.com/PrestaShop/pscleaner/pull/39): remove attribute_impact declared twice. Thank you [@nenes25](https://github.com/nenes25)

### MJML theme converter

* [#1](https://github.com/PrestaShop/mjml-theme-converter/pull/1): use separate virtualProduct var for text and html. Thank you [@atomiix](https://github.com/atomiix)

### Shopping cart module

* [#50](https://github.com/PrestaShop/ps_shoppingcart/pull/50): Release 2.0.3, by [@matks](https://github.com/matks)
* [#49](https://github.com/PrestaShop/ps_shoppingcart/pull/49): Update README, add LICENSE, add release-drafter config, by [@matks](https://github.com/matks)
* [#47](https://github.com/PrestaShop/ps_shoppingcart/pull/47): Clean modal template from old todos, by [@matks](https://github.com/matks)

### Changes in developer documentation

* [#385](https://github.com/PrestaShop/docs/pull/385): Improve hook example for form hooks usage. Thank you [@cesarmuriana](https://github.com/cesarmuriana)
* [#383](https://github.com/PrestaShop/docs/pull/383): Fix a few wordings. Thank you [@djodjo3](https://github.com/djodjo3)
* [#382](https://github.com/PrestaShop/docs/pull/382): Fix blank lines in "How to create your own Behat tests or add tests to PrestaShop", by [@matks](https://github.com/matks)

### Faceted search module

* [#149](https://github.com/PrestaShop/ps_facetedsearch/pull/149): Clear cache button displays an error even on success, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#148](https://github.com/PrestaShop/ps_facetedsearch/pull/148): Release 3.4.0, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#147](https://github.com/PrestaShop/ps_facetedsearch/pull/147): Update version to 3.4.0, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#145](https://github.com/PrestaShop/ps_facetedsearch/pull/145): Fix url validation. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)

### Docker

* [#188](https://github.com/PrestaShop/docker/pull/188): Php configuration tuning. Thank you [@djodjo3](https://github.com/djodjo3)
* [#187](https://github.com/PrestaShop/docker/pull/187): Add db check. Thank you [@djodjo3](https://github.com/djodjo3)

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Roman3349](https://github.com/Roman3349), [@jolelievre](https://github.com/jolelievre), [@marionf](https://github.com/marionf), [@nenes25](https://github.com/nenes25), [@marionf](https://github.com/marionf), [@atomiix](https://github.com/atomiix), [@atomiix](https://github.com/atomiix), [@sarjon](https://github.com/sarjon), [@samuel-pires](https://github.com/samuel-pires), [@boubkerbribri](https://github.com/boubkerbribri), [@matks](https://github.com/matks), [@cesarmuriana](https://github.com/cesarmuriana), [@boubkerbribri](https://github.com/boubkerbribri), [@PierreRambaud](https://github.com/PierreRambaud), [@matks](https://github.com/matks), [@dariusakafest](https://github.com/dariusakafest), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@eternoendless](https://github.com/eternoendless), [@jolelievre](https://github.com/jolelievre), [@matks](https://github.com/matks), [@PierreRambaud](https://github.com/PierreRambaud), [@PierreRambaud](https://github.com/PierreRambaud), [@sarjon](https://github.com/sarjon), [@jolelievre](https://github.com/jolelievre), [@djodjo3](https://github.com/djodjo3), [@djodjo3](https://github.com/djodjo3), [@djodjo3](https://github.com/djodjo3), [@matks](https://github.com/matks), [@Progi1984](https://github.com/Progi1984), [@marionf](https://github.com/marionf), [@matks](https://github.com/matks), [@PrestaworksJonas](https://github.com/PrestaworksJonas), [@tomas862](https://github.com/tomas862), [@boubkerbribri](https://github.com/boubkerbribri), [@matks](https://github.com/matks), [@sarjon](https://github.com/sarjon), [@matthieu-rolland](https://github.com/matthieu-rolland), [@zuk3975](https://github.com/zuk3975), [@Progi1984](https://github.com/Progi1984), [@matthieu-rolland](https://github.com/matthieu-rolland), [@boubkerbribri](https://github.com/boubkerbribri), [@rokaszygmantas](https://github.com/rokaszygmantas), [@davidglezz](https://github.com/davidglezz), [@matthieu-rolland](https://github.com/matthieu-rolland), [@sarjon](https://github.com/sarjon), [@zuk3975](https://github.com/zuk3975), [@jolelievre](https://github.com/jolelievre), [@matthieu-rolland](https://github.com/matthieu-rolland), [@manfield](https://github.com/manfield)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

