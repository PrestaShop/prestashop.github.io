---
layout: post
aliases: ["/news/coreweekly-16-2021"]
title:  "PrestaShop Core Weekly - Week 16 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-04-27
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 19th to Sunday 25th of April 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The next public open source demo is going to happen on **next Wednesday, [April 28, 2021 at 2pm CEST](https://www.youtube.com/watch?v=VKb39T_6WHU)**.

During this session we will present some of the new 1.7.8 achievements.


## Releases

* [circuit-breaker](https://github.com/PrestaShop/circuit-breaker): [v4.0.0](https://github.com/PrestaShop/circuit-breaker/releases/tag/v4.0.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [70 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-04-19..2021-04-25) have been created in the project repositories;
- [58 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-04-19..2021-04-25), including [7 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-04-19..2021-04-25) on the core;
- [94 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-04-19..2021-04-25) in the project repositories;
- [92 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-04-19..2021-04-25), including [71 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-04-19..2021-04-25).
        


## Code changes in the 'develop' branch


### Core
* [#24125](https://github.com/PrestaShop/PrestaShop/pull/24125): Some fixes of English mispells, by [@matks](https://github.com/matks)
* [#24114](https://github.com/PrestaShop/PrestaShop/pull/24114): Fixed PHPDoc, by [@Progi1984](https://github.com/Progi1984)
* [#24113](https://github.com/PrestaShop/PrestaShop/pull/24113): Improve `OrderSlip::create` code readability . Thank you [@PululuK](https://github.com/PululuK)
* [#24027](https://github.com/PrestaShop/PrestaShop/pull/24027): Improve `Tools::passwdGen` method. Thank you [@PululuK](https://github.com/PululuK)


### Back office
* [#24127](https://github.com/PrestaShop/PrestaShop/pull/24127): Add missing param phpdoc in LayoutExtension::getLegacyLayout, by [@matks](https://github.com/matks)
* [#24109](https://github.com/PrestaShop/PrestaShop/pull/24109): Replace "on sale" flag by "price drop", by [@marionf](https://github.com/marionf)
* [#24096](https://github.com/PrestaShop/PrestaShop/pull/24096): Handle images selection in combination form, by [@jolelievre](https://github.com/jolelievre)
* [#24085](https://github.com/PrestaShop/PrestaShop/pull/24085): Load modules built in translation catalogues, by [@sowbiba](https://github.com/sowbiba)
* [#21174](https://github.com/PrestaShop/PrestaShop/pull/21174): Fix color picker template. Thank you [@bpato](https://github.com/bpato)


### Front office
* [#24019](https://github.com/PrestaShop/PrestaShop/pull/24019): Improve complexity of assignCase var in CMS Controller. Thank you [@Sinepel](https://github.com/Sinepel)
* [#23858](https://github.com/PrestaShop/PrestaShop/pull/23858): Fix breadcrumb and h1 on prices drop page, by [@marionf](https://github.com/marionf)
* [#22908](https://github.com/PrestaShop/PrestaShop/pull/22908): Set different 404 strings for different behaviors on classic theme, by [@NeOMakinG](https://github.com/NeOMakinG)


### Installer
* [#24118](https://github.com/PrestaShop/PrestaShop/pull/24118): Remove unused table ps_order_slip_detail_tax from install, by [@eternoendless](https://github.com/eternoendless)
* [#23758](https://github.com/PrestaShop/PrestaShop/pull/23758): Wording corrections, by [@jolelievre](https://github.com/jolelievre)


### Tests
* [#24146](https://github.com/PrestaShop/PrestaShop/pull/24146): Nightly : Added branch 1.7.8.x, by [@Progi1984](https://github.com/Progi1984)
* [#24132](https://github.com/PrestaShop/PrestaShop/pull/24132): Update doc for login and payment preferences pages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24126](https://github.com/PrestaShop/PrestaShop/pull/24126): Add click and wait for download function, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24121](https://github.com/PrestaShop/PrestaShop/pull/24121): Migrated some Legacy Tests to Unit Tests, by [@Progi1984](https://github.com/Progi1984)
* [#24110](https://github.com/PrestaShop/PrestaShop/pull/24110): Fix brand address and supplier tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24095](https://github.com/PrestaShop/PrestaShop/pull/24095): Migrated Unit Test from tests-legacy, by [@Progi1984](https://github.com/Progi1984)
* [#23975](https://github.com/PrestaShop/PrestaShop/pull/23975): Fix ThemeExporterTest test path. Thank you [@mvorisek](https://github.com/mvorisek)


## Code changes in the '1.7.8.x' branch


### Front office
* [#24151](https://github.com/PrestaShop/PrestaShop/pull/24151): Replace price drop flag by on sale, by [@marionf](https://github.com/marionf)


### Tests
* [#24148](https://github.com/PrestaShop/PrestaShop/pull/24148): Use base:7.4-apache image for UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.7.x' branch


### Back office
* [#24161](https://github.com/PrestaShop/PrestaShop/pull/24161): Allow all characters when using combination, not only \w, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#24094](https://github.com/PrestaShop/PrestaShop/pull/24094): Fix OrderState deletion when not in default language context, by [@atomiix](https://github.com/atomiix)
* [#24072](https://github.com/PrestaShop/PrestaShop/pull/24072): Fix category filter not checked, by [@atomiix](https://github.com/atomiix)
* [#24015](https://github.com/PrestaShop/PrestaShop/pull/24015): Fix gift not added when changing carrier in Create order page, by [@atomiix](https://github.com/atomiix)


### Tests
* [#24176](https://github.com/PrestaShop/PrestaShop/pull/24176): Upgrade playwright to 1.8.1, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24115](https://github.com/PrestaShop/PrestaShop/pull/24115): Backport fix on growl messages, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in modules, themes & tools


### Webservices PHP Client
* [#76](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/76): Updates License 2021 and http links to https. Thank you [@RubenMartins](https://github.com/RubenMartins)


### presthubot
* [#28](https://github.com/PrestaShop/presthubot/pull/28): Remove Support 1.7.6.x & Add Support 1.7.8.x, by [@Progi1984](https://github.com/Progi1984)


### User documentation landing page
* [#52](https://github.com/PrestaShop/user-documentation-landing/pull/52): fix(deps): bump core-js from 3.10.2 to 3.11.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#51](https://github.com/PrestaShop/user-documentation-landing/pull/51): chore(deps-dev): bump sass from 1.32.10 to 1.32.11. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#50](https://github.com/PrestaShop/user-documentation-landing/pull/50): fix(deps): bump core-js from 3.10.1 to 3.10.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#49](https://github.com/PrestaShop/user-documentation-landing/pull/49): chore(deps-dev): bump sass from 1.32.8 to 1.32.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation
* [#949](https://github.com/PrestaShop/docs/pull/949): Fix link to Refunds specs, by [@matks](https://github.com/matks)
* [#945](https://github.com/PrestaShop/docs/pull/945): Update Introduction test page for UI tests, by [@matks](https://github.com/matks)
* [#944](https://github.com/PrestaShop/docs/pull/944): Fix html page reference, by [@matks](https://github.com/matks)
* [#938](https://github.com/PrestaShop/docs/pull/938): Improve sentences and hrefs in Basics section, by [@matks](https://github.com/matks)
* [#936](https://github.com/PrestaShop/docs/pull/936): Add warning to html type. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#935](https://github.com/PrestaShop/docs/pull/935): Explain db_data.sql, by [@matks](https://github.com/matks)
* [#908](https://github.com/PrestaShop/docs/pull/908): Build PRs using GH actions, by [@eternoendless](https://github.com/eternoendless)


### Customer reassurance block module
* [#180](https://github.com/PrestaShop/blockreassurance/pull/180): Bump webpack from 5.34.0 to 5.35.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#179](https://github.com/PrestaShop/blockreassurance/pull/179): Bump @babel/core from 7.13.15 to 7.13.16. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#178](https://github.com/PrestaShop/blockreassurance/pull/178): Bump css-loader from 5.2.2 to 5.2.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#177](https://github.com/PrestaShop/blockreassurance/pull/177): Bump webpack from 5.33.2 to 5.34.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#176](https://github.com/PrestaShop/blockreassurance/pull/176): Bump css-loader from 5.2.1 to 5.2.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#175](https://github.com/PrestaShop/blockreassurance/pull/175): Bump mini-css-extract-plugin from 1.4.1 to 1.5.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#408](https://github.com/PrestaShop/ps_facetedsearch/pull/408): Bump webpack from 5.34.0 to 5.35.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#407](https://github.com/PrestaShop/ps_facetedsearch/pull/407): Update babel register, core and cli, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#403](https://github.com/PrestaShop/ps_facetedsearch/pull/403): Bump css-loader from 5.2.2 to 5.2.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#402](https://github.com/PrestaShop/ps_facetedsearch/pull/402): Bump webpack from 5.33.2 to 5.34.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#401](https://github.com/PrestaShop/ps_facetedsearch/pull/401): Bump css-loader from 5.2.1 to 5.2.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Nightly board
* [#57](https://github.com/PrestaShop/nightly-board/pull/57): Merge develop into master, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#56](https://github.com/PrestaShop/nightly-board/pull/56): Add 1.7.8.x branch to filter, by [@boubkerbribri](https://github.com/boubkerbribri)


### Circuit Breaker
* [#43](https://github.com/PrestaShop/circuit-breaker/pull/43): Remove cache information because cache-subscriber is abandoned, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#42](https://github.com/PrestaShop/circuit-breaker/pull/42): Update dependencies, TypeHint & Fix headers , by [@PierreRambaud](https://github.com/PierreRambaud)


### stylelint configuration
* [#8](https://github.com/PrestaShop/stylelint-config/pull/8): Bump stylelint-config-twbs-bootstrap from 1.0.0 to 2.1.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#7](https://github.com/PrestaShop/stylelint-config/pull/7): Bump stylelint-no-unsupported-browser-features from 4.0.0 to 4.1.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#6](https://github.com/PrestaShop/stylelint-config/pull/6): Bump stylelint from 13.2.1 to 13.12.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### eslint configuration
* [#7](https://github.com/PrestaShop/eslint-config/pull/7): Add dependabot to the CI, by [@NeOMakinG](https://github.com/NeOMakinG)


### Prestashop UI Kit
* [#154](https://github.com/PrestaShop/prestashop-ui-kit/pull/154): Add dependabot to the CI, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#153](https://github.com/PrestaShop/prestashop-ui-kit/pull/153): Update storybook to 6.2.8, remove console log and update stylelint-config, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#152](https://github.com/PrestaShop/prestashop-ui-kit/pull/152): Add radio buttons to storybook, by [@NeOMakinG](https://github.com/NeOMakinG)


### Wire payment module
* [#63](https://github.com/PrestaShop/ps_wirepayment/pull/63): Migrated Travis CI to Github Actions, by [@Progi1984](https://github.com/Progi1984)


### PrestaShop Specifications
* [#215](https://github.com/PrestaShop/prestashop-specs/pull/215): Edit multistore spec for specific settings drop-down, by [@marionf](https://github.com/marionf)


### Architecture Decision Records repository
* [#19](https://github.com/PrestaShop/ADR/pull/19): 0013 - Use TypeScript on the project, by [@NeOMakinG](https://github.com/NeOMakinG)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@RubenMartins](https://github.com/RubenMartins), [@boubkerbribri](https://github.com/boubkerbribri), [@Progi1984](https://github.com/Progi1984), [@dependabot[bot]](https://github.com/apps/dependabot), [@PierreRambaud](https://github.com/PierreRambaud), [@matks](https://github.com/matks), [@marionf](https://github.com/marionf), [@NeOMakinG](https://github.com/NeOMakinG), [@jolelievre](https://github.com/jolelievre), [@eternoendless](https://github.com/eternoendless), [@PululuK](https://github.com/PululuK), [@atomiix](https://github.com/atomiix), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@sowbiba](https://github.com/sowbiba), [@Sinepel](https://github.com/Sinepel), [@mvorisek](https://github.com/mvorisek), [@Amin-Hosseini](https://github.com/Amin-Hosseini), [@bpato](https://github.com/bpato)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
