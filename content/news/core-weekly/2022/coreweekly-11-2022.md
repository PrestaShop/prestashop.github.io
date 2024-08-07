---
layout: post
aliases: ["/news/coreweekly-11-2022"]
title:  "PrestaShop Core Weekly - Week 11 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-03-21
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 14th to Sunday 20th of March 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

[PrestaShop 1.7.8.5](https://build.prestashop.com/news/prestashop-1-7-8-5-maintenance-release/) has been released last week because a [critical regression](https://github.com/PrestaShop/PrestaShop/issues/27854) impacting hooks was detected in 1.7.8.4 release.

We suggest upgrading your store quickly to benefit from the bug fixes of this patch version. As usual, make sure to perform a full manual backup before, so you can roll back the upgrade if something goes wrong.

In the meantime, the [Hummingbird theme](https://github.com/prestashop/hummingbird) is showing some good progress! A [storybook](https://build.prestashop.com/hummingbird/) has been released and will be completed over time.

Please remember that your feedback on the project is welcome, so don’t hesitate to join [us on slack](https://www.prestashop-project.org/slack/). The community is being regularly consulted there to make sure that topics like this new theme will meet the expectations and needs of everyone.


## Releases

* [PrestaShop](https://github.com/PrestaShop/PrestaShop): [1.7.8.5](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.5)
* [Psgdpr](https://github.com/PrestaShop/psgdpr) module: [v1.4.0](https://github.com/PrestaShop/psgdpr/releases/tag/v1.4.0)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [60 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-03-14..2022-03-20) have been created in the project repositories;
- [38 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-03-14..2022-03-20), including [14 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-03-14..2022-03-20) on the core;
- [95 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-03-14..2022-03-20) in the project repositories;
- [73 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-03-14..2022-03-20), including [62 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-03-14..2022-03-20).



## Code changes in the 'develop' branch


### Core
* [#27923](https://github.com/PrestaShop/PrestaShop/pull/27923): Added module ps_emailalerts, by [@Progi1984](https://github.com/Progi1984)
* [#27913](https://github.com/PrestaShop/PrestaShop/pull/27913): Remove deprecated date picker functions, by [@eternoendless](https://github.com/eternoendless)
* [#27874](https://github.com/PrestaShop/PrestaShop/pull/27874): Hook getHookStatusByName should not be case-sensitive. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#27868](https://github.com/PrestaShop/PrestaShop/pull/27868): The delivery slip date in the template must be the delivery date and not the invoice creation date. Thank you [@thalassa-web](https://github.com/thalassa-web)
* [#27644](https://github.com/PrestaShop/PrestaShop/pull/27644): Remove unused FrontController properties. Thank you [@davidglezz](https://github.com/davidglezz)
* [#27592](https://github.com/PrestaShop/PrestaShop/pull/27592): Remove classic theme from project and include it through composer, by [@eternoendless](https://github.com/eternoendless)


### Back office
* [#27895](https://github.com/PrestaShop/PrestaShop/pull/27895): Handle seo data for multishop. Thank you [@saulaski](https://github.com/saulaski)
* [#27889](https://github.com/PrestaShop/PrestaShop/pull/27889): Fixed the display of the dropdown 'No voucher was found', by [@Progi1984](https://github.com/Progi1984)
* [#27850](https://github.com/PrestaShop/PrestaShop/pull/27850): Move notifications divs to the vuejs app, by [@atomiix](https://github.com/atomiix)
* [#27825](https://github.com/PrestaShop/PrestaShop/pull/27825): Migrate 'International > Locations > States' Listing, by [@Progi1984](https://github.com/Progi1984)
* [#24797](https://github.com/PrestaShop/PrestaShop/pull/24797): Force disabled discounts (CartRules) to show if needed, by [@kpodemski](https://github.com/kpodemski)


### Installer
* [#27099](https://github.com/PrestaShop/PrestaShop/pull/27099): Add capability to select modules and theme to install during the installation process, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in the '1.7.8.x' branch


### Front office
* [#27814](https://github.com/PrestaShop/PrestaShop/pull/27814): Fixed Microdata ItemList position : index starts to 1 and not 0, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### Hummingbird theme
* [#214](https://github.com/PrestaShop/hummingbird/pull/214): Upgrade Vazir font for RTL languages. Thank you [@mparvazi](https://github.com/mparvazi)
* [#210](https://github.com/PrestaShop/hummingbird/pull/210): Add useAlert. Thank you [@mparvazi](https://github.com/mparvazi)
* [#209](https://github.com/PrestaShop/hummingbird/pull/209): Merge develop into master, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#208](https://github.com/PrestaShop/hummingbird/pull/208): Improve readme title, by [@matks](https://github.com/matks)
* [#207](https://github.com/PrestaShop/hummingbird/pull/207): Change theme name to Hummingbird, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#206](https://github.com/PrestaShop/hummingbird/pull/206): Add toasts and useToast documentation, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#203](https://github.com/PrestaShop/hummingbird/pull/203): Refacto voucher part with boostrap components, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#202](https://github.com/PrestaShop/hummingbird/pull/202): Add link to article and license inside README, by [@matks](https://github.com/matks)
* [#201](https://github.com/PrestaShop/hummingbird/pull/201): Merge develop into master, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#200](https://github.com/PrestaShop/hummingbird/pull/200): fix: use scss file for storybook deploy, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#199](https://github.com/PrestaShop/hummingbird/pull/199): Merge develop into master, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#198](https://github.com/PrestaShop/hummingbird/pull/198): fix: storybook js using bootstrap, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#185](https://github.com/PrestaShop/hummingbird/pull/185): Improve product page. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Docker images
* [#302](https://github.com/PrestaShop/docker/pull/302): Add docker files for PS 1.7.8.5, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#301](https://github.com/PrestaShop/docker/pull/301): Add bcmath php extension. Thank you [@davidglezz](https://github.com/davidglezz)


### PrestaShop Specifications
* [#319](https://github.com/PrestaShop/prestashop-specs/pull/319): Fix title about employees sessions. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### stylelint configuration
* [#28](https://github.com/PrestaShop/stylelint-config/pull/28): Bump stylelint from 14.5.3 to 14.6.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Default community [health files](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)
* [#2](https://github.com/PrestaShop/.github/pull/2): Add release drafter action at organization level, by [@atomiix](https://github.com/atomiix)


### Issues Bot
* [#72](https://github.com/PrestaShop/issuebot/pull/72): Fix: debug log for the Fixed label, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#71](https://github.com/PrestaShop/issuebot/pull/71): Fix: wrong for count and verify that issue has a project linked, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#70](https://github.com/PrestaShop/issuebot/pull/70): Fix: remove card from maxikanban only if kanban is inside config, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#69](https://github.com/PrestaShop/issuebot/pull/69): Fix: nbCount review bug, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#68](https://github.com/PrestaShop/issuebot/pull/68): Fix: debug reviews call, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#67](https://github.com/PrestaShop/issuebot/pull/67): Fix: debug nbReview in production, by [@NeOMakinG](https://github.com/NeOMakinG)


### PrestaShop Project Metrics
* [#29](https://github.com/PrestaShop/ps-project-metrics/pull/29): Fix weekend display, by [@matks](https://github.com/matks)


### Google Analytics module
* [#111](https://github.com/PrestaShop/ps_googleanalytics/pull/111): Bump version to 4.1.1, by [@Progi1984](https://github.com/Progi1984)


### PrestonBot
* [#126](https://github.com/PrestaShop/prestonbot/pull/126): Don't require issue when the PR is not a bug fix or a feature, or if it's PM category (eg changelog), by [@eternoendless](https://github.com/eternoendless)


### QA nightly results
* [#67](https://github.com/PrestaShop/QANightlyResults/pull/67): Merge develop into master, by [@Progi1984](https://github.com/Progi1984)
* [#66](https://github.com/PrestaShop/QANightlyResults/pull/66): Added XML URL in Reports endpoint, by [@Progi1984](https://github.com/Progi1984)


### Customer reassurance block module
* [#375](https://github.com/PrestaShop/blockreassurance/pull/375): Bump @babel/core from 7.17.5 to 7.17.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#374](https://github.com/PrestaShop/blockreassurance/pull/374): Bump eslint from 8.10.0 to 8.11.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#634](https://github.com/PrestaShop/ps_facetedsearch/pull/634): Bump @babel/core from 7.17.5 to 7.17.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#633](https://github.com/PrestaShop/ps_facetedsearch/pull/633): Bump @babel/register from 7.17.0 to 7.17.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#632](https://github.com/PrestaShop/ps_facetedsearch/pull/632): Bump mocha from 9.2.1 to 9.2.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#631](https://github.com/PrestaShop/ps_facetedsearch/pull/631): Bump eslint from 8.10.0 to 8.11.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### TranslationTools Bundle
* [#106](https://github.com/PrestaShop/TranslationToolsBundle/pull/106): Remove TreeBuilder deprecation, by [@atomiix](https://github.com/atomiix)
* [#105](https://github.com/PrestaShop/TranslationToolsBundle/pull/105): Add smarty 4 compatibility, by [@atomiix](https://github.com/atomiix)


### Module analyzer
* [#8](https://github.com/PrestaShop/psssst/pull/8): Parse author & tab and handle `l()` translation function, by [@atomiix](https://github.com/atomiix)


### Changes in developer documentation sources
* [#1312](https://github.com/PrestaShop/docs/pull/1312): Backport 1310 into 8.x, by [@matks](https://github.com/matks)


### Auto Upgrade module
* [#467](https://github.com/PrestaShop/autoupgrade/pull/467): Use xml file during archive upgrade, by [@atomiix](https://github.com/atomiix)
* [#421](https://github.com/PrestaShop/autoupgrade/pull/421): Check if override is disabled before update. Thank you [@okom3pom](https://github.com/okom3pom)


### Presthubot
* [#45](https://github.com/PrestaShop/presthubot/pull/45): `slack:notifier` : Added reports about upgrade in check of the nightly, by [@Progi1984](https://github.com/Progi1984)


### Wishlist block module
* [#164](https://github.com/PrestaShop/blockwishlist/pull/164): Fixed Number of Products in a WishList (if product is disabled or removed), by [@Progi1984](https://github.com/Progi1984)


### GDPR module
* [#163](https://github.com/PrestaShop/psgdpr/pull/163): Release 1.4.0, by [@Progi1984](https://github.com/Progi1984)


### Stats Dashboard module
* [#27](https://github.com/PrestaShop/statsforecast/pull/27): Fix attribute stats. Thank you [@Shoprunners](https://github.com/Shoprunners)


### Distribution API
* [#6](https://github.com/PrestaShop/distribution-api/pull/6): Starting Deployment workflows. Thank you [@djodjo3](https://github.com/djodjo3)


### Wire payment module
* [#68](https://github.com/PrestaShop/ps_wirepayment/pull/68): Clean legacy status check and template. Thank you [@Hlavtox](https://github.com/Hlavtox)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@mparvazi](https://github.com/mparvazi), [@NeOMakinG](https://github.com/NeOMakinG), [@matthieu-rolland](https://github.com/matthieu-rolland), [@matks](https://github.com/matks), [@PrestaEdit](https://github.com/PrestaEdit), [@dependabot[bot]](https://github.com/apps/dependabot), [@atomiix](https://github.com/atomiix), [@Progi1984](https://github.com/Progi1984), [@eternoendless](https://github.com/eternoendless), [@davidglezz](https://github.com/davidglezz), [@saulaski](https://github.com/saulaski), [@lmeyer1](https://github.com/lmeyer1), [@thalassa-web](https://github.com/thalassa-web), [@Shoprunners](https://github.com/Shoprunners), [@djodjo3](https://github.com/djodjo3), [@Hlavtox](https://github.com/Hlavtox), [@PierreRambaud](https://github.com/PierreRambaud), [@okom3pom](https://github.com/okom3pom), [@kpodemski](https://github.com/kpodemski)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

