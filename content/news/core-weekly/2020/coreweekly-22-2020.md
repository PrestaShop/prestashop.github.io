---
layout: post
aliases: ["/news/coreweekly-22-2020"]
title:  "PrestaShop Core Weekly - Week 22 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-06-04 10:14:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 25th to Sunday 31st of May 2020.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [160 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-05-25..2020-05-31) have been created in the project repositories;
- [63 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-05-25..2020-05-31), including [21 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-05-25..2020-05-31) on the core;
- [77 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-05-25..2020-05-31) in the project repositories;
- [106 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-05-25..2020-05-31), including [87 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-05-25..2020-05-31).
        


## Code changes in the 'develop' branch


### Core
* [#19450](https://github.com/PrestaShop/PrestaShop/pull/19450): Add phpdoc for throws - Link, by [@Matt75](https://github.com/Matt75)
* [#19449](https://github.com/PrestaShop/PrestaShop/pull/19449): Validate lengths of fields submitted from addresse form. Thank you [@PululuK](https://github.com/PululuK)
* [#19343](https://github.com/PrestaShop/PrestaShop/pull/19343): Fix minor code issue in BulkDeleteAttachmentsException. Thank you [@PululuK](https://github.com/PululuK)
* [#18992](https://github.com/PrestaShop/PrestaShop/pull/18992): Improve prestashop.core.query_bus service to use parent. Thank you [@PululuK](https://github.com/PululuK)
* [#17046](https://github.com/PrestaShop/PrestaShop/pull/17046): Make Mbstring extension required, by [@eternoendless](https://github.com/eternoendless)


### Back office
* [#19402](https://github.com/PrestaShop/PrestaShop/pull/19402): Rename and deprecate confusing method in classes/Configuration.php. Thank you [@zuk3975](https://github.com/zuk3975)
* [#19361](https://github.com/PrestaShop/PrestaShop/pull/19361): Fixed the SMTP Configuration Toggler, by [@Progi1984](https://github.com/Progi1984)
* [#19338](https://github.com/PrestaShop/PrestaShop/pull/19338): Fix options in CustomerAddressType. Thank you [@zuk3975](https://github.com/zuk3975)
* [#19216](https://github.com/PrestaShop/PrestaShop/pull/19216): Fix to show the Modules tab in the product editor. Thank you [@Rolige](https://github.com/Rolige)
* [#19037](https://github.com/PrestaShop/PrestaShop/pull/19037): Fixed BackOffice Notification when Settings disable it, by [@Progi1984](https://github.com/Progi1984)
* [#18399](https://github.com/PrestaShop/PrestaShop/pull/18399): Fix create order customers not being rendered, by [@atomiix](https://github.com/atomiix)


### Front office
* [#19434](https://github.com/PrestaShop/PrestaShop/pull/19434): Fix : "update address" page title is changed when an error is triggered. Thank you [@PululuK](https://github.com/PululuK)
* [#19395](https://github.com/PrestaShop/PrestaShop/pull/19395): Return 404 in frontoffice if return merchandise is disabed. Thank you [@clotaire202](https://github.com/clotaire202)
* [#19392](https://github.com/PrestaShop/PrestaShop/pull/19392): Remove useless variable and fix typo. Thank you [@ksaandev](https://github.com/ksaandev)
* [#19391](https://github.com/PrestaShop/PrestaShop/pull/19391): Remove useless variable from FromController::init(). Thank you [@ksaandev](https://github.com/ksaandev)
* [#19298](https://github.com/PrestaShop/PrestaShop/pull/19298): Add missing breadcrumb links in order pages: confirmation/return/follow, cart and addresses pages. Thank you [@nprokopenko202](https://github.com/nprokopenko202)
* [#18739](https://github.com/PrestaShop/PrestaShop/pull/18739): Add a condition to avoid currency name repeat, by [@NeOMakinG](https://github.com/NeOMakinG)


### Web services
* [#19390](https://github.com/PrestaShop/PrestaShop/pull/19390): Small improvements for WebserviceRequest class, by [@matks](https://github.com/matks)
* [#19389](https://github.com/PrestaShop/PrestaShop/pull/19389): Extract SQL logic from WebserviceRequest to unit test it, by [@matks](https://github.com/matks)


### Tests
* [#19411](https://github.com/PrestaShop/PrestaShop/pull/19411): Functional tests - Using only symbol to select currency in FO, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19275](https://github.com/PrestaShop/PrestaShop/pull/19275): Functional tests - Update linkchecker, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19270](https://github.com/PrestaShop/PrestaShop/pull/19270): Functional tests - Fix display footer hook id, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19268](https://github.com/PrestaShop/PrestaShop/pull/19268): Functional test - Fix Sql queries tests, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.7.x' branch


### Core
* [#19409](https://github.com/PrestaShop/PrestaShop/pull/19409): Add missing index.php in upload directory, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#19452](https://github.com/PrestaShop/PrestaShop/pull/19452): Backport 19216 to 1.7.7.x, by [@matks](https://github.com/matks)
* [#18875](https://github.com/PrestaShop/PrestaShop/pull/18875): BO - Create Order page - Defined the order status relative to payment, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#19347](https://github.com/PrestaShop/PrestaShop/pull/19347): Use Country from global namespace. Thank you [@prestamodule](https://github.com/prestamodule)
* [#17502](https://github.com/PrestaShop/PrestaShop/pull/17502): Fix cart voucher values in cart summary and checkout summary. Thank you [@arouiadib](https://github.com/arouiadib)


### Installer
* [#19274](https://github.com/PrestaShop/PrestaShop/pull/19274): Add a missing comma in 1.7.7.0 upgrade file, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Tests
* [#19339](https://github.com/PrestaShop/PrestaShop/pull/19339): Functional tests - Update tests contexts, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19257](https://github.com/PrestaShop/PrestaShop/pull/19257): Functional tests - Delete bo base page shop params tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19235](https://github.com/PrestaShop/PrestaShop/pull/19235): Functional tests - Test pagination and sort of pages and categories. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19208](https://github.com/PrestaShop/PrestaShop/pull/19208): Functional tests - Test pagination of suppliers table. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Image slider
* [#50](https://github.com/PrestaShop/ps_imageslider/pull/50): Update version to 3.1.0 & Some Project Improvements , by [@Progi1984](https://github.com/Progi1984)
* [#23](https://github.com/PrestaShop/ps_imageslider/pull/23): BO: Fixed position with new slide and remove check on non present input position. Thank you [@beyondsagency](https://github.com/beyondsagency)


### QA nightly results
* [#41](https://github.com/PrestaShop/QANightlyResults/pull/41): update schema to be up to date, by [@SimonGrn](https://github.com/SimonGrn)
* [#40](https://github.com/PrestaShop/QANightlyResults/pull/40): Update database version, by [@SimonGrn](https://github.com/SimonGrn)
* [#39](https://github.com/PrestaShop/QANightlyResults/pull/39): Variability count now uses browser and campaign too, by [@SimonGrn](https://github.com/SimonGrn)


### Email Alerts module
* [#53](https://github.com/PrestaShop/ps_emailalerts/pull/53): Rebase master in dev for merging, by [@Progi1984](https://github.com/Progi1984)
* [#52](https://github.com/PrestaShop/ps_emailalerts/pull/52): Update version to 2.2.0 & Some Project Improvements, by [@Progi1984](https://github.com/Progi1984)
* [#43](https://github.com/PrestaShop/ps_emailalerts/pull/43): Improve account template. Thank you [@micka-fdz](https://github.com/micka-fdz)


### Google Ads
* [#14](https://github.com/PrestaShop/gadwords/pull/14): Update version to 2.0.2 & Some Project Improvements , by [@Progi1984](https://github.com/Progi1984)
* [#12](https://github.com/PrestaShop/gadwords/pull/12): Minor update of wording, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#10](https://github.com/PrestaShop/gadwords/pull/10): Update translations, by [@apacios](https://github.com/apacios)


### Core Weekly Generator tool
* [#35](https://github.com/PrestaShop/core-weekly-generator/pull/35): Add small basic test as GA, by [@matks](https://github.com/matks)
* [#32](https://github.com/PrestaShop/core-weekly-generator/pull/32): Add modules and tools to the list, by [@ttoine](https://github.com/ttoine)


### Live translation
* [#8](https://github.com/PrestaShop/ps_livetranslation/pull/8): Update license headers, by [@Progi1984](https://github.com/Progi1984)
* [#6](https://github.com/PrestaShop/ps_livetranslation/pull/6): Update version to 1.0.4 & Some Project Improvements, by [@Progi1984](https://github.com/Progi1984)
* [#3](https://github.com/PrestaShop/ps_livetranslation/pull/3): Update ps_livetranslation Readme.md. Thank you [@AlexEven](https://github.com/AlexEven)


### PrestaShop contributors website
* [#14](https://github.com/PrestaShop/TopContributors/pull/14): Fix arguments for Traces (Username & Password), by [@Progi1984](https://github.com/Progi1984)


### PHP Developer Tools
* [#24](https://github.com/PrestaShop/php-dev-tools/pull/24): Add an error formatter for GitHub actions annotations, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### LocalizationFiles
* [#2](https://github.com/PrestaShop/LocalizationFiles/pull/2): Add Swahili language, by [@Progi1984](https://github.com/Progi1984)
* [#1](https://github.com/PrestaShop/LocalizationFiles/pull/1): Port updates from develop branch (as of 2020-05-13), by [@eternoendless](https://github.com/eternoendless)


### PrestaShop Virtual Machine
* [#6](https://github.com/PrestaShop/vagrant/pull/6): Add fixtures, by [@SimonGrn](https://github.com/SimonGrn)


### Translation Files repository
* [#10](https://github.com/PrestaShop/TranslationFiles/pull/10): Add Kurdish, by [@Progi1984](https://github.com/Progi1984)
* [#9](https://github.com/PrestaShop/TranslationFiles/pull/9): Add translations files for 1.7.8, by [@Progi1984](https://github.com/Progi1984)


### Changes in developer documentation
* [#544](https://github.com/PrestaShop/docs/pull/544): Product form documentation, by [@jolelievre](https://github.com/jolelievre)
* [#543](https://github.com/PrestaShop/docs/pull/543): Fix minor mistakes in contribution guidelines, by [@eternoendless](https://github.com/eternoendless)
* [#542](https://github.com/PrestaShop/docs/pull/542): Add notice warning for webservice usage, by [@matks](https://github.com/matks)


### TranslationTools Bundle
* [#77](https://github.com/PrestaShop/TranslationToolsBundle/pull/77): Add CONTRIBUTORS file, fix composer.json, by [@matks](https://github.com/matks)


### The PrestaShop open source project
* [#38](https://github.com/PrestaShop/open-source/pull/38): Adding #community-help slack channel, by [@ttoine](https://github.com/ttoine)


### PrestaShop Specifications
* [#121](https://github.com/PrestaShop/prestashop-specs/pull/121): Clean an reorganize the repo. Thank you [@sam-pires](https://github.com/sam-pires)
* [#119](https://github.com/PrestaShop/prestashop-specs/pull/119): Create multistore specs for ps_linklist, by [@marionf](https://github.com/marionf)
* [#101](https://github.com/PrestaShop/prestashop-specs/pull/101): Create Create new order.md. Thank you [@MatShir](https://github.com/MatShir)
* [#95](https://github.com/PrestaShop/prestashop-specs/pull/95): Submit improvements, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#87](https://github.com/PrestaShop/prestashop-specs/pull/87): Create catalog-products-listing.md, by [@marionf](https://github.com/marionf)


### Registered customer information
* [#6](https://github.com/PrestaShop/statspersonalinfos/pull/6): Release 2.0.3, by [@Progi1984](https://github.com/Progi1984)
* [#5](https://github.com/PrestaShop/statspersonalinfos/pull/5): Fix age data with birthday 0000-00-00 and empty currency label, by [@Matt75](https://github.com/Matt75)


### Gamification module
* [#73](https://github.com/PrestaShop/gamification/pull/73): Rename function name to avoid conflicts, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Traces
* [#9](https://github.com/PrestaShop/traces/pull/9): Changed arguments for username & password in options, by [@Progi1984](https://github.com/Progi1984)


### example_module_mailtheme
* [#6](https://github.com/PrestaShop/example_module_mailtheme/pull/6): Bump jquery from 3.4.1 to 3.5.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#5](https://github.com/PrestaShop/example_module_mailtheme/pull/5): Bump acorn from 6.1.1 to 6.4.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#4](https://github.com/PrestaShop/example_module_mailtheme/pull/4): Bump lodash from 4.17.11 to 4.17.15. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Currency selector
* [#17](https://github.com/PrestaShop/ps_currencyselector/pull/17): Add condition to avoid duplicate currency name, by [@NeOMakinG](https://github.com/NeOMakinG)


### Contact informations module
* [#32](https://github.com/PrestaShop/ps_contactinfo/pull/32): Fixed uninitialized string offset bug. Thank you [@joaolago1113](https://github.com/joaolago1113)


### Buy button lite
* [#32](https://github.com/PrestaShop/ps_buybuttonlite/pull/32): Bump lodash.defaultsdeep from 4.6.0 to 4.6.1 in /app. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#31](https://github.com/PrestaShop/ps_buybuttonlite/pull/31): Bump lodash.mergewith from 4.6.1 to 4.6.2 in /app. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#30](https://github.com/PrestaShop/ps_buybuttonlite/pull/30): Bump lodash from 4.17.10 to 4.17.15 in /app. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#29](https://github.com/PrestaShop/ps_buybuttonlite/pull/29): Bump fstream from 1.0.11 to 1.0.12 in /app. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#28](https://github.com/PrestaShop/ps_buybuttonlite/pull/28): Bump mixin-deep from 1.3.1 to 1.3.2 in /app. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Product Comments module
* [#42](https://github.com/PrestaShop/productcomments/pull/42): Rebuild ratings loading on product list. Thank you [@Oksydan](https://github.com/Oksydan)


### Email subscription module
* [#35](https://github.com/PrestaShop/ps_emailsubscription/pull/35): Fixed the email when user is registering (to the site and the newsletter simultaneously). Thank you [@Codencode](https://github.com/Codencode)


### European VAT number
* [#11](https://github.com/PrestaShop/vatnumber/pull/11): [-] Increase curl timeout from 5 to 10 sec. Thank you [@vmsrg](https://github.com/vmsrg)


### Products in the same category
* [#19](https://github.com/PrestaShop/ps_categoryproducts/pull/19): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Wire payment module
* [#28](https://github.com/PrestaShop/ps_wirepayment/pull/28): Use __DIR__ constant instead of dirname(__FILE__). Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11](https://github.com/PrestaShop/ps_wirepayment/pull/11): hookPaymentOptions return type must be array. Thank you [@Maks3w](https://github.com/Maks3w)


### Featured products
* [#12](https://github.com/PrestaShop/ps_featuredproducts/pull/12): Fix use of ProductPresenterFactory. Thank you [@RRENOU](https://github.com/RRENOU)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@matks](https://github.com/matks), [@Progi1984](https://github.com/Progi1984), [@Matt75](https://github.com/Matt75), [@PululuK](https://github.com/PululuK), [@SimonGrn](https://github.com/SimonGrn), [@boubkerbribri](https://github.com/boubkerbribri), [@PierreRambaud](https://github.com/PierreRambaud), [@zuk3975](https://github.com/zuk3975), [@clotaire202](https://github.com/clotaire202), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@ksaandev](https://github.com/ksaandev), [@prestamodule](https://github.com/prestamodule), [@jolelievre](https://github.com/jolelievre), [@ttoine](https://github.com/ttoine), [@eternoendless](https://github.com/eternoendless), [@sam-pires](https://github.com/sam-pires), [@nprokopenko202](https://github.com/nprokopenko202), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@Rolige](https://github.com/Rolige), [@marionf](https://github.com/marionf), [@dependabot[bot]](https://github.com/apps/dependabot), [@NeOMakinG](https://github.com/NeOMakinG), [@joaolago1113](https://github.com/joaolago1113), [@atomiix](https://github.com/atomiix), [@MatShir](https://github.com/MatShir), [@LouiseBonnard](https://github.com/LouiseBonnard), [@arouiadib](https://github.com/arouiadib), [@micka-fdz](https://github.com/micka-fdz), [@Oksydan](https://github.com/Oksydan), [@apacios](https://github.com/apacios), [@Codencode](https://github.com/Codencode), [@vmsrg](https://github.com/vmsrg), [@MathiasReker](https://github.com/MathiasReker), [@RRENOU](https://github.com/RRENOU), [@beyondsagency](https://github.com/beyondsagency), [@AlexEven](https://github.com/AlexEven), [@Maks3w](https://github.com/Maks3w)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
