---
layout: post
aliases: ["/news/coreweekly-23-2021"]
title:  "PrestaShop Core Weekly - Week 23 of 2021"
subtitle: "An inside look at the PrestaShop codebase"
date:   2021-06-15
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 31th of May to Sunday 6th of June 2021.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

[PrestaShop 1.7.7.5](https://build.prestashop.com/news/prestashop-1-7-7-5-maintenance-release/) was released on June 14, 2021. This maintenance release fixes 19 bugs reported on previous 1.7.7 versions.

We also celebrate two other notable releases from past week: [Linklist](https://github.com/PrestaShop/ps_linklist) module v5.0.0 and... [PHP 8.1 Alpha 1](https://www.php.net/archive/2021.php#2021-06-10-1)!

By the way, [PrestaShop 1.7.8.0 beta was released 2 weeks ago now](https://build.prestashop.com/news/prestashop-1-7-8-0-beta-release/). Have you tested it yet? Remember that only two weeks are left in the beta phase. The next step is the Release Candidate (RC) – any bugs found at RC stage will delay the final release date. Now is the best time to look for issues!


## Releases

* [Productcomments](https://github.com/PrestaShop/productcomments) module: [v4.2.2](https://github.com/PrestaShop/productcomments/releases/tag/v4.2.2)
* [Welcome](https://github.com/PrestaShop/welcome) module: [v6.0.5](https://github.com/PrestaShop/welcome/releases/tag/v6.0.5)
* [Linklist](https://github.com/PrestaShop/ps_linklist) module: [v5.0.0](https://github.com/PrestaShop/ps_linklist/releases/tag/v5.0.0)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [62 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2021-06-07..2021-06-13) have been created in the project repositories;
- [48 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2021-06-07..2021-06-13), including [25 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2021-06-07..2021-06-13) on the core;
- [102 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2021-06-07..2021-06-13) in the project repositories;
- [94 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2021-06-07..2021-06-13), including [81 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2021-06-07..2021-06-13).



## Code changes in the 'develop' branch


### Core
* [#24854](https://github.com/PrestaShop/PrestaShop/pull/24854): Fix typo in comments of class Mail. Thank you [@comxd](https://github.com/comxd)
* [#24834](https://github.com/PrestaShop/PrestaShop/pull/24834): Check if regeneration is wanted before checking filesystem. Thank you [@RomainMazB](https://github.com/RomainMazB)
* [#24634](https://github.com/PrestaShop/PrestaShop/pull/24634): Remove `_PS_SMARTY_DIR_` pointing to no longer existing directory. Thank you [@mvorisek](https://github.com/mvorisek)


### Back office
* [#24835](https://github.com/PrestaShop/PrestaShop/pull/24835): Fix customers delete bulk selector map, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24803](https://github.com/PrestaShop/PrestaShop/pull/24803): Add "chosen" to filter available fields on Import page. Thank you [@kpodemski](https://github.com/kpodemski)
* [#24796](https://github.com/PrestaShop/PrestaShop/pull/24796): Checking for url existence in possible new default shop. Thank you [@kpodemski](https://github.com/kpodemski)
* [#24595](https://github.com/PrestaShop/PrestaShop/pull/24595): Wrong mimetype for svg file. Thank you [@Shagshag](https://github.com/Shagshag)
* [#24398](https://github.com/PrestaShop/PrestaShop/pull/24398): Partially restore feature search in Back Office, by [@eternoendless](https://github.com/eternoendless)


### Front office
* [#24846](https://github.com/PrestaShop/PrestaShop/pull/24846): Remove extracted comments from webpack config of core JavaScript, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24792](https://github.com/PrestaShop/PrestaShop/pull/24792):  If the product has no combinations then the `specific_references` must be filled in. Thank you [@levyn](https://github.com/levyn)
* [#24738](https://github.com/PrestaShop/PrestaShop/pull/24738): Add a hook 'actionValidateOrderAfter', This hook is called after the complete creation of an order. Thank you [@olecorre](https://github.com/olecorre)
* [#24730](https://github.com/PrestaShop/PrestaShop/pull/24730): Add product page link and move download in order details. Thank you [@marekjedrzejewski](https://github.com/marekjedrzejewski)


## Code changes in the '1.7.8.x' branch


### Core
* [#24885](https://github.com/PrestaShop/PrestaShop/pull/24885): Register new hooks for 1.7.8.0, by [@matks](https://github.com/matks)
* [#24829](https://github.com/PrestaShop/PrestaShop/pull/24829): Show formatted Load time in Profiler. Thank you [@kpodemski](https://github.com/kpodemski)
* [#24821](https://github.com/PrestaShop/PrestaShop/pull/24821): Handle CustomerAddressGridDefinitionFactory in CLI context, by [@atomiix](https://github.com/atomiix)
* [#24682](https://github.com/PrestaShop/PrestaShop/pull/24682): Add missing Grid and Router JS components. Thank you [@kpodemski](https://github.com/kpodemski)


### Back office
* [#24892](https://github.com/PrestaShop/PrestaShop/pull/24892): Fix experimental product page creation link, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#24876](https://github.com/PrestaShop/PrestaShop/pull/24876): Add classes for sort links on legacy pages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24867](https://github.com/PrestaShop/PrestaShop/pull/24867): Fix order notes not being saved , by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#24848](https://github.com/PrestaShop/PrestaShop/pull/24848): Avoid setting height to 0 if height isn't defined on product dropzone, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24837](https://github.com/PrestaShop/PrestaShop/pull/24837): Fix zoom on theme email grid and legacy dropdowns, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24813](https://github.com/PrestaShop/PrestaShop/pull/24813): Fix header toolbar getting over content on mobile and table, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24794](https://github.com/PrestaShop/PrestaShop/pull/24794): Fix js error when adding voucher in create order, by [@atomiix](https://github.com/atomiix)
* [#24728](https://github.com/PrestaShop/PrestaShop/pull/24728): Remove unwanted bundle.js call, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#24665](https://github.com/PrestaShop/PrestaShop/pull/24665): Fix dropzone component design on product page v2, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#24661](https://github.com/PrestaShop/PrestaShop/pull/24661): Display tab for extra modules in product page, by [@jolelievre](https://github.com/jolelievre)
* [#24469](https://github.com/PrestaShop/PrestaShop/pull/24469): Multistore header on product pages, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#24282](https://github.com/PrestaShop/PrestaShop/pull/24282): Remove unwanted margins on order page cards, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#24852](https://github.com/PrestaShop/PrestaShop/pull/24852): Fix 404 layout for wrong category, by [@atomiix](https://github.com/atomiix)
* [#24849](https://github.com/PrestaShop/PrestaShop/pull/24849): Fix wrong tab selected after changing a product combination on the FO, by [@atomiix](https://github.com/atomiix)
* [#24795](https://github.com/PrestaShop/PrestaShop/pull/24795): Fix checkout page details removed and wrong price when adding/removing voucher, by [@atomiix](https://github.com/atomiix)
* [#24600](https://github.com/PrestaShop/PrestaShop/pull/24600): FO - Validate field values when creating customer account, by [@sowbiba](https://github.com/sowbiba)


### Installer
* [#24847](https://github.com/PrestaShop/PrestaShop/pull/24847): Fix hook wording. Thank you [@PululuK](https://github.com/PululuK)


### Tests
* [#24904](https://github.com/PrestaShop/PrestaShop/pull/24904): Wait for navigation after click on FO menu, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24894](https://github.com/PrestaShop/PrestaShop/pull/24894): Update Js doc for design pages. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#24879](https://github.com/PrestaShop/PrestaShop/pull/24879): Update JS documentation for international pages. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#24870](https://github.com/PrestaShop/PrestaShop/pull/24870): Improve selectors and functions on statuses page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24862](https://github.com/PrestaShop/PrestaShop/pull/24862): Improve orders selectors for UI tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#24699](https://github.com/PrestaShop/PrestaShop/pull/24699): Functional test - Add quick access test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### Quality Assurance module
* [#17](https://github.com/PrestaShop/ps_qualityassurance/pull/17): Update badges links, by [@PierreRambaud](https://github.com/PierreRambaud)


### Example modules
* [#66](https://github.com/PrestaShop/example-modules/pull/66): Update node-sass and sass-loader, by [@NeOMakinG](https://github.com/NeOMakinG)


### Customer reassurance block module
* [#215](https://github.com/PrestaShop/blockreassurance/pull/215): Bump sass-loader from 12.0.0 to 12.1.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#214](https://github.com/PrestaShop/blockreassurance/pull/214): Bump @babel/core from 7.14.3 to 7.14.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#212](https://github.com/PrestaShop/blockreassurance/pull/212): Bump webpack-cli from 4.7.0 to 4.7.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#211](https://github.com/PrestaShop/blockreassurance/pull/211): Bump vue from 2.6.13 to 2.6.14. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#450](https://github.com/PrestaShop/ps_facetedsearch/pull/450): Bump sass-loader from 12.0.0 to 12.1.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#449](https://github.com/PrestaShop/ps_facetedsearch/pull/449): Fix for filter on subcategories with the same name. Thank you [@Prestaworks](https://github.com/Prestaworks)
* [#447](https://github.com/PrestaShop/ps_facetedsearch/pull/447): Bump @babel/cli from 7.14.3 to 7.14.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#446](https://github.com/PrestaShop/ps_facetedsearch/pull/446): Bump @babel/node from 7.14.2 to 7.14.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#445](https://github.com/PrestaShop/ps_facetedsearch/pull/445): Bump @babel/preset-env from 7.14.4 to 7.14.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#444](https://github.com/PrestaShop/ps_facetedsearch/pull/444): Bump @babel/core from 7.14.3 to 7.14.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#443](https://github.com/PrestaShop/ps_facetedsearch/pull/443): Bump @babel/register from 7.13.16 to 7.14.5. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation
* [#1034](https://github.com/PrestaShop/docs/pull/1034): Explain how deprecate a service, by [@Progi1984](https://github.com/Progi1984)
* [#1033](https://github.com/PrestaShop/docs/pull/1033): Add note about use of underscores in module's main class name. Thank you [@muyncky](https://github.com/muyncky)
* [#1030](https://github.com/PrestaShop/docs/pull/1030): Fix services decoration doc. Thank you [@PululuK](https://github.com/PululuK)
* [#999](https://github.com/PrestaShop/docs/pull/999): Document CLI Context loader Console, by [@matks](https://github.com/matks)
* [#996](https://github.com/PrestaShop/docs/pull/996): Add Router Dispatcher component, by [@matks](https://github.com/matks)
* [#988](https://github.com/PrestaShop/docs/pull/988): Explain collapsable right sidebar that contains documentation , by [@matks](https://github.com/matks)
* [#835](https://github.com/PrestaShop/docs/pull/835): Integrate CQRS commands and queries references, by [@jolelievre](https://github.com/jolelievre)


### Translation Files repository
* [#19](https://github.com/PrestaShop/TranslationFiles/pull/19): Update latest symlink to 178, by [@jolelievre](https://github.com/jolelievre)


### Stylelint browser compatibility plugin
* [#11](https://github.com/PrestaShop/stylelint-browser-compatibility/pull/11): Bump glob-parent from 5.1.0 to 5.1.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#10](https://github.com/PrestaShop/stylelint-browser-compatibility/pull/10): Bump trim-newlines from 3.0.0 to 3.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### stylelint configuration
* [#16](https://github.com/PrestaShop/stylelint-config/pull/16): Bump trim-newlines from 3.0.0 to 3.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#15](https://github.com/PrestaShop/stylelint-config/pull/15): Bump stylelint-config-twbs-bootstrap from 2.2.0 to 2.2.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### OnBoarding module
* [#116](https://github.com/PrestaShop/welcome/pull/116): Fix step1 of step 3/6 not showing in 1.7.8.x, by [@atomiix](https://github.com/atomiix)
* [#114](https://github.com/PrestaShop/welcome/pull/114): Release 6.0.5, by [@atomiix](https://github.com/atomiix)


### User documentation landing page
* [#80](https://github.com/PrestaShop/user-documentation-landing/pull/80): fix(deps): bump vue from 2.6.13 to 2.6.14. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#79](https://github.com/PrestaShop/user-documentation-landing/pull/79): fix(deps): bump core-js from 3.13.1 to 3.14.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#78](https://github.com/PrestaShop/user-documentation-landing/pull/78): chore(deps-dev): bump prettier from 2.3.0 to 2.3.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#77](https://github.com/PrestaShop/user-documentation-landing/pull/77): chore(deps-dev): bump eslint from 7.27.0 to 7.28.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop Specifications
* [#226](https://github.com/PrestaShop/prestashop-specs/pull/226): Added missing header, by [@Progi1984](https://github.com/Progi1984)
* [#225](https://github.com/PrestaShop/prestashop-specs/pull/225): Generate website from specs, by [@Progi1984](https://github.com/Progi1984)


### Product Comments module
* [#106](https://github.com/PrestaShop/productcomments/pull/106): Remove useless v5 upgrade file. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#105](https://github.com/PrestaShop/productcomments/pull/105): Release 4.2.2, by [@Progi1984](https://github.com/Progi1984)


### Issues Bot
* [#21](https://github.com/PrestaShop/issuebot/pull/21): Add label topwatchers if number of comments or positive reactions >= 5, by [@sowbiba](https://github.com/sowbiba)


### Links list module
* [#118](https://github.com/PrestaShop/ps_linklist/pull/118): Release v5.0.0, by [@matks](https://github.com/matks)


### The PrestaShop open source project
* [#43](https://github.com/PrestaShop/open-source/pull/43): Add ip right policies for PrestaShop open source user groups, by [@ttoine](https://github.com/ttoine)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@PierreRambaud](https://github.com/PierreRambaud), [@NeOMakinG](https://github.com/NeOMakinG), [@dependabot[bot]](https://github.com/apps/dependabot), [@Prestaworks](https://github.com/Prestaworks), [@Progi1984](https://github.com/Progi1984), [@micka-fdz](https://github.com/micka-fdz), [@boubkerbribri](https://github.com/boubkerbribri), [@jolelievre](https://github.com/jolelievre), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@matthieu-rolland](https://github.com/matthieu-rolland), [@matks](https://github.com/matks), [@muyncky](https://github.com/muyncky), [@atomiix](https://github.com/atomiix), [@juraj1000](https://github.com/juraj1000), [@sowbiba](https://github.com/sowbiba), [@PululuK](https://github.com/PululuK), [@comxd](https://github.com/comxd), [@RomainMazB](https://github.com/RomainMazB), [@kpodemski](https://github.com/kpodemski), [@jf-viguier](https://github.com/jf-viguier), [@levyn](https://github.com/levyn), [@olecorre](https://github.com/olecorre), [@marekjedrzejewski](https://github.com/marekjedrzejewski), [@mvorisek](https://github.com/mvorisek), [@Shagshag](https://github.com/Shagshag), [@eternoendless](https://github.com/eternoendless), [@ttoine](https://github.com/ttoine)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
