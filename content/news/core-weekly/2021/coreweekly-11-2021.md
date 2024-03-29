---
layout: post
aliases: ["/news/coreweekly-11-2021"]
title:  "PrestaShop Core Weekly - Week 11 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-03-22 16:00:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 15th to Sunday 21th of March 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## Releases

* [Prestashop-ui-kit](https://github.com/PrestaShop/prestashop-ui-kit): [v1.2.2](https://github.com/PrestaShop/prestashop-ui-kit/releases/tag/1.2.2)
* [ps_facetedsearch](https://github.com/PrestaShop/ps_facetedsearch) module: [v3.7.1](https://github.com/PrestaShop/ps_facetedsearch/releases/tag/v3.7.1)
* [ps_emailalerts](https://github.com/PrestaShop/ps_emailalerts) module: [v2.2.2](https://github.com/PrestaShop/ps_emailalerts/releases/tag/v2.2.2)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [61 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-03-15..2021-03-21) have been created in the project repositories;
- [55 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-03-15..2021-03-21), including [17 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-03-15..2021-03-21) on the core;
- [69 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-03-15..2021-03-21) in the project repositories;
- [67 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-03-15..2021-03-21), including [59 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-03-15..2021-03-21).



## Code changes in the 'develop' branch


### Core
* [#23650](https://github.com/PrestaShop/PrestaShop/pull/23650): Introduce Experimental Feature data model, by [@matks](https://github.com/matks)


### Back office
* [#23678](https://github.com/PrestaShop/PrestaShop/pull/23678): Update the version of the UIKit to 1.2.2, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#23668](https://github.com/PrestaShop/PrestaShop/pull/23668): Product form adaptation, by [@jolelievre](https://github.com/jolelievre)
* [#23661](https://github.com/PrestaShop/PrestaShop/pull/23661): Update and delete product image, by [@jolelievre](https://github.com/jolelievre)
* [#23649](https://github.com/PrestaShop/PrestaShop/pull/23649): Clean all dependencies between PrestaShopBundle and Core, by [@sowbiba](https://github.com/sowbiba)
* [#23630](https://github.com/PrestaShop/PrestaShop/pull/23630): Fix "Trying to access array offset on value of type ..." error for legacy creation forms. Thank you [@ks129](https://github.com/ks129)
* [#23621](https://github.com/PrestaShop/PrestaShop/pull/23621): Restructure translation components, by [@sowbiba](https://github.com/sowbiba)
* [#23616](https://github.com/PrestaShop/PrestaShop/pull/23616): Add the Image component on new edit product page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22942](https://github.com/PrestaShop/PrestaShop/pull/22942): Add html validation to radio buttons on category tree, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#22476](https://github.com/PrestaShop/PrestaShop/pull/22476): Simplify cms forms. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)
* [#20737](https://github.com/PrestaShop/PrestaShop/pull/20737): Migrate carriers listing. Thank you [@ks129](https://github.com/ks129)


### Front office
* [#8738](https://github.com/PrestaShop/PrestaShop/pull/8738): FO Don't display shipping method for virtual cart. Thank you [@timactive](https://github.com/timactive)


## Code changes in the '1.7.7.x' branch


### Back office
* [#23694](https://github.com/PrestaShop/PrestaShop/pull/23694): Do not allow empty payment_method, by [@atomiix](https://github.com/atomiix)
* [#23601](https://github.com/PrestaShop/PrestaShop/pull/23601): Take customization into account when updating quantity, by [@atomiix](https://github.com/atomiix)
* [#23584](https://github.com/PrestaShop/PrestaShop/pull/23584): Handle searchProduct method when in another shop context, by [@atomiix](https://github.com/atomiix)
* [#22677](https://github.com/PrestaShop/PrestaShop/pull/22677): Use context langId if order langId not available, by [@atomiix](https://github.com/atomiix)


### Tests
* [#23693](https://github.com/PrestaShop/PrestaShop/pull/23693): Add test 'Send message from contact us page with customer logged in', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#23679](https://github.com/PrestaShop/PrestaShop/pull/23679): Add test 'Check mailto link on contact us page', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#23674](https://github.com/PrestaShop/PrestaShop/pull/23674): Change functions and add more comments on install page , by [@boubkerbribri](https://github.com/boubkerbribri)
* [#23627](https://github.com/PrestaShop/PrestaShop/pull/23627): Add test - Search product and check autocomplete list on FO. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Faceted search module
* [#378](https://github.com/PrestaShop/ps_facetedsearch/pull/378): Use build release action only when a push is done on the master branch, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#377](https://github.com/PrestaShop/ps_facetedsearch/pull/377): Bump webpack from 5.26.2 to 5.26.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#376](https://github.com/PrestaShop/ps_facetedsearch/pull/376): Bump webpack from 5.26.0 to 5.26.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#375](https://github.com/PrestaShop/ps_facetedsearch/pull/375): Bump css-loader from 5.1.2 to 5.1.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#374](https://github.com/PrestaShop/ps_facetedsearch/pull/374): Bump webpack from 5.25.1 to 5.26.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#373](https://github.com/PrestaShop/ps_facetedsearch/pull/373): Bump mocha from 8.3.1 to 8.3.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#372](https://github.com/PrestaShop/ps_facetedsearch/pull/372): Bump webpack from 5.24.4 to 5.25.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#371](https://github.com/PrestaShop/ps_facetedsearch/pull/371): Bump chai from 4.3.3 to 4.3.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#369](https://github.com/PrestaShop/ps_facetedsearch/pull/369): Release 3.7.1, by [@PierreRambaud](https://github.com/PierreRambaud)


### eslint configuration
* [#5](https://github.com/PrestaShop/eslint-config/pull/5): Migrated from Travis CI to Github Actions, by [@Progi1984](https://github.com/Progi1984)


### Decimal
* [#16](https://github.com/PrestaShop/decimal/pull/16): Remove the secret COVERALLS_REPO_TOKEN, by [@Progi1984](https://github.com/Progi1984)


### circuit-breaker
* [#40](https://github.com/PrestaShop/circuit-breaker/pull/40): Remove the secret COVERALLS_REPO_TOKEN, by [@Progi1984](https://github.com/Progi1984)


### TranslationTools Bundle
* [#85](https://github.com/PrestaShop/TranslationToolsBundle/pull/85): Remove the secret COVERALLS_REPO_TOKEN, by [@Progi1984](https://github.com/Progi1984)


### Auto Upgrade module
* [#390](https://github.com/PrestaShop/autoupgrade/pull/390): Add branch to filename to push with nightly api, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#389](https://github.com/PrestaShop/autoupgrade/pull/389): Fix filename for nightly cli to push on GCP, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#388](https://github.com/PrestaShop/autoupgrade/pull/388): Don't run e2e workflow on push, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#387](https://github.com/PrestaShop/autoupgrade/pull/387): Add Nightly upgrades using User Interface, by [@boubkerbribri](https://github.com/boubkerbribri)


### Changes in developer documentation
* [#895](https://github.com/PrestaShop/docs/pull/895): Fix prestashop/prestashop-webservice-lib name. Thank you [@industria01](https://github.com/industria01)
* [#894](https://github.com/PrestaShop/docs/pull/894): Add FAQ question for exchange rates, by [@matks](https://github.com/matks)
* [#892](https://github.com/PrestaShop/docs/pull/892): Remove Pcleaner, Add installation without data. Thank you [@okom3pom](https://github.com/okom3pom)
* [#890](https://github.com/PrestaShop/docs/pull/890): Improve a few sentences in Database page, by [@matks](https://github.com/matks)
* [#889](https://github.com/PrestaShop/docs/pull/889): Update cache folder. Thank you [@okom3pom](https://github.com/okom3pom)
* [#886](https://github.com/PrestaShop/docs/pull/886): Improve documentation about theme.yml. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#884](https://github.com/PrestaShop/docs/pull/884): Gets the number of rows. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#883](https://github.com/PrestaShop/docs/pull/883): Add tip to translate core wordings on documentation. Thank you [@micka-fdz](https://github.com/micka-fdz)


### Customer reassurance block module
* [#151](https://github.com/PrestaShop/blockreassurance/pull/151): Bump webpack from 5.26.2 to 5.26.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#150](https://github.com/PrestaShop/blockreassurance/pull/150): Bump webpack from 5.26.0 to 5.26.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#149](https://github.com/PrestaShop/blockreassurance/pull/149): Bump css-loader from 5.1.2 to 5.1.3. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#148](https://github.com/PrestaShop/blockreassurance/pull/148): Bump webpack from 5.25.1 to 5.26.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#147](https://github.com/PrestaShop/blockreassurance/pull/147): Bump webpack from 5.24.4 to 5.25.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestonBot
* [#116](https://github.com/PrestaShop/prestonbot/pull/116): Change PR diff url hash algorithm, by [@atomiix](https://github.com/atomiix)


### Prestashop UI Kit
* [#144](https://github.com/PrestaShop/prestashop-ui-kit/pull/144): Release 1.2.2, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#143](https://github.com/PrestaShop/prestashop-ui-kit/pull/143): Change version number to 1.2.2, by [@NeOMakinG](https://github.com/NeOMakinG)


### PrestaShop Virtual Machine
* [#8](https://github.com/PrestaShop/vagrant/pull/8): Fix mailcatcher & git config, by [@atomiix](https://github.com/atomiix)


### PrestaShop PHPStan extension
* [#22](https://github.com/PrestaShop/phpstan-prestashop/pull/22): Introduce acceptance tests with phpstan PHAR, by [@matks](https://github.com/matks)


### PrestaShop Specifications
* [#212](https://github.com/PrestaShop/prestashop-specs/pull/212): Specify translations export feature, by [@eternoendless](https://github.com/eternoendless)


### Core Weekly Generator tool
* [#78](https://github.com/PrestaShop/core-weekly-generator/pull/78): Add Julie V in team, by [@matks](https://github.com/matks)


### User documentation landing page
* [#39](https://github.com/PrestaShop/user-documentation-landing/pull/39): chore(deps-dev): bump eslint from 7.21.0 to 7.22.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Email Alerts module
* [#79](https://github.com/PrestaShop/ps_emailalerts/pull/79): Release 2.2.2, by [@PierreRambaud](https://github.com/PierreRambaud)


## Where to start contributing?

What about [adding the missing discount label in Front Office for products with attributes](https://github.com/PrestaShop/PrestaShop/issues/15463)? This is a bug report submitted 1 year ago, and it is one of our [good first issues](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

Good first issues are a list of all beginner-friendly improvements and bugs to fix in the project. You can read more about this label on [our article about it](https://build.prestashop.com/news/a-definition-of-the-good-first-issue-label).

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@PierreRambaud](https://github.com/PierreRambaud), [@Progi1984](https://github.com/Progi1984), [@atomiix](https://github.com/atomiix), [@boubkerbribri](https://github.com/boubkerbribri), [@industria01](https://github.com/industria01), [@dependabot[bot]](https://github.com/apps/dependabot), [@matks](https://github.com/matks), [@NeOMakinG](https://github.com/NeOMakinG), [@jolelievre](https://github.com/jolelievre), [@eternoendless](https://github.com/eternoendless), [@okom3pom](https://github.com/okom3pom), [@sowbiba](https://github.com/sowbiba), [@ks129](https://github.com/ks129), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@micka-fdz](https://github.com/micka-fdz), [@jf-viguier](https://github.com/jf-viguier), [@JevgenijVisockij](https://github.com/JevgenijVisockij), [@timactive](https://github.com/timactive)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
