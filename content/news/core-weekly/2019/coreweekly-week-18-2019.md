---
layout: post
aliases: ["/news/coreweekly-week-18-2019"]
title:  "PrestaShop Core Weekly - Week 18 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-05-07 18:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 29th of April to Sunday 5th of May 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

The team is currently working on a Beta release. If you are interested to follow the work on the 1.7.6, below are three interesting links on GitHub:

- The [1.7.6 roadmap](https://github.com/PrestaShop/PrestaShop/projects/4), this is a dedicated kanban used for the release's project management
- The [1.7.6.0 milestone](https://github.com/PrestaShop/PrestaShop/milestone/47), where you can see what is currently open, and the work already closed (more than 800 items to date)
- You can also filter by type: [issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is%3Aissue+milestone%3A1.7.6.0+) (208 closed + open to date) or [pull requests](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+milestone%3A1.7.6.0) (635 closed + open to date)

If you want to compare, below are the equivalent links for two previous releases:

- [1.7.5.0 milestone](https://github.com/PrestaShop/PrestaShop/milestone/41?closed=1), with 596 items, including [146 issues](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is%3Aissue+milestone%3A1.7.5.0) and [450 pull requests](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+milestone%3A1.7.5.0)
- [1.7.4.0 milestone](https://github.com/PrestaShop/PrestaShop/milestone/34), with 260 pull requests; issues were still managed on the old forge at this time, that explains why there are no figures for issues.

So, now, you know how to check that PrestaShop 1.7.6.0 will be a huge release!

And that doesn't include the work carried out for the modules: this is only for the core. You can find some inspiration from the links in the next section of this core weekly to track the work done on the entire project.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [42 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-04-29..2019-05-05) have been created in the project repositories;
- [42 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-04-29..2019-05-05), including [14 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-04-29..2019-05-05) on the core;
- [75 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-04-29..2019-05-05) in the project repositories;
- [69 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-04-29..2019-05-05), including [62 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-04-29..2019-05-05).


## Code changes in the 'develop' branch (for 1.7.7.0)

### Core

* [#13384](https://github.com/PrestaShop/PrestaShop/pull/13384): Adds naming convention linter. Thank you [@sarjon](https://github.com/sarjon)
* [#13595](https://github.com/PrestaShop/PrestaShop/pull/13595): Merge 1.7.6.x to develop - 29/04/2019, by [@matks](https://github.com/matks)
* [#13606](https://github.com/PrestaShop/PrestaShop/pull/13606): Fix phpdoc on Module class, by [@Matt75](https://github.com/Matt75)
* [#13621](https://github.com/PrestaShop/PrestaShop/pull/13621): Merge 1.7.6.x to develop - 30/04/2019, by [@matks](https://github.com/matks)
* [#13666](https://github.com/PrestaShop/PrestaShop/pull/13666): Merge 1.7.6.x to develop - 03/05/2019, by [@matks](https://github.com/matks)


### Back office

* [#13571](https://github.com/PrestaShop/PrestaShop/pull/13571): Enable grid search button by default. Thank you [@zuk3975](https://github.com/zuk3975)


### Tests

* [#13495](https://github.com/PrestaShop/PrestaShop/pull/13495): Add behat tests for customer Commands and Queries (part 1), by [@matks](https://github.com/matks)


## Code changes in the "1.7.6.x" branch (for v1.7.6.0)

### Core

* [#13578](https://github.com/PrestaShop/PrestaShop/pull/13578): Automatically add dni field in Address format for countries which need it, by [@jolelievre](https://github.com/jolelievre)
* [#13604](https://github.com/PrestaShop/PrestaShop/pull/13604): Forbid URLS to be added in customer names, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#13605](https://github.com/PrestaShop/PrestaShop/pull/13605): Add missing translation domains, by [@matks](https://github.com/matks)
* [#13609](https://github.com/PrestaShop/PrestaShop/pull/13609): Fixed dispatched hook on the Grid presenter, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### Back office

* [#13372](https://github.com/PrestaShop/PrestaShop/pull/13372): Add missing security annotations. Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)
* [#13504](https://github.com/PrestaShop/PrestaShop/pull/13504): Fix backoffice translations for third-party modules, by [@eternoendless](https://github.com/eternoendless)
* [#13563](https://github.com/PrestaShop/PrestaShop/pull/13563): Do not get data from null currency, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#13576](https://github.com/PrestaShop/PrestaShop/pull/13576): Fix deleting profile . Thank you [@sarjon](https://github.com/sarjon)
* [#13603](https://github.com/PrestaShop/PrestaShop/pull/13603): Add id for orders view page to ease E2E testing, by [@matks](https://github.com/matks)


### Front office

* [#13407](https://github.com/PrestaShop/PrestaShop/pull/13407): Fix labels display computing, by [@jolelievre](https://github.com/jolelievre)
* [#13440](https://github.com/PrestaShop/PrestaShop/pull/13440): Change checkout behaviour, by [@jolelievre](https://github.com/jolelievre)
* [#13635](https://github.com/PrestaShop/PrestaShop/pull/13635): Fix product link should not include attribute parameter equals to zero, by [@jolelievre](https://github.com/jolelievre)


### Tests

* [#13502](https://github.com/PrestaShop/PrestaShop/pull/13502): Fix test Category suite full, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#13545](https://github.com/PrestaShop/PrestaShop/pull/13545): Fix test Employee Suite Full, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#13570](https://github.com/PrestaShop/PrestaShop/pull/13570): Fix broken selectors and logic for the test suite 9 (customer), by [@SimonGrn](https://github.com/SimonGrn)
* [#13588](https://github.com/PrestaShop/PrestaShop/pull/13588): Fixing some tests order, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#13597](https://github.com/PrestaShop/PrestaShop/pull/13597): Fix test 09_delivery_slips_pdf_and_options, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#13602](https://github.com/PrestaShop/PrestaShop/pull/13602): Fix for test 2 of the orders test suite, by [@SimonGrn](https://github.com/SimonGrn)
* [#13612](https://github.com/PrestaShop/PrestaShop/pull/13612): Fix test 05 create order without account, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#13615](https://github.com/PrestaShop/PrestaShop/pull/13615): Fix test Product suite full. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#13616](https://github.com/PrestaShop/PrestaShop/pull/13616): fix method to change quantity, by [@SimonGrn](https://github.com/SimonGrn)
* [#13651](https://github.com/PrestaShop/PrestaShop/pull/13651): Adding close welcome module in tests product, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#13659](https://github.com/PrestaShop/PrestaShop/pull/13659):  Adding close welcome module in tests Attribute, by [@boubkerbribri](https://github.com/boubkerbribri)


### Install

* [#13471](https://github.com/PrestaShop/PrestaShop/pull/13471): Set null values when trying to retrieve the non-existing default shop, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Code changes in the '1.7.5.x' branch (for 1.7.5.2)

### Core

* [#13580](https://github.com/PrestaShop/PrestaShop/pull/13580): Fixed dispatched hook on the Grid presenter, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#13599](https://github.com/PrestaShop/PrestaShop/pull/13599): Forbid URLS to be added in customer names, by [@PierreRambaud](https://github.com/PierreRambaud)


### Tests

* [#13583](https://github.com/PrestaShop/PrestaShop/pull/13583): Fix selector in E2E tests for addons catalog page and another one in the autoupgrade test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.6.1.x' branch (for 1.6.1.24)

### Core

* [#13607](https://github.com/PrestaShop/PrestaShop/pull/13607): Forbid URLs to be inserted into Name fields, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools

### Auto upgrade

* [#279](https://github.com/PrestaShop/autoupgrade/pull/279): Apply fixes from phpstan reviews, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#300](https://github.com/PrestaShop/autoupgrade/pull/300): Improve report of errors and fix notices, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#302](https://github.com/PrestaShop/autoupgrade/pull/302): Display error when access is not granted, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#303](https://github.com/PrestaShop/autoupgrade/pull/303): Enable php-cs-fixer on the project, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#305](https://github.com/PrestaShop/autoupgrade/pull/305): Add Rollback explanation in readme, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#307](https://github.com/PrestaShop/autoupgrade/pull/307): Improve configuration getter for image backup, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Legal compliance

* [#64](https://github.com/PrestaShop/ps_legalcompliance/pull/64): Unary operator spaces. Thank you [@MathiasReker](https://github.com/MathiasReker)


### OnBoarding

* [#56](https://github.com/PrestaShop/welcome/pull/56): Fix theme & logo, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#57](https://github.com/PrestaShop/welcome/pull/57): Update module version, README and LICENSE, by [@jolelievre](https://github.com/jolelievre)
* [#58](https://github.com/PrestaShop/welcome/pull/58): Version updated to v6.0.0, by [@jolelievre](https://github.com/jolelievre)


### Improvements of readme and license files in modules repositories

* [Banner #13](https://github.com/PrestaShop/ps_banner/pull/13): Update Readme & License, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [Banner #14](https://github.com/PrestaShop/ps_banner/pull/14): Update Readme & License, by [@eternoendless](https://github.com/eternoendless)
* [Check payment #23](https://github.com/PrestaShop/ps_checkpayment/pull/23): Update Readme & License, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [Check payment #24](https://github.com/PrestaShop/ps_checkpayment/pull/24): Update Readme & License, by [@eternoendless](https://github.com/eternoendless)
* [Wire payment #42](https://github.com/PrestaShop/ps_wirepayment/pull/42): Update Readme & License, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [Wire payment #43](https://github.com/PrestaShop/ps_wirepayment/pull/43): Update Readme & License, by [@eternoendless](https://github.com/eternoendless)
* [Category tree links #27](https://github.com/PrestaShop/ps_categorytree/pull/27): Update Readme & License, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [Category tree links #28](https://github.com/PrestaShop/ps_categorytree/pull/28):  Update Readme & License, by [@eternoendless](https://github.com/eternoendless)
* [Product Comments #27](https://github.com/PrestaShop/productcomments/pull/27): Update Readme, by [@eternoendless](https://github.com/eternoendless)
* [Product Comments #28](https://github.com/PrestaShop/productcomments/pull/28): Add Readme and License, by [@eternoendless](https://github.com/eternoendless)


### Product Comments

* [#26](https://github.com/PrestaShop/productcomments/pull/26): New 4.0.0 version compatible with PrestaShop 1.7.6+, by [@jolelievre](https://github.com/jolelievre)


### Emails SDK

* [#12](https://github.com/PrestaShop/email-templates-sdk/pull/12): Revert check vars. Thank you [@Scritik](https://github.com/Scritik)


### Docker

* [#162](https://github.com/PrestaShop/docker/pull/162):  Add PrestaShop 1.7.5.2 & 1.6.1.24 , by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


## Changes in Documentation

* [#250](https://github.com/PrestaShop/docs/pull/250): Added docs for Kpi rows improvements, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#260](https://github.com/PrestaShop/docs/pull/260): Goodpratices, Technical Tools and New Technical Keys Steps. Thank you [@Shiryu75](https://github.com/Shiryu75)
* [#263](https://github.com/PrestaShop/docs/pull/263): Add BO credentials in docker page, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#266](https://github.com/PrestaShop/docs/pull/266): Core style theme.css priority should be 50 not 0. Thank you [@rateforx](https://github.com/rateforx)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @MathiasReker, @nesrineabdmoule, @rateforx, @rokaszygmantas, @sarjon, @Scritik, @Shiryu75, @zuk3975!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
