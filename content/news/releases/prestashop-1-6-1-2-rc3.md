---
layout: post
aliases: ["/news/prestashop-1-6-1-2-rc3"]
title:  "Test PrestaShop 1.6.1.2 RC3"
subtitle: "Check, one two, one two, check check"
date:   2015-10-06 14:00:41
authors: [ xavierborderie ]
icon: icon-mic
tags:
 - version
 - rc
 - releases
 - development
 - "1.6.1.x"
 - "1.6"
---

We received quite a few feedback reports and pull-requests since we released v1.6.1.2 RC1 two weeks ago, so here's the RC3, which fixes some more issues, and polishes a few more lines of code.

<b>NOTE</b>: The RC2 was first uploaded yesterday (Monday 5th) with a [slight parenthesis issue](https://github.com/PrestaShop/PrestaShop/pull/4172/files) which broke many pages. It was fixed by our Core team and repackaged at around 3 PM (Paris time), and [two more](https://github.com/PrestaShop/PrestaShop/commit/cf2901d3a3c2e7ff3ffe23092ea99cb5fa753192) [small corrections](https://github.com/PrestaShop/PrestaShop/commit/6b2d200ea0148f12932b9796986e3ec155397b72) since then have proven essential, hence the RC3. If you downloaded the RC2, please download the RC3 now!

Remember! This is the third release candidate for 1.6.1.2, NOT the final, production-ready code! <b>This is a test version</b>, and is therefore not yet deemed suitable for production use. Hence, do not upgrade your store just yet! Install the RC3 on your server (on as many server configurations as possible, please!), or upgrade from a clone of your real store.

{{< cta "https://www.prestashop.com/versions" >}}Download and test PrestaShop 1.6.1.2 RC3 now!{{< /cta >}}

Remember: if you have any feedback to give or issue to raise, [create a ticket on the Forge](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop)!

Here is the [list of pull-requests that the team has merged into 1.6.1.2](https://github.com/PrestaShop/PrestaShop/pulls?page=1&q=is%3Apr+base%3A1.6.1.x+is%3Aclosed+merged%3A%3E2015-08-17&utf8=%E2%9C%93) so far:

 * [3665](https://github.com/PrestaShop/PrestaShop/pull/3665): [-] BO : Pass empty firstname and lastname email vars to mail template
 * [4065](https://github.com/PrestaShop/PrestaShop/pull/4065): [-] BO : Bad sql association for date_upd of product and categories, could not reorder
 * [4067](https://github.com/PrestaShop/PrestaShop/pull/4067): [-] CORE : Error in foreign field name
 * [4068](https://github.com/PrestaShop/PrestaShop/pull/4068): [-] CORE : Adding few casts to ValidateOrder
 * [4069](https://github.com/PrestaShop/PrestaShop/pull/4069): [-] BO : Fix meta description
 * [4072](https://github.com/PrestaShop/PrestaShop/pull/4072): [-] FO : Could not see available vouchers when changing quantities
 * [4074](https://github.com/PrestaShop/PrestaShop/pull/4074): [-] BO : Remove back button message of expired POST data
 * [4072](https://github.com/PrestaShop/PrestaShop/pull/4072): [-] FO : Could not see available vouchers when changing quantities
 * [4074](https://github.com/PrestaShop/PrestaShop/pull/4074): [-] BO : Remove back button message of expired POST data
 * [4079](https://github.com/PrestaShop/PrestaShop/pull/4079): [-] FO : Content hooked to 'productListReviews' is removed on dynamic list/grid update
 * [4081](https://github.com/PrestaShop/PrestaShop/pull/4081): [-] BO : Fixed bug while testing module
 * [4082](https://github.com/PrestaShop/PrestaShop/pull/4082): [-] BO : Fixed checking if module is trusted
 * [4087](https://github.com/PrestaShop/PrestaShop/pull/4087): [*] FO : Add availability microdata data when product is purchasable out of stock
 * [4094](https://github.com/PrestaShop/PrestaShop/pull/4094): [-] CORE : Fix issues into ps_delivery table
 * [4096](https://github.com/PrestaShop/PrestaShop/pull/4096): [-] FO : Too much calls of findCombination
 * [4105](https://github.com/PrestaShop/PrestaShop/pull/4105): [-] FO : no localstorage with Safari private browsing
 * [4110](https://github.com/PrestaShop/PrestaShop/pull/4110): [-] FO Avoid Email validation Error on ajax request
 * [4111](https://github.com/PrestaShop/PrestaShop/pull/4111): [-] Class: Missing category param when update positions + duplicate call 
 * [4113](https://github.com/PrestaShop/PrestaShop/pull/4113): [-] BO : Fix confusion about private messages in AdminCustomerThreads
 * [4115](https://github.com/PrestaShop/PrestaShop/pull/4115): [-] BO : Fix wrong redirect after editing customer
 * [4117](https://github.com/PrestaShop/PrestaShop/pull/4117): [-] BO : Customer groups - remove enable status on customers
 * [4119](https://github.com/PrestaShop/PrestaShop/pull/4119): [-] FO : Could not add to cart in quickview
 * [4122](https://github.com/PrestaShop/PrestaShop/pull/4122): [-] BO : Fix bad utm_campaign, notice: Undefined index: lang_iso
 * [4123](https://github.com/PrestaShop/PrestaShop/pull/4123): [-] CORE : Fix notice Undefined index: host in classes/ConnectionsSource.php
 * [4125](https://github.com/PrestaShop/PrestaShop/pull/4125): [-] FO : Fix products links without correct anchor for attributes in shopping-cart
 * [4127](https://github.com/PrestaShop/PrestaShop/pull/4127): [-] BO : Delete thumb on product import
 * [4128](https://github.com/PrestaShop/PrestaShop/pull/4128): [-] FO : Fix bad redirect when PS_CART_REDIRECT
 * [4129](https://github.com/PrestaShop/PrestaShop/pull/4129): [-] CORE : Could not disable third party modules
 * [4130](https://github.com/PrestaShop/PrestaShop/pull/4130): [*] IN: fixtures, add some Czech translations
 * [4131](https://github.com/PrestaShop/PrestaShop/pull/4131): [-] FO : Fix notice Undefined index: nb_products
 * [4133](https://github.com/PrestaShop/PrestaShop/pull/4133): [-] BO : Property CustomerMessage->message is empty
 * [4137](https://github.com/PrestaShop/PrestaShop/pull/4137): [-] FO : Metas in maintenance mode
 * [4138](https://github.com/PrestaShop/PrestaShop/pull/4138): [-] BO : Fix exception on specific price amount import
 * [4141](https://github.com/PrestaShop/PrestaShop/pull/4141): [-] BO : Fix bad redirect when deleting shopping cart rule in customer details view
 * [4153](https://github.com/PrestaShop/PrestaShop/pull/4153): [-] FO : Fix bad validation when empty zipcode validation pattern
 * [4159](https://github.com/PrestaShop/PrestaShop/pull/4159): [-] Class: Address / Use getValue() instead of getRow() in isUsed() method
 * [4160](https://github.com/PrestaShop/PrestaShop/pull/4160): [-] Class: Customization / Use getValue() instead of getRow()
 * [4161](https://github.com/PrestaShop/PrestaShop/pull/4161): [-] Class: Module / $live_edit declared but not used
 * [4162](https://github.com/PrestaShop/PrestaShop/pull/4162): [-] Class: AdminController / Remove displayNoSmarty() method
 * [4163](https://github.com/PrestaShop/PrestaShop/pull/4163): [-] BO: remove old warning icon if no customer found when search one in create order
 * [4164](https://github.com/PrestaShop/PrestaShop/pull/4164): [-] WS: Manage multiple exclude filter values
 * [4167](https://github.com/PrestaShop/PrestaShop/pull/4167): [-] FO : Fix performances issue with smarty custom
 * [4169](https://github.com/PrestaShop/PrestaShop/pull/4169): Fix htmlentities in conf
 * [4172](https://github.com/PrestaShop/PrestaShop/pull/4172): // missing parenthesis
 

The [PrestaShop 1.6.1.2 RC3 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.2-rc3) is also available.

This release was made possible by the hard work of the PrestaShop Core Team, with the essential help of the following contributors: @brouillon, @Eolia, @mcdado, and @PrestaEdit. Thank you all!

If you too want to be part of the PrestaShop contributors, [please read this](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)!

And now, let's test this thing!
