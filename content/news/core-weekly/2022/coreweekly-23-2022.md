---
layout: post
aliases: ["/news/coreweekly-23-2022"]
title:  "PrestaShop Core Weekly - Week 23 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-06-13
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 6th to Sunday 12th of June 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

It's done! PrestaShop version 8.0 feature freeze happened last week on the 9th of June. You can read [this post](https://build.prestashop.com/news/prestashop-feature-freeze-v8/) to learn about the details while the maintainers team processes [the last items to update](https://github.com/PrestaShop/PrestaShop/issues/28708) following the freeze.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [39 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-06-06..2022-06-12) have been created in the project repositories;
- [24 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-06-06..2022-06-12), including [6 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-06-06..2022-06-12) on the core;
- [49 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-06-06..2022-06-12) in the project repositories;
- [39 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-06-06..2022-06-12), including [26 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-06-06..2022-06-12).
        


## Code changes in the 'develop' branch


### Core
* [#28724](https://github.com/PrestaShop/PrestaShop/pull/28724): Add new default password for docker image, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#28644](https://github.com/PrestaShop/PrestaShop/pull/28644): Use `is_int` instead of `is_numeric` for ID Value Objects, by [@Progi1984](https://github.com/Progi1984)
* [#28624](https://github.com/PrestaShop/PrestaShop/pull/28624): Bump phpstan/phpstan from 1.5.4 to 1.7.4, by [@Progi1984](https://github.com/Progi1984)
* [#28127](https://github.com/PrestaShop/PrestaShop/pull/28127): Implement a new password policy based on zxcvbn, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#28668](https://github.com/PrestaShop/PrestaShop/pull/28668): Add recommended length counters to SEO fields in CMS Pages Add/Edit and SEO Add/Edit URLs, by [@Progi1984](https://github.com/Progi1984)
* [#28654](https://github.com/PrestaShop/PrestaShop/pull/28654): Add default fallback if no customer name, by [@atomiix](https://github.com/atomiix)
* [#28592](https://github.com/PrestaShop/PrestaShop/pull/28592): Remove id from entity search input templates, by [@jolelievre](https://github.com/jolelievre)


### Installer
* [#28647](https://github.com/PrestaShop/PrestaShop/pull/28647): Update min & max php version of the installer, by [@atomiix](https://github.com/atomiix)


### Tests
* [#28694](https://github.com/PrestaShop/PrestaShop/pull/28694): Functional tests - Fix customer faker password. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28691](https://github.com/PrestaShop/PrestaShop/pull/28691): Functional tests - Add test to Import csv file to Brand pagination test . Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28690](https://github.com/PrestaShop/PrestaShop/pull/28690): Fix YAML lint on GH workflow files, by [@matks](https://github.com/matks)
* [#28641](https://github.com/PrestaShop/PrestaShop/pull/28641): Functional tests - Add new test 'Preview order'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Front office
* [#28232](https://github.com/PrestaShop/PrestaShop/pull/28232): Optimizing queries for checking address existence, by [@Progi1984](https://github.com/Progi1984)


### Tests
* [#28682](https://github.com/PrestaShop/PrestaShop/pull/28682): Functional tests - Fix some random errors on nightly 178x. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Contextual Help API
* [#9](https://github.com/PrestaShop/contextual-help-api/pull/9): Bump guzzlehttp/guzzle from 7.4.3 to 7.4.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Traces
* [#27](https://github.com/PrestaShop/traces/pull/27): Bump guzzlehttp/guzzle from 6.5.6 to 6.5.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### presthubot
* [#51](https://github.com/PrestaShop/presthubot/pull/51): Add support of 8.0.x branch, by [@boubkerbribri](https://github.com/boubkerbribri)


### Nightly board
* [#84](https://github.com/PrestaShop/nightly-board/pull/84): Add 8.0.x branch, by [@atomiix](https://github.com/atomiix)


### Cash on delivery module
* [#46](https://github.com/PrestaShop/ps_cashondelivery/pull/46): Fix payment method name, by [@Matt75](https://github.com/Matt75)


### Customer reassurance block module
* [#409](https://github.com/PrestaShop/blockreassurance/pull/409): Bump eslint from 8.16.0 to 8.17.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#667](https://github.com/PrestaShop/ps_facetedsearch/pull/667): Bump eslint from 8.16.0 to 8.17.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Hummingbird theme
* [#315](https://github.com/PrestaShop/hummingbird/pull/315): Improve blockcart modal. Thank you [@mparvazi](https://github.com/mparvazi)
* [#314](https://github.com/PrestaShop/hummingbird/pull/314): Add keyboard events for quantity input. Thank you [@mparvazi](https://github.com/mparvazi)


### Links list module
* [#149](https://github.com/PrestaShop/ps_linklist/pull/149): Fixing deprecated for PHP 8.1, by [@atomiix](https://github.com/atomiix)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@boubkerbribri](https://github.com/boubkerbribri), [@dependabot[bot]](https://github.com/apps/dependabot), [@jolelievre](https://github.com/jolelievre), [@atomiix](https://github.com/atomiix), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@matks](https://github.com/matks), [@Matt75](https://github.com/Matt75), [@mparvazi](https://github.com/mparvazi), [@Progi1984](https://github.com/Progi1984), [@PierreRambaud](https://github.com/PierreRambaud)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

