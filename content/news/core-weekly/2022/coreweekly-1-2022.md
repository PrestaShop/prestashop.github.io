---
layout: post
aliases: ["/news/coreweekly-1-2022"]
slug: "coreweekly-1-2022"
title:  "PrestaShop Core Weekly - Week 1 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-01-11
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 3rd to Sunday 9th of January 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## Releases

* [Pagesnotfound](https://github.com/PrestaShop/pagesnotfound) module: [v2.0.2](https://github.com/PrestaShop/pagesnotfound/releases/tag/v2.0.2)
* [Statsbestcategories](https://github.com/PrestaShop/statsbestcategories) module: [v2.0.1](https://github.com/PrestaShop/statsbestcategories/releases/tag/v2.0.1)
* [Statsbestproducts](https://github.com/PrestaShop/statsbestproducts) module: [v2.0.1](https://github.com/PrestaShop/statsbestproducts/releases/tag/v2.0.1)
* [Statscarrier](https://github.com/PrestaShop/statscarrier) module: [v2.0.1](https://github.com/PrestaShop/statscarrier/releases/tag/v2.0.1)
* [Statscheckup](https://github.com/PrestaShop/statscheckup) module: [v2.0.2](https://github.com/PrestaShop/statscheckup/releases/tag/v2.0.2)
* [Statspersonalinfos](https://github.com/PrestaShop/statspersonalinfos) module: [v2.0.4](https://github.com/PrestaShop/statspersonalinfos/releases/tag/v2.0.4)
* [Statsproduct](https://github.com/PrestaShop/statsproduct) module: [v2.1.1](https://github.com/PrestaShop/statsproduct/releases/tag/v2.1.1)
* [Statsregistrations](https://github.com/PrestaShop/statsregistrations) module: [v2.0.1](https://github.com/PrestaShop/statsregistrations/releases/tag/v2.0.1)
* [Statssearch](https://github.com/PrestaShop/statssearch) module: [v2.0.2](https://github.com/PrestaShop/statssearch/releases/tag/v2.0.2)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [82 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-01-03..2022-01-09) have been created in the project repositories;
- [61 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-01-03..2022-01-09), including [24 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-01-03..2022-01-09) on the core;
- [151 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-01-03..2022-01-09) in the project repositories;
- [129 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-01-03..2022-01-09), including [117 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-01-03..2022-01-09).


## Code changes in the 'develop' branch


### Core
* [#27112](https://github.com/PrestaShop/PrestaShop/pull/27112): Remove Tools::addonsRequest('service') calls (Part 2), by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#27250](https://github.com/PrestaShop/PrestaShop/pull/27250): Fixes edit of cart rule of a country, by [@Progi1984](https://github.com/Progi1984)
* [#26762](https://github.com/PrestaShop/PrestaShop/pull/26762): Refactor product unit price, by [@jolelievre](https://github.com/jolelievre)
* [#25080](https://github.com/PrestaShop/PrestaShop/pull/25080): Display customer groups in order detail. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Front office
* [#27095](https://github.com/PrestaShop/PrestaShop/pull/27095): Fix forbidden access page in Front Office, by [@eternoendless](https://github.com/eternoendless)


### Tests
* [#27241](https://github.com/PrestaShop/PrestaShop/pull/27241): Separate steps and navigation for FO products tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#27174](https://github.com/PrestaShop/PrestaShop/pull/27174): Increase navigation timeout on add shop tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27141](https://github.com/PrestaShop/PrestaShop/pull/27141): PHPStan (Level 4) on tests/, by [@Progi1984](https://github.com/Progi1984)
* [#27076](https://github.com/PrestaShop/PrestaShop/pull/27076): Functional tests - Move PRE-conditions and POST-conditions tests from test to common tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#26801](https://github.com/PrestaShop/PrestaShop/pull/26801): Functional tests - Add new test 'Change order status'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#26551](https://github.com/PrestaShop/PrestaShop/pull/26551): Functional tests - Add new test 'Check messages block from view order page'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Core
* [#27215](https://github.com/PrestaShop/PrestaShop/pull/27215): Bump modules, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#26514](https://github.com/PrestaShop/PrestaShop/pull/26514): Allow all characters for Cart Rule & Order Cart Rule names, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#26998](https://github.com/PrestaShop/PrestaShop/pull/26998): Fix product width on featuredproducts, by [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#27224](https://github.com/PrestaShop/PrestaShop/pull/27224): Functional tests - Fix multistore test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### presthubot
* [#44](https://github.com/PrestaShop/presthubot/pull/44): Add "request changes" in slack notification, by [@Progi1984](https://github.com/Progi1984)
* [#43](https://github.com/PrestaShop/presthubot/pull/43): Add PR "Blocked" in QA Slack Notification, by [@Progi1984](https://github.com/Progi1984)


### Customer reassurance block module
* [#335](https://github.com/PrestaShop/blockreassurance/pull/335): Bump mini-css-extract-plugin from 2.4.5 to 2.4.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#334](https://github.com/PrestaShop/blockreassurance/pull/334): Improved Workflow Build Release, by [@Progi1984](https://github.com/Progi1984)
* [#333](https://github.com/PrestaShop/blockreassurance/pull/333): Bump eslint from 8.5.0 to 8.6.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#332](https://github.com/PrestaShop/blockreassurance/pull/332): Bump eslint-plugin-import from 2.25.3 to 2.25.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### User documentation landing page
* [#176](https://github.com/PrestaShop/user-documentation-landing/pull/176): chore(deps-dev): bump sass from 1.45.2 to 1.46.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#175](https://github.com/PrestaShop/user-documentation-landing/pull/175): chore(deps-dev): bump babel-jest from 27.4.5 to 27.4.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#174](https://github.com/PrestaShop/user-documentation-landing/pull/174): fix(deps): bump core-js from 3.20.1 to 3.20.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#173](https://github.com/PrestaShop/user-documentation-landing/pull/173): chore(deps-dev): bump sass from 1.45.1 to 1.45.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Brands list module
* [#11](https://github.com/PrestaShop/ps_brandlist/pull/11): Update version, README and license in composer.json, by [@matks](https://github.com/matks)
* [#10](https://github.com/PrestaShop/ps_brandlist/pull/10): Add Github Actions, by [@Progi1984](https://github.com/Progi1984)


### Buy button lite module
* [#56](https://github.com/PrestaShop/ps_buybuttonlite/pull/56): Bump axios from 0.21.1 to 0.21.2 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#55](https://github.com/PrestaShop/ps_buybuttonlite/pull/55): Add build release, by [@Progi1984](https://github.com/Progi1984)


### Faceted search module
* [#586](https://github.com/PrestaShop/ps_facetedsearch/pull/586): Fix availability filter for products with negative quantities.. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#585](https://github.com/PrestaShop/ps_facetedsearch/pull/585): Flush cache if changing configuration related to stock. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#584](https://github.com/PrestaShop/ps_facetedsearch/pull/584): Improved Workflow Build Release. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#583](https://github.com/PrestaShop/ps_facetedsearch/pull/583): Bump eslint-plugin-import from 2.25.3 to 2.25.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#582](https://github.com/PrestaShop/ps_facetedsearch/pull/582): Bump eslint from 8.5.0 to 8.6.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#479](https://github.com/PrestaShop/ps_facetedsearch/pull/479): Enable filtering by stock properly. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Available quantities statistics module
* [#19](https://github.com/PrestaShop/statsstock/pull/19): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Shop search statistics module
* [#15](https://github.com/PrestaShop/statssearch/pull/15): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Registrations statistics modules
* [#13](https://github.com/PrestaShop/statsregistrations/pull/13): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)
* [#12](https://github.com/PrestaShop/statsregistrations/pull/12): Release 2.0.1, by [@PierreRambaud](https://github.com/PierreRambaud)


### Product details statistics module
* [#29](https://github.com/PrestaShop/statsproduct/pull/29): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)
* [#28](https://github.com/PrestaShop/statsproduct/pull/28): Release 2.1.1, by [@PierreRambaud](https://github.com/PierreRambaud)


### Registered customer information statistics module
* [#17](https://github.com/PrestaShop/statspersonalinfos/pull/17): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Stats Dashboard module
* [#23](https://github.com/PrestaShop/statsforecast/pull/23): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Data mining for statistics module
* [#21](https://github.com/PrestaShop/statsdata/pull/21): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Catalog evaluation statistics module
* [#21](https://github.com/PrestaShop/statscheckup/pull/21): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)
* [#20](https://github.com/PrestaShop/statscheckup/pull/20): Release 2.0.2, by [@PierreRambaud](https://github.com/PierreRambaud)


### Viewed products block module
* [#23](https://github.com/PrestaShop/ps_viewedproduct/pull/23): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Supplier list module
* [#11](https://github.com/PrestaShop/ps_supplierlist/pull/11): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Specials module
* [#5](https://github.com/PrestaShop/ps_specials/pull/5): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Social Follow module
* [#29](https://github.com/PrestaShop/ps_socialfollow/pull/29): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Share Buttons module
* [#51](https://github.com/PrestaShop/ps_sharebuttons/pull/51): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### New Products module
* [#11](https://github.com/PrestaShop/ps_newproducts/pull/11): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Links list module
* [#141](https://github.com/PrestaShop/ps_linklist/pull/141): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Currency selector
* [#25](https://github.com/PrestaShop/ps_currencyselector/pull/25): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Contact informations module
* [#46](https://github.com/PrestaShop/ps_contactinfo/pull/46): Add build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Category tree links module
* [#56](https://github.com/PrestaShop/ps_categorytree/pull/56): Update build release. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Wishlist block module
* [#155](https://github.com/PrestaShop/blockwishlist/pull/155): Fix wrong condition on productAttributeId of addtowishlist modal, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#147](https://github.com/PrestaShop/blockwishlist/pull/147): Add bundles on every context, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#145](https://github.com/PrestaShop/blockwishlist/pull/145): Add help sidebar to the statistic page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#144](https://github.com/PrestaShop/blockwishlist/pull/144): Improved Workflow Build Release, by [@Progi1984](https://github.com/Progi1984)
* [#141](https://github.com/PrestaShop/blockwishlist/pull/141): Fixed RTL issues. Thank you [@mparvazi](https://github.com/mparvazi)


### Cash on delivery module
* [#39](https://github.com/PrestaShop/ps_cashondelivery/pull/39): Improved Workflow Build Release, by [@Progi1984](https://github.com/Progi1984)
* [#38](https://github.com/PrestaShop/ps_cashondelivery/pull/38): Add Github Actions, by [@Progi1984](https://github.com/Progi1984)


### Product Comments module
* [#129](https://github.com/PrestaShop/productcomments/pull/129): Remove unused dependencies, by [@atomiix](https://github.com/atomiix)
* [#128](https://github.com/PrestaShop/productcomments/pull/128): Improved Workflow Build Release, by [@Progi1984](https://github.com/Progi1984)


### Carrier distribution statistics module
* [#12](https://github.com/PrestaShop/statscarrier/pull/12): Add build release. Thank you [@nenes25](https://github.com/nenes25)


### Best vouchers statistics module
* [#14](https://github.com/PrestaShop/statsbestvouchers/pull/14): Add build release. Thank you [@nenes25](https://github.com/nenes25)


### Best suppliers statistics module
* [#12](https://github.com/PrestaShop/statsbestsuppliers/pull/12): Add build release. Thank you [@nenes25](https://github.com/nenes25)
* [#11](https://github.com/PrestaShop/statsbestsuppliers/pull/11): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.1. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Best-selling products statistics module
* [#14](https://github.com/PrestaShop/statsbestproducts/pull/14): Add build release. Thank you [@nenes25](https://github.com/nenes25)


### Catalog statistics module
* [#23](https://github.com/PrestaShop/statscatalog/pull/23): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#22](https://github.com/PrestaShop/statscatalog/pull/22): Do not use hook AdminStatsModules alias, use displayAdminStatsModules. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Best customers statistics module
* [#25](https://github.com/PrestaShop/statsbestcustomers/pull/25): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#24](https://github.com/PrestaShop/statsbestcustomers/pull/24): Update build-release.yml. Thank you [@nenes25](https://github.com/nenes25)


### Search Bar module
* [#44](https://github.com/PrestaShop/ps_searchbar/pull/44): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Featured products module
* [#46](https://github.com/PrestaShop/ps_featuredproducts/pull/46): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Order Notifications on the Favicon module
* [#34](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/34): Improved Workflow Build Release. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Email subscription module
* [#86](https://github.com/PrestaShop/ps_emailsubscription/pull/86): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Email Alerts module
* [#100](https://github.com/PrestaShop/ps_emailalerts/pull/100): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#99](https://github.com/PrestaShop/ps_emailalerts/pull/99): Add last key of breadcrumbs. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#98](https://github.com/PrestaShop/ps_emailalerts/pull/98): Move php-dev-tools to require-dev, by [@atomiix](https://github.com/atomiix)
* [#97](https://github.com/PrestaShop/ps_emailalerts/pull/97): Update notification if no alerts. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Customer data privacy block module
* [#36](https://github.com/PrestaShop/ps_dataprivacy/pull/36): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Custom text module
* [#67](https://github.com/PrestaShop/ps_customtext/pull/67): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Customer "Sign in" link module
* [#42](https://github.com/PrestaShop/ps_customersignin/pull/42): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Customer account links module
* [#37](https://github.com/PrestaShop/ps_customeraccountlinks/pull/37): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Best manufacturers statistics module
* [#12](https://github.com/PrestaShop/statsbestmanufacturers/pull/12): Add build release. Thank you [@nenes25](https://github.com/nenes25)


### Cross-selling module
* [#30](https://github.com/PrestaShop/ps_crossselling/pull/30): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Check payment module
* [#54](https://github.com/PrestaShop/ps_checkpayment/pull/54): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Google Analytics module
* [#108](https://github.com/PrestaShop/ps_googleanalytics/pull/108): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)


### GDPR module
* [#156](https://github.com/PrestaShop/psgdpr/pull/156): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)


### OnBoarding module
* [#136](https://github.com/PrestaShop/welcome/pull/136): Update Github Actions. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#135](https://github.com/PrestaShop/welcome/pull/135): Bump eslint-plugin-import from 2.25.3 to 2.25.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Best categories statistics module
* [#15](https://github.com/PrestaShop/statsbestcategories/pull/15): Add build release. Thank you [@nenes25](https://github.com/nenes25)


### Sales and orders statistics module
* [#27](https://github.com/PrestaShop/statssales/pull/27): build release github action. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Newsletter statistics module
* [#13](https://github.com/PrestaShop/statsnewsletter/pull/13): Add build release. Thank you [@nenes25](https://github.com/nenes25)


### Products in the same category module
* [#28](https://github.com/PrestaShop/ps_categoryproducts/pull/28): Add Github Actions, by [@Progi1984](https://github.com/Progi1984)


### Best sellers module
* [#17](https://github.com/PrestaShop/ps_bestsellers/pull/17): Add Github Actions, by [@Progi1984](https://github.com/Progi1984)


### Theme customization module
* [#49](https://github.com/PrestaShop/ps_themecusto/pull/49): Remove code about PS_Ready, by [@Progi1984](https://github.com/Progi1984)
* [#48](https://github.com/PrestaShop/ps_themecusto/pull/48): Improved Workflow Build Release, by [@Progi1984](https://github.com/Progi1984)
* [#47](https://github.com/PrestaShop/ps_themecusto/pull/47): Remove Tools::addonsRequest('module') calls, by [@Progi1984](https://github.com/Progi1984)


### Banner module
* [#40](https://github.com/PrestaShop/ps_banner/pull/40): Add build release, by [@Progi1984](https://github.com/Progi1984)


### Pages not found
* [#20](https://github.com/PrestaShop/pagesnotfound/pull/20): Add build release, by [@Progi1984](https://github.com/Progi1984)


### Simple HTML table display module
* [#28](https://github.com/PrestaShop/gridhtml/pull/28): Add build release, by [@Progi1984](https://github.com/Progi1984)


### NVD3 Charts module
* [#19](https://github.com/PrestaShop/graphnvd3/pull/19): Add build release, by [@Progi1984](https://github.com/Progi1984)


### Dashboard Trends module
* [#50](https://github.com/PrestaShop/dashtrends/pull/50): Improved Workflow Build Release, by [@Progi1984](https://github.com/Progi1984)


### Dashboard Products module
* [#38](https://github.com/PrestaShop/dashproducts/pull/38): Add build release, by [@Progi1984](https://github.com/Progi1984)


### Dashboard Goals module
* [#26](https://github.com/PrestaShop/dashgoals/pull/26): Add build release, by [@Progi1984](https://github.com/Progi1984)


### Dashboard Activity module
* [#29](https://github.com/PrestaShop/dashactivity/pull/29): Add build release, by [@Progi1984](https://github.com/Progi1984)


### Contact Form module
* [#58](https://github.com/PrestaShop/contactform/pull/58): Add build release, by [@Progi1984](https://github.com/Progi1984)


### Auto Upgrade module
* [#444](https://github.com/PrestaShop/autoupgrade/pull/444): Add build release, by [@Progi1984](https://github.com/Progi1984)


### LocalizationFiles
* [#46](https://github.com/PrestaShop/LocalizationFiles/pull/46): Truncate long names for US states, by [@eternoendless](https://github.com/eternoendless)
* [#45](https://github.com/PrestaShop/LocalizationFiles/pull/45): Normalize long region names for Chile, by [@eternoendless](https://github.com/eternoendless)


### MJML Theme Converter
* [#20](https://github.com/PrestaShop/mjml-theme-converter/pull/20): Fixed RTL issues for modern email theme . Thank you [@mparvazi](https://github.com/mparvazi)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Progi1984](https://github.com/Progi1984), [@dependabot[bot]](https://github.com/apps/dependabot), [@matks](https://github.com/matks), [@boubkerbribri](https://github.com/boubkerbribri), [@Hlavtox](https://github.com/Hlavtox), [@Kaudaj](https://github.com/Kaudaj), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@NeOMakinG](https://github.com/NeOMakinG), [@atomiix](https://github.com/atomiix), [@nenes25](https://github.com/nenes25), [@jf-viguier](https://github.com/jf-viguier), [@jolelievre](https://github.com/jolelievre), [@eternoendless](https://github.com/eternoendless), [@rickygzz](https://github.com/rickygzz), [@PierreRambaud](https://github.com/PierreRambaud), [@PrestaEdit](https://github.com/PrestaEdit), [@mparvazi](https://github.com/mparvazi)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
