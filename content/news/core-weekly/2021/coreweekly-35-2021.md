---
layout: post
aliases: ["/news/coreweekly-35-2021"]
title:  "PrestaShop Core Weekly - Week 35 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-09-08 10:00:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 30th of August to Sunday 5th of September 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Work was slowed down on the project from Thursday to Monday due to technical issues affecting [PrestaShop services](https://twitter.com/PrestaShop/status/1433426744267055122).

The incident is now over. Teams continue to work on planned releases [PrestaShop 1.7.7.8](https://github.com/PrestaShop/PrestaShop/issues/25743), [PrestaShop 1.7.8.0](https://github.com/PrestaShop/PrestaShop/issues/23010) and [PrestaShop 8.0.0](https://github.com/PrestaShop/PrestaShop/issues/24111).

Last week, the project’s eighth monthly public demo session was held and streamed live on [Wednesday 1st of September 2021](https://www.youtube.com/watch?v=9oEBquMz008).

In the meantime, [PHP 8.1.0 first release candidate](https://www.php.net/archive/2021.php#2021-09-02-1) has been released!


## Releases

* [Welcome](https://github.com/PrestaShop/welcome) module: [v6.0.7](https://github.com/PrestaShop/welcome/releases/tag/v6.0.7)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [34 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-08-30..2021-09-05) have been created in the project repositories;
- [42 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-08-30..2021-09-05), including [8 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-08-30..2021-09-05) on the core;
- [56 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-08-30..2021-09-05) in the project repositories;
- [53 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-08-30..2021-09-05), including [47 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-08-30..2021-09-05).        


## Code changes in the 'develop' branch


### Core
* [#25714](https://github.com/PrestaShop/PrestaShop/pull/25714): Remove unused parameters from `Tools::addonsRequest()`, by [@eternoendless](https://github.com/eternoendless)


### Back office
* [#25744](https://github.com/PrestaShop/PrestaShop/pull/25744): Fix wrong word in docker_run_git.sh. Thank you [@nenes25](https://github.com/nenes25)
* [#25689](https://github.com/PrestaShop/PrestaShop/pull/25689): Rename Form to FormTheme in experimental product templates. Thank you [@zuk3975](https://github.com/zuk3975)
* [#25302](https://github.com/PrestaShop/PrestaShop/pull/25302): Fixed sort for naming in Admin > Carriers list, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#25396](https://github.com/PrestaShop/PrestaShop/pull/25396): Fixes Search that would return no result if semicolon is used. Thank you [@venditdevs](https://github.com/venditdevs)
* [#22389](https://github.com/PrestaShop/PrestaShop/pull/22389): Fixed case where the "Place Order" button is disabled when the order is free and "Terms of service" is disabled. Thank you [@tswfi](https://github.com/tswfi)


### Tests
* [#25721](https://github.com/PrestaShop/PrestaShop/pull/25721): Removed Gamification module in tests, by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '1.7.8.x' branch


### Front office
* [#25387](https://github.com/PrestaShop/PrestaShop/pull/25387): Product flags: Fixed spacing with multiples flags on frontoffice, by [@Progi1984](https://github.com/Progi1984)


### Tests
* [#25737](https://github.com/PrestaShop/PrestaShop/pull/25737): Do not delete suppliers to fix errors on "Filter stocks by supplier" test, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#25652](https://github.com/PrestaShop/PrestaShop/pull/25652): Refacto international tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#25188](https://github.com/PrestaShop/PrestaShop/pull/25188): Change member to type for data files to fix js-doc, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.7.x' branch


### Core
* [#25757](https://github.com/PrestaShop/PrestaShop/pull/25757): Define version to 1778, by [@sowbiba](https://github.com/sowbiba)


### Back office
* [#25749](https://github.com/PrestaShop/PrestaShop/pull/25749): Product combination price edit : Use blur instead of onkeyup to avoid price flip, by [@sowbiba](https://github.com/sowbiba)


## Code changes in modules, themes & tools


### Customer reassurance block module
* [#264](https://github.com/PrestaShop/blockreassurance/pull/264): Bump webpack from 5.51.1 to 5.51.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#263](https://github.com/PrestaShop/blockreassurance/pull/263): Bump @babel/core from 7.15.0 to 7.15.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#262](https://github.com/PrestaShop/blockreassurance/pull/262): Bump mini-css-extract-plugin from 2.2.1 to 2.2.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#261](https://github.com/PrestaShop/blockreassurance/pull/261): Bump clean-webpack-plugin from 3.0.0 to 4.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#260](https://github.com/PrestaShop/blockreassurance/pull/260): Bump mini-css-extract-plugin from 2.2.0 to 2.2.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#259](https://github.com/PrestaShop/blockreassurance/pull/259): Bump tar from 6.1.6 to 6.1.11. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#503](https://github.com/PrestaShop/ps_facetedsearch/pull/503): Bump webpack from 5.51.1 to 5.51.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#502](https://github.com/PrestaShop/ps_facetedsearch/pull/502): Bump @babel/core from 7.15.0 to 7.15.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#501](https://github.com/PrestaShop/ps_facetedsearch/pull/501): Bump @babel/node from 7.14.9 to 7.15.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#500](https://github.com/PrestaShop/ps_facetedsearch/pull/500): Bump @babel/cli from 7.14.8 to 7.15.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#499](https://github.com/PrestaShop/ps_facetedsearch/pull/499): Bump @babel/preset-env from 7.15.0 to 7.15.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#498](https://github.com/PrestaShop/ps_facetedsearch/pull/498): Bump clean-webpack-plugin from 3.0.0 to 4.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#497](https://github.com/PrestaShop/ps_facetedsearch/pull/497): Bump tar from 6.1.3 to 6.1.11. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#496](https://github.com/PrestaShop/ps_facetedsearch/pull/496): Bump mocha from 9.1.0 to 9.1.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### User documentation landing page
* [#118](https://github.com/PrestaShop/user-documentation-landing/pull/118): fix(deps): bump core-js from 3.17.1 to 3.17.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#117](https://github.com/PrestaShop/user-documentation-landing/pull/117): chore(deps-dev): bump sass from 1.38.2 to 1.39.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#116](https://github.com/PrestaShop/user-documentation-landing/pull/116): fix(deps): bump core-js from 3.16.4 to 3.17.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#115](https://github.com/PrestaShop/user-documentation-landing/pull/115): chore(deps-dev): bump eslint-plugin-prettier from 3.4.1 to 4.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#114](https://github.com/PrestaShop/user-documentation-landing/pull/114): fix(deps): bump core-js from 3.16.3 to 3.16.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#113](https://github.com/PrestaShop/user-documentation-landing/pull/113): chore(deps-dev): bump sass from 1.38.1 to 1.38.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#112](https://github.com/PrestaShop/user-documentation-landing/pull/112): chore(deps-dev): bump babel-jest from 27.0.6 to 27.1.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Wishlist block module
* [#131](https://github.com/PrestaShop/blockwishlist/pull/131): Bump tar from 4.4.15 to 4.4.19. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Core Weekly Generator tool
* [#105](https://github.com/PrestaShop/core-weekly-generator/pull/105): Bump tar from 4.4.15 to 4.4.19. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#104](https://github.com/PrestaShop/core-weekly-generator/pull/104): Update repository and team lists, by [@matks](https://github.com/matks)


### Example modules
* [#79](https://github.com/PrestaShop/example-modules/pull/79): Bump tar from 4.4.15 to 4.4.19 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Prestashop UI Kit
* [#170](https://github.com/PrestaShop/prestashop-ui-kit/pull/170): Bump tar from 6.1.3 to 6.1.11. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### OnBoarding module
* [#128](https://github.com/PrestaShop/welcome/pull/128): Release 6.0.7, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#127](https://github.com/PrestaShop/welcome/pull/127): Bump to 6.0.7, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#123](https://github.com/PrestaShop/welcome/pull/123): Fix preston position, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#122](https://github.com/PrestaShop/welcome/pull/122): Make welcome module compatible with older versions, by [@PierreRambaud](https://github.com/PierreRambaud)


### PrestaShop PHPStan extension
* [#31](https://github.com/PrestaShop/phpstan-prestashop/pull/31): Add status flags to enable or disable each PrestaShop custom rule, by [@matks](https://github.com/matks)


### presthubot
* [#36](https://github.com/PrestaShop/presthubot/pull/36): Slack Notifier Removed PR with "Blocked" label, by [@Progi1984](https://github.com/Progi1984)


### Changes in developer documentation sources
* [#1131](https://github.com/PrestaShop/docs/pull/1131): Explain where data need to be stored in module's context, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#1119](https://github.com/PrestaShop/docs/pull/1119): Explain how to navigate prestashop, by [@matks](https://github.com/matks)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@sowbiba](https://github.com/sowbiba), [@nenes25](https://github.com/nenes25), [@PierreRambaud](https://github.com/PierreRambaud), [@boubkerbribri](https://github.com/boubkerbribri), [@matks](https://github.com/matks), [@Progi1984](https://github.com/Progi1984), [@eternoendless](https://github.com/eternoendless), [@zuk3975](https://github.com/zuk3975), [@NeOMakinG](https://github.com/NeOMakinG), [@venditdevs](https://github.com/venditdevs), [@tswfi](https://github.com/tswfi)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

