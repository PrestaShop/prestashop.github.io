---
layout: post
title: PrestaShop 1.7.8.0 is available
subtitle: You waited for it, here it is!
date:  2021-10-05
authors: [PrestaShop]
image: /assets/images/2021/10/1780_banner_1200_628.jpg
icon: icon-leaf
tags:
 - version
 - 1.7
 - 1.7.8.x
 - minor
 - releases
---

We are happy to announce PrestaShop 1.7.8.0 is officially available!

![1.7.8.0 is available!](/assets/images/2021/10/1780_banner_1200_628.jpg)

Each version of PrestaShop is getting bigger and bigger, with more and more regular contributors. We are very proud of having such a strong community working with us on a daily basis.

This new version brings [many features](https://build.prestashop.com/news/prestashop-1-7-8-0-beta-release/) that should please both merchants and developers. 

## New in 1.7.8.0

### Support for PHP 7.4

PrestaShop 1.7.8 introduces compatibility with PHP 7.4, which allows you to benefit from bug fixes and security patches from PHP until December 2023. 

Please be aware that PHP versions prior to 7.3 have reached end of life, and PHP 7.3 will only receive security fixes for one additional month, so we encourage you to update as soon as possible to stay safe. Find more information about PHP support [here](https://www.php.net/supported-versions.php) and about PrestaShop compatibility [here](https://devdocs.prestashop.com/1.7/basics/installation/system-requirements/).

## New translations features

<div style="display: flex; align-items: center; flex-wrap: wrap;">
  <div class="col-md-4" style="">
    <img src="/assets/images/2021/10/illustration_translation.png" alt="Translation illustration">
  </div>
  <div class="col-md-8">
    - It is now possible to export back-office, front-office, email, themes, and module translations.<br>
    - Modules using <a class="vglnk" href="https://devdocs.prestashop.com/1.7/modules/creation/module-translation/new-system/" rel="nofollow">the new translation system</a> introduced in 1.7.6 can now distribute translations for their modules using the XLIFF format.<br>
  </div>
</div>

###  New multistore header
 
<div style="display: flex; align-items: center; flex-wrap: wrap;">
  <div class="col-md-4" style="">
    <img src="/assets/images/2021/10/illustration_multistore.png" alt="Multistore illustration">
  </div>
  <div class="col-md-8">
You can search shop and customize the multistore header with a specific color for each shop or group of shop. The new header offers a better multistore user experience for the merchants.<br>
<a class="vglnk" href="https://build.prestashop.com/news/multistore-news-in-1.7.8/" rel="nofollow">Here to see the detail of the feature</a> 
  </div>
</div>

### Native Lazy Loading for images on Classic theme

<div style="display: flex; align-items: center; flex-wrap: wrap;">
  <div class="col-md-4" style="">
    <img src="/assets/images/2021/10/illustration_lazy_loading.png" alt="Lazy loading illustration">
  </div>
  <div class="col-md-8">
Lazy loading is a technique that defers the loading of non-critical resources until the page load. We recommend all theme developers to use this technology to enhance their themes and to improve the merchant’s store performances.<br>
  </div>
</div>

### UI Improvements

<div style="display: flex; align-items: center; flex-wrap: wrap;">
  <div class="col-md-4" style="">
    <img src="/assets/images/2021/10/illustration_ui_kit.png" alt="Ui Kit illustration">
  </div>
  <div class="col-md-8">
PrestaShop back office UI Kit has been improved to have a solid Design System with adjustment of alert colors, font size, buttons contrasts, and an enhancement of the responsiveness.<br>
  </div>
</div>

### And many more features and improvements

If you are looking for more details about all changes and new features introduced in 1.7.8, the [1.7.8 beta version release note](https://build.prestashop.com/news/prestashop-1-7-8-0-beta-release/) is the perfect article for you to read!

### Notable fixes since RC1
The Release Candiate allowed a community member to detect a bug when installing a shop on the CLI.

## Changelog

1 492 pull requests have been merged since the beginning of the version development. Read the [Changelog](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.8.0) for details. 

## Download

You can download PrestaShop 1.7.8.0 here:

[Download PrestaShop 1.7.8.0 now!](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}
 
PrestaShop 1.7.8.0 is also available through the 1-Click Upgrade module. 

## Upgrade 
Of course, we always recommended using the latest available version of the [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade) when upgrading. However, if you are upgrading your shop to 1.7.8 from a version prior to **1.7.6**, make sure the module is updated to version 4.12.0 or later.

## Known issues

All the major bugs have been fixed, and [the remaining minor ones](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+milestone%3A1.7.8.1+is%3Aopen) will be fixed in the upcoming 1.7.8.1 patch release.

## Acknowledgments

PrestaShop is above all a community project: from the 162 committers who contributed to this release, the vast majority are not directly affiliated with the PrestaShop company. Also, 88 people contributed for their first time to PrestaShop in this version!

Here are all the people who contributed to this release:
23b, Adib Aroui, Agostino Fiscale, Alexis Haumaitre, Amin-Hosseini, Amit Kumar Tiwari, Antoine Thomas, Arman Hosseini, Aurone, Awit Kuta Rahil, Berto Ferrero, BluTiGeS, Boubker Bribri, Camille Lafitte, Chris, Clotaire Renaud, Constantin Boulanger, Dakror, Daniel Díaz, Daniel Hlavacek, Daniel Ziegenberg, Daniele Rosario, Darius Aleksiunas, Dariusz Tryba, David D., David G. Casini, David Gasperoni, David Gonzalez, davidglezz, Dmitry, doeselschnecke, DRC, Edouard Gaulué, Eric Rouvier, Esteban Martini, Fabien Lamaison, Fabio Vannini, fdonnet, Florian Le Gars, Franck Lefèvre, gennaris, George Filippakis, Gerdus van Zyl, Guillaume Lafarge, Guisardo, Hamza Elghanoui, Hk-tang, Hugo Herreros, Ibrahima Sow, idnovate, Igor Stępień, Irina Balaban, Jan Sýkora, Jaroslav Kozisek, Jean Traullé, Jean-François Viguier, Jerome, Jevgenij Visockij, Jimmy Dupré, Jonas Burneika, Jonathan Danse, Jonathan François, Jonathan Lelievre, jordiweblidera, Jory Hogeveen, Joshua Bemenderfer, Joshua Hargreaves, Julien Dombret, Julius Žukauskas, June Byun, juraj1000, justeen35, Karlis S, Klemart3D, Krystian Cieślik, Krystian Podemski, Krzysztof Rosiński, ks129, ksaandev, Lorenz Meyer, Loris Roncali, Louis AUTHIE, Louise Bonnard, Loïc Sapone, Magicalname, mahdi, Maksim T, Manuel Jose Pulgar Anguita, Marcin Kurek, Marion François, Mark Leonard, Mathieu Ferment, Matthias Raigne, Matthieu Rolland, Matěj Kmínek, Maxim Krizhanovsky, Michael Voříšek, Mickael Desgranges, Mickaël Andrieu, Mickaël Fernandez, Mohamed Ali Rajab, mrAKAR, Natalia Prokopenko, Nesrine Abdmouleh, Nicolás Giacconi, okom3pom, Olivier Bonvalet, Olivier Calvo García, Olivier Le Corre, Pablo Borowicz, Patrick Peters, Paul Bernard, Peeyush Agrawal, Petrov Sergey, Pierre Rambaud, Presta Module, Prestaworks, PululuK, Quentin Delecroix, Quentin Fahrner, Rafał Miłecki, Rajat Jain, Raúl Rubio, Ricardo Gonzalez Garza, Robert Blasche, Rolige eCommerce Solutions, Romain 'Maz' BILLOIR, Romain Soulard, Salar Nazar, Sam, Sergio Quiñonez, Simon, Simon Garny, spetr, Stijn Houben, Stijn Stroeve, Stijn Vergote, Stéphane Decisy, Sylvain WITMEYER, Sébastien Alfaiate, Sébastien Monterisisi, Tadas Davidsonas, Tanguy JACQUET, Taoufiq Ait Ali, Tatu Wikman, theodiablo, Thijs Simonis, Thomas Baccelli, Thomas Nabord, timactive, Tuni-Soft, Vahid Abdi, Valentin Szczupak, Viktor Rak, Vincent Hadjedj, Vincent Pichon, Vladimir, Web Premiere, Xesau, Óscar García

A huge thanks to everyone involved in this version!
Thank you again for helping improve the lives of more than 300,000 online merchants with ideas, improvements, and fixes!

