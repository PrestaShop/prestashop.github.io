---
layout: post
aliases: ["/news/coreweekly-39-2021"]
title:  "PrestaShop Core Weekly - Week 39 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-10-04
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 27th of September to Sunday 3rd of October 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Have you tested the [first Release Candidate of PrestaShop 1.7.8.0](https://build.prestashop.com/news/prestashop-1-7-8-0-rc-release/)? There is only a few days left before we make it final!

Small reminder, the next session of public demonstration from the maintainers team will happen [**Wednesday, October 6, 2021 at 4pm CEST**](https://www.youtube.com/watch?v=x37-QOockEo)!


## A quick update about PrestaShop's GitHub issues and pull requests:

- [93 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-09-27..2021-10-03) have been created in the project repositories;
- [33 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-09-27..2021-10-03), including [14 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-09-27..2021-10-03) on the core;
- [69 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-09-27..2021-10-03) in the project repositories;
- [85 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-09-27..2021-10-03), including [54 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-09-27..2021-10-03).
        


## Code changes in the 'develop' branch


### Core
* [#26049](https://github.com/PrestaShop/PrestaShop/pull/26049): Update Symfony v4.4.32, by [@matks](https://github.com/matks)
* [#26041](https://github.com/PrestaShop/PrestaShop/pull/26041): Introduce Nullable DateTime, by [@jolelievre](https://github.com/jolelievre)
* [#26015](https://github.com/PrestaShop/PrestaShop/pull/26015): Fix wording of prestashop:update:sql-upgrade-file-hooks-listing. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#25949](https://github.com/PrestaShop/PrestaShop/pull/25949): Easily override default value for primary user on docker, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#25913](https://github.com/PrestaShop/PrestaShop/pull/25913): Fix object model partial update, by [@jolelievre](https://github.com/jolelievre)


### Back office
* [#26043](https://github.com/PrestaShop/PrestaShop/pull/26043): Remove bad deprecated comment. Thank you [@okom3pom](https://github.com/okom3pom)
* [#25995](https://github.com/PrestaShop/PrestaShop/pull/25995): Remove duplicate actionCategoryUpdate call on toggling category display status. Thank you [@yo7hli](https://github.com/yo7hli)
* [#25976](https://github.com/PrestaShop/PrestaShop/pull/25976): Update webpack dependencies of classic theme, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#25936](https://github.com/PrestaShop/PrestaShop/pull/25936): Update webpack, babel and others webpack dependencies of new-theme, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#25776](https://github.com/PrestaShop/PrestaShop/pull/25776): Removed use of service parameter in controller, by [@Progi1984](https://github.com/Progi1984)
* [#25726](https://github.com/PrestaShop/PrestaShop/pull/25726): Added API status block in WebService page, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#25987](https://github.com/PrestaShop/PrestaShop/pull/25987): Fixed URL encoding when Friendly URL is disabled, by [@Progi1984](https://github.com/Progi1984)


### Tests
* [#26047](https://github.com/PrestaShop/PrestaShop/pull/26047): Fix bugs that occur in CI because of non-resilient code, by [@jolelievre](https://github.com/jolelievre)
* [#25993](https://github.com/PrestaShop/PrestaShop/pull/25993): Add jsDoc on tests helpers, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#25988](https://github.com/PrestaShop/PrestaShop/pull/25988): Removed phake/phake as dev dependency, by [@Progi1984](https://github.com/Progi1984)
* [#25953](https://github.com/PrestaShop/PrestaShop/pull/25953): Use playwright@1.13.1 for UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.8.x' branch


### Core
* [#25982](https://github.com/PrestaShop/PrestaShop/pull/25982): Fix CLI install, by [@atomiix](https://github.com/atomiix)


### Back office
* [#26026](https://github.com/PrestaShop/PrestaShop/pull/26026): BO: Fix the search button wrap. Thank you [@hibatallahAouadni](https://github.com/hibatallahAouadni)
* [#25760](https://github.com/PrestaShop/PrestaShop/pull/25760): Fixed error in SqlQueryValidator with multiple conditions in ON clause, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#25961](https://github.com/PrestaShop/PrestaShop/pull/25961): Fixed display of attributes in cart on Frontoffice, by [@Progi1984](https://github.com/Progi1984)
* [#25551](https://github.com/PrestaShop/PrestaShop/pull/25551): Fixed JSON-LD with productcomments module data, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### Changes in developer documentation sources
* [#1162](https://github.com/PrestaShop/docs/pull/1162): Typos. Thank you [@SebSept](https://github.com/SebSept)
* [#1161](https://github.com/PrestaShop/docs/pull/1161): Fix two tiny typos. Thank you [@SebSept](https://github.com/SebSept)
* [#1160](https://github.com/PrestaShop/docs/pull/1160): Typo correction. Thank you [@StephaneBullier](https://github.com/StephaneBullier)
* [#1159](https://github.com/PrestaShop/docs/pull/1159): Update npm versions needed, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#1158](https://github.com/PrestaShop/docs/pull/1158): Backport PR 1154 to 8.x, by [@matks](https://github.com/matks)
* [#1157](https://github.com/PrestaShop/docs/pull/1157): Update pr-branch-labeler to use pull_request_target on 1.7.x branch, by [@matks](https://github.com/matks)
* [#1154](https://github.com/PrestaShop/docs/pull/1154): Fix Position location. Thank you [@TheDreamCatcher](https://github.com/TheDreamCatcher)
* [#1055](https://github.com/PrestaShop/docs/pull/1055): Precise nodejs version, how to switch and node-gyp dependency on Windows, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#1048](https://github.com/PrestaShop/docs/pull/1048): Create your own distribution, by [@Progi1984](https://github.com/Progi1984)


### Translation Files repository
* [#20](https://github.com/PrestaShop/TranslationFiles/pull/20): Add PrestaShop 8 files, by [@PierreRambaud](https://github.com/PierreRambaud)


### Customer reassurance block module
* [#278](https://github.com/PrestaShop/blockreassurance/pull/278): Bump webpack from 5.55.0 to 5.55.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#276](https://github.com/PrestaShop/blockreassurance/pull/276): Bump webpack from 5.54.0 to 5.55.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#275](https://github.com/PrestaShop/blockreassurance/pull/275): Bump webpack from 5.53.0 to 5.54.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#517](https://github.com/PrestaShop/ps_facetedsearch/pull/517): Bump webpack from 5.55.0 to 5.55.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#516](https://github.com/PrestaShop/ps_facetedsearch/pull/516): Bump webpack from 5.54.0 to 5.55.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#515](https://github.com/PrestaShop/ps_facetedsearch/pull/515): Bump mocha from 9.1.1 to 9.1.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#514](https://github.com/PrestaShop/ps_facetedsearch/pull/514): Bump webpack from 5.53.0 to 5.54.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### User documentation landing page
* [#137](https://github.com/PrestaShop/user-documentation-landing/pull/137): chore(deps-dev): bump babel-jest from 27.2.3 to 27.2.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#136](https://github.com/PrestaShop/user-documentation-landing/pull/136): chore(deps-dev): bump babel-jest from 27.2.2 to 27.2.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#135](https://github.com/PrestaShop/user-documentation-landing/pull/135): fix(deps): bump actions/setup-node from 2.4.0 to 2.4.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#134](https://github.com/PrestaShop/user-documentation-landing/pull/134): fix(deps): bump core-js from 3.18.0 to 3.18.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#133](https://github.com/PrestaShop/user-documentation-landing/pull/133): chore(deps-dev): bump babel-jest from 27.2.1 to 27.2.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#415](https://github.com/PrestaShop/autoupgrade/pull/415): Enable upgrades from 1.6 to develop, by [@atomiix](https://github.com/atomiix)
* [#414](https://github.com/PrestaShop/autoupgrade/pull/414): Upgrade prestashop_test_lib version to 0.0.14, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#413](https://github.com/PrestaShop/autoupgrade/pull/413): Fix bad display and uppercase to respect the project. Thank you [@okom3pom](https://github.com/okom3pom)


### Product Comments module
* [#112](https://github.com/PrestaShop/productcomments/pull/112): Removed Rich Snippet Rating, by [@Progi1984](https://github.com/Progi1984)


### Decimal
* [#19](https://github.com/PrestaShop/decimal/pull/19): Fix division without bcmath and using the precision parameter, by [@PierreRambaud](https://github.com/PierreRambaud)


### Module analyzer 
* [#5](https://github.com/PrestaShop/psssst/pull/5): Return more informations about modules and add PHP 8 compatibility, by [@atomiix](https://github.com/atomiix)


### Architecture Decision Records repository
* [#20](https://github.com/PrestaShop/ADR/pull/20): 0014 - Accept "Drop the "No Use Of Legacy In New Code" restriction", by [@eternoendless](https://github.com/eternoendless)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@SebSept](https://github.com/SebSept), [@PierreRambaud](https://github.com/PierreRambaud), [@matks](https://github.com/matks), [@jolelievre](https://github.com/jolelievre), [@okom3pom](https://github.com/okom3pom), [@StephaneBullier](https://github.com/StephaneBullier), [@dependabot[bot]](https://github.com/apps/dependabot), [@atomiix](https://github.com/atomiix), [@hibatallahAouadni](https://github.com/hibatallahAouadni), [@NeOMakinG](https://github.com/NeOMakinG), [@PrestaEdit](https://github.com/PrestaEdit), [@boubkerbribri](https://github.com/boubkerbribri), [@Progi1984](https://github.com/Progi1984), [@yo7hli](https://github.com/yo7hli), [@TheDreamCatcher](https://github.com/TheDreamCatcher), [@eternoendless](https://github.com/eternoendless), [@micka-fdz](https://github.com/micka-fdz)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

