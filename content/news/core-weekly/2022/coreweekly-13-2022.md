---
layout: post
aliases: ["/news/coreweekly-13-2022"]
slug: "coreweekly-13-2022"
title:  "PrestaShop Core Weekly - Week 13 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-04-04
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 28th of March to Sunday 3rd of April 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Two major works were merged last week: the [new header design](https://github.com/PrestaShop/PrestaShop/pull/27233) for the product page by [@jolelievre](https://github.com/jolelievre) and a [new extensible module manager](https://github.com/PrestaShop/PrestaShop/pull/27632) by [@atomiix](https://github.com/atomiix). The next session of the public PrestaShop demo from the maintainers team will also happen this week on [Wednesday at 4pm CET](https://build.prestashop.com/news/upcoming-demo-3-2022/).

## Releases

* [TranslationToolsBundle](https://github.com/PrestaShop/TranslationToolsBundle): [v5.0.3](https://github.com/PrestaShop/TranslationToolsBundle/releases/tag/v5.0.3)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [51 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-03-28..2022-04-03) have been created in the project repositories;
- [40 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-03-28..2022-04-03), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-03-28..2022-04-03) on the core;
- [71 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-03-28..2022-04-03) in the project repositories;
- [74 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-03-28..2022-04-03), including [68 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-03-28..2022-04-03).


## Code changes in the 'develop' branch


### Core
* [#28060](https://github.com/PrestaShop/PrestaShop/pull/28060): Removed phpstan-ignore with use of `dynamicConstantNames`, by [@Progi1984](https://github.com/Progi1984)
* [#28021](https://github.com/PrestaShop/PrestaShop/pull/28021): Remove HookExtension::hookCount method, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27983](https://github.com/PrestaShop/PrestaShop/pull/27983): Fix PHPDoc on Address class. Thank you [@comxd](https://github.com/comxd)
* [#27723](https://github.com/PrestaShop/PrestaShop/pull/27723): Bump PHPStan from 0.12.88 to 1.5, by [@Progi1984](https://github.com/Progi1984)
* [#27662](https://github.com/PrestaShop/PrestaShop/pull/27662): Allow X at the end of ISBN. Thank you [@okom3pom](https://github.com/okom3pom)
* [#26743](https://github.com/PrestaShop/PrestaShop/pull/26743): Provide modules information about old order status. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Back office
* [#28023](https://github.com/PrestaShop/PrestaShop/pull/28023): Fixed the wording translation for Enable/Disable Mobile in Modules page, by [@Progi1984](https://github.com/Progi1984)
* [#27969](https://github.com/PrestaShop/PrestaShop/pull/27969): Add the possibility to load PHP / XML files for modules services. Thank you [@intraordinaire](https://github.com/intraordinaire)
* [#27853](https://github.com/PrestaShop/PrestaShop/pull/27853): BO Migration Contact > Stores - Add command, command handler and behat tests for bulk status toggle. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)
* [#27632](https://github.com/PrestaShop/PrestaShop/pull/27632): New extensible module manager API, by [@atomiix](https://github.com/atomiix)
* [#27404](https://github.com/PrestaShop/PrestaShop/pull/27404): Simplify multistore service call in controllers. Thank you [@PululuK](https://github.com/PululuK)
* [#27233](https://github.com/PrestaShop/PrestaShop/pull/27233): Integrate new header design for product page, by [@jolelievre](https://github.com/jolelievre)
* [#26938](https://github.com/PrestaShop/PrestaShop/pull/26938): SpecificPrice priority form. Thank you [@zuk3975](https://github.com/zuk3975)
* [#26774](https://github.com/PrestaShop/PrestaShop/pull/26774): Fix missing canonicals. Thank you [@Prestaworks](https://github.com/Prestaworks)


### Front office
* [#27941](https://github.com/PrestaShop/PrestaShop/pull/27941): displayOverrideTemplate hook not executing on checkout page due to naming issue.. Thank you [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul)


### Tests
* [#28095](https://github.com/PrestaShop/PrestaShop/pull/28095): Fix phpstan test with different php versions, by [@atomiix](https://github.com/atomiix)
* [#27454](https://github.com/PrestaShop/PrestaShop/pull/27454): Functional tests - Add new test "Select previous carts from BO > Add new order page", by [@khouloudbelguith](https://github.com/khouloudbelguith)


## Code changes in the '1.7.8.x' branch


### Core
* [#28083](https://github.com/PrestaShop/PrestaShop/pull/28083): Remove useless sensio/distribution-bundle composer scripts, by [@atomiix](https://github.com/atomiix)


### Back office
* [#28076](https://github.com/PrestaShop/PrestaShop/pull/28076): Remove unwanted char, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#28031](https://github.com/PrestaShop/PrestaShop/pull/28031): Handle empty outstanding_allow_amount field, by [@atomiix](https://github.com/atomiix)


### Front office
* [#27922](https://github.com/PrestaShop/PrestaShop/pull/27922): Avoid Notice: Trying to access array offset on value of type bool. Thank you [@danidomen](https://github.com/danidomen)


### Web services
* [#27555](https://github.com/PrestaShop/PrestaShop/pull/27555): Fix update attachment webservice. Thank you [@rsoulard-prolaser](https://github.com/rsoulard-prolaser)


### Tests
* [#27935](https://github.com/PrestaShop/PrestaShop/pull/27935): Fix nightly - Add iteration to search newsletter module from module catalog page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Issues Bot
* [#74](https://github.com/PrestaShop/issuebot/pull/74): Fix count authors for top watcher label applyance, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#73](https://github.com/PrestaShop/issuebot/pull/73): Fix crash when applying top watcher label, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### presthubot
* [#48](https://github.com/PrestaShop/presthubot/pull/48): SlackNotifier : Added test duration in Nightly Report, by [@Progi1984](https://github.com/Progi1984)
* [#46](https://github.com/PrestaShop/presthubot/pull/46): Bump guzzlehttp/psr7 from 1.7.0 to 1.8.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop Project Metrics
* [#35](https://github.com/PrestaShop/ps-project-metrics/pull/35): Enable developer week view, by [@matks](https://github.com/matks)
* [#32](https://github.com/PrestaShop/ps-project-metrics/pull/32): Improve documentation, by [@matks](https://github.com/matks)
* [#31](https://github.com/PrestaShop/ps-project-metrics/pull/31): Add command to delete review comment data webhook older than 3 days, by [@matks](https://github.com/matks)


### Hummingbird theme
* [#224](https://github.com/PrestaShop/hummingbird/pull/224): Update ps_mainmenu.tpl. Thank you [@rodriciru](https://github.com/rodriciru)
* [#220](https://github.com/PrestaShop/hummingbird/pull/220): Add useQuantityInput. Thank you [@mparvazi](https://github.com/mparvazi)


### Changes in developer documentation sources
* [#1339](https://github.com/PrestaShop/docs/pull/1339): Add actionOrderStatusPostUpdate  hooks new params. Thank you [@PululuK](https://github.com/PululuK)
* [#1338](https://github.com/PrestaShop/docs/pull/1338): Fix minor typos. Thank you [@itsvahid](https://github.com/itsvahid)
* [#1337](https://github.com/PrestaShop/docs/pull/1337): Doc possibility to load PHP / XML files for modules services. Thank you [@PululuK](https://github.com/PululuK)
* [#1336](https://github.com/PrestaShop/docs/pull/1336): Add Taking care of prestashop page (about database cleaning), by [@matks](https://github.com/matks)
* [#1335](https://github.com/PrestaShop/docs/pull/1335): Add child section to Scale, by [@matks](https://github.com/matks)
* [#1334](https://github.com/PrestaShop/docs/pull/1334): Document removed endpoints, by [@eternoendless](https://github.com/eternoendless)
* [#1330](https://github.com/PrestaShop/docs/pull/1330): Update mobile actions. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1279](https://github.com/PrestaShop/docs/pull/1279): Fix usage of underscores in new translation system page. Thank you [@jonpontet](https://github.com/jonpontet)


### Banner module
* [#44](https://github.com/PrestaShop/ps_banner/pull/44): Bump minimist from 1.2.5 to 1.2.6 in /tests/E2E. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Contextual Help API
* [#5](https://github.com/PrestaShop/contextual-help-api/pull/5): Bump guzzlehttp/psr7 from 2.0.0 to 2.2.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestonBot
* [#128](https://github.com/PrestaShop/prestonbot/pull/128): Bump guzzlehttp/psr7 from 1.5.2 to 1.8.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Wishlist block module
* [#168](https://github.com/PrestaShop/blockwishlist/pull/168): Fix multiple modal open on wishlist list page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#167](https://github.com/PrestaShop/blockwishlist/pull/167): Bump minimist from 1.2.5 to 1.2.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#166](https://github.com/PrestaShop/blockwishlist/pull/166): Fixed wishlists list from frontoffice, by [@Progi1984](https://github.com/Progi1984)


### Classic theme
* [#19](https://github.com/PrestaShop/classic-theme/pull/19): Bump minimist from 1.2.5 to 1.2.6 in /_dev. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#10](https://github.com/PrestaShop/classic-theme/pull/10): Add licences on build and update gitignore, by [@NeOMakinG](https://github.com/NeOMakinG)


### Order Notifications on the Favicon module
* [#36](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/36): Create missing config.xml, by [@atomiix](https://github.com/atomiix)


### PrestaShop contributors website
* [#73](https://github.com/PrestaShop/TopContributors/pull/73): Bump elliptic from 6.5.3 to 6.5.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#72](https://github.com/PrestaShop/TopContributors/pull/72): Bump node-notifier from 8.0.0 to 8.0.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#71](https://github.com/PrestaShop/TopContributors/pull/71): Bump ua-parser-js from 0.7.22 to 0.7.31. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#70](https://github.com/PrestaShop/TopContributors/pull/70): Bump ssri from 6.0.1 to 6.0.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#69](https://github.com/PrestaShop/TopContributors/pull/69): Bump browserslist from 4.14.7 to 4.20.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#67](https://github.com/PrestaShop/TopContributors/pull/67): Bump color-string from 1.5.4 to 1.9.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#64](https://github.com/PrestaShop/TopContributors/pull/64): Bump nanoid from 3.1.18 to 3.3.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer reassurance block module
* [#380](https://github.com/PrestaShop/blockreassurance/pull/380): Bump minimist from 1.2.5 to 1.2.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#379](https://github.com/PrestaShop/blockreassurance/pull/379): Bump eslint from 8.11.0 to 8.12.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#638](https://github.com/PrestaShop/ps_facetedsearch/pull/638): Bump minimist from 1.2.5 to 1.2.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#637](https://github.com/PrestaShop/ps_facetedsearch/pull/637): Bump eslint from 8.11.0 to 8.12.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### stylelint configuration
* [#30](https://github.com/PrestaShop/stylelint-config/pull/30): Bump stylelint from 14.6.0 to 14.6.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#472](https://github.com/PrestaShop/autoupgrade/pull/472): Handle PrestaShop versions before 1.7.5.1 + CI fix, by [@atomiix](https://github.com/atomiix)
* [#450](https://github.com/PrestaShop/autoupgrade/pull/450): Disabled upgrades of modules if the installed version is higher than this proposed by Addons, by [@Progi1984](https://github.com/Progi1984)


### PrestaShop Specifications
* [#318](https://github.com/PrestaShop/prestashop-specs/pull/318): Fix title about customers sessions. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Data mining for statistics module
* [#20](https://github.com/PrestaShop/statsdata/pull/20): Fix statistics error. Thank you [@soulardromain](https://github.com/soulardromain)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@matthieu-rolland](https://github.com/matthieu-rolland), [@Progi1984](https://github.com/Progi1984), [@matks](https://github.com/matks), [@rodriciru](https://github.com/rodriciru), [@PululuK](https://github.com/PululuK), [@atomiix](https://github.com/atomiix), [@itsvahid](https://github.com/itsvahid), [@dependabot[bot]](https://github.com/apps/dependabot), [@PierreRambaud](https://github.com/PierreRambaud), [@NeOMakinG](https://github.com/NeOMakinG), [@eternoendless](https://github.com/eternoendless), [@PrestaEdit](https://github.com/PrestaEdit), [@mparvazi](https://github.com/mparvazi), [@comxd](https://github.com/comxd), [@intraordinaire](https://github.com/intraordinaire), [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@danidomen](https://github.com/danidomen), [@LouisAUTHIE](https://github.com/LouisAUTHIE), [@okom3pom](https://github.com/okom3pom), [@rsoulard-prolaser](https://github.com/rsoulard-prolaser), [@jonpontet](https://github.com/jonpontet), [@khouloudbelguith](https://github.com/khouloudbelguith), [@jolelievre](https://github.com/jolelievre), [@soulardromain](https://github.com/soulardromain), [@zuk3975](https://github.com/zuk3975), [@Prestaworks](https://github.com/Prestaworks), [@Hlavtox](https://github.com/Hlavtox)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

