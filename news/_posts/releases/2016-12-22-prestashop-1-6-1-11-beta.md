---
layout: post
title:  "Beta version of PrestaShop 1.6.1.11 - An ASM-focused release"
subtitle: "Help us test our many fixes for Advanced Stock Management"
date:   2016-12-22 10:00:00
author: [ aleeks, thierrymarianne ]
icon: icon-lab
tags:
 - advanced-stock-management
 - patch
---

It has been in the pipeline for a while, it's now official, PrestaShop 1.6.1.11 will ship soon, most notably with some patches concerning the advanced stock management.

[Try 1.6.1.11 beta now!](https://download.prestashop.com/download/old/prestashop_1.6.1.11-beta.zip){: .btn .btn-lg .btn-success}
{: .text-center}

**In beta at first**, it will allow you to judge the stability of this release, and of the important fixes that have been applied to this version. **So your feedback is really important to us!**

<div class="alert alert-important" role="alert">
<h4><i class='icon-fire'></i> Important</h4>
You should not use this beta version in production.
</div>

## Reorganization of advanced stock management screen

We have simplified the views of advanced stock management, to bring more consistency.


#### Stock management

This tab now only displays products for which advanced stock management is enabled. This makes it impossible to add stock to ineligible products. 

Besides, products transfers and stock line removals are only allowed with the `id_stock` parameter, which prevents errors linked to stock movements.

![Stock management](/assets/images/2016/12/asm-remove.png)


#### Stock movement

In this tab, a few changes:

- we have fixed movement order: movements are now proposed from the newest to the oldest.
- we have fixed the icons display.

![Stock movement](/assets/images/2016/12/asm-stock-movement.png)


#### Instant stock status

This tab is the one that has been the least affected by these fixes, only columns with wrong outputs have been corrected.

Products are listed by combinations, with stock quantities (`physical` and `usable`) which are now valid.

We removed the `real quantity` column altogether: it was supposed to take supply orders into account, which in fact were never linked to stock quantities. So the column was simply useless in this state.

![Instant stock status](/assets/images/2016/12/asm-stock-instant.png)


#### Supply orders

With regards to supplier orders, a bug related to status changes (specifically the `completely received` status) has been fixed.<br/>
Previously, stock quantities were not updated in physical receipts.<br/>
Now, when an order is fully received, stock movement is added to the history and stocks are updated properly!

![Supply orders](/assets/images/2016/12/asm-supply-order.png)


## See Github & Forge

All the changes that have been made to advanced stock management can be found here: [#7117](https://github.com/PrestaShop/PrestaShop/pull/7117).

This PR fixes a lot of Forge issues! Here are some of them:

- Can't remove stock in ASM: [PSCSX-3476](http://forge.prestashop.com/browse/PSCSX-3476), [PSCSX-6823](http://forge.prestashop.com/browse/PSCSX-6823), [PSCSX-8599](http://forge.prestashop.com/browse/PSCSX-8599)
- Physical & usable quantities values aren't good: [PSCSX-5991](http://forge.prestashop.com/browse/PSCSX-5991), [PSCSX-7135](http://forge.prestashop.com/browse/PSCSX-7135)
- ASM supply orders didn't update the inventory (completely receive): [PSCSX-6628](http://forge.prestashop.com/browse/PSCSX-6628), [PSCSX-6894](http://forge.prestashop.com/browse/PSCSX-6894), [PSCSX-7549](http://forge.prestashop.com/browse/PSCSX-7549)


## Remember

These patches focus on improving the display and edition of stocks. So they don't solve every other problems that advanced stock management might have.

Ideally, you should enable advanced stock management only on new products, or on products which do not have an order in progress. Otherwise, a problem of consistency between the product page (available quantity) and the stock page (real quantity) is known to happen.

To solve this consistency problem, you'll have to process all open customer orders that were created before you activated ASM.

1. To do so, it is important you use (or create) an order status that considers the products as shipped or delivered, then switch the current orders to this new status.
2. This will remove the reservation of the products but won't decrease the physical stock since no warehouse was attached to the order at that time. So you might then have to adjust your physical quantity.


## How to help us

You can test this release, **only in a test environment** and tell us what works and what doesn't.<br/>
You can open a [Forge issue](http://forge.prestashop.com) and flag your problem with `advanced_stock_management` label, also, you can  give us your impression by reacting to this post.

**We hope you'll like these fixes!**

[Try 1.6.1.11 beta now!](https://download.prestashop.com/download/old/prestashop_1.6.1.11-beta.zip){: .btn .btn-lg .btn-success}
{: .text-center}
