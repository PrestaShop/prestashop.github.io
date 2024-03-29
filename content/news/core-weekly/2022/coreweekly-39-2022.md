---
layout: post
aliases: ["/news/coreweekly-39-2022"]
title:  "PrestaShop Core Weekly - Week 39 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-10-03
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 26th of September to Sunday 2nd of October 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

We would like to remind you about the upcoming Public Demo for the open source project, scheduled for [October 5th, 2022, at 4 PM](https://build.prestashop-project.org/news/upcoming-demo-7-2022/). As we wrote in the article, this time, we plan to host a Q&A session with questions you can ask not only during the event, but also beforehand. All you have to do is fill [this form](https://docs.google.com/forms/d/e/1FAIpQLSfF1s80LqSCCZiC1kzht7XqQMwTilwRJU2H9EzIteMkWUDWIQ/viewform) with your questions.

Last week @FabienPapet [joined the project's committers](https://github.com/PrestaShop/open-source/issues/121). Also, maintainers concluded the vote for @PrestaEdit's application to join their team and [decided to reject it](https://github.com/PrestaShop/open-source/issues/106#issuecomment-1260894066).

In other news, Hacktoberfest has started! [Read more about this year's edition](https://build.prestashop-project.org/news/hacktoberfest-2022/).

## Releases

* [Traces](https://github.com/PrestaShop/traces): [v5.2.3](https://github.com/PrestaShop/traces/releases/tag/v5.2.3)
* [Classic theme](https://github.com/PrestaShop/classic-theme): [2.0.1](https://github.com/PrestaShop/classic-theme/releases/tag/2.0.1)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [54 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-09-26..2022-10-02) have been created in the project repositories;
- [23 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-09-26..2022-10-02), including [3 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-09-26..2022-10-02) on the core;
- [77 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-09-26..2022-10-02) in the project repositories;
- [89 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-09-26..2022-10-02), including [65 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-09-26..2022-10-02).
        


## Code changes in the 'develop' branch


### Back office
* [#29762](https://github.com/PrestaShop/PrestaShop/pull/29762): Remove french helptext. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#29505](https://github.com/PrestaShop/PrestaShop/pull/29505): Respect configuration of product summary max length. Thank you [@zuk3975](https://github.com/zuk3975)
* [#28634](https://github.com/PrestaShop/PrestaShop/pull/28634): Notification Dropdown : Migrate links to Symfony routes, by [@Progi1984](https://github.com/Progi1984)
* [#28439](https://github.com/PrestaShop/PrestaShop/pull/28439): Migrate the Customers > Title (Only Delete & Bulk Delete), by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#29435](https://github.com/PrestaShop/PrestaShop/pull/29435): Refacto product front controller. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#28942](https://github.com/PrestaShop/PrestaShop/pull/28942): Remove default meta description. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Tests
* [#29794](https://github.com/PrestaShop/PrestaShop/pull/29794): Functional tests - Fix nightly (28/09/2022) customer service tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '8.0.x' branch


### Back office
* [#29584](https://github.com/PrestaShop/PrestaShop/pull/29584): Fix duplicate / wrongly pluralized error message on field length in BO. Thank you [@yanmakouf](https://github.com/yanmakouf)
* [#29530](https://github.com/PrestaShop/PrestaShop/pull/29530): Fixed exception when downloading credit slip on an order with a deleted product. Thank you [@nicosomb](https://github.com/nicosomb)
* [#29503](https://github.com/PrestaShop/PrestaShop/pull/29503): Fix prefilling non-default lang product name. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29406](https://github.com/PrestaShop/PrestaShop/pull/29406): Assign product suppliers to combination during combination csv import. Thank you [@zuk3975](https://github.com/zuk3975)


### Front office
* [#29752](https://github.com/PrestaShop/PrestaShop/pull/29752): Lock classic-theme version to 2.0.0, by [@matks](https://github.com/matks)


### Installer
* [#29616](https://github.com/PrestaShop/PrestaShop/pull/29616): Remove prestashop/prestashop-git from development environment. Thank you [@FabienPapet](https://github.com/FabienPapet)


### Tests
* [#29823](https://github.com/PrestaShop/PrestaShop/pull/29823): Functional tests - Fix nightly 30-09-2022 (FO > User account > Get data in CSV file ). Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29800](https://github.com/PrestaShop/PrestaShop/pull/29800): Functional tests - Add new test 'FO > Contact us > Add attachment'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29773](https://github.com/PrestaShop/PrestaShop/pull/29773): Bump `prestashop/classic` to 2.0.1, by [@Progi1984](https://github.com/Progi1984)
* [#29772](https://github.com/PrestaShop/PrestaShop/pull/29772): Add events types and fix path on UI tests code checks workflow, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#29757](https://github.com/PrestaShop/PrestaShop/pull/29757): Functional  tests - Add new test 'FO > Consult merchandise returns details'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29737](https://github.com/PrestaShop/PrestaShop/pull/29737): Functional tests - Refacto BO - Catalog -  preview product from the list, by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#29735](https://github.com/PrestaShop/PrestaShop/pull/29735): Fix Trigger ESLint on UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#29726](https://github.com/PrestaShop/PrestaShop/pull/29726): Functional tests - Add new test 'FO > User account > Get GDPR data in csv'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29713](https://github.com/PrestaShop/PrestaShop/pull/29713): Functional tests - Add new test 'FO > Contact us on GDPR page'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29683](https://github.com/PrestaShop/PrestaShop/pull/29683): Functional tests : FO - Search no result / Search product bar, consult autocomplete list / Search a product and validate, by [@Progi1984](https://github.com/Progi1984)
* [#29657](https://github.com/PrestaShop/PrestaShop/pull/29657): Functional tests : BO - My Profile, by [@Progi1984](https://github.com/Progi1984)
* [#29492](https://github.com/PrestaShop/PrestaShop/pull/29492): Sanity tests - Add new test "Bulk delete products" V2. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Back office
* [#29224](https://github.com/PrestaShop/PrestaShop/pull/29224): Fix subcategories for multishop. Thank you [@MeKeyCool](https://github.com/MeKeyCool)


### Front office
* [#29665](https://github.com/PrestaShop/PrestaShop/pull/29665): Fix bad selector to fix checkbox issues on RMA. Thank you [@mflasquin](https://github.com/mflasquin)


## Code changes in modules, themes & tools


### Changes in developer documentation sources
* [#1524](https://github.com/PrestaShop/docs/pull/1524): Fixed JS Doc on UI Tests, by [@Progi1984](https://github.com/Progi1984)
* [#1523](https://github.com/PrestaShop/docs/pull/1523): Backport of 1522 - Fix typos in CRUD Form doc. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1522](https://github.com/PrestaShop/docs/pull/1522): Fix typos in form crud doc. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1521](https://github.com/PrestaShop/docs/pull/1521): Revert "Remove unnecessary files" - two images deleted in previous PR. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1520](https://github.com/PrestaShop/docs/pull/1520): Backport of PR 1519. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1519](https://github.com/PrestaShop/docs/pull/1519): Fix some typos and syntax. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1518](https://github.com/PrestaShop/docs/pull/1518): Improve webservice create resource example. Thank you [@didpoule](https://github.com/didpoule)
* [#1517](https://github.com/PrestaShop/docs/pull/1517): Improve `webservices` create a resource example . Thank you [@didpoule](https://github.com/didpoule)
* [#1516](https://github.com/PrestaShop/docs/pull/1516): Fix reference from develop to 8.x. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1512](https://github.com/PrestaShop/docs/pull/1512): Fix inconsistency link between MarkDown and HugoServer for PR 1430. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1508](https://github.com/PrestaShop/docs/pull/1508): Fix references from develop to 1.7.8.0. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1507](https://github.com/PrestaShop/docs/pull/1507): Testing : Improving Section & Complete documentation, by [@Progi1984](https://github.com/Progi1984)
* [#1475](https://github.com/PrestaShop/docs/pull/1475): Add sendemail=1 to order_carriers endpoint. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1470](https://github.com/PrestaShop/docs/pull/1470): Fix links with relfref. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1410](https://github.com/PrestaShop/docs/pull/1410): Add Webservice tutorial in (Modules) extension concept section. Thank you [@marsaldev](https://github.com/marsaldev)
* [#1408](https://github.com/PrestaShop/docs/pull/1408): Update migration.md. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)
* [#1386](https://github.com/PrestaShop/docs/pull/1386): Introduce PATCH request into webservice API. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1374](https://github.com/PrestaShop/docs/pull/1374): Revise Webservice API reference. Thank you [@LorisB](https://github.com/LorisB)


### Traces
* [#34](https://github.com/PrestaShop/traces/pull/34): Bump version and add ps-org-theme, by [@kpodemski](https://github.com/kpodemski)


### The PrestaShop open source project
* [#123](https://github.com/PrestaShop/open-source/pull/123): Update project organization, by [@matks](https://github.com/matks)
* [#114](https://github.com/PrestaShop/open-source/pull/114): Fix double slash for devdoclink. Thank you [@okom3pom](https://github.com/okom3pom)


### Stylelint configuration
* [#50](https://github.com/PrestaShop/stylelint-config/pull/50): Bump stylelint from 14.12.1 to 14.13.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Hummingbird theme
* [#375](https://github.com/PrestaShop/hummingbird/pull/375): Switch to sass-embedded, by [@NeOMakinG](https://github.com/NeOMakinG)


### Customer reassurance block module
* [#448](https://github.com/PrestaShop/blockreassurance/pull/448): Bump @babel/core from 7.19.1 to 7.19.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#447](https://github.com/PrestaShop/blockreassurance/pull/447): Bump eslint from 8.23.1 to 8.24.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#717](https://github.com/PrestaShop/ps_facetedsearch/pull/717): Bump @babel/core from 7.19.1 to 7.19.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#716](https://github.com/PrestaShop/ps_facetedsearch/pull/716): Bump @babel/cli from 7.18.10 to 7.19.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#715](https://github.com/PrestaShop/ps_facetedsearch/pull/715): Bump @babel/preset-env from 7.19.1 to 7.19.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#714](https://github.com/PrestaShop/ps_facetedsearch/pull/714): Bump eslint from 8.23.1 to 8.24.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Translation Files repository
* [#29](https://github.com/PrestaShop/TranslationFiles/pull/29): Use environment and switch credentials based on the triggered branch, by [@jolelievre](https://github.com/jolelievre)
* [#28](https://github.com/PrestaShop/TranslationFiles/pull/28): Add missing secret parameter and add master branch for trigger, by [@jolelievre](https://github.com/jolelievre)
* [#27](https://github.com/PrestaShop/TranslationFiles/pull/27): Add cron task to update TranslationFiles using TranslationTool, by [@jolelievre](https://github.com/jolelievre)


### PHP Developer Tools
* [#70](https://github.com/PrestaShop/php-dev-tools/pull/70): doc: Add version guidance. Thank you [@jmcollin](https://github.com/jmcollin)


### Auto Upgrade module
* [#511](https://github.com/PrestaShop/autoupgrade/pull/511): Fix broken wording, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Issues Bot
* [#86](https://github.com/PrestaShop/issuebot/pull/86): Add to sandbox in case the card as been created into not ready, by [@NeOMakinG](https://github.com/NeOMakinG)


### Classic theme
* [#55](https://github.com/PrestaShop/classic-theme/pull/55): Add identifier when there are no results, by [@Progi1984](https://github.com/Progi1984)


### Module Releases Monitor
* [#15](https://github.com/PrestaShop/ps-monitor-module-releases/pull/15): Add datable. Thank you [@okom3pom](https://github.com/okom3pom)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Progi1984](https://github.com/Progi1984), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@thomasnares](https://github.com/thomasnares), [@leemyongpakvn](https://github.com/leemyongpakvn), [@didpoule](https://github.com/didpoule), [@kpodemski](https://github.com/kpodemski), [@matks](https://github.com/matks), [@dependabot[bot]](https://github.com/apps/dependabot), [@NeOMakinG](https://github.com/NeOMakinG), [@jolelievre](https://github.com/jolelievre), [@boubkerbribri](https://github.com/boubkerbribri), [@jmcollin](https://github.com/jmcollin), [@Hlavtox](https://github.com/Hlavtox), [@matthieu-rolland](https://github.com/matthieu-rolland), [@khouloudbelguith](https://github.com/khouloudbelguith), [@mflasquin](https://github.com/mflasquin), [@FabienPapet](https://github.com/FabienPapet), [@yanmakouf](https://github.com/yanmakouf), [@nicosomb](https://github.com/nicosomb), [@zuk3975](https://github.com/zuk3975), [@jf-viguier](https://github.com/jf-viguier), [@PrestaEdit](https://github.com/PrestaEdit), [@okom3pom](https://github.com/okom3pom), [@MeKeyCool](https://github.com/MeKeyCool), [@marsaldev](https://github.com/marsaldev), [@LouisAUTHIE](https://github.com/LouisAUTHIE), [@LorisB](https://github.com/LorisB)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

