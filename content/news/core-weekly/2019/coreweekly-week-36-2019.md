---
layout: post
aliases: ["/news/coreweekly-week-36-2019"]
title:  "PrestaShop Core Weekly - Week 36 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-10-02 10:20:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 2nd of September to Sunday 8th of September 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [88 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-09-02..2019-09-08) have been created in the project repositories;
- [49 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-09-02..2019-09-08), including [10 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-09-02..2019-09-08) on the core;
- [50 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-09-02..2019-09-08) in the project repositories;
- [74 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-09-02..2019-09-08), including [26 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-09-02..2019-09-08).


## Code changes in the 'develop' branch

### Core

* [#15439](https://github.com/PrestaShop/PrestaShop/pull/15439): Give more memory to php-cs-fixer, by [@matks](https://github.com/matks)

* [#15437](https://github.com/PrestaShop/PrestaShop/pull/15437): Finalize Update License Command, by [@matks](https://github.com/matks)

* [#15426](https://github.com/PrestaShop/PrestaShop/pull/15426): Fix license headers, by [@matks](https://github.com/matks)

* [#15393](https://github.com/PrestaShop/PrestaShop/pull/15393): Update php docs - getCurrency(). Thank you [@v4lux](https://github.com/v4lux)

* [#15371](https://github.com/PrestaShop/PrestaShop/pull/15371): Fix duplicate retrieval of attributes color list. Thank you [@lvancrayelynghe](https://github.com/lvancrayelynghe)

* [#14609](https://github.com/PrestaShop/PrestaShop/pull/14609): Modules translations files in theme erased by modules translations that are in modules folder. Thank you [@bm-services](https://github.com/bm-services)

### Back office

* [#15397](https://github.com/PrestaShop/PrestaShop/pull/15397): Escape Employee email in avatar block, by [@PierreRambaud](https://github.com/PierreRambaud)

* [#15325](https://github.com/PrestaShop/PrestaShop/pull/15325): Remove reference to non existent css file, by [@eternoendless](https://github.com/eternoendless)

* [#14707](https://github.com/PrestaShop/PrestaShop/pull/14707): Migration of "add cart rule" action. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)

### Front office

* [#15368](https://github.com/PrestaShop/PrestaShop/pull/15368): Fix breadcrumb SEO. Thank you [@davidglezz](https://github.com/davidglezz)

* [#15354](https://github.com/PrestaShop/PrestaShop/pull/15354): Updated prestashop/ps_emailsubscription to 2.5.0, prestashop/ps_facetedsearch to 3.2.1, prestashop/ps_contactinfo to 3.2.0, by [@Progi1984](https://github.com/Progi1984)

* [#15352](https://github.com/PrestaShop/PrestaShop/pull/15352): Add category_name to SearchResultProductFilter whitelist. Thank you [@JulianEberius](https://github.com/JulianEberius)

* [#15326](https://github.com/PrestaShop/PrestaShop/pull/15326): Missing title attribute on product page. Thank you [@dineshbadrukhiya](https://github.com/dineshbadrukhiya)

* [#15271](https://github.com/PrestaShop/PrestaShop/pull/15271): Change .sr-only hidden span to aria-label. Thank you [@davidglezz](https://github.com/davidglezz)

### Installer

* [#15404](https://github.com/PrestaShop/PrestaShop/pull/15404): Update Postal Code of South Korea, by [@khouloudbelguith](https://github.com/khouloudbelguith)

### Tests

* [#15422](https://github.com/PrestaShop/PrestaShop/pull/15422): Add Sanity tests products BO, by [@boubkerbribri](https://github.com/boubkerbribri)

* [#15415](https://github.com/PrestaShop/PrestaShop/pull/15415): Fixing esLint errors in project, by [@boubkerbribri](https://github.com/boubkerbribri)

* [#15389](https://github.com/PrestaShop/PrestaShop/pull/15389): Catalog FO tests with puppeteer - Sanity tests campaign. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)

* [#15355](https://github.com/PrestaShop/PrestaShop/pull/15355): Adding sanity tests products BO, by [@boubkerbribri](https://github.com/boubkerbribri)

* [#14170](https://github.com/PrestaShop/PrestaShop/pull/14170): Behavioral tests for CMS page commands. Thank you [@zuk3975](https://github.com/zuk3975)

* [#14132](https://github.com/PrestaShop/PrestaShop/pull/14132): Behavioral tests for Tax commands. Thank you [@zuk3975](https://github.com/zuk3975)

* [#15312](https://github.com/PrestaShop/PrestaShop/pull/15312): Order BO tests with puppeteer - Sanity tests campaign. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)

## Code changes in modules, themes & tools

### Changes in developer documentation

* [#335](https://github.com/PrestaShop/docs/pull/335): Various fixes and improvements, by [@matks](https://github.com/matks)

### Auto Upgrade module

* [#338](https://github.com/PrestaShop/autoupgrade/pull/338): Update 5.x from master changes, by [@PierreRambaud](https://github.com/PierreRambaud)

### Email subscription module

* [#38](https://github.com/PrestaShop/ps_emailsubscription/pull/38): Send voucher code, when user sign up account. Thank you [@toar86](https://github.com/toar86)

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @matks, @boubkerbribri, @khouloudbelguith, @PierreRambaud, @v4lux, @nesrineabdmouleh, @lvancrayelynghe, @davidglezz, @PrestaShark, @Progi1984, @JulianEberius, @dineshbadrukhiya, @eternoendless, @toar86, @rokaszygmantas, @bm-services, @zuk3975!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
