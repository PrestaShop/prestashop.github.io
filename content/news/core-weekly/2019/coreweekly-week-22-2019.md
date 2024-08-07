---
layout: post
aliases: ["/news/coreweekly-week-22-2019"]
title:  "PrestaShop Core Weekly - Week 22 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-06-07 14:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 27th of May to Sunday 2nd of June 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

That was great to meet those of you who came in Paris for the PrestaShop Day. There was a developer space, and a technical track. Many technical questions and some issues were discussed, that is what opportunities to meet in real life are made for ;-)


After Paris, [PrestaShop Day Madrid](https://www.prestashop.com/es/eventos/prestashop-day-madrid) is planned in 2 weeks for June 18th and will gather more than 1,200 people at La Nave Madrid - experts, open source lovers, translators, merchants, partners, etc. You can use the promotionnal code "PSDMADRIDFORUM" to [get your free ticket](https://www.weezevent.com/psd-madrid?o=build)

That said, there is only one week left to finish the Beta of 1.7.6. Once all the bugs will be triaged and fixed, the work on the first release candidate will start. It means it is still time to test the beta, report issues and open pull requests.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [51 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-05-27..2019-06-02) have been created in the project repositories;
- [45 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-05-27..2019-06-02), including [13 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-05-27..2019-06-02) on the core;
- [53 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-05-27..2019-06-02) in the project repositories;
- [34 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-05-27..2019-06-02), including [30 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-05-27..2019-06-02).


## Code changes in the 'develop' branch

### Core

* [#14012](https://github.com/PrestaShop/PrestaShop/pull/14012): Merge 1.7.6.x to develop - 29/05/2019, by [@matks](https://github.com/matks)


## Code changes in the "1.7.6.x" branch (for v1.7.6.0)

### Core

* [#14010](https://github.com/PrestaShop/PrestaShop/pull/14010): Update some license headers that were outdated, by [@matks](https://github.com/matks)
* [#14011](https://github.com/PrestaShop/PrestaShop/pull/14011): Update outdated CSS assets, by [@matks](https://github.com/matks)


### Back office

* [#13774](https://github.com/PrestaShop/PrestaShop/pull/13774): Includes missing theme & logo page validation handling for logo and icon images. Thank you [@tomas862](https://github.com/tomas862)
* [#13820](https://github.com/PrestaShop/PrestaShop/pull/13820): Fixes form_rest placing. Thank you [@sarjon](https://github.com/sarjon)
* [#13875](https://github.com/PrestaShop/PrestaShop/pull/13875): Added help property (backported from Symfony 4 framework). Thank you [@tomas862](https://github.com/tomas862)
* [#13916](https://github.com/PrestaShop/PrestaShop/pull/13916): Fixes saving private note about customer from order page. Thank you [@sarjon](https://github.com/sarjon)
* [#13956](https://github.com/PrestaShop/PrestaShop/pull/13956): Restore legacy controller and template files deleted late in beta, by [@matks](https://github.com/matks)
* [#14007](https://github.com/PrestaShop/PrestaShop/pull/14007): Fix currency precision from CLDR at install, by [@tomlev](https://github.com/tomlev)
* [#14030](https://github.com/PrestaShop/PrestaShop/pull/14030): Add missing legacy link for translations routes. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)


### Front office

* [#13905](https://github.com/PrestaShop/PrestaShop/pull/13905): Step clickable and not - Checkout page. Thank you [@YeLnatSs](https://github.com/YeLnatSs)


### Tests

* [#13713](https://github.com/PrestaShop/PrestaShop/pull/13713): Fix product tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)

* [#13961](https://github.com/PrestaShop/PrestaShop/pull/13961): Giving write access to selenium-chrome container to download file in selenium-downloads volume, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#14002](https://github.com/PrestaShop/PrestaShop/pull/14002): Install poppler-utils in e2e-tests container and use endAll to delete Selenium sessions, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#14026](https://github.com/PrestaShop/PrestaShop/pull/14026): Adds missing pages to survival test. Thank you [@sarjon](https://github.com/sarjon)


## Code changes in modules, themes & tools

### PrestaShop Coding Standards

* [#6](https://github.com/PrestaShop/php-coding-standards/pull/6): Improve PHPStan use and explanation in Readme , by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Live demo devices

* [#6](https://github.com/PrestaShop/live-demo-devices/pull/6): Interface feedbacks, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Docker Internal images

* [#26](https://github.com/PrestaShop/docker-internal-images/pull/26): Add temporary tag beta, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Faceted search

* [#70](https://github.com/PrestaShop/ps_facetedsearch/pull/70): Reindex multistore correctly, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#71](https://github.com/PrestaShop/ps_facetedsearch/pull/71): Add more tests for block search, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#72](https://github.com/PrestaShop/ps_facetedsearch/pull/72): filtering doesn't filter between product attributes, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#73](https://github.com/PrestaShop/ps_facetedsearch/pull/73): Fix touch problem on mobile, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#74](https://github.com/PrestaShop/ps_facetedsearch/pull/74): Render as a widget if hook is not found during the callable stack, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#75](https://github.com/PrestaShop/ps_facetedsearch/pull/75): Fix warning on feature / attributes and fix slider for ps 1.7.5, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#77](https://github.com/PrestaShop/ps_facetedsearch/pull/77): Revert "Reindex multistore correctly", by [@PierreRambaud](https://github.com/PierreRambaud)
* [#78](https://github.com/PrestaShop/ps_facetedsearch/pull/78): Revert "Add more tests for block search", by [@PierreRambaud](https://github.com/PierreRambaud)
* [#79](https://github.com/PrestaShop/ps_facetedsearch/pull/79): Multistore, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#80](https://github.com/PrestaShop/ps_facetedsearch/pull/80): More tests, by [@PierreRambaud](https://github.com/PierreRambaud)


## Changes in Documentation

* [#274](https://github.com/PrestaShop/docs/pull/274): Explain how to override a simple block instead of a whole file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#277](https://github.com/PrestaShop/docs/pull/277): Fix a typo : "your/you're", by [@SimonGrn](https://github.com/SimonGrn)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @nesrineabdmouleh, @rokaszygmantas, @sarjon, @tomas862, @YeLnatSs!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
