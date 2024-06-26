---
layout: post
aliases: ["/news/coreweekly-17-2020"]
title:  "PrestaShop Core Weekly - Week 17 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-04-29
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 20th to Sunday 26th of April 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

The 1.7.7.0 beta release is currently being built and will be available after tests and approval from the QA team. You can [follow the status of the 1.7.7.0 on GitHub](https://github.com/PrestaShop/PrestaShop/issues/18647).

## A quick update about PrestaShop's GitHub issues and pull requests:

- [103 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-04-20..2020-04-26) have been created in the project repositories;
- [66 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-04-20..2020-04-26), including [17 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-04-20..2020-04-26) on the core;
- [56 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-04-20..2020-04-26) in the project repositories;
- [119 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-04-20..2020-04-26), including [70 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-04-20..2020-04-26).
        


## Code changes in the 'develop' branch


### Core
* [#18778](https://github.com/PrestaShop/PrestaShop/pull/18778): Revert "Removed redundant code", by [@PierreRambaud](https://github.com/PierreRambaud)
* [#18696](https://github.com/PrestaShop/PrestaShop/pull/18696): Fix invoice number in multishop context. Thank you [@simondaigre](https://github.com/simondaigre)
* [#18005](https://github.com/PrestaShop/PrestaShop/pull/18005): Fix minor code issues, by [@eternoendless](https://github.com/eternoendless)


### Back office
* [#18735](https://github.com/PrestaShop/PrestaShop/pull/18735): Fix "mixed content" message.. Thank you [@OliverCG](https://github.com/OliverCG)


### Front office
* [#18704](https://github.com/PrestaShop/PrestaShop/pull/18704): Prevent Tabnabbing. Thank you [@h8h](https://github.com/h8h)
* [#16872](https://github.com/PrestaShop/PrestaShop/pull/16872): Allow everyone to track their order from guest tracking. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Web services
* [#18006](https://github.com/PrestaShop/PrestaShop/pull/18006): Remove notice on field value on webservice. Thank you [@Klemart3D](https://github.com/Klemart3D)


## Code changes in the '1.7.7.x' branch


### Core
* [#18617](https://github.com/PrestaShop/PrestaShop/pull/18617): Make computing precision matching currency's display precision, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#18475](https://github.com/PrestaShop/PrestaShop/pull/18475): Enable controllers as a service through autowiring, by [@matks](https://github.com/matks)


### Back office
* [#18764](https://github.com/PrestaShop/PrestaShop/pull/18764): Fix exception when deleting address from customer view, by [@sowbiba](https://github.com/sowbiba)
* [#18686](https://github.com/PrestaShop/PrestaShop/pull/18686): Rename CountryChoiceType options using camel case convention, by [@jolelievre](https://github.com/jolelievre)
* [#18635](https://github.com/PrestaShop/PrestaShop/pull/18635): Show confirm modal when adding product with new invoice. Thank you [@zuk3975](https://github.com/zuk3975)
* [#18566](https://github.com/PrestaShop/PrestaShop/pull/18566): Fix bad display of customizable product on create order page by removing margin and overflow, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#18544](https://github.com/PrestaShop/PrestaShop/pull/18544): Show new invoice information when adding product with new invoice in BO Order. Thank you [@zuk3975](https://github.com/zuk3975)
* [#18524](https://github.com/PrestaShop/PrestaShop/pull/18524): Remove ability to apply discount on all invoices in order view page. Thank you [@zuk3975](https://github.com/zuk3975)
* [#18464](https://github.com/PrestaShop/PrestaShop/pull/18464): Add modal to customer address listing on bulk action, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#18445](https://github.com/PrestaShop/PrestaShop/pull/18445): Fix tooltip on product buttons of Order View staying on the page after delete and not being visible when adding a product, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#18329](https://github.com/PrestaShop/PrestaShop/pull/18329): View order page: Display correction - 2, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#18196](https://github.com/PrestaShop/PrestaShop/pull/18196): Refresh documents tab when adding product in order view page, by [@atomiix](https://github.com/atomiix)


### Front office
* [#18743](https://github.com/PrestaShop/PrestaShop/pull/18743): Fix FO Exception after category add on multilang shop, by [@sowbiba](https://github.com/sowbiba)
* [#18427](https://github.com/PrestaShop/PrestaShop/pull/18427): Fix issue when there is a quantity discount on combination products, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Tests
* [#18804](https://github.com/PrestaShop/PrestaShop/pull/18804): Change selectors, by [@SimonGrn](https://github.com/SimonGrn)
* [#18800](https://github.com/PrestaShop/PrestaShop/pull/18800): Functional tests - Fix number of element in table for emails logs page , by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18797](https://github.com/PrestaShop/PrestaShop/pull/18797): Functional tests - Refacto tests order settings, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18775](https://github.com/PrestaShop/PrestaShop/pull/18775): Functional tests - Renaming functions in files.js, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18774](https://github.com/PrestaShop/PrestaShop/pull/18774): Functional tests - Fix test filter email logs , by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18756](https://github.com/PrestaShop/PrestaShop/pull/18756): Functional tests - Add test delivery time out of stocks, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18754](https://github.com/PrestaShop/PrestaShop/pull/18754): Functional tests - View customer. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18753](https://github.com/PrestaShop/PrestaShop/pull/18753): Functional tests - Fix test name export languages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18745](https://github.com/PrestaShop/PrestaShop/pull/18745): Functional tests - Improve test 'Filter stocks by categories', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18720](https://github.com/PrestaShop/PrestaShop/pull/18720): Functional tests - change url for reporting, by [@SimonGrn](https://github.com/SimonGrn)
* [#18718](https://github.com/PrestaShop/PrestaShop/pull/18718): Functional tests - Refacto credit slips tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18716](https://github.com/PrestaShop/PrestaShop/pull/18716): Functional tests - Fix tests enable brands and suppliers pages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18575](https://github.com/PrestaShop/PrestaShop/pull/18575): Functional tests - Fix delete with bulk actions address. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18477](https://github.com/PrestaShop/PrestaShop/pull/18477): Functional tests - Product settings label oos allowed/denied backorders. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### PrestaShop-webservice-lib
* [#65](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/65): PHPDoc: add missing @return and @throws statements to documentation, by [@eternoendless](https://github.com/eternoendless)
* [#64](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/64): Replace static calls using $this, by [@eternoendless](https://github.com/eternoendless)
* [#63](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/63): Added missing @throws and @return + code fixes., by [@eternoendless](https://github.com/eternoendless)
* [#62](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/62): Extracting curl default parameters. Thank you [@dpatou](https://github.com/dpatou)
* [#60](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/60): Vary debug output when running at cli. Thank you [@fukawi2](https://github.com/fukawi2)
* [#55](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/55): Added .idea directory to .gitignore. Thank you [@marekhanus](https://github.com/marekhanus)
* [#47](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/47): Trim webservice's response before XML parsing.. Thank you [@pangteypiyush](https://github.com/pangteypiyush)
* [#42](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/42): Fix wrong relative path in examples. Thank you [@nicolasverlhiac](https://github.com/nicolasverlhiac)
* [#8](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/8): Library incompatible with the 1.6. Thank you [@totti240282](https://github.com/totti240282)


### Issue Bot
* [#5](https://github.com/PrestaShop/issuebot/pull/5): Avoid remove assignee in some rules, by [@sowbiba](https://github.com/sowbiba)


### The PrestaShop open source project
* [#33](https://github.com/PrestaShop/open-source/pull/33): slack improvements, by [@ttoine](https://github.com/ttoine)


### nightly-board
* [#28](https://github.com/PrestaShop/nightly-board/pull/28): Remove unused console log, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#27](https://github.com/PrestaShop/nightly-board/pull/27): Home mobile filter list by id and not using tests, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#25](https://github.com/PrestaShop/nightly-board/pull/25): Fix percentages on main suite, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24](https://github.com/PrestaShop/nightly-board/pull/24): Fix some bugs on mobile, adjust informations on suites and kick overflow on graph, by [@NeOMakinG](https://github.com/NeOMakinG)


### Docker images
* [#219](https://github.com/PrestaShop/docker/pull/219): Fix configuration of GD on PHP 5.6 images, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#218](https://github.com/PrestaShop/docker/pull/218): Release 1.7.6.5, by [@PierreRambaud](https://github.com/PierreRambaud)


### Wishlist block
* [#32](https://github.com/PrestaShop/blockwishlist/pull/32): [WIP]Improvment/new blockwishlist. Thank you [@pablopolyte](https://github.com/pablopolyte)


### QA nightly results
* [#38](https://github.com/PrestaShop/QANightlyResults/pull/38): Add SVG badge generator, change header content-type, by [@SimonGrn](https://github.com/SimonGrn)
* [#37](https://github.com/PrestaShop/QANightlyResults/pull/37): update README, by [@SimonGrn](https://github.com/SimonGrn)
* [#36](https://github.com/PrestaShop/QANightlyResults/pull/36): DELETE route to delete a report, filters for browser and campaign in homepage, by [@SimonGrn](https://github.com/SimonGrn)


### Changes in developer documentation
* [#507](https://github.com/PrestaShop/docs/pull/507): Webservice tutorial, by [@jolelievre](https://github.com/jolelievre)


### Architecture Decision Records repository
* [#11](https://github.com/PrestaShop/ADR/pull/11): Add decision regarding HTML selectors, by [@SimonGrn](https://github.com/SimonGrn)


### Core Weekly Generator tool
* [#29](https://github.com/PrestaShop/core-weekly-generator/pull/29): Adding projects to the list., by [@ttoine](https://github.com/ttoine)


### PSGDPR
* [#83](https://github.com/PrestaShop/psgdpr/pull/83): Remove ModuleAdminControllers from SEO & URLs page, by [@Matt75](https://github.com/Matt75)


### Auto Upgrade module
* [#345](https://github.com/PrestaShop/autoupgrade/pull/345): Fix v4.9.0 upgrade filename, by [@matks](https://github.com/matks)


### TranslationTools Bundle
* [#69](https://github.com/PrestaShop/TranslationToolsBundle/pull/69): Bump symfony/http-foundation from 4.2.8 to 4.4.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### RSS products feed
* [#7](https://github.com/PrestaShop/ps_feeder/pull/7): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Advertising block
* [#10](https://github.com/PrestaShop/ps_advertising/pull/10): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Legal Compliance
* [#63](https://github.com/PrestaShop/ps_legalcompliance/pull/63): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Cash on delivery (COD)
* [#28](https://github.com/PrestaShop/ps_cashondelivery/pull/28): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Customer data privacy block
* [#11](https://github.com/PrestaShop/ps_dataprivacy/pull/11): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@SimonGrn](https://github.com/SimonGrn), [@boubkerbribri](https://github.com/boubkerbribri), [@PierreRambaud](https://github.com/PierreRambaud), [@eternoendless](https://github.com/eternoendless), [@sowbiba](https://github.com/sowbiba), [@ttoine](https://github.com/ttoine), [@NeOMakinG](https://github.com/NeOMakinG), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@pablopolyte](https://github.com/pablopolyte), [@jolelievre](https://github.com/jolelievre), [@OliverCG](https://github.com/OliverCG), [@h8h](https://github.com/h8h), [@simondaigre](https://github.com/simondaigre), [@matks](https://github.com/matks), [@zuk3975](https://github.com/zuk3975), [@matthieu-rolland](https://github.com/matthieu-rolland), [@LouiseBonnard](https://github.com/LouiseBonnard), [@Matt75](https://github.com/Matt75), [@arouiadib](https://github.com/arouiadib), [@atomiix](https://github.com/atomiix), [@dpatou](https://github.com/dpatou), [@Klemart3D](https://github.com/Klemart3D), [@fukawi2](https://github.com/fukawi2), [@Hlavtox](https://github.com/Hlavtox), [@dependabot[bot]](https://github.com/apps/dependabot), [@MathiasReker](https://github.com/MathiasReker), [@marekhanus](https://github.com/marekhanus), [@pangteypiyush](https://github.com/pangteypiyush), [@nicolasverlhiac](https://github.com/nicolasverlhiac), [@totti240282](https://github.com/totti240282)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
