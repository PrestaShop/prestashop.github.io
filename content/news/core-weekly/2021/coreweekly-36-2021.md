---
layout: post
aliases: ["/news/coreweekly-36-2021"]
title:  "PrestaShop Core Weekly - Week 36 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-09-13
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 6th to Sunday 12th of September 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [47 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-09-06..2021-09-12) have been created in the project repositories;
- [23 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-09-06..2021-09-12), including [4 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-09-06..2021-09-12) on the core;
- [63 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-09-06..2021-09-12) in the project repositories;
- [51 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-09-06..2021-09-12), including [42 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-09-06..2021-09-12).
        


## Code changes in the 'develop' branch


### Core
* [#25842](https://github.com/PrestaShop/PrestaShop/pull/25842): Update egulias/email-validator to latest version, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#25839](https://github.com/PrestaShop/PrestaShop/pull/25839): Removed mcrypt dependencies, by [@Progi1984](https://github.com/Progi1984)
* [#25781](https://github.com/PrestaShop/PrestaShop/pull/25781): Upgrade to Symfony 4.4.30, by [@matks](https://github.com/matks)


### Back office
* [#25745](https://github.com/PrestaShop/PrestaShop/pull/25745): Do not use Math.random for cart rule code generation, by [@matks](https://github.com/matks)
* [#25184](https://github.com/PrestaShop/PrestaShop/pull/25184): Attachment iframe modal, by [@jolelievre](https://github.com/jolelievre)


### Tests
* [#25846](https://github.com/PrestaShop/PrestaShop/pull/25846): Add unit test for SwiftMailerValidation, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#25767](https://github.com/PrestaShop/PrestaShop/pull/25767): Fix date to filter with on cutomers and logs tests, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.8.x' branch


### Core
* [#25777](https://github.com/PrestaShop/PrestaShop/pull/25777): Fix supplier error when trying to see products linked to the supplier, by [@atomiix](https://github.com/atomiix)


### Back office
* [#25833](https://github.com/PrestaShop/PrestaShop/pull/25833): Fix exception when switching shop context after pushing a form on some configuration pages, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#25725](https://github.com/PrestaShop/PrestaShop/pull/25725): Fix the save "meta_keywords" field on suppliers. Thank you [@gennaris](https://github.com/gennaris)


### Tests
* [#25828](https://github.com/PrestaShop/PrestaShop/pull/25828): Fix module's filter and product's quick view tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#25804](https://github.com/PrestaShop/PrestaShop/pull/25804): JS-doc : Fix argument and returns types for pages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#25769](https://github.com/PrestaShop/PrestaShop/pull/25769): Delete step identifiers for common tests to fix the generated report, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.7.x' branch


### Core
* [#25784](https://github.com/PrestaShop/PrestaShop/pull/25784): Use null coalescing operator to fix notice, by [@kpodemski](https://github.com/kpodemski)


## Code changes in modules, themes & tools


### Banner module
* [#36](https://github.com/PrestaShop/ps_banner/pull/36): Bump lodash from 4.17.20 to 4.17.21 in /tests/E2E. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#35](https://github.com/PrestaShop/ps_banner/pull/35): Bump glob-parent from 5.1.1 to 5.1.2 in /tests/E2E. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#33](https://github.com/PrestaShop/ps_banner/pull/33): Bump hosted-git-info from 2.8.8 to 2.8.9 in /tests/E2E. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#34](https://github.com/PrestaShop/ps_banner/pull/34): Bump path-parse from 1.0.6 to 1.0.7 in /tests/E2E. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#32](https://github.com/PrestaShop/ps_banner/pull/32): Restore img, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#31](https://github.com/PrestaShop/ps_banner/pull/31): Upgrade prestashop_test_lib version to upgrade playwright for E2E tests, by [@boubkerbribri](https://github.com/boubkerbribri)


### Prestashop UI Kit
* [#171](https://github.com/PrestaShop/prestashop-ui-kit/pull/171): Add every variants of buttons to storybook, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#141](https://github.com/PrestaShop/prestashop-ui-kit/pull/141): Brand storybook to PrestaShop colors, by [@NeOMakinG](https://github.com/NeOMakinG)


### Faceted search module
* [#507](https://github.com/PrestaShop/ps_facetedsearch/pull/507): Bump @babel/preset-env from 7.15.4 to 7.15.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#505](https://github.com/PrestaShop/ps_facetedsearch/pull/505): Bump @babel/core from 7.15.4 to 7.15.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#504](https://github.com/PrestaShop/ps_facetedsearch/pull/504): Bump webpack from 5.51.2 to 5.52.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### User documentation landing page
* [#122](https://github.com/PrestaShop/user-documentation-landing/pull/122): fix(deps): bump core-js from 3.17.2 to 3.17.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#121](https://github.com/PrestaShop/user-documentation-landing/pull/121): chore(deps-dev): bump sass from 1.39.0 to 1.39.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#120](https://github.com/PrestaShop/user-documentation-landing/pull/120): chore(deps-dev): bump prettier from 2.3.2 to 2.4.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#119](https://github.com/PrestaShop/user-documentation-landing/pull/119): chore(deps-dev): bump babel-jest from 27.1.0 to 27.1.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation sources
* [#1138](https://github.com/PrestaShop/docs/pull/1138): Add Devdocs site update badge in README, by [@matks](https://github.com/matks)
* [#1136](https://github.com/PrestaShop/docs/pull/1136): Prohibition to use global variables for PS 8. Thank you [@Thymotep](https://github.com/Thymotep)
* [#1135](https://github.com/PrestaShop/docs/pull/1135): Additional info in the webservice example, by [@kpodemski](https://github.com/kpodemski)
* [#1134](https://github.com/PrestaShop/docs/pull/1134): Additional info in the webservice example, by [@kpodemski](https://github.com/kpodemski)


### Changes in developer documentation theme
* [#9](https://github.com/PrestaShop/ps-docs-theme/pull/9): Add majorversion shortcode, by [@matks](https://github.com/matks)


### QA nightly results
* [#61](https://github.com/PrestaShop/QANightlyResults/pull/61): Merge develop into master, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#60](https://github.com/PrestaShop/QANightlyResults/pull/60): Handle empty stack trace, by [@PierreRambaud](https://github.com/PierreRambaud)


### Customer reassurance block module
* [#266](https://github.com/PrestaShop/blockreassurance/pull/266): Bump @babel/core from 7.15.4 to 7.15.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#265](https://github.com/PrestaShop/blockreassurance/pull/265): Bump webpack from 5.51.2 to 5.52.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop test scenarios
* [#5](https://github.com/PrestaShop/test-scenarios/pull/5): Github Action : Added event on pull_request & Bump version 0.85.0, by [@Progi1984](https://github.com/Progi1984)


### Theme customization module
* [#45](https://github.com/PrestaShop/ps_themecusto/pull/45): Bump prestashop/php-dev-tools from 3.15 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@PierreRambaud](https://github.com/PierreRambaud), [@Progi1984](https://github.com/Progi1984), [@dependabot[bot]](https://github.com/apps/dependabot), [@NeOMakinG](https://github.com/NeOMakinG), [@boubkerbribri](https://github.com/boubkerbribri), [@matthieu-rolland](https://github.com/matthieu-rolland), [@matks](https://github.com/matks), [@Thymotep](https://github.com/Thymotep), [@kpodemski](https://github.com/kpodemski), [@atomiix](https://github.com/atomiix), [@gennaris](https://github.com/gennaris), [@jolelievre](https://github.com/jolelievre)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

