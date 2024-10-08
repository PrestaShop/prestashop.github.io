---
layout: post
aliases: ["/news/coreweekly-52-2022"]
title:  "PrestaShop Core Weekly - Week 52 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-01-03
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 27th of December 2021 to Sunday 1st of January 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Wish you get all the success this year. Hope that joy and success follow you in every sector of life. Happy New Year 2022!


## Releases

* [Statsforecast](https://github.com/PrestaShop/statsforecast) module: [v2.0.3](https://github.com/PrestaShop/statsforecast/releases/tag/v2.0.3)
* [Statsnewsletter](https://github.com/PrestaShop/statsnewsletter) module: [v2.0.2](https://github.com/PrestaShop/statsnewsletter/releases/tag/v2.0.2)
* [Ps_wirepayment](https://github.com/PrestaShop/ps_wirepayment) module: [v2.1.1](https://github.com/PrestaShop/ps_wirepayment/releases/tag/v2.1.1)
* [Ps_dataprivacy](https://github.com/PrestaShop/ps_dataprivacy) module: [v2.1.0](https://github.com/PrestaShop/ps_dataprivacy/releases/tag/v2.1.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [40 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-12-27..2022-01-01) have been created in the project repositories;
- [48 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-12-27..2022-01-01), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-12-27..2022-01-01) on the core;
- [89 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-12-27..2022-01-01) in the project repositories;
- [76 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-12-27..2022-01-01), including [60 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-12-27..2022-01-01).


## Code changes in the 'develop' branch


### Core
* [#27126](https://github.com/PrestaShop/PrestaShop/pull/27126): Bump modules, by [@Progi1984](https://github.com/Progi1984)
* [#27116](https://github.com/PrestaShop/PrestaShop/pull/27116): Replace a `die()` by PrestaShopException. Thank you [@clotairer](https://github.com/clotairer)
* [#27113](https://github.com/PrestaShop/PrestaShop/pull/27113): Remove Tools::addonsRequest('customer_themes') calls (Part 2), by [@Progi1984](https://github.com/Progi1984)
* [#27107](https://github.com/PrestaShop/PrestaShop/pull/27107): PHPStan (Level 2) on tests/, by [@Progi1984](https://github.com/Progi1984)
* [#27070](https://github.com/PrestaShop/PrestaShop/pull/27070): Improve license headers, by [@matks](https://github.com/matks)
* [#27044](https://github.com/PrestaShop/PrestaShop/pull/27044): Add new Twig namespace PrestaShopCore, by [@atomiix](https://github.com/atomiix)
* [#26946](https://github.com/PrestaShop/PrestaShop/pull/26946): Use github actions for nightly tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#26267](https://github.com/PrestaShop/PrestaShop/pull/26267): Trigger a deprecated when using a hook alias and correctly handle errors, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#27108](https://github.com/PrestaShop/PrestaShop/pull/27108): Add the required length to create a webservice key into form. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#27106](https://github.com/PrestaShop/PrestaShop/pull/27106): Update webservice doc URL to reach 8 version. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26609](https://github.com/PrestaShop/PrestaShop/pull/26609): Fix combination supplier changes not taking effect. Thank you [@zuk3975](https://github.com/zuk3975)


### Front office
* [#27079](https://github.com/PrestaShop/PrestaShop/pull/27079): Fix the checkout button for the longer text, by [@kpodemski](https://github.com/kpodemski)
* [#26954](https://github.com/PrestaShop/PrestaShop/pull/26954): Customer is able to see order detail page via link even order share is disabled in multishop. Thank you [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul)
* [#26791](https://github.com/PrestaShop/PrestaShop/pull/26791): Add redirect with notifications. Thank you [@Lionel-dev](https://github.com/Lionel-dev)


### Tests
* [#27152](https://github.com/PrestaShop/PrestaShop/pull/27152): Fix Nightly - Add test to delete cart rule from create simple order from BO. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27151](https://github.com/PrestaShop/PrestaShop/pull/27151): Increase navigation timeout on multistore tests and fix ecotax test, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#27138](https://github.com/PrestaShop/PrestaShop/pull/27138): Support disabling DEV_MODE on Docker, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#27125](https://github.com/PrestaShop/PrestaShop/pull/27125): PHPStan (Level 3) on tests/, by [@Progi1984](https://github.com/Progi1984)
* [#27105](https://github.com/PrestaShop/PrestaShop/pull/27105): Fix nightly workflow by adding branch to push job, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#27100](https://github.com/PrestaShop/PrestaShop/pull/27100): Functional test - Fix 'Add discount' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Back office
* [#27114](https://github.com/PrestaShop/PrestaShop/pull/27114): Fix color picker bug when multiple colorpickers are present, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#26706](https://github.com/PrestaShop/PrestaShop/pull/26706): Fix menu and searchbar on tablet on classic, by [@NeOMakinG](https://github.com/NeOMakinG)


## Code changes in modules, themes & tools


### Customer reassurance block module
* [#331](https://github.com/PrestaShop/blockreassurance/pull/331): Bump @babel/core from 7.16.5 to 7.16.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#330](https://github.com/PrestaShop/blockreassurance/pull/330): Bump node-sass from 7.0.0 to 7.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#581](https://github.com/PrestaShop/ps_facetedsearch/pull/581): Bump @babel/core from 7.16.5 to 7.16.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#580](https://github.com/PrestaShop/ps_facetedsearch/pull/580): Bump @babel/register from 7.16.5 to 7.16.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#579](https://github.com/PrestaShop/ps_facetedsearch/pull/579): Bump @babel/cli from 7.16.0 to 7.16.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#578](https://github.com/PrestaShop/ps_facetedsearch/pull/578): Bump @babel/node from 7.16.5 to 7.16.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#577](https://github.com/PrestaShop/ps_facetedsearch/pull/577): Bump @babel/preset-env from 7.16.5 to 7.16.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#576](https://github.com/PrestaShop/ps_facetedsearch/pull/576): Bump node-sass from 7.0.0 to 7.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation sources
* [#1262](https://github.com/PrestaShop/docs/pull/1262): Proper way to include Grid components in js context, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#1260](https://github.com/PrestaShop/docs/pull/1260): `updateProduct` & `updatedProduct` events should have different descriptions. Thank you [@dali-rajab](https://github.com/dali-rajab)
* [#1256](https://github.com/PrestaShop/docs/pull/1256): Update twig templates override in modules, by [@atomiix](https://github.com/atomiix)
* [#1252](https://github.com/PrestaShop/docs/pull/1252): Document configuration console command. Thank you [@tswfi](https://github.com/tswfi)


### Product Comments module
* [#127](https://github.com/PrestaShop/productcomments/pull/127): Missing changes for displayHeader hook, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#126](https://github.com/PrestaShop/productcomments/pull/126): Switch from deprecated 'header' hook to 'displayHeader'. Thank you [@tswfi](https://github.com/tswfi)


### Catalog evaluation statistics module
* [#19](https://github.com/PrestaShop/statscheckup/pull/19): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.2. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Carrier distribution statistics module
* [#10](https://github.com/PrestaShop/statscarrier/pull/10): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.1. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Shop search statistics module
* [#13](https://github.com/PrestaShop/statssearch/pull/13): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.2. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Registered customer information statistics module
* [#16](https://github.com/PrestaShop/statspersonalinfos/pull/16): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.4, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#14](https://github.com/PrestaShop/statspersonalinfos/pull/14): Revert "Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.4", by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13](https://github.com/PrestaShop/statspersonalinfos/pull/13): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.4. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Pages not found module
* [#18](https://github.com/PrestaShop/pagesnotfound/pull/18): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.2. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Best vouchers statistics module
* [#12](https://github.com/PrestaShop/statsbestvouchers/pull/12): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.1. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Best-selling products statistics module
* [#12](https://github.com/PrestaShop/statsbestproducts/pull/12): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.1. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Best manufacturers statistics module
* [#11](https://github.com/PrestaShop/statsbestmanufacturers/pull/11): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.1. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Best categories statistics module
* [#13](https://github.com/PrestaShop/statsbestcategories/pull/13): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.1. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Newsletter statistics module
* [#11](https://github.com/PrestaShop/statsnewsletter/pull/11): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.3. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Product details statistics module
* [#27](https://github.com/PrestaShop/statsproduct/pull/27): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.1.1. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Registrations statistics modules
* [#11](https://github.com/PrestaShop/statsregistrations/pull/11): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.1. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Sales and orders statistics module
* [#26](https://github.com/PrestaShop/statssales/pull/26): Do not use hook AdminStatsModules alias, use displayAdminStatsModules. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### User documentation landing page
* [#172](https://github.com/PrestaShop/user-documentation-landing/pull/172): fix(deps): bump actions/setup-node from 2.5.0 to 2.5.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Stats Dashboard module
* [#21](https://github.com/PrestaShop/statsforecast/pull/21): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.4. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Wire payment module
* [#66](https://github.com/PrestaShop/ps_wirepayment/pull/66): Release 2.1.1, by [@Progi1984](https://github.com/Progi1984)
* [#65](https://github.com/PrestaShop/ps_wirepayment/pull/65): Do not use hook `paymentReturn` alias, use `displayPaymentReturn`, by [@Progi1984](https://github.com/Progi1984)


### Wishlist block module
* [#142](https://github.com/PrestaShop/blockwishlist/pull/142): Bump to 2.1.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### Customer data privacy block module
* [#35](https://github.com/PrestaShop/ps_dataprivacy/pull/35): Release 2.1.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### presthubot
* [#41](https://github.com/PrestaShop/presthubot/pull/41): `slack:notifier` : Exclude prestashop-specs from PR sent to devs, by [@Progi1984](https://github.com/Progi1984)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@boubkerbribri](https://github.com/boubkerbribri), [@PierreRambaud](https://github.com/PierreRambaud), [@tswfi](https://github.com/tswfi), [@PrestaEdit](https://github.com/PrestaEdit), [@Progi1984](https://github.com/Progi1984), [@clotairer](https://github.com/clotairer), [@atomiix](https://github.com/atomiix), [@dali-rajab](https://github.com/dali-rajab), [@eternoendless](https://github.com/eternoendless), [@kpodemski](https://github.com/kpodemski), [@matks](https://github.com/matks), [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul), [@Lionel-dev](https://github.com/Lionel-dev), [@NeOMakinG](https://github.com/NeOMakinG), [@zuk3975](https://github.com/zuk3975)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

