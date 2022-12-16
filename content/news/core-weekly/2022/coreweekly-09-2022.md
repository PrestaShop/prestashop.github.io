---
layout: post
aliases: ["/news/coreweekly-09-2022"]
title:  "PrestaShop Core Weekly - Week 9 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-03-09
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 28th of February to Sunday 6th of March 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

[PrestaShop 1.7.8.4](https://build.prestashop.com/news/prestashop-1-7-8-4-maintenance-release/) was released on the 24th of March 2022. This maintenance release fixes 23 bugs and feature requests.

We suggest upgrading your store quickly to benefit from these bug fixes. Make sure to perform a full manual backup before, so you can roll back the upgrade if something goes wrong.

Reminder: the latest version of the 1-Click Upgrade module is v4.14.0, don’t forget to upgrade it.


## Releases

* [PrestaShop](https://github.com/PrestaShop/PrestaShop): [1.7.8.4](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.4)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [22 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-02-28..2022-03-06) have been created in the project repositories;
- [39 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-02-28..2022-03-06), including [11 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-02-28..2022-03-06) on the core;
- [53 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-02-28..2022-03-06) in the project repositories;
- [66 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-02-28..2022-03-06), including [51 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-02-28..2022-03-06).


## Code changes in the 'develop' branch


### Core
* [#27811](https://github.com/PrestaShop/PrestaShop/pull/27811): Removed execute bit set on PHP files, by [@Progi1984](https://github.com/Progi1984)
* [#27641](https://github.com/PrestaShop/PrestaShop/pull/27641): Added CQRS Commands & Queries for State domain, by [@Progi1984](https://github.com/Progi1984)
* [#27416](https://github.com/PrestaShop/PrestaShop/pull/27416): Remove unused variables in Cart::applyProductCalculations(), by [@eternoendless](https://github.com/eternoendless)
* [#27401](https://github.com/PrestaShop/PrestaShop/pull/27401): Use mbstring functions without check if exist. Thank you [@davidglezz](https://github.com/davidglezz)
* [#24584](https://github.com/PrestaShop/PrestaShop/pull/24584): Database update command - Wrong SQL Query generated. Thank you [@RomsC](https://github.com/RomsC)


### Back office
* [#27815](https://github.com/PrestaShop/PrestaShop/pull/27815): Display Ecotax select when ecotax is enabled, without saving, by [@Progi1984](https://github.com/Progi1984)
* [#27808](https://github.com/PrestaShop/PrestaShop/pull/27808): Fixes Security controller help frame opening CORS Problem. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)
* [#27767](https://github.com/PrestaShop/PrestaShop/pull/27767): Add autocomplete="off" to date picker inputs in helpers. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#27762](https://github.com/PrestaShop/PrestaShop/pull/27762): Add help field when integer type is used to a form. Thank you [@okom3pom](https://github.com/okom3pom)
* [#27663](https://github.com/PrestaShop/PrestaShop/pull/27663): Fixed wording on Security page, by [@Progi1984](https://github.com/Progi1984)
* [#27620](https://github.com/PrestaShop/PrestaShop/pull/27620): Multistore - Catalog > Stocks > Stocks & Movements - Update message in all shops or in a group context, by [@Progi1984](https://github.com/Progi1984)
* [#27510](https://github.com/PrestaShop/PrestaShop/pull/27510): Improve wording tooltip Traffic & SEO > Schema of URLs. Thank you [@okom3pom](https://github.com/okom3pom)
* [#27098](https://github.com/PrestaShop/PrestaShop/pull/27098): Remove the page `Referrers`, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#27347](https://github.com/PrestaShop/PrestaShop/pull/27347): Added contextual information messages in multistore context, by [@Progi1984](https://github.com/Progi1984)


### Web services
* [#27741](https://github.com/PrestaShop/PrestaShop/pull/27741): Remove PSWS-Version header as it's added after and only if we are authenticated. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Tests
* [#27826](https://github.com/PrestaShop/PrestaShop/pull/27826): Functional tests -  Fix import test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27804](https://github.com/PrestaShop/PrestaShop/pull/27804): Fix nightly 27-02-2022 and 26-02-2022. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Back office
* [#27763](https://github.com/PrestaShop/PrestaShop/pull/27763): Add help field when integer type is used to a form. Thank you [@okom3pom](https://github.com/okom3pom)


## Code changes in modules, themes & tools


### Customer reassurance block module
* [#371](https://github.com/PrestaShop/blockreassurance/pull/371): Bump webpack from 5.69.1 to 5.70.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#370](https://github.com/PrestaShop/blockreassurance/pull/370): Bump mini-css-extract-plugin from 2.5.3 to 2.6.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#368](https://github.com/PrestaShop/blockreassurance/pull/368): Bump eslint from 8.9.0 to 8.10.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#628](https://github.com/PrestaShop/ps_facetedsearch/pull/628): Bump webpack from 5.69.1 to 5.70.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#627](https://github.com/PrestaShop/ps_facetedsearch/pull/627): Bump eslint from 8.9.0 to 8.10.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### stylelint configuration
* [#27](https://github.com/PrestaShop/stylelint-config/pull/27): Update unsup, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#26](https://github.com/PrestaShop/stylelint-config/pull/26): Update unupported features, by [@NeOMakinG](https://github.com/NeOMakinG)


### Changes in developer documentation sources
* [#1309](https://github.com/PrestaShop/docs/pull/1309): Backport 1272 to 8.x, by [@matks](https://github.com/matks)
* [#1307](https://github.com/PrestaShop/docs/pull/1307): Remove the root note, the file could be everywhere inside the module. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1282](https://github.com/PrestaShop/docs/pull/1282): Remove links to PrestaShop Company, by [@Progi1984](https://github.com/Progi1984)
* [#1281](https://github.com/PrestaShop/docs/pull/1281): Add the registerHook|unregisterHook action. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1272](https://github.com/PrestaShop/docs/pull/1272): Mention the need to use namespace import of code example is used outside of initial namespace. Thank you [@WebHelpersPau](https://github.com/WebHelpersPau)


### Issues Bot
* [#52](https://github.com/PrestaShop/issuebot/pull/52): Revert "Revert of the revert". Thank you [@MatShir](https://github.com/MatShir)
* [#51](https://github.com/PrestaShop/issuebot/pull/51): Revert of the revert. Thank you [@MatShir](https://github.com/MatShir)
* [#50](https://github.com/PrestaShop/issuebot/pull/50): my first contribution. Thank you [@MatShir](https://github.com/MatShir)
* [#49](https://github.com/PrestaShop/issuebot/pull/49): Move cards inside Project Beta kanban, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#48](https://github.com/PrestaShop/issuebot/pull/48): Bump url-parse from 1.5.6 to 1.5.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Hummingbird theme
* [#188](https://github.com/PrestaShop/theme-refacto/pull/188): Add tests, lint and typescript to CI, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#187](https://github.com/PrestaShop/theme-refacto/pull/187): Expose useToast to window.prestashop, by [@NeOMakinG](https://github.com/NeOMakinG)


### The PrestaShop open source project
* [#78](https://github.com/PrestaShop/open-source/pull/78): Add link to commercial support by PS SA in the support section, by [@eternoendless](https://github.com/eternoendless)
* [#77](https://github.com/PrestaShop/open-source/pull/77): Add support page, by [@eternoendless](https://github.com/eternoendless)


### PrestaShop Project Metrics
* [#19](https://github.com/PrestaShop/ps-project-metrics/pull/19): Modify URL after transfer, by [@matks](https://github.com/matks)


### Example modules
* [#90](https://github.com/PrestaShop/example-modules/pull/90): Bump url-parse from 1.5.7 to 1.5.10 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Buy button lite module
* [#61](https://github.com/PrestaShop/ps_buybuttonlite/pull/61): Bump url-parse from 1.5.7 to 1.5.10 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Core Weekly Generator tool
* [#117](https://github.com/PrestaShop/core-weekly-generator/pull/117): Bump url-parse from 1.5.7 to 1.5.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#116](https://github.com/PrestaShop/core-weekly-generator/pull/116): Add ps_supplierlist to mapping, by [@matks](https://github.com/matks)


### Docker images
* [#298](https://github.com/PrestaShop/docker/pull/298): Add 1.7.8.4 image, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#296](https://github.com/PrestaShop/docker/pull/296): Add Webp support to the php-gd extension, by [@atomiix](https://github.com/atomiix)


### Webservices PHP Client
* [#80](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/80): Update phpDoc about psCompatibleVersions. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### PrestaShop Specifications
* [#271](https://github.com/PrestaShop/prestashop-specs/pull/271): Create add-edit-v2.md. Thank you [@MatShir](https://github.com/MatShir)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@atomiix](https://github.com/atomiix), [@Progi1984](https://github.com/Progi1984), [@dependabot[bot]](https://github.com/apps/dependabot), [@NeOMakinG](https://github.com/NeOMakinG), [@matks](https://github.com/matks), [@MatShir](https://github.com/MatShir), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@eternoendless](https://github.com/eternoendless), [@LouisAUTHIE](https://github.com/LouisAUTHIE), [@PrestaEdit](https://github.com/PrestaEdit), [@jf-viguier](https://github.com/jf-viguier), [@okom3pom](https://github.com/okom3pom), [@WebHelpersPau](https://github.com/WebHelpersPau), [@davidglezz](https://github.com/davidglezz), [@RomsC](https://github.com/RomsC)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

