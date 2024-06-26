---
layout: post
aliases: ["/news/coreweekly-week-10-2020"]
title:  "PrestaShop Core Weekly - Week 10 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-03-09
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 2nd to Sunday 8th of March 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear Developers,

As announced last week, PrestaShop 1.7.6.4 is available. This maintenance and security release fixes 9 issues reported on versions 1.7.6.0 to 1.7.6.3 and fixes a critical security issue. Please [read the release note](https://build.prestashop.com/news/prestashop-1-7-6-4-maintenance-release/) for more informations.

You might have noticed that there is a lot of "waiting for QA" Pull Requests awaiting on GitHub. This is because QA team had to test the 1.7.6.4 build last week and is still battle-testing the 1.7.7.0 Alpha build. This huge work requires almost all available QA specialists. The test campaign should be finished this week which will then allow the flow of Pull Requests to go back to normal.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [86 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-03-02..2020-03-08) have been created in the project repositories;
- [47 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-03-02..2020-03-08), including [5 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-03-02..2020-03-08) on the core;
- [97 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-03-02..2020-03-08) in the project repositories;
- [67 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-03-02..2020-03-08), including [52 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-03-02..2020-03-08).


## Code changes in the 'develop' branch


### Core
* [#18017](https://github.com/PrestaShop/PrestaShop/pull/18017): Update Customer-> passwd phpdoc. Thank you [@zalexki](https://github.com/zalexki)
* [#16813](https://github.com/PrestaShop/PrestaShop/pull/16813): Add support for non-unity MySQL autoincrement. Thank you [@mvorisek](https://github.com/mvorisek)


### Back office
* [#18022](https://github.com/PrestaShop/PrestaShop/pull/18022): Remove useless spaces for Ceuta and Melilla, by [@LouiseBonnard](https://github.com/LouiseBonnard)


### Tests
* [#17777](https://github.com/PrestaShop/PrestaShop/pull/17777): Category update position test refactored to use generated position. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)


## Code changes in the '1.7.7.x' branch (for v1.7.7.0)


### Core
* [#17889](https://github.com/PrestaShop/PrestaShop/pull/17889): Add displayAdditionalCustomerAddressFields hook during update, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Tests
* [#18001](https://github.com/PrestaShop/PrestaShop/pull/18001): Functional tests - Refacto product settings default activation status. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17998](https://github.com/PrestaShop/PrestaShop/pull/17998): Functional tests - Refacto product settings force update friendly URL. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17997](https://github.com/PrestaShop/PrestaShop/pull/17997): Functional tests- Refacto product settings new days number. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17996](https://github.com/PrestaShop/PrestaShop/pull/17996): Functional tests - Refacto product settings catalog mode. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17989](https://github.com/PrestaShop/PrestaShop/pull/17989): Functional tests - Refacto product settings display remaining quantities. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17974](https://github.com/PrestaShop/PrestaShop/pull/17974): Functional tests - Refacto product settings display available quantities. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17960](https://github.com/PrestaShop/PrestaShop/pull/17960): Functional tests - Accept GDPR if only exist, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17948](https://github.com/PrestaShop/PrestaShop/pull/17948): Functional tests - Fix problem of generate files by date for nightly 29-02. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17910](https://github.com/PrestaShop/PrestaShop/pull/17910): Functional tests - Improving FO tests by adding wait for cart to disappear, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.6.x' branch (for v1.7.6.4)


### Core
* [#17931](https://github.com/PrestaShop/PrestaShop/pull/17931): Missing extends in the new ValueObject\Email class, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front office
* [#17457](https://github.com/PrestaShop/PrestaShop/pull/17457): Disable add-to-cart button when product/attribute combination is not available, by [@sowbiba](https://github.com/sowbiba)


## Code changes in modules, themes & tools


### Docker images
* [#212](https://github.com/PrestaShop/docker/pull/212): Fix use of version 1.7.6.4 in 1.7 tags, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#210](https://github.com/PrestaShop/docker/pull/210): Release 1.7.6.4, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#209](https://github.com/PrestaShop/docker/pull/209): Add beta image for PrestaShop 1.7.7.x on php 7.2. Thank you [@PoulainMaxime](https://github.com/PoulainMaxime)
* [#206](https://github.com/PrestaShop/docker/pull/206): Add php7.3 for nightly and 1.7, by [@PierreRambaud](https://github.com/PierreRambaud)


### Changes in developer documentation
* [#481](https://github.com/PrestaShop/docs/pull/481): Demo View Order hooks module - one more bug found and some docs added. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)
* [#475](https://github.com/PrestaShop/docs/pull/475): Remove unnecessary argument. Thank you [@Arman-Hosseini](https://github.com/Arman-Hosseini)
* [#469](https://github.com/PrestaShop/docs/pull/469): Add note about compiled assets, by [@eternoendless](https://github.com/eternoendless)
* [#460](https://github.com/PrestaShop/docs/pull/460): Fix admin parents structure. Thank you [@jorgevrgs](https://github.com/jorgevrgs)
* [#457](https://github.com/PrestaShop/docs/pull/457): Add note about tab_modules_list.xml. Thank you [@beuss](https://github.com/beuss)
* [#456](https://github.com/PrestaShop/docs/pull/456): Order view hooks demo documentation. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)


### Example modules
* [#14](https://github.com/PrestaShop/example-modules/pull/14): Sample of extended Repository usage including custom methods. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)
* [#13](https://github.com/PrestaShop/example-modules/pull/13): Autoloading issue for demovieworderhooks. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)
* [#12](https://github.com/PrestaShop/example-modules/pull/12): Solid changes to demovieworderhooks. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)
* [#11](https://github.com/PrestaShop/example-modules/pull/11): SOLID changes to demovieworderhooks module. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)
* [#10](https://github.com/PrestaShop/example-modules/pull/10): Use Order Bar Buttons hook, by [@matks](https://github.com/matks)
* [#6](https://github.com/PrestaShop/example-modules/pull/6): Improve main README and add demo order view module README, by [@matks](https://github.com/matks)
* [#1](https://github.com/PrestaShop/example-modules/pull/1): Demo 1.7.7.x module for new Order View page hooks. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)


### PHP Developer Tools
* [#21](https://github.com/PrestaShop/php-dev-tools/pull/21): add constant _MODULE_DIR_. Thank you [@zalexki](https://github.com/zalexki)
* [#20](https://github.com/PrestaShop/php-dev-tools/pull/20): Allow PhpStan config to be extended to make updates easier, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Classic-rocket theme
* [#139](https://github.com/PrestaShop/classic-rocket/pull/139): Add address alias field on checkout. Thank you [@micka-fdz](https://github.com/micka-fdz)


### Docker internal images
* [#31](https://github.com/PrestaShop/docker-internal-images/pull/31): Allow deployment of 1.7.7 shops, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Live demo devices
* [#14](https://github.com/PrestaShop/live-demo-devices/pull/14): Add id showcased module param. Thank you [@zalexki](https://github.com/zalexki)
* [#13](https://github.com/PrestaShop/live-demo-devices/pull/13): Fix report from lighthouse, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### QA nightly results
* [#22](https://github.com/PrestaShop/QANightlyResults/pull/22): Remove unused method, add things in README, by [@SimonGrn](https://github.com/SimonGrn)
* [#21](https://github.com/PrestaShop/QANightlyResults/pull/21): New version in Slim Framework V4, by [@SimonGrn](https://github.com/SimonGrn)
* [#20](https://github.com/PrestaShop/QANightlyResults/pull/20): Merge last modifications, by [@SimonGrn](https://github.com/SimonGrn)


### PHP PS Informations
* [#9](https://github.com/PrestaShop/php-ps-info/pull/9): Update minimum PHP version and recommended one, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#8](https://github.com/PrestaShop/php-ps-info/pull/8): Check for iconv support, by [@PierreRambaud](https://github.com/PierreRambaud)


### Statslive module
* [#7](https://github.com/PrestaShop/statslive/pull/7): Bump version to 2.1.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### TranslationTools Bundle
* [#74](https://github.com/PrestaShop/TranslationToolsBundle/pull/74): Bump symfony/cache from 4.2.8 to 4.3.11. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### MJML theme converter
* [#2](https://github.com/PrestaShop/mjml-theme-converter/pull/2): Bump symfony/symfony from 3.4.23 to 3.4.26. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Google Analytics module
* [#28](https://github.com/PrestaShop/ps_googleanalytics/pull/28): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#19](https://github.com/PrestaShop/ps_googleanalytics/pull/19): No alias functions. Thank you [@MathiasReker](https://github.com/MathiasReker)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@LouiseBonnard](https://github.com/LouiseBonnard), [@tdavidsonas88](https://github.com/tdavidsonas88), [@zalexki](https://github.com/zalexki), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@micka-fdz](https://github.com/micka-fdz), [@matthieu-rolland](https://github.com/matthieu-rolland), [@SimonGrn](https://github.com/SimonGrn), [@PoulainMaxime](https://github.com/PoulainMaxime), [@boubkerbribri](https://github.com/boubkerbribri), [@matks](https://github.com/matks), [@PierreRambaud](https://github.com/PierreRambaud), [@Arman-Hosseini](https://github.com/Arman-Hosseini), [@eternoendless](https://github.com/eternoendless), [@jorgevrgs](https://github.com/jorgevrgs), [@dependabot[bot]](https://github.com/apps/dependabot), [@beuss](https://github.com/beuss), [@sowbiba](https://github.com/sowbiba), [@mvorisek](https://github.com/mvorisek), [@MathiasReker](https://github.com/MathiasReker)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

