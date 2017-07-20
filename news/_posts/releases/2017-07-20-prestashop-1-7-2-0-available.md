---
layout: post
title:  "PrestaShop 1.7.2.0 is available!"
subtitle: "Stock management is just one of the many aspects you'll love"
date:   2017-07-20 09:10:11
authors: [ xavierborderie ]
icon: icon-checked
tags:
 - 1.7
 - 1.7.2.x
 - version
 - minor
 - releases
 - development
---

Dear community. You've all been waiting for it. So have we. PrestaShop 1.7.2.0.

We know you expected a lot from the next minor version, and we didn't to let you down. It closes almost twice as many pull requests as 1.7.1.0, 1.7.1.1 and 1.7.1.2 _combined (126 vs. 203), and we took a month more of testing and improving it.

[Download PrestaShop 1.7.2.0 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

The previous version, released in early April 2017, brought many of the things that you wanted v1.7.0.0 to have: several native modules were available again (cross-selling, specials/discounts, best-sellers, etc.), the PayPal module made its come back, several improvements were made to the back office (including a unified mobile design)... All the while improving stabilization and performance.

So you might be wondering, what do we have in store for you this time? Keep reading...


### What's new?

Here what you can expect from this new minor version of PrestaShop:

* **New Stock Management interface, with essential management of your inventory.**
* **New Translation page, with improved code and interface.**
* **New hooks on both the Product page and the Classic theme.**
* Improved Classic theme readability on low quality screens.
* Product page text areas now have a character counter.
* New localization packs for Algeria, Morocco, South Africa and South Korea.
* New Installer languages: Estonian, Finnish, Greek and Slovak.

…and many smaller things and needed fixes! [Check the full changelog here](https://assets.prestashop2.com/en/system/files/ps_releases/changelog_1.7.2.0.txt).

Let's explore that a bit, shall we?


#### New Stock Management interface

The 1.6 Advanced Stock Management feature was deemed too unstable to really be taken as-is in 1.7.0.0. We chose the remove from the first 1.7 versions in order to take the time to explore how to best build stock management into PrestaShop.

You can follow our quest to build a new stock management feature right here on the Build devblog: [how we assessed the situation](http://build.prestashop.com/news/stock-management-in-prestashop-1-7/), [how we iterated through prototypes](http://build.prestashop.com/news/stock-management-in-prestashop-1-7-part-2/), and finally, [what stock management looks like](http://build.prestashop.com/news/stock-management-in-prestashop-1-7-part-3/) in version 1.7.2.0.

![New Stock Management page](/assets/images/2017/07/stockmanagement3-multiple_quantity_update.gif)

It's no longer "advanced" as it was in PrestaShop 1.6: the stock management is now much more reasonable, and much more usable for a majority of merchants (the ones who can't afford an ERP yet).<br/>
It's also a solid foundation for further improvement!

Of note, [we started using the Vue.js framework](http://build.prestashop.com/news/introducing-vuejs-symfony-api/) in order to improve the UX in an iterative way.


#### New Translation page

The new Translation page in 1.7.0.0 kinda worked, but it was a performance hog, and not quite usable. So we decided to rework it using the same technology as the new Stock Management page: Vue.js.

![New Translation page](/assets/images/2017/07/ps1720-translation.png)


#### New hooks

Thanks to community members, develops can now enjoy new FO and BO hooks! 

* Front office, [thanks to @prestamodule](https://github.com/PrestaShop/PrestaShop/pull/7688/files):
  * displayWrapperTop
  * displayWrapperBottom
  * displayContentWrapperTop
  * displayContentWrapperBottom 
* Back office product page, [thanks @martinfojtik](https://github.com/PrestaShop/PrestaShop/pull/7613/files):
  * displayAdminProductsMainStepLeftColumnMiddle
  * displayAdminProductsMainStepLeftColumnBottom
  * displayAdminProductsMainStepRightColumnBottom
  * displayAdminProductsQuantitiesStepBottom
  * displayAdminProductsPriceStepBottom
  * displayAdminProductsOptionsStepTop
  * displayAdminProductsOptionsStepBottom
  * displayAdminProductsSeoStepBottom
  * displayAdminProductsShippingStepBottom


### Community involvement

Rarely has a version of PrestaShop so much contribution from the community! Of the 201 pull requests that were merged in this version, 52 came from contributors such as you! Yup, that's 25% of the code changes in 1.7.2.0 :) 

A huge "thank you!" to these 36 fine people, then: @0kph, @123monsite-regis, @aaymeric, @addisnetwork, @agnessymediane, @alendit, @alexdee2007, @dariusakafest, @djbuch, @gasparfm, @howardnoz, @ish6614, @jestemradek, @jorgevrgs, @kpodemski, @madef, @martinfojtik, @mortred974, @neoteknic, @nobodaddy, @pnicolass, @prestaedit, @prestamodule, @psandmore, @rubenmartins, @sebbareyre, @slamdunk, @soullivaneuh, @studiokiwik, @tiledcode, @tonyyb, @transkontrol, @true0r, @unlocomqx, @willowcreation, and @yannicka!

Thank you for helping improve the life of more than 260 000 online merchants with ideas, improvements and fixes!

Special thanks to @martinfojtik and @prestamodule, who are each responsible for 5 pull requestss \o/

Now go ahead and tell us what you think!

[Download PrestaShop 1.7.2.0 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}
