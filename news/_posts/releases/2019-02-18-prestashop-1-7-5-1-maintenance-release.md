---
layout: post
title:  "Release of PrestaShop 1.7.5.1"
subtitle: "Maintenance version of the 1.7.5.x branch"
date:   2019-02-18 17:00:00
authors: [ PrestaShop ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.5.x
 - 1.7
---


PrestaShop 1.7.5.1 is now available.

This version fixes bugs and regressions of the 1.7.5.0 version. It also integrates the latest security fixes from Symfony, a core dependency. We strongly encourage you to upgrade your shop as soon as possible.

## Main fixes

* Merchants can now choose if they want the attribute names on the product page title (“Display attributes in the product meta title” in Shop Parameters > SEO & Urls)
* Fixed a bug preventing module developers to extend grids
* Latests security fixes from Symfony
* Fixed visual problems in the BO when using right-to-left languages
* Fixed pagination issues in pages using the new grids
* Switching combinations in the FO is now faster
* Fixed an exception when sending an email in some systems

## Full Changelog

- Back Office:
  - Bug fix:
    - #12507: Add hookDispatcher in GridFactory constructor, HookDispatcherAwareTrait has a safer getter
    - #12234: Force refresh of tinymce editors in product page step 1
    - #12402: Fix first attribute generation when not choosing first attribute
    - #12372: Fix provider warehouse routes
    - #12370: RTL fixes: profile, select and notification dropdown, popover tooltips, stock quantity arrows
    - #12395: Change stock alert z index to be on top of header
    - #12354: Fix cancel button on Safari browser
    - #12361: Refacto SearchParameters and SearchParametersResolver for pagination
    - #12205: Fix bulk module actions
    - #12277: Prevent usage of enter key in search hook input
    - #12236: SERP: Textarea from tinymce requires jquery to return the text value
    - #12016: Update module & service link in upgrade
    - #12196: Fix RTL glitches
    - #12111: Keep showcase cards closed
    - #11923: Fix error in SERP component when using non-alphanumeric characters

- Front Office:
  - Improvement:
    - #12327: Make it possible to enable/disable attribute name on page title
  - Bug fix:
    - #12337: Slow combination update due to delay before request

- Core:
  - Bug fix:
    - #12543: Update vulnerable dependencies
    - #12389: Fixed grid hook calls
    - #12292: Allow arabic numbers in link rewrite
    - #12106: Robots.txt with multilang/multishop
    - #11995: Fix undefined INTL_IDNA_VARIANT_UTS46 if intl ICU < 4.6
    - #11814: Fix typos and duplicate code in upgrade SQL

- Installer:
  - Bug fix:
    - #11937: Check if intl is installed in installer


[Download PrestaShop 1.7.5.1 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Contributors to this patch versions, from both the Core team and the community at large: Jonathan Lelievre, Mathieu Ferment, Mickaël Andrieu, Pablo Borowicz, Pierre RAMBAUD, rdy4ever, Thomas Nabord. Thank you!

Since version 1.7.5.1 is a “patch” update to version 1.7.5.0, upgrading from any 1.7.5 version will be easy: features will work better, and modules & themes which worked fine on 1.7.5.0 will work just as well with 1.7.5.1.
Upgrades from a standard 1.7.x version should work just as well.
