---
layout: post
aliases: ["/news/coreweekly-week-40-2019"]
title:  "PrestaShop Core Weekly - Week 40 of 2019"
subtitle: "An inside look at the PrestaShop codebase"
date:   2019-11-05 15:50:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 30th of September to Sunday 6th of October 2019.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [80 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2019-09-30..2019-10-06) have been created in the project repositories;
- [78 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2019-09-30..2019-10-06), including [18 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2019-09-30..2019-10-06) on the core;
- [61 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2019-09-30..2019-10-06) in the project repositories;
- [71 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2019-09-30..2019-10-06), including [63 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2019-09-30..2019-10-06).
        

## Code changes in the 'develop' branch

### Core

* [#15755](https://github.com/PrestaShop/PrestaShop/pull/15755): CLDR Specification\Number should be immutable, by [@Progi1984](https://github.com/Progi1984)
* [#15616](https://github.com/PrestaShop/PrestaShop/pull/15616): Refuse empty customer first and last names, by [@matks](https://github.com/matks)
* [#15388](https://github.com/PrestaShop/PrestaShop/pull/15388): Migration of Orders View page. Thank you [@sarjon](https://github.com/sarjon)
* [#14665](https://github.com/PrestaShop/PrestaShop/pull/14665): Allow to display/hide manufacturers and suppliers independently, by [@matthieu-rolland](https://github.com/matthieu-rolland)

### Back office

* [#15766](https://github.com/PrestaShop/PrestaShop/pull/15766): Prepares Twig templates for Add Order page. Thank you [@zuk3975](https://github.com/zuk3975)
* [#15765](https://github.com/PrestaShop/PrestaShop/pull/15765): Fix parameter $id_hook to int, not boolean. Thank you [@JBWModules](https://github.com/JBWModules)
* [#15761](https://github.com/PrestaShop/PrestaShop/pull/15761): Fix order view page wordings, by [@matks](https://github.com/matks)
* [#15130](https://github.com/PrestaShop/PrestaShop/pull/15130): Simplify rendering of forms. Thank you [@sarjon](https://github.com/sarjon)
* [#15111](https://github.com/PrestaShop/PrestaShop/pull/15111): Fix wording domains, by [@eternoendless](https://github.com/eternoendless)
* [#14767](https://github.com/PrestaShop/PrestaShop/pull/14767): Behat tests for Seo & Urls page commands - some code improvements. Thank you [@tomas862](https://github.com/tomas862)
* [#14396](https://github.com/PrestaShop/PrestaShop/pull/14396): Migrate Catalog > Attributes&Features > Features > Add new/edit feature page (blocked by faceted_search update). Thank you [@rokaszygmantas](https://github.com/rokaszygmantas)
* [#12855](https://github.com/PrestaShop/PrestaShop/pull/12855): Add Manufacturer Part Number in product codes. Thank you [@rblaurin](https://github.com/rblaurin)

### Front office

* [#15758](https://github.com/PrestaShop/PrestaShop/pull/15758): Image not correctly resized in FO product listing if height is too high, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#15750](https://github.com/PrestaShop/PrestaShop/pull/15750): Update jQuery to 3.4.1 in Core theme and Classic theme, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#15748](https://github.com/PrestaShop/PrestaShop/pull/15748): Use cover photo in listing instead of default combination, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#15739](https://github.com/PrestaShop/PrestaShop/pull/15739): Fixing - The product doesn't get add to cart after deleting product customisation. Thank you [@PeeyushAgrawalWebkul](https://github.com/PeeyushAgrawalWebkul)
* [#15549](https://github.com/PrestaShop/PrestaShop/pull/15549): Fix calculation price in group reductions when in tax excluded mode, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#15297](https://github.com/PrestaShop/PrestaShop/pull/15297): FO: Fix attribute change update on quickview displayProductAdditionalInfo hook. Thank you [@dheerajwebkul](https://github.com/dheerajwebkul)
* [#14489](https://github.com/PrestaShop/PrestaShop/pull/14489): Fix #13497 : possible to order product transformed from regular into product with combinations. Thank you [@202-ecommerce](https://github.com/202-ecommerce)
* [#13517](https://github.com/PrestaShop/PrestaShop/pull/13517): Show free shipping indication only if appropriate. Thank you [@hacchus](https://github.com/hacchus)
* [#13022](https://github.com/PrestaShop/PrestaShop/pull/13022): Remove deprecated customization constants & fix undefined index notice. Thank you [@shaffe-fr](https://github.com/shaffe-fr)

### Tests

* [#15811](https://github.com/PrestaShop/PrestaShop/pull/15811): Tests - Fix Login Test, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#15790](https://github.com/PrestaShop/PrestaShop/pull/15790): Tests - Remove chai from Page Objects , by [@boubkerbribri](https://github.com/boubkerbribri)
* [#15772](https://github.com/PrestaShop/PrestaShop/pull/15772): Tests - Fix global Vars in linkchecker, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#15754](https://github.com/PrestaShop/PrestaShop/pull/15754): Tests - Change structure of file globals.js, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#15735](https://github.com/PrestaShop/PrestaShop/pull/15735): Sanity Tests with puppeteer - Refacto of InstallShopTest, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#15651](https://github.com/PrestaShop/PrestaShop/pull/15651): Add common FO page - Puppeteer. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)

## Code changes in the '1.7.6.x' branch (for v1.7.6.2)

### Back office

* [#15685](https://github.com/PrestaShop/PrestaShop/pull/15685): Unable to create new supplier when VAT identification number is mandatory, by [@PierreRambaud](https://github.com/PierreRambaud)

## Code changes in modules, themes & tools

### Changes in developer documentation

* [#373](https://github.com/PrestaShop/docs/pull/373): Fixed spelling mistake. Thank you [@pfortune](https://github.com/pfortune)
* [#368](https://github.com/PrestaShop/docs/pull/368): Fix spelling mistake in configuration.md. Thank you [@pfortune](https://github.com/pfortune)
* [#367](https://github.com/PrestaShop/docs/pull/367): Update use-hooks-on-modern-pages.md. Thank you [@pfortune](https://github.com/pfortune)
* [#366](https://github.com/PrestaShop/docs/pull/366): Fix spelling mistake in objectmodel.md. Thank you [@pfortune](https://github.com/pfortune)
* [#365](https://github.com/PrestaShop/docs/pull/365): Added samples for adding a language, by [@Progi1984](https://github.com/Progi1984)
* [#364](https://github.com/PrestaShop/docs/pull/364): Fix bad display in "Decorate the service", by [@matks](https://github.com/matks)
* [#363](https://github.com/PrestaShop/docs/pull/363): Fix Symfony services decoration how-to, by [@matks](https://github.com/matks)
* [#362](https://github.com/PrestaShop/docs/pull/362): Documentation : Add a language, by [@Progi1984](https://github.com/Progi1984)
* [#361](https://github.com/PrestaShop/docs/pull/361): Add notes that db account with full privileges have to be used. Thank you [@Mirgen](https://github.com/Mirgen)
* [#360](https://github.com/PrestaShop/docs/pull/360): Import severity and review process build articles into the doc, by [@matks](https://github.com/matks)
* [#359](https://github.com/PrestaShop/docs/pull/359): Add Laragon as an WAMP environment. Thank you [@yannicka](https://github.com/yannicka)

### Block Reassurance module

* [#32](https://github.com/PrestaShop/blockreassurance/pull/32): Release 4.1.1, by [@Progi1984](https://github.com/Progi1984)
* [#31](https://github.com/PrestaShop/blockreassurance/pull/31): Release 4.1.1, by [@Progi1984](https://github.com/Progi1984)
* [#30](https://github.com/PrestaShop/blockreassurance/pull/30): Fixed autoload on PS 1.7.5.x (and before), by [@Progi1984](https://github.com/Progi1984)
* [#29](https://github.com/PrestaShop/blockreassurance/pull/29): Release 4.1.0, by [@Progi1984](https://github.com/Progi1984)
* [#28](https://github.com/PrestaShop/blockreassurance/pull/28): Release 4.1.0, by [@Progi1984](https://github.com/Progi1984)
* [#27](https://github.com/PrestaShop/blockreassurance/pull/27): Fix feedback (Add block, design, responsive), by [@Progi1984](https://github.com/Progi1984)

### core-weekly-generator

* [#6](https://github.com/PrestaShop/core-weekly-generator/pull/6): Fix format error, by [@matks](https://github.com/matks)
* [#5](https://github.com/PrestaShop/core-weekly-generator/pull/5): Refactoring, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#4](https://github.com/PrestaShop/core-weekly-generator/pull/4): Small fix about blank line at the top, by [@matks](https://github.com/matks)
* [#3](https://github.com/PrestaShop/core-weekly-generator/pull/3): V2 with python, by [@matks](https://github.com/matks)

### ps_emailsubscription

* [#44](https://github.com/PrestaShop/ps_emailsubscription/pull/44): Release 2.5.1, by [@matks](https://github.com/matks)
* [#43](https://github.com/PrestaShop/ps_emailsubscription/pull/43): Bump to v2.5.1, add contributors file, by [@matks](https://github.com/matks)
* [#41](https://github.com/PrestaShop/ps_emailsubscription/pull/41): Fix compatibility of v2.5 with PS 1.7.6 and 1.7.5, by [@matks](https://github.com/matks)

### TranslationTools Bundle

* [#67](https://github.com/PrestaShop/TranslationToolsBundle/pull/67): Allow twig 1 instead only twig 2, by [@PierreRambaud](https://github.com/PierreRambaud)

### CsaGuzzleBundle

* [#6](https://github.com/PrestaShop/CsaGuzzleBundle/pull/6): Allow twig 1 instead only twig 2, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#5](https://github.com/PrestaShop/CsaGuzzleBundle/pull/5): Update README of master branch with fork message, by [@matks](https://github.com/matks)

### Classic-rocket theme

* [#100](https://github.com/PrestaShop/classic-rocket/pull/100): Change type for phone_mobile field. Thank you [@micka-fdz](https://github.com/micka-fdz)

### productcomments

* [#38](https://github.com/PrestaShop/productcomments/pull/38): Fix for product display in modal. Thank you [@Oksydan](https://github.com/Oksydan)

### PrestaShop-1.6 (legacy repository)

* [#2](https://github.com/PrestaShop/PrestaShop-1.6/pull/2): Update README.md, by [@ttoine](https://github.com/ttoine)

### TranslationFiles

* [#7](https://github.com/PrestaShop/TranslationFiles/pull/7): Add Tagalog & Uzbek, by [@Progi1984](https://github.com/Progi1984)

### Faceted search module

* [#144](https://github.com/PrestaShop/ps_facetedsearch/pull/144): Use public_name instead of name for attribute group, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#143](https://github.com/PrestaShop/ps_facetedsearch/pull/143): Reset page filter when using slider, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#133](https://github.com/PrestaShop/ps_facetedsearch/pull/133): Update for migrated Features create/edit form. Thank you [@zuk3975](https://github.com/zuk3975)

### pscleaner

* [#25](https://github.com/PrestaShop/pscleaner/pull/25): Remove Older Ps versions conditions. Thank you [@nenes25](https://github.com/nenes25)

<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@pfortune](https://github.com/pfortune), [@boubkerbribri](https://github.com/boubkerbribri), [@Progi1984](https://github.com/Progi1984), [@Progi1984](https://github.com/Progi1984), [@pfortune](https://github.com/pfortune), [@pfortune](https://github.com/pfortune), [@Progi1984](https://github.com/Progi1984), [@pfortune](https://github.com/pfortune), [@Progi1984](https://github.com/Progi1984), [@matks](https://github.com/matks), [@matks](https://github.com/matks), [@matks](https://github.com/matks), [@Progi1984](https://github.com/Progi1984), [@boubkerbribri](https://github.com/boubkerbribri), [@Mirgen](https://github.com/Mirgen), [@PierreRambaud](https://github.com/PierreRambaud), [@boubkerbribri](https://github.com/boubkerbribri), [@Progi1984](https://github.com/Progi1984), [@zuk3975](https://github.com/zuk3975), [@JBWModules](https://github.com/JBWModules), [@matks](https://github.com/matks), [@matks](https://github.com/matks), [@matks](https://github.com/matks), [@PierreRambaud](https://github.com/PierreRambaud), [@Progi1984](https://github.com/Progi1984), [@matks](https://github.com/matks), [@yannicka](https://github.com/yannicka), [@Progi1984](https://github.com/Progi1984), [@boubkerbribri](https://github.com/boubkerbribri), [@PierreRambaud](https://github.com/PierreRambaud), [@PierreRambaud](https://github.com/PierreRambaud), [@micka-fdz](https://github.com/micka-fdz), [@matks](https://github.com/matks), [@matthieu-rolland](https://github.com/matthieu-rolland), [@PierreRambaud](https://github.com/PierreRambaud), [@PeeyushAgrawalWebkul](https://github.com/PeeyushAgrawalWebkul), [@Oksydan](https://github.com/Oksydan), [@matks](https://github.com/matks), [@boubkerbribri](https://github.com/boubkerbribri), [@ttoine](https://github.com/ttoine), [@Progi1984](https://github.com/Progi1984), [@PierreRambaud](https://github.com/PierreRambaud), [@PierreRambaud](https://github.com/PierreRambaud), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@PierreRambaud](https://github.com/PierreRambaud), [@matks](https://github.com/matks), [@Progi1984](https://github.com/Progi1984), [@matks](https://github.com/matks), [@matthieu-rolland](https://github.com/matthieu-rolland), [@zuk3975](https://github.com/zuk3975), [@sarjon](https://github.com/sarjon), [@dheerajwebkul](https://github.com/dheerajwebkul), [@sarjon](https://github.com/sarjon), [@eternoendless](https://github.com/eternoendless), [@matks](https://github.com/matks), [@tomas862](https://github.com/tomas862), [@matthieu-rolland](https://github.com/matthieu-rolland), [@202-ecommerce](https://github.com/202-ecommerce), [@rokaszygmantas](https://github.com/rokaszygmantas), [@hacchus](https://github.com/hacchus), [@shaffe-fr](https://github.com/shaffe-fr), [@rblaurin](https://github.com/rblaurin), [@nenes25](https://github.com/nenes25)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!

