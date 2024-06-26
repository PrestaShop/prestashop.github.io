---
layout: post
aliases: ["/news/coreweekly-21-2022"]
title:  "PrestaShop Core Weekly - Week 21 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-05-30
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 23rd to Sunday 29th of May 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week @atomiix was able to deliver [PHP8.1 compatibility for the Core](https://github.com/PrestaShop/PrestaShop/pull/28402)! This is great news and it means PrestaShop 8 will be compatible with PHP8.1.

We will be able to explain more about this in the next session of the public PrestaShop demo that will happen [this week on Wednesday at 4pm CET](https://www.youtube.com/watch?v=91uXhWYFGDU).


## A quick update about PrestaShop's GitHub issues and pull requests:

- [33 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-05-23..2022-05-29) have been created in the project repositories;
- [24 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-05-23..2022-05-29), including [3 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-05-23..2022-05-29) on the core;
- [62 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-05-23..2022-05-29) in the project repositories;
- [47 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-05-23..2022-05-29), including [40 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-05-23..2022-05-29).


## Code changes in the 'develop' branch


### Core
* [#28559](https://github.com/PrestaShop/PrestaShop/pull/28559): Micro performance optimizations in Order class, by [@kpodemski](https://github.com/kpodemski)
* [#28547](https://github.com/PrestaShop/PrestaShop/pull/28547): Remove use of Tools::stripslashes, by [@kpodemski](https://github.com/kpodemski)
* [#28545](https://github.com/PrestaShop/PrestaShop/pull/28545): Remove deprecated in Cart model. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28402](https://github.com/PrestaShop/PrestaShop/pull/28402): PHP 8.1 compatibility, by [@atomiix](https://github.com/atomiix)
* [#26572](https://github.com/PrestaShop/PrestaShop/pull/26572): Add a button for disabling all non native-in modules in Performance page, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#28584](https://github.com/PrestaShop/PrestaShop/pull/28584): Product list bulk delete and duplicate actions. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28577](https://github.com/PrestaShop/PrestaShop/pull/28577): Combination list form inside product form, and combinations available labels, by [@jolelievre](https://github.com/jolelievre)
* [#28561](https://github.com/PrestaShop/PrestaShop/pull/28561): Toggle "show price" and "delivery times" inputs visibility. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28558](https://github.com/PrestaShop/PrestaShop/pull/28558): Add fixed quantity update to bulk combination edition. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28533](https://github.com/PrestaShop/PrestaShop/pull/28533): Introduce SetDefaultCombinationCommand. Thank you [@zuk3975](https://github.com/zuk3975)
* [#26004](https://github.com/PrestaShop/PrestaShop/pull/26004): Migrating product list part 2. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)


### Front office
* [#27755](https://github.com/PrestaShop/PrestaShop/pull/27755): Move registration logic to new controller. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#27187](https://github.com/PrestaShop/PrestaShop/pull/27187): Set country from browser language if option is set in customer address. Thank you [@Amoifr](https://github.com/Amoifr)


### Web services
* [#27952](https://github.com/PrestaShop/PrestaShop/pull/27952): Adding the PATCH method to the REST API (webservices) + API cache management FIX. Thank you [@nsorosac](https://github.com/nsorosac)


### Tests
* [#28575](https://github.com/PrestaShop/PrestaShop/pull/28575): Fix UI tests by selecting country on FO, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#28527](https://github.com/PrestaShop/PrestaShop/pull/28527): Functional Tests - Add test 'Choose address' in create order page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Hummingbird theme
* [#302](https://github.com/PrestaShop/hummingbird/pull/302): img responsive on modal shopingcart. Thank you [@rodriciru](https://github.com/rodriciru)
* [#294](https://github.com/PrestaShop/hummingbird/pull/294): Improve quickview modal. Thank you [@mparvazi](https://github.com/mparvazi)
* [#293](https://github.com/PrestaShop/hummingbird/pull/293): TypeScript types improvements, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#292](https://github.com/PrestaShop/hummingbird/pull/292): Add customization modal for product line. Thank you [@mparvazi](https://github.com/mparvazi)
* [#288](https://github.com/PrestaShop/hummingbird/pull/288): Improve useQuantityInput and fix minor bug. Thank you [@mparvazi](https://github.com/mparvazi)
* [#285](https://github.com/PrestaShop/hummingbird/pull/285): No Carousel on no image product. Thank you [@rodriciru](https://github.com/rodriciru)


### Docker internal images
* [#37](https://github.com/PrestaShop/docker-internal-images/pull/37): Add env var to customize PHP memory limit, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Customer reassurance block module
* [#406](https://github.com/PrestaShop/blockreassurance/pull/406): Bump @babel/eslint-parser from 7.17.0 to 7.18.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#405](https://github.com/PrestaShop/blockreassurance/pull/405): Bump eslint from 8.15.0 to 8.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### stylelint configuration
* [#38](https://github.com/PrestaShop/stylelint-config/pull/38): Bump stylelint from 14.8.3 to 14.8.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#35](https://github.com/PrestaShop/stylelint-config/pull/35): Bump stylelint from 14.8.2 to 14.8.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#665](https://github.com/PrestaShop/ps_facetedsearch/pull/665): Bump @babel/eslint-parser from 7.17.0 to 7.18.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#664](https://github.com/PrestaShop/ps_facetedsearch/pull/664): Bump @babel/preset-env from 7.18.0 to 7.18.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#663](https://github.com/PrestaShop/ps_facetedsearch/pull/663): Bump @babel/core from 7.18.0 to 7.18.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#662](https://github.com/PrestaShop/ps_facetedsearch/pull/662): Bump eslint from 8.15.0 to 8.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Traces
* [#26](https://github.com/PrestaShop/traces/pull/26): Bump guzzlehttp/guzzle from 6.5.2 to 6.5.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Wishlist block module
* [#173](https://github.com/PrestaShop/blockwishlist/pull/173): Fix modal display block. Thank you [@rodriciru](https://github.com/rodriciru)


### The PrestaShop open source project
* [#99](https://github.com/PrestaShop/open-source/pull/99): Improve release process final steps, by [@matks](https://github.com/matks)


### Architecture Decision Records repository
* [#26](https://github.com/PrestaShop/ADR/pull/26): 0018 - Add ADR about Horizontal Migration. Thank you [@tegbessou](https://github.com/tegbessou)


### Changes in developer documentation sources
* [#1375](https://github.com/PrestaShop/docs/pull/1375): Explain what files does what in form themes, by [@matks](https://github.com/matks)
* [#1371](https://github.com/PrestaShop/docs/pull/1371): Update Faceted search doc, by [@matks](https://github.com/matks)


### Distribution API client
* [#3](https://github.com/PrestaShop/ps_distributionapiclient/pull/3): Provide only necessary info from distribution API when module is on disk, by [@atomiix](https://github.com/atomiix)


### PrestaShop Specifications
* [#294](https://github.com/PrestaShop/prestashop-specs/pull/294): Zones specs. Thank you [@Saimis777](https://github.com/Saimis777)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@rodriciru](https://github.com/rodriciru), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@dependabot[bot]](https://github.com/apps/dependabot), [@jolelievre](https://github.com/jolelievre), [@mparvazi](https://github.com/mparvazi), [@zuk3975](https://github.com/zuk3975), [@NeOMakinG](https://github.com/NeOMakinG), [@boubkerbribri](https://github.com/boubkerbribri), [@kpodemski](https://github.com/kpodemski), [@PrestaEdit](https://github.com/PrestaEdit), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@matks](https://github.com/matks), [@tegbessou](https://github.com/tegbessou), [@atomiix](https://github.com/atomiix), [@nsorosac](https://github.com/nsorosac), [@Hlavtox](https://github.com/Hlavtox), [@Saimis777](https://github.com/Saimis777), [@Amoifr](https://github.com/Amoifr), [@Progi1984](https://github.com/Progi1984), [@JevgenijVisockij](https://github.com/JevgenijVisockij)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

