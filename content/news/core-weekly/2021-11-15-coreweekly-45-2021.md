---
layout: post
aliases: ["/news/coreweekly-45-2021"]
slug: "coreweekly-45-2021"
title:  "PrestaShop Core Weekly - Week 45 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-11-16
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 8th to Sunday 14th of November 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

[PrestaShop 1.7.8.1](https://build.prestashop.com/news/prestashop-1-7-8-1-maintenance-release/) was released on November 15, 2021. This maintenance release fixes 44 bugs reported since the initial 1.7.8.0 release.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [41 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-11-08..2021-11-14) have been created in the project repositories;
- [39 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-11-08..2021-11-14), including [7 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-11-08..2021-11-14) on the core;
- [69 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-11-08..2021-11-14) in the project repositories;
- [88 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-11-08..2021-11-14), including [54 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-11-08..2021-11-14).
        


## Code changes in the 'develop' branch


### Core
* [#26489](https://github.com/PrestaShop/PrestaShop/pull/26489): Removing some duplicated code lines. Thank you [@beattie282](https://github.com/beattie282)


### Back office
* [#26538](https://github.com/PrestaShop/PrestaShop/pull/26538): Fixed filemanager new folder. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)
* [#26506](https://github.com/PrestaShop/PrestaShop/pull/26506): Introduce CQRS query to search combinations for association, by [@jolelievre](https://github.com/jolelievre)
* [#26220](https://github.com/PrestaShop/PrestaShop/pull/26220): Repair sorting on block address in customer view. Thank you [@tegbessou](https://github.com/tegbessou)
* [#26061](https://github.com/PrestaShop/PrestaShop/pull/26061): Clean Back-office templates, part 2 - configure. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#24780](https://github.com/PrestaShop/PrestaShop/pull/24780): Fix to keep the main product category after importing a product update. Thank you [@SergioQuinonez](https://github.com/SergioQuinonez)


### Front office
* [#26477](https://github.com/PrestaShop/PrestaShop/pull/26477): Fix error while compiling theme assets. Thank you [@templatin](https://github.com/templatin)
* [#25501](https://github.com/PrestaShop/PrestaShop/pull/25501): Smarty Modifier Classname - compatibility with CSS BEM method. Thank you [@tups](https://github.com/tups)


### Tests
* [#26533](https://github.com/PrestaShop/PrestaShop/pull/26533): Moved ContextMocker from tests-legacy/ to tests/, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### Changes in developer documentation sources
* [#1215](https://github.com/PrestaShop/docs/pull/1215): Color picker won't be available in 1.7, by [@kpodemski](https://github.com/kpodemski)
* [#1214](https://github.com/PrestaShop/docs/pull/1214): Color picker is coming to v8, not 1.7.9, by [@kpodemski](https://github.com/kpodemski)
* [#1212](https://github.com/PrestaShop/docs/pull/1212): Improve HelperOptions doc. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1211](https://github.com/PrestaShop/docs/pull/1211): Move distribution doc into the appropriate directory and improve it, by [@eternoendless](https://github.com/eternoendless)
* [#1210](https://github.com/PrestaShop/docs/pull/1210): Redirect maintainer's guide to the project's site (Backport #1201), by [@eternoendless](https://github.com/eternoendless)
* [#1207](https://github.com/PrestaShop/docs/pull/1207): Improve JS toggle doc. Thank you [@abramofranchetti](https://github.com/abramofranchetti)
* [#1194](https://github.com/PrestaShop/docs/pull/1194): Update broken 404 links to github points 1.7.6.x -> 1.7.8.0. Thank you [@SebSept](https://github.com/SebSept)


### Customer reassurance block module
* [#312](https://github.com/PrestaShop/blockreassurance/pull/312): Bump webpack from 5.63.0 to 5.64.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#311](https://github.com/PrestaShop/blockreassurance/pull/311): Bump eslint-plugin-import from 2.25.2 to 2.25.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#310](https://github.com/PrestaShop/blockreassurance/pull/310): Bump webpack from 5.62.1 to 5.63.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#309](https://github.com/PrestaShop/blockreassurance/pull/309): Bump webpack from 5.61.0 to 5.62.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#556](https://github.com/PrestaShop/ps_facetedsearch/pull/556): Bump webpack from 5.63.0 to 5.64.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#555](https://github.com/PrestaShop/ps_facetedsearch/pull/555): Bump eslint-plugin-import from 2.25.2 to 2.25.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#554](https://github.com/PrestaShop/ps_facetedsearch/pull/554): Bump webpack from 5.62.1 to 5.63.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#551](https://github.com/PrestaShop/ps_facetedsearch/pull/551): Bump version to 3.8.0, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#549](https://github.com/PrestaShop/ps_facetedsearch/pull/549): Bump webpack from 5.61.0 to 5.62.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#548](https://github.com/PrestaShop/ps_facetedsearch/pull/548): Fixed order brands case sensitive. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)


### OnBoarding module
* [#133](https://github.com/PrestaShop/welcome/pull/133): Bump eslint-plugin-import from 2.25.2 to 2.25.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### New 8.0.0 Front-office theme
* [#114](https://github.com/PrestaShop/theme-refacto/pull/114): Fix closing menu and retrn to home, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#113](https://github.com/PrestaShop/theme-refacto/pull/113): Add some anims to the menu, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#112](https://github.com/PrestaShop/theme-refacto/pull/112): Fix menu without any fixed positions, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#110](https://github.com/PrestaShop/theme-refacto/pull/110): Polish header. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#109](https://github.com/PrestaShop/theme-refacto/pull/109): Fix form render. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#108](https://github.com/PrestaShop/theme-refacto/pull/108): Temporary remove bootstrap from theme.ts, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#107](https://github.com/PrestaShop/theme-refacto/pull/107): Remove legacy form classes. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#106](https://github.com/PrestaShop/theme-refacto/pull/106): Temporary disable jquery on theme side, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#105](https://github.com/PrestaShop/theme-refacto/pull/105): Integrate store page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#104](https://github.com/PrestaShop/theme-refacto/pull/104): Refacto header. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#103](https://github.com/PrestaShop/theme-refacto/pull/103): Integrate brand page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#102](https://github.com/PrestaShop/theme-refacto/pull/102): Integrate customer page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#101](https://github.com/PrestaShop/theme-refacto/pull/101): Fix product list size on mobile, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#100](https://github.com/PrestaShop/theme-refacto/pull/100): Adapt product list with new mockups, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#99](https://github.com/PrestaShop/theme-refacto/pull/99): Add jQuery and prestashop object without core.js, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#98](https://github.com/PrestaShop/theme-refacto/pull/98): Make quickview and added product modal works, by [@NeOMakinG](https://github.com/NeOMakinG)


### User documentation landing page
* [#153](https://github.com/PrestaShop/user-documentation-landing/pull/153): fix(deps): bump browserslist from 4.16.3 to 4.17.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#152](https://github.com/PrestaShop/user-documentation-landing/pull/152): fix(deps): bump lodash from 4.17.20 to 4.17.21. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#151](https://github.com/PrestaShop/user-documentation-landing/pull/151): fix(deps): bump tar from 6.1.8 to 6.1.11. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#150](https://github.com/PrestaShop/user-documentation-landing/pull/150): fix(deps): bump path-parse from 1.0.6 to 1.0.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#149](https://github.com/PrestaShop/user-documentation-landing/pull/149): chore(deps-dev): bump eslint-config-airbnb-base from 14.2.1 to 15.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Core Weekly Generator tool
* [#107](https://github.com/PrestaShop/core-weekly-generator/pull/107): Add 2 references, by [@matks](https://github.com/matks)


### presthubot
* [#40](https://github.com/PrestaShop/presthubot/pull/40): Remove support of the 1.7.7.x branch, by [@boubkerbribri](https://github.com/boubkerbribri)


### Product Comments module
* [#116](https://github.com/PrestaShop/productcomments/pull/116): Fixed ratings grade when changing product combination, by [@Progi1984](https://github.com/Progi1984)


### Google Analytics module
* [#103](https://github.com/PrestaShop/ps_googleanalytics/pull/103): Modify css to avoid text overlap in french language. Thank you [@christophe-rouille](https://github.com/christophe-rouille)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@kpodemski](https://github.com/kpodemski), [@jf-viguier](https://github.com/jf-viguier), [@eternoendless](https://github.com/eternoendless), [@dependabot[bot]](https://github.com/apps/dependabot), [@NeOMakinG](https://github.com/NeOMakinG), [@Hlavtox](https://github.com/Hlavtox), [@Progi1984](https://github.com/Progi1984), [@PierreRambaud](https://github.com/PierreRambaud), [@abramofranchetti](https://github.com/abramofranchetti), [@matks](https://github.com/matks), [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds), [@boubkerbribri](https://github.com/boubkerbribri), [@jolelievre](https://github.com/jolelievre), [@beattie282](https://github.com/beattie282), [@templatin](https://github.com/templatin), [@SebSept](https://github.com/SebSept), [@christophe-rouille](https://github.com/christophe-rouille), [@marionf](https://github.com/marionf), [@tegbessou](https://github.com/tegbessou), [@tups](https://github.com/tups), [@SergioQuinonez](https://github.com/SergioQuinonez)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

