---
layout: post
aliases: ["/news/coreweekly-40-2022"]
title:  "PrestaShop Core Weekly - Week 40 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-10-10
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 3rd to Sunday 9th of October 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The Quality Assurance team completed tests of PrestaShop release candidate 1, finding some bugs blocking the final release. You can read the [full report here](https://github.com/PrestaShop/PrestaShop/issues/26427#issuecomment-1273452133).

We managed to [fix issues with the search](https://github.com/PrestaShop/docs/issues/1052#issuecomment-1271405492) in the developer documentation. There are still improvements to be made, which we plan to address.

Last week was held the seventh Public Demo of the year. You can read more about it in [this summary](/news/public-demo-7-2022/). You are encouraged to watch its video replay with one live demonstration and the project’s news presented in that session.

## A quick update about PrestaShop's GitHub issues and pull requests:

- [57 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-10-03..2022-10-09) have been created in the project repositories;
- [36 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-10-03..2022-10-09), including [6 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-10-03..2022-10-09) on the core;
- [92 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-10-03..2022-10-09) in the project repositories;
- [49 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-10-03..2022-10-09), including [35 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-10-03..2022-10-09).
        


## Code changes in the 'develop' branch


### Core
* [#29841](https://github.com/PrestaShop/PrestaShop/pull/29841): Add info about fixing multiple issues into template. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Back office
* [#29861](https://github.com/PrestaShop/PrestaShop/pull/29861): Fix subtitle default position on module configure page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#29740](https://github.com/PrestaShop/PrestaShop/pull/29740): Remove not needed help text when you add new tax rule, by [@kpodemski](https://github.com/kpodemski)
* [#29731](https://github.com/PrestaShop/PrestaShop/pull/29731): Fix a problem with invalid filtering on the Modules -> Positions page, by [@kpodemski](https://github.com/kpodemski)
* [#29490](https://github.com/PrestaShop/PrestaShop/pull/29490): Notice in Back Office where you edit image settings. Thank you [@AlexTechDev](https://github.com/AlexTechDev)


### Tests
* [#29926](https://github.com/PrestaShop/PrestaShop/pull/29926): Remove permissions from workflow, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#29899](https://github.com/PrestaShop/PrestaShop/pull/29899): Functional tests - Fix 'FO > Contact US > Add attachment' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '8.0.x' branch


### Core
* [#29831](https://github.com/PrestaShop/PrestaShop/pull/29831): Convert 1.7.9 to 8.0.0 in deprecation message, by [@matks](https://github.com/matks)


### Back office
* [#29847](https://github.com/PrestaShop/PrestaShop/pull/29847): Fix product page v1 footer responsive, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#29791](https://github.com/PrestaShop/PrestaShop/pull/29791): Fix form layout in Advanced Parameters > Security > Password policy, by [@eternoendless](https://github.com/eternoendless)
* [#29047](https://github.com/PrestaShop/PrestaShop/pull/29047): Fix ordering by product name + add ordering by product id (movements page). Thank you [@marsaldev](https://github.com/marsaldev)


### Tests
* [#29912](https://github.com/PrestaShop/PrestaShop/pull/29912): Delete run on label 'TE' for UI code checks. Thank you [@sarahdib](https://github.com/sarahdib)
* [#29898](https://github.com/PrestaShop/PrestaShop/pull/29898): Functional Tests : BO - Orders - Shopping carts - View carts, by [@Progi1984](https://github.com/Progi1984)
* [#29896](https://github.com/PrestaShop/PrestaShop/pull/29896): Functional tests - Add new test 'FO > Marchandise returns > check order return PDF'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29864](https://github.com/PrestaShop/PrestaShop/pull/29864): Fix nightly 04/10/2022 - Fix  'BO > Header > My profile' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29855](https://github.com/PrestaShop/PrestaShop/pull/29855): Refacto UI tests login page to simplify usage, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#29844](https://github.com/PrestaShop/PrestaShop/pull/29844): Functional Tests : Fixed errors from the script `check:step-identifiers`, by [@Progi1984](https://github.com/Progi1984)
* [#29835](https://github.com/PrestaShop/PrestaShop/pull/29835): Functional tests - Add new test 'FO > Check slider'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Changes in developer documentation theme
* [#13](https://github.com/PrestaShop/ps-docs-theme/pull/13): Fix indexing pages with canonicals, by [@kpodemski](https://github.com/kpodemski)
* [#12](https://github.com/PrestaShop/ps-docs-theme/pull/12): Change mermaid dependencies and remove old ones. Thank you [@thomasnares](https://github.com/thomasnares)
* [#11](https://github.com/PrestaShop/ps-docs-theme/pull/11): Fix docsearch dependency version. Thank you [@MeKeyCool](https://github.com/MeKeyCool)


### The PrestaShop open source project
* [#125](https://github.com/PrestaShop/open-source/pull/125): Update Issue managers / ST and SDT members for the project. Thank you [@sarahdib](https://github.com/sarahdib)


### Changes in developer documentation sources
* [#1533](https://github.com/PrestaShop/docs/pull/1533): Update classic theme changes in PrestaShop 8. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1530](https://github.com/PrestaShop/docs/pull/1530): Update project hostname. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#1529](https://github.com/PrestaShop/docs/pull/1529): Update project hostname. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#1528](https://github.com/PrestaShop/docs/pull/1528): Update instructions on how to fill PR.. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#1527](https://github.com/PrestaShop/docs/pull/1527): Backport of PR1526. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1526](https://github.com/PrestaShop/docs/pull/1526): Update module names, template code for PS 1.7. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1525](https://github.com/PrestaShop/docs/pull/1525): Fix style around example codes. Thank you [@yannicka](https://github.com/yannicka)


### Buy button lite module
* [#64](https://github.com/PrestaShop/ps_buybuttonlite/pull/64): Bump css-what from 2.1.0 to 2.1.3 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Hummingbird theme
* [#376](https://github.com/PrestaShop/hummingbird/pull/376): Update webpack and remove file-loader, by [@NeOMakinG](https://github.com/NeOMakinG)


### Email Alerts module
* [#118](https://github.com/PrestaShop/ps_emailalerts/pull/118): Release 2.4.0. Thank you [@marsaldev](https://github.com/marsaldev)


### stylelint configuration
* [#51](https://github.com/PrestaShop/stylelint-config/pull/51): Bump stylelint-no-unsupported-browser-features from 5.0.4 to 6.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PHP Developer Tools
* [#69](https://github.com/PrestaShop/php-dev-tools/pull/69): Remove php in front of vendor/bin/php-cs-fixer fix, since that is wrong. Thank you [@madsoliver](https://github.com/madsoliver)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@boubkerbribri](https://github.com/boubkerbribri), [@kpodemski](https://github.com/kpodemski), [@sarahdib](https://github.com/sarahdib), [@leemyongpakvn](https://github.com/leemyongpakvn), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@Progi1984](https://github.com/Progi1984), [@dependabot[bot]](https://github.com/apps/dependabot), [@NeOMakinG](https://github.com/NeOMakinG), [@matks](https://github.com/matks), [@thomasnares](https://github.com/thomasnares), [@MeKeyCool](https://github.com/MeKeyCool), [@Hlavtox](https://github.com/Hlavtox), [@marsaldev](https://github.com/marsaldev), [@yannicka](https://github.com/yannicka), [@eternoendless](https://github.com/eternoendless), [@AlexTechDev](https://github.com/AlexTechDev), [@madsoliver](https://github.com/madsoliver)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

