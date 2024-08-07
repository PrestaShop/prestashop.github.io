---
layout: post
aliases: ["/news/coreweekly-37-2020"]
title:  "PrestaShop Core Weekly - Week 37 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-09-14
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 7th to Sunday 13th of September 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## Releases

* [Ps_facetedsearch](https://github.com/PrestaShop/ps_facetedsearch): [v3.6.0](https://github.com/PrestaShop/ps_facetedsearch/releases/tag/v3.6.0)
* [Php-dev-tools](https://github.com/PrestaShop/php-dev-tools): [v3.9](https://github.com/PrestaShop/php-dev-tools/releases/tag/v3.9)
* [Github-webhook-parser](https://github.com/PrestaShop/github-webhook-parser): [v0.1.0](https://github.com/PrestaShop/github-webhook-parser/releases/tag/0.1.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [59 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-09-07..2020-09-13) have been created in the project repositories;
- [51 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-09-07..2020-09-13), including [9 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-09-07..2020-09-13) on the core;
- [78 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-09-07..2020-09-13) in the project repositories;
- [82 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-09-07..2020-09-13), including [74 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-09-07..2020-09-13).



## Code changes in the 'develop' branch


### Core
* [#20905](https://github.com/PrestaShop/PrestaShop/pull/20905): The correct instance type of the created Order. Thank you [@Seleda](https://github.com/Seleda)
* [#20888](https://github.com/PrestaShop/PrestaShop/pull/20888): Tax and tax name are not recorded. Thank you [@dariusakafest](https://github.com/dariusakafest)
* [#20866](https://github.com/PrestaShop/PrestaShop/pull/20866): Remove $response variable re-declaration. Thank you [@davidglezz](https://github.com/davidglezz)
* [#20601](https://github.com/PrestaShop/PrestaShop/pull/20601): Allow admin user to configure the SameSite cookie attribute, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#20799](https://github.com/PrestaShop/PrestaShop/pull/20799): Modify discounts listing in Customer page to use Grid - Delete modal, by [@sowbiba](https://github.com/sowbiba)
* [#20591](https://github.com/PrestaShop/PrestaShop/pull/20591): Introduce Javascript component loading through window.prestashop (part1). Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#20508](https://github.com/PrestaShop/PrestaShop/pull/20508): Fix FormSubmitButton method. Thank you [@davidglezz](https://github.com/davidglezz)
* [#20320](https://github.com/PrestaShop/PrestaShop/pull/20320): Fixed alert system failing when the $error variable is malformed. Thank you [@jimmydupre](https://github.com/jimmydupre)
* [#20200](https://github.com/PrestaShop/PrestaShop/pull/20200): Use ChoiceType in Log severity column filter. Thank you [@PululuK](https://github.com/PululuK)


### Front office
* [#20909](https://github.com/PrestaShop/PrestaShop/pull/20909): Cleaner way to have highlighted text on invalid address. Thank you [@kpodemski](https://github.com/kpodemski)
* [#20811](https://github.com/PrestaShop/PrestaShop/pull/20811): Bump elliptic from 6.4.1 to 6.5.3 in /themes. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#20616](https://github.com/PrestaShop/PrestaShop/pull/20616): Set secure_key in invoice links for guests. Thank you [@JoshTheDerf](https://github.com/JoshTheDerf)


### Installer
* [#19850](https://github.com/PrestaShop/PrestaShop/pull/19850): Remove Escape percentage in parameters, by [@Progi1984](https://github.com/Progi1984)


### Tests
* [#20938](https://github.com/PrestaShop/PrestaShop/pull/20938): Use make assets before installing prestashop in travis ci, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#20810](https://github.com/PrestaShop/PrestaShop/pull/20810): Bump lodash from 4.17.15 to 4.17.20 in /tests/UI. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Merge
* [#20939](https://github.com/PrestaShop/PrestaShop/pull/20939): Merge 177x into develop 08/09/2020, by [@jolelievre](https://github.com/jolelievre)


## Code changes in the '1.7.7.x' branch


### Back office
* [#20906](https://github.com/PrestaShop/PrestaShop/pull/20906): Duplicate product in order invoices, by [@jolelievre](https://github.com/jolelievre)


### Front office
* [#20920](https://github.com/PrestaShop/PrestaShop/pull/20920): Fix jquery migrate being loaded two times in FO, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Tests
* [#20922](https://github.com/PrestaShop/PrestaShop/pull/20922): Add test 'CRUD states', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20919](https://github.com/PrestaShop/PrestaShop/pull/20919): Add test 'Bulk actions zones', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20913](https://github.com/PrestaShop/PrestaShop/pull/20913): Avoid creating the same name for different values using faker, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20899](https://github.com/PrestaShop/PrestaShop/pull/20899): Add test 'CRUD Zone', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20896](https://github.com/PrestaShop/PrestaShop/pull/20896): Add test 'Filter and quick edit states', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20883](https://github.com/PrestaShop/PrestaShop/pull/20883): Fix duplicates steps identifiers in UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20881](https://github.com/PrestaShop/PrestaShop/pull/20881): Add test 'Filter and quick edit countries', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20876](https://github.com/PrestaShop/PrestaShop/pull/20876): Add test 'Filter and quick edit zone', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20873](https://github.com/PrestaShop/PrestaShop/pull/20873): Improve pagination on customers test, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#20859](https://github.com/PrestaShop/PrestaShop/pull/20859): Add test 'CRUD tax Rule'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#20831](https://github.com/PrestaShop/PrestaShop/pull/20831): Add test 'CRUD country'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#725](https://github.com/PrestaShop/docs/pull/725): writing mistake. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#724](https://github.com/PrestaShop/docs/pull/724): variable name correction. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#721](https://github.com/PrestaShop/docs/pull/721): writing mistake. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#720](https://github.com/PrestaShop/docs/pull/720): writing mistake. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#719](https://github.com/PrestaShop/docs/pull/719): writing mistake. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#718](https://github.com/PrestaShop/docs/pull/718): Fix class name ChoiceCategoriesTreeType. Thank you [@LukaS0lncev](https://github.com/LukaS0lncev)
* [#717](https://github.com/PrestaShop/docs/pull/717): Fix Twitter meta image URL path, by [@matks](https://github.com/matks)
* [#714](https://github.com/PrestaShop/docs/pull/714): describe the correct template type. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#713](https://github.com/PrestaShop/docs/pull/713): Wrong title for image in money with suffix. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#712](https://github.com/PrestaShop/docs/pull/712): Method called twice in filter type reference page. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#711](https://github.com/PrestaShop/docs/pull/711): Correct the SubmitBulkAction name. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#710](https://github.com/PrestaShop/docs/pull/710): Replace AbstractBulkAction by AbstractGridAction. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#709](https://github.com/PrestaShop/docs/pull/709): Correction of subscribe newsletter row action. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#708](https://github.com/PrestaShop/docs/pull/708): Method called twice in work with search form page. Thank you [@moncef-essid](https://github.com/moncef-essid)
* [#707](https://github.com/PrestaShop/docs/pull/707): Reorganize Architecture summary, by [@matks](https://github.com/matks)


### Example modules
* [#26](https://github.com/PrestaShop/example-modules/pull/26): Add missing gitignore, by [@matks](https://github.com/matks)


### Dashboard Trends module
* [#33](https://github.com/PrestaShop/dashtrends/pull/33): Improve project, by [@Progi1984](https://github.com/Progi1984)


### PrestonBot
* [#104](https://github.com/PrestaShop/prestonbot/pull/104): Do not add Waiting for wording when already validated & fix PR validation comment being wrongly removed, by [@atomiix](https://github.com/atomiix)
* [#103](https://github.com/PrestaShop/prestonbot/pull/103): Use prestashop/github-webhook-parser, by [@atomiix](https://github.com/atomiix)
* [#102](https://github.com/PrestaShop/prestonbot/pull/102): Link wording to the right diff file and line, by [@atomiix](https://github.com/atomiix)


### PrestaShop contributors website
* [#21](https://github.com/PrestaShop/TopContributors/pull/21): Bump http-proxy from 1.17.0 to 1.18.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#20](https://github.com/PrestaShop/TopContributors/pull/20): Bump node-sass from 4.9.2 to 4.13.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#19](https://github.com/PrestaShop/TopContributors/pull/19): Bump bootstrap from 4.1.3 to 4.3.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### The PrestaShop open source project
* [#40](https://github.com/PrestaShop/open-source/pull/40): Fix small mistake into README, by [@SimonGrn](https://github.com/SimonGrn)


### Faceted search module
* [#210](https://github.com/PrestaShop/ps_facetedsearch/pull/210): Bump css-loader from 4.2.2 to 4.3.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#209](https://github.com/PrestaShop/ps_facetedsearch/pull/209): Bump mini-css-extract-plugin from 0.11.0 to 0.11.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#208](https://github.com/PrestaShop/ps_facetedsearch/pull/208): Bump sass-loader from 7.3.1 to 10.0.2. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#207](https://github.com/PrestaShop/ps_facetedsearch/pull/207): Bump mini-css-extract-plugin from 0.9.0 to 0.11.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#206](https://github.com/PrestaShop/ps_facetedsearch/pull/206): Allow customization of parts of the search without total rewrite. Thank you [@jbenezech](https://github.com/jbenezech)
* [#205](https://github.com/PrestaShop/ps_facetedsearch/pull/205): Release 3.6.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### Example module mailtheme
* [#11](https://github.com/PrestaShop/example_module_mailtheme/pull/11): Bump http-proxy from 1.17.0 to 1.18.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#10](https://github.com/PrestaShop/example_module_mailtheme/pull/10): Bump node-sass from 4.12.0 to 4.13.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Order Notifications on the Favicon module
* [#21](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/21): Bump prestashop/php-dev-tools from 3.8 to 3.9. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Core Weekly Generator tool
* [#47](https://github.com/PrestaShop/core-weekly-generator/pull/47): Bump http-proxy from 1.18.0 to 1.18.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#46](https://github.com/PrestaShop/core-weekly-generator/pull/46): Bump @hapi/hoek from 8.3.2 to 8.5.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#45](https://github.com/PrestaShop/core-weekly-generator/pull/45): Bump node-sass from 4.12.0 to 4.13.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Issues Bot
* [#8](https://github.com/PrestaShop/issuebot/pull/8): Bump yargs-parser from 13.1.1 to 13.1.2. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### PHP Developer Tools
* [#35](https://github.com/PrestaShop/php-dev-tools/pull/35): Add a stub for module class, allowing developers to not redefine properies in all modules, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Check payment module
* [#37](https://github.com/PrestaShop/ps_checkpayment/pull/37): Added Github Actions, composer.lock & Renamed README.md, by [@Progi1984](https://github.com/Progi1984)


### Buy button lite module
* [#38](https://github.com/PrestaShop/ps_buybuttonlite/pull/38): Bump lodash.defaultsdeep from 4.6.0 to 4.6.1 in /app. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Prestashop UI Kit
* [#105](https://github.com/PrestaShop/prestashop-ui-kit/pull/105): Bump node-sass from 4.13.0 to 4.13.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Docker images
* [#226](https://github.com/PrestaShop/docker/pull/226): Add missing versions, use proper php version and add erase / install database parameters, by [@PierreRambaud](https://github.com/PierreRambaud)


### Customer reassurance block module
* [#57](https://github.com/PrestaShop/blockreassurance/pull/57): SVG Upload fix. Thank you [@antoninblasco](https://github.com/antoninblasco)


### Shopping cart module
* [#66](https://github.com/PrestaShop/ps_shoppingcart/pull/66): Added workflows for PHPStan, PHPCS, Build Release, by [@Progi1984](https://github.com/Progi1984)


### Custom text module
* [#35](https://github.com/PrestaShop/ps_customtext/pull/35): Renders form twice on error. Thank you [@bhavikvaghani](https://github.com/bhavikvaghani)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@moncef-essid](https://github.com/moncef-essid), [@matks](https://github.com/matks), [@LukaS0lncev](https://github.com/LukaS0lncev), [@jolelievre](https://github.com/jolelievre), [@PierreRambaud](https://github.com/PierreRambaud), [@Progi1984](https://github.com/Progi1984), [@atomiix](https://github.com/atomiix), [@dependabot[bot]](https://github.com/apps/dependabot), [@boubkerbribri](https://github.com/boubkerbribri), [@matthieu-rolland](https://github.com/matthieu-rolland), [@SimonGrn](https://github.com/SimonGrn), [@kpodemski](https://github.com/kpodemski), [@Seleda](https://github.com/Seleda), [@dariusakafest](https://github.com/dariusakafest), [@davidglezz](https://github.com/davidglezz), [@jbenezech](https://github.com/jbenezech), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@sowbiba](https://github.com/sowbiba), [@antoninblasco](https://github.com/antoninblasco), [@JoshTheDerf](https://github.com/JoshTheDerf), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@jimmydupre](https://github.com/jimmydupre), [@PululuK](https://github.com/PululuK), [@bhavikvaghani](https://github.com/bhavikvaghani)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
