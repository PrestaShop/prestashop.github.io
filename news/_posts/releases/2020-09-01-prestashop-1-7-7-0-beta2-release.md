---
layout: post
title:  "PrestaShop 1.7.7.0 Beta 2 Is Ready To Be Tested!"
subtitle: "The second beta for PrestaShop 1.7.7.0 is now ready for you to test!"
date:   2020-09-01 11:00:00
authors: [ PrestaShop ]
image: /assets/images/2020/09/build_beta_2.png
icon: icon-leaf
tags:
 - 1.7.7.x
 - version
 - beta
 - minor
 - releases
---

The second Beta version for PrestaShop 1.7.7.0 is now ready for you to test!

![Prestashop 1.7.7.0 BETA 2 Release](/assets/images/2020/09/build_beta_2.png)

Over 130 Pull Requests have been merged since [the first Beta of 1.7.7.0 was released](https://build.prestashop.com/news/prestashop-1-7-7-0-beta-release/) about three months ago. A great number of regressions have been detected and fixed thanks to extensive testing by the community and the PrestaShop team, mainly in the [new order pages](https://build.prestashop.com/news/the-new-order-pages-in-prestaShop-1-7-7/). However, as new regressions keep being reported, the maintainer team has decided to issue a **second Beta release** before a Release Candidate is built. This will provide the community with a more up-to-date version to continue testing while the final bugs are being fixed. We hope this will yield a more stable and robust final version.

This second beta release is essential for your business and allows you to verify if all your modules and themes are still working. If it’s not the case, you may need to update them or [open an issue](https://github.com/PrestaShop/PrestaShop/issues/new?template=bug_report.md) if you find a regression compared to the previous minor version 1.7.6. To ensure your modules work well with this new version, you should: download, install, test this new version and give us your feedback as early as possible. Consider focusing your tests on the migrated back-office order pages: the 'Add a new order' page and the 'View order detail' page. This is how you can get involved to make PrestaShop 1.7.7 stable more quickly and be confident that the final version will work flawlessly.
If no new critical or major regression is reported by September 21st, then the first release candidate will be built and released a few days later.

**Remember, this beta version is pre-release software. Do not use it in your production shop!**

## Notable changes in 1.7.7 beta 2

**Order back-office**
- [Fix a bug where different orders had the same reference](https://github.com/PrestaShop/PrestaShop/issues/11115)

**Create order back-office**
- [Fixed the JS errors in console: fancybox is not a function, when creating an order from the backoffice](https://github.com/PrestaShop/PrestaShop/issues/19659) reported by [olecorre](https://github.com/olecorre)
- [Fixed the address block that is empty when creating an order and editing the country](https://github.com/PrestaShop/PrestaShop/issues/20217)

**Edit order back-office**
- [Fixed the total in the order detail page when adding a product with modified price](https://github.com/PrestaShop/PrestaShop/issues/18433)
- [Fixed an exception when adding a product to an old order](https://github.com/PrestaShop/PrestaShop/issues/18568)
- [Fixed the impossibility to remove a discount added from a cart rule on product selection after adding a product in order](https://github.com/PrestaShop/PrestaShop/issues/18379)
- [Fixed an exception when deleting discount in order view](https://github.com/PrestaShop/PrestaShop/issues/18498)
- [Fixed address form to open it in a modal](https://github.com/PrestaShop/PrestaShop/issues/19499)
- [Fixed the update of the cart list when adding a second product in the order](https://github.com/PrestaShop/PrestaShop/issues/19591)
- [Fixed the update of the discount when updating product's quantity in the order](https://github.com/PrestaShop/PrestaShop/issues/19592)
- [Fixed the order total when cancelling a product on an order having cart rules](https://github.com/PrestaShop/PrestaShop/issues/19717)
- [Fixed the update of the the discount when updating product's price in the order](https://github.com/PrestaShop/PrestaShop/issues/19890)
- [Fixed the deletion of the discount when deleting another discount](https://github.com/PrestaShop/PrestaShop/issues/19949)
- [Fixed the impossibility to remove a cart rule associated to a product, or a generic shop cart](https://github.com/PrestaShop/PrestaShop/issues/20246)
- [Fixed the taxes details in PDF invoice when there are multiple invoices](https://github.com/PrestaShop/PrestaShop/issues/20393)
- [Fixed the rounding of the cart rule](https://github.com/PrestaShop/PrestaShop/issues/20462)
- [Fixed the invoice total after editing a product](https://github.com/PrestaShop/PrestaShop/issues/20467)
- [Fixed an exception when we try to remove a diiscount](https://github.com/PrestaShop/PrestaShop/issues/20534)
- [Refactor DeleteProductFromOrderHandler](https://github.com/PrestaShop/PrestaShop/issues/18432)
- [Fixed the impossibility to add a pack product when "Decrement products in pack only." option is selected](https://github.com/PrestaShop/PrestaShop/issues/20568)


**View order back-office**
- [Add a drop-down allowing to choose the number of products per page in the order detail](https://github.com/PrestaShop/PrestaShop/issues/19486)
- [Add the forgotten block “Linked orders” inside migrated order page](https://github.com/PrestaShop/PrestaShop/issues/18967)
- [Fixed the impossibility to view the pack content when displaying the order detail](https://github.com/PrestaShop/PrestaShop/issues/20444)
- [Forgotten block inside migrated Order page : Sources](https://github.com/PrestaShop/PrestaShop/issues/18966)

**Listing order back-office**
- [Add an empty state for order list page](https://github.com/PrestaShop/PrestaShop/issues/18526)
- [Fixed the product taxes detail that is not displayed on the invoice when it’s generated from the order listing](https://github.com/PrestaShop/PrestaShop/issues/20452)

**Back Office:**
- [Fixed a bug where the modules tab doesn't appear in the product page](https://github.com/PrestaShop/PrestaShop/issues/19246) reported by [Rolige](https://github.com/Rolige)
- [Use placeholders in strings to improve the translation consistency](https://github.com/PrestaShop/PrestaShop/issues/18809)
- [Fixed a fatal error on Design > Theme & logo > Page configuration](https://github.com/PrestaShop/PrestaShop/issues/19446)
- [Fixed the "Delete catalog" option that is not working in PrestaShop Cleaner module](https://github.com/PrestaShop/PrestaShop/issues/19444) reported by [k0lv](https://github.com/k0lv)
- [Fixed the impossibility to access to the stock page for a user which is not super-admin](https://github.com/PrestaShop/PrestaShop/issues/19713)
- [Update the German tax rates](https://github.com/PrestaShop/PrestaShop/issues/19628)
- [Fixed the filters that are not working when searching in employees page](https://github.com/PrestaShop/PrestaShop/issues/19812)
- [Fixed the wrong payload sent when saving import configuration](https://github.com/PrestaShop/PrestaShop/issues/19746) reported by [joemugen](https://github.com/joemugen)
- [Fixed an error 500 when opening the voucher](https://github.com/PrestaShop/PrestaShop/issues/20520)
- [Category root displayed after filter](https://github.com/PrestaShop/PrestaShop/issues/20067)
- [Order of js loaded from module has been modified](https://github.com/PrestaShop/PrestaShop/issues/19244)
- [No access to employee's profile when not an admin](https://github.com/PrestaShop/PrestaShop/issues/19077)
- [In BO Product page, ecotax tax excl is used instead of ecotax tax incl](https://github.com/PrestaShop/PrestaShop/issues/10026)


**Front Office:**
- [Add the possibility to override the image used as cover](https://github.com/PrestaShop/PrestaShop/issues/19029) reported by [prestamodule](https://github.com/prestamodule), read the [documentation](https://devdocs.prestashop.com/1.7/faq/product/#product-cover)
- [Fixed a bug where the voucher was not displayed if linked to a customer](https://github.com/PrestaShop/PrestaShop/issues/19442) reported by [clotaire202](https://github.com/clotaire202)
- [Fixed the impossibility to select the language from the FO after importing a localization pack](https://github.com/PrestaShop/PrestaShop/issues/19893)
- [Detail discount is not good in multicurrency context](https://github.com/PrestaShop/PrestaShop/issues/18900)

**Core:**
- [Fixed Doctrine Entities from Core that are inaccessible in front office](https://github.com/PrestaShop/PrestaShop/issues/19015)
- [AdminModules: Call to a member function isUsingNewTranslationSystem](https://github.com/PrestaShop/PrestaShop/issues/19447)
- [Fixed a syntax error in a SQL query](https://github.com/PrestaShop/PrestaShop/issues/19273)
- [Fixed a hook missing/misspelt in DB: actionAuthenticationBefore](https://github.com/PrestaShop/PrestaShop/issues/18945)
- [Fixed Cache Problem in Language & Currency](https://github.com/PrestaShop/PrestaShop/pull/20398)
- [Computing precision: set minimum computing precision value to zero](https://github.com/PrestaShop/PrestaShop/pull/20137)
- [Auto create symfony roles on tab register](https://github.com/PrestaShop/PrestaShop/issues/19857)
- [Add trace information to Command/Query debugger](https://github.com/PrestaShop/PrestaShop/pull/19854)
- [Allow modules to disable routing prefix with specific parameter](https://github.com/PrestaShop/PrestaShop/pull/19782)
- [Update decimal library](https://github.com/PrestaShop/PrestaShop/pull/19748)
- [Update modules (contactform/ps_imageslider/ps_sharebuttons/statspersonalinfos)](https://github.com/PrestaShop/PrestaShop/pull/19556)
- [Introduce CompilerPass to perform ControllerAwareTrait injection](https://github.com/PrestaShop/PrestaShop/pull/18811)
- [Add tag controller.service_arguments to PrestaShop controllers](https://github.com/PrestaShop/PrestaShop/pull/18845)

**Installation:**
- [Fix session tables charset](https://github.com/PrestaShop/PrestaShop/pull/20122)
- [Error when installing without debug mode disabled](https://github.com/PrestaShop/PrestaShop/issues/19754)

**Reliability:**
Some service API calls have been removed from the Core. This should improve the speed and reliability of the Back Office:
- [Remove must_have.xml API call in AdminController](https://github.com/PrestaShop/PrestaShop/issues/12831)
- [Remove API call for Recommended Modules](https://github.com/PrestaShop/PrestaShop/issues/12833)
- [Remove API call native.xml in Admin controller](https://github.com/PrestaShop/PrestaShop/issues/12825)
- [Remove API call native_all.xml in AdminController](https://github.com/PrestaShop/PrestaShop/issues/12826) 

## Deprecations
- [Deprecate hookcount and add missing hook in hook.xml](https://github.com/PrestaShop/PrestaShop/pull/19657)
- [Order hooks deprecated](https://github.com/PrestaShop/PrestaShop/pull/20311)
- [Product::supplier_reference deprecated](https://github.com/PrestaShop/PrestaShop/pull/20198)
- [Addons related calls have no more effect](https://github.com/PrestaShop/PrestaShop/pull/19461)

## Backwards incompatible changes
- [Increase precision for DECIMAL fields in database](https://github.com/PrestaShop/PrestaShop/pull/18532)
- [Calculator::calculateFees argument ignored](https://github.com/PrestaShop/PrestaShop/pull/20482)
- [ModuleTabRegister constructor has a new parameter](https://github.com/PrestaShop/PrestaShop/pull/19903)
- [Old order page files removed](https://github.com/PrestaShop/PrestaShop/pull/18984)

## Changelog

130+ pull requests have been merged since the first beta release and 100+ issues have been fixed. Read the [Changelog](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.7.0-beta.2) for details. 

If you are looking for more details about all changes and new features expected in 1.7.7, the [1.7.7 beta version release note](https://build.prestashop.com/news/prestashop-1-7-7-0-beta-release/) is the perfect article for you to read!


## Download

You can download PrestaShop 1.7.7.0 beta 2 here:  

[Download PrestaShop 1.7.7.0 beta 2 now!](https://www.prestashop.com/en/file/prestashop_1-7-7-0-beta-2-zip/download?token=UbT5nmNu){: .btn .btn-lg .btn-success}
{: .text-center}


## How to help finish 1.7.7

Your feedback on this beta 2 is essential: the regressions you report right now are as many less bugs on the final version, fewer problems on your (or your customer’s) online store, and and less time waiting for patch versions.

Here’s how you can help:

- [Install this beta version](http://doc.prestashop.com/display/PS17/Installing+PrestaShop), optionally as an upgrade to a copy of your current shop, and test that everything works well compared to the previous version, 1.7.6
- If you develop modules or themes, test them on this version
- Test the migrated back-office order pages: the add order page and the order detail page
- Test the auto-upgrade module (use the "expert mode" and choose "local archive" to manually provide the Beta 2 zip file to the upgrade module; note that it's not possible to upgrade from the previous Beta version)
- [Report any regressions on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read [how to report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
- Fix regressions by creating a pull request (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))

If everything is working well, feel free to tell the world! Comment on this article, share on social networks... we also need this kind of feedback! 😉

## Remaining known issues (target: must-have fixed in Release Candidate)

**Order back-office**

- [The total products price is not correctly calculated in specific conditions](https://github.com/PrestaShop/PrestaShop/issues/20542)
- [The product price is wrong after adding a cart rule](https://github.com/PrestaShop/PrestaShop/issues/20533)
- [Wrong price displayed while adding a product on an order](https://github.com/PrestaShop/PrestaShop/issues/19490)
- [Wrong rounded product price displayed while editing product price](https://github.com/PrestaShop/PrestaShop/issues/20573)
- [When adding the same product several times in an order, it creates a new line instead of updating the quantity of the product](https://github.com/PrestaShop/PrestaShop/issues/18237)
- [Add information messages when an existing product is added in the order](https://github.com/PrestaShop/PrestaShop/issues/20010)
- [Wrong shipping costs and wrong total when there are several invoices in an order](https://github.com/PrestaShop/PrestaShop/issues/20409)
- [Impossible to reassign a product to another invoice](https://github.com/PrestaShop/PrestaShop/issues/18721)
- [While creating order on BO, if there is a free shipping voucher, its value is not modified when the carrier is changed](https://github.com/PrestaShop/PrestaShop/issues/20557)
- [Module GDPR does not hide addresses](https://github.com/PrestaShop/PrestaShop/issues/20605)
- [Cannot create order on when customer cart/order history is empty](https://github.com/PrestaShop/PrestaShop/issues/20643)
- [Free shipping line is not added when a cart rule "Free shipping for a carrier selection" is applied during the order creation](https://github.com/PrestaShop/PrestaShop/issues/20667)
- [Voucher line is not removed when changing a carrier in the cart rule's selection](https://github.com/PrestaShop/PrestaShop/issues/20674)
- [Increment/decrement button doesn't work when we try to add a product out of stock (allow order)](https://github.com/PrestaShop/PrestaShop/issues/20670)
- [An exception is displayed when we try to add a customized product](https://github.com/PrestaShop/PrestaShop/issues/20671)
- [actionProductCancel hook not triggered on standard refund](https://github.com/PrestaShop/PrestaShop/issues/20712)
- [Impossibility to create an order when the address is considered as soft deleted](https://github.com/PrestaShop/PrestaShop/issues/20666)
- [Order Message is not saved after creating a new order from BO](https://github.com/PrestaShop/PrestaShop/issues/20686)
- [Errors in the console while creating an order](https://github.com/PrestaShop/PrestaShop/issues/20651)
- ["Send an email to the customer with the link to process the payment." doesn't work](https://github.com/PrestaShop/PrestaShop/issues/20687)
- [Recalculate shipping costs option not working when set to No](https://github.com/PrestaShop/PrestaShop/issues/20744)
- [When we have a multi-invoices, adding a discount to a selected invoice, apply it in all invoices](https://github.com/PrestaShop/PrestaShop/issues/20778)
- [Trying to add 2x out of stock product with allow order gets error message](https://github.com/PrestaShop/PrestaShop/issues/20769)

**Back-office**

- [Wrong redirection after canceling the creation of a new address from the customer detail page](https://github.com/PrestaShop/PrestaShop/issues/20595)
- [Bulk deletion on Return order statuses KO](https://github.com/PrestaShop/PrestaShop/issues/20743)

**Front-office**

- [Wrong cart rules discount when using alternative currency](https://github.com/PrestaShop/PrestaShop/issues/20594)
- [Incorrect total with Free gift + Percent discount cart rule](https://github.com/PrestaShop/PrestaShop/issues/20690)

## Acknowledgments

A huge thanks to everyone who got involved by reporting, testing and fixing regressions during the first beta phase.

Contributors who submitted pull requests and participated to build this second beta: [antoinedamiron](https://github.com/antoinedamiron), [clotaire202](https://github.com/clotaire202) from [202-ecommerce agency](https://www.202-ecommerce.com/), [arouiadib](https://github.com/arouiadib). Thank you!

Contributors who reported regressions to build a more stable 1.7.7: [Rolige](https://github.com/Rolige), [Hlavtox](https://github.com/Hlavtox), [k0lv](https://github.com/k0lv), [joemugen](https://github.com/joemugen), [simondaigre](https://github.com/simondaigre), [prestamodule](https://github.com/prestamodule) [agency](https://www.presta-module.com/fr/), [clotaire202](https://github.com/clotaire202) from [202-ecommerce agency](https://www.202-ecommerce.com/), [olecorre](https://github.com/olecorre) from [ohweb agency](https://www.ohweb.fr/). Thank you!

Like them, please test this new beta 2 and give us your feedback!
