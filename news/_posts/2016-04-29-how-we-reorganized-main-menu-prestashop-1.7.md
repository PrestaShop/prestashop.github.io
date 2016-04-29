---
layout: post
title:  "How we reorganized the main menu in PrestaShop 1.7"
subtitle: "And what you should know about it"
date:   2016-04-29 04:29:00
author: [ alexeven ]
icon: icon-compass
tags:
- 1.7
- product
- ux
- wording
---


Did you think everything had been said about PrestaShop 1.7 version? In our quest towards a simpler interface, the main menu was reorganized, mostly to make it easier for you to navigate in PrestaShop. So here are a few things you should be aware of.

In short:

* New sections were created
* A new wording has been introduced
* The location of some pages was changed
* Other pages were gathered as tabs of a main page


## The method behind the new menu

Here’s our recipe to come up with this updated menu:

* A game of card-sorting with the User Club
* A little bit of intuition
* A pinch of logic
* and, well, some of our secret sauce :)

We hope you’ll like it!

More seriously, the aim of the reorganization was simply to make the navigation easier in the software. We haven’t reduced the menu, it still has the same number of first-level options, however we did reorder it to what we hope is a logical way of navigating and working with your shop.

So we conducted a card-sorting experience with the help of the User Club members: 113 users gave us their feedback on which pages they were using the most in PrestaShop. It turns out "Orders", "Products" and "Customers" were the big winners. Who’d have thought?

<img style="border: 1px solid #CCC; padding: 10px;" width="600" src="/assets/images/2016/04/Prestashop_menu_card_sorting.png">


From there, we tried to rearrange the sidebar to reflect both what merchants would use the most, while injecting some logic in all this. For instance, to manage your contact information, you previously had to go on both the "Store Contacts" and the "Contacts" page. Hence, two different sections for a single action. Now it’s together in one place!

So hopefully you’ll see what we tried to do here: make it easier to find what you want to do. And when I say we, the whole team took part in this debate (for yes, there were debates!): UX designers, content and product managers too.


## Introducing a new wording


In addition to actually reorganizing the menu, we thought some menus deserved a better labeling. This is why some names have changed to be more explicit or easier to understand for first-time users. So new concept were introduced as well. Here are the details:

### Renaming

| 1.6 | 1.7 | Comment
|---------- | -------- | ----------------
| Manufacturers | Brands  | We believe merchants would rather advertise brands on their shops, instead of manufacturers; and from what we’ve seen, merchants were using the "manufacturer" entity more in the sense of "brands".
| Attachments | Files | Attachments aren’t always well understood. With a renaming and proper indications within the software, we hope this is now clearer (= adding files to your product page).
| Price Rules | Discounts | We’re not really getting rid of price "Rules" as you’ll still find “Catalog Price Rules” and “Cart Rules”, but we wanted to give it a name easier to grasp for first-time users.
| Themes | Theme & Logo  | It’s not much, but the way to change the logo wasn’t easy to find, and it’s something merchants want to do as soon as they start their shop. Now it should be even quicker to customize it!
| CMS | Pages | Well... We’re not exactly WordPress, or Drupal — and we don’t plan to be. What this feature allows you to do is to create pages for your static content (About, T&C, etc.). So here you go, that’s where you can create and manage your pages.
| Employees | Team | If you work with employees, then you’re a team :) A little renaming to give it a friendlier touch.
| CSV Import | Import | Good news! In version 1.7 you can import more formats - no need to be CSV-specific anymore!




### New labels or menus

#### Design
We’re aware that it’s not very easy to know where to go when you want to change the look of your shop. In previous versions,  it was split between various menus in various sections. In PrestaShop 1.7, we’ve created a "Design" section, gathering the main front office sections. From now on, this is where you’ll find the theme settings, the pages ("CMS"), the modules’ positions page, and the image settings. All in one handy place, at last!

#### International
We haven’t invented anything here, we simply tried to rationalize the "Localization" menu, by reorganizing it, and giving it this new name, “International”. Because that’s what it is mostly about: you want to grow your business internationally, and PrestaShop helps you reach that goal. New markets, with new languages, new currencies and taxes, customized translations, etc.

#### Traffic
We created this new section to gather everything you need to manage in order to bring more visitor traffic to your online store. It means SEO management, but it also means how you deal with specific search engines, as well as the referral programs which you may have. These pages aren’t new, but we decided to put them all together in order to improve your workflow.

