---
layout: post
aliases: ["/news/coreweekly-week-30-2019"]
title:  "PrestaShop Core Weekly - Week 30 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-08-01 14:30:00
authors: [ AntoineThomas ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 22nd to Sunday 28th of July 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

A new repository is now active with a very interesting and awaited content: specifications. Still a work in progress, the product management team from the PrestaShop company has started to publish specifications and other important information about "how it should works". The target is to give more resources to developers and contributors in general.

And of course, like all resources on the GitHub repositories, this is possible to add links to the specifications in issues and pull requests. This will ease the general project management.

The URL to this new repository:  
https://github.com/PrestaShop/prestashop-specs


## A quick update about PrestaShop's GitHub issues and pull requests:

- [77 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-07-22..2019-07-28) have been created in the project repositories;
- [56 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-07-22..2019-07-28), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-07-22..2019-07-28) on the core;
- [51 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-07-22..2019-07-28) in the project repositories;
- [54 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-07-22..2019-07-28), including [40 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-07-22..2019-07-28).



## Code changes in the 'develop' branch

### Core

* [#13712](https://github.com/PrestaShop/PrestaShop/pull/13712): Prepares Command API for migrating Order view page. Thank you [@sarjon](https://github.com/sarjon)
* [#13906](https://github.com/PrestaShop/PrestaShop/pull/13906): Update CLDR data to 35.1, by [@eternoendless](https://github.com/eternoendless)
* [#14065](https://github.com/PrestaShop/PrestaShop/pull/14065): Migrates Shopping Carts view page. Thank you [@sarjon](https://github.com/sarjon)


### Back office

* [#12497](https://github.com/PrestaShop/PrestaShop/pull/12497): Fix issue with the link Manage tax rules in the pricing tab, by [@khouloudbelguith](https://github.com/khouloudbelguith)
* [#12903](https://github.com/PrestaShop/PrestaShop/pull/12903): Match multiline translation expressions in modules. Thank you [@unlocomqx](https://github.com/unlocomqx)
* [#13980](https://github.com/PrestaShop/PrestaShop/pull/13980): Execute displayAdminLogin hook without shop context. Thank you [@idnovate](https://github.com/idnovate)
* [#14805](https://github.com/PrestaShop/PrestaShop/pull/14805): Fix unclosed div tag. Thank you [@sarjon](https://github.com/sarjon)


### Front office

* [#14819](https://github.com/PrestaShop/PrestaShop/pull/14819): Fix create account sitemap link. Thank you [@Thomas-lhuillier](https://github.com/Thomas-lhuillier)


### Tests

* [#14670](https://github.com/PrestaShop/PrestaShop/pull/14670): Add Behat tests for Customer commands. Thank you [@sarjon](https://github.com/sarjon)
* [#14764](https://github.com/PrestaShop/PrestaShop/pull/14764): Install prestashop test with puppeteer, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#14815](https://github.com/PrestaShop/PrestaShop/pull/14815): Add a new smoke test: crawling BO, by [@SimonGrn](https://github.com/SimonGrn)
* [#14825](https://github.com/PrestaShop/PrestaShop/pull/14825): Fix some minor problems on the "crawling BO" smoke test, by [@SimonGrn](https://github.com/SimonGrn)


### Install

* [#14718](https://github.com/PrestaShop/PrestaShop/pull/14718): Remove codacy badge as we dont use it anymore, by [@matks](https://github.com/matks)


## Code changes in the "1.7.6.x" branch (for v1.7.6.1)

### Core

* [#14664](https://github.com/PrestaShop/PrestaShop/pull/14664): Update precision and numeric iso code of currencies, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#14833](https://github.com/PrestaShop/PrestaShop/pull/14833): Bad currency format for Czech language, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office

* [#14828](https://github.com/PrestaShop/PrestaShop/pull/14828): Cannot save the "No Picture Image" , by [@PierreRambaud](https://github.com/PierreRambaud)


### Install

* [#14620](https://github.com/PrestaShop/PrestaShop/pull/14620): Init properly the Kernel on major *manual* upgrades, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#14739](https://github.com/PrestaShop/PrestaShop/pull/14739): Keep Composer.lock file in release, by [@jolelievre](https://github.com/jolelievre)


## Code changes in modules, themes & tools

### PrestaShop Specifications

* [#2](https://github.com/PrestaShop/prestashop-specs/pull/2): Catalog-Products-add-edit-elements-in-all-tabs.md, by [@marionf](https://github.com/marionf)
* [#3](https://github.com/PrestaShop/prestashop-specs/pull/3): Add link to add/edit products spec, by [@marionf](https://github.com/marionf)
* [#4](https://github.com/PrestaShop/prestashop-specs/pull/4): Create Catalog-products-add-edit-basic-settings.md, by [@marionf](https://github.com/marionf)
* [#5](https://github.com/PrestaShop/prestashop-specs/pull/5): Add link to Add/edit products - basic settings, by [@marionf](https://github.com/marionf)
* [#6](https://github.com/PrestaShop/prestashop-specs/pull/6): Update layout, by [@marionf](https://github.com/marionf)
* [#7](https://github.com/PrestaShop/prestashop-specs/pull/7): Create Catalog-products-add-edit-quantities.md, by [@marionf](https://github.com/marionf)
* [#8](https://github.com/PrestaShop/prestashop-specs/pull/8): Add link to quantities tab, by [@marionf](https://github.com/marionf)
* [#9](https://github.com/PrestaShop/prestashop-specs/pull/9): Create Catalog-products-add-edit-virtual-products.md, by [@marionf](https://github.com/marionf)
* [#10](https://github.com/PrestaShop/prestashop-specs/pull/10): Add link to virtual product tab, by [@marionf](https://github.com/marionf)
* [#11](https://github.com/PrestaShop/prestashop-specs/pull/11): Create Catalog-products-add-edit-shipping.md, by [@marionf](https://github.com/marionf)


### Faceted search

* [#114](https://github.com/PrestaShop/ps_facetedsearch/pull/114): Use texture and color attribute only when color_type is set, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#115](https://github.com/PrestaShop/ps_facetedsearch/pull/115): Faceted search bad currency format on 1.7.6, by [@PierreRambaud](https://github.com/PierreRambaud)


### Google Analytics

* [#34](https://github.com/PrestaShop/ps_googleanalytics/pull/34): Uninstall module used on PS 1.6 before using this one, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Live demo devices

* [#8](https://github.com/PrestaShop/live-demo-devices/pull/8): Add Google Tag Manager, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)



### CsaGuzzleBundle

* [#4](https://github.com/PrestaShop/CsaGuzzleBundle/pull/4): Update license headers and README to acknowledge this is a fork, by [@matks](https://github.com/matks)


### CIPSJsonParser

* [#2](https://github.com/PrestaShop/QANightlyResults/pull/2): Adding some containers to the party. Thank you [@djodjo3](https://github.com/djodjo3)


### E-mail subscription form

* [#36](https://github.com/PrestaShop/ps_emailsubscription/pull/36): Uninstall module used on PS 1.6 before using this one, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Cron tasks manager

* [#43](https://github.com/PrestaShop/cronjobs/pull/43): Comply to validator.prestashop.com rules, by [@matks](https://github.com/matks)


## Changes in documentation

* [#309](https://github.com/PrestaShop/docs/pull/309): Added sf-params option to sf category, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#311](https://github.com/PrestaShop/docs/pull/311): add validation tip about loading external code. Thank you [@zalexki](https://github.com/zalexki)
* [#314](https://github.com/PrestaShop/docs/pull/314): Correction of code remove the 2 times ->add(. Thank you [@PrestaSafe](https://github.com/PrestaSafe)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @boubkerbribri, @djodjo3, @eternoendless, @idnovate, @jolelievre, @khouloudbelguith, @marionf, @matks, @mickaelandrieu, @sarjon, @SimonGrn, @PierreRambaud, @PrestaSafe, @Quetzacoalt91, @Thomas-lhuillier, @unlocomqx, @zalexki!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
