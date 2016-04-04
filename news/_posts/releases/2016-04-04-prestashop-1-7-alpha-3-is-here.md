---
layout: post
title:  "Test PrestaShop 1.7.0.0 alpha 3 now!"
subtitle: "This is your chance to contribute!"
date:   2016-04-04 02:30:00
author: [ xavierborderie , quentinau ]
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

Here it is. After two internal alpha versions, we’re happy to present to you this public alpha release of PrestaShop 1.7.0.0 -- the first in a series of public alpha/beta/RC versions that we intend to release over several weeks, in order to gather feedback and make sure that the final and stable version is the best it can be!

![PrestaShop 1.7 Alpha 3 Release](/assets/images/2016/04/Badge1.7-Color.png)

Here is your chance to dive into what’s coming in 1.7:

* An improved back office interface and menu,
* A brand new Product page and Modules page,
* A brand new default theme and a new way of building themes,
* An overall stronger codebase thanks to the implementation of the Symfony 2 framework and PHP 5.4.

Have a go at it!

<div class="alert alert-important" role="alert">
While this alpha version is not ready for production stores, it is a great base for us to get your feedbacks.

We’re are still working on some features and know some parts are broken. <a href="http://build.prestashop.com/news/prestashop-1-7-alpha-3-is-here/#whats-in-progress">Check out the list in this article</a>.
</div>

Let’s insist on this: this is NOT the stable version of PS 1.7, and IT SHOULD NOT BE USED IN PRODUCTION. Do not create a new store with this alpha version, it is by definition not finished yet.

You SHOULD however install this alpha version as a test store, either on your machine or your web hosting, and play with it -- and give us your feedback!

The release date for the stable version is not yet set, so you have a few weeks and beta/RC versions ahead of you!

[Test PrestaShop 1.7.0.0 alpha 3](https://www.prestashop.com/fr/versions-developpeurs){: .btn .btn-lg .btn-success}
{: .text-center}


## How to give feedback

Have you found a bug? A curious behavior? An unexpected reaction? Let us know! [Create a ticket on the 1.7 Forge project](http://forge.prestashop.com/secure/CreateIssue!default.jspa?selectedProjectId=11322&issuetype=1), and give us as much details as possible!

Please note that we are not looking for feedback on the overall technical or design choices: Symfony2, the new theming system, the back office design and other global aspects of 1.7 are pretty much set in stone. However, do let us know about bugs or possible improvements!


## What’s coming in 1.7.0.0

The [1.7 Project FAQ](http://build.prestashop.com/news/prestashop-1-7-faq/) helpfully gives you the areas where 1.7 has seen the most work done:

* A better way to create and maintain a theme:
	* New starter theme to help designers create a kick-ass theme in much less time than before,
	* New default theme: clean, efficient, and easy to extend.
* Improved key user journeys in the back office:
	* Welcome first-time users with a new onboarding system,
	* Simplify the product creation workflow,
	* Easily find installed and non-installed modules.
* An improved administration interface menu structure, focused on getting the most common tasks done faster,
* A new architecture, based on the [Symfony2 framework](https://symfony.com/).

Several articles were published on this blog about the various projects surrounding 1.7. You can find a full list on [this forum post](https://www.prestashop.com/forums/topic/480580-want-to-know-more-about-17/).


## What’s in progress

Remember that this is alpha 3: a lot of things are not ready yet, or are ready but not yet available.

We tried to gather the most important ones, so you have a clear idea of what still needs to be implemented. All of this will eventually be fixed for the stable version -- and you can help with pull-requests on GitHub, and feedback of your tests!


### CORE

* If your web hosting uses PHP-FPM, some links (and images) will not work.
* Multistore & Advanced Stock Management aren’t yet connected to the Create a Product Page.
* The header and navigation can vary (slightly) between pages.
* Employees permissions are not yet suited for the new navigation in place
* If a problems occurs while uploading a theme, we may not be able to tell you why currently :) In effect, errors and warnings are not fully set yet. And in any case, your 1.5-1.6 theme will NOT work with the new theme system.


### FRONT OFFICE

* Quick view is still a work in progress and may have bugs (adding to cart for example)
* Some links may be broken during your navigation on the shop


### BACK OFFICE

* Some images are broken for now, some buttons and tab could behave in a weird way, and you might stumble on other weird artefacts. We know about this, and they will all be fixed in time.
* We’re still working on the responsiveness of the back-office, and 13” inches screens could particularly be affected.


### MODULE PAGE

* The “disable on mobile” option will be reintroduced in a later beta version
* We’re improving the modules discovery page: better sorting, more information, reworked categories, etc.


### CONTENT

* Interface copywriting is not final yet. Some parts need to be written, others are waiting for a rewrite and others are in proofreading.
* Default products are still the ones used in version 1.6. Version 1.7 should have a brand new set of products.
* Translations are on hold for now while we’re working on improving the system: the interface is only in English for now.


### DOCUMENTATION

* Contextual help still displays 1.6 documentation as we’re updating it to 1.7. Expect it to be final during our RC period.
* Technical documentation for modules & themes should follow the same timeline.


## Final note!

So cheers for the first public glance at the brand new 1.7, made with <3 by our team and our wonderful Community. It’s not fully baked yet, but we’re very proud of the work done.

[Test PrestaShop 1.7.0.0 alpha 3](https://www.prestashop.com/fr/versions-developpeurs){: .btn .btn-lg .btn-success}
{: .text-center}

We’ll closely monitor your feedback and are eager to hear from you!

Happy testing!
