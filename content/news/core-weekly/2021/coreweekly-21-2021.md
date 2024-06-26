---
layout: post
aliases: ["/news/coreweekly-21-2021"]
title:  "PrestaShop Core Weekly - Week 21 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-06-02
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 24th to Sunday 30th of May 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear Developers,

In case you missed it, [1.7.8 beta has been released yesterday](https://build.prestashop.com/news/prestashop-1-7-8-0-beta-release/)! Please read the Release Note then help us testing it. We are looking for all kind of feedback, especially from module developers to find out if their modules behavior is correct with this new version. [Docker images](https://hub.docker.com/r/prestashop/prestashop/tags?page=1&ordering=last_updated) are also available for this beta version.

Another PrestaShop release is also making its way to the stage: [PrestaShop 1.7.7.5](https://github.com/PrestaShop/PrestaShop/issues/24342) patch version has been delivered to QA team who is running the standard patch release test campaign to validate it.

In the meantime, in the PHP ecosystem, Symfony released [Symfony 5.3.0](https://symfony.com/blog/symfony-5-3-0-released). What a great week for releases!


## Releases

* [blockwishlist](https://github.com/PrestaShop/blockwishlist): [v2.0.1](https://github.com/PrestaShop/blockwishlist/releases/tag/v2.0.1)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [40 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-05-24..2021-05-30) have been created in the project repositories;
- [48 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-05-24..2021-05-30), including [28 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-05-24..2021-05-30) on the core;
- [88 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-05-24..2021-05-30) in the project repositories;
- [92 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-05-24..2021-05-30), including [87 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-05-24..2021-05-30).



## Code changes in the 'develop' branch


### Core
* [#24625](https://github.com/PrestaShop/PrestaShop/pull/24625): Fix PHP 7.4 - Cannot use "parent" when current class scope has no parent. Thank you [@mvorisek](https://github.com/mvorisek)
* [#24382](https://github.com/PrestaShop/PrestaShop/pull/24382): `GridColumn` add  alignment `option`. Thank you [@PululuK](https://github.com/PululuK)
* [#23692](https://github.com/PrestaShop/PrestaShop/pull/23692): A lot of HTML errors are breaking DOM parsing, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#24649](https://github.com/PrestaShop/PrestaShop/pull/24649): Remove irrelevant "todo" reminder. Thank you [@zuk3975](https://github.com/zuk3975)
* [#24628](https://github.com/PrestaShop/PrestaShop/pull/24628): Add router to defined javascript components. Thank you [@zuk3975](https://github.com/zuk3975)
* [#24555](https://github.com/PrestaShop/PrestaShop/pull/24555): Fix for product combination quantity change in RTL panel . Thank you [@samberrry](https://github.com/samberrry)


### Front office
* [#16138](https://github.com/PrestaShop/PrestaShop/pull/16138): Fixed the bad discount amount for specific prices. Thank you [@levyn](https://github.com/levyn)


### Installer
* [#24588](https://github.com/PrestaShop/PrestaShop/pull/24588): Fix fixtures when addons modules are not installed, by [@PierreRambaud](https://github.com/PierreRambaud)


### Tests
* [#24629](https://github.com/PrestaShop/PrestaShop/pull/24629): Test adapter `Validate::isUnsignedInt` . Thank you [@PululuK](https://github.com/PululuK)
* [#24618](https://github.com/PrestaShop/PrestaShop/pull/24618): Improve `Tools` protocol check. Thank you [@PululuK](https://github.com/PululuK)


## Code changes in the '1.7.8.x' branch


### Core
* [#24659](https://github.com/PrestaShop/PrestaShop/pull/24659): Improved profiler. Thank you [@kpodemski](https://github.com/kpodemski)
* [#24611](https://github.com/PrestaShop/PrestaShop/pull/24611): Make sure array keys exist before using it for PHP7.4 compatibility, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#24242](https://github.com/PrestaShop/PrestaShop/pull/24242): Fix upgrade from 1.6.1.24 to 1.7.8.x, by [@atomiix](https://github.com/atomiix)


### Back office
* [#24697](https://github.com/PrestaShop/PrestaShop/pull/24697): Fix product stats alignment on order view page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24677](https://github.com/PrestaShop/PrestaShop/pull/24677): Update vue-style-loader to fix scoped css bug, by [@jolelievre](https://github.com/jolelievre)
* [#24653](https://github.com/PrestaShop/PrestaShop/pull/24653): Remove abstract product handler. Thank you [@zuk3975](https://github.com/zuk3975)
* [#24632](https://github.com/PrestaShop/PrestaShop/pull/24632): Wrong get and set data for employee options configuration, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#24614](https://github.com/PrestaShop/PrestaShop/pull/24614): Fixed error message for avoiding duplicate order message name, by [@Progi1984](https://github.com/Progi1984)
* [#24596](https://github.com/PrestaShop/PrestaShop/pull/24596): Fix primary buttons not being inline on Theme & Logo > Pages configurations, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24580](https://github.com/PrestaShop/PrestaShop/pull/24580): Fix  the alignment  columns  Features and Attributes. Thank you [@okom3pom](https://github.com/okom3pom)
* [#24577](https://github.com/PrestaShop/PrestaShop/pull/24577): Customer Service page - A title section is not well displayed. Thank you [@okom3pom](https://github.com/okom3pom)
* [#24573](https://github.com/PrestaShop/PrestaShop/pull/24573): Fix title layout on order view page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24572](https://github.com/PrestaShop/PrestaShop/pull/24572): Fix npm vulnerabilities and update webpack everywhere except classic, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24541](https://github.com/PrestaShop/PrestaShop/pull/24541): Remove inline-style from form_row of the UIKit and adapt js, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24539](https://github.com/PrestaShop/PrestaShop/pull/24539): Added style for maintenance page, by [@Progi1984](https://github.com/Progi1984)
* [#24485](https://github.com/PrestaShop/PrestaShop/pull/24485): Fixed an error displayed in the console when changing the order status -  Orders list page . Thank you [@arouiadib](https://github.com/arouiadib)
* [#24447](https://github.com/PrestaShop/PrestaShop/pull/24447): Fix order view layout of right column, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24355](https://github.com/PrestaShop/PrestaShop/pull/24355): Fix Multistore dropdown in current group context, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#24283](https://github.com/PrestaShop/PrestaShop/pull/24283): Add info block background to order page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24253](https://github.com/PrestaShop/PrestaShop/pull/24253): Backport #23902 with new modal content, by [@atomiix](https://github.com/atomiix)
* [#23900](https://github.com/PrestaShop/PrestaShop/pull/23900): Construct category tree using JS on product page v2, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#24610](https://github.com/PrestaShop/PrestaShop/pull/24610): Fixed check on array in template Smarty, by [@Progi1984](https://github.com/Progi1984)


### Installer
* [#24690](https://github.com/PrestaShop/PrestaShop/pull/24690): Update Symfony to latest patch, by [@jolelievre](https://github.com/jolelievre)
* [#24681](https://github.com/PrestaShop/PrestaShop/pull/24681): Update prestashop modules in composer.lock, by [@jolelievre](https://github.com/jolelievre)


### Tests
* [#24652](https://github.com/PrestaShop/PrestaShop/pull/24652): Functional  tests - Add test merchandise return options. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#24648](https://github.com/PrestaShop/PrestaShop/pull/24648): Fix nightly tests on 1.7.8.x for 25/05/2021. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#24627](https://github.com/PrestaShop/PrestaShop/pull/24627): Functional tests - Add test 'Contact options'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#24603](https://github.com/PrestaShop/PrestaShop/pull/24603): Add js-doc to faker data classes: search, searchEngine, seoPage, shop, shopGroup, sqlQuery, state, store, supplier, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.7.x' branch


### Back office
* [#24576](https://github.com/PrestaShop/PrestaShop/pull/24576): BO - New Order - Empty gift message is not a null value, by [@Progi1984](https://github.com/Progi1984)
* [#24565](https://github.com/PrestaShop/PrestaShop/pull/24565): Order View - Discount Modal - Disable submit until name is filled, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### Main menu module
* [#50](https://github.com/PrestaShop/ps_mainmenu/pull/50): Migrate Travis CI to Github Actions, by [@Progi1984](https://github.com/Progi1984)


### Core Weekly Generator tool
* [#86](https://github.com/PrestaShop/core-weekly-generator/pull/86): Bump dns-packet from 1.3.1 to 1.3.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#85](https://github.com/PrestaShop/core-weekly-generator/pull/85): Bump browserslist from 4.7.1 to 4.16.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Customer reassurance block module
* [#205](https://github.com/PrestaShop/blockreassurance/pull/205): Bump webpack from 5.37.1 to 5.38.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#204](https://github.com/PrestaShop/blockreassurance/pull/204): Bump browserslist from 4.16.3 to 4.16.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#203](https://github.com/PrestaShop/blockreassurance/pull/203): Bump css-loader from 5.2.5 to 5.2.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#202](https://github.com/PrestaShop/blockreassurance/pull/202): Bump eslint-plugin-import from 2.23.2 to 2.23.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#438](https://github.com/PrestaShop/ps_facetedsearch/pull/438): Bump webpack from 5.37.1 to 5.38.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#437](https://github.com/PrestaShop/ps_facetedsearch/pull/437): Bump browserslist from 4.14.5 to 4.16.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#436](https://github.com/PrestaShop/ps_facetedsearch/pull/436): Bump css-loader from 5.2.5 to 5.2.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#435](https://github.com/PrestaShop/ps_facetedsearch/pull/435): Bump eslint-plugin-import from 2.23.2 to 2.23.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#433](https://github.com/PrestaShop/ps_facetedsearch/pull/433): Fix Column on Attribute and Feature Controller by hook. Thank you [@okom3pom](https://github.com/okom3pom)


### User documentation landing page
* [#72](https://github.com/PrestaShop/user-documentation-landing/pull/72): fix(deps): bump actions/cache from 2.1.5 to 2.1.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#71](https://github.com/PrestaShop/user-documentation-landing/pull/71): chore(deps-dev): bump @nuxtjs/eslint-config from 6.0.0 to 6.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#70](https://github.com/PrestaShop/user-documentation-landing/pull/70): fix(deps): bump core-js from 3.12.1 to 3.13.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#69](https://github.com/PrestaShop/user-documentation-landing/pull/69): chore(deps-dev): bump babel-jest from 26.6.3 to 27.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#67](https://github.com/PrestaShop/user-documentation-landing/pull/67): chore(deps-dev): bump eslint from 7.26.0 to 7.27.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#66](https://github.com/PrestaShop/user-documentation-landing/pull/66): chore(deps-dev): bump sass from 1.32.13 to 1.34.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation
* [#1025](https://github.com/PrestaShop/docs/pull/1025): Correctly highlight smarty+html syntax. Thank you [@kpodemski](https://github.com/kpodemski)
* [#1015](https://github.com/PrestaShop/docs/pull/1015): Update migration.md. Thank you [@GabrieleMartini](https://github.com/GabrieleMartini)
* [#1014](https://github.com/PrestaShop/docs/pull/1014): Update backup.md. Thank you [@GabrieleMartini](https://github.com/GabrieleMartini)
* [#1013](https://github.com/PrestaShop/docs/pull/1013): Update httpd.md. Thank you [@GabrieleMartini](https://github.com/GabrieleMartini)
* [#1012](https://github.com/PrestaShop/docs/pull/1012): Fix localhost page typo. Thank you [@GabrieleMartini](https://github.com/GabrieleMartini)
* [#1010](https://github.com/PrestaShop/docs/pull/1010): Add link to example module for console command creation. Thank you [@zuk3975](https://github.com/zuk3975)
* [#1009](https://github.com/PrestaShop/docs/pull/1009): Mention example module in overrides section. Thank you [@zuk3975](https://github.com/zuk3975)
* [#1007](https://github.com/PrestaShop/docs/pull/1007): Fixed path to component. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#1006](https://github.com/PrestaShop/docs/pull/1006): Added list of components. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#1000](https://github.com/PrestaShop/docs/pull/1000): Explain validation flow in migration guide. Thank you [@zuk3975](https://github.com/zuk3975)
* [#980](https://github.com/PrestaShop/docs/pull/980): Add basic multistore in modules doc, by [@eternoendless](https://github.com/eternoendless)
* [#843](https://github.com/PrestaShop/docs/pull/843): Introduce multistore technical documentation for configuration forms and settings, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Buy button lite module
* [#51](https://github.com/PrestaShop/ps_buybuttonlite/pull/51): Bump dns-packet from 1.3.1 to 1.3.4 in /app. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### QA nightly results
* [#56](https://github.com/PrestaShop/QANightlyResults/pull/56): Integrate phpstan and php cs fixer, by [@PierreRambaud](https://github.com/PierreRambaud)


### Wishlist block module
* [#118](https://github.com/PrestaShop/blockwishlist/pull/118): Update delete modal wordings, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#117](https://github.com/PrestaShop/blockwishlist/pull/117): Release version 2.0.1, by [@jolelievre](https://github.com/jolelievre)


### Stylelint browser compatibility plugin
* [#9](https://github.com/PrestaShop/stylelint-browser-compatibility/pull/9): Bump browserslist from 4.8.3 to 4.16.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### stylelint configuration
* [#14](https://github.com/PrestaShop/stylelint-config/pull/14): Bump browserslist from 4.16.4 to 4.16.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#13](https://github.com/PrestaShop/stylelint-config/pull/13): Bump stylelint-no-unsupported-browser-features from 4.1.4 to 5.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### OnBoarding module
* [#109](https://github.com/PrestaShop/welcome/pull/109): Bump eslint-plugin-import from 2.23.2 to 2.23.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Example modules
* [#61](https://github.com/PrestaShop/example-modules/pull/61): Add remaining text types for module demosymfonyform. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#46](https://github.com/PrestaShop/example-modules/pull/46): Bump elliptic from 6.5.3 to 6.5.4 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#45](https://github.com/PrestaShop/example-modules/pull/45): Bump elliptic from 6.5.3 to 6.5.4 in /demodoctrine/js. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### DocToolsBundle
* [#1](https://github.com/PrestaShop/DocToolsBundle/pull/1): Cqrs doc commands, by [@jolelievre](https://github.com/jolelievre)


### Product Comments module
* [#102](https://github.com/PrestaShop/productcomments/pull/102): Fix duplicated id for review tables. Thank you [@SD1982](https://github.com/SD1982)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@NeOMakinG](https://github.com/NeOMakinG), [@jolelievre](https://github.com/jolelievre), [@Progi1984](https://github.com/Progi1984), [@dependabot[bot]](https://github.com/apps/dependabot), [@kpodemski](https://github.com/kpodemski), [@PierreRambaud](https://github.com/PierreRambaud), [@GabrieleMartini](https://github.com/GabrieleMartini), [@zuk3975](https://github.com/zuk3975), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@PululuK](https://github.com/PululuK), [@mvorisek](https://github.com/mvorisek), [@boubkerbribri](https://github.com/boubkerbribri), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@okom3pom](https://github.com/okom3pom), [@samberrry](https://github.com/samberrry), [@SD1982](https://github.com/SD1982), [@arouiadib](https://github.com/arouiadib), [@eternoendless](https://github.com/eternoendless), [@matthieu-rolland](https://github.com/matthieu-rolland), [@atomiix](https://github.com/atomiix), [@levyn](https://github.com/levyn)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
