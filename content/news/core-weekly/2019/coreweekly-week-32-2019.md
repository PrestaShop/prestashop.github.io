---
layout: post
aliases: ["/news/coreweekly-week-32-2019"]
title:  "PrestaShop Core Weekly - Week 32 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-10-02 10:00:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 05th of August to Sunday 11th of August 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [65 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-08-05..2019-08-11) have been created in the project repositories;
- [60 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-08-05..2019-08-11), including [8 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-08-05..2019-08-11) on the core;
- [55 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-08-05..2019-08-11) in the project repositories;
- [46 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-08-05..2019-08-11), including [40 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-08-05..2019-08-11).
        

## Code changes in the 'develop' branch

### Back office

* [#14977](https://github.com/PrestaShop/PrestaShop/pull/14977): Fix Search customer in specific group, by [@khouloudbelguith](https://github.com/khouloudbelguith)

* [#14586](https://github.com/PrestaShop/PrestaShop/pull/14586): Implement Circuit Breaker for fetching blog news, by [@Progi1984](https://github.com/Progi1984)

### Tests

* [#15031](https://github.com/PrestaShop/PrestaShop/pull/15031): Fix install prestashop test - Smoke tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)

* [#15024](https://github.com/PrestaShop/PrestaShop/pull/15024): Renaming files and test directory - Smoke tests campaign. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)

* [#14902](https://github.com/PrestaShop/PrestaShop/pull/14902): Check the Front Office test with puppeteer - Smoke tests campaign. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)

## Code changes in the '1.7.6.x' branch (for v1.7.6.1)

### Core

* [#15051](https://github.com/PrestaShop/PrestaShop/pull/15051): Fix translations, by [@jolelievre](https://github.com/jolelievre)

### Back office

* [#15036](https://github.com/PrestaShop/PrestaShop/pull/15036): Fix supplier display after import, by [@jolelievre](https://github.com/jolelievre)

* [#15017](https://github.com/PrestaShop/PrestaShop/pull/15017): Improve translation test module, by [@eternoendless](https://github.com/eternoendless)

* [#14962](https://github.com/PrestaShop/PrestaShop/pull/14962): Fix error preventing to translate backoffice wordings when using a theme other than classic, by [@eternoendless](https://github.com/eternoendless)

* [#14938](https://github.com/PrestaShop/PrestaShop/pull/14938): Fix error when loading theme that includes a translations directory but no translations, by [@eternoendless](https://github.com/eternoendless)

* [#14721](https://github.com/PrestaShop/PrestaShop/pull/14721): Manage edit/view link for customers in HelperList, by [@jolelievre](https://github.com/jolelievre)

* [#14719](https://github.com/PrestaShop/PrestaShop/pull/14719): Scan translation keys from email themes, by [@jolelievre](https://github.com/jolelievre)

## Code changes in modules, themes & tools

### Changes in developer documentation

* [#322](https://github.com/PrestaShop/docs/pull/322): Improve notable changes for 1.7.6, by [@eternoendless](https://github.com/eternoendless)

* [#320](https://github.com/PrestaShop/docs/pull/320): Fixed a couple of typos. Thank you [@NathanGiesbrecht](https://github.com/NathanGiesbrecht)

* [#316](https://github.com/PrestaShop/docs/pull/316): Fix some hooks descriptions. Thank you [@manfield](https://github.com/manfield)

* [#305](https://github.com/PrestaShop/docs/pull/305): Introduces number and integer min max filter type documentation. Thank you [@tomas862](https://github.com/tomas862)

* [#280](https://github.com/PrestaShop/docs/pull/280): Fixed hook name, by [@mickaelandrieu](https://github.com/mickaelandrieu)

### PrestaShop Specifications

* [#37](https://github.com/PrestaShop/prestashop-specs/pull/37): Update product page specs, by [@marionf](https://github.com/marionf)

* [#36](https://github.com/PrestaShop/prestashop-specs/pull/36): Edit style, by [@marionf](https://github.com/marionf)

* [#35](https://github.com/PrestaShop/prestashop-specs/pull/35): Update prestashop.md, by [@marionf](https://github.com/marionf)

* [#34](https://github.com/PrestaShop/prestashop-specs/pull/34): Delete Catalog-products-add-edit-virtual-products.md, by [@marionf](https://github.com/marionf)

* [#33](https://github.com/PrestaShop/prestashop-specs/pull/33): Delete Catalog-products-add-edit-shipping.md, by [@marionf](https://github.com/marionf)

* [#32](https://github.com/PrestaShop/prestashop-specs/pull/32): Delete Catalog-products-add-edit-seo.md, by [@marionf](https://github.com/marionf)

* [#31](https://github.com/PrestaShop/prestashop-specs/pull/31): Delete Catalog-products-add-edit-quantities.md, by [@marionf](https://github.com/marionf)

* [#30](https://github.com/PrestaShop/prestashop-specs/pull/30): Delete Catalog-products-add-edit-price.md, by [@marionf](https://github.com/marionf)

* [#29](https://github.com/PrestaShop/prestashop-specs/pull/29): Delete Catalog-products-add-edit-basic-settings.md, by [@marionf](https://github.com/marionf)

* [#28](https://github.com/PrestaShop/prestashop-specs/pull/28): Delete Catalog-Products-add-edit-elements-in-all-tabs.md, by [@marionf](https://github.com/marionf)

* [#27](https://github.com/PrestaShop/prestashop-specs/pull/27): Update links, by [@marionf](https://github.com/marionf)

* [#26](https://github.com/PrestaShop/prestashop-specs/pull/26): Create add-edit-products.md, by [@marionf](https://github.com/marionf)

* [#25](https://github.com/PrestaShop/prestashop-specs/pull/25): update basic settings, by [@marionf](https://github.com/marionf)

* [#24](https://github.com/PrestaShop/prestashop-specs/pull/24): Add pricing tab link, by [@marionf](https://github.com/marionf)

* [#23](https://github.com/PrestaShop/prestashop-specs/pull/23): Add link to price tab specs, by [@marionf](https://github.com/marionf)

* [#22](https://github.com/PrestaShop/prestashop-specs/pull/22): Create Catalog-products-add-edit-price.md, by [@marionf](https://github.com/marionf)

* [#21](https://github.com/PrestaShop/prestashop-specs/pull/21): Update Prestashop.md, by [@marionf](https://github.com/marionf)

* [#20](https://github.com/PrestaShop/prestashop-specs/pull/20): Create Catalog-products-add-edit-seo.md, by [@marionf](https://github.com/marionf)

* [#19](https://github.com/PrestaShop/prestashop-specs/pull/19): Create Catalog-categories-add-edit.md, by [@marionf](https://github.com/marionf)

* [#18](https://github.com/PrestaShop/prestashop-specs/pull/18): Update Catalog-products-add-edit-basic-settings.md, by [@marionf](https://github.com/marionf)

### TranslationTools Bundle

* [#65](https://github.com/PrestaShop/TranslationToolsBundle/pull/65): Add support for underscores in the third component of a domain, by [@eternoendless](https://github.com/eternoendless)

* [#64](https://github.com/PrestaShop/TranslationToolsBundle/pull/64): Add support for underscores in the third component of a domain, by [@eternoendless](https://github.com/eternoendless)

### QA nightly results

* [#7](https://github.com/PrestaShop/QANightlyResults/pull/7): fix typo in GA script, by [@SimonGrn](https://github.com/SimonGrn)

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @jolelievre, @eternoendless, @marionf, @nesrineabdmouleh, @NathanGiesbrecht, @SimonGrn, @khouloudbelguith, @manfield, @tomas862, @Progi1984, @mickaelandrieu!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

