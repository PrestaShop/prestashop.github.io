---
layout: post
title:  "Release of PrestaShop 1.7.4.2"
subtitle: "Maintenance version of the 1.7.4.x branch"
date:   2018-07-27 12:30:00
authors: [ AntoineThomas ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.4.x
 - 1.7
---

PrestaShop 1.7.4.2 is now available.

The most notable fixes for 1.7.4.2 are:

* Fixes for Smarty errors
* Fixes for Installation errors
* File access to JS et CSS on the front
* Upgrade 1.6 >> 1.7


[Download PrestaShop now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Here is the [complete list of changes for 1.7.4.2](https://github.com/PrestaShop/PrestaShop/milestone/46)

- Back Office:
  - Bug fix:
    - [#9358](https://github.com/PrestaShop/PrestaShop/pull/#9358): AdminSearchController.php : Parameter must be an array or an object that implements Countable
    - [#9359](https://github.com/PrestaShop/PrestaShop/pull/#9359): Allow configuration to save html data
    - [#9330](https://github.com/PrestaShop/PrestaShop/pull/#9330): It is impossible to create a SQL query "SELECT"  - SQL Manager page
    - [#9326](https://github.com/PrestaShop/PrestaShop/pull/#9326): Module translations aren't working when using Smarty Extend into TPL
    - [#9327](https://github.com/PrestaShop/PrestaShop/pull/#9327): Fixed Product form when stock management is disabled
    - [#9322](https://github.com/PrestaShop/PrestaShop/pull/#9322): Backward compatibility of  $this->isCached() in modules
    - [#9279](https://github.com/PrestaShop/PrestaShop/pull/#9279): Fix detection of APCu on Performance page

- Front Office:
  - Bug fix:
    - [#9378](https://github.com/PrestaShop/PrestaShop/pull/#9378): Generate core.js
    - [#9374](https://github.com/PrestaShop/PrestaShop/pull/#9374): Fix multishop price calculation
    - [#9364](https://github.com/PrestaShop/PrestaShop/pull/#9364): Fix JS error after add to cart
    - [#9365](https://github.com/PrestaShop/PrestaShop/pull/#9365): Wrong generated template path when using getCurrentSubTemplate with a full path name.
    - [#9357](https://github.com/PrestaShop/PrestaShop/pull/#9357): Core.js typeerror after updatecart
    - [#9335](https://github.com/PrestaShop/PrestaShop/pull/#9335): Url does not update when changing product attributes 

- Core:
  - Bug fix:
    - [#9348](https://github.com/PrestaShop/PrestaShop/pull/#9348): Fixed a misnamed variable
    - [#9345](https://github.com/PrestaShop/PrestaShop/pull/#9345): Can't install prestashop in dev mode with open_basedir
    - [#9339](https://github.com/PrestaShop/PrestaShop/pull/#9339): Fix bug extra space: htaccess directive order

- Installer:
  - Improvement:
    - [#9361](https://github.com/PrestaShop/PrestaShop/pull/#9361): Set allow_url_fopen optional in the system step
  - Bug fix:
    - [#9371](https://github.com/PrestaShop/PrestaShop/pull/#9371): Ntree regeneration should be done also if the entity arg is empty during install
    - [#9355](https://github.com/PrestaShop/PrestaShop/pull/#9355): Allow to install PrestaShop without allow_url_fopen enabled


Contributors to this patch versions, from both the Core team and the community at large: 123monsite-regis, GoT, iqit-commerce (Marcin Sz), jbroutier, jocelyn fournier, Mathieu Ferment, Mickaël Andrieu, Pablo Borowicz, Pedro Câmara, Pierre RAMBAUD, Prestarocket, Rémi Gaillard, Thomas LEVIANDIER, Thomas N, Thomas Nabord . Thank you! Five of you contributed for the very first time, warm welcome :-)

Since version 1.7.4.2 is a "patch" update to version 1.7.4.1, upgrading from any 1.7.4 version will be easy: features will work better, and modules & themes which worked fine on 1.7.4.x will work just as well with 1.7.4.2.<br/>
Upgrades from a standard 1.7.x version should work just as well.
