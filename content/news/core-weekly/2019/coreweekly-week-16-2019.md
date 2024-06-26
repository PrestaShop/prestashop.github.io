---
layout: post
aliases: ["/news/coreweekly-week-16-2019"]
title:  "PrestaShop Core Weekly - Week 16 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-04-30 16:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 15th to Sunday 21st of April 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

It seems that the progress on the 1.7.6 is going well. For the first time with the PrestaShop open source project, this is possible to test it with the [nightly builds](https://nightly.prestashop-project.org/), a lot of feedback is collected this way. So, there is no need to spend too much time on an Alpha release. In fact, this will give more time to the team to finish the upcoming [1.6.1.24](https://github.com/PrestaShop/PrestaShop/milestone/52) and [1.7.5.2](https://github.com/PrestaShop/PrestaShop/milestone/55) releases.

More news about the 1.7.6 in the next core-weekly.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [68 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-04-15..2019-04-21) have been created in the project repositories;
- [53 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-04-15..2019-04-21), including [24 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-04-15..2019-04-21) on the core;
- [65 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-04-15..2019-04-21) in the project repositories;
- [55 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-04-15..2019-04-21), including [40 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-04-15..2019-04-21).


## Code changes in the "1.7.6.x" branch (for v1.7.6.0)

### Core

* [#13189](https://github.com/PrestaShop/PrestaShop/pull/13189): Harmonize Grids naming. Thank you [@sarjon](https://github.com/sarjon)
* [#13353](https://github.com/PrestaShop/PrestaShop/pull/13353): Fixes default Customer group overriding. Thank you [@sarjon](https://github.com/sarjon)
* [#13402](https://github.com/PrestaShop/PrestaShop/pull/13402): Add new hooks of 1.7.6.0 in fixtures, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#13409](https://github.com/PrestaShop/PrestaShop/pull/13409): Do not call removed cldr lib, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#13430](https://github.com/PrestaShop/PrestaShop/pull/13430): Merge 1.7.6.x to develop - 16/04/2019, by [@matks](https://github.com/matks)
* [#13435](https://github.com/PrestaShop/PrestaShop/pull/13435): Fixes option for MaterialMultipleChoiceTableType. Thank you [@sarjon](https://github.com/sarjon)
* [#13461](https://github.com/PrestaShop/PrestaShop/pull/13461): Merge 1.7.6.x in develop, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#13470](https://github.com/PrestaShop/PrestaShop/pull/13470): Removes GetDefaultGroupHandler adapter . Thank you [@sarjon](https://github.com/sarjon)


### Back office

* [#13351](https://github.com/PrestaShop/PrestaShop/pull/13351): Mail generator fixes, by [@jolelievre](https://github.com/jolelievre)
* [#13367](https://github.com/PrestaShop/PrestaShop/pull/13367): Remove deactivated currencies from new CLDR, by [@tomlev](https://github.com/tomlev)
* [#13404](https://github.com/PrestaShop/PrestaShop/pull/13404): missing showcase card in cms page implementation. Thank you [@tomas862](https://github.com/tomas862)
* [#13429](https://github.com/PrestaShop/PrestaShop/pull/13429): Build outdated assets for 1.7.6.x, by [@matks](https://github.com/matks)
* [#13431](https://github.com/PrestaShop/PrestaShop/pull/13431): Fix parameters list in product lookup, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#13434](https://github.com/PrestaShop/PrestaShop/pull/13434): Remove material icons on SQL manager page, by [@marionf](https://github.com/marionf)
* [#13439](https://github.com/PrestaShop/PrestaShop/pull/13439): Improvements on LegacyUrlConverter, "tab" alias, insensitive and prevent infinite redirection loop, by [@jolelievre](https://github.com/jolelievre)
* [#13466](https://github.com/PrestaShop/PrestaShop/pull/13466): Brand and address export actions. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13477](https://github.com/PrestaShop/PrestaShop/pull/13477): Fix issue on order with free gift, by [@tomlev](https://github.com/tomlev)


### Front office

* [#13003](https://github.com/PrestaShop/PrestaShop/pull/13003): free shipping behat tests, by [@tomlev](https://github.com/tomlev)
* [#13261](https://github.com/PrestaShop/PrestaShop/pull/13261): Fix lang on currency install, by [@tomlev](https://github.com/tomlev)


### Tests

* [#13464](https://github.com/PrestaShop/PrestaShop/pull/13464): Apply CS Fixer on 1.7.6.x, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Code changes in the 'develop' branch (for 1.7.7.0)

### Core

* [#13236](https://github.com/PrestaShop/PrestaShop/pull/13236): Adds ajax support for @AdminSecurity annotation. Thank you [@sarjon](https://github.com/sarjon)
* [#13486](https://github.com/PrestaShop/PrestaShop/pull/13486): Fix coding style on develop, by [@matks](https://github.com/matks)


### Back office

* [#13234](https://github.com/PrestaShop/PrestaShop/pull/13234): Add Showcase card in Categories page. Thank you [@sarjon](https://github.com/sarjon)
* [#13425](https://github.com/PrestaShop/PrestaShop/pull/13425): Border inside tabs when counter is empty. Thank you [@YeLnatSs](https://github.com/YeLnatSs)


## Code changes in modules, themes & tools

### Auto upgrade

* [#297](https://github.com/PrestaShop/autoupgrade/pull/297): Bump version to v4.7.0, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Preston Bot

* [#82](https://github.com/PrestaShop/prestonbot/pull/82): Fix tests and Travis pipeline, by [@matks](https://github.com/matks)


### Faceted search

* [#52](https://github.com/PrestaShop/ps_facetedsearch/pull/52): Huge Refactoring, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#54](https://github.com/PrestaShop/ps_facetedsearch/pull/54): Enable Release Drafter, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#55](https://github.com/PrestaShop/ps_facetedsearch/pull/55): Add PHP checks on Travis, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Translation tools

* [#58](https://github.com/PrestaShop/TranslationToolsBundle/pull/58): Add option to SmartyExtractor to allow it to include external module translations, by [@eternoendless](https://github.com/eternoendless)
* [#59](https://github.com/PrestaShop/TranslationToolsBundle/pull/59): Infer module domain for old legacy modules, by [@eternoendless](https://github.com/eternoendless)


### Theme customization

* [#12](https://github.com/PrestaShop/ps_themecusto/pull/12): Merge dev to master for 1.0.10, by [@jolelievre](https://github.com/jolelievre)


## Changes in Documentation

* [#232](https://github.com/PrestaShop/docs/pull/232): Document CQRS. Thank you [@sarjon](https://github.com/sarjon)
* [#243](https://github.com/PrestaShop/docs/pull/243): Documents Empty state feature of Grid. Thank you [@sarjon](https://github.com/sarjon)
* [#244](https://github.com/PrestaShop/docs/pull/244): Documents Bulk actions for Grid component. Thank you [@sarjon](https://github.com/sarjon)
* [#245](https://github.com/PrestaShop/docs/pull/245): Reusable custom Form Types reference. Thank you [@zuk3975](https://github.com/zuk3975)
* [#252](https://github.com/PrestaShop/docs/pull/252): Add hooks implemented in 1.7.6.0, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#253](https://github.com/PrestaShop/docs/pull/253): Corrected a typo in head.md. Thank you [@JePoste](https://github.com/JePoste)
* [#254](https://github.com/PrestaShop/docs/pull/254): Change many "http://" links by "https://". Thank you [@yannicka](https://github.com/yannicka)
* [#255](https://github.com/PrestaShop/docs/pull/255): Document domain exceptions. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @JePoste, @rokaszygmantas, @sarjon, @tomas862, @yannicka, @YeLnatSs, @zuk3975!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
