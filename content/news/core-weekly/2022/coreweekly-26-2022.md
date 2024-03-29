---
layout: post
aliases: ["/news/coreweekly-26-2022"]
title:  "PrestaShop Core Weekly - Week 26 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-07-05
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 27th of June to Sunday 3rd of July 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

Multiple new applications have been submitted to join the team: [marsaldev](https://github.com/PrestaShop/open-source/issues/105) for committer position and [PrestaEdit](https://github.com/PrestaShop/open-source/issues/106) for maintainer position. This is great news!

In the meantime, the QA team is still going through the 8.0.0 alpha functional campaign which aims to evaluate how much work would be needed before being able to deliver an 8.0.0 alpha build.

Also the next session of the public PrestaShop demo from the maintainers team will happen [this week, on Wednesday, July 6, 2022 at 4pm CEST](https://build.prestashop.com/news/upcoming-demo-5-2022/)!


## A quick update about PrestaShop's GitHub issues and pull requests:

- [51 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-06-27..2022-07-03) have been created in the project repositories;
- [31 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-06-27..2022-07-03), including [7 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-06-27..2022-07-03) on the core;
- [98 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-06-27..2022-07-03) in the project repositories;
- [79 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-06-27..2022-07-03), including [68 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-06-27..2022-07-03).


## Code changes in the 'develop' branch


### Back office
* [#28842](https://github.com/PrestaShop/PrestaShop/pull/28842): Remove Addons reference in the Carriers Listing, by [@Progi1984](https://github.com/Progi1984)
* [#28824](https://github.com/PrestaShop/PrestaShop/pull/28824): Fix the download link of the invoice search. Thank you [@okom3pom](https://github.com/okom3pom)
* [#28477](https://github.com/PrestaShop/PrestaShop/pull/28477): Adjust footer on V2 product page. Thank you [@Amoifr](https://github.com/Amoifr)


### Front office
* [#28811](https://github.com/PrestaShop/PrestaShop/pull/28811): Add random to Validate Class and Test. Thank you [@okom3pom](https://github.com/okom3pom)


### Tests
* [#28902](https://github.com/PrestaShop/PrestaShop/pull/28902): Fix nightly develop 21-06-2022 -  Update default carrier and check it in FO . Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '8.0.x' branch


### Back office
* [#28817](https://github.com/PrestaShop/PrestaShop/pull/28817): Fix notices in email translation. Thank you [@okom3pom](https://github.com/okom3pom)
* [#28802](https://github.com/PrestaShop/PrestaShop/pull/28802): Fix notice admin search controller. Thank you [@okom3pom](https://github.com/okom3pom)


### Tests
* [#28918](https://github.com/PrestaShop/PrestaShop/pull/28918): Functional tests - Refactoring of 'Check header links on FO' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28884](https://github.com/PrestaShop/PrestaShop/pull/28884): Fix errors on nightly 8.0.x . Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28866](https://github.com/PrestaShop/PrestaShop/pull/28866): Fix nightly 8.0.x - Add pre-condition to clear cache in 'Check footer links FO' test. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28828](https://github.com/PrestaShop/PrestaShop/pull/28828): Functional tests - Add new test 'Edit personal information' in FO. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28815](https://github.com/PrestaShop/PrestaShop/pull/28815): Functional tests - Add new test 'Create account on FO'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28809](https://github.com/PrestaShop/PrestaShop/pull/28809): Functional tests - Add new test 'Logout from FO'. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#28717](https://github.com/PrestaShop/PrestaShop/pull/28717): Functional tests - Add new test "Customers > Outstanding page"  Help card - View order - View Invoice, by [@khouloudbelguith](https://github.com/khouloudbelguith)


## Code changes in the '1.7.8.x' branch


### Back office
* [#28821](https://github.com/PrestaShop/PrestaShop/pull/28821): Handle fallback when currency has empty display names, by [@jolelievre](https://github.com/jolelievre)
* [#28392](https://github.com/PrestaShop/PrestaShop/pull/28392): Fix back-office translations when multishop and multiple languages. Thank you [@MeKeyCool](https://github.com/MeKeyCool)


### Front office
* [#27841](https://github.com/PrestaShop/PrestaShop/pull/27841): [Multistore] - Product on category page display out of stock flag instead of availlable on order. Thank you [@Rizzen59](https://github.com/Rizzen59)


## Code changes in modules, themes & tools


### Available quantities statistics module
* [#23](https://github.com/PrestaShop/statsstock/pull/23): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Registrations statistics modules
* [#17](https://github.com/PrestaShop/statsregistrations/pull/17): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Product details statistics module
* [#32](https://github.com/PrestaShop/statsproduct/pull/32): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Data mining for statistics module
* [#27](https://github.com/PrestaShop/statsdata/pull/27): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Catalog evaluation statistics module
* [#24](https://github.com/PrestaShop/statscheckup/pull/24): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Catalog statistics module
* [#26](https://github.com/PrestaShop/statscatalog/pull/26): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Best suppliers statistics module
* [#15](https://github.com/PrestaShop/statsbestsuppliers/pull/15): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Best manufacturers statistics module
* [#15](https://github.com/PrestaShop/statsbestmanufacturers/pull/15): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### GDPR module
* [#176](https://github.com/PrestaShop/psgdpr/pull/176): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)
* [#154](https://github.com/PrestaShop/psgdpr/pull/154): Avoid warning open_basedir restriction (using fetch instead of display). Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Social Follow module
* [#35](https://github.com/PrestaShop/ps_socialfollow/pull/35): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### New Products module
* [#14](https://github.com/PrestaShop/ps_newproducts/pull/14): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Links list module
* [#150](https://github.com/PrestaShop/ps_linklist/pull/150): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Email subscription module
* [#90](https://github.com/PrestaShop/ps_emailsubscription/pull/90): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Customer data privacy block module
* [#39](https://github.com/PrestaShop/ps_dataprivacy/pull/39): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Customer "Sign in" link module
* [#45](https://github.com/PrestaShop/ps_customersignin/pull/45): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Customer account links module
* [#40](https://github.com/PrestaShop/ps_customeraccountlinks/pull/40): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Cross-selling module
* [#37](https://github.com/PrestaShop/ps_crossselling/pull/37): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Contact informations module
* [#48](https://github.com/PrestaShop/ps_contactinfo/pull/48): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Check payment module
* [#58](https://github.com/PrestaShop/ps_checkpayment/pull/58): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Category tree links module
* [#58](https://github.com/PrestaShop/ps_categorytree/pull/58): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Products in the same category module
* [#32](https://github.com/PrestaShop/ps_categoryproducts/pull/32): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Best sellers module
* [#22](https://github.com/PrestaShop/ps_bestsellers/pull/22): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Banner module
* [#46](https://github.com/PrestaShop/ps_banner/pull/46): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Google Sitemap module
* [#153](https://github.com/PrestaShop/gsitemap/pull/153): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Simple HTML table display module
* [#30](https://github.com/PrestaShop/gridhtml/pull/30): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### NVD3 Charts module
* [#21](https://github.com/PrestaShop/graphnvd3/pull/21): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Dashboard Products module
* [#42](https://github.com/PrestaShop/dashproducts/pull/42): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Dashboard Goals module
* [#29](https://github.com/PrestaShop/dashgoals/pull/29): Use Organization Build Release Github Action, by [@atomiix](https://github.com/atomiix)


### Contact Form module
* [#62](https://github.com/PrestaShop/contactform/pull/62): Use org build and release workflow, by [@atomiix](https://github.com/atomiix)


### Distribution API
* [#15](https://github.com/PrestaShop/distribution-api/pull/15): Adding new ci cd for production to be tested. Thank you [@djodjo3](https://github.com/djodjo3)


### Docker internal images
* [#38](https://github.com/PrestaShop/docker-internal-images/pull/38): Fix PS version for nightly docker image, by [@sowbiba](https://github.com/sowbiba)


### Customer reassurance block module
* [#416](https://github.com/PrestaShop/blockreassurance/pull/416): Bump @babel/core from 7.18.5 to 7.18.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#415](https://github.com/PrestaShop/blockreassurance/pull/415): Bump sass-loader from 13.0.1 to 13.0.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#414](https://github.com/PrestaShop/blockreassurance/pull/414): Bump sass-loader from 13.0.0 to 13.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Faceted search module
* [#677](https://github.com/PrestaShop/ps_facetedsearch/pull/677): Bump @babel/preset-env from 7.18.2 to 7.18.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#676](https://github.com/PrestaShop/ps_facetedsearch/pull/676): Bump @babel/cli from 7.17.10 to 7.18.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#674](https://github.com/PrestaShop/ps_facetedsearch/pull/674): Bump @babel/core from 7.18.5 to 7.18.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#673](https://github.com/PrestaShop/ps_facetedsearch/pull/673): Bump @babel/node from 7.18.5 to 7.18.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#672](https://github.com/PrestaShop/ps_facetedsearch/pull/672): Bump sass-loader from 13.0.1 to 13.0.2. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#671](https://github.com/PrestaShop/ps_facetedsearch/pull/671): Bump sass-loader from 13.0.0 to 13.0.1. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Changes in developer documentation sources
* [#1400](https://github.com/PrestaShop/docs/pull/1400): Update broken link. Thank you [@Sasni](https://github.com/Sasni)
* [#1399](https://github.com/PrestaShop/docs/pull/1399): Update broken link. Thank you [@Sasni](https://github.com/Sasni)
* [#1398](https://github.com/PrestaShop/docs/pull/1398): Remove extraCarrier note, as it's deprecated since 1.7.0 and not used. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Classic theme
* [#38](https://github.com/PrestaShop/classic-theme/pull/38): Fix npm 8 compatibility, by [@NeOMakinG](https://github.com/NeOMakinG)


### Docker images
* [#308](https://github.com/PrestaShop/docker/pull/308): Add PHP 8.1, by [@atomiix](https://github.com/atomiix)


### Auto Upgrade module
* [#492](https://github.com/PrestaShop/autoupgrade/pull/492): Fix state of dev branch following hotfix of 1.7.8.6, by [@matks](https://github.com/matks)


### Example modules
* [#97](https://github.com/PrestaShop/example-modules/pull/97): Bump eventsource from 1.0.7 to 1.1.1 in /example_module_mailtheme. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### PrestaShop on Docker
* [#22](https://github.com/PrestaShop/docker-ci/pull/22): Add image for PHP 8.0 and delete support for PHP 7.1, by [@boubkerbribri](https://github.com/boubkerbribri)


### Image slider module
* [#75](https://github.com/PrestaShop/ps_imageslider/pull/75): Add RTL sample images. Thank you [@mparvazi](https://github.com/mparvazi)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@atomiix](https://github.com/atomiix), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@djodjo3](https://github.com/djodjo3), [@sowbiba](https://github.com/sowbiba), [@dependabot[bot]](https://github.com/apps/dependabot), [@Progi1984](https://github.com/Progi1984), [@Sasni](https://github.com/Sasni), [@PrestaEdit](https://github.com/PrestaEdit), [@NeOMakinG](https://github.com/NeOMakinG), [@okom3pom](https://github.com/okom3pom), [@jolelievre](https://github.com/jolelievre), [@matks](https://github.com/matks), [@khouloudbelguith](https://github.com/khouloudbelguith), [@boubkerbribri](https://github.com/boubkerbribri), [@Amoifr](https://github.com/Amoifr), [@mparvazi](https://github.com/mparvazi), [@MeKeyCool](https://github.com/MeKeyCool), [@Rizzen59](https://github.com/Rizzen59)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

