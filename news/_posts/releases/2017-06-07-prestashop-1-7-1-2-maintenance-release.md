---
layout: post
title:  "Release of PrestaShop 1.7.1.2 "
subtitle: "Maintenance version of the 1.7.1.x branch"
date:   2017-06-07 05:10:11
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
 
PrestaShop 1.7.1.2 is now available. This maintenance release fixes 28 issues reported on version 1.7.1.
 
Version 1.7.1.1, [released two weeks ago](http://build.prestashop.com/news/prestashop-1-7-1-1-maintenance-release/), brought a lot of needed updates to v1.7.1.0, two weeks after the release of that new minor version. As a patch version, 1.7.1.2 brings further more goodness and stability to the 1.7.1 branch.
 
Some of the most nostable fixes are:

* Add a scrollbar for editor
* Fix for CMS tree on sitemap
* Refresh product line on quantity change in cart & Show discount to cart summary
* Use composer cacert file by default
* Upgrade theme modules & disabling them in the same time that the theme
 
[Download PrestaShop 1.7.1.2 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}
 
Here is the [complete list of changes](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20milestone%3A1.7.1.2):
 
- Back Office:
  - Bug fix:
    - #7891: Set value for Short Desc
    - #7860: Deny legacy module page view
    - #7789: Message Customer on order details page
    - #7801: Choose Theme on Mail Translation
    - #7790: Add a scrollbar for editor
    - #7783: Versions completions for the max value
    - #7807: Partial revert of 0c42257 to fix profiling mode in BO
 
- Front Office:
  - Bug fix:
    - #7795: Fix allow order value
    - #7773: Fix for CMS tree on sitemap
    - #7785: Fix slide down of carrier extra content in order funnel
    - #7797: Translate file upload button label
    - #7805: Fix word break classic
    - #7762: Allow image for categories when no description
    - #7761: Refresh product line on quantity change in cart & Show discount to cart summary
    - #7747: Fix the except_pages in theme.yml
    - #7745: Fix radio buttons on faceted search
    - #7759: Convert voucher value
 
- Core:
  - Bug fix:
    - #7901: Use composer cacert file by default
    - #7826: Allowed redirect protocol with Tools::file_get_content (curl)
    - #7800: Fix assets path when theme has the same name than PS
    - #7770: Return array when it's wanted if the hook doesn't exist
    - #7766: Fix displayError when string is using sprintf
    - #7740: Fix missing {url entity=product id=X}
    - #7752: Upgrade theme modules & disabling them in the same time that the theme
 
- Installer:
  - Bug fix:
    - #7846: Fix install/upgrade/upgrade.php for php-5.4 syntax
 
- Web Services:
  - Bug fix:
    - #7732: Change variable from string to array for php 7
     
The [PrestaShop 1.7.1.2 changelog](https://assets.prestashop2.com/fr/system/files/ps_releases/changelog_1.7.1.2.txt) is available.

Contributors to this patch version, from both the Core team and the community at large: @aleeks, @quetzacoalt91, @vincentbz, @fatmabouchekoua, @kompilorb, @iqit-commerce, @maximebiloe, @transkontrol, @nihco2, @prestamodule, and @joelsanchez. Thank you!
 
Since version 1.7.1.2 is a "patch" update to version 1.7.1.0, upgrading from any 1.7.1 version will be easy: features will work better, and modules & themes which worked fine on 1.7.1.0 will work just as well with 1.7.1.2.<br/>
Upgrades from a standard 1.7.0.x version should work just as well, and those upgrading from older versions (1.6, 1.5, 1.4 or even older) should take their time and pay attention to their modules, their theme and their custom modifications!
 
 
