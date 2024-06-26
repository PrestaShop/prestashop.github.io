---
layout: post
aliases: ["/news/coreweekly-week-19-2018"]
title:  "PrestaShop Core Weekly - Week 19 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-05-16 19:00:00
authors: [ AntoineThomas ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 7th of May to Sunday 13th of May 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Dear all, the long-awaited GDPR module is released for PrestaShop 1.6.x and 1.7.x. Below is a brief summary of what is available and where to find it:

* If you run a **1.7** store, go directly in the back office of your shop, you can install it for free; please note that it will be integrated into the core with the 1.7.4.x version of PrestaShop.
* If you run a **1.6** store, the module is available on the PrestaShop [Addons marketplace](https://addons.prestashop.com/fr/legislation/32323-rgpd-officiel-by-prestashop-16.html) with support, and it is visible in the back office of your shop.
* If you run a **1.5** store, the module will be available soon on the Addons marketplace.

A lot of feedback from the community has already been taken into account, thank you very much to everyone helping us to improve this very important feature.

The most notable change for the Core Weekly is that from now, the ‘develop’ branch regards the 1.7.5.x. So yes, it means that a 1.7.4.x branch has been created on the main repository.


## Code changes in the 'develop' branch (for v1.7.5.0)

### Core

* [#9035](https://github.com/PrestaShop/PrestaShop/pull/9035): Add package-lock.json file, by @PierreRambaud.
* [#9058](https://github.com/PrestaShop/PrestaShop/pull/9058): Removed call to Tools::array_replace(). Thank you @michaelKaefer!
* [#9059](https://github.com/PrestaShop/PrestaShop/pull/9059): Refactored Tools::switchLanguage function. Thank you @michaelKaefer!
* [#9061](https://github.com/PrestaShop/PrestaShop/pull/9061): Removed redundant checks and added docblock in Tools::getIsset function. Thank you @michaelKaefer!


## Code changes in the '1.7.4.x' branch (for v1.7.4.0)

### Back Office

* [#8838](https://github.com/PrestaShop/PrestaShop/pull/8838): Fix tinymce RTL text direction. Thank you @Danoosh!
* [#8938](https://github.com/PrestaShop/PrestaShop/pull/8938): Display tabs on the module page with the generic method, by @Quetzacoalt91.
* [#9023](https://github.com/PrestaShop/PrestaShop/pull/9023): Avoid infinite redirects if unhandled exception during BO authentication, by @eternoendless.
* [#9040](https://github.com/PrestaShop/PrestaShop/pull/9040): Fix Smarty.class.php class not found, by @PierreRambaud.


### Front Office

* [#8774](https://github.com/PrestaShop/PrestaShop/pull/8774): Ajax calls for product availability status in front refactored, by @alegout.


### Core

* [#9048](https://github.com/PrestaShop/PrestaShop/pull/9048): Removed if statment, by @mickaelandrieu.


### Other

* [#9038](https://github.com/PrestaShop/PrestaShop/pull/9038): Update pull request template, by @eternoendless.


Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @Danoosh and @michaelKaefer!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
