---
layout: post
title:  "Advanced Stock Management patches"
subtitle: "Coming with PrestaShop 1.6.1.11"
date:   2016-12-21 10:00:00
author: [ aleeks, thierrymarianne ]
icon: icon-lab
tags:
 - advanced-stock-management
---

It has been in the pipeline for a while, it's now official, PrestaShop 1.6.1.11 will ship some patches concerning the advanced stock management.
**In beta at first**, it will allow you to judge the stability of this release, and important fixes that have been applied to this version. **So your feedback is really important to us!**

<div class="alert alert-important" role="alert">
<h4><i class='icon-fire'></i> Important</h4>
You should not use this version in production.
</div>

## Reorganization of advanced stock management screen
We have simplified the views of advanced stock management, to bring more consistency.


#### Stock management
This tab now only displays products for which advanced stock management is enabled.
This makes it impossible to add stock to ineligible products. Besides, products transfers and stock line removals are only allowed with the `id_stock` parameter, which prevents errors linked to stock movements.

![Stock management](/assets/images/2016/12/asm-remove.png)


#### Stock movement
In this tab, a few changes:

- we have fixed movement order: movements are now proposed from the newest to the oldest,
- a patch that fixes the icons display has been introduced.

![Stock movement](/assets/images/2016/12/asm-stock-movement.png)


#### Instant stock status
This tab is the one that has been the least affected, only columns with wrong outputs have been corrected. Products are listed by combinations, with stock quantities (`physical` and `usable`) which are now valid.
We removed the `real quantity` column altogether: it was supposed to take into account supply orders, which in fact were never linked to stock quantities. So the column was simply useless in this state.

![Instant stock status](/assets/images/2016/12/asm-stock-instant.png)


#### Supply orders
With regards to supplier orders, a bug related to status changes (specifically the `completely received` status) has been fixed.
Previously, stock quantities were not updated in physical receipts.
Now, when an order is fully received, stock movement is added to the history and stocks are updated properly!

![Supply orders](/assets/images/2016/12/asm-supply-order.png)


## See Github & Forge
All the changes that have been made to advanced stock management can be found here: [#7117](https://github.com/PrestaShop/PrestaShop/pull/7117).

This PR fixes a lot of Forge issues, some of them:

- Can't remove stock in ASM: [PSCSX-3476](http://forge.prestashop.com/browse/PSCSX-3476), [PSCSX-6823](http://forge.prestashop.com/browse/PSCSX-6823), [PSCSX-8599](http://forge.prestashop.com/browse/PSCSX-8599)
- Physical & usable quantities values aren't good: [PSCSX-5991](http://forge.prestashop.com/browse/PSCSX-5991), [PSCSX-7135](http://forge.prestashop.com/browse/PSCSX-7135)
- ASM supply orders didn't update the inventory (completely receive): [PSCSX-6628](http://forge.prestashop.com/browse/PSCSX-6628), [PSCSX-6894](http://forge.prestashop.com/browse/PSCSX-6894), [PSCSX-7549](http://forge.prestashop.com/browse/PSCSX-7549)


## How to help us
You can test this release, **only in a test environment** and tell us what works and what doesn't.
You can open a [Forge issue](http://forge.prestashop.com) and flag your problem with `advanced_stock_management` label, also, you can  give us your impression by reacting to this post.

**We hope you'll like these fixes!**