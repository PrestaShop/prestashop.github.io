---
layout: post
aliases: ["/news/coreweekly-week-47-2019"]
title:  "PrestaShop Core Weekly - Week 47 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-12-13
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 18th to Sunday 24th of November 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [47 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-11-18..2019-11-24) have been created in the project repositories;
- [50 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-11-18..2019-11-24), including [8 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-11-18..2019-11-24) on the core;
- [48 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-11-18..2019-11-24) in the project repositories;
- [58 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-11-18..2019-11-24), including [50 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-11-18..2019-11-24).


## Code changes in the 'develop' branch


### Core
* [#16465](https://github.com/PrestaShop/PrestaShop/pull/16465): Fix autoupgrade, by [@jolelievre](https://github.com/jolelievre)
* [#16454](https://github.com/PrestaShop/PrestaShop/pull/16454): Add comments about DataLang, by [@eternoendless](https://github.com/eternoendless)
* [#16429](https://github.com/PrestaShop/PrestaShop/pull/16429): Upgrade Smarty to v3.1.34, by [@matks](https://github.com/matks)
* [#16404](https://github.com/PrestaShop/PrestaShop/pull/16404): Improved cache for staticPrice with product with combinations, by [@Progi1984](https://github.com/Progi1984)
* [#16334](https://github.com/PrestaShop/PrestaShop/pull/16334): Fix wrong flag on some languages, by [@eternoendless](https://github.com/eternoendless)
* [#14894](https://github.com/PrestaShop/PrestaShop/pull/14894): Move to utf8mb4 for emoji support, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#16501](https://github.com/PrestaShop/PrestaShop/pull/16501): Merge modifications from branch 1.7.6.x to develop, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#16461](https://github.com/PrestaShop/PrestaShop/pull/16461): Display display_name instead of name in theme card and adds author.url. Thank you [@NeOMakinG](https://github.com/NeOMakinG)
* [#16267](https://github.com/PrestaShop/PrestaShop/pull/16267): Finish migration "Catalog > Monitoring" page. Thank you [@atomiix](https://github.com/atomiix)
* [#15958](https://github.com/PrestaShop/PrestaShop/pull/15958): New design on module positions page, by [@Progi1984](https://github.com/Progi1984)
* [#15707](https://github.com/PrestaShop/PrestaShop/pull/15707): Improve query performance in order status update due very slow StockManager.php queries. Thank you [@gennaris](https://github.com/gennaris)


### Front office
* [#16478](https://github.com/PrestaShop/PrestaShop/pull/16478): Fix shipping method design in payment tunnel. Thank you [@NeOMakinG](https://github.com/NeOMakinG)
* [#16468](https://github.com/PrestaShop/PrestaShop/pull/16468): Fix issue where html tags from ps_emailsubscription module would be escaped and not interpreted as HTML. Thank you [@NeOMakinG](https://github.com/NeOMakinG)
* [#16340](https://github.com/PrestaShop/PrestaShop/pull/16340): Fix Bullets of bulleted lists are removed by default. Thank you [@rdy4ever](https://github.com/rdy4ever)
* [#16250](https://github.com/PrestaShop/PrestaShop/pull/16250): Product alignment is wrong in product lists for smaller devices. Thank you [@rdy4ever](https://github.com/rdy4ever)
* [#16087](https://github.com/PrestaShop/PrestaShop/pull/16087): Fix no carriers in checkout bad cart rules, by [@matks](https://github.com/matks)
* [#16052](https://github.com/PrestaShop/PrestaShop/pull/16052): Fix Very strict selector div.delivery-option. Thank you [@davidglezz](https://github.com/davidglezz)


### Tests
* [#16492](https://github.com/PrestaShop/PrestaShop/pull/16492): Tests - Skip all scenarios Employees bulk actions, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16480](https://github.com/PrestaShop/PrestaShop/pull/16480): Tests - Using foreach for sanity tests orders, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16479](https://github.com/PrestaShop/PrestaShop/pull/16479): Tests - Using foreach for sanity tests products, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16469](https://github.com/PrestaShop/PrestaShop/pull/16469): Functional tests - fix Employees tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16456](https://github.com/PrestaShop/PrestaShop/pull/16456): Functional tests - add simple filter tests for stocks, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16450](https://github.com/PrestaShop/PrestaShop/pull/16450): Tests - Replace duplicated steps with foreach in brands tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16448](https://github.com/PrestaShop/PrestaShop/pull/16448): Running Sanity and functional tests faster, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#16376](https://github.com/PrestaShop/PrestaShop/pull/16376): Functional Tests - Add BO tests for Filter And Quick Edit products. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#16289](https://github.com/PrestaShop/PrestaShop/pull/16289): Functional Tests - Add BO tests for Team>employees and profiles. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#16127](https://github.com/PrestaShop/PrestaShop/pull/16127): Functional Tests - Add BO tests for Design>Pages. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Auto Upgrade module
* [#343](https://github.com/PrestaShop/autoupgrade/pull/343): Bump version 4.10.0, by [@jolelievre](https://github.com/jolelievre)
* [#342](https://github.com/PrestaShop/autoupgrade/pull/342): Bump new version 4.10.0, by [@jolelievre](https://github.com/jolelievre)
* [#341](https://github.com/PrestaShop/autoupgrade/pull/341): SQL upgrade files can use DB_NAME placeholder, by [@jolelievre](https://github.com/jolelievre)
* [#330](https://github.com/PrestaShop/autoupgrade/pull/330): Return in php upgrade script when an error occurs, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Theme Custo module
* [#17](https://github.com/PrestaShop/ps_themecusto/pull/17): Bump version to v1.1.0, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#16](https://github.com/PrestaShop/ps_themecusto/pull/16): extend ps_themecusto/importDropzone to zip, x-zip-compressed, x-zip. Thank you [@pierreloicq](https://github.com/pierreloicq)
* [#15](https://github.com/PrestaShop/ps_themecusto/pull/15): Add category and product config emod 49/107/108. Thank you [@zalexki](https://github.com/zalexki)


### Docker images
* [#194](https://github.com/PrestaShop/docker/pull/194): Move set -e to not stop container when mysql is not ready, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#193](https://github.com/PrestaShop/docker/pull/193): Opcache configuration is not fully compatible with Symfony, by [@PierreRambaud](https://github.com/PierreRambaud)


### Changes in developer documentation
* [#410](https://github.com/PrestaShop/docs/pull/410): Update enabling-auto-update.md. Thank you [@idnovate](https://github.com/idnovate)
* [#407](https://github.com/PrestaShop/docs/pull/407): Update enabling-auto-update.md. Thank you [@idnovate](https://github.com/idnovate)


### Open Source dashboard
* [#24](https://github.com/PrestaShop/open-source/pull/24): updating changes reviewed and approved by PrestaShop's legal team, by [@ttoine](https://github.com/ttoine)
* [#23](https://github.com/PrestaShop/open-source/pull/23): Updating the changes reviewed and approved by PrestaShop's legal team, by [@ttoine](https://github.com/ttoine)


### Core Weekly Generator tool
* [#21](https://github.com/PrestaShop/core-weekly-generator/pull/21): Expand project mapping, by [@matks](https://github.com/matks)
* [#18](https://github.com/PrestaShop/core-weekly-generator/pull/18): Small changes to speed up the publication, by [@ttoine](https://github.com/ttoine)


### Email Alerts module
* [#27](https://github.com/PrestaShop/ps_emailalerts/pull/27): Add "total_shipping_tax_excl" and "total_shipping_tax_incl" in email data. Thank you [@yannicka](https://github.com/yannicka)
* [#23](https://github.com/PrestaShop/ps_emailalerts/pull/23): Fix die that does not print the value. Thank you [@davidglezz](https://github.com/davidglezz)


### Google Analytics module
* [#37](https://github.com/PrestaShop/ps_googleanalytics/pull/37): Add pageview, by [@david-piatek](https://github.com/david-piatek)


### Email subscription module
* [#45](https://github.com/PrestaShop/ps_emailsubscription/pull/45): Set email input basic browser validation. Thank you [@davidglezz](https://github.com/davidglezz)


### Graphnvd3 module
* [#3](https://github.com/PrestaShop/graphnvd3/pull/3): Add 'About' section to Readme, by [@matks](https://github.com/matks)


### Cronjobs module
* [#39](https://github.com/PrestaShop/cronjobs/pull/39): Fix day of week in task list. Thank you [@mcdado](https://github.com/mcdado)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@jolelievre](https://github.com/jolelievre), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@PierreRambaud](https://github.com/PierreRambaud), [@boubkerbribri](https://github.com/boubkerbribri), [@eternoendless](https://github.com/eternoendless), [@idnovate](https://github.com/idnovate), [@NeOMakinG](https://github.com/NeOMakinG), [@ttoine](https://github.com/ttoine), [@matks](https://github.com/matks), [@Progi1984](https://github.com/Progi1984), [@yannicka](https://github.com/yannicka), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@rdy4ever](https://github.com/rdy4ever), [@atomiix](https://github.com/atomiix), [@david-piatek](https://github.com/david-piatek), [@davidglezz](https://github.com/davidglezz), [@gennaris](https://github.com/gennaris), [@pierreloicq](https://github.com/pierreloicq), [@zalexki](https://github.com/zalexki), [@mcdado](https://github.com/mcdado)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

