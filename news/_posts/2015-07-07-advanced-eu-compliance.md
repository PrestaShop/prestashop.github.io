---
layout: post
title:  "Presenting the Advanced EU Compliance module"
subtitle: "Helping merchants make their shops more compliant with the recent EU regulations."
date:   2015-07-07 14:00:00
authors:  [ tchauviere ]
icon: icon-coffee-hot
tags:
 - 1.6.1.x
 - legal
 - eu
 - europe
 - module
 - feature
---

As good news never come alone, let us introduce you to the new module that is included natively in PrestaShop from 1.6.1.0 version: **[Advanced EU Compliance](https://github.com/PrestaShop/advancedeucompliance)**.

## Why did we create this module?

E-commerce evolves at a very fast pace, and the more it evolves the more new legislations are appearing to frame it. These legislations can - over time - become a real headache for e-shop owners, who have to adapt their website themselves, or to hire someone to do it for them.

One of the main goals we have at PrestaShop is to make e-commerce accessible to all, and we have decided to integrate some new great features to easily help merchants to get as compliant as possible to their own country's legislations.


## How did we build it?

Since legislations can be very different from one country to another, we had to decide from which perspective we had to start making this module. And we noticed that a German company called [Silbersaiten](http://www.silbersaiten.de) was producing a very good free module to help Germans and Austrians shops to get compliant with their legislations. You can find their GitHub repositories page [here](https://github.com/EU-Legal), which contains all their modules.

The only issue with this module was that it is using a lot of overrides, which could collide with other modules.

That is why started to work with them in order to implement a native version of their module in PrestaShop, aimed (at first) at the German and Austrian merchants, just like they did. We can't thank them enough for their contribution and dedication to the PrestaShop community!

**"Wait! What about me? I'm a not German nor Austrian!"**

Don't panic ;) Some options already included in this module will also be useful to merchants outside of Germany or Austria. We aim to make as much "compliancy helping" as possible through this module in the long haul. This is why we built these new features based on the latest European legislation.


## Where can I find it?

The module is available natively, in the archive for PrestaShop 1.6.1.0. You just have to go to the Modules page, and activate it.

## What are the available options?

Most of these new options are meant to provide more transparency to the final customers, with:

* More detailed price labels ("From" price, tax, shipping fees and delays, product weight, etc.)
* Advanced checkout page
* Legal content attachment for emails

As usual, [the documentation page details all these options](http://doc.prestashop.com/display/PS16/Administration+modules#Administrationmodules-AdvancedEUCompliance), one by one.


## Is it feature-complete?

The module does a lot of things, but there are still a couple of "nice to have" features that we want to implement. Also, e-commerce regulations are being voted all the time, so this module will always need to be updated. We'll do our best to keep up with each new law!


## Why is it not a default page in the PrestaShop back office?

There are two reasons why all stores do not have this module by default:

* Being about EU Laws compliancy, we couldn't just force non-EU stores to have yet another page of options to check/uncheck. It might eventually make its way in the back office if it proves useful to everyone, but for now it shall remain a module.
* The module still has some options to come. By building this feature as a module, separate from the PrestaShop Core codebase, we can improve it without being tied to PrestaShop's release cycles.


## Some technical details

- This module is built on top of the forthcoming [new PrestaShop architecture](http://build.prestashop.com/news/new-architecture-1-6-1-0/), of which developers can see a first version in PrestaShop 1.6.1.0. This means that **it will not work with any release lower than 1.6.1.0**.

- Because we have introduced in the default-bootstrap theme a few template files required by the new options, **your custom themes may not work with some of the module's options**. Here's the list of these new template files, which you should take into account:

	*  order-address-advanced.tpl
	*  order-carrier-advanced.tpl
	*  order-carrier-opc-advanced.tpl
	*  order-opc-advanced.tpl
	*  order-opc-new-account-advanced.tpl
	*  order-payment-advanced.tpl
	*  shopping-cart-advanced.tpl

- This module also introduces some new hooks that can be reused outside of the AdvancedEUCompliance context, such as:

	* `overrideTOSDisplay`: Enables you to change the content of the Terms and Conditions box.
	* `actionEmailAdd(Before|After)Content`: Enables you to insert some extra content to emails.
	* `display(Before|After)ShoppingCartBlock`: Enables you to add extra content before/after the shopping cart (in the order process).
	* `displayCartTotalPriceLabel`: Enables you to add extra content in the Cart on each product line.
	* `advancedPaymentOptions`: This is a proxy for payment modules. It makes these modules work through a unique and consistent process.


### Special thanks

- We would like to thank everybody who worked actively to make this module, and contributed through the GitHub repo:

	* [panploenes](https://github.com/panploenes)
	* [alexsimple](https://github.com/alexsimple)
	* [jBangiev](https://github.com/jBangiev)
	* [Nobodaddy](https://github.com/Nobodaddy)

Thank you guys!

We hope you will like this module and that it will help you to make better e-commerce! As usual, do not hesitate to report any issue on the [Forge](https://forge.prestashop.com), or to make some pull requests on the [module's repository](https://github.com/PrestaShop/advancedeucompliance).
