---
layout: post
aliases: ["/news/coreweekly-week-04-2019"]
title:  "PrestaShop Core Weekly - Week 04 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-01-28 18:15:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 20th to Sunday 27th of January 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

You will notice that the GDPR module has been improved thanks to a contributor from the community. As improving modules is sometimes easier than to improve the PrestaShop project's core, this is a very good way to start to contribute. Just have a look at the [Native modules integration](https://github.com/PrestaShop/PrestaShop/projects/5) kanban on GitHub, and pick something up in the todo list.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [68 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-01-21..2019-01-27) have been created in the project repositories
- [43 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-01-21..2019-01-27), including including [5 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-01-21..2019-01-27) on the core.
- [49 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-01-21..2019-01-27) in the project repositories
- [76 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-01-21..2019-01-27), including [43 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-01-21..2019-01-27)

## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#11135](https://github.com/PrestaShop/PrestaShop/pull/11135): Migrate Employees list actions. Thank you [@sarjon](https://github.com/sarjon)
* [#11859](https://github.com/PrestaShop/PrestaShop/pull/11859): Replace tabs with spaces in htaccess. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11961](https://github.com/PrestaShop/PrestaShop/pull/11961): Some update to Domain namespace. Thank you [@sarjon](https://github.com/sarjon)
* [#12222](https://github.com/PrestaShop/PrestaShop/pull/12222): Add notice for docker-compose, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#12243](https://github.com/PrestaShop/PrestaShop/pull/12243): Update gitignore, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#12247](https://github.com/PrestaShop/PrestaShop/pull/12247): Bump version to 1.7.6.0, by [@eternoendless](https://github.com/eternoendless)
* [#12249](https://github.com/PrestaShop/PrestaShop/pull/12249): Migrate legacy test TermsAndConditionsTest and refactor related class, by [@matks](https://github.com/matks)


### Back office

* [#12074](https://github.com/PrestaShop/PrestaShop/pull/12074): Refacto PreferencesController to use annotations, by [@matks](https://github.com/matks)
* [#12076](https://github.com/PrestaShop/PrestaShop/pull/12076): Refacto ProductPreferencesController to use annotations, by [@matks](https://github.com/matks)
* [#12077](https://github.com/PrestaShop/PrestaShop/pull/12077): Refacto ThemeCatalogController to use annotations, by [@matks](https://github.com/matks)
* [#12094](https://github.com/PrestaShop/PrestaShop/pull/12094): Refactor OrderPreferencesController to use annotations, by [@matks](https://github.com/matks)
* [#12096](https://github.com/PrestaShop/PrestaShop/pull/12096): Fix access rights to Administration page, by [@matks](https://github.com/matks)
* [#12097](https://github.com/PrestaShop/PrestaShop/pull/12097): Refacto PaymentMethodsController to use annotations, by [@matks](https://github.com/matks)
* [#12098](https://github.com/PrestaShop/PrestaShop/pull/12098): Refactor Shipping/ referencesController to use annotations, by [@matks](https://github.com/matks)
* [#12099](https://github.com/PrestaShop/PrestaShop/pull/12099): Refactor MaintenanceController to use annotations, by [@matks](https://github.com/matks)
* [#12140](https://github.com/PrestaShop/PrestaShop/pull/12140): Default carrier name was displayed as 0. Thank you [@Gitdyr](https://github.com/Gitdyr)
* [#12240](https://github.com/PrestaShop/PrestaShop/pull/12240): Adds missing argument in MetaController which caused page crash. Thank you [@tomas862](https://github.com/tomas862)


### Front office

* [#12017](https://github.com/PrestaShop/PrestaShop/pull/12017): Weak token implementation, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#12227](https://github.com/PrestaShop/PrestaShop/pull/12227): Fix ps_viewedproduct in classic theme. Thank you [@SharakPL](https://github.com/SharakPL)


### Tests

* [#12219](https://github.com/PrestaShop/PrestaShop/pull/12219): Update click on discover test. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)
* [#12220](https://github.com/PrestaShop/PrestaShop/pull/12220): Update file tests. Thank you [@YosraAk](https://github.com/YosraAk)
* [#12232](https://github.com/PrestaShop/PrestaShop/pull/12232): Add unit tests for Core/Kpi, by [@matks](https://github.com/matks)
* [#12238](https://github.com/PrestaShop/PrestaShop/pull/12238): Wrong directory to check if there are files reported by mochawesome, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#12245](https://github.com/PrestaShop/PrestaShop/pull/12245): Update check notifications test. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)
* [#12256](https://github.com/PrestaShop/PrestaShop/pull/12256): Wrong duration time while combine nightly tests reports, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#12266](https://github.com/PrestaShop/PrestaShop/pull/12266): Migrate ImageTagSourceParserTest in tests folder, by [@matks](https://github.com/matks)
* [#12272](https://github.com/PrestaShop/PrestaShop/pull/12272): add checkFile step after downloading a file. Thank you [@YosraAk](https://github.com/YosraAk)
* [#12281](https://github.com/PrestaShop/PrestaShop/pull/12281): Update zip module test. Thank you [@YosraAk](https://github.com/YosraAk)
* [#12289](https://github.com/PrestaShop/PrestaShop/pull/12289): Update sort module test. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)
* [#12298](https://github.com/PrestaShop/PrestaShop/pull/12298): Improve logging for nightly tests, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#12324](https://github.com/PrestaShop/PrestaShop/pull/12324): Separate nightly tests and reports, by [@PierreRambaud](https://github.com/PierreRambaud)


### Install



## Code changes in the '1.7.5.x' branch (for v1.7.5.1)

### Core

* [#12292](https://github.com/PrestaShop/PrestaShop/pull/12292): Allow arabic numbers in link rewrite, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back Office

* [#12016](https://github.com/PrestaShop/PrestaShop/pull/12016): Update module & service link in upgrade, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#12236](https://github.com/PrestaShop/PrestaShop/pull/12236): SERP: Textarea from tinymce requires jquery to return the text value, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#12277](https://github.com/PrestaShop/PrestaShop/pull/12277): Avoid usage of enter key in search hook input, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools


###  GDPR

* [#54](https://github.com/PrestaShop/psgdpr/pull/54): [*] Prefixing variable to avoid javascript conflicts on Backoffice. Thank you [@Shiryu75](https://github.com/Shiryu75)


### Composer script handler

* [#1](https://github.com/PrestaShop/composer-script-handler/pull/1): Introducing Composer Script Handler, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#2](https://github.com/PrestaShop/composer-script-handler/pull/2): Added tests, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#3](https://github.com/PrestaShop/composer-script-handler/pull/3): Improved quality build, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### eslint-config-prestashop

* [#1](https://github.com/PrestaShop/eslint-config/pull/1): Initial commit, by [@PierreRambaud](https://github.com/PierreRambaud)



### European VAT number

* [#8](https://github.com/PrestaShop/vatnumber/pull/8): Deploy v2.1.0 of vatnumber module, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### ADR

* [#2](https://github.com/PrestaShop/ADR/pull/2): Create 1st ADR to initialize the usage, by [@matks](https://github.com/matks)


## Changes in Documentation

* [#193](https://github.com/PrestaShop/docs/pull/193): Add statement about large PRs, by [@matks](https://github.com/matks)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @ansar21mallouli, @Gitdyr, @MathiasReker, @sarjon, @SharakPL, @Shiryu75, @tomas862, @YosraAk!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
