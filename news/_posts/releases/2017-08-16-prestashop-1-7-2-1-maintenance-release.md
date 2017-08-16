---
layout: post
title:  "Release of PrestaShop 1.7.2.1"
subtitle: "Maintenance version of the 1.7.2.x branch"
date:   2017-08-16 05:10:11
authors: [ xavierborderie ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.1.x
 - 1.7
---

PrestaShop 1.7.2.1 is now available. This maintenance release fixes 25 issues reported on version 1.7.2.

Version 1.7.2.0, [released in July](http://build.prestashop.com/news/prestashop-1-7-2-0-available/), brought a lot of goodies, none the less being the new Stock Management feature. That new minor version was well received, and this patch version simply fixes a few kinks that were discovered, bringing further goodness and stability to the 1.7.2 branch.

Some of the most notable fixes are:

* Add a scrollbar for editor
* Fix for CMS tree on sitemap
* Refresh product line on quantity change in cart & Show discount to cart summary
* Use composer cacert file by default
* Upgrade theme modules & disabling them in the same time that the theme

[Download PrestaShop 1.7.2.1 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Here is the [complete list of changes](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20milestone%3A1.7.2.1):

- Back Office:
   - Improvement:
     - #8140: Update modules page design
   - Bug fix:
     - #8236: Fix module modal layout
     - #8046: Fix legacy submenu laptop
     - #8141: Fix the module "translate" button with the new link of translation page
     - #8173: Fix the search error with white spaces in stock page
     - #8160: Fix the style of product reference in the stock management page
     - #8166: Fix the misalignment of the search button in the stock page
     - #8167: Fix the search tags in the stock management

 - Front Office:
   - Improvement:
     - #8205: Fix custom content link opening in the same page
     - #8145: Fix custom content link opening in the same page
     - #7855: Add link to products for Pack
   - Bug fix:
     - #8206: Fix flags on products front-office
     - #8152: Make the slider appears on Mobile view
     - #8191: Fix flags on products front-office
     - #8155: Fix the style of forgotten password page
     - #8169: Fix typo in bootstrap class
     - #7716: Fix displaying product thumbnails
     - #8111: Fix unclosed tag
     - #8170: Limit the description's image by the size of description's frame

 - Core:
   - Improvement:
     - #8201: Speed up search queries (17)
   - Bug fix:
     - #8228: Optimise synchronization stock sql
     - #8215: Add translations in database when importing theme
     - #8165: Use MessageCatalog function to get all message
     - #8186: Improve stock sql performance

 - Installer:
   - Bug fix:
     - #8021: Use correct module name column for authorization role

The [PrestaShop 1.7.2.1 changelog](https://download.prestashop.com/download/releases/changelog_1.7.2.1.txt) is available.

Contributors to this patch version, from both the Core team and the community at large: @aleeks, @azouz-jribi, @fatmabouchekoua, @jocel1, @maximebiloe, @molka, @nihco2, @prestamodule, and @soullivaneuh! Thank you!

Since version 1.7.2.1 is a "patch" update to version 1.7.2.0, upgrading from any 1.7.2 version will be easy: features will work better, and modules & themes which worked fine on 1.7.2.0 will work just as well with 1.7.2.1.<br/>
Upgrades from a standard 1.7.x version should work just as well, and those upgrading from older versions (1.6, 1.5, 1.4 or even older) should take their time and pay attention to their modules, their theme and their custom modifications!
