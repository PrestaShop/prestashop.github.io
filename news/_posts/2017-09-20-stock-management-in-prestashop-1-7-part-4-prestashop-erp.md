---
layout: post
title:  "Stock management in PrestaShop 1.7 - part 4"
subtitle: "Introducing PrestaShop ERP!"
date:   2017-09-20 09:10:11
authors: [ emmanuelfages ]
icon: icon-archive
tags:
 - feature
---

In the previous posts, we spoke about [our motivations for designing a new stock management system](http://build.prestashop.com/news/stock-management-in-prestashop-1-7/) and [how we’ve built it in the 1.7.2 release](http://build.prestashop.com/news/stock-management-in-prestashop-1-7-part-2/). We also [described in depth the features and the technology used in these new interfaces](http://build.prestashop.com/news/stock-management-in-prestashop-1-7-part-3/). Now it’s time to tell you about the forthcoming advanced features of stock management!


### The current state of stock management in PS 1.7

If you’ve followed the evolution of the stock management in 1.7, the next lines will not be a surprise for you. 

In 1.7.2, we introduced both the Stock Overview tab and the Stock Movement tab. 
The first one gives you a global display of the current stock situation with the available quantities including the reserved items. Using the search (by supplier, product name or reference) or the filters (by supplier or product category), the merchant can edit the quantity of their products.
In the second one, they can check the history of the changes.

For the next versions, we’ll keep adding features. For instance, in 1.7.3, you will find the Low-stock Level and Low-stock Alerts, the import / export of data using a CSV file, or the bulk edition of the stock quantity. More should be added in 1.7.4. We’re still discussing this!


### A Useful Reminder

When we were thinking about how to bring stock management back in version 1.7, we met a lot of merchants with important needs to run their stock in PrestaShop, and sent many surveys. 

What we quickly noticed is that, firstly, the majority of them didn’t use a great part of the advanced features. Secondly, they were facing a lots of bugs in the interface, with a poor user experience that made the whole feature really complex to use. 

As a result, we found that only 8.7% of the interviewed retailers kept using the Advanced Stock Management (ASM) in version 1.6. Considering the efforts we used to put on this ASM, we’d have hoped better feedback, but that’s a sad reality we have to act on: Advanced Stock Management was useless for 91,3% of merchants !

So, choices had to be made. Our responsibility is to provide that works properly, not extremely advances features we couldn’t manage on the long term. So, keep or drop ASM? 

We decided to do both, but in a different way than today:

* We want to keep the basic tools for stock management, to make sure we can answer to 90% of our merchants with a high quality level, making their e-commerce business successful. This is the reason why we’ve started to build the 1.7.2 with stock overview, quantity edition and movements history; and we‘ll continue with stock alerts, movement tracking, etc. It’s also the reason why some feature [won’t be native anymore](http://build.prestashop.com/news/stock-management-in-prestashop-1-7/).
* But we also wanted to have a solution for the remaining 10% of the most advanced merchants that are used to rely on specific developments, spreadsheets or even both. This is the reason why we’ve looked for a team with a strong experience in stock management and e-commerce, and which could be able to deliver a world class ERP Module that answers the most professional needs you can have, with the guarantee of constant quality. Their name is [Boost My Shop](https://www.boostmyshop.fr/). 


### Introducing PrestaShop ERP

#### What is it?

PrestaShop ERP is a suite of embedded ERP modules designed for PrestaShop 1.7, which provides merchants with advanced features to help in their daily routine of managing their stock, from the supply purchases to the stock management in a multi-channel scenario. 

![Stock](/assets/images/2017/09/stockmanagement4-erp.png)

Each module provides a specific scope of features, and together they expand each other. Here are the 3 main ones: 

* **Procurement**, built to run the supply orders. It enables to manage the providers, predict the needed products, create and track orders and manage the whole stock workflow. 
* **Order Fulfillment**, to handle the shipment of the orders (in mass) by packing with barcode scanners, integrating labels of the main shipping services, print invoices and packing slip, etc.  
* **Multi-channel Stock Management**, to run complex stock workflow including many stock locations and point-of-sale. This module allows stock transfers, a mass-stock editor and a reservation and advanced routing system. 

While these three modules will be released in the near future, some later modules are scheduled to target more specific needs such as dropshipping. We are planning on 7 modules at the end.


#### Wait… it’s not open source?

_Yes, you read modules. These modules will be sold on PrestaShop Addons._

We want to make e-commerce more accessible as we always did but don’t want to give up on quality. Stock management is a complex subject that needs to be truly dedicated, with both operational and technical knowledge. The PrestaShop’s core team always did the best to support a high level of features, but ASM remains one of the biggest subjects to deal with, which led us to not be able to bring strong evolutions. With Boost My Shop, we’ll be back on track to provide great stock features...  


#### Who is it for?

PrestaShop ERP is mainly done for the small and midsize businesses. It doesn’t aim to bring competition to a real ERP tool, but to allow our users to get an affordable solution to fully run their stocks. They will be able to select only a few of these modules or to choose the entire suite of modules, according to their needs. 

#### Who’s behind it?

The team behind former online retailer Boost My Shop decided  2 years ago to focus their activities on developing modules, particularly on the stock management. Their tools currently help over 5,000 merchants, which provides them with feedback in order to constantly improve their modules. 

Therefore, these guys were the best option to work with us and build a high quality suite of modules, particularly to avoid the compatibility issues. 

#### What’s next? 

As you previously read, we are constantly working on the stock management in 1.7. So, if you want to suggest ideas for improvements or give your feedback about the interface we are developing, leave a comment and we will contact you soon :)
