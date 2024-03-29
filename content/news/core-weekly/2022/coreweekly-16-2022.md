---
layout: post
aliases: ["/news/coreweekly-16-2022"]
title:  "PrestaShop Core Weekly - Week 16 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-04-25
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 18th to Sunday 24th of April 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week the maintainer team said [goodbye](https://github.com/PrestaShop/open-source/pull/93) to [@PierreRambaud](https://github.com/PierreRambaud) who decided to leave the project leving behind a big gap and still sitting at the top of the [contributors](https://contributors.prestashop.com/) podium. Thank you for your outstanding work on the project, Pierre!

Work continues on 8.0.0, the next major version, and also on a [1.7.8.6 patch release](https://github.com/PrestaShop/PrestaShop/issues/27973).

You might notice we have forked the [TCPDF](https://github.com/PrestaShop/TCPDF) repository in order to prepare the compatibility of PrestaShop with PHP8.1. This fork will be used until the upstream repository is compatible with PHP8.1.


## Releases

* [GDPR](https://github.com/PrestaShop/psgdpr) module: [v1.4.2](https://github.com/PrestaShop/psgdpr/releases/tag/v1.4.2)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [26 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-04-18..2022-04-24) have been created in the project repositories;
- [15 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-04-18..2022-04-24), including [4 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-04-18..2022-04-24) on the core;
- [41 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-04-18..2022-04-24) in the project repositories;
- [67 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-04-18..2022-04-24), including [40 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-04-18..2022-04-24).


## Code changes in the 'develop' branch


### Core
* [#28267](https://github.com/PrestaShop/PrestaShop/pull/28267): Prevent yaml cache folders creation in wrong filesystem path. Thank you [@gennaris](https://github.com/gennaris)
* [#28244](https://github.com/PrestaShop/PrestaShop/pull/28244): Change internationalization API urls to i18n.prestashop-project.org, by [@eternoendless](https://github.com/eternoendless)
* [#28237](https://github.com/PrestaShop/PrestaShop/pull/28237): Wrap PDOException in PrestaShopException to cast the string error code to an int, by [@atomiix](https://github.com/atomiix)
* [#28194](https://github.com/PrestaShop/PrestaShop/pull/28194): Remove deprecated method inside OrderPayment class. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28190](https://github.com/PrestaShop/PrestaShop/pull/28190): Remove deprecated $bo_show_screencast property. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26587](https://github.com/PrestaShop/PrestaShop/pull/26587): Use filename property instead of generating a new filename + remove duplicate code for PDF invoice formatting. Thank you [@JoryHogeveen](https://github.com/JoryHogeveen)


### Back office
* [#28281](https://github.com/PrestaShop/PrestaShop/pull/28281): Fix non closing modal after module install, by [@sowbiba](https://github.com/sowbiba)
* [#28223](https://github.com/PrestaShop/PrestaShop/pull/28223): Fix the load of CSS file to be able to load them with version. Thank you [@intraordinaire](https://github.com/intraordinaire)
* [#28166](https://github.com/PrestaShop/PrestaShop/pull/28166): Set Tax included as default value for amounts in cart rule form. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#28143](https://github.com/PrestaShop/PrestaShop/pull/28143): Migration - Adds commands for Store delete and bulk delete. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)
* [#27328](https://github.com/PrestaShop/PrestaShop/pull/27328): Handle product tags in v2 page, by [@jolelievre](https://github.com/jolelievre)
* [#25156](https://github.com/PrestaShop/PrestaShop/pull/25156): Add validator method select on admin controller. Thank you [@ytilotti](https://github.com/ytilotti)


### Tests
* [#28298](https://github.com/PrestaShop/PrestaShop/pull/28298): Functional tests - Fix nightly 20-04-2022 and 19-04-2022. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28262](https://github.com/PrestaShop/PrestaShop/pull/28262): Functional tests - Refacto 'Sort orders table' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28252](https://github.com/PrestaShop/PrestaShop/pull/28252): Functional tests - Refacto 'Pagination and sort categories'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Core
* [#28271](https://github.com/PrestaShop/PrestaShop/pull/28271): Add 1.7.8.6 SQL script, by [@matks](https://github.com/matks)


## Code changes in modules, themes & tools


### Hummingbird theme
* [#233](https://github.com/PrestaShop/hummingbird/pull/233): Fix back button text for addresses step. Thank you [@mparvazi](https://github.com/mparvazi)
* [#231](https://github.com/PrestaShop/hummingbird/pull/231): Add initVisiblePassword. Thank you [@mparvazi](https://github.com/mparvazi)
* [#230](https://github.com/PrestaShop/hummingbird/pull/230): Fix save button text in personal information form. Thank you [@mparvazi](https://github.com/mparvazi)
* [#229](https://github.com/PrestaShop/hummingbird/pull/229): Fix bugs for icon mirroring in RTL. Thank you [@mparvazi](https://github.com/mparvazi)
* [#228](https://github.com/PrestaShop/hummingbird/pull/228): Change ps_mainmenu to make it work dropdowns. Thank you [@rodriciru](https://github.com/rodriciru)
* [#227](https://github.com/PrestaShop/hummingbird/pull/227): Add useAlert doc and update useProgressRing, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#222](https://github.com/PrestaShop/hummingbird/pull/222): Fix: language and currency selectors, checkout js bugs and improvements, by [@NeOMakinG](https://github.com/NeOMakinG)


### Wire payment module
* [#71](https://github.com/PrestaShop/ps_wirepayment/pull/71): Bump version to 2.1.2, by [@atomiix](https://github.com/atomiix)


### Auto Upgrade module
* [#478](https://github.com/PrestaShop/autoupgrade/pull/478): Bump ansi-regex from 3.0.0 to 3.0.1 in /tests/e2e. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#477](https://github.com/PrestaShop/autoupgrade/pull/477): Bump minimist from 1.2.5 to 1.2.6 in /tests/e2e. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#474](https://github.com/PrestaShop/autoupgrade/pull/474): State field will be longer from 1.7.8.6, not .4, by [@kpodemski](https://github.com/kpodemski)


### TCPDF
* [#1](https://github.com/PrestaShop/TCPDF/pull/1): Fix image abscissa when in RTL, by [@atomiix](https://github.com/atomiix)


### Customer reassurance block module
* [#392](https://github.com/PrestaShop/blockreassurance/pull/392): Bump babel-loader from 8.2.4 to 8.2.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#647](https://github.com/PrestaShop/ps_facetedsearch/pull/647): Bump babel-loader from 8.2.4 to 8.2.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop Specifications
* [#334](https://github.com/PrestaShop/prestashop-specs/pull/334): Migration -> Add 410 gone page for redirection. Thank you [@MatShir](https://github.com/MatShir)
* [#316](https://github.com/PrestaShop/prestashop-specs/pull/316): Updates specs from PR 27233. Thank you [@MatShir](https://github.com/MatShir)


### The PrestaShop open source project
* [#93](https://github.com/PrestaShop/open-source/pull/93): Remove PierreRambaud from maintainers, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#90](https://github.com/PrestaShop/open-source/pull/90): Clarify scoped maintainers rights, by [@matks](https://github.com/matks)
* [#83](https://github.com/PrestaShop/open-source/pull/83): Rewrite reviewing pull requests guide, by [@eternoendless](https://github.com/eternoendless)


### stylelint configuration
* [#31](https://github.com/PrestaShop/stylelint-config/pull/31): Bump stylelint from 14.6.1 to 14.7.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Webservices PHP Client
* [#81](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/81): Update date to 2022 and some examples from http to https. Thank you [@RubenMartins](https://github.com/RubenMartins)


### Changes in developer documentation sources
* [#1362](https://github.com/PrestaShop/docs/pull/1362): Update security-policy.md. Thank you [@JoseNOM](https://github.com/JoseNOM)


### GDPR module
* [#174](https://github.com/PrestaShop/psgdpr/pull/174): Fix anonymous user if it's already in database, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#172](https://github.com/PrestaShop/psgdpr/pull/172): Release 1.4.2, by [@PierreRambaud](https://github.com/PierreRambaud)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@mparvazi](https://github.com/mparvazi), [@atomiix](https://github.com/atomiix), [@dependabot[bot]](https://github.com/apps/dependabot), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@rodriciru](https://github.com/rodriciru), [@MatShir](https://github.com/MatShir), [@PierreRambaud](https://github.com/PierreRambaud), [@sowbiba](https://github.com/sowbiba), [@RubenMartins](https://github.com/RubenMartins), [@matks](https://github.com/matks), [@JoseNOM](https://github.com/JoseNOM), [@gennaris](https://github.com/gennaris), [@NeOMakinG](https://github.com/NeOMakinG), [@eternoendless](https://github.com/eternoendless), [@intraordinaire](https://github.com/intraordinaire), [@kpodemski](https://github.com/kpodemski), [@PrestaEdit](https://github.com/PrestaEdit), [@lmeyer1](https://github.com/lmeyer1), [@LouisAUTHIE](https://github.com/LouisAUTHIE), [@jolelievre](https://github.com/jolelievre), [@JoryHogeveen](https://github.com/JoryHogeveen), [@ytilotti](https://github.com/ytilotti)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

