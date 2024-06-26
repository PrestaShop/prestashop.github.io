---
layout: post
aliases: ["/news/coreweekly-30-2020"]
title:  "PrestaShop Core Weekly - Week 30 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-07-27
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 20th to Sunday 26th of July 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Last week we [announced the opening of our Bug Bounty program](https://build.prestashop.com/news/bug-bounty-program/). This was a very important milestone for us and we are confident that it will bring PrestaShop project to a new level of security in 2020.

In the meantime, the v4 of our Google Analytics module is on its way and the Wishlist block module is in good progress too.

Finally a lot of efforts are still being directed on fixing the last known bugs in PrestaShop 1.7.7 in order to deliver soon a first Release Candidate. But these last bugs are complex and require a huge collaboration of software and QA teams to be fully fixed.


## Releases

* [Ps_featuredproducts](https://github.com/PrestaShop/ps_featuredproducts): [v2.1.0](https://github.com/PrestaShop/ps_featuredproducts/releases/tag/v2.1.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [77 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-07-20..2020-07-26) have been created in the project repositories;
- [60 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-07-20..2020-07-26), including [14 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-07-20..2020-07-26) on the core;
- [190 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-07-20..2020-07-26) in the project repositories;
- [185 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-07-20..2020-07-26), including [163 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-07-20..2020-07-26).


## Code changes in the 'develop' branch


### Core
* [#20235](https://github.com/PrestaShop/PrestaShop/pull/20235): Remove useless ini_set for Windows, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#20289](https://github.com/PrestaShop/PrestaShop/pull/20289): Fix wrongly placed block end tag in carts/helpers/view/view.tpl. Thank you [@Sinepel](https://github.com/Sinepel)
* [#20260](https://github.com/PrestaShop/PrestaShop/pull/20260): Fix color of cursor using arrow keyboard on product page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#20253](https://github.com/PrestaShop/PrestaShop/pull/20253): Grid row delete confirmation modal - Customers > Addresses, by [@sowbiba](https://github.com/sowbiba)
* [#20242](https://github.com/PrestaShop/PrestaShop/pull/20242): Add deprecated message on js files in order to inform about next major possible deletions, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#20224](https://github.com/PrestaShop/PrestaShop/pull/20224): BO PRODUCT SPECIFIC PRICE TAB Add id_specific_price in list. Thank you [@PululuK](https://github.com/PululuK)
* [#20204](https://github.com/PrestaShop/PrestaShop/pull/20204): Simplified credit slip options. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#20195](https://github.com/PrestaShop/PrestaShop/pull/20195): Log when webservice key is deleted. Thank you [@ksaandev](https://github.com/ksaandev)
* [#20016](https://github.com/PrestaShop/PrestaShop/pull/20016): Simplify Address form. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#19838](https://github.com/PrestaShop/PrestaShop/pull/19838): Add modal actions to attribute and attribute actions. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)


### Front office
* [#20297](https://github.com/PrestaShop/PrestaShop/pull/20297): Simplify is_gift checking in checkout tpl. Thank you [@davidglezz](https://github.com/davidglezz)
* [#20143](https://github.com/PrestaShop/PrestaShop/pull/20143): Add actionGetProductPropertiesAfterUnitPrice hook. Thank you [@olecorre](https://github.com/olecorre)
* [#20139](https://github.com/PrestaShop/PrestaShop/pull/20139): Module widget display fix. Thank you [@Oksydan](https://github.com/Oksydan)
* [#20002](https://github.com/PrestaShop/PrestaShop/pull/20002): Add selectors mapping so themes can override it, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#19830](https://github.com/PrestaShop/PrestaShop/pull/19830): Allow override of checkout process. Thank you [@ksaandev](https://github.com/ksaandev)


### Tests
* [#20273](https://github.com/PrestaShop/PrestaShop/pull/20273): Functional tests - Fix confirm delete modal selector for addresses page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20262](https://github.com/PrestaShop/PrestaShop/pull/20262): Functional tests - Fix click on delete confirmation modal - Customers > Addresses. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#20258](https://github.com/PrestaShop/PrestaShop/pull/20258): Add const MAIL_DIR for phpstan bootstrap, by [@matks](https://github.com/matks)


## Code changes in the '1.7.7.x' branch


### Back office
* [#20263](https://github.com/PrestaShop/PrestaShop/pull/20263): Fix bad redirection after error in address controller, by [@matks](https://github.com/matks)
* [#20111](https://github.com/PrestaShop/PrestaShop/pull/20111): Fix order max quantity, by [@jolelievre](https://github.com/jolelievre)
* [#20083](https://github.com/PrestaShop/PrestaShop/pull/20083): Refactoring of the Order Updater and multiple related bugfixes, by [@jolelievre](https://github.com/jolelievre)


### Tests
* [#20312](https://github.com/PrestaShop/PrestaShop/pull/20312): Improve combination tests, use IDs instead of names to check quantities, by [@jolelievre](https://github.com/jolelievre)
* [#20293](https://github.com/PrestaShop/PrestaShop/pull/20293): Functional tests - Add new test 'Carrier restrictions', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20280](https://github.com/PrestaShop/PrestaShop/pull/20280): Functional tests - Create new test 'View customer from orders page', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20241](https://github.com/PrestaShop/PrestaShop/pull/20241): Functional tests - Modify translation. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools

### Wishlist block module
* [#70](https://github.com/PrestaShop/blockwishlist/pull/70): Add quantity while adding to cart, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#68](https://github.com/PrestaShop/blockwishlist/pull/68): Fix some trads domain and false sort error, add last added sort for wishlist products. Thank you [@zalexki](https://github.com/zalexki)
* [#67](https://github.com/PrestaShop/blockwishlist/pull/67): Change translation to respect native module workflow, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#66](https://github.com/PrestaShop/blockwishlist/pull/66): Some feedbacks from our PM, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#65](https://github.com/PrestaShop/blockwishlist/pull/65): Fix unknown service on ps 1.7.6, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#64](https://github.com/PrestaShop/blockwishlist/pull/64): Delete unused filter button, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#63](https://github.com/PrestaShop/blockwishlist/pull/63): Hover responsive, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#62](https://github.com/PrestaShop/blockwishlist/pull/62): Avoid javascript errors in BO, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#61](https://github.com/PrestaShop/blockwishlist/pull/61): Fix builds, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#60](https://github.com/PrestaShop/blockwishlist/pull/60): Assert write permission are given before altering lists, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)

### Changes in developer documentation
* [#644](https://github.com/PrestaShop/docs/pull/644): fix missing quote. Thank you [@zalexki](https://github.com/zalexki)
* [#642](https://github.com/PrestaShop/docs/pull/642): Change jquery to v3 instead of v2, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#641](https://github.com/PrestaShop/docs/pull/641): Fix CI/CD title abbreviation to entire words, by [@eternoendless](https://github.com/eternoendless)
* [#637](https://github.com/PrestaShop/docs/pull/637): Add some useful resources to deal with PRs, by [@ttoine](https://github.com/ttoine)
* [#636](https://github.com/PrestaShop/docs/pull/636): Update parent-child-feature.md. Thank you [@joserprieto](https://github.com/joserprieto)
* [#635](https://github.com/PrestaShop/docs/pull/635): Add project section & move release section inside it, by [@eternoendless](https://github.com/eternoendless)
* [#632](https://github.com/PrestaShop/docs/pull/632): Update links and content for ModuleFrontControllers, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)

### Google Analytics module
* [#56](https://github.com/PrestaShop/ps_googleanalytics/pull/56): Fix reported error in CI, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#50](https://github.com/PrestaShop/ps_googleanalytics/pull/50): Major refacto : 4.0.0, by [@apacios](https://github.com/apacios)

### Quality Assurance tools module
* [#1](https://github.com/PrestaShop/ps_qualityassurance/pull/1): Add logo, by [@matks](https://github.com/matks)

### Check Payment module

* [#33](https://github.com/PrestaShop/ps_checkpayment/pull/33): Fix : br displayed in check address after order. Thank you [@Sinepel](https://github.com/Sinepel)

### Product Comments module

* [#59](https://github.com/PrestaShop/productcomments/pull/59): Fix typo in query. Thank you [@kpodemski](https://github.com/kpodemski)
* [#58](https://github.com/PrestaShop/productcomments/pull/58): Force installation in all stores context. Thank you [@kpodemski](https://github.com/kpodemski)
* [#55](https://github.com/PrestaShop/productcomments/pull/55): Disable row clicking action in  moderate and comment list. Thank you [@PululuK](https://github.com/PululuK)
* [#45](https://github.com/PrestaShop/productcomments/pull/45): Customer anonymisation. Thank you [@Oksydan](https://github.com/Oksydan)

### Shopping cart module
* [#64](https://github.com/PrestaShop/ps_shoppingcart/pull/64): Add crossselling hooks, by [@matks](https://github.com/matks)

### Order Notifications on Favicon module
* [#20](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/20): Bump prestashop/php-dev-tools from 3.4 to 3.8. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)

### Customer reassurance block module
* [#54](https://github.com/PrestaShop/blockreassurance/pull/54): Fix compatibility range, by [@matks](https://github.com/matks)

### Featured products module
* [#29](https://github.com/PrestaShop/ps_featuredproducts/pull/29): Release 2.1.0, by [@Progi1984](https://github.com/Progi1984)
* [#28](https://github.com/PrestaShop/ps_featuredproducts/pull/28): Display categories using "categories" type in admin form. Thank you [@rmilecki](https://github.com/rmilecki)

### Faceted search module
* [#185](https://github.com/PrestaShop/ps_facetedsearch/pull/185): Bump eslint from 5.15.0 to 5.16.0. Thank you [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)
* [#183](https://github.com/PrestaShop/ps_facetedsearch/pull/183): Bump babel-loader from 8.0.5 to 8.1.0. Thank you [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)
* [#182](https://github.com/PrestaShop/ps_facetedsearch/pull/182): Bump mini-css-extract-plugin from 0.5.0 to 0.9.0. Thank you [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)
* [#181](https://github.com/PrestaShop/ps_facetedsearch/pull/181): Bump style-loader from 0.23.1 to 1.2.1. Thank you [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)
* [#180](https://github.com/PrestaShop/ps_facetedsearch/pull/180): Bump friendsofphp/php-cs-fixer from 2.16.3 to 2.16.4. Thank you [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)
* [#179](https://github.com/PrestaShop/ps_facetedsearch/pull/179): Bump mockery/mockery from 1.3.1 to 1.3.2. Thank you [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)
* [#177](https://github.com/PrestaShop/ps_facetedsearch/pull/177): Remove useless part of code, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#172](https://github.com/PrestaShop/ps_facetedsearch/pull/172): Added sort by bestsellers. Thank you [@dgonzalez360](https://github.com/dgonzalez360)
* [#170](https://github.com/PrestaShop/ps_facetedsearch/pull/170): Ajax update product list on select lists. Thank you [@Leenwt](https://github.com/Leenwt)

### Stylelint Configuration
* [#2](https://github.com/PrestaShop/stylelint-config/pull/2): Bump lodash from 4.17.15 to 4.17.19. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)

### Core Weekly Generator tool
* [#41](https://github.com/PrestaShop/core-weekly-generator/pull/41): Bump lodash from 4.17.15 to 4.17.19. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)

### Example mailtheme module
* [#8](https://github.com/PrestaShop/example_module_mailtheme/pull/8): Bump lodash from 4.17.15 to 4.17.19. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)

### Email Alerts module
* [#58](https://github.com/PrestaShop/ps_emailalerts/pull/58): Wrong condition result broke module installation. Thank you [@kpodemski](https://github.com/kpodemski)


## Changes performed by scripts for license headers and dependabot configuration

* [#10](https://github.com/PrestaShop/statsvisits/pull/10): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#9](https://github.com/PrestaShop/statsvisits/pull/9): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#14](https://github.com/PrestaShop/statsstock/pull/14): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#13](https://github.com/PrestaShop/statsstock/pull/13): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#15](https://github.com/PrestaShop/statssales/pull/15): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#14](https://github.com/PrestaShop/statssales/pull/14): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#10](https://github.com/PrestaShop/statsregistrations/pull/10): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#9](https://github.com/PrestaShop/statsregistrations/pull/9): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17](https://github.com/PrestaShop/statsproduct/pull/17): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#16](https://github.com/PrestaShop/statsproduct/pull/16): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11](https://github.com/PrestaShop/statspersonalinfos/pull/11): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#10](https://github.com/PrestaShop/statspersonalinfos/pull/10): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#8](https://github.com/PrestaShop/statsorigin/pull/8): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#7](https://github.com/PrestaShop/statsorigin/pull/7): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9](https://github.com/PrestaShop/statsnewsletter/pull/9): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#8](https://github.com/PrestaShop/statsnewsletter/pull/8): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#15](https://github.com/PrestaShop/statslive/pull/15): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#14](https://github.com/PrestaShop/statslive/pull/14): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17](https://github.com/PrestaShop/statsforecast/pull/17): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#16](https://github.com/PrestaShop/statsforecast/pull/16): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#12](https://github.com/PrestaShop/statsequipment/pull/12): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#11](https://github.com/PrestaShop/statsequipment/pull/11): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16](https://github.com/PrestaShop/statsdata/pull/16): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#15](https://github.com/PrestaShop/statsdata/pull/15): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17](https://github.com/PrestaShop/statscheckup/pull/17): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#16](https://github.com/PrestaShop/statscheckup/pull/16): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13](https://github.com/PrestaShop/statscatalog/pull/13): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#12](https://github.com/PrestaShop/statscatalog/pull/12): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#8](https://github.com/PrestaShop/statscarrier/pull/8): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#7](https://github.com/PrestaShop/statscarrier/pull/7): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9](https://github.com/PrestaShop/statsbestvouchers/pull/9): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#8](https://github.com/PrestaShop/statsbestvouchers/pull/8): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#8](https://github.com/PrestaShop/statsbestsuppliers/pull/8): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#7](https://github.com/PrestaShop/statsbestsuppliers/pull/7): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#8](https://github.com/PrestaShop/statsbestproducts/pull/8): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#7](https://github.com/PrestaShop/statsbestproducts/pull/7): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#8](https://github.com/PrestaShop/statsbestmanufacturers/pull/8): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#7](https://github.com/PrestaShop/statsbestmanufacturers/pull/7): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#14](https://github.com/PrestaShop/statsbestcustomers/pull/14): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#13](https://github.com/PrestaShop/statsbestcustomers/pull/13): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9](https://github.com/PrestaShop/statsbestcategories/pull/9): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#8](https://github.com/PrestaShop/statsbestcategories/pull/8): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#20](https://github.com/PrestaShop/ps_dataprivacy/pull/20): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#19](https://github.com/PrestaShop/ps_dataprivacy/pull/19): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#42](https://github.com/PrestaShop/ps_customtext/pull/42): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#41](https://github.com/PrestaShop/ps_customtext/pull/41): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#22](https://github.com/PrestaShop/ps_customersignin/pull/22): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#27](https://github.com/PrestaShop/ps_customeraccountlinks/pull/27): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#26](https://github.com/PrestaShop/ps_customeraccountlinks/pull/26): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13](https://github.com/PrestaShop/ps_crossselling/pull/13): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#40](https://github.com/PrestaShop/ps_contactinfo/pull/40): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#39](https://github.com/PrestaShop/ps_contactinfo/pull/39): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#36](https://github.com/PrestaShop/ps_checkpayment/pull/36): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#35](https://github.com/PrestaShop/ps_checkpayment/pull/35): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#37](https://github.com/PrestaShop/ps_categorytree/pull/37): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#21](https://github.com/PrestaShop/ps_banner/pull/21): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#64](https://github.com/PrestaShop/productcomments/pull/64): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#63](https://github.com/PrestaShop/productcomments/pull/63): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#144](https://github.com/PrestaShop/gsitemap/pull/144): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#143](https://github.com/PrestaShop/gsitemap/pull/143): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13](https://github.com/PrestaShop/gridhtml/pull/13): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#12](https://github.com/PrestaShop/gridhtml/pull/12): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13](https://github.com/PrestaShop/graphnvd3/pull/13): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#12](https://github.com/PrestaShop/graphnvd3/pull/12): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#31](https://github.com/PrestaShop/dashtrends/pull/31): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#30](https://github.com/PrestaShop/dashtrends/pull/30): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#28](https://github.com/PrestaShop/dashproducts/pull/28): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#22](https://github.com/PrestaShop/dashactivity/pull/22): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#21](https://github.com/PrestaShop/dashactivity/pull/21): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#47](https://github.com/PrestaShop/contactform/pull/47): Fix license headers - part 2, by [@matks](https://github.com/matks)
* [#46](https://github.com/PrestaShop/contactform/pull/46): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#63](https://github.com/PrestaShop/ps_shoppingcart/pull/63): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#53](https://github.com/PrestaShop/blockreassurance/pull/53): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#19](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/19): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#51](https://github.com/PrestaShop/pscleaner/pull/51): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#66](https://github.com/PrestaShop/welcome/pull/66): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11](https://github.com/PrestaShop/statssearch/pull/11): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#12](https://github.com/PrestaShop/sekeywords/pull/12): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#57](https://github.com/PrestaShop/ps_wirepayment/pull/57): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#31](https://github.com/PrestaShop/ps_themecusto/pull/31): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#24](https://github.com/PrestaShop/ps_socialfollow/pull/24): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#43](https://github.com/PrestaShop/ps_sharebuttons/pull/43): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#20](https://github.com/PrestaShop/ps_searchbar/pull/20): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#37](https://github.com/PrestaShop/ps_mainmenu/pull/37): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#100](https://github.com/PrestaShop/ps_linklist/pull/100): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#21](https://github.com/PrestaShop/ps_languageselector/pull/21): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#53](https://github.com/PrestaShop/ps_imageslider/pull/53): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#30](https://github.com/PrestaShop/ps_featuredproducts/pull/30): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#186](https://github.com/PrestaShop/ps_facetedsearch/pull/186): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#66](https://github.com/PrestaShop/ps_emailsubscription/pull/66): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13](https://github.com/PrestaShop/pagesnotfound/pull/13): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#24](https://github.com/PrestaShop/dashgoals/pull/24): Add dependabot config file, by [@PierreRambaud](https://github.com/PierreRambaud)

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@NeOMakinG](https://github.com/NeOMakinG), [@zalexki](https://github.com/zalexki), [@jolelievre](https://github.com/jolelievre), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@davidglezz](https://github.com/davidglezz), [@boubkerbribri](https://github.com/boubkerbribri), [@PierreRambaud](https://github.com/PierreRambaud), [@eternoendless](https://github.com/eternoendless), [@Sinepel](https://github.com/Sinepel), [@matks](https://github.com/matks), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@sowbiba](https://github.com/sowbiba), [@ttoine](https://github.com/ttoine), [@Progi1984](https://github.com/Progi1984), [@dependabot[bot]](https://github.com/apps/dependabot), [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview), [@joserprieto](https://github.com/joserprieto), [@PululuK](https://github.com/PululuK), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@ksaandev](https://github.com/ksaandev), [@olecorre](https://github.com/olecorre), [@Oksydan](https://github.com/Oksydan), [@rmilecki](https://github.com/rmilecki), [@kpodemski](https://github.com/kpodemski), [@dgonzalez360](https://github.com/dgonzalez360), [@Leenwt](https://github.com/Leenwt), [@apacios](https://github.com/apacios)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

