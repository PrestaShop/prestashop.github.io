---
layout: post
aliases: ["/news/coreweekly-week-50-2019"]
title:  "PrestaShop Core Weekly - Week 50 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-12-20
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 9th to Sunday 15th of December 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [53 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-12-09..2019-12-15) have been created in the project repositories;
- [39 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-12-09..2019-12-15), including [3 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-12-09..2019-12-15) on the core;
- [49 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-12-09..2019-12-15) in the project repositories;
- [28 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-12-09..2019-12-15), including [25 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-12-09..2019-12-15).


## Code changes in the 'develop' branch


### Core
* [#16789](https://github.com/PrestaShop/PrestaShop/pull/16789): Security policy, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16733](https://github.com/PrestaShop/PrestaShop/pull/16733): Fix new connection detection. Thank you [@mvorisek](https://github.com/mvorisek)
* [#16144](https://github.com/PrestaShop/PrestaShop/pull/16144): Migrate hooks for new Order view page. Thank you [@sarjon](https://github.com/sarjon)
* [#15942](https://github.com/PrestaShop/PrestaShop/pull/15942): Docker compose could not stats files, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#16658](https://github.com/PrestaShop/PrestaShop/pull/16658): Use tab attribute as fallback when a module does not have category, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16440](https://github.com/PrestaShop/PrestaShop/pull/16440): Added indexes for product reference and supplier_reference. Thank you [@Gamesh](https://github.com/Gamesh)
* [#16432](https://github.com/PrestaShop/PrestaShop/pull/16432): Module alias in webpack configuration for the new-theme, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#15003](https://github.com/PrestaShop/PrestaShop/pull/15003): Migration Catalog > Files and Catalog > Files Edit and create forms. Thank you [@RaimondasSapola](https://github.com/RaimondasSapola)


### Tests
* [#16784](https://github.com/PrestaShop/PrestaShop/pull/16784): Tests - Fix checkout FO, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16771](https://github.com/PrestaShop/PrestaShop/pull/16771): Functionnal tests - Add test "Filter and bulk delete order messages", by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16766](https://github.com/PrestaShop/PrestaShop/pull/16766): Functional test - Fix global variable call in the test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#16764](https://github.com/PrestaShop/PrestaShop/pull/16764): Tests - Fix sanity on nightly, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16761](https://github.com/PrestaShop/PrestaShop/pull/16761): Functional test  - CRUD order message, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16759](https://github.com/PrestaShop/PrestaShop/pull/16759): Functional Tests - Enable/Disable product image in the invoice. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#16750](https://github.com/PrestaShop/PrestaShop/pull/16750): Sanity tests - Can't install prestashop with same db in prod mode, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16748](https://github.com/PrestaShop/PrestaShop/pull/16748): Functional tests - Fix expect on test currencies, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16747](https://github.com/PrestaShop/PrestaShop/pull/16747): Functional Tests -  Enable/Disable tax breakdown. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#16731](https://github.com/PrestaShop/PrestaShop/pull/16731): Tests - Disable dev mode while testing with docker, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#425](https://github.com/PrestaShop/docs/pull/425): Fix typo. Thank you [@pgrimaud](https://github.com/pgrimaud)
* [#423](https://github.com/PrestaShop/docs/pull/423): Provide links to github guides about using a fork, by [@matks](https://github.com/matks)
* [#422](https://github.com/PrestaShop/docs/pull/422): Add ps 1.7.7 min php ver and remove IE support. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#412](https://github.com/PrestaShop/docs/pull/412): Add graph to summarize PR process, by [@matks](https://github.com/matks)
* [#339](https://github.com/PrestaShop/docs/pull/339): Added section to send email: custom template. Thank you [@luigimassa](https://github.com/luigimassa)


### Faceted search module
* [#151](https://github.com/PrestaShop/ps_facetedsearch/pull/151): Fix CLDR number formatter for negative values, by [@jolelievre](https://github.com/jolelievre)


### Prestashop UI Kit
* [#73](https://github.com/PrestaShop/prestashop-ui-kit/pull/73): Fixing all stylelint errors. Thank you [@NeOMakinG](https://github.com/NeOMakinG)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@pgrimaud](https://github.com/pgrimaud), [@matks](https://github.com/matks), [@PierreRambaud](https://github.com/PierreRambaud), [@boubkerbribri](https://github.com/boubkerbribri), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@jf-viguier](https://github.com/jf-viguier), [@mvorisek](https://github.com/mvorisek), [@jolelievre](https://github.com/jolelievre), [@NeOMakinG](https://github.com/NeOMakinG), [@Gamesh](https://github.com/Gamesh), [@sarjon](https://github.com/sarjon), [@luigimassa](https://github.com/luigimassa), [@RaimondasSapola](https://github.com/RaimondasSapola)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

