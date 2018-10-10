---
layout: post
title:  "Release of PrestaShop 1.6.1.22"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2018-10-10 18:00:00
authors: [ AntoineThomas ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.6.1.x
 - 1.6
---

PrestaShop 1.6.1.22 is now available. It fixes an important bug introduced in 1.6.1.21:

- A patch has been backported from 1.7.x in 1.6.1.21, but part of the code was missing and it can block a shop. Shops in 1.6.1.21 must upgrade to 1.6.1.22 as soon as possible.


[Download PrestaShop now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Here is the [complete list of changes for 1.6.1.22](https://github.com/PrestaShop/PrestaShop/milestone/48?closed=1)

- Core:
  - Bug fix:
    - [#10921](https://github.com/PrestaShop/PrestaShop/pull/10921): Missing class const on cert refresh

Contributor to this patch versions, from the Core team: Thomas Nabord.

A very special thanks to Doekia on the forum for the original report.

Since version 1.6.1.22 is a "patch" update to version 1.6.1.21, upgrading from any 1.6.1 version will be easy: features will work better, and modules & themes which worked fine on 1.6.1.x will work just as well with 1.6.1.22.<br/>
Upgrades from a standard 1.6.x version should work just as well.
