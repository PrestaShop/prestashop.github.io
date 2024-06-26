---
layout: post
aliases: ["/news/coreweekly-42-2021"]
title:  "PrestaShop Core Weekly - Week 42 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-10-25
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 18th to Sunday 24th of October 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week, the maintainers team was very happy to be able to meet in person at [PrestaShop Day France 2021](https://events.prestashop.com/product-day-france-2021/)!

![Maintainers group photo](/assets/images/2021/10/maintainers-photo.jpg)


This was the first time since external maintainers joined the project. What a beautiful day!

Someone might also join this crew very soon... as a new [maintainer application](https://github.com/PrestaShop/open-source/issues/68) was submitted on the 6th of October.


## Releases

* [ps_faviconnotificationbo](https://github.com/PrestaShop/ps_faviconnotificationbo) module: [v2.1.1](https://github.com/PrestaShop/ps_faviconnotificationbo/releases/tag/v2.1.1)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [58 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-10-18..2021-10-24) have been created in the project repositories;
- [41 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-10-18..2021-10-24), including [5 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-10-18..2021-10-24) on the core;
- [136 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-10-18..2021-10-24) in the project repositories;
- [112 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-10-18..2021-10-24), including [90 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-10-18..2021-10-24).



## Code changes in the 'develop' branch


### Core
* [#26382](https://github.com/PrestaShop/PrestaShop/pull/26382): Changed 1.7.9.0 in 8.0.0 in deprecated messages, by [@Progi1984](https://github.com/Progi1984)
* [#26323](https://github.com/PrestaShop/PrestaShop/pull/26323): Remove deprecated in Stock. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26322](https://github.com/PrestaShop/PrestaShop/pull/26322): Remove deprecated getTheme() in Shop. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26318](https://github.com/PrestaShop/PrestaShop/pull/26318): Remove getExentedMessage(). Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26317](https://github.com/PrestaShop/PrestaShop/pull/26317): Remove _getPDO(). Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26316](https://github.com/PrestaShop/PrestaShop/pull/26316): Remove Windows class. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26315](https://github.com/PrestaShop/PrestaShop/pull/26315): Remove isPasswd() method. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26314](https://github.com/PrestaShop/PrestaShop/pull/26314): Remove deprecated methods into Uploader. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26313](https://github.com/PrestaShop/PrestaShop/pull/26313): Remove deprecated PS_SEARCH_MAX_WORD_LENGTH define. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26311](https://github.com/PrestaShop/PrestaShop/pull/26311): Remove formatProductAndVoucherForEmail() in PaymentModule. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26309](https://github.com/PrestaShop/PrestaShop/pull/26309): Remove deprecated methods in Language. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26308](https://github.com/PrestaShop/PrestaShop/pull/26308): Remove deprecated into ImageType. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26307](https://github.com/PrestaShop/PrestaShop/pull/26307): Remove deprecated into GroupReduction. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26306](https://github.com/PrestaShop/PrestaShop/pull/26306): Remove deprecated in Configuration. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26305](https://github.com/PrestaShop/PrestaShop/pull/26305): Remove deprecated code in CmsCategory. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26304](https://github.com/PrestaShop/PrestaShop/pull/26304): Remove deprecated in Category and update code related to it. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26303](https://github.com/PrestaShop/PrestaShop/pull/26303): Remove deprecated into CartRule. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26301](https://github.com/PrestaShop/PrestaShop/pull/26301): Remove deprecated param into Alias constructor. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26300](https://github.com/PrestaShop/PrestaShop/pull/26300): Remove deprecated in AddressFormat. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26259](https://github.com/PrestaShop/PrestaShop/pull/26259): Add actionPresentPaymentOptions hook. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Back office
* [#26210](https://github.com/PrestaShop/PrestaShop/pull/26210): Disable override button in performance page. Thank you [@okom3pom](https://github.com/okom3pom)
* [#25787](https://github.com/PrestaShop/PrestaShop/pull/25787): Fix when duplicating product, out of stock ordering behavior is not copied. Thank you [@gennaris](https://github.com/gennaris)


### Front office
* [#26363](https://github.com/PrestaShop/PrestaShop/pull/26363): Do not display unnecessary li tag ( ps_categorytree ). Thank you [@okom3pom](https://github.com/okom3pom)
* [#26201](https://github.com/PrestaShop/PrestaShop/pull/26201): Order addresses by alias on checkout. Thank you [@tegbessou](https://github.com/tegbessou)


### Tests
* [#26367](https://github.com/PrestaShop/PrestaShop/pull/26367): Fix FO addresses tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#26217](https://github.com/PrestaShop/PrestaShop/pull/26217): Sanity Tests - Refacto all sanity tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#25979](https://github.com/PrestaShop/PrestaShop/pull/25979): Add script to generate .md files with jsdoc, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.8.x' branch


### Back office
* [#26358](https://github.com/PrestaShop/PrestaShop/pull/26358): Fix display of Category discount page. Thank you [@marwachelly](https://github.com/marwachelly)
* [#26328](https://github.com/PrestaShop/PrestaShop/pull/26328): Fix language dropdown when resizing window  in attribute creation page. Thank you [@marwachelly](https://github.com/marwachelly)


## Code changes in modules, themes & tools


### Changes in developer documentation sources
* [#1196](https://github.com/PrestaShop/docs/pull/1196): Updating context of where code goes. Thank you [@Wrenbjor](https://github.com/Wrenbjor)
* [#1195](https://github.com/PrestaShop/docs/pull/1195): Fix `hookActionFrontControllerSetVariables` smarty exemple. Thank you [@beyondsagency](https://github.com/beyondsagency)
* [#1193](https://github.com/PrestaShop/docs/pull/1193): Improve 8.x nginx template for doc. Thank you [@juangiordana](https://github.com/juangiordana)
* [#1192](https://github.com/PrestaShop/docs/pull/1192): Fix typo in heading. Thank you [@templatin](https://github.com/templatin)
* [#1191](https://github.com/PrestaShop/docs/pull/1191): Update Nginx PHP-FPM configuration.. Thank you [@juangiordana](https://github.com/juangiordana)
* [#1183](https://github.com/PrestaShop/docs/pull/1183): Remove Distributing on Addons in theme export. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1182](https://github.com/PrestaShop/docs/pull/1182): Remove addons advertising in themes introduction.. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1175](https://github.com/PrestaShop/docs/pull/1175): Backport PR 1118 to 8.x and adapt list of forms, by [@matks](https://github.com/matks)
* [#1165](https://github.com/PrestaShop/docs/pull/1165): Added documentation & fixed misleading information regarding theme-specific modules. Thank you [@SherloxTV](https://github.com/SherloxTV)


### Product details statistics module
* [#25](https://github.com/PrestaShop/statsproduct/pull/25): Bump to 2.1.0 and change prestashop compatibility, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#24](https://github.com/PrestaShop/statsproduct/pull/24): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Order Notifications on the Favicon module
* [#32](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/32): Release 2.1.1, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#31](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/31): Update version to 2.1.1, by [@PierreRambaud](https://github.com/PierreRambaud)


### Custom text module
* [#63](https://github.com/PrestaShop/ps_customtext/pull/63): Bump to 4.2.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### Product Comments module
* [#113](https://github.com/PrestaShop/productcomments/pull/113): Fix wrong escape param, by [@atomiix](https://github.com/atomiix)


### Customer reassurance block module
* [#298](https://github.com/PrestaShop/blockreassurance/pull/298): Bump mini-css-extract-plugin from 2.4.2 to 2.4.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#297](https://github.com/PrestaShop/blockreassurance/pull/297): Bump style-loader from 3.3.0 to 3.3.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#296](https://github.com/PrestaShop/blockreassurance/pull/296): Bump babel-loader from 8.2.2 to 8.2.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#295](https://github.com/PrestaShop/blockreassurance/pull/295): Bump webpack from 5.59.0 to 5.59.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#294](https://github.com/PrestaShop/blockreassurance/pull/294): Bump webpack from 5.58.2 to 5.59.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#293](https://github.com/PrestaShop/blockreassurance/pull/293): Bump webpack-cli from 4.9.0 to 4.9.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#277](https://github.com/PrestaShop/blockreassurance/pull/277): Fix bad display when multishop enable. Thank you [@okom3pom](https://github.com/okom3pom)


### User documentation landing page
* [#144](https://github.com/PrestaShop/user-documentation-landing/pull/144): chore(deps-dev): bump sass from 1.43.2 to 1.43.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#143](https://github.com/PrestaShop/user-documentation-landing/pull/143): chore(deps-dev): bump babel-jest from 27.3.0 to 27.3.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#142](https://github.com/PrestaShop/user-documentation-landing/pull/142): chore(deps-dev): bump babel-jest from 27.2.5 to 27.3.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Wishlist block module
* [#137](https://github.com/PrestaShop/blockwishlist/pull/137): Fix critical error on statistics page. Thank you [@eopws](https://github.com/eopws)
* [#135](https://github.com/PrestaShop/blockwishlist/pull/135): Fix node version of github action linter, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#134](https://github.com/PrestaShop/blockwishlist/pull/134): Fix undefined variable isPrestaShopVersionLessThan176, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#129](https://github.com/PrestaShop/blockwishlist/pull/129): Bump path-parse from 1.0.6 to 1.0.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#536](https://github.com/PrestaShop/ps_facetedsearch/pull/536): Fix decimal digits. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#535](https://github.com/PrestaShop/ps_facetedsearch/pull/535): Bump babel-loader from 8.2.2 to 8.2.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#534](https://github.com/PrestaShop/ps_facetedsearch/pull/534): Bump webpack from 5.59.0 to 5.59.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#533](https://github.com/PrestaShop/ps_facetedsearch/pull/533): Bump webpack from 5.58.2 to 5.59.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#530](https://github.com/PrestaShop/ps_facetedsearch/pull/530): Bump mocha from 9.1.2 to 9.1.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop Specifications
* [#250](https://github.com/PrestaShop/prestashop-specs/pull/250): Added missing index files & Fixed some headers, by [@Progi1984](https://github.com/Progi1984)
* [#249](https://github.com/PrestaShop/prestashop-specs/pull/249): Add files via upload. Thank you [@Saimis777](https://github.com/Saimis777)
* [#244](https://github.com/PrestaShop/prestashop-specs/pull/244): Create specs of features pages. Thank you [@Saimis777](https://github.com/Saimis777)
* [#236](https://github.com/PrestaShop/prestashop-specs/pull/236): eco tax combination. Thank you [@MatShir](https://github.com/MatShir)
* [#233](https://github.com/PrestaShop/prestashop-specs/pull/233): Add user stories  id_reference carrier. Thank you [@okom3pom](https://github.com/okom3pom)
* [#184](https://github.com/PrestaShop/prestashop-specs/pull/184): Create international-locations-zones.md. Thank you [@mehrshadz](https://github.com/mehrshadz)
* [#181](https://github.com/PrestaShop/prestashop-specs/pull/181): Create international-localization-localization.md. Thank you [@mehrshadz](https://github.com/mehrshadz)


### PrestaShop contributors website
* [#60](https://github.com/PrestaShop/TopContributors/pull/60): Release to Master, by [@Progi1984](https://github.com/Progi1984)
* [#59](https://github.com/PrestaShop/TopContributors/pull/59): Release to Integration, by [@Progi1984](https://github.com/Progi1984)
* [#58](https://github.com/PrestaShop/TopContributors/pull/58): Improve wordings, by [@eternoendless](https://github.com/eternoendless)
* [#57](https://github.com/PrestaShop/TopContributors/pull/57): Deliver to production, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#56](https://github.com/PrestaShop/TopContributors/pull/56): Deliver to staging, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#49](https://github.com/PrestaShop/TopContributors/pull/49): Add subcategories, by [@NeOMakinG](https://github.com/NeOMakinG)


### Simple HTML table display module
* [#24](https://github.com/PrestaShop/gridhtml/pull/24): Replace deprecated jsonEncode methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Catalog statistics module
* [#20](https://github.com/PrestaShop/statscatalog/pull/20): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Available quantities statistics module
* [#16](https://github.com/PrestaShop/statsstock/pull/16): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Sales and orders statistics module
* [#19](https://github.com/PrestaShop/statssales/pull/19): Replace deprecated displayPrice methods. Thank you [@Hlavtox](https://github.com/Hlavtox)


### NVD3 Charts module
* [#15](https://github.com/PrestaShop/graphnvd3/pull/15): Change Tools::jsonEncode to json_encode, by [@PierreRambaud](https://github.com/PierreRambaud)


### QA nightly results
* [#65](https://github.com/PrestaShop/QANightlyResults/pull/65): Merge develop into master, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#64](https://github.com/PrestaShop/QANightlyResults/pull/64): Do not display rows that haven't been processed, by [@PierreRambaud](https://github.com/PierreRambaud)


### PHP Developer Tools
* [#66](https://github.com/PrestaShop/php-dev-tools/pull/66): Update version of PHP CS Fixer. Thank you [@intraordinaire](https://github.com/intraordinaire)
* [#65](https://github.com/PrestaShop/php-dev-tools/pull/65): Array has 2 duplicate keys with value 'non_printable_character'. Thank you [@okom3pom](https://github.com/okom3pom)
* [#64](https://github.com/PrestaShop/php-dev-tools/pull/64): Array has 2 duplicate keys with value 'non_printable_character'. Thank you [@okom3pom](https://github.com/okom3pom)


### New 8.0.0 Front-office theme
* [#88](https://github.com/PrestaShop/theme-refacto/pull/88): Workload 15.10.2021. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Links list module
* [#136](https://github.com/PrestaShop/ps_linklist/pull/136): Fix upgrade when comming from an 1.6 shop, by [@atomiix](https://github.com/atomiix)


### The PrestaShop open source project
* [#65](https://github.com/PrestaShop/open-source/pull/65): Add contributors link in menu. Thank you [@jf-viguier](https://github.com/jf-viguier)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Wrenbjor](https://github.com/Wrenbjor), [@PierreRambaud](https://github.com/PierreRambaud), [@Progi1984](https://github.com/Progi1984), [@atomiix](https://github.com/atomiix), [@boubkerbribri](https://github.com/boubkerbribri), [@okom3pom](https://github.com/okom3pom), [@dependabot[bot]](https://github.com/apps/dependabot), [@eopws](https://github.com/eopws), [@marwachelly](https://github.com/marwachelly), [@beyondsagency](https://github.com/beyondsagency), [@Hlavtox](https://github.com/Hlavtox), [@NeOMakinG](https://github.com/NeOMakinG), [@eternoendless](https://github.com/eternoendless), [@juangiordana](https://github.com/juangiordana), [@Saimis777](https://github.com/Saimis777), [@PrestaEdit](https://github.com/PrestaEdit), [@templatin](https://github.com/templatin), [@intraordinaire](https://github.com/intraordinaire), [@jf-viguier](https://github.com/jf-viguier), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@tegbessou](https://github.com/tegbessou), [@matks](https://github.com/matks), [@SherloxTV](https://github.com/SherloxTV), [@gennaris](https://github.com/gennaris), [@MatShir](https://github.com/MatShir), [@mehrshadz](https://github.com/mehrshadz)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
