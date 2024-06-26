---
layout: post
aliases: ["/news/coreweekly-07-2022"]
title:  "PrestaShop Core Weekly - Week 7 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-02-21
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 14th to Sunday 20th of February 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week, the maintainer team [presented](https://build.prestashop.com/news/new-theme-announce/) the new Front-office theme we are working on. At the same time we submitted a [poll](https://framaforms.org/vote-for-the-new-theme-name-1644576025) to choose the name of this new theme.

Don't hesitate to tell us your feedback on this project, to do so [join the discussion on slack](https://www.prestashop-project.org/slack/). The community is being regularly consulted there to make sure the new theme will meet the expectations and needs of everyone.

Also did you notice three security releases of PHP were published last week? PHP 8.1.3, PHP 8.0.16 and PHP 7.4.28 fix a vulnerability in input validation code. We encourage everybody to upgrade to these versions.


## Releases

* [Blockreassurance](https://github.com/PrestaShop/blockreassurance) module: [v5.1.0](https://github.com/PrestaShop/blockreassurance/releases/tag/v5.1.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [55 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-02-14..2022-02-20) have been created in the project repositories;
- [65 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-02-14..2022-02-20), including [22 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-02-14..2022-02-20) on the core;
- [115 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-02-14..2022-02-20) in the project repositories;
- [110 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-02-14..2022-02-20), including [105 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-02-14..2022-02-20).


## Code changes in the 'develop' branch


### Core
* [#27546](https://github.com/PrestaShop/PrestaShop/pull/27546): Use CSSO Webpack plugin everywhere, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#27276](https://github.com/PrestaShop/PrestaShop/pull/27276): Remove useless legacyContextLoader, by [@atomiix](https://github.com/atomiix)
* [#26913](https://github.com/PrestaShop/PrestaShop/pull/26913): PHPStan (Level 5) on classes/, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#27700](https://github.com/PrestaShop/PrestaShop/pull/27700): Refactor gelocation configuration form before it can be migrated as multistore compatible, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#27698](https://github.com/PrestaShop/PrestaShop/pull/27698): Fixed Help Link in Merchandise Returns page, by [@Progi1984](https://github.com/Progi1984)
* [#27648](https://github.com/PrestaShop/PrestaShop/pull/27648): Removed double escape for Tree Node template, by [@Progi1984](https://github.com/Progi1984)
* [#27584](https://github.com/PrestaShop/PrestaShop/pull/27584): Multishop product basic, by [@jolelievre](https://github.com/jolelievre)
* [#27444](https://github.com/PrestaShop/PrestaShop/pull/27444): Remove code relative to the (removed) news block on dashboard, by [@Progi1984](https://github.com/Progi1984)
* [#27443](https://github.com/PrestaShop/PrestaShop/pull/27443): Minor cleanup and styling. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#27381](https://github.com/PrestaShop/PrestaShop/pull/27381): Removed double escape for Tree Node template, by [@Progi1984](https://github.com/Progi1984)
* [#27228](https://github.com/PrestaShop/PrestaShop/pull/27228): Fix FormSubmitButton selector, by [@atomiix](https://github.com/atomiix)
* [#27175](https://github.com/PrestaShop/PrestaShop/pull/27175): Avoid exception and display appropriate message in database backup. Thank you [@Amoifr](https://github.com/Amoifr)


### Front office
* [#27467](https://github.com/PrestaShop/PrestaShop/pull/27467): Support 410 gone http code. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Tests
* [#27729](https://github.com/PrestaShop/PrestaShop/pull/27729): Fix nightly 18-02-2022 . Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27687](https://github.com/PrestaShop/PrestaShop/pull/27687): Functional tests - Add some refacto to 'Search customer' test from new order page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27682](https://github.com/PrestaShop/PrestaShop/pull/27682): Functional tests - Add some refacto to 'Create customer' test from new order page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27668](https://github.com/PrestaShop/PrestaShop/pull/27668): Functional tests - Fix quick access link test and unskip fixed tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27664](https://github.com/PrestaShop/PrestaShop/pull/27664): Fix nightly 14-02-2022. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27649](https://github.com/PrestaShop/PrestaShop/pull/27649): Added survival test for Outstanding page, by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '1.7.8.x' branch


### Core
* [#27647](https://github.com/PrestaShop/PrestaShop/pull/27647): Bump productcomments to 5.0.1, by [@Progi1984](https://github.com/Progi1984)
* [#27614](https://github.com/PrestaShop/PrestaShop/pull/27614): Updated modern email theme, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#27430](https://github.com/PrestaShop/PrestaShop/pull/27430): Align checkboxes of multistore widget, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#27406](https://github.com/PrestaShop/PrestaShop/pull/27406): Don't check if an invalid address exists over and over again, by [@eternoendless](https://github.com/eternoendless)


### Web services
* [#27622](https://github.com/PrestaShop/PrestaShop/pull/27622): Fix Symfony Kernel in WebService dispatcher in 1.7.8.x. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Tests
* [#27679](https://github.com/PrestaShop/PrestaShop/pull/27679): Fix preview email themes test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Changes in developer documentation sources
* [#1302](https://github.com/PrestaShop/docs/pull/1302): Backport PR 1290 to 8.x. Thank you [@clotairer](https://github.com/clotairer)
* [#1301](https://github.com/PrestaShop/docs/pull/1301): Backport PR 1248 to 1.7.x, by [@matks](https://github.com/matks)
* [#1300](https://github.com/PrestaShop/docs/pull/1300): Backport PR 1284 to 8.x, by [@matks](https://github.com/matks)
* [#1299](https://github.com/PrestaShop/docs/pull/1299): Backport PR 1260 to 8.x, by [@matks](https://github.com/matks)
* [#1298](https://github.com/PrestaShop/docs/pull/1298): Backport PR 1255 on 8.x, by [@matks](https://github.com/matks)
* [#1297](https://github.com/PrestaShop/docs/pull/1297): Backport PR 1262 to 8.x, by [@matks](https://github.com/matks)
* [#1296](https://github.com/PrestaShop/docs/pull/1296): Backport "Import commit guidelines" to 1.7.x, by [@matks](https://github.com/matks)
* [#1295](https://github.com/PrestaShop/docs/pull/1295): Backport PR 1294 to 1.7.x, by [@matks](https://github.com/matks)
* [#1294](https://github.com/PrestaShop/docs/pull/1294): Delete deprecated reference to automated tests on themes forlder, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#1293](https://github.com/PrestaShop/docs/pull/1293): Remove mentions to Addons in use-autoupgrade-module, by [@matks](https://github.com/matks)
* [#1292](https://github.com/PrestaShop/docs/pull/1292): Remove mention to Addons in theme section, by [@matks](https://github.com/matks)
* [#1291](https://github.com/PrestaShop/docs/pull/1291): Improve distribution page, by [@matks](https://github.com/matks)
* [#1290](https://github.com/PrestaShop/docs/pull/1290): Fix link 404 on ressource test page. Thank you [@clotairer](https://github.com/clotairer)
* [#1289](https://github.com/PrestaShop/docs/pull/1289): Switch AND to OR. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1288](https://github.com/PrestaShop/docs/pull/1288): Switch AND to OR. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Example modules
* [#89](https://github.com/PrestaShop/example-modules/pull/89): Bump url-parse from 1.5.3 to 1.5.7 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Core Weekly Generator tool
* [#115](https://github.com/PrestaShop/core-weekly-generator/pull/115): Bump url-parse from 1.5.3 to 1.5.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#114](https://github.com/PrestaShop/core-weekly-generator/pull/114): Bump ini from 1.3.5 to 1.3.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#113](https://github.com/PrestaShop/core-weekly-generator/pull/113): Bump follow-redirects from 1.14.7 to 1.14.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer reassurance block module
* [#367](https://github.com/PrestaShop/blockreassurance/pull/367): Bump @babel/core from 7.17.4 to 7.17.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#366](https://github.com/PrestaShop/blockreassurance/pull/366): Bump webpack from 5.69.0 to 5.69.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#364](https://github.com/PrestaShop/blockreassurance/pull/364): In configure form, edit the block in all languages (active & inactive), by [@Progi1984](https://github.com/Progi1984)
* [#363](https://github.com/PrestaShop/blockreassurance/pull/363): Bump @babel/core from 7.17.2 to 7.17.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#362](https://github.com/PrestaShop/blockreassurance/pull/362): Bump sass-loader from 12.5.0 to 12.6.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#361](https://github.com/PrestaShop/blockreassurance/pull/361): Bump webpack from 5.68.0 to 5.69.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#360](https://github.com/PrestaShop/blockreassurance/pull/360): Bump sass-loader from 12.4.0 to 12.5.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#357](https://github.com/PrestaShop/blockreassurance/pull/357): Bump eslint from 8.8.0 to 8.9.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#356](https://github.com/PrestaShop/blockreassurance/pull/356): Release 5.1.0, by [@Progi1984](https://github.com/Progi1984)


### Faceted search module
* [#623](https://github.com/PrestaShop/ps_facetedsearch/pull/623): Bump webpack from 5.69.0 to 5.69.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#622](https://github.com/PrestaShop/ps_facetedsearch/pull/622): Bump @babel/core from 7.17.4 to 7.17.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#621](https://github.com/PrestaShop/ps_facetedsearch/pull/621): Bump sass-loader from 12.5.0 to 12.6.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#620](https://github.com/PrestaShop/ps_facetedsearch/pull/620): Bump @babel/core from 7.17.2 to 7.17.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#619](https://github.com/PrestaShop/ps_facetedsearch/pull/619): Bump @babel/cli from 7.17.0 to 7.17.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#618](https://github.com/PrestaShop/ps_facetedsearch/pull/618): Bump webpack from 5.68.0 to 5.69.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#617](https://github.com/PrestaShop/ps_facetedsearch/pull/617): Bump sass-loader from 12.4.0 to 12.5.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#616](https://github.com/PrestaShop/ps_facetedsearch/pull/616): Bump eslint from 8.8.0 to 8.9.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Buy button lite module
* [#60](https://github.com/PrestaShop/ps_buybuttonlite/pull/60): Bump url-parse from 1.5.3 to 1.5.7 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#59](https://github.com/PrestaShop/ps_buybuttonlite/pull/59): Bump follow-redirects from 1.14.7 to 1.14.8 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Product Comments module
* [#136](https://github.com/PrestaShop/productcomments/pull/136): Delete CHANGELOG.txt. Thank you [@nenes25](https://github.com/nenes25)


### User documentation landing page
* [#188](https://github.com/PrestaShop/user-documentation-landing/pull/188): fix(deps): bump core-js from 3.21.0 to 3.21.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### New Front-office theme
* [#183](https://github.com/PrestaShop/theme-refacto/pull/183): Rework the cart-summary panel, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#182](https://github.com/PrestaShop/theme-refacto/pull/182): Introduce Jest, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#178](https://github.com/PrestaShop/theme-refacto/pull/178): Styling of confirmation page and default module messages. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#144](https://github.com/PrestaShop/theme-refacto/pull/144): Add support for line breaks. Thank you [@Hlavtox](https://github.com/Hlavtox)


### GDPR module
* [#161](https://github.com/PrestaShop/psgdpr/pull/161): Removed hooks registerGDPRConsent & actionDeleteGDPRCustomer as hook listeners are not defined, by [@Progi1984](https://github.com/Progi1984)


### Prestashop UI Kit
* [#185](https://github.com/PrestaShop/prestashop-ui-kit/pull/185): Bump follow-redirects from 1.14.7 to 1.14.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### OnBoarding module
* [#139](https://github.com/PrestaShop/welcome/pull/139): Bump node-sass from 7.0.0 to 7.0.1 and fix CI, by [@NeOMakinG](https://github.com/NeOMakinG)


### Google Sitemap module
* [#151](https://github.com/PrestaShop/gsitemap/pull/151): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Email subscription module
* [#88](https://github.com/PrestaShop/ps_emailsubscription/pull/88): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Products in the same category module
* [#31](https://github.com/PrestaShop/ps_categoryproducts/pull/31): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Cross-selling module
* [#33](https://github.com/PrestaShop/ps_crossselling/pull/33): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Issues Bot
* [#46](https://github.com/PrestaShop/issuebot/pull/46): Bump hosted-git-info from 2.8.5 to 2.8.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#45](https://github.com/PrestaShop/issuebot/pull/45): Bump y18n from 4.0.0 to 4.0.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#44](https://github.com/PrestaShop/issuebot/pull/44): Bump lodash from 4.17.20 to 4.17.21. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#43](https://github.com/PrestaShop/issuebot/pull/43): Bump glob-parent from 5.1.0 to 5.1.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#42](https://github.com/PrestaShop/issuebot/pull/42): Bump url-parse from 1.4.7 to 1.5.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#41](https://github.com/PrestaShop/issuebot/pull/41): Bump normalize-url from 4.5.0 to 4.5.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#40](https://github.com/PrestaShop/issuebot/pull/40): Bump path-parse from 1.0.6 to 1.0.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#39](https://github.com/PrestaShop/issuebot/pull/39): Bump ws from 5.2.2 to 5.2.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#38](https://github.com/PrestaShop/issuebot/pull/38): Bump tmpl from 1.0.4 to 1.0.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#37](https://github.com/PrestaShop/issuebot/pull/37): Bump node-fetch from 2.6.1 to 2.6.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#36](https://github.com/PrestaShop/issuebot/pull/36): Bump ajv from 6.11.0 to 6.12.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Wire payment module
* [#69](https://github.com/PrestaShop/ps_wirepayment/pull/69): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Social Follow module
* [#33](https://github.com/PrestaShop/ps_socialfollow/pull/33): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Auto Upgrade module
* [#461](https://github.com/PrestaShop/autoupgrade/pull/461): Bump follow-redirects from 1.14.7 to 1.14.8 in /tests/e2e. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#456](https://github.com/PrestaShop/autoupgrade/pull/456): Add 410 http code to redirect_type column. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#451](https://github.com/PrestaShop/autoupgrade/pull/451): Check last version module. Thank you [@okom3pom](https://github.com/okom3pom)
* [#434](https://github.com/PrestaShop/autoupgrade/pull/434): Use GenerateThemeMailTemplatesCommand during upgrade, by [@jolelievre](https://github.com/jolelievre)


### Stylelint browser compatibility plugin
* [#15](https://github.com/PrestaShop/stylelint-browser-compatibility/pull/15): Bump ajv from 6.10.2 to 6.12.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Traces
* [#23](https://github.com/PrestaShop/traces/pull/23): Update CONTRIBUTORS.md. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#22](https://github.com/PrestaShop/traces/pull/22): Exclude more bots. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Share Buttons module
* [#53](https://github.com/PrestaShop/ps_sharebuttons/pull/53): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Viewed products block module
* [#24](https://github.com/PrestaShop/ps_viewedproduct/pull/24): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Suppliers list module
* [#12](https://github.com/PrestaShop/ps_supplierlist/pull/12): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Special offers module
* [#7](https://github.com/PrestaShop/ps_specials/pull/7): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### New Products module
* [#13](https://github.com/PrestaShop/ps_newproducts/pull/13): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Brands list module
* [#13](https://github.com/PrestaShop/ps_brandlist/pull/13): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Theme customization module
* [#51](https://github.com/PrestaShop/ps_themecusto/pull/51): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Shopping cart module
* [#84](https://github.com/PrestaShop/ps_shoppingcart/pull/84): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)
* [#83](https://github.com/PrestaShop/ps_shoppingcart/pull/83): Fix php notices while loading subtotals. Thank you [@SharakPL](https://github.com/SharakPL)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@clotairer](https://github.com/clotairer), [@dependabot[bot]](https://github.com/apps/dependabot), [@matks](https://github.com/matks), [@boubkerbribri](https://github.com/boubkerbribri), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@nenes25](https://github.com/nenes25), [@matthieu-rolland](https://github.com/matthieu-rolland), [@Progi1984](https://github.com/Progi1984), [@NeOMakinG](https://github.com/NeOMakinG), [@PrestaEdit](https://github.com/PrestaEdit), [@Hlavtox](https://github.com/Hlavtox), [@jf-viguier](https://github.com/jf-viguier), [@jolelievre](https://github.com/jolelievre), [@eternoendless](https://github.com/eternoendless), [@okom3pom](https://github.com/okom3pom), [@SharakPL](https://github.com/SharakPL), [@atomiix](https://github.com/atomiix), [@Amoifr](https://github.com/Amoifr)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

