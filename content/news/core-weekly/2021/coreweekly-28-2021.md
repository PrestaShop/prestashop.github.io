---
layout: post
aliases: ["/news/coreweekly-28-2021"]
title:  "PrestaShop Core Weekly - Week 28 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-07-19 13:58:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 12th to Sunday 18th of July 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [45 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-07-12..2021-07-18) have been created in the project repositories;
- [31 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-07-12..2021-07-18), including [8 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-07-12..2021-07-18) on the core;
- [33 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-07-12..2021-07-18) in the project repositories;
- [67 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-07-12..2021-07-18), including [24 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-07-12..2021-07-18).



## Code changes in the 'develop' branch


### Core
* [#25268](https://github.com/PrestaShop/PrestaShop/pull/25268): Fix isCatalogMode condition and Remove the price-drop link from the the best seller display condition. Thank you [@Sinepel](https://github.com/Sinepel)
* [#25267](https://github.com/PrestaShop/PrestaShop/pull/25267): Replace getsupplierlink with getSupplierLink. Thank you [@Sinepel](https://github.com/Sinepel)
* [#25242](https://github.com/PrestaShop/PrestaShop/pull/25242): Minor code refacto `Order.php`. Thank you [@PululuK](https://github.com/PululuK)


### Back office
* [#24878](https://github.com/PrestaShop/PrestaShop/pull/24878): Refactor entity search element to make more generic and reusable, by [@jolelievre](https://github.com/jolelievre)
* [#22731](https://github.com/PrestaShop/PrestaShop/pull/22731): Migrate product list - Base. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)


### Front office
* [#25067](https://github.com/PrestaShop/PrestaShop/pull/25067): Added clickable phone number on navbar and footer. Thank you [@henri9813](https://github.com/henri9813)
* [#24080](https://github.com/PrestaShop/PrestaShop/pull/24080): Improve complexity of `CategoryController::getCanonicalURL` and Add doc to the parent function. Thank you [@Sinepel](https://github.com/Sinepel)
* [#23698](https://github.com/PrestaShop/PrestaShop/pull/23698): Can't show module on the Left Column. Thank you [@nenes25](https://github.com/nenes25)


### Tests
* [#25285](https://github.com/PrestaShop/PrestaShop/pull/25285): Add search for newsletter module before going to module configuration on tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24997](https://github.com/PrestaShop/PrestaShop/pull/24997): Cancel previous build when it's possible, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in the '1.7.8.x' branch


### Tests
* [#25344](https://github.com/PrestaShop/PrestaShop/pull/25344): Disable failing Behat test about product duplicate translation, by [@matks](https://github.com/matks)
* [#25333](https://github.com/PrestaShop/PrestaShop/pull/25333): Caching playwright browsers on github workflows, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.7.x' branch


### Back office
* [#25286](https://github.com/PrestaShop/PrestaShop/pull/25286): Fix cart rule that can be used more than once per user when it shouldn't, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#24339](https://github.com/PrestaShop/PrestaShop/pull/24339): Add number comma formatter, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools


### Customer reassurance block module
* [#237](https://github.com/PrestaShop/blockreassurance/pull/237): Bump css-loader from 5.2.6 to 6.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#235](https://github.com/PrestaShop/blockreassurance/pull/235): Bump style-loader from 3.0.0 to 3.1.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#234](https://github.com/PrestaShop/blockreassurance/pull/234): Bump webpack from 5.43.0 to 5.44.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#469](https://github.com/PrestaShop/ps_facetedsearch/pull/469): Bump css-loader from 5.2.6 to 6.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#467](https://github.com/PrestaShop/ps_facetedsearch/pull/467): Bump webpack from 5.43.0 to 5.44.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation
* [#1081](https://github.com/PrestaShop/docs/pull/1081): Add code documentation and PHP type documentation to code standards, by [@eternoendless](https://github.com/eternoendless)
* [#1067](https://github.com/PrestaShop/docs/pull/1067): Add a notice for how to use API key in header. Thank you [@Arman-Hosseini](https://github.com/Arman-Hosseini)
* [#1056](https://github.com/PrestaShop/docs/pull/1056): Explains how to import Typescript files instead of Javascript files, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#1031](https://github.com/PrestaShop/docs/pull/1031): Update Nginx configuration for SEO purpose. Thank you [@yildizib](https://github.com/yildizib)


### Email Alerts module
* [#85](https://github.com/PrestaShop/ps_emailalerts/pull/85): Send email when the number in stock matches the minimum. Thank you [@okom3pom](https://github.com/okom3pom)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@matks](https://github.com/matks), [@boubkerbribri](https://github.com/boubkerbribri), [@eternoendless](https://github.com/eternoendless), [@matthieu-rolland](https://github.com/matthieu-rolland), [@Sinepel](https://github.com/Sinepel), [@PululuK](https://github.com/PululuK), [@Arman-Hosseini](https://github.com/Arman-Hosseini), [@NeOMakinG](https://github.com/NeOMakinG), [@henri9813](https://github.com/henri9813), [@PierreRambaud](https://github.com/PierreRambaud), [@jolelievre](https://github.com/jolelievre), [@yildizib](https://github.com/yildizib), [@okom3pom](https://github.com/okom3pom), [@nenes25](https://github.com/nenes25), [@JevgenijVisockij](https://github.com/JevgenijVisockij)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
