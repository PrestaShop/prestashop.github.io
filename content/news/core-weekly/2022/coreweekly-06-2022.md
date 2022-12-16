---
layout: post
aliases: ["/news/coreweekly-06-2022"]
title:  "PrestaShop Core Weekly - Week 6 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-02-16
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 7th to Sunday 13th of February 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## Releases

* [productcomments](https://github.com/PrestaShop/productcomments) module: [Release 5.0.1](https://github.com/PrestaShop/productcomments/releases/tag/v5.0.1)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [37 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-02-07..2022-02-13) have been created in the project repositories;
- [42 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-02-07..2022-02-13), including [11 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-02-07..2022-02-13) on the core;
- [125 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-02-07..2022-02-13) in the project repositories;
- [115 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-02-07..2022-02-13), including [108 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-02-07..2022-02-13).



## Code changes in the 'develop' branch


### Core
* [#27425](https://github.com/PrestaShop/PrestaShop/pull/27425): Add hooks in the form process for dataProvider, by [@Progi1984](https://github.com/Progi1984)
* [#27417](https://github.com/PrestaShop/PrestaShop/pull/27417): PHPStan (Level 5) on controllers/, by [@Progi1984](https://github.com/Progi1984)
* [#26246](https://github.com/PrestaShop/PrestaShop/pull/26246): Fix robots.txt and generate new one when action on languages. Thank you [@okom3pom](https://github.com/okom3pom)


### Back office
* [#27461](https://github.com/PrestaShop/PrestaShop/pull/27461): Add hook to allow adding extra buttons in module configure toolbar, by [@sowbiba](https://github.com/sowbiba)
* [#27441](https://github.com/PrestaShop/PrestaShop/pull/27441): Don't search all word for customer search when we create an order. Thank you [@okom3pom](https://github.com/okom3pom)
* [#25805](https://github.com/PrestaShop/PrestaShop/pull/25805): Override : Create directory if not exists, by [@Progi1984](https://github.com/Progi1984)
* [#21120](https://github.com/PrestaShop/PrestaShop/pull/21120): Create Back-Office page(s) to manage customer and employee sessions SQL tables, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front office
* [#27437](https://github.com/PrestaShop/PrestaShop/pull/27437): Add hook to display custom content before checkout confirmation. Thank you [@ShaiMagal](https://github.com/ShaiMagal)


### Tests
* [#27612](https://github.com/PrestaShop/PrestaShop/pull/27612): Fix nightly 07-02-2022. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Core
* [#27459](https://github.com/PrestaShop/PrestaShop/pull/27459): Remove duplicate by using distinct connection and also make sure carts are linked, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#27516](https://github.com/PrestaShop/PrestaShop/pull/27516): Fix Entities Mapping. Thank you [@okom3pom](https://github.com/okom3pom)
* [#27150](https://github.com/PrestaShop/PrestaShop/pull/27150): Update links to reach docs.prestashop-project.org instead of doc.prestashop.com. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Front office
* [#27586](https://github.com/PrestaShop/PrestaShop/pull/27586): Fix error while adding product to cart in quantity check. Thank you [@vladikk007](https://github.com/vladikk007)


## Code changes in modules, themes & tools


### Nightly board
* [#75](https://github.com/PrestaShop/nightly-board/pull/75): Bump elliptic from 6.5.2 to 6.5.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#74](https://github.com/PrestaShop/nightly-board/pull/74): Bump y18n from 4.0.0 to 4.0.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#73](https://github.com/PrestaShop/nightly-board/pull/73): Bump undefsafe from 2.0.2 to 2.0.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#72](https://github.com/PrestaShop/nightly-board/pull/72): Bump lodash from 4.17.15 to 4.17.21. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#71](https://github.com/PrestaShop/nightly-board/pull/71): Bump chart.js from 2.9.3 to 2.9.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#70](https://github.com/PrestaShop/nightly-board/pull/70): Bump ua-parser-js from 0.7.21 to 0.7.31. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#69](https://github.com/PrestaShop/nightly-board/pull/69): Bump hosted-git-info from 2.8.5 to 2.8.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#68](https://github.com/PrestaShop/nightly-board/pull/68): Bump ajv from 6.11.0 to 6.12.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#67](https://github.com/PrestaShop/nightly-board/pull/67): Bump ssri from 6.0.1 to 6.0.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#66](https://github.com/PrestaShop/nightly-board/pull/66): Bump browserslist from 4.8.7 to 4.19.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#65](https://github.com/PrestaShop/nightly-board/pull/65): Bump postcss from 7.0.26 to 7.0.39. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#64](https://github.com/PrestaShop/nightly-board/pull/64): Bump color-string from 1.5.3 to 1.9.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#63](https://github.com/PrestaShop/nightly-board/pull/63): Bump path-parse from 1.0.6 to 1.0.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#62](https://github.com/PrestaShop/nightly-board/pull/62): Bump tmpl from 1.0.4 to 1.0.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#61](https://github.com/PrestaShop/nightly-board/pull/61): Bump node-fetch from 2.6.0 to 2.6.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#60](https://github.com/PrestaShop/nightly-board/pull/60): Bump ws from 5.2.2 to 5.2.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#59](https://github.com/PrestaShop/nightly-board/pull/59): Bump tar from 4.4.13 to 4.4.19. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#58](https://github.com/PrestaShop/nightly-board/pull/58): Bump node-sass from 4.13.1 to 7.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### MJML Theme Converter
* [#23](https://github.com/PrestaShop/mjml-theme-converter/pull/23): Bump node-fetch from 2.6.5 to 2.6.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#22](https://github.com/PrestaShop/mjml-theme-converter/pull/22): Bump twig/twig from 2.14.1 to 2.14.11. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Search Bar module
* [#46](https://github.com/PrestaShop/ps_searchbar/pull/46): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Presthubot UI
* [#4](https://github.com/PrestaShop/presthubot-ui/pull/4): Bump tmpl from 1.0.4 to 1.0.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#3](https://github.com/PrestaShop/presthubot-ui/pull/3): Bump object-path from 0.11.4 to 0.11.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#2](https://github.com/PrestaShop/presthubot-ui/pull/2): Bump ws from 5.2.2 to 5.2.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#1](https://github.com/PrestaShop/presthubot-ui/pull/1): Bump node-sass from 4.13.1 to 7.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Main menu module
* [#60](https://github.com/PrestaShop/ps_mainmenu/pull/60): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Example modules
* [#87](https://github.com/PrestaShop/example-modules/pull/87): Bump ajv from 6.10.0 to 6.12.6 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#86](https://github.com/PrestaShop/example-modules/pull/86): Bump node-sass from 5.0.0 to 7.0.0 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Links list module
* [#145](https://github.com/PrestaShop/ps_linklist/pull/145): Improved Github Action (Support PHP 7.1 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Language selector module
* [#28](https://github.com/PrestaShop/ps_languageselector/pull/28): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Image slider module
* [#69](https://github.com/PrestaShop/ps_imageslider/pull/69): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)
* [#64](https://github.com/PrestaShop/ps_imageslider/pull/64): Fix language selector. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Classic theme
* [#7](https://github.com/PrestaShop/classic-theme/pull/7): Bump node-sass from 6.0.1 to 7.0.0 in /_dev. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#6](https://github.com/PrestaShop/classic-theme/pull/6): Bump nanoid from 3.1.23 to 3.2.0 in /_dev. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#5](https://github.com/PrestaShop/classic-theme/pull/5): Bump path-parse from 1.0.6 to 1.0.7 in /_dev. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#4](https://github.com/PrestaShop/classic-theme/pull/4): Update changes from develop, by [@eternoendless](https://github.com/eternoendless)
* [#3](https://github.com/PrestaShop/classic-theme/pull/3): Add linter in CI, by [@eternoendless](https://github.com/eternoendless)
* [#2](https://github.com/PrestaShop/classic-theme/pull/2): Bump nanoid from 3.1.23 to 3.2.0 in /_dev. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#1](https://github.com/PrestaShop/classic-theme/pull/1): Bump path-parse from 1.0.6 to 1.0.7 in /_dev. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Contextual Help API
* [#4](https://github.com/PrestaShop/contextual-help-api/pull/4): Bump twig/twig from 3.3.2 to 3.3.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### OnBoarding module
* [#137](https://github.com/PrestaShop/welcome/pull/137): Bump node-sass from 4.14.1 to 7.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Banner module
* [#43](https://github.com/PrestaShop/ps_banner/pull/43): Bump pathval from 1.1.0 to 1.1.1 in /tests/E2E. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#460](https://github.com/PrestaShop/autoupgrade/pull/460): Bump pathval from 1.1.0 to 1.1.1 in /tests/e2e. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#459](https://github.com/PrestaShop/autoupgrade/pull/459): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)
* [#455](https://github.com/PrestaShop/autoupgrade/pull/455): Updated PREFIX_state.name field to 80 chars.. Thank you [@rickygzz](https://github.com/rickygzz)


### Distribution API
* [#5](https://github.com/PrestaShop/distribution-api/pull/5): Cache DI container, by [@atomiix](https://github.com/atomiix)


### Buy button lite module
* [#58](https://github.com/PrestaShop/ps_buybuttonlite/pull/58): Bump node-sass from 4.13.1 to 7.0.0 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### New Front-office theme
* [#180](https://github.com/PrestaShop/theme-refacto/pull/180): Fix some wrong behaviors inside cart page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#179](https://github.com/PrestaShop/theme-refacto/pull/179): Cart items and responsive, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#176](https://github.com/PrestaShop/theme-refacto/pull/176): Order details and responsive, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#172](https://github.com/PrestaShop/theme-refacto/pull/172): Order page history and responsive, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#171](https://github.com/PrestaShop/theme-refacto/pull/171): Optimizing font usage for RTL languages. Thank you [@mparvazi](https://github.com/mparvazi)


### Product Comments module
* [#135](https://github.com/PrestaShop/productcomments/pull/135): Release 5.0.1, by [@Progi1984](https://github.com/Progi1984)
* [#134](https://github.com/PrestaShop/productcomments/pull/134): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)
* [#132](https://github.com/PrestaShop/productcomments/pull/132): TypeError on addCommentGrades in case of empty request. Thank you [@clotairer](https://github.com/clotairer)
* [#124](https://github.com/PrestaShop/productcomments/pull/124): Renders author name with a link if it is a customer, by [@kpodemski](https://github.com/kpodemski)


### Featured products module
* [#47](https://github.com/PrestaShop/ps_featuredproducts/pull/47): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Faceted search module
* [#614](https://github.com/PrestaShop/ps_facetedsearch/pull/614): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)
* [#613](https://github.com/PrestaShop/ps_facetedsearch/pull/613): Bump @babel/core from 7.17.0 to 7.17.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Custom text module
* [#69](https://github.com/PrestaShop/ps_customtext/pull/69):  Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Customer "Sign in" link module
* [#44](https://github.com/PrestaShop/ps_customersignin/pull/44): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Customer account links module
* [#39](https://github.com/PrestaShop/ps_customeraccountlinks/pull/39): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Prestashop UI Kit
* [#184](https://github.com/PrestaShop/prestashop-ui-kit/pull/184): Bump node-sass from 5.0.0 to 7.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Currency selector
* [#27](https://github.com/PrestaShop/ps_currencyselector/pull/27): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Contact informations module
* [#47](https://github.com/PrestaShop/ps_contactinfo/pull/47): Added Github Action for PHP (and support PHP 5.4 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Category tree links module
* [#57](https://github.com/PrestaShop/ps_categorytree/pull/57): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Customer reassurance block module
* [#355](https://github.com/PrestaShop/blockreassurance/pull/355): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)
* [#354](https://github.com/PrestaShop/blockreassurance/pull/354): Bump @babel/core from 7.17.0 to 7.17.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### User documentation landing page
* [#187](https://github.com/PrestaShop/user-documentation-landing/pull/187): chore(deps-dev): bump babel-jest from 27.5.0 to 27.5.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#186](https://github.com/PrestaShop/user-documentation-landing/pull/186): chore(deps-dev): bump babel-jest from 27.4.6 to 27.5.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation sources
* [#1284](https://github.com/PrestaShop/docs/pull/1284): adding OFL for fonts to the list., by [@ttoine](https://github.com/ttoine)
* [#1283](https://github.com/PrestaShop/docs/pull/1283): Improve commit guidelines, by [@eternoendless](https://github.com/eternoendless)


### Google Analytics module
* [#109](https://github.com/PrestaShop/ps_googleanalytics/pull/109): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Best sellers module
* [#21](https://github.com/PrestaShop/ps_bestsellers/pull/21): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Pages not found module
* [#22](https://github.com/PrestaShop/pagesnotfound/pull/22): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Simple HTML table display module
* [#29](https://github.com/PrestaShop/gridhtml/pull/29): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### NVD3 Charts module
* [#20](https://github.com/PrestaShop/graphnvd3/pull/20): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Dashboard Trends module
* [#53](https://github.com/PrestaShop/dashtrends/pull/53): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Dashboard Products module
* [#41](https://github.com/PrestaShop/dashproducts/pull/41): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Traces
* [#21](https://github.com/PrestaShop/traces/pull/21): Introduce themes category and add Classic + Refacto. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Dashboard Activity module
* [#31](https://github.com/PrestaShop/dashactivity/pull/31): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Available quantities statistics module
* [#22](https://github.com/PrestaShop/statsstock/pull/22): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Shop search statistics module
* [#19](https://github.com/PrestaShop/statssearch/pull/19): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Sales and orders statistics module
* [#29](https://github.com/PrestaShop/statssales/pull/29): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Registrations statistics modules
* [#16](https://github.com/PrestaShop/statsregistrations/pull/16): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Product details statistics module
* [#31](https://github.com/PrestaShop/statsproduct/pull/31): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Registered customer information statistics module
* [#19](https://github.com/PrestaShop/statspersonalinfos/pull/19): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Newsletter statistics module
* [#15](https://github.com/PrestaShop/statsnewsletter/pull/15): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Data mining for statistics module
* [#24](https://github.com/PrestaShop/statsdata/pull/24): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Catalog evaluation statistics module
* [#23](https://github.com/PrestaShop/statscheckup/pull/23): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Wishlist block module
* [#161](https://github.com/PrestaShop/blockwishlist/pull/161): Remove unneeded import in product list, by [@NeOMakinG](https://github.com/NeOMakinG)


### PrestaShop Specifications
* [#291](https://github.com/PrestaShop/prestashop-specs/pull/291): Create Autoupgrade.md. Thank you [@MatShir](https://github.com/MatShir)
* [#290](https://github.com/PrestaShop/prestashop-specs/pull/290): Specs-state. Thank you [@Saimis777](https://github.com/Saimis777)
* [#264](https://github.com/PrestaShop/prestashop-specs/pull/264): Security specification. Thank you [@MatShir](https://github.com/MatShir)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@Progi1984](https://github.com/Progi1984), [@atomiix](https://github.com/atomiix), [@NeOMakinG](https://github.com/NeOMakinG), [@eternoendless](https://github.com/eternoendless), [@ttoine](https://github.com/ttoine), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@mparvazi](https://github.com/mparvazi), [@PrestaEdit](https://github.com/PrestaEdit), [@vladikk007](https://github.com/vladikk007), [@clotairer](https://github.com/clotairer), [@okom3pom](https://github.com/okom3pom), [@rickygzz](https://github.com/rickygzz), [@sowbiba](https://github.com/sowbiba), [@PierreRambaud](https://github.com/PierreRambaud), [@ShaiMagal](https://github.com/ShaiMagal), [@MatShir](https://github.com/MatShir), [@Saimis777](https://github.com/Saimis777), [@kpodemski](https://github.com/kpodemski), [@Hlavtox](https://github.com/Hlavtox)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

