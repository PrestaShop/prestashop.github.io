---
layout: post
aliases: ["/news/coreweekly-week-07-2019"]
title:  "PrestaShop Core Weekly - Week 07 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-02-22 17:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 11th to Sunday 17th of February 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## General messages

Dear Developers,

During week seven, the team had some issues with Travis, and, the time to fix that, it was a bit difficult to merge pull requests. However, 45 pull requests were merged. Good job guys!


## A quick update about PrestaShop's GitHub issues and pull requests:

- [53 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-02-11..2019-02-17) have been created in the project repositories
- [38 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-02-11..2019-02-17), including [6 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-02-11..2019-02-17) on the core.
- [64 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-02-11..2019-02-17) in the project repositories
- [60 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-02-11..2019-02-17), including [45 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-02-11..2019-02-17)

## Code changes in the 'develop' branch (for v1.7.6.0)

### Core

* [#11764](https://github.com/PrestaShop/PrestaShop/pull/11764): CO : Undefined variable. Thank you [@idnovate](https://github.com/idnovate)
* [#12124](https://github.com/PrestaShop/PrestaShop/pull/12124): Remove unwanted umask, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#12152](https://github.com/PrestaShop/PrestaShop/pull/12152): Fixed (by temporary hacking) #12151 'Timezone standard is ignored'. Thank you [@michaesc](https://github.com/michaesc)
* [#12473](https://github.com/PrestaShop/PrestaShop/pull/12473): Order Creation: fix out of stock status, by [@rGaillard](https://github.com/rGaillard)
* [#12484](https://github.com/PrestaShop/PrestaShop/pull/12484): Fix missing tag for CustomerType. Thank you [@sarjon](https://github.com/sarjon)
* [#12532](https://github.com/PrestaShop/PrestaShop/pull/12532): Updated Core using new version of Composer script handler, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#12543](https://github.com/PrestaShop/PrestaShop/pull/12543): Update vulnerable dependencies, by [@eternoendless](https://github.com/eternoendless)


### Back office

* [#10877](https://github.com/PrestaShop/PrestaShop/pull/10877): Migration of  "Design > Pages" page cms category listing. Thank you [@tomas862](https://github.com/tomas862)
* [#12471](https://github.com/PrestaShop/PrestaShop/pull/12471): Use AdminSecurity annotation for ajax call for Sql Manager, by [@matks](https://github.com/matks)


### Front office

* [#12403](https://github.com/PrestaShop/PrestaShop/pull/12403): Attribute min not allowed on element input at this point, change type…. Thank you [@dominictayloruk](https://github.com/dominictayloruk)


### Tests

* [#12574](https://github.com/PrestaShop/PrestaShop/pull/12574): Fix PositionsControllerTest for good, by [@jolelievre](https://github.com/jolelievre)


## Code changes in the '1.7.5.x' branch (for v1.7.5.1)


### Back Office

* [#12507](https://github.com/PrestaShop/PrestaShop/pull/12507): Add hookDispatcher in GridFactory constructor, HookDispatcherAwareTrait has a safer getter, by [@jolelievre](https://github.com/jolelievre)


## Code changes in modules, themes & tools

### Mail alerts

* [#17](https://github.com/PrestaShop/ps_emailalerts/pull/17): Correct product name and link if it has attributes. Thank you [@kpodemski](https://github.com/kpodemski)


### Traces

* [#2](https://github.com/PrestaShop/traces/pull/2): Make timeout configurable, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### Composer script handler

* [#4](https://github.com/PrestaShop/composer-script-handler/pull/4): Asks confirmation before overwrite the existing modules, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#5](https://github.com/PrestaShop/composer-script-handler/pull/5): Made overwritting behavior "overwrite" the output for real, by [@jolelievre](https://github.com/jolelievre)
* [#6](https://github.com/PrestaShop/composer-script-handler/pull/6): Allow to deactivate overwriting using env variable, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### PrestaShop Cleaner

* [#21](https://github.com/PrestaShop/pscleaner/pull/21): Add cart_rule_lang in Check And Fix to delete old cart rule's names.. Thank you [@Uebix](https://github.com/Uebix)
* [#27](https://github.com/PrestaShop/pscleaner/pull/27): Blank lines. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#30](https://github.com/PrestaShop/pscleaner/pull/30): Cast spaces. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#32](https://github.com/PrestaShop/pscleaner/pull/32): Single quote. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#33](https://github.com/PrestaShop/pscleaner/pull/33): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Gamification

* [#38](https://github.com/PrestaShop/gamification/pull/38): Fix php docs and comments. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#43](https://github.com/PrestaShop/gamification/pull/43): Include. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#44](https://github.com/PrestaShop/gamification/pull/44): Php unit test case static method calls. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#45](https://github.com/PrestaShop/gamification/pull/45): Single quote. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#46](https://github.com/PrestaShop/gamification/pull/46): Random api migration. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#47](https://github.com/PrestaShop/gamification/pull/47): Space after semicolon. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#49](https://github.com/PrestaShop/gamification/pull/49): Unary operator spaces. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#50](https://github.com/PrestaShop/gamification/pull/50): Is null. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#51](https://github.com/PrestaShop/gamification/pull/51): Function to constant. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#52](https://github.com/PrestaShop/gamification/pull/52): Dir constant. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#53](https://github.com/PrestaShop/gamification/pull/53): Normalize line ending lf unix. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#54](https://github.com/PrestaShop/gamification/pull/54): Php unit set up tear down visibility. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#56](https://github.com/PrestaShop/gamification/pull/56): Blank lines. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#57](https://github.com/PrestaShop/gamification/pull/57): Beautify yml files. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Buy Button Lite

* [#15](https://github.com/PrestaShop/ps_buybuttonlite/pull/15): Class attributes separation. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#16](https://github.com/PrestaShop/ps_buybuttonlite/pull/16): Trailing comma in multiline array. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#18](https://github.com/PrestaShop/ps_buybuttonlite/pull/18): Is null. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#20](https://github.com/PrestaShop/ps_buybuttonlite/pull/20): Cast spaces. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#22](https://github.com/PrestaShop/ps_buybuttonlite/pull/22): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#24](https://github.com/PrestaShop/ps_buybuttonlite/pull/24): Happy new year 2019. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#26](https://github.com/PrestaShop/ps_buybuttonlite/pull/26): fix wording. Thank you [@MathiasReker](https://github.com/MathiasReker)


## Changes in Documentation

* [#204](https://github.com/PrestaShop/docs/pull/204): Added a note on service declaration in Yaml, by [@mickaelandrieu](https://github.com/mickaelandrieu)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @dominictayloruk, @idnovate, @kpodemski, @MathiasReker, @michaesc, @tomas862, @Uebix !

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
