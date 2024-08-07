---
layout: post
aliases: ["/news/coreweekly-19-2021"]
title:  "PrestaShop Core Weekly - Week 19 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-05-17
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 10th to Sunday 16th of May 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## Releases

* [php-dev-tools](https://github.com/PrestaShop/php-dev-tools): [v3.15.1](https://github.com/PrestaShop/php-dev-tools/releases/tag/v3.15.1)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [68 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-05-10..2021-05-16) have been created in the project repositories;
- [53 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-05-10..2021-05-16), including [14 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-05-10..2021-05-16) on the core;
- [122 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-05-10..2021-05-16) in the project repositories;
- [133 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-05-10..2021-05-16), including [107 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-05-10..2021-05-16).



## Code changes in the 'develop' branch


### Front office
* [#24426](https://github.com/PrestaShop/PrestaShop/pull/24426): Fix error on favicon when maintenance mode is enabled. Thank you [@okom3pom](https://github.com/okom3pom)


### Tests
* [#23954](https://github.com/PrestaShop/PrestaShop/pull/23954): Reduce number of GH jobs, run one PHPUnit job per PHP version. Thank you [@mvorisek](https://github.com/mvorisek)
* [#22547](https://github.com/PrestaShop/PrestaShop/pull/22547): PHPStan (Level 5), by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '1.7.8.x' branch


### Core
* [#24506](https://github.com/PrestaShop/PrestaShop/pull/24506): Upgrade Symfony to 3.4.48, by [@matks](https://github.com/matks)


### Back office
* [#24479](https://github.com/PrestaShop/PrestaShop/pull/24479): Fix php7.4 incompability warning, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#24461](https://github.com/PrestaShop/PrestaShop/pull/24461): Fix missing _this replacement with that, by [@atomiix](https://github.com/atomiix)
* [#24434](https://github.com/PrestaShop/PrestaShop/pull/24434): Remove order_view asset on 1.7.8.x, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24356](https://github.com/PrestaShop/PrestaShop/pull/24356): Fix javascript error in console in multistore `create shop` page, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#24076](https://github.com/PrestaShop/PrestaShop/pull/24076): Adjust product v2 page design and add unavailable feature component, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#24457](https://github.com/PrestaShop/PrestaShop/pull/24457): Fix final summary exception, by [@atomiix](https://github.com/atomiix)
* [#24430](https://github.com/PrestaShop/PrestaShop/pull/24430): Improve CartPresenter performance, and allow Order to retrieve default_image, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#24379](https://github.com/PrestaShop/PrestaShop/pull/24379): Fix smarty product lazy load exception, by [@atomiix](https://github.com/atomiix)
* [#24239](https://github.com/PrestaShop/PrestaShop/pull/24239): Typo in head-jsonld.tpl, shop logo link: correction for #23151. Thank you [@fdonnet](https://github.com/fdonnet)


### Tests
* [#24500](https://github.com/PrestaShop/PrestaShop/pull/24500): Fix change customer message status, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24462](https://github.com/PrestaShop/PrestaShop/pull/24462): Update js doc for customer service pages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24454](https://github.com/PrestaShop/PrestaShop/pull/24454): Functional tests - Fix and add tests for Features and Values. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#24445](https://github.com/PrestaShop/PrestaShop/pull/24445): Fix click on a hidden checkbox on localization and translation page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24435](https://github.com/PrestaShop/PrestaShop/pull/24435): Fix click on toggle for seo and url page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24429](https://github.com/PrestaShop/PrestaShop/pull/24429): Do not remove modules pushed by API for UI tests, by [@matks](https://github.com/matks)
* [#24364](https://github.com/PrestaShop/PrestaShop/pull/24364): Add 2 new test "reorder from order history list" and "reorder from order detail". Thank you [@SD1982](https://github.com/SD1982)


## Code changes in the '1.7.7.x' branch


### Core
* [#24443](https://github.com/PrestaShop/PrestaShop/pull/24443): Fix upgrade from 1.6.1.24 on certain installation, by [@atomiix](https://github.com/atomiix)


### Back office
* [#24243](https://github.com/PrestaShop/PrestaShop/pull/24243): Fix escape in `ps_1771_update_customer_note()`. Thank you [@dali-rajab](https://github.com/dali-rajab)
* [#24217](https://github.com/PrestaShop/PrestaShop/pull/24217): Restore check when using the SQL manager part, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#23138](https://github.com/PrestaShop/PrestaShop/pull/23138): Fix gift added/removed when editing order (product quantity/shipping address), by [@atomiix](https://github.com/atomiix)


### Tests
* [#24459](https://github.com/PrestaShop/PrestaShop/pull/24459): Wait For price to be updated on view order page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24455](https://github.com/PrestaShop/PrestaShop/pull/24455): Remove forgotten function description. Thank you [@SD1982](https://github.com/SD1982)


## Code changes in modules, themes & tools


### Customer reassurance block module
* [#197](https://github.com/PrestaShop/blockreassurance/pull/197): Bump sass-loader from 11.0.1 to 11.1.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#196](https://github.com/PrestaShop/blockreassurance/pull/196): Bump @simonwep/pickr from 1.8.0 to 1.8.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#195](https://github.com/PrestaShop/blockreassurance/pull/195): Bump @babel/core from 7.14.0 to 7.14.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#194](https://github.com/PrestaShop/blockreassurance/pull/194): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#190](https://github.com/PrestaShop/blockreassurance/pull/190): Bump webpack from 5.36.2 to 5.37.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#189](https://github.com/PrestaShop/blockreassurance/pull/189): Bump node-sass from 5.0.0 to 6.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#188](https://github.com/PrestaShop/blockreassurance/pull/188): Bump webpack-cli from 4.6.0 to 4.7.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#428](https://github.com/PrestaShop/ps_facetedsearch/pull/428): Bump sass-loader from 11.1.0 to 11.1.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#427](https://github.com/PrestaShop/ps_facetedsearch/pull/427): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#426](https://github.com/PrestaShop/ps_facetedsearch/pull/426): Bump @babel/node from 7.13.13 to 7.14.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#425](https://github.com/PrestaShop/ps_facetedsearch/pull/425): Bump @babel/core from 7.14.0 to 7.14.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#424](https://github.com/PrestaShop/ps_facetedsearch/pull/424): Bump @babel/preset-env from 7.14.1 to 7.14.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#423](https://github.com/PrestaShop/ps_facetedsearch/pull/423): Bump webpack from 5.36.2 to 5.37.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#422](https://github.com/PrestaShop/ps_facetedsearch/pull/422): Bump sass-loader from 11.0.1 to 11.1.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#421](https://github.com/PrestaShop/ps_facetedsearch/pull/421): Bump hosted-git-info from 2.8.8 to 2.8.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#420](https://github.com/PrestaShop/ps_facetedsearch/pull/420): Use the same version as it is defined in the composer.lock, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#419](https://github.com/PrestaShop/ps_facetedsearch/pull/419): Bump mocha from 8.3.2 to 8.4.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#418](https://github.com/PrestaShop/ps_facetedsearch/pull/418): Bump node-sass from 5.0.0 to 6.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#417](https://github.com/PrestaShop/ps_facetedsearch/pull/417): Bump lodash from 4.17.15 to 4.17.21. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation
* [#992](https://github.com/PrestaShop/docs/pull/992): Attachments Webservice endpoint was delivered in 1.7.8, by [@matks](https://github.com/matks)
* [#991](https://github.com/PrestaShop/docs/pull/991): Correct location of generatable-input.js. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#985](https://github.com/PrestaShop/docs/pull/985): Introduce Architecture -> Modern and reorganize docs about controllers. Thank you [@zuk3975](https://github.com/zuk3975)
* [#984](https://github.com/PrestaShop/docs/pull/984): Order view page reference. Thank you [@zuk3975](https://github.com/zuk3975)
* [#983](https://github.com/PrestaShop/docs/pull/983): Add information about id_reference when a carrier is edited. Thank you [@okom3pom](https://github.com/okom3pom)
* [#981](https://github.com/PrestaShop/docs/pull/981): Order create page reference. Thank you [@zuk3975](https://github.com/zuk3975)
* [#975](https://github.com/PrestaShop/docs/pull/975): Fix inverted lifecycle posts, by [@matks](https://github.com/matks)


### Gamification module
* [#83](https://github.com/PrestaShop/gamification/pull/83): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#82](https://github.com/PrestaShop/gamification/pull/82): Bump symfony/phpunit-bridge from 5.2.7 to 5.2.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Email subscription module
* [#79](https://github.com/PrestaShop/ps_emailsubscription/pull/79): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#78](https://github.com/PrestaShop/ps_emailsubscription/pull/78): Migrate Travis to Github Actions, by [@Progi1984](https://github.com/Progi1984)


### Language selector module
* [#24](https://github.com/PrestaShop/ps_languageselector/pull/24): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### GDPR module
* [#142](https://github.com/PrestaShop/psgdpr/pull/142): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer data privacy block module
* [#29](https://github.com/PrestaShop/ps_dataprivacy/pull/29): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Search Bar module
* [#35](https://github.com/PrestaShop/ps_searchbar/pull/35): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Links list module
* [#119](https://github.com/PrestaShop/ps_linklist/pull/119): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Shopping cart module
* [#77](https://github.com/PrestaShop/ps_shoppingcart/pull/77): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Category tree links module
* [#52](https://github.com/PrestaShop/ps_categorytree/pull/52): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Simple HTML table display module
* [#22](https://github.com/PrestaShop/gridhtml/pull/22): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer "Sign in" link module
* [#37](https://github.com/PrestaShop/ps_customersignin/pull/37): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Dashboard Trends module
* [#44](https://github.com/PrestaShop/dashtrends/pull/44): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Custom text module
* [#61](https://github.com/PrestaShop/ps_customtext/pull/61): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### OnBoarding module
* [#106](https://github.com/PrestaShop/welcome/pull/106): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Check payment module
* [#49](https://github.com/PrestaShop/ps_checkpayment/pull/49): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Product Comments module
* [#100](https://github.com/PrestaShop/productcomments/pull/100): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Order Notifications on the Favicon module
* [#29](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/29): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Featured products module
* [#38](https://github.com/PrestaShop/ps_featuredproducts/pull/38): Bump prestashop/php-dev-tools from 3.15 to 3.15.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### User documentation landing page
* [#65](https://github.com/PrestaShop/user-documentation-landing/pull/65): chore(deps-dev): bump sass from 1.32.12 to 1.32.13. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#64](https://github.com/PrestaShop/user-documentation-landing/pull/64): fix(deps): bump nuxt from 2.15.5 to 2.15.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#63](https://github.com/PrestaShop/user-documentation-landing/pull/63): fix(deps): bump nuxt from 2.15.4 to 2.15.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#62](https://github.com/PrestaShop/user-documentation-landing/pull/62): chore(deps-dev): bump eslint from 7.25.0 to 7.26.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#61](https://github.com/PrestaShop/user-documentation-landing/pull/61): fix(deps): bump core-js from 3.11.2 to 3.12.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#60](https://github.com/PrestaShop/user-documentation-landing/pull/60): chore(deps-dev): bump prettier from 2.2.1 to 2.3.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PHP Developer Tools
* [#61](https://github.com/PrestaShop/php-dev-tools/pull/61): Fix stub, ModuleCore can't return Module instance, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#60](https://github.com/PrestaShop/php-dev-tools/pull/60): Fix stub, ModuleCore can't return Module instance, by [@PierreRambaud](https://github.com/PierreRambaud)


### Example modules
* [#57](https://github.com/PrestaShop/example-modules/pull/57): Bump lodash from 4.17.19 to 4.17.21 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#56](https://github.com/PrestaShop/example-modules/pull/56): Bump hosted-git-info from 2.8.8 to 2.8.9 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#55](https://github.com/PrestaShop/example-modules/pull/55): Bump hosted-git-info from 2.8.8 to 2.8.9 in /demodoctrine/js. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#54](https://github.com/PrestaShop/example-modules/pull/54): Bump lodash from 4.17.20 to 4.17.21 in /demodoctrine/js. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#53](https://github.com/PrestaShop/example-modules/pull/53): Clean code ; remove unneeded use statement. Thank you [@okom3pom](https://github.com/okom3pom)
* [#52](https://github.com/PrestaShop/example-modules/pull/52): Bump url-parse from 1.4.7 to 1.5.1 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Wishlist block module
* [#113](https://github.com/PrestaShop/blockwishlist/pull/113): Bump hosted-git-info from 2.8.8 to 2.8.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop contributors website
* [#54](https://github.com/PrestaShop/TopContributors/pull/54): Bump hosted-git-info from 2.8.8 to 2.8.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#53](https://github.com/PrestaShop/TopContributors/pull/53): Bump lodash from 4.17.20 to 4.17.21. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Prestashop UI Kit
* [#156](https://github.com/PrestaShop/prestashop-ui-kit/pull/156): Add hover state on helpbox and add helpbox to storybook, by [@NeOMakinG](https://github.com/NeOMakinG)


### Stylelint browser compatibility plugin
* [#8](https://github.com/PrestaShop/stylelint-browser-compatibility/pull/8): Bump hosted-git-info from 2.8.5 to 2.8.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#7](https://github.com/PrestaShop/stylelint-browser-compatibility/pull/7): Bump postcss from 7.0.26 to 8.2.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#6](https://github.com/PrestaShop/stylelint-browser-compatibility/pull/6): Bump lodash from 4.17.20 to 4.17.21. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### stylelint configuration
* [#12](https://github.com/PrestaShop/stylelint-config/pull/12): Bump lodash from 4.17.19 to 4.17.21. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Core Weekly Generator tool
* [#84](https://github.com/PrestaShop/core-weekly-generator/pull/84): Bump hosted-git-info from 2.8.5 to 2.8.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#83](https://github.com/PrestaShop/core-weekly-generator/pull/83): Bump lodash from 4.17.19 to 4.17.21. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#82](https://github.com/PrestaShop/core-weekly-generator/pull/82): Bump url-parse from 1.4.7 to 1.5.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Buy button lite module
* [#50](https://github.com/PrestaShop/ps_buybuttonlite/pull/50): Bump hosted-git-info from 2.7.1 to 2.8.9 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#49](https://github.com/PrestaShop/ps_buybuttonlite/pull/49): Bump lodash from 4.17.20 to 4.17.21 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#48](https://github.com/PrestaShop/ps_buybuttonlite/pull/48): Bump url-parse from 1.4.3 to 1.5.1 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Issues Bot
* [#20](https://github.com/PrestaShop/issuebot/pull/20): Bump hosted-git-info from 2.8.5 to 2.8.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#19](https://github.com/PrestaShop/issuebot/pull/19): Bump lodash from 4.17.20 to 4.17.21. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#18](https://github.com/PrestaShop/issuebot/pull/18): Bump url-parse from 1.4.7 to 1.5.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Quality Assurance module
* [#16](https://github.com/PrestaShop/ps_qualityassurance/pull/16): Update CI badge, by [@matks](https://github.com/matks)


### Webservices PHP Client
* [#48](https://github.com/PrestaShop/PrestaShop-webservice-lib/pull/48): Allow filter by date_add && date_upd. Thank you [@radoslawkoziol](https://github.com/radoslawkoziol)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@matks](https://github.com/matks), [@boubkerbribri](https://github.com/boubkerbribri), [@dependabot[bot]](https://github.com/apps/dependabot), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@matthieu-rolland](https://github.com/matthieu-rolland), [@PierreRambaud](https://github.com/PierreRambaud), [@atomiix](https://github.com/atomiix), [@okom3pom](https://github.com/okom3pom), [@SD1982](https://github.com/SD1982), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@NeOMakinG](https://github.com/NeOMakinG), [@zuk3975](https://github.com/zuk3975), [@Progi1984](https://github.com/Progi1984), [@dali-rajab](https://github.com/dali-rajab), [@fdonnet](https://github.com/fdonnet), [@mvorisek](https://github.com/mvorisek), [@radoslawkoziol](https://github.com/radoslawkoziol)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
