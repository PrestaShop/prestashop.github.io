---
layout: post
aliases: ["/news/coreweekly-02-2022"]
title:  "PrestaShop Core Weekly - Week 2 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-01-17
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 10th to Sunday 16th of January 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [47 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-01-10..2022-01-16) have been created in the project repositories;
- [46 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-01-10..2022-01-16), including [18 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-01-10..2022-01-16) on the core;
- [128 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-01-10..2022-01-16) in the project repositories;
- [126 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-01-10..2022-01-16), including [109 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-01-10..2022-01-16).
        


## Code changes in the 'develop' branch


### Core
* [#27339](https://github.com/PrestaShop/PrestaShop/pull/27339): Set disabled class for label if the input is disabled, by [@Progi1984](https://github.com/Progi1984)
* [#27337](https://github.com/PrestaShop/PrestaShop/pull/27337): Upgrade Smarty to 3.4.43, by [@matks](https://github.com/matks)
* [#27291](https://github.com/PrestaShop/PrestaShop/pull/27291): Removed deprecated in class Cookie, by [@Progi1984](https://github.com/Progi1984)
* [#27242](https://github.com/PrestaShop/PrestaShop/pull/27242): Remove code about AdminSupplyOrders, AdminStockCover, AdminStockInstantState, AdminStockConfiguration & AdminStockMvt, by [@Progi1984](https://github.com/Progi1984)
* [#27223](https://github.com/PrestaShop/PrestaShop/pull/27223): Add new hook `actionFilterDeliveryOptionList`. Thank you [@PululuK](https://github.com/PululuK)
* [#27127](https://github.com/PrestaShop/PrestaShop/pull/27127): Allow overriding `_PS_DISPLAY_COMPATIBILITY_WARNING_` in defines_custom.inc.php. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#27111](https://github.com/PrestaShop/PrestaShop/pull/27111): Remove Tools::addonsRequest('module') calls, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#27317](https://github.com/PrestaShop/PrestaShop/pull/27317): Fix form mapper to handle mapping with only one selector, by [@jolelievre](https://github.com/jolelievre)
* [#27273](https://github.com/PrestaShop/PrestaShop/pull/27273): Clean shortcuts code from product form, by [@jolelievre](https://github.com/jolelievre)
* [#27052](https://github.com/PrestaShop/PrestaShop/pull/27052): Fix unclosed foreach. Thank you [@okom3pom](https://github.com/okom3pom)
* [#26700](https://github.com/PrestaShop/PrestaShop/pull/26700): In BackOffice, fixed problems for RTL languages. Thank you [@mparvazi](https://github.com/mparvazi)
* [#26617](https://github.com/PrestaShop/PrestaShop/pull/26617): Update combination using delta quantity. Thank you [@zuk3975](https://github.com/zuk3975)
* [#25742](https://github.com/PrestaShop/PrestaShop/pull/25742): Add specific price modal in experimental product page. Thank you [@zuk3975](https://github.com/zuk3975)


### Front office
* [#26806](https://github.com/PrestaShop/PrestaShop/pull/26806): Move informational message in my account sections to template. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Tests
* [#27349](https://github.com/PrestaShop/PrestaShop/pull/27349): Fix nightly 12/01/2022 - Fix Credit slip options test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27287](https://github.com/PrestaShop/PrestaShop/pull/27287): PHPStan (Level 5) on tests/, by [@Progi1984](https://github.com/Progi1984)
* [#27269](https://github.com/PrestaShop/PrestaShop/pull/27269): Create basic helper file. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27247](https://github.com/PrestaShop/PrestaShop/pull/27247): PHPStan (Level 5) on tests-legacy/, by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '1.7.8.x' branch


### Back office
* [#27259](https://github.com/PrestaShop/PrestaShop/pull/27259): Fix left padding of header when sidebar menu is closed, by [@NeOMakinG](https://github.com/NeOMakinG)


## Code changes in modules, themes & tools


### Registrations statistics modules
* [#15](https://github.com/PrestaShop/statsregistrations/pull/15): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Google Sitemap module
* [#150](https://github.com/PrestaShop/gsitemap/pull/150): Set property tab. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#149](https://github.com/PrestaShop/gsitemap/pull/149): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Social Follow module
* [#31](https://github.com/PrestaShop/ps_socialfollow/pull/31): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Shop search statistics module
* [#18](https://github.com/PrestaShop/statssearch/pull/18): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#17](https://github.com/PrestaShop/statssearch/pull/17): Revert "Set tab property", by [@Progi1984](https://github.com/Progi1984)
* [#16](https://github.com/PrestaShop/statssearch/pull/16): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#14](https://github.com/PrestaShop/statssearch/pull/14): Release 2.0.2, by [@PierreRambaud](https://github.com/PierreRambaud)


### Best sellers module
* [#20](https://github.com/PrestaShop/ps_bestsellers/pull/20): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#19](https://github.com/PrestaShop/ps_bestsellers/pull/19): Revert "Set tab property", by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#18](https://github.com/PrestaShop/ps_bestsellers/pull/18): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Products in the same category module
* [#30](https://github.com/PrestaShop/ps_categoryproducts/pull/30): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#29](https://github.com/PrestaShop/ps_categoryproducts/pull/29): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Dashboard Goals module
* [#27](https://github.com/PrestaShop/dashgoals/pull/27): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Catalog evaluation statistics module
* [#22](https://github.com/PrestaShop/statscheckup/pull/22): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Best-selling products statistics module
* [#15](https://github.com/PrestaShop/statsbestproducts/pull/15): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#13](https://github.com/PrestaShop/statsbestproducts/pull/13): Release 2.0.1, by [@PierreRambaud](https://github.com/PierreRambaud)


### Sales and orders statistics module
* [#28](https://github.com/PrestaShop/statssales/pull/28): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Product details statistics module
* [#30](https://github.com/PrestaShop/statsproduct/pull/30): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Available quantities statistics module
* [#20](https://github.com/PrestaShop/statsstock/pull/20): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Best categories statistics module
* [#16](https://github.com/PrestaShop/statsbestcategories/pull/16): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#14](https://github.com/PrestaShop/statsbestcategories/pull/14): Release 2.0.1, by [@PierreRambaud](https://github.com/PierreRambaud)


### Customer data privacy block module
* [#37](https://github.com/PrestaShop/ps_dataprivacy/pull/37): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Best customers statistics module
* [#26](https://github.com/PrestaShop/statsbestcustomers/pull/26): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#23](https://github.com/PrestaShop/statsbestcustomers/pull/23): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.4. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Best suppliers statistics module
* [#13](https://github.com/PrestaShop/statsbestsuppliers/pull/13): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Pages not found module
* [#21](https://github.com/PrestaShop/pagesnotfound/pull/21): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#19](https://github.com/PrestaShop/pagesnotfound/pull/19): Release 2.0.2, by [@PierreRambaud](https://github.com/PierreRambaud)


### Dashboard Activity module
* [#30](https://github.com/PrestaShop/dashactivity/pull/30): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Stats Dashboard module
* [#24](https://github.com/PrestaShop/statsforecast/pull/24): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Newsletter statistics module
* [#14](https://github.com/PrestaShop/statsnewsletter/pull/14): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#12](https://github.com/PrestaShop/statsnewsletter/pull/12): Release 2.0.3, by [@PierreRambaud](https://github.com/PierreRambaud)


### Registered customer information statistics module
* [#18](https://github.com/PrestaShop/statspersonalinfos/pull/18): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#15](https://github.com/PrestaShop/statspersonalinfos/pull/15): Release 2.0.4, by [@PierreRambaud](https://github.com/PierreRambaud)


### Dashboard Products module
* [#39](https://github.com/PrestaShop/dashproducts/pull/39): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Catalog statistics module
* [#24](https://github.com/PrestaShop/statscatalog/pull/24): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Best vouchers statistics module
* [#15](https://github.com/PrestaShop/statsbestvouchers/pull/15): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#13](https://github.com/PrestaShop/statsbestvouchers/pull/13): Release 2.0.1, by [@PierreRambaud](https://github.com/PierreRambaud)


### Best manufacturers statistics module
* [#13](https://github.com/PrestaShop/statsbestmanufacturers/pull/13): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Data mining for statistics module
* [#22](https://github.com/PrestaShop/statsdata/pull/22): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Carrier distribution statistics module
* [#13](https://github.com/PrestaShop/statscarrier/pull/13): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#11](https://github.com/PrestaShop/statscarrier/pull/11): Release 2.0.1, by [@PierreRambaud](https://github.com/PierreRambaud)


### Cross-selling module
* [#32](https://github.com/PrestaShop/ps_crossselling/pull/32): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Email subscription module
* [#87](https://github.com/PrestaShop/ps_emailsubscription/pull/87): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### New Products module
* [#12](https://github.com/PrestaShop/ps_newproducts/pull/12): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Banner module
* [#41](https://github.com/PrestaShop/ps_banner/pull/41): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Language selector module
* [#27](https://github.com/PrestaShop/ps_languageselector/pull/27): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Customer "Sign in" link module
* [#43](https://github.com/PrestaShop/ps_customersignin/pull/43): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Customer account links module
* [#38](https://github.com/PrestaShop/ps_customeraccountlinks/pull/38): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Custom text module
* [#68](https://github.com/PrestaShop/ps_customtext/pull/68): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Currency selector
* [#26](https://github.com/PrestaShop/ps_currencyselector/pull/26): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Search Bar module
* [#45](https://github.com/PrestaShop/ps_searchbar/pull/45): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#43](https://github.com/PrestaShop/ps_searchbar/pull/43): Improved displaying of the search bar placeholder, by [@kpodemski](https://github.com/kpodemski)


### Theme customization module
* [#50](https://github.com/PrestaShop/ps_themecusto/pull/50): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Special offers module
* [#6](https://github.com/PrestaShop/ps_specials/pull/6): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Share Buttons module
* [#52](https://github.com/PrestaShop/ps_sharebuttons/pull/52): Set tab property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Customer reassurance block module
* [#338](https://github.com/PrestaShop/blockreassurance/pull/338): Bump mini-css-extract-plugin from 2.4.6 to 2.4.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#337](https://github.com/PrestaShop/blockreassurance/pull/337): Bump webpack from 5.65.0 to 5.66.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### User documentation landing page
* [#178](https://github.com/PrestaShop/user-documentation-landing/pull/178): chore(deps-dev): bump sass from 1.47.0 to 1.48.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#177](https://github.com/PrestaShop/user-documentation-landing/pull/177): chore(deps-dev): bump sass from 1.46.0 to 1.47.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Core Weekly Generator tool
* [#110](https://github.com/PrestaShop/core-weekly-generator/pull/110): Bump follow-redirects from 1.9.0 to 1.14.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#109](https://github.com/PrestaShop/core-weekly-generator/pull/109): Handle unknown branches, by [@matks](https://github.com/matks)


### New Front-office theme
* [#149](https://github.com/PrestaShop/theme-refacto/pull/149): Remove empty scripts after build. Thank you [@mparvazi](https://github.com/mparvazi)
* [#148](https://github.com/PrestaShop/theme-refacto/pull/148): Auto RTL feature. Thank you [@mparvazi](https://github.com/mparvazi)


### Buy button lite module
* [#57](https://github.com/PrestaShop/ps_buybuttonlite/pull/57): Bump follow-redirects from 1.5.2 to 1.14.7 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#592](https://github.com/PrestaShop/ps_facetedsearch/pull/592): Bump webpack from 5.65.0 to 5.66.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#591](https://github.com/PrestaShop/ps_facetedsearch/pull/591): Bump @babel/register from 7.16.8 to 7.16.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#590](https://github.com/PrestaShop/ps_facetedsearch/pull/590): Bump @babel/node from 7.16.7 to 7.16.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#588](https://github.com/PrestaShop/ps_facetedsearch/pull/588): Bump @babel/cli from 7.16.7 to 7.16.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#587](https://github.com/PrestaShop/ps_facetedsearch/pull/587): Bump @babel/preset-env from 7.16.7 to 7.16.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestonBot
* [#125](https://github.com/PrestaShop/prestonbot/pull/125): Bump smarty/smarty from 3.1.39 to 3.1.43. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Decimal
* [#23](https://github.com/PrestaShop/decimal/pull/23): Rename php-cs config file, by [@atomiix](https://github.com/atomiix)


### Example modules
* [#84](https://github.com/PrestaShop/example-modules/pull/84): Fix compatibility version, by [@kpodemski](https://github.com/kpodemski)


### Changes in developer documentation sources
* [#1268](https://github.com/PrestaShop/docs/pull/1268): Fix link to symfony doc (form as service). Thank you [@SebSept](https://github.com/SebSept)
* [#1266](https://github.com/PrestaShop/docs/pull/1266): Add link to all example modules. Thank you [@okom3pom](https://github.com/okom3pom)
* [#1265](https://github.com/PrestaShop/docs/pull/1265): Add link to all example modules. Thank you [@okom3pom](https://github.com/okom3pom)
* [#1264](https://github.com/PrestaShop/docs/pull/1264): Add displayAfterTitleTag hook. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1263](https://github.com/PrestaShop/docs/pull/1263): add displayAfterTitleTag hook. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1254](https://github.com/PrestaShop/docs/pull/1254): Refer to nodejs compatibility table and add node 16, by [@NeOMakinG](https://github.com/NeOMakinG)


### Changes in developer documentation site
* [#9](https://github.com/PrestaShop/devdocs-site/pull/9): Use the good directory. Thank you [@okom3pom](https://github.com/okom3pom)


### Contact informations module
* [#44](https://github.com/PrestaShop/ps_contactinfo/pull/44): Fix trying to access array offset on value of type null. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#43](https://github.com/PrestaShop/ps_contactinfo/pull/43): Add shop legal details to template. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Wishlist block module
* [#154](https://github.com/PrestaShop/blockwishlist/pull/154): Use translated string for the Sort by: in lists, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#152](https://github.com/PrestaShop/blockwishlist/pull/152): Disable add-to-cart button when you click on it until the bootstrap modal hide, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#151](https://github.com/PrestaShop/blockwishlist/pull/151): Correct error when coming back to another combination, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#150](https://github.com/PrestaShop/blockwishlist/pull/150): Add flash notification on form save, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#148](https://github.com/PrestaShop/blockwishlist/pull/148): Remove unused class doing conflic with corejs, by [@NeOMakinG](https://github.com/NeOMakinG)


### Product Comments module
* [#125](https://github.com/PrestaShop/productcomments/pull/125): To prevent google from indexing the icon names use data-icon and css to show the icons. Thank you [@tswfi](https://github.com/tswfi)


### Payment example module
* [#7](https://github.com/PrestaShop/paymentexample/pull/7): Create README.md. Thank you [@daptordarattler](https://github.com/daptordarattler)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@PrestaEdit](https://github.com/PrestaEdit), [@Progi1984](https://github.com/Progi1984), [@matthieu-rolland](https://github.com/matthieu-rolland), [@dependabot[bot]](https://github.com/apps/dependabot), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@mparvazi](https://github.com/mparvazi), [@matks](https://github.com/matks), [@atomiix](https://github.com/atomiix), [@kpodemski](https://github.com/kpodemski), [@SebSept](https://github.com/SebSept), [@jolelievre](https://github.com/jolelievre), [@okom3pom](https://github.com/okom3pom), [@NeOMakinG](https://github.com/NeOMakinG), [@jf-viguier](https://github.com/jf-viguier), [@Hlavtox](https://github.com/Hlavtox), [@PululuK](https://github.com/PululuK), [@PierreRambaud](https://github.com/PierreRambaud), [@tswfi](https://github.com/tswfi), [@zuk3975](https://github.com/zuk3975), [@daptordarattler](https://github.com/daptordarattler)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

