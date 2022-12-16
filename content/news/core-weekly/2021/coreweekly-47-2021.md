---
layout: post
aliases: ["/news/coreweekly-47-2021"]
slug: "coreweekly-47-2021"
title:  "PrestaShop Core Weekly - Week 47 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-11-29
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 22th to Sunday 28th of November 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Two very interesting events last week:

First, [PHP 8.1](https://www.php.net/archive/2021.php#2021-11-25-1) was released on the 25th of November 2021. This release marks the latest minor release of the PHP language. Take a look at the [PHP 8.1 announcement](https://www.php.net/archive/2021.php#2021-11-25-1) on php.net for more information.

Second, multiple companies, including the PrestaShop company, [joined forces to form a PHP Foundation](https://blog.jetbrains.com/phpstorm/2021/11/the-php-foundation/)! The PHP Foundation will be a non-profit organization whose mission is to ensure the long life and prosperity of the PHP language.

Small reminder, the [next session of public demonstration](https://youtu.be/ydSIyOmQez8) from the maintainers team will happen will be streamed live on Wednesday, December 1, 2021, at 4 pm CEST. See you then!


## Releases

* [Statsbestcustomers](https://github.com/PrestaShop/statsbestcustomers) module: [v2.0.3](https://github.com/PrestaShop/statsbestcustomers/releases/tag/v2.0.3)
* [Productcomments](https://github.com/PrestaShop/productcomments) module: [v5.0.0](https://github.com/PrestaShop/productcomments/releases/tag/untagged-2da579214f35f384a784)
* [Ps_supplierlist](https://github.com/PrestaShop/ps_supplierlist) module: [v1.0.4](https://github.com/PrestaShop/ps_supplierlist/releases/tag/v1.0.4)
* [phpstan-prestashop](https://github.com/PrestaShop/phpstan-prestashop): [2.0.0](https://github.com/PrestaShop/phpstan-prestashop/releases/tag/2.0.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [58 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-11-22..2021-11-28) have been created in the project repositories;
- [37 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-11-22..2021-11-28), including [10 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-11-22..2021-11-28) on the core;
- [64 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-11-22..2021-11-28) in the project repositories;
- [60 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-11-22..2021-11-28), including [51 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-11-22..2021-11-28).



## Code changes in the 'develop' branch


### Core
* [#26650](https://github.com/PrestaShop/PrestaShop/pull/26650): Remove code linked to `gapi` Module, by [@Progi1984](https://github.com/Progi1984)
* [#26518](https://github.com/PrestaShop/PrestaShop/pull/26518): PHPStan (Level 0) on controllers/, by [@Progi1984](https://github.com/Progi1984)
* [#26478](https://github.com/PrestaShop/PrestaShop/pull/26478): PHPStan (Level 3) on classes/, by [@Progi1984](https://github.com/Progi1984)
* [#26075](https://github.com/PrestaShop/PrestaShop/pull/26075): Do not use virtual cart for saving quantity in stock. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Back office
* [#26616](https://github.com/PrestaShop/PrestaShop/pull/26616): In BackOffice, removes unused RTL files and its calls. Thank you [@mparvazi](https://github.com/mparvazi)
* [#26601](https://github.com/PrestaShop/PrestaShop/pull/26601): Do not use hook alias - follow-up. Thank you [@SharakPL](https://github.com/SharakPL)
* [#26522](https://github.com/PrestaShop/PrestaShop/pull/26522): Fixed display of errors in Carrier Wizard, by [@Progi1984](https://github.com/Progi1984)
* [#25920](https://github.com/PrestaShop/PrestaShop/pull/25920): Handle related products in new product page, by [@jolelievre](https://github.com/jolelievre)


### Front office
* [#26673](https://github.com/PrestaShop/PrestaShop/pull/26673): Fix button alignment inside input-group. Thank you [@SharakPL](https://github.com/SharakPL)
* [#26658](https://github.com/PrestaShop/PrestaShop/pull/26658): Remove lazy load for logo. Thank you [@iqit-commerce](https://github.com/iqit-commerce)
* [#25064](https://github.com/PrestaShop/PrestaShop/pull/25064): Link improvements, mainly for customers not logged in. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Tests
* [#26765](https://github.com/PrestaShop/PrestaShop/pull/26765): Freeze php-cs-fixer version, by [@matks](https://github.com/matks)
* [#26757](https://github.com/PrestaShop/PrestaShop/pull/26757): Fix nightly 25/11 - Fix footer links test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#26697](https://github.com/PrestaShop/PrestaShop/pull/26697): Upgrade pcre2 in Github Actions, by [@atomiix](https://github.com/atomiix)
* [#26688](https://github.com/PrestaShop/PrestaShop/pull/26688): Improve some selectors on FO and view suppliers page, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.8.x' branch


### Core
* [#26630](https://github.com/PrestaShop/PrestaShop/pull/26630): Bump version to 1.7.8.3, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#26691](https://github.com/PrestaShop/PrestaShop/pull/26691): In BackOffice, fixed the header search box oversized height. Thank you [@mparvazi](https://github.com/mparvazi)
* [#26607](https://github.com/PrestaShop/PrestaShop/pull/26607): Fix unnecessary scrollbar. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#26481](https://github.com/PrestaShop/PrestaShop/pull/26481): Fixed Recalculate Shipping when the carrier of an order is changed, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#26622](https://github.com/PrestaShop/PrestaShop/pull/26622): Fix manufacturer logo in Classic theme. Thank you [@SharakPL](https://github.com/SharakPL)


## Code changes in modules, themes & tools


### Changes in developer documentation sources
* [#1237](https://github.com/PrestaShop/docs/pull/1237): Add "Override a module". Thank you [@marsaldev](https://github.com/marsaldev)
* [#1230](https://github.com/PrestaShop/docs/pull/1230): Fix hookActionFrontControllerSetVariables smarty exemple, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#1229](https://github.com/PrestaShop/docs/pull/1229): Fix assign custom slip vars, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#1228](https://github.com/PrestaShop/docs/pull/1228): Improve JS toggle doc, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#1226](https://github.com/PrestaShop/docs/pull/1226): Replaced deprecated method, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#1208](https://github.com/PrestaShop/docs/pull/1208): Fixed links to ModuleFrontController.php. Thank you [@SebSept](https://github.com/SebSept)
* [#1203](https://github.com/PrestaShop/docs/pull/1203): Add "Override a module". Thank you [@marsaldev](https://github.com/marsaldev)


### Customer account links module
* [#35](https://github.com/PrestaShop/ps_customeraccountlinks/pull/35): Update php compatiblity to >=PHP5.6, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#34](https://github.com/PrestaShop/ps_customeraccountlinks/pull/34): Link improvements, mainly for customers not logged in. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Customer reassurance block module
* [#316](https://github.com/PrestaShop/blockreassurance/pull/316): Bump webpack from 5.64.2 to 5.64.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#315](https://github.com/PrestaShop/blockreassurance/pull/315): Bump webpack from 5.64.1 to 5.64.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#561](https://github.com/PrestaShop/ps_facetedsearch/pull/561): Bump webpack from 5.64.2 to 5.64.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#560](https://github.com/PrestaShop/ps_facetedsearch/pull/560): Bump webpack from 5.64.1 to 5.64.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Supplier list module
* [#10](https://github.com/PrestaShop/ps_supplierlist/pull/10): Release 1.0.4. Thank you [@okom3pom](https://github.com/okom3pom)
* [#9](https://github.com/PrestaShop/ps_supplierlist/pull/9): Bump version to 1.0.4. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### User documentation landing page
* [#154](https://github.com/PrestaShop/user-documentation-landing/pull/154): fix(deps): bump actions/cache from 2.1.6 to 2.1.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### New Front-office theme
* [#123](https://github.com/PrestaShop/theme-refacto/pull/123): Add .editorconfig. Thank you [@rodriciru](https://github.com/rodriciru)
* [#122](https://github.com/PrestaShop/theme-refacto/pull/122): Update some modules to mach styles. Thank you [@rodriciru](https://github.com/rodriciru)


### PrestaShop PHPStan extension
* [#33](https://github.com/PrestaShop/phpstan-prestashop/pull/33): Update dependencies to make it php81 compatible, by [@atomiix](https://github.com/atomiix)


### PrestaShop PHP Informations Tool
* [#23](https://github.com/PrestaShop/php-ps-info/pull/23): Change recommended php version to 7.4. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Featured products module
* [#40](https://github.com/PrestaShop/ps_featuredproducts/pull/40): Do not use hook alias - follow-up, bump version to 2.1.1. Thank you [@SharakPL](https://github.com/SharakPL)


### GDPR module
* [#150](https://github.com/PrestaShop/psgdpr/pull/150): No optin for anonymous@psrgpd.com email. Thank you [@okom3pom](https://github.com/okom3pom)


### PrestaShop Specifications
* [#257](https://github.com/PrestaShop/prestashop-specs/pull/257): Specs for contact. Thank you [@Saimis777](https://github.com/Saimis777)


### Wishlist block module
* [#130](https://github.com/PrestaShop/blockwishlist/pull/130): Fix upgrade from previous versions, by [@Matt75](https://github.com/Matt75)
* [#128](https://github.com/PrestaShop/blockwishlist/pull/128): Fix modal problem on bootstrap 4+ and eslint problem, by [@NeOMakinG](https://github.com/NeOMakinG)


### Cross-selling module
* [#27](https://github.com/PrestaShop/ps_crossselling/pull/27): Big performance improvements. Thank you [@Rolige](https://github.com/Rolige)


### Best customers statistics module
* [#20](https://github.com/PrestaShop/statsbestcustomers/pull/20): Release 2.0.3, by [@Progi1984](https://github.com/Progi1984)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@marsaldev](https://github.com/marsaldev), [@matks](https://github.com/matks), [@PierreRambaud](https://github.com/PierreRambaud), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@dependabot[bot]](https://github.com/apps/dependabot), [@okom3pom](https://github.com/okom3pom), [@rodriciru](https://github.com/rodriciru), [@Progi1984](https://github.com/Progi1984), [@atomiix](https://github.com/atomiix), [@PrestaEdit](https://github.com/PrestaEdit), [@jf-viguier](https://github.com/jf-viguier), [@mparvazi](https://github.com/mparvazi), [@boubkerbribri](https://github.com/boubkerbribri), [@SharakPL](https://github.com/SharakPL), [@iqit-commerce](https://github.com/iqit-commerce), [@le-melon](https://github.com/le-melon), [@Hlavtox](https://github.com/Hlavtox), [@SebSept](https://github.com/SebSept), [@Saimis777](https://github.com/Saimis777), [@jolelievre](https://github.com/jolelievre), [@Matt75](https://github.com/Matt75), [@NeOMakinG](https://github.com/NeOMakinG), [@Rolige](https://github.com/Rolige)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
