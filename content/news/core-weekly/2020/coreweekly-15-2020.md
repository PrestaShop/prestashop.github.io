---
layout: post
aliases: ["/news/coreweekly-15-2020"]
title:  "PrestaShop Core Weekly - Week 15 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-04-16
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 06th to Sunday 12th of April 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [97 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-04-06..2020-04-12) have been created in the project repositories;
- [59 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-04-06..2020-04-12), including [14 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-04-06..2020-04-12) on the core;
- [47 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-04-06..2020-04-12) in the project repositories;
- [93 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-04-06..2020-04-12), including [56 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-04-06..2020-04-12).
        


## Code changes in the 'develop' branch


### Core
* [#18539](https://github.com/PrestaShop/PrestaShop/pull/18539): Fix minor code issue in BooleanColumn. Thank you [@PululuK](https://github.com/PululuK)
* [#18530](https://github.com/PrestaShop/PrestaShop/pull/18530): Indentation is broken due to missing cs fixer configuration, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#18352](https://github.com/PrestaShop/PrestaShop/pull/18352): Fix language used in pdf attachement sent by mail, by [@Matt75](https://github.com/Matt75)
* [#18185](https://github.com/PrestaShop/PrestaShop/pull/18185): Add a few phpdoc, by [@matks](https://github.com/matks)


### Back office
* [#18327](https://github.com/PrestaShop/PrestaShop/pull/18327): Fix regex for category thumb delete route. Thank you [@gett-thijssimonis](https://github.com/gett-thijssimonis)
* [#17860](https://github.com/PrestaShop/PrestaShop/pull/17860): Fix display for RTL languages for Helper cards by changing animation, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#18459](https://github.com/PrestaShop/PrestaShop/pull/18459): Fix h1 on brandlist and supplierlist module that shouldn't be an h1, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#17296](https://github.com/PrestaShop/PrestaShop/pull/17296): Add displayProductPriceBlock hook. Thank you [@idnovate](https://github.com/idnovate)


### Tests
* [#18485](https://github.com/PrestaShop/PrestaShop/pull/18485): Functional tests - Fix tests brands for nightly 07-04, by [@boubkerbribri](https://github.com/boubkerbribri)


### Merge
* [#18563](https://github.com/PrestaShop/PrestaShop/pull/18563): Merge 1.7.7.x into develop, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#18446](https://github.com/PrestaShop/PrestaShop/pull/18446): Merge 1.7.7.x into develop - 06/04/2020, by [@jolelievre](https://github.com/jolelievre)


## Code changes in the '1.7.7.x' branch


### Back office
* [#18515](https://github.com/PrestaShop/PrestaShop/pull/18515): Fix some css to avoid max width on many languages, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#18438](https://github.com/PrestaShop/PrestaShop/pull/18438): Fix currency buttons on edit and add page not aligned by adding styles and changing markup, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#18437](https://github.com/PrestaShop/PrestaShop/pull/18437): Fix sidebar not displayed in BO order page, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#18321](https://github.com/PrestaShop/PrestaShop/pull/18321): Do not stack free shipping vouchers on total: shipping fees applied once, by [@matks](https://github.com/matks)
* [#18228](https://github.com/PrestaShop/PrestaShop/pull/18228): Improve common search controller for backward compatibility, by [@jolelievre](https://github.com/jolelievre)
* [#18204](https://github.com/PrestaShop/PrestaShop/pull/18204): BO : Order > Products : The block discounts was not displayed after adding a product, by [@Progi1984](https://github.com/Progi1984)
* [#17852](https://github.com/PrestaShop/PrestaShop/pull/17852): Fix exception when adding negative amount/percentage discount in order view, by [@atomiix](https://github.com/atomiix)
* [#17736](https://github.com/PrestaShop/PrestaShop/pull/17736): Fix products search results order in SearchProductsHandler. Thank you [@zuk3975](https://github.com/zuk3975)


### Tests
* [#18548](https://github.com/PrestaShop/PrestaShop/pull/18548): Composer failed to be installed properly, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#18540](https://github.com/PrestaShop/PrestaShop/pull/18540): Improve nightly log reports, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#18505](https://github.com/PrestaShop/PrestaShop/pull/18505): Functional tests - Payment > Preferences test group restrictions. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18490](https://github.com/PrestaShop/PrestaShop/pull/18490): Functional tests - Add test 'Send a test email', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18486](https://github.com/PrestaShop/PrestaShop/pull/18486): Functional tests - Fix test filter stocks by category, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18476](https://github.com/PrestaShop/PrestaShop/pull/18476): Functional tests - Fix tests brands and suppliers, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18465](https://github.com/PrestaShop/PrestaShop/pull/18465): Functional tests - Add test 'Export languages' in translations page, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18457](https://github.com/PrestaShop/PrestaShop/pull/18457): Functional tests - Add filter customer to 'Filter orders' tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18452](https://github.com/PrestaShop/PrestaShop/pull/18452): Functional tests - Add tests Help card for pages employees, profiles, db backups, sql manager and webservice, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18442](https://github.com/PrestaShop/PrestaShop/pull/18442): Functional tests - Add tests help card for pages Localization, Currencies and Languages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18436](https://github.com/PrestaShop/PrestaShop/pull/18436): Functional tests - Add test 'Enable delivery time in stock products', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18435](https://github.com/PrestaShop/PrestaShop/pull/18435): Functional tests - Localization test default language. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18426](https://github.com/PrestaShop/PrestaShop/pull/18426): Functional tests - Add test for order setting gift options, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18422](https://github.com/PrestaShop/PrestaShop/pull/18422): Functional tests - Product settings test label of in-stock products. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in the '1.7.6.x' branch


### Front office
* [#18493](https://github.com/PrestaShop/PrestaShop/pull/18493): Change product redirection rules to redirect to valid attribute url, by [@jolelievre](https://github.com/jolelievre)


### Installer
* [#18491](https://github.com/PrestaShop/PrestaShop/pull/18491): Installation under CLI doesn't take BASE_URI and Apache rewrite in consideration, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#18451](https://github.com/PrestaShop/PrestaShop/pull/18451): Use scandir instead of readdir to get sorted entities, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in modules, themes & tools


### ps_brandlist
* [#8](https://github.com/PrestaShop/ps_brandlist/pull/8): Fixed display link brand based on the bad configuration (Manufacturers rather than Suppliers), by [@Progi1984](https://github.com/Progi1984)


### Google Analytics module
* [#47](https://github.com/PrestaShop/ps_googleanalytics/pull/47): Update Readme with details on google settings. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Order Notifications on the Favicon
* [#12](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/12): Remove ModuleAdminControllers from SEO & URLs page, by [@Matt75](https://github.com/Matt75)


### The PrestaShop open source project
* [#32](https://github.com/PrestaShop/open-source/pull/32): New channels, by [@ttoine](https://github.com/ttoine)
* [#31](https://github.com/PrestaShop/open-source/pull/31): Add a list of apps and integrations used on the project's Slack. Thank you [@sam-pires](https://github.com/sam-pires)


### Prestashop UI Kit
* [#92](https://github.com/PrestaShop/prestashop-ui-kit/pull/92): Make SCSS importable from Prestakit as a npm dependency and add webpack babel presets, by [@NeOMakinG](https://github.com/NeOMakinG)


### Dashboard Products
* [#20](https://github.com/PrestaShop/dashproducts/pull/20): Fix product URL. Thank you [@davidglezz](https://github.com/davidglezz)


### Changes in developer documentation
* [#479](https://github.com/PrestaShop/docs/pull/479): Add new 177 hooks, along with beginning of the version updates, by [@jolelievre](https://github.com/jolelievre)
* [#426](https://github.com/PrestaShop/docs/pull/426): Adding stylelint documentation, by [@NeOMakinG](https://github.com/NeOMakinG)


### Contact Form
* [#33](https://github.com/PrestaShop/contactform/pull/33): Fix  Exception - Transplant the contactform module to the displayAdminEndContent hook. Thank you [@arouiadib](https://github.com/arouiadib)


### Email subscription module
* [#48](https://github.com/PrestaShop/ps_emailsubscription/pull/48): Manage newsletter subscription in a modern ajax way. Thank you [@jf-viguier](https://github.com/jf-viguier)


### Check payment
* [#25](https://github.com/PrestaShop/ps_checkpayment/pull/25): Reformat payment_return by using a bullet list and paragraphs. Thank you [@yannicka](https://github.com/yannicka)
* [#14](https://github.com/PrestaShop/ps_checkpayment/pull/14): Deduction of amount already paid. Thank you [@timactive](https://github.com/timactive)


### Shopping cart module
* [#43](https://github.com/PrestaShop/ps_shoppingcart/pull/43): Uninstall module used on PS 1.6 before using this one, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### Share Buttons module
* [#27](https://github.com/PrestaShop/ps_sharebuttons/pull/27): Encode URL to follow RFC 1866 (another attempt). Thank you [@watou](https://github.com/watou)


### OnBoarding
* [#54](https://github.com/PrestaShop/welcome/pull/54): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Pages not found
* [#7](https://github.com/PrestaShop/pagesnotfound/pull/7): Remove outdated CHANGELOG, by [@matks](https://github.com/matks)


### Wire payment module
* [#21](https://github.com/PrestaShop/ps_wirepayment/pull/21): MO : Deduction of amount already paid. Thank you [@timactive](https://github.com/timactive)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@PierreRambaud](https://github.com/PierreRambaud), [@PululuK](https://github.com/PululuK), [@NeOMakinG](https://github.com/NeOMakinG), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@jolelievre](https://github.com/jolelievre), [@Progi1984](https://github.com/Progi1984), [@boubkerbribri](https://github.com/boubkerbribri), [@Hlavtox](https://github.com/Hlavtox), [@Matt75](https://github.com/Matt75), [@ttoine](https://github.com/ttoine), [@sam-pires](https://github.com/sam-pires), [@matthieu-rolland](https://github.com/matthieu-rolland), [@gett-thijssimonis](https://github.com/gett-thijssimonis), [@matks](https://github.com/matks), [@davidglezz](https://github.com/davidglezz), [@atomiix](https://github.com/atomiix), [@arouiadib](https://github.com/arouiadib), [@zuk3975](https://github.com/zuk3975), [@idnovate](https://github.com/idnovate), [@jf-viguier](https://github.com/jf-viguier), [@yannicka](https://github.com/yannicka), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@watou](https://github.com/watou), [@MathiasReker](https://github.com/MathiasReker), [@timactive](https://github.com/timactive)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
