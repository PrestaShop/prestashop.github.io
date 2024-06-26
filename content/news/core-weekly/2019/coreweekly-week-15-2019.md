---
layout: post
aliases: ["/news/coreweekly-week-15-2019"]
title:  "PrestaShop Core Weekly - Week 15 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-04-19 16:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 8th to Sunday 14th of April 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

The tests and debug phase of the 1.7.6 release has started: 134 issues have been created on the week after the code freeze. Some developers are already testing it on their infrastructure, opening issues, and submitting pull requests, and that is AWESOME!!!

Please continue like that, thank you very much for your feedback.

Oh, and this week, I went to the first edition of the PSconnect event in Lyon, France, with a few people of the PrestaShop company: business managers, product managers, our CEO and our CTO. That was a very interesting moment to discuss and collect feedback about the roadmap. Merchants, partners, agencies and freelancers confirmed that the project's roadmap is on good tracks. There was also a very good feedback about 1.7.5, with many projects in production and scheduled migrations.

Find the next PrestaShop event in your area: [https://www.prestashop.com/en/events](https://www.prestashop.com/en/events)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [134 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-04-08..2019-04-14) have been created in the project repositories;
- [63 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-04-08..2019-04-14), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-04-08..2019-04-14) on the core;
- [74 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-04-08..2019-04-14) in the project repositories;
- [46 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-04-08..2019-04-14), including [43 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-04-08..2019-04-14).



## Code changes in the "1.7.6.x" branch (for v1.7.6.0)

### Core

