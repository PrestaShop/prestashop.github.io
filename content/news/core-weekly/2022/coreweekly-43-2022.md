---
layout: post
aliases: ["/news/coreweekly-43-2022"]
slug: "coreweekly-43-2022"
title:  "PrestaShop Core Weekly - Week 43 of 2022"
subtitle: "An inside look at the PrestaShop codebase"
date:   2022-10-31
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
twitter_image: /assets/images/theme/banner-core-weekly.jpg
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 24th to Sunday 30th of October 2022.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

Dear developers,

[PrestaShop 8 is available!](https://build.prestashop-project.org/news/prestashop-8-0-0-available/) This is an important moment for everyone involved in the project. All project members would like to thank the community for their involvement in this new version.

The Hummingbird theme maintainers team decided to [release its early version](https://github.com/PrestaShop/hummingbird/releases). If you are working with PrestaShop themes, this is a great chance to get your hands on this new version to see what the future holds.

We want to remind you about [next week's PrestaShop Project Public Demo](https://www.youtube.com/watch?v=nRf0EQX3lbg). We meet on November 9th at 4 PM CET.

Last but not least, October was the last month of the Core Weekly summaries you are currently reading. Starting in November, we will gather information about the project to be published in the _Core Monthly_ summary. So the next post of this type is to be published at the beginning of December. We believe this new format will be easier for everyone to track and allow us to provide you with more relevant information about the project.

## Releases

* [PrestaShop](https://github.com/PrestaShop/PrestaShop): [PrestaShop 8.0.0](https://github.com/PrestaShop/PrestaShop/releases/tag/8.0.0)
* [Hummingbird](https://github.com/PrestaShop/hummingbird): [Hummingbird 0.1.0](https://github.com/PrestaShop/hummingbird/releases/tag/v0.1.0)

## A quick update about PrestaShop's GitHub issues and pull requests:

- [32 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2022-10-24..2022-10-30) have been created in the project repositories;
- [47 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2022-10-24..2022-10-30), including [9 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2022-10-24..2022-10-30) on the core;
- [66 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2022-10-24..2022-10-30) in the project repositories;
- [141 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2022-10-24..2022-10-30), including [130 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2022-10-24..2022-10-30).
        


## Code changes in the 'develop' branch


### Core
* [#30133](https://github.com/PrestaShop/PrestaShop/pull/30133): Use array short tag in translations files. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#30047](https://github.com/PrestaShop/PrestaShop/pull/30047): Remove unused "override" property in class index, by [@eternoendless](https://github.com/eternoendless)
* [#29993](https://github.com/PrestaShop/PrestaShop/pull/29993): Allow to use own value to submit button. Thank you [@PrestaEdit](https://github.com/PrestaEdit)
* [#29741](https://github.com/PrestaShop/PrestaShop/pull/29741): Handle KPI configuration properly for the dashgoals module, by [@kpodemski](https://github.com/kpodemski)
* [#29664](https://github.com/PrestaShop/PrestaShop/pull/29664): Removed `US/Pacific New` from timezone list, by [@Progi1984](https://github.com/Progi1984)
* [#29470](https://github.com/PrestaShop/PrestaShop/pull/29470): Don't register `module` on `hook` if already registered. Thank you [@PululuK](https://github.com/PululuK)
* [#29423](https://github.com/PrestaShop/PrestaShop/pull/29423): Prevent *.twig, config.xml & config_{lang}.xml files from direct access in modules folder. Thank you [@clotairer](https://github.com/clotairer)
* [#29382](https://github.com/PrestaShop/PrestaShop/pull/29382): Do not authorize PHP direct call on themes directory. Thank you [@clotairer](https://github.com/clotairer)
* [#29304](https://github.com/PrestaShop/PrestaShop/pull/29304): Add support for other file extensions in rewrite rules, by [@eternoendless](https://github.com/eternoendless)


### Back office
* [#30143](https://github.com/PrestaShop/PrestaShop/pull/30143): UpdateProductCommand unification - SEO related properties handling. Thank you [@zuk3975](https://github.com/zuk3975)
* [#30132](https://github.com/PrestaShop/PrestaShop/pull/30132): Upgrade AddProductImageCommand and GetProductImageCommand to fit with multishop. Thank you [@lartist](https://github.com/lartist)
* [#30122](https://github.com/PrestaShop/PrestaShop/pull/30122): UpdateProductCommand unification - prices related properties handling. Thank you [@zuk3975](https://github.com/zuk3975)
* [#30052](https://github.com/PrestaShop/PrestaShop/pull/30052): Added required attribute on text input for admin controller. Thank you [@nicosomb](https://github.com/nicosomb)
* [#30031](https://github.com/PrestaShop/PrestaShop/pull/30031): Introduce single unified UpdateProductCommand. Thank you [@zuk3975](https://github.com/zuk3975)
* [#29977](https://github.com/PrestaShop/PrestaShop/pull/29977): Updating default combination is now take into account when submitting the form. Thank you [@lartist](https://github.com/lartist)
* [#28917](https://github.com/PrestaShop/PrestaShop/pull/28917): Display an error message if editing by zero on quantity field, by [@Progi1984](https://github.com/Progi1984)


### Front office
* [#29104](https://github.com/PrestaShop/PrestaShop/pull/29104): Fix missing id_guest in cookie. Thank you [@Seb33300](https://github.com/Seb33300)


### Installer
* [#29765](https://github.com/PrestaShop/PrestaShop/pull/29765): Changed message when PHP version is not correct. Thank you [@nicosomb](https://github.com/nicosomb)
* [#29750](https://github.com/PrestaShop/PrestaShop/pull/29750): Replace AppKernel version constants by prestashop versions. Thank you [@FabienPapet](https://github.com/FabienPapet)
* [#28500](https://github.com/PrestaShop/PrestaShop/pull/28500): Add a lock file during the install (and it's removed only if the install is well finished), by [@Progi1984](https://github.com/Progi1984)


### Web services
* [#29135](https://github.com/PrestaShop/PrestaShop/pull/29135): Webservice: honor maximum image upload size. Thank you [@balejk](https://github.com/balejk)


### Tests
* [#30127](https://github.com/PrestaShop/PrestaShop/pull/30127): Functional tests - Fix errors in nightly develop . Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '8.0.x' branch


### Core
* [#30116](https://github.com/PrestaShop/PrestaShop/pull/30116): Update twig dependency, by [@jolelievre](https://github.com/jolelievre)
* [#30080](https://github.com/PrestaShop/PrestaShop/pull/30080): Do not force new translation system when no domain is provided, by [@atomiix](https://github.com/atomiix)
* [#29079](https://github.com/PrestaShop/PrestaShop/pull/29079): Change default assignation of Product::pack_stock_type. Thank you [@abramofranchetti](https://github.com/abramofranchetti)


### Back office
* [#29996](https://github.com/PrestaShop/PrestaShop/pull/29996): Fix saving status code 410 on the product page v1, by [@kpodemski](https://github.com/kpodemski)
* [#29783](https://github.com/PrestaShop/PrestaShop/pull/29783): Migrate node-sass to sass-embedded on default theme, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#29372](https://github.com/PrestaShop/PrestaShop/pull/29372): Hide suppliers if there are no suppliers on product v2, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#29084](https://github.com/PrestaShop/PrestaShop/pull/29084): 27054: fixed taxes for wrong countries. Thank you [@margud](https://github.com/margud)


### Front office
* [#30113](https://github.com/PrestaShop/PrestaShop/pull/30113): Update classic theme, by [@jolelievre](https://github.com/jolelievre)


### Web services
* [#29756](https://github.com/PrestaShop/PrestaShop/pull/29756): Fix error on patch method because of php 8.0 throw a fatal error. Thank you [@mflasquin](https://github.com/mflasquin)


### Tests
* [#30068](https://github.com/PrestaShop/PrestaShop/pull/30068): Functional tests - Fix nightly 19/10 (Fix FO > send message test). Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#29992](https://github.com/PrestaShop/PrestaShop/pull/29992): Better escape PR description for the Pull Request Validator Github action, by [@atomiix](https://github.com/atomiix)


## Code changes in the '1.7.8.x' branch


### Core
* [#29636](https://github.com/PrestaShop/PrestaShop/pull/29636): Upgrade Smarty to 3.1.47. Thank you [@mflasquin](https://github.com/mflasquin)


### Back office
* [#29465](https://github.com/PrestaShop/PrestaShop/pull/29465): Add available_now & available_later labels constraints. Thank you [@zuk3975](https://github.com/zuk3975)


### Front office
* [#29715](https://github.com/PrestaShop/PrestaShop/pull/29715): Fix discount detail in cart when a product has en ecotax with applied tax. Thank you [@mflasquin](https://github.com/mflasquin)


### Installer
* [#30099](https://github.com/PrestaShop/PrestaShop/pull/30099): Fix issue on fresh installation with docker in branch 1.7.8.x. Thank you [@sefirosweb](https://github.com/sefirosweb)


## Code changes in modules, themes & tools


### Docker internal images
* [#40](https://github.com/PrestaShop/docker-internal-images/pull/40): Fix permission issue while regenerating htaccess, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#39](https://github.com/PrestaShop/docker-internal-images/pull/39): Add build for PS v8, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Faceted search module
* [#730](https://github.com/PrestaShop/ps_facetedsearch/pull/730): Bump @babel/node from 7.19.1 to 7.20.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#725](https://github.com/PrestaShop/ps_facetedsearch/pull/725): Bump eslint from 8.25.0 to 8.26.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#724](https://github.com/PrestaShop/ps_facetedsearch/pull/724): Bump @babel/core from 7.19.3 to 7.19.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#691](https://github.com/PrestaShop/ps_facetedsearch/pull/691): Add configuration to use jquery ui slider. Thank you [@zuk3975](https://github.com/zuk3975)


### Hummingbird theme
* [#385](https://github.com/PrestaShop/hummingbird/pull/385): Merge develop into master, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#384](https://github.com/PrestaShop/hummingbird/pull/384): Add preview and change url. Thank you [@Hlavtox](https://github.com/Hlavtox)
* [#381](https://github.com/PrestaShop/hummingbird/pull/381): Hide Previous/Next labels for mobile screens. Thank you [@lucrp](https://github.com/lucrp)
* [#380](https://github.com/PrestaShop/hummingbird/pull/380): Change second $badge-padding-y to $badge-padding-x. Thank you [@lucrp](https://github.com/lucrp)


### Changes in developer documentation sources
* [#1564](https://github.com/PrestaShop/docs/pull/1564): Change version 1.7 of doc to previous. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1563](https://github.com/PrestaShop/docs/pull/1563): Change current version of v8 doc to current. Thank you [@thomasnares](https://github.com/thomasnares)
* [#1560](https://github.com/PrestaShop/docs/pull/1560): getting-started.md grammar mistake corrected  . Thank you [@ThanasisMpalatsoukas](https://github.com/ThanasisMpalatsoukas)
* [#1558](https://github.com/PrestaShop/docs/pull/1558): Add a doc about Module Self Configurator feature. Thank you [@thomasnares](https://github.com/thomasnares)


### Docker images
* [#321](https://github.com/PrestaShop/docker/pull/321): Update README to us 8.0 instead of 1.7, by [@matks](https://github.com/matks)
* [#320](https://github.com/PrestaShop/docker/pull/320): Images for 8.0.0, by [@jolelievre](https://github.com/jolelievre)


### Classic theme
* [#68](https://github.com/PrestaShop/classic-theme/pull/68): Bump version 2.0.6, by [@kpodemski](https://github.com/kpodemski)
* [#67](https://github.com/PrestaShop/classic-theme/pull/67): Handling asynchronous prestashop.checkPasswordScore. Thank you [@Oksydan](https://github.com/Oksydan)


### Customer reassurance block module
* [#457](https://github.com/PrestaShop/blockreassurance/pull/457): Bump eslint from 8.25.0 to 8.26.0. Built by [@dependabot[bot]](https://github.com/apps/dependabot)
* [#456](https://github.com/PrestaShop/blockreassurance/pull/456): Bump @babel/core from 7.19.3 to 7.19.6. Built by [@dependabot[bot]](https://github.com/apps/dependabot)


### Decimal
* [#24](https://github.com/PrestaShop/decimal/pull/24): Update php.yml. Thank you [@FabienPapet](https://github.com/FabienPapet)


### Example modules
* [#119](https://github.com/PrestaShop/example-modules/pull/119): rm unused class, shorten trans(), correct links, add screenshots. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### The PrestaShop open source project website
* [#131](https://github.com/PrestaShop/open-source/pull/131): Activate Google Analytics, by [@eternoendless](https://github.com/eternoendless)


### Image slider module
* [#76](https://github.com/PrestaShop/ps_imageslider/pull/76): Update URL to prestashop-project.org. Thank you [@PrestaEdit](https://github.com/PrestaEdit)


### Auto Upgrade module
* [#507](https://github.com/PrestaShop/autoupgrade/pull/507): Removed `US/Pacific New` from timezone list, by [@Progi1984](https://github.com/Progi1984)


### Category tree links module
* [#63](https://github.com/PrestaShop/ps_categorytree/pull/63): Wrong usage of psql. Thank you [@jf-viguier](https://github.com/jf-viguier)


### GDPR module
* [#181](https://github.com/PrestaShop/psgdpr/pull/181): fix registerGDPRConsent hook. Thank you [@rsoulard-prolaser](https://github.com/rsoulard-prolaser)


### Prestashop UI Kit
* [#195](https://github.com/PrestaShop/prestashop-ui-kit/pull/195): Remove modal border, by [@NeOMakinG](https://github.com/NeOMakinG)


### Product Comments module
* [#142](https://github.com/PrestaShop/productcomments/pull/142): Simplify Type casting. Thank you [@leemyongpakvn](https://github.com/leemyongpakvn)


### Wire payment module
* [#77](https://github.com/PrestaShop/ps_wirepayment/pull/77): Fixed the Bank Address mandatory field, by [@Progi1984](https://github.com/Progi1984)


### PrestaShop Specifications
* [#347](https://github.com/PrestaShop/prestashop-specs/pull/347): Specs cross-selling. Thank you [@Saimis777](https://github.com/Saimis777)
* [#346](https://github.com/PrestaShop/prestashop-specs/pull/346): Link Widget (List Widget). Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#345](https://github.com/PrestaShop/prestashop-specs/pull/345): Order Messages. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#344](https://github.com/PrestaShop/prestashop-specs/pull/344): Add / Edit Order Message. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#343](https://github.com/PrestaShop/prestashop-specs/pull/343): Specs contact information. Thank you [@Saimis777](https://github.com/Saimis777)
* [#342](https://github.com/PrestaShop/prestashop-specs/pull/342): Specs payments by check. Thank you [@Saimis777](https://github.com/Saimis777)
* [#341](https://github.com/PrestaShop/prestashop-specs/pull/341): Catalog monitoring. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#340](https://github.com/PrestaShop/prestashop-specs/pull/340): Specs bank transfer module. Thank you [@Saimis777](https://github.com/Saimis777)
* [#339](https://github.com/PrestaShop/prestashop-specs/pull/339): Specs mail alerts. Thank you [@Saimis777](https://github.com/Saimis777)
* [#338](https://github.com/PrestaShop/prestashop-specs/pull/338): Specs titles. Thank you [@Saimis777](https://github.com/Saimis777)
* [#337](https://github.com/PrestaShop/prestashop-specs/pull/337): Advanced parameters  - DB Backup. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#336](https://github.com/PrestaShop/prestashop-specs/pull/336): Advanced parameters - Administration. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#335](https://github.com/PrestaShop/prestashop-specs/pull/335): Specs customer settings. Thank you [@Saimis777](https://github.com/Saimis777)
* [#333](https://github.com/PrestaShop/prestashop-specs/pull/333): Credit notes specs. Thank you [@Saimis777](https://github.com/Saimis777)
* [#332](https://github.com/PrestaShop/prestashop-specs/pull/332): Delivery slips. Thank you [@Saimis777](https://github.com/Saimis777)
* [#331](https://github.com/PrestaShop/prestashop-specs/pull/331): specs-invoices. Thank you [@Saimis777](https://github.com/Saimis777)
* [#330](https://github.com/PrestaShop/prestashop-specs/pull/330): Add / Edit SEO URLs. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#329](https://github.com/PrestaShop/prestashop-specs/pull/329): Specs profiles. Thank you [@Saimis777](https://github.com/Saimis777)
* [#328](https://github.com/PrestaShop/prestashop-specs/pull/328): Specs employees. Thank you [@Saimis777](https://github.com/Saimis777)
* [#325](https://github.com/PrestaShop/prestashop-specs/pull/325): Disambiguation concerning module translation. Thank you [@lmeyer1](https://github.com/lmeyer1)
* [#323](https://github.com/PrestaShop/prestashop-specs/pull/323): Specs-logs. Thank you [@Saimis777](https://github.com/Saimis777)
* [#322](https://github.com/PrestaShop/prestashop-specs/pull/322): Specs localization. Thank you [@Saimis777](https://github.com/Saimis777)
* [#321](https://github.com/PrestaShop/prestashop-specs/pull/321): Payment preferences. Thank you [@Saimis777](https://github.com/Saimis777)
* [#320](https://github.com/PrestaShop/prestashop-specs/pull/320): Email specs. Thank you [@Saimis777](https://github.com/Saimis777)
* [#317](https://github.com/PrestaShop/prestashop-specs/pull/317): Specs multistore. Thank you [@Saimis777](https://github.com/Saimis777)
* [#315](https://github.com/PrestaShop/prestashop-specs/pull/315): Specs categories. Thank you [@Saimis777](https://github.com/Saimis777)
* [#314](https://github.com/PrestaShop/prestashop-specs/pull/314): Specs general settings. Thank you [@Saimis777](https://github.com/Saimis777)
* [#313](https://github.com/PrestaShop/prestashop-specs/pull/313): Performance tab. Thank you [@Saimis777](https://github.com/Saimis777)
* [#312](https://github.com/PrestaShop/prestashop-specs/pull/312): Update information.md. Thank you [@Saimis777](https://github.com/Saimis777)
* [#311](https://github.com/PrestaShop/prestashop-specs/pull/311): Stock specs. Thank you [@Saimis777](https://github.com/Saimis777)
* [#310](https://github.com/PrestaShop/prestashop-specs/pull/310): Delivery Slips. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#309](https://github.com/PrestaShop/prestashop-specs/pull/309): Invoices. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#308](https://github.com/PrestaShop/prestashop-specs/pull/308): Specs brands and suppliers. Thank you [@Saimis777](https://github.com/Saimis777)
* [#307](https://github.com/PrestaShop/prestashop-specs/pull/307): Modules. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#306](https://github.com/PrestaShop/prestashop-specs/pull/306): Design theme&logo   specs. Thank you [@Saimis777](https://github.com/Saimis777)
* [#305](https://github.com/PrestaShop/prestashop-specs/pull/305): Add new field. Thank you [@MatShir](https://github.com/MatShir)
* [#301](https://github.com/PrestaShop/prestashop-specs/pull/301): Clarify translation and export of theme translations, by [@eternoendless](https://github.com/eternoendless)
* [#300](https://github.com/PrestaShop/prestashop-specs/pull/300): Customers specs. Thank you [@Saimis777](https://github.com/Saimis777)
* [#299](https://github.com/PrestaShop/prestashop-specs/pull/299): Add 410 gone to specs. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#298](https://github.com/PrestaShop/prestashop-specs/pull/298): Traffic & SEO. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#297](https://github.com/PrestaShop/prestashop-specs/pull/297): Outstanding. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#296](https://github.com/PrestaShop/prestashop-specs/pull/296): addresses-specs. Thank you [@Saimis777](https://github.com/Saimis777)
* [#295](https://github.com/PrestaShop/prestashop-specs/pull/295): Permissions. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#293](https://github.com/PrestaShop/prestashop-specs/pull/293): Specs countries. Thank you [@Saimis777](https://github.com/Saimis777)
* [#292](https://github.com/PrestaShop/prestashop-specs/pull/292): SimonasB88 - Taxes. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#286](https://github.com/PrestaShop/prestashop-specs/pull/286): Dashboard specs. Thank you [@Saimis777](https://github.com/Saimis777)
* [#285](https://github.com/PrestaShop/prestashop-specs/pull/285): SimonasB88 - Import. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#274](https://github.com/PrestaShop/prestashop-specs/pull/274): Simonas B88 - Login. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#273](https://github.com/PrestaShop/prestashop-specs/pull/273): SimonasB88 - Customer service. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#270](https://github.com/PrestaShop/prestashop-specs/pull/270): SimonasB88 - Shopping cart. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#266](https://github.com/PrestaShop/prestashop-specs/pull/266): SimonasB88 - Design Positions. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#262](https://github.com/PrestaShop/prestashop-specs/pull/262): Image Type adding. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#246](https://github.com/PrestaShop/prestashop-specs/pull/246): Cart Rules + Catalog Price Rules. Thank you [@SimonasB88](https://github.com/SimonasB88)
* [#170](https://github.com/PrestaShop/prestashop-specs/pull/170): [WIP] Add split order use cases, by [@LouiseBonnard](https://github.com/LouiseBonnard)
* [#88](https://github.com/PrestaShop/prestashop-specs/pull/88): [WIP]Specs for breadcrumbs in Front-office. Thank you [@sam-pires](https://github.com/sam-pires)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@zuk3975](https://github.com/zuk3975), [@dependabot[bot]](https://github.com/apps/dependabot), [@NeOMakinG](https://github.com/NeOMakinG), [@Hlavtox](https://github.com/Hlavtox), [@thomasnares](https://github.com/thomasnares), [@PrestaEdit](https://github.com/PrestaEdit), [@matks](https://github.com/matks), [@lartist](https://github.com/lartist), [@jolelievre](https://github.com/jolelievre), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@lucrp](https://github.com/lucrp), [@kpodemski](https://github.com/kpodemski), [@ThanasisMpalatsoukas](https://github.com/ThanasisMpalatsoukas), [@Oksydan](https://github.com/Oksydan), [@sefirosweb](https://github.com/sefirosweb), [@FabienPapet](https://github.com/FabienPapet), [@atomiix](https://github.com/atomiix), [@leemyongpakvn](https://github.com/leemyongpakvn), [@nicosomb](https://github.com/nicosomb), [@eternoendless](https://github.com/eternoendless), [@sashashura](https://github.com/sashashura), [@mflasquin](https://github.com/mflasquin), [@Progi1984](https://github.com/Progi1984), [@jf-viguier](https://github.com/jf-viguier), [@rsoulard-prolaser](https://github.com/rsoulard-prolaser), [@PululuK](https://github.com/PululuK), [@clotairer](https://github.com/clotairer), [@balejk](https://github.com/balejk), [@Seb33300](https://github.com/Seb33300), [@margud](https://github.com/margud), [@abramofranchetti](https://github.com/abramofranchetti), [@Saimis777](https://github.com/Saimis777), [@SimonasB88](https://github.com/SimonasB88), [@lmeyer1](https://github.com/lmeyer1), [@MatShir](https://github.com/MatShir), [@LouiseBonnard](https://github.com/LouiseBonnard), [@sam-pires](https://github.com/sam-pires)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/8/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/8/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/8/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

