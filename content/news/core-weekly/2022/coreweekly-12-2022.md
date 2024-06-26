---
layout: post
aliases: ["/news/coreweekly-12-2022"]
title:  "PrestaShop Core Weekly - Week 12 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-03-28
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 21th to Sunday 27th of March 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Last week the process for reviewing Pull Requests was updated. [Two new labels](https://github.com/PrestaShop/open-source/pull/80) have been created that should help the maintainer team document all changes that PrestaShop 8.0.0 will bring.

Next to this change of the process, [@eternoendless](https://github.com/eternoendless) submitted a [documentation Pull Request](https://github.com/PrestaShop/docs/pull/1315) that listed all notable changes for 8.0.0 until now. This list needs to be kept up-to-date following the new process.

And a new week starts with a really nice piece of news: long-term contributor [@Hlavtox](https://github.com/Hlavtox) just submitted a [request to become Theme maintainer](https://github.com/PrestaShop/open-source/issues/81).

## Releases

* [Google analytics](https://github.com/PrestaShop/ps_googleanalytics) module: [v4.1.2](https://github.com/PrestaShop/ps_googleanalytics/releases/tag/v4.1.2)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [38 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-03-21..2022-03-27) have been created in the project repositories;
- [46 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-03-21..2022-03-27), including [16 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-03-21..2022-03-27) on the core;
- [76 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-03-21..2022-03-27) in the project repositories;
- [74 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-03-21..2022-03-27), including [64 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-03-21..2022-03-27).
        


## Code changes in the 'develop' branch


### Core
* [#28015](https://github.com/PrestaShop/PrestaShop/pull/28015): Added module ps_googleanalytics, by [@Progi1984](https://github.com/Progi1984)
* [#27961](https://github.com/PrestaShop/PrestaShop/pull/27961): Remove Adapter\Tools::bcadd, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27959](https://github.com/PrestaShop/PrestaShop/pull/27959): Remove AdminController deprecated, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27958](https://github.com/PrestaShop/PrestaShop/pull/27958): Remove Tools::display404Error, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27956](https://github.com/PrestaShop/PrestaShop/pull/27956): Remove useless parameters in displayDate method, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27955](https://github.com/PrestaShop/PrestaShop/pull/27955): Remove getCldr and array_replace, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27933](https://github.com/PrestaShop/PrestaShop/pull/27933): Allow longer product names in the order detail, by [@kpodemski](https://github.com/kpodemski)
* [#27914](https://github.com/PrestaShop/PrestaShop/pull/27914): Remove deprecated include "images.inc.php", by [@eternoendless](https://github.com/eternoendless)
* [#27364](https://github.com/PrestaShop/PrestaShop/pull/27364): Deprecate Tools::redirectLink. Thank you [@davidglezz](https://github.com/davidglezz)


### Back office
* [#28022](https://github.com/PrestaShop/PrestaShop/pull/28022): Fixed the exception when we disable the tax in the BO > International > Taxes page, by [@Progi1984](https://github.com/Progi1984)
* [#28010](https://github.com/PrestaShop/PrestaShop/pull/28010): Remove OrderSlip::createOrderSlip deprecated function. Thank you [@nenes25](https://github.com/nenes25)
* [#28009](https://github.com/PrestaShop/PrestaShop/pull/28009): Remove OrderHistory getLastOrderState deprecated function. Thank you [@nenes25](https://github.com/nenes25)
* [#28003](https://github.com/PrestaShop/PrestaShop/pull/28003): Fixed wording and color button on exit button for the bulk delete, by [@Progi1984](https://github.com/Progi1984)
* [#28001](https://github.com/PrestaShop/PrestaShop/pull/28001): In Stock Movement page, localize date & time, by [@Progi1984](https://github.com/Progi1984)
* [#27925](https://github.com/PrestaShop/PrestaShop/pull/27925): Remove all deprecated templates in /admin-dev/themes/default/template/controllers/modules_positions/, by [@eternoendless](https://github.com/eternoendless)
* [#27781](https://github.com/PrestaShop/PrestaShop/pull/27781): Fixes error which occurred when you try to modify any customer information after the import. Thank you [@kgleizes](https://github.com/kgleizes)
* [#27669](https://github.com/PrestaShop/PrestaShop/pull/27669): Multistore - Design > Position - Do not display content and update message in all shops or in a group context, by [@Progi1984](https://github.com/Progi1984)
* [#27667](https://github.com/PrestaShop/PrestaShop/pull/27667): Multistore - Payment > Payment methods - Do not display content and update message in all shops or in a group context, by [@Progi1984](https://github.com/Progi1984)
* [#27626](https://github.com/PrestaShop/PrestaShop/pull/27626): Fix stock movement creation from new order. Thank you [@saulaski](https://github.com/saulaski)


### Front office
* [#27756](https://github.com/PrestaShop/PrestaShop/pull/27756): FO:  Remove Front controller deprecated properties. Thank you [@nenes25](https://github.com/nenes25)


### Installer
* [#27931](https://github.com/PrestaShop/PrestaShop/pull/27931): Check if the directory name match the module file name, by [@kpodemski](https://github.com/kpodemski)


### Web services
* [#27770](https://github.com/PrestaShop/PrestaShop/pull/27770): Webservice symfony less for multilang entities and category creation, by [@jolelievre](https://github.com/jolelievre)


### Tests
* [#27996](https://github.com/PrestaShop/PrestaShop/pull/27996): Fix indent on state.yml, by [@matks](https://github.com/matks)
* [#27974](https://github.com/PrestaShop/PrestaShop/pull/27974): Pin setup-gcloud to v0 instead of master. Thank you [@sethvargo](https://github.com/sethvargo)


## Code changes in the '1.7.8.x' branch


### Core
* [#26824](https://github.com/PrestaShop/PrestaShop/pull/26824): Avoid using `_PS_PRICE_COMPUTE_PRECISION_`. Thank you [@mpaolino](https://github.com/mpaolino)


### Tests
* [#28044](https://github.com/PrestaShop/PrestaShop/pull/28044): Pin setup-gcloud to v0 instead of master (backport of #27974), by [@matks](https://github.com/matks)


## Code changes in modules, themes & tools


### Example modules
* [#93](https://github.com/PrestaShop/example-modules/pull/93): Bump ansi-regex from 4.1.0 to 4.1.1 in /demo_grid/js. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#92](https://github.com/PrestaShop/example-modules/pull/92): Bump minimist from 1.2.5 to 1.2.6 in /demo_grid/js. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#91](https://github.com/PrestaShop/example-modules/pull/91): Bump minimist from 1.2.5 to 1.2.6 in /demodoctrine/js. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop contributors website
* [#68](https://github.com/PrestaShop/TopContributors/pull/68): Bump ws from 6.2.1 to 6.2.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#65](https://github.com/PrestaShop/TopContributors/pull/65): Bump node-fetch from 2.6.1 to 2.6.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#66](https://github.com/PrestaShop/TopContributors/pull/66): Bump postcss from 7.0.35 to 7.0.39. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#63](https://github.com/PrestaShop/TopContributors/pull/63): Bump tmpl from 1.0.4 to 1.0.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#62](https://github.com/PrestaShop/TopContributors/pull/62): Bump minimist from 1.2.5 to 1.2.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Hummingbird theme
* [#219](https://github.com/PrestaShop/hummingbird/pull/219): Fix js on product page and searchbar, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#217](https://github.com/PrestaShop/hummingbird/pull/217): Feat: checkout content adjustement (not full rework yet), by [@NeOMakinG](https://github.com/NeOMakinG)
* [#216](https://github.com/PrestaShop/hummingbird/pull/216): Fix eslint. Thank you [@mparvazi](https://github.com/mparvazi)
* [#213](https://github.com/PrestaShop/hummingbird/pull/213): Add steps component to checkout page, by [@NeOMakinG](https://github.com/NeOMakinG)


### Auto Upgrade module
* [#471](https://github.com/PrestaShop/autoupgrade/pull/471): Fix setup GCP on workflows to push results on nightly, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#469](https://github.com/PrestaShop/autoupgrade/pull/469): Accept more characters in the product name, by [@kpodemski](https://github.com/kpodemski)
* [#445](https://github.com/PrestaShop/autoupgrade/pull/445): Check the maintenance mode activation, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#440](https://github.com/PrestaShop/autoupgrade/pull/440): Display the details of errors if PrestaShop requirements are not satisfied, by [@Progi1984](https://github.com/Progi1984)


### Changes in developer documentation sources
* [#1327](https://github.com/PrestaShop/docs/pull/1327): Remove duplicate removed routes 8.0 core changes, by [@matks](https://github.com/matks)
* [#1315](https://github.com/PrestaShop/docs/pull/1315): Add all notable changes in 8.0, by [@eternoendless](https://github.com/eternoendless)


### The PrestaShop open source project
* [#80](https://github.com/PrestaShop/open-source/pull/80): Add how to mark PRs that need an update of developer documentation, by [@matks](https://github.com/matks)


### Google Analytics module
* [#115](https://github.com/PrestaShop/ps_googleanalytics/pull/115): Release 4.1.2, by [@Progi1984](https://github.com/Progi1984)
* [#114](https://github.com/PrestaShop/ps_googleanalytics/pull/114): Fix hook actionProductCancel call & Bump version to 4.1.2, by [@Progi1984](https://github.com/Progi1984)
* [#113](https://github.com/PrestaShop/ps_googleanalytics/pull/113): Release 4.1.1, by [@Progi1984](https://github.com/Progi1984)
* [#112](https://github.com/PrestaShop/ps_googleanalytics/pull/112): Release 4.1.1, by [@Progi1984](https://github.com/Progi1984)


### Customer reassurance block module
* [#378](https://github.com/PrestaShop/blockreassurance/pull/378): Bump babel-loader from 8.2.3 to 8.2.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#377](https://github.com/PrestaShop/blockreassurance/pull/377): Bump @babel/core from 7.17.7 to 7.17.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#365](https://github.com/PrestaShop/blockreassurance/pull/365): Optimized calls for SVG images, by [@Progi1984](https://github.com/Progi1984)
* [#336](https://github.com/PrestaShop/blockreassurance/pull/336): Remove broken multishop support, by [@atomiix](https://github.com/atomiix)


### Faceted search module
* [#636](https://github.com/PrestaShop/ps_facetedsearch/pull/636): Bump babel-loader from 8.2.3 to 8.2.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#635](https://github.com/PrestaShop/ps_facetedsearch/pull/635): Bump @babel/core from 7.17.7 to 7.17.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Nightly board
* [#80](https://github.com/PrestaShop/nightly-board/pull/80): Merge develop to master, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#79](https://github.com/PrestaShop/nightly-board/pull/79): Feat: add download xml button, by [@NeOMakinG](https://github.com/NeOMakinG)


### Classic theme
* [#15](https://github.com/PrestaShop/classic-theme/pull/15): Fix eslint. Thank you [@mparvazi](https://github.com/mparvazi)


### Module analyzer
* [#9](https://github.com/PrestaShop/psssst/pull/9): Updated the README, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### GDPR module
* [#164](https://github.com/PrestaShop/psgdpr/pull/164): Fix translations on customer account page. Thank you [@micka-fdz](https://github.com/micka-fdz)


### PrestonBot
* [#127](https://github.com/PrestaShop/prestonbot/pull/127): Improve detection of BC breaks and deprecations, by [@eternoendless](https://github.com/eternoendless)


### Google Sitemap module
* [#152](https://github.com/PrestaShop/gsitemap/pull/152): Fixed PHP Notice: Trying to access array offset on value of type bool in /www/modules/gsitemap/gsitemap.php on line 419. Thank you [@metacreo](https://github.com/metacreo)


### Wishlist block module
* [#165](https://github.com/PrestaShop/blockwishlist/pull/165): Fill empty config label by the label in default language, by [@Progi1984](https://github.com/Progi1984)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@matks](https://github.com/matks), [@NeOMakinG](https://github.com/NeOMakinG), [@boubkerbribri](https://github.com/boubkerbribri), [@Progi1984](https://github.com/Progi1984), [@nenes25](https://github.com/nenes25), [@atomiix](https://github.com/atomiix), [@mparvazi](https://github.com/mparvazi), [@mickaelandrieu](https://github.com/mickaelandrieu), [@sethvargo](https://github.com/sethvargo), [@PierreRambaud](https://github.com/PierreRambaud), [@micka-fdz](https://github.com/micka-fdz), [@eternoendless](https://github.com/eternoendless), [@kpodemski](https://github.com/kpodemski), [@metacreo](https://github.com/metacreo), [@kgleizes](https://github.com/kgleizes), [@jolelievre](https://github.com/jolelievre), [@saulaski](https://github.com/saulaski), [@davidglezz](https://github.com/davidglezz), [@matthieu-rolland](https://github.com/matthieu-rolland), [@mpaolino](https://github.com/mpaolino)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

