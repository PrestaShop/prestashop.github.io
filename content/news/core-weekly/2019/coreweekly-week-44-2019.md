---
layout: post
aliases: ["/news/coreweekly-week-44-2019"]
title:  "PrestaShop Core Weekly - Week 44 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-11-05 15:50:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 28th of October to Sunday 03rd of November 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## News

The core weekly is now back on tracks: all previous weeks have been published. A new generator written in Python has been created, and the source is available. Have a look at it and improve it on GitHub:  
[https://github.com/PrestaShop/core-weekly-generator](https://github.com/PrestaShop/core-weekly-generator)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [66 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-10-28..2019-11-03) have been created in the project repositories;
- [61 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-10-28..2019-11-03), including [17 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-10-28..2019-11-03) on the core;
- [58 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-10-28..2019-11-03) in the project repositories;
- [52 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-10-28..2019-11-03), including [46 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-10-28..2019-11-03).
        

## Code changes in the 'develop' branch

### Core

* [#16097](https://github.com/PrestaShop/PrestaShop/pull/16097): Improvement on product image generation for high definition images.. Thank you [@Prestaworks](https://github.com/Prestaworks)
* [#16072](https://github.com/PrestaShop/PrestaShop/pull/16072): Remove require config.inc.php on all command and fix a notice. Thank you [@202-ecommerce](https://github.com/202-ecommerce)
* [#15965](https://github.com/PrestaShop/PrestaShop/pull/15965): Implements CQRS on Notifications. Thank you [@atomiix](https://github.com/atomiix)
* [#12379](https://github.com/PrestaShop/PrestaShop/pull/12379): Fix of the carrier choice in payment preferences, product editor and cart rules. Thank you [@Rolige](https://github.com/Rolige)

### Back office

* [#16230](https://github.com/PrestaShop/PrestaShop/pull/16230): Add tax information for ecotax field, by [@marionf](https://github.com/marionf)
* [#16224](https://github.com/PrestaShop/PrestaShop/pull/16224): Add tax information in combination table, by [@marionf](https://github.com/marionf)
* [#16222](https://github.com/PrestaShop/PrestaShop/pull/16222): Fix error when deleting order cart rule. Thank you [@sarjon](https://github.com/sarjon)
* [#16218](https://github.com/PrestaShop/PrestaShop/pull/16218): Add and update tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16193](https://github.com/PrestaShop/PrestaShop/pull/16193): Update Norwegian tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16190](https://github.com/PrestaShop/PrestaShop/pull/16190): Update Moldavian tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16189](https://github.com/PrestaShop/PrestaShop/pull/16189): Update Japanese tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16188](https://github.com/PrestaShop/PrestaShop/pull/16188): Update Iranian tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16187](https://github.com/PrestaShop/PrestaShop/pull/16187): Update Israeli tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16186](https://github.com/PrestaShop/PrestaShop/pull/16186): Update Indonesian tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16185](https://github.com/PrestaShop/PrestaShop/pull/16185): Update Guyanan tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16183](https://github.com/PrestaShop/PrestaShop/pull/16183): Update Fijian tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16182](https://github.com/PrestaShop/PrestaShop/pull/16182): Update Egyptian tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16181](https://github.com/PrestaShop/PrestaShop/pull/16181): Update Ecuadorian tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16179](https://github.com/PrestaShop/PrestaShop/pull/16179): Update Dominican Republic tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16175](https://github.com/PrestaShop/PrestaShop/pull/16175): Fix label not in place on BO products page in Filter by categories. Thank you [@atomiix](https://github.com/atomiix)
* [#16161](https://github.com/PrestaShop/PrestaShop/pull/16161): Update Colombian tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16160](https://github.com/PrestaShop/PrestaShop/pull/16160): Update Swiss tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16123](https://github.com/PrestaShop/PrestaShop/pull/16123): Delete supplier's address only if no other shops use it. Thank you [@atomiix](https://github.com/atomiix)
* [#16088](https://github.com/PrestaShop/PrestaShop/pull/16088): Disable Customer group selection checkbox when single customer is set…. Thank you [@atomiix](https://github.com/atomiix)
* [#16075](https://github.com/PrestaShop/PrestaShop/pull/16075): Some fixes to Orders page. Thank you [@sarjon](https://github.com/sarjon)
* [#16045](https://github.com/PrestaShop/PrestaShop/pull/16045): Swap select value submision fix in admin forms. Thank you [@L3RAZ](https://github.com/L3RAZ)
* [#16022](https://github.com/PrestaShop/PrestaShop/pull/16022): Migrate order action and status block. Thank you [@sarjon](https://github.com/sarjon)
* [#15982](https://github.com/PrestaShop/PrestaShop/pull/15982): Migrate product component for Orders page. Thank you [@RaimondasSapola](https://github.com/RaimondasSapola)
* [#15906](https://github.com/PrestaShop/PrestaShop/pull/15906): Fixes issue Undefined index _route. Thank you [@Gamesh](https://github.com/Gamesh)
* [#14809](https://github.com/PrestaShop/PrestaShop/pull/14809): Allow modifying email body contents, by [@jolelievre](https://github.com/jolelievre)

### Front office

* [#16126](https://github.com/PrestaShop/PrestaShop/pull/16126): Change checkout button wording. Thank you [@atomiix](https://github.com/atomiix)
* [#16049](https://github.com/PrestaShop/PrestaShop/pull/16049): Fix number of DL & expiration date being displayed in the download virtual product mail. Thank you [@atomiix](https://github.com/atomiix)

### Tests

* [#16216](https://github.com/PrestaShop/PrestaShop/pull/16216): Tests - Add functional tests command to package.json, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16194](https://github.com/PrestaShop/PrestaShop/pull/16194): Tests - Refactoring puppeteer tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16156](https://github.com/PrestaShop/PrestaShop/pull/16156): Tests - Update name of catalog Menu link in BO, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16125](https://github.com/PrestaShop/PrestaShop/pull/16125): Functional Tests - Add BO tests for Brands, by [@boubkerbribri](https://github.com/boubkerbribri)

## Code changes in the '1.7.6.x' branch (for 1.7.6.2)

### Core

* [#16203](https://github.com/PrestaShop/PrestaShop/pull/16203): Update version to 1.7.6.2. Thank you [@atomiix](https://github.com/atomiix)

### Back office

* [#16172](https://github.com/PrestaShop/PrestaShop/pull/16172): Remove constraint on siret in CustomerType, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#16158](https://github.com/PrestaShop/PrestaShop/pull/16158): Fix filter not being taken into account in grid export, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#16153](https://github.com/PrestaShop/PrestaShop/pull/16153): Add missing field type DNI in brand address form, by [@jolelievre](https://github.com/jolelievre)

## Code changes in modules, themes & tools

### Changes in developer documentation

* [#394](https://github.com/PrestaShop/docs/pull/394): Add PS 1.7.7 and PHP 7.4 to compatibility chart, by [@eternoendless](https://github.com/eternoendless)
* [#392](https://github.com/PrestaShop/docs/pull/392): Add missing semicolon on PHP code. Thank you [@Klemart3D](https://github.com/Klemart3D)
* [#390](https://github.com/PrestaShop/docs/pull/390): Add link to system requirements tool, by [@eternoendless](https://github.com/eternoendless)

### Shopping cart module

* [#51](https://github.com/PrestaShop/ps_shoppingcart/pull/51): Release 2.0.3, by [@matks](https://github.com/matks)

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@eternoendless](https://github.com/eternoendless), [@Klemart3D](https://github.com/Klemart3D), [@marionf](https://github.com/marionf), [@marionf](https://github.com/marionf), [@sarjon](https://github.com/sarjon), [@LouiseBonnard](https://github.com/LouiseBonnard), [@boubkerbribri](https://github.com/boubkerbribri), [@atomiix](https://github.com/atomiix), [@boubkerbribri](https://github.com/boubkerbribri), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@atomiix](https://github.com/atomiix), [@SylNicky](https://github.com/SylNicky), [@matthieu-rolland](https://github.com/matthieu-rolland), [@LouiseBonnard](https://github.com/LouiseBonnard), [@LouiseBonnard](https://github.com/LouiseBonnard), [@matthieu-rolland](https://github.com/matthieu-rolland), [@boubkerbribri](https://github.com/boubkerbribri), [@jolelievre](https://github.com/jolelievre), [@eternoendless](https://github.com/eternoendless), [@atomiix](https://github.com/atomiix), [@boubkerbribri](https://github.com/boubkerbribri), [@atomiix](https://github.com/atomiix), [@Prestaworks](https://github.com/Prestaworks), [@atomiix](https://github.com/atomiix), [@sarjon](https://github.com/sarjon), [@202-ecommerce](https://github.com/202-ecommerce), [@atomiix](https://github.com/atomiix), [@L3RAZ](https://github.com/L3RAZ), [@sarjon](https://github.com/sarjon), [@ashishsharawat](https://github.com/ashishsharawat), [@matks](https://github.com/matks), [@RaimondasSapola](https://github.com/RaimondasSapola), [@atomiix](https://github.com/atomiix), [@Gamesh](https://github.com/Gamesh), [@jolelievre](https://github.com/jolelievre), [@Rolige](https://github.com/Rolige)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

