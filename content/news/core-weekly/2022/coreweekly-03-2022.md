---
layout: post
aliases: ["/news/coreweekly-03-2022"]
title:  "PrestaShop Core Weekly - Week 3 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-01-28
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 17th to Sunday 23th of January 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

[PrestaShop 1.7.8.3](https://build.prestashop.com/news/prestashop-1-7-8-3-maintenance-release/) was released on the 25th of January 2022. This security release fixes 25 bugs and 1 security issue since the 1.7.8.2 release.

We suggest upgrading your store quickly to benefit from these bug fixes. Make sure to perform a full manual backup before, so you can roll back the upgrade if something goes wrong.

Reminder: the latest version of the 1-Click Upgrade module is v4.14.0, don’t forget to upgrade it.

## Releases

* [Autoupgrade](https://github.com/PrestaShop/autoupgrade) module: [v4.14.0](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.14.0)
* [Prestashop-ui-kit](https://github.com/PrestaShop/prestashop-ui-kit): [v1.2.4](https://github.com/PrestaShop/prestashop-ui-kit/releases/tag/v1.2.4)
* [Ps_brandlist](https://github.com/PrestaShop/ps_brandlist) module: [v1.0.3](https://github.com/PrestaShop/ps_brandlist/releases/tag/v1.0.3)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [41 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-01-17..2022-01-23) have been created in the project repositories;
- [37 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-01-17..2022-01-23), including [15 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-01-17..2022-01-23) on the core;
- [88 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-01-17..2022-01-23) in the project repositories;
- [66 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-01-17..2022-01-23), including [56 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-01-17..2022-01-23).


## Code changes in the 'develop' branch


### Core
* [#27367](https://github.com/PrestaShop/PrestaShop/pull/27367): Fix LocalizationWarmer condition. Thank you [@davidglezz](https://github.com/davidglezz)
* [#27361](https://github.com/PrestaShop/PrestaShop/pull/27361): Deprecate Tools::arrayReplaceRecursive(). Thank you [@davidglezz](https://github.com/davidglezz)
* [#27360](https://github.com/PrestaShop/PrestaShop/pull/27360): Simplify CmpPrice functions. Thank you [@davidglezz](https://github.com/davidglezz)
* [#27359](https://github.com/PrestaShop/PrestaShop/pull/27359): Use mbstring functions without checking, in Tools class. Thank you [@davidglezz](https://github.com/davidglezz)
* [#27102](https://github.com/PrestaShop/PrestaShop/pull/27102): PHPStan (Level 4) on controllers/, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#27358](https://github.com/PrestaShop/PrestaShop/pull/27358): Add Value Object and Exceptions to migrate Contact>Store in BO. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)
* [#27346](https://github.com/PrestaShop/PrestaShop/pull/27346): Redesign SEO preview. Thank you [@mparvazi](https://github.com/mparvazi)
* [#27329](https://github.com/PrestaShop/PrestaShop/pull/27329): Fix filters reset in BO stock movements. Thank you [@saulaski](https://github.com/saulaski)
* [#27285](https://github.com/PrestaShop/PrestaShop/pull/27285): Fix bad display of the notifications dropdown in medium screen. Thank you [@mparvazi](https://github.com/mparvazi)
* [#27283](https://github.com/PrestaShop/PrestaShop/pull/27283): Fix bad display of header toolbar in Product page and Stock page. Thank you [@mparvazi](https://github.com/mparvazi)
* [#27268](https://github.com/PrestaShop/PrestaShop/pull/27268): Add product link in order preview. Thank you [@PululuK](https://github.com/PululuK)
* [#27012](https://github.com/PrestaShop/PrestaShop/pull/27012): Removed AdminParent controllers from search in BackOffice, by [@Progi1984](https://github.com/Progi1984)
* [#26883](https://github.com/PrestaShop/PrestaShop/pull/26883): Preload fonts in the BO, by [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#27368](https://github.com/PrestaShop/PrestaShop/pull/27368): Fix nightly - Change credit slip row value on table. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27260](https://github.com/PrestaShop/PrestaShop/pull/27260): Functional tests - Add new test 'Check multi invoice'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### New Front-office theme
* [#154](https://github.com/PrestaShop/theme-refacto/pull/154): Fix facetedsearch bug, remove unused method, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#153](https://github.com/PrestaShop/theme-refacto/pull/153): Use old javascript for facetedsearch and refacto small parts, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#152](https://github.com/PrestaShop/theme-refacto/pull/152): Fix active link for blockwishlist. Thank you [@mparvazi](https://github.com/mparvazi)
* [#151](https://github.com/PrestaShop/theme-refacto/pull/151): Replace JQuery UI sliders by noUiSlider, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#150](https://github.com/PrestaShop/theme-refacto/pull/150): Remove blockreassurance as hes not installed auto, by [@NeOMakinG](https://github.com/NeOMakinG)


### Faceted search module
* [#598](https://github.com/PrestaShop/ps_facetedsearch/pull/598): Bump @babel/preset-env from 7.16.10 to 7.16.11. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#597](https://github.com/PrestaShop/ps_facetedsearch/pull/597): Bump @babel/preset-env from 7.16.8 to 7.16.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#596](https://github.com/PrestaShop/ps_facetedsearch/pull/596): Bump @babel/core from 7.16.7 to 7.16.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#595](https://github.com/PrestaShop/ps_facetedsearch/pull/595): Bump eslint from 8.6.0 to 8.7.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#594](https://github.com/PrestaShop/ps_facetedsearch/pull/594): Bump mocha from 9.1.3 to 9.1.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Issues Bot
* [#34](https://github.com/PrestaShop/issuebot/pull/34): add 1.7.8.4 kanban, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Wishlist block module
* [#158](https://github.com/PrestaShop/blockwishlist/pull/158): Fix alert message width for theme-refacto. Thank you [@mparvazi](https://github.com/mparvazi)
* [#157](https://github.com/PrestaShop/blockwishlist/pull/157): Make compatible with user account menu. Thank you [@mparvazi](https://github.com/mparvazi)
* [#156](https://github.com/PrestaShop/blockwishlist/pull/156): Refacto card-block to card-body, by [@NeOMakinG](https://github.com/NeOMakinG)


### Customer reassurance block module
* [#342](https://github.com/PrestaShop/blockreassurance/pull/342): Bump @babel/core from 7.16.7 to 7.16.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#341](https://github.com/PrestaShop/blockreassurance/pull/341): Bump mini-css-extract-plugin from 2.5.0 to 2.5.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#340](https://github.com/PrestaShop/blockreassurance/pull/340): Bump eslint from 8.6.0 to 8.7.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#339](https://github.com/PrestaShop/blockreassurance/pull/339): Bump mini-css-extract-plugin from 2.4.7 to 2.5.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Check payment module
* [#56](https://github.com/PrestaShop/ps_checkpayment/pull/56):  Check compatibility PHP 5.6 to PHP 8.1, by [@Progi1984](https://github.com/Progi1984)
* [#55](https://github.com/PrestaShop/ps_checkpayment/pull/55): Remove deprecated hook and update to 2.0.6, by [@Progi1984](https://github.com/Progi1984)


### User documentation landing page
* [#180](https://github.com/PrestaShop/user-documentation-landing/pull/180): chore(deps-dev): bump sass from 1.48.0 to 1.49.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#179](https://github.com/PrestaShop/user-documentation-landing/pull/179): fix(deps): bump core-js from 3.20.2 to 3.20.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Prestashop UI Kit
* [#180](https://github.com/PrestaShop/prestashop-ui-kit/pull/180): Bump path-parse from 1.0.6 to 1.0.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#179](https://github.com/PrestaShop/prestashop-ui-kit/pull/179): Release 1.2.4, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#178](https://github.com/PrestaShop/prestashop-ui-kit/pull/178): Bump tar from 6.1.0 to 6.1.11. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#177](https://github.com/PrestaShop/prestashop-ui-kit/pull/177): Bump follow-redirects from 1.13.3 to 1.14.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#176](https://github.com/PrestaShop/prestashop-ui-kit/pull/176): Bump tmpl from 1.0.4 to 1.0.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#175](https://github.com/PrestaShop/prestashop-ui-kit/pull/175): Update package version and change GA to npm, by [@NeOMakinG](https://github.com/NeOMakinG)


### Auto Upgrade module
* [#453](https://github.com/PrestaShop/autoupgrade/pull/453): Release 4.14.0, by [@jolelievre](https://github.com/jolelievre)
* [#452](https://github.com/PrestaShop/autoupgrade/pull/452): Bump version 4.14.0, by [@jolelievre](https://github.com/jolelievre)
* [#449](https://github.com/PrestaShop/autoupgrade/pull/449): Bump follow-redirects from 1.14.4 to 1.14.7 in /tests/e2e. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#448](https://github.com/PrestaShop/autoupgrade/pull/448): Add rtl files generation. Thank you [@tegbessou](https://github.com/tegbessou)
* [#447](https://github.com/PrestaShop/autoupgrade/pull/447): Remove Referrer (and associated) table, by [@Progi1984](https://github.com/Progi1984)
* [#436](https://github.com/PrestaShop/autoupgrade/pull/436): Add logs email receivers in configuration table. Thank you [@rsoulard-prolaser](https://github.com/rsoulard-prolaser)


### Core Weekly Generator tool
* [#111](https://github.com/PrestaShop/core-weekly-generator/pull/111): Update repository list, by [@matks](https://github.com/matks)


### Theme for PrestaShop Project's site
* [#2](https://github.com/PrestaShop/ps-org-theme/pull/2): Fix style of notices and code blocks, by [@eternoendless](https://github.com/eternoendless)


### Changes in developer documentation sources
* [#1269](https://github.com/PrestaShop/docs/pull/1269): Remove anchor part of link symfony doc for forms as service. Thank you [@SebSept](https://github.com/SebSept)
* [#1267](https://github.com/PrestaShop/docs/pull/1267): Changed database structure version number to the latest one. Thank you [@anttivu](https://github.com/anttivu)


### Brands list module
* [#12](https://github.com/PrestaShop/ps_brandlist/pull/12): Release version 1.0.3, by [@matks](https://github.com/matks)


### Product Comments module
* [#107](https://github.com/PrestaShop/productcomments/pull/107): Fix upgrade module to v4. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#92](https://github.com/PrestaShop/productcomments/pull/92): Customer anonymisation if reviews coming from version 3. Thank you [@jf-viguier](https://github.com/jf-viguier)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@NeOMakinG](https://github.com/NeOMakinG), [@dependabot[bot]](https://github.com/apps/dependabot), [@matthieu-rolland](https://github.com/matthieu-rolland), [@mparvazi](https://github.com/mparvazi), [@Progi1984](https://github.com/Progi1984), [@jolelievre](https://github.com/jolelievre), [@matks](https://github.com/matks), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@davidglezz](https://github.com/davidglezz), [@LouisAUTHIE](https://github.com/LouisAUTHIE), [@eternoendless](https://github.com/eternoendless), [@tegbessou](https://github.com/tegbessou), [@saulaski](https://github.com/saulaski), [@SebSept](https://github.com/SebSept), [@anttivu](https://github.com/anttivu), [@PululuK](https://github.com/PululuK), [@rsoulard-prolaser](https://github.com/rsoulard-prolaser), [@jf-viguier](https://github.com/jf-viguier)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

