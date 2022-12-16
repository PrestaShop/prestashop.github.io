---
layout: post
aliases: ["/news/coreweekly-04-2022"]
title:  "PrestaShop Core Weekly - Week 4 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-01-31
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 24th to Sunday 30th of January 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear developers,

The first month of this year draws close, and much has already been done!

If you wish to see a bit of this month achievements, just join us for next session of public demonstration from the maintainers team. It will be [streamed live on Wednesday, February 2, 2022, at 4 pm CET](https://www.youtube.com/watch?v=MrLdVbTtxjE). See you then!


## Releases

* [PrestaShop](https://github.com/PrestaShop/PrestaShop): [1.7.8.3](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.3)
* [Ps_emailalerts](https://github.com/PrestaShop/ps_emailalerts) module: [v2.3.1](https://github.com/PrestaShop/ps_emailalerts/releases/tag/v2.3.1)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [67 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-01-24..2022-01-30) have been created in the project repositories;
- [64 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-01-24..2022-01-30), including [33 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-01-24..2022-01-30) on the core;
- [83 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-01-24..2022-01-30) in the project repositories;
- [69 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-01-24..2022-01-30), including [58 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-01-24..2022-01-30).
        


## Code changes in the 'develop' branch


### Core
* [#27234](https://github.com/PrestaShop/PrestaShop/pull/27234): Fix regexp of "id_product_attribute" keyword in product route. Thank you [@saulaski](https://github.com/saulaski)
* [#26773](https://github.com/PrestaShop/PrestaShop/pull/26773): Get specific prices: let mysql optimize the query.. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#26748](https://github.com/PrestaShop/PrestaShop/pull/26748): Instead of testing each hook if it is active, query once and cache.. Thank you [@lmeyer1](https://github.com/lmeyer1)


### Back office
* [#27457](https://github.com/PrestaShop/PrestaShop/pull/27457): Remove NotBlank constraint on CreditSlipOptionsType, by [@matks](https://github.com/matks)
* [#27421](https://github.com/PrestaShop/PrestaShop/pull/27421): Improve products return controller. Thank you [@okom3pom](https://github.com/okom3pom)
* [#25992](https://github.com/PrestaShop/PrestaShop/pull/25992): Fix mail templates. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#25464](https://github.com/PrestaShop/PrestaShop/pull/25464): Product multishop prices, by [@jolelievre](https://github.com/jolelievre)


### Installer
* [#26588](https://github.com/PrestaShop/PrestaShop/pull/26588): `checkSelectPrivilege` must check privileges for both InnoDB and MyISAM. Thank you [@onlime](https://github.com/onlime)


### Tests
* [#27460](https://github.com/PrestaShop/PrestaShop/pull/27460): Functional tests - Fix nightly 25/01/2022. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27059](https://github.com/PrestaShop/PrestaShop/pull/27059): Functional tests - Add new test 'Check invoice'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Back office
* [#27429](https://github.com/PrestaShop/PrestaShop/pull/27429): Add text nowrap to link btn inside grids, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#27389](https://github.com/PrestaShop/PrestaShop/pull/27389): Fix bad display of progress bar for bulk actions. Thank you [@mparvazi](https://github.com/mparvazi)
* [#27333](https://github.com/PrestaShop/PrestaShop/pull/27333): Fix bad display of scrollbar for sidebar menu in RTL. Thank you [@mparvazi](https://github.com/mparvazi)
* [#27330](https://github.com/PrestaShop/PrestaShop/pull/27330): Fix default value for Jquery colorpicker, by [@sowbiba](https://github.com/sowbiba)
* [#27296](https://github.com/PrestaShop/PrestaShop/pull/27296): Add class on light display layout and remove padding top, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#27257](https://github.com/PrestaShop/PrestaShop/pull/27257): Hide default spin buttons for input number. Thank you [@mparvazi](https://github.com/mparvazi)
* [#27236](https://github.com/PrestaShop/PrestaShop/pull/27236): Fix customer grid data factory. Thank you [@rsoulard-prolaser](https://github.com/rsoulard-prolaser)
* [#27225](https://github.com/PrestaShop/PrestaShop/pull/27225): Improve CMS edit page footer. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Front office
* [#27376](https://github.com/PrestaShop/PrestaShop/pull/27376): Fix an unclear alert. Thank you [@rsoulard-prolaser](https://github.com/rsoulard-prolaser)
* [#27374](https://github.com/PrestaShop/PrestaShop/pull/27374): Fix wrong array_slice arguments, by [@atomiix](https://github.com/atomiix)


## Code changes in modules, themes & tools


### Faceted search module
* [#604](https://github.com/PrestaShop/ps_facetedsearch/pull/604): Bump chai from 4.3.5 to 4.3.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#602](https://github.com/PrestaShop/ps_facetedsearch/pull/602): Bump chai from 4.3.4 to 4.3.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#601](https://github.com/PrestaShop/ps_facetedsearch/pull/601): Bump mocha from 9.1.4 to 9.2.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#600](https://github.com/PrestaShop/ps_facetedsearch/pull/600): Bump @babel/core from 7.16.10 to 7.16.12. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#599](https://github.com/PrestaShop/ps_facetedsearch/pull/599): Bump webpack from 5.66.0 to 5.67.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#593](https://github.com/PrestaShop/ps_facetedsearch/pull/593): Fix `strip_tags` error messages during value escaping.. Thank you [@FongWan](https://github.com/FongWan)


### Docker images
* [#287](https://github.com/PrestaShop/docker/pull/287): Add 1.7.8.3 image, by [@Progi1984](https://github.com/Progi1984)


### Customer reassurance block module
* [#346](https://github.com/PrestaShop/blockreassurance/pull/346): Bump mini-css-extract-plugin from 2.5.2 to 2.5.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#345](https://github.com/PrestaShop/blockreassurance/pull/345): Bump webpack-cli from 4.9.1 to 4.9.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#344](https://github.com/PrestaShop/blockreassurance/pull/344): Bump @babel/core from 7.16.10 to 7.16.12. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#343](https://github.com/PrestaShop/blockreassurance/pull/343): Bump webpack from 5.66.0 to 5.67.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Wishlist block module
* [#159](https://github.com/PrestaShop/blockwishlist/pull/159): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Contact Form module
* [#59](https://github.com/PrestaShop/contactform/pull/59): Added Github Action for PHP (and support PHP 5.4 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Dashboard Goals module
* [#28](https://github.com/PrestaShop/dashgoals/pull/28): Added Github Action for PHP (and support PHP 5.4 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Banner module
* [#42](https://github.com/PrestaShop/ps_banner/pull/42): Added Github Action for PHP (and support PHP 5.4 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Changes in developer documentation site
* [#10](https://github.com/PrestaShop/devdocs-site/pull/10): Update docsearch configuration, by [@eternoendless](https://github.com/eternoendless)


### Changes in developer documentation theme
* [#10](https://github.com/PrestaShop/ps-docs-theme/pull/10): Update to new Docsearch v3 and fix native search when docsearch is disabled, by [@eternoendless](https://github.com/eternoendless)


### Changes in developer documentation sources
* [#1275](https://github.com/PrestaShop/docs/pull/1275): Fixed minor typos in the documentation for CI/CD. Thank you [@Om3n31](https://github.com/Om3n31)
* [#1271](https://github.com/PrestaShop/docs/pull/1271): Fix Minor typos in the documentation in update CI/CD. Thank you [@Om3n31](https://github.com/Om3n31)


### New Front-office theme
* [#165](https://github.com/PrestaShop/theme-refacto/pull/165): Fix noUiSlider for RTL. Thank you [@mparvazi](https://github.com/mparvazi)
* [#163](https://github.com/PrestaShop/theme-refacto/pull/163): Fix empty script error in browser console. Thank you [@mparvazi](https://github.com/mparvazi)
* [#158](https://github.com/PrestaShop/theme-refacto/pull/158): Fix products sort order dropdown in Search page. Thank you [@mparvazi](https://github.com/mparvazi)
* [#157](https://github.com/PrestaShop/theme-refacto/pull/157): Fix input number UI. Thank you [@mparvazi](https://github.com/mparvazi)
* [#156](https://github.com/PrestaShop/theme-refacto/pull/156): Using Vazir font for shops in RTL language. Thank you [@mparvazi](https://github.com/mparvazi)
* [#155](https://github.com/PrestaShop/theme-refacto/pull/155): Using sass:math for noUiSlider . Thank you [@mparvazi](https://github.com/mparvazi)


### Wire payment module
* [#67](https://github.com/PrestaShop/ps_wirepayment/pull/67): Fixed hook function name for hook `displayPaymentReturn`, by [@Progi1984](https://github.com/Progi1984)


### Prestashop UI Kit
* [#182](https://github.com/PrestaShop/prestashop-ui-kit/pull/182): Bump node-fetch from 2.6.1 to 2.6.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#181](https://github.com/PrestaShop/prestashop-ui-kit/pull/181): Bump nanoid from 3.1.22 to 3.2.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### User documentation landing page
* [#182](https://github.com/PrestaShop/user-documentation-landing/pull/182): fix(deps): bump node-fetch from 2.6.1 to 2.6.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#181](https://github.com/PrestaShop/user-documentation-landing/pull/181): fix(deps): bump nanoid from 3.1.24 to 3.2.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Stylelint browser compatibility plugin
* [#14](https://github.com/PrestaShop/stylelint-browser-compatibility/pull/14): Bump postcss from 8.2.10 to 8.2.13. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#13](https://github.com/PrestaShop/stylelint-browser-compatibility/pull/13): Bump nanoid from 3.1.23 to 3.2.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Stylelint configuration
* [#24](https://github.com/PrestaShop/stylelint-config/pull/24): Bump nanoid from 3.1.25 to 3.2.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Email Alerts module
* [#102](https://github.com/PrestaShop/ps_emailalerts/pull/102): Fix undefined locale error when creating order from BO, by [@kpodemski](https://github.com/kpodemski)
* [#101](https://github.com/PrestaShop/ps_emailalerts/pull/101): Release 2.3.1, by [@kpodemski](https://github.com/kpodemski)


### Cash on delivery module
* [#40](https://github.com/PrestaShop/ps_cashondelivery/pull/40): Remove deprecated hook and update to 1.0.7, by [@Progi1984](https://github.com/Progi1984)


### Links list module
* [#142](https://github.com/PrestaShop/ps_linklist/pull/142): Hide Best Sales link if feature is disabled. Thank you [@saulaski](https://github.com/saulaski)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@Progi1984](https://github.com/Progi1984), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@matks](https://github.com/matks), [@eternoendless](https://github.com/eternoendless), [@Om3n31](https://github.com/Om3n31), [@mparvazi](https://github.com/mparvazi), [@kpodemski](https://github.com/kpodemski), [@NeOMakinG](https://github.com/NeOMakinG), [@okom3pom](https://github.com/okom3pom), [@rsoulard-prolaser](https://github.com/rsoulard-prolaser), [@atomiix](https://github.com/atomiix), [@FongWan](https://github.com/FongWan), [@sowbiba](https://github.com/sowbiba), [@saulaski](https://github.com/saulaski), [@Hlavtox](https://github.com/Hlavtox), [@lmeyer1](https://github.com/lmeyer1), [@onlime](https://github.com/onlime), [@jolelievre](https://github.com/jolelievre)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

