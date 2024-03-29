---
layout: post
aliases: ["/news/coreweekly-01-2021"]
title:  "PrestaShop Core Weekly - Week 1 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-01-12
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 4th to Sunday 10th of January 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear Developers,

PrestaShop [1.7.7.1](https://build.prestashop.com/news/prestashop-1-7-7-1-maintenance-release/) has been released! Don't forget to update as this patch version fixes 41 regressions reported on version 1.7.7.0.

The kanban for `1.7.7` branch is not empty yet, it still contains unresolved regressions reported on version 1.7.7.0. The next batch of bugfixes for 1.7.7 will be delivered in patch version 1.7.7.2, which is scheduled to be delivered within [the next 6 weeks](https://devdocs.prestashop.com/1.7/project/release/minor-release-lifecycle/).

In the meantime, [@NeOMakinG](https://github.com/NeOMakinG) is building a brand new [Landing page](https://build.prestashop.com/user-documentation-landing/) for User Documentation.

Finally, maintainers also released a [PHPStan extension](https://github.com/PrestaShop/phpstan-prestashop) that should customize the rules being applied by [PHPStan](https://phpstan.org/) on submitted Pull Requests in order to help validating them.


## Releases

* [PrestaShop](https://github.com/PrestaShop/PrestaShop) [1.7.7.1](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.7.1)
* [prestashop-ui-kit](https://github.com/PrestaShop/prestashop-ui-kit): [v1.2.1](https://github.com/PrestaShop/prestashop-ui-kit/releases/tag/1.2.1)
* [ps_shoppingcart](https://github.com/PrestaShop/ps_shoppingcart) module: [v2.0.4](https://github.com/PrestaShop/ps_shoppingcart/releases/tag/v2.0.4)
* [ps_customeraccountlinks](https://github.com/PrestaShop/ps_customeraccountlinks) module: [v3.1.1](https://github.com/PrestaShop/ps_customeraccountlinks/releases/tag/v3.1.1)
* [ps_crossselling](https://github.com/PrestaShop/ps_crossselling) module: [v2.0.1](https://github.com/PrestaShop/ps_crossselling/releases/tag/v2.0.1)
* [traces](https://github.com/PrestaShop/traces): [v5.1.0](https://github.com/PrestaShop/traces/releases/tag/v5.1.0)
* [phpstan-prestashop](https://github.com/PrestaShop/phpstan-prestashop) (PHPStan extension): [1.0.0](https://github.com/PrestaShop/phpstan-prestashop/releases/tag/1.0.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [65 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-01-04..2021-01-10) have been created in the project repositories;
- [67 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-01-04..2021-01-10), including [18 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-01-04..2021-01-10) on the core;
- [97 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-01-04..2021-01-10) in the project repositories;
- [85 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-01-04..2021-01-10), including [75 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-01-04..2021-01-10).



## Code changes in the 'develop' branch


### Core
* [#22506](https://github.com/PrestaShop/PrestaShop/pull/22506): Use a QueryBuilder instead of Repository in RequestSql grid. Thank you [@PululuK](https://github.com/PululuK)
* [#22462](https://github.com/PrestaShop/PrestaShop/pull/22462): Improve multiple choice table : Add option to keep table heads fixed. Thank you [@PululuK](https://github.com/PululuK)


### Back office
* [#22745](https://github.com/PrestaShop/PrestaShop/pull/22745): Move stock services into proper namespace, by [@jolelievre](https://github.com/jolelievre)
* [#22726](https://github.com/PrestaShop/PrestaShop/pull/22726): Move virtual product file namespace into product sub namespace, by [@jolelievre](https://github.com/jolelievre)
* [#22725](https://github.com/PrestaShop/PrestaShop/pull/22725): Move image namespace into product sub namespace, by [@jolelievre](https://github.com/jolelievre)
* [#22723](https://github.com/PrestaShop/PrestaShop/pull/22723): Fix scss for linter, by [@matks](https://github.com/matks)
* [#22722](https://github.com/PrestaShop/PrestaShop/pull/22722): Move attribute group services into proper namespace, by [@jolelievre](https://github.com/jolelievre)
* [#22718](https://github.com/PrestaShop/PrestaShop/pull/22718): Move combination namespace into product sub namespace, by [@jolelievre](https://github.com/jolelievre)
* [#22703](https://github.com/PrestaShop/PrestaShop/pull/22703): Integrate product options form and related command. Thank you [@zuk3975](https://github.com/zuk3975)
* [#22670](https://github.com/PrestaShop/PrestaShop/pull/22670): Set leading zero to always and remove cache, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22663](https://github.com/PrestaShop/PrestaShop/pull/22663): Integrate product shipping form and related command. Thank you [@zuk3975](https://github.com/zuk3975)
* [#22585](https://github.com/PrestaShop/PrestaShop/pull/22585): AdminStats Controller use the good column for total. Thank you [@okom3pom](https://github.com/okom3pom)
* [#22526](https://github.com/PrestaShop/PrestaShop/pull/22526): Change color of view website and add icon color on hover, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22519](https://github.com/PrestaShop/PrestaShop/pull/22519): Adjust notifications pan on mobile, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22479](https://github.com/PrestaShop/PrestaShop/pull/22479): Adjust BO menu on responsive (font-sizes, margins, closing cross, signout), by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22477](https://github.com/PrestaShop/PrestaShop/pull/22477): Added form theme to the address required fields. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#22474](https://github.com/PrestaShop/PrestaShop/pull/22474): Simplify brand and brand address forms. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#21923](https://github.com/PrestaShop/PrestaShop/pull/21923): Simplified currency form. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#21623](https://github.com/PrestaShop/PrestaShop/pull/21623): Fix help text not displayed in form_row, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#22539](https://github.com/PrestaShop/PrestaShop/pull/22539): Show help message for PageNotFound for ajax calls, by [@matks](https://github.com/matks)
* [#21065](https://github.com/PrestaShop/PrestaShop/pull/21065): Add '-' to checkout's summary subtotal if it is discount type. Thank you [@oscc-es](https://github.com/oscc-es)


### Installer
* [#22696](https://github.com/PrestaShop/PrestaShop/pull/22696): IN: Fix inheritdoc annotation. Thank you [@Arman-Hosseini](https://github.com/Arman-Hosseini)


### Tests
* [#22734](https://github.com/PrestaShop/PrestaShop/pull/22734): Fix nightly develop - 08/01/2021 (successful update message in countries page). Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#22727](https://github.com/PrestaShop/PrestaShop/pull/22727): Disable GitHub Actions fail fast, by [@matks](https://github.com/matks)
* [#22702](https://github.com/PrestaShop/PrestaShop/pull/22702): Add /var/lib/php/sessions folder to github actions, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#22684](https://github.com/PrestaShop/PrestaShop/pull/22684): Add test 'Countries restrictions'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#22659](https://github.com/PrestaShop/PrestaShop/pull/22659): Add test 'Sort carriers by' in FO. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#22641](https://github.com/PrestaShop/PrestaShop/pull/22641): Behat github actions names swapped. Thank you [@PululuK](https://github.com/PululuK)
* [#22570](https://github.com/PrestaShop/PrestaShop/pull/22570): Migrate sanity tests to github actions, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#22548](https://github.com/PrestaShop/PrestaShop/pull/22548): Update phpstan to 0.12.64, by [@matks](https://github.com/matks)


## Code changes in the '1.7.7.x' branch


### Back office
* [#22579](https://github.com/PrestaShop/PrestaShop/pull/22579): Prevent HookDataCollector unserialize() to throw an exception, by [@atomiix](https://github.com/atomiix)


## Code changes in modules, themes & tools


### Prestashop UI Kit
* [#130](https://github.com/PrestaShop/prestashop-ui-kit/pull/130): Update readme version, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#129](https://github.com/PrestaShop/prestashop-ui-kit/pull/129): Release 1.2.1, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#128](https://github.com/PrestaShop/prestashop-ui-kit/pull/128): Change version number of the UIKit, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#127](https://github.com/PrestaShop/prestashop-ui-kit/pull/127): Change material icon to prod dependency, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#126](https://github.com/PrestaShop/prestashop-ui-kit/pull/126): Add missing dependencies and build assets, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#125](https://github.com/PrestaShop/prestashop-ui-kit/pull/125): Add floating button component, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#124](https://github.com/PrestaShop/prestashop-ui-kit/pull/124): Fix ps-tagger height, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#108](https://github.com/PrestaShop/prestashop-ui-kit/pull/108): Add storybook and stories, by [@NeOMakinG](https://github.com/NeOMakinG)


### Traces
* [#15](https://github.com/PrestaShop/traces/pull/15): Remove old author statement, by [@matks](https://github.com/matks)
* [#14](https://github.com/PrestaShop/traces/pull/14): Associated contributions to categories for each contributor, by [@Progi1984](https://github.com/Progi1984)


### Catalog statistics module
* [#18](https://github.com/PrestaShop/statscatalog/pull/18): Remove olds files. Thank you [@okom3pom](https://github.com/okom3pom)


### PrestaShop open source project
* [#53](https://github.com/PrestaShop/open-source/pull/53): Update channels list, by [@matks](https://github.com/matks)


### User documentation landing page
* [#11](https://github.com/PrestaShop/user-documentation-landing/pull/11): Merge develop on master, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#10](https://github.com/PrestaShop/user-documentation-landing/pull/10): chore(deps-dev): bump sass from 1.32.0 to 1.32.2. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#9](https://github.com/PrestaShop/user-documentation-landing/pull/9): chore(deps-dev): bump eslint-plugin-prettier from 3.3.0 to 3.3.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#8](https://github.com/PrestaShop/user-documentation-landing/pull/8): chore(deps-dev): bump eslint from 7.16.0 to 7.17.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#7](https://github.com/PrestaShop/user-documentation-landing/pull/7): fix(deps): bump core-js from 3.8.1 to 3.8.2. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#6](https://github.com/PrestaShop/user-documentation-landing/pull/6): chore(deps-dev): bump sass from 1.30.0 to 1.32.0. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Quality Assurance module
* [#14](https://github.com/PrestaShop/ps_qualityassurance/pull/14): Bump axios from 0.18.1 to 0.21.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation
* [#842](https://github.com/PrestaShop/docs/pull/842): Add headers_fixed option. Thank you [@PululuK](https://github.com/PululuK)


### Core Weekly Generator tool
* [#70](https://github.com/PrestaShop/core-weekly-generator/pull/70): Update test because of 2021, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#69](https://github.com/PrestaShop/core-weekly-generator/pull/69): Update stats, by [@PierreRambaud](https://github.com/PierreRambaud)


### Buy button lite module
* [#45](https://github.com/PrestaShop/ps_buybuttonlite/pull/45): Bump dot-prop from 4.2.0 to 4.2.1 in /app. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#44](https://github.com/PrestaShop/ps_buybuttonlite/pull/44): Bump axios from 0.18.0 to 0.21.1 in /app. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Nightly board
* [#51](https://github.com/PrestaShop/nightly-board/pull/51): Merge develop into master, by [@NeOMakinG](https://github.com/NeOMakinG)


### Stats Dashboard module
* [#19](https://github.com/PrestaShop/statsforecast/pull/19): Use unit_price_tax_excl instead of product_price for total. Thank you [@okom3pom](https://github.com/okom3pom)


### Banner module
* [#25](https://github.com/PrestaShop/ps_banner/pull/25): Update license and small changes. Thank you [@Arman-Hosseini](https://github.com/Arman-Hosseini)


### PrestaShop PHP Informations Tool
* [#20](https://github.com/PrestaShop/php-ps-info/pull/20): Improve a sentence. Thank you [@Arman-Hosseini](https://github.com/Arman-Hosseini)
* [#19](https://github.com/PrestaShop/php-ps-info/pull/19): Information about CGI, by [@PierreRambaud](https://github.com/PierreRambaud)


### Docker images
* [#251](https://github.com/PrestaShop/docker/pull/251): Update README.md. Thank you [@kaliel86](https://github.com/kaliel86)


### Customer reassurance block module
* [#102](https://github.com/PrestaShop/blockreassurance/pull/102): Bump webpack-cli from 4.3.0 to 4.3.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#299](https://github.com/PrestaShop/ps_facetedsearch/pull/299): Cast value when saving prices, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#297](https://github.com/PrestaShop/ps_facetedsearch/pull/297): Fix error message, by [@PierreRambaud](https://github.com/PierreRambaud)


### Sales and orders statistics module
* [#17](https://github.com/PrestaShop/statssales/pull/17): Use the good column for total  turnover. Thank you [@okom3pom](https://github.com/okom3pom)


### Best manufacturers statistics module
* [#10](https://github.com/PrestaShop/statsbestmanufacturers/pull/10): Use the good column for total. Thank you [@okom3pom](https://github.com/okom3pom)


### Best suppliers statistics module
* [#10](https://github.com/PrestaShop/statsbestsuppliers/pull/10): Use the good column for total. Thank you [@okom3pom](https://github.com/okom3pom)


### Customer account links module
* [#31](https://github.com/PrestaShop/ps_customeraccountlinks/pull/31): Release 3.1.1, by [@Progi1984](https://github.com/Progi1984)


### Cross-selling module
* [#18](https://github.com/PrestaShop/ps_crossselling/pull/18): Release 2.0.1, by [@Progi1984](https://github.com/Progi1984)


### Shopping cart module
* [#68](https://github.com/PrestaShop/ps_shoppingcart/pull/68): Release 2.0.4, by [@Progi1984](https://github.com/Progi1984)

## Where to start contributing?

What about displaying [the customer's company when B2B mode is enabled](https://github.com/PrestaShop/PrestaShop/issues/22643) in the Back-Office Order page? This is a feature suggestion reported last week by long-term contributor [@Hlavtox](https://github.com/Hlavtox), and it is one of our [good first issues](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

Good first issues are a list of all beginner-friendly improvements and bugs to fix in the project. You can read more about this label on [our article about it](https://build.prestashop.com/news/a-definition-of-the-good-first-issue-label).

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@jolelievre](https://github.com/jolelievre), [@NeOMakinG](https://github.com/NeOMakinG), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@matks](https://github.com/matks), [@okom3pom](https://github.com/okom3pom), [@zuk3975](https://github.com/zuk3975), [@boubkerbribri](https://github.com/boubkerbribri), [@dependabot[bot]](https://github.com/apps/dependabot), [@Arman-Hosseini](https://github.com/Arman-Hosseini), [@PierreRambaud](https://github.com/PierreRambaud), [@PululuK](https://github.com/PululuK), [@kaliel86](https://github.com/kaliel86), [@atomiix](https://github.com/atomiix), [@Progi1984](https://github.com/Progi1984), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@infiniweb](https://github.com/infiniweb), [@oscc-es](https://github.com/oscc-es)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
