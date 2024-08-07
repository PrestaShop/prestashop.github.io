---
layout: post
aliases: ["/news/coreweekly-week-12-2020"]
title:  "PrestaShop Core Weekly - Week 12 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-03-24
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 16th to Sunday 22nd of March 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [67 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-03-16..2020-03-22) have been created in the project repositories;
- [57 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-03-16..2020-03-22), including [5 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-03-16..2020-03-22) on the core;
- [69 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-03-16..2020-03-22) in the project repositories;
- [128 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-03-16..2020-03-22), including [59 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-03-16..2020-03-22).
        


## Code changes in the 'develop' branch


### Core
* [#18243](https://github.com/PrestaShop/PrestaShop/pull/18243): Fix phpdoc for Currency class, by [@Matt75](https://github.com/Matt75)
* [#18219](https://github.com/PrestaShop/PrestaShop/pull/18219):  Fix wrong id_employee attribute description on PrestaShopLogger. Thank you [@PululuK](https://github.com/PululuK)
* [#18217](https://github.com/PrestaShop/PrestaShop/pull/18217): Fix typo. Thank you [@Klemart3D](https://github.com/Klemart3D)
* [#18182](https://github.com/PrestaShop/PrestaShop/pull/18182): CO : Correct phpDoc. Thank you [@djbuch](https://github.com/djbuch)
* [#18135](https://github.com/PrestaShop/PrestaShop/pull/18135): Add some phpdoc to Tools, by [@matks](https://github.com/matks)
* [#18052](https://github.com/PrestaShop/PrestaShop/pull/18052): Replace a lot of http links by https, by [@matks](https://github.com/matks)


### Back office
* [#18097](https://github.com/PrestaShop/PrestaShop/pull/18097): Remove unused result in for statement. Thank you [@Arman-Hosseini](https://github.com/Arman-Hosseini)


### Front office
* [#17869](https://github.com/PrestaShop/PrestaShop/pull/17869): Add linkedin to classic theme with SVG icon, by [@NeOMakinG](https://github.com/NeOMakinG)


### Web services
* [#18160](https://github.com/PrestaShop/PrestaShop/pull/18160): Updating hook calls on WebserviceSpecificManagementImages. Thank you [@prestaquality](https://github.com/prestaquality)


### Tests
* [#18214](https://github.com/PrestaShop/PrestaShop/pull/18214): Upgrade TravisCI OS. Thank you [@mvorisek](https://github.com/mvorisek)
* [#18077](https://github.com/PrestaShop/PrestaShop/pull/18077): Add behat test for GetManufacturerForViewingHandler. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)


### Merge
* [#18177](https://github.com/PrestaShop/PrestaShop/pull/18177): Merge 1.7.7.x into develop - 17/03/2020, by [@matks](https://github.com/matks)


## Code changes in the '1.7.7.x' branch (for v1.7.7.0)


### Back office
* [#18246](https://github.com/PrestaShop/PrestaShop/pull/18246): Add check when adding a product in an order that it is not out of stock, by [@jolelievre](https://github.com/jolelievre)
* [#18202](https://github.com/PrestaShop/PrestaShop/pull/18202): Do not display shipping address when order is virtual product only, by [@atomiix](https://github.com/atomiix)
* [#18168](https://github.com/PrestaShop/PrestaShop/pull/18168): Prevent adding or editing an invalid product quantity on order, by [@jolelievre](https://github.com/jolelievre)
* [#18146](https://github.com/PrestaShop/PrestaShop/pull/18146): After creating new voucher from orders/new, I get redirected to voucher list, not a new order. Thank you [@tdavidsonas88](https://github.com/tdavidsonas88)
* [#18130](https://github.com/PrestaShop/PrestaShop/pull/18130): Use grid common search action where possible (1.7.7.x controllers only). Thank you [@zuk3975](https://github.com/zuk3975)
* [#18091](https://github.com/PrestaShop/PrestaShop/pull/18091): Display gift message into migrated Order page, by [@matks](https://github.com/matks)
* [#17959](https://github.com/PrestaShop/PrestaShop/pull/17959): Enable new Orders page, by [@matks](https://github.com/matks)
* [#17881](https://github.com/PrestaShop/PrestaShop/pull/17881): Fix Search by product name & category doesn't work in the second of the Stocks page. Thank you [@arouiadib](https://github.com/arouiadib)
* [#17861](https://github.com/PrestaShop/PrestaShop/pull/17861): Add vertical scroll to customization fields in BO order create page. Thank you [@zuk3975](https://github.com/zuk3975)
* [#17849](https://github.com/PrestaShop/PrestaShop/pull/17849): Fix orders page dropdown going under header by removing the fixed property, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#17672](https://github.com/PrestaShop/PrestaShop/pull/17672): Rework ChangeOrderCurrencyHandler to private methods. Thank you [@zuk3975](https://github.com/zuk3975)


### Tests
* [#18239](https://github.com/PrestaShop/PrestaShop/pull/18239): Update tests data with taxes to fix behat tests, by [@jolelievre](https://github.com/jolelievre)
* [#18227](https://github.com/PrestaShop/PrestaShop/pull/18227): Functional tests - Fix selector for tests categories, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18224](https://github.com/PrestaShop/PrestaShop/pull/18224): Functional tests - Product settings enable/disable allow ordering out of stock. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18216](https://github.com/PrestaShop/PrestaShop/pull/18216): Functional tests - Retry to create Browser 3 times if first one fails, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18198](https://github.com/PrestaShop/PrestaShop/pull/18198): Fix test 'display unavailable product attributes', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18191](https://github.com/PrestaShop/PrestaShop/pull/18191): Functional tests - Order settings  enable/disable guest checkout. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18180](https://github.com/PrestaShop/PrestaShop/pull/18180): Functional tests - Add tests 'Help card' for customers and addresses, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18178](https://github.com/PrestaShop/PrestaShop/pull/18178): Functional tests - Add test 'Export brands', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18174](https://github.com/PrestaShop/PrestaShop/pull/18174): Functional tests - Product settings separator of attribute anchor on the product links. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18158](https://github.com/PrestaShop/PrestaShop/pull/18158): Functional tests - Add test 'Export customers', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18156](https://github.com/PrestaShop/PrestaShop/pull/18156): Functional tests - Fix nightly 16-03, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18149](https://github.com/PrestaShop/PrestaShop/pull/18149): Functional tests - Add test Export Categories to csv, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18148](https://github.com/PrestaShop/PrestaShop/pull/18148): Functional tests - Customer settings enable/disable partner offer. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18145](https://github.com/PrestaShop/PrestaShop/pull/18145): Functional tests - Customer settings ask for birth date. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18143](https://github.com/PrestaShop/PrestaShop/pull/18143): Functional tests - Shop Parameters > Traffic & SEO  test helper card. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18112](https://github.com/PrestaShop/PrestaShop/pull/18112): Functional tests - Refactoring products tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18081](https://github.com/PrestaShop/PrestaShop/pull/18081): Functional tests - Enable/Disable multistore. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18023](https://github.com/PrestaShop/PrestaShop/pull/18023): Modify test data generation to handle price with taxes, by [@jolelievre](https://github.com/jolelievre)
* [#17981](https://github.com/PrestaShop/PrestaShop/pull/17981): Functional tests - Fix invoices and credit slips tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#17891](https://github.com/PrestaShop/PrestaShop/pull/17891): Functional tests - Product settings enable/disable display unavailable product attributes. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#17805](https://github.com/PrestaShop/PrestaShop/pull/17805): Functional tests - Order settings enable/disable final summary. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)


## Code changes in modules, themes & tools


### QA nightly results
* [#26](https://github.com/PrestaShop/QANightlyResults/pull/26): fix suite route by using correct args retrieval system, by [@SimonGrn](https://github.com/SimonGrn)
* [#25](https://github.com/PrestaShop/QANightlyResults/pull/25): add skipped handling, by [@SimonGrn](https://github.com/SimonGrn)


### Core Weekly Generator tool
* [#26](https://github.com/PrestaShop/core-weekly-generator/pull/26): Adding more repositories descriptions & alphabetical sorting, by [@ttoine](https://github.com/ttoine)


### Example modules
* [#18](https://github.com/PrestaShop/example-modules/pull/18): Update README.md with list of available modules, by [@matks](https://github.com/matks)
* [#17](https://github.com/PrestaShop/example-modules/pull/17): Transfering demo-cqrs-hooks-usage-module to this repo, by [@matks](https://github.com/matks)


### PrestaShop contributors website
* [#7](https://github.com/PrestaShop/TopContributors/pull/7): Removed "See More" & "Pagination", by [@Progi1984](https://github.com/Progi1984)


### Changes in developer documentation
* [#488](https://github.com/PrestaShop/docs/pull/488): Small fixes and improvements, by [@matks](https://github.com/matks)
* [#486](https://github.com/PrestaShop/docs/pull/486): Replace http links by https, by [@matks](https://github.com/matks)
* [#485](https://github.com/PrestaShop/docs/pull/485): Update license header year in example files. Thank you [@Arman-Hosseini](https://github.com/Arman-Hosseini)
* [#483](https://github.com/PrestaShop/docs/pull/483): Bump acorn from 6.4.0 to 6.4.1 in /src/themes/hugo-theme-learn/_src. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)
* [#478](https://github.com/PrestaShop/docs/pull/478): Improve contribution guidelines, by [@eternoendless](https://github.com/eternoendless)
* [#472](https://github.com/PrestaShop/docs/pull/472): Add content for developers extending their module compatibility range to PS 1.6, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#471](https://github.com/PrestaShop/docs/pull/471): Add a reworked dedicated page for "how to create a PR", by [@matks](https://github.com/matks)


### Shopping cart module
* [#39](https://github.com/PrestaShop/ps_shoppingcart/pull/39): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Wire payment module
* [#39](https://github.com/PrestaShop/ps_wirepayment/pull/39): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@jolelievre](https://github.com/jolelievre), [@Matt75](https://github.com/Matt75), [@boubkerbribri](https://github.com/boubkerbribri), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@PululuK](https://github.com/PululuK), [@Klemart3D](https://github.com/Klemart3D), [@mvorisek](https://github.com/mvorisek), [@atomiix](https://github.com/atomiix), [@SimonGrn](https://github.com/SimonGrn), [@djbuch](https://github.com/djbuch), [@matks](https://github.com/matks), [@ttoine](https://github.com/ttoine), [@Progi1984](https://github.com/Progi1984), [@prestaquality](https://github.com/prestaquality), [@Arman-Hosseini](https://github.com/Arman-Hosseini), [@dependabot[bot]](https://github.com/apps/dependabot), [@tdavidsonas88](https://github.com/tdavidsonas88), [@zuk3975](https://github.com/zuk3975), [@eternoendless](https://github.com/eternoendless), [@arouiadib](https://github.com/arouiadib), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@NeOMakinG](https://github.com/NeOMakinG), [@MathiasReker](https://github.com/MathiasReker)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
