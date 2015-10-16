---
layout: post
title:  "PrestaShop Core Weekly - Week 41"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-10-16 14:37:41
author: xavierborderie
icon: icon-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during last week, from Monday 5th to Sunday 11th of October.


## Notable happenings

 * In [4113](https://github.com/PrestaShop/PrestaShop/pull/4113), Core developer @gRoussac made it so that there is no confusion anymore between internal-team messages and messages sent to the customer.
 * In [6837](https://github.com/PrestaShop/PrestaShop/pull/6837), @gRoussac corrected a wrong behavior with product image thumbnail during import.
 * In [4164](https://github.com/PrestaShop/PrestaShop/pull/4164), Core contributor @prestamodule to multiple exclusion filter values in the web service (eg. `filter[id]=![10|14|15]`).
 * In [4176](https://github.com/PrestaShop/PrestaShop/pull/4176), Starter Theme developer @djfm made it so that Smarty automatically escapes HTML. Bye bye `{$var|escape:'html':'UTF-8'}`!
 * In [4181](https://github.com/PrestaShop/PrestaShop/pull/4181), @djfm added app-level events to keep the UI in sync.


## Code changes in 1.6.1.x

Here are the merged pull-requests on the [1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x) since the last Core Weekly Report!
 

#### Front office

 * [4079](https://github.com/PrestaShop/PrestaShop/pull/4079): Content hooked to 'productListReviews' is removed on dynamic list/grid update, by @gRoussac.
 * [4131](https://github.com/PrestaShop/PrestaShop/pull/4131): Fix notice Undefined index: nb_products, by @gRoussac.
 * [4137](https://github.com/PrestaShop/PrestaShop/pull/4137): Metas in maintenance mode, by @gRoussac.
 * [4236](https://github.com/PrestaShop/PrestaShop/pull/4236): Fix bad redirection on cart when minimum amount for order, by @gRoussac.
 
 
 
#### Back office
 
 * [4163](https://github.com/PrestaShop/PrestaShop/pull/4163): Remove old warning icon if no customer found when search one in create order. Thank you @prestamodule!
 * [4113](https://github.com/PrestaShop/PrestaShop/pull/4113): Fix confusion about private messages in AdminCustomerThreads, by @gRoussac.
 * [4117](https://github.com/PrestaShop/PrestaShop/pull/4117): Customer groups - remove enable status on customers, by @gRoussac.
 * [4127](https://github.com/PrestaShop/PrestaShop/pull/4127): Delete thumb on product import, by @gRoussac.
 * [4138](https://github.com/PrestaShop/PrestaShop/pull/4138): Fix exception on specific price amount import, by @gRoussac.
 * [4141](https://github.com/PrestaShop/PrestaShop/pull/4141): Fix bad redirect when deleting shopping cart rule in customer details view, by @gRoussac.
 * [4178](https://github.com/PrestaShop/PrestaShop/pull/4178): AdminCustomerController, one more string is now translatable, by @AlexEven.
 * [4223](https://github.com/PrestaShop/PrestaShop/pull/4223): Show stock warning on products less than 0. Thank you @PhpMadman!

 
 
#### Core
 
 * [4159](https://github.com/PrestaShop/PrestaShop/pull/4159): Class: Address / Use getValue() instead of getRow() in isUsed() method. Thank you @prestamodule!
 * [4160](https://github.com/PrestaShop/PrestaShop/pull/4160): Class: Customization / Use getValue() instead of getRow(). Thank you @prestamodule!
 * [4162](https://github.com/PrestaShop/PrestaShop/pull/4162): Class: AdminController / Remove displayNoSmarty() method. Thank you @prestamodule!
 * [4161](https://github.com/PrestaShop/PrestaShop/pull/4161): Class: Module / $live_edit declared but not used. Thank you @prestamodule!
 * [4123](https://github.com/PrestaShop/PrestaShop/pull/4123): Fix notice Undefined index: host in classes/ConnectionsSource.php, by @gRoussac.
 * [4169](https://github.com/PrestaShop/PrestaShop/pull/4169): Fix htmlentities in configuration files, by @julienbourdeau.
 * [4196](https://github.com/PrestaShop/PrestaShop/pull/4196): Fix undefined var, by @gRoussac.
 * [4225](https://github.com/PrestaShop/PrestaShop/pull/4225): Fix typo in getCMSContent, by @gRoussac.
 * [4144](https://github.com/PrestaShop/PrestaShop/pull/4144): Could not edit a carrier, by @gRoussac.

 
 
#### Web service

 * [4164](https://github.com/PrestaShop/PrestaShop/pull/4164): Manage multiple exclude filter values. Thank you @prestamodule!

 
 
#### Translation

 * [4247](https://github.com/PrestaShop/PrestaShop/pull/4247): Translate install xml files to Swedish. Thank you @macroy!

 
 
## Code changes in 1.7.0.0-develop

Now let's review the merged pull-requests on the ['develop' branch](https://github.com/PrestaShop/PrestaShop/tree/develop) since the last Core Weekly Report!

Note that the Start Theme repo (see next section) is entirely part of the PrestaShop 1.7.0.0 project.
 
#### Core


 * [4240](https://github.com/PrestaShop/PrestaShop/pull/4240): Increase customer name length, by @jnadaud.
 * [4250](https://github.com/PrestaShop/PrestaShop/pull/4250): Lastname & firstname are now varchar(255) for customer. Thank you @vAugagneur!
 * [4253](https://github.com/PrestaShop/PrestaShop/pull/4253): Include /classe/log/ and /modules/**/img/ folder in gitignore. Thank you @PrestanceDesign!
 * [4252](https://github.com/PrestaShop/PrestaShop/pull/4252): Updated composer install command. Thank you @PhpMadman!
 
 
## Code changes in Starter Theme

Finally, these are the merged pull-requests on the 'feat/starter-theme' branch since the last Core Weekly Report!
 

 * [4173](https://github.com/PrestaShop/PrestaShop/pull/4173): Checkout feature, by @djfm.
 * [4174](https://github.com/PrestaShop/PrestaShop/pull/4174): Multiple and default carrier(s) in cart, by @maximebiloe.
 * [4184](https://github.com/PrestaShop/PrestaShop/pull/4184): Improved Tests Documentation, by @djfm.
 * [4176](https://github.com/PrestaShop/PrestaShop/pull/4176): Core : Smarty now automatically escapes HTML, by @djfm.
 * [4181](https://github.com/PrestaShop/PrestaShop/pull/4181): Core : Added app level events to keep UI in sync, by @djfm.
 * [4191](https://github.com/PrestaShop/PrestaShop/pull/4191): Move sub-cats up into the main <section> to keep semantic relationship. Thank you @inetbiz!
 * [4198](https://github.com/PrestaShop/PrestaShop/pull/4198): Fixed JS Escaping, by @djfm.
 * [4216](https://github.com/PrestaShop/PrestaShop/pull/4216): Add some nofilter for addresses, by @julienbourdeau.
 * [4229](https://github.com/PrestaShop/PrestaShop/pull/4229): blockcontact replaces blockcontactinfos, by @djfm.
 
 

 
See all the PRs merged into the codebase since the last Core Weekly [here](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+merged%3A%3E2015-10-05+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors whose Pull Requests were merged since the last Core Weekly Report: @inetbiz, @macroy, @PhpMadman, @PrestanceDesign, @prestamodule, and @vAugagneur. Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

If you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!

 
 
 
