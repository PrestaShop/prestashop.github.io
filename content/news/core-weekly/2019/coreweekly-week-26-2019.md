---
layout: post
aliases: ["/news/coreweekly-week-26-2019"]
title:  "PrestaShop Core Weekly - Week 26 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-07-26 15:30:00
authors: [ AntoineThomas ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 24th to Sunday 30th of June 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

Core weekly edition is a bit late, mainly due to beginning of the summer and the first vacations of the team.

So, how is the 1.7.6.0 release? Tell us in the comments, now that you have a few experience with it. Some major issues have been identified, and a 1.7.6.1 release is already on track.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [77 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-06-24..2019-06-30) have been created in the project repositories;
- [29 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-06-24..2019-06-30), including [6 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-06-24..2019-06-30) on the core;
- [49 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-06-24..2019-06-30) in the project repositories;
- [19 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-06-24..2019-06-30), including [16 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-06-24..2019-06-30).


## Code changes in the 'develop' branch

### Core

* [#14116](https://github.com/PrestaShop/PrestaShop/pull/14116): do not set a cookie if it finally has not changed, by [@jocel1](https://github.com/jocel1)
* [#14340](https://github.com/PrestaShop/PrestaShop/pull/14340): Merge 1.7.6.x to develop - 24/06/2019, by [@matks](https://github.com/matks)


### Front office

* [#14385](https://github.com/PrestaShop/PrestaShop/pull/14385): Fixed duplicated block name. Thank you [@aleksiuno](https://github.com/aleksiuno)


## Code changes in the "1.7.6.x" branch (for v1.7.6.0)

### Core

* [#14367](https://github.com/PrestaShop/PrestaShop/pull/14367): Update contributors and changelog for 1.7.6.0 RC 1, by [@matks](https://github.com/matks)
* [#14400](https://github.com/PrestaShop/PrestaShop/pull/14400): Wrong way to retrieve CLDR information, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office

* [#14331](https://github.com/PrestaShop/PrestaShop/pull/14331): Handle bad theme error nicely, by [@matks](https://github.com/matks)
* [#14364](https://github.com/PrestaShop/PrestaShop/pull/14364): View button doesn't have href, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#14401](https://github.com/PrestaShop/PrestaShop/pull/14401): Fix grid calendar, by [@jolelievre](https://github.com/jolelievre)


### Front office

* [#14395](https://github.com/PrestaShop/PrestaShop/pull/14395): Classic theme force all type number to don't have arrows , by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools

### QANightlyResults

* [#1](https://github.com/PrestaShop/QANightlyResults/pull/1): Little changes, by [@PierreRambaud](https://github.com/PierreRambaud)


### Gamification

* [#65](https://github.com/PrestaShop/gamification/pull/65): Bump version to 2.3.0, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#66](https://github.com/PrestaShop/gamification/pull/66): Release 2.3.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### Google Adwords

* [#5](https://github.com/PrestaShop/gadwords/pull/5): Rework of the whole module, by [@apacios](https://github.com/apacios)


## Changes in documentation

* [#281](https://github.com/PrestaShop/docs/pull/281): Documenting module creation part 1 - identifiable object form and grid hooks usage. Thank you [@tomas862](https://github.com/tomas862)
* [#290](https://github.com/PrestaShop/docs/pull/290): Add config/defines.inc.php configuration values, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#298](https://github.com/PrestaShop/docs/pull/298): Added Default section, by [@mickaelandrieu](https://github.com/mickaelandrieu)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @aleksiuno, @tomas862!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
