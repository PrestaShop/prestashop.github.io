---
layout: post
aliases: ["/news/coreweekly-45-2020"]
title:  "PrestaShop Core Weekly - Week 45 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-11-09
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 2nd to Sunday 8th of November 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Have you tested [**PrestaShop 1.7.7.0 Release Candidate 1**](https://build.prestashop.com/news/prestashop-1-7-7-0-rc-release/)?

If you currently have little time and you feel you cannot help us making sure this Release Candidate is the right one, know that _every effort counts_.

- If you are a developer who builds modules or themes, you can simply run them on this version
- If you are a merchant, you can simply open the new Back Office Order pages and see if it looks alright to you
- If you are a developer who builds and sells shops, you can simply install this version and start customizing it as you usually do

As written by [Eric S. Raymond](https://en.wikipedia.org/wiki/Linus%27s_law), "given enough eyeballs, all bugs are shallow" (Linus's law). So the more people can test this Release Candidate, the better it will be!

And if you find out that everything is working well, feel free to tell the world! Comment on this article, share on social networks... we also need this kind of feedback! 😉


Reminder: on October 18th, if no critical or major regression has been reported, _PrestaShop 1.7.7.0 will be delivered as a stable version._


## Releases

* [statsvisits module](https://github.com/PrestaShop/statsvisits): [v2.0.3](https://github.com/PrestaShop/statsvisits/releases/tag/v2.0.3)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [69 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-11-02..2020-11-08) have been created in the project repositories;
- [79 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-11-02..2020-11-08), including [33 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-11-02..2020-11-08) on the core;
- [65 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-11-02..2020-11-08) in the project repositories;
- [107 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-11-02..2020-11-08), including [102 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-11-02..2020-11-08).



## Code changes in the 'develop' branch


### Core
* [#21777](https://github.com/PrestaShop/PrestaShop/pull/21777): Remove composer.lock from the .gitignore file. Thank you [@stijnh92](https://github.com/stijnh92)
* [#21699](https://github.com/PrestaShop/PrestaShop/pull/21699): Remove useless comments. Thank you [@PululuK](https://github.com/PululuK)
* [#21691](https://github.com/PrestaShop/PrestaShop/pull/21691): Fix typo in Customer class. Thank you [@ksaandev](https://github.com/ksaandev)
* [#20675](https://github.com/PrestaShop/PrestaShop/pull/20675): Always pass an instance to the actionCartSave hook. Thank you [@Seleda](https://github.com/Seleda)


### Back office
* [#21776](https://github.com/PrestaShop/PrestaShop/pull/21776): Made sure getErrorsByLocale doesn't return empty. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#21673](https://github.com/PrestaShop/PrestaShop/pull/21673): Fix checkbox going over label on multishop add shop, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21672](https://github.com/PrestaShop/PrestaShop/pull/21672): Made switch type not required. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#21643](https://github.com/PrestaShop/PrestaShop/pull/21643): Fix td alignment of merchandise return filters, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21625](https://github.com/PrestaShop/PrestaShop/pull/21625): Don't trim arrays in AdminStoresController::postProcess : they delete it. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#21617](https://github.com/PrestaShop/PrestaShop/pull/21617): Show gift package and message on every details tabs of order view, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21583](https://github.com/PrestaShop/PrestaShop/pull/21583): Payment > Preferences - Update message in all shops or in a group context, by [@marionf](https://github.com/marionf)
* [#21471](https://github.com/PrestaShop/PrestaShop/pull/21471): Add EventEmitter to prestashop global js object, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21456](https://github.com/PrestaShop/PrestaShop/pull/21456): Fixed sort for column ID Order in Shopping Carts Grid, by [@Progi1984](https://github.com/Progi1984)
* [#21375](https://github.com/PrestaShop/PrestaShop/pull/21375): Add override list to admin Information page. Thank you [@unlocomqx](https://github.com/unlocomqx)
* [#21321](https://github.com/PrestaShop/PrestaShop/pull/21321): Introduce ProductCategoryUpdater and use it in handlers. Remove AbstractProductCategoryHandler. Thank you [@zuk3975](https://github.com/zuk3975)
* [#21244](https://github.com/PrestaShop/PrestaShop/pull/21244): Simplified carrier preferences. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#21153](https://github.com/PrestaShop/PrestaShop/pull/21153): Removed mention tax in invoice when Tax is disabled, by [@Progi1984](https://github.com/Progi1984)
* [#21141](https://github.com/PrestaShop/PrestaShop/pull/21141): Changed the naming for attributes in product list, by [@Progi1984](https://github.com/Progi1984)
* [#21062](https://github.com/PrestaShop/PrestaShop/pull/21062): Make locale errors from translatable type work with locale. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#21013](https://github.com/PrestaShop/PrestaShop/pull/21013): Fix message on Module Manager when post_max_size limitation is reached, by [@Matt75](https://github.com/Matt75)
* [#20430](https://github.com/PrestaShop/PrestaShop/pull/20430): Allows profile to override the avatar of employee, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#21674](https://github.com/PrestaShop/PrestaShop/pull/21674): Set jquery colorpicker option only if it is needed and loaded, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#21651](https://github.com/PrestaShop/PrestaShop/pull/21651): Change product unit price color to brand primary, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21620](https://github.com/PrestaShop/PrestaShop/pull/21620): Fix categorytree not showing on mobile when mobile is enabled, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21612](https://github.com/PrestaShop/PrestaShop/pull/21612): Add selected combinations value inside product page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21611](https://github.com/PrestaShop/PrestaShop/pull/21611): Add swipe on product images on mobile, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21273](https://github.com/PrestaShop/PrestaShop/pull/21273): Fixes wrong url in credit-slip e-mail. Thank you [@okom3pom](https://github.com/okom3pom)
* [#20606](https://github.com/PrestaShop/PrestaShop/pull/20606): Fix invoice address selection at checkout, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#18179](https://github.com/PrestaShop/PrestaShop/pull/18179): Fixed Sort by price in FO with specific price. Thank you [@soulardromain](https://github.com/soulardromain)


### Tests
* [#21789](https://github.com/PrestaShop/PrestaShop/pull/21789): Add filter and reset steps to cart rules tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21765](https://github.com/PrestaShop/PrestaShop/pull/21765): Generating images inside carrier test and fix checking number of sql queries after filter, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21756](https://github.com/PrestaShop/PrestaShop/pull/21756): Add test 'Filter sort and pagination tags'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21755](https://github.com/PrestaShop/PrestaShop/pull/21755): Trim string generated for tax rule group to avoid filter fail, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21746](https://github.com/PrestaShop/PrestaShop/pull/21746): Add test 'Enable/Disable' webservice keys by bulk actions. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21738](https://github.com/PrestaShop/PrestaShop/pull/21738): Add test 'Sort and pagination webservice keys'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21735](https://github.com/PrestaShop/PrestaShop/pull/21735): Add test 'Filter sort and pagination SQL queries'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21733](https://github.com/PrestaShop/PrestaShop/pull/21733): Add test 'Create simple order in BO', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21726](https://github.com/PrestaShop/PrestaShop/pull/21726): Fix nightly (03-11-2020) 'Sort shopping cart table by order ID'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21709](https://github.com/PrestaShop/PrestaShop/pull/21709): Add test 'Update default country', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21669](https://github.com/PrestaShop/PrestaShop/pull/21669): Add test 'View raw html and text' in email themes page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21660](https://github.com/PrestaShop/PrestaShop/pull/21660): Add test 'Update default carrier', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21636](https://github.com/PrestaShop/PrestaShop/pull/21636): Add test 'CRUD tag'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21635](https://github.com/PrestaShop/PrestaShop/pull/21635): Delete generating images inside the pages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21590](https://github.com/PrestaShop/PrestaShop/pull/21590): Fix selectors for design tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21528](https://github.com/PrestaShop/PrestaShop/pull/21528): Add test 'CRUD order return status'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.7.x' branch


### Back office
* [#21666](https://github.com/PrestaShop/PrestaShop/pull/21666): Recompute price tax excluded only when the price is different from catalog, by [@jolelievre](https://github.com/jolelievre)
* [#21557](https://github.com/PrestaShop/PrestaShop/pull/21557): Fix product pagination when adding a product in an empty order, by [@atomiix](https://github.com/atomiix)
* [#21526](https://github.com/PrestaShop/PrestaShop/pull/21526): Improved Error message in New Order Page when adding a minimal product, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### Auto Upgrade module
* [#350](https://github.com/PrestaShop/autoupgrade/pull/350): Make job with latest tag pass, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Prestashop UI Kit
* [#112](https://github.com/PrestaShop/prestashop-ui-kit/pull/112): Adjust buttons states and growl style, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#111](https://github.com/PrestaShop/prestashop-ui-kit/pull/111): Fix alert error icon, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#110](https://github.com/PrestaShop/prestashop-ui-kit/pull/110): Adjust button colors and show growl on index, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#109](https://github.com/PrestaShop/prestashop-ui-kit/pull/109): Add boundary to bootstrap tooltips, by [@NeOMakinG](https://github.com/NeOMakinG)


### QA nightly results
* [#43](https://github.com/PrestaShop/QANightlyResults/pull/43): Adding start_date and end_date parameters to the graph so we can choose the interval, by [@SimonGrn](https://github.com/SimonGrn)


### Customer reassurance block module
* [#61](https://github.com/PrestaShop/blockreassurance/pull/61): Upgrade PHP CS Fixer to v2.16.4 to comply with Composer v2, by [@matks](https://github.com/matks)
* [#55](https://github.com/PrestaShop/blockreassurance/pull/55): Fix get mime type, by [@Progi1984](https://github.com/Progi1984)


### Faceted search module
* [#253](https://github.com/PrestaShop/ps_facetedsearch/pull/253): Bump @babel/node from 7.12.1 to 7.12.6. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#252](https://github.com/PrestaShop/ps_facetedsearch/pull/252): Bump webpack from 5.3.2 to 5.4.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#251](https://github.com/PrestaShop/ps_facetedsearch/pull/251): Bump mocha from 8.2.0 to 8.2.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#250](https://github.com/PrestaShop/ps_facetedsearch/pull/250): Bump sass-loader from 10.0.4 to 10.0.5. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#249](https://github.com/PrestaShop/ps_facetedsearch/pull/249): Bump node-sass from 4.14.1 to 5.0.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation
* [#798](https://github.com/PrestaShop/docs/pull/798): More informations for maintainers : other teams, labels, by [@matks](https://github.com/matks)
* [#796](https://github.com/PrestaShop/docs/pull/796): Add I need Help page, by [@matks](https://github.com/matks)
* [#795](https://github.com/PrestaShop/docs/pull/795): Grammatical error. Thank you [@itsvahid](https://github.com/itsvahid)
* [#793](https://github.com/PrestaShop/docs/pull/793): Introduce maintainer processes, by [@matks](https://github.com/matks)


### New Products module
* [#7](https://github.com/PrestaShop/ps_newproducts/pull/7): Fix composer.json license, by [@matks](https://github.com/matks)


### Issues Bot
* [#10](https://github.com/PrestaShop/issuebot/pull/10): Remove Opening Message, by [@Progi1984](https://github.com/Progi1984)


### Docker images
* [#237](https://github.com/PrestaShop/docker/pull/237): Update license href in README, by [@matks](https://github.com/matks)


### PrestaShop Specifications
* [#166](https://github.com/PrestaShop/prestashop-specs/pull/166): [multistore] - Add UAT for multistore, by [@marionf](https://github.com/marionf)
* [#165](https://github.com/PrestaShop/prestashop-specs/pull/165): Add SVG as accepted logo format, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#163](https://github.com/PrestaShop/prestashop-specs/pull/163): Specify the Modules Manager > Updates page, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#162](https://github.com/PrestaShop/prestashop-specs/pull/162): Update Add new Order.md. Thank you [@MatShir](https://github.com/MatShir)
* [#161](https://github.com/PrestaShop/prestashop-specs/pull/161): Specify the default language for order documents, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#157](https://github.com/PrestaShop/prestashop-specs/pull/157): Create specs's page database. Thank you [@MatShir](https://github.com/MatShir)
* [#154](https://github.com/PrestaShop/prestashop-specs/pull/154): Add the overrides list to the Information specs, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#153](https://github.com/PrestaShop/prestashop-specs/pull/153): Update the product settings specifications, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#152](https://github.com/PrestaShop/prestashop-specs/pull/152): Create order settings specs, by [@marionf](https://github.com/marionf)
* [#151](https://github.com/PrestaShop/prestashop-specs/pull/151): Add the free gift behavior in FO, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#135](https://github.com/PrestaShop/prestashop-specs/pull/135): Add specs for BO menu tab, by [@marionf](https://github.com/marionf)


### The PrestaShop open source project
* [#49](https://github.com/PrestaShop/open-source/pull/49): Add qa-core Slack channel, by [@matks](https://github.com/matks)


### Wishlist block module
* [#89](https://github.com/PrestaShop/blockwishlist/pull/89): Get cover image for specific combination. Thank you [@kpodemski](https://github.com/kpodemski)


### Email Alerts module
* [#65](https://github.com/PrestaShop/ps_emailalerts/pull/65): Fix cast error when removing an Alert. Thank you [@hherreros93](https://github.com/hherreros93)
* [#57](https://github.com/PrestaShop/ps_emailalerts/pull/57): Added new translator for email subjects. Thank you [@L3RAZ](https://github.com/L3RAZ)


### Visits and Visitors statistics module
* [#11](https://github.com/PrestaShop/statsvisits/pull/11): Release 2.0.3, by [@Progi1984](https://github.com/Progi1984)

## Logo and description changes

### Auto Upgrade module
* [#349](https://github.com/PrestaShop/autoupgrade/pull/349): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### New Products module
* [#6](https://github.com/PrestaShop/ps_newproducts/pull/6): Update logo and short description. Thank you [@Julievrz](https://github.com/Julievrz)

### Product details statistics module
* [#19](https://github.com/PrestaShop/statsproduct/pull/19): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Prestafraud against fraudulent payments module
* [#13](https://github.com/PrestaShop/prestafraud/pull/13): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Best manufacturers statistics module
* [#9](https://github.com/PrestaShop/statsbestmanufacturers/pull/9): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Simple HTML table display module
* [#14](https://github.com/PrestaShop/gridhtml/pull/14): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### PrestaShop Cleaner module
* [#52](https://github.com/PrestaShop/pscleaner/pull/52): Update logo and short description. Thank you [@Julievrz](https://github.com/Julievrz)

### Stats Dashboard module
* [#18](https://github.com/PrestaShop/statsforecast/pull/18): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Social Follow module
* [#25](https://github.com/PrestaShop/ps_socialfollow/pull/25): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### OnBoarding module
* [#89](https://github.com/PrestaShop/welcome/pull/89): Update short description and title. Thank you [@Julievrz](https://github.com/Julievrz)

### Visitors online statistics module
* [#16](https://github.com/PrestaShop/statslive/pull/16): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Viewed products module
* [#18](https://github.com/PrestaShop/ps_viewedproduct/pull/18): Update logo and short description. Thank you [@Julievrz](https://github.com/Julievrz)

### Front office tracking module
* [#12](https://github.com/PrestaShop/trackingfront/pull/12): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Product tooltips module
* [#14](https://github.com/PrestaShop/ps_productinfo/pull/14): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Legal Compliance
* [#70](https://github.com/PrestaShop/ps_legalcompliance/pull/70): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@boubkerbribri](https://github.com/boubkerbribri), [@NeOMakinG](https://github.com/NeOMakinG), [@stijnh92](https://github.com/stijnh92), [@SimonGrn](https://github.com/SimonGrn), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@matks](https://github.com/matks), [@dependabot[bot]](https://github.com/apps/dependabot), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@jolelievre](https://github.com/jolelievre), [@itsvahid](https://github.com/itsvahid), [@PululuK](https://github.com/PululuK), [@Julievrz](https://github.com/Julievrz), [@Progi1984](https://github.com/Progi1984), [@ksaandev](https://github.com/ksaandev), [@matthieu-rolland](https://github.com/matthieu-rolland), [@marionf](https://github.com/marionf), [@LouiseBonnard](https://github.com/LouiseBonnard), [@jf-viguier](https://github.com/jf-viguier), [@MatShir](https://github.com/MatShir), [@atomiix](https://github.com/atomiix), [@kpodemski](https://github.com/kpodemski), [@unlocomqx](https://github.com/unlocomqx), [@zuk3975](https://github.com/zuk3975), [@okom3pom](https://github.com/okom3pom), [@Matt75](https://github.com/Matt75), [@Seleda](https://github.com/Seleda), [@hherreros93](https://github.com/hherreros93), [@L3RAZ](https://github.com/L3RAZ), [@soulardromain](https://github.com/soulardromain)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
