---
layout: post
title:  "Here comes PrestaShop 1.7.0.0 alpha 4!"
subtitle: "Less bugs, more fun: test it now!"
date:   2016-04-25 02:30:00
author: [ mandrieu, maximebiloe, xavierborderie, alexeven ]
icon: icon-gift
tags:
- 1.7
- 1.7.0.0
- version
- alpha
- major
- releases
- development
---

Three weeks ago [we released PrestaShop 1.7.0.0 alpha 3](http://build.prestashop.com/news/prestashop-1-7-alpha-3-is-here/). Since then, and with the help of the community, we've been working on it to fix the bugs you've reported and to keep improving this new version. We're now **releasing PrestaShop 1.7.0.0 alpha 4 version**, so we can keep gathering feedback and make sure that the final and stable version will be the best it can be!



<div class="alert alert-important" role="alert">
While this alpha version is not ready for production stores, it is a great basis for us to get your feedbacks.

We’re are still working on some features and know some parts are broken. <a href="http://build.prestashop.com/news/prestashop-1-7-alpha-3-is-here/#whats-in-progress">Check out the list in this article</a>.
</div>

Let’s insist on this: this is NOT the stable version of PS 1.7, and IT SHOULD NOT BE USED IN PRODUCTION. Do not create a new store with this alpha version, it is by definition not finished yet.

You SHOULD however install this alpha version as a test store, either on your machine or your web hosting, and play with it -- and give us your feedback!

The release date for the stable version is not yet set, so you have a few weeks and beta/RC versions ahead of you!

[Test PrestaShop 1.7.0.0 alpha 4](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}


## How to give feedback

Have you found a bug? A curious behavior? An unexpected reaction? Let us know! [Create a ticket on the 1.7 Forge project](http://forge.prestashop.com/secure/CreateIssue!default.jspa?selectedProjectId=11322&issuetype=1), and give us as much details as possible!

Please note that we are not looking for feedback on the overall technical or design choices: Symfony2, the new theming system, the back office design and other global aspects of 1.7 are pretty much set in stone. However, do let us know about bugs or possible improvements!


## Updates since alpha 3

You'll find more details about the previous alpha 3 in this [previous article](http://build.prestashop.com/news/prestashop-1-7-alpha-3-is-here/).

Here are the main improvements this new alpha version brings:

### Front office
- Fix invoice address not being asked in checkout [#5305](https://github.com/PrestaShop/PrestaShop/pull/5305) by @jtabet
- Checkout - displays voucher value in the shopping cart [#5312](https://github.com/PrestaShop/PrestaShop/pull/5312) by @Shine-neko
- Fix warnings in the quick-view  [#5317](https://github.com/PrestaShop/PrestaShop/pull/5317) by @Shine-neko
- Fix Prices drop, Best sales & New products display [#5351](https://github.com/PrestaShop/PrestaShop/pull/5351) by @maximebiloe
- Display tax in shopping cart by default [#5353](https://github.com/PrestaShop/PrestaShop/pull/5353) by @maximebiloe
- Display product image in confirmation order [#5361](https://github.com/PrestaShop/PrestaShop/pull/5361) by @Shine-neko
- Fix checkout behavior when simplified URLs are disabled [#5376](https://github.com/PrestaShop/PrestaShop/pull/5376) by @maximebiloe
- Form error messages are now displayed in the website language (only English for now), instead of browser language  [#5399](https://github.com/PrestaShop/PrestaShop/pull/5399) by @maximebiloe
- Improved the legal compliancy [#5394](https://github.com/PrestaShop/PrestaShop/pull/5394), [#5445](https://github.com/PrestaShop/PrestaShop/pull/5445). Thank you @paeddl!
- Fix shipping tax when proportionate is enabled in AEU [#5325](https://github.com/PrestaShop/PrestaShop/pull/5325) by @maximebiloe


### Back office

- TinyMCE improvements on style and loading perfs [#5420](https://github.com/PrestaShop/PrestaShop/pull/5420) by @tchauviere
- Added a feature to be able to remove birthdate in subscription form [#5343](https://github.com/PrestaShop/PrestaShop/pull/5343). Thank you @firstred!


### Product page

- The bottom bar for the product page has been redesigned [#5391](https://github.com/PrestaShop/PrestaShop/pull/) by @nihco2
- Introduced a Category management system on Page product [#5293](https://github.com/PrestaShop/PrestaShop/pull/5293), [#5323](https://github.com/PrestaShop/PrestaShop/pull/5323), and [#5401](https://github.com/PrestaShop/PrestaShop/pull/5401) by @mickaelandrieu
- Introduced tooltips and improved wording [#5424](https://github.com/PrestaShop/PrestaShop/pull/5424) by @julienbourdeau


### Modules page

- The "enable/disable on mobile" action is back! [#5319](https://github.com/PrestaShop/PrestaShop/pull/5319) by @Quetzacoalt91
- Improve the loading time of the module catalog [#5368](https://github.com/PrestaShop/PrestaShop/pull/5368) by @Quetzacoalt91
- Modules to be configured are now displaying [#5395](https://github.com/PrestaShop/PrestaShop/pull/5395) by @Quetzacoalt91
- Improved Module class to handle more potential issues [#5397](https://github.com/PrestaShop/PrestaShop/pull/5397) by @Quetzacoalt91
- Fix zip module installation for complex modules [#5380](https://github.com/PrestaShop/PrestaShop/pull/5380) by @mickaelandrieu
- Improved list display [#5371](https://github.com/PrestaShop/PrestaShop/pull/5371). Thank you @ShepherdV8!
- Modules scoring is now displayed [#5405](https://github.com/PrestaShop/PrestaShop/pull/5405) by @Quetzacoalt91


### Core
- Added PHP 7 tests on Travis CI [#5439](https://github.com/PrestaShop/PrestaShop/pull/5439). Thank you @firstred!
- Introduced a new `dump` function from Symfony VarDumper component [#5381](https://github.com/PrestaShop/PrestaShop/pull/5381) by @Shine-neko
- Disallow indexing of admin pages [#5357](https://github.com/PrestaShop/PrestaShop/pull/5357). Thank you @firstred!
- Updated SwiftMailer to the latest version [#5233](https://github.com/PrestaShop/PrestaShop/pull/5233). Thank you @firstred!

This alpha 4 version was made possible by the hard work of the PrestaShop Core Team, with additional commits by the following contributors: @firstred (responsible for no less than 8 contributions already accepted the last 3 weeks, thank you!), @paeddl and @ShepherdV8. Thank you!



## What’s (still) in progress

Remember that this is alpha 4: a lot of things are not ready yet, or are ready but not yet available.

We tried to gather the most important ones, so you have a clear idea of what still needs to be implemented. All of this will eventually be fixed for the stable version -- and you can help with pull-requests on GitHub, and feedback of your tests!


### Core

* If your web hosting uses PHP-FPM, some links (and images) will not work.
* Multistore & Advanced Stock Management aren’t yet connected to the Create a Product Page.
* The header and navigation can vary (slightly) between pages.
* Employees permissions are not yet suited for the new navigation in place
* If a problem occurs while uploading a theme, we may not be able to tell you why currently :) In effect, errors and warnings are not fully set yet. And in any case, your 1.5-1.6 theme will NOT work with the new theme system.


### Front office

* Some links may be broken during your navigation on the shop


### Back office

* Some images are broken for now, some buttons and tab could behave in a weird way, and you might stumble on other weird artefacts. We know about this, and they will all be fixed in time.
* We’re still working on the responsiveness of the back-office, and 13” screens could particularly be affected.


### Modules page

* We’re improving the modules discovery page: better sorting, more information, reworked categories, etc.


### Content

* Interface copywriting is not final yet. Some parts need to be written, others are waiting for a rewrite and others are in proofreading.
* Default products are still the ones used in version 1.6. Version 1.7 should have a brand new set of products.
* Translations are on hold for now while we’re working on improving the system: the interface is only in English for now.


### Documentation

* Contextual help still displays 1.6 documentation as we’re updating it to 1.7. Expect it to be final during our RC period.
* Technical documentation for modules & themes should follow the same timeline.


## Final note!

So cheers for the second public glance at the brand new 1.7, made with <3 by our team and our wonderful Community. It’s not fully baked yet, but we’re very proud of the work done.

[Test PrestaShop 1.7.0.0 alpha 4](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}

We’ll closely monitor your feedback and are eager to hear from you!

Happy testing!
