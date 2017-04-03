---
layout: post
title:  "PrestaShop 1.7.1.0 is available!"
subtitle: "Performance, stabilization, features, modules... Read it all here!"
date:   2017-04-03 09:10:11
author: [xavierborderie, alexeven]
icon: icon-checked
tags:
 - 1.7
 - 1.7.1.x
 - version
 - minor
 - releases
 - development
---

Many of you have been waiting for it: PrestaShop 1.7.1.0 is now available, and it is all you've ever wanted v1.7 to be!

The feedback we received from the [beta version of v1.7.1.0](http://build.prestashop.com/news/prestashop-1-7-1-0-beta-1/) was very conclusive, and we are happy to release this new minor version of PrestaShop (in the [SemVer](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) sense of the word) this April -- a few days later than [we initially expected](http://build.prestashop.com/news/announcing-our-2017-release-schedule/).

![What’s in the box?](/assets/images/2017/03/1710-header.jpg)

Let’s dive in, shall we?


### 1.7.1.0: the main topics

PrestaShop 1.7.1.0 was focused on 4 areas:

* **New features**: 
  * Several native modules are back: cross-selling, specials/discounts, best-sellers, etc.
  * A more responsive back office, with a unified mobile design.
  * "Upgrade all modules" button.
  * More sensible shortcuts on the Product page.
  * Updated 1-Click Upgrade module ([still in beta](http://build.prestashop.com/news/updated-1-click-upgrade-module/)).
  * ...and finally, a PayPal module for PS 1.7.
* **Improvements**: Design updates, details and good ideas were sprinkled all over the codebase :)
* **Stabilization**: While PrestaShop 1.7 was released after 6 months of alpha/beta/RC versions, many waited for the release 1.7.0.0 to really start kicking the tires -- or even v1.7.0.1. We improved our daily process in order to follow up with the new feedback, and 1.7.1.0 was built as an answer to community expectations. Thank you for challenging us to do our best, always!
* **Performance**: Last but not least, several bottlenecks were solved, making this version smoother to use for both merchants and customers.


### The details

#### Front office

The Classic theme has ditched the Open Sans font, and replaced it with [Noto Sans](https://www.google.com/get/noto/). It supports many more languages out-of-the-box (583!).

More native module have been adapted to 1.7:

* ps_bestsellers (formerly blockbestsellers)
* ps_brandlist (formerly blockmanufacturer)
* ps_crossselling (formerly crossselling)
* ps_emailalert (formerly mailalert)
* ps_newproducts (formerly blocknewproducts)
* ps_productinfo (formerly producttooltip)
* ps_rssfeed (formerly blockrss)
* ps_specials (formerly blockspecials)
* ps_viewedproduct (formerly blockviewed)

And also:

* Theme export now includes translations too.
* Many more Smarty blocks added to Classic and Starter themes.
* New generic method to load third-party libraries.
* Emails are now compatible with the parent/child feature.


#### Back office

PrestaShop's back office saw improvements in several parts:

* For mobile navigation, we improved the responsiveness and now provide a unified design.

![Mobile consistency](/assets/images/2017/03/1710-responsive.png)

* The Help section now correctly points to the 1.7 documentation (instead of the 1.6 one).
* For CDN users, 1.7.1.0 now has 3 Media Server fields you can use.

![Now with 3 media server fields!](/assets/images/2017/03/1710-mediaservers.png)


#### Product page

We added a new dedicated section for modules in the Product page. Developers can use it by hooking their product-related modules.

Also, 1.7.1.0 provides the following changes:

* A new category redirection -- it is no longer product-only!

![Redirection improves](/assets/images/2017/03/1710-redirection.png)

* Updated shortcuts: they now use Alt+Shift+<letter> instead of Ctrl+<letter>. Sorry for the override in 1.7.0.0, Ctrl-V fans!

![Much better this way](/assets/images/2017/03/1710-shortcuts.png)

* New dedicated section for modules in the product page, where you can hook your modules related to the product page.

![Add a Product module from the Product page](/assets/images/2017/03/1710-modules-tab.png)


* Products are now displayed in descending order by default (from the most recent to oldest).


#### Modules page

A couple of new features for the Modules page in the back office:

* New "Upgrade all" button -- just as it was in 1.6.

![Upgrade all the things!](/assets/images/2017/03/1710-upgrade-all.png)

* Tabs from modules are now installed automatically.
* New notification counter.

![Be notified](/assets/images/2017/03/1710-notificationcounter.png)

Also, developers will be happy to learn that [we added many new hooks](http://build.prestashop.com/news/new-updated-hooks-1-7-1-0/)!


#### Performance

We made a global effort on performance, and there are two context in particular which we improved:

* Database requests.
* Windows-based servers.

Let us know the difference!


#### Translations

A lot of improvement was brought to PrestaShop translation system:

* Translation files are updated daily, to make sure merchants benefit from the latest translations.
* Installation strings are now stored in XML files generated from Crowdin. Translation of the most important strings no longer happen in GitHub!
* Country names are now automatically translated in any language.
* The Translation page in the back office has seen a design update to improve integration and navigation.

Furthermore, for those who knew about the TranslaTools module in 1.6, it is now back in 1.7, under the name “Live translation”. With it, you can contribute to the PrestaShop translation project right from your PrestaShop installation. Join us!


#### 1-Click Upgrade

Everything about the updated 1-Click Upgrade module is in [a recent Build article](http://build.prestashop.com/news/updated-1-click-upgrade-module/), but let's just say this:

* You can now upgrade from 1.6 to 1.7.1.0.
* It will import all your data: product info, images, attached files, etc.
* It will warn you about what it means to upgrade to a major version.

There are a few things that only a human (you!) can do:

* Convert your 1.6 theme for use in 1.7. Your store will switch to Classic, the 1.7 default theme.
* Check your 1.6 modules for 1.7 compatibility. You will have to do this yourself.
* Update your customization (translation, emails, and menu). It is up to you to update them for 1.7.

Also, remember that 1.7 does not currently have the Stock Management feature. It is planned for 1.7.2.0 (which we expect to release in June).

Note that the module is still in Beta phase. It should be fully stabilized in the coming days.


#### PayPal

We know many of you waited for the PayPal module in order to get started with PrestaShop 1.7. We are therefore happy to announce the availability of this key module with the release date of version 1.7.1.0, with a brand new design!

Now you can benefit from PayPal’s complete payments platform and grow your business online, on mobile and internationally. 

This version has a few new features, besides the design and being compatible with PS 17:

* Customers can pay with a selection of local and international debit and credit cards and with their PayPal Wallet.
* PayPal customers can buy from you quickly if they use One Touch™.
* You can manage your payment easily thanks to the integration of PayPal transactions in the  PrestaShop back office: capture, refund transactions, etc.
 * The module is already translated in 5 languages (EN, FR, ES, IT, DE).
 
And there is more to come: improvement of the onboarding experience, PayPal Express Checkout Shortcut, new products, more languages…


### A community project

This new version of PrestaShop would not be the same without the support and contribution from community members. Version 1.7.1.0 has seen the following contributions:

* 53 pull requests from the community (485 PRs overall).
* 123 commits from the community (1412 commits overall).
* 69 contributors.
* 67 translators, with 13 languages already at 100% (you too can help!)

Thanks to 123monsite-regis, Alexander Galaydyuk, Alexander Simonchik, Alexandre Alouit, Amazzing, Axome, Code Utopia, David Gasperoni, David-Julian BUCH, Davide, Debusschere Alexandre, Dheeraj Sharma, Emiliano 'AlberT' Gabrielli, Eric Rouvier, Etienne Samson, Florian Lemaitre, Flowster, Gabriel Arama, Gerdus van Zyl, Guillaume P, Gustavo, Gytis Škėma, Jerome Herry, Karel Faille, Krystian Podemski, M03G, Madef, Mark Wienk, MarkC, Maxime - Vaisonet, Michael Dekker, Michael Salihi, Nicolas Lœuillet, Peter Schaeffer, PhpMadman, Pierre Avizou, Pliciweb - Nicolas, Presta Module, PrestaEdit, Renaud Sanchez, Ricki Hirner, Roman Gusev, Roy, Sullivan SENECHAL, Ted Sanders, Tomáš Líška, Tuni-Soft, Turtle, Vincent HADJEDJ, bbsimon, cedricfontaine, dariusakafest, de saint leger, eleazar, florervd, gskema, idnovate, kermes, lozal2244, martinfojtik, mauglee, pilothuy, psandmore, seynaeve, themella, unlocomqx, webmake, Ángel Guzmán Maeso, and Šarūnas Jonušas for your contribution to the 1.7.1.0 codebase!


### What’s next?

As written in our [2017 release schedule](http://build.prestashop.com/news/announcing-our-2017-release-schedule/), we plan on having monthly patch releases for the latest minor version (so you can expect at least 1.7.1.1 and 1.7.1.2 in the two coming months), and to have the next minor version (1.7.2.0) in June!

And you can be a part of it! PrestaShop is a living project, and you can contribute in many ways:

* Give us feedback on this new minor version
* [Report issues](http://forge.prestashop.com)
* [Contribute on GitHub](https://github.com/PrestaShop/PrestaShop/tree/1.7.1.x)
* [Participate in user research](http://www.prestashop.com/club/): interviews, surveys, prototype testing

See you there!
