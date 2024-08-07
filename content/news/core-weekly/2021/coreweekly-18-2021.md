---
layout: post
aliases: ["/news/coreweekly-18-2021"]
title:  "PrestaShop Core Weekly - Week 18 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-05-12
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 3rd to Sunday 9th of May 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## Releases

* [php-dev-tools](https://github.com/PrestaShop/php-dev-tools): [v4.0.1](https://github.com/PrestaShop/php-dev-tools/releases/tag/v4.0.1)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [74 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-05-03..2021-05-09) have been created in the project repositories;
- [62 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-05-03..2021-05-09), including [25 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-05-03..2021-05-09) on the core;
- [84 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-05-03..2021-05-09) in the project repositories;
- [77 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-05-03..2021-05-09), including [68 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-05-03..2021-05-09).
        


## Code changes in the 'develop' branch


### Core
* [#24289](https://github.com/PrestaShop/PrestaShop/pull/24289): Fix visibility of constants, by [@matks](https://github.com/matks)
* [#24119](https://github.com/PrestaShop/PrestaShop/pull/24119): When saving an image as a square png, add always a transparent border. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#24116](https://github.com/PrestaShop/PrestaShop/pull/24116): Fix thumbnail regeneration for files other than jpg. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#24022](https://github.com/PrestaShop/PrestaShop/pull/24022): Register feature flag page hooks, by [@matks](https://github.com/matks)
* [#23886](https://github.com/PrestaShop/PrestaShop/pull/23886): Add composer.json CS normalizer to CI. Thank you [@mvorisek](https://github.com/mvorisek)
* [#23546](https://github.com/PrestaShop/PrestaShop/pull/23546): CategoryDataFactory : Avoid code duplicate. Thank you [@PululuK](https://github.com/PululuK)
* [#23413](https://github.com/PrestaShop/PrestaShop/pull/23413): Allow DKIM signing emails. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Back office
* [#24359](https://github.com/PrestaShop/PrestaShop/pull/24359): eMail Preview - wrong value in {total_products}. Thank you [@okom3pom](https://github.com/okom3pom)
* [#24352](https://github.com/PrestaShop/PrestaShop/pull/24352): Search Conf Incorrect successful alert message. Thank you [@okom3pom](https://github.com/okom3pom)
* [#24345](https://github.com/PrestaShop/PrestaShop/pull/24345): No alert displayed when we click on "Save then add another value" button. Thank you [@okom3pom](https://github.com/okom3pom)
* [#24328](https://github.com/PrestaShop/PrestaShop/pull/24328): Email "Fwd: Customer" message ; link is not correct. Thank you [@okom3pom](https://github.com/okom3pom)
* [#24211](https://github.com/PrestaShop/PrestaShop/pull/24211): Make multistore dropdown appear in group shop context , by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Front office
* [#24348](https://github.com/PrestaShop/PrestaShop/pull/24348): Use right link and add redirect. Thank you [@okom3pom](https://github.com/okom3pom)
* [#13585](https://github.com/PrestaShop/PrestaShop/pull/13585): Query optimization in CartRule. Thank you [@Rolige](https://github.com/Rolige)


### Tests
* [#24396](https://github.com/PrestaShop/PrestaShop/pull/24396): Fix nightly tests on develop for 07-05-2021, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.8.x' branch


### Back office
* [#24286](https://github.com/PrestaShop/PrestaShop/pull/24286): Clear Module::getModuleIdByName_ when installing a module, by [@atomiix](https://github.com/atomiix)
* [#24274](https://github.com/PrestaShop/PrestaShop/pull/24274): Fix getting CLDR data when creating a new currency, by [@atomiix](https://github.com/atomiix)
* [#24268](https://github.com/PrestaShop/PrestaShop/pull/24268): Enable translation export button only when export choices are made, by [@atomiix](https://github.com/atomiix)
* [#24266](https://github.com/PrestaShop/PrestaShop/pull/24266): Increase minimum size of the Quantity field in Partial Refund, by [@atomiix](https://github.com/atomiix)
* [#24213](https://github.com/PrestaShop/PrestaShop/pull/24213): Add missing product form hooks. Thank you [@zuk3975](https://github.com/zuk3975)
* [#24168](https://github.com/PrestaShop/PrestaShop/pull/24168): Fix obvious bugs in product page, by [@jolelievre](https://github.com/jolelievre)
* [#24134](https://github.com/PrestaShop/PrestaShop/pull/24134): Remove combination from list, by [@jolelievre](https://github.com/jolelievre)
* [#23865](https://github.com/PrestaShop/PrestaShop/pull/23865): Add product attribute generation to product page v2, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#24325](https://github.com/PrestaShop/PrestaShop/pull/24325): Move notifications inside content wrapper to fix a regression, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24315](https://github.com/PrestaShop/PrestaShop/pull/24315): Fix quickview image size on FO, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24270](https://github.com/PrestaShop/PrestaShop/pull/24270): Fix exception thrown in FO when category not active or doesn't exists, by [@atomiix](https://github.com/atomiix)


### Tests
* [#24377](https://github.com/PrestaShop/PrestaShop/pull/24377): Fix sanity workflow - Add repo to download libapache2, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24343](https://github.com/PrestaShop/PrestaShop/pull/24343): Fix attributes and Values functional tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#24288](https://github.com/PrestaShop/PrestaShop/pull/24288): Refactoring addImagesToProduct function, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24285](https://github.com/PrestaShop/PrestaShop/pull/24285): Refacto shipping test pages for js-doc. Thank you [@SD1982](https://github.com/SD1982)
* [#24280](https://github.com/PrestaShop/PrestaShop/pull/24280): Add Js doc for Dashboad and modules pages, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.7.x' branch


### Core
* [#24329](https://github.com/PrestaShop/PrestaShop/pull/24329): Bump version to 1.7.7.5, by [@Progi1984](https://github.com/Progi1984)


### Back office
* [#24353](https://github.com/PrestaShop/PrestaShop/pull/24353): Fix module activation checkbox in module configuration pages. Thank you [@IcarusSosie](https://github.com/IcarusSosie)
* [#24273](https://github.com/PrestaShop/PrestaShop/pull/24273): Implement Address Format in the View Order Page, by [@Progi1984](https://github.com/Progi1984)
* [#24269](https://github.com/PrestaShop/PrestaShop/pull/24269): Fix already selected condition group on safari inside catalog price rules, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#23902](https://github.com/PrestaShop/PrestaShop/pull/23902): Take customizations into account when performing operations on orders, by [@atomiix](https://github.com/atomiix)
* [#23492](https://github.com/PrestaShop/PrestaShop/pull/23492): Fixed Ecotax when editing an Order ((Add/Update)ProductToOrder), by [@Progi1984](https://github.com/Progi1984)


### Tests
* [#24366](https://github.com/PrestaShop/PrestaShop/pull/24366): Fix hooks tests (Nightly error), by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24305](https://github.com/PrestaShop/PrestaShop/pull/24305): Remove some modules when building docker for tests, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in modules, themes & tools


### Changes in developer documentation
* [#982](https://github.com/PrestaShop/docs/pull/982): gitignore "resources" - there are only built assets. Thank you [@zuk3975](https://github.com/zuk3975)
* [#979](https://github.com/PrestaShop/docs/pull/979): Add basic carrier module doc, by [@eternoendless](https://github.com/eternoendless)
* [#973](https://github.com/PrestaShop/docs/pull/973): Update release process - only regressions fixed in stabilization, by [@matks](https://github.com/matks)
* [#966](https://github.com/PrestaShop/docs/pull/966): Add `notice warning` about default `database prefix`. Thank you [@PululuK](https://github.com/PululuK)
* [#964](https://github.com/PrestaShop/docs/pull/964): Add FAQ about StockAvailable and StockMovement, by [@jolelievre](https://github.com/jolelievre)
* [#963](https://github.com/PrestaShop/docs/pull/963): Explain domain service and its usage in command handler. Thank you [@zuk3975](https://github.com/zuk3975)


### The PrestaShop open source project
* [#57](https://github.com/PrestaShop/open-source/pull/57): Update links for classic-rocket. Thank you [@lmeyer1](https://github.com/lmeyer1)


### Customer "Sign in" link module
* [#36](https://github.com/PrestaShop/ps_customersignin/pull/36): Return to the page product or other . Thank you [@okom3pom](https://github.com/okom3pom)


### Wishlist block module
* [#111](https://github.com/PrestaShop/blockwishlist/pull/111): Bump yargs-parser from 5.0.0 to 5.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#110](https://github.com/PrestaShop/blockwishlist/pull/110): Bump ssri from 6.0.1 to 6.0.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Docker images
* [#265](https://github.com/PrestaShop/docker/pull/265): Add images for 1.7.7.4, by [@PierreRambaud](https://github.com/PierreRambaud)


### Faceted search module
* [#416](https://github.com/PrestaShop/ps_facetedsearch/pull/416): Bump @babel/preset-env from 7.14.0 to 7.14.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#415](https://github.com/PrestaShop/ps_facetedsearch/pull/415): Bump webpack from 5.36.1 to 5.36.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### stylelint configuration
* [#11](https://github.com/PrestaShop/stylelint-config/pull/11): Bump stylelint-config-twbs-bootstrap from 2.1.0 to 2.2.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#10](https://github.com/PrestaShop/stylelint-config/pull/10): Bump stylelint from 13.13.0 to 13.13.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### User documentation landing page
* [#57](https://github.com/PrestaShop/user-documentation-landing/pull/57): fix(deps): bump core-js from 3.11.1 to 3.11.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Gamification module
* [#81](https://github.com/PrestaShop/gamification/pull/81): Bump symfony/phpunit-bridge from 5.2.6 to 5.2.7. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer reassurance block module
* [#187](https://github.com/PrestaShop/blockreassurance/pull/187): Bump mini-css-extract-plugin from 1.5.1 to 1.6.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#186](https://github.com/PrestaShop/blockreassurance/pull/186): Bump webpack from 5.36.1 to 5.36.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Core Weekly Generator tool
* [#81](https://github.com/PrestaShop/core-weekly-generator/pull/81): Bump urllib3 from 1.25.6 to 1.25.8. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Example modules
* [#51](https://github.com/PrestaShop/example-modules/pull/51): Bump ssri from 6.0.1 to 6.0.2 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### User documentation (English)
* [#3](https://github.com/PrestaShop/user-documentation-en/pull/3): Add information about db prefix. Thank you [@okom3pom](https://github.com/okom3pom)


### QA nightly results
* [#55](https://github.com/PrestaShop/QANightlyResults/pull/55): Bump illuminate/database from 6.20.14 to 6.20.26. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop PHPStan extension
* [#27](https://github.com/PrestaShop/phpstan-prestashop/pull/27): Ignore traits for UseTypeHintForNewMethodsRule and UseTypedReturnForNewMethodsRule, by [@matks](https://github.com/matks)


### GDPR module
* [#115](https://github.com/PrestaShop/psgdpr/pull/115): Fix install number of characters 70 to 64. Thank you [@TemKaSD](https://github.com/TemKaSD)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@boubkerbribri](https://github.com/boubkerbribri), [@Progi1984](https://github.com/Progi1984), [@zuk3975](https://github.com/zuk3975), [@eternoendless](https://github.com/eternoendless), [@okom3pom](https://github.com/okom3pom), [@IcarusSosie](https://github.com/IcarusSosie), [@lmeyer1](https://github.com/lmeyer1), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@matks](https://github.com/matks), [@dependabot[bot]](https://github.com/apps/dependabot), [@sowbiba](https://github.com/sowbiba), [@PierreRambaud](https://github.com/PierreRambaud), [@NeOMakinG](https://github.com/NeOMakinG), [@atomiix](https://github.com/atomiix), [@SD1982](https://github.com/SD1982), [@PululuK](https://github.com/PululuK), [@jolelievre](https://github.com/jolelievre), [@matthieu-rolland](https://github.com/matthieu-rolland), [@mvorisek](https://github.com/mvorisek), [@Hlavtox](https://github.com/Hlavtox), [@TemKaSD](https://github.com/TemKaSD), [@Rolige](https://github.com/Rolige)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
