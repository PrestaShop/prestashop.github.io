---
layout: post
aliases: ["/news/coreweekly-21-2020"]
title:  "PrestaShop Core Weekly - Week 21 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-05-25 14:00:00
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 18 to Sunday 24 of May 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)


## A quick update about PrestaShop's GitHub issues and pull requests:

- [80 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-05-18..2020-05-24) have been created in the project repositories;
- [82 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-05-18..2020-05-24), including [20 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-05-18..2020-05-24) on the core;
- [50 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-05-18..2020-05-24) in the project repositories;
- [80 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-05-18..2020-05-24), including [66 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-05-18..2020-05-24).
        


## Code changes in the 'develop' branch


### Core
* [#19279](https://github.com/PrestaShop/PrestaShop/pull/19279): Fix minor code issue in Language.php. Thank you [@PululuK](https://github.com/PululuK)
* [#19188](https://github.com/PrestaShop/PrestaShop/pull/19188): Docker-compose is failing due to missing build assets, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#19154](https://github.com/PrestaShop/PrestaShop/pull/19154): Remove `_PS_MAGIC_QUOTES_GPC_` usage, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#19050](https://github.com/PrestaShop/PrestaShop/pull/19050): Delivery and billing address were displayed wrong.. Thank you [@doeselschnecke](https://github.com/doeselschnecke)
* [#18997](https://github.com/PrestaShop/PrestaShop/pull/18997): Add hook in module uninstall process - port of #8868 - thanks @Nermendis, by [@matks](https://github.com/matks)
* [#18989](https://github.com/PrestaShop/PrestaShop/pull/18989): Add phpdoc for ChecksumInterface and CartChecksum, by [@matks](https://github.com/matks)
* [#18895](https://github.com/PrestaShop/PrestaShop/pull/18895): Fix Maintenance Mode. Thank you [@PululuK](https://github.com/PululuK)
* [#18519](https://github.com/PrestaShop/PrestaShop/pull/18519): Missing log datas in some controllers and classes. Thank you [@PululuK](https://github.com/PululuK)
* [#18259](https://github.com/PrestaShop/PrestaShop/pull/18259): Update phpdoc Product class, by [@Matt75](https://github.com/Matt75)
* [#18235](https://github.com/PrestaShop/PrestaShop/pull/18235): Improve prestashop:linter:security-annotation, by [@matks](https://github.com/matks)


### Back office
* [#19191](https://github.com/PrestaShop/PrestaShop/pull/19191): When the thread refers to a product, the generated link are wrong. Thank you [@runningz](https://github.com/runningz)
* [#19140](https://github.com/PrestaShop/PrestaShop/pull/19140): Fix partial refund display issues in order page (BO), by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#19080](https://github.com/PrestaShop/PrestaShop/pull/19080): Change product status in the BO search results. Thank you [@PululuK](https://github.com/PululuK)
* [#19026](https://github.com/PrestaShop/PrestaShop/pull/19026): Enable drag-and-drop for Grid listings in both directions, by [@matks](https://github.com/matks)
* [#19021](https://github.com/PrestaShop/PrestaShop/pull/19021): BO - Save button design change if an error message is displayed. Thank you [@PululuK](https://github.com/PululuK)
* [#19020](https://github.com/PrestaShop/PrestaShop/pull/19020): BO - Catalog price rule - Currency sort and filter not working as expected #19014. Thank you [@PululuK](https://github.com/PululuK)
* [#18876](https://github.com/PrestaShop/PrestaShop/pull/18876): Remove array to string conversion in bulk delete address faulty usecase, by [@matks](https://github.com/matks)
* [#18362](https://github.com/PrestaShop/PrestaShop/pull/18362): Grid row delete confirmation modal - Advanced parameters > DB > SQL Requests, by [@sowbiba](https://github.com/sowbiba)


### Front office
* [#19195](https://github.com/PrestaShop/PrestaShop/pull/19195): Add breadcrumb to Stores & Sitemap front controllers. Thank you [@nprokopenko202](https://github.com/nprokopenko202)
* [#15614](https://github.com/PrestaShop/PrestaShop/pull/15614): Fix of new customer message. Thank you [@BlackKerio](https://github.com/BlackKerio)


### Merge
* [#19238](https://github.com/PrestaShop/PrestaShop/pull/19238): Merge 1.7.7.x into develop - 20/05/2020, by [@matks](https://github.com/matks)


## Code changes in the '1.7.7.x' branch


### Core
* [#18811](https://github.com/PrestaShop/PrestaShop/pull/18811): Introduce CompilerPass to perform ControllerAwareTrait injection, by [@matks](https://github.com/matks)


### Back office
* [#19205](https://github.com/PrestaShop/PrestaShop/pull/19205): Backport bugfixes 19020 and 19021 for 1.7.7.x, by [@matks](https://github.com/matks)
* [#19108](https://github.com/PrestaShop/PrestaShop/pull/19108): Extend OrderController with FrameworkBundleAdminController instead of CommonController. Thank you [@zuk3975](https://github.com/zuk3975)
* [#18984](https://github.com/PrestaShop/PrestaShop/pull/18984): Remove legacy files for Order page, by [@matks](https://github.com/matks)
* [#18923](https://github.com/PrestaShop/PrestaShop/pull/18923): Multistore: Fix error when viewing an order with custom product made on secondary shop, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#18456](https://github.com/PrestaShop/PrestaShop/pull/18456): Update cart currency when order currency changes, by [@sowbiba](https://github.com/sowbiba)


### Tests
* [#19223](https://github.com/PrestaShop/PrestaShop/pull/19223): Functional tests - Delete test filter stocks by categories, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19210](https://github.com/PrestaShop/PrestaShop/pull/19210): Functional tests - Test pagination of files table. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19206](https://github.com/PrestaShop/PrestaShop/pull/19206): Functional tests - Delete bo base page from design tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19203](https://github.com/PrestaShop/PrestaShop/pull/19203): Functional tests - Pagination brands and addresses. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19202](https://github.com/PrestaShop/PrestaShop/pull/19202): Functional tests - Delete bo base page from catalog tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19194](https://github.com/PrestaShop/PrestaShop/pull/19194): Functional tests - Delete bo base page customers tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19186](https://github.com/PrestaShop/PrestaShop/pull/19186): Functional tests - Test pagination of categories table. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19185](https://github.com/PrestaShop/PrestaShop/pull/19185): Functional tests - Delete BoBasePage from order messages tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19183](https://github.com/PrestaShop/PrestaShop/pull/19183): Functional tests - Delete bo base page for advanced params tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19160](https://github.com/PrestaShop/PrestaShop/pull/19160): Functional tests - Test addresses pagination. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19159](https://github.com/PrestaShop/PrestaShop/pull/19159): Functional tests - Delete bo base page from international tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19158](https://github.com/PrestaShop/PrestaShop/pull/19158): Functional tests - Test customers pagination. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#19153](https://github.com/PrestaShop/PrestaShop/pull/19153): Functional tests - Delete BoBasePage from payment tests, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#19138](https://github.com/PrestaShop/PrestaShop/pull/19138): Functional tests - Delete boBasePage for tests modules , by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18964](https://github.com/PrestaShop/PrestaShop/pull/18964): Functional tests - Update puppeteer to version 3.0.2, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18613](https://github.com/PrestaShop/PrestaShop/pull/18613): Cart rule order tests, by [@jolelievre](https://github.com/jolelievre)


## Code changes in the '1.7.6.x' branch


### Back office
* [#18975](https://github.com/PrestaShop/PrestaShop/pull/18975): BO - Customer View page - Added Green alert when editing a voucher, by [@Progi1984](https://github.com/Progi1984)


## Code changes in modules, themes & tools


### Contact Form
* [#39](https://github.com/PrestaShop/contactform/pull/39): Bump version to 4.2.0, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#38](https://github.com/PrestaShop/contactform/pull/38): Make sure indexes exist for php7.4 compatiblity, by [@PierreRambaud](https://github.com/PierreRambaud)


### Changes in developer documentation
* [#541](https://github.com/PrestaShop/docs/pull/541): Fix typo. Thank you [@ksaandev](https://github.com/ksaandev)
* [#529](https://github.com/PrestaShop/docs/pull/529): Add content in modules/testing, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#511](https://github.com/PrestaShop/docs/pull/511): Webservice generic pages, by [@jolelievre](https://github.com/jolelievre)
* [#509](https://github.com/PrestaShop/docs/pull/509): Webservice multishop, by [@jolelievre](https://github.com/jolelievre)
* [#502](https://github.com/PrestaShop/docs/pull/502): How to work with grid search form, by [@jolelievre](https://github.com/jolelievre)
* [#499](https://github.com/PrestaShop/docs/pull/499): Document PDF files extension concepts, by [@mickaelandrieu](https://github.com/mickaelandrieu)
* [#409](https://github.com/PrestaShop/docs/pull/409): Add a list of methods and field types allowed in FormField. Thank you [@Klemart3D](https://github.com/Klemart3D)


### Docker internal images
* [#33](https://github.com/PrestaShop/docker-internal-images/pull/33): add support of PS_ENABLE_SSL. Thank you [@zalexki](https://github.com/zalexki)


### PrestonBot
* [#92](https://github.com/PrestaShop/prestonbot/pull/92): Make tests not dependent on Github, by [@atomiix](https://github.com/atomiix)
* [#90](https://github.com/PrestaShop/prestonbot/pull/90): Bump symfony/symfony from 3.4.26 to 3.4.35. Thank you [@dependabot[bot]](https://github.com/apps/dependabot)


### Share Buttons module
* [#38](https://github.com/PrestaShop/ps_sharebuttons/pull/38): Release 2.1.0, by [@Progi1984](https://github.com/Progi1984)


### PrestaShop contributors website
* [#11](https://github.com/PrestaShop/TopContributors/pull/11): Dockerization. Thank you [@djodjo3](https://github.com/djodjo3)
* [#10](https://github.com/PrestaShop/TopContributors/pull/10): Fix Readme after release of traces 3.0.0, by [@Progi1984](https://github.com/Progi1984)


### mjml-theme-converter
* [#5](https://github.com/PrestaShop/mjml-theme-converter/pull/5): Wording inception in email wordings, by [@jolelievre](https://github.com/jolelievre)


### TranslationTools Bundle
* [#71](https://github.com/PrestaShop/TranslationToolsBundle/pull/71): Add support for PHP 7.3 and 7.4 - use Twig 3.x, Symfony 5.x and PHPUnit 8.x. Thank you [@mvorisek](https://github.com/mvorisek)


### PS Cleaner module
* [#26](https://github.com/PrestaShop/pscleaner/pull/26): add mail table for cleaning. Thank you [@nenes25](https://github.com/nenes25)
* [#23](https://github.com/PrestaShop/pscleaner/pull/23): Deleting from category_group and setting auto_increment. Thank you [@sadlyblue](https://github.com/sadlyblue)


### Custom text
* [#33](https://github.com/PrestaShop/ps_customtext/pull/33): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Watermark
* [#13](https://github.com/PrestaShop/watermark/pull/13): Prepending module rewrite rules to .htaccess instead of appending. Thank you [@arouiadib](https://github.com/arouiadib)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@PululuK](https://github.com/PululuK), [@PierreRambaud](https://github.com/PierreRambaud), [@ksaandev](https://github.com/ksaandev), [@matks](https://github.com/matks), [@zalexki](https://github.com/zalexki), [@boubkerbribri](https://github.com/boubkerbribri), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@nprokopenko202](https://github.com/nprokopenko202), [@runningz](https://github.com/runningz), [@matthieu-rolland](https://github.com/matthieu-rolland), [@atomiix](https://github.com/atomiix), [@zuk3975](https://github.com/zuk3975), [@Progi1984](https://github.com/Progi1984), [@djodjo3](https://github.com/djodjo3), [@doeselschnecke](https://github.com/doeselschnecke), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@jolelievre](https://github.com/jolelievre), [@mickaelandrieu](https://github.com/mickaelandrieu), [@sowbiba](https://github.com/sowbiba), [@Matt75](https://github.com/Matt75), [@dependabot[bot]](https://github.com/apps/dependabot), [@mvorisek](https://github.com/mvorisek), [@Klemart3D](https://github.com/Klemart3D), [@BlackKerio](https://github.com/BlackKerio), [@nenes25](https://github.com/nenes25), [@MathiasReker](https://github.com/MathiasReker), [@arouiadib](https://github.com/arouiadib), [@sadlyblue](https://github.com/sadlyblue)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
