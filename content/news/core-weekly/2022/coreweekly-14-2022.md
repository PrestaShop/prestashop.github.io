---
layout: post
aliases: ["/news/coreweekly-14-2022"]
title:  "PrestaShop Core Weekly - Week 14 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-04-11 18:00:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 4th to Sunday 10th of April 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week was merged a [Pull Request](https://github.com/PrestaShop/PrestaShop/pull/27806) that change the way used to escape Smarty output. This should fix multiple issues introduced by the security bugfixes of PrestaShop 1.7.8.3 (see [the bug report](https://github.com/PrestaShop/PrestaShop/issues/27684)) and will be delivered with the release of PrestaShop 1.7.8.6 in a few weeks.


## Releases

* [Statssales](https://github.com/PrestaShop/statssales) module: [v2.1.0](https://github.com/PrestaShop/statssales/releases/tag/v2.1.0)
* [Prestashop UI Kit](https://github.com/PrestaShop/prestashop-ui-kit): [v1.2.5](https://github.com/PrestaShop/prestashop-ui-kit/releases/tag/v1.2.5)
* [Blockreassurance](https://github.com/PrestaShop/blockreassurance) module: [v5.1.1](https://github.com/PrestaShop/blockreassurance/releases/tag/v5.1.1)
* [PrestaShop module parser](https://github.com/PrestaShop/psssst): [v1.2.1](https://github.com/PrestaShop/psssst/releases/tag/v1.2.1)
* [GDPR](https://github.com/PrestaShop/psgdpr) module: [v1.4.1](https://github.com/PrestaShop/psgdpr/releases/tag/v1.4.1)
* [Circuit-breaker](https://github.com/PrestaShop/circuit-breaker): [v4.0.1](https://github.com/PrestaShop/circuit-breaker/releases/tag/v4.0.1)
* [Distribution-api](https://github.com/PrestaShop/distribution-api): [v0.0.1](https://github.com/PrestaShop/distribution-api/releases/tag/v0.0.1)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [55 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-04-04..2022-04-10) have been created in the project repositories;
- [51 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-04-04..2022-04-10), including [14 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-04-04..2022-04-10) on the core;
- [119 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-04-04..2022-04-10) in the project repositories;
- [114 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-04-04..2022-04-10), including [102 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-04-04..2022-04-10).


## Code changes in the 'develop' branch


### Core
* [#28119](https://github.com/PrestaShop/PrestaShop/pull/28119): Bump phpstan/phpstan to 1.5.4, by [@Progi1984](https://github.com/Progi1984)
* [#28088](https://github.com/PrestaShop/PrestaShop/pull/28088): Simplify `LoadServicesFromModulesPass::process`. Thank you [@PululuK](https://github.com/PululuK)
* [#28020](https://github.com/PrestaShop/PrestaShop/pull/28020): Remove deprecated methods in CacheClearer class, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27962](https://github.com/PrestaShop/PrestaShop/pull/27962): Added module psgdpr, by [@Progi1984](https://github.com/Progi1984)
* [#27960](https://github.com/PrestaShop/PrestaShop/pull/27960): Remove Adapter\Tools::link_rewrite, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27957](https://github.com/PrestaShop/PrestaShop/pull/27957): Remove getSafeModeStatus method, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27657](https://github.com/PrestaShop/PrestaShop/pull/27657): Deprecate cleanNonUnicodeSupport function. Thank you [@davidglezz](https://github.com/davidglezz)


### Back office
* [#28178](https://github.com/PrestaShop/PrestaShop/pull/28178): Update prestakit to 1.2.5, by [@jolelievre](https://github.com/jolelievre)
* [#28172](https://github.com/PrestaShop/PrestaShop/pull/28172): Remove unwanted pnpm-lock.yml file, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#28146](https://github.com/PrestaShop/PrestaShop/pull/28146): Update wording of a tooltip in products settings page - fix #13841. Thank you [@marsaldev](https://github.com/marsaldev)
* [#28118](https://github.com/PrestaShop/PrestaShop/pull/28118): Fix contextual notification in Product Page v2 Edit Page, by [@Progi1984](https://github.com/Progi1984)
* [#28104](https://github.com/PrestaShop/PrestaShop/pull/28104): Removed duplicate in SpecificPriceRule::getAffectedProducts, by [@Progi1984](https://github.com/Progi1984)
* [#28050](https://github.com/PrestaShop/PrestaShop/pull/28050): Fix iframe modal scrollbars, by [@jolelievre](https://github.com/jolelievre)
* [#27839](https://github.com/PrestaShop/PrestaShop/pull/27839): Wrong error message in logs. Thank you [@tlgsoledis](https://github.com/tlgsoledis)
* [#27795](https://github.com/PrestaShop/PrestaShop/pull/27795): Fixed notice 'Undefined index: reduction_applies', by [@Progi1984](https://github.com/Progi1984)
* [#27611](https://github.com/PrestaShop/PrestaShop/pull/27611): Use Vazir font with a node module instead of CDN, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#27440](https://github.com/PrestaShop/PrestaShop/pull/27440): Update BO architecture in product settings page, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27439](https://github.com/PrestaShop/PrestaShop/pull/27439): Don't use 0 value for carrier name. Thank you [@okom3pom](https://github.com/okom3pom)
* [#26377](https://github.com/PrestaShop/PrestaShop/pull/26377): Allow to print order messages. Thank you [@PululuK](https://github.com/PululuK)
* [#25872](https://github.com/PrestaShop/PrestaShop/pull/25872): Make Shop Parameters > Order Settings forms multistore compatible. Thank you [@micka-fdz](https://github.com/micka-fdz)


### Front office
* [#28117](https://github.com/PrestaShop/PrestaShop/pull/28117): Update function getCustomerOrders to avoid error. Thank you [@NicolasCador](https://github.com/NicolasCador)
* [#27292](https://github.com/PrestaShop/PrestaShop/pull/27292): Add category additional description. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Tests
* [#28181](https://github.com/PrestaShop/PrestaShop/pull/28181): Fix nightly 08/04/2022 - Fix default customer and address IDs. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28170](https://github.com/PrestaShop/PrestaShop/pull/28170): Functional tests - Fix log tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28168](https://github.com/PrestaShop/PrestaShop/pull/28168): Functional tests - Fix product settings tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28163](https://github.com/PrestaShop/PrestaShop/pull/28163): Fix PHPstan error, by [@jolelievre](https://github.com/jolelievre)
* [#28159](https://github.com/PrestaShop/PrestaShop/pull/28159): Functional tests - Add new test 'Search, add and remove voucher from new order page'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28138](https://github.com/PrestaShop/PrestaShop/pull/28138): Fix nightly 05/04/2022 and fix some random errors. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27945](https://github.com/PrestaShop/PrestaShop/pull/27945): Functional tests - Add new test 'Add product to cart' in BO. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Core
* [#28171](https://github.com/PrestaShop/PrestaShop/pull/28171): Add missing translation domains in AdminController. Thank you [@lmeyer1](https://github.com/lmeyer1)


### Back office
* [#27806](https://github.com/PrestaShop/PrestaShop/pull/27806): Change the way that smarty is escaped to avoid exception when parsing. Thank you [@Amoifr](https://github.com/Amoifr)
* [#27615](https://github.com/PrestaShop/PrestaShop/pull/27615): Fix header on default pages on mobile, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#27162](https://github.com/PrestaShop/PrestaShop/pull/27162): Increase maximum country state name length from 32 to 80 characters. Thank you [@rickygzz](https://github.com/rickygzz)


### Front office
* [#28112](https://github.com/PrestaShop/PrestaShop/pull/28112): Out of stock label displayed even stock management disabled. Thank you [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul)
* [#28101](https://github.com/PrestaShop/PrestaShop/pull/28101): Remove .browserslistrc file on themes folder. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#28028](https://github.com/PrestaShop/PrestaShop/pull/28028): Remove duplicate error messages in account and address creation, by [@atomiix](https://github.com/atomiix)


## Code changes in modules, themes & tools


### Nightly board
* [#82](https://github.com/PrestaShop/nightly-board/pull/82): Bump moment from 2.24.0 to 2.29.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Prestashop UI Kit
* [#190](https://github.com/PrestaShop/prestashop-ui-kit/pull/190): Bump moment from 2.29.1 to 2.29.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#189](https://github.com/PrestaShop/prestashop-ui-kit/pull/189): Release 1.2.5, by [@jolelievre](https://github.com/jolelievre)
* [#188](https://github.com/PrestaShop/prestashop-ui-kit/pull/188): Bump version 1.2.5, by [@jolelievre](https://github.com/jolelievre)
* [#186](https://github.com/PrestaShop/prestashop-ui-kit/pull/186): Add rule to force disabled background on focus and hover, by [@jolelievre](https://github.com/jolelievre)


### Classic theme
* [#23](https://github.com/PrestaShop/classic-theme/pull/23): Added module `blockreassurance` in Core, by [@Progi1984](https://github.com/Progi1984)
* [#22](https://github.com/PrestaShop/classic-theme/pull/22): Added module `psgdpr` in Core, by [@Progi1984](https://github.com/Progi1984)
* [#18](https://github.com/PrestaShop/classic-theme/pull/18): Add category additional description. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#16](https://github.com/PrestaShop/classic-theme/pull/16): Fix: quickview width buggy on some products, by [@NeOMakinG](https://github.com/NeOMakinG)


### GDPR module
* [#170](https://github.com/PrestaShop/psgdpr/pull/170): Update anonymous password, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#169](https://github.com/PrestaShop/psgdpr/pull/169): Fix break lines in Help Section, by [@Progi1984](https://github.com/Progi1984)
* [#168](https://github.com/PrestaShop/psgdpr/pull/168): Release 1.4.1, by [@matks](https://github.com/matks)
* [#167](https://github.com/PrestaShop/psgdpr/pull/167): Bump version to 1.4.1. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#166](https://github.com/PrestaShop/psgdpr/pull/166): Removed call to `api.addons.prestashop.com`, by [@Progi1984](https://github.com/Progi1984)
* [#165](https://github.com/PrestaShop/psgdpr/pull/165): Remove the deprecated method `Tools::jsonDecode`, Fix Reset & Bump to 1.4.1, by [@Progi1984](https://github.com/Progi1984)


### Customer reassurance block module
* [#388](https://github.com/PrestaShop/blockreassurance/pull/388): Fixes some bugs in Edit Page, by [@Progi1984](https://github.com/Progi1984)
* [#387](https://github.com/PrestaShop/blockreassurance/pull/387): Bump webpack from 5.71.0 to 5.72.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#386](https://github.com/PrestaShop/blockreassurance/pull/386): Release 5.1.1, by [@Progi1984](https://github.com/Progi1984)
* [#385](https://github.com/PrestaShop/blockreassurance/pull/385): Bump version to 5.1.1, by [@Progi1984](https://github.com/Progi1984)
* [#384](https://github.com/PrestaShop/blockreassurance/pull/384): Fixed path for custom images, by [@Progi1984](https://github.com/Progi1984)
* [#383](https://github.com/PrestaShop/blockreassurance/pull/383): Bump @babel/core from 7.17.8 to 7.17.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#382](https://github.com/PrestaShop/blockreassurance/pull/382): Bump eslint-plugin-import from 2.25.4 to 2.26.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#381](https://github.com/PrestaShop/blockreassurance/pull/381): Bump webpack from 5.70.0 to 5.71.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#359](https://github.com/PrestaShop/blockreassurance/pull/359): Removed unuseful dependencies, by [@Progi1984](https://github.com/Progi1984)


### Faceted search module
* [#643](https://github.com/PrestaShop/ps_facetedsearch/pull/643): Bump webpack from 5.71.0 to 5.72.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#642](https://github.com/PrestaShop/ps_facetedsearch/pull/642): Bump @babel/core from 7.17.8 to 7.17.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#641](https://github.com/PrestaShop/ps_facetedsearch/pull/641): Bump eslint-plugin-import from 2.25.4 to 2.26.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#640](https://github.com/PrestaShop/ps_facetedsearch/pull/640): Bump ansi-regex from 3.0.0 to 3.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#639](https://github.com/PrestaShop/ps_facetedsearch/pull/639): Bump webpack from 5.70.0 to 5.71.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation sources
* [#1358](https://github.com/PrestaShop/docs/pull/1358): Backport 1313, by [@matks](https://github.com/matks)
* [#1357](https://github.com/PrestaShop/docs/pull/1357): Backport 1308, by [@matks](https://github.com/matks)
* [#1356](https://github.com/PrestaShop/docs/pull/1356): Backport of 1303, by [@matks](https://github.com/matks)
* [#1355](https://github.com/PrestaShop/docs/pull/1355): Backport 1293, by [@matks](https://github.com/matks)
* [#1354](https://github.com/PrestaShop/docs/pull/1354): Backport 1179, by [@matks](https://github.com/matks)
* [#1353](https://github.com/PrestaShop/docs/pull/1353): Backport 1240, by [@matks](https://github.com/matks)
* [#1352](https://github.com/PrestaShop/docs/pull/1352): Backport 1180, by [@matks](https://github.com/matks)
* [#1351](https://github.com/PrestaShop/docs/pull/1351): Backport 1183, by [@matks](https://github.com/matks)
* [#1350](https://github.com/PrestaShop/docs/pull/1350): Backport of PR 1123, by [@matks](https://github.com/matks)
* [#1349](https://github.com/PrestaShop/docs/pull/1349): Minor typo. Thank you [@dpatou](https://github.com/dpatou)
* [#1348](https://github.com/PrestaShop/docs/pull/1348): Fix module mail templates example. Thank you [@PululuK](https://github.com/PululuK)
* [#1347](https://github.com/PrestaShop/docs/pull/1347): Backport PR 1119, by [@matks](https://github.com/matks)
* [#1346](https://github.com/PrestaShop/docs/pull/1346): Unindent code block. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#1345](https://github.com/PrestaShop/docs/pull/1345): Example on how to handle translation of Javascript strings (backport. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#1344](https://github.com/PrestaShop/docs/pull/1344): Give an example on how to handle translation of Javascript strings.. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#1343](https://github.com/PrestaShop/docs/pull/1343): Add related PR instructions. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#1341](https://github.com/PrestaShop/docs/pull/1341): Fix MyGridDefinitionFactory code example. Thank you [@adricorse](https://github.com/adricorse)
* [#1328](https://github.com/PrestaShop/docs/pull/1328): Remove 1.7 core change pages, add link to 1.7 doc, by [@matks](https://github.com/matks)


### Distribution API
* [#9](https://github.com/PrestaShop/distribution-api/pull/9): Add more info about modules, by [@atomiix](https://github.com/atomiix)
* [#8](https://github.com/PrestaShop/distribution-api/pull/8): Fix workflows, by [@atomiix](https://github.com/atomiix)
* [#7](https://github.com/PrestaShop/distribution-api/pull/7): Make distribution API upload assets itself, by [@atomiix](https://github.com/atomiix)


### The PrestaShop open source project
* [#84](https://github.com/PrestaShop/open-source/pull/84): Introduce scoped maintainers, by [@eternoendless](https://github.com/eternoendless)


### OnBoarding module
* [#141](https://github.com/PrestaShop/welcome/pull/141): Bump eslint-plugin-import from 2.25.4 to 2.26.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#473](https://github.com/PrestaShop/autoupgrade/pull/473): Add pages to enable maintenance mode before upgrade, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#446](https://github.com/PrestaShop/autoupgrade/pull/446): Add category additional description column during upgrade. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Google Analytics module
* [#116](https://github.com/PrestaShop/ps_googleanalytics/pull/116): Moved some code from footer to head tag, by [@Progi1984](https://github.com/Progi1984)


### Core Weekly Generator tool
* [#120](https://github.com/PrestaShop/core-weekly-generator/pull/120): Update liste of repositories, by [@matks](https://github.com/matks)


### Traces
* [#25](https://github.com/PrestaShop/traces/pull/25): Bump guzzlehttp/psr7 from 1.6.1 to 1.8.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### CsaGuzzle Bundle (fork)
* [#25](https://github.com/PrestaShop/CsaGuzzleBundle/pull/25): Bump prismjs from 1.16.0 to 1.27.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Social Follow module
* [#34](https://github.com/PrestaShop/ps_socialfollow/pull/34): Add discord link. Thank you [@marsaldev](https://github.com/marsaldev)


### Wishlist block module
* [#146](https://github.com/PrestaShop/blockwishlist/pull/146): Manage the state of the product depending on quantity in cart, by [@NeOMakinG](https://github.com/NeOMakinG)


### Sales and orders statistics module
* [#25](https://github.com/PrestaShop/statssales/pull/25): Fixed calculation in SQL query if there are no refunds, by [@Progi1984](https://github.com/Progi1984)
* [#22](https://github.com/PrestaShop/statssales/pull/22): Release 2.1.0, by [@Progi1984](https://github.com/Progi1984)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@Progi1984](https://github.com/Progi1984), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@jolelievre](https://github.com/jolelievre), [@PierreRambaud](https://github.com/PierreRambaud), [@matks](https://github.com/matks), [@NeOMakinG](https://github.com/NeOMakinG), [@lmeyer1](https://github.com/lmeyer1), [@atomiix](https://github.com/atomiix), [@marsaldev](https://github.com/marsaldev), [@eternoendless](https://github.com/eternoendless), [@micka-fdz](https://github.com/micka-fdz), [@dpatou](https://github.com/dpatou), [@boubkerbribri](https://github.com/boubkerbribri), [@PululuK](https://github.com/PululuK), [@Hlavtox](https://github.com/Hlavtox), [@NicolasCador](https://github.com/NicolasCador), [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul), [@adricorse](https://github.com/adricorse), [@jf-viguier](https://github.com/jf-viguier), [@MeKeyCool](https://github.com/MeKeyCool), [@tlgsoledis](https://github.com/tlgsoledis), [@Amoifr](https://github.com/Amoifr), [@davidglezz](https://github.com/davidglezz), [@okom3pom](https://github.com/okom3pom), [@rickygzz](https://github.com/rickygzz)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

