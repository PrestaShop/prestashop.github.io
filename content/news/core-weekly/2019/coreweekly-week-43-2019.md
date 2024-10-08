---
layout: post
aliases: ["/news/coreweekly-week-43-2019"]
title:  "PrestaShop Core Weekly - Week 43 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-11-05 15:50:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 21st to Sunday 27th of October 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [80 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-10-21..2019-10-27) have been created in the project repositories;
- [62 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-10-21..2019-10-27), including [11 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-10-21..2019-10-27) on the core;
- [55 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-10-21..2019-10-27) in the project repositories;
- [56 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-10-21..2019-10-27), including [33 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-10-21..2019-10-27).
        

## Code changes in the 'develop' branch

### Core

* [#16111](https://github.com/PrestaShop/PrestaShop/pull/16111): Checked that ShippingCostTax values are not null before being formatted, by [@Progi1984](https://github.com/Progi1984)
* [#16041](https://github.com/PrestaShop/PrestaShop/pull/16041): remove google plus from login footer google plus is dead. Thank you [@mohamedaitbella](https://github.com/mohamedaitbella)
* [#15448](https://github.com/PrestaShop/PrestaShop/pull/15448): Replaced Tools::displayPrice deprecated in favor of Locale::formatPrice(), by [@Progi1984](https://github.com/Progi1984)
* [#16051](https://github.com/PrestaShop/PrestaShop/pull/16051): Merge of bug fixes from 1.7.6.x branch to develop, by [@matks](https://github.com/matks)

### Back office

* [#16090](https://github.com/PrestaShop/PrestaShop/pull/16090): Implement new Order View header. Thank you [@sarjon](https://github.com/sarjon)
* [#16089](https://github.com/PrestaShop/PrestaShop/pull/16089): Fixed "Invalid  parameter: '' cannot be interpreted as a number", by [@Progi1984](https://github.com/Progi1984)
* [#16071](https://github.com/PrestaShop/PrestaShop/pull/16071): Fixed "Call to a member function formatPrice() on null", by [@Progi1984](https://github.com/Progi1984)
* [#16060](https://github.com/PrestaShop/PrestaShop/pull/16060): Minor improvements for Orders list. Thank you [@sarjon](https://github.com/sarjon)
* [#16055](https://github.com/PrestaShop/PrestaShop/pull/16055): Update Greek tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#16020](https://github.com/PrestaShop/PrestaShop/pull/16020): Update Turkish currency sign, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#15995](https://github.com/PrestaShop/PrestaShop/pull/15995): BO create order part-3. Implement vouchers managing. Thank you [@zuk3975](https://github.com/zuk3975)
* [#15511](https://github.com/PrestaShop/PrestaShop/pull/15511): Make sure the key used for translation is case sensitive., by [@jocel1](https://github.com/jocel1)
* [#14682](https://github.com/PrestaShop/PrestaShop/pull/14682): Preview extension for Grids. Thank you [@sarjon](https://github.com/sarjon)

### Front office

* [#16114](https://github.com/PrestaShop/PrestaShop/pull/16114): Add missing placeholder in the Private Note textarea. Thank you [@atomiix](https://github.com/atomiix)
* [#16085](https://github.com/PrestaShop/PrestaShop/pull/16085): Fixed "Attempted to call an undefined method named 'formatPrice' of class 'PrestaShop\PrestaShop\Core\Localization\CLDR\Locale'", by [@Progi1984](https://github.com/Progi1984)
* [#15987](https://github.com/PrestaShop/PrestaShop/pull/15987): Check if customized product image exists before trying to delete it. Thank you [@jf-viguier](https://github.com/jf-viguier)

### Tests

* [#16018](https://github.com/PrestaShop/PrestaShop/pull/16018): Sanity Tests - Refacto of all tests , by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16005](https://github.com/PrestaShop/PrestaShop/pull/16005): Tests - Adding env file for docker , by [@boubkerbribri](https://github.com/boubkerbribri)
* [#15988](https://github.com/PrestaShop/PrestaShop/pull/15988): Functional Tests - Add tests for categories. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#15980](https://github.com/PrestaShop/PrestaShop/pull/15980): Linkchecker update, by [@SimonGrn](https://github.com/SimonGrn)


## Code changes in the '1.7.6.x' branch (for 1.7.6.2)

### Back office

* [#16047](https://github.com/PrestaShop/PrestaShop/pull/16047): Handle multistore customers sharing in customers listing at group level, by [@matks](https://github.com/matks)
* [#16036](https://github.com/PrestaShop/PrestaShop/pull/16036): Add redirect routes on security annotation of Category pages, by [@jolelievre](https://github.com/jolelievre)

## Code changes in modules, themes & tools

### Core Weekly Generator

* [#13](https://github.com/PrestaShop/core-weekly-generator/pull/13): Generated graph, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#12](https://github.com/PrestaShop/core-weekly-generator/pull/12): Graph data, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11](https://github.com/PrestaShop/core-weekly-generator/pull/11): Fixed not exit for pull requersts, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#10](https://github.com/PrestaShop/core-weekly-generator/pull/10): Fix variable name, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9](https://github.com/PrestaShop/core-weekly-generator/pull/9): Fix variables names, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#7](https://github.com/PrestaShop/core-weekly-generator/pull/7): Update community reports, by [@PierreRambaud](https://github.com/PierreRambaud)

### Cleaner module

* [#40](https://github.com/PrestaShop/pscleaner/pull/40): remove duplicated tables in getCatalogRelatedTables(). Thank you [@nenes25](https://github.com/nenes25)

### Changes in developer documentation

* [#388](https://github.com/PrestaShop/docs/pull/388): Fix typo. Thank you [@davidglezz](https://github.com/davidglezz)

### PrestaShop Specifications

* [#78](https://github.com/PrestaShop/prestashop-specs/pull/78): Edit specs for images order, by [@marionf](https://github.com/marionf)

### Architecture Decision Records repository

* [#6](https://github.com/PrestaShop/ADR/pull/6): Use of autowiring, by [@eternoendless](https://github.com/eternoendless)

### Cronjobs module

* [#45](https://github.com/PrestaShop/cronjobs/pull/45): Don't try to delete a cronjob if does'nt exist. Thank you [@camlafit](https://github.com/camlafit)

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@atomiix](https://github.com/atomiix), [@Progi1984](https://github.com/Progi1984), [@sarjon](https://github.com/sarjon), [@Progi1984](https://github.com/Progi1984), [@Progi1984](https://github.com/Progi1984), [@PierreRambaud](https://github.com/PierreRambaud), [@Progi1984](https://github.com/Progi1984), [@nenes25](https://github.com/nenes25), [@davidglezz](https://github.com/davidglezz), [@sarjon](https://github.com/sarjon), [@LouiseBonnard](https://github.com/LouiseBonnard), [@matks](https://github.com/matks), [@matks](https://github.com/matks), [@mohamedaitbella](https://github.com/mohamedaitbella), [@PierreRambaud](https://github.com/PierreRambaud), [@marionf](https://github.com/marionf), [@jolelievre](https://github.com/jolelievre), [@PierreRambaud](https://github.com/PierreRambaud), [@PierreRambaud](https://github.com/PierreRambaud), [@PierreRambaud](https://github.com/PierreRambaud), [@LouiseBonnard](https://github.com/LouiseBonnard), [@boubkerbribri](https://github.com/boubkerbribri), [@boubkerbribri](https://github.com/boubkerbribri), [@PierreRambaud](https://github.com/PierreRambaud), [@zuk3975](https://github.com/zuk3975), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@jf-viguier](https://github.com/jf-viguier), [@SimonGrn](https://github.com/SimonGrn), [@eternoendless](https://github.com/eternoendless), [@jocel1](https://github.com/jocel1), [@Progi1984](https://github.com/Progi1984), [@sarjon](https://github.com/sarjon), [@camlafit](https://github.com/camlafit)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

