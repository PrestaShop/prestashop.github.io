---
layout: post
aliases: ["/news/coreweekly-31-2021"]
title:  "PrestaShop Core Weekly - Week 31 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-08-10 10:00:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 2nd to Sunday 8th of August 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

[PrestaShop 1.7.7.6](https://build.prestashop.com/news/prestashop-1-7-7-6-maintenance-release/) was released on August 9, 2021. This maintenance release fixes 31 bugs reported on previous 1.7.7 versions.

We seize the release opportunity to remind you that [the second beta of PHP 8.1](https://news-web.php.net/php.general/327595) was released on August 5!

Please note that if you are contributing to the documentation, the [guidelines to contribute](https://devdocs.prestashop.com/1.7/contribute/documentation/how/documentation-versions/) have been updated to explain the new workflow that [allows us to host multiple versions of the documentation](https://github.com/PrestaShop/docs/issues/1090). Pull Requests submitted against the documentation must now target a specific branch.


## Releases

* [PrestaShop](https://github.com/PrestaShop/PrestaShop): [1.7.7.6](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.7.6)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [48 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-08-02..2021-08-08) have been created in the project repositories;
- [29 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-08-02..2021-08-08), including [6 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-08-02..2021-08-08) on the core;
- [63 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-08-02..2021-08-08) in the project repositories;
- [49 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-08-02..2021-08-08), including [19 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-08-02..2021-08-08).



## Code changes in the 'develop' branch


### Core
* [#24581](https://github.com/PrestaShop/PrestaShop/pull/24581): Assign ID prop to null instead of unset. Thank you [@mvorisek](https://github.com/mvorisek)


### Back office
* [#25465](https://github.com/PrestaShop/PrestaShop/pull/25465): Fix option selection issue in order creation page, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#25175](https://github.com/PrestaShop/PrestaShop/pull/25175): Introduce BulkDeleteCombinationCommand. Thank you [@zuk3975](https://github.com/zuk3975)
* [#22401](https://github.com/PrestaShop/PrestaShop/pull/22401): Allow extending order-create form summary. Thank you [@zuk3975](https://github.com/zuk3975)


## Code changes in the '1.7.8.x' branch


### Core
* [#25484](https://github.com/PrestaShop/PrestaShop/pull/25484): Update ps_linklist to 5.0.4 and ps_searchbar to 2.1.1, by [@sowbiba](https://github.com/sowbiba)


### Front office
* [#25343](https://github.com/PrestaShop/PrestaShop/pull/25343): Fix broken product page when changing template, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Tests
* [#25494](https://github.com/PrestaShop/PrestaShop/pull/25494): Fix fail by adding a dateFrom when create cartRule without code. Thank you [@SD1982](https://github.com/SD1982)
* [#25486](https://github.com/PrestaShop/PrestaShop/pull/25486): Fix dateTo selector for E2E tests, by [@sowbiba](https://github.com/sowbiba)


## Code changes in the '1.7.7.x' branch


### Back office
* [#25495](https://github.com/PrestaShop/PrestaShop/pull/25495): Check variable before using it, by [@Progi1984](https://github.com/Progi1984)
* [#25489](https://github.com/PrestaShop/PrestaShop/pull/25489): Fixed selector for fetching if the tax is included, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### Changes in developer documentation sources
* [#1107](https://github.com/PrestaShop/docs/pull/1107): Request branch in PR template, by [@matks](https://github.com/matks)
* [#1106](https://github.com/PrestaShop/docs/pull/1106): Explain documentation versions and relationship with branches, by [@matks](https://github.com/matks)
* [#1104](https://github.com/PrestaShop/docs/pull/1104): Add a link to devdocs site for deployment pipeline, by [@matks](https://github.com/matks)
* [#1100](https://github.com/PrestaShop/docs/pull/1100): Test Pull Requests against devdocs-site, by [@eternoendless](https://github.com/eternoendless)


### Changes in developer documentation site
* [#1](https://github.com/PrestaShop/devdocs-site/pull/1): Explain new deploy logic, by [@matks](https://github.com/matks)


### Example modules
* [#73](https://github.com/PrestaShop/example-modules/pull/73): Update README.md with detailed list of available module examples, by [@matks](https://github.com/matks)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@matks](https://github.com/matks), [@Progi1984](https://github.com/Progi1984), [@SD1982](https://github.com/SD1982), [@sowbiba](https://github.com/sowbiba), [@eternoendless](https://github.com/eternoendless), [@matthieu-rolland](https://github.com/matthieu-rolland), [@zuk3975](https://github.com/zuk3975), [@mvorisek](https://github.com/mvorisek)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
