---
layout: post
aliases: ["/news/coreweekly-40-2020"]
title:  "PrestaShop Core Weekly - Week 40 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-10-05
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 28th of September to Sunday 4th of October 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The past week has been filled with lot of interesting events!

First, [PHP 8.0 Release Candidate 1](https://www.php.net/archive/2020.php#2020-10-01-4) has been delivered and is available for testing. Obviously, we suggest helping the test of this version as this is the future of PHP.

Secondly, [Hacktoberfest](https://hacktoberfest.digitalocean.com/) has started on the 1st of October. But the very first days of the event have been complicated: the event [experimented a huge spam contributions wave](https://hacktoberfest.digitalocean.com/hacktoberfest-update). The consequences of this spam are that the rules of Hacktoberfest changed on the 3rd of October: projects now need to opt-in for the event and Pull Requests must be either merged, approved, or labeled 'hacktoberfest-accepted' to be accepted as a participation.

The PrestaShop team has decided to opt-in to this event so your (valid) contributions will be acknowledged as participations for this edition of the Hacktoberfest!

Finally, the QA team is still running the test campaign on the Release Candidate 1 build delivered the week before.


## Releases

* [dashproducts](https://github.com/PrestaShop/dashproducts): [v2.1.1](https://github.com/PrestaShop/dashproducts/releases/tag/v2.1.1)
* [php-dev-tools](https://github.com/PrestaShop/php-dev-tools): [v3.10](https://github.com/PrestaShop/php-dev-tools/releases/tag/v3.10)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [63 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-09-28..2020-10-04) have been created in the project repositories;
- [49 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-09-28..2020-10-04), including [13 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-09-28..2020-10-04) on the core;
- [98 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-09-28..2020-10-04) in the project repositories;
- [85 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-09-28..2020-10-04), including [76 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-09-28..2020-10-04).



## Code changes in the 'develop' branch


### Core
* [#21263](https://github.com/PrestaShop/PrestaShop/pull/21263): Use https for documentation link in "I need help" github template. Thank you [@ksaandev](https://github.com/ksaandev)
* [#21246](https://github.com/PrestaShop/PrestaShop/pull/21246): Update licenses headers, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#21211](https://github.com/PrestaShop/PrestaShop/pull/21211): "/build/" was defined twice in .gitignore root file. Thank you [@SebSept](https://github.com/SebSept)
* [#21187](https://github.com/PrestaShop/PrestaShop/pull/21187): Properly handle malformed controllers in routes configuration, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#20964](https://github.com/PrestaShop/PrestaShop/pull/20964): Fix bug related to cache_default_attribute. Thank you [@unlocomqx](https://github.com/unlocomqx)


### Back office
* [#21277](https://github.com/PrestaShop/PrestaShop/pull/21277): Fixed call for Windows PrestaShop Components, by [@Progi1984](https://github.com/Progi1984)
* [#21264](https://github.com/PrestaShop/PrestaShop/pull/21264): Clean  a bit class AdminController. Thank you [@ksaandev](https://github.com/ksaandev)
* [#21250](https://github.com/PrestaShop/PrestaShop/pull/21250): Fix left sidebar while onboarding is on, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21223](https://github.com/PrestaShop/PrestaShop/pull/21223): Introduce namespaces in adapter - Update, Validate, Repository. Move recent services.. Thank you [@zuk3975](https://github.com/zuk3975)
* [#21166](https://github.com/PrestaShop/PrestaShop/pull/21166): Change default 'Erase previous images' button state to no. Thank you [@aleksiuno](https://github.com/aleksiuno)
* [#21121](https://github.com/PrestaShop/PrestaShop/pull/21121): Make Module manager error notifications fixed. Thank you [@Sinepel](https://github.com/Sinepel)
* [#21117](https://github.com/PrestaShop/PrestaShop/pull/21117): Use ProductCustomizationFieldUpdater service in CustomizationFieldHandlers. Thank you [@zuk3975](https://github.com/zuk3975)
* [#20830](https://github.com/PrestaShop/PrestaShop/pull/20830): Introduce SetAssociatedProductAttachmentsCommand and AssociateProductAttachmentCommand. Thank you [@zuk3975](https://github.com/zuk3975)
* [#20544](https://github.com/PrestaShop/PrestaShop/pull/20544): Add RemoveAllAssociatedProductSuppliersCommand. Thank you [@zuk3975](https://github.com/zuk3975)
* [#19982](https://github.com/PrestaShop/PrestaShop/pull/19982): Add order internal notes. Thank you [@ks129](https://github.com/ks129)


### Front office
* [#21169](https://github.com/PrestaShop/PrestaShop/pull/21169): Fix availability messages quickview also updating product page. Thank you [@dali-rajab](https://github.com/dali-rajab)
* [#20967](https://github.com/PrestaShop/PrestaShop/pull/20967): Improve refresh checkout page js. Thank you [@davidglezz](https://github.com/davidglezz)


### Tests
* [#21214](https://github.com/PrestaShop/PrestaShop/pull/21214): Fix Update status, newsletter and optin for customers page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21209](https://github.com/PrestaShop/PrestaShop/pull/21209): Lower permissions for attachment dummy file. Thank you [@zuk3975](https://github.com/zuk3975)


## Code changes in the '1.7.7.x' branch


### Back office
* [#21203](https://github.com/PrestaShop/PrestaShop/pull/21203): Build assets for 177, by [@jolelievre](https://github.com/jolelievre)
* [#21195](https://github.com/PrestaShop/PrestaShop/pull/21195): Replaced SQL query to fetch modules hooked on stat hook by Hook function to have a singl Source of Truth, by [@matks](https://github.com/matks)
* [#21190](https://github.com/PrestaShop/PrestaShop/pull/21190): Add missing security annotation on new 177 routes, by [@jolelievre](https://github.com/jolelievre)


### Installer
* [#21178](https://github.com/PrestaShop/PrestaShop/pull/21178): Update modules for 177, by [@jolelievre](https://github.com/jolelievre)


### Tests
* [#21265](https://github.com/PrestaShop/PrestaShop/pull/21265): Fix tests errors in nightly 02/10/2020. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21256](https://github.com/PrestaShop/PrestaShop/pull/21256): Fix test 'Filter shopping carts'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21225](https://github.com/PrestaShop/PrestaShop/pull/21225): Add test 'Filter shopping carts'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21188](https://github.com/PrestaShop/PrestaShop/pull/21188): Refactoring create cart rule and faker in tests , by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21184](https://github.com/PrestaShop/PrestaShop/pull/21184): Avoid creating new state with existing iso code, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21182](https://github.com/PrestaShop/PrestaShop/pull/21182): Add test 'Pagination and sort cart rule'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21164](https://github.com/PrestaShop/PrestaShop/pull/21164): Add test 'pagination and sort cart rules'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21162](https://github.com/PrestaShop/PrestaShop/pull/21162): Add a DB_SERVER global variable for tests. Thank you [@SD1982](https://github.com/SD1982)
* [#21147](https://github.com/PrestaShop/PrestaShop/pull/21147): Add test 'Filter sort and pagination carriers'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.6.x' branch


### Installer
* [#21158](https://github.com/PrestaShop/PrestaShop/pull/21158): Bump version to 1.7.6.8 in the installer, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#759](https://github.com/PrestaShop/docs/pull/759): Add link to pscleaner. Thank you [@okom3pom](https://github.com/okom3pom)
* [#758](https://github.com/PrestaShop/docs/pull/758): Forgot to close comma. Thank you [@ThanasisMpalatsoukas](https://github.com/ThanasisMpalatsoukas)
* [#757](https://github.com/PrestaShop/docs/pull/757): Updating link for active record pattern. Thank you [@ThanasisMpalatsoukas](https://github.com/ThanasisMpalatsoukas)
* [#756](https://github.com/PrestaShop/docs/pull/756): Add children tag into modules/concepts/templating. Thank you [@ksaandev](https://github.com/ksaandev)
* [#754](https://github.com/PrestaShop/docs/pull/754): Improve Theme Hook page: add links, rewrite some statements. Thank you [@prestaforum](https://github.com/prestaforum)
* [#753](https://github.com/PrestaShop/docs/pull/753): Avoid confusion with the module class. Thank you [@PululuK](https://github.com/PululuK)
* [#751](https://github.com/PrestaShop/docs/pull/751): Fix some text in test section, by [@SimonGrn](https://github.com/SimonGrn)
* [#750](https://github.com/PrestaShop/docs/pull/750): Explain how to use Router component. Thank you [@prestaforum](https://github.com/prestaforum)


### Category tree links module
* [#39](https://github.com/PrestaShop/ps_categorytree/pull/39): Bump version to 2.0.1, by [@Progi1984](https://github.com/Progi1984)


### Customer account links module
* [#30](https://github.com/PrestaShop/ps_customeraccountlinks/pull/30): Bump version to 3.1.1, by [@Progi1984](https://github.com/Progi1984)


### Cross-selling module
* [#17](https://github.com/PrestaShop/ps_crossselling/pull/17): Bump version to 2.0.1, by [@Progi1984](https://github.com/Progi1984)
* [#15](https://github.com/PrestaShop/ps_crossselling/pull/15): Bump prestashop/php-dev-tools from 3.9 to 3.10. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Core Weekly Generator tool
* [#59](https://github.com/PrestaShop/core-weekly-generator/pull/59): Improve tests, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#58](https://github.com/PrestaShop/core-weekly-generator/pull/58): Execute GitHub Actions on pull request, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#57](https://github.com/PrestaShop/core-weekly-generator/pull/57): Add tests for Parser, by [@matks](https://github.com/matks)
* [#56](https://github.com/PrestaShop/core-weekly-generator/pull/56): Fix a few statements, by [@matks](https://github.com/matks)
* [#55](https://github.com/PrestaShop/core-weekly-generator/pull/55): Expand mapping list for Core Weekly, by [@matks](https://github.com/matks)
* [#54](https://github.com/PrestaShop/core-weekly-generator/pull/54): Add legal compliance module to list, by [@ttoine](https://github.com/ttoine)
* [#53](https://github.com/PrestaShop/core-weekly-generator/pull/53): Rename CI and integrate badge into README, by [@matks](https://github.com/matks)
* [#52](https://github.com/PrestaShop/core-weekly-generator/pull/52): Introduce tests, use DateUtil class, fixes bug #48, by [@matks](https://github.com/matks)
* [#50](https://github.com/PrestaShop/core-weekly-generator/pull/50): Ignore PRs for categories ME and PM, by [@matks](https://github.com/matks)


### Wishlist block module
* [#86](https://github.com/PrestaShop/blockwishlist/pull/86): fix for customizable product. Thank you [@pablopolyte](https://github.com/pablopolyte)
* [#85](https://github.com/PrestaShop/blockwishlist/pull/85): add missing coma. Thank you [@pablopolyte](https://github.com/pablopolyte)
* [#84](https://github.com/PrestaShop/blockwishlist/pull/84): fix hook name. Thank you [@pablopolyte](https://github.com/pablopolyte)
* [#83](https://github.com/PrestaShop/blockwishlist/pull/83): Fix changes requested. Thank you [@pablopolyte](https://github.com/pablopolyte)


### PrestonBot
* [#106](https://github.com/PrestaShop/prestonbot/pull/106): Add link to explain types and categories, by [@eternoendless](https://github.com/eternoendless)
* [#105](https://github.com/PrestaShop/prestonbot/pull/105): Don't search wording for ME PRs + add label even when only existing wording has been found, by [@atomiix](https://github.com/atomiix)


### Check payment module
* [#41](https://github.com/PrestaShop/ps_checkpayment/pull/41): Bump prestashop/php-dev-tools from 3.9 to 3.10. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer "Sign in" link module
* [#26](https://github.com/PrestaShop/ps_customersignin/pull/26): Bump prestashop/php-dev-tools from 3.9 to 3.10. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Custom text module
* [#47](https://github.com/PrestaShop/ps_customtext/pull/47): Bump prestashop/php-dev-tools from 3.9 to 3.10. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Order Notifications on the Favicon module
* [#22](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/22): Bump prestashop/php-dev-tools from 3.9 to 3.10. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Google Analytics module
* [#80](https://github.com/PrestaShop/ps_googleanalytics/pull/80): Clean file GoogleAnalyticActionLib.js from useless comments. Thank you [@prestaforum](https://github.com/prestaforum)


### Dashboard Products module
* [#30](https://github.com/PrestaShop/dashproducts/pull/30): Release 2.1.1, by [@Progi1984](https://github.com/Progi1984)
* [#29](https://github.com/PrestaShop/dashproducts/pull/29): Fix wording namespace and Bump version 2.1.1, by [@jolelievre](https://github.com/jolelievre)


### Product Comments module
* [#71](https://github.com/PrestaShop/productcomments/pull/71): Bump symfony/css-selector from 3.4.44 to 3.4.45. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#213](https://github.com/PrestaShop/ps_facetedsearch/pull/213): Bump eslint-plugin-import from 2.22.0 to 2.22.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### PHP Developer Tools
* [#37](https://github.com/PrestaShop/php-dev-tools/pull/37): Specify minimum PrestaShop version for constants, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Docker images
* [#228](https://github.com/PrestaShop/docker/pull/228): Delete install directory on successful (auto) installation. Thank you [@sergioregueira](https://github.com/sergioregueira)


### PrestaShop Specifications
* [#132](https://github.com/PrestaShop/prestashop-specs/pull/132): Specify the disassociation in case of multiple suppliers, by [@LouiseBonnard](https://github.com/LouiseBonnard)


### The PrestaShop open source project
* [#37](https://github.com/PrestaShop/open-source/pull/37): Create a list of modules and themes, by [@ttoine](https://github.com/ttoine)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@okom3pom](https://github.com/okom3pom), [@ThanasisMpalatsoukas](https://github.com/ThanasisMpalatsoukas), [@ksaandev](https://github.com/ksaandev), [@Progi1984](https://github.com/Progi1984), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@PierreRambaud](https://github.com/PierreRambaud), [@matks](https://github.com/matks), [@prestaforum](https://github.com/prestaforum), [@PululuK](https://github.com/PululuK), [@pablopolyte](https://github.com/pablopolyte), [@SimonGrn](https://github.com/SimonGrn), [@NeOMakinG](https://github.com/NeOMakinG), [@eternoendless](https://github.com/eternoendless), [@dependabot[bot]](https://github.com/apps/dependabot), [@zuk3975](https://github.com/zuk3975), [@boubkerbribri](https://github.com/boubkerbribri), [@ttoine](https://github.com/ttoine), [@SebSept](https://github.com/SebSept), [@jolelievre](https://github.com/jolelievre), [@atomiix](https://github.com/atomiix), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@dali-rajab](https://github.com/dali-rajab), [@aleksiuno](https://github.com/aleksiuno), [@SD1982](https://github.com/SD1982), [@Sinepel](https://github.com/Sinepel), [@sergioregueira](https://github.com/sergioregueira), [@davidglezz](https://github.com/davidglezz), [@unlocomqx](https://github.com/unlocomqx), [@LouiseBonnard](https://github.com/LouiseBonnard), [@ks129](https://github.com/ks129)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
