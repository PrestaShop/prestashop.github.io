---
layout: post
title:  "Everything you need to know about PrestaShop 1.7.0.0"
subtitle: "...but were afraid to ask -- a.k.a. the 1.7 FAQ"
date:   2016-02-11 19:00:00
author:  xavierborderie
icon: icon-chat-alt
tags: [1.7]
---

The development team is hard at work on PrestaShop 1.7, making sure the first beta contains everything they want it to be. We’re approaching the day when we can release this beta version, and it is therefore high time that we’d answer the questions that we received about this new major version.

<div class="alert alert-note" role="alert">
Note that this article aims to compile the latest news about 1.7, and will therefore be updated as new information is confirmed.

Current version of this FAQ: 1.0.

Changelog for this FAQ:

* 1.0: First release.
</div>


## General questions

### When is version 1.7.0.0 going to be released?

We are aiming to deliver a first beta of 1.7.0.0 in the coming weeks. There is no set date, yet, other than “when it’s ready”.

The release of the beta version will start a period of heavy testing and debugging phase for the whole community: we will NEED you to test this new version of PrestaShop, to check if your modules still work as-is… and to possibly rewrite your theme using the new, improved theme system.


### What will be in PS 1.7?

Version 1.7.0.0 is a major release which aims at simplifying the creation of a shop and the path to your first sale. It consists of four main projects:

