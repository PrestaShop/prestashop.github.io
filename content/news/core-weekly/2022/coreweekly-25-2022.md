---
layout: post
aliases: ["/news/coreweekly-25-2022"]
title:  "PrestaShop Core Weekly - Week 25 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-06-27
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 20th to Sunday 26th of June 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The ongoing work on security for PrestaShop software continues. A new security issue was reported and fixed on the module [Blockwishlist](https://github.com/PrestaShop/blockwishlist/).

This issue is fixed in the latest version 2.1.1.

## Releases

* [Blockwishlist](https://github.com/PrestaShop/blockwishlist) module: [v2.1.1](https://github.com/PrestaShop/blockwishlist/releases/tag/v2.1.1)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [36 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-06-20..2022-06-26) have been created in the project repositories;
- [33 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-06-20..2022-06-26), including [8 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-06-20..2022-06-26) on the core;
- [68 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-06-20..2022-06-26) in the project repositories;
- [50 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-06-20..2022-06-26), including [41 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-06-20..2022-06-26).


## Code changes in the 'develop' branch


### Back office
* [#28736](https://github.com/PrestaShop/PrestaShop/pull/28736): Confirmation modal before disabling non native module, by [@Progi1984](https://github.com/Progi1984)
* [#28718](https://github.com/PrestaShop/PrestaShop/pull/28718): Fix carriers with same names don't show in Shipping > Preferences. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#28699](https://github.com/PrestaShop/PrestaShop/pull/28699): Tax Rules Groups > Grid : Confirm Modal & Common Search, by [@Progi1984](https://github.com/Progi1984)
* [#28352](https://github.com/PrestaShop/PrestaShop/pull/28352): Light product list. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28343](https://github.com/PrestaShop/PrestaShop/pull/28343): Fix confusion about how is translated "Reorder". Thank you [@SLRkingRing](https://github.com/SLRkingRing)


### Front office
* [#28639](https://github.com/PrestaShop/PrestaShop/pull/28639): [FO]: Blank message from customer end must not be allow from order detail page . Thank you [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul)
* [#28469](https://github.com/PrestaShop/PrestaShop/pull/28469): `Shop::getBaseURL` use secure mode by default. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#27643](https://github.com/PrestaShop/PrestaShop/pull/27643): Improve mail order message. Thank you [@Prestaplugins](https://github.com/Prestaplugins)


## Code changes in the '8.0.x' branch


### Back office
* [#28788](https://github.com/PrestaShop/PrestaShop/pull/28788): Fix carrier Exeption with free shipping. Thank you [@okom3pom](https://github.com/okom3pom)
* [#28751](https://github.com/PrestaShop/PrestaShop/pull/28751): Combination bulk actions progress modal. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28749](https://github.com/PrestaShop/PrestaShop/pull/28749): Add Pagination for specific price list in product page. Thank you [@zuk3975](https://github.com/zuk3975)


### Tests
* [#28800](https://github.com/PrestaShop/PrestaShop/pull/28800): Functional tests - Add some fixes to 'FO > Password reminder' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### PrestaShop contributors website
* [#81](https://github.com/PrestaShop/TopContributors/pull/81): Bump shell-quote from 1.7.2 to 1.7.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#80](https://github.com/PrestaShop/TopContributors/pull/80): Bump jsdom from 16.4.0 to 16.7.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#79](https://github.com/PrestaShop/TopContributors/pull/79): Merge `integration` into `master`, by [@Progi1984](https://github.com/Progi1984)
* [#77](https://github.com/PrestaShop/TopContributors/pull/77): Merge `develop` into `integration` . Thank you [@okom3pom](https://github.com/okom3pom)


### Wishlist block module
* [#178](https://github.com/PrestaShop/blockwishlist/pull/178): Release 2.1.1, by [@atomiix](https://github.com/atomiix)
* [#177](https://github.com/PrestaShop/blockwishlist/pull/177): Bump version to 2.1.1, by [@atomiix](https://github.com/atomiix)
* [#176](https://github.com/PrestaShop/blockwishlist/pull/176): Bump got from 11.8.2 to 11.8.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#175](https://github.com/PrestaShop/blockwishlist/pull/175): Module is configurable. Thank you [@okom3pom](https://github.com/okom3pom)


### Core Weekly Generator tool
* [#124](https://github.com/PrestaShop/core-weekly-generator/pull/124): Bump shell-quote from 1.7.2 to 1.7.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Issues Bot
* [#79](https://github.com/PrestaShop/issuebot/pull/79): Update Maintainers list. Thank you [@okom3pom](https://github.com/okom3pom)


### Buy button lite module
* [#63](https://github.com/PrestaShop/ps_buybuttonlite/pull/63): Bump shell-quote from 1.6.1 to 1.7.3 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### presthubot
* [#54](https://github.com/PrestaShop/presthubot/pull/54): Bump guzzlehttp/guzzle from 6.5.7 to 6.5.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Contextual Help API
* [#11](https://github.com/PrestaShop/contextual-help-api/pull/11): Bump guzzlehttp/guzzle from 7.4.4 to 7.4.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Traces
* [#28](https://github.com/PrestaShop/traces/pull/28): Bump guzzlehttp/guzzle from 6.5.7 to 6.5.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestonBot
* [#134](https://github.com/PrestaShop/prestonbot/pull/134): Bump guzzlehttp/guzzle from 6.5.7 to 6.5.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#131](https://github.com/PrestaShop/prestonbot/pull/131): Add branch 8.0.x and clean old ones, by [@atomiix](https://github.com/atomiix)


### Hummingbird theme
* [#325](https://github.com/PrestaShop/hummingbird/pull/325): Clean helpers, add programmable media queries. Thank you [@SharakPL](https://github.com/SharakPL)
* [#317](https://github.com/PrestaShop/hummingbird/pull/317): Improve button UI with icon. Thank you [@mparvazi](https://github.com/mparvazi)
* [#316](https://github.com/PrestaShop/hummingbird/pull/316): Fix aggregateRating schema on product page. Thank you [@rodriciru](https://github.com/rodriciru)
* [#264](https://github.com/PrestaShop/hummingbird/pull/264): Cleanup TS files, simplify and export every functions to window, by [@NeOMakinG](https://github.com/NeOMakinG)


### Customer reassurance block module
* [#413](https://github.com/PrestaShop/blockreassurance/pull/413): Bump eslint from 8.17.0 to 8.18.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#670](https://github.com/PrestaShop/ps_facetedsearch/pull/670): Bump eslint from 8.17.0 to 8.18.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#669](https://github.com/PrestaShop/ps_facetedsearch/pull/669): Bump @babel/node from 7.17.10 to 7.18.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Suppliers list module
* [#13](https://github.com/PrestaShop/ps_supplierlist/pull/13): Don't display validation message if it's not a int. Thank you [@okom3pom](https://github.com/okom3pom)


### Changes in developer documentation sources
* [#1395](https://github.com/PrestaShop/docs/pull/1395): Revert "Merge pull request #1333 from marsaldev/8.x", by [@kpodemski](https://github.com/kpodemski)


### The PrestaShop open source project
* [#101](https://github.com/PrestaShop/open-source/pull/101): Make committer applications process lighter, by [@matks](https://github.com/matks)


### Auto Upgrade module
* [#489](https://github.com/PrestaShop/autoupgrade/pull/489): Add 8.0.0 feature flag update sql queries, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#465](https://github.com/PrestaShop/autoupgrade/pull/465): Upgrade process will not stop due to existing hooks. Thank you [@Prestaworks](https://github.com/Prestaworks)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@atomiix](https://github.com/atomiix), [@okom3pom](https://github.com/okom3pom), [@SharakPL](https://github.com/SharakPL), [@jolelievre](https://github.com/jolelievre), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@Progi1984](https://github.com/Progi1984), [@kpodemski](https://github.com/kpodemski), [@zuk3975](https://github.com/zuk3975), [@jf-viguier](https://github.com/jf-viguier), [@mparvazi](https://github.com/mparvazi), [@rodriciru](https://github.com/rodriciru), [@matks](https://github.com/matks), [@matthieu-rolland](https://github.com/matthieu-rolland), [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul), [@NeOMakinG](https://github.com/NeOMakinG), [@SLRkingRing](https://github.com/SLRkingRing), [@Prestaworks](https://github.com/Prestaworks), [@Prestaplugins](https://github.com/Prestaplugins)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

