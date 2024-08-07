---
layout: post
aliases: ["/news/coreweekly-48-2020"]
title:  "PrestaShop Core Weekly - Week 48 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-12-03
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 23th to Sunday 29th of November 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The past week has seen many major releases for the PHP ecosystem: [PHP 8.0](https://www.php.net/releases/8.0/), [Xdebug 3](https://xdebug.org/announcements/2020-11-25), [Flysystem 2](https://flysystem.thephpleague.com/v2/docs/what-is-new/) and multiple versions of [Symfony](https://symfony.com/blog/a-week-of-symfony-726-23-29-november-2020) including the last Symfony 3 release: v3.4.47. Symfony 3 now enters Security Support stage where only critical security issues are fixed.

We are immensely proud to announce that [PrestaShop 1.7.7.0](https://build.prestashop.com/news/prestashop-1-7-7-0-available/) was released this week, one more item on this list!

Last week, thanks to the huge work of QA Team, multiples issues had been identified in the Release Candidate and had been fixed. At the start of the week, multiple issues in the upgrade process from previous 1.7 versions to 1.7.7.0 were also identified.

As the ability to upgrade is a major keystone for security and stability, we fixed these upgrade issues in PrestaShop 1.7.7.0 and released a patched version of the [Autoupgrade module](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.11.0). If you plan on upgrading your shop to 1.7.7 and your current version is below 1.7.6 you need this version (v4.11.0) of the autoupgrade module.

As usual, it is recommended to be careful before starting to update your website to the latest version:

- Backup your database and your files
- Test the update on a testing or pre production server
- If everything is fine, then update on the production environment


## A quick update about PrestaShop's GitHub issues and pull requests:

- [68 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-11-23..2020-11-29) have been created in the project repositories;
- [65 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-11-23..2020-11-29), including [9 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-11-23..2020-11-29) on the core;
- [102 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-11-23..2020-11-29) in the project repositories;
- [87 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-11-23..2020-11-29), including [69 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-11-23..2020-11-29).


## Code changes in the 'develop' branch


### Core
* [#22087](https://github.com/PrestaShop/PrestaShop/pull/22087): Do not generate the data variable if it's not needed in PaymentModule, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#21582](https://github.com/PrestaShop/PrestaShop/pull/21582): Mark parameter deprecated for a future version. Thank you [@okom3pom](https://github.com/okom3pom)


### Back office
* [#22090](https://github.com/PrestaShop/PrestaShop/pull/22090): Remove redundant customization field commands. Thank you [@zuk3975](https://github.com/zuk3975)
* [#22061](https://github.com/PrestaShop/PrestaShop/pull/22061): Add select2 to the import localization select, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21345](https://github.com/PrestaShop/PrestaShop/pull/21345): Refactor UpdateProductSeoHandler to use ProductRepository. Thank you [@zuk3975](https://github.com/zuk3975)
* [#21336](https://github.com/PrestaShop/PrestaShop/pull/21336): Refactor UpdateProductPricesHandler to use ProductRepository [product page migration]. Thank you [@zuk3975](https://github.com/zuk3975)
* [#21103](https://github.com/PrestaShop/PrestaShop/pull/21103): Introduce UpdateProductStockCommand, by [@jolelievre](https://github.com/jolelievre)
* [#20518](https://github.com/PrestaShop/PrestaShop/pull/20518): Add GenerateProductCombinationsCommand. Thank you [@zuk3975](https://github.com/zuk3975)


### Front office
* [#22027](https://github.com/PrestaShop/PrestaShop/pull/22027): Remove duplicate id on product-list-bottom, by [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#22054](https://github.com/PrestaShop/PrestaShop/pull/22054): Add test 'Erase all' emails. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#22019](https://github.com/PrestaShop/PrestaShop/pull/22019): Add test 'Search bulk actions'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21993](https://github.com/PrestaShop/PrestaShop/pull/21993): Adjust behats localized fields assertion and add LocalizedArrayTransformContext . Thank you [@zuk3975](https://github.com/zuk3975)


## Code changes in the '1.7.7.x' branch


### Core
* [#22130](https://github.com/PrestaShop/PrestaShop/pull/22130): Fix dependency which is targeting the v1.3.0 instead of the 1.3 branch, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#22013](https://github.com/PrestaShop/PrestaShop/pull/22013): Handle parallel updates from CartRules when updating a product in Order, by [@jolelievre](https://github.com/jolelievre)


### Tests
* [#22055](https://github.com/PrestaShop/PrestaShop/pull/22055): Delete spaces in the end of title name in faker for UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in modules, themes & tools


### Theme customization module
* [#36](https://github.com/PrestaShop/ps_themecusto/pull/36): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)
* [#34](https://github.com/PrestaShop/ps_themecusto/pull/34): Bump prestashop/php-dev-tools from 3.10 to 3.11. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#33](https://github.com/PrestaShop/ps_themecusto/pull/33): Improve Project, by [@Progi1984](https://github.com/Progi1984)


### Customer reassurance block module
* [#83](https://github.com/PrestaShop/blockreassurance/pull/83): Bump babel-loader from 8.2.1 to 8.2.2. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#81](https://github.com/PrestaShop/blockreassurance/pull/81): Bump @babel/core from 7.12.7 to 7.12.9. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#80](https://github.com/PrestaShop/blockreassurance/pull/80): Bump @babel/core from 7.12.3 to 7.12.7. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#268](https://github.com/PrestaShop/ps_facetedsearch/pull/268): Bump babel-loader from 8.2.1 to 8.2.2. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#267](https://github.com/PrestaShop/ps_facetedsearch/pull/267): Bump webpack from 5.6.0 to 5.8.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#266](https://github.com/PrestaShop/ps_facetedsearch/pull/266): Bump @babel/core from 7.12.7 to 7.12.9. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#265](https://github.com/PrestaShop/ps_facetedsearch/pull/265): Bump @babel/cli from 7.12.7 to 7.12.8. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#264](https://github.com/PrestaShop/ps_facetedsearch/pull/264): Bump prestashop/php-dev-tools from 3.10 to 3.11. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#263](https://github.com/PrestaShop/ps_facetedsearch/pull/263): Bump @babel/core from 7.12.3 to 7.12.7. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#262](https://github.com/PrestaShop/ps_facetedsearch/pull/262): Bump @babel/cli from 7.12.1 to 7.12.7. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#261](https://github.com/PrestaShop/ps_facetedsearch/pull/261): Bump @babel/preset-env from 7.12.1 to 7.12.7. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#254](https://github.com/PrestaShop/ps_facetedsearch/pull/254): Bump css-loader from 4.3.0 to 5.0.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#362](https://github.com/PrestaShop/autoupgrade/pull/362): Remove useless E2E tests, by [@matks](https://github.com/matks)
* [#361](https://github.com/PrestaShop/autoupgrade/pull/361): Test upgrades for PS1.7 with php7.1, by [@matks](https://github.com/matks)
* [#360](https://github.com/PrestaShop/autoupgrade/pull/360): Move PHPUnit Tests to GA, by [@matks](https://github.com/matks)
* [#357](https://github.com/PrestaShop/autoupgrade/pull/357): Fix probably bad directory name, by [@matks](https://github.com/matks)
* [#356](https://github.com/PrestaShop/autoupgrade/pull/356): Install the Database for tests, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#353](https://github.com/PrestaShop/autoupgrade/pull/353): Remove useless and outdated changelog file, by [@matks](https://github.com/matks)


### Core Weekly Generator tool
* [#66](https://github.com/PrestaShop/core-weekly-generator/pull/66): Bump dot-prop from 4.2.0 to 4.2.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#65](https://github.com/PrestaShop/core-weekly-generator/pull/65): Bump highlight.js from 9.15.10 to 9.18.5. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation
* [#818](https://github.com/PrestaShop/docs/pull/818): Wrong path on overrading templates. Thank you [@OliverCG](https://github.com/OliverCG)
* [#817](https://github.com/PrestaShop/docs/pull/817): Remove GoogleDoc link, replace it with new page links, by [@matks](https://github.com/matks)
* [#815](https://github.com/PrestaShop/docs/pull/815): Introduce web version of autoupgrade module, by [@matks](https://github.com/matks)
* [#814](https://github.com/PrestaShop/docs/pull/814): Some formatting improvements and links for Keeping Up To Date section, by [@matks](https://github.com/matks)
* [#813](https://github.com/PrestaShop/docs/pull/813): Split Upgrade details in 2 pages ; one for module upgrade ; one for manual upgrade, by [@matks](https://github.com/matks)
* [#812](https://github.com/PrestaShop/docs/pull/812): Better title UIKit section, by [@matks](https://github.com/matks)
* [#811](https://github.com/PrestaShop/docs/pull/811): Rename file to fix typo in Doctrine multilang url, by [@jolelievre](https://github.com/jolelievre)
* [#810](https://github.com/PrestaShop/docs/pull/810): Add documentation about Doctrine multi lang entities, by [@jolelievre](https://github.com/jolelievre)
* [#809](https://github.com/PrestaShop/docs/pull/809): Add "Insert multiple rows" example to db.md. Thank you [@mikevoid101](https://github.com/mikevoid101)


### Custom text module
* [#49](https://github.com/PrestaShop/ps_customtext/pull/49): Bump prestashop/php-dev-tools from 3.10 to 3.11. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### OnBoarding module
* [#90](https://github.com/PrestaShop/welcome/pull/90): Bump prestashop/php-dev-tools from 3.10 to 3.11. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Dashboard Trends module
* [#39](https://github.com/PrestaShop/dashtrends/pull/39): Bump prestashop/php-dev-tools from 3.10 to 3.11. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer "Sign in" link module
* [#28](https://github.com/PrestaShop/ps_customersignin/pull/28): Bump prestashop/php-dev-tools from 3.10 to 3.11. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Check payment module
* [#43](https://github.com/PrestaShop/ps_checkpayment/pull/43): Bump prestashop/php-dev-tools from 3.10 to 3.11. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Product Comments module
* [#82](https://github.com/PrestaShop/productcomments/pull/82): Bump prestashop/php-dev-tools from 3.10 to 3.11. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#79](https://github.com/PrestaShop/productcomments/pull/79): Improve project, by [@Progi1984](https://github.com/Progi1984)


### Order Notifications on the Favicon module
* [#24](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/24): Bump prestashop/php-dev-tools from 3.10 to 3.11. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Docker images
* [#247](https://github.com/PrestaShop/docker/pull/247): Properly use cache parameter, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#246](https://github.com/PrestaShop/docker/pull/246): Add nightly support and PHP 7.4, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#245](https://github.com/PrestaShop/docker/pull/245): Do not generate images we don't use, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#244](https://github.com/PrestaShop/docker/pull/244): Update base images, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#243](https://github.com/PrestaShop/docker/pull/243): Replace outdated Travis badge by GA badges, by [@matks](https://github.com/matks)
* [#242](https://github.com/PrestaShop/docker/pull/242): Small improvement for the README, by [@matks](https://github.com/matks)
* [#241](https://github.com/PrestaShop/docker/pull/241): Fix typo, by [@matks](https://github.com/matks)


### PHP Developer Tools
* [#40](https://github.com/PrestaShop/php-dev-tools/pull/40): Abort bootstrap if _PS_ROOT_DIR_ is incorrect. Thank you [@SebSept](https://github.com/SebSept)


### Customer data privacy block module
* [#23](https://github.com/PrestaShop/ps_dataprivacy/pull/23): Improve project, by [@Progi1984](https://github.com/Progi1984)


### Catalog statistics module
* [#15](https://github.com/PrestaShop/statscatalog/pull/15): Improve project, by [@Progi1984](https://github.com/Progi1984)


### PrestaShop Specifications
* [#176](https://github.com/PrestaShop/prestashop-specs/pull/176): Specify module upload failed, by [@LouiseBonnard](https://github.com/LouiseBonnard)


### Google Analytics module
* [#77](https://github.com/PrestaShop/ps_googleanalytics/pull/77): Fix backoffice JS code, fix doubled and tripled pageviews, fix echo in hook, fix default BO tracking - for versions up to 1.7.6. Thank you [@Hlavtox](https://github.com/Hlavtox)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Julievrz](https://github.com/Julievrz), [@dependabot[bot]](https://github.com/apps/dependabot), [@PierreRambaud](https://github.com/PierreRambaud), [@matks](https://github.com/matks), [@OliverCG](https://github.com/OliverCG), [@zuk3975](https://github.com/zuk3975), [@jolelievre](https://github.com/jolelievre), [@NeOMakinG](https://github.com/NeOMakinG), [@boubkerbribri](https://github.com/boubkerbribri), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@SebSept](https://github.com/SebSept), [@Progi1984](https://github.com/Progi1984), [@mikevoid101](https://github.com/mikevoid101), [@LouiseBonnard](https://github.com/LouiseBonnard), [@okom3pom](https://github.com/okom3pom), [@Hlavtox](https://github.com/Hlavtox)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
