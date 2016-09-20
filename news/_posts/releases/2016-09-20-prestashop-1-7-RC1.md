---
layout: post
title:  "PrestaShop 1.7.0.0 RC1: The Real Deal"
subtitle: "Delivering a quality 1.7, one RC at a time!"
date:   2016-08-29 09:10:11
author: xavierborderie
icon: icon-leaf
tags:
 - 1.7
 - 1.7.0.0
 - version
 - rc
 - releases
 - development
---

Here it comes: the bug fixin', performance improvin', stabilizin, all singin' all dancin' RC1 for PrestaShop 1.7! It is packed with goodness, and needs your love!

![PrestaShop 1.7 Alpha 3 Release](/assets/images/2016/04/Badge1.7-Color.png)

Released on August 29th, the 1.7 RC0 release was dubbed a "pre-RC1" version, so you knew what was coming. Since then, MANY bugs were fixed and improvements added. We're sure you will like this release even more than RC0! We hope it will be the one you will start working with when building your modules and themes!

[Test PrestaShop 1.7.0.0 RC1 now!](https://www.prestashop.com/en/developers-versions ){: .btn .btn-lg .btn-success}
{: .text-center}

Found an issue? [Create a Forge ticket](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!


* TOC
{:toc}

 
## What's new in RC1?

In the three weeks since RC0, here is what landed in the codebase:

 * Improved front and back office translation management.
 * A more responsive front office theme.
 * Bugfixes-a-go-go!

See at the bottom of this article for the full list.


## What's not in RC1?

Here’s what we still intend to implement before we go stable:

* Mobile-ready front office.
* Parent/child theme inheritance ([doc draft is here](https://github.com/PrestaShop/docs/blob/master/themes/smarty/parent-child-feature.rst)).


## How far are we from a stable 1.7 release?

We know many of you are waiting for The Answer: when is 1.7.0.0 going to be released? We know it is important to all professionals: merchants waiting to use the new features, agencies waiting to start selling 1.7 projects, developers and designers waiting to sell their creations on the Addons marketplace...

Our answer remains the same: we want to release a quality 1.7. We cannot give you a precise release date because we need to iron out the issues that we are receiving feedback about -- and we've received a LOT of feedback since RC0. [Keep them coming](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!

The team is working on fixing those issues, and we need you to start testing it in order to make sure it is stable enough for everyone. We want the whole community to be proud of 1.7, and to be able to sincerely promote it to the whole community.

But let's talk figures. Since RC0:
 * 96 Forge tickets were closed as "fixed":
   * 8 were blocking tickets.
   * 7 were critical tickets.
   * 75 were major tickets.
 
What's left to be done, so far:
 * 71 Forge tickets, among which:
   * 3 blocking tickets.
   * 2 critical tickets.
   * 66 major tickets.

So as you can see, we're closer than ever!


## What needs to be tested by you?

In RC0, we said that the major things to test are the new theme system (because once it's stable, we can't revamp everything) and the module system (any hook missing?). This still holds true in RC1: try your hand at creating a theme or at upgrade a 1.6 module for 1.7 (a simple one at first). Have a look at the current state of the [PrestaShop 1.7 tech documentation](https://github.com/PrestaShop/docs), and of course, give us feedback, either positive or constructive, on your findings!

Again, as a module developer, if your usual hooks are missing, or if you feel the Modules system lacks something essential, let us know! [Read the documentation](https://github.com/PrestaShop/docs) (and [the Build article](http://build.prestashop.com/news/module-development-changes-in-17/)) and give us your feedback!

And, of course, let us know of any broken behavior or regression, especially in the pages that were completely rewritten: the Product page, and the Modules page.


## So, what's next?

The whole team is busy fixing everything that doesn't look right, in order to have a quality 1.7 release.

There will be a RC2, and possibly other RC versions until PrestaShop 1.7.0.0 is deemed stable enough for you -- and YOU can voice your opinion!

[Use the Forge](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1) to tell us what is blocking you, or possibly broken.
[Use GitHub](https://github.com/PrestaShop/PrestaShop/pulls) to fix the issues you have noticed.
Use the comments on this post to congratulate everyone ;)

Please note that we are not looking for feedback on the overall technical or design aspects: Symfony 2, the new theming system, the back office design and other global aspects of 1.7 (such as the UX decisions on the Product page and the Modules page) are pretty much set in stone. 
However, do let us know about bugs or possible improvements to all the above aspects!


## Thank you to our contributors!

This wouldn't be a community project without pull-requests from our contributors: @davideapvd, @dzianis-yurevich, @firstred, @frederic-benoist, @martinfojtik, @prestamodule, @rolige, @shagshag, and @unlocomqx. Thank you all!

This doesn't take into account all those who are active even without code changes: comments on PR, tickets on the Forge, translations on Crowdin, etc. PrestaShop is better thanks to you all!

This release was spearheaded by the team working for the PrestaShop company: cheers to @aleeks, @alexeven, @antoin-m, @dave-lp, @fatmabouchekoua, @ishcherbakov, @julienbourdeau, @maximebiloe, @mickaelandrieu, @nihco2, @quetzacoalt91, @thierrymarianne, and @xborderie.


## Full list of changes between RC0 and RC1

Here is the whole deal:

 - Back Office:
   - New features:
     - [6144](https://github.com/PrestaShop/PrestaShop/pull/6144): Introduced front office translation provider
     - [6074](https://github.com/PrestaShop/PrestaShop/pull/6074): Enabled translations for Back Office domain
     - [6071](https://github.com/PrestaShop/PrestaShop/pull/6071): Be able to extract theme translations in Back Office
   - Improvements:
     - [6152](https://github.com/PrestaShop/PrestaShop/pull/6152): Added sync feature on theme translations
     - [6131](https://github.com/PrestaShop/PrestaShop/pull/6131): Updated list of accepted import files.
     - [6121](https://github.com/PrestaShop/PrestaShop/pull/6121): Added missing translations
     - [6114](https://github.com/PrestaShop/PrestaShop/pull/6114): Wording harmonization for 'cannot' spelling
     - [6089](https://github.com/PrestaShop/PrestaShop/pull/6089): Fix some more wording
     - [6024](https://github.com/PrestaShop/PrestaShop/pull/6024): Improved Product features sub form
     - [6070](https://github.com/PrestaShop/PrestaShop/pull/6070): Refactor product page breakpoints
     - [6062](https://github.com/PrestaShop/PrestaShop/pull/6062): Updated translation function in AdminStatsTabController
     - [6035](https://github.com/PrestaShop/PrestaShop/pull/6035): Remove useless BO options for stores page
   - Bug fixes:
     - [6166](https://github.com/PrestaShop/PrestaShop/pull/6166): Translation files should be overriden by database when using "export theme" action
     - [6176](https://github.com/PrestaShop/PrestaShop/pull/6176): Restored missing tree templates
     - [6178](https://github.com/PrestaShop/PrestaShop/pull/6178): Fixed delete a shop (multistore)
     - [6173](https://github.com/PrestaShop/PrestaShop/pull/6173): Fix children feature length
     - [6143](https://github.com/PrestaShop/PrestaShop/pull/6143): Sanitized product list filter parameters
     - [6154](https://github.com/PrestaShop/PrestaShop/pull/6154): Fixed modules sorting by access date
     - [6155](https://github.com/PrestaShop/PrestaShop/pull/6155): Removed access deletion from tab deletion
     - [6163](https://github.com/PrestaShop/PrestaShop/pull/6163): Fixed session start for legacy use
     - [6145](https://github.com/PrestaShop/PrestaShop/pull/6145): Added virtual product destruction on product type change
     - [6147](https://github.com/PrestaShop/PrestaShop/pull/6147): Fix undefined trans() in AdminOutstanding
     - [6146](https://github.com/PrestaShop/PrestaShop/pull/6146): Use array key in case of missing product type in module catalog
     - [6142](https://github.com/PrestaShop/PrestaShop/pull/6142): Fix issue with product cover update
     - [6140](https://github.com/PrestaShop/PrestaShop/pull/6140): Remove zip file after serving it when export translations
     - [6134](https://github.com/PrestaShop/PrestaShop/pull/6134): Fix services and buttons on module page
     - [6137](https://github.com/PrestaShop/PrestaShop/pull/6137): Fix theme installation bug when it has a depended module
     - [6098](https://github.com/PrestaShop/PrestaShop/pull/6098): Fixed colorpicker image folder
     - [6130](https://github.com/PrestaShop/PrestaShop/pull/6130): Synced translations forms
     - [6110](https://github.com/PrestaShop/PrestaShop/pull/6110): Use "on" instead of live in colorpicker plugin
     - [6112](https://github.com/PrestaShop/PrestaShop/pull/6112): Fix save product button on laptop
     - [6087](https://github.com/PrestaShop/PrestaShop/pull/6087): Fix HTML syntax in modal not trusted
     - [6086](https://github.com/PrestaShop/PrestaShop/pull/6086): Changed query word because "virtual" is reserved in mysql 5.7+
     - [6057](https://github.com/PrestaShop/PrestaShop/pull/6057): Fix search tag exception
     - [6051](https://github.com/PrestaShop/PrestaShop/pull/6051): Fix wrong call to trans method in AdminOrder
     - [6031](https://github.com/PrestaShop/PrestaShop/pull/6031): Fixed link to modules in product catalog
     - [6046](https://github.com/PrestaShop/PrestaShop/pull/6046): Fix category thumbnail feature
     - [6047](https://github.com/PrestaShop/PrestaShop/pull/6047): Disable SmartyDev in BO
     - [6004](https://github.com/PrestaShop/PrestaShop/pull/6004): Fixed reset behavior on Product form
     - [6032](https://github.com/PrestaShop/PrestaShop/pull/6032): Fixed product save when product type field is disabled

 - Front Office:
   - New features:
     - [6162](https://github.com/PrestaShop/PrestaShop/pull/6162): Enabled loading of active theme translations
     - [6081](https://github.com/PrestaShop/PrestaShop/pull/6081): Responsive layout - Catalog / Checkout
   - Improvements:
     - [6160](https://github.com/PrestaShop/PrestaShop/pull/6160): Add manufacturers and suppliers list to sitemap
     - [6186](https://github.com/PrestaShop/PrestaShop/pull/6186): Added tests for shopping cart events
     - [6168](https://github.com/PrestaShop/PrestaShop/pull/6168): Added test for shopping cart events
     - [6122](https://github.com/PrestaShop/PrestaShop/pull/6122): Update theme requirements
     - [6123](https://github.com/PrestaShop/PrestaShop/pull/6123): Add before and after <body> hooks
     - [6064](https://github.com/PrestaShop/PrestaShop/pull/6064): Removed tools and link from classic theme templates
     - [6111](https://github.com/PrestaShop/PrestaShop/pull/6111): Applied naming conventions to checkout events
     - [6116](https://github.com/PrestaShop/PrestaShop/pull/6116): Applied naming conventions to listing events
     - [6083](https://github.com/PrestaShop/PrestaShop/pull/6083): Applied naming conventions to cart events
     - [6093](https://github.com/PrestaShop/PrestaShop/pull/6093): Update and fix front strings for harmonization
     - [6088](https://github.com/PrestaShop/PrestaShop/pull/6088): Add hooks for legal compliance in cart shipping subtotal
     - [6066](https://github.com/PrestaShop/PrestaShop/pull/6066): Prevent display of payment return if empty
     - [6069](https://github.com/PrestaShop/PrestaShop/pull/6069): Add clear all active product filters link
     - [6045](https://github.com/PrestaShop/PrestaShop/pull/6045): Accept newsletter conditions not necessary anymore
     - [6020](https://github.com/PrestaShop/PrestaShop/pull/6020): Fixed all listing pages
   - Bug fixes:
     - [6165](https://github.com/PrestaShop/PrestaShop/pull/6165): Fixed product quantity updates in shopping cart
     - [6153](https://github.com/PrestaShop/PrestaShop/pull/6153): Fix wrong pictures zoomed when combinations in classic
     - [6141](https://github.com/PrestaShop/PrestaShop/pull/6141): Fix product flags display
     - [6138](https://github.com/PrestaShop/PrestaShop/pull/6138): Fix wrong selector for conditions and payment alert
     - [6095](https://github.com/PrestaShop/PrestaShop/pull/6095): Fix B2B mode
     - [6132](https://github.com/PrestaShop/PrestaShop/pull/6132): Fix module translations without domain but present in Catalog
     - [6119](https://github.com/PrestaShop/PrestaShop/pull/6119): Fix a translation variable name and clear filter button layout
     - [6091](https://github.com/PrestaShop/PrestaShop/pull/6091): Add missing JS file (PR 6081)
     - [6067](https://github.com/PrestaShop/PrestaShop/pull/6067): Restored Smarty legacy functions for pdf
     - [6053](https://github.com/PrestaShop/PrestaShop/pull/6053): Abide by minimum buying quantity
     - [6077](https://github.com/PrestaShop/PrestaShop/pull/6077): Move product column hooks into columns
     - [6072](https://github.com/PrestaShop/PrestaShop/pull/6072): Add meta.index to $page var
     - [6063](https://github.com/PrestaShop/PrestaShop/pull/6063): Update theme layout to handle columns
     - [6044](https://github.com/PrestaShop/PrestaShop/pull/6044): Made footer compatible with legal compliance module
     - [6039](https://github.com/PrestaShop/PrestaShop/pull/6039): Fix the discount amount in product details page

 - Core:
   - New features:
     - [6151](https://github.com/PrestaShop/PrestaShop/pull/6151): Introduced generic Theme provider
     - [6055](https://github.com/PrestaShop/PrestaShop/pull/6055): Retrieve translations from themes
   - Improvements:
     - [6170](https://github.com/PrestaShop/PrestaShop/pull/6170): Improved translations factory error handling
     - [6094](https://github.com/PrestaShop/PrestaShop/pull/6094): Document CartRule class + cleanup
     - [6099](https://github.com/PrestaShop/PrestaShop/pull/6099): Remove PclZip library
     - [6100](https://github.com/PrestaShop/PrestaShop/pull/6100): Move mobile detect to composer
     - [6103](https://github.com/PrestaShop/PrestaShop/pull/6103): Move http_build_url to composer
     - [6109](https://github.com/PrestaShop/PrestaShop/pull/6109): Upgrade to GeoIP2 City
     - [6101](https://github.com/PrestaShop/PrestaShop/pull/6101): Remove contrib folder
     - [6107](https://github.com/PrestaShop/PrestaShop/pull/6107): Update and move Archive_Tar
     - [6105](https://github.com/PrestaShop/PrestaShop/pull/6105): Move minifier to composer
     - [6106](https://github.com/PrestaShop/PrestaShop/pull/6106): Remove unused pear xml parser
     - [6108](https://github.com/PrestaShop/PrestaShop/pull/6108): Always update SwiftMailer to latest PATCH version
     - [6028](https://github.com/PrestaShop/PrestaShop/pull/6028): Updated length of cookie key and IV
     - [6037](https://github.com/PrestaShop/PrestaShop/pull/6037): Remove deprecated hooks from 1.5
     - [6019](https://github.com/PrestaShop/PrestaShop/pull/6019): Moving the call to the function renderwidget
   - Bug fixes:
     - [6180](https://github.com/PrestaShop/PrestaShop/pull/6180): Fix credit split pdf generation
     - [6174](https://github.com/PrestaShop/PrestaShop/pull/6174): Fix the invalid favicon uploading
     - [6157](https://github.com/PrestaShop/PrestaShop/pull/6157): Fixed Translations Factories + tests
     - [6156](https://github.com/PrestaShop/PrestaShop/pull/6156): Update all_languages.json file for missing countries
     - [6136](https://github.com/PrestaShop/PrestaShop/pull/6136): Flatten default translations catalogue
     - [6097](https://github.com/PrestaShop/PrestaShop/pull/6097): Fix wrong domains
     - [6092](https://github.com/PrestaShop/PrestaShop/pull/6092): Call address form templates without extension
     - [6068](https://github.com/PrestaShop/PrestaShop/pull/6068): Fixed address form update on country change
     - [6079](https://github.com/PrestaShop/PrestaShop/pull/6079): Remove self to make OrderInvoice overridable
     - [6059](https://github.com/PrestaShop/PrestaShop/pull/6059): Only send real file to copy() on CLDR install
     - [6036](https://github.com/PrestaShop/PrestaShop/pull/6036): Fix $with_quotes ignored in ObjectModel::formatValue


## Parting words

Ready? Set? Go! Create new themes and update your modules! :)

Thank you for your feedback!
