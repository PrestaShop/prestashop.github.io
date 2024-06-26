---
layout: post
aliases: ["/news/coreweekly-51-2020"]
title:  "PrestaShop Core Weekly - Week 51 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-12-21
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 14th to Sunday 20th of December 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear Developers,

New year is coming soon. We expect the activity on GitHub to slow down a bit as some people take time off for holidays. This is also true for for maintainers, product and QA teams.

[PrestaShop 1.7.7.1](https://github.com/PrestaShop/PrestaShop/issues/22306) is on track and quality continues to increase on PrestaShop core as [PHPStan](https://github.com/PrestaShop/PrestaShop/pull/21515) is now analyzing PrestaShop code under level 4 thanks to [@Progi1984](https://github.com/Progi1984).

By the way, did you notice the new design and features of the [Contributors page](https://contributors.prestashop.com/)?


## Releases

* [ps_facetedsearch](https://github.com/PrestaShop/ps_facetedsearch) module: [v3.7.0](https://github.com/PrestaShop/ps_facetedsearch/releases/tag/v3.7.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [75 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-12-14..2020-12-20) have been created in the project repositories;
- [111 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-12-14..2020-12-20), including [29 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-12-14..2020-12-20) on the core;
- [77 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-12-14..2020-12-20) in the project repositories;
- [90 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-12-14..2020-12-20), including [80 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-12-14..2020-12-20).



## Code changes in the 'develop' branch


### Core
* [#22465](https://github.com/PrestaShop/PrestaShop/pull/22465): Add the Bug Bounty Program in the README, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#22335](https://github.com/PrestaShop/PrestaShop/pull/22335): Updated PHPStan Github Action settings, by [@Progi1984](https://github.com/Progi1984)
* [#22022](https://github.com/PrestaShop/PrestaShop/pull/22022): Save the newest Guest with updated datas. Thank you [@prestamodule](https://github.com/prestamodule)


### Back office
* [#22453](https://github.com/PrestaShop/PrestaShop/pull/22453): Fix border radius on kpis pan, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22427](https://github.com/PrestaShop/PrestaShop/pull/22427): Add scroll on kpis on mobile and adjust some sizes, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22421](https://github.com/PrestaShop/PrestaShop/pull/22421): Adapt tinymce toolbar depending of the width it has free, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22411](https://github.com/PrestaShop/PrestaShop/pull/22411): Fix tooltip position on grid items, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22380](https://github.com/PrestaShop/PrestaShop/pull/22380): Add behat test scenarios for wholesale_price change when assigning supplier. Thank you [@zuk3975](https://github.com/zuk3975)
* [#22376](https://github.com/PrestaShop/PrestaShop/pull/22376): Fixed case where saving virtual product attachment is modifying product price if a specific price is set on the product. Thank you [@gennaris](https://github.com/gennaris)
* [#22373](https://github.com/PrestaShop/PrestaShop/pull/22373): Change some alerts on improve translations to helpbox, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22371](https://github.com/PrestaShop/PrestaShop/pull/22371): Remove padding left on label on mobile responsive view, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22369](https://github.com/PrestaShop/PrestaShop/pull/22369): Update ubuntu font to avoid polish bug, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22362](https://github.com/PrestaShop/PrestaShop/pull/22362): Fix every pages padding on responsive mobile view, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22359](https://github.com/PrestaShop/PrestaShop/pull/22359): Hide gamification icon on header on mobile responsive view, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22356](https://github.com/PrestaShop/PrestaShop/pull/22356): Remove breadcrumb on responsive mobile, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22317](https://github.com/PrestaShop/PrestaShop/pull/22317): Bad display in categories page when sorting data, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#22244](https://github.com/PrestaShop/PrestaShop/pull/22244): Split ProductOptions to ProductDetails. Thank you [@zuk3975](https://github.com/zuk3975)
* [#22034](https://github.com/PrestaShop/PrestaShop/pull/22034): Move the default page after the permission profile. Thank you [@Arman-Hosseini](https://github.com/Arman-Hosseini)
* [#21852](https://github.com/PrestaShop/PrestaShop/pull/21852): Fix buttons in toolbar going over title on small screens, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21804](https://github.com/PrestaShop/PrestaShop/pull/21804): Introduce AddVirtualProductFileCommand. Thank you [@zuk3975](https://github.com/zuk3975)
* [#21563](https://github.com/PrestaShop/PrestaShop/pull/21563): Allow '+' in Base URI and show error when Base URI is invalid, by [@atomiix](https://github.com/atomiix)
* [#21219](https://github.com/PrestaShop/PrestaShop/pull/21219): Simplify shop parameters/general. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#21115](https://github.com/PrestaShop/PrestaShop/pull/21115): Make FormattedTextAreaType works with TranslatableType. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#19995](https://github.com/PrestaShop/PrestaShop/pull/19995): Simplify Attachment form. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#19946](https://github.com/PrestaShop/PrestaShop/pull/19946): Fixed avatar employee in Logs Page, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#22447](https://github.com/PrestaShop/PrestaShop/pull/22447): Add hook to display information in category header. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#22419](https://github.com/PrestaShop/PrestaShop/pull/22419): Consistent use of https:// in schema.org itemtypes. Thank you [@tswfi](https://github.com/tswfi)
* [#21729](https://github.com/PrestaShop/PrestaShop/pull/21729): Move product canonical url from tpl to controller. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#21196](https://github.com/PrestaShop/PrestaShop/pull/21196): Remove htaccess rule who don't work. Thank you [@okom3pom](https://github.com/okom3pom)


### Web services
* [#22413](https://github.com/PrestaShop/PrestaShop/pull/22413): Make sure the display parameter is properly configured in Webservices, by [@PierreRambaud](https://github.com/PierreRambaud)


### Tests
* [#22363](https://github.com/PrestaShop/PrestaShop/pull/22363): Wait to fill inputs before hiding modal in create currency form, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21515](https://github.com/PrestaShop/PrestaShop/pull/21515): PHPStan (Level 4), by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '1.7.7.x' branch


### Core
* [#22274](https://github.com/PrestaShop/PrestaShop/pull/22274): Fix upgrade from ps < 1.7.0.0, by [@atomiix](https://github.com/atomiix)


### Back office
* [#22407](https://github.com/PrestaShop/PrestaShop/pull/22407): Method assertCmsCategoryExists doesn't return anything, it throws an exception, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#22406](https://github.com/PrestaShop/PrestaShop/pull/22406): Fixed pagination in Product Quick Navigation Popup, by [@Progi1984](https://github.com/Progi1984)
* [#22299](https://github.com/PrestaShop/PrestaShop/pull/22299): Use OrderDetail prices when modifying an Order, by [@jolelievre](https://github.com/jolelievre)
* [#22175](https://github.com/PrestaShop/PrestaShop/pull/22175): Added error when a customization is not found, by [@Progi1984](https://github.com/Progi1984)
* [#22171](https://github.com/PrestaShop/PrestaShop/pull/22171): When refreshing an order, display shipping price if needed, by [@Progi1984](https://github.com/Progi1984)
* [#22082](https://github.com/PrestaShop/PrestaShop/pull/22082): Hide product quantity in Order view page when stock management is disabled, by [@jolelievre](https://github.com/jolelievre)
* [#22020](https://github.com/PrestaShop/PrestaShop/pull/22020): Take shop id into account when getting a language list for an order, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#21912](https://github.com/PrestaShop/PrestaShop/pull/21912): Use language_code when locale is empty to get CLDR data, by [@atomiix](https://github.com/atomiix)
* [#21795](https://github.com/PrestaShop/PrestaShop/pull/21795): Fix wrong product quantity after adding a product triggering a free gift , by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Tests
* [#22455](https://github.com/PrestaShop/PrestaShop/pull/22455): Add requirement block to README in UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#22454](https://github.com/PrestaShop/PrestaShop/pull/22454): Add test 'Quick edit alias status'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#22446](https://github.com/PrestaShop/PrestaShop/pull/22446): Add test 'Quick edit order status'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#22434](https://github.com/PrestaShop/PrestaShop/pull/22434): Refactoring FO login page in UI tests and add new page for create account page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#22428](https://github.com/PrestaShop/PrestaShop/pull/22428): Add new command to run all UI tests and check step identifiers in all campaigns, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#22423](https://github.com/PrestaShop/PrestaShop/pull/22423): Add new test 'Change carrier position', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#22408](https://github.com/PrestaShop/PrestaShop/pull/22408): Rename functions in UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#839](https://github.com/PrestaShop/docs/pull/839): Fix path for class Mail. Thank you [@okom3pom](https://github.com/okom3pom)
* [#836](https://github.com/PrestaShop/docs/pull/836): Align some markdown table columns, by [@matks](https://github.com/matks)
* [#834](https://github.com/PrestaShop/docs/pull/834): Update social sharing image, by [@eternoendless](https://github.com/eternoendless)
* [#832](https://github.com/PrestaShop/docs/pull/832): Fix chapter 8 number, by [@matks](https://github.com/matks)
* [#831](https://github.com/PrestaShop/docs/pull/831): Added required extensions, by [@Progi1984](https://github.com/Progi1984)
* [#824](https://github.com/PrestaShop/docs/pull/824): Improve the example about the deprecated message , by [@PierreRambaud](https://github.com/PierreRambaud)


### Traces
* [#13](https://github.com/PrestaShop/traces/pull/13): Remove bots, by [@Progi1984](https://github.com/Progi1984)


### Customer reassurance block module
* [#98](https://github.com/PrestaShop/blockreassurance/pull/98): Bump friendsofphp/php-cs-fixer from 2.16.4 to 2.17.2. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#97](https://github.com/PrestaShop/blockreassurance/pull/97): Bump webpack from 5.10.3 to 5.11.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#96](https://github.com/PrestaShop/blockreassurance/pull/96): Bump webpack from 5.10.1 to 5.10.3. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#95](https://github.com/PrestaShop/blockreassurance/pull/95): Bump webpack from 5.10.0 to 5.10.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#291](https://github.com/PrestaShop/ps_facetedsearch/pull/291): Bump webpack from 5.10.1 to 5.10.3. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#290](https://github.com/PrestaShop/ps_facetedsearch/pull/290): Bump @babel/preset-env from 7.12.10 to 7.12.11. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#289](https://github.com/PrestaShop/ps_facetedsearch/pull/289): The third parameter is about attribute and not country id, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#288](https://github.com/PrestaShop/ps_facetedsearch/pull/288): Bump webpack from 5.10.0 to 5.10.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#280](https://github.com/PrestaShop/ps_facetedsearch/pull/280): Release 3.7.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### Architecture Decision Records repository
* [#13](https://github.com/PrestaShop/ADR/pull/13): Refactor README structure and improve it, by [@matks](https://github.com/matks)


### Stylelint browser compatibility plugin
* [#4](https://github.com/PrestaShop/stylelint-browser-compatibility/pull/4): Bump dot-prop from 4.2.0 to 4.2.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#3](https://github.com/PrestaShop/stylelint-browser-compatibility/pull/3): Bump ini from 1.3.5 to 1.3.8. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Search Bar module
* [#25](https://github.com/PrestaShop/ps_searchbar/pull/25): Set min version to 1.7.8.0, by [@atomiix](https://github.com/atomiix)


### Core Weekly Generator tool
* [#67](https://github.com/PrestaShop/core-weekly-generator/pull/67): Add test-scenarios to repo lists, by [@matks](https://github.com/matks)


### PrestaShop contributors website
* [#48](https://github.com/PrestaShop/TopContributors/pull/48): Bump ini from 1.3.5 to 1.3.8. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### stylelint configuration
* [#4](https://github.com/PrestaShop/stylelint-config/pull/4): Bump ini from 1.3.5 to 1.3.8. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Mail theme example
* [#12](https://github.com/PrestaShop/example_module_mailtheme/pull/12): Bump ini from 1.3.5 to 1.3.7. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Links list module
* [#105](https://github.com/PrestaShop/ps_linklist/pull/105): Convert module tables to utf8mb4. Thank you [@kpodemski](https://github.com/kpodemski)


### Example modules
* [#29](https://github.com/PrestaShop/example-modules/pull/29): Added formatted textaAreaType to module. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)


### PrestonBot
* [#109](https://github.com/PrestaShop/prestonbot/pull/109): Add BC break label according to the pull request template, by [@atomiix](https://github.com/atomiix)


### PrestaShop Specifications
* [#133](https://github.com/PrestaShop/prestashop-specs/pull/133): Add specifications about the FO payment of a newly created order, by [@LouiseBonnard](https://github.com/LouiseBonnard)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@okom3pom](https://github.com/okom3pom), [@matks](https://github.com/matks), [@Progi1984](https://github.com/Progi1984), [@dependabot[bot]](https://github.com/apps/dependabot), [@eternoendless](https://github.com/eternoendless), [@PierreRambaud](https://github.com/PierreRambaud), [@boubkerbribri](https://github.com/boubkerbribri), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@NeOMakinG](https://github.com/NeOMakinG), [@Hlavtox](https://github.com/Hlavtox), [@tswfi](https://github.com/tswfi), [@jolelievre](https://github.com/jolelievre), [@atomiix](https://github.com/atomiix), [@zuk3975](https://github.com/zuk3975), [@gennaris](https://github.com/gennaris), [@kpodemski](https://github.com/kpodemski), [@Arman-Hosseini](https://github.com/Arman-Hosseini), [@prestamodule](https://github.com/prestamodule), [@matthieu-rolland](https://github.com/matthieu-rolland), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@micka-fdz](https://github.com/micka-fdz), [@LouiseBonnard](https://github.com/LouiseBonnard), [@mrAKAR](https://github.com/mrAKAR)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
