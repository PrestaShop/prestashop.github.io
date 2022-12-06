---
layout: post
title:  "Stock management in PrestaShop 1.7 - part 3"
subtitle: "As much details as we can give you!"
date:   2017-07-13 09:10:11
authors: [ guillaumebruere ]
icon: icon-archive
tags:
 - 1.7
 - 1.7.2.x
 - feature
---

In the previous episodes, we’ve seen the [motivations for designing a new stock management interface](http://build.prestashop.com/news/stock-management-in-prestashop-1-7/) and [how we’ve built it](http://build.prestashop.com/news/stock-management-in-prestashop-1-7-part-2/). By now, you must be pretty eager to see what it looks like for real… So let’s dive into the features of this new page of PrestaShop 1.7.2.0.

## How do you get started?

From the back-office left menu, just click on Catalog / Stock. That’s it! 

![Stock](/assets/images/2017/07/stockmanagement3-menu_stock.gif)

No need to activate an “advanced stock management” option from an obscure configuration page, nor to create a warehouse and then assign products to a warehouse and then assign every product to this stock management system… You see the point: contrary to PrestaShop 1.6, there’s no setup at all.


## Features

### Stock overview

Our goal here was pretty simple: allow users to have an overview of their catalog stock at a glance. 

A table presents the products in the catalog and their corresponding stock:

![Stock table](/assets/images/2017/07/stockmanagement3-stock_tab.png)

Each line represents a product (either standard, virtual or bundle) or one of its combinations. The only difference is that combination attributes are displayed just below the product’s name.

* The table contains the following columns:
* Image thumbnail, to help fast visual recognition.
* Product’s name and when it’s a combination, its attributes’ values.
* Product reference. In case a combination has its own reference then it’ll be used instead of the parent’s reference.
* Supplier. In case several suppliers are assigned to a product, only the default supplier will be shown here.
* Physical stock, which represents the quantity you actually have physically in your storage.
* Reserved stock, which represents the quantity of products that are currently in an open customer order that has not been shipped yet.
* Available stock, which is the quantity available for sale.
* Edit quantity. This input allows modifying the quantity manually. More on that in the next part.

At any time, these 3 notions of stock are linked by the following equation:

<code>Physical stock - Reserved stock = Available stock</code>

By default, products are sorted by decreasing product_id, meaning that the most recently created product will be on top. If there are more than 100 products and combinations, then the table is paginated.


### Quick edition of quantities

The goal here was to make it lightning-fast to edit a quantity when you need to. 

With Advanced Stock Management in PrestaShop 1.6, it took you up to 20 seconds to edit a single quantity… Now it’s just a matter of 3 seconds!

In version 1.6, with advanced stock management activated, you had to follow these steps:

![Quantity edition in PS 1.6](/assets/images/2017/07/stockmanagement3-ASM16_edit_qty.gif)

Now with version 1.7.2.0, an input to modify the quantity is directly reachable from the stock table. It works like this: 

![Quantity edition in PS 1.7](/assets/images/2017/07/stockmanagement3-stock_update.gif)

What you’re typing in this input is a quantity delta, meaning it’s not the desired final stock value but the quantity you’re adding or removing. You can either type in the quantity to add or to remove (with a minus sign), or use the up and down arrows to adjust the quantity.

While editing the quantity, you’ll see an overview of the resulting final stock:

![Stock overview](/assets/images/2017/07/stockmanagement3-overview.png)

This feature is here to help you see at the same time the starting point, the end point and the difference between those before validating. If you used to manually edit the quantity of a product directly in the product page by deleting the previous quantity and then entering the new one, it’ll save you a mental arithmetic operation and prevent you from forgetting the starting point when you’ve deleted it and a colleague interrupts you... 

If you want to edit multiple quantities at the same time, you can also edit the quantities of several products and then validate it all with the “apply new quantity” button.

![Multiple quantity update](/assets/images/2017/07/stockmanagement3-multiple_quantity_update.gif)


### Stock movements

![Movement table](/assets/images/2017/07/stockmanagement3-movements_tab.png)

The table of stock movements provides you with a log of all the stock changes. Because it’s an history of previous stock movements, this table only has an informative role and therefore cannot be edited. 

The structure looks similar to the stock table but here each line corresponds to a change in **physical** quantity for a product or combination. It contains the following columns:

* Image thumbnail, to help fast visual recognition.
* Product’s name and when it’s a combination, its attributes’ values.
* Product reference. In case a combination has its own reference then it’ll be used instead of the parent’s reference.
* Movement type. It represents the reason why a product’s physical quantity has changed.
* Quantity added or removed. This delta is formatted with a + or - label to facilitate visual recognition.
* Date and time, which is the exact server time stamp when the change occurred.
* Employee, which is the name of the person responsible for the change.

With version 1.7.2.0, we listed a minimum number of movement types in accordance with events that can trigger a movement:

* Manual edition by an employee, when for instance you modify a product’s quantity inside the stock table.
* Customer order, when an order switches from a status equivalent to ‘not shipped’ to another status equivalent to ‘shipped’ (and vice-versa). For instance, when you ship an order that was under preparation, this will create a stock movement, as the physical quantity of items shipped literally leaves your warehouse.
* Returned products, when you refill a product’s stock after receiving and accepting the merchandise return.
In the last two cases, the movement type in the table becomes an hyperlink to the corresponding customer order, so you have more context about this type of movement and don’t have to cross-check time stamps between the stock movements and orders tables.

By default, stock movements are sorted by descending date, so that the most recent stock movements are on the top.


### Search and filters

At the top of both tabs, you’ll find two features to quickly look for any product. The search bar is designed for use-cases where you know which product you’re looking for because you either have in mind its reference, name or supplier. While the advanced filters allow you to browse more options to fine-tune your search.

The search bar works the same in both tabs and looks for:

* product’s name
* product’s reference
* supplier
* [beta] attributes’ values. This allows you to look for a specific attribute value like color. When typing ‘green’, you’ll see all products which share this color attribute value. This is still in beta though, and might not work with too short attribute values like with sizes: ‘S’, ‘M’, ‘L’.

![Live search](/assets/images/2017/07/stockmanagement3-search_live.gif)

Each tab has different advanced filters, in order to adapt to the search context. 

In the ‘Stock’ tab, advanced filters contain:

* a supplier filter, which allows you to quickly browse available suppliers and choose one or several.
* a category filter with an expandable tree.

![Advanced stock filters](/assets/images/2017/07/stockmanagement3-adv_filters_stock_tab.png)

In the ‘Movements’ tab, advanced filters contain:

* a movement type filter, which allows you for instance to look for stock movements related to customer orders.
* an employee filter.
* a date range filter, if you’re looking for stock movements which happened during a specific period.
* and a category filter, like in the ‘Stock’ tab.

![Advanced movement filters](/assets/images/2017/07/stockmanagement3-adv_filters_mvt_tab.png)


### Multi-store

This new stock management system is compatible with multi-store. For obvious reasons, if you have multiple shops inside a group where stocks are not shared, you cannot manage your stock in “all shops” or “group” context. If you try to do so, you might see the following error message:

![Multiestore warning](/assets/images/2017/07/stockmanagement3-multi-store_warning.png)

Instead you have to select a shop in which you can work to edit its stock.

If you’re using a group of shops that share the same quantities, you’ll also have to select a unique shop context instead of a group but any change you make in a shop will also affect the other shops.

![Multistore context](/assets/images/2017/07/stockmanagement3-multi-store_context.png)


## Technical implementation

This page was developed using a combination of a custom Symfony-based API with VueJS. An upcoming article will tell you all about it :)


## What’s next

Maybe you’re enthusiastic about what you see and want to see more like this? Or you have ideas for improvements? Then if you haven’t already, complete [this subscription form](https://prestashop-testing.typeform.com/to/OJ0UFi) and be part of the community members who will help us build the next versions! We have plenty of ideas worth testing ;)