* A new architecture, based on the [Symfony2 framework](https://symfony.com/),
* A better way to create and maintain a theme:
  * New starter theme to help designers create a kick-ass theme in a week,
  * New default theme (classy and efficient).
* An improved key user journeys in the back office:
  * Create a new onboarding for beginners,
  * Simplify the product creation workflow, 
  * Easily find installed and non-installed modules.
* An improved administration interface menu structure, focused on getting the most common tasks done faster.


### Should I wait for PrestaShop 1.7 to create my store, or create it now with version 1.6?

Version 1.6 is currently your only stable choice. It will be maintained and supported for several months once the stable version of PrestaShop 1.7 is released, so that should give you enough time to work your way from version 1.6 to version 1.7 -- once you think you are ready to upgrade.


### Will it be easy to upgrade from previous versions of PrestaShop to v1.7?

In short: **no**, it won't. You can upgrade, but be prepared to have to adapt or replace many of your addons (theme, modules).

Now for the longer answer. PrestaShop 1.7.0.0 is a major version not because it packs a lot of sweet changes, but also in the [SemVer](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) sense of the term: it breaks some of the backward compatibility. If it didn’t, we probably would have called it 1.6.2.0.

For starters, no 1.6 theme will work on 1.7. That’s a definite. We rewrote the way themes are made, and theme designer will be delighted to find in the new Starter Theme a solid foundation for their own themes. With this foundation, new themes can be created in half the time it took you to create a 1.6 theme.

Now, about modules. All well-written 1.6 modules should work with little to no changes in 1.7, except:

* those which target the theme/front office -- because we rewrote the way themes are written.
* those which target the Product page -- because we rebuilt it with Symfony2 and its Twig template engine.
* those which target the Modules page -- again, because we rebuilt it with Symfony2 and its Twig template engine.

What this means for any upgrade is that in order for a PS 1.6 to migrate to PS 1.7, you (or your agency) will have to:

* Rewrite the theme, ideally using the Starter Theme.
* Adapt the Product page modules.
* Adapt the Modules page modules.
* Test all the other modules.
 
In any case, we advise you to make sure that your module does work in PrestaShop 1.7.

_We are currently thinking up ways to ease the upgrade path -- for instance, a tool to take the 1.6 store, import all of its data and images into 1.7, and end up with a default store (default 1.7 theme, default 1.7 native modules) with the 1.6 data and settings. This is still a project more than actual working source code, but you get the idea._


### Should PrestaShop 1.6 owners invest time and money into upgrading her shop to 1.7?

Upgrading to 1.7 will not be an easy task (see above). Since PrestaShop 1.6 has a rich ecosystem, we would completely understand if a merchant chose to stay with 1.6 for the time being -- at least until all her modules are compatible with 1.7.<br />
Also, PrestaShop 1.6 will continue to receive security updates for several months, so there is no rush. As a developer, your rush should be in creating/updating modules and themes: there is a lot of opportunities to be found in the PrestaShop 1.7 ecosystem!

So, we won't force you to upgrade. For new stores though, 1.7 will be a treat! 

For merchants: 

* the reworked UI and optimized menu structure will provide a better daily flow, 
* the Product page has been rethought,
* the Modules page as well,
* awesome default theme to get you started. 

For developers: 

* the Starter Theme will make it way easier to create a brand new theme, 
* the widget system, PHP namespaces and other PHP 5.4 niceties (along with performances), 
* the ability to call the whole Symfony stack for you module's needs, 
* etc.


### What are system requirements for v1.7?

Nothing is set in stone yet (and we won't have proper benchmarks before the first beta version), but you can bet it will at least be the same as for Symfony 2.8. Also, we announced that PrestaShop was moving to PHP 5.4. As for server configuration, well, let's just say "the more the better" for now, but in any case, it will most definitely be higher than for 1.6.


### Where is the development source code for PS 1.7?

The bulk of the 1.7 work is being done on [the ‘develop’ branch of the PrestaShop GitHub repository](https://github.com/PrestaShop/PrestaShop/tree/develop ).
You can download it and test it right now!


### How do I install the development version available on GitHub?

Read the [“Installation” section of the README.md file](https://github.com/PrestaShop/PrestaShop/blob/develop/README.md#installation).<br/>
In short: you will need to install and use Composer, npm and Grunt in order to compile the project into a single installable instance.

This is only while we're developing it -- and while the community is testing it and contributing to it. The stable version will be packaged in such a way that any user will be able to just upload and install the software, just like you did with previous versions.


## New architecture

### Why is Symfony being introduced?

The driving idea behind this project is that we want our code to be more robust, more modular, and fully testable. The current architecture, inherited from version 1.5 and years of PrestaShop development, is not getting any younger, and its age is really starting to show.

Using a proven and popular open-source framework will allow us to focus on our core business code (managing a cart, handling orders, calculating prices and taxes, generating invoices, etc.) with greater efficiency, while enjoying the stability of a globally recognized framework.

Using Symfony will also reduce the learning curve for PHP developers that are not yet familiar with PrestaShop, helping develop our great community even further.


### Where will Symfony be introduced?

The new architecture will only be used in the back office for now, and at first (1.7.0.0) mainly for two pages of the back office: the Product page (and the product catalog) and the Modules page.

The rest of the back office will still use the legacy architecture from 1.5-1.6 – but they will be switched to the new architecture in later versions of PrestaShop.

The two architectures will coexist while we switch more back office pages to the new architecture, in a transition phase that will take a few versions of PrestaShop.


### Why Symfony 2 and not 3?

In effect, PS 1.7 should be able to work with Sf3, but for now we're targeting the current LTS of Symfony2. We may target Sf3 in a later version.


## Theming changes

### Are the planned changes going to break everything?

To be honest, it is likely. But it’s a necessary evil. We have specific plans related to the Starter Theme and we do not want to sacrifice good software design in favor of backward compatibility.


### What’s a Starter Theme?

We call Starter Theme a minimal PrestaShop theme: it is feature-complete but has no styling, nothing to take away.
But wait… no styling?! It might not be perfect for a customer, sure, but it should be perfect for a designer as turning the Starter Theme into a real, production-ready theme will be very easy.


### Will the Starter Theme use Bootstrap?

We’re not imposing anything, so no Bootstrap needed in the Starter Theme. 
On the other hand, the default theme, built upon the Starter Theme foundations, will make use of Bootstrap 4.


### What will be the impact of 1.7 on the 1.6 themes?

Since the way themes are created has been completely rebuilt from the ground up, the themes will need to be rewritten.


### Do themes still use Smarty, or do they now need Twig (Symfony’s templating system)?

The Starter Theme and the default 1.7 theme use Smarty -- but contrary to the 1.5-1.6 theme system, PS 1.7 uses Smarty as a templating engine, not as a programming language, so developers should really appreciate the change :)


### What’s the story about a UI KIt?

Oh, you heard about the 1.7 UI Kit? Great!
We built a whole UI Kit for the back office PrestaShop 1.7, and are making it publicly available so that designers and developers can build interfaces which are consistent in style with the administration interface.

Check its reference documentation here: [http://build.prestashop.com/prestashop-ui-kit/](http://build.prestashop.com/prestashop-ui-kit/)<br />
Check its code here: [https://github.com/PrestaShop/prestashop-ui-kit](https://github.com/PrestaShop/prestashop-ui-kit)

Note that it is still a work in progress, and should not be considered stable until 1.7 is released.


### Where is the 1.7 Designer documentation?

The Designer documentation is being worked on. Since the way themes work is still being worked on until we reach beta phase, it will not be released before the API is fully stabilized.
In the meantime, we advise you to dive into the code of [the new default theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic) (currently named “Classic”).


## Module changes

### What will be the impact of Symfony for modules contributors?

Directly, the impact will be very limited, because Symfony will only be used for back office-specific features for now. 

There will be some impacts for modules which target the Product and Module pages but those impacts are not linked to Symfony. You can either use Smarty or Symfony’s Twig templating engine for modules that target the rewritten pages (hooks are executed in the legacy environment, then retrieve for Symfony to use), but the core code of the module should remain the same.

Modules which target the theme will also need to be adapted to the new way themes work in 1.7. 


### Will there be any impact on the payment modules?

We made a change in the payment API, the explanation and an example are available in Build: [see this article](http://build.prestashop.com/news/starter-theme-news-3/#payment-api).
You can find a sample payment module here: [https://github.com/PrestaShop/paymentexample](https://github.com/PrestaShop/paymentexample).


### Will PrestaShop 1.7 remove deprecated code, hook_alias , etc.

A lot of deprecated code is being removed, yes. I can't tell you precisely, but you can [join the conversation on Gitter](https://gitter.im/PrestaShop/General)!
You can an idea of what has been done [in this article](http://build.prestashop.com/news/product-page-evolution/#developers-beware ).


### Is there any change planned to the override system?

PrestaShop 1.7 introduces the use of namespaces with its new architecture, and in short, anything that has namespaces cannot be overridden.<br />
The legacy architecture can still be overridden, though. But in general, we advise against overriding code. It is better to extend it.<br />
Also, overrides are currently forbidden in the Symfony-based pages (namely, the Product page and the Modules page).

Overrides are a nice system to have, but the issue with it is that it is an uncontrolled extension system. We are working on a carefully planned process that will allow developers to extend the PrestaShop code in a much cleaner way. We will soon write about it on this blog, but the gist of it could be that the developer team would integrate your needs for overrides in the next version of PrestaShop -- kind of what polyfills do for HTML5 features :) In short, you tell us what you need, and while we include it in the next version, you can use an override.


### Is there a list of all the modules impacted by the changes made on the BO product page?

We wrote a special parser which analyzed all the modules in the PrestaShop Addons catalog in order to find the ones which might not work as expected. The result of this analysis will be published in another article -- possibly next week.


### Is there a list of all the modules impacted by the changes made for the Starter Theme?

All the 1.6 modules targeting the theme will likely be impacted (to various degrees) by the changes and need to be adapted for 1.7. From the moment your module targets the theme, it will have to be updated.<br />
We will soon publish a guide on what to look for when updating your module.


### Where is the 1.7 Developer documentation?

The Developer documentation is being worked on, and the main topics should have their pages up during the beta phase. We hope to have it land in GitHub, so that the community can participate in its improvement.<br />
In the meantime, we advise you to dive into the code of this 1.7-specific module: [https://github.com/PrestaShop/paymentexample](https://github.com/PrestaShop/paymentexample ).
