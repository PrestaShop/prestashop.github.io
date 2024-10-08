---
layout: post
aliases: ["/news/coreweekly-week-39-2019"]
title:  "PrestaShop Core Weekly - Week 39 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-10-08 10:50:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 23th of September to Sunday 29th of September 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

The [Block reassurance module is available in version 4.1.1](https://github.com/PrestaShop/blockreassurance/releases/tag/v4.1.1). This is a full refactoring with a new design and new features, we hope you'll like it !

Also Pablo Borowicz, PrestaShop's lead developer, [published the next part](http://build.prestashop.com/news/prestashop-in-2019-and-beyond-part-2-pain-points/) of his [series about the architecture of the PrestaShop open source project](http://build.prestashop.com/news/prestashop-in-2019-and-beyond-introduction/).

## A quick update about PrestaShop's GitHub issues and pull requests:

- [84 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-09-23..2019-09-29) have been created in the project repositories;
- [52 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-09-23..2019-09-29), including [9 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-09-23..2019-09-29) on the core;
- [37 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-09-23..2019-09-29) in the project repositories;
- [52 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-09-23..2019-09-29), including [27 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-09-23..2019-09-29).


## Code changes in the 'develop' branch

### Core

* [#15714](https://github.com/PrestaShop/PrestaShop/pull/15714): Make issue mandatory when creating a pull request, by [@PierreRambaud](https://github.com/PierreRambaud)

* [#15656](https://github.com/PrestaShop/PrestaShop/pull/15656): Update license headers, by [@matks](https://github.com/matks)

* [#15642](https://github.com/PrestaShop/PrestaShop/pull/15642): Fix breadcrumb category, by [@jocel1](https://github.com/jocel1)

### Back office

* [#15712](https://github.com/PrestaShop/PrestaShop/pull/15712): Fix bug on tabs product page, by [@Progi1984](https://github.com/Progi1984)

* [#15650](https://github.com/PrestaShop/PrestaShop/pull/15650): Migrate Catalog > Brand & Suppliers > Suppliers create/edit action, by [@matks](https://github.com/matks)

* [#15484](https://github.com/PrestaShop/PrestaShop/pull/15484): Add Malagasy language. Thank you [@OneDotIT](https://github.com/OneDotIT)

* [#13584](https://github.com/PrestaShop/PrestaShop/pull/13584): Migrate Sell > Catalog > Discounts > Catalog Price Rules list. Thank you [@zuk3975](https://github.com/zuk3975)

### Front office

* [#15710](https://github.com/PrestaShop/PrestaShop/pull/15710): Prevent rage clicking on checkout steps submit button. Thank you [@rdy4ever](https://github.com/rdy4ever)

* [#15533](https://github.com/PrestaShop/PrestaShop/pull/15533): Disallow showing bad cart to FO user, by [@matks](https://github.com/matks)

* [#15216](https://github.com/PrestaShop/PrestaShop/pull/15216): Users can edit adress alias during checkout. Thank you [@pauloffb](https://github.com/pauloffb)

### Tests

* [#15730](https://github.com/PrestaShop/PrestaShop/pull/15730): Update ReadMe file for puppeteer tests folder, by [@boubkerbribri](https://github.com/boubkerbribri)

* [#15634](https://github.com/PrestaShop/PrestaShop/pull/15634): Add demo data files and fix the concerned tests - Sanity tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)

## Code changes in the '1.7.6.x' branch (for v1.7.6.2)

### Back office

* [#15665](https://github.com/PrestaShop/PrestaShop/pull/15665): Wrong selector expression, unable to move parent category, by [@PierreRambaud](https://github.com/PierreRambaud)

* [#15660](https://github.com/PrestaShop/PrestaShop/pull/15660): Fix tracking url in Theme and Logo page, by [@jolelievre](https://github.com/jolelievre)

* [#15658](https://github.com/PrestaShop/PrestaShop/pull/15658): Use empty legacy action parameter, by [@jolelievre](https://github.com/jolelievre)

## Code changes in modules, themes & tools

### Changes in developer documentation

* [#358](https://github.com/PrestaShop/docs/pull/358): Add missing recommendation from the validator rules + link to doc sumarizing all checks, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)

* [#356](https://github.com/PrestaShop/docs/pull/356): Fix mysqldiff utility link broken. Thank you [@jf-viguier](https://github.com/jf-viguier)

* [#355](https://github.com/PrestaShop/docs/pull/355): Add recommendation for removing standalone php scripts, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)

* [#354](https://github.com/PrestaShop/docs/pull/354): Update admin controllers documentation. Thank you [@mrbig00](https://github.com/mrbig00)

* [#353](https://github.com/PrestaShop/docs/pull/353): Better structure for module extension symfony concepts, by [@matks](https://github.com/matks)

* [#352](https://github.com/PrestaShop/docs/pull/352): Better structure for testing section, by [@matks](https://github.com/matks)

### Mail Theme example module

* [#3](https://github.com/PrestaShop/example_module_mailtheme/pull/3): Update README.md, by [@jolelievre](https://github.com/jolelievre)

### PrestaShop Docker images

* [#180](https://github.com/PrestaShop/docker/pull/180): Install scripts. Thank you [@djodjo3](https://github.com/djodjo3)

### PrestaShop internal Docker images

* [#29](https://github.com/PrestaShop/docker-internal-images/pull/29): Mod install devops. Thank you [@lfourreau](https://github.com/lfourreau)

* [#27](https://github.com/PrestaShop/docker-internal-images/pull/27): Use package default-mysql-server, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)

### Prestashop UI Kit

* [#67](https://github.com/PrestaShop/prestashop-ui-kit/pull/67): Bump jquery to 3.4.1, by [@matthieu-rolland](https://github.com/matthieu-rolland)

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @boubkerbribri, @Zzareb, @PierreRambaud, @Progi1984, @rdy4ever, @Quetzacoalt91, @jf-viguier, @mrbig00, @jolelievre, @matks, @jocel1, @nesrineabdmouleh, @djodjo3, @lfourreau, @OneDotIT, @matthieu-rolland, @pauloffb, @zuk3975!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
