---
layout: post
title:  "PrestaShop 1.7.3.0 is available!"
subtitle: "Innovation is coming, with PrestaTrust and many more”
date:   2018-02-28 09:10:11
authors: [ PabloBorowicz, emmanuelfages, LouiseBonnard ]
icon: icon-checked
tags:
 - 1.7
 - 1.7.3.x
 - version
 - minor
 - releases
 - development
---
 
Dear community, it is a great day for us all. Many “when will it be released?” later, we are thrilled to announce the birth of PrestaShop 1.7.3!

After six months of blood, sweat, and tears (okay, we’re just kidding), here it is, the new minor version has come. We are aware that these six months of work have created greater expectations. You won’t be disappointed, because we worked a lot on it, to improve it and test it.

![173 Available](/assets/images/2018/02/173_Release.jpg)

[Download PrestaShop 1.7.3.0 now!](https://download.prestashop.com/download/releases/prestashop_1.7.3.0.zip){: .btn .btn-lg .btn-success}
{: .text-center}

Innovation is the central point of this release, with a great project that replaces security and technology on the map of PrestaShop : PrestaTrust, which will help to have a more secure environment for modules developers and buyers. Another important feature is the RTL, to finally make PrestaShop friendly with languages written from right-to-left - and it is the case for many stores! We will also continue our Symfony migration… well, it is all about improving your experience!

What’s in it otherwise? Let’s explore it...


## What's new?
 
Here what you can mainly expect from this (long-awaited) new minor version of PrestaShop:
 
- PrestaTrust, for which you were able to read [this post](http://build.prestashop.com/news/everything-you-always-wanted-to-know-about-prestatrust) to know more about and which allows to authenticate the code of modules and to safely keep track of the sales data in the blockchain.

- Right-To-Left (RTL) support. First with a back office now fully compliant with RTL languages. Then with the RTL theme generation. Indeed, front office themes can also be automatically converted to RTL. This is extremely important for selling in countries who speak in RTL languages like Arabic, Hebrew or Persian.

- Demo products 1.7. A whole new set of demo products that give PrestaShop a modern face while being friendlier to people from more conservative cultures, and highlight lesser known features like product customization.

- UI Kit (available in Symfony pages), for which you were able to read [this post](http://build.prestashop.com/news/PrestaShop-UI-Kit) to know more about it. A new graphic identity for the core... and modules, too! The UI kit brings a coherent set of reusable components that work the same across the back office, as well as Bootstrap 4 and jQuery 3.

- Symfony migration, for which you were able to read [this post](http://build.prestashop.com/news/make-back-office-modules-great-again) to know more about it. There are three aspects in the 1.7.3: new pages have been migrated to Symfony (Modules catalog, Performance and System Information), modules can now access the Symfony service container (which allows them to declare, use and override services, templates, and more!) and the debug toolbar is now improved with a hooks section (which displays in-depth information about the page's hooks and the modules attached to them).
 
## But also

- A product can now have multiple features of the same type
- Store schedules are now localized
- Icelandic localization
- Installer in Japanese
- New hooks on the BO:
    - displayDashboardToolbarTopMenu
    - displayDashboardToolbarIcons
    - displayAdminCustomersAddressesItemAction
- Tools for building a release package of PrestaShop are now included in the source code
- Sample configuration file for Nginx server

...and many many bugfixes and performance improvements! [Check the full changelog here]( https://assets.prestashop2.com/en/system/files/ps_releases/changelog_1.7.3.0-beta1.txt).

Let's explore a bit, shall we?


### Addons Connect + tips

With this new version, the Addons Connect module now is part of the core. It is a very important tool for merchants because it helps updating all the modules plugged to a store. Also, the useful and fun part of this module is that it displays one tip per week in the dashboard section of your back office. This way, we make all the merchants aware of their possibilities. Because your business is always evolving, it appears important to us to stay close to your actual or future needs, whenever you want!

![173 Tips & Updates](/assets/images/2018/02/173_Tips_Updates.png)


### Shipping delivery times
 
In order to be compliant with European laws, merchants now need to display the delivery date of an item in the Product page. You have two ways to do it: you can either configure it by default in the Product settings or for a standalone product. Here, you are able to define a delivery time for a product when in stock and out-of-stock with allowed backorders. You can also set up an availability label if you want.

 
### Import / Export in the Stock Overview page and low stock alerts

![173 Stock Overview](/assets/images/2018/02/173_Stock_Import.png)

As we want things to be kept simple and intuitive, we’ve decided to make it possible for the merchants to import or export the information displayed in the Stock Overview page in a CSV file. Why? So that you can work on it with your own device! And for the retailers also since they can edit their stock volume using just a CSV file. Indeed, the icon leads to the Import System section where low stock level has been added among the attributes listed.


### Low stock alerts
 
… which brings us to the next step! In the Stock Overview page, products with a quantity under the low stock level are now highlighted. Selecting this option allows retailers to sort these items first and have a better view of their needs.
 
It is possible to define it two ways: either in the Product Settings section or per product, by editing a standalone item. With this feature, you are now able to be notified each time the quantity of the reference goes under the defined low stock level. First by receiving an email to warn you, then by modifying the look of these products within the back office.

![173 Low Stock Levels](/assets/images/2018/02/173_Low_Stock_Levels.png)


### Bulk edition in stocks
 
Another possibility in PrestaShop 1.7.3 is that product stock information can now be updated in bulk instead of one by one. And it is very easy, all you have to do is select (in the left column) all the products you want to edit, enter the quantity to add to the already available stock and that’s it!


### Multiple features of the same type

Before, it was impossible for a product description to have more than one attribute of the same type (for example, multiple kinds of fabric like cotton, synthetic, etc.). This much-requested feature has now been added in the back office!


### Testing

A new suite of functional end-to-end tests is now included in the core, covering the most critical parts of the system.


## Community involvement
 
Like the previous minor version of PrestaShop, a great level has been reached in terms of involvement from the community with 1436 files changed, 861 commits, 203 pull requests, 56 committers and 37 community members!
 
A huge "thank you!" to these 37 fine people: Adonis Karavokyros, Alexandr Simonchik, Alexandre Alouit, AliShareei, Antonio Intagliata, Aymeric Auberton, Christian Kubitza, Code Utopia, comxd, Cristiano Verardi, Daniel, Danoosh, dariusakafest, David, Dickriven Chellemboyee, FrancMunoz, Gabriel Arama, hadrich-hatem, iqit-commerce, Krystian Podemski, Mahdi Shad, Manfredi Petruso, Marcin Sągol, Marek Hanuš, MattLoyeD, maxime aknin, MDWeb, mehrshadz, Molka DJEMAL, nache, Presta Module, Šarūnas Jonušas, Shagshag, Tony BOTALLA, venditdevs, Yolandavdvegt and Yuri Blanc!
 
Thank you again for helping improve the life of more than 270,000 online merchants with ideas, improvements and fixes!
 
Now go ahead and tell us what you think!

[Download PrestaShop 1.7.3.0 now!](https://download.prestashop.com/download/releases/prestashop_1.7.3.0.zip){: .btn .btn-lg .btn-success}
{: .text-center}
