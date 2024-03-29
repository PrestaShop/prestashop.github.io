---
layout: post
aliases: ["/news/coreweekly-22-2021"]
title:  "PrestaShop Core Weekly - Week 22 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-06-07
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 31th of May to Sunday 6th of June 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [63 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-05-31..2021-06-06) have been created in the project repositories;
- [40 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-05-31..2021-06-06), including [20 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-05-31..2021-06-06) on the core;
- [99 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-05-31..2021-06-06) in the project repositories;
- [87 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-05-31..2021-06-06), including [66 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-05-31..2021-06-06).



## Code changes in the 'develop' branch


### Core
* [#24782](https://github.com/PrestaShop/PrestaShop/pull/24782): Check that `$session` is set before using it. Thank you [@tswfi](https://github.com/tswfi)
* [#24760](https://github.com/PrestaShop/PrestaShop/pull/24760): Drop leftover code, `/tools/http_build_url/` was removed. Thank you [@mvorisek](https://github.com/mvorisek)
* [#24757](https://github.com/PrestaShop/PrestaShop/pull/24757): Make `getValue` more strict to avoid false negative. Thank you [@RomainMazB](https://github.com/RomainMazB)
* [#24701](https://github.com/PrestaShop/PrestaShop/pull/24701): Deprecate `Tools::safePostVars` method. Thank you [@mvorisek](https://github.com/mvorisek)


### Back office
* [#24805](https://github.com/PrestaShop/PrestaShop/pull/24805): Fix customer delete regression and tests, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24785](https://github.com/PrestaShop/PrestaShop/pull/24785): Fix mispelled word in AdminController. Thank you [@prestaforum](https://github.com/prestaforum)
* [#24688](https://github.com/PrestaShop/PrestaShop/pull/24688): Correctly display precise product weight. Thank you [@kpodemski](https://github.com/kpodemski)
* [#23221](https://github.com/PrestaShop/PrestaShop/pull/23221): Add typescript on BO migrated pages and refactor grid system, by [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#24623](https://github.com/PrestaShop/PrestaShop/pull/24623): Refactor `TinyMceMaxLengthValidator`. Thank you [@PululuK](https://github.com/PululuK)


## Code changes in the '1.7.8.x' branch


### Back office
* [#24745](https://github.com/PrestaShop/PrestaShop/pull/24745): Form builder modifier, by [@jolelievre](https://github.com/jolelievre)
* [#24736](https://github.com/PrestaShop/PrestaShop/pull/24736): Fix create-test-db. Thank you [@zuk3975](https://github.com/zuk3975)
* [#24718](https://github.com/PrestaShop/PrestaShop/pull/24718): The addProductNewInvoiceInfo is not displayed when creating new invoice, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#24696](https://github.com/PrestaShop/PrestaShop/pull/24696): Fix delete modal translation, by [@jolelievre](https://github.com/jolelievre)
* [#24594](https://github.com/PrestaShop/PrestaShop/pull/24594): Fix order create page on product qty update, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24330](https://github.com/PrestaShop/PrestaShop/pull/24330): Disable Menus tab and deny access, by [@sowbiba](https://github.com/sowbiba)


### Front office
* [#24680](https://github.com/PrestaShop/PrestaShop/pull/24680): Fix unclosed div in product-list.tpl. Thank you [@kpodemski](https://github.com/kpodemski)


### Tests
* [#24789](https://github.com/PrestaShop/PrestaShop/pull/24789): Add jsdoc for classes: imageType, invoice, language, orderMessage, orderReturnStatus, orderStatus, product, profile, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24787](https://github.com/PrestaShop/PrestaShop/pull/24787): Add regression test 'Access to Menu tab on Bo should be denied', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24775](https://github.com/PrestaShop/PrestaShop/pull/24775): Add class for columns on legacy tables to be able to target them on tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24737](https://github.com/PrestaShop/PrestaShop/pull/24737): Add ids for link to download sample file on import page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24720](https://github.com/PrestaShop/PrestaShop/pull/24720): Add selectors for view customer service page and fix autocomplete test, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24660](https://github.com/PrestaShop/PrestaShop/pull/24660): Update Js documentation for customers pages. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.7.x' branch


### Core
* [#24729](https://github.com/PrestaShop/PrestaShop/pull/24729): Update Linklist module to v4, by [@atomiix](https://github.com/atomiix)
* [#24717](https://github.com/PrestaShop/PrestaShop/pull/24717): Update native modules, by [@atomiix](https://github.com/atomiix)


### Back office
* [#24771](https://github.com/PrestaShop/PrestaShop/pull/24771): Build assets, by [@Progi1984](https://github.com/Progi1984)
* [#24679](https://github.com/PrestaShop/PrestaShop/pull/24679): Fix free shipping cart rule should not be recomputed when PS_ORDER_RECALCULATE_SHIPPING is false, by [@atomiix](https://github.com/atomiix)


## Code changes in modules, themes & tools


### Core Weekly Generator tool
* [#87](https://github.com/PrestaShop/core-weekly-generator/pull/87): Bump ws from 6.2.1 to 6.2.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Product Comments module
* [#104](https://github.com/PrestaShop/productcomments/pull/104): Bump version to 4.2.2, by [@Progi1984](https://github.com/Progi1984)
* [#103](https://github.com/PrestaShop/productcomments/pull/103): Add some classes to the table columns. Thank you [@SD1982](https://github.com/SD1982)


### Changes in developer documentation
* [#1029](https://github.com/PrestaShop/docs/pull/1029): Add missing information about dropdown in multistore configuration forms, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#1027](https://github.com/PrestaShop/docs/pull/1027): Add min-ver for getting multi-store config. Thank you [@kpodemski](https://github.com/kpodemski)
* [#1020](https://github.com/PrestaShop/docs/pull/1020): Improve migration documentation page wording. Thank you [@GabrieleMartini](https://github.com/GabrieleMartini)


### User documentation landing page
* [#76](https://github.com/PrestaShop/user-documentation-landing/pull/76): chore(deps-dev): bump sass from 1.34.0 to 1.34.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#75](https://github.com/PrestaShop/user-documentation-landing/pull/75): fix(deps): bump vue from 2.6.12 to 2.6.13. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#74](https://github.com/PrestaShop/user-documentation-landing/pull/74): fix(deps): bump core-js from 3.13.0 to 3.13.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#73](https://github.com/PrestaShop/user-documentation-landing/pull/73): chore(deps-dev): bump babel-jest from 27.0.1 to 27.0.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop Specifications
* [#224](https://github.com/PrestaShop/prestashop-specs/pull/224): Add mockups and specs for product availability, by [@marionf](https://github.com/marionf)
* [#223](https://github.com/PrestaShop/prestashop-specs/pull/223): Create psthemecusto.md. Thank you [@MatShir](https://github.com/MatShir)
* [#222](https://github.com/PrestaShop/prestashop-specs/pull/222): Add quantity check when adding a pack. Thank you [@MatShir](https://github.com/MatShir)
* [#221](https://github.com/PrestaShop/prestashop-specs/pull/221): Create Forms.md. Thank you [@MatShir](https://github.com/MatShir)
* [#219](https://github.com/PrestaShop/prestashop-specs/pull/219): Handle the specific price in the Order view. Thank you [@MatShir](https://github.com/MatShir)


### OnBoarding module
* [#115](https://github.com/PrestaShop/welcome/pull/115): Fix php-cs-fixer, by [@atomiix](https://github.com/atomiix)
* [#112](https://github.com/PrestaShop/welcome/pull/112): Bump version to 6.0.5, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#111](https://github.com/PrestaShop/welcome/pull/111): Bump eslint-plugin-import from 2.23.3 to 2.23.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#110](https://github.com/PrestaShop/welcome/pull/110): Make sure PS_ADMIN_DIR exists before using the OnBoarding, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#59](https://github.com/PrestaShop/welcome/pull/59): Uninstall module used on PS 1.6 before using this one, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Docker images
* [#267](https://github.com/PrestaShop/docker/pull/267): Add version and images for 1.7.8.0, by [@sowbiba](https://github.com/sowbiba)


### Gamification module
* [#85](https://github.com/PrestaShop/gamification/pull/85): Bump symfony/phpunit-bridge from 5.2.9 to 5.2.10. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer reassurance block module
* [#208](https://github.com/PrestaShop/blockreassurance/pull/208): Bump sass-loader from 11.1.1 to 12.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#207](https://github.com/PrestaShop/blockreassurance/pull/207): Bump vue from 2.6.12 to 2.6.13. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#206](https://github.com/PrestaShop/blockreassurance/pull/206): Bump eslint-plugin-import from 2.23.3 to 2.23.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#441](https://github.com/PrestaShop/ps_facetedsearch/pull/441): Bump sass-loader from 11.1.1 to 12.0.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#440](https://github.com/PrestaShop/ps_facetedsearch/pull/440): Bump @babel/preset-env from 7.14.2 to 7.14.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#439](https://github.com/PrestaShop/ps_facetedsearch/pull/439): Bump eslint-plugin-import from 2.23.3 to 2.23.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#431](https://github.com/PrestaShop/ps_facetedsearch/pull/431): Bump @babel/core from 7.14.2 to 7.14.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Email Alerts module
* [#88](https://github.com/PrestaShop/ps_emailalerts/pull/88): Update switch fields wording. Thank you [@micka-fdz](https://github.com/micka-fdz)


### Wishlist block module
* [#119](https://github.com/PrestaShop/blockwishlist/pull/119): Bump ws from 7.3.1 to 7.4.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Image slider module
* [#61](https://github.com/PrestaShop/ps_imageslider/pull/61): Migrated Travis CI to Github Actions, by [@Progi1984](https://github.com/Progi1984)


### Google Sitemap module
* [#146](https://github.com/PrestaShop/gsitemap/pull/146): Migrated Travis CI to Github Actions, by [@Progi1984](https://github.com/Progi1984)


### Example modules
* [#65](https://github.com/PrestaShop/example-modules/pull/65): Bump dns-packet from 1.3.1 to 1.3.4 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#63](https://github.com/PrestaShop/example-modules/pull/63): Add JavaScript example of 'how to manage custom grid action' in demoextendgrid module . Thank you [@zuk3975](https://github.com/zuk3975)


### MJML Theme Converter
* [#11](https://github.com/PrestaShop/mjml-theme-converter/pull/11): Email for shop not for customer. Thank you [@okom3pom](https://github.com/okom3pom)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@NeOMakinG](https://github.com/NeOMakinG), [@Progi1984](https://github.com/Progi1984), [@matthieu-rolland](https://github.com/matthieu-rolland), [@boubkerbribri](https://github.com/boubkerbribri), [@prestaforum](https://github.com/prestaforum), [@tswfi](https://github.com/tswfi), [@kpodemski](https://github.com/kpodemski), [@mvorisek](https://github.com/mvorisek), [@RomainMazB](https://github.com/RomainMazB), [@marionf](https://github.com/marionf), [@jolelievre](https://github.com/jolelievre), [@atomiix](https://github.com/atomiix), [@sowbiba](https://github.com/sowbiba), [@zuk3975](https://github.com/zuk3975), [@micka-fdz](https://github.com/micka-fdz), [@PierreRambaud](https://github.com/PierreRambaud), [@SD1982](https://github.com/SD1982), [@GabrieleMartini](https://github.com/GabrieleMartini), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@PululuK](https://github.com/PululuK), [@MatShir](https://github.com/MatShir), [@okom3pom](https://github.com/okom3pom), [@Quetzacoalt91](https://github.com/Quetzacoalt91)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
