---
layout: post
aliases: ["/news/coreweekly-week-35-2019"]
title:  "PrestaShop Core Weekly - Week 35 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-10-02 10:15:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 26th of August to Sunday 1st of September 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

PrestaShop 1.7.6.1 is now available. This maintenance release fixes 26 issues reported on version 1.7.6.0. Please [read the release note](http://build.prestashop.com/news/prestashop-1-7-6-1-maintenance-release/) for more informations.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [83 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-08-26..2019-09-01) have been created in the project repositories;
- [55 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-08-26..2019-09-01), including [13 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-08-26..2019-09-01) on the core;
- [42 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-08-26..2019-09-01) in the project repositories;
- [53 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-08-26..2019-09-01), including [35 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-08-26..2019-09-01).

## Code changes in the 'develop' branch

### Core

* [#14838](https://github.com/PrestaShop/PrestaShop/pull/14838): Update invalid characters in Customer Creation & Update error messages and tips, by [@Progi1984](https://github.com/Progi1984)

* [#14702](https://github.com/PrestaShop/PrestaShop/pull/14702): Fixes wrong visitor group assumed on multistore, by [@matthieu-rolland](https://github.com/matthieu-rolland)

* [#13988](https://github.com/PrestaShop/PrestaShop/pull/13988): Migrates Orders list - part 1. Thank you [@sarjon](https://github.com/sarjon)

* [#15306](https://github.com/PrestaShop/PrestaShop/pull/15306): Merge 1.7.6.x into develop branch, by [@jolelievre](https://github.com/jolelievre)

### Back office

* [#14991](https://github.com/PrestaShop/PrestaShop/pull/14991): Fix Monitoring grids data for multishop. Thank you [@zuk3975](https://github.com/zuk3975)

* [#14959](https://github.com/PrestaShop/PrestaShop/pull/14959): Add duplicate prices feature. Thank you [@202-ecommerce](https://github.com/202-ecommerce)

* [#14879](https://github.com/PrestaShop/PrestaShop/pull/14879): Fix change position of products into a category in the catalog > product page, by [@PierreRambaud](https://github.com/PierreRambaud)

* [#14689](https://github.com/PrestaShop/PrestaShop/pull/14689): Scroll bar in back-office menu is too big on small screens, by [@PierreRambaud](https://github.com/PierreRambaud)

* [#14679](https://github.com/PrestaShop/PrestaShop/pull/14679): Automatic Tab with symfony routes, menu now handles disabled modules, by [@jolelievre](https://github.com/jolelievre)

* [#14168](https://github.com/PrestaShop/PrestaShop/pull/14168): Adds missing check for cms page category existence on create/edit actions. Thank you [@zuk3975](https://github.com/zuk3975)

### Front office

* [#15276](https://github.com/PrestaShop/PrestaShop/pull/15276): Fix one column row without colspan. Thank you [@davidglezz](https://github.com/davidglezz)

* [#15167](https://github.com/PrestaShop/PrestaShop/pull/15167): Can not search a disabled product after enabling it from product list. Thank you [@PeeyushAgrawalWebkul](https://github.com/PeeyushAgrawalWebkul)

* [#15083](https://github.com/PrestaShop/PrestaShop/pull/15083): Aria-label instead of sr-only hidden span in variant-links. Thank you [@pojebunny](https://github.com/pojebunny)

* [#15013](https://github.com/PrestaShop/PrestaShop/pull/15013): Fix URLs for non-default combinations. Thank you [@Amazzing](https://github.com/Amazzing)

* [#14937](https://github.com/PrestaShop/PrestaShop/pull/14937): Classic Theme : Plugin EmailSubscription : override the template for column, by [@Progi1984](https://github.com/Progi1984)

* [#12033](https://github.com/PrestaShop/PrestaShop/pull/12033): Display the extra field added on the customer address form in the address block. Thank you [@PeeyushAgrawalWebkul](https://github.com/PeeyushAgrawalWebkul)

### Tests

* [#15301](https://github.com/PrestaShop/PrestaShop/pull/15301): Renaming data names - Smoke tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)

* [#15262](https://github.com/PrestaShop/PrestaShop/pull/15262): Sort smoke tests by adding number to the names, by [@boubkerbribri](https://github.com/boubkerbribri)

* [#14145](https://github.com/PrestaShop/PrestaShop/pull/14145): Behavioral tests for Manufacturer commands. Thank you [@zuk3975](https://github.com/zuk3975)

## Code changes in the '1.7.6.x' branch (for v1.7.6.1)

### Core

* [#15264](https://github.com/PrestaShop/PrestaShop/pull/15264): Update contributors and changelog for 1.7.6.1, by [@matthieu-rolland](https://github.com/matthieu-rolland)

## Code changes in modules, themes & tools

### Changes in developer documentation

* [#330](https://github.com/PrestaShop/docs/pull/330): Add link to php cs fixer config file. Thank you [@jf-viguier](https://github.com/jf-viguier)

### Contact Informations module

* [#23](https://github.com/PrestaShop/ps_contactinfo/pull/23): Release v3.2.0, by [@PierreRambaud](https://github.com/PierreRambaud)

* [#21](https://github.com/PrestaShop/ps_contactinfo/pull/21): Re-synchronize master and dev branches, by [@matthieu-rolland](https://github.com/matthieu-rolland)

* [#16](https://github.com/PrestaShop/ps_contactinfo/pull/16): Version updated to v3.2.0, by [@matthieu-rolland](https://github.com/matthieu-rolland)

* [#15](https://github.com/PrestaShop/ps_contactinfo/pull/15): Add theme compatibility indication in configuration page, by [@matthieu-rolland](https://github.com/matthieu-rolland)

### Faceted search module

* [#128](https://github.com/PrestaShop/ps_facetedsearch/pull/128): Release 3.2.1, by [@PierreRambaud](https://github.com/PierreRambaud)

* [#127](https://github.com/PrestaShop/ps_facetedsearch/pull/127): Bump to version 3.2.1, by [@PierreRambaud](https://github.com/PierreRambaud)

* [#126](https://github.com/PrestaShop/ps_facetedsearch/pull/126): Fix wrong nested array in maxvalue. Thank you [@matrixino](https://github.com/matrixino)

* [#125](https://github.com/PrestaShop/ps_facetedsearch/pull/125): Products are displayed in wrong order when sorted by "position" and "Show products from subcategories" is disabled , by [@PierreRambaud](https://github.com/PierreRambaud)

* [#124](https://github.com/PrestaShop/ps_facetedsearch/pull/124): Refactoring values sorting, by [@PierreRambaud](https://github.com/PierreRambaud)

* [#123](https://github.com/PrestaShop/ps_facetedsearch/pull/123): Better way to check for operations filters, by [@PierreRambaud](https://github.com/PierreRambaud)

### Email subscription module

* [#40](https://github.com/PrestaShop/ps_emailsubscription/pull/40): Release 2.5.0, by [@Progi1984](https://github.com/Progi1984)

* [#39](https://github.com/PrestaShop/ps_emailsubscription/pull/39): Release 2.5.0, by [@Progi1984](https://github.com/Progi1984)

* [#37](https://github.com/PrestaShop/ps_emailsubscription/pull/37): Allow to have a custom template when rendering in a column, by [@Progi1984](https://github.com/Progi1984)

### Watermark module

* [#11](https://github.com/PrestaShop/watermark/pull/11): Remove "FollowSymLinks". Thank you [@antondollmaier](https://github.com/antondollmaier)

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @jf-viguier, @PierreRambaud, @jolelievre, @Progi1984, @matthieu-rolland, @nesrineabdmouleh, @davidglezz, @boubkerbribri, @matrixino, @PeeyushAgrawalWebkul, @pojebunny, @Amazzing, @zuk3975, @202-ecommerce, @sarjon, @antondollmaier!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
