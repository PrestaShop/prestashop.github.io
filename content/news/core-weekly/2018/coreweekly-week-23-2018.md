---
layout: post
aliases: ["/news/coreweekly-week-23-2018"]
title:  "PrestaShop Core Weekly - Week 23 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-06-12 18:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 4th of June to Sunday 10th of June 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Great news: we have never been so close to publish the 1.7.4 beta! Among its new features is the refactoring of the Auto Upgrade module, it is one of the key improvements we want to bring with this release. Help our dev team, have a look at it, test it and give us some feedback:

* [Documentation is a public Google Doc](https://docs.google.com/document/d/10bntisRK5V_v-1nrR5_GY1r6nnz_tPZPC2u5MfjUVIE/edit?usp=sharing), therefore it is open to feedback, it will help us improve it
* Download the [4.0.0-beta.1 version of the Auto Upgrade module](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.0.0-beta.1) on GitHub 

** Please do not use it on a production website and of course, backup, backup, and backup first.**

To conclude, we hope to see you at the PrestaShop Day this Thursday. There is an "open source corner", let's meet and chat there. :-)



## Code changes in the 'develop' branch (for v1.7.5.0)

### Core

* [#8956](https://github.com/PrestaShop/PrestaShop/pull/8956): Add customization ID to cart ajax response and updateCart event data. Thank you [@unlocomqx](https://github.com/unlocomqx)
* [#9105](https://github.com/PrestaShop/PrestaShop/pull/9105): Check if key exists before checking the value. Thank you [@andypieters](https://github.com/andypieters)
* [#9154](https://github.com/PrestaShop/PrestaShop/pull/9154): Migrate Theme Catalog Page of Design Section. Thank you [@michaelKaefer](https://github.com/michaelKaefer)
* [#9162](https://github.com/PrestaShop/PrestaShop/pull/9162): CO: The left and the right parts of assignment are equal. Thank you [@lfluvisotto](https://github.com/lfluvisotto)
* [#9163](https://github.com/PrestaShop/PrestaShop/pull/9163): CO: Case mismatch in class/function/method call. Thank you [@lfluvisotto](https://github.com/lfluvisotto)


### Back Office

* [#9139](https://github.com/PrestaShop/PrestaShop/pull/9139): Migrate Sell > Orders > Delivery Slips, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9171](https://github.com/PrestaShop/PrestaShop/pull/9171): Fixed namespace of Delivery Slips controller, by [@mickaelandrieu](https://github.com/mickaelandrieu)


### Front Office

* [#9128](https://github.com/PrestaShop/PrestaShop/pull/9128): index.php file for controllers/front/listing/. Thank you [@Seleda](https://github.com/Seleda)


### Tests

* [#9127](https://github.com/PrestaShop/PrestaShop/pull/9127): Buttons in product page, by [@fouratachour](https://github.com/fouratachour)
* [#9147](https://github.com/PrestaShop/PrestaShop/pull/9147): Navigate between pages in catalog page, by [@fatmaBouchekoua](https://github.com/fatmaBouchekoua)



## Code changes in the '1.7.4.x' branch (for v1.7.4.0)

### Core

* [#9156](https://github.com/PrestaShop/PrestaShop/pull/9156): Fix missing security event listeners registration. Thank you [@sarjon](https://github.com/sarjon)
* [#9167](https://github.com/PrestaShop/PrestaShop/pull/9167): Update native module versions, by [@eternoendless](https://github.com/eternoendless)


### Back Office

* [#8914](https://github.com/PrestaShop/PrestaShop/pull/8914): Improve header BO design, by [@sLorenzini](https://github.com/sLorenzini)
* [#9133](https://github.com/PrestaShop/PrestaShop/pull/9133): Regression with DatePicker and checkboxes on stock page (catalogue > stock), by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9160](https://github.com/PrestaShop/PrestaShop/pull/9160): Fix 500 while getting order total, by [@PierreRambaud](https://github.com/PierreRambaud)
* [#9169](https://github.com/PrestaShop/PrestaShop/pull/9169): Fix product attachment list, by [@tomlev](https://github.com/tomlev)


## Code changes in the '1.6.1.x' branch (for v1.6.1.2O)

### Front Office

* [#9126](https://github.com/PrestaShop/PrestaShop/pull/9126): Control if customer is the owner of the selected order in contact form, by [@PierreRambaud](https://github.com/PierreRambaud)


<hr />

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @andypieters, @lfluvisotto, @michaelKaefer, @sarjon, @Seleda, @unlocomqx!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
