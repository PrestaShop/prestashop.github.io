---
layout: post
aliases: ["/news/coreweekly-week-10-2019"]
title:  "PrestaShop Core Weekly - Week 10 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-03-15 10:45:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 04th to Sunday 10th of March 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

An important step for the PrestaShop open source project has been completed last week and it is available today: the nightly builds and tests dashboard. This is a new dedicated website: [https://nightly.prestashop-project.org/](https://nightly.prestashop-project.org/).

Each night, a new build is created with the newly merged code. Then, the automatic tests are run for this build, and a report is created. Those tests are different from the suite on Travis: they cover more features of PrestaShop, and may require several hours to complete. That's why we don't execute them on each pull-request, for instance. 
It will help contributors to improve the quality of PrestaShop.

For now, you will see that many tests are failing. This will be improved and corrected during the weeks before the code freeze. And of course, your help is welcome 😀


## A quick update about PrestaShop's GitHub issues and pull requests:

- [60 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-03-04..2019-03-10) have been created in the project repositories;
- [73 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-03-04..2019-03-10), including [9 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-03-04..2019-03-10) on the core;
- [35 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-03-04..2019-03-10) in the project repositories;
- [36 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-03-04..2019-03-10), including [29 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-03-04..2019-03-10).

## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#11783](https://github.com/PrestaShop/PrestaShop/pull/11783): Migrate customers searching via ajax. Thank you [@sarjon](https://github.com/sarjon)
* [#12251](https://github.com/PrestaShop/PrestaShop/pull/12251): Improve version, by [@eternoendless](https://github.com/eternoendless)
* [#12570](https://github.com/PrestaShop/PrestaShop/pull/12570): Add Drag & Drop styling for category position column. Thank you [@sarjon](https://github.com/sarjon)
* [#12749](https://github.com/PrestaShop/PrestaShop/pull/12749): 9 duplicates removed from array in getProductAttributeWhitelist(). It…. Thank you [@toslan](https://github.com/toslan)
* [#12766](https://github.com/PrestaShop/PrestaShop/pull/12766): Remove duplicated CLDR service, by [@matks](https://github.com/matks)
* [#12803](https://github.com/PrestaShop/PrestaShop/pull/12803): Fallback on language code when locale is empty, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#12808](https://github.com/PrestaShop/PrestaShop/pull/12808): Deprecate Cart::addExtraCarriers(), by [@eternoendless](https://github.com/eternoendless)
* [#12810](https://github.com/PrestaShop/PrestaShop/pull/12810): Install ps_faviconnotificationbo automatically, by [@eternoendless](https://github.com/eternoendless)
* [#12841](https://github.com/PrestaShop/PrestaShop/pull/12841): Add deprecation notice for hook actionAjaxDieBefore, by [@eternoendless](https://github.com/eternoendless)


### Back office

* [#12505](https://github.com/PrestaShop/PrestaShop/pull/12505): Improve error handling in migrated controllers. Thank you [@sarjon](https://github.com/sarjon)
* [#12610](https://github.com/PrestaShop/PrestaShop/pull/12610): Taxes Options configuration form migration. Thank you [@zuk3975](https://github.com/zuk3975)
* [#12717](https://github.com/PrestaShop/PrestaShop/pull/12717): Adds re-usable rewrite link copier service. Thank you [@tomas862](https://github.com/tomas862)
* [#12730](https://github.com/PrestaShop/PrestaShop/pull/12730): Error 500 in product catalog when short description is too long. Thank you [@rblaurin](https://github.com/rblaurin)
* [#12751](https://github.com/PrestaShop/PrestaShop/pull/12751): Fix saving shop association in migrated add/edit forms. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)
* [#12784](https://github.com/PrestaShop/PrestaShop/pull/12784): Add module main class parse error to log message. Thank you [@teemumantynen](https://github.com/teemumantynen)
* [#12787](https://github.com/PrestaShop/PrestaShop/pull/12787): adds legacy links to all meta page routes. Thank you [@tomas862](https://github.com/tomas862)
* [#12838](https://github.com/PrestaShop/PrestaShop/pull/12838): Update ProductSpecificPrice.php. Thank you [@metineren](https://github.com/metineren)


### Front office

* [#12748](https://github.com/PrestaShop/PrestaShop/pull/12748): Remove obsolete P3P policy. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#12753](https://github.com/PrestaShop/PrestaShop/pull/12753): Allow ipv6 to be used in htaccess redirects, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Installer

* [#12666](https://github.com/PrestaShop/PrestaShop/pull/12666): Delivery slips fails when upgrading to 1.7.5. Thank you [@rblaurin](https://github.com/rblaurin)


### Web services

* [#12836](https://github.com/PrestaShop/PrestaShop/pull/12836): Fixes http 500 when trying to get the images of a product with no images . Thank you [@mowcixo](https://github.com/mowcixo)


### Tests

* [#12793](https://github.com/PrestaShop/PrestaShop/pull/12793): Allow Travis phpHigh build to fail as it is an informative check, not…, by [@matks](https://github.com/matks)
* [#12804](https://github.com/PrestaShop/PrestaShop/pull/12804): Use string value for CSRF token in DeliveryControllerTest, by [@matks](https://github.com/matks)


## Code changes in modules, themes & tools

### Circuit breaker

* [#26](https://github.com/PrestaShop/circuit-breaker/pull/26): Ease configuration of calls using all usual HTTP methods, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### Auto upgrade

* [#285](https://github.com/PrestaShop/autoupgrade/pull/285): Use raw trans to avoid &quot; being displayed, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#286](https://github.com/PrestaShop/autoupgrade/pull/286): Allow ipv6 to pass the maintenance check, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#288](https://github.com/PrestaShop/autoupgrade/pull/288): Do not reset theme anymore when already active (prevent hooks to be reset), by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#290](https://github.com/PrestaShop/autoupgrade/pull/290): Do not display exception when running unit tests, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Changes in Documentation

* [#224](https://github.com/PrestaShop/docs/pull/224): Add documentation on legacy controllers, by [@eternoendless](https://github.com/eternoendless)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @mowcixo, @rblaurin, @sarjon, @tomas862, @toslan, @zuk3975!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
