---
layout: post
aliases: ["/news/coreweekly-17-2022"]
title:  "PrestaShop Core Weekly - Week 17 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-05-02
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 25th of April to Sunday 1st of May 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The entire team is working hard on PrestaShop version 8, with a [freeze date](https://en.wikipedia.org/wiki/Freeze_(software_engineering)) planned for second half of May - this is why we decided to cancel our May Public Demo to focus on the release, and then present the community with amazing demos in June.


## Releases

* [Blockwishlist](https://github.com/PrestaShop/blockwishlist) module: [v2.1.0](https://github.com/PrestaShop/blockwishlist/releases/tag/v2.1.0)
* [Ps_imageslider](https://github.com/PrestaShop/ps_imageslider) module: [v3.1.1](https://github.com/PrestaShop/ps_imageslider/releases/tag/v3.1.1)
* [Ps_distributionapiclient](https://github.com/PrestaShop/ps_distributionapiclient): [v1.0.0](https://github.com/PrestaShop/ps_distributionapiclient/releases/tag/v1.0.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [48 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-04-25..2022-05-01) have been created in the project repositories;
- [37 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-04-25..2022-05-01), including [14 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-04-25..2022-05-01) on the core;
- [65 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-04-25..2022-05-01) in the project repositories;
- [54 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-04-25..2022-05-01), including [49 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-04-25..2022-05-01).


## Code changes in the 'develop' branch


### Core
* [#28348](https://github.com/PrestaShop/PrestaShop/pull/28348): Minor code refato `ModuleManager`. Thank you [@PululuK](https://github.com/PululuK)
* [#28339](https://github.com/PrestaShop/PrestaShop/pull/28339): Bump version to 2.1.0 for `blockwishlist`, by [@Progi1984](https://github.com/Progi1984)
* [#28274](https://github.com/PrestaShop/PrestaShop/pull/28274): Update guzzle psr7 to 2.2.1, by [@matks](https://github.com/matks)
* [#28273](https://github.com/PrestaShop/PrestaShop/pull/28273): Update Symfony to 4.4.40, by [@matks](https://github.com/matks)
* [#28197](https://github.com/PrestaShop/PrestaShop/pull/28197): Remove deprecated method inside SearchProvider. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28175](https://github.com/PrestaShop/PrestaShop/pull/28175): Add module name parameter to displayModuleConfigureExtraButtons hook, by [@sowbiba](https://github.com/sowbiba)


### Back office
* [#28319](https://github.com/PrestaShop/PrestaShop/pull/28319): BO: Fix overlapping checkoxes on configure buttons. Thank you [@hibatallahAouadni](https://github.com/hibatallahAouadni)
* [#28314](https://github.com/PrestaShop/PrestaShop/pull/28314): Fix the stock supplier filter on the Stock page, by [@kpodemski](https://github.com/kpodemski)
* [#28282](https://github.com/PrestaShop/PrestaShop/pull/28282): Add images selector to bulk combination form. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28235](https://github.com/PrestaShop/PrestaShop/pull/28235): Fix back button style on login page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#28183](https://github.com/PrestaShop/PrestaShop/pull/28183): Add default group to customer listing. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#28161](https://github.com/PrestaShop/PrestaShop/pull/28161): Add shop name in customer search result.. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#28075](https://github.com/PrestaShop/PrestaShop/pull/28075): Migrate the Customers > Title pages (Only the list), by [@Progi1984](https://github.com/Progi1984)
* [#28019](https://github.com/PrestaShop/PrestaShop/pull/28019): Fixed display of Vouchers id in Customer View, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#27397](https://github.com/PrestaShop/PrestaShop/pull/27397): Add the minimum required to the error message, when trying to apply a cart rule with a minimum. Thank you [@Prestaplugins](https://github.com/Prestaplugins)


### Installer
* [#28258](https://github.com/PrestaShop/PrestaShop/pull/28258): Install theme before modules, by [@atomiix](https://github.com/atomiix)


### Tests
* [#28381](https://github.com/PrestaShop/PrestaShop/pull/28381): Fix error in title controller test, and fix a warning in module tests, by [@jolelievre](https://github.com/jolelievre)
* [#27055](https://github.com/PrestaShop/PrestaShop/pull/27055): Split integration workflows into two, get rid of processIsolation, by [@jolelievre](https://github.com/jolelievre)


## Code changes in the '1.7.8.x' branch


### Core
* [#28347](https://github.com/PrestaShop/PrestaShop/pull/28347): Bump modules (`blockwishlist` to 2.1.0, `ps_facetedsearch` to 3.8.0, `ps_imageslider` to 3.1.1), by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#28301](https://github.com/PrestaShop/PrestaShop/pull/28301): Discount is not visible on customer group form. Thank you [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul)


### Installer
* [#26951](https://github.com/PrestaShop/PrestaShop/pull/26951): Fix Dockerfile for local image generation in branch 1.7.8.x under Linux. Thank you [@mpaolino](https://github.com/mpaolino)


### Tests
* [#28346](https://github.com/PrestaShop/PrestaShop/pull/28346): Fix nightly 27-04-2022 - Fix random error on maintenance test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Hummingbird theme
* [#247](https://github.com/PrestaShop/hummingbird/pull/247): Related fix for PrestaShop/ps_imageslider#74. Thank you [@marsaldev](https://github.com/marsaldev)
* [#245](https://github.com/PrestaShop/hummingbird/pull/245): Fix image slider control buttons. Thank you [@mparvazi](https://github.com/mparvazi)
* [#244](https://github.com/PrestaShop/hummingbird/pull/244): Fix search-bar icon for RTL. Thank you [@mparvazi](https://github.com/mparvazi)
* [#240](https://github.com/PrestaShop/hummingbird/pull/240): Fix customer form's submit button text. Thank you [@mparvazi](https://github.com/mparvazi)
* [#239](https://github.com/PrestaShop/hummingbird/pull/239): Change primary color to a more neutral color, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#237](https://github.com/PrestaShop/hummingbird/pull/237): Fix icon mirroring in pagination for RTL. Thank you [@mparvazi](https://github.com/mparvazi)
* [#236](https://github.com/PrestaShop/hummingbird/pull/236): Redesign dropdown and fix bugs for RTL. Thank you [@mparvazi](https://github.com/mparvazi)
* [#234](https://github.com/PrestaShop/hummingbird/pull/234): Fix icon mirroing for RTL in mobile menu. Thank you [@mparvazi](https://github.com/mparvazi)


### Contextual Help API
* [#7](https://github.com/PrestaShop/contextual-help-api/pull/7): Adding preprod environment. Thank you [@djodjo3](https://github.com/djodjo3)


### Changes in developer documentation sources
* [#1367](https://github.com/PrestaShop/docs/pull/1367): Fix link to composer page. Thank you [@carcam](https://github.com/carcam)


### stylelint configuration
* [#32](https://github.com/PrestaShop/stylelint-config/pull/32): Bump stylelint from 14.7.1 to 14.8.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Email Alerts module
* [#115](https://github.com/PrestaShop/ps_emailalerts/pull/115): Prevent compatibility issues with the future version of psgdpr, by [@kpodemski](https://github.com/kpodemski)
* [#112](https://github.com/PrestaShop/ps_emailalerts/pull/112): Display of list of notifications in my account. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#111](https://github.com/PrestaShop/ps_emailalerts/pull/111): Remove class unused in classic theme, but breaking comp with BS4. Thank you [@lmeyer1](https://github.com/lmeyer1)


### GDPR module
* [#175](https://github.com/PrestaShop/psgdpr/pull/175): Remove id of the div to avoid duplications, by [@kpodemski](https://github.com/kpodemski)


### Classic theme
* [#26](https://github.com/PrestaShop/classic-theme/pull/26): Fix delivery information, by [@kpodemski](https://github.com/kpodemski)


### Customer reassurance block module
* [#396](https://github.com/PrestaShop/blockreassurance/pull/396): Bump eslint from 8.13.0 to 8.14.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#649](https://github.com/PrestaShop/ps_facetedsearch/pull/649): Bump eslint from 8.13.0 to 8.14.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#480](https://github.com/PrestaShop/autoupgrade/pull/480): Bump to 4.15.0, by [@matks](https://github.com/matks)
* [#462](https://github.com/PrestaShop/autoupgrade/pull/462): Add hooks displayAdminThemesListAfter and displayModuleConfigureExtraButtons for 8.0.0, by [@sowbiba](https://github.com/sowbiba)


### Image slider module
* [#73](https://github.com/PrestaShop/ps_imageslider/pull/73): Fix configuration form (Responsive & Default values), by [@Progi1984](https://github.com/Progi1984)
* [#72](https://github.com/PrestaShop/ps_imageslider/pull/72): Release 3.1.1, by [@Progi1984](https://github.com/Progi1984)


### Currency selector
* [#28](https://github.com/PrestaShop/ps_currencyselector/pull/28): Replace deprecated ObjectPresenter namespace, by [@kpodemski](https://github.com/kpodemski)


### Links list module
* [#148](https://github.com/PrestaShop/ps_linklist/pull/148): Improved markup for the LinkList form, by [@Progi1984](https://github.com/Progi1984)
* [#147](https://github.com/PrestaShop/ps_linklist/pull/147): Fixed calls to ModuleRepository, by [@Progi1984](https://github.com/Progi1984)


### Search Bar module
* [#47](https://github.com/PrestaShop/ps_searchbar/pull/47): Remove invasive styles. Thank you [@SharakPL](https://github.com/SharakPL)


### Wishlist block module
* [#143](https://github.com/PrestaShop/blockwishlist/pull/143): Release 2.1.0, by [@PierreRambaud](https://github.com/PierreRambaud)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@jolelievre](https://github.com/jolelievre), [@marsaldev](https://github.com/marsaldev), [@djodjo3](https://github.com/djodjo3), [@mparvazi](https://github.com/mparvazi), [@NeOMakinG](https://github.com/NeOMakinG), [@PululuK](https://github.com/PululuK), [@Progi1984](https://github.com/Progi1984), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@carcam](https://github.com/carcam), [@dependabot[bot]](https://github.com/apps/dependabot), [@kpodemski](https://github.com/kpodemski), [@hibatallahAouadni](https://github.com/hibatallahAouadni), [@matks](https://github.com/matks), [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul), [@zuk3975](https://github.com/zuk3975), [@atomiix](https://github.com/atomiix), [@lmeyer1](https://github.com/lmeyer1), [@PrestaEdit](https://github.com/PrestaEdit), [@Hlavtox](https://github.com/Hlavtox), [@sowbiba](https://github.com/sowbiba), [@SharakPL](https://github.com/SharakPL), [@Prestaplugins](https://github.com/Prestaplugins), [@PierreRambaud](https://github.com/PierreRambaud), [@mpaolino](https://github.com/mpaolino)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

