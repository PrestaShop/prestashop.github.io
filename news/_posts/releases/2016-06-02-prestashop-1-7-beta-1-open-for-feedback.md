---
layout: post
title:  "PrestaShop 1.7.0.0 Beta 1 is open for feedback!"
subtitle: "Dear community, this is your time to shine!"
date:   2016-06-02 00:00:01
author: [ xavierborderie ]
icon: icon-gift
tags:
- 1.7
- 1.7.0.0
- version
- beta
- releases
- development
---

The first Beta version for PrestaShop 1.7.0.0 is now ready for you to test!

We are happy to announce that the development branch of version 1.7 has reached the Beta state, and we can’t wait to receive your feedback as a merchant, a service provider, a module developer or a theme designer.

[Test PrestaShop 1.7.0.0 Beta 1 now!](https://www.prestashop.com/en/developers-versions ){: .btn .btn-lg .btn-success}
{: .text-center}

<br/>

<iframe width="796" height="448" src="https://www.youtube.com/watch?v=nl2-de2Q4cA?rel=0" frameborder="0" allowfullscreen></iframe>

**PrestaShop 1.7.0.0 is still in development**, which means that this Beta release is a great opportunity for you to start working with it before we release a stable version!<br/>
Go download and install this Beta version as a test store, either on your machine or your web hosting, then play with it – and [give us your feedback](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!

<iframe width="796" height="448" src="https://www.youtube.com/embed/1z_AVPxu0uU?rel=0" frameborder="0" allowfullscreen></iframe>

The release of this first Beta version starts a period of intensive testing and debugging for the PrestaShop developers, with the help of the whole community: we need YOU to test this new version of PrestaShop.
Change the settings, browse the default theme, check if the modules that you created still work as-is (or with tiny design adaptations), etc. And most importantly, let us know about your findings!

[Test PrestaShop 1.7.0.0 Beta 1 now!](https://www.prestashop.com/en/developers-versions ){: .btn .btn-lg .btn-success}
{: .text-center}

Subsequent beta and RC versions will be released as needed, and we will post on this blog when this happens.


## What you need to know about PrestaShop 1.7.0.0

Regular readers of this PrestaShop Build devblog probably already know everything about the forthcoming 1.7 version, but here’s the gist of it, straight from [the 1.7 Project FAQ](http://build.prestashop.com/news/prestashop-1-7-faq/):

Version 1.7.0.0 is the next major release of PrestaShop, following version 1.6.1.0. This major version aims at simplifying the creation of a shop and product, and to facilitate the path to your first sale. It consists of four main projects:

 * A better way to create and maintain a theme:
   * A new default theme (classy and efficient).
   * A starter theme to help designers create a kick-ass theme in half the time it took with PrestaShop 1.6.
 * Improved key user journeys in the back office:
   * A new onboarding for beginners.
   * A simplified product-creation workflow.
   * Easily find installed and non-installed modules.
 * An improved administration interface menu structure, focused on getting the most common tasks done faster.
 * A new architecture, based on the Symfony2 framework.

There is no release date to announce for the stable version right now, other than “when it’s ready”.

If you have more questions, [the answer might just be in the FAQ already](http://build.prestashop.com/news/prestashop-1-7-faq/)!


## How to give feedback about Beta 1

Have you found a bug? A curious behavior? An unexpected reaction? Let us know! [Create a ticket on the 1.7 Forge project](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1), and give us as much details as possible!

Please note that we are not looking for feedback on the overall technical or design choices: Symfony2, the new theming system, the back office design and other global aspects of 1.7 are pretty much set in stone. However, do let us know about bugs or possible improvements!


## Updates since alpha 4

Here are the main changes since [the last public alpha version](http://build.prestashop.com/news/here-comes-prestashop-1-7-alpha-4/):

### Front office / default theme

 * [4310](https://github.com/PrestaShop/PrestaShop/pull/4310): Bots can now crawl the modules’ images. Thank you @gskema!
 * [5433](https://github.com/PrestaShop/PrestaShop/pull/5433): Added displayCMSDisputeInformation and displayCMSPrintButton hooks. Thank you @paeddl!
 * [5564](https://github.com/PrestaShop/PrestaShop/pull/5564): Implemented the minimum purchase amount.
 * [5621](https://github.com/PrestaShop/PrestaShop/pull/5621): FO performance are now up to 20% faster than with v1.6.1.4!
 * [5644](https://github.com/PrestaShop/PrestaShop/pull/5644): Customized products are now displayed as distinct products in shopping cart. Thank you unlocomqx!

### Back office

 * [3729](https://github.com/PrestaShop/PrestaShop/pull/3729): Added possibility to use POP3 server. Thank you @fredayko!
 * [3833](https://github.com/PrestaShop/PrestaShop/pull/3833): Customer messages are now private. Thank you @djbuch!
 * [4446](https://github.com/PrestaShop/PrestaShop/pull/4446): Role, Aria and Data HTML attributes are allowed in the editor. Thank you @mcdado!
 * [5528](https://github.com/PrestaShop/PrestaShop/pull/5528): Brand new notification system!
 * [5568](https://github.com/PrestaShop/PrestaShop/pull/5568): Price Rules tab is now called Discounts!
 * [5573](https://github.com/PrestaShop/PrestaShop/pull/5573): Introduced a default section for modules attached to a deprecated hook.
 * [5605](https://github.com/PrestaShop/PrestaShop/pull/5605): Attributes list are displayed in a combination tab.
 * [5612](https://github.com/PrestaShop/PrestaShop/pull/5612): Added an easier way to go to the Maintenance page while shop is turned off. Thank you @kpodemski!
 * [5645](https://github.com/PrestaShop/PrestaShop/pull/5645): The final price is now dynamically updated according to impact on price.

### Product page

 * [5436](https://github.com/PrestaShop/PrestaShop/pull/5436): Product page layout has been improved.
 * [5438](https://github.com/PrestaShop/PrestaShop/pull/5438): Product category can now be added on the fly.
 * [5451](https://github.com/PrestaShop/PrestaShop/pull/5451): Brand and Related Products options now have a delete button.
 * [5523](https://github.com/PrestaShop/PrestaShop/pull/5523): You can now make the selection of default combination of a product easier and see the impact on price.
 * [5549](https://github.com/PrestaShop/PrestaShop/pull/5549): Added bulk edit on combinations.

### Modules page

 * [5283](https://github.com/PrestaShop/PrestaShop/pull/5283): Modules can be sorted by last access date.
 * [5405](https://github.com/PrestaShop/PrestaShop/pull/5405): Module cards new display the module’s Addons score.

### Core

 * [5215](https://github.com/PrestaShop/PrestaShop/pull/5215): Debug Mode can now be enabled from the back office. Thank you @firstred!
 * [5381](https://github.com/PrestaShop/PrestaShop/pull/5381): Symfony’s dump() function now replaces ppp(), ddd(), etc.
 * [5502](https://github.com/PrestaShop/PrestaShop/pull/5502): displayOverrideTemplate now displays more details.

### Webservice

 * [3745](https://github.com/PrestaShop/PrestaShop/pull/3745): Added Order Messages to the API. Thank you @gleseur!


## What’s (still) in progress

Remember that this is the first Beta release of version 1.7.0.0: a lot of things are not ready yet, or are ready but not yet available. We are aware of it, and we are working on it right now.

We tried to gather the most important ones below, so that you have a clear idea of what still needs to be done. All of this will eventually be fixed for the stable version – and you can help with pull-requests on GitHub, and feedback of your own tests!

### Core

 * If your web hosting uses PHP-FPM, some links (and images) will not work.
 * Multistore & Advanced Stock Management aren’t yet connected to the Create a Product Page.
 * The header and navigation can vary (slightly) between pages.
 * Employees permissions are not yet suited for the new navigation in place
 * If a problem occurs while uploading a theme, we may not be able to tell you why currently :) In effect, errors and warnings are not fully set yet. And in any case, your 1.5-1.6 theme will NOT work with the new theme system (see the FAQ).

### Front office

 * The Classic theme needs to be made responsive.
 
### Back office

 * Some images are broken for now, some buttons and tab could behave in a weird way, and you might stumble on other weird artifacts. We know about this, and they will all be fixed in time for the stable release.
 * We’re still working on the responsiveness of the back office, and 13” screens could particularly be affected.
 * CSV Export can take up a lot of memory, and thus not work on some shared hosting.

### Product page

 * Entry-level shared hosting can get performance issues, sometimes culminating to a blank page. We are working on it, and are committed to address the issue.

### Modules page

 * We’re improving the modules discovery page: better sorting, more information, reworked categories, etc.

### Content

 * Interface copywriting is not final yet. Some parts need to be written, others are waiting for a rewrite and others are in proofreading.
 * Default products are still the ones used in version 1.6. Version 1.7 should have a brand new set of products.
 * Translations are on hold for now while we’re working on improving the system: the interface is only in English for now.

### Documentation

 * Contextual help still displays 1.6 documentation as we’re updating it to 1.7. Expect it to be final during our RC period -- once the 1.7 User Guide will be online!.
 * Technical documentation for modules & themes should follow the same timeline.


## Final note!

So cheers for this glance at the brand new 1.7, made with <3 by our team and our wonderful Community. It’s not fully baked yet, but we’re very proud of the work done.

[Test PrestaShop 1.7.0.0 Beta 1 now!](https://www.prestashop.com/en/developers-versions ){: .btn .btn-lg .btn-success}
{: .text-center}

We’ll closely monitor your feedback, and are eager to hear from you!

Happy testing!


