---
layout: post
aliases: ["/news/coreweekly-50-2021"]
title:  "PrestaShop Core Weekly - Week 50 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-12-20
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 13th to Sunday 19th of December 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear Developers,

[Pablo Borowicz](https://github.com/eternoendless) [published what we expect for the future](https://build.prestashop.com/news/prestashop-beyond-1-7/). It's very interesting to read, and we would be very happy to read your feedback in the comments, or on [Slack](https://www.prestashop-project.org/slack/).

As you can guess, activity on prestashop is going to slow down in this holiday season and can be expected to resume back to normal in January.


## Releases

* [Pagesnotfound](https://github.com/PrestaShop/pagesnotfound) module: [v2.0.1](https://github.com/PrestaShop/pagesnotfound/releases/tag/v2.0.1)
* [Ps_featuredproducts](https://github.com/PrestaShop/ps_featuredproducts) module: [v2.1.2](https://github.com/PrestaShop/ps_featuredproducts/releases/tag/v2.1.2)
* [Ps_shoppingcart](https://github.com/PrestaShop/ps_shoppingcart) module: [v2.0.5](https://github.com/PrestaShop/ps_shoppingcart/releases/tag/v2.0.5)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [46 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-12-13..2021-12-19) have been created in the project repositories;
- [56 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-12-13..2021-12-19), including [8 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-12-13..2021-12-19) on the core;
- [87 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-12-13..2021-12-19) in the project repositories;
- [115 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-12-13..2021-12-19), including [63 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-12-13..2021-12-19).
        


## Code changes in the 'develop' branch


### Core
* [#26981](https://github.com/PrestaShop/PrestaShop/pull/26981): Remove deprecated constant `_PS_HOST_MODE_`, by [@Progi1984](https://github.com/Progi1984)
* [#26952](https://github.com/PrestaShop/PrestaShop/pull/26952): Remove duplicate call hook actionAdminProductsListingFieldsModifier. Thank you [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul)
* [#26914](https://github.com/PrestaShop/PrestaShop/pull/26914): Remove deprecated methods into Helper models . Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#26864](https://github.com/PrestaShop/PrestaShop/pull/26864): PHPStan (Level 2) on controllers/, by [@Progi1984](https://github.com/Progi1984)
* [#26183](https://github.com/PrestaShop/PrestaShop/pull/26183): Console command for config. Thank you [@tswfi](https://github.com/tswfi)


### Back office
* [#27015](https://github.com/PrestaShop/PrestaShop/pull/27015): Remove dead code about Dashboard Push, by [@Progi1984](https://github.com/Progi1984)
* [#27014](https://github.com/PrestaShop/PrestaShop/pull/27014): Remove addons call, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#26958](https://github.com/PrestaShop/PrestaShop/pull/26958): Remove dead code. JS is trigger, but DOM elements are already deleted.. Thank you [@intraordinaire](https://github.com/intraordinaire)
* [#26689](https://github.com/PrestaShop/PrestaShop/pull/26689): Optimize cart list in customer detail (a bit). Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#26669](https://github.com/PrestaShop/PrestaShop/pull/26669): Refactor and simplify rendering of KPI row. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#25956](https://github.com/PrestaShop/PrestaShop/pull/25956): Refactor on AbstractMultistoreConfiguration class + unit tests + integration tests, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#25595](https://github.com/PrestaShop/PrestaShop/pull/25595): Refacto some sensible selectors and add some missing selectors to classic selector map, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#25236](https://github.com/PrestaShop/PrestaShop/pull/25236): Migrate translations page to TypeScript, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24403](https://github.com/PrestaShop/PrestaShop/pull/24403): When creating category, select all groups by default. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#24077](https://github.com/PrestaShop/PrestaShop/pull/24077): Adding html column. Thank you [@JevgenijVisockij](https://github.com/JevgenijVisockij)


### Front office
* [#25866](https://github.com/PrestaShop/PrestaShop/pull/25866): Get unique product ids at specific prices. Thank you [@kusflo](https://github.com/kusflo)


### Tests
* [#26959](https://github.com/PrestaShop/PrestaShop/pull/26959): Upgrade nodemailer tests/UI folder, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.8.x' branch


### Core
* [#26987](https://github.com/PrestaShop/PrestaShop/pull/26987): Fix label_attr check in form_rest macro, by [@atomiix](https://github.com/atomiix)


### Back office
* [#26590](https://github.com/PrestaShop/PrestaShop/pull/26590): Fixed error message when the order language is different of the employee language, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#26887](https://github.com/PrestaShop/PrestaShop/pull/26887): Fixed the Newsletter block overlap on Customer Reassurance block. Thank you [@hibatallahAouadni](https://github.com/hibatallahAouadni)
* [#26703](https://github.com/PrestaShop/PrestaShop/pull/26703): Allow vertical scroll on product images, by [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#26942](https://github.com/PrestaShop/PrestaShop/pull/26942): Fix tests 'Open help bar' on stocks page, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in modules, themes & tools


### PrestaShop contributors website
* [#61](https://github.com/PrestaShop/TopContributors/pull/61): Use flex grow to handle the height of the details in card. Thank you [@intraordinaire](https://github.com/intraordinaire)


### Changes in developer documentation sources
* [#1253](https://github.com/PrestaShop/docs/pull/1253): Refer to versions table of nodejs inside getting started, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#1250](https://github.com/PrestaShop/docs/pull/1250): Remove actionValidateOrderAfter from hooks listing. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1249](https://github.com/PrestaShop/docs/pull/1249): Improve actionValidateOrderAfter doc, adding missing var and since info. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#1248](https://github.com/PrestaShop/docs/pull/1248): Fix "chmod" syntax in installation DevDocs. Thank you [@rmilecki](https://github.com/rmilecki)
* [#1246](https://github.com/PrestaShop/docs/pull/1246): Backport PR 1097 and remove some 1.7.x mentions, by [@matks](https://github.com/matks)
* [#1244](https://github.com/PrestaShop/docs/pull/1244): Migrate tests-legacy directory to tests directory, by [@Progi1984](https://github.com/Progi1984)
* [#1189](https://github.com/PrestaShop/docs/pull/1189): Add deprecated tag + add actionGetProductPropertiesAfterUnitPrice hook. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### New Front-office theme
* [#140](https://github.com/PrestaShop/theme-refacto/pull/140): Fix some title size and wording of stores, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#139](https://github.com/PrestaShop/theme-refacto/pull/139): Add accordion to store hours, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#138](https://github.com/PrestaShop/theme-refacto/pull/138): Adjust sitemap page, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#137](https://github.com/PrestaShop/theme-refacto/pull/137): Adjust block newsletter and refacto to BEM, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#136](https://github.com/PrestaShop/theme-refacto/pull/136): Contact page and remove floats from the project, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#135](https://github.com/PrestaShop/theme-refacto/pull/135): Refacto product template classes, by [@NeOMakinG](https://github.com/NeOMakinG)


### PrestaShop Specifications
* [#282](https://github.com/PrestaShop/prestashop-specs/pull/282): Add files via upload. Thank you [@Saimis777](https://github.com/Saimis777)
* [#278](https://github.com/PrestaShop/prestashop-specs/pull/278): Add instructions to run locally inside README, by [@matks](https://github.com/matks)
* [#265](https://github.com/PrestaShop/prestashop-specs/pull/265): SimonasB88 - Images for specs. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#263](https://github.com/PrestaShop/prestashop-specs/pull/263): Create specs for stores pages. Thank you [@Saimis777](https://github.com/Saimis777)


### User documentation landing page
* [#169](https://github.com/PrestaShop/user-documentation-landing/pull/169): fix(deps): bump core-js from 3.19.3 to 3.20.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#168](https://github.com/PrestaShop/user-documentation-landing/pull/168): chore(deps-dev): bump babel-jest from 27.4.4 to 27.4.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#167](https://github.com/PrestaShop/user-documentation-landing/pull/167): chore(deps-dev): bump sass from 1.44.0 to 1.45.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#166](https://github.com/PrestaShop/user-documentation-landing/pull/166): chore(deps-dev): bump babel-jest from 27.4.2 to 27.4.4. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Shopping cart module
* [#82](https://github.com/PrestaShop/ps_shoppingcart/pull/82): Release 2.0.5, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#81](https://github.com/PrestaShop/ps_shoppingcart/pull/81): Bump to 2.0.5, by [@PierreRambaud](https://github.com/PierreRambaud)


### Pages not found
* [#17](https://github.com/PrestaShop/pagesnotfound/pull/17): Release 2.0.1, by [@PierreRambaud](https://github.com/PierreRambaud)


### Featured products module
* [#44](https://github.com/PrestaShop/ps_featuredproducts/pull/44): Release 2.1.2, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#43](https://github.com/PrestaShop/ps_featuredproducts/pull/43): Remove deprecated hooks and update to 2.1.2, by [@PierreRambaud](https://github.com/PierreRambaud)


### Customer reassurance block module
* [#327](https://github.com/PrestaShop/blockreassurance/pull/327): Bump @babel/core from 7.16.0 to 7.16.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#326](https://github.com/PrestaShop/blockreassurance/pull/326): Bump @babel/eslint-parser from 7.16.3 to 7.16.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#301](https://github.com/PrestaShop/blockreassurance/pull/301): Remove addons links from the module. Thank you [@okom3pom](https://github.com/okom3pom)


### Faceted search module
* [#574](https://github.com/PrestaShop/ps_facetedsearch/pull/574): Bump @babel/core from 7.16.0 to 7.16.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#573](https://github.com/PrestaShop/ps_facetedsearch/pull/573): Bump @babel/eslint-parser from 7.16.3 to 7.16.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#572](https://github.com/PrestaShop/ps_facetedsearch/pull/572): Bump @babel/node from 7.16.0 to 7.16.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#571](https://github.com/PrestaShop/ps_facetedsearch/pull/571): Bump @babel/preset-env from 7.16.4 to 7.16.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#570](https://github.com/PrestaShop/ps_facetedsearch/pull/570): Bump @babel/register from 7.16.0 to 7.16.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Issues Bot
* [#32](https://github.com/PrestaShop/issuebot/pull/32): Update workflow, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Product Comments module
* [#121](https://github.com/PrestaShop/productcomments/pull/121): Fix js error since displayGDPRConsent. Thank you [@okom3pom](https://github.com/okom3pom)


### Theme customization module
* [#46](https://github.com/PrestaShop/ps_themecusto/pull/46): Bump prestashop/php-dev-tools from 3.16.0 to 3.16.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Auto Upgrade module
* [#435](https://github.com/PrestaShop/autoupgrade/pull/435): Update short description length config if needed, by [@kpodemski](https://github.com/kpodemski)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Progi1984](https://github.com/Progi1984), [@intraordinaire](https://github.com/intraordinaire), [@NeOMakinG](https://github.com/NeOMakinG), [@Saimis777](https://github.com/Saimis777), [@dependabot[bot]](https://github.com/apps/dependabot), [@PierreRambaud](https://github.com/PierreRambaud), [@atomiix](https://github.com/atomiix), [@matks](https://github.com/matks), [@PrestaEdit](https://github.com/PrestaEdit), [@boubkerbribri](https://github.com/boubkerbribri), [@rmilecki](https://github.com/rmilecki), [@Amit-Kumar-Tiwari-Webkul](https://github.com/Amit-Kumar-Tiwari-Webkul), [@matthieu-rolland](https://github.com/matthieu-rolland), [@hibatallahAouadni](https://github.com/hibatallahAouadni), [@okom3pom](https://github.com/okom3pom), [@Hlavtox](https://github.com/Hlavtox), [@SimonasB88](https://github.com/SimonasB88), [@kpodemski](https://github.com/kpodemski), [@tswfi](https://github.com/tswfi), [@kusflo](https://github.com/kusflo), [@jf-viguier](https://github.com/jf-viguier), [@JevgenijVisockij](https://github.com/JevgenijVisockij)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

