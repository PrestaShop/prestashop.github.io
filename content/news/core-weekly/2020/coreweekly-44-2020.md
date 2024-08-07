---
layout: post
aliases: ["/news/coreweekly-44-2020"]
title:  "PrestaShop Core Weekly - Week 44 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-11-04
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 26th of October to Sunday 1st of November 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

The [**first Release Candidate**](https://build.prestashop.com/news/prestashop-1-7-7-0-rc-release/) of PrestaShop 1.7.7.0 has finally been delivered yesterday, after multiple weeks spent carefully strengthening and stabilizing it. For the PrestaShop maintainers team, [Hacktoberfest](https://hacktoberfest.digitalocean.com/) has been all about 1.7.7.0.

This Release Candidate is open for testing for two weeks. On October 18th, if no critical or major regression has been reported, PrestaShop 1.7.7.0 will be delivered as a stable version.

Please help us test this build to make sure this release is a success!


## A quick update about PrestaShop's GitHub issues and pull requests:

- [56 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-10-26..2020-11-01) have been created in the project repositories;
- [57 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-10-26..2020-11-01), including [8 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-10-26..2020-11-01) on the core;
- [129 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-10-26..2020-11-01) in the project repositories;
- [84 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-10-26..2020-11-01), including [70 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-10-26..2020-11-01).



## Code changes in the 'develop' branch


### Back office
* [#21665](https://github.com/PrestaShop/PrestaShop/pull/21665): Fix PHPDoc AdminController::$explicitSelect. Thank you [@comxd](https://github.com/comxd)
* [#21656](https://github.com/PrestaShop/PrestaShop/pull/21656): Detect click but not drag and drop on grid, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#21554](https://github.com/PrestaShop/PrestaShop/pull/21554): Fix layout breaking on order when discount name is way too long, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#21654](https://github.com/PrestaShop/PrestaShop/pull/21654): Select first payment method if only one is available, by [@NeOMakinG](https://github.com/NeOMakinG)


### Tests
* [#21641](https://github.com/PrestaShop/PrestaShop/pull/21641): Fix nightly (18-10-2020) comment not working tests. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21637](https://github.com/PrestaShop/PrestaShop/pull/21637): Add test 'Sort and pagination employees'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21631](https://github.com/PrestaShop/PrestaShop/pull/21631): Using setValue on login to test multiple login attempts, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#21573](https://github.com/PrestaShop/PrestaShop/pull/21573): Add test 'Quick edit and bulk actions carriers'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#21534](https://github.com/PrestaShop/PrestaShop/pull/21534): Add test 'Bulk delete search engine'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.7.x' branch


### Core
* [#21609](https://github.com/PrestaShop/PrestaShop/pull/21609): Make PrestaShop compatible with composer 2.0, by [@atomiix](https://github.com/atomiix)


### Back office
* [#21574](https://github.com/PrestaShop/PrestaShop/pull/21574): Allow ContextStateManager to stash contexts, by [@jolelievre](https://github.com/jolelievre)


## Code changes in modules, themes & tools


### The PrestaShop open source project
* [#52](https://github.com/PrestaShop/open-source/pull/52): Fix misspelled word prioritize and removed a (probably) useless word. Thank you [@awitkutarahil](https://github.com/awitkutarahil)
* [#51](https://github.com/PrestaShop/open-source/pull/51): Add missing closing parenthesis and a missing s. Thank you [@awitkutarahil](https://github.com/awitkutarahil)


### Changes in developer documentation
* [#791](https://github.com/PrestaShop/docs/pull/791): Fix php json version. Thank you [@gnovaro](https://github.com/gnovaro)
* [#790](https://github.com/PrestaShop/docs/pull/790): Update Theme introduction with up-to-date informations. Thank you [@awitkutarahil](https://github.com/awitkutarahil)
* [#789](https://github.com/PrestaShop/docs/pull/789): Update some links in introduction and make them easier to use. Thank you [@awitkutarahil](https://github.com/awitkutarahil)
* [#785](https://github.com/PrestaShop/docs/pull/785): Update tests documentation, by [@SimonGrn](https://github.com/SimonGrn)
* [#781](https://github.com/PrestaShop/docs/pull/781): Add global components doc, by [@NeOMakinG](https://github.com/NeOMakinG)


### Faceted search module
* [#248](https://github.com/PrestaShop/ps_facetedsearch/pull/248): Bump webpack from 5.3.1 to 5.3.2. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#246](https://github.com/PrestaShop/ps_facetedsearch/pull/246): Bump webpack from 5.2.0 to 5.3.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#245](https://github.com/PrestaShop/ps_facetedsearch/pull/245): Update short description and logo . Thank you [@Julievrz](https://github.com/Julievrz)
* [#244](https://github.com/PrestaShop/ps_facetedsearch/pull/244): Bump eslint-config-airbnb-base from 13.2.0 to 14.2.0, by [@NeOMakinG](https://github.com/NeOMakinG)


### Product Comments module
* [#76](https://github.com/PrestaShop/productcomments/pull/76): Bump symfony/css-selector from 3.4.45 to 3.4.46. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#75](https://github.com/PrestaShop/productcomments/pull/75): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)
* [#61](https://github.com/PrestaShop/productcomments/pull/61): Added Pagination system for Comments in BO. Thank you [@Oksydan](https://github.com/Oksydan)


### Prestashop UI Kit
* [#107](https://github.com/PrestaShop/prestashop-ui-kit/pull/107): Add status component, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#103](https://github.com/PrestaShop/prestashop-ui-kit/pull/103): Fix number inputs icon and sizes and add the possibility to avoid buttons use, by [@NeOMakinG](https://github.com/NeOMakinG)


### Wishlist block module
* [#90](https://github.com/PrestaShop/blockwishlist/pull/90): Add a redirect to home is the user is not connected. Thank you [@pablopolyte](https://github.com/pablopolyte)
* [#88](https://github.com/PrestaShop/blockwishlist/pull/88): Breadcrumbs and translations, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Docker images
* [#235](https://github.com/PrestaShop/docker/pull/235): Fix Prestashop 1.7 doc link. Thank you [@PululuK](https://github.com/PululuK)


## Logo and description changes

### Wire payment module
* [#59](https://github.com/PrestaShop/ps_wirepayment/pull/59): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Watermark module
* [#23](https://github.com/PrestaShop/watermark/pull/23): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Visits and Visitors statistics module
* [#14](https://github.com/PrestaShop/statsvisits/pull/14): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Visitors origin statistics module
* [#9](https://github.com/PrestaShop/statsorigin/pull/9): Update logo and short description. Thank you [@Julievrz](https://github.com/Julievrz)

### Best sellers module
* [#14](https://github.com/PrestaShop/ps_bestsellers/pull/14): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Search engine keywords statistics module
* [#13](https://github.com/PrestaShop/sekeywords/pull/13): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Supplier list module
* [#6](https://github.com/PrestaShop/ps_supplierlist/pull/6): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Specials product block module
* [#3](https://github.com/PrestaShop/ps_specials/pull/3): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Share Buttons module
* [#45](https://github.com/PrestaShop/ps_sharebuttons/pull/45): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Shopping cart module
* [#71](https://github.com/PrestaShop/ps_shoppingcart/pull/71): Update logo and short description. Thank you [@Julievrz](https://github.com/Julievrz)

### Shop search statistics module
* [#12](https://github.com/PrestaShop/statssearch/pull/12): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Search Bar module
* [#21](https://github.com/PrestaShop/ps_searchbar/pull/21): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Sales and orders statistics module
* [#16](https://github.com/PrestaShop/statssales/pull/16): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Feeder module
* [#11](https://github.com/PrestaShop/ps_feeder/pull/11): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### RSS Feed module
* [#4](https://github.com/PrestaShop/ps_rssfeed/pull/4): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Registered customer information statistics module
* [#12](https://github.com/PrestaShop/statspersonalinfos/pull/12): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Products in the same category module
* [#25](https://github.com/PrestaShop/ps_categoryproducts/pull/25): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Check payment module
* [#42](https://github.com/PrestaShop/ps_checkpayment/pull/42): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Pages not found
* [#14](https://github.com/PrestaShop/pagesnotfound/pull/14): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### NVD3 Charts module
* [#14](https://github.com/PrestaShop/graphnvd3/pull/14): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Email subscription module
* [#67](https://github.com/PrestaShop/ps_emailsubscription/pull/67): Update logo and short description. Thank you [@Julievrz](https://github.com/Julievrz)

### Newsletter statistics module
* [#10](https://github.com/PrestaShop/statsnewsletter/pull/10): Update short description and logo . Thank you [@Julievrz](https://github.com/Julievrz)

### Main menu module
* [#39](https://github.com/PrestaShop/ps_mainmenu/pull/39): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Email Alerts module
* [#70](https://github.com/PrestaShop/ps_emailalerts/pull/70): Update logo and About section of README. Thank you [@Julievrz](https://github.com/Julievrz)

### Links list module
* [#103](https://github.com/PrestaShop/ps_linklist/pull/103): Update short description and logo . Thank you [@Julievrz](https://github.com/Julievrz)

### Language selector module
* [#22](https://github.com/PrestaShop/ps_languageselector/pull/22): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Image slider module
* [#56](https://github.com/PrestaShop/ps_imageslider/pull/56): Update short descrption and logo . Thank you [@Julievrz](https://github.com/Julievrz)

### Google Sitemap module
* [#145](https://github.com/PrestaShop/gsitemap/pull/145): Update logo and short description. Thank you [@Julievrz](https://github.com/Julievrz)

### Google Analytics module
* [#82](https://github.com/PrestaShop/ps_googleanalytics/pull/82): Update logo . Thank you [@Julievrz](https://github.com/Julievrz)

### Featured products module
* [#31](https://github.com/PrestaShop/ps_featuredproducts/pull/31): Update short description and logo . Thank you [@Julievrz](https://github.com/Julievrz)

### Order Notifications on the Favicon module
* [#23](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/23): Update short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Emails manager module
* [#12](https://github.com/PrestaShop/ps_emailsmanager/pull/12): Update short description and logo . Thank you [@Julievrz](https://github.com/Julievrz)

### Data mining for statistics module
* [#19](https://github.com/PrestaShop/statsdata/pull/19): Update short description and logo . Thank you [@Julievrz](https://github.com/Julievrz)

### Dashboard Trends module
* [#38](https://github.com/PrestaShop/dashtrends/pull/38): Update short description and logo . Thank you [@Julievrz](https://github.com/Julievrz)

### Dashboard Products module
* [#31](https://github.com/PrestaShop/dashproducts/pull/31): Update short description and logo . Thank you [@Julievrz](https://github.com/Julievrz)

### Dashboard Goals module
* [#25](https://github.com/PrestaShop/dashgoals/pull/25): Update short description and logo . Thank you [@Julievrz](https://github.com/Julievrz)

### Dashboard Activity module
* [#23](https://github.com/PrestaShop/dashactivity/pull/23): Update Short description and logo. Thank you [@Julievrz](https://github.com/Julievrz)

### Customer reassurance block module
* [#58](https://github.com/PrestaShop/blockreassurance/pull/58): Update short description. Thank you [@Julievrz](https://github.com/Julievrz)



<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Julievrz](https://github.com/Julievrz), [@dependabot[bot]](https://github.com/apps/dependabot), [@PululuK](https://github.com/PululuK), [@comxd](https://github.com/comxd), [@NeOMakinG](https://github.com/NeOMakinG), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@boubkerbribri](https://github.com/boubkerbribri), [@matks](https://github.com/matks), [@atomiix](https://github.com/atomiix), [@jolelievre](https://github.com/jolelievre), [@awitkutarahil](https://github.com/awitkutarahil), [@gnovaro](https://github.com/gnovaro), [@SimonGrn](https://github.com/SimonGrn), [@pablopolyte](https://github.com/pablopolyte), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@Oksydan](https://github.com/Oksydan)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
