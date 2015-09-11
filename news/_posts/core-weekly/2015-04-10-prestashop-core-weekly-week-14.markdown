---
layout: post
title:  "PrestaShop Core Weekly - Week 14"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-04-10 11:45:00
author:  [ xavierborderie ]
icon: fa-calendar
tags:
 - core-weekly
---

...and we're back for another Core Weekly report!
As you can see, we've moved to the Build.PrestaShop blog, which is where all dev activity will be talked about, for and with the Community!

As always, this Core Weekly report highlight changes in PrestaShop core codebase last week, from Monday 30th of March to Sunday 5th of April.

The Core Weekly report is ever evolving, so if you have ideas on how to improve it, let me know!

## Milestones

Well, we launched the Build.PrestaShop devblog, which you are reading right now. This is a big step towards the community (developers, designers, or just the curious ones), which we've been meaning to make for a long time, and we're very happy to have this place to exchange with you!

The PSR-2 survey is still running, give us your opinion! [https://www.prestashop.com/forums/topic/434831-psr2-development-norm-for-prestashop/](https://www.prestashop.com/forums/topic/434831-psr2-development-norm-for-prestashop/)

## Code changes

Onto the categorized list of last week's merged pull-requests!

As always, click on the PR's number to open its page on GitHub.

#### Code typos

 * [2790](https://github.com/PrestaShop/PrestaShop/pull/2790): typo in classes/ImageType.php. Thank you PrestaEdit!
 
#### Text fixes

 * [2796](https://github.com/PrestaShop/PrestaShop/pull/2796): fix PSCSX-5141 - bad URL, by AlexEven.
 * [2815](https://github.com/PrestaShop/PrestaShop/pull/2815): wording harmonization - front office, by AlexEven.
 
#### Categories

 * [2768](https://github.com/PrestaShop/PrestaShop/pull/2768): fix issues with ajax tree loading when creating a new category, by jocel1. Based on wellic's [2745](https://github.com/PrestaShop/PrestaShop/pull/2745): thank you!

#### phpDoc

 * [2800](https://github.com/PrestaShop/PrestaShop/pull/2800): replace @return $this for better compatibility. Thank you gskema!
 * [2803](https://github.com/PrestaShop/PrestaShop/pull/2803): PHPDoc for ObjectModel + code formatting. Thank you gskema!
 
#### Unit Tests

 * [2816](https://github.com/PrestaShop/PrestaShop/pull/2816): travis: PHP 7.0 nightly added. Thank you TomasVotruba!
 
#### Core

 * [2818](https://github.com/PrestaShop/PrestaShop/pull/2818): fix unregisterHook with name. Thank you natrim!
 * [2820](https://github.com/PrestaShop/PrestaShop/pull/2820): AdminController / Remove assigns which will be done after. Thank you PrestaEdit!
 * [2829](https://github.com/PrestaShop/PrestaShop/pull/2829): Optimize cart rules by filtering out from the query the unneeded rows, by jocel1.

#### Front office

 * [2767](https://github.com/PrestaShop/PrestaShop/pull/2767): Theme simplification: order step gradients. Thank you axometeam!
 * [2787](https://github.com/PrestaShop/PrestaShop/pull/2787): Keep existing "general" SKU in metadata visible with groups. Thank you dkarvounaris!
 * [2786](https://github.com/PrestaShop/PrestaShop/pull/2786): Follow schema.org "price" usage guidelines. Thank you dkarvounaris!
 * [2788](https://github.com/PrestaShop/PrestaShop/pull/2788): Schema url needs to point to product page instead of image. Thank you dkarvounaris!
 * [2780](https://github.com/PrestaShop/PrestaShop/pull/2780): Fix css bug #PSCSX-5047, by gRoussac.
 * [2810](https://github.com/PrestaShop/PrestaShop/pull/2810): Exception in Cart.php, by gRoussac.
 * [2821](https://github.com/PrestaShop/PrestaShop/pull/2821): Added displayBlockPrice hook on bestsellers template, by tchauviere.
 * [2822](https://github.com/PrestaShop/PrestaShop/pull/2822): blockspecials - Added hook displayBlockPrice to template, by tchauviere.
 * [2827](https://github.com/PrestaShop/PrestaShop/pull/2827) and [2828](https://github.com/PrestaShop/PrestaShop/pull/2828): blocknewproducts - Added hook displayBlockPrice to template, by tchauviere.
 
#### Back office

 * [2782](https://github.com/PrestaShop/PrestaShop/pull/2782): Fix PSCSX-5143, remove type column in adminorders shipping table, by gRoussac.
 * [2794](https://github.com/PrestaShop/PrestaShop/pull/2794): SQL crash on search abandoned cart. Thank you doekia!
 * [2802](https://github.com/PrestaShop/PrestaShop/pull/2802): fix variable initialization, by jocel1.
 
#### PDF

 * [2775](https://github.com/PrestaShop/PrestaShop/pull/2775): tel and fax translation. Thank you cedricfontaine!
 * [2792](https://github.com/PrestaShop/PrestaShop/pull/2792): Fix #PSCSX-4925, parse error in /pdf/footer.tpl, by gRoussac.
 * [2806](https://github.com/PrestaShop/PrestaShop/pull/2806): fix PSCSX-5171 - missing translation in PDF, by AlexEven.

 
We're making good progress towards a significant new version, where a lot has been optimized. The coming version of PrestaShop will be faster and stronger than any you have seen before!

Thank you to the PrestaShop Core developers for making sure the code is always top-notch, and thank you to our super contributors for their non-ending flow of great ideas: PrestaEdit, gskema, wellic, TomasVotruba, natrim, axometeam, dkarvounaris, doekia, and cedricfontaine... and those whose contributions were not merged, too! Also, a big thanks to all those who contribute with tickets on the Forge!

Remember: if you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Until the next Core Weekly report, let me know if I forgot something here, or if you have ideas about how to improve the this report!

Cheers!
