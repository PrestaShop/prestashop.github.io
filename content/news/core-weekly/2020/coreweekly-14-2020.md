---
layout: post
aliases: ["/news/coreweekly-14-2020"]
title:  "PrestaShop Core Weekly - Week 14 of 2020"
subtitle: "An inside look at the PrestaShop codebase"
date:   2020-04-07
authors: [ PrestaShop ]
image: /assets/images/2017/04/core_weekly_banner.jpg
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase from Monday 30th of March to Sunday 05th of April 2020.

![Core Weekly banner](/assets/images/2018/12/banner-core-weekly.jpg)

## General messages

As you will see at the end of this core-weekly, some work is ongoing in order to simplify the release process of modules in the open source project.


## A quick update about PrestaShop's GitHub issues and pull requests:

- [63 new issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+created%3A2020-03-30..2020-04-05) have been created in the project repositories;
- [66 issues have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+closed%3A2020-03-30..2020-04-05), including [18 fixed issues](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Aissue+label%3Afixed+closed%3A2020-03-30..2020-04-05) on the core;
- [186 pull requests have been opened](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+created%3A2020-03-30..2020-04-05) in the project repositories;
- [229 pull requests have been closed](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+closed%3A2020-03-30..2020-04-05), including [198 merged pull requests](https://github.com/search?q=org%3APrestaShop+is%3Apublic++-repo%3Aprestashop%2Fprestashop.github.io++is%3Apr+merged%3A2020-03-30..2020-04-05).
        


## Code changes in the 'develop' branch


### Core
* [#18374](https://github.com/PrestaShop/PrestaShop/pull/18374): Fix BO - Order - Wrong declination reference displayed on pack composition. Thank you [@PululuK](https://github.com/PululuK)


### Back office
* [#18366](https://github.com/PrestaShop/PrestaShop/pull/18366): Grid row delete confirmation modal - Shop parameters > Contacts, by [@sowbiba](https://github.com/sowbiba)
* [#18365](https://github.com/PrestaShop/PrestaShop/pull/18365): Grid row delete confirmation modal - International > Taxes, by [@sowbiba](https://github.com/sowbiba)
* [#18364](https://github.com/PrestaShop/PrestaShop/pull/18364): Grid row delete confirmation modal - Advanced parameters > Webservice, by [@sowbiba](https://github.com/sowbiba)
* [#18363](https://github.com/PrestaShop/PrestaShop/pull/18363): Grid row delete confirmation modal - Advanced parameters > DB > Backups, by [@sowbiba](https://github.com/sowbiba)
* [#18361](https://github.com/PrestaShop/PrestaShop/pull/18361): Grid row delete confirmation modal - Advanced parameters > Team > Profiles, by [@sowbiba](https://github.com/sowbiba)
* [#18360](https://github.com/PrestaShop/PrestaShop/pull/18360): Grid row delete confirmation modal - Advanced parameters > Team > Employees, by [@sowbiba](https://github.com/sowbiba)
* [#18359](https://github.com/PrestaShop/PrestaShop/pull/18359): Grid row delete confirmation modal - Advanced parameters > Emails, by [@sowbiba](https://github.com/sowbiba)
* [#18358](https://github.com/PrestaShop/PrestaShop/pull/18358): Grid row delete confirmation modal - Shop parameters > Traffic SEO > SEO URLs, by [@sowbiba](https://github.com/sowbiba)
* [#18357](https://github.com/PrestaShop/PrestaShop/pull/18357): Grid row delete confirmation modal - International > Localization > Currencies, by [@sowbiba](https://github.com/sowbiba)
* [#18356](https://github.com/PrestaShop/PrestaShop/pull/18356): Grid row delete confirmation modal - International > Localization > Languages, by [@sowbiba](https://github.com/sowbiba)
* [#18355](https://github.com/PrestaShop/PrestaShop/pull/18355): Grid row delete confirmation modal - Design > Pages, by [@sowbiba](https://github.com/sowbiba)
* [#18325](https://github.com/PrestaShop/PrestaShop/pull/18325): Grid row delete confirmation modal - Catalog > Brands > Brands, by [@sowbiba](https://github.com/sowbiba)
* [#18324](https://github.com/PrestaShop/PrestaShop/pull/18324): Grid row delete confirmation modal - Catalog > Brands > Addresses, by [@sowbiba](https://github.com/sowbiba)
* [#18323](https://github.com/PrestaShop/PrestaShop/pull/18323): Grid row delete confirmation modal - Catalog > Suppliers, by [@sowbiba](https://github.com/sowbiba)
* [#17972](https://github.com/PrestaShop/PrestaShop/pull/17972): Wrong declination reference displayed on pack composition. Thank you [@PululuK](https://github.com/PululuK)
* [#17765](https://github.com/PrestaShop/PrestaShop/pull/17765): Fix shipping price in orders demo, by [@marionf](https://github.com/marionf)
* [#17467](https://github.com/PrestaShop/PrestaShop/pull/17467): Category admin jumps to home when deleting a category.. Thank you [@PululuK](https://github.com/PululuK)
* [#17436](https://github.com/PrestaShop/PrestaShop/pull/17436): Update BO theme/default webpack to v4.41 and its dependencies, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#16763](https://github.com/PrestaShop/PrestaShop/pull/16763): Add stylelint and correct every errors of BO new-theme, by [@NeOMakinG](https://github.com/NeOMakinG)


### Front office
* [#18226](https://github.com/PrestaShop/PrestaShop/pull/18226): ApplyProductCalculation and ProductlazyArray variable mismatch. Thank you [@jonasburneika](https://github.com/jonasburneika)


### Web services
* [#16710](https://github.com/PrestaShop/PrestaShop/pull/16710): Add webservice to OrderCartRule with endpoint order_cart_rules. Thank you [@Daxtermania](https://github.com/Daxtermania)


### Tests
* [#18408](https://github.com/PrestaShop/PrestaShop/pull/18408): Functional tests - Add 'Confirmation delete modal' to tests files, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18394](https://github.com/PrestaShop/PrestaShop/pull/18394): Functional tests - Add 'Confirmation delete modal' to tests design pages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18392](https://github.com/PrestaShop/PrestaShop/pull/18392): Functional tests - Add 'Confirmation delete modal' to tests languages, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18389](https://github.com/PrestaShop/PrestaShop/pull/18389):  Functional tests - Add 'Confirmation delete modal' to tests currencies, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18386](https://github.com/PrestaShop/PrestaShop/pull/18386): Functional tests - Add 'Confirmation delete modal' to tests Seo and Url, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18384](https://github.com/PrestaShop/PrestaShop/pull/18384): Functional tests - Add 'Confirmation delete modal' to tests profiles, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18383](https://github.com/PrestaShop/PrestaShop/pull/18383): Functional tests - Fix delete modal for tests employees, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18381](https://github.com/PrestaShop/PrestaShop/pull/18381): Functional tests -  Fix delete modal for tests taxes, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18380](https://github.com/PrestaShop/PrestaShop/pull/18380): Functional tests - Add 'Confirmation delete modal click' to tests Db backups, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18377](https://github.com/PrestaShop/PrestaShop/pull/18377): Functional tests - Add 'Confirmation delete modal click' to tests contact and web service, by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in the '1.7.7.x' branch


### Core
* [#18234](https://github.com/PrestaShop/PrestaShop/pull/18234): Fix guest to customer transformation issue, by [@matthieu-rolland](https://github.com/matthieu-rolland)
* [#17561](https://github.com/PrestaShop/PrestaShop/pull/17561): Allow cyrilic domain names in email addresses, by [@atomiix](https://github.com/atomiix)


### Back office
* [#18419](https://github.com/PrestaShop/PrestaShop/pull/18419): Fix currency symbol in orders list, by [@sowbiba](https://github.com/sowbiba)
* [#18416](https://github.com/PrestaShop/PrestaShop/pull/18416): Fix overflow on main-menu and adjust workaround on last items in menu, by [@NeOMakinG](https://github.com/NeOMakinG)
* [#18373](https://github.com/PrestaShop/PrestaShop/pull/18373): Avoid date time split in Grids, by [@jolelievre](https://github.com/jolelievre)
* [#18347](https://github.com/PrestaShop/PrestaShop/pull/18347): Hide order preview stock location column if empty, by [@atomiix](https://github.com/atomiix)
* [#18334](https://github.com/PrestaShop/PrestaShop/pull/18334): Add FancyBox in create order page details button, by [@jolelievre](https://github.com/jolelievre)
* [#18326](https://github.com/PrestaShop/PrestaShop/pull/18326): Fix messages block in order view page. Thank you [@zuk3975](https://github.com/zuk3975)
* [#18305](https://github.com/PrestaShop/PrestaShop/pull/18305): Fix count query with customer filter, by [@atomiix](https://github.com/atomiix)
* [#18205](https://github.com/PrestaShop/PrestaShop/pull/18205): [BO] Add Product on Order : Use previous cart rather than creating a new one, by [@Progi1984](https://github.com/Progi1984)
* [#17927](https://github.com/PrestaShop/PrestaShop/pull/17927): Wrong prices in edit order with secondary currency, by [@sowbiba](https://github.com/sowbiba)
* [#17864](https://github.com/PrestaShop/PrestaShop/pull/17864): Extract order products to separate query. Thank you [@zuk3975](https://github.com/zuk3975)
* [#17850](https://github.com/PrestaShop/PrestaShop/pull/17850): Rework OrderRefundCalculator to use Number. Thank you [@zuk3975](https://github.com/zuk3975)


### Tests
* [#18401](https://github.com/PrestaShop/PrestaShop/pull/18401): Functional tests - Filter delete and delete with bulk actions email. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18375](https://github.com/PrestaShop/PrestaShop/pull/18375): Functional tests - Product settings enable/disable stock management. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18371](https://github.com/PrestaShop/PrestaShop/pull/18371): Functional tests - Order settings enable/disable terms of service. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18369](https://github.com/PrestaShop/PrestaShop/pull/18369): Functional tests - Add test 'Sort cms pages', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18367](https://github.com/PrestaShop/PrestaShop/pull/18367): Functional tests - Add tests helper card for brands and suppliers, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18350](https://github.com/PrestaShop/PrestaShop/pull/18350): Functional tests - Add test 'Bulk update orders status', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18342](https://github.com/PrestaShop/PrestaShop/pull/18342): Functional tests - Add test 'Filter stocks by category', by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18332](https://github.com/PrestaShop/PrestaShop/pull/18332): Functional tests - Wait for navigation in go to maintenance tab function, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18313](https://github.com/PrestaShop/PrestaShop/pull/18313): Functional tests - CRUD sql query. Thank you [@nesrineabdmouleh](https://github.com/nesrineabdmouleh)
* [#18311](https://github.com/PrestaShop/PrestaShop/pull/18311): Functional tests - Add new client filter to order test, by [@boubkerbribri](https://github.com/boubkerbribri)
* [#18308](https://github.com/PrestaShop/PrestaShop/pull/18308): Functional tests - Add test 'Check delivery slip downloaded from list', by [@boubkerbribri](https://github.com/boubkerbribri)


## Code changes in modules, themes & tools


### Contact informations module
* [#31](https://github.com/PrestaShop/ps_contactinfo/pull/31): Add PR template, and enable release drafter, by [@jolelievre](https://github.com/jolelievre)
* [#28](https://github.com/PrestaShop/ps_contactinfo/pull/28): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#27](https://github.com/PrestaShop/ps_contactinfo/pull/27): Add GitHub PR template, by [@matks](https://github.com/matks)


### Visits and Visitors
* [#6](https://github.com/PrestaShop/statsvisits/pull/6): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#5](https://github.com/PrestaShop/statsvisits/pull/5): Add GitHub PR template, by [@matks](https://github.com/matks)


### Available quantities
* [#10](https://github.com/PrestaShop/statsstock/pull/10): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#9](https://github.com/PrestaShop/statsstock/pull/9): Add GitHub PR template, by [@matks](https://github.com/matks)


### Shop search
* [#6](https://github.com/PrestaShop/statssearch/pull/6): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#5](https://github.com/PrestaShop/statssearch/pull/5): Add GitHub PR template, by [@matks](https://github.com/matks)


### Sales and orders
* [#11](https://github.com/PrestaShop/statssales/pull/11): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#10](https://github.com/PrestaShop/statssales/pull/10): Add GitHub PR template, by [@matks](https://github.com/matks)


### Registrations statistics modules
* [#6](https://github.com/PrestaShop/statsregistrations/pull/6): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#5](https://github.com/PrestaShop/statsregistrations/pull/5): Add GitHub PR template, by [@matks](https://github.com/matks)


### Product details
* [#13](https://github.com/PrestaShop/statsproduct/pull/13): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#12](https://github.com/PrestaShop/statsproduct/pull/12): Add GitHub PR template, by [@matks](https://github.com/matks)


### Registered customer information
* [#4](https://github.com/PrestaShop/statspersonalinfos/pull/4): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#3](https://github.com/PrestaShop/statspersonalinfos/pull/3): Add GitHub PR template, by [@matks](https://github.com/matks)


### Visitors origin
* [#4](https://github.com/PrestaShop/statsorigin/pull/4): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#3](https://github.com/PrestaShop/statsorigin/pull/3): Add GitHub PR template, by [@matks](https://github.com/matks)


### Newsletter
* [#5](https://github.com/PrestaShop/statsnewsletter/pull/5): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#4](https://github.com/PrestaShop/statsnewsletter/pull/4): Add GitHub PR template, by [@matks](https://github.com/matks)


### Visitors online
* [#10](https://github.com/PrestaShop/statslive/pull/10): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#9](https://github.com/PrestaShop/statslive/pull/9): Add GitHub PR template, by [@matks](https://github.com/matks)


### Stats Dashboard
* [#13](https://github.com/PrestaShop/statsforecast/pull/13): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#12](https://github.com/PrestaShop/statsforecast/pull/12): Add GitHub PR template, by [@matks](https://github.com/matks)


### Browsers and operating systems
* [#8](https://github.com/PrestaShop/statsequipment/pull/8): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#7](https://github.com/PrestaShop/statsequipment/pull/7): Add GitHub PR template, by [@matks](https://github.com/matks)


### Data mining for statistics
* [#9](https://github.com/PrestaShop/statsdata/pull/9): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#8](https://github.com/PrestaShop/statsdata/pull/8): Add GitHub PR template, by [@matks](https://github.com/matks)
* [#6](https://github.com/PrestaShop/statsdata/pull/6): CO: Fix for mysql duplicated id for guest account registration - guest is duplicated if it has multiple customer accounts. Thank you [@fkwakkenbos](https://github.com/fkwakkenbos)


### Catalog evaluation
* [#13](https://github.com/PrestaShop/statscheckup/pull/13): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#12](https://github.com/PrestaShop/statscheckup/pull/12): Add GitHub PR template, by [@matks](https://github.com/matks)


### Catalog statistics
* [#7](https://github.com/PrestaShop/statscatalog/pull/7): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#6](https://github.com/PrestaShop/statscatalog/pull/6): Add GitHub PR template, by [@matks](https://github.com/matks)


### Carrier distribution
* [#4](https://github.com/PrestaShop/statscarrier/pull/4): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#3](https://github.com/PrestaShop/statscarrier/pull/3): Add GitHub PR template, by [@matks](https://github.com/matks)


### Best vouchers
* [#5](https://github.com/PrestaShop/statsbestvouchers/pull/5): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#4](https://github.com/PrestaShop/statsbestvouchers/pull/4): Add GitHub PR template, by [@matks](https://github.com/matks)


### Best suppliers
* [#4](https://github.com/PrestaShop/statsbestsuppliers/pull/4): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#3](https://github.com/PrestaShop/statsbestsuppliers/pull/3): Add GitHub PR template, by [@matks](https://github.com/matks)


### Best-selling products
* [#4](https://github.com/PrestaShop/statsbestproducts/pull/4): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#3](https://github.com/PrestaShop/statsbestproducts/pull/3): Add GitHub PR template, by [@matks](https://github.com/matks)


### Best manufacturers
* [#4](https://github.com/PrestaShop/statsbestmanufacturers/pull/4): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#3](https://github.com/PrestaShop/statsbestmanufacturers/pull/3): Add GitHub PR template, by [@matks](https://github.com/matks)


### Best customers
* [#10](https://github.com/PrestaShop/statsbestcustomers/pull/10): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#9](https://github.com/PrestaShop/statsbestcustomers/pull/9): Add GitHub PR template, by [@matks](https://github.com/matks)


### Best categories
* [#5](https://github.com/PrestaShop/statsbestcategories/pull/5): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#4](https://github.com/PrestaShop/statsbestcategories/pull/4): Add GitHub PR template, by [@matks](https://github.com/matks)


### Search engine keywords
* [#7](https://github.com/PrestaShop/sekeywords/pull/7): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#6](https://github.com/PrestaShop/sekeywords/pull/6): Add GitHub PR template, by [@matks](https://github.com/matks)


### Wire payment module
* [#49](https://github.com/PrestaShop/ps_wirepayment/pull/49): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#48](https://github.com/PrestaShop/ps_wirepayment/pull/48): Add GitHub PR template, by [@matks](https://github.com/matks)
* [#46](https://github.com/PrestaShop/ps_wirepayment/pull/46): Hide goods reservation text for empty days value. Thank you [@rmilecki](https://github.com/rmilecki)


### Social Follow module
* [#18](https://github.com/PrestaShop/ps_socialfollow/pull/18): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#17](https://github.com/PrestaShop/ps_socialfollow/pull/17): Add GitHub PR template, by [@matks](https://github.com/matks)


### Share Buttons module
* [#36](https://github.com/PrestaShop/ps_sharebuttons/pull/36): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#35](https://github.com/PrestaShop/ps_sharebuttons/pull/35): Add GitHub PR template, by [@matks](https://github.com/matks)


### Search Bar module
* [#17](https://github.com/PrestaShop/ps_searchbar/pull/17): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#16](https://github.com/PrestaShop/ps_searchbar/pull/16): Add GitHub PR template, by [@matks](https://github.com/matks)


### Main menu module
* [#31](https://github.com/PrestaShop/ps_mainmenu/pull/31): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#30](https://github.com/PrestaShop/ps_mainmenu/pull/30): Add GitHub PR template, by [@matks](https://github.com/matks)


### Language selector
* [#16](https://github.com/PrestaShop/ps_languageselector/pull/16): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#15](https://github.com/PrestaShop/ps_languageselector/pull/15): Add GitHub PR template, by [@matks](https://github.com/matks)
* [#13](https://github.com/PrestaShop/ps_languageselector/pull/13): Uninstall module used on PS 1.6 before using this one, by [@Quetzacoalt91](https://github.com/Quetzacoalt91)
* [#12](https://github.com/PrestaShop/ps_languageselector/pull/12): Added iso code. Thank you [@patryk-uszynski](https://github.com/patryk-uszynski)


### Image slider
* [#48](https://github.com/PrestaShop/ps_imageslider/pull/48): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#47](https://github.com/PrestaShop/ps_imageslider/pull/47): Add GitHub PR template, by [@matks](https://github.com/matks)
* [#34](https://github.com/PrestaShop/ps_imageslider/pull/34): Dir constant. Thank you [@MathiasReker](https://github.com/MathiasReker)
* [#30](https://github.com/PrestaShop/ps_imageslider/pull/30): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Featured products
* [#24](https://github.com/PrestaShop/ps_featuredproducts/pull/24): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#23](https://github.com/PrestaShop/ps_featuredproducts/pull/23): Add GitHub PR template, by [@matks](https://github.com/matks)
* [#17](https://github.com/PrestaShop/ps_featuredproducts/pull/17): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Order Notifications on the Favicon
* [#11](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/11): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#10](https://github.com/PrestaShop/ps_faviconnotificationbo/pull/10): Add GitHub PR template, by [@matks](https://github.com/matks)


### Email subscription module
* [#53](https://github.com/PrestaShop/ps_emailsubscription/pull/53): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#52](https://github.com/PrestaShop/ps_emailsubscription/pull/52): Add GitHub PR template, by [@matks](https://github.com/matks)


### Customer data privacy block
* [#16](https://github.com/PrestaShop/ps_dataprivacy/pull/16): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#15](https://github.com/PrestaShop/ps_dataprivacy/pull/15): Add GitHub PR template, by [@matks](https://github.com/matks)


### Custom text
* [#38](https://github.com/PrestaShop/ps_customtext/pull/38): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#37](https://github.com/PrestaShop/ps_customtext/pull/37): Add GitHub PR template, by [@matks](https://github.com/matks)


### Customer "Sign in" link
* [#18](https://github.com/PrestaShop/ps_customersignin/pull/18): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#17](https://github.com/PrestaShop/ps_customersignin/pull/17): Add GitHub PR template, by [@matks](https://github.com/matks)
* [#13](https://github.com/PrestaShop/ps_customersignin/pull/13): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Customer account links
* [#23](https://github.com/PrestaShop/ps_customeraccountlinks/pull/23): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#22](https://github.com/PrestaShop/ps_customeraccountlinks/pull/22): Add GitHub PR template, by [@matks](https://github.com/matks)


### Cross-selling
* [#9](https://github.com/PrestaShop/ps_crossselling/pull/9): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#8](https://github.com/PrestaShop/ps_crossselling/pull/8): Add GitHub PR template, by [@matks](https://github.com/matks)


### Check payment
* [#30](https://github.com/PrestaShop/ps_checkpayment/pull/30): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#29](https://github.com/PrestaShop/ps_checkpayment/pull/29): Add GitHub PR template, by [@matks](https://github.com/matks)


### Category tree links
* [#31](https://github.com/PrestaShop/ps_categorytree/pull/31): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#30](https://github.com/PrestaShop/ps_categorytree/pull/30): Add GitHub PR template, by [@matks](https://github.com/matks)
* [#25](https://github.com/PrestaShop/ps_categorytree/pull/25): Lossless compression. Thank you [@MathiasReker](https://github.com/MathiasReker)


### Banner
* [#17](https://github.com/PrestaShop/ps_banner/pull/17): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#16](https://github.com/PrestaShop/ps_banner/pull/16): Add GitHub PR template, by [@matks](https://github.com/matks)


### Pages not found
* [#9](https://github.com/PrestaShop/pagesnotfound/pull/9): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#8](https://github.com/PrestaShop/pagesnotfound/pull/8): Add GitHub PR template, by [@matks](https://github.com/matks)


### Google Sitemap module
* [#133](https://github.com/PrestaShop/gsitemap/pull/133): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#132](https://github.com/PrestaShop/gsitemap/pull/132): Add GitHub PR template, by [@matks](https://github.com/matks)


### Simple HTML table display
* [#8](https://github.com/PrestaShop/gridhtml/pull/8): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#7](https://github.com/PrestaShop/gridhtml/pull/7): Make license SPDX compliant, by [@atomiix](https://github.com/atomiix)
* [#6](https://github.com/PrestaShop/gridhtml/pull/6): Add GitHub PR template, by [@matks](https://github.com/matks)


### NVD3 Charts
* [#8](https://github.com/PrestaShop/graphnvd3/pull/8): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#7](https://github.com/PrestaShop/graphnvd3/pull/7): Add GitHub PR template, by [@matks](https://github.com/matks)


### Dashboard Trends
* [#24](https://github.com/PrestaShop/dashtrends/pull/24): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#23](https://github.com/PrestaShop/dashtrends/pull/23): Add GitHub PR template, by [@matks](https://github.com/matks)


### Dashboard Products
* [#22](https://github.com/PrestaShop/dashproducts/pull/22): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#21](https://github.com/PrestaShop/dashproducts/pull/21): Add GitHub PR template, by [@matks](https://github.com/matks)


### Dashboard Goals
* [#18](https://github.com/PrestaShop/dashgoals/pull/18): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#17](https://github.com/PrestaShop/dashgoals/pull/17): Add GitHub PR template, by [@matks](https://github.com/matks)


### Dashboard Activity module
* [#18](https://github.com/PrestaShop/dashactivity/pull/18): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#17](https://github.com/PrestaShop/dashactivity/pull/17): Add GitHub PR template, by [@matks](https://github.com/matks)


### Contact Form
* [#37](https://github.com/PrestaShop/contactform/pull/37): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#36](https://github.com/PrestaShop/contactform/pull/36): Add GitHub PR template, by [@matks](https://github.com/matks)


### PS Cleaner module
* [#44](https://github.com/PrestaShop/pscleaner/pull/44): Enable Release Drafter, by [@matks](https://github.com/matks)
* [#43](https://github.com/PrestaShop/pscleaner/pull/43): Add GitHub PR template, by [@matks](https://github.com/matks)


### Classic-rocket theme
* [#146](https://github.com/PrestaShop/classic-rocket/pull/146): Minor Typo on checkout.tpl block offcanvas_modals?. Thank you [@dvdwalker](https://github.com/dvdwalker)


### Core Weekly Generator tool
* [#28](https://github.com/PrestaShop/core-weekly-generator/pull/28): Adding a few modules to the list, by [@ttoine](https://github.com/ttoine)


### Link list
* [#81](https://github.com/PrestaShop/ps_linklist/pull/81): Revert "Automatic tab with Symfony route", by [@Progi1984](https://github.com/Progi1984)
* [#80](https://github.com/PrestaShop/ps_linklist/pull/80): Add GitHub PR template, by [@matks](https://github.com/matks)
* [#70](https://github.com/PrestaShop/ps_linklist/pull/70): Automatic tab with Symfony route, by [@jolelievre](https://github.com/jolelievre)


### Theme customization
* [#24](https://github.com/PrestaShop/ps_themecusto/pull/24): Add GitHub PR template, by [@matks](https://github.com/matks)


### Product Comments module
* [#53](https://github.com/PrestaShop/productcomments/pull/53): Add GitHub PR template, by [@matks](https://github.com/matks)


### PSGDPR
* [#82](https://github.com/PrestaShop/psgdpr/pull/82): Add GitHub PR template, by [@matks](https://github.com/matks)
* [#80](https://github.com/PrestaShop/psgdpr/pull/80): Update translation key. Thank you [@netraagal](https://github.com/netraagal)
* [#79](https://github.com/PrestaShop/psgdpr/pull/79): Update readme to add multistore compatibility, by [@marionf](https://github.com/marionf)
* [#78](https://github.com/PrestaShop/psgdpr/pull/78): Prevent deleting data when non-existing customer, by [@Matt75](https://github.com/Matt75)
* [#75](https://github.com/PrestaShop/psgdpr/pull/75): Fix error 500 on controller FrontAjaxGdpr. Thank you [@pablopolyte](https://github.com/pablopolyte)
* [#74](https://github.com/PrestaShop/psgdpr/pull/74): Add missing checkbox on order confirmation form. Thank you [@daresh](https://github.com/daresh)
* [#73](https://github.com/PrestaShop/psgdpr/pull/73): Fix Trying to get property of non-object. Thank you [@pablopolyte](https://github.com/pablopolyte)
* [#66](https://github.com/PrestaShop/psgdpr/pull/66): Fix duplicate html element id. Thank you [@davidglezz](https://github.com/davidglezz)
* [#64](https://github.com/PrestaShop/psgdpr/pull/64): GDPR isn't working if the module have multiple form on same page. Thank you [@PeeyushAgrawalWebkul](https://github.com/PeeyushAgrawalWebkul)
* [#17](https://github.com/PrestaShop/psgdpr/pull/17): Remove usage of $link in customerAccount.tpl. Thank you [@nenes25](https://github.com/nenes25)


### OnBoarding
* [#61](https://github.com/PrestaShop/welcome/pull/61): Merge dev into master, by [@matks](https://github.com/matks)
* [#60](https://github.com/PrestaShop/welcome/pull/60): Add GitHub PR template, by [@matks](https://github.com/matks)


### Customer reassurance block
* [#43](https://github.com/PrestaShop/blockreassurance/pull/43): optimize translation, by [@matthieu-rolland](https://github.com/matthieu-rolland)


### Changes in developer documentation
* [#496](https://github.com/PrestaShop/docs/pull/496): Minor typo on Embedding a template in the theme section. Thank you [@dvdwalker](https://github.com/dvdwalker)


### Shopping cart module
* [#58](https://github.com/PrestaShop/ps_shoppingcart/pull/58): Add GitHub PR template, by [@matks](https://github.com/matks)
* [#21](https://github.com/PrestaShop/ps_shoppingcart/pull/21): Fix ps_shoppingcart.js removing cart menu from header. Thank you [@alexej-d](https://github.com/alexej-d)


### Faceted search module
* [#167](https://github.com/PrestaShop/ps_facetedsearch/pull/167): Add GitHub PR template, by [@matks](https://github.com/matks)


### PrestaShop Specifications
* [#70](https://github.com/PrestaShop/prestashop-specs/pull/70): Create Order Page View.md. Thank you [@MatShir](https://github.com/MatShir)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: [@Progi1984](https://github.com/Progi1984), [@jolelievre](https://github.com/jolelievre), [@matks](https://github.com/matks), [@sowbiba](https://github.com/sowbiba), [@NeOMakinG](https://github.com/NeOMakinG), [@boubkerbribri](https://github.com/boubkerbribri), [@dvdwalker](https://github.com/dvdwalker), [@nesrineabdmouleh](https://github.com/nesrineabdmouleh), [@ttoine](https://github.com/ttoine), [@atomiix](https://github.com/atomiix), [@PululuK](https://github.com/PululuK), [@matthieu-rolland](https://github.com/matthieu-rolland), [@zuk3975](https://github.com/zuk3975), [@jonasburneika](https://github.com/jonasburneika), [@netraagal](https://github.com/netraagal), [@marionf](https://github.com/marionf), [@Matt75](https://github.com/Matt75), [@pablopolyte](https://github.com/pablopolyte), [@daresh](https://github.com/daresh), [@micka-fdz](https://github.com/micka-fdz), [@rmilecki](https://github.com/rmilecki), [@Daxtermania](https://github.com/Daxtermania), [@MatShir](https://github.com/MatShir), [@davidglezz](https://github.com/davidglezz), [@PeeyushAgrawalWebkul](https://github.com/PeeyushAgrawalWebkul), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@MathiasReker](https://github.com/MathiasReker), [@nenes25](https://github.com/nenes25), [@alexej-d](https://github.com/alexej-d), [@fkwakkenbos](https://github.com/fkwakkenbos), [@patryk-uszynski](https://github.com/patryk-uszynski)!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with issues and comments [on GitHub](https://github.com/PrestaShop/PrestaShop)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/)
 * [Coding standards](https://devdocs.prestashop.com/1.7/development/coding-standards/)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use GitHub to report an issue](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/). Thank you!

Happy contributin' everyone!
