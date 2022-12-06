---
layout: post
title:  "PrestaShop 1.7.3.0 is available!"
subtitle: "Innovation is coming, with PrestaTrust and much more"
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

After six months of blood, sweat, and tears (okay, we’re just kidding), here it is, the new minor version has come. We are aware that these six months of work have raised some very high expectations. You won’t be disappointed, because we have spent a lot of time improving and testing it for you!

![173 Available](/assets/images/2018/02/173_Release.jpg)

[Download PrestaShop 1.7.3.0 now!](https://download.prestashop.com/download/releases/prestashop_1.7.3.0.zip){: .btn .btn-lg .btn-success}
{: .text-center}

Innovation is a central feature of this release, with an exciting new project that places a new generation of security and technology at the center of PrestaShop: [**PrestaTrust**](https://www.prestashop.com/en/prestatrust), which will help in providing a more secure environment for module developers as well as merchants.

Another important feature is **RTL support**. PrestaShop is now friendly with languages written from right-to-left – which it is the case for a lot of shops! We are also moving forward with the Symfony migration with some exciting new features for module developers!

And we are only scratching the surface...


## What's new?
 
Here are the main features of this (long-awaited) new minor version of PrestaShop:
 
- [PrestaTrust](https://www.prestashop.com/en/prestatrust), of which we talked about in [this post](http://build.prestashop.com/news/everything-you-always-wanted-to-know-about-prestatrust). This new feature authenticates the code of PrestaTrust-enabled modules and safely keeps track of license information in the blockchain.

- Right-To-Left (RTL) language support. Not only the back office and the Classic theme are now fully RTL compatible, but we are also introducing RTL stylesheet generation for front office themes. This means that any front office theme can now be automatically converted to be RTL-compatible. This is extremely important for selling in countries who speak in RTL languages like Arabic, Hebrew or Persian.

- A new set of Demo products. A whole new set of demo products that give PrestaShop a modern face while being friendlier to people from more conservative cultures, and highlight lesser-known features like product customization.

- UI Kit (available in Symfony pages), which was presented a while back in [this post](http://build.prestashop.com/news/PrestaShop-UI-Kit). A new graphic identity for the core... and modules, too! The UI kit brings a coherent set of reusable components that work the same across the back office, as well as Bootstrap 4 and jQuery 3.

- Symfony migration, which we recently discussed in [this post](http://build.prestashop.com/news/make-back-office-modules-great-again). Exciting new things are coming to the core in 1.7.3! Three new pages have been migrated to Symfony (Modules catalog, Performance and System Information), modules can now access the Symfony service container (which allows them to declare, use and override services, templates, and more!) and the debug toolbar has been improved with a hooks section (which displays in-depth information about the page's hooks and the modules attached to them).
 
### Addons Connect + tips

In this new version, the Addons Connect module now installed by default. It is a very important tool because keeping you Addons account connected helps to keep all your shop's modules up-to-date. In addition, this module displays a weekly tip at the top left side of your back office dashboard. Your business is constantly evolving, and PrestaShop evolves alongside you!

![173 Tips & Updates](/assets/images/2018/02/173_Tips_Updates.png)


### Shipping delivery times
 
In order to be compliant with European laws, merchants now need to display the estimated delivery date of an item on the Product page. You can either configure a default value for all products your shop, or a separate value for each product. In addition, you can specify a different estimated delivery time when a product is in stock and when it's out-of-stock with allowed backorders, as well as a custom availability label.

 
### Low stock alerts
 
You can now make PrestaShop send you alerts when a product is low in stock. You can configure the low stock threshold as well as toggling the notification either globally in the Product Settings section or per product.

… which brings us to the next step! In the Stock Overview page, products with a quantity under the low stock level are now highlighted. A new quick filter has been added too, which allows you to quickly see products that low on stock by placing them at the top of the list.

![173 Low Stock Levels](/assets/images/2018/02/173_Low_Stock_Levels.png)


### Import / Export in the Stock Overview page and low stock alerts

Your shop, your data! Merchants are now able to import or export the information displayed in the Stock Overview page in a CSV file. Why? So that you can work on it with your computer, connect to your own stock management system... you name it! You just need to click on the blue cloud icons on the right-hand side of the screen and you'll be on your way to the import/export system.

![173 Stock Overview](/assets/images/2018/02/173_Stock_Import.png)

### Bulk edition in stocks
 
Another new feature in PrestaShop 1.7.3 is that product stock information can now be updated in bulk instead of one by one. And it is very easy, all you have to do is check (in the left column) all the products you want to edit, enter the quantity to add or subtract to the already available stock and confirm!


### Multiple features of the same type

Before, it was impossible for a product description to have more than one attribute of the same type (for example, multiple kinds of fabric like cotton, synthetic, etc.). This much-requested feature has now been added!


### Testing

A new suite of functional end-to-end tests is now included in the core, covering the most critical parts of the system.

### ...And also

- Store schedules are now localized
- Icelandic localization
- Installer in Japanese
- New hooks on the BO:
    - displayDashboardToolbarTopMenu
    - displayDashboardToolbarIcons
    - displayAdminCustomersAddressesItemAction
- Tools for building a release package of PrestaShop are now included in the source code
- Sample configuration file for Nginx server

...and many many bugfixes and performance improvements! [Check the full changelog here]( https://assets.prestashop2.com/en/system/files/ps_releases/changelog_1.7.3.0.txt).

## PrestaShop ❤️ community

A lot has been done to make this "minor" PrestaShop version a reality. Here's 1.7.3 in numbers:
* 1436 files changed
* 861 commits
* 203 pull requests
* 56 committers

PrestaShop 1.7.3 is above all community project. From the 56 committers that contributed to this release, 37 were community members – that's 2 out of 3 committers!

A huge "thank you!" to these 37 fine people: Adonis Karavokyros, Alexandr Simonchik, Alexandre Alouit, AliShareei, Antonio Intagliata, Aymeric Auberton, Christian Kubitza, Code Utopia, comxd, Cristiano Verardi, Daniel, Danoosh, dariusakafest, David, Dickriven Chellemboyee, FrancMunoz, Gabriel Arama, hadrich-hatem, iqit-commerce, Krystian Podemski, Mahdi Shad, Manfredi Petruso, Marcin Sągol, Marek Hanuš, MattLoyeD, maxime aknin, MDWeb, mehrshadz, Molka DJEMAL, nache, Presta Module, Šarūnas Jonušas, Shagshag, Tony BOTALLA, venditdevs, Yolandavdvegt and Yuri Blanc!
 
Thank you again for helping improve the life of more than 270,000 online merchants with ideas, improvements, and fixes!
 
Now go ahead and tell us what you think!

[Download PrestaShop 1.7.3.0 now!](https://download.prestashop.com/download/releases/prestashop_1.7.3.0.zip){: .btn .btn-lg .btn-success}
{: .text-center}
