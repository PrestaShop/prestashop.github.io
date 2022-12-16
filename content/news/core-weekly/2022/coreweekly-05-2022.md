---
layout: post
aliases: ["/news/coreweekly-05-2022"]
slug: "coreweekly-05-2022"
title:  "PrestaShop Core Weekly - Week 5 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-02-07
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 31th of January to Sunday 6th of February 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The project's [first public demo of 2022](https://build.prestashop.com/news/public-oss-demo-1-2022/) was streamed live last week, on February 2.

The development of PrestaShop 8 is progressing well. The maintainer team believes that [the rework of the Back Office's product page](https://github.com/PrestaShop/PrestaShop/issues/14770) (originally introduced as "experimental" in 1.7.8) is now complete enough to allow us to announce the decommissioning of the previous product page.

**This means that starting today, no new contributions targeting the old product page will be accepted in the develop branch, as this code is expected to be removed soon and be replaced by the new version.**

If you haven't heard about this project, you can discover it through [this public demo](https://www.youtube.com/watch?v=MQzTL1J5oGQ&t=1140s) and [this other one](https://www.youtube.com/watch?v=ydSIyOmQez8&t=380s). A summary article should also be published on this blog soon.


## Releases

* [Statsforecast](https://github.com/PrestaShop/statsforecast) module: [v2.0.4](https://github.com/PrestaShop/statsforecast/releases/tag/v2.0.4)
* [Ps_emailalerts](https://github.com/PrestaShop/ps_emailalerts) module: [v2.3.2](https://github.com/PrestaShop/ps_emailalerts/releases/tag/v2.3.2)
* [Decimal](https://github.com/PrestaShop/decimal): [1.5.0](https://github.com/PrestaShop/decimal/releases/tag/1.5.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [53 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-01-31..2022-02-06) have been created in the project repositories;
- [54 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-01-31..2022-02-06), including [22 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-01-31..2022-02-06) on the core;
- [83 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-01-31..2022-02-06) in the project repositories;
- [103 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-01-31..2022-02-06), including [80 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-01-31..2022-02-06).
        


## Code changes in the 'develop' branch


### Core
* [#27587](https://github.com/PrestaShop/PrestaShop/pull/27587): Update Twig to 3.3.8, by [@kpodemski](https://github.com/kpodemski)
* [#27566](https://github.com/PrestaShop/PrestaShop/pull/27566): Removed dead code relative to PrestaShop Addons, by [@Progi1984](https://github.com/Progi1984)
* [#27562](https://github.com/PrestaShop/PrestaShop/pull/27562): Use remove instead of delete. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#27355](https://github.com/PrestaShop/PrestaShop/pull/27355): Do not pad ps_versions_compliancy for PrestaShop >= 8, by [@atomiix](https://github.com/atomiix)
* [#27354](https://github.com/PrestaShop/PrestaShop/pull/27354): Removed dead code about Marketplace, by [@Progi1984](https://github.com/Progi1984)
* [#27240](https://github.com/PrestaShop/PrestaShop/pull/27240): Fix uploader types validation, by [@atomiix](https://github.com/atomiix)


### Back office
* [#27564](https://github.com/PrestaShop/PrestaShop/pull/27564): Correct namespace for MaintenanceConfigurationTest. Thank you [@okom3pom](https://github.com/okom3pom)
* [#27563](https://github.com/PrestaShop/PrestaShop/pull/27563): Multistore - Shop parameters > Order settings > Statuses : Add information message, by [@Progi1984](https://github.com/Progi1984)
* [#27560](https://github.com/PrestaShop/PrestaShop/pull/27560): Fixes Experimental page combination table row border styling issue, by [@Progi1984](https://github.com/Progi1984)
* [#27514](https://github.com/PrestaShop/PrestaShop/pull/27514): Use new url quick access for orders list. Thank you [@okom3pom](https://github.com/okom3pom)
* [#27442](https://github.com/PrestaShop/PrestaShop/pull/27442): Multistore - Shipping > Preferences - Add checkboxes #19374. Thank you [@okom3pom](https://github.com/okom3pom)
* [#27408](https://github.com/PrestaShop/PrestaShop/pull/27408): Hide Merchandise return tab when  Merchandise return is disabled. Thank you [@okom3pom](https://github.com/okom3pom)
* [#27271](https://github.com/PrestaShop/PrestaShop/pull/27271): Redesign sidebar menu UI. Thank you [@mparvazi](https://github.com/mparvazi)
* [#26056](https://github.com/PrestaShop/PrestaShop/pull/26056): No tracking Number for return product tab. Thank you [@okom3pom](https://github.com/okom3pom)
* [#25914](https://github.com/PrestaShop/PrestaShop/pull/25914): Multistore - Advanced Parameters > Webservice - Add checkboxes . Thank you [@okom3pom](https://github.com/okom3pom)
* [#25879](https://github.com/PrestaShop/PrestaShop/pull/25879): Refacto improper card markup on migrated pages, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#25806](https://github.com/PrestaShop/PrestaShop/pull/25806): Migrate Product page v2 to TypeScript, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#27446](https://github.com/PrestaShop/PrestaShop/pull/27446): Display Line Breaks in Order messages, by [@Progi1984](https://github.com/Progi1984)
* [#27159](https://github.com/PrestaShop/PrestaShop/pull/27159): Fix check by delivery price/weight in case of hook usage. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Web services
* [#27554](https://github.com/PrestaShop/PrestaShop/pull/27554): Fixed JSON Output when fetching a specific resource, by [@Progi1984](https://github.com/Progi1984)


### Tests
* [#27583](https://github.com/PrestaShop/PrestaShop/pull/27583): Functional tests - Separate view order page on blocks. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27544](https://github.com/PrestaShop/PrestaShop/pull/27544): Fix preview email themes test, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#27494](https://github.com/PrestaShop/PrestaShop/pull/27494): Clean combinations behat step, by [@jolelievre](https://github.com/jolelievre)
* [#27426](https://github.com/PrestaShop/PrestaShop/pull/27426): Fix js doc generation for for faker and utils, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#27424](https://github.com/PrestaShop/PrestaShop/pull/27424): Delete unused files for UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.8.x' branch


### Core
* [#27350](https://github.com/PrestaShop/PrestaShop/pull/27350): Upgrade Smarty to 3.4.43, by [@matks](https://github.com/matks)


### Back office
* [#27372](https://github.com/PrestaShop/PrestaShop/pull/27372): Fix stock page padding-left, by [@atomiix](https://github.com/atomiix)


### Front office
* [#27502](https://github.com/PrestaShop/PrestaShop/pull/27502): Fix responsive CSS in add-to-cart modal. Thank you [@saulaski](https://github.com/saulaski)
* [#27387](https://github.com/PrestaShop/PrestaShop/pull/27387): Remove z-index and overflow of product description of product list, by [@NeOMakinG](https://github.com/NeOMakinG)


## Code changes in modules, themes & tools


### Stats Dashboard module
* [#26](https://github.com/PrestaShop/statsforecast/pull/26): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)
* [#25](https://github.com/PrestaShop/statsforecast/pull/25): Missing cast for amount data, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#22](https://github.com/PrestaShop/statsforecast/pull/22): Release 2.0.4, by [@PierreRambaud](https://github.com/PierreRambaud)


### Customer reassurance block module
* [#352](https://github.com/PrestaShop/blockreassurance/pull/352): Bump css-loader from 6.5.1 to 6.6.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#351](https://github.com/PrestaShop/blockreassurance/pull/351): Bump @babel/core from 7.16.12 to 7.17.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#350](https://github.com/PrestaShop/blockreassurance/pull/350): Bump @babel/eslint-parser from 7.16.5 to 7.17.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#349](https://github.com/PrestaShop/blockreassurance/pull/349): Bump webpack from 5.67.0 to 5.68.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#348](https://github.com/PrestaShop/blockreassurance/pull/348): Bump nanoid from 3.1.30 to 3.2.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#347](https://github.com/PrestaShop/blockreassurance/pull/347): Bump eslint from 8.7.0 to 8.8.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#611](https://github.com/PrestaShop/ps_facetedsearch/pull/611): Bump @babel/register from 7.16.9 to 7.17.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#610](https://github.com/PrestaShop/ps_facetedsearch/pull/610): Bump css-loader from 6.5.1 to 6.6.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#609](https://github.com/PrestaShop/ps_facetedsearch/pull/609): Bump @babel/core from 7.16.12 to 7.17.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#608](https://github.com/PrestaShop/ps_facetedsearch/pull/608): Bump @babel/eslint-parser from 7.16.5 to 7.17.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#607](https://github.com/PrestaShop/ps_facetedsearch/pull/607): Bump @babel/cli from 7.16.8 to 7.17.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#606](https://github.com/PrestaShop/ps_facetedsearch/pull/606): Bump webpack from 5.67.0 to 5.68.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#605](https://github.com/PrestaShop/ps_facetedsearch/pull/605): Bump eslint from 8.7.0 to 8.8.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#603](https://github.com/PrestaShop/ps_facetedsearch/pull/603): Fix switch buttons, by [@PierreRambaud](https://github.com/PierreRambaud)


### Catalog statistics module
* [#25](https://github.com/PrestaShop/statscatalog/pull/25): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Best vouchers statistics module
* [#16](https://github.com/PrestaShop/statsbestvouchers/pull/16): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Best suppliers statistics module
* [#14](https://github.com/PrestaShop/statsbestsuppliers/pull/14): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Best-selling products statistics module
* [#16](https://github.com/PrestaShop/statsbestproducts/pull/16): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### User documentation landing page
* [#185](https://github.com/PrestaShop/user-documentation-landing/pull/185): chore(deps-dev): bump sass from 1.49.1 to 1.49.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#184](https://github.com/PrestaShop/user-documentation-landing/pull/184): fix(deps): bump core-js from 3.20.3 to 3.21.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#183](https://github.com/PrestaShop/user-documentation-landing/pull/183): chore(deps-dev): bump sass from 1.49.0 to 1.49.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Available quantities statistics module
* [#21](https://github.com/PrestaShop/statsstock/pull/21): Do not use hook AdminStatsModules alias, use displayAdminStatsModules & Bump version to 2.0.1. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Email Alerts module
* [#105](https://github.com/PrestaShop/ps_emailalerts/pull/105): Release 2.3.2, by [@kpodemski](https://github.com/kpodemski)
* [#104](https://github.com/PrestaShop/ps_emailalerts/pull/104): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)
* [#103](https://github.com/PrestaShop/ps_emailalerts/pull/103): Fix an issue with kernel container in some payment modules, by [@kpodemski](https://github.com/kpodemski)


### New Front-office theme
* [#168](https://github.com/PrestaShop/theme-refacto/pull/168): Remove already done addresses partial, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#167](https://github.com/PrestaShop/theme-refacto/pull/167): Integrate addresses custom style, by [@NeOMakinG](https://github.com/NeOMakinG)


### Best customers statistics module
* [#27](https://github.com/PrestaShop/statsbestcustomers/pull/27): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Best categories statistics module
* [#17](https://github.com/PrestaShop/statsbestcategories/pull/17): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Best manufacturers statistics module
* [#14](https://github.com/PrestaShop/statsbestmanufacturers/pull/14): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Order Notifications on the Favicon module
* [#35](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/35): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Links list module
* [#144](https://github.com/PrestaShop/ps_linklist/pull/144): Module needs to handle inactive languages too, by [@kpodemski](https://github.com/kpodemski)


### GDPR module
* [#158](https://github.com/PrestaShop/psgdpr/pull/158): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)
* [#155](https://github.com/PrestaShop/psgdpr/pull/155): Add index on psgdpr_log. Thank you [@clotairer](https://github.com/clotairer)


### Customer data privacy block module
* [#38](https://github.com/PrestaShop/ps_dataprivacy/pull/38): Improved Github Action (Support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Module analyzer
* [#7](https://github.com/PrestaShop/psssst/pull/7): Update display and show compliancy. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Data mining for statistics module
* [#23](https://github.com/PrestaShop/statsdata/pull/23): Use actionAuthentication instead of authentication deprecated hook. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Cash on delivery module
* [#41](https://github.com/PrestaShop/ps_cashondelivery/pull/41): Added Github Action for PHP (and support PHP 5.6 => 8.1), by [@Progi1984](https://github.com/Progi1984)


### Image slider module
* [#68](https://github.com/PrestaShop/ps_imageslider/pull/68): Fix an issue with protected variable, by [@kpodemski](https://github.com/kpodemski)
* [#66](https://github.com/PrestaShop/ps_imageslider/pull/66): Do not add scheme for empty or anchor links. Thank you [@JoryHogeveen](https://github.com/JoryHogeveen)


### Product Comments module
* [#130](https://github.com/PrestaShop/productcomments/pull/130): Align rating to the left on product list, by [@NeOMakinG](https://github.com/NeOMakinG)


### Example modules
* [#83](https://github.com/PrestaShop/example-modules/pull/83): Add demo grid example, by [@PierreRambaud](https://github.com/PierreRambaud)


### Decimal
* [#22](https://github.com/PrestaShop/decimal/pull/22): Release 1.5.0, by [@PierreRambaud](https://github.com/PierreRambaud)


### Wishlist block module
* [#149](https://github.com/PrestaShop/blockwishlist/pull/149): Set scrollbar from add to wishlist modal to auto, by [@NeOMakinG](https://github.com/NeOMakinG)


### PrestaShop Specifications
* [#284](https://github.com/PrestaShop/prestashop-specs/pull/284): Quick access spec. Thank you [@Saimis777](https://github.com/Saimis777)
* [#272](https://github.com/PrestaShop/prestashop-specs/pull/272): Carriers specs. Thank you [@Saimis777](https://github.com/Saimis777)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Progi1984](https://github.com/Progi1984), [@kpodemski](https://github.com/kpodemski), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@dependabot[bot]](https://github.com/apps/dependabot), [@okom3pom](https://github.com/okom3pom), [@PrestaEdit](https://github.com/PrestaEdit), [@NeOMakinG](https://github.com/NeOMakinG), [@Amoifr](https://github.com/Amoifr), [@boubkerbribri](https://github.com/boubkerbribri), [@saulaski](https://github.com/saulaski), [@jolelievre](https://github.com/jolelievre), [@PierreRambaud](https://github.com/PierreRambaud), [@JoryHogeveen](https://github.com/JoryHogeveen), [@atomiix](https://github.com/atomiix), [@matks](https://github.com/matks), [@mparvazi](https://github.com/mparvazi), [@clotairer](https://github.com/clotairer), [@jf-viguier](https://github.com/jf-viguier), [@Saimis777](https://github.com/Saimis777)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

