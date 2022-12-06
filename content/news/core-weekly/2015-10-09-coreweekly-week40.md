---
layout: post
title:  "PrestaShop Core Weekly - Week 40 of 2015"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-10-09 14:37:41
authors: [ xavierborderie ]
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during last week, from Monday 28th of September to Sunday 4th of October.


## Milestones

We released version 1.6.1.2 RC3 this week, and [we need you to test it](http://build.prestashop.com/news/prestashop-1-6-1-2-rc3/)! Install it on a server, use it as if it was a real store, and give us your feedback!

We also published a new article about PrestaShop $1M Fund for module developers. [Check it out](http://build.prestashop.com/news/prestashop-integration-fund/)!

Finally, our very own @AlexEven published the September edition of her translation report: [Do you speak PrestaShop?](http://build.prestashop.com/news/do-you-speak-prestashop-september-2015-edition/)


 


## Code changes in 1.6.1.x

Here are the merged pull-requests on the [1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!
 

#### Front office

 * [4110](https://github.com/PrestaShop/PrestaShop/pull/4110): Avoid Email validation Error on ajax request. Thank you @Eolia!
 * [4105](https://github.com/PrestaShop/PrestaShop/pull/4105): no localstorage with Safari private browsing, by @gRoussac.
 * [4096](https://github.com/PrestaShop/PrestaShop/pull/4096): Too much calls of findCombination, by @gRoussac.
 * [4072](https://github.com/PrestaShop/PrestaShop/pull/4072): could not see available vouchers when changing quantities, by @gRoussac.
 * [4094](https://github.com/PrestaShop/PrestaShop/pull/4094): Fix issues into ps_delivery table, by @gRoussac.
 * [4119](https://github.com/PrestaShop/PrestaShop/pull/4119): could not add to cart in quickview, by @gRoussac.
 * [4128](https://github.com/PrestaShop/PrestaShop/pull/4128): Fix bad redirect when PS_CART_REDIRECT, by @gRoussac.
 * [4125](https://github.com/PrestaShop/PrestaShop/pull/4125): Fix products links without correct anchor for attributes in shopping-cart, by @gRoussac.
 * [4153](https://github.com/PrestaShop/PrestaShop/pull/4153): Fix bad validation when empty zipcode validation pattern, by @gRoussac.
 * [4167](https://github.com/PrestaShop/PrestaShop/pull/4167): Fix performances issue with smarty custom, by @jocel1.
 
 
 
#### Back office
 
 * [4133](https://github.com/PrestaShop/PrestaShop/pull/4133): Property CustomerMessage->message is empty, by @gRoussac.
 * [4122](https://github.com/PrestaShop/PrestaShop/pull/4122): Fix bad utm_campaign, notice: Undefined index: lang_iso, by @gRoussac.
 * [4115](https://github.com/PrestaShop/PrestaShop/pull/4115): Fix wrong redirect after editing customer, by @gRoussac.
 * [4074](https://github.com/PrestaShop/PrestaShop/pull/4074): Remove back button message of expired POST data, by @gRoussac.
 * [4082](https://github.com/PrestaShop/PrestaShop/pull/4082): Fixed checking if module is trusted. Thank you @brouillon!

 
 
#### Core
 
 * [4111](https://github.com/PrestaShop/PrestaShop/pull/4111): Missing category param when update positions + duplicate call, by @gRoussac.
 * [4129](https://github.com/PrestaShop/PrestaShop/pull/4129): Could not disable third party modules, by @gRoussac.

 
 
#### Installer

 * [4130](https://github.com/PrestaShop/PrestaShop/pull/4130): fixtures, add some Czech translations, by @AlexEven.
 
 
 
 
## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Start Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.
 
 
#### Back office

 * [4147](https://github.com/PrestaShop/PrestaShop/pull/4147): Fix price display error (cldr currency) on product form, by @kelu95.
 * [4139](https://github.com/PrestaShop/PrestaShop/pull/4139): fix template currency sign, by @kelu95.
 * [4101](https://github.com/PrestaShop/PrestaShop/pull/4101): fix CLDR retro compatibility with legacy currency, by @kelu95.
 
 
#### Core

 * [4146](https://github.com/PrestaShop/PrestaShop/pull/4146): Fix merge tool error, by @Shudrum.
 
 
 
## Code changes in Starter Theme

Finally, these are the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!
 
 * [4108](https://github.com/PrestaShop/PrestaShop/pull/4108): Selenium Test Harness, by @djfm.
 * [4114](https://github.com/PrestaShop/PrestaShop/pull/4114): added deps to README.md, by @djfm.
 * [4116](https://github.com/PrestaShop/PrestaShop/pull/4116): Basic Product Customization, by @djfm.
 * [4084](https://github.com/PrestaShop/PrestaShop/pull/4084): Add favicon, by @maximebiloe.
 * [4095](https://github.com/PrestaShop/PrestaShop/pull/4095): Notifications messages, by @maximebiloe.
 * [4118](https://github.com/PrestaShop/PrestaShop/pull/4118): Manage columns in StarterTheme, by @maximebiloe.
 * [4134](https://github.com/PrestaShop/PrestaShop/pull/4134): fixed notice, by @djfm.
 * [4135](https://github.com/PrestaShop/PrestaShop/pull/4135): CSS : add margin before notifications, by @djfm.
 * [4132](https://github.com/PrestaShop/PrestaShop/pull/4132): Create first draft of OPC + Rivets.js, by @julienbourdeau.
 * [4142](https://github.com/PrestaShop/PrestaShop/pull/4142): Basic Payment In OPC + JS refactorization, by @julienbourdeau.
 * [4136](https://github.com/PrestaShop/PrestaShop/pull/4136): Improve {url} for Category, Module and CMS, by @julienbourdeau.
 * [4149](https://github.com/PrestaShop/PrestaShop/pull/4149): OPC: address management, by @julienbourdeau.
 * [4143](https://github.com/PrestaShop/PrestaShop/pull/4143): OPC Payment : Advanced, Regular, JS, noJS, by @djfm.
 * [4152](https://github.com/PrestaShop/PrestaShop/pull/4152): Display delivery options, by @maximebiloe.
 * [4151](https://github.com/PrestaShop/PrestaShop/pull/4151): Introducting the 'termsAndConditions' hook, by @djfm.
 * [4154](https://github.com/PrestaShop/PrestaShop/pull/4154): OPC Carriers : Add message when no carrier available, by @djfm.
 * [4155](https://github.com/PrestaShop/PrestaShop/pull/4155): Syntax for PHP < 5.6, by @maximebiloe.
 * [4157](https://github.com/PrestaShop/PrestaShop/pull/4157): Fix carrier selection, by @maximebiloe.
 

 
See all the PRs merged into the codebase since September 21st [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-09-07+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors whose Pull Requests were merged since the last Core Weekly Report: [brouillon](https://github.com/brouillon) and @Eolia. Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!

 
 
 
