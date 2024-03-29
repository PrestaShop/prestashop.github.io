---
layout: post
aliases: ["/news/coreweekly-week-11-2020"]
title:  "PrestaShop Core Weekly - Week 11 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-03-16
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 9th to Sunday 15th of March 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

The coronavirus may be spreading around the world but PrestaShop development continues! Take care of you and people you love.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [76 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-03-09..2020-03-15) have been created in the project repositories;
- [67 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-03-09..2020-03-15), including [32 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-03-09..2020-03-15) on the core;
- [65 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-03-09..2020-03-15) in the project repositories;
- [104 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-03-09..2020-03-15), including [73 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-03-09..2020-03-15).



## Code changes in the 'develop' branch


### Core
* [#17120](https://github.com/PrestaShop/PrestaShop/pull/17120): Fix & remove unneeded reference operators. Thank you [@mvorisek](https://github.com/mvorisek)


### Back office
* [#18098](https://github.com/PrestaShop/PrestaShop/pull/18098): Add return to Tools::deleteFile() method. Thank you [@Arman-Hosseini](https://github.com/Arman-Hosseini)
* [#18051](https://github.com/PrestaShop/PrestaShop/pull/18051): Fix Module Catalog page - The Menu "process-icon-dropdown" is not well displayed on mobile by adjusting sass, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#18041](https://github.com/PrestaShop/PrestaShop/pull/18041): Fix layout problem in BO Products category Filter. Thank you [@davidglezz](https://github.com/davidglezz)
* [#18040](https://github.com/PrestaShop/PrestaShop/pull/18040): Fix Brand dropdown empty value. Thank you [@davidglezz](https://github.com/davidglezz)
* [#18035](https://github.com/PrestaShop/PrestaShop/pull/18035): Fix popover not hidden when changing product tab. Thank you [@davidglezz](https://github.com/davidglezz)
* [#18033](https://github.com/PrestaShop/PrestaShop/pull/18033): Remove tabs for summary and description fields in product page. Thank you [@davidglezz](https://github.com/davidglezz)


### Front office
* [#18068](https://github.com/PrestaShop/PrestaShop/pull/18068): Improve img accessibility. Thank you [@davidglezz](https://github.com/davidglezz)


### Merge
* [#18012](https://github.com/PrestaShop/PrestaShop/pull/18012): Merge 1.7.7.x into develop - 06/03/2020, by [@PierreRambaud](https://github.com/PierreRambaud)


## Code changes in the '1.7.7.x' branch (for v1.7.7.0)


### Core
* [#18050](https://github.com/PrestaShop/PrestaShop/pull/18050): Use proper computing precision in payment module, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17734](https://github.com/PrestaShop/PrestaShop/pull/17734): Register new hook displayFooterCategory for 1770 and rename order hooks, by [@matks](https://github.com/matks)


### Back office
* [#18101](https://github.com/PrestaShop/PrestaShop/pull/18101): Fix typo in hook descriptions, by [@jolelievre](https://github.com/jolelievre)
* [#18054](https://github.com/PrestaShop/PrestaShop/pull/18054): In RTL I have to click 3 times on the checkbox to select the product. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)
* [#18045](https://github.com/PrestaShop/PrestaShop/pull/18045): Fix selector for invoice note manager. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)
* [#17986](https://github.com/PrestaShop/PrestaShop/pull/17986): Fix "Module Manager" menu item not being translatable, by [@eternoendless](https://github.com/eternoendless)
* [#17985](https://github.com/PrestaShop/PrestaShop/pull/17985): Fix customer informations on order page when customer is a guest, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17973](https://github.com/PrestaShop/PrestaShop/pull/17973): Fix pagination on migrated order listing, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17913](https://github.com/PrestaShop/PrestaShop/pull/17913): Remove useless TinyMCE scripts from brand form pages, by [@jolelievre](https://github.com/jolelievre)
* [#17907](https://github.com/PrestaShop/PrestaShop/pull/17907): Fix TinyMCEEditor that shouldn't handle language switching by adding a TranslatableField, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#17877](https://github.com/PrestaShop/PrestaShop/pull/17877): Fix bug when adding a discount on order page, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17839](https://github.com/PrestaShop/PrestaShop/pull/17839): Wrap OrderController::viewAction in try-catch. Thank you [@zuk3975](https://github.com/zuk3975)
* [#17804](https://github.com/PrestaShop/PrestaShop/pull/17804): Fix bug when changing addresses on virtual product command, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17799](https://github.com/PrestaShop/PrestaShop/pull/17799): Order Page: Fix private note that cannot be emptied, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17742](https://github.com/PrestaShop/PrestaShop/pull/17742): Fix country states input toggle on page load. Thank you [@zuk3975](https://github.com/zuk3975)
* [#17650](https://github.com/PrestaShop/PrestaShop/pull/17650): Fixed display for first cell (select all & input) in grid, by [@Progi1984](https://github.com/Progi1984)
* [#17482](https://github.com/PrestaShop/PrestaShop/pull/17482): Allow token for TokenisedUrlsListener class and in form using the method=GET attribute, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#17476](https://github.com/PrestaShop/PrestaShop/pull/17476): Don't allow comma in order payment amount field, by [@atomiix](https://github.com/atomiix)
* [#17292](https://github.com/PrestaShop/PrestaShop/pull/17292): Fixes undefined vars in some migrated controllers. Thank you [@zuk3975](https://github.com/zuk3975)
* [#17090](https://github.com/PrestaShop/PrestaShop/pull/17090): Allow "add address" and "add customer" and "edit address" buttons to be handled in modal, by [@matks](https://github.com/matks)


### Front office
* [#18073](https://github.com/PrestaShop/PrestaShop/pull/18073): Checkout address edition is failing due to missing id_address in action, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#18061](https://github.com/PrestaShop/PrestaShop/pull/18061): Order page: fix stock value update when editing a product, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17917](https://github.com/PrestaShop/PrestaShop/pull/17917): Use appropriate hook name in contact right column, by [@jolelievre](https://github.com/jolelievre)
* [#17901](https://github.com/PrestaShop/PrestaShop/pull/17901): The button add to cart shouldn't be enabled when minimal quantity > quantity. Thank you [@arouiadib](https://github.com/arouiadib)
* [#17843](https://github.com/PrestaShop/PrestaShop/pull/17843): Fix classic them subcategories in menu displayed hover menu by improving JS selector, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#17767](https://github.com/PrestaShop/PrestaShop/pull/17767): [Multishop - BO] Fix orders not appearing in order list for shared space shops, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17438](https://github.com/PrestaShop/PrestaShop/pull/17438): Fix submenu not displayed on mobile on classic theme, by [@NeOMakinG](https://github.com/NeOMakinG)


### Installer
* [#17914](https://github.com/PrestaShop/PrestaShop/pull/17914): Add index on product table for fresh install, by [@jolelievre](https://github.com/jolelievre)


### Tests
* [#18133](https://github.com/PrestaShop/PrestaShop/pull/18133): Functional tests - Design > Pages test helper card. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18071](https://github.com/PrestaShop/PrestaShop/pull/18071): Functional tests - Customers set required fields. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18056](https://github.com/PrestaShop/PrestaShop/pull/18056): Functional tests - Back to default sort in test 'Sort Products', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18002](https://github.com/PrestaShop/PrestaShop/pull/18002): Functional tests - Refacto customer settings redisplay cart at login. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17982](https://github.com/PrestaShop/PrestaShop/pull/17982): Functional tests - Categories page test helper card. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17921](https://github.com/PrestaShop/PrestaShop/pull/17921): Functional tests - Enable disable webservice key. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


### Merge
* [#18093](https://github.com/PrestaShop/PrestaShop/pull/18093): Merge 177x into develop - 11/03/2020, by [@matks](https://github.com/matks)
* [#18092](https://github.com/PrestaShop/PrestaShop/pull/18092): Merge 1.7.6.x into 1.7.7.x - 11/03/2020, by [@matks](https://github.com/matks)
* [#18019](https://github.com/PrestaShop/PrestaShop/pull/18019): Merge 1.7.6.x into 1.7.7.x, by [@matthieu-rolland](https://github.com/matthieu-rolland)


## Code changes in modules, themes & tools


### Faceted search module
* [#162](https://github.com/PrestaShop/ps_facetedsearch/pull/162): Bump acorn from 6.1.1 to 6.4.1. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#158](https://github.com/PrestaShop/ps_facetedsearch/pull/158): Show products only from default category - optional. Thank you [@gadnis](https://github.com/gadnis)


### Example modules
* [#16](https://github.com/PrestaShop/example-modules/pull/16): Some improvements, by [@matks](https://github.com/matks)
* [#15](https://github.com/PrestaShop/example-modules/pull/15): Update hooks that have been renamed, by [@jolelievre](https://github.com/jolelievre)
* [#5](https://github.com/PrestaShop/example-modules/pull/5): 1.7.7 extend supplier form with image upload field. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)


### TopContributors
* [#6](https://github.com/PrestaShop/TopContributors/pull/6): Remove useless or wrong text in the top paragraph, by [@ttoine](https://github.com/ttoine)


### Traces
* [#5](https://github.com/PrestaShop/traces/pull/5): Release 2.0.1, by [@Progi1984](https://github.com/Progi1984)
* [#3](https://github.com/PrestaShop/traces/pull/3): All contributors should be listed, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### QA nightly results
* [#24](https://github.com/PrestaShop/QANightlyResults/pull/24): fix README and vhost example, by [@SimonGrn](https://github.com/SimonGrn)
* [#23](https://github.com/PrestaShop/QANightlyResults/pull/23): fix README, by [@SimonGrn](https://github.com/SimonGrn)


### Google Analytics module
* [#45](https://github.com/PrestaShop/ps_googleanalytics/pull/45):  Escape some SQL query. Thank you [@Feloot](https://github.com/Feloot)
* [#44](https://github.com/PrestaShop/ps_googleanalytics/pull/44): Update Readme.md. Thank you [@Hlavtox](https://github.com/Hlavtox)


### Changes in developer documentation
* [#482](https://github.com/PrestaShop/docs/pull/482): Fixed typo in the word "browser". Thank you [@owbleker](https://github.com/owbleker)
* [#477](https://github.com/PrestaShop/docs/pull/477): Minor style improvements, by [@eternoendless](https://github.com/eternoendless)


### Docker internal images
* [#32](https://github.com/PrestaShop/docker-internal-images/pull/32): Wait for get-module.sh to end before starting apache, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)


### PHP Developer Tools
* [#22](https://github.com/PrestaShop/php-dev-tools/pull/22): phpstan - define constants with proper type. Thank you [@zalexki](https://github.com/zalexki)


### Contact informations module
* [#25](https://github.com/PrestaShop/ps_contactinfo/pull/25): Use rich template when widget is displayed in right column, by [@jolelievre](https://github.com/jolelievre)


### Classic-rocket theme
* [#131](https://github.com/PrestaShop/classic-rocket/pull/131): Fix contrast of badge text with background. Thank you [@kenlog](https://github.com/kenlog)
* [#129](https://github.com/PrestaShop/classic-rocket/pull/129): structured data in json-ld : improvements. Thank you [@jf-viguier](https://github.com/jf-viguier)
* [#120](https://github.com/PrestaShop/classic-rocket/pull/120): category image missing class="lazyload". Thank you [@dosbiner](https://github.com/dosbiner)
* [#119](https://github.com/PrestaShop/classic-rocket/pull/119): Fix display of discount flags. Thank you [@Hlavtox](https://github.com/Hlavtox)


### PrestaShop Specifications
* [#83](https://github.com/PrestaShop/prestashop-specs/pull/83): Statuses Page.md. Thank you [@MatShir](https://github.com/MatShir)


### Reminder module
* [#18](https://github.com/PrestaShop/ps_reminder/pull/18): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#12](https://github.com/PrestaShop/ps_reminder/pull/12): Dir constant. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Registrations statistics modules
* [#2](https://github.com/PrestaShop/statsregistrations/pull/2): Fix bad wording. Thank you [@inetbiz](https://github.com/inetbiz)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@dependabot[bot]](https://github.com/apps/dependabot), [@matks](https://github.com/matks), [@ttoine](https://github.com/ttoine), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@Progi1984](https://github.com/Progi1984), [@SimonGrn](https://github.com/SimonGrn), [@jolelievre](https://github.com/jolelievre), [@Arman-Hosseini](https://github.com/Arman-Hosseini), [@PierreRambaud](https://github.com/PierreRambaud), [@davidglezz](https://github.com/davidglezz), [@matthieu-rolland](https://github.com/matthieu-rolland), [@boubkerbribri](https://github.com/boubkerbribri), [@Feloot](https://github.com/Feloot), [@owbleker](https://github.com/owbleker), [@tdavidsonas88](https://github.com/tdavidsonas88), [@NeOMakinG](https://github.com/NeOMakinG), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@zalexki](https://github.com/zalexki), [@eternoendless](https://github.com/eternoendless), [@Hlavtox](https://github.com/Hlavtox), [@mickaelandrieu](https://github.com/mickaelandrieu), [@arouiadib](https://github.com/arouiadib), [@zuk3975](https://github.com/zuk3975), [@gadnis](https://github.com/gadnis), [@atomiix](https://github.com/atomiix), [@kenlog](https://github.com/kenlog), [@MatShir](https://github.com/MatShir), [@jf-viguier](https://github.com/jf-viguier), [@mvorisek](https://github.com/mvorisek), [@dosbiner](https://github.com/dosbiner), [@MathiasReker](https://github.com/MathiasReker), [@inetbiz](https://github.com/inetbiz)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