* [#13246](https://github.com/PrestaShop/PrestaShop/pull/13246): Add missing hook description, by [@eternoendless](https://github.com/eternoendless)
* [#13256](https://github.com/PrestaShop/PrestaShop/pull/13256): Fixes to Customer subdomain & controller. Thank you [@sarjon](https://github.com/sarjon)


### Back office

* [#13144](https://github.com/PrestaShop/PrestaShop/pull/13144): Cms page fixes. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13251](https://github.com/PrestaShop/PrestaShop/pull/13251): Removes unnecessary return on update everywhere. Thank you [@tomas862](https://github.com/tomas862)
* [#13264](https://github.com/PrestaShop/PrestaShop/pull/13264): Restores deleted generatable_text_widget from template. Thank you [@sarjon](https://github.com/sarjon)
* [#13273](https://github.com/PrestaShop/PrestaShop/pull/13273): Fix domain errors, by [@matks](https://github.com/matks)
* [#13349](https://github.com/PrestaShop/PrestaShop/pull/13349): Make all grids responsive, by [@eternoendless](https://github.com/eternoendless)
* [#13363](https://github.com/PrestaShop/PrestaShop/pull/13363): Fix syntax error in tpl, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Tests

* [#13356](https://github.com/PrestaShop/PrestaShop/pull/13356): Adds unit tests for FormHandlerFactory. Thank you [@sarjon](https://github.com/sarjon)


### Install

* [#13223](https://github.com/PrestaShop/PrestaShop/pull/13223): Fix SQL syntax error in upgrade file to PS 1.7.6, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Code changes in the 'develop' branch

### Core

* [#13119](https://github.com/PrestaShop/PrestaShop/pull/13119): Allow hookAdditionalCustomerFormFields and --AddressFormFields to modify fields positions. Thank you [@rblaurin](https://github.com/rblaurin)
* [#13200](https://github.com/PrestaShop/PrestaShop/pull/13200): Add SecurityAnnotation linter. Thank you [@sarjon](https://github.com/sarjon)
* [#13222](https://github.com/PrestaShop/PrestaShop/pull/13222): Do not try to install an unsupported language, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13232](https://github.com/PrestaShop/PrestaShop/pull/13232): [CO] Wrong calculation, free Gift. Thank you [@123monsite-regis](https://github.com/123monsite-regis)
* [#13235](https://github.com/PrestaShop/PrestaShop/pull/13235): Update src folder license headers, by [@matks](https://github.com/matks)
* [#13237](https://github.com/PrestaShop/PrestaShop/pull/13237): Update tests folders license headers, by [@matks](https://github.com/matks)
* [#13238](https://github.com/PrestaShop/PrestaShop/pull/13238): Update themes folders license headers, by [@matks](https://github.com/matks)
* [#13239](https://github.com/PrestaShop/PrestaShop/pull/13239): Update js folder license headers, by [@matks](https://github.com/matks)
* [#13242](https://github.com/PrestaShop/PrestaShop/pull/13242): Add missing hook description for additionalCustomerAddressFields, by [@eternoendless](https://github.com/eternoendless)
* [#13266](https://github.com/PrestaShop/PrestaShop/pull/13266): Merge 1.7.6.x to develop - 10/04/2019, by [@matks](https://github.com/matks)
* [#13359](https://github.com/PrestaShop/PrestaShop/pull/13359): Merge 1.7.6.x to develop - 11/04/2019, by [@matks](https://github.com/matks)
* [#13375](https://github.com/PrestaShop/PrestaShop/pull/13375): Merge 1.7.6.x to develop - 12/04/2019, by [@matks](https://github.com/matks)


### Back office

* [#13162](https://github.com/PrestaShop/PrestaShop/pull/13162): Tax page fixes. Thank you [@zuk3975](https://github.com/zuk3975)
* [#13221](https://github.com/PrestaShop/PrestaShop/pull/13221): Allow trans() to fall back on the legacy translation system when used with modules, by [@eternoendless](https://github.com/eternoendless)
* [#13241](https://github.com/PrestaShop/PrestaShop/pull/13241): Grid extension to disable filters submit button when filters are empty. Thank you [@zuk3975](https://github.com/zuk3975)


### Front office

* [#13047](https://github.com/PrestaShop/PrestaShop/pull/13047): New design for prices and taxes. Thank you [@YeLnatSs](https://github.com/YeLnatSs)
* [#13201](https://github.com/PrestaShop/PrestaShop/pull/13201): Fix search results if shop has non-default 'visitor' group and categories that are only accessible for the non-default visitor group. Thank you [@fgschaefer](https://github.com/fgschaefer)
* [#13218](https://github.com/PrestaShop/PrestaShop/pull/13218): Fix breadcrumb in search results page leads to 404 page, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools

### Auto upgrade

* [#295](https://github.com/PrestaShop/autoupgrade/pull/295): Add configuration file needed for Release Drafter, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#296](https://github.com/PrestaShop/autoupgrade/pull/296): Deploying v4.7.0 of the autoupgrade module, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Gamification

* [#64](https://github.com/PrestaShop/gamification/pull/64): Various improvements, by [@eternoendless](https://github.com/eternoendless)


### Theme customisation

* [#8](https://github.com/PrestaShop/ps_themecusto/pull/8): Correcting button on responsive by adding a new css rule, by [@apacios](https://github.com/apacios)
* [#11](https://github.com/PrestaShop/ps_themecusto/pull/11): Bump version 1.0.10, by [@jolelievre](https://github.com/jolelievre)


### Docker

* [#160](https://github.com/PrestaShop/docker/pull/160): Make sure nightly images are built from PrestaShop develop branch, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Amazon payments

* [#84](https://github.com/PrestaShop/amzpayments/pull/84): v2.2.8. Thank you [@paeddl](https://github.com/paeddl)
* [#85](https://github.com/PrestaShop/amzpayments/pull/85): v3.2.7. Thank you [@paeddl](https://github.com/paeddl)


## Changes in Documentation

* [#184](https://github.com/PrestaShop/docs/pull/184): adds Identifiable object Forms documentation. Thank you [@tomas862](https://github.com/tomas862)
* [#239](https://github.com/PrestaShop/docs/pull/239): Add deprecation notice about PS 1.7.6, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#240](https://github.com/PrestaShop/docs/pull/240): How to extend grid with Javascript extensions. Thank you [@zuk3975](https://github.com/zuk3975)
* [#242](https://github.com/PrestaShop/docs/pull/242): Add "Insomnia" to test REST API. Thank you [@yannicka](https://github.com/yannicka)
* [#246](https://github.com/PrestaShop/docs/pull/246): Fixed grammar and other small changes. Thank you [@NathanGiesbrecht](https://github.com/NathanGiesbrecht)
* [#247](https://github.com/PrestaShop/docs/pull/247): Missing dollar sign, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#251](https://github.com/PrestaShop/docs/pull/251): Update _index.md. Thank you [@budhead](https://github.com/budhead)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @123monsite-regis, @budhead, @paeddl, @rblaurin, @sarjon, @tomas862, @yannick, @YeLnatS, @zuk3975!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
