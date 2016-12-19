---
layout: post
title:  "Advanced Stock Management patches"
subtitle: "Coming with PrestaShop 1.6.1.11"
date:   2016-12-18 14:00:00
author: [ aleeks, thierrymarianne ]
icon: icon-lab
tags:
 - advanced stock management
---

It has been in the pipeline for a while, it's now official, PrestaShop 1.6.1.11 will ship some patches concerning the advanced stock management.
**In beta at first**, it will allow you to judge the stability of this release, and important fixes that have been applied for this version. **So your feedback is really important to us!**

<div class="alert alert-important" role="alert">
<h4><i class='icon-fire'></i> Important</h4>
You should not use this version in production.
</div>

## Reorganization of advanced stock management screen
We have made the views of advanced stock management a bit simpler, more consistent for you.


#### Stock management
In this tab, we have limited the displayed products to those who have advanced stock management enabled.
This makes it impossible to add stock to ineligible products. Besides, products transfers and stock lines removal are only allowed with the `id_stock` parameter, which prevents errors linked to stock movements.


#### Stock movement
In this tab, few changes:

- we have fixed movement order, movements are now proposed from the newest to the oldest,
- a patch on the stock icons has been introduced.


#### Instant stock status
This tab is the one that has been the least affected, only columns with wrong outputs have been corrected. The products are separated by combination and stock quantities ​​(`physical`, `usable` and `real` ones) which are now valid.


#### Supply orders
With regards to supplier orders, a bug related to status changed (specifically `completely received` status) has been fixed, previously stock quantities were not updated in physical receipts.
Now, when an order is fully received, stock movement is added to the history and stocks are updated properly!


## See Github & Forge
All the changes that have been made to advanced stock management can be found here: [#7117](https://github.com/PrestaShop/PrestaShop/pull/7117).

This PR fixes a lot of Forge issues, some of them:

- Can't remove stock in ASM: [PSCSX-3476](http://forge.prestashop.com/browse/PSCSX-3476), [PSCSX-6823](http://forge.prestashop.com/browse/PSCSX-6823), [PSCSX-8599](http://forge.prestashop.com/browse/PSCSX-8599)
- Physical & usable quantities values aren't good: [PSCSX-5991](http://forge.prestashop.com/browse/PSCSX-5991), [PSCSX-7135](http://forge.prestashop.com/browse/PSCSX-7135)
- ASM supply orders didn't update the inventory (completely receive): [PSCSX-6628](http://forge.prestashop.com/browse/PSCSX-6628), [PSCSX-6894](http://forge.prestashop.com/browse/PSCSX-6894), [PSCSX-7549](http://forge.prestashop.com/browse/PSCSX-7549)