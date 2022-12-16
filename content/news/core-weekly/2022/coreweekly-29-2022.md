---
layout: post
aliases: ["/news/coreweekly-29-2022"]
title:  "PrestaShop Core Weekly - Week 29 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-07-26
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 18th to Sunday 24th of July 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The maintainers team was very busy these last few days because of the [major security vulnerability](/news/major-security-vulnerability-on-prestashop-websites/) discovered last week. If you haven't read this article yet, please do it now.

Following the discovery of the vulnerability, [PrestaShop version 1.7.8.7 was delivered](/news/prestashop-1-7-8-7-maintenance-release/). It contains a fix that strengthens MySQL Smarty cache storage against code injection attacks.

While the security work on 1.7.8.7 happened, the 8.0.0 Beta release got much closer to delivery, thanks to everyone from the PrestaShop community! Only a few remaining items are left before we can publish and host a [Beta testing period](https://devdocs.prestashop.com/1.7/project/release/minor-release-lifecycle/#public-beta-period).


## Releases

* [PrestaShop](https://github.com/PrestaShop/PrestaShop): [1.7.8.7](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.7)
* [Autoupgrade](https://github.com/PrestaShop/autoupgrade) module: [v4.14.2](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.14.2)
* [Ps_banner](https://github.com/PrestaShop/ps_banner) module: [v2.1.2](https://github.com/PrestaShop/ps_banner/releases/tag/v2.1.2)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [29 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-07-18..2022-07-24) have been created in the project repositories;
- [18 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-07-18..2022-07-24), including [7 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-07-18..2022-07-24) on the core;
- [74 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-07-18..2022-07-24) in the project repositories;
- [60 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-07-18..2022-07-24), including [50 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-07-18..2022-07-24).
        


## Code changes in the 'develop' branch


### Core
* [#29092](https://github.com/PrestaShop/PrestaShop/pull/29092): Remove commented code. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28865](https://github.com/PrestaShop/PrestaShop/pull/28865): PrestashopCollection needs a shop restriction. Thank you [@lmeyer1](https://github.com/lmeyer1)


### Back office
* [#28660](https://github.com/PrestaShop/PrestaShop/pull/28660): Fix exception during profil edition if invalid field given with avatar. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#27608](https://github.com/PrestaShop/PrestaShop/pull/27608): Make Shop Parameters > Customer Settings > Customers form multistore compatible. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#27304](https://github.com/PrestaShop/PrestaShop/pull/27304): Add packed product type. Thank you [@Amoifr](https://github.com/Amoifr)


### Front office
* [#28947](https://github.com/PrestaShop/PrestaShop/pull/28947): Fix missing translations on meta pages. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#28814](https://github.com/PrestaShop/PrestaShop/pull/28814): Call initContent of the parent at the beginning. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28784](https://github.com/PrestaShop/PrestaShop/pull/28784): Allow to translate placeholder. Thank you [@okom3pom](https://github.com/okom3pom)


## Code changes in the '8.0.x' branch


### Core
* [#29064](https://github.com/PrestaShop/PrestaShop/pull/29064): Move email alerts module default translations, by [@atomiix](https://github.com/atomiix)


### Back office
* [#29069](https://github.com/PrestaShop/PrestaShop/pull/29069): Fix install theme without hooks. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#29067](https://github.com/PrestaShop/PrestaShop/pull/29067): Fix permissions for read-only user. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#29025](https://github.com/PrestaShop/PrestaShop/pull/29025): Fix module link in adminsearch. Thank you [@okom3pom](https://github.com/okom3pom)
* [#29022](https://github.com/PrestaShop/PrestaShop/pull/29022): Display an error while the file format does not match the allowed formats. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#29020](https://github.com/PrestaShop/PrestaShop/pull/29020): Use LegacyModule instance instead of ModuleAdaptater. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#29019](https://github.com/PrestaShop/PrestaShop/pull/29019): BO - Brands & Suppliers - the red alert "Image format not recognized" is missing the webp. Thank you [@okom3pom](https://github.com/okom3pom)


## Code changes in the '1.7.8.x' branch


### Core
* [#28780](https://github.com/PrestaShop/PrestaShop/pull/28780): Add cache to AddressFactory::addressExists(), by [@eternoendless](https://github.com/eternoendless)


### Front office
* [#29055](https://github.com/PrestaShop/PrestaShop/pull/29055): Fix anchor links in product list, by [@jolelievre](https://github.com/jolelievre)


## Code changes in modules, themes & tools


### PrestaShop contributors website
* [#84](https://github.com/PrestaShop/TopContributors/pull/84): Bump terser from 4.8.0 to 4.8.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Nightly board
* [#87](https://github.com/PrestaShop/nightly-board/pull/87): Bump terser from 4.6.3 to 4.8.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Prestashop UI Kit
* [#191](https://github.com/PrestaShop/prestashop-ui-kit/pull/191): Bump terser from 4.8.0 to 4.8.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Links list module
* [#152](https://github.com/PrestaShop/ps_linklist/pull/152): Link list IS compatible with multi-store, by [@kpodemski](https://github.com/kpodemski)
* [#151](https://github.com/PrestaShop/ps_linklist/pull/151): Bump terser from 4.8.0 to 4.8.1 in /views. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Email Alerts module
* [#116](https://github.com/PrestaShop/ps_emailalerts/pull/116): Fix typo in error message. Thank you [@abramofranchetti](https://github.com/abramofranchetti)


### Classic theme
* [#46](https://github.com/PrestaShop/classic-theme/pull/46): Fix anchor links in product list, by [@jolelievre](https://github.com/jolelievre)


### Changes in developer documentation sources
* [#1423](https://github.com/PrestaShop/docs/pull/1423): fix: update XAMPP broken link 1.7.x. Thank you [@ga-devfront](https://github.com/ga-devfront)
* [#1422](https://github.com/PrestaShop/docs/pull/1422): fix: update XAMPP broken link. Thank you [@ga-devfront](https://github.com/ga-devfront)
* [#1420](https://github.com/PrestaShop/docs/pull/1420): Change .js by .ts for links. Thank you [@okom3pom](https://github.com/okom3pom)
* [#1419](https://github.com/PrestaShop/docs/pull/1419): Fix 404 link. Thank you [@okom3pom](https://github.com/okom3pom)
* [#1418](https://github.com/PrestaShop/docs/pull/1418): Fix 404 link and typo. Thank you [@okom3pom](https://github.com/okom3pom)
* [#1417](https://github.com/PrestaShop/docs/pull/1417): Fix new hooks link. Thank you [@okom3pom](https://github.com/okom3pom)
* [#1416](https://github.com/PrestaShop/docs/pull/1416): Backport of  PR1409. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1415](https://github.com/PrestaShop/docs/pull/1415): Add blockwishlist to native module. Thank you [@okom3pom](https://github.com/okom3pom)
* [#1414](https://github.com/PrestaShop/docs/pull/1414): Add Blockwishlist and remove Welcome. Thank you [@okom3pom](https://github.com/okom3pom)
* [#1413](https://github.com/PrestaShop/docs/pull/1413): Update jQuery version. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1412](https://github.com/PrestaShop/docs/pull/1412): Update jQuery version since 1.7.7.8. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1409](https://github.com/PrestaShop/docs/pull/1409): Wrap bash command in bash block. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Faceted search module
* [#688](https://github.com/PrestaShop/ps_facetedsearch/pull/688): Bump terser from 5.9.0 to 5.14.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#687](https://github.com/PrestaShop/ps_facetedsearch/pull/687): Bump @babel/cli from 7.18.6 to 7.18.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#686](https://github.com/PrestaShop/ps_facetedsearch/pull/686): Bump @babel/eslint-parser from 7.18.2 to 7.18.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#683](https://github.com/PrestaShop/ps_facetedsearch/pull/683): Bump @babel/node from 7.18.6 to 7.18.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#682](https://github.com/PrestaShop/ps_facetedsearch/pull/682): Bump @babel/core from 7.18.6 to 7.18.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#681](https://github.com/PrestaShop/ps_facetedsearch/pull/681): Bump moment from 2.29.2 to 2.29.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#680](https://github.com/PrestaShop/ps_facetedsearch/pull/680): Bump eslint from 8.19.0 to 8.20.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer reassurance block module
* [#425](https://github.com/PrestaShop/blockreassurance/pull/425): Bump eslint from 8.19.0 to 8.20.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#424](https://github.com/PrestaShop/blockreassurance/pull/424): Bump vue from 2.7.4 to 2.7.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### The PrestaShop open source project
* [#111](https://github.com/PrestaShop/open-source/pull/111): Update slack channels list, by [@matks](https://github.com/matks)


### Hummingbird theme
* [#352](https://github.com/PrestaShop/hummingbird/pull/352): Improve error pages design. Thank you [@mparvazi](https://github.com/mparvazi)


### Wishlist block module
* [#181](https://github.com/PrestaShop/blockwishlist/pull/181): Fix heart empty when updating product quantity, by [@atomiix](https://github.com/atomiix)


### Banner module
* [#48](https://github.com/PrestaShop/ps_banner/pull/48): Release 2.1.2, by [@NeOMakinG](https://github.com/NeOMakinG)


### Auto Upgrade module
* [#466](https://github.com/PrestaShop/autoupgrade/pull/466): Remove Tab for Referrers Page, by [@Progi1984](https://github.com/Progi1984)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@kpodemski](https://github.com/kpodemski), [@abramofranchetti](https://github.com/abramofranchetti), [@jolelievre](https://github.com/jolelievre), [@ga-devfront](https://github.com/ga-devfront), [@okom3pom](https://github.com/okom3pom), [@leemyongpakvn](https://github.com/leemyongpakvn), [@PrestaEdit](https://github.com/PrestaEdit), [@matks](https://github.com/matks), [@mparvazi](https://github.com/mparvazi), [@FabienPapet](https://github.com/FabienPapet), [@atomiix](https://github.com/atomiix), [@NeOMakinG](https://github.com/NeOMakinG), [@micka-fdz](https://github.com/micka-fdz), [@lmeyer1](https://github.com/lmeyer1), [@eternoendless](https://github.com/eternoendless), [@MeKeyCool](https://github.com/MeKeyCool), [@Progi1984](https://github.com/Progi1984), [@Amoifr](https://github.com/Amoifr)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

