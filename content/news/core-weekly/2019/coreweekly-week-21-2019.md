---
layout: post
aliases: ["/news/coreweekly-week-21-2019"]
title:  "PrestaShop Core Weekly - Week 21 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-05-31 10:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 20th to Sunday 26th of May 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

As you will see, the work on the upcoming 1.7.6 version is going on well, and the faceted search module is still needing some improvements.

The PrestaShop Developers Team is also working on content for the [PSD Paris 2019](https://www.prestashop.com/fr/evenements/prestashop-day-paris): most of them have a talk or a workshop. And they are eager to meet your there.


## A quick update about PrestaShop's GitHub issues and pull requests

- [84 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-05-20..2019-05-26) have been created in the project repositories;
- [77 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-05-20..2019-05-26), including [18 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-05-20..2019-05-26) on the core;
- [62 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-05-20..2019-05-26) in the project repositories;
- [54 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-05-20..2019-05-26), including [46 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-05-20..2019-05-26).


## Code changes in the 'develop' branch

### Core

* [#13554](https://github.com/PrestaShop/PrestaShop/pull/13554): Prepares Command/Query API for migrating "Create order" page. Thank you [@sarjon](https://github.com/sarjon)
* [#13865](https://github.com/PrestaShop/PrestaShop/pull/13865): Merge 1.7.6.x to develop - 20/05/2019, by [@matks](https://github.com/matks)
* [#13932](https://github.com/PrestaShop/PrestaShop/pull/13932): Merge 1.7.6.x to develop - 23/05/2019, by [@matks](https://github.com/matks)
* [#13967](https://github.com/PrestaShop/PrestaShop/pull/13967): Merge 1.7.6.x to develop - 24/05/2019, by [@matks](https://github.com/matks)


### Front

* [#13804](https://github.com/PrestaShop/PrestaShop/pull/13804):  Fix #9763 smarty compilation ID multi shop / multi theme. Thank you [@202-ecommerce](https://github.com/202-ecommerce)


## Code changes in the "1.7.6.x" branch (for v1.7.6.0)

### Core

* [#13885](https://github.com/PrestaShop/PrestaShop/pull/13885): Force array cache for doctrine, by [@jolelievre](https://github.com/jolelievre)


### Back office

* [#13690](https://github.com/PrestaShop/PrestaShop/pull/13690): Theme and logo page design fixes. Thank you [@tomas862](https://github.com/tomas862)
* [#13797](https://github.com/PrestaShop/PrestaShop/pull/13797): Adds missing legacy links for currency controller. Thank you [@tomas862](https://github.com/tomas862)
* [#13813](https://github.com/PrestaShop/PrestaShop/pull/13813): Fixes toggling Category status in Monitoring page. Thank you [@sarjon](https://github.com/sarjon)
* [#13840](https://github.com/PrestaShop/PrestaShop/pull/13840): Fix resetting sort and items per page on list filters reset action. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13847](https://github.com/PrestaShop/PrestaShop/pull/13847): Delete legacy AdminManufacturer controller. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13849](https://github.com/PrestaShop/PrestaShop/pull/13849): Deletes legacy AdminCms controllers. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13850](https://github.com/PrestaShop/PrestaShop/pull/13850): Deletes AdminModulesPositions legacy controller. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13852](https://github.com/PrestaShop/PrestaShop/pull/13852): Delete legacy AdminRequestSqlController. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13857](https://github.com/PrestaShop/PrestaShop/pull/13857): Missing legacy links fix for employess controller. Thank you [@tomas862](https://github.com/tomas862)
* [#13866](https://github.com/PrestaShop/PrestaShop/pull/13866): fix cart rule calculation for free gift, by [@tomlev](https://github.com/tomlev)
* [#13887](https://github.com/PrestaShop/PrestaShop/pull/13887): Fix saving customer with required fields. Thank you [@sarjon](https://github.com/sarjon)
* [#13910](https://github.com/PrestaShop/PrestaShop/pull/13910): Removes AdminPreferencesController. Thank you [@zuk3975](https://github.com/zuk3975)


### Tests

* [#13826](https://github.com/PrestaShop/PrestaShop/pull/13826): Enable global kernel for legacy compatibility for Behat tests, by [@matks](https://github.com/matks)
* [#13862](https://github.com/PrestaShop/PrestaShop/pull/13862): Improve E2E report, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13864](https://github.com/PrestaShop/PrestaShop/pull/13864): Apply develop fix on 1.7.6.x branch, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13886](https://github.com/PrestaShop/PrestaShop/pull/13886): Add missing migrated routes to survival-test. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13900](https://github.com/PrestaShop/PrestaShop/pull/13900): Fixing Download behavior in tests with docker, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in modules, themes & tools

### PrestaShop Coding Standards

* [#3](https://github.com/PrestaShop/php-coding-standards/pull/3): Target master branch to always get the latest configuration, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#4](https://github.com/PrestaShop/php-coding-standards/pull/4): Fix php doc and make overwrite message more explicit, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#5](https://github.com/PrestaShop/php-coding-standards/pull/5): Update default phpstan config for level 1, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Legal Compliance

* [#41](https://github.com/PrestaShop/ps_legalcompliance/pull/41): Fix multilingual strings displayed in frontend hooks. Thank you [@alexej-d](https://github.com/alexej-d)
* [#65](https://github.com/PrestaShop/ps_legalcompliance/pull/65): Bump version to 3.0.2, by [@eternoendless](https://github.com/eternoendless)


### Translation tools bundle

* [#57](https://github.com/PrestaShop/TranslationToolsBundle/pull/57): Drop PHP 5 support, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#60](https://github.com/PrestaShop/TranslationToolsBundle/pull/60): Add test for extracting wordings with no domain, by [@eternoendless](https://github.com/eternoendless)


### Faceted search

* [#59](https://github.com/PrestaShop/ps_facetedsearch/pull/59): Repair custom order, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#60](https://github.com/PrestaShop/ps_facetedsearch/pull/60): Error while trying to index all missing prices., by [@PierreRambaud](https://github.com/PierreRambaud)
* [#61](https://github.com/PrestaShop/ps_facetedsearch/pull/61): Run PhpStan on all 1.7 versions of PrestaShop, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#62](https://github.com/PrestaShop/ps_facetedsearch/pull/62): Bump version to v3.0.0, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#63](https://github.com/PrestaShop/ps_facetedsearch/pull/63): Fix missing visibility check, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#64](https://github.com/PrestaShop/ps_facetedsearch/pull/64): Bump to version 3.0.1, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#65](https://github.com/PrestaShop/ps_facetedsearch/pull/65): Release v3.0.1, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#66](https://github.com/PrestaShop/ps_facetedsearch/pull/66): Restore widgets methods, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#67](https://github.com/PrestaShop/ps_facetedsearch/pull/67): Bump to version 3.0.2, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#68](https://github.com/PrestaShop/ps_facetedsearch/pull/68): Release version v3.0.2, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#69](https://github.com/PrestaShop/ps_facetedsearch/pull/69): Only rebuild table while upgrading to prevent a fatal error with memory, by [@PierreRambaud](https://github.com/PierreRambaud)


### Amazon payment

* [#86](https://github.com/PrestaShop/amzpayments/pull/86): v2.3.0. Thank you [@paeddl](https://github.com/paeddl)
* [#87](https://github.com/PrestaShop/amzpayments/pull/87): v3.2.9. Thank you [@paeddl](https://github.com/paeddl)


### Firebase Authenticator for PrestaShop

* [#10](https://github.com/PrestaShop/firebaseauthenticator/pull/10): Handle missing disabled attribute, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Changes in Documentation

* [#271](https://github.com/PrestaShop/docs/pull/271): Update module-file-structure.md. Thank you [@orangevinz](https://github.com/orangevinz)
* [#272](https://github.com/PrestaShop/docs/pull/272): Update displaying-content-in-front-office.md. Thank you [@orangevinz](https://github.com/orangevinz)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @202-ecommerce, @alexej-d, @orangevinz, @paeddl, @sarjon, @tomas862, @zuk3975!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
