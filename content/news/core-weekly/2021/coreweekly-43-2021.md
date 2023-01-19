---
layout: post
aliases: ["/news/coreweekly-43-2021"]
title:  "PrestaShop Core Weekly - Week 43 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-11-08
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 25th to Sunday 31th of October 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## Releases

* [Autoupgrade](https://github.com/PrestaShop/autoupgrade) module: [v4.13.0](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.13.0)
* [Customtext](https://github.com/PrestaShop/ps_customtext) module: [v4.2.0](https://github.com/PrestaShop/ps_customtext/releases/tag/v4.2.0)
* [Statsproduct](https://github.com/PrestaShop/statsproduct) module: [v2.1.0](https://github.com/PrestaShop/statsproduct/releases/tag/v2.1.0)
* [Mainmenu](https://github.com/PrestaShop/ps_mainmenu) module: [v2.3.1](https://github.com/PrestaShop/ps_mainmenu/releases/tag/v2.3.1)
* [Searchbar](https://github.com/PrestaShop/ps_searchbar) module: [v2.1.2](https://github.com/PrestaShop/ps_searchbar/releases/tag/v2.1.2)
* [Viewedproduct](https://github.com/PrestaShop/ps_viewedproduct) module: [v1.2.2](https://github.com/PrestaShop/ps_viewedproduct/releases/tag/v1.2.2)
* [Psssst](https://github.com/PrestaShop/psssst): [1.2](https://github.com/PrestaShop/psssst/releases/tag/v1.2)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [49 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-10-25..2021-10-31) have been created in the project repositories;
- [86 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-10-25..2021-10-31), including [30 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-10-25..2021-10-31) on the core;
- [101 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-10-25..2021-10-31) in the project repositories;
- [210 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-10-25..2021-10-31), including [129 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-10-25..2021-10-31).
        


## Code changes in the 'develop' branch


### Core
* [#26408](https://github.com/PrestaShop/PrestaShop/pull/26408): Use `_PS_PRODUCT_IMG_DIR_`  instead of  `_PS_PROD_IMG_DIR_` to avoid confusion with `prod` and `dev` env. Thank you [@PululuK](https://github.com/PululuK)
* [#26395](https://github.com/PrestaShop/PrestaShop/pull/26395): PaymentModule: an array is only updated, but never queried, by [@Matt75](https://github.com/Matt75)
* [#26312](https://github.com/PrestaShop/PrestaShop/pull/26312): Remove isPresent() in PrestaShopLogger. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26310](https://github.com/PrestaShop/PrestaShop/pull/26310): Remove getJqueryPath() method. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26292](https://github.com/PrestaShop/PrestaShop/pull/26292): Remove deprecated admin/ajax.php and js/admin-categories-tree.js, by [@eternoendless](https://github.com/eternoendless)
* [#26268](https://github.com/PrestaShop/PrestaShop/pull/26268): Deleting extra parameter. Thank you [@christophe-rouille](https://github.com/christophe-rouille)
* [#26164](https://github.com/PrestaShop/PrestaShop/pull/26164): PHPStan (Level 2) on classes/, by [@Progi1984](https://github.com/Progi1984)
* [#25794](https://github.com/PrestaShop/PrestaShop/pull/25794): Remove upgrade scripts in favor of autoupgrade process, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#25406](https://github.com/PrestaShop/PrestaShop/pull/25406): Add doc block and improve readability of HistoryController::getUrlToInvoice & HistoryController::getUrlToReorder. Thank you [@Sinepel](https://github.com/Sinepel)
* [#24707](https://github.com/PrestaShop/PrestaShop/pull/24707): PrestashopLogger should save object type, even if object id is not set. Thank you [@lmeyer1](https://github.com/lmeyer1)


### Back office
* [#26464](https://github.com/PrestaShop/PrestaShop/pull/26464): Use latest npm version on JS routing GA, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#26372](https://github.com/PrestaShop/PrestaShop/pull/26372): Dashboard - Correct display of the titles with panel-heading when the screen is reduced, by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#26353](https://github.com/PrestaShop/PrestaShop/pull/26353): Fix display edit country. Thank you [@okom3pom](https://github.com/okom3pom)
* [#26241](https://github.com/PrestaShop/PrestaShop/pull/26241): Disable sorting on customer discount vouchers. Thank you [@tegbessou](https://github.com/tegbessou)
* [#26215](https://github.com/PrestaShop/PrestaShop/pull/26215): Checked select all checkboxes if all options are checked. Thank you [@tegbessou](https://github.com/tegbessou)
* [#26068](https://github.com/PrestaShop/PrestaShop/pull/26068): Fix footer from next invoice shown on invoice when exporting multiple invoices. Thank you [@Ashley-Butcher](https://github.com/Ashley-Butcher)
* [#26060](https://github.com/PrestaShop/PrestaShop/pull/26060): Clean Back-office templates, part 1 - common. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#26021](https://github.com/PrestaShop/PrestaShop/pull/26021): Update every package-lock with npm 7, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#25265](https://github.com/PrestaShop/PrestaShop/pull/25265): Add employee in mobile menu and quickaccess on search bar on mobile migrated pages, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21420](https://github.com/PrestaShop/PrestaShop/pull/21420): Set filters placeholder for Yes/NO & Fix bug when filters are emptied, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#26414](https://github.com/PrestaShop/PrestaShop/pull/26414): Use proper variable for checking category active. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#26394](https://github.com/PrestaShop/PrestaShop/pull/26394): Customization product text fix display. Thank you [@marwachelly](https://github.com/marwachelly)
* [#26393](https://github.com/PrestaShop/PrestaShop/pull/26393): Show breadcrumbs on mobile. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)
* [#26392](https://github.com/PrestaShop/PrestaShop/pull/26392): Fix Gift message bug if clicking fast. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)
* [#26380](https://github.com/PrestaShop/PrestaShop/pull/26380): Fix Simple anchors do not work. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)
* [#26347](https://github.com/PrestaShop/PrestaShop/pull/26347): Fix for issue with customizable products returns. Thank you [@Prestaworks](https://github.com/Prestaworks)
* [#26285](https://github.com/PrestaShop/PrestaShop/pull/26285): Unify reporting of query types. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#26242](https://github.com/PrestaShop/PrestaShop/pull/26242): Respect display_taxes_label in ps_shoppingcart classic theme template. Thank you [@tswfi](https://github.com/tswfi)
* [#25972](https://github.com/PrestaShop/PrestaShop/pull/25972): Do not reject cart creation if no cookie, only exclude bots. Thank you [@psyray](https://github.com/psyray)


### Tests
* [#26473](https://github.com/PrestaShop/PrestaShop/pull/26473): Fix PHPStan because of GDImage, by [@jolelievre](https://github.com/jolelievre)
* [#26443](https://github.com/PrestaShop/PrestaShop/pull/26443): Fix categories and cart rules tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#26437](https://github.com/PrestaShop/PrestaShop/pull/26437): Refactor controller tests, by [@jolelievre](https://github.com/jolelievre)
* [#26416](https://github.com/PrestaShop/PrestaShop/pull/26416): Not using href as a selector on order history page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#26362](https://github.com/PrestaShop/PrestaShop/pull/26362): Added Behat Tests for Language Domain, by [@Progi1984](https://github.com/Progi1984)
* [#26295](https://github.com/PrestaShop/PrestaShop/pull/26295): Functional tests - Fix and add some steps to ' Customer block & Product block' on create order page BO. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#24162](https://github.com/PrestaShop/PrestaShop/pull/24162): Added Behat Tests for WebService, by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '1.7.8.x' branch


### Core
* [#26221](https://github.com/PrestaShop/PrestaShop/pull/26221): Fix SQL query in OrderQueryBuilder, by [@atomiix](https://github.com/atomiix)


### Back office
* [#26447](https://github.com/PrestaShop/PrestaShop/pull/26447): Fix Attributes with comma not displayed in Stock management. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)
* [#26365](https://github.com/PrestaShop/PrestaShop/pull/26365): Fix display of address format in Countries page. Thank you [@marwachelly](https://github.com/marwachelly)
* [#26227](https://github.com/PrestaShop/PrestaShop/pull/26227): BO: Fix badly displayed buttons. Thank you [@hibatallahAouadni](https://github.com/hibatallahAouadni)
* [#26145](https://github.com/PrestaShop/PrestaShop/pull/26145): [BO] Fix time-val input buttons to change calendar date-range. Thank you [@mparvazi](https://github.com/mparvazi)
* [#25046](https://github.com/PrestaShop/PrestaShop/pull/25046): In MultiShop, In new Category, display the top category if there are more one root category, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#26434](https://github.com/PrestaShop/PrestaShop/pull/26434): Fix adding to cart with the click on the icon, by [@kpodemski](https://github.com/kpodemski)
* [#26410](https://github.com/PrestaShop/PrestaShop/pull/26410): Backport Fix Simple anchors do not work #26380. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)
* [#26289](https://github.com/PrestaShop/PrestaShop/pull/26289): Fix disabled attribute on checkout on classic, by [@NeOMakinG](https://github.com/NeOMakinG)


## Code changes in modules, themes & tools


### GDPR module
* [#149](https://github.com/PrestaShop/psgdpr/pull/149): Bump to 1.3.0. Thank you [@okom3pom](https://github.com/okom3pom)
* [#148](https://github.com/PrestaShop/psgdpr/pull/148): Fix getAdminLink 3rd argument, by [@atomiix](https://github.com/atomiix)
* [#145](https://github.com/PrestaShop/psgdpr/pull/145): Add breadcrumb link. Thank you [@PululuK](https://github.com/PululuK)
* [#122](https://github.com/PrestaShop/psgdpr/pull/122): Correct the customer details page link - PS 1.7.7.0. Thank you [@moncef-essid](https://github.com/moncef-essid)


### Psssst Module analyzer
* [#6](https://github.com/PrestaShop/psssst/pull/6): Change owner to PrestaShop, by [@atomiix](https://github.com/atomiix)


### Changes in developer documentation sources
* [#1202](https://github.com/PrestaShop/docs/pull/1202): Fix assign custom slip vars. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)
* [#1201](https://github.com/PrestaShop/docs/pull/1201): Redirect maintainer's guide to the project's site, by [@eternoendless](https://github.com/eternoendless)
* [#1199](https://github.com/PrestaShop/docs/pull/1199): Remove addons advertising in themes introduction in 1.7. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1198](https://github.com/PrestaShop/docs/pull/1198): Making directions more clear for 8. Thank you [@Wrenbjor](https://github.com/Wrenbjor)
* [#1181](https://github.com/PrestaShop/docs/pull/1181): Update hook component documentation, by [@eternoendless](https://github.com/eternoendless)
* [#1176](https://github.com/PrestaShop/docs/pull/1176): Fix Strategy page, by [@matks](https://github.com/matks)
* [#1137](https://github.com/PrestaShop/docs/pull/1137): Update URL of author inside the author configuration. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Search Bar module
* [#41](https://github.com/PrestaShop/ps_searchbar/pull/41): Fix missing parameter for upgrade, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#40](https://github.com/PrestaShop/ps_searchbar/pull/40): Release 2.1.2, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#39](https://github.com/PrestaShop/ps_searchbar/pull/39): Do not use hooks top and header, use displayTop and displayHeader instead, by [@PierreRambaud](https://github.com/PierreRambaud)


### Customer reassurance block module
* [#302](https://github.com/PrestaShop/blockreassurance/pull/302): Bump sass-loader from 12.2.0 to 12.3.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#300](https://github.com/PrestaShop/blockreassurance/pull/300): Bump css-loader from 6.4.0 to 6.5.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#299](https://github.com/PrestaShop/blockreassurance/pull/299): Bump webpack from 5.59.1 to 5.60.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#540](https://github.com/PrestaShop/ps_facetedsearch/pull/540): Bump sass-loader from 12.2.0 to 12.3.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#539](https://github.com/PrestaShop/ps_facetedsearch/pull/539): Bump css-loader from 6.4.0 to 6.5.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#538](https://github.com/PrestaShop/ps_facetedsearch/pull/538): Bump webpack from 5.59.1 to 5.60.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#537](https://github.com/PrestaShop/ps_facetedsearch/pull/537): Fix Wrong count of products with price search. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)
* [#532](https://github.com/PrestaShop/ps_facetedsearch/pull/532): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Sales and orders statistics module
* [#23](https://github.com/PrestaShop/statssales/pull/23): Merge master, by [@Progi1984](https://github.com/Progi1984)
* [#21](https://github.com/PrestaShop/statssales/pull/21): Bump version to 2.1.0, by [@Progi1984](https://github.com/Progi1984)
* [#20](https://github.com/PrestaShop/statssales/pull/20): Update compatibility. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#18](https://github.com/PrestaShop/statssales/pull/18): Fixed Refunds in Total Sales Calculation, by [@Progi1984](https://github.com/Progi1984)


### presthubot
* [#39](https://github.com/PrestaShop/presthubot/pull/39): Command `slack:notifier` : Remove modules with PR release from modules which need release, by [@Progi1984](https://github.com/Progi1984)
* [#38](https://github.com/PrestaShop/presthubot/pull/38): Remove command `github:review:report`, by [@Progi1984](https://github.com/Progi1984)


### PrestaShop Specifications
* [#256](https://github.com/PrestaShop/prestashop-specs/pull/256): Disabled Algolia Search, by [@Progi1984](https://github.com/Progi1984)
* [#255](https://github.com/PrestaShop/prestashop-specs/pull/255): Bump Theme to the last version, by [@Progi1984](https://github.com/Progi1984)
* [#254](https://github.com/PrestaShop/prestashop-specs/pull/254): Create specs for attributes. Thank you [@Saimis777](https://github.com/Saimis777)
* [#253](https://github.com/PrestaShop/prestashop-specs/pull/253): Add files via upload. Thank you [@Saimis777](https://github.com/Saimis777)


### PrestaShop test scenarios
* [#7](https://github.com/PrestaShop/test-scenarios/pull/7): Disabled Algolia Search, by [@Progi1984](https://github.com/Progi1984)
* [#6](https://github.com/PrestaShop/test-scenarios/pull/6): Bump Theme to the last version, by [@Progi1984](https://github.com/Progi1984)


### Auto Upgrade module
* [#432](https://github.com/PrestaShop/autoupgrade/pull/432): Release 4.13.0, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#431](https://github.com/PrestaShop/autoupgrade/pull/431): Bump to 4.13.0, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#429](https://github.com/PrestaShop/autoupgrade/pull/429): Add hook regarding #26239 on PrestaShop (dashboardZoneThree). Thank you [@intraordinaire](https://github.com/intraordinaire)
* [#426](https://github.com/PrestaShop/autoupgrade/pull/426): Add SQL query regarding #26259 on PrestaShop. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### User documentation landing page
* [#147](https://github.com/PrestaShop/user-documentation-landing/pull/147): chore(deps-dev): bump sass from 1.43.3 to 1.43.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#146](https://github.com/PrestaShop/user-documentation-landing/pull/146): fix(deps): bump core-js from 3.18.3 to 3.19.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#145](https://github.com/PrestaShop/user-documentation-landing/pull/145): chore(deps-dev): bump eslint-plugin-nuxt from 1.0.0 to 3.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Wishlist block module
* [#138](https://github.com/PrestaShop/blockwishlist/pull/138): FO: Fix the container issue. Thank you [@hibatallahAouadni](https://github.com/hibatallahAouadni)
* [#136](https://github.com/PrestaShop/blockwishlist/pull/136): Fix wrong class naming in Share.vue. Thank you [@a-pare](https://github.com/a-pare)


### New 8.0.0 Front-office theme
* [#95](https://github.com/PrestaShop/theme-refacto/pull/95): Add number input and product thumbnail slider behavior, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#94](https://github.com/PrestaShop/theme-refacto/pull/94): Do not display unnecessary li tag ( ps_categorytree ). Thank you [@okom3pom](https://github.com/okom3pom)
* [#93](https://github.com/PrestaShop/theme-refacto/pull/93): Fix working HMR for not vhost local environment . Thank you [@Oksydan](https://github.com/Oksydan)


### Main menu module
* [#57](https://github.com/PrestaShop/ps_mainmenu/pull/57): Release 2.3.1, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#56](https://github.com/PrestaShop/ps_mainmenu/pull/56): Do not use hook alias and bump version to 2.3.1, by [@PierreRambaud](https://github.com/PierreRambaud)


### Viewed products block module
* [#22](https://github.com/PrestaShop/ps_viewedproduct/pull/22): Release 1.2.2, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#21](https://github.com/PrestaShop/ps_viewedproduct/pull/21): Bump to 1.2.2, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#20](https://github.com/PrestaShop/ps_viewedproduct/pull/20): Do not use hook alias, by [@PierreRambaud](https://github.com/PierreRambaud)


### The PrestaShop open source project
* [#70](https://github.com/PrestaShop/open-source/pull/70): Update style & add Maintainer's guide, by [@eternoendless](https://github.com/eternoendless)
* [#69](https://github.com/PrestaShop/open-source/pull/69): Fix usergroup ressources . Thank you [@okom3pom](https://github.com/okom3pom)


### Available quantities statistics module
* [#17](https://github.com/PrestaShop/statsstock/pull/17): Update compatibility. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Product Comments module
* [#114](https://github.com/PrestaShop/productcomments/pull/114): Fix GDPR checkbox. Thank you [@okom3pom](https://github.com/okom3pom)


### Contact Form module
* [#57](https://github.com/PrestaShop/contactform/pull/57): Remove PrestaShop Addons Marketplace on configuration page, by [@Matt75](https://github.com/Matt75)


### Custom text module
* [#65](https://github.com/PrestaShop/ps_customtext/pull/65): Adds PHPDoc and refactor bitwise usage, by [@Matt75](https://github.com/Matt75)
* [#64](https://github.com/PrestaShop/ps_customtext/pull/64): Release 4.2.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### Product details statistics module
* [#26](https://github.com/PrestaShop/statsproduct/pull/26): Release 2.1.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### Category tree links module
* [#54](https://github.com/PrestaShop/ps_categorytree/pull/54): Do not display unnecessary li tag. Thank you [@okom3pom](https://github.com/okom3pom)


### Best-selling products statistics module
* [#11](https://github.com/PrestaShop/statsbestproducts/pull/11): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Best categories statistics module
* [#12](https://github.com/PrestaShop/statsbestcategories/pull/12): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Best vouchers statistics module
* [#11](https://github.com/PrestaShop/statsbestvouchers/pull/11): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Stats Dashboard module
* [#20](https://github.com/PrestaShop/statsforecast/pull/20): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Wire payment module
* [#64](https://github.com/PrestaShop/ps_wirepayment/pull/64): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Check payment module
* [#52](https://github.com/PrestaShop/ps_checkpayment/pull/52): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#51](https://github.com/PrestaShop/ps_checkpayment/pull/51): Respect display_taxes_label setting when showing amount. Thank you [@tswfi](https://github.com/tswfi)


### Cash on delivery module
* [#37](https://github.com/PrestaShop/ps_cashondelivery/pull/37): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Dashboard Trends module
* [#46](https://github.com/PrestaShop/dashtrends/pull/46): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#34](https://github.com/PrestaShop/dashtrends/pull/34): Fixed Refunds in Total Sales Calculation, by [@Progi1984](https://github.com/Progi1984)


### Dashboard Products module
* [#35](https://github.com/PrestaShop/dashproducts/pull/35): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#34](https://github.com/PrestaShop/dashproducts/pull/34): Fix bad display in the Dashboard page, by [@khouloudbelguith](https://github.com/khouloudbelguith)


### Email Alerts module
* [#95](https://github.com/PrestaShop/ps_emailalerts/pull/95): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Pages not found module
* [#16](https://github.com/PrestaShop/pagesnotfound/pull/16): Do not use hook top alias, use displayTop, by [@PierreRambaud](https://github.com/PierreRambaud)


### Shopping cart module
* [#79](https://github.com/PrestaShop/ps_shoppingcart/pull/79): Do not use legacy hook header alias , use displayHeader instead, by [@PierreRambaud](https://github.com/PierreRambaud)


### Issues Bot
* [#27](https://github.com/PrestaShop/issuebot/pull/27): Update kanban workflow, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Architecture Decision Records repository
* [#22](https://github.com/PrestaShop/ADR/pull/22): Update 0014-drop-the-no-use-of-legacy-in-new-code-restriction.md, by [@kpodemski](https://github.com/kpodemski)


### Catalog statistics module
* [#17](https://github.com/PrestaShop/statscatalog/pull/17): Release 2.0.2, by [@Progi1984](https://github.com/Progi1984)


### Paymentexample module
* [#11](https://github.com/PrestaShop/paymentexample/pull/11): Do not set use statement, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Webservices PHP Client
* [#43](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/43): Allow price parameter in request URL for price management. Thank you [@matthieume](https://github.com/matthieume)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@jolelievre](https://github.com/jolelievre), [@okom3pom](https://github.com/okom3pom), [@atomiix](https://github.com/atomiix), [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds), [@NeOMakinG](https://github.com/NeOMakinG), [@PierreRambaud](https://github.com/PierreRambaud), [@dependabot[bot]](https://github.com/apps/dependabot), [@eternoendless](https://github.com/eternoendless), [@Progi1984](https://github.com/Progi1984), [@boubkerbribri](https://github.com/boubkerbribri), [@Saimis777](https://github.com/Saimis777), [@hibatallahAouadni](https://github.com/hibatallahAouadni), [@kpodemski](https://github.com/kpodemski), [@Hlavtox](https://github.com/Hlavtox), [@jf-viguier](https://github.com/jf-viguier), [@PululuK](https://github.com/PululuK), [@intraordinaire](https://github.com/intraordinaire), [@Wrenbjor](https://github.com/Wrenbjor), [@Matt75](https://github.com/Matt75), [@marwachelly](https://github.com/marwachelly), [@Oksydan](https://github.com/Oksydan), [@khouloudbelguith](https://github.com/khouloudbelguith), [@a-pare](https://github.com/a-pare), [@Prestaworks](https://github.com/Prestaworks), [@PrestaEdit](https://github.com/PrestaEdit), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@christophe-rouille](https://github.com/christophe-rouille), [@tswfi](https://github.com/tswfi), [@tegbessou](https://github.com/tegbessou), [@matthieu-rolland](https://github.com/matthieu-rolland), [@matks](https://github.com/matks), [@mparvazi](https://github.com/mparvazi), [@Ashley-Butcher](https://github.com/Ashley-Butcher), [@psyray](https://github.com/psyray), [@Sinepel](https://github.com/Sinepel), [@lmeyer1](https://github.com/lmeyer1), [@moncef-essid](https://github.com/moncef-essid), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@matthieume](https://github.com/matthieume)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

