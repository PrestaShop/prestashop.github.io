---
layout: post
title:  "PrestaShop Core Weekly - Weeks 21 & 22"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-06-05 16:29:47
author: xavierborderie
icon: fa-calendar
tags:
 - core-weekly
---

This edition of the Core Weekly report highlights changes in PrestaShop core codebase during the last two weeks, from Monday 18th of May to Sunday 31st of May, 2015.

May is a short/quick month in Paris, and I was quite absent in the last few days, while projects here were many. In short, sorry for the lateness of this edition of Core Weekly -- which consequently spans two weeks instead of one, again. Back to our normal schedule next week!


## Milestones

Version 1.6.1.0-rc3 was released last week! Help us test it! [Read all about it here](http://build.prestashop.com/news/prestashop-1-6-1-0-rc3/)!

The [PSR-2 survey](https://www.prestashop.com/forums/topic/434831-psr2-development-norm-for-prestashop/) is closed, and the participants chose to follow through! [Consequently, we're adopting PSR-2 from 1.6.1.0 onward](http://build.prestashop.com/news/prestashop-moves-to-psr-2/)!

Of note among the merged PRs in the last two weeks:

 * As announced in [a previous post on this blog](http://build.prestashop.com/news/new-architecture-1-6-1-0/), the new architecture of PrestaShop is being worked on, and the first elements were merge into Core through PR 3053. A lot of thanks for djfm (François-Marie De Jouvencel), tchauviere (Thibaud Chauvière) and mdomenjoud (Michel Domenjoud) for the huge work that has been accomplished so far! There is still a long road to follow, and we call on the whole community to spread the word and help us achieve this goal!
 * In PR 3061, core developer sfroment42 (Sacha Froment) allowed the use of &lt;style&gt; in the email editor (TinyMCE).
 * In PR 3067, contributor frederic-benoist (Frédéric Benoist) added a cleanHtml modifier to Smarty Add in order to prevent XSS injections.


## Code changes

Let's review the merged pull-requests from the previous two weeks!

As always, click on the PR's number to open its page on GitHub.

#### Text fixes

 * [3020](https://github.com/PrestaShop/PrestaShop/pull/3020): PDF : Update delivery-slip.tpl. Thank you Nobodaddy!
 * [3064](https://github.com/PrestaShop/PrestaShop/pull/3064): AdminOutstandingController - wording, by AlexEven.
 * [3054](https://github.com/PrestaShop/PrestaShop/pull/3054): blockwishlist - wording, by AlexEven.
 * [3110](https://github.com/PrestaShop/PrestaShop/pull/3110): BO - Wording, by AlexEven.
 
#### Front office

 * [3041](https://github.com/PrestaShop/PrestaShop/pull/3041): minimal quantity on add to cart button. Thank you vAugagneur!
 * [3047](https://github.com/PrestaShop/PrestaShop/pull/3047): order-detail / see order reference even if the re-order is disabled. Thank you PrestaEdit!
 * [2862](https://github.com/PrestaShop/PrestaShop/pull/2862): fatal error in guest OPC, by gRoussac.
 * [2844](https://github.com/PrestaShop/PrestaShop/pull/2844): wrong condition for shipping message, by sfroment42.
 * [3066](https://github.com/PrestaShop/PrestaShop/pull/3066): refresh shipping cost when delayed shipping, by sfroment42.
 * [3071](https://github.com/PrestaShop/PrestaShop/pull/3071): Prevent errors after page redirect. Thank you rolandschuetz!
 
#### Back office

 * [3030](https://github.com/PrestaShop/PrestaShop/pull/3030): Dashboard filter date update, by maximebiloe.
 * [3033](https://github.com/PrestaShop/PrestaShop/pull/3033): Adding shop name when not in multistore, by jeromenadaud.
 * [3036](https://github.com/PrestaShop/PrestaShop/pull/3036): Fix issue with checkbox / radio button in the category tree, by jocel1.
 * [2971](https://github.com/PrestaShop/PrestaShop/pull/2971): Admin module's position page updated, by Shudrum.
 * [3037](https://github.com/PrestaShop/PrestaShop/pull/3037): correct employee permission, by sfroment42.
 * [3038](https://github.com/PrestaShop/PrestaShop/pull/3038): correct processsave return, by sfroment42.
 * [2941](https://github.com/PrestaShop/PrestaShop/pull/2941): default DateMonth selection in dashboard graph, by gRoussac.
 * [3059](https://github.com/PrestaShop/PrestaShop/pull/3059): Set preselect month range as default, by jeromenadaud.
 * [2951](https://github.com/PrestaShop/PrestaShop/pull/2951): limit results for customers search in BO, by gRoussac.
 * [3008](https://github.com/PrestaShop/PrestaShop/pull/3008): Display rights warnings while updating a language pack, by gRoussac.
 * [3063](https://github.com/PrestaShop/PrestaShop/pull/3063): Fix Catalog prices rules shop group context, by jeromenadaud.
 * [3069](https://github.com/PrestaShop/PrestaShop/pull/3069): Fix issue with multiple cart rules, by jocel1.
 * [3074](https://github.com/PrestaShop/PrestaShop/pull/3074): Optimize Theme::getByDirectory method query. Thank you gskema!
 * [2955](https://github.com/PrestaShop/PrestaShop/pull/2955): fix 'undefined' on images upload, by gRoussac.
 
#### Core

 * [3040](https://github.com/PrestaShop/PrestaShop/pull/3040): Remove language cache on localization install, by jeromenadaud.
 * [3043](https://github.com/PrestaShop/PrestaShop/pull/3043): Change spaces for tabs, by jeromenadaud.
 * [3045](https://github.com/PrestaShop/PrestaShop/pull/3045): Typographical error. Thank you joseantgv!
 * [2909](https://github.com/PrestaShop/PrestaShop/pull/2909): allow camelcase to be norm-compliant for modules, by sfroment42.
 * [3055](https://github.com/PrestaShop/PrestaShop/pull/3055): Correct appearance of warning, by sfroment42.
 * [3056](https://github.com/PrestaShop/PrestaShop/pull/3056): static error in php 5.2, by jeromenadaud.
 * [2781](https://github.com/PrestaShop/PrestaShop/pull/2781): allow &lt;style&gt; in email, by sfroment42.
 * [3058](https://github.com/PrestaShop/PrestaShop/pull/3058): revert 2781, by jeromenadaud.
 * [3060](https://github.com/PrestaShop/PrestaShop/pull/3060): PHPDoc for Customer:searchByName(), by jeromenadaud.
 * [3065](https://github.com/PrestaShop/PrestaShop/pull/3065): correct query syntax error, by sfroment42.
 * [3061](https://github.com/PrestaShop/PrestaShop/pull/3061): allow &lt;style&gt; in email, by sfroment42.
 * [3081](https://github.com/PrestaShop/PrestaShop/pull/3081): Fixed issue with newInstanceArgs on PHP 5.3, by djfm.
 * [3087](https://github.com/PrestaShop/PrestaShop/pull/3087): Performances : Lazy cache should use the local cache, when possible, by jocel1.
 * [3053](https://github.com/PrestaShop/PrestaShop/pull/3053): Can I Haz a new Core?, by djfm, tchauviere, mdomenjoud.
 * [3091](https://github.com/PrestaShop/PrestaShop/pull/3091): Update new CORE : Fixes, by tchauviere and djfm.
 * [3088](https://github.com/PrestaShop/PrestaShop/pull/3088): need to recalculate depth only when current depth as changed, by sfroment42.
 * [3101](https://github.com/PrestaShop/PrestaShop/pull/3101): Performances : flush cache to avoid storing too big arrays, by jocel1.
 * [3104](https://github.com/PrestaShop/PrestaShop/pull/3104): Optimize searchByName performances, by jocel1.
 * [3106](https://github.com/PrestaShop/PrestaShop/pull/3106): Performances : improve search reindex performance with cache enabled, by jocel1.
 * [3107](https://github.com/PrestaShop/PrestaShop/pull/3107): Performances : remove SQL_NO_CACHE from specificPrice, by jocel1.
 * [3111](https://github.com/PrestaShop/PrestaShop/pull/3111): Performances : disable cache during import, by jocel1.
 * [3019](https://github.com/PrestaShop/PrestaShop/pull/3019): set tax correctly with specific price, julienbourdeau.

#### Unit tests

 * [2776](https://github.com/PrestaShop/PrestaShop/pull/2776): loadSlaves() now uses dynamic constants, by tchauviere.
 * [3070](https://github.com/PrestaShop/PrestaShop/pull/3070): Update PrestaShopAutoload unit test, by jeromenadaud.
 * [2882](https://github.com/PrestaShop/PrestaShop/pull/2882): Added Travis build status img in README.md, by tchauviere.
 
#### Modules

 * [3022](https://github.com/PrestaShop/PrestaShop/pull/3022): productscategory module title fix, by maximebiloe.

#### Smarty

 * [3067](https://github.com/PrestaShop/PrestaShop/pull/3067): Add new cleanHtml modifier. Thank you frederic-benoist!
 
#### PDF

 * [3032](https://github.com/PrestaShop/PrestaShop/pull/3032): Keep invoice and delivery address for invoicing, by julienbourdeau.
 * [3062](https://github.com/PrestaShop/PrestaShop/pull/3062): Fix product lines, summary and notax label, by julienbourdeau.
 * [3068](https://github.com/PrestaShop/PrestaShop/pull/3068): Invoice - remove total products after discounts, by julienbourdeau.
 
#### Installer

 * [3029](https://github.com/PrestaShop/PrestaShop/pull/3029): Update active shops, by jeromenadaud.
 * [3044](https://github.com/PrestaShop/PrestaShop/pull/3044): Wrong PHP_VERSION, by jeromenadaud.
 * [3072](https://github.com/PrestaShop/PrestaShop/pull/3072): Missing picture + wording, by jeromenadaud.
 * [3083](https://github.com/PrestaShop/PrestaShop/pull/3083): Installer wording, by jeromenadaud.
 
#### Multistore

 * [3028](https://github.com/PrestaShop/PrestaShop/pull/3028): Multistore option rebranding, by jeromenadaud.
 

See all the PRs merged into the codebase since May the 18th (be with you!) [here](https://github.com/PrestaShop/PrestaShop/pulls?page=1&pulls_only=true&q=is%3Apr+merged%3A%3E2015-05-18+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors whose Pull Requests were merged: [frederic-benoist](https://github.com/frederic-benoist), [gskema](https://github.com/gskema), [joseantgv](https://github.com/joseantgv), [Nobodaddy](https://github.com/Nobodaddy), [PrestaEdit](https://github.com/PrestaEdit), [rolandschuetz](https://github.com/rolandschuetz), and [vAugagneur](https://github.com/vAugagneur). Also, thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets on the Forge!

Remember: if you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Until the next Core Weekly report, let me know if I forgot something here, or if you have ideas about how to improve this report!

Happy contributin' everyone!
