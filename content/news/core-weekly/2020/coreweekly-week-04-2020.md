---
layout: post
aliases: ["/news/coreweekly-week-04-2020"]
title:  "PrestaShop Core Weekly - Week 4 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-01-27
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 20th to Sunday 26th of January 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [81 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-01-20..2020-01-26) have been created in the project repositories;
- [90 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-01-20..2020-01-26), including [10 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-01-20..2020-01-26) on the core;
- [76 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-01-20..2020-01-26) in the project repositories;
- [109 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-01-20..2020-01-26), including [40 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-01-20..2020-01-26).


## Code changes in the 'develop' branch


### Core
* [#17330](https://github.com/PrestaShop/PrestaShop/pull/17330): Add make assets while creating release, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17284](https://github.com/PrestaShop/PrestaShop/pull/17284): Add new badges to README, by [@matks](https://github.com/matks)
* [#16670](https://github.com/PrestaShop/PrestaShop/pull/16670): Remove generated assets, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#17257](https://github.com/PrestaShop/PrestaShop/pull/17257): Fix some links with http and no https, by [@matks](https://github.com/matks)
* [#17043](https://github.com/PrestaShop/PrestaShop/pull/17043): Display symbols in form in case of error, remove DefaultLanguage constraint, by [@jolelievre](https://github.com/jolelievre)
* [#17018](https://github.com/PrestaShop/PrestaShop/pull/17018): Cover Category CommandHandlers and QueryHandlers by behat tests  - Part 2. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)


### Front office
* [#16965](https://github.com/PrestaShop/PrestaShop/pull/16965): Adjusting quantity on product page if empty or under min qty, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#16934](https://github.com/PrestaShop/PrestaShop/pull/16934): Fixing submenu not showing on classic theme, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#16620](https://github.com/PrestaShop/PrestaShop/pull/16620): Prevent order controller from validating all guest addresses. Thank you [@slri](https://github.com/slri)


### Installer
* [#17255](https://github.com/PrestaShop/PrestaShop/pull/17255): Clean a bit files in install folder, by [@matks](https://github.com/matks)


### Web services
* [#16697](https://github.com/PrestaShop/PrestaShop/pull/16697): Fix setWsPositionInCategory and setWsCategories, the product position in the categories changes. Thank you [@BlackKerio](https://github.com/BlackKerio)


### Tests
* [#17328](https://github.com/PrestaShop/PrestaShop/pull/17328): Remove PHP GitHub Actions and use PrettyCI only, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17319](https://github.com/PrestaShop/PrestaShop/pull/17319): Build assets for nightly, by [@PierreRambaud](https://github.com/PierreRambaud)


### Merge
* [#17334](https://github.com/PrestaShop/PrestaShop/pull/17334): Merge 1.7.7.x into develop - 23/01/2020, by [@matks](https://github.com/matks)
* [#17304](https://github.com/PrestaShop/PrestaShop/pull/17304): Merge 1.7.7.x into develop - 22/01/2020, by [@matks](https://github.com/matks)


## Code changes in the '1.7.7.x' branch (for v1.7.7.0)


### Core
* [#17254](https://github.com/PrestaShop/PrestaShop/pull/17254): Fix deleted products not being displayed in orders, by [@atomiix](https://github.com/atomiix)
* [#17246](https://github.com/PrestaShop/PrestaShop/pull/17246): Update Cs Fixer configuration, by [@PierreRambaud](https://github.com/PierreRambaud)


### Back office
* [#17291](https://github.com/PrestaShop/PrestaShop/pull/17291): Display symbols in form in case of error, remove DefaultLanguage constraint, by [@jolelievre](https://github.com/jolelievre)
* [#17286](https://github.com/PrestaShop/PrestaShop/pull/17286): Enable bulk delete modal for Suppliers, Brands, Brand adresses, by [@matks](https://github.com/matks)
* [#17232](https://github.com/PrestaShop/PrestaShop/pull/17232):  Rebuild Create an Order page assets, by [@matks](https://github.com/matks)
* [#17180](https://github.com/PrestaShop/PrestaShop/pull/17180): Fix suppliers form description to be optional. Thank you [@zuk3975](https://github.com/zuk3975)


### Tests
* [#17329](https://github.com/PrestaShop/PrestaShop/pull/17329): Functional tests - Fix delete with bulk actions (brand, brand address, supplier) tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17301](https://github.com/PrestaShop/PrestaShop/pull/17301): Functional tests - Enable/Disable friendly url. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17281](https://github.com/PrestaShop/PrestaShop/pull/17281): Functional tests - Addresses bulk actions. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17272](https://github.com/PrestaShop/PrestaShop/pull/17272): Functional tests - Limit the legal free text length to 50. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17216](https://github.com/PrestaShop/PrestaShop/pull/17216): Functional tests - CRUD customer address. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


### Merge
* [#17267](https://github.com/PrestaShop/PrestaShop/pull/17267): Merge 1.7.6.x into 1.7.7.x - 21/01/2020, by [@Progi1984](https://github.com/Progi1984)


## Code changes in the '1.7.6.x' branch (for v1.7.6.3)


### Core
* [#17306](https://github.com/PrestaShop/PrestaShop/pull/17306): Do not force memory_limit in index_cli.php, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17251](https://github.com/PrestaShop/PrestaShop/pull/17251): Changelog 1.7.6.3, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#17248](https://github.com/PrestaShop/PrestaShop/pull/17248): Added RTL Style for Classic Theme, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### Docker images
* [#205](https://github.com/PrestaShop/docker/pull/205): No memory limit on install, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#202](https://github.com/PrestaShop/docker/pull/202): Modify maintainer email, by [@matks](https://github.com/matks)
* [#200](https://github.com/PrestaShop/docker/pull/200): Release 1.7.6.3, by [@Progi1984](https://github.com/Progi1984)


### Prestashop UI Kit
* [#85](https://github.com/PrestaShop/prestashop-ui-kit/pull/85): Adding search input group component, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#77](https://github.com/PrestaShop/prestashop-ui-kit/pull/77): Improve radio buttons, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#74](https://github.com/PrestaShop/prestashop-ui-kit/pull/74): Dropdowns with search improvement, by [@NeOMakinG](https://github.com/NeOMakinG)


### Changes in developer documentation
* [#418](https://github.com/PrestaShop/docs/pull/418): Add more details for the installation process, by [@PierreRambaud](https://github.com/PierreRambaud)


### MBO module
* [#94](https://github.com/PrestaShop/ps_mbo/pull/94): Remove old 1.6 behaviors, by [@LouiseBonnard](https://github.com/LouiseBonnard)


### GDPR module
* [#60](https://github.com/PrestaShop/psgdpr/pull/60): Update customerPersonalData.tpl. Thank you [@voxTeam](https://github.com/voxTeam)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@matks](https://github.com/matks), [@PierreRambaud](https://github.com/PierreRambaud), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@jolelievre](https://github.com/jolelievre), [@Progi1984](https://github.com/Progi1984), [@atomiix](https://github.com/atomiix), [@zuk3975](https://github.com/zuk3975), [@tdavidsonas88](https://github.com/tdavidsonas88), [@NeOMakinG](https://github.com/NeOMakinG), [@LouiseBonnard](https://github.com/LouiseBonnard), [@BlackKerio](https://github.com/BlackKerio), [@slri](https://github.com/slri), [@voxTeam](https://github.com/voxTeam)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

