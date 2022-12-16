---
layout: post
aliases: ["/news/coreweekly-24-2022"]
title:  "PrestaShop Core Weekly - Week 24 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-06-20
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 13th to Sunday 19th of June 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)



## A quick update about PrestaShop's GitHub issues and pull requests:

- [41 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-06-13..2022-06-19) have been created in the project repositories;
- [31 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-06-13..2022-06-19), including [6 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-06-13..2022-06-19) on the core;
- [58 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-06-13..2022-06-19) in the project repositories;
- [59 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-06-13..2022-06-19), including [45 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-06-13..2022-06-19).
        


## Code changes in the 'develop' branch


### Core
* [#28743](https://github.com/PrestaShop/PrestaShop/pull/28743): Remove dependency to the missing news.yml, by [@sowbiba](https://github.com/sowbiba)


### Back office
* [#28763](https://github.com/PrestaShop/PrestaShop/pull/28763): Fixed redirect after canceling the edition of an address from the customer detail page, by [@Progi1984](https://github.com/Progi1984)
* [#28722](https://github.com/PrestaShop/PrestaShop/pull/28722): Cart with wrong id_shop_group when order is made in BO. Thank you [@cquintini](https://github.com/cquintini)
* [#28683](https://github.com/PrestaShop/PrestaShop/pull/28683): Improve datepicker design in dashboard. Thank you [@mparvazi](https://github.com/mparvazi)
* [#28613](https://github.com/PrestaShop/PrestaShop/pull/28613): Fix inability to delete csv-converted files from import. Thank you [@gennaris](https://github.com/gennaris)
* [#28482](https://github.com/PrestaShop/PrestaShop/pull/28482): Handle product ecotax in product v2 (for both standard and combination form), by [@jolelievre](https://github.com/jolelievre)
* [#27246](https://github.com/PrestaShop/PrestaShop/pull/27246): Introducing Horizontal Migration code for listings. Thank you [@tegbessou](https://github.com/tegbessou)


### Front office
* [#27890](https://github.com/PrestaShop/PrestaShop/pull/27890): Add check if the gift wrapping is disabled. Thank you [@marsaldev](https://github.com/marsaldev)


### Installer
* [#28481](https://github.com/PrestaShop/PrestaShop/pull/28481): Handle no themes issue at install, by [@matks](https://github.com/matks)


## Code changes in the '8.0.x' branch


### Tests
* [#28769](https://github.com/PrestaShop/PrestaShop/pull/28769): Functional test - Add new test to check login in FO. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28768](https://github.com/PrestaShop/PrestaShop/pull/28768): Functional tests - Fix 'Gift option' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28756](https://github.com/PrestaShop/PrestaShop/pull/28756): Fix nightly 15-06-2022 : Fix check help side bar test of features page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28741](https://github.com/PrestaShop/PrestaShop/pull/28741): Add node and npm versions for UI tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### PrestaShop contributors website
* [#78](https://github.com/PrestaShop/TopContributors/pull/78): Fix eslint. Thank you [@okom3pom](https://github.com/okom3pom)
* [#76](https://github.com/PrestaShop/TopContributors/pull/76): Add an icon and link for OrganizationMembers. Thank you [@okom3pom](https://github.com/okom3pom)
* [#75](https://github.com/PrestaShop/TopContributors/pull/75): Fix popup that doesn't open. Thank you [@okom3pom](https://github.com/okom3pom)


### Nightly board
* [#85](https://github.com/PrestaShop/nightly-board/pull/85): Merge develop to master, by [@boubkerbribri](https://github.com/boubkerbribri)


### Changes in developer documentation sources
* [#1393](https://github.com/PrestaShop/docs/pull/1393): Add php 8.1 support. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1392](https://github.com/PrestaShop/docs/pull/1392): Remove un-needed warning introduced by PR 1381, by [@matks](https://github.com/matks)
* [#1388](https://github.com/PrestaShop/docs/pull/1388): Add info about the undocumented hideTabs options. Thank you [@gdebrion](https://github.com/gdebrion)
* [#1385](https://github.com/PrestaShop/docs/pull/1385): Add info about the undocumented hideTabs options. Thank you [@gdebrion](https://github.com/gdebrion)
* [#1381](https://github.com/PrestaShop/docs/pull/1381): Request to update the link to customer-manager.js. Thank you [@Unsleeping](https://github.com/Unsleeping)
* [#1333](https://github.com/PrestaShop/docs/pull/1333): Documented BC for PR #27890 (core repository). Thank you [@marsaldev](https://github.com/marsaldev)


### Banner module
* [#45](https://github.com/PrestaShop/ps_banner/pull/45): Bump jpeg-js from 0.4.2 to 0.4.4 in /tests/E2E. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#493](https://github.com/PrestaShop/autoupgrade/pull/493): Bump jpeg-js from 0.4.3 to 0.4.4 in /tests/e2e. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#491](https://github.com/PrestaShop/autoupgrade/pull/491): Add SQL Query relative to Fuzzy Search, by [@Progi1984](https://github.com/Progi1984)
* [#487](https://github.com/PrestaShop/autoupgrade/pull/487): Hook for alternative search panel, by [@sowbiba](https://github.com/sowbiba)


### Customer reassurance block module
* [#412](https://github.com/PrestaShop/blockreassurance/pull/412): Bump mini-css-extract-plugin from 2.6.0 to 2.6.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#411](https://github.com/PrestaShop/blockreassurance/pull/411): Bump @babel/core from 7.18.2 to 7.18.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#410](https://github.com/PrestaShop/blockreassurance/pull/410): Bump webpack-cli from 4.9.2 to 4.10.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#394](https://github.com/PrestaShop/blockreassurance/pull/394): Update license headers, by [@matks](https://github.com/matks)


### presthubot
* [#53](https://github.com/PrestaShop/presthubot/pull/53): Bump guzzlehttp/guzzle from 6.5.5 to 6.5.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#52](https://github.com/PrestaShop/presthubot/pull/52): Disable sending slack notif to core slack channel and matks, by [@matks](https://github.com/matks)


### Main menu module
* [#61](https://github.com/PrestaShop/ps_mainmenu/pull/61): BO: Fix overlapping columns. Thank you [@hibatallahAouadni](https://github.com/hibatallahAouadni)


### Faceted search module
* [#668](https://github.com/PrestaShop/ps_facetedsearch/pull/668): Bump @babel/core from 7.18.2 to 7.18.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Brands list module
* [#15](https://github.com/PrestaShop/ps_brandlist/pull/15): Allow only integers for the configuration 'Number of elements to display', by [@Progi1984](https://github.com/Progi1984)


### stylelint configuration
* [#42](https://github.com/PrestaShop/stylelint-config/pull/42): Bump stylelint from 14.8.5 to 14.9.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Hummingbird theme
* [#323](https://github.com/PrestaShop/hummingbird/pull/323): Fix result duplication for instant search. Thank you [@mparvazi](https://github.com/mparvazi)
* [#318](https://github.com/PrestaShop/hummingbird/pull/318): Remove override rules for blockreassurance. Thank you [@mparvazi](https://github.com/mparvazi)


### PrestonBot
* [#132](https://github.com/PrestaShop/prestonbot/pull/132): Update dependencies, by [@atomiix](https://github.com/atomiix)


### Classic theme
* [#35](https://github.com/PrestaShop/classic-theme/pull/35): FO: Fix the display of labels in/out stock. Thank you [@hibatallahAouadni](https://github.com/hibatallahAouadni)
* [#33](https://github.com/PrestaShop/classic-theme/pull/33): Fix content width of registration form, by [@NeOMakinG](https://github.com/NeOMakinG)


### Cash on delivery module
* [#45](https://github.com/PrestaShop/ps_cashondelivery/pull/45): Fixed autoload call and bump to 2.0.1, by [@Progi1984](https://github.com/Progi1984)


### Custom text module
* [#71](https://github.com/PrestaShop/ps_customtext/pull/71): Show error instead of exception when the text is not valid, by [@kpodemski](https://github.com/kpodemski)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@okom3pom](https://github.com/okom3pom), [@boubkerbribri](https://github.com/boubkerbribri), [@jf-viguier](https://github.com/jf-viguier), [@dependabot[bot]](https://github.com/apps/dependabot), [@matks](https://github.com/matks), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@Progi1984](https://github.com/Progi1984), [@hibatallahAouadni](https://github.com/hibatallahAouadni), [@gdebrion](https://github.com/gdebrion), [@sowbiba](https://github.com/sowbiba), [@mparvazi](https://github.com/mparvazi), [@cquintini](https://github.com/cquintini), [@atomiix](https://github.com/atomiix), [@gennaris](https://github.com/gennaris), [@NeOMakinG](https://github.com/NeOMakinG), [@kpodemski](https://github.com/kpodemski), [@Unsleeping](https://github.com/Unsleeping), [@jolelievre](https://github.com/jolelievre), [@marsaldev](https://github.com/marsaldev), [@tegbessou](https://github.com/tegbessou)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

