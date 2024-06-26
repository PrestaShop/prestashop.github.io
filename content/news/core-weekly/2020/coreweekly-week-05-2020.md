---
layout: post
aliases: ["/news/coreweekly-week-05-2020"]
title:  "PrestaShop Core Weekly - Week 5 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-02-03
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 27th of January to Sunday 2nd of February 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

This week we [introduced a new tool](https://github.com/PrestaShop/PrestaShop/pull/16704) in our CI pipeline that we believe will make PrestaShop Javascript a lot easier to read and maintain: we now use [ESLint](https://eslint.org/) on the modern BO theme files. This popular tool will help us ensure the monitored code is written in a consistent way, following our [code conventions](https://devdocs.prestashop.com/1.7/development/coding-standards/#javascript-code-conventions). It also looks for possible bugs and issues in the code and reports them at build time.

## A quick update about PrestaShop's GitHub issues and pull requests:

- [56 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-01-27..2020-02-02) have been created in the project repositories;
- [65 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-01-27..2020-02-02), including [11 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-01-27..2020-02-02) on the core;
- [70 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-01-27..2020-02-02) in the project repositories;
- [67 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-01-27..2020-02-02), including [50 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-01-27..2020-02-02).


## Code changes in the 'develop' branch


### Core
* [#17446](https://github.com/PrestaShop/PrestaShop/pull/17446): Fix PHP CS FIXER - again, by [@matks](https://github.com/matks)
* [#17434](https://github.com/PrestaShop/PrestaShop/pull/17434): Update eslint config to check for hidden directories and files, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17419](https://github.com/PrestaShop/PrestaShop/pull/17419): Enable closure to be appended into LazyArray, by [@matks](https://github.com/matks)
* [#17389](https://github.com/PrestaShop/PrestaShop/pull/17389): Do not force the npm to be updated in the build.sh file, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17369](https://github.com/PrestaShop/PrestaShop/pull/17369): Update PULL_REQUEST_TEMPLATE.md, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#17391](https://github.com/PrestaShop/PrestaShop/pull/17391): Fix develop according to linter, by [@matks](https://github.com/matks)
* [#17135](https://github.com/PrestaShop/PrestaShop/pull/17135): Orders > Product : Display "Stock Location" column only if it is not empty, by [@Progi1984](https://github.com/Progi1984)
* [#16704](https://github.com/PrestaShop/PrestaShop/pull/16704): Implement eslint on new-theme directory, by [@PierreRambaud](https://github.com/PierreRambaud)


### Front office
* [#17402](https://github.com/PrestaShop/PrestaShop/pull/17402): Fix reversed product sorting. Thank you [@micka-fdz](https://github.com/micka-fdz)
* [#17294](https://github.com/PrestaShop/PrestaShop/pull/17294): Refresh cart summary when adding a voucher. Thank you [@idnovate](https://github.com/idnovate)
* [#17203](https://github.com/PrestaShop/PrestaShop/pull/17203): Add override hooks into Presenters, by [@matks](https://github.com/matks)


### Installer
* [#17340](https://github.com/PrestaShop/PrestaShop/pull/17340): Remove share buttons after install, by [@eternoendless](https://github.com/eternoendless)


### Web services
* [#17233](https://github.com/PrestaShop/PrestaShop/pull/17233): Fixed error when generating link_rewrite with API. Thank you [@Hherreros](https://github.com/Hherreros)
* [#16553](https://github.com/PrestaShop/PrestaShop/pull/16553): Avoids webservice to create duplicated customers with same email. Thank you [@BlackKerio](https://github.com/BlackKerio)
* [#16431](https://github.com/PrestaShop/PrestaShop/pull/16431): Webservice: Updating category position is changed. Thank you [@gerdus](https://github.com/gerdus)


### Merge
* [#17466](https://github.com/PrestaShop/PrestaShop/pull/17466): Merge 1.7.7.x into develop - 31/01/2020, by [@matks](https://github.com/matks)
* [#17387](https://github.com/PrestaShop/PrestaShop/pull/17387): Merge 1.7.7.x into develop - 28/01/2020, by [@matks](https://github.com/matks)


## Code changes in the '1.7.7.x' (for v1.7.7.0)


### Core
* [#17307](https://github.com/PrestaShop/PrestaShop/pull/17307): Do not force memory_limit in index_cli.php, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17288](https://github.com/PrestaShop/PrestaShop/pull/17288): Upgrade Symfony 3.4. Thank you [@mvorisek](https://github.com/mvorisek)


### Back office
* [#17413](https://github.com/PrestaShop/PrestaShop/pull/17413): Fixed warning about Maxmind DB in Geolocalization page, by [@Progi1984](https://github.com/Progi1984)
* [#17404](https://github.com/PrestaShop/PrestaShop/pull/17404): Fix order creation bug due to wrong computing precision, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17381](https://github.com/PrestaShop/PrestaShop/pull/17381): Show product customizations in the order BO page, by [@atomiix](https://github.com/atomiix)
* [#17377](https://github.com/PrestaShop/PrestaShop/pull/17377): Fix modal not being hidden sometimes, by [@atomiix](https://github.com/atomiix)
* [#17373](https://github.com/PrestaShop/PrestaShop/pull/17373): Fix currency localization, by [@atomiix](https://github.com/atomiix)
* [#17331](https://github.com/PrestaShop/PrestaShop/pull/17331): ProfileId accepts int and string as input type although int value is required, by [@jolelievre](https://github.com/jolelievre)
* [#17325](https://github.com/PrestaShop/PrestaShop/pull/17325): Fix cart re-rendering after customer not found in Order creation. Thank you [@zuk3975](https://github.com/zuk3975)
* [#17287](https://github.com/PrestaShop/PrestaShop/pull/17287): Enable bulk delete modal for Languages, Taxes, CMS Pages, CMS Cats, by [@matks](https://github.com/matks)
* [#17279](https://github.com/PrestaShop/PrestaShop/pull/17279): Fix monitoring page sorting, by [@matks](https://github.com/matks)
* [#17211](https://github.com/PrestaShop/PrestaShop/pull/17211): Reintegrate partial refund in the order view page, by [@jolelievre](https://github.com/jolelievre)
* [#17191](https://github.com/PrestaShop/PrestaShop/pull/17191): Translate exception message when customer not found on address creation form. Thank you [@sowbiba](https://github.com/sowbiba)
* [#17187](https://github.com/PrestaShop/PrestaShop/pull/17187): Delete migrated AdminRequestSqlController again - part 2, by [@matks](https://github.com/matks)
* [#17077](https://github.com/PrestaShop/PrestaShop/pull/17077): Remove unused legacy Customer Adresses files, by [@matks](https://github.com/matks)
* [#16722](https://github.com/PrestaShop/PrestaShop/pull/16722): "Orders > Products" : Display content of a pack, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#17410](https://github.com/PrestaShop/PrestaShop/pull/17410): Add FO hook displayFooterCategory, by [@matks](https://github.com/matks)
* [#17349](https://github.com/PrestaShop/PrestaShop/pull/17349): Classic Theme : enable some hooks for BlockReassurance, by [@Progi1984](https://github.com/Progi1984)
* [#17342](https://github.com/PrestaShop/PrestaShop/pull/17342): Make rewrite pattern non greedy. Thank you [@andromaque](https://github.com/andromaque)
* [#16863](https://github.com/PrestaShop/PrestaShop/pull/16863): Fix a bug where product images were not scrollable after product refresh, by [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#17443](https://github.com/PrestaShop/PrestaShop/pull/17443): Functional tests - Add delete modal for tests (taxes and cms pages), by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17418](https://github.com/PrestaShop/PrestaShop/pull/17418): Functional tests - adding additional information to tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17405](https://github.com/PrestaShop/PrestaShop/pull/17405): Functional tests - Improve test enableDisableAccentedURL, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17386](https://github.com/PrestaShop/PrestaShop/pull/17386): Functional tests - Enable unofficial currency, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17375](https://github.com/PrestaShop/PrestaShop/pull/17375): Functional tests - Enable disable accented url. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17372](https://github.com/PrestaShop/PrestaShop/pull/17372): Functional tests - Activate tests Profiles, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17213](https://github.com/PrestaShop/PrestaShop/pull/17213): Functional tests - Enable disable catalog mode from product settings page. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### TranslationTools Bundle
* [#72](https://github.com/PrestaShop/TranslationToolsBundle/pull/72): Remove Scrutinizer badge, by [@matks](https://github.com/matks)


### QA nightly results
* [#18](https://github.com/PrestaShop/QANightlyResults/pull/18): Update, by [@SimonGrn](https://github.com/SimonGrn)


### Changes in developer documentation
* [#452](https://github.com/PrestaShop/docs/pull/452): Add details about assets compiling in the localhost page, by [@jolelievre](https://github.com/jolelievre)


### Live Demo Devices
* [#12](https://github.com/PrestaShop/live-demo-devices/pull/12): Allow UI to be hidden with a no_ui param, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Open Source
* [#29](https://github.com/PrestaShop/open-source/pull/29): Added open source format, open source fonts, vector arrows. Thank you [@notklaatu](https://github.com/notklaatu)


### Social Follow module
* [#15](https://github.com/PrestaShop/ps_socialfollow/pull/15): Add linkedin. Thank you [@davideapvd](https://github.com/davideapvd)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@matks](https://github.com/matks), [@boubkerbribri](https://github.com/boubkerbribri), [@PierreRambaud](https://github.com/PierreRambaud), [@Progi1984](https://github.com/Progi1984), [@matthieu-rolland](https://github.com/matthieu-rolland), [@SimonGrn](https://github.com/SimonGrn), [@micka-fdz](https://github.com/micka-fdz), [@jolelievre](https://github.com/jolelievre), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@atomiix](https://github.com/atomiix), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@andromaque](https://github.com/andromaque), [@eternoendless](https://github.com/eternoendless), [@zuk3975](https://github.com/zuk3975), [@notklaatu](https://github.com/notklaatu), [@idnovate](https://github.com/idnovate), [@mvorisek](https://github.com/mvorisek), [@Hherreros](https://github.com/Hherreros), [@sowbiba](https://github.com/sowbiba), [@davideapvd](https://github.com/davideapvd), [@NeOMakinG](https://github.com/NeOMakinG), [@BlackKerio](https://github.com/BlackKerio), [@gerdus](https://github.com/gerdus)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
