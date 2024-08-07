---
layout: post
aliases: ["/news/coreweekly-20-2021"]
title:  "PrestaShop Core Weekly - Week 20 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-05-24
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 17th to Sunday 23th of May 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The next public open source demo is going to happen on **next Wednesday, [May 26, 2021 at 2pm CEST](https://www.youtube.com/watch?v=MQzTL1J5oGQ)**.

During this session we will present more of the new 1.7.8 achievements!


## Releases

* [TranslationToolsBundle](https://github.com/PrestaShop/TranslationToolsBundle): [v4.0.5](https://github.com/PrestaShop/TranslationToolsBundle/releases/tag/v4.0.5)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [69 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-05-17..2021-05-23) have been created in the project repositories;
- [43 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-05-17..2021-05-23), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-05-17..2021-05-23) on the core;
- [85 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-05-17..2021-05-23) in the project repositories;
- [65 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-05-17..2021-05-23), including [55 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-05-17..2021-05-23).



## Code changes in the 'develop' branch


### Back office
* [#23863](https://github.com/PrestaShop/PrestaShop/pull/23863): Enable to extends module `card_list.html.twig` and use custom actions. Thank you [@PululuK](https://github.com/PululuK)


### Tests
* [#24592](https://github.com/PrestaShop/PrestaShop/pull/24592): Add `DbQueryCore` phpunit test . Thank you [@PululuK](https://github.com/PululuK)


## Code changes in the '1.7.8.x' branch


### Core
* [#24586](https://github.com/PrestaShop/PrestaShop/pull/24586): Fix addons modules not being installed in CI, by [@atomiix](https://github.com/atomiix)


### Back office
* [#24527](https://github.com/PrestaShop/PrestaShop/pull/24527): Restricted to all shop context for Order Status controller, by [@Progi1984](https://github.com/Progi1984)
* [#24456](https://github.com/PrestaShop/PrestaShop/pull/24456): Fix js error in console in multistore mode, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#24089](https://github.com/PrestaShop/PrestaShop/pull/24089): Improve Product getAttributesResume function for MySQL 8. Thank you [@daresh](https://github.com/daresh)


### Front office
* [#24428](https://github.com/PrestaShop/PrestaShop/pull/24428): Correct logo size of classic theme, by [@NeOMakinG](https://github.com/NeOMakinG)


### Installer
* [#24525](https://github.com/PrestaShop/PrestaShop/pull/24525): Wrong usage of shopId property during installation process, by [@PierreRambaud](https://github.com/PierreRambaud)


### Tests
* [#24569](https://github.com/PrestaShop/PrestaShop/pull/24569): Add js-doc to faker data classes: tag, tax, taxRule, taxRuleGroup, title, webservice, zone, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24566](https://github.com/PrestaShop/PrestaShop/pull/24566): Add js-doc to faker data classes: Address, brand, brandAddress, carrier, attribute and value, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24551](https://github.com/PrestaShop/PrestaShop/pull/24551): Update js documentation for shop parameters pages. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#24478](https://github.com/PrestaShop/PrestaShop/pull/24478): Functional tests - Fix and add tests for Brands and Addresses pages. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#24375](https://github.com/PrestaShop/PrestaShop/pull/24375): Add new test 'Guest checkout: Use different invoice address', by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.7.x' branch


### Back office
* [#24579](https://github.com/PrestaShop/PrestaShop/pull/24579): BO - Order Messages - Avoid message with duplicate name, by [@Progi1984](https://github.com/Progi1984)
* [#24568](https://github.com/PrestaShop/PrestaShop/pull/24568): BO - Order Preview - Use the tracking number in tracking url, by [@Progi1984](https://github.com/Progi1984)
* [#24427](https://github.com/PrestaShop/PrestaShop/pull/24427): Fixed wrong price of the delivery slip of the document list, by [@Progi1984](https://github.com/Progi1984)


### Tests
* [#24578](https://github.com/PrestaShop/PrestaShop/pull/24578): Fix test Handling charges and backport fixes for product quick view test, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in modules, themes & tools


### Links list module
* [#120](https://github.com/PrestaShop/ps_linklist/pull/120): Migrated Travis CI to Github Actions, by [@Progi1984](https://github.com/Progi1984)


### Wishlist block module
* [#116](https://github.com/PrestaShop/blockwishlist/pull/116): Bump version 2.0.1, by [@jolelievre](https://github.com/jolelievre)
* [#115](https://github.com/PrestaShop/blockwishlist/pull/115): Fix error in wording, by [@jolelievre](https://github.com/jolelievre)
* [#112](https://github.com/PrestaShop/blockwishlist/pull/112): Change assets priorities to permit override. Thank you [@henri9813](https://github.com/henri9813)
* [#105](https://github.com/PrestaShop/blockwishlist/pull/105): Bump elliptic from 6.5.2 to 6.5.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer reassurance block module
* [#201](https://github.com/PrestaShop/blockreassurance/pull/201): Bump css-loader from 5.2.4 to 5.2.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#200](https://github.com/PrestaShop/blockreassurance/pull/200): Bump webpack from 5.37.0 to 5.37.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#199](https://github.com/PrestaShop/blockreassurance/pull/199): Bump @babel/core from 7.14.2 to 7.14.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#198](https://github.com/PrestaShop/blockreassurance/pull/198): Bump eslint-plugin-import from 2.22.1 to 2.23.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#193](https://github.com/PrestaShop/blockreassurance/pull/193): Bump lodash from 4.17.20 to 4.17.21. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#192](https://github.com/PrestaShop/blockreassurance/pull/192): Bump hosted-git-info from 2.8.8 to 2.8.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#434](https://github.com/PrestaShop/ps_facetedsearch/pull/434): Bump css-loader from 5.2.4 to 5.2.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#432](https://github.com/PrestaShop/ps_facetedsearch/pull/432): Bump webpack from 5.37.0 to 5.37.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#430](https://github.com/PrestaShop/ps_facetedsearch/pull/430): Bump @babel/cli from 7.13.16 to 7.14.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#429](https://github.com/PrestaShop/ps_facetedsearch/pull/429): Bump eslint-plugin-import from 2.22.1 to 2.23.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Gamification module
* [#84](https://github.com/PrestaShop/gamification/pull/84): Bump symfony/phpunit-bridge from 5.2.8 to 5.2.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Email Alerts module
* [#87](https://github.com/PrestaShop/ps_emailalerts/pull/87): Remove our old friend, Travis. Thank you [@kpodemski](https://github.com/kpodemski)


### Example modules
* [#60](https://github.com/PrestaShop/example-modules/pull/60): Example how to implement console command. Thank you [@zuk3975](https://github.com/zuk3975)
* [#59](https://github.com/PrestaShop/example-modules/pull/59): Show how to override object model and add database column. Thank you [@zuk3975](https://github.com/zuk3975)


### Changes in developer documentation
* [#1002](https://github.com/PrestaShop/docs/pull/1002): Change order view page hooks image. Thank you [@kpodemski](https://github.com/kpodemski)
* [#993](https://github.com/PrestaShop/docs/pull/993): Fix docker-compose file to build Hugo container, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#990](https://github.com/PrestaShop/docs/pull/990): Add migration docs about behat tests. Thank you [@zuk3975](https://github.com/zuk3975)
* [#989](https://github.com/PrestaShop/docs/pull/989): BO: include Vue help for Symfony controllers. Thank you [@jorgevrgs](https://github.com/jorgevrgs)
* [#971](https://github.com/PrestaShop/docs/pull/971): Describe orders lifecycle. Thank you [@zuk3975](https://github.com/zuk3975)
* [#960](https://github.com/PrestaShop/docs/pull/960): Add table for PHP dependencies, by [@PierreRambaud](https://github.com/PierreRambaud)


### TranslationTools Bundle
* [#86](https://github.com/PrestaShop/TranslationToolsBundle/pull/86): Make services public, by [@atomiix](https://github.com/atomiix)


### OnBoarding module
* [#107](https://github.com/PrestaShop/welcome/pull/107): Bump eslint-plugin-import from 2.22.1 to 2.23.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#105](https://github.com/PrestaShop/welcome/pull/105): Bump lodash from 4.17.20 to 4.17.21. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#104](https://github.com/PrestaShop/welcome/pull/104): Bump hosted-git-info from 2.8.8 to 2.8.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#71](https://github.com/PrestaShop/welcome/pull/71): Bump postcss-loader from 0.8.2 to 3.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### GDPR module
* [#141](https://github.com/PrestaShop/psgdpr/pull/141): Fix errors in Spanish translation. Thank you [@alfonsolr09](https://github.com/alfonsolr09)


### Prestashop UI Kit
* [#139](https://github.com/PrestaShop/prestashop-ui-kit/pull/139): Add SCSS variables to storybook, by [@NeOMakinG](https://github.com/NeOMakinG)


### Buy button lite module
* [#19](https://github.com/PrestaShop/ps_buybuttonlite/pull/19): Improve call to `implode()` for php7.4. Thank you [@MathiasReker](https://github.com/MathiasReker)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Progi1984](https://github.com/Progi1984), [@jolelievre](https://github.com/jolelievre), [@dependabot[bot]](https://github.com/apps/dependabot), [@PululuK](https://github.com/PululuK), [@atomiix](https://github.com/atomiix), [@boubkerbribri](https://github.com/boubkerbribri), [@kpodemski](https://github.com/kpodemski), [@zuk3975](https://github.com/zuk3975), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@matks](https://github.com/matks), [@PierreRambaud](https://github.com/PierreRambaud), [@jorgevrgs](https://github.com/jorgevrgs), [@matthieu-rolland](https://github.com/matthieu-rolland), [@NeOMakinG](https://github.com/NeOMakinG), [@henri9813](https://github.com/henri9813), [@daresh](https://github.com/daresh), [@alfonsolr09](https://github.com/alfonsolr09), [@MathiasReker](https://github.com/MathiasReker)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
