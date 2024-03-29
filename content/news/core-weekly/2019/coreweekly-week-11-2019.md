---
layout: post
aliases: ["/news/coreweekly-week-11-2019"]
title:  "PrestaShop Core Weekly - Week 11 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-03-19 14:30:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 11th to Sunday 17th of March 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

A quick reminder: code freeze for PrestaShop 1.7.6.x is due 29th of March 2019, at the end of next week. So, if you want to fix a critical bug or to add an important improvement in the next version, the time has come to finally make your pull request and ask for a merge. Don't be shy ;-)

Then, in April, an alpha is going to be built, and the testing / debugging period will start. 


## A quick update about PrestaShop's GitHub issues and pull requests:

- [56 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-03-11..2019-03-17) have been created in the project repositories;
- [43 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-03-11..2019-03-17), including [6 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-03-11..2019-03-17) on the core;
- [52 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-03-11..2019-03-17) in the project repositories;
- [60 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-03-11..2019-03-17), including [44 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-03-11..2019-03-17).


## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#10406](https://github.com/PrestaShop/PrestaShop/pull/10406): Document and add tests to Faceted Search system, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### Back office

* [#12163](https://github.com/PrestaShop/PrestaShop/pull/12163): Migration of shop parameters->contact->contacts add new edit contact form. Thank you [@tomas862](https://github.com/tomas862)
* [#12423](https://github.com/PrestaShop/PrestaShop/pull/12423): Taxes list migration. Thank you [@zuk3975](https://github.com/zuk3975)
* [#12644](https://github.com/PrestaShop/PrestaShop/pull/12644): Add margin between buttons on Traffic & SEO page, by [@YeLnatSs](https://github.com/YeLnatSs)
* [#12699](https://github.com/PrestaShop/PrestaShop/pull/12699): Refacto addons store controller and handle addons failure, by [@matks](https://github.com/matks)
* [#12788](https://github.com/PrestaShop/PrestaShop/pull/12788): Remove html escaping of errors. Thank you [@bilfeldt](https://github.com/bilfeldt)
* [#12794](https://github.com/PrestaShop/PrestaShop/pull/12794): Add missing columns in products_import.csv. Thank you [@rblaurin](https://github.com/rblaurin)
* [#12874](https://github.com/PrestaShop/PrestaShop/pull/12874): Fix Symfony console crash because of DocumentationLinkProvider service definition, by [@jolelievre](https://github.com/jolelievre)
* [#12912](https://github.com/PrestaShop/PrestaShop/pull/12912): Fix Traffic and SEO route paths, by [@matks](https://github.com/matks)
* [#12945](https://github.com/PrestaShop/PrestaShop/pull/12945): Build assets, by [@matks](https://github.com/matks)


### Front office

* [#10253](https://github.com/PrestaShop/PrestaShop/pull/10253): Add modal-dialog-centered class to classic theme, by [@CaptainYouz](https://github.com/CaptainYouz) 
* [#11943](https://github.com/PrestaShop/PrestaShop/pull/11943): Improve performance by avoiding parsing YAML files during ModuleManagerBuilder init, by [@jocel1](https://github.com/jocel1)
* [#12817](https://github.com/PrestaShop/PrestaShop/pull/12817): Robots should not index search content. Thank you [@watou](https://github.com/watou)


### Installer

* [#12864](https://github.com/PrestaShop/PrestaShop/pull/12864): Remove ps_legalcompliance from composer.json , by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Tests

* [#12902](https://github.com/PrestaShop/PrestaShop/pull/12902): [Backport from develop] Allow Travis phpHigh build to fail as it is an informative check, by [@matks](https://github.com/matks)


## Code changes in modules, themes & tools

### Circuit breaker

* [#27](https://github.com/PrestaShop/circuit-breaker/pull/27): Added symfony circuit breaker, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### Auto upgrade

* [#289](https://github.com/PrestaShop/autoupgrade/pull/289): Remove PclZip from the project, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Nightly Board

* [#3](https://github.com/PrestaShop/nightly-board/pull/3): New theme, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#4](https://github.com/PrestaShop/nightly-board/pull/4): Gcloud configuration and change title name, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#5](https://github.com/PrestaShop/nightly-board/pull/5): Add Deploy command, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#6](https://github.com/PrestaShop/nightly-board/pull/6): Use a href instead of window.open, by [@PierreRambaud](https://github.com/PierreRambaud)


### Amazon Payments

* [#82](https://github.com/PrestaShop/amzpayments/pull/82): v3.2.6. Thank you [@paeddl](https://github.com/paeddl)
* [#83](https://github.com/PrestaShop/amzpayments/pull/83): v.2.2.7. Thank you [@paeddl](https://github.com/paeddl)


### Architecture Decision Records

* [#3](https://github.com/PrestaShop/ADR/pull/3): Add Mixed use of composer and zip modules, by [@eternoendless](https://github.com/eternoendless)


### Shopping cart

* [#29](https://github.com/PrestaShop/ps_shoppingcart/pull/29): Doctrine indent. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#30](https://github.com/PrestaShop/ps_shoppingcart/pull/30): Improve indentation and whitespace. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#32](https://github.com/PrestaShop/ps_shoppingcart/pull/32): Multiline whitespace before semicolons. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#34](https://github.com/PrestaShop/ps_shoppingcart/pull/34): Cast spaces. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#35](https://github.com/PrestaShop/ps_shoppingcart/pull/35): Blank lines. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#37](https://github.com/PrestaShop/ps_shoppingcart/pull/37): New with braces. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Legal Compliance

* [#47](https://github.com/PrestaShop/ps_legalcompliance/pull/47): Single quote. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#48](https://github.com/PrestaShop/ps_legalcompliance/pull/48): Include. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#50](https://github.com/PrestaShop/ps_legalcompliance/pull/50): Improve type casting. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#51](https://github.com/PrestaShop/ps_legalcompliance/pull/51): Php unit set up tear down visibility. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#53](https://github.com/PrestaShop/ps_legalcompliance/pull/53): Php unit method casing. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#54](https://github.com/PrestaShop/ps_legalcompliance/pull/54): No alias functions. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#55](https://github.com/PrestaShop/ps_legalcompliance/pull/55): Dir constant. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#56](https://github.com/PrestaShop/ps_legalcompliance/pull/56): Improve imports. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#57](https://github.com/PrestaShop/ps_legalcompliance/pull/57): Multiline whitespace before semicolons. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#58](https://github.com/PrestaShop/ps_legalcompliance/pull/58): Logical operators. Thank you [@MathiasReker](https://github.com/MathiasReker)


## Changes in Documentation

* [#226](https://github.com/PrestaShop/docs/pull/226): Add deprecation notices, by [@eternoendless](https://github.com/eternoendless)
* [#228](https://github.com/PrestaShop/docs/pull/228): Fixed Naming Conventions devdocs sections. Thank you [@lel-amri](https://github.com/lel-amri)
* [#229](https://github.com/PrestaShop/docs/pull/229): Handle form error in product page. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#230](https://github.com/PrestaShop/docs/pull/230): Clarified how the upgrade works, by [@eternoendless](https://github.com/eternoendless)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @bilfeldt, @jf-viguier, @lel-amri, @MathiasReker, @paeddl, @rblaurin, @tomas862, @watou, @zuk3975!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
