---
layout: post
aliases: ["/news/coreweekly-18-2022"]
title:  "PrestaShop Core Weekly - Week 18 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-05-11
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 2nd to Sunday 8th of May 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

This week begins with very interesting news!

First, [@Hlavtox](https://github.com/Hlavtox) has accepted the maintainer offer and joined us as [scoped maintainer](https://www.prestashop-project.org/maintainers-guide/project-organization/) for Classic and Hummingbird themes! This is a first for the project, big thanks for joining the team Daniel!

Second, PrestaShop [1.7.8.6](https://github.com/PrestaShop/PrestaShop/issues/27973) release moved to Validation stage. For three weeks the maintainers team have been exploring and fixing multiple issues to build this stable patch version. We have high hopes that this patch version filled with very nice bug fixes will be delivered soon!

Finally, [committer role](https://github.com/PrestaShop/open-source/pull/79) was introduced to the project. This is a new role similar to maintainer, that should allow contributors willing to help reviewing and triaging contributions, to join the group effort.


## Releases

* [Ps_wirepayment](https://github.com/PrestaShop/ps_wirepayment) module: [v2.1.2](https://github.com/PrestaShop/ps_wirepayment/releases/tag/v2.1.2)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [53 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-05-02..2022-05-08) have been created in the project repositories;
- [67 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-05-02..2022-05-08), including [17 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-05-02..2022-05-08) on the core;
- [64 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-05-02..2022-05-08) in the project repositories;
- [82 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-05-02..2022-05-08), including [68 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-05-02..2022-05-08).
        


## Code changes in the 'develop' branch


### Core
* [#28358](https://github.com/PrestaShop/PrestaShop/pull/28358): Avoid ` ConnectException` check Webservice Endpoint. Thank you [@PululuK](https://github.com/PululuK)
* [#28310](https://github.com/PrestaShop/PrestaShop/pull/28310): Validate by github action if phpunit tests don't change repos state. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#28290](https://github.com/PrestaShop/PrestaShop/pull/28290): Add product property `manufacturer_name`. Thank you [@PululuK](https://github.com/PululuK)
* [#28103](https://github.com/PrestaShop/PrestaShop/pull/28103): Fixed profiler in PHP8.0 in migrated page, by [@Progi1984](https://github.com/Progi1984)
* [#27683](https://github.com/PrestaShop/PrestaShop/pull/27683): Add a warning log when a module registers to a hook but implements no hook listener, by [@Progi1984](https://github.com/Progi1984)
* [#27485](https://github.com/PrestaShop/PrestaShop/pull/27485): Add hook to allow adding buttons to modules catalogue toolbar, by [@sowbiba](https://github.com/sowbiba)
* [#27227](https://github.com/PrestaShop/PrestaShop/pull/27227): Don't reassign global vars in front controller. Thank you [@PululuK](https://github.com/PululuK)


### Back office
* [#28380](https://github.com/PrestaShop/PrestaShop/pull/28380): Add module ps_distributionapiclient, by [@atomiix](https://github.com/atomiix)
* [#28375](https://github.com/PrestaShop/PrestaShop/pull/28375): Add reset button to reset category filter in products list. Thank you [@marsaldev](https://github.com/marsaldev)
* [#28359](https://github.com/PrestaShop/PrestaShop/pull/28359): Bulk delete combinations. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28332](https://github.com/PrestaShop/PrestaShop/pull/28332): Module manager : Restore modules actions order, by [@sowbiba](https://github.com/sowbiba)
* [#28328](https://github.com/PrestaShop/PrestaShop/pull/28328): Catalog rules: don't display the shop column if there is only one shop, by [@kpodemski](https://github.com/kpodemski)
* [#28318](https://github.com/PrestaShop/PrestaShop/pull/28318): Extra message to display for an empty modules category, by [@sowbiba](https://github.com/sowbiba)
* [#28307](https://github.com/PrestaShop/PrestaShop/pull/28307): Fixed the position of the selection card, by [@Progi1984](https://github.com/Progi1984)
* [#28226](https://github.com/PrestaShop/PrestaShop/pull/28226): Fix notifications color contrast on module manager page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#28153](https://github.com/PrestaShop/PrestaShop/pull/28153): Fix cart rule shop association. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#28068](https://github.com/PrestaShop/PrestaShop/pull/28068): Specific Price Form : Changing currency change the symbol, by [@Progi1984](https://github.com/Progi1984)
* [#28066](https://github.com/PrestaShop/PrestaShop/pull/28066): add select2 in large select options. Thank you [@PululuK](https://github.com/PululuK)
* [#27892](https://github.com/PrestaShop/PrestaShop/pull/27892): Simplify Product Preferences Form, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#28297](https://github.com/PrestaShop/PrestaShop/pull/28297): FO: Add page number in meta titles for new-products, best-sales, prices-drop. Thank you [@Amazzing](https://github.com/Amazzing)
* [#27803](https://github.com/PrestaShop/PrestaShop/pull/27803): No more auto created carts on login.. Thank you [@Prestaworks](https://github.com/Prestaworks)


### Tests
* [#28437](https://github.com/PrestaShop/PrestaShop/pull/28437): Functional tests - Delete close onboarding method. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28423](https://github.com/PrestaShop/PrestaShop/pull/28423): Functional tests - Add test to create and import csv file of addresses. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28414](https://github.com/PrestaShop/PrestaShop/pull/28414): Fix nightly 04/05/2022. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28412](https://github.com/PrestaShop/PrestaShop/pull/28412): Remove useless PrestaShop install, by [@atomiix](https://github.com/atomiix)
* [#28399](https://github.com/PrestaShop/PrestaShop/pull/28399): Fix Nightly 03/05/2022 - Fix export customer test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28370](https://github.com/PrestaShop/PrestaShop/pull/28370): Functional tests - Add test 'Pagination of orders table'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28340](https://github.com/PrestaShop/PrestaShop/pull/28340): Functional tests - Add new test 'Bulk open in new tab'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Core
* [#28362](https://github.com/PrestaShop/PrestaShop/pull/28362): Request prestashop/blockreassurance 5.1.0 for 1.7.8.6, by [@matks](https://github.com/matks)


## Code changes in modules, themes & tools


### Cross-selling module
* [#35](https://github.com/PrestaShop/ps_crossselling/pull/35): Bump to 2.0.2, by [@matks](https://github.com/matks)
* [#25](https://github.com/PrestaShop/ps_crossselling/pull/25): Improve performance on large shops. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Hummingbird theme
* [#265](https://github.com/PrestaShop/hummingbird/pull/265): Improve readme files, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#263](https://github.com/PrestaShop/hummingbird/pull/263): Replace license headers to small ones, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#260](https://github.com/PrestaShop/hummingbird/pull/260): Add useProgress tests, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#259](https://github.com/PrestaShop/hummingbird/pull/259): Fix a11y for header elements. Thank you [@mparvazi](https://github.com/mparvazi)
* [#258](https://github.com/PrestaShop/hummingbird/pull/258): Ps mainmenu. Thank you [@rodriciru](https://github.com/rodriciru)
* [#249](https://github.com/PrestaShop/hummingbird/pull/249): Deliver develop to master, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#243](https://github.com/PrestaShop/hummingbird/pull/243): Fix typographic base for BS. Thank you [@mparvazi](https://github.com/mparvazi)
* [#242](https://github.com/PrestaShop/hummingbird/pull/242): Add header BG customization. Thank you [@rodriciru](https://github.com/rodriciru)
* [#238](https://github.com/PrestaShop/hummingbird/pull/238): Fix various behaviors and implement facetedsearch/category page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#221](https://github.com/PrestaShop/hummingbird/pull/221): Improve useProgressRing. Thank you [@mparvazi](https://github.com/mparvazi)


### Distribution API
* [#13](https://github.com/PrestaShop/distribution-api/pull/13): Use PrestaShop's native-modules repository, by [@atomiix](https://github.com/atomiix)
* [#12](https://github.com/PrestaShop/distribution-api/pull/12): feat: CI/CD workflow build and publish cloud dockerfile. Thank you [@MaxencePerrinPrestashop](https://github.com/MaxencePerrinPrestashop)


### Wire payment module
* [#74](https://github.com/PrestaShop/ps_wirepayment/pull/74): Bump version to 2.1.3, by [@atomiix](https://github.com/atomiix)
* [#73](https://github.com/PrestaShop/ps_wirepayment/pull/73): Fix deprecated message with PHP 8.1, by [@atomiix](https://github.com/atomiix)
* [#72](https://github.com/PrestaShop/ps_wirepayment/pull/72): Release 2.1.2, by [@atomiix](https://github.com/atomiix)


### stylelint configuration
* [#34](https://github.com/PrestaShop/stylelint-config/pull/34): Bump stylelint from 14.8.1 to 14.8.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#33](https://github.com/PrestaShop/stylelint-config/pull/33): Bump stylelint from 14.8.0 to 14.8.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation sources
* [#1372](https://github.com/PrestaShop/docs/pull/1372): Add hugo doc about moving pages, by [@matks](https://github.com/matks)


### PrestaShop Project Metrics
* [#38](https://github.com/PrestaShop/ps-project-metrics/pull/38): Update maintainers, by [@Progi1984](https://github.com/Progi1984)


### Classic theme
* [#28](https://github.com/PrestaShop/classic-theme/pull/28): Set default id_customization before escaping, by [@atomiix](https://github.com/atomiix)
* [#27](https://github.com/PrestaShop/classic-theme/pull/27): Related fix for PrestaShop/ps_imageslider#74. Thank you [@marsaldev](https://github.com/marsaldev)


### Customer reassurance block module
* [#397](https://github.com/PrestaShop/blockreassurance/pull/397): Bump @babel/core from 7.17.9 to 7.17.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#395](https://github.com/PrestaShop/blockreassurance/pull/395): Use arrow function for back/index.js, by [@matks](https://github.com/matks)


### Faceted search module
* [#654](https://github.com/PrestaShop/ps_facetedsearch/pull/654): Bump mocha from 9.2.2 to 10.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#653](https://github.com/PrestaShop/ps_facetedsearch/pull/653): Bump @babel/node from 7.16.8 to 7.17.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#652](https://github.com/PrestaShop/ps_facetedsearch/pull/652): Bump @babel/cli from 7.17.6 to 7.17.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#651](https://github.com/PrestaShop/ps_facetedsearch/pull/651): Bump @babel/core from 7.17.9 to 7.17.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#650](https://github.com/PrestaShop/ps_facetedsearch/pull/650): Bump @babel/preset-env from 7.16.11 to 7.17.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Example modules
* [#95](https://github.com/PrestaShop/example-modules/pull/95): Bump async from 2.6.3 to 2.6.4 in /demodoctrine/js. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Image slider module
* [#74](https://github.com/PrestaShop/ps_imageslider/pull/74): Allow empty url - Fix PrestaShop/PrestaShop#18536. Thank you [@marsaldev](https://github.com/marsaldev)


### Core Weekly Generator tool
* [#122](https://github.com/PrestaShop/core-weekly-generator/pull/122): Bump async from 2.6.3 to 2.6.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#482](https://github.com/PrestaShop/autoupgrade/pull/482): File modulesToUpgrade.list doesn't need to be manually deleted anymore, by [@atomiix](https://github.com/atomiix)


### The PrestaShop open source project
* [#91](https://github.com/PrestaShop/open-source/pull/91): Add link to thislg/local-php-security-checker-installer, by [@matks](https://github.com/matks)


### Email Alerts module
* [#113](https://github.com/PrestaShop/ps_emailalerts/pull/113): Display an info alert if the customer has already subscribed.. Thank you [@lmeyer1](https://github.com/lmeyer1)


### Check payment module
* [#57](https://github.com/PrestaShop/ps_checkpayment/pull/57): Clean legacy status check and template. Thank you [@Hlavtox](https://github.com/Hlavtox)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@tegbessou](https://github.com/tegbessou), [@matks](https://github.com/matks), [@NeOMakinG](https://github.com/NeOMakinG), [@atomiix](https://github.com/atomiix), [@dependabot[bot]](https://github.com/apps/dependabot), [@mparvazi](https://github.com/mparvazi), [@rodriciru](https://github.com/rodriciru), [@Progi1984](https://github.com/Progi1984), [@jolelievre](https://github.com/jolelievre), [@marsaldev](https://github.com/marsaldev), [@zuk3975](https://github.com/zuk3975), [@PululuK](https://github.com/PululuK), [@MaxencePerrinPrestashop](https://github.com/MaxencePerrinPrestashop), [@sowbiba](https://github.com/sowbiba), [@kpodemski](https://github.com/kpodemski), [@MeKeyCool](https://github.com/MeKeyCool), [@Amazzing](https://github.com/Amazzing), [@lmeyer1](https://github.com/lmeyer1), [@Prestaworks](https://github.com/Prestaworks), [@Hlavtox](https://github.com/Hlavtox), [@jf-viguier](https://github.com/jf-viguier)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

