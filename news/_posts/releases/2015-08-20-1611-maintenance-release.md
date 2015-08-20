---
layout: post
title:  "Release of PrestaShop 1.6.1.1 "
subtitle: "Maintenance version of the 1.6.1.x branch"
date:   2015-08-11 15:45:41
author: xavierborderie
icon: fa-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.6.1.x
---

PrestaShop 1.6.1.1 is now available. This maintenance release [closes 220 issues](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+base%3A1.6.1.x+is%3Aclosed+updated%3A%3C2015-08-20+) in version 1.6.1.0.

We know that some of you may have been waiting for the .1 version of 1.6.1.0 to update to the 1.6.1.x branch. We are therefore happy to deliver the first "patch" release of PrestaShop 1.6.1.0 (as per [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/)). PrestaShop 1.6.1.0 was well received, with thousands of stores having updated to this version.

For a full list of changes, [see the list of pull requests merged into the 1.6.1.x branch](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+base%3A1.6.1.x+is%3Amerged+updated%3A%3C2015-08-20+). A good number of annoying issues were fixed, and we are confident you will like this release!

Here are a few highlights:

* TinyMCE now accept all HTML elements
* The import has been improved in various places.
* The ecotax calculation has been improved.
* The menu is now also available in the following languages: Dutch, Czech, Hungarian, Indonesian, and Serbian.
* Spanish translation was corrected, notably in menus.
* Swedish flag is now correct.
* The Canadian postcode validation has been fixed.
* Several multistore-specific issues have been fixed.
* Robots.txt generator now allows search engines to view the JavaScript and CSS files of modules.
* YandexBot was added to the default list of webspiders.
* ...and many more!

The [PrestaShop 1.6.1.1 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.6.1.1-stable) is available, as well as its release notes (coming soon!) (based on the 1.6.1.0 ones).

Since version 1.6.1.1 is a "patch" update to version 1.6.1.0, upgrading from that version will be as smooth as silk for everyone: features will work better, and modules & themes which worked fine on 1.6.1.0 will work just as well with 1.6.1.1.

This release had 32 contributors, both from PrestaShop and from the Community at large. A huge "thank you!" to each of them!

{% highlight text %}
(adapted from the following Git command: "git shortlog --summary --since="2015-07-08" --until="2015-08-20")
    14	Alexandra Even
     1	Alphacom IT Solutions - Macedonia
     1	Bruno Desprez
     1	Claire Meuriot
     1	Conner Burnett
     2	David-Julian Buch
     5	Éric Rouvier
    22	François Gaillard
		82	Grégory Roussac
     5	Gytis Škema
     6	Jocelyn Fournier
		20	Julien Bourdeau
    12	Julien Martin
   174	Jérôme Nadaud
    14	Jonathan Danse
     2	Jose A. Gómez
     3	Julie Vernois
     1	Kijam Lopez
    13	Luc Vandesype
     1	Manuel Boira
    11	Maxime Biloé
     3	Mikael Blotin
     2	Olivier Bonningues
     2	Pablo Rodríguez Fernández
     4	Pan Ploenes
     1	Pierre Bouvet
     1	Quentin Montant
    29	Sacha Froment
    30	Thibaud Chauviere
     2	Thomas Nabord
     8	Vincent Hadjedj
		33	Xavier Gouley
{% endhighlight %}

Let's go, [upgrade your store(s)](http://doc.prestashop.com/display/PS16/Updating+PrestaShop)! Upgrading from 1.6.1.0 is completely safe, upgrades from a standard 1.6.0.x version should work just as well, and those upgrading from version 1.5, 1.4 or even 1.3 should take their time and pay attention to their modules, their theme and their custom modifications!

[Download 1.6.1.1 now!]https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}
