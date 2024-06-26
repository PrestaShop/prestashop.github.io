---
layout: post
aliases: ["/news/coreweekly-week-25-2019"]
title:  "PrestaShop Core Weekly - Week 25 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-06-27 15:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 17th to Sunday 23rd of June 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

A lot of work was done last week to be able to fix all known issues on the beta, and ship a [release candidate of 1.7.6](http://build.prestashop.com/news/prestashop-1-7-6-0-rc-release/). [A few regressions have been found on the RC1](https://github.com/PrestaShop/PrestaShop/projects/4) and a RC2 should be built soon, stay tuned.

A quick reminder for those in South West of France, next week the PrestaShop team and partners will in [Bayonne's PS-Connect](https://www.prestashop.com/fr/evenements/prestashop-connect-bayonne?utm_source=build&utm_medium=banner&utm_campaign=PSConnectBayonne). Let's meet together before the summer vacations.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [68 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-06-17..2019-06-23) have been created in the project repositories;
- [58 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-06-17..2019-06-23), including [16 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-06-17..2019-06-23) on the core;
- [65 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-06-17..2019-06-23) in the project repositories;
- [78 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-06-17..2019-06-23), including [47 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-06-17..2019-06-23).

## Code changes in the 'develop' branch

### Core

* [#14232](https://github.com/PrestaShop/PrestaShop/pull/14232): string line ending. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#14233](https://github.com/PrestaShop/PrestaShop/pull/14233): dir constant. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#14273](https://github.com/PrestaShop/PrestaShop/pull/14273): CO: Fix Sql Error due do while not ended. Thank you [@123monsite-regis](https://github.com/123monsite-regis)
* [#14286](https://github.com/PrestaShop/PrestaShop/pull/14286): Merge 1.7.6.x to develop - 19/06/2019, by [@matks](https://github.com/matks)


### Tests

* [#14109](https://github.com/PrestaShop/PrestaShop/pull/14109): Cover Webservice keys with Behat tests. Thank you [@sarjon](https://github.com/sarjon)
* [#14234](https://github.com/PrestaShop/PrestaShop/pull/14234): Add missing braces. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#14235](https://github.com/PrestaShop/PrestaShop/pull/14235): Remove unused imports. Thank you [@MathiasReker](https://github.com/MathiasReker)


## Code changes in the "1.7.6.x" branch (for v1.7.6.0)

### Core

* [#13795](https://github.com/PrestaShop/PrestaShop/pull/13795): Updates to Domain. Thank you [@sarjon](https://github.com/sarjon)
* [#13925](https://github.com/PrestaShop/PrestaShop/pull/13925): Add getter for current locale, by [@eternoendless](https://github.com/eternoendless)
* [#14197](https://github.com/PrestaShop/PrestaShop/pull/14197): Update facetedsearch dependency, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#14284](https://github.com/PrestaShop/PrestaShop/pull/14284): Update to Faceted search 3.0.5, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#14300](https://github.com/PrestaShop/PrestaShop/pull/14300): &= prevents result to be a boolean, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#14316](https://github.com/PrestaShop/PrestaShop/pull/14316): Reapply changes from PR switching on PHPSpreadsheet, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#14324](https://github.com/PrestaShop/PrestaShop/pull/14324): Use Admin.Actions instead Admin.International.Help, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office

* [#14220](https://github.com/PrestaShop/PrestaShop/pull/14220): Set schema form rendered when it contains no children, by [@jolelievre](https://github.com/jolelievre)
* [#14239](https://github.com/PrestaShop/PrestaShop/pull/14239): Introduce the usage of Module user-displayable exceptions to handle module errors (part 2), by [@matks](https://github.com/matks)
* [#14242](https://github.com/PrestaShop/PrestaShop/pull/14242): Module form_rest() outside div, by [@jolelievre](https://github.com/jolelievre)
* [#14248](https://github.com/PrestaShop/PrestaShop/pull/14248): Cannot use accented URL with arabic language, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#14259](https://github.com/PrestaShop/PrestaShop/pull/14259): Avoid bug when creating manually created a language, by [@jolelievre](https://github.com/jolelievre)
* [#14290](https://github.com/PrestaShop/PrestaShop/pull/14290): Extend customer page, by [@jolelievre](https://github.com/jolelievre)
* [#14292](https://github.com/PrestaShop/PrestaShop/pull/14292): Update php-cs-fixer to latest version. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Front office

* [#14251](https://github.com/PrestaShop/PrestaShop/pull/14251): Fix categories wordbreak, by [@jolelievre](https://github.com/jolelievre)
* [#14296](https://github.com/PrestaShop/PrestaShop/pull/14296): Fix carrier display in order confirmation email, by [@jolelievre](https://github.com/jolelievre)
* [#14298](https://github.com/PrestaShop/PrestaShop/pull/14298): Fix english mail generation on fresh install, by [@jolelievre](https://github.com/jolelievre)
* [#14309](https://github.com/PrestaShop/PrestaShop/pull/14309): Simplify the installation language to its minimum, by [@jolelievre](https://github.com/jolelievre)
* [#14325](https://github.com/PrestaShop/PrestaShop/pull/14325): Refresh product flags on ajax call when product page is refreshed, by [@matks](https://github.com/matks)


### Install

* [#14225](https://github.com/PrestaShop/PrestaShop/pull/14225): Update facetedsearch cache, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#14243](https://github.com/PrestaShop/PrestaShop/pull/14243): Fix translation catalogue, by [@eternoendless](https://github.com/eternoendless)


### Tests

* [#13999](https://github.com/PrestaShop/PrestaShop/pull/13999): Fix broken tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#14187](https://github.com/PrestaShop/PrestaShop/pull/14187): Minor fixes for E2E tests (adding pauses, adding async code, referencing blocking issues), by [@SimonGrn](https://github.com/SimonGrn)
* [#14219](https://github.com/PrestaShop/PrestaShop/pull/14219): Fix test Module '04_sort_module' in suite full, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#14221](https://github.com/PrestaShop/PrestaShop/pull/14221): Fix "14_discount/3_check_vouchers_in_FO" in full campaign. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#14282](https://github.com/PrestaShop/PrestaShop/pull/14282): Fix download in E2E tests, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools

### Auto upgrade

* [#322](https://github.com/PrestaShop/autoupgrade/pull/322): Fix warning in 1.7 when settings file does not exist. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#323](https://github.com/PrestaShop/autoupgrade/pull/323): Revert "Fix warning in 1.7 when settings file does not exist", by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Gamification

* [#63](https://github.com/PrestaShop/gamification/pull/63): Improve UI. Thank you [@YeLnatSs](https://github.com/YeLnatSs)


### Faceted search

* [#97](https://github.com/PrestaShop/ps_facetedsearch/pull/97): Fix the display of wrong Availability count , by [@PierreRambaud](https://github.com/PierreRambaud)
* [#98](https://github.com/PrestaShop/ps_facetedsearch/pull/98): Bump to 3.0.5, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#99](https://github.com/PrestaShop/ps_facetedsearch/pull/99): Realease 3.0.5, by [@PierreRambaud](https://github.com/PierreRambaud)


### Link list

* [#67](https://github.com/PrestaShop/ps_linklist/pull/67): Fix extra star in the link block form, by [@jolelievre](https://github.com/jolelievre)
* [#68](https://github.com/PrestaShop/ps_linklist/pull/68): Merge to master for v3.0.4, by [@jolelievre](https://github.com/jolelievre)


### Watermark

* [#15](https://github.com/PrestaShop/watermark/pull/15): [MO] Watermark - compatibility with 1.7 and ability to upload jpg, png as watermark. Thank you [@rblaurin](https://github.com/rblaurin)
* [#16](https://github.com/PrestaShop/watermark/pull/16): Add CONTRIBUTORS.md, by [@matks](https://github.com/matks)
* [#17](https://github.com/PrestaShop/watermark/pull/17): Version update to v2.0.0, by [@jolelievre](https://github.com/jolelievre)
* [#18](https://github.com/PrestaShop/watermark/pull/18): Update contributors, by [@jolelievre](https://github.com/jolelievre)
* [#19](https://github.com/PrestaShop/watermark/pull/19): Update contributors, by [@jolelievre](https://github.com/jolelievre)


## Changes in documentation

* [#279](https://github.com/PrestaShop/docs/pull/279): Reworking scale section and optimizations. Thank you [@djodjo3](https://github.com/djodjo3)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @123monsite-regis, @djodjo3, @jf-viguier, @MathiasReker, @nesrineabdmouleh, @rblaurin, @sarjon, @YeLnatSs!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
