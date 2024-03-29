---
layout: post
aliases: ["/news/coreweekly-week-02-2019"]
title:  "PrestaShop Core Weekly - Week 02 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-01-14 16:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 07th to Sunday 13th of January 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

Last week, two new repositories have been added to the PrestaShop project on GitHub:

- [PhpPsInfo](https://github.com/PrestaShop/php-ps-info/), a tool to check if a server has all Apache and PHP prerequisites before starting to install a PrestaShop online store on it
- [Circuit Breaker](https://github.com/PrestaShop/circuit-breaker/), a library that allows applications to better handle cases when third party services (payment solutions, solutions using the webservices/API, Addons, ...) go offline. It will be progressively introduced in PrestaShop and its modules.

As usual, your feedback is welcome.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [68 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-01-07..2019-01-13) have been created in the project repositories
- [45 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-01-07..2019-01-13), including [3 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-01-07..2019-01-13)
- [62 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-01-07..2019-01-13) in the project repositories
- [53 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-01-07..2019-01-13), including [41 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-01-07..2019-01-13)

## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#12014](https://github.com/PrestaShop/PrestaShop/pull/12014): Unify algorithm for calculating average tax rate for products in a cart, by [@eternoendless](https://github.com/eternoendless)
* [#12022](https://github.com/PrestaShop/PrestaShop/pull/12022): Use Symfony Cache Clear in ModuleManager instead of deprecated Cache …, by [@matks](https://github.com/matks)
* [#12031](https://github.com/PrestaShop/PrestaShop/pull/12031): Make pre-commit execute linter only if php files have been staged, by [@eternoendless](https://github.com/eternoendless)
* [#12089](https://github.com/PrestaShop/PrestaShop/pull/12089): Implement AbstractTypedCollection with tests, by [@jolelievre](https://github.com/jolelievre)
* [#12125](https://github.com/PrestaShop/PrestaShop/pull/12125): Fix bad GridFactory service definition, by [@matks](https://github.com/matks)


### Back office

* [#11153](https://github.com/PrestaShop/PrestaShop/pull/11153): Migration of "Catalog > Brand & Suppliers > Suppliers" listing. Thank you [@tomas862](https://github.com/tomas862)
* [#11693](https://github.com/PrestaShop/PrestaShop/pull/11693): BO: FIX PrestaShop#9853 Search feature value and pagination. Thank you [@studiox3](https://github.com/studiox3)
* [#11854](https://github.com/PrestaShop/PrestaShop/pull/11854): Add customer_message table name into SQL request. Thank you [@Klemart3D](https://github.com/Klemart3D)
* [#11877](https://github.com/PrestaShop/PrestaShop/pull/11877): introduces moved search and reset type button to the right. Thank you [@tomas862](https://github.com/tomas862)
* [#12052](https://github.com/PrestaShop/PrestaShop/pull/12052): SERP : Avoid mutating a prop directly + fix url encode, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front office

* [#12023](https://github.com/PrestaShop/PrestaShop/pull/12023): When downloading a virtual good,  check if the order was made by the current user.. Thank you [@garnele007](https://github.com/garnele007)


### Tests

* [#12030](https://github.com/PrestaShop/PrestaShop/pull/12030): Filters by category in catalog page. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)
* [#12045](https://github.com/PrestaShop/PrestaShop/pull/12045): Update autoupgrade test. Thank you [@YosraAk](https://github.com/YosraAk)
* [#12054](https://github.com/PrestaShop/PrestaShop/pull/12054): Migrate legacy unit test for Hashing, by [@matks](https://github.com/matks)
* [#12060](https://github.com/PrestaShop/PrestaShop/pull/12060): Enable PHP CS Fixer on tests folder, by [@matks](https://github.com/matks)
* [#12067](https://github.com/PrestaShop/PrestaShop/pull/12067): Add some fixes to the campaign full. Thank you [@YosraAk](https://github.com/YosraAk)
* [#12079](https://github.com/PrestaShop/PrestaShop/pull/12079): fix static cache reset on ObjectModel, by [@tomlev](https://github.com/tomlev)
* [#12049](https://github.com/PrestaShop/PrestaShop/pull/12049): Change position, unhook and transplant a module. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)
* [#12086](https://github.com/PrestaShop/PrestaShop/pull/12086): Location: zone and country. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)
* [#12091](https://github.com/PrestaShop/PrestaShop/pull/12091): Geo-location: By IP address. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)
* [#12104](https://github.com/PrestaShop/PrestaShop/pull/12104): Update delete shopping cart test. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)
* [#12112](https://github.com/PrestaShop/PrestaShop/pull/12112): Update bulk actions in catalog page test. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)
* [#12115](https://github.com/PrestaShop/PrestaShop/pull/12115): Update create manufacturers test. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)
* [#12122](https://github.com/PrestaShop/PrestaShop/pull/12122): Add a new brand address test. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)


## Code changes in the '1.7.5.x' branch (for v1.7.5.1)

### Core

* [#11995](https://github.com/PrestaShop/PrestaShop/pull/11995): Fix undefined INTL_IDNA_VARIANT_UTS46 if intl ICU < 4.6. Thank you [@rdy4ever](https://github.com/rdy4ever)


## Code changes in modules, themes & tools


### PhpPsInfo

* [#2](https://github.com/PrestaShop/php-ps-info/pull/2): Improve README, by [@eternoendless](https://github.com/eternoendless)
* [#3](https://github.com/PrestaShop/php-ps-info/pull/3): Create LICENSE.md, by [@eternoendless](https://github.com/eternoendless)


### Circuit Breaker

* [#13](https://github.com/PrestaShop/circuit-breaker/pull/13): Added Symfony Cache support, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#16](https://github.com/PrestaShop/circuit-breaker/pull/16): Added Code coverage information, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#17](https://github.com/PrestaShop/circuit-breaker/pull/17): Rely on PSR-16 adapters of Symfony cache, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#18](https://github.com/PrestaShop/circuit-breaker/pull/18): Covers exceptions with unit tests, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#19](https://github.com/PrestaShop/circuit-breaker/pull/19): Improved SimpleCircuitBreaker class, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#20](https://github.com/PrestaShop/circuit-breaker/pull/20): Improved Composer configuration, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#21](https://github.com/PrestaShop/circuit-breaker/pull/21): Add php qa report, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#23](https://github.com/PrestaShop/circuit-breaker/pull/23): Extracted the Client from SimpleCircuitBreaker, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#24](https://github.com/PrestaShop/circuit-breaker/pull/24): Added Travis CI badge, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#25](https://github.com/PrestaShop/circuit-breaker/pull/25): Added PHPQA Github Action, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### Docker internal images

* [#20](https://github.com/PrestaShop/docker-internal-images/pull/20): Install all languages with PS, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Search bar autocomplete

* [#1](https://github.com/PrestaShop/ps_searchbarjqauto/pull/1): FO: Select product by Enter-key. Thank you [@basjac](https://github.com/basjac)


### PrestaShop Emails SDK

* [#11](https://github.com/PrestaShop/email-templates-sdk/pull/11): Fix check smarty name. Thank you [@matthieumota](https://github.com/matthieumota)


## Changes in Documentation

* [#182](https://github.com/PrestaShop/docs/pull/182): Typo. Thank you [@idnovate](https://github.com/idnovate)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @ansar21mallouli, @basjac, @garnele007, @Klemart3D, @idnovate, @matthieumota, @studiox3, @tomas862, @rdy4ever, @YosraAk!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
