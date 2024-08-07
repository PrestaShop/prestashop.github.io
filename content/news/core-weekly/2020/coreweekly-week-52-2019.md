---
layout: post
aliases: ["/news/coreweekly-week-52-2019"]
title:  "PrestaShop Core Weekly - Week 52 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-01-12
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 23th to Sunday 29th of December 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Obviously in this last week of December, activity on the project was still slow but some courageous people actually made some contributions !


## A quick update about PrestaShop's GitHub issues and pull requests:

- [32 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-12-23..2019-12-29) have been created in the project repositories;
- [22 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-12-23..2019-12-29), including [4 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-12-23..2019-12-29) on the core;
- [30 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-12-23..2019-12-29) in the project repositories;
- [21 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-12-23..2019-12-29), including [17 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-12-23..2019-12-29)


## Code changes in the 'develop' branch


### Core
* [#14428](https://github.com/PrestaShop/PrestaShop/pull/14428): Succeed a search even with spelling errors . Thank you [@Lathanao](https://github.com/Lathanao)


### Front office
* [#16868](https://github.com/PrestaShop/PrestaShop/pull/16868): Show "No picture" image instead of broken one. Thank you [@prestamodule](https://github.com/prestamodule)
* [#16857](https://github.com/PrestaShop/PrestaShop/pull/16857): Changing brand page style. Thank you [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#16931](https://github.com/PrestaShop/PrestaShop/pull/16931): Functional tests - add test filter stocks by status, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16914](https://github.com/PrestaShop/PrestaShop/pull/16914): Functional Test - Add new test : filter SEO pages grid, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16909](https://github.com/PrestaShop/PrestaShop/pull/16909): Functional tests - Add filter contacts tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#16908](https://github.com/PrestaShop/PrestaShop/pull/16908): Functional Test - Add new test CRUD files, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16900](https://github.com/PrestaShop/PrestaShop/pull/16900): Functional tests - Disable tests profile including creation, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16897](https://github.com/PrestaShop/PrestaShop/pull/16897): Tests - Fix tests : invoices options, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16886](https://github.com/PrestaShop/PrestaShop/pull/16886): Functional Tests - Generate delivery slip by date. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.6.x' branch (for 1.7.6.3)


### Core
* [#16893](https://github.com/PrestaShop/PrestaShop/pull/16893): Fix yml config parse typo. Thank you [@mvorisek](https://github.com/mvorisek)


### Back office
* [#16888](https://github.com/PrestaShop/PrestaShop/pull/16888): Fix customer comment template, by [@jolelievre](https://github.com/jolelievre)
* [#16746](https://github.com/PrestaShop/PrestaShop/pull/16746): Attributes bo_css & bo_theme can be empty, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16729](https://github.com/PrestaShop/PrestaShop/pull/16729): Cost price & unit price are erased when saving with a supplier, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools


### Classic-rocket theme
* [#125](https://github.com/PrestaShop/classic-rocket/pull/125): Email address obfuscation. Thank you [@micka-fdz](https://github.com/micka-fdz)


### Changes in developer documentation
* [#406](https://github.com/PrestaShop/docs/pull/406): Add available variables on URL. Thank you [@yannicka](https://github.com/yannicka)
* [#397](https://github.com/PrestaShop/docs/pull/397): Explain how to work around missing dictionary import/export when using the new translation system, by [@eternoendless](https://github.com/eternoendless)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@boubkerbribri](https://github.com/boubkerbribri), [@micka-fdz](https://github.com/micka-fdz), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@mvorisek](https://github.com/mvorisek), [@jolelievre](https://github.com/jolelievre), [@prestamodule](https://github.com/prestamodule), [@NeOMakinG](https://github.com/NeOMakinG), [@PierreRambaud](https://github.com/PierreRambaud), [@yannicka](https://github.com/yannicka), [@eternoendless](https://github.com/eternoendless), [@Lathanao](https://github.com/Lathanao)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

