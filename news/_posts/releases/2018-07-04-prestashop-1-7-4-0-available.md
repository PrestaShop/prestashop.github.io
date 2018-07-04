---
layout: post
title:  "PrestaShop 1.7.4.0 is available!"
subtitle: "New features for merchants and technical improvements for developers"
date:   2018-07-04 17:10:00
authors: [ AntoineThomas, PrestaShop, LouiseBonnard ]
icon: icon-checked
tags:
 - 1.7
 - 1.7.4.x
 - version
 - minor
 - releases
 - development
---


Dear community, after a little bit more than four months, the new minor version of PrestaShop is available: please welcome 1.7.4.0! 

![174 Available](/assets/images/2018/07/174-release.jpg)

[Download PrestaShop 1.7.4.0 now!](https://download.prestashop.com/download/releases/prestashop_1.7.4.0.zip){: .btn .btn-lg .btn-success}
{: .text-center}


## What’s new

Let’s have a look at the new features and improvements that will enhance the merchants’ experience, like UI and performance.

### Back Office menu

All pages are now accessible on mobile thanks to the new back office menu! It’s based on Bootstrap 4, and it’s scrollable.

![BO mobile](/assets/images/2018/07/bo-mobile-1-7-4.png)


### Theme customization

The Theme Customization features can be found in the Design category > Theme & Logo page. It allows any users to customize the homepage. And for more technical users, the "child theme" feature to customize a theme has been made easier to access: you can find it directly in "Advanced Customization" tab.

![Theme customization](/assets/images/2018/07/theme-custo.png)

A dedicated article will be published about it, but feel free to discover and play if you can’t wait more. :-)


### SEO improvements

HTML tags have been improved in the homepage, the product page and the category pages of the “Classic” theme. Better use of titles will help to optimize the SEO. If you are developing themes based on “Classic”, please consider to update them! 

Pages with multiple language versions include “hreflang” links in the “head” section.


### Refactored cart calculation

The cart calculation has been refactored and several automated tests have been implemented. Long story short: merchants and customers will love it to manage taxes, additional costs or discounts; as for developers, they will get new features.


### Languages

Farsi speakers are going to be happy: we finally added a font to display the specific alphabet of this language in the software, so that PrestaShop can be friendlier for Iran people. And the installation problems for Greek have been fixed.

### Performances

When a lot of categories are used, the performance in BO and FO has been greatly improved.


## The technical side 

Now, we will have a look at what has been done under the hood during the last months. 

### New hooks

Two hooks are now available for developers:

* displayDashboardToolbarTopMenu
* displayAdminEndContent


### Symfony

More pages have been migrated to Symfony:

* Advanced Parameters > Administration
* Advanced Parameters > Import
* Shop Parameters > General
* Shop Parameters > General > Maintenance
* Shop Parameters > Product Settings
* Shop Parameters > Customer Settings

Also, the Switch element (UI) has been introduced in Symfony pages.

Many developers, including from the community, are now focused on this migration. It has been announced during the PrestaShop Day that happened in Paris last month and it will be our main focus point for the next releases, 1.7.5 and 1.7.6.


### Tests

As explained at PrestaShop Day Paris, a lot of works is being done on tests:

* Unit tests
* New functional tests (end to end)

You can have a look at all the improvements done on the [tests on the GitHub repository](https://github.com/PrestaShop/PrestaShop/pulls?q=is%3Apr+label%3AE2E+milestone%3A1.7.4.0+is%3Aclosed).

### Dependencies and requirements

Many dependencies have been updated in 1.7.4:

* Symfony has been updated to version [3.4, the current LTS version](https://symfony.com/roadmap/3.4)
* The minimum required version of PHP is now 5.6 and PHP 7.2 is now supported
* The back office (BO) is now using [Bootstrap 4.0.0](https://github.com/twbs/bootstrap/releases/tag/v4.0.0)
* PrestaShop UI Kit, based on Bootstrap 4, is now in version 1.0; [repository](https://github.com/PrestaShop/prestashop-ui-kit) - [overview](https://cdn.rawgit.com/PrestaShop/prestashop-ui-kit/master/index.html)


### Changes

A lot has been done to make this “minor” PrestaShop version a reality. Here’s 1.7.4 in numbers:

* 3,977 files changed
* 1,421 commits merged
* [256 pull requests closed](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.4.0)
* [58 issues closed](http://forge.prestashop.com/browse/BOOM-5851?filter=12811)
* 81 people contributed!

You can check the [full changelog on GitHub](https://github.com/PrestaShop/PrestaShop/blob/1.7.4.0/docs/CHANGELOG.txt).


## PrestaShop ❤ Community

PrestaShop 1.7.4 is above all a community project: from the 81 committers who contributed to this release, **45 are new contributors** and around half were community members.

A huge “thank you!” to these 81 fine people: 123monsite-regis, Adam, Adonis Karavokyros, Alban, Alban L, Alexander Grosul, Alexandre Alouit, Antoine THOMAS, Atef Ben Ali, Aurélien Pelletier, Bastien Bieri, Chafik, Connie, Cristiano Verardi, Danoosh, dariusakafest, devyk, fatmaBouchekoua, fouratachour, Fourat ACHOUR, Francisco Jiménez Cabrera, Ginkosama, GoT, Guillaume Germain, GuillaumeKadolis, hadjedjvincent, hadrich-hatem, hhennes, Horia Rudan, jocelyn fournier, Jorge Vargas, khouloud.belguith, Kjeld Borch Egevang, Krystian Podemski, Lathanao, LittleBigDev, Louise Bonnard, Marc González Majoral, Marek Hanuš, Marion François, Mateusz Nastalski, Mathieu Ferment, Maxime Morel-Bailly, MDWeb, Mehdi, Mehdi Badrani, Mehrshad, Michael Käfer, Mickaël Andrieu, Nicklas, okom3pom, Pablo Borowicz, PhpMadman, Pierre Joube, Pierre RAMBAUD, PrestaMagician, rdy4ever, rGaillard, Robbie Thompson, Rokas, sandu, sandu velea, Sarah Lorenzini, Šarūnas Jonušas, sbordun, Sébastien Bareyre, Sébastien Rufer, Serhat Durum, Serhii Polishchuk, Stanislav Popov, stickyrst, Sullivan SENECHAL, Symeon, TechhDan, Thomas LEVIANDIER, Thomas N, Thomas Nabord, timactive, Vincent Van den Brink, Vitaly Kondratiev, Yannick Armand !

Thank you again for helping improve the life of more than 270,000 online merchants with ideas, improvements, and fixes!

[Download PrestaShop 1.7.4.0 now!](https://download.prestashop.com/download/releases/prestashop_1.7.4.0.zip){: .btn .btn-lg .btn-success}
{: .text-center}
