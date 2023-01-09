---
layout: post
aliases: ["/news/coreweekly-44-2021"]
title:  "PrestaShop Core Weekly - Week 44 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-11-08
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 1st to Sunday 7th of November 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is over. But the PrestaShop project continues, stronger than ever.

In case you did not see it, [Autoupgrade module 4.3.0](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.13.0) was released last week!

Also last week, the project’s tenth monthly public demo session was held and streamed live on [Wednesday 3rd of November 2021](https://build.prestashop.com/news/public-oss-demo-10-2021/). If you did not watch it and you want to know more about the future of the PrestaShop _open source project_ (and not the software), check what @ttoine presented during the 10th PrestaShop Public Demo!

While [PrestaShop 1.7.8.1](https://github.com/PrestaShop/PrestaShop/issues/26141) is being tested before release, [PHP 8.1.0 fifth release candidate](https://www.php.net/archive/2021.php#2021-10-28-2) and [Symfony 6.0.0 first beta](https://symfony.com/blog/symfony-6-0-0-beta1-released) have been published!


## Releases

* [GDPR](https://github.com/PrestaShop/psgdpr) module: [v1.3.0](https://github.com/PrestaShop/psgdpr/releases/tag/v1.3.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [35 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-11-01..2021-11-07) have been created in the project repositories;
- [30 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-11-01..2021-11-07), including [11 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-11-01..2021-11-07) on the core;
- [45 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-11-01..2021-11-07) in the project repositories;
- [51 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-11-01..2021-11-07), including [48 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-11-01..2021-11-07).


## Code changes in the 'develop' branch


### Core
* [#26479](https://github.com/PrestaShop/PrestaShop/pull/26479): PHPStan (Level 5) on config/, by [@Progi1984](https://github.com/Progi1984)
* [#26415](https://github.com/PrestaShop/PrestaShop/pull/26415): Fix old deleted customization fields copied after duplicating a product, by [@Matt75](https://github.com/Matt75)


### Back office
* [#26512](https://github.com/PrestaShop/PrestaShop/pull/26512): Fixed search on Profile Grid in BackOffice, by [@Progi1984](https://github.com/Progi1984)
* [#26494](https://github.com/PrestaShop/PrestaShop/pull/26494): Changed colorPicker width in BackOffice. Thank you [@hibatallahAouadni](https://github.com/hibatallahAouadni)
* [#26465](https://github.com/PrestaShop/PrestaShop/pull/26465): Fix modal position on safari on order page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#26449](https://github.com/PrestaShop/PrestaShop/pull/26449): Refactor product status command, by [@jolelievre](https://github.com/jolelievre)
* [#26188](https://github.com/PrestaShop/PrestaShop/pull/26188): Add a float parser for the wholesale price of attributes. Thank you [@andromaque](https://github.com/andromaque)
* [#26051](https://github.com/PrestaShop/PrestaShop/pull/26051): Improve sync between wholesale price and default supplier price in both CQRS and page v2, by [@jolelievre](https://github.com/jolelievre)
* [#23889](https://github.com/PrestaShop/PrestaShop/pull/23889): Display customer company when creating an order in the BO. Thank you [@Kaudaj](https://github.com/Kaudaj)


### Tests
* [#26520](https://github.com/PrestaShop/PrestaShop/pull/26520): Fix select hidden checkboxes on customers and localization pages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#26496](https://github.com/PrestaShop/PrestaShop/pull/26496): Upgrade playwright to v1.16.2, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#26495](https://github.com/PrestaShop/PrestaShop/pull/26495): Fix name of screenshot on sanity workflow, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#26445](https://github.com/PrestaShop/PrestaShop/pull/26445): Functional  tests - Add new test to check 'Carriers tab from view order page'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#26423](https://github.com/PrestaShop/PrestaShop/pull/26423): Functional tests - Add new test 'Check documents tab on view order page'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#26214](https://github.com/PrestaShop/PrestaShop/pull/26214): Functional tests - Refacto Advanced Parameters tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#25693](https://github.com/PrestaShop/PrestaShop/pull/25693): Update test scripts on package.json, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.8.x' branch


### Core
* [#26525](https://github.com/PrestaShop/PrestaShop/pull/26525): Update native modules, by [@atomiix](https://github.com/atomiix)


### Back office
* [#26492](https://github.com/PrestaShop/PrestaShop/pull/26492): Fix the display of the State field and the Zip/Postal in the add new Tax rule page, by [@khouloudbelguith](https://github.com/khouloudbelguith)


## Code changes in modules, themes & tools


### Customer reassurance block module
* [#308](https://github.com/PrestaShop/blockreassurance/pull/308): Bump mini-css-extract-plugin from 2.4.3 to 2.4.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#307](https://github.com/PrestaShop/blockreassurance/pull/307): Bump css-loader from 6.5.0 to 6.5.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#304](https://github.com/PrestaShop/blockreassurance/pull/304): Bump webpack from 5.60.0 to 5.61.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#303](https://github.com/PrestaShop/blockreassurance/pull/303): Bump @babel/core from 7.15.8 to 7.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation sources
* [#1206](https://github.com/PrestaShop/docs/pull/1206): fix links to docker hub. Thank you [@SebSept](https://github.com/SebSept)
* [#1205](https://github.com/PrestaShop/docs/pull/1205): fix docker hub links. Thank you [@SebSept](https://github.com/SebSept)
* [#1185](https://github.com/PrestaShop/docs/pull/1185): Improve HelperOptions doc. Thank you [@jf-viguier](https://github.com/jf-viguier)


### PrestaShop Specifications
* [#260](https://github.com/PrestaShop/prestashop-specs/pull/260): Add files via upload. Thank you [@Saimis777](https://github.com/Saimis777)
* [#259](https://github.com/PrestaShop/prestashop-specs/pull/259): Cost price new behaviour. Thank you [@MatShir](https://github.com/MatShir)
* [#258](https://github.com/PrestaShop/prestashop-specs/pull/258): Update order setting - shipping cost. Thank you [@MatShir](https://github.com/MatShir)


### Faceted search module
* [#547](https://github.com/PrestaShop/ps_facetedsearch/pull/547): Bump css-loader from 6.5.0 to 6.5.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#546](https://github.com/PrestaShop/ps_facetedsearch/pull/546): Bump @babel/register from 7.15.3 to 7.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#545](https://github.com/PrestaShop/ps_facetedsearch/pull/545): Bump webpack from 5.60.0 to 5.61.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#544](https://github.com/PrestaShop/ps_facetedsearch/pull/544): Bump @babel/preset-env from 7.15.8 to 7.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#543](https://github.com/PrestaShop/ps_facetedsearch/pull/543): Bump @babel/node from 7.15.8 to 7.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#542](https://github.com/PrestaShop/ps_facetedsearch/pull/542): Bump @babel/core from 7.15.8 to 7.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#541](https://github.com/PrestaShop/ps_facetedsearch/pull/541): Bump @babel/cli from 7.15.7 to 7.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### User documentation landing page
* [#148](https://github.com/PrestaShop/user-documentation-landing/pull/148): fix(deps): bump core-js from 3.19.0 to 3.19.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Links list module
* [#139](https://github.com/PrestaShop/ps_linklist/pull/139): Add the production mode to the build command. Thank you [@arouiadib](https://github.com/arouiadib)
* [#138](https://github.com/PrestaShop/ps_linklist/pull/138): Bump lodash from 4.17.10 to 4.17.21 in /views. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#137](https://github.com/PrestaShop/ps_linklist/pull/137): Fix Cannot build JavaScript for ps_linklist. Thank you [@arouiadib](https://github.com/arouiadib)


### GDPR module
* [#151](https://github.com/PrestaShop/psgdpr/pull/151): Release 1.3.0, by [@Progi1984](https://github.com/Progi1984)
* [#146](https://github.com/PrestaShop/psgdpr/pull/146): Update data to type option in ajax request. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#111](https://github.com/PrestaShop/psgdpr/pull/111): Fixed some translations for the German language. Thank you [@levyn](https://github.com/levyn)


### PrestonBot
* [#121](https://github.com/PrestaShop/prestonbot/pull/121): Make related ticket optional when category is ME, by [@atomiix](https://github.com/atomiix)


### Customer data privacy block module
* [#32](https://github.com/PrestaShop/ps_dataprivacy/pull/32): Remove useless Smarty cache clearing, by [@Matt75](https://github.com/Matt75)


### Email Alerts module
* [#96](https://github.com/PrestaShop/ps_emailalerts/pull/96): Fix product customization logic in the listing. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Wishlist block module
* [#132](https://github.com/PrestaShop/blockwishlist/pull/132): Move modal from head to footer. Thank you [@okom3pom](https://github.com/okom3pom)


### Specials block module
* [#4](https://github.com/PrestaShop/ps_specials/pull/4): Cache should be customer dependant. Thank you [@jf-viguier](https://github.com/jf-viguier)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@SebSept](https://github.com/SebSept), [@atomiix](https://github.com/atomiix), [@Saimis777](https://github.com/Saimis777), [@boubkerbribri](https://github.com/boubkerbribri), [@Progi1984](https://github.com/Progi1984), [@arouiadib](https://github.com/arouiadib), [@MatShir](https://github.com/MatShir), [@hibatallahAouadni](https://github.com/hibatallahAouadni), [@khouloudbelguith](https://github.com/khouloudbelguith), [@NeOMakinG](https://github.com/NeOMakinG), [@jolelievre](https://github.com/jolelievre), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@Matt75](https://github.com/Matt75), [@Hlavtox](https://github.com/Hlavtox), [@PrestaEdit](https://github.com/PrestaEdit), [@jf-viguier](https://github.com/jf-viguier), [@andromaque](https://github.com/andromaque), [@okom3pom](https://github.com/okom3pom), [@Kaudaj](https://github.com/Kaudaj), [@levyn](https://github.com/levyn)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

