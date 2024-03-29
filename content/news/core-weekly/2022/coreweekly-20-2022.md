---
layout: post
aliases: ["/news/coreweekly-20-2022"]
title:  "PrestaShop Core Weekly - Week 20 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-05-23
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 16th to Sunday 22th of May 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## Releases

* [Ps_wirepayment](https://github.com/PrestaShop/ps_wirepayment) module: [v2.1.3](https://github.com/PrestaShop/ps_wirepayment/releases/tag/v2.1.3)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [44 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-05-16..2022-05-22) have been created in the project repositories;
- [36 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-05-16..2022-05-22), including [7 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-05-16..2022-05-22) on the core;
- [61 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-05-16..2022-05-22) in the project repositories;
- [53 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-05-16..2022-05-22), including [44 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-05-16..2022-05-22).


## Code changes in the 'develop' branch


### Core
* [#28544](https://github.com/PrestaShop/PrestaShop/pull/28544): Removed deprecated in Carrier class. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#28461](https://github.com/PrestaShop/PrestaShop/pull/28461): Bump guzzle version to 7.4 (PHP 8.1 compatibility). Thank you [@intraordinaire](https://github.com/intraordinaire)
* [#28460](https://github.com/PrestaShop/PrestaShop/pull/28460): Use config vars in `GetOrderForViewingHandler`. Thank you [@PululuK](https://github.com/PululuK)
* [#28315](https://github.com/PrestaShop/PrestaShop/pull/28315): Fix delivery information for the product, by [@kpodemski](https://github.com/kpodemski)
* [#28198](https://github.com/PrestaShop/PrestaShop/pull/28198): Remove deprecated method inside AbstractProvider. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28072](https://github.com/PrestaShop/PrestaShop/pull/28072): Be able to skip CSV Header in CSV export. Thank you [@Shoprunners](https://github.com/Shoprunners)
* [#27575](https://github.com/PrestaShop/PrestaShop/pull/27575): CountryId and CustomerId VO not allow zero. Thank you [@Amoifr](https://github.com/Amoifr)


### Back office
* [#28526](https://github.com/PrestaShop/PrestaShop/pull/28526): Fix wording. Thank you [@marsaldev](https://github.com/marsaldev)
* [#28506](https://github.com/PrestaShop/PrestaShop/pull/28506): Empty state for combinations list. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28458](https://github.com/PrestaShop/PrestaShop/pull/28458): HelperList: remove notice if specificConfirmDelete is set to false #27718. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#28390](https://github.com/PrestaShop/PrestaShop/pull/28390): Improve / refactor specific price form on page V2, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#28266](https://github.com/PrestaShop/PrestaShop/pull/28266): Add regex constraint to the webservice key. Thank you [@marsaldev](https://github.com/marsaldev)


### Web services
* [#28280](https://github.com/PrestaShop/PrestaShop/pull/28280): Fix PHP7.4 bug webservice blank schemas for resources. Thank you [@preoteasa](https://github.com/preoteasa)


### Tests
* [#28507](https://github.com/PrestaShop/PrestaShop/pull/28507): Fix nightly 16/05/2022 - Fix help card test on attributes page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Front office
* [#28426](https://github.com/PrestaShop/PrestaShop/pull/28426): Fix product images size consistency. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#28231](https://github.com/PrestaShop/PrestaShop/pull/28231): Fix totals excluding tax in confirmation email. Thank you [@Seb33300](https://github.com/Seb33300)


## Code changes in modules, themes & tools


### Hummingbird theme
* [#289](https://github.com/PrestaShop/hummingbird/pull/289): Improve maintenance page design. Thank you [@mparvazi](https://github.com/mparvazi)
* [#284](https://github.com/PrestaShop/hummingbird/pull/284): Delete _variable-overrides.scss. Thank you [@rodriciru](https://github.com/rodriciru)
* [#283](https://github.com/PrestaShop/hummingbird/pull/283): Fix show image on non image product. Thank you [@rodriciru](https://github.com/rodriciru)
* [#279](https://github.com/PrestaShop/hummingbird/pull/279): Move window.prestashop.themeSelectors selectors to window.Theme.selectors. Thank you [@MeKeyCool](https://github.com/MeKeyCool)


### Customer reassurance block module
* [#402](https://github.com/PrestaShop/blockreassurance/pull/402): Bump @babel/core from 7.17.12 to 7.18.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#401](https://github.com/PrestaShop/blockreassurance/pull/401): Bump sass-loader from 12.6.0 to 13.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#400](https://github.com/PrestaShop/blockreassurance/pull/400): Bump @babel/core from 7.17.10 to 7.17.12. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#661](https://github.com/PrestaShop/ps_facetedsearch/pull/661): Bump @babel/core from 7.17.12 to 7.18.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#660](https://github.com/PrestaShop/ps_facetedsearch/pull/660): Bump @babel/preset-env from 7.17.12 to 7.18.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#659](https://github.com/PrestaShop/ps_facetedsearch/pull/659): Bump sass-loader from 12.6.0 to 13.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#658](https://github.com/PrestaShop/ps_facetedsearch/pull/658): Bump @babel/core from 7.17.10 to 7.17.12. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#657](https://github.com/PrestaShop/ps_facetedsearch/pull/657): Bump @babel/preset-env from 7.17.10 to 7.17.12. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### presthubot
* [#50](https://github.com/PrestaShop/presthubot/pull/50): Fix branch display on nightly report on slack, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#49](https://github.com/PrestaShop/presthubot/pull/49): Add new command to extract issue resolved in a milestone. Thank you [@Amoifr](https://github.com/Amoifr)


### Classic theme
* [#29](https://github.com/PrestaShop/classic-theme/pull/29): Fix product images size consistency. Thank you [@MeKeyCool](https://github.com/MeKeyCool)


### Docker images
* [#304](https://github.com/PrestaShop/docker/pull/304): Add 1.7.8.6 release versions, by [@matks](https://github.com/matks)


### Changes in developer documentation sources
* [#1384](https://github.com/PrestaShop/docs/pull/1384): Add ColorColumn doc. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)
* [#1383](https://github.com/PrestaShop/docs/pull/1383): Fix wording. Thank you [@Unsleeping](https://github.com/Unsleeping)
* [#1382](https://github.com/PrestaShop/docs/pull/1382): Fix images. Thank you [@Unsleeping](https://github.com/Unsleeping)
* [#1380](https://github.com/PrestaShop/docs/pull/1380): Fix `Naming conventions` wording. Thank you [@Unsleeping](https://github.com/Unsleeping)
* [#1379](https://github.com/PrestaShop/docs/pull/1379): Fix wording. Thank you [@Unsleeping](https://github.com/Unsleeping)


### Wire payment module
* [#75](https://github.com/PrestaShop/ps_wirepayment/pull/75): Release 2.1.3, by [@atomiix](https://github.com/atomiix)


### Auto Upgrade module
* [#483](https://github.com/PrestaShop/autoupgrade/pull/483): Release 4.14.1, by [@matks](https://github.com/matks)


### Email Alerts module
* [#109](https://github.com/PrestaShop/ps_emailalerts/pull/109): Different emails notification. Thank you [@marsaldev](https://github.com/marsaldev)


### LocalizationFiles
* [#12](https://github.com/PrestaShop/LocalizationFiles/pull/12): Update mx.xml. Thank you [@rickygzz](https://github.com/rickygzz)


### Cash on delivery module
* [#32](https://github.com/PrestaShop/ps_cashondelivery/pull/32): Multiple bugfixes and improvements, by [@Matt75](https://github.com/Matt75)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@mparvazi](https://github.com/mparvazi), [@dependabot[bot]](https://github.com/apps/dependabot), [@jf-viguier](https://github.com/jf-viguier), [@boubkerbribri](https://github.com/boubkerbribri), [@MeKeyCool](https://github.com/MeKeyCool), [@matks](https://github.com/matks), [@marsaldev](https://github.com/marsaldev), [@rodriciru](https://github.com/rodriciru), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@zuk3975](https://github.com/zuk3975), [@LouisAUTHIE](https://github.com/LouisAUTHIE), [@Unsleeping](https://github.com/Unsleeping), [@intraordinaire](https://github.com/intraordinaire), [@PululuK](https://github.com/PululuK), [@atomiix](https://github.com/atomiix), [@matthieu-rolland](https://github.com/matthieu-rolland), [@kpodemski](https://github.com/kpodemski), [@preoteasa](https://github.com/preoteasa), [@Amoifr](https://github.com/Amoifr), [@Seb33300](https://github.com/Seb33300), [@PrestaEdit](https://github.com/PrestaEdit), [@Shoprunners](https://github.com/Shoprunners), [@rickygzz](https://github.com/rickygzz), [@Matt75](https://github.com/Matt75)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

