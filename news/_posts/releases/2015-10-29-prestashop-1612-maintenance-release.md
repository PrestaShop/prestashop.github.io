---
layout: post
title:  "Release of PrestaShop 1.6.1.2"
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2015-10-29 17:30:41
authors: [ xavierborderie ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.6.1.x
---

PrestaShop 1.6.1.2 is now available. This maintenance release [closes 247 issues](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+base%3A1.6.1.x+is%3Aclosed+closed%3A%3E2015-08-20+) since version 1.6.1.1 (released on August 20th). As the version number indicates (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)), this is the second patch release for PrestaShop 1.6.1.0.

As readers of the Build devblog know quite well, this patch release has benefited from 4 RC versions before it was deemed stable enough to release.

More importantly to many merchants, we do believe this release fixes the long-standing issue of the slowness of the Product page.


### About the slow Product page

A bit of history is necessary in order to understand where that slowness came from.

For the last few months, we have received feedback about the Product page's "Save & Stay" button, which would keep spinning and remain unavailable for overly long, depending on the server configuration.

The reason why that button got slow a few months ago was a mix of several concomitant items:

* The Product page has several tabs.
* Clicking the "Save" button saves the whole product, therefore all the tabs.
* If not all tabs are loaded at the moment the button is clicked (typically: load product page, quickly change one detail, save), there is an error. See [PSCSX-1257](http://forge.prestashop.com/browse/PSCSX-1257).
* The solution? Prevent form submission until all tabs are loaded, and thus, disable the button while the tabs are loading. Here goes: [PSCFV-12359](http://forge.prestashop.com/browse/PSCFV-12359).
* The consequence? On some server configurations (the entry-level ones, mostly), clicking on the "Save" button triggers several synchronous Ajax calls to the server, effectively preventing the button from releasing as soon as it is clicked.

In short, to solve an issue (write error when clicking on "Save"), we had to slow the availability of the Save button, thus creating frustration, and also creating issues for slow servers (HTTP 500 errors, etc.).

This got somehow worse in 1.6.1.0, with users reporting waiting time from 30s to several minutes. And we think the (seemingly simple) fact of [switching from synchronous to asynchronous tab loading](https://github.com/PrestaShop/PrestaShop/pull/4330) fixed the issues -- at least, all the feedback we are receiving point in this direction.


### The other changes

For a full list of changes, [see the list of pull requests merged into the 1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+base%3A1.6.1.x+is%3Amerged+updated%3A%3C2015-08-20+). Even more issues were fixed in 1.6.1.2 than in 1.6.1.1, the first maintenance release. We are pretty confident you will enjoy this release more than any other of recent times :)

Here are a few highlights for 1.6.1.2:

#### Front office

* A new demo address is now in place. Sorry to our friends at Citroën!
* Product comparison now takes the chosen interval into account.
* Fixed a situation where customer could not see available vouchers.
* Products are now sortied by name in the invoice. Easier picking!
* The top menu was not always active on mobile, now it is!
* Updates to the Swedish translation for the installer.
* Czech translation added for the installer.
* ...and many more!

#### Back office

* Product page tabs now load asynchronously (see section above). Wow, that feels better!
* Several performance improvements.
* Several fixes in multishop, warehouses and import tools.
* Pagination is fixed in POST requests.
* Carrier were not editable in certain situations, now they are again.
* Fixed a case where third-party modules could not be disabled.
* No more confusion between private and public messages in Customer Service.
* Meta title and description now use textarea.
* Fixed repetitive queries in specific prices.
* You can now reset your invoice numbers ("Reset Invoice progressive number at beginning of the year" option), and add the year to it.
* The invoice template function computeLayout() can now be overriden.
* ...and many more!

The [PrestaShop 1.6.1.2 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.2-stable) is available, as well as [its release notes](https://www.prestashop.com/en/release-notes-1.6.1.2-stable) (based on the 1.6.1.0 ones).

Since version 1.6.1.2 is a "patch" update to version 1.6.1.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.6.1.0 will work just as well with 1.6.1.2.

This release had 36 contributors, both from PrestaShop and from the Community at large. A huge "thank you!" to each of them!

{% highlight text %}
(adapted from the following Git command: git shortlog --summary --since="2015-08-20" --until="2015-10-30")
	   9	Alexandra Even
	   1	Alfonso Jiménez
	   1	Amazzing
	   1	BMS-fenaille
	   4	brouillon
	   1	cgordenne
	   1	David Eschmeyer
	   1	David Gasperoni
	   1	David-Julian BUCH
	   2	DogSports
	   4	Eolia
	   4	Eric Rouvier
	   3	firstred
	   1	Francois Gaillard
	 168	Gregory Roussac
	   4	Gytis
	   1	hiousi
	   9	joce
	  18	Julien Bourdeau
	   4	Julien Martin
	  95	Jérôme Nadaud
	   4	Krystian Podemski
	   2	Luc Vandesype
	   1	MacRoy
	   2	Marius
	  29	Maxime Biloé
	   1	Mehdi BOUZIDI
	   4	Michael Dekker
	   1	PhpMadman
	  10	Presta Module
	   9	PrestaEdit
	   2	quadrateam
	   1	Rémi Gaillard
	  33	Thibaud Chauviere
	   2	Thomas N
	   5	Xavier Gouley
{% endhighlight %}

...and let's not forget the whole Product/Tech team here at PrestaShop, who double-checked the code before it was merged, and applied our QA tests!

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0 and 1.6.1.1 is completely safe, upgrades from a standard 1.6.0.x version should work just as well, and those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!

[Download 1.6.1.2 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}
