---
layout: post
title:  "PrestaShop 1.7.7.0 is available"
subtitle: "You waited for it, here it is!"
date:   2020-12-03 15:00:00
authors: [ PrestaShop ]
image: /assets/images/2020/12/build_and_mail_final.jpg
icon: icon-leaf
tags:
 - version
 - 1.7
 - 1.7.7.x
 - minor
 - releases
---

We are happy to announce PrestaShop 1.7.7.0 is officially available!

![1.7.7.0 is available!](/assets/images/2020/12/build_and_mail_final.jpg)

This release is our biggest yet. More than 1300 merged Pull Requests in 600 days, almost 120 contributors, two betas, one release candidate. Was it worth it? We absolutely think so and hope that you will enjoy using it. By the way, we know this release was expected in early 2020, there will be a build article explaining what happened this year.

## New in 1.7.7.0

### Productivity

The [**full redesign and the new features of order pages**](https://build.prestashop.com/news/the-new-order-pages-in-prestaShop-1-7-7/) help merchants to make a better use of their time and to stay focus on their online business. 

The redesign of the user interface allows merchants to find the right information quickly while the new features allow a better efficiency on daily tasks and avoid back and forth between pages. 

![order pages](/assets/images/2020/12/order.jpg)

### Growth and flexibility

PrestaShop is an international solution and we aim to provide global features for worldwide users. 

The [**international improvements**](https://build.prestashop.com/news/prestashop-keeps-growing-internationally/) remove barriers to go international and help merchants reach more customers.

[**The fuzzy search**](https://build.prestashop.com/news/introduction-to-the-fuzzy-search/) improve both the user experience and the conversion rate with a new search algorithm that takes misspellings or error inputs into account.

![fuzzy search](/assets/images/2020/12/fuzzy_search.jpg)

In order to allow merchants to have all the currencies they need to meet the expectations of every customer, they can now **add new official and non official currencies** (e.g. local or custom) to their store and customize their display per language as desired.

![currencies](/assets/images/2020/12/currencies.png)

### Robustness

We kept improving internal architecture and technology with the Symfony migration. 15 new pages have been migrated (including the order pages), completing almost 55% of the back office migration.

![migration](/assets/images/2020/12/migration.png)

More than 160 bugs have been fixed for the 1.7.7.0 (vs 110 for the 1.7.6.0), including [11 highly expected bug fixes](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+is%3Aclosed+label%3ATopwatchers+label%3Afixed+milestone%3A1.7.7.0), [5 front office notable fixes](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+label%3AFO+label%3Amust-have+label%3Afixed+milestone%3A1.7.7.0+-label%3Atopwatchers+-label%3Aregression), and [5 back office notable fixes](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+label%3ABO+label%3Amust-have+label%3Afixed+milestone%3A1.7.7.0+-label%3Atopwatchers+-label%3Aregression).

This new version brings more stability with php7.3 support !

## Download

You can download PrestaShop 1.7.7.0 here:

[Download PrestaShop 1.7.7.0 now!](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}
 
PrestaShop 1.7.7.0 is also available through the 1-Click Upgrade module. 


## Notable fixes since RC1

**Order back-office**
- [An error 500 is displayed when adding a product with a min quantity](https://github.com/PrestaShop/PrestaShop/issues/21525)
- [An exception is displayed in the console when adding an out of stock product](https://github.com/PrestaShop/PrestaShop/issues/21794)
- [An exception is displayed when canceling a product and if an invoice is generated](https://github.com/PrestaShop/PrestaShop/issues/21850)
- [An exception is displayed when ordering a product with a file customization’s name containing a space](https://github.com/PrestaShop/PrestaShop/issues/21815)
- [When all the products in an order are deleted, the status is changed to canceled.](https://github.com/PrestaShop/PrestaShop/issues/22010)
- [When deleting all products the invoice's total is wrong](https://github.com/PrestaShop/PrestaShop/issues/21991)
- [When we have a product added to the order as a gift (a voucher applied) and as a product ordered, the quantity added to the same product is wrong](https://github.com/PrestaShop/PrestaShop/issues/21531)
- [When product is added in an empty order, the tax block in the invoice is wrong: It only contains the Shipping tax and not the Product tax](https://github.com/PrestaShop/PrestaShop/issues/22008)
- [An error is displayed when decreasing the gifted product quantity "Could not find the product in cart, meaning Order and Cart are out of sync"](https://github.com/PrestaShop/PrestaShop/issues/22004)
- [When adding a product which has an ecotax to an old order, the base price is NOK](https://github.com/PrestaShop/PrestaShop/issues/22029)

**Back-office**
- [After logging in to the Addons marketplace, the list of recommended modules doesn't contain all items](https://github.com/PrestaShop/PrestaShop/issues/22125)

**Front-office**
- [Logo, favicon and store's icons are not displayed](https://github.com/PrestaShop/PrestaShop/issues/21979)
- [Add to cart Popup not displayed after an upgrade](https://github.com/PrestaShop/PrestaShop/issues/22173)

**Upgrade**
- [Error "Column count doesn't match value count" during the upgrade](https://github.com/PrestaShop/PrestaShop/issues/21949)
- [Problem with ALTER table during the upgrade](https://github.com/PrestaShop/PrestaShop/issues/21948)
- [Error when upgrading from 1.7.4.x and previous to 1.7.7.0](https://github.com/PrestaShop/PrestaShop/issues/22141)
- [After an upgrade the precision of each currency installed is set to 6](https://github.com/PrestaShop/PrestaShop/issues/22177)

## Changelog

24 pull requests have been merged since the RC1 and 22 issues have been fixed. Read the [Changelog](https://github.com/PrestaShop/PrestaShop/releases) for details. This brings us to more than 1300 merged pull requests for the 1.7.7.0 milestone, it is definitely our biggest yet.

If you are looking for more details about all changes and new features expected in 1.7.7, the [1.7.7 beta version release note](https://build.prestashop.com/news/prestashop-1-7-7-0-beta-release/) is the perfect article for you to read!

## Auto upgrade

**IMPORTANT NOTE** if you plan on upgrading your shop to 1.7.7 and you current version is **below 1.7.6** you need to use the latest version (4.11.0) of our [1-Click Upgrade module](https://github.com/PrestaShop/autoupgrade). Of course it's always recommended to use the latest version when upgrading but even more so in this case since a bug related to upgrading from these older versions has been fixed in the module.

## Known issues

The following known regressions will be fixed in upcoming patch versions.

**Order back-office**
- [An exception is displayed when changing the invoice address a  second time - Round mode = Round on each item](https://github.com/PrestaShop/PrestaShop/issues/21717)
- [When stock management is disabled, the available quantity in order detail is displayed](https://github.com/PrestaShop/PrestaShop/issues/21767)
- [While creating an order, the minimum quantity of a combination is not correct](https://github.com/PrestaShop/PrestaShop/issues/21873)
- [Special characters not correctly displayed in private note](https://github.com/PrestaShop/PrestaShop/issues/21829)
- [When updating the quantity of a product using the "up/down arrow" with consecutive hits on the same input, it's not acknowledged correctly](https://github.com/PrestaShop/PrestaShop/issues/21734)
- [An error is displayed when trying to remove a voucher with free gift](https://github.com/PrestaShop/PrestaShop/issues/21810)
- [The voucher line is not removed when the Order's total < Minimum amount for cart rule](https://github.com/PrestaShop/PrestaShop/issues/21812)
- [While creating an order, all languages are displayed in the drop-down instead of only languages associated to the shop selected](https://github.com/PrestaShop/PrestaShop/issues/21817)
- [When adding a product with an associated gift, the gifted product quantity is not updated](https://github.com/PrestaShop/PrestaShop/issues/21592)
- [The gifted product is not removed when removing a product ordered](https://github.com/PrestaShop/PrestaShop/issues/21500)
- [The Voucher "Free shipping " value is not updated when changing an address](https://github.com/PrestaShop/PrestaShop/issues/21549)
- [Vouchers block - Voucher line is not added when a cart rule "Discount for a country selection" is applied](https://github.com/PrestaShop/PrestaShop/issues/21548)
- [Product quantity no updated if a discount with free gift is applied](https://github.com/PrestaShop/PrestaShop/issues/21506)
- [Recalculate shipping costs option enabled - the Shipping price not instantly updated](https://github.com/PrestaShop/PrestaShop/issues/21267)
- [Payment block not refreshed after adding product](https://github.com/PrestaShop/PrestaShop/issues/21293)
- [Incorrect quantity added to product when it is added to the same order as a gift also](https://github.com/PrestaShop/PrestaShop/issues/21531)
- [Incorrect Total's product line when Round type = "Round on each item"](https://github.com/PrestaShop/PrestaShop/issues/21708)
- [When we try to return products in all shops context, an exception is displayed](https://github.com/PrestaShop/PrestaShop/issues/21990)
- [An alert "Error! There are not enough products in stock." is displayed when updating the product quantity in "all shops" context](https://github.com/PrestaShop/PrestaShop/issues/21987)
- [The characters limit is wrongly calculated when choosing a predefined message](https://github.com/PrestaShop/PrestaShop/issues/22086)
- [In the info block - The shipping is not refreshed after adding a product](https://github.com/PrestaShop/PrestaShop/issues/22071)
- [While creating an order, after adding a product, if you click quickly, the focus change between the "up" arrow and the "down" arrow](https://github.com/PrestaShop/PrestaShop/issues/22026)
- [With a different currency than the default one, if there is a  discount on a category for a customer group, when we update a product the price is wrong](https://github.com/PrestaShop/PrestaShop/issues/22096)
- [Details modal for carts - the Refresh button is not working](https://github.com/PrestaShop/PrestaShop/issues/22105)
- [An unexpected error occurred when adding to the cart a product with customization in a multistore context](https://github.com/PrestaShop/PrestaShop/issues/22110)
- [The shipping block is not instantly updated when updating the Address](https://github.com/PrestaShop/PrestaShop/issues/22124)

**Front-office**
- [Pack of products - Incorrect image displayed for products with combinations](https://github.com/PrestaShop/PrestaShop/issues/21875)
- [displayAfterProductThumbs hook content is duplicated after adding a product in the cart](https://github.com/PrestaShop/PrestaShop/issues/22113)

**Back-office**
- [Adding incorrect language causes exception in Edit Currency page](https://github.com/PrestaShop/PrestaShop/issues/21891)
- [Bad URL for module catalog page after disabling MBO](https://github.com/PrestaShop/PrestaShop/issues/21588)


## Acknowledgments

PrestaShop is above all a community project: from the 119 committers who contributed to this release, 57 are new contributors. The vast majority of PrestaShop contributors are not directly affiliated with the PrestaShop company.

@formarion
All contributors:
123monsite-regis, 202 ecommerce, Abdullah, Adib Aroui, Aitbella Mohamed, Alexis Haumaitre, Amazzing, andromaque, Antoine Damiron, Antoine Thomas, Ashish Sharawat, Aude, Aurélien Pelletier, Benjamin, Benjamin Dussouillez, Boubker Bribri, Christian Kubitza, Christophe Zarebski, cirykpopeye, Clotaire Renaud, Codencode, ComonSoft, Damian Dominella, Daniel Hlavacek, Daniel Ziegenberg, Darius Aleksiunas, David Gonzalez, Dheeraj Sharma, Dinesh Badrukhiya, Dmitry, Florentin Garnier, Florian Bergeron, Florian Le Gars, Florian Lemaitre, Franck Lefèvre, François Peyret, Gavin Kalikapersaud, hacchus, Harlock, Horia Rudan, Ibrahima Sow, idnovate, JBWModules, Jean-François Viguier, Jevgenij Visockij, Jocelyn Fournier, Jonas Erixon, Jonathan François, Jonathan Lelievre, Jonathan Vollebregt, Julian Eberius, Julien Gissinger, Julius Žukauskas, Justinas Urbanavicius, Karel Faille, Khouloud Belguith, Klemart3D, Krystian Podemski, ks129, Laurynas Sedys, Louise Bonnard, Luc Vandesype, Manfredi Petruso, Marek Hanuš, Marion François, Marvin Sauraye, Mateusz Furga, Mathias Reker, Mathieu Ferment, Matthias Raigne, Matthieu Rolland, Maxim Krizhanovsky, Mehdi Badrani, Michael Voříšek, Mickaël Andrieu, mushroot, Nesrine Abdmouleh, okom3pom, Pablo Borowicz, Paulo Baptista, Peeyush Agrawal, Pierre Rambaud, pojebunny, Presta Module, Prestashark.eu, Prestaworks, PrestaworksNiklas, PululuK, Puma, Raimondas Sapola, Raúl Jiménez, Rinku Kazeno, Rodrigo Laurindo, Rokas Zygmantas, Rolige eCommerce Solutions, Roman Ondráček, seleda, Sergio Quiñonez, Simon Garny, Simone, Stephane Decisy, Sylvestre Nicky, Sébastien Bareyre, Tadas Davidsonas, Tanguy Salmon, Thomas Baccelli, Thomas L'huillier, Thomas Leviandier, Thomas Nabord, Tomas Ilginis, Tuni-Soft, Valentin Szczupak, venditdevs, Vincent Hadjedj, Vladimir, Web Premiere, webmak, Yannick Armand, Šarūnas Jonušas

New contributors:
Abdullah	39679397+OneDotIT@users.noreply.github.com	users.noreply.github.com
Adib Aroui	aroui.adib@gmail.com	gmail.com
Aitbella Mohamed	modfayz@gmail.com	gmail.com
Alexis Haumaitre	alexis.haumaitre@prestashop.com	prestashop.com
Antoine Damiron	damironantoine@gmail.com	gmail.com
Ashish Sharawat	ashishsharawat8@gmail.com	gmail.com
Aude	aude@bm-services.com	bm-services.com
Benjamin	blopes@webxy.com	webxy.com
Benjamin Dussouillez	bdussouillez@202-ecommerce.com	202-ecommerce.com
Christophe Zarebski	kzarebski@digitalgarden.fr	digitalgarden.fr
cirykpopeye	ciryk@hotmail.be	hotmail.be
Clotaire Renaud	52157233+clotaire202@users.noreply.github.com	users.noreply.github.com
Codencode	info@codencode.it	codencode.it
ComonSoft	13507563+ComonSoft@users.noreply.github.com	users.noreply.github.com
Damian Dominella	damiandominella@gmail.com	gmail.com
Daniel Hlavacek	daniel.hlavacek@hotmail.cz	hotmail.cz
Daniel Ziegenberg	daniel@ziegenberg.at	ziegenberg.at
Darius Aleksiunas	darius.aleksiunas@invertus.eu	invertus.eu
David Gonzalez	davidgg666@gmail.com	gmail.com
Dmitry	dariusakafest@mail.ru	mail.ru
Florentin Garnier	florentin@digital404.fr	digital404.fr
Florian Bergeron	florian.bergeron@prestashop.com	prestashop.com
Florian Le Gars	flegars@202-ecommerce.com	202-ecommerce.com
François Peyret	fpeyret@axome.com	axome.com
Gavin Kalikapersaud	gkalikapersaud@sonnysdirect.com	sonnysdirect.com
hacchus	hacchus@users.noreply.github.com	users.noreply.github.com
Harlock	fillantoxa@gmail.com	gmail.com
JBWModules	47666330+JBWModules@users.noreply.github.com	users.noreply.github.com
Jonas Erixon	jonas.erixon@prestaworks.se	prestaworks.se
Jonathan François	jonathan.francois@prestashop.com	prestashop.com
Jonathan Vollebregt	jnvsor@gmail.com	gmail.com
Julian Eberius	julian@eberius-mail.de	eberius-mail.de
Julius Žukauskas	julius.zukauskas@invertus.eu	invertus.eu
Justinas Urbanavicius	justinas.urbanavicius@internations.org	internations.org
ks129	45097959+ks129@users.noreply.github.com	users.noreply.github.com
Laurynas Sedys	laurynas.sedys@invertus.eu	invertus.eu
Mateusz Furga	matfurga@gmail.com	gmail.com
mushroot	3608366+mushroot@users.noreply.github.com	users.noreply.github.com
Paulo Baptista	paulofbaptista@gmail.com	gmail.com
pojebunny	smithinger44@gmail.com	gmail.com
Prestaworks	daniel@prestaworks.se	prestaworks.se
PrestaworksNiklas	32831052+PrestaworksNiklas@users.noreply.github.com	users.noreply.github.com
Puma	puma_work@hotmail.com	hotmail.com
Raimondas Sapola	raimondas.sapola@invertus.eu	invertus.eu
Raúl Jiménez	raul@soy.es	soy.es
Rinku Kazeno	development@kazeno.co	kazeno.co
Rodrigo Laurindo	rblaurin@gmail.com	gmail.com
Rolige eCommerce Solutions	info@rolige.com	rolige.com
Roman Ondráček	ondracek.roman@centrum.cz	centrum.cz
Sergio Quiñonez	sergio_quinonez@rolige.com	rolige.com
Stephane Decisy	stephane.decisy@prestashop.com	prestashop.com
Sylvestre Nicky	sylvestrenicky@gmail.com	gmail.com
Tadas Davidsonas	tadas.davidsonas@invertus.eu	invertus.eu
Tanguy Salmon	tanguy.salmon@gmail.com	gmail.com
Thomas L'huillier	lhuillier.tom@gmail.com	gmail.com
Vladimir	levyn@mail.ru	mail.ru
webmak	webmak10@gmail.com	gmail.com

A huge thanks to everyone involved in this version!
Thank you again for helping improve the lives of more than 300,000 online merchants with ideas, improvements, and fixes!
