---
layout: post
aliases: ["/news/coreweekly-week-08-2019"]
title:  "PrestaShop Core Weekly - Week 08 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-03-01 16:15:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 18th to Sunday 24th of February 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

Last week, a very big piece of work started two years ago has been merged into the "develop" branch: the [CLDR implementation](https://github.com/PrestaShop/PrestaShop/pull/10455). It will allow the next versions of the PrestaShop project to manage well localization and display of units and currencies, by following the Unicode international standard used by many companies. As you can expect, a lot of code reviews and tests have been done, that's why less pull requests have been merged than usual during the week.

[Learn more about CLDR](http://cldr.unicode.org/).


## A quick update about PrestaShop's GitHub issues and pull requests:

- [70 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-02-18..2019-02-24) have been created in the project repositories
- [46 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-02-18..2019-02-24), including [6 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-02-18..2019-02-24) on the core.
- [28 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-02-18..2019-02-24) in the project repositories
- [33 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-02-18..2019-02-24), including [17 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-02-18..2019-02-24)

## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#10455](https://github.com/PrestaShop/PrestaShop/pull/10455): New CLDR implementation, by [@tomlev](https://github.com/tomlev)
* [#12559](https://github.com/PrestaShop/PrestaShop/pull/12559): Fix translations removing from db when Language is deleted. Thank you [@sarjon](https://github.com/sarjon)
* [#12598](https://github.com/PrestaShop/PrestaShop/pull/12598): Restore composer file, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office

* [#12046](https://github.com/PrestaShop/PrestaShop/pull/12046): TemplateMail generator, by [@jolelievre](https://github.com/jolelievre)
* [#12465](https://github.com/PrestaShop/PrestaShop/pull/12465): Fixed duplicated id, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#12563](https://github.com/PrestaShop/PrestaShop/pull/12563): Fixes error in admin panel when visiting a category that's not under Index. Thank you [@mowcixo](https://github.com/mowcixo)
* [#12597](https://github.com/PrestaShop/PrestaShop/pull/12597): Bug when switching language. Thank you [@helgvor-stoll](https://github.com/helgvor-stoll)


## Code changes in modules, themes & tools

### Auto-upgrade

* [#275](https://github.com/PrestaShop/autoupgrade/pull/275): Do not upgrade PrestaShop when already on the last version , by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#281](https://github.com/PrestaShop/autoupgrade/pull/281): Deploy v4.6.0 of the autoupgrade module, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Docker

* [#154](https://github.com/PrestaShop/docker/pull/154): Add PrestaShop 1.7.5.1, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Changes in Documentation

* [#195](https://github.com/PrestaShop/docs/pull/195): Add recommendations in system requirements, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#196](https://github.com/PrestaShop/docs/pull/196): Fix file name in template-inheritance example. Thank you [@SharakPL](https://github.com/SharakPL)
* [#200](https://github.com/PrestaShop/docs/pull/200): Add PositionUpdater component doc, and update columns references docs, by [@jolelievre](https://github.com/jolelievre)
* [#201](https://github.com/PrestaShop/docs/pull/201): Added tutorial on how to customize an existing Grid, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#203](https://github.com/PrestaShop/docs/pull/203): Add some migration conventions, by [@matks](https://github.com/matks)
* [#206](https://github.com/PrestaShop/docs/pull/206): Fix Wrong method name. Thank you [@nenes25](https://github.com/nenes25)
* [#207](https://github.com/PrestaShop/docs/pull/207): Change issues link. Thank you [@nenes25](https://github.com/nenes25)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @helgvor-stoll, @mowcixo, @nenes25, @sarjon, @SharakP! And a special thank to @tomlev for the CLDR implementation.

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
