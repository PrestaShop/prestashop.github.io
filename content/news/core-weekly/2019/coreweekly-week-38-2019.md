---
layout: post
aliases: ["/news/coreweekly-week-38-2019"]
title:  "PrestaShop Core Weekly - Week 38 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-10-08 10:40:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 16th of September to Sunday 22th of September 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

Some major issues have been identified in latest 1.7.6 release, and consequently a 1.7.6.2 release is already on track.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [67 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-09-16..2019-09-22) have been created in the project repositories;
- [57 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-09-16..2019-09-22), including [12 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-09-16..2019-09-22) on the core;
- [61 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-09-16..2019-09-22) in the project repositories;
- [59 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-09-16..2019-09-22), including [31 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-09-16..2019-09-22).


## Code changes in the 'develop' branch

### Core

* [#15625](https://github.com/PrestaShop/PrestaShop/pull/15625): Properly cleanup the customization table if no more customized_data, by [@jocel1](https://github.com/jocel1)

* [#15577](https://github.com/PrestaShop/PrestaShop/pull/15577): Update symfony/phpunit-bridge dependency for security reason, by [@PierreRambaud](https://github.com/PierreRambaud)

* [#15557](https://github.com/PrestaShop/PrestaShop/pull/15557): Update php docs in class PaymentModule.. Thank you [@FlorianBergeron](https://github.com/FlorianBergeron)

* [#15555](https://github.com/PrestaShop/PrestaShop/pull/15555): Fix php docs in class Mail. Thank you [@FlorianBergeron](https://github.com/FlorianBergeron)

* [#15552](https://github.com/PrestaShop/PrestaShop/pull/15552): Update php docs for class customer. Thank you [@FlorianBergeron](https://github.com/FlorianBergeron)

* [#15551](https://github.com/PrestaShop/PrestaShop/pull/15551): Update php docs on currency class. Thank you [@zalexki](https://github.com/zalexki)

* [#15550](https://github.com/PrestaShop/PrestaShop/pull/15550): Update php docs for link class. Thank you [@FlorianBergeron](https://github.com/FlorianBergeron)

* [#15520](https://github.com/PrestaShop/PrestaShop/pull/15520): Remove old docs files, by [@matks](https://github.com/matks)

* [#15618](https://github.com/PrestaShop/PrestaShop/pull/15618): Switched zone for Croatia from "Europe (non-UE)" to "Europe", by [@Progi1984](https://github.com/Progi1984)

* [#15617](https://github.com/PrestaShop/PrestaShop/pull/15617): Merge of bug fixes from 1.7.6.x branch to develop, by [@matks](https://github.com/matks)

### Back office

* [#15546](https://github.com/PrestaShop/PrestaShop/pull/15546): Bad combination dropdown in cart rule. Thank you [@idnovate](https://github.com/idnovate)

### Front office

* [#15603](https://github.com/PrestaShop/PrestaShop/pull/15603): Allow access to Checkout process, by [@matks](https://github.com/matks)

* [#15512](https://github.com/PrestaShop/PrestaShop/pull/15512): Unclosed p html tag. Thank you [@davidglezz](https://github.com/davidglezz)

* [#15399](https://github.com/PrestaShop/PrestaShop/pull/15399): Fix bug keeping users from choosing a carrier before cart order completion, by [@matthieu-rolland](https://github.com/matthieu-rolland)

* [#15176](https://github.com/PrestaShop/PrestaShop/pull/15176): Enable modules to know the current checkout process step, by [@matks](https://github.com/matks)

### Tests

* [#15630](https://github.com/PrestaShop/PrestaShop/pull/15630): Moving login test in a commonTests directory, by [@boubkerbribri](https://github.com/boubkerbribri)

* [#15586](https://github.com/PrestaShop/PrestaShop/pull/15586): Remove deprecated StarterTheme tests, by [@matks](https://github.com/matks)

* [#15584](https://github.com/PrestaShop/PrestaShop/pull/15584): Replace mocha scenario and test with describe and it functions, by [@boubkerbribri](https://github.com/boubkerbribri)

* [#15556](https://github.com/PrestaShop/PrestaShop/pull/15556): Add Sanity tests on travis build, by [@boubkerbribri](https://github.com/boubkerbribri)

## Code changes in the '1.7.6.x' branch (for v1.7.6.2)

### Core

* [#15515](https://github.com/PrestaShop/PrestaShop/pull/15515): SqlTranslator must throw a NotFoundResourceException, by [@PierreRambaud](https://github.com/PierreRambaud)

### Back office

* [#15382](https://github.com/PrestaShop/PrestaShop/pull/15382): Remove useless and buggy identifier computation, by [@jolelievre](https://github.com/jolelievre)

### Tests

* [#15590](https://github.com/PrestaShop/PrestaShop/pull/15590): Remove selenium tests, by [@PierreRambaud](https://github.com/PierreRambaud)

## Code changes in modules, themes & tools

### Changes in developer documentation

* [#351](https://github.com/PrestaShop/docs/pull/351): Fix errors in behat tutorial and improvements, by [@matks](https://github.com/matks)

* [#350](https://github.com/PrestaShop/docs/pull/350): Error in registerJavascript properties description. Thank you [@jeckyl](https://github.com/jeckyl)

* [#348](https://github.com/PrestaShop/docs/pull/348): Move composer content in a dedicated chapter, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)

* [#347](https://github.com/PrestaShop/docs/pull/347): Explain how to comply with the conditions about using iFrames in a module, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)

* [#333](https://github.com/PrestaShop/docs/pull/333): Explain better how we do automated testing in prestashop and introduce behat tests, by [@matks](https://github.com/matks)

### Email subscription module

* [#42](https://github.com/PrestaShop/ps_emailsubscription/pull/42): Improve README, by [@matks](https://github.com/matks)

### Faceted search module

* [#142](https://github.com/PrestaShop/ps_facetedsearch/pull/142): Release 3.3.0, by [@PierreRambaud](https://github.com/PierreRambaud)

* [#140](https://github.com/PrestaShop/ps_facetedsearch/pull/140): Update version to 3.3.0, by [@PierreRambaud](https://github.com/PierreRambaud)

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @matks, @JBWModules, @boubkerbribri, @jeckyl, @jocel1, @Progi1984, @Quetzacoalt91, @PierreRambaud, @FlorianBergeron, @zalexki, @idnovate, @davidglezz, @matthieu-rolland, @jolelievre!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
