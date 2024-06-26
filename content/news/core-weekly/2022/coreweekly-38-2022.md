---
layout: post
aliases: ["/news/coreweekly-38-2022"]
title:  "PrestaShop Core Weekly - Week 38 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-09-28
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 19th to Sunday 25th of September 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

PrestaShop 8.0 release candidate version is very close :eyes:. We expect it to be released within the next week or two. You can also expect more updates on the [Release 8.0.0 page](https://github.com/PrestaShop/PrestaShop/issues/26427) in the near future.

Today starts this year's edition of [Hacktoberfest](https://hacktoberfest.com/). You can read more about this event and how to participate [in our article](/news/hacktoberfest-2022/).

Last but not least, we are very happy to welcome @thomasnares to the project, who joined us as a Technical Content Manager. Thomas will work together with maintainers and the community to improve [developer documentation](https://devdocs.prestashop-project.org).

## Releases

* [Contextual help API](https://github.com/PrestaShop/contextual-help-api): [v1.0.1](https://github.com/PrestaShop/contextual-help-api/releases/tag/1.0.1)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [31 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-09-19..2022-09-25) have been created in the project repositories;
- [32 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-09-19..2022-09-25), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-09-19..2022-09-25) on the core;
- [90 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-09-19..2022-09-25) in the project repositories;
- [77 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-09-19..2022-09-25), including [65 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-09-19..2022-09-25).
        


## Code changes in the 'develop' branch


### Back office
* [#28716](https://github.com/PrestaShop/PrestaShop/pull/28716): Match the right carrier in the select with the price shown when creating a new order from BO. Thank you [@marsaldev](https://github.com/marsaldev)


## Code changes in the '8.0.x' branch


### Core
* [#29595](https://github.com/PrestaShop/PrestaShop/pull/29595): Add source parameter to actionBeforeInstallModule & actionBeforeUpgradeModule hooks, by [@atomiix](https://github.com/atomiix)


### Back office
* [#29714](https://github.com/PrestaShop/PrestaShop/pull/29714): Functional tests - Refacto the BO - Delivery Slip - Enable Disable Product Image, by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#29660](https://github.com/PrestaShop/PrestaShop/pull/29660): Fix ModuleManager exception when ps_distributionapiclient is not installed, by [@atomiix](https://github.com/atomiix)


### Installer
* [#29670](https://github.com/PrestaShop/PrestaShop/pull/29670): Restore install sprintf JS lib integrity, by [@matks](https://github.com/matks)


### Tests
* [#29725](https://github.com/PrestaShop/PrestaShop/pull/29725): Functional Tests - Add New test 'BO - Cart rules - Case 9 - Check Total available' . Thank you [@cfarhani06](https://github.com/cfarhani06)
* [#29718](https://github.com/PrestaShop/PrestaShop/pull/29718): Functional tests : Refacto BO - Customers - CRUD, by [@Progi1984](https://github.com/Progi1984)
* [#29706](https://github.com/PrestaShop/PrestaShop/pull/29706): Run code checks only for tests/UI repository, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#29697](https://github.com/PrestaShop/PrestaShop/pull/29697): Add dotenv dependency and create .env.ci file for tests/UI, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#29691](https://github.com/PrestaShop/PrestaShop/pull/29691): Functional tests - Add new test FO > User account > 'Check gdpr data in pdf' . Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29690](https://github.com/PrestaShop/PrestaShop/pull/29690): Disable apache mpm_event module in the CI, by [@atomiix](https://github.com/atomiix)
* [#29687](https://github.com/PrestaShop/PrestaShop/pull/29687): Functional tests - Fix 'Customer service tests' in FO and BO. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29662](https://github.com/PrestaShop/PrestaShop/pull/29662): Add functional Tests - User account log out. Thank you [@cfarhani06](https://github.com/cfarhani06)
* [#29640](https://github.com/PrestaShop/PrestaShop/pull/29640): Functional tests - Refacto test BO - Invoices - Other Options, by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#29479](https://github.com/PrestaShop/PrestaShop/pull/29479): Sanity tests - Add new test 'Delete product' V2. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29444](https://github.com/PrestaShop/PrestaShop/pull/29444): Add workflow for product V2 sanity tests, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.8.x' branch


### Back office
* [#29553](https://github.com/PrestaShop/PrestaShop/pull/29553): Add min height on alert to center icons vertically. Thank you [@lartist](https://github.com/lartist)


### Front office
* [#29632](https://github.com/PrestaShop/PrestaShop/pull/29632): Select new invoice address automatically. Thank you [@lartist](https://github.com/lartist)


### Tests
* [#29698](https://github.com/PrestaShop/PrestaShop/pull/29698): Disable apache mpm_event module in the CI (cherry-pick), by [@atomiix](https://github.com/atomiix)


## Code changes in modules, themes & tools


### Auto Upgrade module
* [#509](https://github.com/PrestaShop/autoupgrade/pull/509): Add domain in all trans calls in twig templates, by [@jolelievre](https://github.com/jolelievre)
* [#505](https://github.com/PrestaShop/autoupgrade/pull/505): Hardcode translation domains, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#497](https://github.com/PrestaShop/autoupgrade/pull/497): Fix version compare check to use CoreUpgrader 8 with 8.0 version. Thank you [@FabienPapet](https://github.com/FabienPapet)


### Changes in developer documentation sources
* [#1511](https://github.com/PrestaShop/docs/pull/1511): Backport of PR1510. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1510](https://github.com/PrestaShop/docs/pull/1510): Remove a wrong link in democqrshooksusage module. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)
* [#1506](https://github.com/PrestaShop/docs/pull/1506): Change referenced module name in facet search documentation. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1505](https://github.com/PrestaShop/docs/pull/1505): Fix indentation on admin-controllers / tabs (Backport 1394). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1504](https://github.com/PrestaShop/docs/pull/1504): Request to update the link to customer-manager.js (backport 1381 + 1392). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1503](https://github.com/PrestaShop/docs/pull/1503): Fix naming conventions duplicate word (backport 1380). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1501](https://github.com/PrestaShop/docs/pull/1501): Fix typo on foreign key (Backport of #1379). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1500](https://github.com/PrestaShop/docs/pull/1500): Addresses webservice spelling fix (Backported #1377). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1499](https://github.com/PrestaShop/docs/pull/1499): Fix minor typo for MySQL and wording interrogation. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1498](https://github.com/PrestaShop/docs/pull/1498): Update Faceted search doc (Backported #1371). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1497](https://github.com/PrestaShop/docs/pull/1497): Module error with namespace Foo\Repository, change composer links (Backported #1364 + Fix). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1496](https://github.com/PrestaShop/docs/pull/1496): Add hint about var/cache folder for upgrade (Backported #1332). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1495](https://github.com/PrestaShop/docs/pull/1495): Fix PSR issues on examples of mail templates for 1.7.x. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1494](https://github.com/PrestaShop/docs/pull/1494): Fix PSR issues on examples of mail templates. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1493](https://github.com/PrestaShop/docs/pull/1493): Fix wrong url for composer link - was fixed but not completely right. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1492](https://github.com/PrestaShop/docs/pull/1492): Fix wrong url for composer.md (Backport #1367). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1491](https://github.com/PrestaShop/docs/pull/1491): Fix module mail templates example, add extends (Backported #1348). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1490](https://github.com/PrestaShop/docs/pull/1490): Fix code examples on grids (Backported #1341). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1489](https://github.com/PrestaShop/docs/pull/1489): Fix DbQuery class limit method signature (Backported #1306). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1488](https://github.com/PrestaShop/docs/pull/1488): Add a title to the list of Smarty variables (Backported 1305). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1487](https://github.com/PrestaShop/docs/pull/1487): Fix usage of underscores in new translation system page (Backported #1279). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1486](https://github.com/PrestaShop/docs/pull/1486): Update _index.md (Backported #1382). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1485](https://github.com/PrestaShop/docs/pull/1485): Fix wording (Backported #1383). Thank you [@thomasnares](https://github.com/thomasnares)
* [#1480](https://github.com/PrestaShop/docs/pull/1480): Update reference.md. Thank you [@cernekj](https://github.com/cernekj)
* [#1471](https://github.com/PrestaShop/docs/pull/1471): Fix KpiRowHook location. Thank you [@PululuK](https://github.com/PululuK)
* [#1430](https://github.com/PrestaShop/docs/pull/1430): Use hooks on Symfony page: new catalog-tools button for PS 1.7.6.5, switch to SF 4.4. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Distribution API Client
* [#11](https://github.com/PrestaShop/ps_distributionapiclient/pull/11): Bump 1.0.3, by [@matks](https://github.com/matks)
* [#10](https://github.com/PrestaShop/ps_distributionapiclient/pull/10): Do not download module if source is not empty, by [@atomiix](https://github.com/atomiix)


### stylelint configuration
* [#49](https://github.com/PrestaShop/stylelint-config/pull/49): Bump stylelint from 14.12.0 to 14.12.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#48](https://github.com/PrestaShop/stylelint-config/pull/48): Bump stylelint from 14.11.0 to 14.12.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Hummingbird theme
* [#374](https://github.com/PrestaShop/hummingbird/pull/374): Add CleanWebpackPlugin. Thank you [@lramos-prolaser](https://github.com/lramos-prolaser)
* [#373](https://github.com/PrestaShop/hummingbird/pull/373): Upgrade autoprefixer to latest version. Thank you [@lramos-prolaser](https://github.com/lramos-prolaser)


### Theme for PrestaShop Project's site
* [#4](https://github.com/PrestaShop/ps-org-theme/pull/4): Base template for releases, by [@kpodemski](https://github.com/kpodemski)


### PrestaShop contributors website
* [#88](https://github.com/PrestaShop/TopContributors/pull/88): Bump ejs and nuxt. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#87](https://github.com/PrestaShop/TopContributors/pull/87): Modify CNAME & Deploy, by [@Progi1984](https://github.com/Progi1984)
* [#86](https://github.com/PrestaShop/TopContributors/pull/86): MEP Integration 2022-08-01, by [@Progi1984](https://github.com/Progi1984)


### Issues Bot
* [#85](https://github.com/PrestaShop/issuebot/pull/85): Add new kanbans, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#84](https://github.com/PrestaShop/issuebot/pull/84): Update to new API and manage maxikanban cards events, by [@NeOMakinG](https://github.com/NeOMakinG)


### Contextual Help API
* [#14](https://github.com/PrestaShop/contextual-help-api/pull/14): Add missing Gitbook markdown parsing feature, by [@atomiix](https://github.com/atomiix)


### The PrestaShop open source project
* [#116](https://github.com/PrestaShop/open-source/pull/116): Support template github don't exist anymore. Thank you [@okom3pom](https://github.com/okom3pom)
* [#64](https://github.com/PrestaShop/open-source/pull/64): Improvement for README, by [@matks](https://github.com/matks)


### Product Comments module
* [#146](https://github.com/PrestaShop/productcomments/pull/146): Add validation for 2 positive integer fields. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@jolelievre](https://github.com/jolelievre), [@cfarhani06](https://github.com/cfarhani06), [@Progi1984](https://github.com/Progi1984), [@leemyongpakvn](https://github.com/leemyongpakvn), [@matks](https://github.com/matks), [@dependabot[bot]](https://github.com/apps/dependabot), [@khouloudbelguith](https://github.com/khouloudbelguith), [@thomasnares](https://github.com/thomasnares), [@lramos-prolaser](https://github.com/lramos-prolaser), [@boubkerbribri](https://github.com/boubkerbribri), [@kpodemski](https://github.com/kpodemski), [@atomiix](https://github.com/atomiix), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@NeOMakinG](https://github.com/NeOMakinG), [@MeKeyCool](https://github.com/MeKeyCool), [@matthieu-rolland](https://github.com/matthieu-rolland), [@lartist](https://github.com/lartist), [@cernekj](https://github.com/cernekj), [@PululuK](https://github.com/PululuK), [@okom3pom](https://github.com/okom3pom), [@FabienPapet](https://github.com/FabienPapet), [@marsaldev](https://github.com/marsaldev)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

