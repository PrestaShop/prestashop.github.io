---
layout: post
aliases: ["/news/coreweekly-26-2020"]
title:  "PrestaShop Core Weekly - Week 26 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-06-29
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 22th to Sunday 28th of June 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

This is it! [PrestaShop eCommerce Week](https://events.prestashop.com/prestashop-ecommerce-week) is happening right now and will continue for 5 days. You can still join us, registration is still open.

In the meantime, work continues on `1.7.7.x` branch to stabilize it, with the goal of a 1st Release Candidate in mind.

In parallel, some Pull Requests have been merged into `1.7.6.x` branch as well because a [1.7.6.6 release](https://github.com/PrestaShop/PrestaShop/issues/19959) is expected soon. More details will be published in the release note.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [72 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-06-22..2020-06-28) have been created in the project repositories;
- [59 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-06-22..2020-06-28), including [24 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-06-22..2020-06-28) on the core;
- [66 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-06-22..2020-06-28) in the project repositories;
- [83 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-06-22..2020-06-28), including [70 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-06-22..2020-06-28).



## Code changes in the 'develop' branch


### Core
* [#19837](https://github.com/PrestaShop/PrestaShop/pull/19837): Use the appropriate exception in BulkToggleLanguagesStatusCommand. Thank you [@PululuK](https://github.com/PululuK)
* [#19780](https://github.com/PrestaShop/PrestaShop/pull/19780): Code issues : Avoid code duplicate. Thank you [@PululuK](https://github.com/PululuK)
* [#19647](https://github.com/PrestaShop/PrestaShop/pull/19647): Added the actionPresentProductListing hook. Thank you [@stijnvergote](https://github.com/stijnvergote)


### Back office
* [#19938](https://github.com/PrestaShop/PrestaShop/pull/19938): Adjust UpdatePack command to be able to remove items. Thank you [@zuk3975](https://github.com/zuk3975)
* [#19923](https://github.com/PrestaShop/PrestaShop/pull/19923): Removed AdminCategoryControllerWrapper, by [@Progi1984](https://github.com/Progi1984)
* [#19865](https://github.com/PrestaShop/PrestaShop/pull/19865): Handle 'no combination' specific price submit, by [@matks](https://github.com/matks)
* [#19831](https://github.com/PrestaShop/PrestaShop/pull/19831): When new webservice key is created, add log. Thank you [@ksaandev](https://github.com/ksaandev)
* [#19827](https://github.com/PrestaShop/PrestaShop/pull/19827): UpdateProductPackCommand. Thank you [@zuk3975](https://github.com/zuk3975)
* [#19738](https://github.com/PrestaShop/PrestaShop/pull/19738): Fixes the import configuration save on BO. Thank you [@joemugen](https://github.com/joemugen)
* [#19692](https://github.com/PrestaShop/PrestaShop/pull/19692): Access denied admin tabs. Thank you [@HamzaElghanoui](https://github.com/HamzaElghanoui)
* [#19660](https://github.com/PrestaShop/PrestaShop/pull/19660): Missing SQL for the update process. Thank you [@HamzaElghanoui](https://github.com/HamzaElghanoui)
* [#18981](https://github.com/PrestaShop/PrestaShop/pull/18981): Improve adresses block in customer BO page. Thank you [@PululuK](https://github.com/PululuK)


### Front office
* [#19762](https://github.com/PrestaShop/PrestaShop/pull/19762): FO: Refresh checkout hook. Thank you [@idnovate](https://github.com/idnovate)
* [#19756](https://github.com/PrestaShop/PrestaShop/pull/19756): Change material font in order to add new icons, by [@NeOMakinG](https://github.com/NeOMakinG)


### Installer
* [#19744](https://github.com/PrestaShop/PrestaShop/pull/19744): Check if the module exists on Addons, by [@Progi1984](https://github.com/Progi1984)


### Tests
* [#19908](https://github.com/PrestaShop/PrestaShop/pull/19908): Functional tests - Add ids to export buttons and links, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19899](https://github.com/PrestaShop/PrestaShop/pull/19899): Functional tests - Add class to clickable element 'i' in grid header select all, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19888](https://github.com/PrestaShop/PrestaShop/pull/19888): Functional tests - Add edit action name to grids, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19870](https://github.com/PrestaShop/PrestaShop/pull/19870): Functional tests - Add id to save forms buttons in order pages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19868](https://github.com/PrestaShop/PrestaShop/pull/19868): Functional tests - Add id to save forms buttons, by [@boubkerbribri](https://github.com/boubkerbribri)


### Merge
* [#19926](https://github.com/PrestaShop/PrestaShop/pull/19926): Merge 177 into develop - 24/06/20, by [@jolelievre](https://github.com/jolelievre)


## Code changes in the '1.7.7.x' branch


### Core
* [#19944](https://github.com/PrestaShop/PrestaShop/pull/19944): Deprecate constants that are no longer used, by [@eternoendless](https://github.com/eternoendless)
* [#18532](https://github.com/PrestaShop/PrestaShop/pull/18532): Increase precision for DECIMAL fields in database, by [@atomiix](https://github.com/atomiix)


### Back office
* [#19955](https://github.com/PrestaShop/PrestaShop/pull/19955): Rename AddCustomizationFieldsCommand to AddCustomizationCommand. Thank you [@zuk3975](https://github.com/zuk3975)
* [#19903](https://github.com/PrestaShop/PrestaShop/pull/19903): Auto create symfony roles, by [@jolelievre](https://github.com/jolelievre)
* [#19828](https://github.com/PrestaShop/PrestaShop/pull/19828): Check for ::GRID_ID when definition is AbstractGridDefinitionFactory, by [@atomiix](https://github.com/atomiix)
* [#19778](https://github.com/PrestaShop/PrestaShop/pull/19778): Cast changelogs to array for twig, by [@atomiix](https://github.com/atomiix)
* [#19646](https://github.com/PrestaShop/PrestaShop/pull/19646): Synchronize cart_product and order_detail when quantity is changed, by [@sowbiba](https://github.com/sowbiba)


### Front office
* [#19896](https://github.com/PrestaShop/PrestaShop/pull/19896): Fix lang dropdown by adding jquery migrate, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#19706](https://github.com/PrestaShop/PrestaShop/pull/19706): Don't try to translate using domain unless the "d" parameter is present, by [@eternoendless](https://github.com/eternoendless)
* [#19631](https://github.com/PrestaShop/PrestaShop/pull/19631): FO: fix cumulative percentage reduction amount value in cart , by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Installer
* [#19887](https://github.com/PrestaShop/PrestaShop/pull/19887): Add missing comma, by [@atomiix](https://github.com/atomiix)


### Tests
* [#19920](https://github.com/PrestaShop/PrestaShop/pull/19920): Functional tests - Wait for neworkidle in wait for navigation function, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19785](https://github.com/PrestaShop/PrestaShop/pull/19785): Functional tests - Delete unused selectors and methods. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.6.x' branch


### Core
* [#19943](https://github.com/PrestaShop/PrestaShop/pull/19943): Update Composer dependencies and prestashop module versions, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#19942](https://github.com/PrestaShop/PrestaShop/pull/19942): Cast changelogs to array for twig - Backport of #19778, by [@atomiix](https://github.com/atomiix)
* [#19814](https://github.com/PrestaShop/PrestaShop/pull/19814): Change buttons in modal bulk of module page to avoid black color, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#19800](https://github.com/PrestaShop/PrestaShop/pull/19800): Add a new selector in order to select the product page more precisly, by [@NeOMakinG](https://github.com/NeOMakinG)


### Web services
* [#18969](https://github.com/PrestaShop/PrestaShop/pull/18969): Make api backward compatible for Currencies, by [@atomiix](https://github.com/atomiix)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#605](https://github.com/PrestaShop/docs/pull/605): Remove broken links. Thank you [@zalexki](https://github.com/zalexki)
* [#600](https://github.com/PrestaShop/docs/pull/600): Provide example of breaking changes about jQuery update, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#599](https://github.com/PrestaShop/docs/pull/599): Update index.php example to conform to style-guide. Thank you [@smoucka](https://github.com/smoucka)
* [#598](https://github.com/PrestaShop/docs/pull/598): Correct path to load Module twig. Thank you [@camlafit](https://github.com/camlafit)
* [#593](https://github.com/PrestaShop/docs/pull/593): Update create user SQL query. Thank you [@shef-er](https://github.com/shef-er)
* [#592](https://github.com/PrestaShop/docs/pull/592): Add Travis badge into README, by [@matks](https://github.com/matks)
* [#586](https://github.com/PrestaShop/docs/pull/586): updateAddressForm is incorrect. Thank you [@muyncky](https://github.com/muyncky)
* [#573](https://github.com/PrestaShop/docs/pull/573): Add doc about the new tabs features, by [@jolelievre](https://github.com/jolelievre)


### Language selector module
* [#20](https://github.com/PrestaShop/ps_languageselector/pull/20): Release 2.1.0, by [@Progi1984](https://github.com/Progi1984)
* [#19](https://github.com/PrestaShop/ps_languageselector/pull/19): Bump version to 2.1.0 and Improve project, by [@Progi1984](https://github.com/Progi1984)


### Wishlist module
* [#41](https://github.com/PrestaShop/blockwishlist/pull/41): Setup search provider and controller, by [@Matt75](https://github.com/Matt75)
* [#39](https://github.com/PrestaShop/blockwishlist/pull/39): Add share wishlist functionality, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#37](https://github.com/PrestaShop/blockwishlist/pull/37): Wishlist controller. Thank you [@pablopolyte](https://github.com/pablopolyte)


### Google Sitemap module
* [#140](https://github.com/PrestaShop/gsitemap/pull/140): Add badges into README, by [@matks](https://github.com/matks)
* [#139](https://github.com/PrestaShop/gsitemap/pull/139): Release 4.2.0, by [@Progi1984](https://github.com/Progi1984)


### Example modules
* [#21](https://github.com/PrestaShop/example-modules/pull/21): Add Demo Controller Tabs module, by [@jolelievre](https://github.com/jolelievre)


### Link list module
* [#98](https://github.com/PrestaShop/ps_linklist/pull/98): Update release-drafter template, by [@matks](https://github.com/matks)


### Email subscription module
* [#63](https://github.com/PrestaShop/ps_emailsubscription/pull/63): Add badges into README, by [@matks](https://github.com/matks)


### Customer reassurance module
* [#46](https://github.com/PrestaShop/blockreassurance/pull/46): Add badges, by [@matks](https://github.com/matks)


### Main menu module
* [#34](https://github.com/PrestaShop/ps_mainmenu/pull/34): Bump version to 2.2.0 and Improve Project, by [@Progi1984](https://github.com/Progi1984)


### Faceted search module
* [#176](https://github.com/PrestaShop/ps_facetedsearch/pull/176): Add badges to README, by [@matks](https://github.com/matks)


### Wire payment module
* [#53](https://github.com/PrestaShop/ps_wirepayment/pull/53): Release 2.1.0, by [@Progi1984](https://github.com/Progi1984)


### Product Comments module
* [#57](https://github.com/PrestaShop/productcomments/pull/57): Fix unescaped string, by [@eternoendless](https://github.com/eternoendless)


### LocalizationFiles
* [#4](https://github.com/PrestaShop/LocalizationFiles/pull/4): Update German tax rates, by [@LouiseBonnard](https://github.com/LouiseBonnard)


### Share Buttons module
* [#40](https://github.com/PrestaShop/ps_sharebuttons/pull/40): Useless cache in module. Thank you [@kpodemski](https://github.com/kpodemski)


### Watermark module
* [#21](https://github.com/PrestaShop/watermark/pull/21): Add dynamically resize watermark for large file. Thank you [@symbwell](https://github.com/symbwell)


### Prestashop UI Kit
* [#61](https://github.com/PrestaShop/prestashop-ui-kit/pull/61): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Carrier comparison module
* [#11](https://github.com/PrestaShop/ps_carriercomparison/pull/11): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@zalexki](https://github.com/zalexki), [@zuk3975](https://github.com/zuk3975), [@eternoendless](https://github.com/eternoendless), [@PierreRambaud](https://github.com/PierreRambaud), [@atomiix](https://github.com/atomiix), [@Progi1984](https://github.com/Progi1984), [@jolelievre](https://github.com/jolelievre), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@boubkerbribri](https://github.com/boubkerbribri), [@smoucka](https://github.com/smoucka), [@camlafit](https://github.com/camlafit), [@Matt75](https://github.com/Matt75), [@matks](https://github.com/matks), [@NeOMakinG](https://github.com/NeOMakinG), [@shef-er](https://github.com/shef-er), [@muyncky](https://github.com/muyncky), [@PululuK](https://github.com/PululuK), [@ksaandev](https://github.com/ksaandev), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@idnovate](https://github.com/idnovate), [@joemugen](https://github.com/joemugen), [@LouiseBonnard](https://github.com/LouiseBonnard), [@HamzaElghanoui](https://github.com/HamzaElghanoui), [@stijnvergote](https://github.com/stijnvergote), [@sowbiba](https://github.com/sowbiba), [@matthieu-rolland](https://github.com/matthieu-rolland), [@pablopolyte](https://github.com/pablopolyte), [@kpodemski](https://github.com/kpodemski), [@symbwell](https://github.com/symbwell), [@MathiasReker](https://github.com/MathiasReker)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

