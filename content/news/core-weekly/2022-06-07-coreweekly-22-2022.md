---
layout: post
aliases: ["/news/coreweekly-22-2022"]
slug: "coreweekly-22-2022"
title:  "PrestaShop Core Weekly - Week 22 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-06-07 09:00:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 30th of May to Sunday 5th of June 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## Releases

* [Ps_cashondelivery](https://github.com/PrestaShop/ps_cashondelivery) module: [v2.0.0](https://github.com/PrestaShop/ps_cashondelivery/releases/tag/v2.0.0)
* [Traces](https://github.com/PrestaShop/traces): [v5.2.2](https://github.com/PrestaShop/traces/releases/tag/v5.2.2)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [42 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-05-30..2022-06-05) have been created in the project repositories;
- [29 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-05-30..2022-06-05), including [10 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-05-30..2022-06-05) on the core;
- [45 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-05-30..2022-06-05) in the project repositories;
- [48 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-05-30..2022-06-05), including [42 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-05-30..2022-06-05).


## Code changes in the 'develop' branch


### Core
* [#28615](https://github.com/PrestaShop/PrestaShop/pull/28615): Add Db::ON_DUPLICATE_KEY into available possibilities. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28578](https://github.com/PrestaShop/PrestaShop/pull/28578): Remove deprecated in Core namespace, by [@Progi1984](https://github.com/Progi1984)
* [#28445](https://github.com/PrestaShop/PrestaShop/pull/28445): Allow clearing modules cache for all shops, by [@sowbiba](https://github.com/sowbiba)


### Back office
* [#28619](https://github.com/PrestaShop/PrestaShop/pull/28619): Replace unit type with a form type extension. Thank you [@tom-combet](https://github.com/tom-combet)
* [#28597](https://github.com/PrestaShop/PrestaShop/pull/28597): Combination tab out of stock, by [@jolelievre](https://github.com/jolelievre)
* [#28594](https://github.com/PrestaShop/PrestaShop/pull/28594): Feature flags improvements, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#28535](https://github.com/PrestaShop/PrestaShop/pull/28535): Removes old images and their hight DPI. Thank you [@w-jerome](https://github.com/w-jerome)
* [#28504](https://github.com/PrestaShop/PrestaShop/pull/28504): Add hook to allow additional search panels, by [@sowbiba](https://github.com/sowbiba)
* [#28438](https://github.com/PrestaShop/PrestaShop/pull/28438): Migrate Country list to symfony. Thank you [@margud](https://github.com/margud)
* [#28330](https://github.com/PrestaShop/PrestaShop/pull/28330): Extra message on module description, by [@sowbiba](https://github.com/sowbiba)


### Tests
* [#28665](https://github.com/PrestaShop/PrestaShop/pull/28665): Fix nightly 02/06/2022 - Fix random error on 'Choose address' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28554](https://github.com/PrestaShop/PrestaShop/pull/28554): UI tests - Fix step double identifer and remove doubles, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#28536](https://github.com/PrestaShop/PrestaShop/pull/28536): Functional tests - Add new test 'Check summary' on create order page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28356](https://github.com/PrestaShop/PrestaShop/pull/28356): Functional tests - Add new test "Design > Theme & Logo > Advanced customization page", by [@khouloudbelguith](https://github.com/khouloudbelguith)


## Code changes in modules, themes & tools


### Customer reassurance block module
* [#408](https://github.com/PrestaShop/blockreassurance/pull/408): Bump webpack from 5.72.1 to 5.73.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#407](https://github.com/PrestaShop/blockreassurance/pull/407): Bump @babel/core from 7.18.0 to 7.18.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#666](https://github.com/PrestaShop/ps_facetedsearch/pull/666): Bump webpack from 5.72.1 to 5.73.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### stylelint configuration
* [#39](https://github.com/PrestaShop/stylelint-config/pull/39): Bump stylelint-config-twbs-bootstrap from 3.1.0 to 3.2.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#37](https://github.com/PrestaShop/stylelint-config/pull/37): Bump stylelint-config-twbs-bootstrap from 3.0.1 to 3.1.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Hummingbird theme
* [#310](https://github.com/PrestaShop/hummingbird/pull/310): Fix type error for useProgressRing. Thank you [@mparvazi](https://github.com/mparvazi)
* [#309](https://github.com/PrestaShop/hummingbird/pull/309): Fix pagination, simplify templates, add addition category description, remove truncations, unify header size. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#308](https://github.com/PrestaShop/hummingbird/pull/308): Redesign password email pages. Thank you [@mparvazi](https://github.com/mparvazi)
* [#306](https://github.com/PrestaShop/hummingbird/pull/306): Remove actionProductOutOfStock from product-details. Thank you [@rodriciru](https://github.com/rodriciru)
* [#304](https://github.com/PrestaShop/hummingbird/pull/304): Add BS form validation. Thank you [@mparvazi](https://github.com/mparvazi)
* [#303](https://github.com/PrestaShop/hummingbird/pull/303): Fix shopping cart icon alignment. Thank you [@mparvazi](https://github.com/mparvazi)
* [#301](https://github.com/PrestaShop/hummingbird/pull/301): Add image preview for customization modal. Thank you [@mparvazi](https://github.com/mparvazi)
* [#300](https://github.com/PrestaShop/hummingbird/pull/300): On search, always says no results, even when has. Thank you [@rodriciru](https://github.com/rodriciru)
* [#297](https://github.com/PrestaShop/hummingbird/pull/297): Add modules to config.yml hook. Thank you [@rodriciru](https://github.com/rodriciru)
* [#295](https://github.com/PrestaShop/hummingbird/pull/295): Add quickview touch button for mobile. Thank you [@mparvazi](https://github.com/mparvazi)


### Core Weekly Generator tool
* [#123](https://github.com/PrestaShop/core-weekly-generator/pull/123): Bump eventsource from 1.0.7 to 1.1.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Issues Bot
* [#77](https://github.com/PrestaShop/issuebot/pull/77): build(deps): bump eventsource from 1.0.7 to 1.1.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Contact Form module
* [#61](https://github.com/PrestaShop/contactform/pull/61): Fixing deprecated for PHP 8.1, by [@atomiix](https://github.com/atomiix)


### Classic theme
* [#34](https://github.com/PrestaShop/classic-theme/pull/34): Display carrier only if exists, by [@atomiix](https://github.com/atomiix)
* [#13](https://github.com/PrestaShop/classic-theme/pull/13): Fix display of 'Forgot Your Password' in the checkout process. Thank you [@eliphazed](https://github.com/eliphazed)


### Auto Upgrade module
* [#488](https://github.com/PrestaShop/autoupgrade/pull/488): Fix PHP 8.1 deprecated notice, by [@atomiix](https://github.com/atomiix)
* [#484](https://github.com/PrestaShop/autoupgrade/pull/484): When module upgrade, install new modules if present, by [@Progi1984](https://github.com/Progi1984)


### Example modules
* [#96](https://github.com/PrestaShop/example-modules/pull/96): Set demomultistoreform module's max PS version to current version, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Data mining for statistics module
* [#26](https://github.com/PrestaShop/statsdata/pull/26): Bump version to 2.1.1. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Contextual Help API
* [#8](https://github.com/PrestaShop/contextual-help-api/pull/8): Bump guzzlehttp/guzzle from 7.4.2 to 7.4.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation sources
* [#1387](https://github.com/PrestaShop/docs/pull/1387): Fix minor typo and path order. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Cash on delivery module
* [#44](https://github.com/PrestaShop/ps_cashondelivery/pull/44): Release 2.0.0, by [@matks](https://github.com/matks)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@mparvazi](https://github.com/mparvazi), [@Hlavtox](https://github.com/Hlavtox), [@atomiix](https://github.com/atomiix), [@rodriciru](https://github.com/rodriciru), [@matthieu-rolland](https://github.com/matthieu-rolland), [@tom-combet](https://github.com/tom-combet), [@PrestaEdit](https://github.com/PrestaEdit), [@jolelievre](https://github.com/jolelievre), [@leemyongpakvn](https://github.com/leemyongpakvn), [@Progi1984](https://github.com/Progi1984), [@matks](https://github.com/matks), [@boubkerbribri](https://github.com/boubkerbribri), [@w-jerome](https://github.com/w-jerome), [@sowbiba](https://github.com/sowbiba), [@margud](https://github.com/margud), [@khouloudbelguith](https://github.com/khouloudbelguith), [@eliphazed](https://github.com/eliphazed)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

