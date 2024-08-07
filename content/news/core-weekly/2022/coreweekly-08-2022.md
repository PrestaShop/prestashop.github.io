---
layout: post
aliases: ["/news/coreweekly-08-2022"]
title:  "PrestaShop Core Weekly - Week 8 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-02-28
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 21th to Sunday 27th of February 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Reminder: the next session of [public demonstration](https://build.prestashop.com/news/upcoming-demo-2-2022/) from the maintainers team will be streamed live on Wednesday, March 2, 2022, at 4 pm CET.

During the session, we will announce the result of the poll that decided the name of the new theme :tada: !


## A quick update about PrestaShop's GitHub issues and pull requests:

- [31 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-02-21..2022-02-27) have been created in the project repositories;
- [28 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-02-21..2022-02-27), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-02-21..2022-02-27) on the core;
- [48 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-02-21..2022-02-27) in the project repositories;
- [38 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-02-21..2022-02-27), including [34 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-02-21..2022-02-27).



## Code changes in the 'develop' branch


### Core
* [#27797](https://github.com/PrestaShop/PrestaShop/pull/27797): Removed old constants (for removed directories), by [@Progi1984](https://github.com/Progi1984)
* [#27754](https://github.com/PrestaShop/PrestaShop/pull/27754): Removed dead code about `vatnumber` Module, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#27751](https://github.com/PrestaShop/PrestaShop/pull/27751): Removed dead code about Aviary in FileManager, by [@Progi1984](https://github.com/Progi1984)
* [#27719](https://github.com/PrestaShop/PrestaShop/pull/27719): Product multi shop stock, by [@jolelievre](https://github.com/jolelievre)
* [#27710](https://github.com/PrestaShop/PrestaShop/pull/27710): Removed dead code relative to Addons, by [@Progi1984](https://github.com/Progi1984)
* [#27697](https://github.com/PrestaShop/PrestaShop/pull/27697): In Import Page, allow all languages (active and inactive), by [@Progi1984](https://github.com/Progi1984)
* [#27525](https://github.com/PrestaShop/PrestaShop/pull/27525): Multistore - International > Taxes > Taxes - Add checkboxes #19373. Thank you [@okom3pom](https://github.com/okom3pom)
* [#27481](https://github.com/PrestaShop/PrestaShop/pull/27481): Product page v2 accessible in menu, by [@jolelievre](https://github.com/jolelievre)
* [#27288](https://github.com/PrestaShop/PrestaShop/pull/27288): Remove AdminAttributeGeneratorController & Use about (unused) table attribute_impact, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#27475](https://github.com/PrestaShop/PrestaShop/pull/27475): Fix: prestashop event functions are overwritten in the "classic" theme. Thank you [@tups](https://github.com/tups)


### Tests
* [#27792](https://github.com/PrestaShop/PrestaShop/pull/27792): Functional Tests - Refacto search customer test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27685](https://github.com/PrestaShop/PrestaShop/pull/27685): Add 410 gone redirect type test. Thank you [@okom3pom](https://github.com/okom3pom)
* [#27636](https://github.com/PrestaShop/PrestaShop/pull/27636): Add more pre-conditions and post-conditions on separatly tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Front office
* [#27748](https://github.com/PrestaShop/PrestaShop/pull/27748): Fix the category dropdown on the module catalog page, by [@sowbiba](https://github.com/sowbiba)


### Installer
* [#27722](https://github.com/PrestaShop/PrestaShop/pull/27722): Fix translations installation broken by prefix. Thank you [@saulaski](https://github.com/saulaski)


### Web services
* [#27766](https://github.com/PrestaShop/PrestaShop/pull/27766): Fix multilang translator issue, by [@jolelievre](https://github.com/jolelievre)


## Code changes in modules, themes & tools


### Changes in developer documentation sources
* [#1306](https://github.com/PrestaShop/docs/pull/1306): Fix `DbQuery` class `limit` method signature.. Thank you [@PululuK](https://github.com/PululuK)
* [#1305](https://github.com/PrestaShop/docs/pull/1305): The list of Smarty variables deserve a title. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1304](https://github.com/PrestaShop/docs/pull/1304): Remove the root note, the file could be everywhere inside the module. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1303](https://github.com/PrestaShop/docs/pull/1303): Fix path to .eslintrc.js file. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1277](https://github.com/PrestaShop/docs/pull/1277): Fix hook actionPresentCart parameter indentation, by [@matks](https://github.com/matks)


### OnBoarding module
* [#140](https://github.com/PrestaShop/welcome/pull/140): Bump bourbon from 7.0.0 to 7.2.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#626](https://github.com/PrestaShop/ps_facetedsearch/pull/626): Bump @babel/cli from 7.17.3 to 7.17.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#625](https://github.com/PrestaShop/ps_facetedsearch/pull/625): Bump shelljs from 0.8.4 to 0.8.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#624](https://github.com/PrestaShop/ps_facetedsearch/pull/624): Bump mocha from 9.2.0 to 9.2.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### stylelint configuration
* [#25](https://github.com/PrestaShop/stylelint-config/pull/25): Bump stylelint-no-unsupported-browser-features from 5.0.2 to 5.0.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### New Front-office theme
* [#184](https://github.com/PrestaShop/theme-refacto/pull/184): Add useToast. Thank you [@mparvazi](https://github.com/mparvazi)


### The PrestaShop open source project
* [#76](https://github.com/PrestaShop/open-source/pull/76): Add information about build branches in release guide, by [@eternoendless](https://github.com/eternoendless)
* [#74](https://github.com/PrestaShop/open-source/pull/74): Add project organization and roles, by [@eternoendless](https://github.com/eternoendless)


### Auto Upgrade module
* [#422](https://github.com/PrestaShop/autoupgrade/pull/422): Add missing hooks actionCustomerLogout & displayCheckoutSummaryTop. Thank you [@okom3pom](https://github.com/okom3pom)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Progi1984](https://github.com/Progi1984), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@PululuK](https://github.com/PululuK), [@jf-viguier](https://github.com/jf-viguier), [@PrestaEdit](https://github.com/PrestaEdit), [@dependabot[bot]](https://github.com/apps/dependabot), [@NeOMakinG](https://github.com/NeOMakinG), [@jolelievre](https://github.com/jolelievre), [@sowbiba](https://github.com/sowbiba), [@saulaski](https://github.com/saulaski), [@mparvazi](https://github.com/mparvazi), [@okom3pom](https://github.com/okom3pom), [@tups](https://github.com/tups), [@matks](https://github.com/matks), [@eternoendless](https://github.com/eternoendless)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

