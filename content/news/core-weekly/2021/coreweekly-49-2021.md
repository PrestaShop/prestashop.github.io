---
layout: post
aliases: ["/news/coreweekly-49-2021"]
title:  "PrestaShop Core Weekly - Week 49 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-12-13
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 6th to Sunday 12th of December 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

[PrestaShop 1.7.8.2](https://build.prestashop.com/news/prestashop-1-7-8-2-maintenance-release/) was released on the 7th of December 2021. This security release fixes a security issue and a regression.


## Releases

* [PrestaShop](https://github.com/PrestaShop/PrestaShop): [1.7.8.2](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.2)
* [Ps_featuredproducts](https://github.com/PrestaShop/ps_featuredproducts) module: [v2.1.1](https://github.com/PrestaShop/ps_featuredproducts/releases/tag/v2.1.1)
* [eslint-config](https://github.com/PrestaShop/eslint-config): [v0.2.0](https://github.com/PrestaShop/eslint-config/releases/tag/0.2.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [54 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-12-06..2021-12-12) have been created in the project repositories;
- [57 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-12-06..2021-12-12), including [24 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-12-06..2021-12-12) on the core;
- [65 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-12-06..2021-12-12) in the project repositories;
- [76 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-12-06..2021-12-12), including [64 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-12-06..2021-12-12).
        


## Code changes in the 'develop' branch


### Core
* [#26934](https://github.com/PrestaShop/PrestaShop/pull/26934): Use getSemVersion instead of getVersion to have the correct version, by [@sowbiba](https://github.com/sowbiba)
* [#26923](https://github.com/PrestaShop/PrestaShop/pull/26923): Remove shudrum/array-finder from composer deps, by [@matks](https://github.com/matks)
* [#26867](https://github.com/PrestaShop/PrestaShop/pull/26867): Repair nightly build, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#26746](https://github.com/PrestaShop/PrestaShop/pull/26746): Improvements to profiling: display order of query execution,. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#26731](https://github.com/PrestaShop/PrestaShop/pull/26731): Fix display bugs in profiling. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#26727](https://github.com/PrestaShop/PrestaShop/pull/26727): PHPStan (Level 4) on classes/, by [@Progi1984](https://github.com/Progi1984)
* [#26664](https://github.com/PrestaShop/PrestaShop/pull/26664): Removed PrestaShop API Call (check_module & module_download), by [@Progi1984](https://github.com/Progi1984)
* [#26294](https://github.com/PrestaShop/PrestaShop/pull/26294): Remove deprecated admin/ajax-tab.php, by [@eternoendless](https://github.com/eternoendless)
* [#25937](https://github.com/PrestaShop/PrestaShop/pull/25937): Replace Shudrum ArrayFinder by Symfony ArrayFinder in Theme, by [@matks](https://github.com/matks)


### Back office
* [#26917](https://github.com/PrestaShop/PrestaShop/pull/26917): Remove the card "Visit the theme catalog" from Theme config page. Thank you [@intraordinaire](https://github.com/intraordinaire)
* [#26910](https://github.com/PrestaShop/PrestaShop/pull/26910): Remove hard coded ads. Thank you [@okom3pom](https://github.com/okom3pom)
* [#26909](https://github.com/PrestaShop/PrestaShop/pull/26909): Remove calls to addons API when searching in BO. Thank you [@intraordinaire](https://github.com/intraordinaire)
* [#26665](https://github.com/PrestaShop/PrestaShop/pull/26665): Stack min-max inputs to get more space. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#26546](https://github.com/PrestaShop/PrestaShop/pull/26546): Fix display for invalid characters in tax name. Thank you [@okom3pom](https://github.com/okom3pom)
* [#26488](https://github.com/PrestaShop/PrestaShop/pull/26488): Disable 'Apply new Quantity' Button before request is sent. Thank you [@beattie282](https://github.com/beattie282)
* [#25917](https://github.com/PrestaShop/PrestaShop/pull/25917): Update new-theme bootstrap and remove unused dependencies, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#25207](https://github.com/PrestaShop/PrestaShop/pull/25207): Remove id_tax_rules_group in carrier table. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#24120](https://github.com/PrestaShop/PrestaShop/pull/24120): Fix wrong multishop detection in AdminInvoiceController. Thank you [@gennaris](https://github.com/gennaris)


### Front office
* [#26931](https://github.com/PrestaShop/PrestaShop/pull/26931): Remove empty methods in FrontController, by [@matks](https://github.com/matks)
* [#26890](https://github.com/PrestaShop/PrestaShop/pull/26890): Automatic update of rewrite url only on creation. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#25883](https://github.com/PrestaShop/PrestaShop/pull/25883): Fix update qty of cart when qty is set to 0 on front-office, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#25668](https://github.com/PrestaShop/PrestaShop/pull/25668): Global smarty $urls variable changes when child theme is being used. Thank you [@Oksydan](https://github.com/Oksydan)
* [#23959](https://github.com/PrestaShop/PrestaShop/pull/23959): Support shop logo in svg. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Installer
* [#26893](https://github.com/PrestaShop/PrestaShop/pull/26893): Fix post install error when fixture installation is disabled. Thank you [@unlocomqx](https://github.com/unlocomqx)


### Tests
* [#26851](https://github.com/PrestaShop/PrestaShop/pull/26851): POC optimize behat tests DB restoring, by [@jolelievre](https://github.com/jolelievre)
* [#26822](https://github.com/PrestaShop/PrestaShop/pull/26822): Fix orders payment and status tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#26815](https://github.com/PrestaShop/PrestaShop/pull/26815): Functional tests - Separate create date from test to Utils. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Back office
* [#26929](https://github.com/PrestaShop/PrestaShop/pull/26929): Bad display of label in Email theme page. Thank you [@okom3pom](https://github.com/okom3pom)
* [#26714](https://github.com/PrestaShop/PrestaShop/pull/26714): Fix dropdown align on email theme page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#26613](https://github.com/PrestaShop/PrestaShop/pull/26613): Remove header calculation and set toolbar to sticky, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#25855](https://github.com/PrestaShop/PrestaShop/pull/25855): Allowing to set different image ratio on product miniature, minor code refacto. Thank you [@Oksydan](https://github.com/Oksydan)


### Tests
* [#26894](https://github.com/PrestaShop/PrestaShop/pull/26894): Functional tests - Add new test  'Add discount' from view order page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#26776](https://github.com/PrestaShop/PrestaShop/pull/26776): Use new commands on package.json and mochawesome-merge to push on nightly, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in modules, themes & tools


### Featured products module
* [#42](https://github.com/PrestaShop/ps_featuredproducts/pull/42): Release 2.1.1, by [@PierreRambaud](https://github.com/PierreRambaud)


### Changes in developer documentation sources
* [#1243](https://github.com/PrestaShop/docs/pull/1243): Removing 'Selling your modules' from docs, by [@Progi1984](https://github.com/Progi1984)
* [#1242](https://github.com/PrestaShop/docs/pull/1242): Adds an example to override a front/admin controller inside a module. Thank you [@WebHelpersPau](https://github.com/WebHelpersPau)
* [#1241](https://github.com/PrestaShop/docs/pull/1241): Fix missing curly brackets in relref. Thank you [@abramofranchetti](https://github.com/abramofranchetti)
* [#1240](https://github.com/PrestaShop/docs/pull/1240): fix some typos. Thank you [@xhuljanoduli](https://github.com/xhuljanoduli)
* [#1239](https://github.com/PrestaShop/docs/pull/1239): Fix command-line to launch the test suite with docker. Thank you [@jak78](https://github.com/jak78)
* [#1197](https://github.com/PrestaShop/docs/pull/1197): Add actionPresent Hooks. Thank you [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds)
* [#1097](https://github.com/PrestaShop/docs/pull/1097): How to generate URI with Symfony CSRF token. Thank you [@mistrjirka](https://github.com/mistrjirka)


### User documentation landing page
* [#165](https://github.com/PrestaShop/user-documentation-landing/pull/165): chore(deps-dev): bump eslint-config-prestashop from 0.1.0 to 0.2.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#164](https://github.com/PrestaShop/user-documentation-landing/pull/164): fix(deps): bump core-js from 3.19.2 to 3.19.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#163](https://github.com/PrestaShop/user-documentation-landing/pull/163): chore(deps-dev): bump prettier from 2.5.0 to 2.5.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop Specifications
* [#275](https://github.com/PrestaShop/prestashop-specs/pull/275): Fix links, by [@marionf](https://github.com/marionf)


### eslint configuration
* [#10](https://github.com/PrestaShop/eslint-config/pull/10): Kick peerdep of eslint and update to 0.2.1, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#9](https://github.com/PrestaShop/eslint-config/pull/9): Update dependencies to latest versions, by [@PierreRambaud](https://github.com/PierreRambaud)


### Customer reassurance block module
* [#325](https://github.com/PrestaShop/blockreassurance/pull/325): Bump sass-loader from 12.3.0 to 12.4.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#324](https://github.com/PrestaShop/blockreassurance/pull/324): Bump webpack from 5.64.4 to 5.65.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#323](https://github.com/PrestaShop/blockreassurance/pull/323): Bump node-sass from 6.0.1 to 7.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#322](https://github.com/PrestaShop/blockreassurance/pull/322): Bump eslint from 5.16.0 to 8.4.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#318](https://github.com/PrestaShop/blockreassurance/pull/318): Bump eslint-config-airbnb-base from 14.2.1 to 15.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#568](https://github.com/PrestaShop/ps_facetedsearch/pull/568): Bump sass-loader from 12.3.0 to 12.4.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#567](https://github.com/PrestaShop/ps_facetedsearch/pull/567): Bump node-sass from 6.0.1 to 7.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#566](https://github.com/PrestaShop/ps_facetedsearch/pull/566): Bump webpack from 5.64.4 to 5.65.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#565](https://github.com/PrestaShop/ps_facetedsearch/pull/565): Bump eslint from 5.16.0 to 8.4.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Prestashop UI Kit
* [#174](https://github.com/PrestaShop/prestashop-ui-kit/pull/174): Add nowrap to button as a dropdown-item, by [@NeOMakinG](https://github.com/NeOMakinG)


### Docker images
* [#284](https://github.com/PrestaShop/docker/pull/284): Add 1.7.8.2 image. Thank you [@okom3pom](https://github.com/okom3pom)


### PrestonBot
* [#123](https://github.com/PrestaShop/prestonbot/pull/123): Remove feedback asking feature, by [@atomiix](https://github.com/atomiix)


### Auto Upgrade module
* [#438](https://github.com/PrestaShop/autoupgrade/pull/438): Add optional xml field for archive channel, by [@atomiix](https://github.com/atomiix)


### MJML Theme Converter
* [#16](https://github.com/PrestaShop/mjml-theme-converter/pull/16): Clean project, by [@matks](https://github.com/matks)


### GDPR module
* [#152](https://github.com/PrestaShop/psgdpr/pull/152): Avoid warning open_basedir restriction. Thank you [@danidomen](https://github.com/danidomen)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@PierreRambaud](https://github.com/PierreRambaud), [@sowbiba](https://github.com/sowbiba), [@Progi1984](https://github.com/Progi1984), [@matks](https://github.com/matks), [@okom3pom](https://github.com/okom3pom), [@dependabot[bot]](https://github.com/apps/dependabot), [@marionf](https://github.com/marionf), [@NeOMakinG](https://github.com/NeOMakinG), [@WebHelpersPau](https://github.com/WebHelpersPau), [@intraordinaire](https://github.com/intraordinaire), [@atomiix](https://github.com/atomiix), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@unlocomqx](https://github.com/unlocomqx), [@abramofranchetti](https://github.com/abramofranchetti), [@jf-viguier](https://github.com/jf-viguier), [@xhuljanoduli](https://github.com/xhuljanoduli), [@jak78](https://github.com/jak78), [@jolelievre](https://github.com/jolelievre), [@boubkerbribri](https://github.com/boubkerbribri), [@lmeyer1](https://github.com/lmeyer1), [@danidomen](https://github.com/danidomen), [@Hlavtox](https://github.com/Hlavtox), [@beattie282](https://github.com/beattie282), [@alexandrebrubeyonds](https://github.com/alexandrebrubeyonds), [@eternoendless](https://github.com/eternoendless), [@Oksydan](https://github.com/Oksydan), [@mistrjirka](https://github.com/mistrjirka), [@gennaris](https://github.com/gennaris)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

