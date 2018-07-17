---
layout: post
title:  "Release of PrestaShop 1.7.4.1"
subtitle: "Maintenance version of the 1.7.4.x branch"
date:   2018-07-16 09:10:11
authors: [ LouiseBonnard ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.4.x
 - 1.7
---

PrestaShop 1.7.4.1 is now available. This maintenance release fixes 16 issues reported on version 1.7.4.

Some of the most notable fixes are:

* Installer fixes.
* Fix display issues on some modules.


[Download PrestaShop 1.7.4.1 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}


Here is the [complete list of changes](https://github.com/PrestaShop/PrestaShop/milestone/40?closed=1):
    
- Back Office:
  - Improvement:
    - [#9311](https://github.com/PrestaShop/PrestaShop/pull/9311): Apply shop context in configuration
  - Bug fix:
    - [#9299](https://github.com/PrestaShop/PrestaShop/pull/9299): Fix error while duplicating a product when catalog specific price rules are stored
    - [#9297](https://github.com/PrestaShop/PrestaShop/pull/9297): Fix display when a module uses $this->bootstrap = false;
    - [#9261](https://github.com/PrestaShop/PrestaShop/pull/9261): Update Controller name for link generation to modules catalog
    - [#9268](https://github.com/PrestaShop/PrestaShop/pull/9268): Added .htaccess to var folder
- Front Office:
  - Bug fix:
    - [#9315](https://github.com/PrestaShop/PrestaShop/pull/9315): Fix not visible category display
    - [#9295](https://github.com/PrestaShop/PrestaShop/pull/9295): Fix free shipping display on cart
    - [#9270](https://github.com/PrestaShop/PrestaShop/pull/9270): Apache 2.4 configuration
    - [#9252](https://github.com/PrestaShop/PrestaShop/pull/9252): Add combinations in cart summary
- Core:
  - Bug fix:
    - [#9288](https://github.com/PrestaShop/PrestaShop/pull/9288): Fix Cart::isVirtualCart() method when cart is empty
    - [#9298](https://github.com/PrestaShop/PrestaShop/pull/9298): Fix/remove mbo from tests
    - [#9220](https://github.com/PrestaShop/PrestaShop/pull/9220): Ability to use widget block from specific hook
    - [#9269](https://github.com/PrestaShop/PrestaShop/pull/9269): Update ps_themecusto to version 1.0.6
    - [#9237](https://github.com/PrestaShop/PrestaShop/pull/9237): Fixed bug with friendly URLs and Media Servers
    - [#9101](https://github.com/PrestaShop/PrestaShop/pull/9101): Fix have cart rule today
- Installer:
  - Improvement:
    - [#9302](https://github.com/PrestaShop/PrestaShop/pull/9302): Reduce the number of ajax calls if the fixtures are not too larges and if there's enough memory available
  - Bug fix:
    - [#9271](https://github.com/PrestaShop/PrestaShop/pull/9271): Catch more exceptions during install & display the error intead of a JS error
    - [#9258](https://github.com/PrestaShop/PrestaShop/pull/9258): Limit subquery results in upgrade sql 1.7.0.0


The [PrestaShop 1.7.4.1 changelog](https://download.prestashop.com/download/releases/changelog_1.7.4.1.txt) is available.

Contributors to this patch version, from both the Core team and the community at large: @jocel1, @kpodemski, @lucasRolff, @marionf, @mickaelandrieu, @PierreRambaud, @prestamodule, @Quetzacoalt91, @rGaillard, @tomlev, and @toutantic! Thank you!

Since version 1.7.4.1 is a "patch" update to version 1.7.4.0, upgrading from the 1.7.4.0 version will be easy: features will work better, and modules & themes which worked fine on 1.7.4.0 will work just as well with 1.7.4.1.

Note that **we strongly recommend you to use the version 4.0 of the 1-click upgrade**, currently available as a beta on GitHub, instead of the version 3.0 available on the marketplace.