Now that you know most of what’s strictly “new”, let’s dive into how it’s all been reorganized — in other words, the “why” of these evolutions.


## Reorganization

### Introducing tabs

One of ideas behind this reorganization was to lighten the menu, at least its first level. To do this, and in line with the new 1.7 design, we’ve introduced tabs within various pages. This way we could gather related topics in one page only:

<img style="border: 1px solid #CCC; padding: 10px;" width="550" src="/assets/images/2016/04/Prestashop_menu_tabs_localization.png">


### Main sections: Sell, Improve, Configure

The most visible change to the back office menu is probably that we introduced three main sections, thus dividing the menu into three logical parts, based on how often merchants use each menu (as per our research). These sections are “Sell”, “Improve”, and “Configure”.


#### Sell

<img style="float: right; margin: 10px;" width="180" src="/assets/images/2016/04/Prestashop_menu_new_menu.png">

It’s all about your day-to-day activity. Orders, customers, catalog, etc. This section presents the essence of your business, where you go each day to get your business going.

*Submenus:*
Orders, Catalog, Customers, Customers Service, Stats.

#### Improve
Here you will find everything to customize your shop and take your business further. Set up the look of your front office, adapt your payment methods to your target markets, expand internationally or enhance your shop with new modules and features!

*Submenus:*
Modules, Design, Shipping, Payment, International

#### Configure
It is divided in two submenus.
The first one is your shop parameters. You’ll find here all the settings you need to configure when you launch your activity. Once you made your initial choices, you won’t go there very often.
The second menu can be seen as the technical section, with more advanced settings that aren’t used often either.

*Submenus:*
Shop Parameters, Advanced Parameters

Now let's dive into each of these three sections to see what's underneath.


### New positions and subsections


#### // SELL //

##### Orders
Orders now come first, as it’s THE most important concern of your daily activity.


