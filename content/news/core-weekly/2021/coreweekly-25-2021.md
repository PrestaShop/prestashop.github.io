---
layout: post
aliases: ["/news/coreweekly-25-2021"]
title:  "PrestaShop Core Weekly - Week 25 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-06-28
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 21th to Sunday 27th of June 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

There is still a lot of effort focused on 1.7.8 in order to deliver a first Release Candidate.

In the meantime, here are some news about what's going on in the PrestaShop project:

An interesting discussion opened in issue [#24954](https://github.com/PrestaShop/PrestaShop/issues/24954) about a change in terminology: it is about replacing "product combination" with "product variation".

The wording "combination" has been used for a long time in the Back Office, so changing it might create confusion. We would love to hear your feedback about this topic! To do so, feel free to complete [this survey](https://forms-prestashop.typeform.com/to/lgX5aZea) and share it with other PrestaShop users in your network.

You can also tell them about the incoming [public demo on YouTube](https://www.youtube.com/watch?v=Flyqo21eICg) that will happen next Wednesday, June 30, 2021 at 2pm CEST.

Finally, you might have noticed a change on the [Developer Documentation](https://devdocs.prestashop.com/) website. The search bar is now being powered by [DocSearch](https://docsearch.algolia.com/) which is a free tool provided by Algolia for developer documentation websites.


## Releases

* [Welcome](https://github.com/PrestaShop/welcome) module: [v6.0.6](https://github.com/PrestaShop/welcome/releases/tag/v6.0.6)
* [Linklist](https://github.com/PrestaShop/ps_linklist) module: [v5.0.2](https://github.com/PrestaShop/ps_linklist/releases/tag/v5.0.2)
* [PHP-dev-tools](https://github.com/PrestaShop/php-dev-tools): [v3.16.0](https://github.com/PrestaShop/php-dev-tools/releases/tag/v3.16.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [54 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-06-21..2021-06-27) have been created in the project repositories;
- [39 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-06-21..2021-06-27), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-06-21..2021-06-27) on the core;
- [117 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-06-21..2021-06-27) in the project repositories;
- [98 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-06-21..2021-06-27), including [90 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-06-21..2021-06-27).



## Code changes in the 'develop' branch


### Core
* [#25037](https://github.com/PrestaShop/PrestaShop/pull/25037): Be able to use subquery when using DbQuery class, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#25048](https://github.com/PrestaShop/PrestaShop/pull/25048): Fix mobile boostrap column spacing and forgotten class. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#25012](https://github.com/PrestaShop/PrestaShop/pull/25012): Fix color picker bug. Thank you [@unlocomqx](https://github.com/unlocomqx)
* [#24933](https://github.com/PrestaShop/PrestaShop/pull/24933): Old products.js fixes. Thank you [@davidglezz](https://github.com/davidglezz)
* [#24895](https://github.com/PrestaShop/PrestaShop/pull/24895): Fix empty data by < in invoice note. Thank you [@okom3pom](https://github.com/okom3pom)
* [#24791](https://github.com/PrestaShop/PrestaShop/pull/24791): Migrate pages files to typescript, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#23948](https://github.com/PrestaShop/PrestaShop/pull/23948): Add history feature of edit combination of product page v2, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#24940](https://github.com/PrestaShop/PrestaShop/pull/24940): Refactor cartPresenter to reflect the real business need. Thank you [@arouiadib](https://github.com/arouiadib)


### Tests
* [#24188](https://github.com/PrestaShop/PrestaShop/pull/24188): Migrated some Legacy Tests to Integration/Unit Tests, by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '1.7.8.x' branch


### Core
* [#25131](https://github.com/PrestaShop/PrestaShop/pull/25131): Bump module ps_linklist to 5.0.2, by [@sowbiba](https://github.com/sowbiba)
* [#25120](https://github.com/PrestaShop/PrestaShop/pull/25120): Update Welcome module to 6.0.6, by [@sowbiba](https://github.com/sowbiba)
* [#25111](https://github.com/PrestaShop/PrestaShop/pull/25111): Fix compiled legacy container, by [@atomiix](https://github.com/atomiix)
* [#25102](https://github.com/PrestaShop/PrestaShop/pull/25102): Update ps_linklist module to v5.0.1, by [@sowbiba](https://github.com/sowbiba)
* [#25098](https://github.com/PrestaShop/PrestaShop/pull/25098): Remove precision type for currency, by [@sowbiba](https://github.com/sowbiba)


### Back office
* [#25121](https://github.com/PrestaShop/PrestaShop/pull/25121): Update translations catalogue with Welcome module wordings, by [@sowbiba](https://github.com/sowbiba)
* [#25082](https://github.com/PrestaShop/PrestaShop/pull/25082): Fix category create in product page. Thank you [@zuk3975](https://github.com/zuk3975)
* [#25039](https://github.com/PrestaShop/PrestaShop/pull/25039): Disable product V2 page when multistore is used, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#25035](https://github.com/PrestaShop/PrestaShop/pull/25035): Fix product footer direction using RTL language, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#25034](https://github.com/PrestaShop/PrestaShop/pull/25034): Fix checkbox direction on RTL, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24869](https://github.com/PrestaShop/PrestaShop/pull/24869): Fix no active payment module displayed in Payment Methods, by [@atomiix](https://github.com/atomiix)
* [#24052](https://github.com/PrestaShop/PrestaShop/pull/24052): Open confirm modal only when eligible for feature flag form, by [@matks](https://github.com/matks)
* [#24025](https://github.com/PrestaShop/PrestaShop/pull/24025): Add SubmittableInput successfull and error states, by [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#25126](https://github.com/PrestaShop/PrestaShop/pull/25126): Fix currency precision regression test, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#25088](https://github.com/PrestaShop/PrestaShop/pull/25088): Functional tests - Add some refacto to Orders>Invoices tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#25057](https://github.com/PrestaShop/PrestaShop/pull/25057): Fix menu check on regression test, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#25047](https://github.com/PrestaShop/PrestaShop/pull/25047): Fix nightly tests for 21-06-2021, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.7.x' branch


### Front office
* [#24754](https://github.com/PrestaShop/PrestaShop/pull/24754): Removed free shipping from cumulative reduction, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#1054](https://github.com/PrestaShop/docs/pull/1054): Redirect code of conduct to prestashop-project.org, by [@eternoendless](https://github.com/eternoendless)
* [#1053](https://github.com/PrestaShop/docs/pull/1053): Change value of the table_open_cache to recommended 4000. Thank you [@kpodemski](https://github.com/kpodemski)
* [#1050](https://github.com/PrestaShop/docs/pull/1050): FIX typo on deprecated properties. Thank you [@nsorosac](https://github.com/nsorosac)
* [#1047](https://github.com/PrestaShop/docs/pull/1047): Introduce Algolia DocSearch, by [@matks](https://github.com/matks)
* [#1046](https://github.com/PrestaShop/docs/pull/1046): Add hooks `actionFrontControllerInit{...}` changes. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1045](https://github.com/PrestaShop/docs/pull/1045): Remove of actionFrontControllerAfterInit hook. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#1043](https://github.com/PrestaShop/docs/pull/1043): Fix word spelling recommand to recommend. Thank you [@WebHelpersPau](https://github.com/WebHelpersPau)


### Links list module
* [#127](https://github.com/PrestaShop/ps_linklist/pull/127): Fix widgets count - Do not group by when counting, by [@sowbiba](https://github.com/sowbiba)
* [#126](https://github.com/PrestaShop/ps_linklist/pull/126): Release 5.0.2, by [@jolelievre](https://github.com/jolelievre)
* [#125](https://github.com/PrestaShop/ps_linklist/pull/125): Fix module name, by [@jolelievre](https://github.com/jolelievre)
* [#124](https://github.com/PrestaShop/ps_linklist/pull/124): Release version 5.0.1, by [@jolelievre](https://github.com/jolelievre)
* [#123](https://github.com/PrestaShop/ps_linklist/pull/123): Bump patch version 5.0.1, by [@jolelievre](https://github.com/jolelievre)
* [#121](https://github.com/PrestaShop/ps_linklist/pull/121): Rename sameas to same as, by [@sowbiba](https://github.com/sowbiba)


### Customer reassurance block module
* [#223](https://github.com/PrestaShop/blockreassurance/pull/223): Bump style-loader from 2.0.0 to 3.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#222](https://github.com/PrestaShop/blockreassurance/pull/222): Bump node-sass from 6.0.0 to 6.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#220](https://github.com/PrestaShop/blockreassurance/pull/220): Bump webpack from 5.39.1 to 5.40.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#460](https://github.com/PrestaShop/ps_facetedsearch/pull/460): Bump node-sass from 6.0.0 to 6.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#458](https://github.com/PrestaShop/ps_facetedsearch/pull/458): Bump @babel/preset-env from 7.14.5 to 7.14.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#457](https://github.com/PrestaShop/ps_facetedsearch/pull/457): Bump @babel/node from 7.14.5 to 7.14.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#456](https://github.com/PrestaShop/ps_facetedsearch/pull/456): Bump webpack from 5.39.1 to 5.40.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#455](https://github.com/PrestaShop/ps_facetedsearch/pull/455): Bump set-getter from 0.1.0 to 0.1.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#454](https://github.com/PrestaShop/ps_facetedsearch/pull/454): Bump mocha from 8.4.0 to 9.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### OnBoarding module
* [#119](https://github.com/PrestaShop/welcome/pull/119): Release 6.0.6, by [@jolelievre](https://github.com/jolelievre)
* [#113](https://github.com/PrestaShop/welcome/pull/113): Update bourbon and adapts BCs, by [@NeOMakinG](https://github.com/NeOMakinG)

### Update prestashop/php-dev-tools from 3.15.1 to 3.16.0
* [#118](https://github.com/PrestaShop/welcome/pull/118): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#459](https://github.com/PrestaShop/ps_facetedsearch/pull/459): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#221](https://github.com/PrestaShop/blockreassurance/pull/221): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#122](https://github.com/PrestaShop/ps_linklist/pull/122): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#80](https://github.com/PrestaShop/ps_emailsubscription/pull/80): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#25](https://github.com/PrestaShop/ps_languageselector/pull/25): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#144](https://github.com/PrestaShop/psgdpr/pull/144): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#30](https://github.com/PrestaShop/ps_dataprivacy/pull/30): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#36](https://github.com/PrestaShop/ps_searchbar/pull/36): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#78](https://github.com/PrestaShop/ps_shoppingcart/pull/78): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#53](https://github.com/PrestaShop/ps_categorytree/pull/53): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#23](https://github.com/PrestaShop/gridhtml/pull/23): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#45](https://github.com/PrestaShop/dashtrends/pull/45): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#62](https://github.com/PrestaShop/ps_imageslider/pull/62): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#50](https://github.com/PrestaShop/ps_checkpayment/pull/50): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#62](https://github.com/PrestaShop/ps_customtext/pull/62): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#39](https://github.com/PrestaShop/ps_customersignin/pull/39): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#30](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/30): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#39](https://github.com/PrestaShop/ps_featuredproducts/pull/39): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#110](https://github.com/PrestaShop/productcomments/pull/110): Bump prestashop/php-dev-tools from 3.15.1 to 3.16.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Product Comments module
* [#108](https://github.com/PrestaShop/productcomments/pull/108): Removed Addons Suggestions, by [@Progi1984](https://github.com/Progi1984)

### User documentation landing page
* [#86](https://github.com/PrestaShop/user-documentation-landing/pull/86): fix(deps): bump core-js from 3.15.0 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#85](https://github.com/PrestaShop/user-documentation-landing/pull/85): chore(deps-dev): bump babel-jest from 27.0.2 to 27.0.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#84](https://github.com/PrestaShop/user-documentation-landing/pull/84): chore(deps-dev): bump eslint from 7.28.0 to 7.29.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#83](https://github.com/PrestaShop/user-documentation-landing/pull/83): fix(deps): bump core-js from 3.14.0 to 3.15.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### The PrestaShop open source project
* [#62](https://github.com/PrestaShop/open-source/pull/62): Fix slack section and broken links, by [@eternoendless](https://github.com/eternoendless)
* [#61](https://github.com/PrestaShop/open-source/pull/61): Fixes links in readme.md, by [@Progi1984](https://github.com/Progi1984)


### Issues Bot
* [#24](https://github.com/PrestaShop/issuebot/pull/24): Update config for kanban 1.7.7.6, by [@sowbiba](https://github.com/sowbiba)


### QA nightly results
* [#58](https://github.com/PrestaShop/QANightlyResults/pull/58): Merge develop into master, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#57](https://github.com/PrestaShop/QANightlyResults/pull/57): Create new endpoint for mochawesome-merge tool, by [@PierreRambaud](https://github.com/PierreRambaud)


### PrestaShop Specifications
* [#235](https://github.com/PrestaShop/prestashop-specs/pull/235): Add ip v6 address specs. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#234](https://github.com/PrestaShop/prestashop-specs/pull/234): Add specs following issue #20691, by [@marionf](https://github.com/marionf)
* [#232](https://github.com/PrestaShop/prestashop-specs/pull/232): Edit specs of product availability in FO, by [@marionf](https://github.com/marionf)
* [#230](https://github.com/PrestaShop/prestashop-specs/pull/230): blocklayered module route is not used in 1.7. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#229](https://github.com/PrestaShop/prestashop-specs/pull/229): Authorized ip address in maintenance mode. Thank you [@jf-viguier](https://github.com/jf-viguier)


### PHP Developer Tools
* [#62](https://github.com/PrestaShop/php-dev-tools/pull/62): Add autoindex lib to php-dev-tools (v3 branch), by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@eternoendless](https://github.com/eternoendless), [@sowbiba](https://github.com/sowbiba), [@jolelievre](https://github.com/jolelievre), [@kpodemski](https://github.com/kpodemski), [@boubkerbribri](https://github.com/boubkerbribri), [@dependabot[bot]](https://github.com/apps/dependabot), [@nsorosac](https://github.com/nsorosac), [@atomiix](https://github.com/atomiix), [@matks](https://github.com/matks), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@zuk3975](https://github.com/zuk3975), [@jf-viguier](https://github.com/jf-viguier), [@Progi1984](https://github.com/Progi1984), [@Hlavtox](https://github.com/Hlavtox), [@WebHelpersPau](https://github.com/WebHelpersPau), [@matthieu-rolland](https://github.com/matthieu-rolland), [@PierreRambaud](https://github.com/PierreRambaud), [@NeOMakinG](https://github.com/NeOMakinG), [@unlocomqx](https://github.com/unlocomqx), [@marionf](https://github.com/marionf), [@arouiadib](https://github.com/arouiadib), [@davidglezz](https://github.com/davidglezz), [@micka-fdz](https://github.com/micka-fdz), [@okom3pom](https://github.com/okom3pom), [@Quetzacoalt91](https://github.com/Quetzacoalt91)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
