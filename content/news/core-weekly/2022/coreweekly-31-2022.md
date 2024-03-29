---
layout: post
aliases: ["/news/coreweekly-31-2022"]
title:  "PrestaShop Core Weekly - Week 31 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-08-08
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 1st to Sunday 7th of August 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The ongoing work with PrestaShop 8 Beta is still the team's number one priority. Last week a new Distribution API Client and Contextual Help API were released, two modules that are an integral part of the upcoming version, replacing the old Module Manager and back office help sidebar.

A few months ago, the `Classic` theme stopped being used in PrestaShop 8 core's repository. It is now included as a project's dependency using Composer. This is why the team [created a new tag](https://github.com/PrestaShop/classic-theme/releases/tag/2.0.0-beta) on its repository to ensure that PrestaShop 8 will use a theme version dedicated to this particular release.

Expect more news about PrestaShop 8 Beta in the upcoming days.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [53 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-08-01..2022-08-07) have been created in the project repositories;
- [38 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-08-01..2022-08-07), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-08-01..2022-08-07) on the core;
- [45 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-08-01..2022-08-07) in the project repositories;
- [41 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-08-01..2022-08-07), including [35 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-08-01..2022-08-07).


## Releases

* [Blockwishlist](https://github.com/PrestaShop/blockwishlist) module: [v2.1.2](https://github.com/PrestaShop/blockwishlist/releases/tag/v2.1.2)
* [Contextual Help API](https://github.com/PrestaShop/contextual-help-api): [v1.0.0](https://github.com/PrestaShop/contextual-help-api/releases/tag/1.0.0)
* [Distribution API Client](https://github.com/PrestaShop/ps_distributionapiclient) module: [v1.0.1](https://github.com/PrestaShop/ps_distributionapiclient/releases/tag/v1.0.1)


## Code changes in the 'develop' branch


### Back office
* [#28820](https://github.com/PrestaShop/PrestaShop/pull/28820): Add employee info on the Payments tab when payment is registered, by [@Progi1984](https://github.com/Progi1984)
* [#28799](https://github.com/PrestaShop/PrestaShop/pull/28799): Sort product table (in email, invoices and order view) by reference id, by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '8.0.x' branch


### Core
* [#29261](https://github.com/PrestaShop/PrestaShop/pull/29261): Bump distribution API module to 1.0.1, by [@matks](https://github.com/matks)
* [#29239](https://github.com/PrestaShop/PrestaShop/pull/29239): Update composer deps and lock classic to beta-2.0.0, by [@matks](https://github.com/matks)
* [#28658](https://github.com/PrestaShop/PrestaShop/pull/28658): Bump `prestashop/ps_cashondelivery` to 2.0.1, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#29199](https://github.com/PrestaShop/PrestaShop/pull/29199): Fix 29165 BO input unit display. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#29174](https://github.com/PrestaShop/PrestaShop/pull/29174): Toggle condition availability based on show_condition. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29024](https://github.com/PrestaShop/PrestaShop/pull/29024): Fixes BO Dashdoard Button wrong display. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)


## Code changes in the '1.7.8.x' branch


### Core
* [#27422](https://github.com/PrestaShop/PrestaShop/pull/27422): Use core translations sources for themes in addition to the translations of the theme itself, by [@atomiix](https://github.com/atomiix)


## Code changes in modules, themes & tools


### The PrestaShop open source project
* [#112](https://github.com/PrestaShop/open-source/pull/112): Update slack page, by [@eternoendless](https://github.com/eternoendless)


### Changes in developer documentation sources
* [#1433](https://github.com/PrestaShop/docs/pull/1433): Fix broken image link after PR 1428 merged. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1431](https://github.com/PrestaShop/docs/pull/1431): Update introduction.md. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)
* [#1428](https://github.com/PrestaShop/docs/pull/1428): Add missing char; replace newer release image; add needed link. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1407](https://github.com/PrestaShop/docs/pull/1407): Update introduction.md. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)
* [#1378](https://github.com/PrestaShop/docs/pull/1378): Link for Clone the repository using Git. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Module Releases Monitor
* [#7](https://github.com/PrestaShop/ps-monitor-module-releases/pull/7): Re-compute page every day by GitHub Action, by [@matks](https://github.com/matks)


### Category tree links module
* [#61](https://github.com/PrestaShop/ps_categorytree/pull/61): Bump version to 2.0.3. Thank you [@okom3pom](https://github.com/okom3pom)
* [#59](https://github.com/PrestaShop/ps_categorytree/pull/59): Fix the category tree on pages that are not a category, by [@kpodemski](https://github.com/kpodemski)


### Customer reassurance block module
* [#435](https://github.com/PrestaShop/blockreassurance/pull/435): Bump @babel/core from 7.18.9 to 7.18.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#434](https://github.com/PrestaShop/blockreassurance/pull/434): Bump eslint from 8.20.0 to 8.21.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#697](https://github.com/PrestaShop/ps_facetedsearch/pull/697): Bump eslint from 8.20.0 to 8.21.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#696](https://github.com/PrestaShop/ps_facetedsearch/pull/696): Bump @babel/cli from 7.18.9 to 7.18.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#695](https://github.com/PrestaShop/ps_facetedsearch/pull/695): Bump @babel/node from 7.18.9 to 7.18.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#694](https://github.com/PrestaShop/ps_facetedsearch/pull/694): Bump @babel/core from 7.18.9 to 7.18.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#693](https://github.com/PrestaShop/ps_facetedsearch/pull/693): Bump @babel/preset-env from 7.18.9 to 7.18.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#679](https://github.com/PrestaShop/ps_facetedsearch/pull/679): fix FacetFilters widget disappears after a no facet filter. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Contextual Help API
* [#13](https://github.com/PrestaShop/contextual-help-api/pull/13): Use GitHub as source instead of confluence, by [@atomiix](https://github.com/atomiix)
* [#10](https://github.com/PrestaShop/contextual-help-api/pull/10): Launching production environment. Thank you [@djodjo3](https://github.com/djodjo3)


### PrestaShop contributors website
* [#85](https://github.com/PrestaShop/TopContributors/pull/85): Migrate from Jenkins to Github Pages, by [@Progi1984](https://github.com/Progi1984)


### Hummingbird theme
* [#358](https://github.com/PrestaShop/hummingbird/pull/358): return table main checkbox fix. Thank you [@JBLach](https://github.com/JBLach)


### Distribution API Client
* [#6](https://github.com/PrestaShop/ps_distributionapiclient/pull/6): Release version 1.0.1, by [@atomiix](https://github.com/atomiix)


### Wishlist block module
* [#184](https://github.com/PrestaShop/blockwishlist/pull/184): Release 2.1.2, by [@NeOMakinG](https://github.com/NeOMakinG)


### Cross-selling module
* [#38](https://github.com/PrestaShop/ps_crossselling/pull/38): Fix Crosseling products with visibility set to nowhere. Thank you [@FabienPapet](https://github.com/FabienPapet)


### Classic theme
* [#30](https://github.com/PrestaShop/classic-theme/pull/30): Avoid malformed ld+json if logo_details is missing. Thank you [@drc0](https://github.com/drc0)


### Auto Upgrade module
* [#457](https://github.com/PrestaShop/autoupgrade/pull/457): Update quick access link for orders. Thank you [@okom3pom](https://github.com/okom3pom)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@matks](https://github.com/matks), [@eternoendless](https://github.com/eternoendless), [@leemyongpakvn](https://github.com/leemyongpakvn), [@LouisAUTHIE](https://github.com/LouisAUTHIE), [@okom3pom](https://github.com/okom3pom), [@dependabot[bot]](https://github.com/apps/dependabot), [@atomiix](https://github.com/atomiix), [@Progi1984](https://github.com/Progi1984), [@JBLach](https://github.com/JBLach), [@FabienPapet](https://github.com/FabienPapet), [@NeOMakinG](https://github.com/NeOMakinG), [@zuk3975](https://github.com/zuk3975), [@kpodemski](https://github.com/kpodemski), [@djodjo3](https://github.com/djodjo3), [@drc0](https://github.com/drc0)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

