---
layout: post
title:  "Release of PrestaShop 1.7.3.1"
subtitle: "Maintenance version of the 1.7.3.x branch"
date:   2018-04-10 10:17:30
authors: [ AntoineThomas, PabloBorowicz ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.3.x
 - 1.7
---

PrestaShop 1.7.3.1 is now available. This maintenance release fixes 17 issues reported on version 1.7.3.x.

Some of the most notable fixes are:

* Data sent to the front end is now filtered ([learn more](http://build.prestashop.com/news/exposing-data-with-confidence/))
* General speed of the Back Office has been greatly improved (up to 3x faster!) [#8780](https://github.com/PrestaShop/PrestaShop/pull/8780)
* Improved Product page performance when there's a high number of product combinations [BOOM-2950](http://forge.prestashop.com/browse/BOOM-2950)
* The stock quantity for packs is now correctly calculated [BOOM-4361](http://forge.prestashop.com/browse/BOOM-4361)

[Download PrestaShop 1.7.3.1 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Here is the [complete list of changes](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr+milestone%3A1.7.3.1+is%3Amerged):

- Back Office:
  - New feature:
    - [#8849](https://github.com/PrestaShop/PrestaShop/pull/8849): Add User club and UserVoice on BO link footer
  - Improvement:
    - [#8664](https://github.com/PrestaShop/PrestaShop/pull/8664): Change employee icon
    - [#8500](https://github.com/PrestaShop/PrestaShop/pull/8500): Make sure shop list in header is scrollable with lot of items
    - [#8780](https://github.com/PrestaShop/PrestaShop/pull/8780): Improve BO speed by removing menu images
    - [#8725](https://github.com/PrestaShop/PrestaShop/pull/8725): Replace Google+ link on BO footer by Youtube link
  - Bug fix:
    - [#8925](https://github.com/PrestaShop/PrestaShop/pull/8925): Stop generating RTL css file for the default theme using SASS
    - [#8921](https://github.com/PrestaShop/PrestaShop/pull/8921): Fixed CDN management in Performance page
    - [#8871](https://github.com/PrestaShop/PrestaShop/pull/8871): Improved rendering of combinations in Product page
    - [#8779](https://github.com/PrestaShop/PrestaShop/pull/8779): Little css override for modal title
    - [#8631](https://github.com/PrestaShop/PrestaShop/pull/8631): Request module zip for upgrade ONLY when the version available is higher
    - [#8714](https://github.com/PrestaShop/PrestaShop/pull/8714): Update loaded details from database on module action
    - [#8696](https://github.com/PrestaShop/PrestaShop/pull/8696): Fix translation issue during language install
    - [#8648](https://github.com/PrestaShop/PrestaShop/pull/8648): Fix modal backdrop not removed when uninstalling a module
    - [#8618](https://github.com/PrestaShop/PrestaShop/pull/8618): Fix type warning in order detail
    - [#8525](https://github.com/PrestaShop/PrestaShop/pull/8525): "No tax" price option is now well saved in admin product page
    - [#8476](https://github.com/PrestaShop/PrestaShop/pull/8476): Fix customer search in new order form
    - [#8234](https://github.com/PrestaShop/PrestaShop/pull/8234): Fixed bug on save specific price priority for specific product

- Front Office:
  - Bug fix:
    - [#8873](https://github.com/PrestaShop/PrestaShop/pull/8873): Fix contactform module issues
    - [#8856](https://github.com/PrestaShop/PrestaShop/pull/8856): Fixed undefined variables when an url is called in ajax
    - [#8847](https://github.com/PrestaShop/PrestaShop/pull/8847): Override advertising module on classic template to fix image width
    - [#8845](https://github.com/PrestaShop/PrestaShop/pull/8845): Fix search bar on header when it moves from hook and improve header structure #2
    - [#7775](https://github.com/PrestaShop/PrestaShop/pull/7775): Resolve incompatibility between canonical redirections, attributes and product route not only containing rewrite
    - [#8846](https://github.com/PrestaShop/PrestaShop/pull/8846): Fix menu width and submenu hover on header
    - [#8522](https://github.com/PrestaShop/PrestaShop/pull/8522): Fixed specific price percentage rounding on front product page

- Core:
  - Improvement:
    - [#8867](https://github.com/PrestaShop/PrestaShop/pull/8867): Rely on the right legacy container if available on modules
    - [#8584](https://github.com/PrestaShop/PrestaShop/pull/8584): Update toCamelCase
    - [#8795](https://github.com/PrestaShop/PrestaShop/pull/8795): Minor improvements during install
  - Bug fix:
    - [#8922](https://github.com/PrestaShop/PrestaShop/pull/8922): Fixed access to Front Office container from modules
    - [#8766](https://github.com/PrestaShop/PrestaShop/pull/8766): Show unit price within a tax in order confirmation e-mail
    - [#8607](https://github.com/PrestaShop/PrestaShop/pull/8607): Fix pack stock issues
    - [#8711](https://github.com/PrestaShop/PrestaShop/pull/8711): Default AJAX Relevance search sort order is wrong
    - [#8803](https://github.com/PrestaShop/PrestaShop/pull/8803): Stop full object exposure on the front end
    - [#8708](https://github.com/PrestaShop/PrestaShop/pull/8708): Debug of Tools::strReplaceFirst that do not correctly compare the return of strpos + PhpDoc
    - [#8498](https://github.com/PrestaShop/PrestaShop/pull/8498): Fixed bug on reorder with free gift in the cart
    - [#8543](https://github.com/PrestaShop/PrestaShop/pull/8543): Layout broken by cache clear
    - [#8669](https://github.com/PrestaShop/PrestaShop/pull/8669): Make sure all adresses are reset on cart
    - [#8462](https://github.com/PrestaShop/PrestaShop/pull/8462): Fix empty module return on actionEmailSendBefore breaks all email send
    - [#8277](https://github.com/PrestaShop/PrestaShop/pull/8277): CustomerAddressFormatter states were queried without the status (active) check causing disabling states in BO useless

- Installer:
  - Improvement:
    - [#8860](https://github.com/PrestaShop/PrestaShop/pull/8860): Make the dezipper great again
    - [#8806](https://github.com/PrestaShop/PrestaShop/pull/8806): Sample products in FA
  - Bug fix:
    - [#8913](https://github.com/PrestaShop/PrestaShop/pull/8913): Fix issue with pack in fixtures (installer)
    - [#8891](https://github.com/PrestaShop/PrestaShop/pull/8891): Fix dezipper redirect
    - [#8858](https://github.com/PrestaShop/PrestaShop/pull/8858): Include docs when creating zip build

- Tests:
  - New feature:
    - [#8812](https://github.com/PrestaShop/PrestaShop/pull/8812): Delete product
    - [#8829](https://github.com/PrestaShop/PrestaShop/pull/8829): Add script for screenshot display on Travis
  - Improvement:
    - [#8881](https://github.com/PrestaShop/PrestaShop/pull/8881): Check the pagination of product in the Front Office
    - [#8898](https://github.com/PrestaShop/PrestaShop/pull/8898): Check generated combinations table
    - [#8903](https://github.com/PrestaShop/PrestaShop/pull/8903): Add some fixes to the script
    - [#8813](https://github.com/PrestaShop/PrestaShop/pull/8813): Check the product discount in the Front Office
    - [#8805](https://github.com/PrestaShop/PrestaShop/pull/8805): Reset module Welcome if the RESUME button does not exist
    - [#8878](https://github.com/PrestaShop/PrestaShop/pull/8878): Check the appearance of tinymce field on the product page
    - [#8854](https://github.com/PrestaShop/PrestaShop/pull/8854): Check the change of the default combination from the edition page
    - [#8819](https://github.com/PrestaShop/PrestaShop/pull/8819): Fix sort product script
    - [#8810](https://github.com/PrestaShop/PrestaShop/pull/8810): Check the total price in the shopping cart
    - [#8815](https://github.com/PrestaShop/PrestaShop/pull/8815): Re-enable functional tests
  - Bug fix:
    - [#8842](https://github.com/PrestaShop/PrestaShop/pull/8842): Fixed Travis build (update Chrome browser version)
    - [#8746](https://github.com/PrestaShop/PrestaShop/pull/8746): Make file copy on ModuleSelfConfiguration mockable

Contributors to this patch version, from both the Core team and the community at large: 123monsite-regis, Alban L, Antonino Di Bella, Aurélien Pelletier, Bastien Bieri, Cristiano Verardi, Daniel, fatmaBouchekoua, fouratachour, hadrich-hatem, Hitasukha, Krystian Podemski, Maxime Morel-Bailly, MDWeb, Mehdi, Mehrshad, Mickaël Andrieu, neoteknic, Pablo Borowicz, Sarah Lorenzini, sbordun, Symeon, Thomas LEVIANDIER, Thomas Nabord, Wouter Verweirder, Yuri Blanc. Thank you!

Since version 1.7.3.1 is a "patch" update to version 1.7.3.1, upgrading from any 1.7.3 version will be easy: features will work better, and modules & themes which worked fine on 1.7.3.0 will work just as well with 1.7.3.1.<br/>
Upgrades from a standard 1.7.x version should work just as well, and those upgrading from older versions (1.6, 1.5, 1.4 or even older) should take their time and pay attention to their modules, their theme and their custom modifications!
