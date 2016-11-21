---
layout: post
title:  "Release of PrestaShop 1.7.0.1 "
subtitle: "Maintenance version of the 1.7.0.x branch"
date:   2016-11-21 09:10:11
author: xavierborderie
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.0.x
---

PrestaShop 1.7.0.1 is now available. This maintenance release closes 15 of the most pressing issues reported since v1.7.0.0

We know that some of you may have been waiting for the .1 version of 1.7 to try this new major version of PrestaShop. We are therefore happy to deliver the first "patch" release of PrestaShop 1.7.0.0 (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)). The initial release PrestaShop 1.7 was well received, with thousands of downloads and already well over a hundred production stores!

Version 1.7 is such a fondamental change to the PrestaShop codebase that our beloved community is bound to find issues that weren't spotted by our QA team. Thank you for contributing with eyeballs and pull requests!  
We aim at fixing critical and blocking issues in 1.7 with regular releases, packing a few specific fixes (in order to limit regression potential). Prepare yourself to see more patch releases in the coming weeks while we review the feedback from the community.

[Download 1.7.0.1 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

<div class="alert alert-important" role="alert">
Want to upgrade using the 1-Click Upgrade module? Make sure to upgrade the module first! This way you will have access to a new, 1.7-specific channel, which makes upgrading safer for merchants. Upgrading from 1.7.0.0 to 1.7.0.1 should be smooth as silk, by do a backup anyway :)<br/>
<br/>
If you want to upgrade from a pre-1.7.0.0 store (1.6, 1.5, and 1.4): be aware that your theme will be replaced by the default one! So you need first to rebuild your theme, or have one ready! <a href="http://build.prestashop.com/news/prestashop-1-7-faq/#will-it-be-easy-to-upgrade-from-previous-versions-of-prestashop-to-v17">Read the 1.7 FAQ about upgrade from previous versions</a>.
</div>

Here are the changes:

 - Back Office:
   - Bug fix:
     - [6975](https://github.com/PrestaShop/PrestaShop/pull/6975): Fix updating positions when sorting products
     - [6977](https://github.com/PrestaShop/PrestaShop/pull/6977): Fix issue on SpecificPrice class
     - [6952](https://github.com/PrestaShop/PrestaShop/pull/6952): Fix recommended modules modal window
     - [6962](https://github.com/PrestaShop/PrestaShop/pull/6962): Fix translation choice in BO
     - [6951](https://github.com/PrestaShop/PrestaShop/pull/6951): Fix notice on module translations
     - [6940](https://github.com/PrestaShop/PrestaShop/pull/6940): Fix email translations
     - [6937](https://github.com/PrestaShop/PrestaShop/pull/6937): Return empty array on API error for customer data

 - Front Office:
   - Bug fix:
     - [6991](https://github.com/PrestaShop/PrestaShop/pull/6991): Fix changing combination when catalog mode is enabled
     - [6979](https://github.com/PrestaShop/PrestaShop/pull/6979): Fix undefined event in core.js

 - Core:
   - Improvement:
     - [6982](https://github.com/PrestaShop/PrestaShop/pull/6982): Improve performances on Windows/NFS filesytem
   - Bug fix:
     - [7012](https://github.com/PrestaShop/PrestaShop/pull/7012): Load autoload earlier
     - [6971](https://github.com/PrestaShop/PrestaShop/pull/6971): Fix on included files for autoupgrade
     - [6989](https://github.com/PrestaShop/PrestaShop/pull/6989): Fix fatal if payment module return a non array result
     - [6973](https://github.com/PrestaShop/PrestaShop/pull/6973): Create temporary file in cache directory
     - [6969](https://github.com/PrestaShop/PrestaShop/pull/6969): Prevent password reset on user check by email

The [PrestaShop 1.7.0.1 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.7.0.1-stable) is available.

Since version 1.7.0.1 is a "patch" update to version 1.7.0.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.7.0.0 will work just as well with 1.7.0.1.

As for those wanting to upgrade from earlier versions (1.6, 1.5, 1.4, etc.), please be aware that while your data will work fine, you will have to rewrite your theme and thoroughly check your modules. Upgrading to 1.7 is a project, and you should make sure that you have the time and resources for it.
