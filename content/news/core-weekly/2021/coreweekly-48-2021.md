---
layout: post
aliases: ["/news/coreweekly-48-2021"]
title:  "PrestaShop Core Weekly - Week 48 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-12-06
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 29th of November to Sunday 5th of December 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## Releases

* [PHP Developer Tools](https://github.com/PrestaShop/php-dev-tools): [v4.2.1](https://github.com/PrestaShop/php-dev-tools/releases/tag/v4.2.1)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [62 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-11-29..2021-12-05) have been created in the project repositories;
- [53 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-11-29..2021-12-05), including [5 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-11-29..2021-12-05) on the core;
- [90 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-11-29..2021-12-05) in the project repositories;
- [114 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-11-29..2021-12-05), including [77 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-11-29..2021-12-05).



## Code changes in the 'develop' branch


### Core
* [#26799](https://github.com/PrestaShop/PrestaShop/pull/26799): Remove duplicate files and remove line-length for yamllint, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#26770](https://github.com/PrestaShop/PrestaShop/pull/26770): PHPStan (Level 1) on controllers/, by [@Progi1984](https://github.com/Progi1984)
* [#26744](https://github.com/PrestaShop/PrestaShop/pull/26744): PHPStan (Level 5) on js/, by [@Progi1984](https://github.com/Progi1984)
* [#26769](https://github.com/PrestaShop/PrestaShop/pull/26769): Fix docker setup for shared volumes. Thank you [@SharakPL](https://github.com/SharakPL)
* [#26685](https://github.com/PrestaShop/PrestaShop/pull/26685): Remove Order::$shipping_number, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#26683](https://github.com/PrestaShop/PrestaShop/pull/26683): `Order::$total_paid_real` is not deprecated and used in the new Order page, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#26681](https://github.com/PrestaShop/PrestaShop/pull/26681): Remove Tools::jsonEncode and Tools::jsonDecode, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#25919](https://github.com/PrestaShop/PrestaShop/pull/25919): Replace Shudrum ArrayFinder usage by Symfony ArrayFinder in PhpParameters, by [@matks](https://github.com/matks)


### Back office
* [#26836](https://github.com/PrestaShop/PrestaShop/pull/26836): Move StockController into Admin/Sell/Catalog/, by [@eternoendless](https://github.com/eternoendless)
* [#26805](https://github.com/PrestaShop/PrestaShop/pull/26805): Fixed the error "The message body is empty" in AdminCustomerThreadsController.php. Thank you [@okom3pom](https://github.com/okom3pom)
* [#26561](https://github.com/PrestaShop/PrestaShop/pull/26561): Don't encode quotes in column name filter value. Thank you [@yo7hli](https://github.com/yo7hli)
* [#26063](https://github.com/PrestaShop/PrestaShop/pull/26063): Clean Back-office templates, part 4 - catalog. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#26064](https://github.com/PrestaShop/PrestaShop/pull/26064): Clean Back-office templates, part 5 - orders. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#25750](https://github.com/PrestaShop/PrestaShop/pull/25750): Migrate router, store and mixin files of stock page to TypeScript, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#25091](https://github.com/PrestaShop/PrestaShop/pull/25091): Display customer group when searching for a customer. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#24357](https://github.com/PrestaShop/PrestaShop/pull/24357): Add order_reference to PaymentModule::validateOrder. Thank you [@viglu](https://github.com/viglu)


### Installer
* [#26848](https://github.com/PrestaShop/PrestaShop/pull/26848): Installer : Remove dead code in installer (Upload Logo), by [@Progi1984](https://github.com/Progi1984)
* [#26819](https://github.com/PrestaShop/PrestaShop/pull/26819): PHPStan (Level 5) on install-dev/, by [@Progi1984](https://github.com/Progi1984)
* [#26591](https://github.com/PrestaShop/PrestaShop/pull/26591): Fix wording in the installer, by [@kpodemski](https://github.com/kpodemski)


### Tests
* [#26790](https://github.com/PrestaShop/PrestaShop/pull/26790): Fix nightly 25-11-21 - Delete check the footer link 'Vouchers' from check links in footer test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#26359](https://github.com/PrestaShop/PrestaShop/pull/26359): Functional tests - Add new test 'Check status tab from view order page'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Core
* [#26699](https://github.com/PrestaShop/PrestaShop/pull/26699): Add missing parameter in RenderingHookEvent, by [@atomiix](https://github.com/atomiix)


### Front office
* [#26823](https://github.com/PrestaShop/PrestaShop/pull/26823): Fix listing classes when using facetedsearch, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#26798](https://github.com/PrestaShop/PrestaShop/pull/26798): Replaces the new product flag in the product flags by new. Thank you [@WebHelpersPau](https://github.com/WebHelpersPau)


## Code changes in modules, themes & tools


### TranslationTools Bundle
* [#104](https://github.com/PrestaShop/TranslationToolsBundle/pull/104): Move php-cs-fixer to dev requirements, by [@sowbiba](https://github.com/sowbiba)
* [#103](https://github.com/PrestaShop/TranslationToolsBundle/pull/103): Add ability to exclude directories when extracting, by [@sowbiba](https://github.com/sowbiba)


### New Front-office theme
* [#131](https://github.com/PrestaShop/theme-refacto/pull/131): Backport review from rod and fix some wrong variables, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#130](https://github.com/PrestaShop/theme-refacto/pull/130): First aproach to cart mockup. Thank you [@rodriciru](https://github.com/rodriciru)
* [#128](https://github.com/PrestaShop/theme-refacto/pull/128): Slider home ratio. Thank you [@rodriciru](https://github.com/rodriciru)
* [#124](https://github.com/PrestaShop/theme-refacto/pull/124): Refactor of layout, my account, addresses, contact. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#121](https://github.com/PrestaShop/theme-refacto/pull/121): Bump stylelint fixes variables and switch from node-sass to sass. Thank you [@rodriciru](https://github.com/rodriciru)


### Product Comments module
* [#119](https://github.com/PrestaShop/productcomments/pull/119): Use quickview with the  hook `displayGDPRConsent`, by [@Progi1984](https://github.com/Progi1984)
* [#118](https://github.com/PrestaShop/productcomments/pull/118): Release 5.0.0, by [@Progi1984](https://github.com/Progi1984)


### Customer reassurance block module
* [#317](https://github.com/PrestaShop/blockreassurance/pull/317): Bump webpack from 5.64.3 to 5.64.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#306](https://github.com/PrestaShop/blockreassurance/pull/306): Remove addons suggestion of module configuration. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### PHP Developer Tools
* [#67](https://github.com/PrestaShop/php-dev-tools/pull/67): Fix Phpstan on CsFixer config file. Thank you [@intraordinaire](https://github.com/intraordinaire)


### Issues Bot
* [#31](https://github.com/PrestaShop/issuebot/pull/31): Take kanban 1.7.8.3 into account, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### User documentation landing page
* [#162](https://github.com/PrestaShop/user-documentation-landing/pull/162): chore(deps-dev): bump babel-jest from 27.4.0 to 27.4.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#161](https://github.com/PrestaShop/user-documentation-landing/pull/161): chore(deps-dev): bump sass from 1.43.5 to 1.44.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#160](https://github.com/PrestaShop/user-documentation-landing/pull/160): fix(deps): bump core-js from 3.19.1 to 3.19.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#159](https://github.com/PrestaShop/user-documentation-landing/pull/159): chore(deps-dev): bump babel-jest from 27.3.1 to 27.4.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#158](https://github.com/PrestaShop/user-documentation-landing/pull/158): fix(deps): bump actions/setup-node from 2.4.1 to 2.5.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#157](https://github.com/PrestaShop/user-documentation-landing/pull/157): chore(deps-dev): bump eslint-plugin-nuxt from 3.0.0 to 3.1.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#156](https://github.com/PrestaShop/user-documentation-landing/pull/156): chore(deps-dev): bump prettier from 2.4.1 to 2.5.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#155](https://github.com/PrestaShop/user-documentation-landing/pull/155): chore(deps-dev): bump sass from 1.43.4 to 1.43.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation sources
* [#1235](https://github.com/PrestaShop/docs/pull/1235): Fix syntax error in relref. Thank you [@abramofranchetti](https://github.com/abramofranchetti)
* [#1234](https://github.com/PrestaShop/docs/pull/1234): document how to run only part of phpunit tests. Thank you [@tswfi](https://github.com/tswfi)
* [#1232](https://github.com/PrestaShop/docs/pull/1232): Fix the command-line to launch the test suite. Thank you [@jak78](https://github.com/jak78)


### The PrestaShop open source project
* [#71](https://github.com/PrestaShop/open-source/pull/71): Make it clear to click on release steps, by [@matks](https://github.com/matks)


### PrestaShop Specifications
* [#268](https://github.com/PrestaShop/prestashop-specs/pull/268): Tags specs. Thank you [@Saimis777](https://github.com/Saimis777)


### Architecture Decision Records repository
* [#23](https://github.com/PrestaShop/ADR/pull/23): 0014 - Drop the "No Use Of Legacy In New Code" restriction, by [@eternoendless](https://github.com/eternoendless)


### MJML Theme Converter
* [#14](https://github.com/PrestaShop/mjml-theme-converter/pull/14): Fix conversion. Thank you [@lmeyer1](https://github.com/lmeyer1)


### Faceted search module
* [#562](https://github.com/PrestaShop/ps_facetedsearch/pull/562): Bump webpack from 5.64.3 to 5.64.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


## Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1 by @dependabot

### OnBoarding module
* [#134](https://github.com/PrestaShop/welcome/pull/134): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Main menu module
* [#59](https://github.com/PrestaShop/ps_mainmenu/pull/59): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Product Comments module
* [#120](https://github.com/PrestaShop/productcomments/pull/120): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Email subscription module
* [#85](https://github.com/PrestaShop/ps_emailsubscription/pull/85): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Language selector module
* [#26](https://github.com/PrestaShop/ps_languageselector/pull/26): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### GDPR module
* [#153](https://github.com/PrestaShop/psgdpr/pull/153): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Links list module
* [#140](https://github.com/PrestaShop/ps_linklist/pull/140): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Customer data privacy block module
* [#33](https://github.com/PrestaShop/ps_dataprivacy/pull/33): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Simple HTML table display module
* [#27](https://github.com/PrestaShop/gridhtml/pull/27): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Search Bar module
* [#42](https://github.com/PrestaShop/ps_searchbar/pull/42): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Category tree links module
* [#55](https://github.com/PrestaShop/ps_categorytree/pull/55): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Shopping cart module
* [#80](https://github.com/PrestaShop/ps_shoppingcart/pull/80): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Customer account links module
* [#36](https://github.com/PrestaShop/ps_customeraccountlinks/pull/36): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Customer reassurance block module
* [#320](https://github.com/PrestaShop/blockreassurance/pull/320): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Dashboard Trends module
* [#47](https://github.com/PrestaShop/dashtrends/pull/47): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Custom text module
* [#66](https://github.com/PrestaShop/ps_customtext/pull/66): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Faceted search module
* [#563](https://github.com/PrestaShop/ps_facetedsearch/pull/563): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Image slider module
* [#65](https://github.com/PrestaShop/ps_imageslider/pull/65): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Check payment module
* [#53](https://github.com/PrestaShop/ps_checkpayment/pull/53): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Customer "Sign in" link module
* [#41](https://github.com/PrestaShop/ps_customersignin/pull/41): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Order Notifications on the Favicon module
* [#33](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/33): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)

### Featured products module
* [#41](https://github.com/PrestaShop/ps_featuredproducts/pull/41): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@sowbiba](https://github.com/sowbiba), [@Progi1984](https://github.com/Progi1984), [@NeOMakinG](https://github.com/NeOMakinG), [@eternoendless](https://github.com/eternoendless), [@rodriciru](https://github.com/rodriciru), [@dependabot[bot]](https://github.com/apps/dependabot), [@intraordinaire](https://github.com/intraordinaire), [@matthieu-rolland](https://github.com/matthieu-rolland), [@okom3pom](https://github.com/okom3pom), [@PierreRambaud](https://github.com/PierreRambaud), [@WebHelpersPau](https://github.com/WebHelpersPau), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@SharakPL](https://github.com/SharakPL), [@Hlavtox](https://github.com/Hlavtox), [@abramofranchetti](https://github.com/abramofranchetti), [@tswfi](https://github.com/tswfi), [@jak78](https://github.com/jak78), [@matks](https://github.com/matks), [@atomiix](https://github.com/atomiix), [@Saimis777](https://github.com/Saimis777), [@kpodemski](https://github.com/kpodemski), [@yo7hli](https://github.com/yo7hli), [@PrestaEdit](https://github.com/PrestaEdit), [@lmeyer1](https://github.com/lmeyer1), [@viglu](https://github.com/viglu)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