| **Removed** | Merchandise Returns  | Now in "Customer Services" (see [below](#customer-service)).
|  				   | Statuses | Now in "Shop Parameters" > "Order Settings", as it’s not related to your daily operations but rather to the global settings for your orders.
|  				   | Order Messages | Now in "Customer Service". Order messages are pre-written messages you can send to your customers via the "Order" page. We thought it made sense to have it under the "Customer Service" section, where you can manage your communication with your clientele.
| **Added** | Shopping Carts  | Previously in "Customers", is now in "Orders". We think it’s key to monitor your abandoned carts, and moving it to this major section made sense. It’s not yet an order, but could soon become one, so it deserves all this attention.
| **Submenus** |      | Orders, Invoices, Credit Slip, Delivery Slips, Shopping Carts

<img  width="500" src="/assets/images/2016/04/Prestashop_menu_catalog_order.png">


##### Catalog

This is where the first pages using tabs were introduced as we grouped several pages here. We added or removed others pages to make sure this is the one place where you go to manage your offer and what is available on your shop.


| **Removed** | Tags  | Went to the new "Search" pages as they are used to guide your customers through their product search on your shop.
| **Added**   | Price Rules (now Discounts) | Has been moved in this section as pricing is as important as your products  in defining your catalog and adjusting your offer.
| **Merged** | Product Attributes + Product Features  | = Attributes & Features
|   		 | Manufacturers + Suppliers  | = Brands & Suppliers
| **Submenus** |      | Products, Categories, Monitoring, Attributes & Features, Brands & Suppliers, Files, Price Rules

##### Customers
This menu has been stripped down to keep the essential: your listing of customers, and their addresses. Everything else, which is considered as settings (groups, titles, etc.), is now in more relevant sections.


| **Removed** | Groups  | Now to be found as a tab in "Shop Parameters" > "Customers".
|   		 | Shopping Carts  | Now in "Orders", as [already mentioned](#orders).
|   		 | Customer Service  | Has been [promoted as a first-level menu](#customer-service), to make it easier to follow-up with your customers.
|   		 | Contacts  | Has been moved to "Shop Parameters": once it’s filled-in, you don’t often use this page.
|   		 | Titles  | Now in "Shop Parameters" > "Customers".
| **Submenus** |      | Customer Settings, Addresses, Outstanding (in B2B mode)

<img  width="500" src="/assets/images/2016/04/Prestashop_menu_customer_service_2.png">


##### Customer Service
With more visibility, the "Customer Service" menu now includes the previously separate "Customer Service" page as you know it, the "Order Messages" page and the "Merchandise Returns" page.

This is where you can manage interactions with your customers once an order has been placed.

And finally, the **Stats** menu hasn’t changed a bit: same page, same position.


#### // IMPROVE //

##### Modules
You’re aware [we’ve revamped the Modules page](http://build.prestashop.com/news/module-page-awakens/). We also stripped down this menu to its bare essence:

| **Removed** | Positions  | Now in "Design", as part of the improved way of customizing your front office.
|   		 | Payment  | In the "Improve" section, so that it is treated on equal footing with "Shipping".
| **Submenus** |Modules & Services| Redesigned, as you’ve seen in this [previous article](http://build.prestashop.com/news/module-page-awakens/).
|   		 | Modules Catalog  | Which now only displays modules from Addons Marketplace (and no longer themes, which you will find in "Theme Catalog").

<img  width="500" src="/assets/images/2016/04/Prestashop_menu_design_modules.png">

##### Design
I’m not going to dwell much on this one, the why of this section has been explained [above](#new-labels-or-menus).

* *Submenus:* Theme & Logo, Theme Catalog, Pages, Positions, Image Settings

##### Shipping
Stays the same, we kinda liked it this way :)

* *Submenus:* Carrier, Preferences

<img  width="500" src="/assets/images/2016/04/Prestashop_menu_shipping_payment.png">

##### Payment
The former "Payment" page has been divided into two new pages: "Payments Methods" and "Preferences". It has been organized to look like the Shipping page.

In the **Payment Methods** page, you’ll find all the payment methods available in your shop, active or inactive, while the **Preferences** page (formerly at the bottom of the Payment page, thus less visible), allows you to decide which country or which currency to support for each payment method.
Nothing new here, just a quick reorganization.

* *Submenus:* Payment Methods, Preferences

##### International
You can view it as the former "Localization" menu, where pages have been merged to give a better overview. Nothing new either, only a few merges and an addition.


| **Added**   | Geolocation | Previously in "Preferences", the "Geolocation" page is now a tab of the "Localization" page. It seemed logical, as it’s where you define in which countries your shop is accessible (or not).
| **Merged** | States + Zones + Countries  | = "Locations". We grouped under one page everything related to the shipping zone and locations.
|   		 | Taxes + Tax Rules  | = became two tabs of a general "Taxes" page.
| **Submenus** |      | Localization, Locations, Taxes, Translations

<img  width="250" src="/assets/images/2016/04/Prestashop_menu_international.png">


#### // CONFIGURE //

The Configure section is mostly a reorganization of the former "Preferences", "Advanced Parameters" and "Administration" tabs.

##### Shop Parameters
This section is about settings that will impact how your shop works. Most of these pages were previously found under the “Preferences” menu.


| **Removed** | Geolocation  | Moved to "International".
| **Added**   | Statuses | Now in "Order Settings".
|   		 | Groups  | Now in "Customer Settings".
|   		 | Titles  | Also in "Customer Settings".
|   		 | Tags  | in "Search".
| **Merged** | General + Maintenance  | = General
| **Submenus** |      | General, Order Settings, Product Settings, Customer Settings, Contact, Traffic, Search

<img  width="500" src="/assets/images/2016/04/Prestashop_menu_parameters.png">


##### Advanced Parameters
Here you’ll find advanced and technical settings. Most of these pages are for one-time use: once you’ve set everything up, you’re not supposed to go there very often, but merely for checkups or a few updates.


| **Added**   | Administration | Formerly a first level tab, it’s been moved here. The "Employees" page was extracted and moved to the same level (as the "Team" page).
| **Merged**  | Employees + Profiles + Permissions  | = Team. Everything to manage your employees (at least, in PrestaShop :)
|   		 | SQL Manager + DB Backup  | = Database
| **Submenus** |      | Information, Performance, Administration, E-mail, Import, Team, Database, Logs, Webservice



That’s it, you know all about it. Let us know what you think! :)
We’re still in the alpha phase for PrestaShop 1.7, so this new navigation isn’t fully implemented yet if you’re testing it (yes, [we need you to test it!](http://build.prestashop.com/news/here-comes-prestashop-1-7-alpha-4/)). But most of it is already there!












