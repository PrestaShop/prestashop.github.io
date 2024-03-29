---
layout: post
aliases: ["/news/coreweekly-41-2020"]
title:  "PrestaShop Core Weekly - Week 41 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-10-12
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 5th to Sunday 11th of October 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The Quality Assurance team found multiple issues in the first build of PrestaShop 1.7.7.0 Release Candidate 1, and the issues list contains one critical bug and one major bug:
- [#21300 Missing Gift and Recycled packaging options when Creating a new Order](https://github.com/PrestaShop/PrestaShop/issues/21300)
- [#21323 Incorrect discount value and amount in View an Order page when using multiple currencies](https://github.com/PrestaShop/PrestaShop/issues/21323)

Unfortunately, the Release Candidate 1 cannot be released because of these bugs.

The bug reports have been moved into the [1.7.7 Kanban](https://github.com/PrestaShop/PrestaShop/projects/7) and are currently being fixed. Following the fixes, maintainers team will be able to build a new ZIP archive which will be **Release Candidate 1 build 2** and it will be delivered to QA team again for validation.

As usual, informations about the release status will be provided on [the release tracking issue](https://github.com/PrestaShop/PrestaShop/issues/18647) for 1.7.7.0 .

## Releases

* [Decimal](https://github.com/PrestaShop/decimal): [1.4.0](https://github.com/PrestaShop/decimal/releases/tag/1.4.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [56 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-10-05..2020-10-11) have been created in the project repositories;
- [57 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-10-05..2020-10-11), including [18 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-10-05..2020-10-11) on the core;
- [112 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-10-05..2020-10-11) in the project repositories;
- [112 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-10-05..2020-10-11), including [93 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-10-05..2020-10-11).



## Code changes in the 'develop' branch


### Core
* [#21365](https://github.com/PrestaShop/PrestaShop/pull/21365): Fixed Currency Numeric Iso Code (Nullable & Default Value), by [@Progi1984](https://github.com/Progi1984)
* [#21314](https://github.com/PrestaShop/PrestaShop/pull/21314): Tools::getDefaultIndexContent() generates obsolete headers. Thank you [@PululuK](https://github.com/PululuK)
* [#21279](https://github.com/PrestaShop/PrestaShop/pull/21279): Carrier: improve documentation of shipping properties. Thank you [@rmilecki](https://github.com/rmilecki)
* [#21057](https://github.com/PrestaShop/PrestaShop/pull/21057): Reduce conditions complexity. Thank you [@davidglezz](https://github.com/davidglezz)
* [#20653](https://github.com/PrestaShop/PrestaShop/pull/20653): HelperForm field label not work in switch type . Thank you [@PululuK](https://github.com/PululuK)


### Back office
* [#21372](https://github.com/PrestaShop/PrestaShop/pull/21372): Update decimal number to version 1.4 And update all use statements, by [@jolelievre](https://github.com/jolelievre)
* [#21335](https://github.com/PrestaShop/PrestaShop/pull/21335): Fixed "Add new alias" button which was disappearing after adding a new alias. BO Shop param search. Thank you [@roncarino](https://github.com/roncarino)
* [#21328](https://github.com/PrestaShop/PrestaShop/pull/21328): Improve SQL requests on specific prices. Thank you [@clotaire202](https://github.com/clotaire202)
* [#21307](https://github.com/PrestaShop/PrestaShop/pull/21307): Refacto UpdateProductOptionsHandler to use Product repository. Thank you [@zuk3975](https://github.com/zuk3975)
* [#21301](https://github.com/PrestaShop/PrestaShop/pull/21301): Add commands for Specific Price priorities handling. Thank you [@zuk3975](https://github.com/zuk3975)
* [#21295](https://github.com/PrestaShop/PrestaShop/pull/21295): Deprecated AddSpecificPriceCommand getter/setter & clarified misnamed property. Thank you [@zuk3975](https://github.com/zuk3975)
* [#21276](https://github.com/PrestaShop/PrestaShop/pull/21276): Fix typo in AdminController code. Thank you [@ksaandev](https://github.com/ksaandev)
* [#21260](https://github.com/PrestaShop/PrestaShop/pull/21260): Remove Add/Update/Delete CustomizationField handlers (Redundant & Untested). Thank you [@zuk3975](https://github.com/zuk3975)
* [#21239](https://github.com/PrestaShop/PrestaShop/pull/21239): Fix deletion message in edit product page, by [@marionf](https://github.com/marionf)
* [#21226](https://github.com/PrestaShop/PrestaShop/pull/21226): Modify partial update in AbstractObjectModelRepository to simplify argument & implement it in UpdateProductBasicInformationHandler. Thank you [@zuk3975](https://github.com/zuk3975)
* [#21218](https://github.com/PrestaShop/PrestaShop/pull/21218): Fix tab entity tabLangs variable mapping. Thank you [@aleksiuno](https://github.com/aleksiuno)
* [#21215](https://github.com/PrestaShop/PrestaShop/pull/21215): Improvement/emphasize irreversibly of thumbs regeneration. Thank you [@aleksiuno](https://github.com/aleksiuno)
* [#21168](https://github.com/PrestaShop/PrestaShop/pull/21168): Fix FrontController names in modules hook-exceptions. Thank you [@dali-rajab](https://github.com/dali-rajab)


### Front office
* [#21330](https://github.com/PrestaShop/PrestaShop/pull/21330): Return a real 404 when product doesn't exist instead of a 302 redirection. Thank you [@Sinepel](https://github.com/Sinepel)
* [#21217](https://github.com/PrestaShop/PrestaShop/pull/21217): Make FO product delivery time bold. Thank you [@aleksiuno](https://github.com/aleksiuno)


### Tests
* [#21278](https://github.com/PrestaShop/PrestaShop/pull/21278): Add test for ArabicToLatinDigitConverter. Thank you [@ksaandev](https://github.com/ksaandev)


## Code changes in the '1.7.7.x' branch


### Back office
* [#21344](https://github.com/PrestaShop/PrestaShop/pull/21344): Move product search controller that was not in the right place, by [@jolelievre](https://github.com/jolelievre)
* [#21343](https://github.com/PrestaShop/PrestaShop/pull/21343): Fix status dropdown of order listing page not being well displayed using rtl language, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21317](https://github.com/PrestaShop/PrestaShop/pull/21317): Notifications bell icon read fix (Backport). Thank you [@okom3pom](https://github.com/okom3pom)
* [#21310](https://github.com/PrestaShop/PrestaShop/pull/21310): Fix delete order state confirmation, by [@sowbiba](https://github.com/sowbiba)
* [#21232](https://github.com/PrestaShop/PrestaShop/pull/21232): Fix tab modules list, by [@sowbiba](https://github.com/sowbiba)
* [#20882](https://github.com/PrestaShop/PrestaShop/pull/20882): Recompute specific price tax excluded when mismatch with price tax included, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Front office
* [#21297](https://github.com/PrestaShop/PrestaShop/pull/21297): Fix variable name in order_customer_comment.html.twig. Thank you [@okom3pom](https://github.com/okom3pom)
* [#21266](https://github.com/PrestaShop/PrestaShop/pull/21266): Fix wrong combination image shown when clicking to zoom, by [@atomiix](https://github.com/atomiix)
* [#20927](https://github.com/PrestaShop/PrestaShop/pull/20927): Avoid possible notice due to breaking change. Thank you [@kpodemski](https://github.com/kpodemski)


### Installer
* [#20201](https://github.com/PrestaShop/PrestaShop/pull/20201): Fix throw InstallControllerHttpSystem::trans during installation process. Thank you [@mushroot](https://github.com/mushroot)


### Tests
* [#21367](https://github.com/PrestaShop/PrestaShop/pull/21367): Add test 'CRUD catalog price rule'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21341](https://github.com/PrestaShop/PrestaShop/pull/21341): Fix test 'CRUD carrier' in nightly 07/10/2020. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21339](https://github.com/PrestaShop/PrestaShop/pull/21339): Delete all references to ttc in UI folder, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21334](https://github.com/PrestaShop/PrestaShop/pull/21334): Create state with only iso code that does not exist, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21327](https://github.com/PrestaShop/PrestaShop/pull/21327): Create first test 'Computing precision set to 3' for UI tests new campaign  'Regression', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21324](https://github.com/PrestaShop/PrestaShop/pull/21324): Add new test 'Change position for attributes and values', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21308](https://github.com/PrestaShop/PrestaShop/pull/21308): Fix tests errors in nightly 04/10/2020. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21302](https://github.com/PrestaShop/PrestaShop/pull/21302): Change UI tests workflow name, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21255](https://github.com/PrestaShop/PrestaShop/pull/21255): Add test 'Sort and pagination shopping carts'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Contact Form module
* [#53](https://github.com/PrestaShop/contactform/pull/53): Confirmation text after settings change. Thank you [@kpodemski](https://github.com/kpodemski)


### Browsers and operating systems statistics module
* [#13](https://github.com/PrestaShop/statsequipment/pull/13): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)


### Brands list module
* [#9](https://github.com/PrestaShop/ps_brandlist/pull/9): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)


### Best-selling products statistics module
* [#9](https://github.com/PrestaShop/statsbestproducts/pull/9): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)


### OnBoarding module
* [#80](https://github.com/PrestaShop/welcome/pull/80): Bump eslint-plugin-import from 2.22.0 to 2.22.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#76](https://github.com/PrestaShop/welcome/pull/76): Improve project, by [@Progi1984](https://github.com/Progi1984)


### Wire payment module
* [#58](https://github.com/PrestaShop/ps_wirepayment/pull/58): Buttons should be updated, by [@khouloudbelguith](https://github.com/khouloudbelguith)


### Share Buttons module
* [#44](https://github.com/PrestaShop/ps_sharebuttons/pull/44): Buttons should be updated, by [@khouloudbelguith](https://github.com/khouloudbelguith)


### Image slider module
* [#55](https://github.com/PrestaShop/ps_imageslider/pull/55): Buttons should be updated, by [@PierreRambaud](https://github.com/PierreRambaud)


### Product Comments module
* [#73](https://github.com/PrestaShop/productcomments/pull/73): Buttons should be updated, by [@PierreRambaud](https://github.com/PierreRambaud)


### Data mining for statistics module
* [#18](https://github.com/PrestaShop/statsdata/pull/18): Buttons should be updated, by [@PierreRambaud](https://github.com/PierreRambaud)


### Main menu module
* [#38](https://github.com/PrestaShop/ps_mainmenu/pull/38): Update buttons, by [@khouloudbelguith](https://github.com/khouloudbelguith)


### Shopping cart module
* [#69](https://github.com/PrestaShop/ps_shoppingcart/pull/69): Modules - Buttons should be updated, by [@khouloudbelguith](https://github.com/khouloudbelguith)


### Cross-selling module
* [#19](https://github.com/PrestaShop/ps_crossselling/pull/19):  Modules - Buttons should be updated. Thank you [@PululuK](https://github.com/PululuK)
* [#16](https://github.com/PrestaShop/ps_crossselling/pull/16): Update icon and short description, by [@LouiseBonnard](https://github.com/LouiseBonnard)


### PrestaShop Specifications
* [#150](https://github.com/PrestaShop/prestashop-specs/pull/150): Update the link of the product team in the readme, by [@marionf](https://github.com/marionf)
* [#149](https://github.com/PrestaShop/prestashop-specs/pull/149): Fix more typos in README. Thank you [@justeen35](https://github.com/justeen35)
* [#148](https://github.com/PrestaShop/prestashop-specs/pull/148): Spell correctly the project name. Thank you [@justeen35](https://github.com/justeen35)
* [#147](https://github.com/PrestaShop/prestashop-specs/pull/147): Add a PULL_REQUEST_TEMPLATE.md to get rid of the current template. Thank you [@justeen35](https://github.com/justeen35)
* [#146](https://github.com/PrestaShop/prestashop-specs/pull/146): Fix broken image links. Thank you [@justeen35](https://github.com/justeen35)
* [#144](https://github.com/PrestaShop/prestashop-specs/pull/144): Another .DS_Store file that needs to go in the bin. Thank you [@justeen35](https://github.com/justeen35)
* [#143](https://github.com/PrestaShop/prestashop-specs/pull/143): Multiple small mistakes fixed. Thank you [@justeen35](https://github.com/justeen35)
* [#142](https://github.com/PrestaShop/prestashop-specs/pull/142): Add specs for stock management, by [@marionf](https://github.com/marionf)
* [#141](https://github.com/PrestaShop/prestashop-specs/pull/141): Add specs for gift wrapping message, by [@marionf](https://github.com/marionf)
* [#140](https://github.com/PrestaShop/prestashop-specs/pull/140): Add missing Shipping specs, by [@marionf](https://github.com/marionf)
* [#139](https://github.com/PrestaShop/prestashop-specs/pull/139): Delete .DS_Store file in root folder. Thank you [@justeen35](https://github.com/justeen35)
* [#138](https://github.com/PrestaShop/prestashop-specs/pull/138): Fix some statements. Thank you [@justeen35](https://github.com/justeen35)
* [#137](https://github.com/PrestaShop/prestashop-specs/pull/137): Add links to the repository tree, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#136](https://github.com/PrestaShop/prestashop-specs/pull/136): Add missing fields in edit product specs and rename labels for prices fields, by [@marionf](https://github.com/marionf)
* [#134](https://github.com/PrestaShop/prestashop-specs/pull/134): Add specifications about thumbnails regeneration, by [@LouiseBonnard](https://github.com/LouiseBonnard)


### Faceted search module
* [#216](https://github.com/PrestaShop/ps_facetedsearch/pull/216): Bump mini-css-extract-plugin from 0.11.3 to 0.12.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#215](https://github.com/PrestaShop/ps_facetedsearch/pull/215): Bump mini-css-extract-plugin from 0.11.2 to 0.11.3. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#214](https://github.com/PrestaShop/ps_facetedsearch/pull/214): Bump style-loader from 1.2.1 to 1.3.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Wishlist block module
* [#87](https://github.com/PrestaShop/blockwishlist/pull/87): Filter on current shop when displaying products in wishlist, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Decimal library
* [#8](https://github.com/PrestaShop/decimal/pull/8): Rename Number to DecimalNumber, by [@eternoendless](https://github.com/eternoendless)


### PrestonBot
* [#107](https://github.com/PrestaShop/prestonbot/pull/107): Use same twig version as the PrestaShop project, by [@atomiix](https://github.com/atomiix)


### Changes in developer documentation
* [#768](https://github.com/PrestaShop/docs/pull/768): Fix indentation and missing closing IfModule tag, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#765](https://github.com/PrestaShop/docs/pull/765): Add a workaround for core table altering, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#763](https://github.com/PrestaShop/docs/pull/763): Add a link for to register. Thank you [@okom3pom](https://github.com/okom3pom)
* [#760](https://github.com/PrestaShop/docs/pull/760): Add informations for MAMP. Thank you [@okom3pom](https://github.com/okom3pom)
* [#755](https://github.com/PrestaShop/docs/pull/755): Explain how to use _TOKEN_ to disable BO token security, by [@matks](https://github.com/matks)


### Best vouchers statistics module
* [#10](https://github.com/PrestaShop/statsbestvouchers/pull/10): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)


### Best suppliers statistics module
* [#9](https://github.com/PrestaShop/statsbestsuppliers/pull/9): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)


### Best customers statistics module
* [#17](https://github.com/PrestaShop/statsbestcustomers/pull/17): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)
* [#16](https://github.com/PrestaShop/statsbestcustomers/pull/16): Return best customers if visits are not logged. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Best categories statistics module
* [#10](https://github.com/PrestaShop/statsbestcategories/pull/10): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)


### Banner module
* [#22](https://github.com/PrestaShop/ps_banner/pull/22): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)


### Available quantities statistics module
* [#15](https://github.com/PrestaShop/statsstock/pull/15): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)


### MJML Theme Converter
* [#6](https://github.com/PrestaShop/mjml-theme-converter/pull/6): Fix typo in variable name, by [@eternoendless](https://github.com/eternoendless)


### Advertising module
* [#15](https://github.com/PrestaShop/ps_advertising/pull/15): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)


### Custom text module
* [#46](https://github.com/PrestaShop/ps_customtext/pull/46): Little improvements to module. Thank you [@kpodemski](https://github.com/kpodemski)


### Gamification module
* [#74](https://github.com/PrestaShop/gamification/pull/74): Add lazy native attribute to images to avoid loading when hidden, by [@NeOMakinG](https://github.com/NeOMakinG)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@kpodemski](https://github.com/kpodemski), [@Julievrz](https://github.com/Julievrz), [@dependabot[bot]](https://github.com/apps/dependabot), [@jolelievre](https://github.com/jolelievre), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@khouloudbelguith](https://github.com/khouloudbelguith), [@PierreRambaud](https://github.com/PierreRambaud), [@PululuK](https://github.com/PululuK), [@Progi1984](https://github.com/Progi1984), [@marionf](https://github.com/marionf), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@NeOMakinG](https://github.com/NeOMakinG), [@eternoendless](https://github.com/eternoendless), [@atomiix](https://github.com/atomiix), [@boubkerbribri](https://github.com/boubkerbribri), [@roncarino](https://github.com/roncarino), [@Sinepel](https://github.com/Sinepel), [@clotaire202](https://github.com/clotaire202), [@jf-viguier](https://github.com/jf-viguier), [@okom3pom](https://github.com/okom3pom), [@justeen35](https://github.com/justeen35), [@sowbiba](https://github.com/sowbiba), [@zuk3975](https://github.com/zuk3975), [@rmilecki](https://github.com/rmilecki), [@ksaandev](https://github.com/ksaandev), [@matks](https://github.com/matks), [@LouiseBonnard](https://github.com/LouiseBonnard), [@aleksiuno](https://github.com/aleksiuno), [@dali-rajab](https://github.com/dali-rajab), [@davidglezz](https://github.com/davidglezz), [@matthieu-rolland](https://github.com/matthieu-rolland), [@mushroot](https://github.com/mushroot)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
