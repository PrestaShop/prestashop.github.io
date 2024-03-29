---
layout: post
aliases: ["/news/coreweekly-week-20-2019"]
title:  "PrestaShop Core Weekly - Week 20 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-05-27 16:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 13th to Sunday 19th of May 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

[PSD Paris 2019](https://www.prestashop.com/fr/evenements/prestashop-day-paris) is just next week, and there will be [a dedicated space for developers](http://build.prestashop.com/news/psd-2019-developer-space/) :-) 

The whole PrestaShop is eager to meet you there in real life. See you next week!


## A quick update about PrestaShop's GitHub issues and pull requests:


- [58 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-05-13..2019-05-19) have been created in the project repositories;
- [76 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-05-13..2019-05-19), including [18 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-05-13..2019-05-19) on the core;
- [55 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-05-13..2019-05-19) in the project repositories;
- [42 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-05-13..2019-05-19), including [37 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-05-13..2019-05-19).


## Code changes in the 'develop' branch

### Core

* [#13736](https://github.com/PrestaShop/PrestaShop/pull/13736): Replace all calls to $this->l() in controllers, by [@eternoendless](https://github.com/eternoendless)
* [#13789](https://github.com/PrestaShop/PrestaShop/pull/13789): Merge 1.7.6.x to develop - 15/05/2019, by [@matks](https://github.com/matks)
* [#13803](https://github.com/PrestaShop/PrestaShop/pull/13803): Make the movement of the Grid columns really easy, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#13818](https://github.com/PrestaShop/PrestaShop/pull/13818): Remove redundant condition in cart.php. Thank you [@davidglezz](https://github.com/davidglezz)


### Back office

* [#13593](https://github.com/PrestaShop/PrestaShop/pull/13593): Automated hooks discovery and updating hooks list in xml and sql files. Thank you [@tomas862](https://github.com/tomas862)
* [#13798](https://github.com/PrestaShop/PrestaShop/pull/13798): Change input type for imap password, by [@marionf](https://github.com/marionf)


### Tests

* [#13811](https://github.com/PrestaShop/PrestaShop/pull/13811): Download in headless mode in tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#13824](https://github.com/PrestaShop/PrestaShop/pull/13824): Update tests and package-lock, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13827](https://github.com/PrestaShop/PrestaShop/pull/13827): Revert "Only run deploy if the triggered commit is recent", by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in the "1.7.6.x" branch (for v1.7.6.0)

### Core

* [#13665](https://github.com/PrestaShop/PrestaShop/pull/13665): Final retail price is not displayed due to missing CLDR files, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13766](https://github.com/PrestaShop/PrestaShop/pull/13766): Merge 1.7.5.2 into 1.7.6.x, by [@eternoendless](https://github.com/eternoendless)
* [#13768](https://github.com/PrestaShop/PrestaShop/pull/13768): Merge beta release into 1.7.6.x, by [@eternoendless](https://github.com/eternoendless)
* [#13778](https://github.com/PrestaShop/PrestaShop/pull/13778): Add new hooks for Symfony migrated pages in XML install file and SQL upgrade, by [@matks](https://github.com/matks)
* [#13808](https://github.com/PrestaShop/PrestaShop/pull/13808): Update Symfony to latest patch version to fix ICU version problem, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office

* [#13165](https://github.com/PrestaShop/PrestaShop/pull/13165): Fix multilanguage fields configuration. Thank you [@sarjon](https://github.com/sarjon)
* [#13722](https://github.com/PrestaShop/PrestaShop/pull/13722): Filter themes without override in email generation form, by [@jolelievre](https://github.com/jolelievre)
* [#13763](https://github.com/PrestaShop/PrestaShop/pull/13763): Fix help sidebar display in Customers page. Thank you [@sarjon](https://github.com/sarjon)
* [#13764](https://github.com/PrestaShop/PrestaShop/pull/13764): Fixes customer view url in notifications bar. Thank you [@sarjon](https://github.com/sarjon)
* [#13765](https://github.com/PrestaShop/PrestaShop/pull/13765): Fix sql manager bulk actions. Thank you [@sarjon](https://github.com/sarjon)
* [#13768](https://github.com/PrestaShop/PrestaShop/pull/13768): Merge beta release into 1.7.6.x, by [@eternoendless](https://github.com/eternoendless)
* [#13777](https://github.com/PrestaShop/PrestaShop/pull/13777): Incorrect translation arguments passed in cms page form. Thank you [@tomas862](https://github.com/tomas862)
* [#13779](https://github.com/PrestaShop/PrestaShop/pull/13779): Allow to overwrite theme mails if they have modules OR mail templates, by [@jolelievre](https://github.com/jolelievre)
* [#13821](https://github.com/PrestaShop/PrestaShop/pull/13821): Fix manufacturers, taxes lists id filtering. Thank you [@zuk3975](https://github.com/zuk3975)


### Front office

* [#12891](https://github.com/PrestaShop/PrestaShop/pull/12891): Fix bug on block social in footer. Thank you [@YeLnatSs](https://github.com/YeLnatSs)
* [#13780](https://github.com/PrestaShop/PrestaShop/pull/13780): fix displayed discount on tax excluded cart display, by [@tomlev](https://github.com/tomlev)


### Tests

* [#13726](https://github.com/PrestaShop/PrestaShop/pull/13726): Moving tests High to full or to broken tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#13772](https://github.com/PrestaShop/PrestaShop/pull/13772): Correct usage of fixtures on behat tests for taxes, by [@tomlev](https://github.com/tomlev)
* [#13776](https://github.com/PrestaShop/PrestaShop/pull/13776): Improve tests orders and category, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#13831](https://github.com/PrestaShop/PrestaShop/pull/13831): Force report name, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools

### PrestaShop Coding Standards

* [#1](https://github.com/PrestaShop/php-coding-standards/pull/1): Integrate php cs fixer, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#2](https://github.com/PrestaShop/php-coding-standards/pull/2): Add license in composer.json, by [@PierreRambaud](https://github.com/PierreRambaud)


### Docker Internal images

* [#25](https://github.com/PrestaShop/docker-internal-images/pull/25): Call localhost to trigger the cache generation, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Live demo devices

* [#5](https://github.com/PrestaShop/live-demo-devices/pull/5): Request periodically the shop before setting its URL in iFrame, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Faceted search

* [#57](https://github.com/PrestaShop/ps_facetedsearch/pull/57): Update cldr javascript library, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#58](https://github.com/PrestaShop/ps_facetedsearch/pull/58): Add phpunit tests and quality, by [@PierreRambaud](https://github.com/PierreRambaud)


## Changes in Documentation

* [#248](https://github.com/PrestaShop/docs/pull/248): Add deprecation notice. Thank you [@dennispw](https://github.com/dennispw)
* [#265](https://github.com/PrestaShop/docs/pull/265): Adds options form, identifiable object forms and grid hooks docs. Thank you [@tomas862](https://github.com/tomas862)
* [#267](https://github.com/PrestaShop/docs/pull/267): Global Smarty vars updated. Thank you [@d-roduit](https://github.com/d-roduit)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @d-roduit, @davidglezz, @dennispw, @sarjon, @tomas862, @YeLnatSs, @zuk3975!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
