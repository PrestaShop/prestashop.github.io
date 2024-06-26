---
layout: post
aliases: ["/news/coreweekly-15-2022"]
title:  "PrestaShop Core Weekly - Week 15 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-04-19
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 11th to Sunday 17th of April 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## Releases

* [Facetedsearch](https://github.com/PrestaShop/ps_facetedsearch) module: [v3.8.0](https://github.com/PrestaShop/ps_facetedsearch/releases/tag/v3.8.0)
* [Searchbar](https://github.com/PrestaShop/ps_searchbar) module: [v2.1.3](https://github.com/PrestaShop/ps_searchbar/releases/tag/v2.1.3)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [37 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-04-11..2022-04-17) have been created in the project repositories;
- [58 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-04-11..2022-04-17), including [19 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-04-11..2022-04-17) on the core;
- [72 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-04-11..2022-04-17) in the project repositories;
- [71 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-04-11..2022-04-17), including [59 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-04-11..2022-04-17).



## Code changes in the 'develop' branch


### Core
* [#28205](https://github.com/PrestaShop/PrestaShop/pull/28205): Added module blockreassurance, by [@Progi1984](https://github.com/Progi1984)
* [#28196](https://github.com/PrestaShop/PrestaShop/pull/28196): Remove deprecated method inside ThemeProvider. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28195](https://github.com/PrestaShop/PrestaShop/pull/28195): Remove deprecated HookDispatcher adapter. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28193](https://github.com/PrestaShop/PrestaShop/pull/28193): Remove deprecated OrderDiscount model. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28192](https://github.com/PrestaShop/PrestaShop/pull/28192): Remove deprecated methods inside Product class. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28191](https://github.com/PrestaShop/PrestaShop/pull/28191): Remove deprecated methods inside Cart class. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#28132](https://github.com/PrestaShop/PrestaShop/pull/28132): Remove ModuleZipManager service as class is missing, by [@sowbiba](https://github.com/sowbiba)
* [#27176](https://github.com/PrestaShop/PrestaShop/pull/27176): Fix replaceAccentedChars function. Thank you [@davidglezz](https://github.com/davidglezz)


### Back office
* [#28243](https://github.com/PrestaShop/PrestaShop/pull/28243): Updated wording about the error when upload a module bigger than post_max_size or upload_max_filesize. Thank you [@marsaldev](https://github.com/marsaldev)
* [#28225](https://github.com/PrestaShop/PrestaShop/pull/28225): Fix dropdown id on translatable group, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#28177](https://github.com/PrestaShop/PrestaShop/pull/28177): Remove live exchange rate toggle in Currencies. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#28173](https://github.com/PrestaShop/PrestaShop/pull/28173): Upgrade module when already installed, by [@atomiix](https://github.com/atomiix)
* [#28094](https://github.com/PrestaShop/PrestaShop/pull/28094): Fix displayHeader is not available when transplanting modules/hooks. Thank you [@Prestaworks](https://github.com/Prestaworks)
* [#28086](https://github.com/PrestaShop/PrestaShop/pull/28086): Remove already migrated code in AdminModulesPositionsController, by [@eternoendless](https://github.com/eternoendless)
* [#27917](https://github.com/PrestaShop/PrestaShop/pull/27917): Remove deprecated admin endpoints, by [@eternoendless](https://github.com/eternoendless)
* [#27783](https://github.com/PrestaShop/PrestaShop/pull/27783): Handle multishop for product options tab. Thank you [@zuk3975](https://github.com/zuk3975)
* [#27670](https://github.com/PrestaShop/PrestaShop/pull/27670): Handle multishop for product shipping form. Thank you [@zuk3975](https://github.com/zuk3975)
* [#27606](https://github.com/PrestaShop/PrestaShop/pull/27606): Show confirmation modal before deleting order status and order return status, by [@Progi1984](https://github.com/Progi1984)
* [#27469](https://github.com/PrestaShop/PrestaShop/pull/27469): Add hook to allow adding content after themes list in the BO, by [@sowbiba](https://github.com/sowbiba)
* [#27216](https://github.com/PrestaShop/PrestaShop/pull/27216): Combination bulk form. Thank you [@zuk3975](https://github.com/zuk3975)
* [#26716](https://github.com/PrestaShop/PrestaShop/pull/26716): Make Shop Parameters > Traffic & SEO > SEO & URLs forms multistore compatible. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#12428](https://github.com/PrestaShop/PrestaShop/pull/12428): Migration of Permissions configuration. Thank you [@sarjon](https://github.com/sarjon)


### Tests
* [#28268](https://github.com/PrestaShop/PrestaShop/pull/28268): Fix nightly 15-04-2022. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28261](https://github.com/PrestaShop/PrestaShop/pull/28261): Functional tests - Refacto 'Pagination and sort customers table'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28251](https://github.com/PrestaShop/PrestaShop/pull/28251): Functional tests - Add a post condition for 'View guest ' test on Orders page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28248](https://github.com/PrestaShop/PrestaShop/pull/28248): Functional tests - Add new test 'Choose shipping' from add order page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28234](https://github.com/PrestaShop/PrestaShop/pull/28234): Fix nightly 12/04/2022 - Fix sort and pagination employees test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28219](https://github.com/PrestaShop/PrestaShop/pull/28219): Fix nightly 11-04-2022 - Fix CRUD employee test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Core
* [#28259](https://github.com/PrestaShop/PrestaShop/pull/28259): Upgrade prestashop modules, by [@matks](https://github.com/matks)


### Back office
* [#28185](https://github.com/PrestaShop/PrestaShop/pull/28185): Revert a change that caused a problem with bulk actions on the lists, by [@kpodemski](https://github.com/kpodemski)


### Front office
* [#28240](https://github.com/PrestaShop/PrestaShop/pull/28240): Added hooks for blockwishlist in classic theme, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### PrestaShop Project Metrics
* [#36](https://github.com/PrestaShop/ps-project-metrics/pull/36): Update github query parameters for waiting for review PRs, by [@matks](https://github.com/matks)


### Changes in developer documentation sources
* [#1361](https://github.com/PrestaShop/docs/pull/1361): Update hook widgets wording. Thank you [@dali-rajab](https://github.com/dali-rajab)
* [#1360](https://github.com/PrestaShop/docs/pull/1360): Update hook widgets wording. Thank you [@dali-rajab](https://github.com/dali-rajab)


### Wire payment module
* [#70](https://github.com/PrestaShop/ps_wirepayment/pull/70): PHP 8.1 compatibility, by [@atomiix](https://github.com/atomiix)


### Translation Files repository
* [#22](https://github.com/PrestaShop/TranslationFiles/pull/22): Update v8 translations from latest 1.7.8 translations, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### GDPR module
* [#173](https://github.com/PrestaShop/psgdpr/pull/173): Fix wordings, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#171](https://github.com/PrestaShop/psgdpr/pull/171): Bump to 1.4.2 and make sure password is correctly encoded, by [@PierreRambaud](https://github.com/PierreRambaud)


### Wishlist block module
* [#172](https://github.com/PrestaShop/blockwishlist/pull/172): Fetch the default picture if a product has no image defined, by [@Progi1984](https://github.com/Progi1984)
* [#171](https://github.com/PrestaShop/blockwishlist/pull/171): Remove product from wishlist when the product (or the combination) is removed, by [@Progi1984](https://github.com/Progi1984)
* [#170](https://github.com/PrestaShop/blockwishlist/pull/170): Number of products on wishlist page . Thank you [@denys202](https://github.com/denys202)
* [#169](https://github.com/PrestaShop/blockwishlist/pull/169): Fix: auto fill heart when adding product to wishlist, by [@NeOMakinG](https://github.com/NeOMakinG)


### Faceted search module
* [#646](https://github.com/PrestaShop/ps_facetedsearch/pull/646): Release 3.8.0. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#645](https://github.com/PrestaShop/ps_facetedsearch/pull/645): Bump eslint from 8.12.0 to 8.13.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#644](https://github.com/PrestaShop/ps_facetedsearch/pull/644): Bump moment from 2.29.1 to 2.29.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Search Bar module
* [#51](https://github.com/PrestaShop/ps_searchbar/pull/51): Release 2.1.3, by [@Progi1984](https://github.com/Progi1984)
* [#50](https://github.com/PrestaShop/ps_searchbar/pull/50): Use Organization Build Release Github Action, by [@Progi1984](https://github.com/Progi1984)
* [#48](https://github.com/PrestaShop/ps_searchbar/pull/48): Bump version to 2.1.3, by [@Progi1984](https://github.com/Progi1984)


### Image slider module
* [#71](https://github.com/PrestaShop/ps_imageslider/pull/71): Bump version to 3.1.1, by [@Progi1984](https://github.com/Progi1984)


### Classic theme
* [#24](https://github.com/PrestaShop/classic-theme/pull/24): Fixed Microdata ItemList position : index starts to 1 and not 0, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#20](https://github.com/PrestaShop/classic-theme/pull/20): Set default value for form field values that are null, by [@atomiix](https://github.com/atomiix)


### Customer reassurance block module
* [#389](https://github.com/PrestaShop/blockreassurance/pull/389): Bump eslint from 8.12.0 to 8.13.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Custom text module
* [#70](https://github.com/PrestaShop/ps_customtext/pull/70): Replace deprecated code, by [@kpodemski](https://github.com/kpodemski)


### Issues Bot
* [#75](https://github.com/PrestaShop/issuebot/pull/75): build(deps): bump moment from 2.24.0 to 2.29.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Contextual Help API
* [#6](https://github.com/PrestaShop/contextual-help-api/pull/6): Feat(deployment): Starting integration build and deployment. Thank you [@djodjo3](https://github.com/djodjo3)


### Email Alerts module
* [#110](https://github.com/PrestaShop/ps_emailalerts/pull/110): Change displayProductButtons hook name because it's deprecated, by [@PierreRambaud](https://github.com/PierreRambaud)


### Data mining for statistics module
* [#25](https://github.com/PrestaShop/statsdata/pull/25): Remove deprecated functions. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Auto Upgrade module
* [#458](https://github.com/PrestaShop/autoupgrade/pull/458): Add displayCheckoutBeforeConfirmation hook. Thank you [@Hlavtox](https://github.com/Hlavtox)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@matks](https://github.com/matks), [@dali-rajab](https://github.com/dali-rajab), [@atomiix](https://github.com/atomiix), [@matthieu-rolland](https://github.com/matthieu-rolland), [@PierreRambaud](https://github.com/PierreRambaud), [@marsaldev](https://github.com/marsaldev), [@Progi1984](https://github.com/Progi1984), [@Hlavtox](https://github.com/Hlavtox), [@NeOMakinG](https://github.com/NeOMakinG), [@dependabot[bot]](https://github.com/apps/dependabot), [@kpodemski](https://github.com/kpodemski), [@PrestaEdit](https://github.com/PrestaEdit), [@lmeyer1](https://github.com/lmeyer1), [@denys202](https://github.com/denys202), [@sowbiba](https://github.com/sowbiba), [@djodjo3](https://github.com/djodjo3), [@Prestaworks](https://github.com/Prestaworks), [@eternoendless](https://github.com/eternoendless), [@zuk3975](https://github.com/zuk3975), [@davidglezz](https://github.com/davidglezz), [@micka-fdz](https://github.com/micka-fdz), [@sarjon](https://github.com/sarjon)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

