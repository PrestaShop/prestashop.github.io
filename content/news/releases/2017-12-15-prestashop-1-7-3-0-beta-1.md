---
layout: post
title:  "PrestaShop 1.7.3.0 beta 1 is out!"
subtitle: "Test-drive before we release it"
date:   2017-12-15 09:10:11
authors: [ LouiseBonnard ]
icon: icon-gift
tags:
- 1.7
- 1.7.3.x
- version
- beta
- releases
- development
---

The first beta version for PrestaShop 1.7.3.0 is now ready for you to test and give feedback about!

We said it earlier, many times. Now it is the right time to announce proudly that we are close to releasing 1.7.3.0. Features and improvements have found their way to the 1.7 codebase, we are thrilled to let you have a look at it and play with it before everyone else!

However, note that it is a beta version, not a release candidate. Despite all the efforts we’ve been putting into this version these last months, it is not fully ready to be released. **Mostly on issues related to the RTL, hence the fact it is not a release candidate. So don't panic if the RTL feature does not work properly. We are still debugging, improving, stabilizing it.** And 4 tickets remain on the Forge :

[BOOM-4110](http://forge.prestashop.com/browse/BOOM-4110): Visual regressions on catalogue module page<br>[BOOM-4319](http://forge.prestashop.com/browse/BOOM-4319): RTL regressions<br>[BOOM-4480](http://forge.prestashop.com/browse/BOOM-4480): 1click upgrade from 1724 to 1730<br>[BOOM-4448](http://forge.prestashop.com/browse/BOOM-4448): BO - Page figée à la désinstallation d'un module

While we are working hard on it, we can’t wait to receive your feedback about the beta version! As usual, this period of testing and fixing is crucial, and it always goes with the help of any merchant, service provider, module developer or theme designer who can test it and let us know about their experience. An effective testing of the beta will indeed lead towards a proper release candidate.

[Test PrestaShop 1.7.3.0 beta 1 now!](https://www.prestashop.com/en/release-notes-1-7-3-0-beta){: .btn .btn-lg .btn-success}
{: .text-center}

This beta release is a great opportunity for you to start working with it before we release a stable version. Go download and install this Beta version as a test store, either on your machine or your web hosting, then play with it – and [give us your feedback](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!


## A great thank you

First of all, it is important for us to thank you as much as possible for the contribution the community has done so far. As an open source software, we are always pleased to include in this project everyone who feels like participating, giving feedback and trying to make PrestaShop goes smartly further. Altogether.

In this case, about 190 PRs have been merged. Huge, right ? And all this with the impressive number of 52 contributors, 17 internal and 35 external. So let us give a warn and big thank you to :

Adonis Karavokyros, Alexandr Simonchik, AliShareei, Antonio Intagliata, Aymeric Auberton, Christian Kubitza, Code Utopia, comxd, Cristiano Verardi, Daniel, Danoosh, dariusakafest, David, Dickriven Chellemboyee, FrancMunoz, Gabriel Arama, iqit-commerce, Krystian Podemski, Mahdi Shad, Manfredi Petruso, Marcin Sągol, Marek Hanuš, MattLoyeD, maxime aknin, MDWeb, mehrshadz, Molka Djemal, nache, Presta Module, Shagshag, Tony Botalla, venditdevs, Yolandavdvegt, Yuri Blanc, Šarūnas Jonušas


## What you need to know about PrestaShop 1.7.3.0

Of course, it includes all the fixes that were part of the 4 patch versions since the release of the 1.7.2.0 in July 2017. It brings the following main features:

- [PrestaTrust](http://build.prestashop.com/news/everything-you-always-wanted-to-know-about-prestatrust)
- Shipping delivery times
- Low stock alerts
- [RTL stylesheet generation](http://build.prestashop.com/news/PrestaShop-RTL-project-update)
- Bulk edition in stocks
- A product can now have multiple features of the same type
- Import/Export on Stock Overview page
- [UI Kit](http://build.prestashop.com/news/PrestaShop-UI-Kit), available in the Symfony pages
	- Bootstrap 4 alpha 5 > latest Bootstrap 4 beta 2
	- jQuery 3
- [Symfony migration](http://build.prestashop.com/news/make-back-office-modules-great-again)
	- Modules can now act as Symfony Bundles
	- Improved debug toolbar including hook information and more
	- 3 new pages migrated to Symfony (Modules Catalog, Performance, System Information)

And also:

- Icelandic localization
- Installer in Japanese
- Store schedules are now localized
- New hook on AdminCustomers view > Addresses actions
- Tools for building a release package of PrestaShop are included in the source code
- Sample configuration file for Nginx server

... and many bugfixes and performance improvements! [Check the full changelog here](https://assets.prestashop2.com/en/system/files/ps_releases/changelog_1.7.3.0-beta1.txt).


## How to give feedback about this beta

Have you found a bug? A curious behavior? An unexpected reaction? Please let us know! 

[Create a ticket on the 1.7 Forge project](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1), and [give us as much details as possible](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop#HowtousetheForgetocontributetoPrestaShop-Bestpracticesforwritinganissue)!


## Final note

As you might have guessed, a lot of work went into this beta version, and there is still a lot of work to be done in order to get it ready for release. So help us, download and test it, because you too can help with pull requests for bugs that you noticed!

[Test PrestaShop 1.7.3.0 beta 1 now!](https://www.prestashop.com/en/release-notes-1-7-3-0-beta){: .btn .btn-lg .btn-success}
{: .text-center}

Happy testing, and thanks again!
