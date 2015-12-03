---
layout: post
title:  "An update on the 1.7 architecture"
subtitle: "What's happening in NewArchi land?"
date:   2015-12-03 12:00:00
author: xavierborderie
icon: icon-road
tags:
 - architecture
 - symfony
 - 1.7
---

Remember, back in May 2015, when we announced that we were building [a new architecture for PrestaShop](http://build.prestashop.com/news/new-architecture-1-6-1-0/), with the first bits of code landing in version 1.6.1.0 ([released in early July 2015](http://build.prestashop.com/news/1-6-1-0-released/))? Yeah, that was fun. But now that 1.7 is steaming ahead, it's time to let you know about our _updated_ plans about the new architecture...

A lot of things have changed since the release of 1.6.1.0. Let's try to address the different aspects of it.

<div class="alert alert-info" role="alert">
**Summary**

* PrestaShop 1.7 will introduce a brand new architecture, based on the Symfony Framework, along with its Twig templating engine.
* The new architecture will only be used in the back office for now, and at first (1.7) only for two pages of the back office: the Product page and the Modules page.
* The rest of the back office will still use the legacy architecture from 1.5-1.6 -- but they will be switched to the new architecture in later versions of PrestaShop
* The two architectures will coexist while we switch more back office pages to the new architecture, in a transition phase that will take a few versions of PrestaShop.
* Only modules that target the Product and Modules pages will need to see their templating code adapted.
 
Read on for more details!
</div>


#### Why does PrestaShop need a new architecture?

To put it bluntly: because the one currently in use is not getting any younger, and its age is really starting to show.

PrestaShop 1.5, released in mid-2012, was a huge overhaul of the codebase, introducing the multistore feature, the advanced stock management feature, a revised module API, and in general a Core rewritten in order to better follow MVC patterns. It was one heck of a ride, and while it took a few months to polish the features, the Community adopted it without hesitation.

PrestaShop 1.6, released in March 2014, kept most of the 1.5 architecture intact. Sure, it did introduce redesigned back- and front-office (both responsive, thanks to Bootstrap), as well as several great features such as the Dashboard with its KPIs, but the codebase behind it all remained by and large the same as the one introduced in version 1.5. It was nice to be able to tell the Community that their modules and themes should work as-is (or at least, with minimal adaptation).

All was fine and dandy, but even with the 1.5 rewrite, many parts of the code showed that they could use a more modern approach. Sure, it still did work as expected in 1.6, but already showed weaknesses here and there.

In 2015, while working on improving version 1.6 (which led us to v1.6.1.0), we took the decision to improve the situation: PrestaShop's code needs to be more robust, more modular, and fully testable. As it was, this wasn't easily possible in the 1.5-1.6 codebase. This led to a new architecture in v1.6.1.0, then once the 1.7 development was fully started, we made a few more tests and proofs-of-concepts.

We made our choice: **PrestaShop 1.7 will introduce Symfony2 in its Core codebase**. This major release will also be a great turn on the technical side of the application, but this change will be negotiated smoothly and over the long term: not everything will change with 1.7.

Since [SymfonyCon Paris](http://pariscon2015.symfony.com/) opens today, and the project is both celebrating [its tenth anniversary](http://blog.sensiolabs.com/fr/2015/06/25/sensiolabs_celebre_les_10_ans_de_symfony/) and [the release of Symfony 3.0](https://symfony.com/blog/symfony-3-0-0-released), this is a good time to finally publish this article :)


#### Why did we choose to use a framework rather than upgrading our code?

Introducing a framework was decided in order to eventually get rid of the "home-made framework" part of the application, and most notably of its maintenance workload, which consumes too much time and is not our core business features (managing a cart, handling orders, calculating prices and taxes, generating invoices, etc.).

Using a proven and popular open-source framework will allow us to focus on our core business code with greater efficiency, while enjoying the stability of a globally recognized framework.


#### Why did we choose to use Symfony2?

Because it's Symfony2, the new standard of PHP! It's really leading the way in terms of code quality and project popularity.

But we also took a look at other options:

* Lumen/Laravel:
  * It [uses Symfony components](http://symfony.com/projects/laravel), so it's one more layer over Symfony;
  * It brings a lot of services that are not really useful to us for now).
* Silex:
  * This is a minimalist framework, and then not really adapted to our needs.
  * No efficient route descriptor.
  * Based on [an old version of Symfony components](http://symfony.com/projects/silex), so one more layer over Symfony.
* Slim framework:
  * This is a small framework that is a better fit for small software.
  * It's maintained by a [very small team](https://github.com/orgs/slimphp/people), and has seen [little contribution in the past year](https://github.com/slimphp/Slim/graphs/contributors?from=2015-01-01&to=2015-12-01&type=c) (and [only two commits in since August](https://github.com/slimphp/Slim/graphs/contributors?from=2015-09-01&to=2015-12-01&type=c)).
  * The retro-compatibility seems to be broken each time a new version is published (2.0 to 3.0 without a lot of evolutions in 2.x, but no retro-compatibility from 3.0).
* Zend framework:
  * This framework is a big competitor to Symfony, but [its popularity is really waning](http://www.google.com/trends/explore?hl=en-US#q=Zend%20Framework%2C%20Symfony&cmpt=q&tz=Etc%2FGMT-1).
  * Moreover, the Zend framework comes as a huge monolith. It could be a choice for a full rewrite of the code, but that's bit an option right now.
* Yii framework:
  * It's also a monolith.
  * The community is quite small. Finding qualified developers to maintain the code will be very hard, both for ourselves and for PrestaShop agencies.


#### Which part of PrestaShop will be rewritten using Symfony?

PrestaShop 1.7 will not be 100% written in Symfony -- in fact, only a fraction of the codebase will use Symfony for this version. 
We chose to follow a smoother transition patch: only the back office will be affected for now, and even then, we chose to focus the 1.7 effort on two pages -- but two important ones: the Product page and the Modules page. Over the following versions of PrestaShop, each new Admin page will be switching to the new Symfony-based architecture.

The rewrite is not just behind-the-scene: along with the new architecture, we're also revamping the design of the whole back office, and of these two pages in particular in order to improve the key user journeys within the interface.
Our aim is to rework the navigation menu in order to make it clearer, ease the creation of products, and facilitate the discovery of modules. We are also planning a new onboarding, to help beginners set up their first store. More on that later!

There is no deeper integration of the framework for now: the object model and tools (notably those used by the modules) are still here. Only hooks called for the pages that have been switched (Products and Modules in 1.7, some others in later versions) will have to be adapted, because the interface will have changed, and the hooks' parameters will have evolved a bit.


### Will we switch from Smarty to Twig?

[Twig](http://twig.sensiolabs.org/) is Symfony's templating language. In version 1.7, it will be used for all pages that are rewritten to use Symfony (Product page and Modules page), but NOT for the global interface (menu, header, etc.) nor the non-rewritten pages, which will still use Smarty. The two templating engines will be available, side by side, during the transition phase.

Later versions of PrestaShop will have more back office pages rewritten to use Symfony, and thus using Twig. Eventually, the whole back office is expected to be use Twig.


### Will the 1.6 modules still work?

In PrestaShop 1.7, Symfony will only be used for back office-specific features. Consequently, the only impacts on the 1.7, for contributors and developers, will be limited to an adaptation of hooks on the Products and Modules page. Modules targeting the other pages should not need to be adapted.

Module developers won't need to develop in Symfony for now: the module API remains mostly the same, and Smarty is still used in non-rewritten pages. It _will_ be necessary to use Symfony's Twig templating engine for modules that target the rewritten pages, but the core code of the module should remain the same.

For the Product page in particular, we intend to have a switch button that will allow merchants to switch between the Legacy/Smarty version and the Symfony/Twig version. This is still being worked out, but it would allow the 1.6 modules which target that page to still work in 1.7, Smarty and all. That would give more time to developers to adapt their 1.6 modules.


### Will the 1.6 themes still work?

PrestaShop 1.7 introduces a rethinking of the way themes work. This is not tied to new architecture nor to Symfony, but to [the new Starter Theme](http://build.prestashop.com/news/starter-theme-kickoff/) and the best practices it follows.

Consequently, there's a high chance 1.6 themes will NOT work on 1.7.


### What about...?

Have more questions about the new architecture or anything related to PrestaShop 1.7? We have created [a dedicated forum for that](https://www.prestashop.com/forums/forum/273-170x-in-development/). See you there!
