---
layout: post
aliases: ["/news/coreweekly-week-12-2019"]
title:  "PrestaShop Core Weekly - Week 12 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-03-25 16:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 18th to Sunday 22nd of March 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

This is the very last week to submit a pull request and make it approved: code freeze is due on Friday, 29th of March.

The work of the maintainers is currently focused on code review and merge, plus finalizing their current work. Don't forget that each morning, you can download a fresh [nightly build](https://nightly.prestashop-project.org/) with the latest code merged in the PrestaShop open source project. That should help to build and test an Alpha release, hopefully next week.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [59 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-03-18..2019-03-24) have been created in the project repositories;
- [82 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-03-18..2019-03-24), including [9 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-03-18..2019-03-24) on the core;
- [39 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-03-18..2019-03-24) in the project repositories;
- [43 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-03-18..2019-03-24), including [18 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-03-18..2019-03-24).


## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#9337](https://github.com/PrestaShop/PrestaShop/pull/9337): Migrate "Brands" listing page (a.k.a manufacturers). Thank you [@sarjon](https://github.com/sarjon)
* [#11962](https://github.com/PrestaShop/PrestaShop/pull/11962): Do not stripslashes value from _GET & _POST, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#12940](https://github.com/PrestaShop/PrestaShop/pull/12940): Do not look for translations if no locale, by [@matks](https://github.com/matks)
* [#12956](https://github.com/PrestaShop/PrestaShop/pull/12956): Customization - improve phpdoc and constants usage. Thank you [@Matt75](https://github.com/Matt75)
* [#12959](https://github.com/PrestaShop/PrestaShop/pull/12959): Handle Tools curl timeout to ease debugging, by [@matks](https://github.com/matks)
* [#12960](https://github.com/PrestaShop/PrestaShop/pull/12960): DoctrineBuilderExtension uses YamlParser for its config, by [@jolelievre](https://github.com/jolelievre)


### Back office

* [#12641](https://github.com/PrestaShop/PrestaShop/pull/12641): Tax create/edit form migration. Thank you [@zuk3975](https://github.com/zuk3975)
* [#12647](https://github.com/PrestaShop/PrestaShop/pull/12647): Migration of "Design -> pages -> add new / edit page category". Thank you [@tomas862](https://github.com/tomas862)
* [#12705](https://github.com/PrestaShop/PrestaShop/pull/12705): Update OrderHistory to manage {followup} & {shipping_number} vars in all email templates, not only in in_transit template. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#12782](https://github.com/PrestaShop/PrestaShop/pull/12782): Fixes for migrated Categories add/edit actions. Thank you [@sarjon](https://github.com/sarjon)
* [#12897](https://github.com/PrestaShop/PrestaShop/pull/12897): Enable lite display for new theme, by [@matks](https://github.com/matks)
* [#12946](https://github.com/PrestaShop/PrestaShop/pull/12946): Fix issue in AdminCarrierWizardController::processRanges(). Thank you [@Matt75](https://github.com/Matt75)
* [#12971](https://github.com/PrestaShop/PrestaShop/pull/12971): Enable customers page. Thank you [@sarjon](https://github.com/sarjon)


### Front office

* [#12564](https://github.com/PrestaShop/PrestaShop/pull/12564): Manage Doctrine entities from modules, doctrine available for front, modules autoload on front, by [@jolelievre](https://github.com/jolelievre)
* [#12965](https://github.com/PrestaShop/PrestaShop/pull/12965): Fix wrong cart calculation when using cart rule with virtual products, by [@tomlev](https://github.com/tomlev)


### Tests

* [#12634](https://github.com/PrestaShop/PrestaShop/pull/12634): Behat cart tests, by [@tomlev](https://github.com/tomlev)


## Code changes in modules, themes & tools

### Circuit breaker

* [#28](https://github.com/PrestaShop/circuit-breaker/pull/28): Improved Symfony implementation, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### UI Kit

* [#59](https://github.com/PrestaShop/prestashop-ui-kit/pull/59): Adds possibility to display file name on file upload. Thank you [@tomas862](https://github.com/tomas862)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @jf-viguier, @Matt75, @sarjon, @tomas862, @zuk3975!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
