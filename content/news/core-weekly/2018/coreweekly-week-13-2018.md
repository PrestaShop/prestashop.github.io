---
layout: post
aliases: ["/news/coreweekly-week-13-2018"]
title:  "PrestaShop Core Weekly - Week 13 of 2018"
subtitle: "An inside look at the PrestaShop codebase"
date:   2018-04-04 09:10:11
authors: [ LouiseBonnard ]
icon: icon-calendar
tags:
 - core-monthly
---

This edition of the Core Weekly report highlights changes in PrestaShop's core codebase during the last week, from Monday 26th of March to Sunday 01st of April 2018.

![Core Weekly banner](/assets/images/2017/04/core_weekly_banner.jpg)


## General messages

Hey guys, guess what, we have a new member of the Prestacrew, here is @ttoine! He is our new Developer Advocate and, obviously, is quite keen on open source. Build’s editorial will be one of his great mission, and broadly all relations with the dev community. For my part, I will stay around and keep the grip on the translation part of the devblog. ;-)


## Code changes in the 'develop' branch (for v1.7.4.0)

### Back office

* [#8529](https://github.com/PrestaShop/PrestaShop/pull/8529): Fix bug alignment sidebar menuCollapse Admin theme. Thank you @vincent8balls!
* [#8705](https://github.com/PrestaShop/PrestaShop/pull/8705): Introduce switch type in forms, by @quetzacoalt91.
* [#8790](https://github.com/PrestaShop/PrestaShop/pull/8790): Optimize reserved product quantity update, by @jocel1.
* [#8859](https://github.com/PrestaShop/PrestaShop/pull/8859): Passing language ID for Store object instance. Thank you @tmmeilleur!
* [#8863](https://github.com/PrestaShop/PrestaShop/pull/8863): Fixed misuse of magic routing, by @mickaelandrieu.
* [#8864](https://github.com/PrestaShop/PrestaShop/pull/8864): Removed almost all deprecations on Product page, by @mickaelandrieu.
* [#8865](https://github.com/PrestaShop/PrestaShop/pull/8865): Fixed CCC settings. Thank you @stickyrst!
* [#8890](https://github.com/PrestaShop/PrestaShop/pull/8890): Fix display of image form in product page, by @quetzacoalt91.
* [#8899](https://github.com/PrestaShop/PrestaShop/pull/8899): Optimize stock queries, by @jocel1.


### Front office

* [#8469](https://github.com/PrestaShop/PrestaShop/pull/8469): add a few optimisations to speed up the display of the order history …, by @jocel1.
* [#8866](https://github.com/PrestaShop/PrestaShop/pull/8866): FO: Fixed breadcrumb links in ProductController. Thank you @vitalykondratiev!
* [#8884](https://github.com/PrestaShop/PrestaShop/pull/8884): QUERY_STRING is not set on all environments. Thank you @stickyrst!
* [#8902](https://github.com/PrestaShop/PrestaShop/pull/8902): FO: Displaying the No Image for Products on theme, by @mickaelandrieu.


### Core

* [#8514](https://github.com/PrestaShop/PrestaShop/pull/8514): Added GroupBy option for actionAdminProductsListingFieldsModifier hook. Thank you @astterx!
* [#8685](https://github.com/PrestaShop/PrestaShop/pull/8685): Fixed link_rewrite argument for getImageLink().. Thank you @gitdyr!
* [#8743](https://github.com/PrestaShop/PrestaShop/pull/8743): CO: Fix the links sent in the mails (multilingualism). Thank you @guillaumegbzh!
* [#8754](https://github.com/PrestaShop/PrestaShop/pull/8754): Fix non-filtered meta by filterHtmlContent hook. Thank you @prestamodule!
* [#8853](https://github.com/PrestaShop/PrestaShop/pull/8853): Make override of object models easy, by @mickaelandrieu.
* [#8876](https://github.com/PrestaShop/PrestaShop/pull/8876): Disable Symfony tokenization in routing, by @mickaelandrieu.
* [#8885](https://github.com/PrestaShop/PrestaShop/pull/8885): Improve PrestaShopBundle config structure. Thank you @sarjon!


### Test

* [#8826](https://github.com/PrestaShop/PrestaShop/pull/8826): create, edit, delete and delete with bulk actions customer. Thank you @fouratachour!
* [#8874](https://github.com/PrestaShop/PrestaShop/pull/8874): Check notifications. Thank you @hadrich-hatem!
* [#8875](https://github.com/PrestaShop/PrestaShop/pull/8875): Check the addons catalog page. Thank you @hadrich-hatem!
* [#8879](https://github.com/PrestaShop/PrestaShop/pull/8879): Test Buttons (Preview, Duplicate, Online, Go to catalog, Add a new product, Delete) in add product page. Thank you @fouratachour!
* [#8886](https://github.com/PrestaShop/PrestaShop/pull/8886): properly set the test database by taking into account the environment  with console commands, by @jocel1.
* [#8900](https://github.com/PrestaShop/PrestaShop/pull/8900): CMS Page and category. Thank you @fouratachour!


### Installer

* [#8788](https://github.com/PrestaShop/PrestaShop/pull/8788): speed up test_dir with a lot of files present in a directory, by @jocel1.
* [#8789](https://github.com/PrestaShop/PrestaShop/pull/8789): Do not call search::indexation at each entity creation, by @jocel1.
* [#8889](https://github.com/PrestaShop/PrestaShop/pull/8889): add tests for getDirectories, by @jocel1.


## Code changes in the '1.7.3.x' branch (for v1.7.3.0)

### Back office

* [#8779](https://github.com/PrestaShop/PrestaShop/pull/8779): Little css override for modal title. Thank you @slorenzini!
* [#8849](https://github.com/PrestaShop/PrestaShop/pull/8849): Add User club and UserVoice on BO link footer. Thank you @slorenzini!
* [#8871](https://github.com/PrestaShop/PrestaShop/pull/8871): Improved rendering of combinations in Product page, by @mickaelandrieu.


### Front office

* [#8873](https://github.com/PrestaShop/PrestaShop/pull/8873): Fix contactform module issues. Thank you @alegout!


### Core

* [#8607](https://github.com/PrestaShop/PrestaShop/pull/8607): Fix pack stock issues. Thank you @alegout!
* [#8766](https://github.com/PrestaShop/PrestaShop/pull/8766): Show unit price within a tax in order confirmation e-mail. Thank you @kpodemski!


### Test

* [#8805](https://github.com/PrestaShop/PrestaShop/pull/8805): Reset module Welcome if the RESUME button does not exist, by @fatmabouchekoua.
* [#8812](https://github.com/PrestaShop/PrestaShop/pull/8812): Delete product. Thank you @fouratachour!
* [#8813](https://github.com/PrestaShop/PrestaShop/pull/8813): Check the product discount in the Front Office. Thank you @hadrich-hatem!
* [#8819](https://github.com/PrestaShop/PrestaShop/pull/8819): Fix sort product script, by @fatmabouchekoua.
* [#8829](https://github.com/PrestaShop/PrestaShop/pull/8829): Add script for screenshot display on Travis, by @quetzacoalt91.
* [#8854](https://github.com/PrestaShop/PrestaShop/pull/8854): Check the change of the default combination from the edition page. Thank you @fouratachour!
* [#8878](https://github.com/PrestaShop/PrestaShop/pull/8878): Check the appearance of tinymce field on the product page. Thank you @hadrich-hatem!


### Installer

* [#8891](https://github.com/PrestaShop/PrestaShop/pull/8891): Fix dezipper redirect, by @eternoendless.

Thank you to the contributors whose pull requests were merged since the last Core Weekly Report: @alegout, @astterx, @fouratachour, @gitdyr, @guillaumegbzh, @hadrich-hatem, @kpodemski, @prestamodule, @sarjon, @slorenzini, @stickyrst, @tmmeilleur, @vincent8balls and @vitalykondratiev!

Thank you to the contributors whose PRs haven't been merged yet! And of course, a big thank you to all those who contribute with tickets and comments [on the Forge](http://forge.prestashop.com/)!

If you want to contribute to PrestaShop with code, please read these pages first:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, please read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Happy contributin' everyone!
