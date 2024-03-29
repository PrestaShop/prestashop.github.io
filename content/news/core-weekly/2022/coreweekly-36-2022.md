---
layout: post
aliases: ["/news/coreweekly-36-2022"]
title:  "PrestaShop Core Weekly - Week 36 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-09-14
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 5th to Sunday 11th of September 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week was held the sixth Public Demo of the year. You can read more about it [in this summary](https://build.prestashop.com/news/public-demo-6-2022/). You are encouraged to watch its video replay with two live demonstrations and the project's news presented in that session.

About the PrestaShop 8 beta, you can read an update in the [Release 8.0.0 Issue](https://github.com/PrestaShop/PrestaShop/issues/26427#issuecomment-1239098983):

> Also, the beta is now over: [39 bugs have been reported](https://github.com/PrestaShop/PrestaShop/search?q=created%3A2022-08-09..2022-09-04+is%3Aissue+label%3A8.0.x+-label%3AInvalid+-label%3ADuplicate&type=issues) during this period, of which 9 have been fixed at the time of writing. The remaining items to fix before the first release candidate can be tracked on the [project's kanban](https://github.com/PrestaShop/PrestaShop/projects/12).

It is still planned to release a Release Candidate at the end of September/early-October.

## A quick update about PrestaShop's GitHub issues and pull requests:

- [38 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-09-05..2022-09-11) have been created in the project repositories;
- [39 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-09-05..2022-09-11), including [21 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-09-05..2022-09-11) on the core;
- [89 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-09-05..2022-09-11) in the project repositories;
- [65 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-09-05..2022-09-11), including [50 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-09-05..2022-09-11).
        


## Code changes in the 'develop' branch


### Back office
* [#28551](https://github.com/PrestaShop/PrestaShop/pull/28551): Migrate country create action. Thank you [@margud](https://github.com/margud)


## Code changes in the '8.0.x' branch


### Core
* [#29537](https://github.com/PrestaShop/PrestaShop/pull/29537): Update productcomments v5.0.2, by [@kpodemski](https://github.com/kpodemski)
* [#29535](https://github.com/PrestaShop/PrestaShop/pull/29535): Update ps_linklist to 5.0.5, by [@matks](https://github.com/matks)
* [#29469](https://github.com/PrestaShop/PrestaShop/pull/29469): Fix hook registration and module enabling/disabling processes, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Back office
* [#29566](https://github.com/PrestaShop/PrestaShop/pull/29566): Functional tests -  refacto the BO - Header - quick access test , by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#29545](https://github.com/PrestaShop/PrestaShop/pull/29545): Fix php 8.1 Filemanager. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#29534](https://github.com/PrestaShop/PrestaShop/pull/29534): Fix broken icon-font on RTL after upgrade, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#29523](https://github.com/PrestaShop/PrestaShop/pull/29523): Combination fields list updated for partial update in Product::updateAttribute, by [@jolelievre](https://github.com/jolelievre)
* [#29512](https://github.com/PrestaShop/PrestaShop/pull/29512): Fix module upgrade button menu. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#29497](https://github.com/PrestaShop/PrestaShop/pull/29497): Extract missing modules translations, by [@jolelievre](https://github.com/jolelievre)
* [#29481](https://github.com/PrestaShop/PrestaShop/pull/29481): Fix BO - The images are not well displayed after adding it in file manager with php8.1. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#29441](https://github.com/PrestaShop/PrestaShop/pull/29441): Fix module translations. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#29426](https://github.com/PrestaShop/PrestaShop/pull/29426): Put product v2 feature flag in the beta form instead of stable, by [@atomiix](https://github.com/atomiix)
* [#29376](https://github.com/PrestaShop/PrestaShop/pull/29376): Horizontal migration HelperListConfiguration refacto. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29375](https://github.com/PrestaShop/PrestaShop/pull/29375): Fix SVG Upload, do not check dimensions if file is svg.. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#29195](https://github.com/PrestaShop/PrestaShop/pull/29195): Fix product state multishop. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#29060](https://github.com/PrestaShop/PrestaShop/pull/29060): Order page in BO > partial refund block, bad displaying of products “Quantity” field. Thank you [@okom3pom](https://github.com/okom3pom)
* [#28923](https://github.com/PrestaShop/PrestaShop/pull/28923): Fix product import for Product page v2.. Thank you [@MeKeyCool](https://github.com/MeKeyCool)


### Tests
* [#29528](https://github.com/PrestaShop/PrestaShop/pull/29528): Fix errors in nightly 8.0.x. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Back office
* [#29246](https://github.com/PrestaShop/PrestaShop/pull/29246): Fix Stock page style with RTL. Thank you [@MeKeyCool](https://github.com/MeKeyCool)


### Front office
* [#29471](https://github.com/PrestaShop/PrestaShop/pull/29471): Fix ps_facetedsearch - bad display after clearing a filter of no result. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#29413](https://github.com/PrestaShop/PrestaShop/pull/29413): Fix displayPackPrice compare price value instead of formatted price, by [@jolelievre](https://github.com/jolelievre)


### Installer
* [#29420](https://github.com/PrestaShop/PrestaShop/pull/29420): Clear translations cache before translating fixtures, by [@atomiix](https://github.com/atomiix)


## Code changes in modules, themes & tools


### OnBoarding module
* [#146](https://github.com/PrestaShop/welcome/pull/146): Bump node-sass from 7.0.2 to 7.0.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#144](https://github.com/PrestaShop/welcome/pull/144): Bump postcss and css-loader. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#143](https://github.com/PrestaShop/welcome/pull/143): Bump node-sass from 7.0.1 to 7.0.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer reassurance block module
* [#443](https://github.com/PrestaShop/blockreassurance/pull/443): Bump node-sass from 7.0.2 to 7.0.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#442](https://github.com/PrestaShop/blockreassurance/pull/442): Bump node-sass from 7.0.1 to 7.0.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#441](https://github.com/PrestaShop/blockreassurance/pull/441): Bump @babel/core from 7.18.13 to 7.19.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#707](https://github.com/PrestaShop/ps_facetedsearch/pull/707): Bump node-sass from 7.0.2 to 7.0.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#706](https://github.com/PrestaShop/ps_facetedsearch/pull/706): Bump mockery/mockery from 1.3.5 to 1.3.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#705](https://github.com/PrestaShop/ps_facetedsearch/pull/705): Bump node-sass from 7.0.1 to 7.0.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#704](https://github.com/PrestaShop/ps_facetedsearch/pull/704): Bump @babel/core from 7.18.13 to 7.19.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#703](https://github.com/PrestaShop/ps_facetedsearch/pull/703): Bump @babel/preset-env from 7.18.10 to 7.19.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer account links module
* [#42](https://github.com/PrestaShop/ps_customeraccountlinks/pull/42): Bump version to 3.2.0, by [@matks](https://github.com/matks)
* [#41](https://github.com/PrestaShop/ps_customeraccountlinks/pull/41): Solve wording caching if multiple/no addresses. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)


### Hummingbird theme
* [#371](https://github.com/PrestaShop/hummingbird/pull/371): Change block name to header_bottom. Thank you [@lramos-prolaser](https://github.com/lramos-prolaser)
* [#370](https://github.com/PrestaShop/hummingbird/pull/370): Add core js missing classes on product page, by [@NeOMakinG](https://github.com/NeOMakinG)


### Changes in developer documentation sources
* [#1479](https://github.com/PrestaShop/docs/pull/1479): Improve example branch, by [@matks](https://github.com/matks)
* [#1451](https://github.com/PrestaShop/docs/pull/1451): More precise info about installer + notable change for the Hook component, by [@kpodemski](https://github.com/kpodemski)


### Stylelint configuration
* [#46](https://github.com/PrestaShop/stylelint-config/pull/46): Bump stylelint-config-twbs-bootstrap from 3.2.0 to 6.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#500](https://github.com/PrestaShop/autoupgrade/pull/500): Add auto generated hooks via Core command for 8.0.0, by [@jolelievre](https://github.com/jolelievre)
* [#498](https://github.com/PrestaShop/autoupgrade/pull/498): Disable non native modules on PS8.0 and onward, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Classic theme
* [#48](https://github.com/PrestaShop/classic-theme/pull/48): Fix summary cart display on mobile. Thank you [@MeKeyCool](https://github.com/MeKeyCool)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@matks](https://github.com/matks), [@jolelievre](https://github.com/jolelievre), [@lramos-prolaser](https://github.com/lramos-prolaser), [@khouloudbelguith](https://github.com/khouloudbelguith), [@NeOMakinG](https://github.com/NeOMakinG), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@FabienPapet](https://github.com/FabienPapet), [@kpodemski](https://github.com/kpodemski), [@matthieu-rolland](https://github.com/matthieu-rolland), [@atomiix](https://github.com/atomiix), [@MeKeyCool](https://github.com/MeKeyCool), [@leemyongpakvn](https://github.com/leemyongpakvn), [@zuk3975](https://github.com/zuk3975), [@okom3pom](https://github.com/okom3pom), [@LouisAUTHIE](https://github.com/LouisAUTHIE), [@margud](https://github.com/margud)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

