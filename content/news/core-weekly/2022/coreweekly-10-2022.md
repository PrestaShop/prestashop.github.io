---
layout: post
aliases: ["/news/coreweekly-10-2022"]
title:  "PrestaShop Core Weekly - Week 10 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-03-14
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 7th to Sunday 13th of March 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

A [bug](https://github.com/PrestaShop/PrestaShop/issues/27835) was reported from users using Chrome latest version 99, the back-office login page display was incorrect. A fix has already been merged into `1.7.8.x` branch by @NeOMakinG. Thank you everyone involved in the issue and discussion.

In the meantime, we merged the [Pull Request](https://github.com/PrestaShop/PrestaShop/pull/27592) that moved Classic theme out of the Core repository. Classic theme has now its own [repository](https://github.com/prestashop/classic-theme) and is included inside PrestaShop through Composer (on `develop` branch).


## Releases

* [Ps_emailalerts](https://github.com/PrestaShop/ps_emailalerts) module: [v2.3.3](https://github.com/PrestaShop/ps_emailalerts/releases/tag/v2.3.3)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [41 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-03-07..2022-03-13) have been created in the project repositories;
- [35 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-03-07..2022-03-13), including [16 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-03-07..2022-03-13) on the core;
- [75 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-03-07..2022-03-13) in the project repositories;
- [89 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-03-07..2022-03-13), including [68 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-03-07..2022-03-13).
        


## Code changes in the 'develop' branch


### Core
* [#27859](https://github.com/PrestaShop/PrestaShop/pull/27859): Update decimal to make it work without bcmath, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#27822](https://github.com/PrestaShop/PrestaShop/pull/27822): Don't allow emails without TLD in the Email Validator, by [@Progi1984](https://github.com/Progi1984)
* [#27646](https://github.com/PrestaShop/PrestaShop/pull/27646): Added module productcomments (now compatible with PS 8.0), by [@Progi1984](https://github.com/Progi1984)
* [#27527](https://github.com/PrestaShop/PrestaShop/pull/27527): Remove deprecated `enable_mobile|disable_mobile`. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Back office
* [#27860](https://github.com/PrestaShop/PrestaShop/pull/27860): Added hooks for blockwishlist in classic theme, by [@Progi1984](https://github.com/Progi1984)
* [#27851](https://github.com/PrestaShop/PrestaShop/pull/27851): Simply Delivery Slip Form, by [@Progi1984](https://github.com/Progi1984)
* [#27848](https://github.com/PrestaShop/PrestaShop/pull/27848): Check href exists before replacing it in multistore header, by [@atomiix](https://github.com/atomiix)
* [#27793](https://github.com/PrestaShop/PrestaShop/pull/27793): BO - Customer Page - Allow only positive number for Maximum number of payment days, by [@Progi1984](https://github.com/Progi1984)
* [#27720](https://github.com/PrestaShop/PrestaShop/pull/27720): MultiStore - Sell > Customer Service > Merchandise Return - Add Checkbox & Simplify Form, by [@Progi1984](https://github.com/Progi1984)
* [#27673](https://github.com/PrestaShop/PrestaShop/pull/27673): Remove ecotax field when the product is virtual, by [@Progi1984](https://github.com/Progi1984)
* [#27394](https://github.com/PrestaShop/PrestaShop/pull/27394): Improve Cart Rule Form Responsive footer, by [@Progi1984](https://github.com/Progi1984)
* [#27373](https://github.com/PrestaShop/PrestaShop/pull/27373): BO Migration Contact > Stores - Add command, command handler and behat tests for status toggle. Thank you [@LouisAUTHIE](https://github.com/LouisAUTHIE)
* [#27275](https://github.com/PrestaShop/PrestaShop/pull/27275): Move condition field from options to specifications tab, by [@jolelievre](https://github.com/jolelievre)


### Front office
* [#27830](https://github.com/PrestaShop/PrestaShop/pull/27830): Fixes php notice because $result maybe false value. Thank you [@buggyzap](https://github.com/buggyzap)
* [#26854](https://github.com/PrestaShop/PrestaShop/pull/26854): Prevent customization modal open if qty changed in cart on classic, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#26048](https://github.com/PrestaShop/PrestaShop/pull/26048): Check quantities at any point of checkout process. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Tests
* [#27828](https://github.com/PrestaShop/PrestaShop/pull/27828): Functional tests - Fix monitoring tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#27820](https://github.com/PrestaShop/PrestaShop/pull/27820): Functional tests - Add new test 'Select previous order'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.8.x' branch


### Back office
* [#27843](https://github.com/PrestaShop/PrestaShop/pull/27843): Fix: login page float buggy on latest chrome version and long shop name problem, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#27776](https://github.com/PrestaShop/PrestaShop/pull/27776): Stock field must be empty and still be considered as zero, by [@jolelievre](https://github.com/jolelievre)


## Code changes in modules, themes & tools


### PrestaShop Project Metrics
* [#27](https://github.com/PrestaShop/ps-project-metrics/pull/27): Add webpage to display PR review comments data, by [@matks](https://github.com/matks)
* [#26](https://github.com/PrestaShop/ps-project-metrics/pull/26): Do not rely on current datetime for developer stats, by [@matks](https://github.com/matks)
* [#24](https://github.com/PrestaShop/ps-project-metrics/pull/24): Dont ignore weekend reviews, by [@matks](https://github.com/matks)


### Classic theme
* [#9](https://github.com/PrestaShop/classic-theme/pull/9): Port latest changes from Core, by [@eternoendless](https://github.com/eternoendless)
* [#8](https://github.com/PrestaShop/classic-theme/pull/8): Use CSSO Webpack plugin, by [@eternoendless](https://github.com/eternoendless)


### Changes in developer documentation sources
* [#1313](https://github.com/PrestaShop/docs/pull/1313): fix(doc): updated modulefrontcontroller doc. Thank you [@Dreimus](https://github.com/Dreimus)
* [#1310](https://github.com/PrestaShop/docs/pull/1310): Update translation domains page, by [@Julievrz](https://github.com/Julievrz)
* [#1308](https://github.com/PrestaShop/docs/pull/1308): Adding information for using TinyMCE editor and FormattedTextareaType with prestashop UI kit and twig form. Thank you [@Rizzen59](https://github.com/Rizzen59)


### Issues Bot
* [#66](https://github.com/PrestaShop/issuebot/pull/66): fix: labels changed, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#65](https://github.com/PrestaShop/issuebot/pull/65): fix: remove empty character on waiting for author, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#64](https://github.com/PrestaShop/issuebot/pull/64): fix: some errors because of multiple graphql calls, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#63](https://github.com/PrestaShop/issuebot/pull/63): feat: add card to maxikanban if it doesn't exist on move, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#62](https://github.com/PrestaShop/issuebot/pull/62): Add new M2 rule, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#61](https://github.com/PrestaShop/issuebot/pull/61): fix: avoid issuebot crash if fieldValues is unreachable, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#60](https://github.com/PrestaShop/issuebot/pull/60): fix: debug log for production env, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#59](https://github.com/PrestaShop/issuebot/pull/59): feat: add 1.7.8.5 kanban, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#58](https://github.com/PrestaShop/issuebot/pull/58): fix: optional chaining not supported in production, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#57](https://github.com/PrestaShop/issuebot/pull/57): Add megakanban features, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#56](https://github.com/PrestaShop/issuebot/pull/56): Remove megakanban features, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#55](https://github.com/PrestaShop/issuebot/pull/55): Revert "fix: optional chaining not supported in production", by [@NeOMakinG](https://github.com/NeOMakinG)
* [#54](https://github.com/PrestaShop/issuebot/pull/54): fix: optional chaining not supported in production, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#53](https://github.com/PrestaShop/issuebot/pull/53): Add MegaKanban again, by [@NeOMakinG](https://github.com/NeOMakinG)


### Hummingbird theme
* [#196](https://github.com/PrestaShop/theme-refacto/pull/196): Merge develop on master to deploy storybook, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#195](https://github.com/PrestaShop/theme-refacto/pull/195): fix: use scss file for storybook deploy, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#194](https://github.com/PrestaShop/theme-refacto/pull/194): Merge develop on master, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#193](https://github.com/PrestaShop/theme-refacto/pull/193): feat: deploy storybook to gh-pages, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#192](https://github.com/PrestaShop/theme-refacto/pull/192): fix: ts error on jest tests, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#191](https://github.com/PrestaShop/theme-refacto/pull/191): Add storybook and bootstrap components, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#190](https://github.com/PrestaShop/theme-refacto/pull/190): Improve useToast. Thank you [@mparvazi](https://github.com/mparvazi)


### Nightly board
* [#77](https://github.com/PrestaShop/nightly-board/pull/77): Deliver develop to master, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#76](https://github.com/PrestaShop/nightly-board/pull/76): Rebase develop to master and downgrade node-sass, by [@NeOMakinG](https://github.com/NeOMakinG)


### Core Weekly Generator tool
* [#119](https://github.com/PrestaShop/core-weekly-generator/pull/119): Update mapping with new repositories and new names, by [@matks](https://github.com/matks)
* [#118](https://github.com/PrestaShop/core-weekly-generator/pull/118): Improve Core Weekly template with refs to PrestaShop 8, by [@matks](https://github.com/matks)


### Customer reassurance block module
* [#373](https://github.com/PrestaShop/blockreassurance/pull/373): Bump css-loader from 6.7.0 to 6.7.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#372](https://github.com/PrestaShop/blockreassurance/pull/372): Bump css-loader from 6.6.0 to 6.7.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#630](https://github.com/PrestaShop/ps_facetedsearch/pull/630): Bump css-loader from 6.7.0 to 6.7.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#629](https://github.com/PrestaShop/ps_facetedsearch/pull/629): Bump css-loader from 6.6.0 to 6.7.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#612](https://github.com/PrestaShop/ps_facetedsearch/pull/612): Check access to product on category listing. Thank you [@bibips](https://github.com/bibips)


### Docker images
* [#300](https://github.com/PrestaShop/docker/pull/300): Stop maintaining useless version, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#299](https://github.com/PrestaShop/docker/pull/299): Update php gd library with proper parameters, by [@PierreRambaud](https://github.com/PierreRambaud)


### Email Alerts module
* [#108](https://github.com/PrestaShop/ps_emailalerts/pull/108): Release 2.3.3, by [@Progi1984](https://github.com/Progi1984)
* [#106](https://github.com/PrestaShop/ps_emailalerts/pull/106): Fixed the hook listener for the hook actionProductAttributeDelete & Removed hooks actionProductOutOfStock & registerGDPRConsent as hook listeners are not defined, by [@Progi1984](https://github.com/Progi1984)


### GDPR module
* [#162](https://github.com/PrestaShop/psgdpr/pull/162): Bump version to 1.4.0, by [@Progi1984](https://github.com/Progi1984)


### Auto Upgrade module
* [#464](https://github.com/PrestaShop/autoupgrade/pull/464): Add missing Security tab entries, by [@atomiix](https://github.com/atomiix)


### Wishlist block module
* [#163](https://github.com/PrestaShop/blockwishlist/pull/163): Removed the hook displayProductAdditionalInfo as the hook listener is not defined, by [@Progi1984](https://github.com/Progi1984)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@matks](https://github.com/matks), [@eternoendless](https://github.com/eternoendless), [@Dreimus](https://github.com/Dreimus), [@NeOMakinG](https://github.com/NeOMakinG), [@Julievrz](https://github.com/Julievrz), [@dependabot[bot]](https://github.com/apps/dependabot), [@Progi1984](https://github.com/Progi1984), [@PierreRambaud](https://github.com/PierreRambaud), [@matthieu-rolland](https://github.com/matthieu-rolland), [@Robin-Fischer-PS](https://github.com/Robin-Fischer-PS), [@atomiix](https://github.com/atomiix), [@mparvazi](https://github.com/mparvazi), [@buggyzap](https://github.com/buggyzap), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@amaury-hanser](https://github.com/amaury-hanser), [@Rizzen59](https://github.com/Rizzen59), [@jolelievre](https://github.com/jolelievre), [@bibips](https://github.com/bibips), [@PrestaEdit](https://github.com/PrestaEdit), [@LouisAUTHIE](https://github.com/LouisAUTHIE), [@Hlavtox](https://github.com/Hlavtox)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

