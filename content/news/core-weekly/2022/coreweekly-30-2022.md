---
layout: post
aliases: ["/news/coreweekly-30-2022"]
title:  "PrestaShop Core Weekly - Week 30 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-08-01
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 25th to Sunday 31th of July 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

With the help of the community, the maintainers team focused on the PrestaShop 8.0.0 Beta release. You can follow the release process [here](https://github.com/PrestaShop/PrestaShop/issues/26427). The work continues, but we expect a Beta version very soon. Stay tuned!

A few weeks ago, we started organizing cyclic meetings of maintainers and committers, where we discuss various topics to help the project move forward and address some issues. One we discussed was the process of releasing a new version of modules.
The effects of the discussion are already visible! @matks [created an application](https://github.com/PrestaShop/ps-monitor-module-releases) that generates [a page](https://build.prestashop.com/ps-monitor-module-releases/) available for everyone where we can monitor which modules should be released. This will help us better monitor this process.

In other news, the ADR explaining the project's [backward compatibility promise](https://github.com/PrestaShop/ADR/pull/25) has been merged, and from now on, the project will follow its rules. We encourage you to look, as it should help you better understand what to expect from future releases.

Last but not least: in August, a lot of people enjoy their well-deserved vacation. We decided to skip this month's Public Demo: the next one will be in September, where you should expect a few fantastic demos.

## A quick update about PrestaShop's GitHub issues and pull requests:

- [43 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-07-25..2022-07-31) have been created in the project repositories;
- [31 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-07-25..2022-07-31), including [11 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-07-25..2022-07-31) on the core;
- [46 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-07-25..2022-07-31) in the project repositories;
- [51 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-07-25..2022-07-31), including [46 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-07-25..2022-07-31).


## Code changes in the 'develop' branch


### Core
* [#29141](https://github.com/PrestaShop/PrestaShop/pull/29141): Fix typo inside Reference's comment. Thank you [@abramofranchetti](https://github.com/abramofranchetti)
* [#29094](https://github.com/PrestaShop/PrestaShop/pull/29094): Add Smarty blocks to variables and styles definition. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Back office
* [#28825](https://github.com/PrestaShop/PrestaShop/pull/28825): Order invoices configuration form: add multistore compatibility and some refactoring. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#28416](https://github.com/PrestaShop/PrestaShop/pull/28416): Do not throw an exception if a module is invalid, by [@atomiix](https://github.com/atomiix)


### Front office
* [#28943](https://github.com/PrestaShop/PrestaShop/pull/28943): Throw exception when ImageType doesn't return anything on FO, by [@eternoendless](https://github.com/eternoendless)


## Code changes in the '8.0.x' branch


### Core
* [#29068](https://github.com/PrestaShop/PrestaShop/pull/29068): Regenerate modern mail theme, by [@atomiix](https://github.com/atomiix)


### Back office
* [#29190](https://github.com/PrestaShop/PrestaShop/pull/29190): Fix menu display for legacy pages. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#29186](https://github.com/PrestaShop/PrestaShop/pull/29186): Fix supplier / product v1 association. Thank you [@MeKeyCool](https://github.com/MeKeyCool)
* [#29162](https://github.com/PrestaShop/PrestaShop/pull/29162): Remove smarty caching_type. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#29158](https://github.com/PrestaShop/PrestaShop/pull/29158): Fix product type error when enabling experimental product page. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29086](https://github.com/PrestaShop/PrestaShop/pull/29086): Fix filtering by date in Movements page (stock section). Thank you [@marsaldev](https://github.com/marsaldev)
* [#29073](https://github.com/PrestaShop/PrestaShop/pull/29073): Remove select2 for categories in product v1, by [@atomiix](https://github.com/atomiix)
* [#29054](https://github.com/PrestaShop/PrestaShop/pull/29054): Fix BO Units on inputs. Thank you [@FabienPapet](https://github.com/FabienPapet)


### Tests
* [#29099](https://github.com/PrestaShop/PrestaShop/pull/29099): Add docker-compose.override.yml to ignored files. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#28991](https://github.com/PrestaShop/PrestaShop/pull/28991): Update faker dependency for UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#28948](https://github.com/PrestaShop/PrestaShop/pull/28948): Functional tests - Add new test 'Change language in FO'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28922](https://github.com/PrestaShop/PrestaShop/pull/28922): Functional tests - Refactoring of 'Check footer links on FO' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Back office
* [#29096](https://github.com/PrestaShop/PrestaShop/pull/29096): BO - Bad display on Your Profile button on all of pages when hover and click on it. Thank you [@okom3pom](https://github.com/okom3pom)


## Code changes in modules, themes & tools


### Distribution API client
* [#5](https://github.com/PrestaShop/ps_distributionapiclient/pull/5): Bump version to 1.0.1, by [@atomiix](https://github.com/atomiix)
* [#4](https://github.com/PrestaShop/ps_distributionapiclient/pull/4): Use production endpoint, by [@atomiix](https://github.com/atomiix)


### Wishlist block module
* [#183](https://github.com/PrestaShop/blockwishlist/pull/183): Bump version to 2.1.2, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#182](https://github.com/PrestaShop/blockwishlist/pull/182): Bump terser from 4.8.0 to 4.8.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Traces
* [#32](https://github.com/PrestaShop/traces/pull/32): Add PrestaShop/ps-monitor-module-releases. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### PrestaShop Module Releases Monitoring
* [#6](https://github.com/PrestaShop/ps-monitor-module-releases/pull/6): Get modules list from listing, does not use hardcoded file. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#3](https://github.com/PrestaShop/ps-monitor-module-releases/pull/3): Update repo name, by [@eternoendless](https://github.com/eternoendless)
* [#1](https://github.com/PrestaShop/ps-monitor-module-releases/pull/1): Update modules List. Thank you [@okom3pom](https://github.com/okom3pom)


### Customer reassurance block module
* [#431](https://github.com/PrestaShop/blockreassurance/pull/431): Bump webpack from 5.73.0 to 5.74.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#429](https://github.com/PrestaShop/blockreassurance/pull/429): Bump vue from 2.7.7 to 2.7.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#428](https://github.com/PrestaShop/blockreassurance/pull/428): Bump terser from 5.10.0 to 5.14.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#427](https://github.com/PrestaShop/blockreassurance/pull/427): Bump @babel/eslint-parser from 7.18.2 to 7.18.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#426](https://github.com/PrestaShop/blockreassurance/pull/426): Bump @babel/core from 7.18.6 to 7.18.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#689](https://github.com/PrestaShop/ps_facetedsearch/pull/689): Bump webpack from 5.73.0 to 5.74.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#685](https://github.com/PrestaShop/ps_facetedsearch/pull/685): Bump @babel/preset-env from 7.18.6 to 7.18.9. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Docker images
* [#310](https://github.com/PrestaShop/docker/pull/310): Release 1.7.8.7, by [@atomiix](https://github.com/atomiix)


### Hummingbird theme
* [#357](https://github.com/PrestaShop/hummingbird/pull/357): account-page-back-button-fix. Thank you [@JBLach](https://github.com/JBLach)
* [#355](https://github.com/PrestaShop/hummingbird/pull/355): fixes on 768px viewport. Thank you [@JBLach](https://github.com/JBLach)


### Prestashop UI Kit
* [#192](https://github.com/PrestaShop/prestashop-ui-kit/pull/192): Bump moment from 2.29.2 to 2.29.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Nightly board
* [#89](https://github.com/PrestaShop/nightly-board/pull/89): Bump moment from 2.29.2 to 2.29.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#88](https://github.com/PrestaShop/nightly-board/pull/88): Bump shell-quote from 1.7.2 to 1.7.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Classic theme
* [#47](https://github.com/PrestaShop/classic-theme/pull/47): Bump terser from 5.9.0 to 5.14.2 in /_dev. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#36](https://github.com/PrestaShop/classic-theme/pull/36): Update theme version and require PS 8 minimum, by [@eternoendless](https://github.com/eternoendless)


### Core Weekly Generator tool
* [#125](https://github.com/PrestaShop/core-weekly-generator/pull/125): Bump thenify from 3.3.0 to 3.3.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Product Comments module
* [#147](https://github.com/PrestaShop/productcomments/pull/147): Fix jQuery event shorthand is deprecated - change, submit, hover. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Architecture Decision Records repository
* [#25](https://github.com/PrestaShop/ADR/pull/25): 0017 - Add our backward compatibility promise, by [@PierreRambaud](https://github.com/PierreRambaud)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@atomiix](https://github.com/atomiix), [@NeOMakinG](https://github.com/NeOMakinG), [@MeKeyCool](https://github.com/MeKeyCool), [@PrestaEdit](https://github.com/PrestaEdit), [@eternoendless](https://github.com/eternoendless), [@okom3pom](https://github.com/okom3pom), [@dependabot[bot]](https://github.com/apps/dependabot), [@FabienPapet](https://github.com/FabienPapet), [@zuk3975](https://github.com/zuk3975), [@JBLach](https://github.com/JBLach), [@abramofranchetti](https://github.com/abramofranchetti), [@marsaldev](https://github.com/marsaldev), [@boubkerbribri](https://github.com/boubkerbribri), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@leemyongpakvn](https://github.com/leemyongpakvn), [@Progi1984](https://github.com/Progi1984), [@PierreRambaud](https://github.com/PierreRambaud)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

