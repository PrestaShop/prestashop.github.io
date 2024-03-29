---
layout: post
aliases: ["/news/coreweekly-16-2020"]
title:  "PrestaShop Core Weekly - Week 16 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-04-21
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 13th to Sunday 19th of April 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

[PrestaShop 1.7.6.5](https://build.prestashop.com/news/prestashop-1-7-6-5-maintenance-release/) has been released yesterday.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [76 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-04-13..2020-04-19) have been created in the project repositories;
- [66 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-04-13..2020-04-19), including [10 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-04-13..2020-04-19) on the core;
- [74 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-04-13..2020-04-19) in the project repositories;
- [66 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-04-13..2020-04-19), including [61 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-04-13..2020-04-19).
        


## Code changes in the 'develop' branch


### Core
* [#18680](https://github.com/PrestaShop/PrestaShop/pull/18680): Add array in @return of PaymentModule::getCurrency, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#18632](https://github.com/PrestaShop/PrestaShop/pull/18632): Fix php-cs-fixer, by [@matks](https://github.com/matks)
* [#18425](https://github.com/PrestaShop/PrestaShop/pull/18425): Fix minor code issues. Thank you [@PululuK](https://github.com/PululuK)
* [#18220](https://github.com/PrestaShop/PrestaShop/pull/18220): Add phpdoc for PDF classes, by [@Matt75](https://github.com/Matt75)
* [#18125](https://github.com/PrestaShop/PrestaShop/pull/18125): Add missing entities in template inheritance. Thank you [@glafarge](https://github.com/glafarge)


### Back office
* [#18628](https://github.com/PrestaShop/PrestaShop/pull/18628): Remove duplicate attributes. Thank you [@PululuK](https://github.com/PululuK)
* [#18554](https://github.com/PrestaShop/PrestaShop/pull/18554): Fix init method not existing in module_card, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#18095](https://github.com/PrestaShop/PrestaShop/pull/18095): Paste product combination tokens and highlight invalid tokens. Thank you [@MarkALeonard](https://github.com/MarkALeonard)


### Installer
* [#17979](https://github.com/PrestaShop/PrestaShop/pull/17979): Minor optimization when installing a language, by [@eternoendless](https://github.com/eternoendless)


### Merge
* [#18678](https://github.com/PrestaShop/PrestaShop/pull/18678): Merge branch "1.7.7.x" into "develop", by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in the '1.7.7.x' branch


### Core
* [#18564](https://github.com/PrestaShop/PrestaShop/pull/18564): Refactoring using OrderAmountUpdater, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#18641](https://github.com/PrestaShop/PrestaShop/pull/18641): Show confirmation modal before deleting order messages. Thank you [@zuk3975](https://github.com/zuk3975)
* [#18348](https://github.com/PrestaShop/PrestaShop/pull/18348): Cart products update, by [@jolelievre](https://github.com/jolelievre)


### Tests
* [#18688](https://github.com/PrestaShop/PrestaShop/pull/18688): Update README files for tests directory, by [@SimonGrn](https://github.com/SimonGrn)
* [#18682](https://github.com/PrestaShop/PrestaShop/pull/18682): Functional tests - Fix wrong import for tests modules, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18677](https://github.com/PrestaShop/PrestaShop/pull/18677): Functional tests - Fix call for module, by [@SimonGrn](https://github.com/SimonGrn)
* [#18670](https://github.com/PrestaShop/PrestaShop/pull/18670): Fix tests that are always green when the shop is broken. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18669](https://github.com/PrestaShop/PrestaShop/pull/18669): Functional tests - Add delete modal to test bulk delete order messages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18662](https://github.com/PrestaShop/PrestaShop/pull/18662): Functional tests - Fix customer creation in BO, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18639](https://github.com/PrestaShop/PrestaShop/pull/18639): Functional tests - Moving FO pages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18631](https://github.com/PrestaShop/PrestaShop/pull/18631): Functional tests - Refacto orders and invoices tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18621](https://github.com/PrestaShop/PrestaShop/pull/18621): Functional tests - Add test 'Update default products order', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18616](https://github.com/PrestaShop/PrestaShop/pull/18616): Functional tests - Add test download sample files for import, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18577](https://github.com/PrestaShop/PrestaShop/pull/18577): Functional tests - Update some tests titles, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18207](https://github.com/PrestaShop/PrestaShop/pull/18207): Functional tests - Product settings enable/disable display discounted price. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


### Merge
* [#18671](https://github.com/PrestaShop/PrestaShop/pull/18671): Merge 1.7.6.x branch into 1.7.7.x, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in the '1.7.6.x' branch


### Core
* [#18659](https://github.com/PrestaShop/PrestaShop/pull/18659): Changelog for 1.7.6.5, by [@sowbiba](https://github.com/sowbiba)
* [#18651](https://github.com/PrestaShop/PrestaShop/pull/18651): Update dependencies for security reasons, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#18638](https://github.com/PrestaShop/PrestaShop/pull/18638): Update version to 1.7.6.5, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#18637](https://github.com/PrestaShop/PrestaShop/pull/18637): Fix sidebar not displayed in BO Add employee page, by [@Progi1984](https://github.com/Progi1984)
* [#18607](https://github.com/PrestaShop/PrestaShop/pull/18607): Fix wrong number of "Last emails" in BO - Customer View page. Thank you [@PululuK](https://github.com/PululuK)


### Front office
* [#18633](https://github.com/PrestaShop/PrestaShop/pull/18633): Convert cart rule value when order currency is different, by [@sowbiba](https://github.com/sowbiba)


## Code changes in modules, themes & tools


### QA nightly results
* [#35](https://github.com/PrestaShop/QANightlyResults/pull/35): refactoring and adding brwoser and campaign data everywhere, by [@SimonGrn](https://github.com/SimonGrn)
* [#32](https://github.com/PrestaShop/QANightlyResults/pull/32): Update version, by [@SimonGrn](https://github.com/SimonGrn)
* [#31](https://github.com/PrestaShop/QANightlyResults/pull/31): Develop, by [@SimonGrn](https://github.com/SimonGrn)
* [#30](https://github.com/PrestaShop/QANightlyResults/pull/30): better handling of GCPURL, by [@SimonGrn](https://github.com/SimonGrn)
* [#29](https://github.com/PrestaShop/QANightlyResults/pull/29): add GCPURL in vhost example file, by [@SimonGrn](https://github.com/SimonGrn)
* [#28](https://github.com/PrestaShop/QANightlyResults/pull/28): add default value for GCPURL, by [@SimonGrn](https://github.com/SimonGrn)
* [#27](https://github.com/PrestaShop/QANightlyResults/pull/27): add info about composer in readme, by [@SimonGrn](https://github.com/SimonGrn)


### nightly-board
* [#21](https://github.com/PrestaShop/nightly-board/pull/21): Update README.md, by [@SimonGrn](https://github.com/SimonGrn)
* [#17](https://github.com/PrestaShop/nightly-board/pull/17): Remove unused console log, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#16](https://github.com/PrestaShop/nightly-board/pull/16): Fix some bugs on suites, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#15](https://github.com/PrestaShop/nightly-board/pull/15): Set passed toggle to fault by default and adjust loaders, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#14](https://github.com/PrestaShop/nightly-board/pull/14): Revert test CI, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#13](https://github.com/PrestaShop/nightly-board/pull/13): Test CI, by [@NeOMakinG](https://github.com/NeOMakinG)


### Docker images
* [#217](https://github.com/PrestaShop/docker/pull/217): Remove useless file, by [@PierreRambaud](https://github.com/PierreRambaud)


### Social Follow module
* [#19](https://github.com/PrestaShop/ps_socialfollow/pull/19): Release 2.1.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### Link list
* [#85](https://github.com/PrestaShop/ps_linklist/pull/85): Merge dev to master to update composer.json file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#84](https://github.com/PrestaShop/ps_linklist/pull/84): Remove useless line in the composer.json, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#83](https://github.com/PrestaShop/ps_linklist/pull/83): Release 3.1.0, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#82](https://github.com/PrestaShop/ps_linklist/pull/82): Update version to 3.1.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### Decimal
* [#7](https://github.com/PrestaShop/decimal/pull/7): Add shortcuts for comparison with zero, by [@eternoendless](https://github.com/eternoendless)


### Google Sitemap module
* [#134](https://github.com/PrestaShop/gsitemap/pull/134): Fixed the display & behavior for "Uncheck/Check All" button, by [@Progi1984](https://github.com/Progi1984)
* [#104](https://github.com/PrestaShop/gsitemap/pull/104): Change include init.php place. Thank you [@arthtux](https://github.com/arthtux)


### Visitors online
* [#11](https://github.com/PrestaShop/statslive/pull/11): Quick fix to prevent generated SQL queries to throw an Exception when trying to access online customers and visitors stats when having IPv6 addresses whitelisted in maintenance mode. Thank you [@jevarg](https://github.com/jevarg)


### Example modules
* [#19](https://github.com/PrestaShop/example-modules/pull/19): Improve code structure and fix php-cs-fixer. Thank you [@PululuK](https://github.com/PululuK)


### Changes in developer documentation
* [#476](https://github.com/PrestaShop/docs/pull/476): Extending Symfony form with upload image field tutorial. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)


### Issue Bot
* [#4](https://github.com/PrestaShop/issuebot/pull/4): Update app and issues workflow, by [@sowbiba](https://github.com/sowbiba)


### mjml-theme-converter
* [#3](https://github.com/PrestaShop/mjml-theme-converter/pull/3): Bump symfony/phpunit-bridge from 3.4.23 to 3.4.26. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@SimonGrn](https://github.com/SimonGrn), [@boubkerbribri](https://github.com/boubkerbribri), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@PierreRambaud](https://github.com/PierreRambaud), [@NeOMakinG](https://github.com/NeOMakinG), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@sowbiba](https://github.com/sowbiba), [@jolelievre](https://github.com/jolelievre), [@zuk3975](https://github.com/zuk3975), [@Progi1984](https://github.com/Progi1984), [@matks](https://github.com/matks), [@PululuK](https://github.com/PululuK), [@eternoendless](https://github.com/eternoendless), [@jevarg](https://github.com/jevarg), [@Matt75](https://github.com/Matt75), [@glafarge](https://github.com/glafarge), [@MarkALeonard](https://github.com/MarkALeonard), [@tdavidsonas88](https://github.com/tdavidsonas88), [@dependabot[bot]](https://github.com/apps/dependabot), [@ziegenberg](https://github.com/ziegenberg), [@arthtux](https://github.com/arthtux)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
