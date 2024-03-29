---
layout: post
aliases: ["/news/coreweekly-week-51-2018"]
title:  "PrestaShop Core Weekly - Week 51 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-01-04 16:15:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 17th to Sunday 23rd of December 2018.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

Happy new year!!!

I wish you more reviewed pull requests, and less issues to report and fix. Of course, don't forget to take care of you, for a good health is what everybody needs to start anything :-)

As you can see, even if the activity on GitHub is usually a bit calm at each end of the year, some good work has been done.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [67 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2018-12-17..2018-12-23) have been created in the project repositories
- [43 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2018-12-17..2018-12-23), including [12 fixed issues on the core](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2018-12-17..2018-12-23)
- [194 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2018-12-17..2018-12-23) in the project repositories
- [78 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2018-12-17..2018-12-23), including [38 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2018-12-17..2018-12-23)

## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#10486](https://github.com/PrestaShop/PrestaShop/pull/10486): Split grid service definitions in separate files. Thank you [@sarjon](https://github.com/sarjon)
* [#11706](https://github.com/PrestaShop/PrestaShop/pull/11706): Fix implode calls. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11729](https://github.com/PrestaShop/PrestaShop/pull/11729): Write binary. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11781](https://github.com/PrestaShop/PrestaShop/pull/11781): Fix blank lines: Add and remove. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11793](https://github.com/PrestaShop/PrestaShop/pull/11793): Merge 1.7.5.0 into develop, by [@eternoendless](https://github.com/eternoendless)
* [#11809](https://github.com/PrestaShop/PrestaShop/pull/11809): CO: Fix misuse of getimagesize returned informations. Thank you [@olivier-monaco](https://github.com/olivier-monaco)
* [#11823](https://github.com/PrestaShop/PrestaShop/pull/11823): Fix namespace. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11857](https://github.com/PrestaShop/PrestaShop/pull/11857): Replace tabs with spaces. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11866](https://github.com/PrestaShop/PrestaShop/pull/11866): Order imports. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11867](https://github.com/PrestaShop/PrestaShop/pull/11867): Remove unneeded curly braces. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11869](https://github.com/PrestaShop/PrestaShop/pull/11869): Remove unneeded control parentheses. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#11876](https://github.com/PrestaShop/PrestaShop/pull/11876): CO: Fix lang table multi-store data issue. Thank you [@Dan-Orchard](https://github.com/Dan-Orchard)
* [#11884](https://github.com/PrestaShop/PrestaShop/pull/11884): Do not allow null for low_stock_alert, by [@eternoendless](https://github.com/eternoendless)
* [#11892](https://github.com/PrestaShop/PrestaShop/pull/11892): Fix missing const definition. Thank you [@sarjon](https://github.com/sarjon)
* [#11895](https://github.com/PrestaShop/PrestaShop/pull/11895): Fix categories grid id. Thank you [@sarjon](https://github.com/sarjon)


### Back office

* [#11785](https://github.com/PrestaShop/PrestaShop/pull/11785): Update dependencies with security breaches, by [@jolelievre](https://github.com/jolelievre)
* [#11850](https://github.com/PrestaShop/PrestaShop/pull/11850): Fix header, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#11851](https://github.com/PrestaShop/PrestaShop/pull/11851): An error is displayed "getimagesize(): php_network_getaddresses" when we try to change the status of the order to payment accepted, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front office

* [#11608](https://github.com/PrestaShop/PrestaShop/pull/11608): Fix jquery shortcut function 'load' deprecate. Thank you [@Fabuloops](https://github.com/Fabuloops)
* [#11661](https://github.com/PrestaShop/PrestaShop/pull/11661): Reset quantity value to min value after adding to cart, by [@jolelievre](https://github.com/jolelievre)
* [#11745](https://github.com/PrestaShop/PrestaShop/pull/11745): Fix for password recovery error messages. Thank you [@web-fu](https://github.com/web-fu)


### Tests

* [#11776](https://github.com/PrestaShop/PrestaShop/pull/11776): Fix campaign full tests on develop branch. Thank you [@YosraAk](https://github.com/YosraAk)
* [#11800](https://github.com/PrestaShop/PrestaShop/pull/11800): Create, edit and delete feature. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)
* [#11804](https://github.com/PrestaShop/PrestaShop/pull/11804): Localization: local units and configuration. Thank you [@ansar21mallouli](https://github.com/ansar21mallouli)
* [#11891](https://github.com/PrestaShop/PrestaShop/pull/11891): Credit slip, credit slip pdf and credit slip options. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)
* [#11897](https://github.com/PrestaShop/PrestaShop/pull/11897): Generate invoice pdf by date and status. Thank you [@hadrich-hatem](https://github.com/hadrich-hatem)


### Web services

* [#11902](https://github.com/PrestaShop/PrestaShop/pull/11902): Fix #11840. Thank you [@DelecroixQuentin](https://github.com/DelecroixQuentin)


## Code changes in the '1.7.5.x' branch (for v1.7.5.0

### Core

* [#11814](https://github.com/PrestaShop/PrestaShop/pull/11814): Fix upgrade sql, by [@eternoendless](https://github.com/eternoendless)


## Code changes in modules, themes & tools


### Docker

* [#143](https://github.com/PrestaShop/docker/pull/143):  Add PrestaShop 1.6.1.23 & 1.7.4.4 images, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#144](https://github.com/PrestaShop/docker/pull/144): Add PrestaShop 1.7.5.0, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#145](https://github.com/PrestaShop/docker/pull/145): Change ownership of defines_custom.inc.php, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Google Sitemap

* [#77](https://github.com/PrestaShop/gsitemap/pull/77): Deploy v4.1.0 of gsitemap, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### GDPR

* [#21](https://github.com/PrestaShop/psgdpr/pull/21): Merging dev into master. Thank you [@Shiryu75](https://github.com/Shiryu75)
* [#22](https://github.com/PrestaShop/psgdpr/pull/22): Fix misspelled classname in upgrade. Thank you [@Matt75](https://github.com/Matt75)


### Catalog evaluation

* [#11](https://github.com/PrestaShop/statscheckup/pull/11): Deploy v2.0.1 of statscheckup, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Visitors online

* [#5](https://github.com/PrestaShop/statslive/pull/5): Fixed errors with backticks, by [@eternoendless](https://github.com/eternoendless)


### Main menu

* [#22](https://github.com/PrestaShop/ps_mainmenu/pull/22): Only compute once file list from the category image directory, by [@jocel1](https://github.com/jocel1)


## Changes in Documentation

* [#174](https://github.com/PrestaShop/docs/pull/174): Update modules creation page. Thank you [@alanablett](https://github.com/alanablett)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @alanablett, @ansar21mallouli, @Dan-Orchard, @DelecroixQuentin, @Fabuloops, @hadrich-hatem, @MathiasReker, @Matt75, @olivier-monaco, @sarjon, @Shiryu75, @web-fu, @YosraAk!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
