---
layout: post
title:  "Everything you need to know about PrestaShop 1.7.0.0"
subtitle: "...but were afraid to ask -- a.k.a. the 1.7 Project FAQ"
date:   2016-02-11 17:00:00
author:  xavierborderie
icon: icon-chat-alt
tags: [1.7]
---

The development team is hard at work on PrestaShop 1.7, making sure the first beta contains everything they want it to be. We’re approaching the day when we can release this beta version, and it is therefore high time that we’d answer the questions that we received about this new major version.<br/>
<br/>
<i>Update: [Beta 2 was released on July 18th, 2016](http://build.prestashop.com/news/prestashop-17-beta2/)! [Test is now](https://www.prestashop.com/en/developers-versions)!</i>

<div class="alert alert-note" role="alert">
<p>Note that this article aims to compile the latest news about 1.7, and will therefore be updated as new information is confirmed.</p>
</div>

<div class="alert alert-important" role="alert">
<p>PrestaShop 1.7 is a work in progress, and is currently still under development!

You can <a href="https://www.prestashop.com/en/developers-versions">download and test PrestaShop 1.7.0.0 Beta 2 right now</a>!
</p> 

<p>This FAQ gives you the current state of 1.7, not the final one, and we're only in beta :)</p>

<p>Current version of this FAQ: 1.5. <br/>
The changelog is at the bottom of the FAQ.</p>
</div>

* TOC
{:toc}


## General questions

### When is version 1.7.0.0 going to be released?

The first Beta version was released on June 2nd, 2016; the second one on July 18th. There is currently no set date for the stable release, yet, other than “when it’s ready”.

The release of this second Beta version is another important milestone in the current period of intensive testing and debugging by the PrestaShop developers.<br/>
While all hands are on deck, we couldn't do it without the help of the whole community: we need YOU to test this new version of PrestaShop.<br/>
Change the settings, browse the default theme, check if the modules that you created still work as-is (or with tiny design adaptations), etc. And most importantly, let us know about your findings!<br/>
[Update your module's code if needs be](http://build.prestashop.com/news/module-development-changes-in-17/), and check out the [current theme documentation](https://github.com/PrestaShop/docs/blob/master/TABLE%20OF%20CONTENT.md) (still in Beta too - [let us know if something is amiss](https://github.com/PrestaShop/docs/issues)!)


### What will be in PS 1.7?

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


### Should merchants wait for PrestaShop 1.7.0.0 to create their stores, or create it now with version 1.6?

Version 1.6 is currently your only stable choice. It will be maintained and supported for several months once the stable version of PrestaShop 1.7 is released, so that should give you enough time to work your way from version 1.6 to version 1.7 -- once you think you are ready to upgrade.


### Will it be easy to upgrade from previous versions of PrestaShop to v1.7?

In short: **no**, it won't. You _can_ upgrade, but be prepared to have to adapt or replace many of your addons (theme, modules).

Now for the longer answer. PrestaShop 1.7.0.0 is a major version not only because it packs a lot of sweet changes, but it is also major in the [SemVer](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) sense of the term: it breaks some of the backward compatibility. If it didn’t, we probably would have called it 1.6.2.0.

For starters, 1.6 themes will not work on 1.7. That’s a definite. We rewrote the way themes are made, and theme designers will be delighted to find in the new Starter Theme a solid foundation for their own themes. With this foundation, new themes can be created in half the time it took you to create a 1.6 theme.

Now, about modules. All well-written 1.6 modules should work with little to no changes in 1.7, except:

* Those which target the theme/front office -- because we rewrote the way themes are written.
* Those which target the Product page -- because the DOM of this page has changed.
* Those which target the Modules page -- again, because the DOM of this page has changed.

What this means for any upgrade is that in order for a PS 1.6 to migrate to PS 1.7, you (or your agency) will have to:

* Rewrite the theme, ideally using the Starter Theme or the default theme.
* Adapt the Product page modules (CSS and JavaScript).
* Adapt the Modules page modules (CSS and JavaScript).
* Test all the other modules -- as you would for any new release.
 
In any case, we advise you to make sure that your module does work in PrestaShop 1.7.

_We are currently thinking up ways to ease the upgrade path -- for instance, a tool to take the 1.6 store, import all of its data and images into 1.7, and end up with a default store (default 1.7 theme, default 1.7 native modules) with the 1.6 data and settings. This is still a project more than actual working source code, but you get the idea._


### Should PrestaShop 1.6 owners invest time and money into upgrading her shop to 1.7?

Upgrading to 1.7 will not be an easy task (see above). Since PrestaShop 1.6 has a rich ecosystem, we would completely understand if a merchant chose to stay with 1.6 for the time being -- at least until all her modules are compatible with 1.7.<br />
Also, PrestaShop 1.6 will continue to receive security updates for several months, so there is no rush. As a developer, your rush should be in creating/updating modules and themes: there is a lot of opportunities to be found in the PrestaShop 1.7 ecosystem!

So, we won't force you to upgrade. For new stores though, 1.7 will be a treat! 

For merchants: 

* The reworked UI and optimized menu structure will provide a better daily flow, 
* The Product page has been rethought,
* The Modules page as well,
* The awesome default theme to get you started. 

For developers: 

* The Starter Theme will make it way easier to create a brand new theme, 
* The widget system, PHP namespaces and other PHP 5.4 niceties (along with performances), 
* The ability to call the whole Symfony stack for you module's needs, 
* etc.


### What are the benefits of 1.7 for developers?

For module developers, most new features are under the hood, and inaccessible for now. But if you are starting a PrestaShop project now, you should most definitely use 1.7. Right now, it's obviously less production-tested than 1.6 but it will catch up fast -- in no small part thanks to your feedback! 

For theme developers, if you need to implement a specific design for a customer you will save a lot of time with 1.7.


### What are system requirements for v1.7?

Nothing is set in stone yet (and we won't have proper benchmarks before the first beta version), but you can bet it will at least be [the same as for Symfony 2.8](http://symfony.com/doc/2.8/reference/requirements.html). Also, we announced in June 2015 that [PrestaShop was moving to PHP 5.4](http://build.prestashop.com/news/Dropping-support-php52-and-53/). 

As for server capability, well, let's just say "the more the better" for now, but in any case, it will most definitely be higher than for 1.6.


### Where is the development source code for PS 1.7?

The bulk of the 1.7 work is being done on [the ‘develop’ branch of the PrestaShop GitHub repository](https://github.com/PrestaShop/PrestaShop/tree/develop).<br/>
You can download it and test it right now -- and [give us feedback](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1)!


### Can anyone install the development version, available on GitHub?

Read the [“Installation” section of the README.md file](https://github.com/PrestaShop/PrestaShop/blob/develop/README.md#installation).

In short: you will need to install and use [Composer](https://getcomposer.org/) (and possibly [npm](https://nodejs.org/en/) and [Grunt](http://gruntjs.com/)) in order to compile the project into a single installable instance. [Webpack](https://webpack.github.io/) is another tool used for the development of v1.7.

This is only for the development version. Any [publicly-released deverlopment version](https://www.prestashop.com/en/developers-versions) is packaged in such a way that any user is able to just upload and install the software, just like you did with previous versions.


### Why is it not named PrestaShop 2.0, since you are rewriting everything?

First of all, we are not rewriting everything! Indeed, if we had, it would be called 2.0 :)

PrestaShop 1.7 is an evolution from version 1.6.1.0, [which introduced a new architecture](http://build.prestashop.com/news/new-architecture-1-6-1-0/), in order for the codebase to be more modular, more robust and more testable. Version 1.7 goes further than 1.6.1.0 did by choosing to use the [Symfony 2.8 framework](https://symfony.com/).

Not everything is rewritten using Symfony, though! Only a couple of pages are (the Product page and the Modules page), and they still work fine with pre-1.7 modules -- albeit with a necessary design adaptation, as happened in all major version of PrestaShop before, only this time [we provide a UI Kit](http://build.prestashop.com/prestashop-ui-kit/) to help developer easily have a concistent style for their module screens!

Since this is a major version and not a full rewrite, we followed [the path imposed by the versioning norm we adopted in June 2015](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/), which is adapted from the much-used [SemVer specification](http://semver.org/).


## New architecture

### Why is Symfony being introduced?

The driving idea behind the 1.7 project is that [we want our code to be more robust, more modular, and fully testable](http://build.prestashop.com/news/new-architecture-1-6-1-0/). The 1.6 architecture, inherited from version 1.5 and years of PrestaShop development, is not getting any younger, and its age is really starting to show.

Using a proven and popular open-source framework will allow us to focus on our core business code (managing a cart, handling orders, calculating prices and taxes, generating invoices, etc.) with greater efficiency, while enjoying the stability of a globally recognized framework.

Using Symfony will also reduce the learning curve for PHP developers that are not yet familiar with PrestaShop, helping grow our developer community even further.


### Where will Symfony be introduced?

The new architecture will only be used in the back office for now, and at first (1.7.0.0) mainly for two screens of the back office: the Product page (and the product catalog) and the Modules page.

The rest of the back office will still use the legacy architecture from 1.5-1.6 – but they will eventually be switched to the new architecture in later versions of PrestaShop, one screen after the other.

The two architectures will coexist while we switch more back office pages to the new architecture, in a transition phase that will take a few versions of PrestaShop. So, you can expect the forthcoming versions to follow the same path, converting more back office screens to Symfony.


### Why Symfony 2 and not 3?

Symfony started as the 2.8 version, without the backward-compatibility code. Therefore, PrestaShop 1.7 should be able to work with Symfony 3 once it is released, but for now we're targeting the current LTS of Symfony 2, version 2.8.6. We may target version 3 in a later version of PrestaShop.


## Theming changes

### Are the changes to the theme system going to break everything that existed in v1.6?

To be honest, yes. It’s a necessary evil. We have specific plans related to the Starter Theme (read below), and we do not want to sacrifice good software design in favor of backward compatibility.


### What’s a Starter Theme?

We call [Starter Theme](https://github.com/PrestaShop/StarterTheme/) our minimal PrestaShop 1.7 theme: it is feature-complete but has no styling, and thus nothing to take away.<br/>
But wait… no styling?! It is not to be used as-is, for sure, but it should be perfect for a designer: turning the Starter Theme into a real, production-ready theme will be very easy, and much faster than before.


### Should 1.7 themes be built with Bootstrap?

In depends on the context. <br/>
If you're building a brand new store with a custom-made theme and modules, then you can use whatever fits your needs.<br/>
If you're creating a theme in order to sell it on the [PrestaShop Addons marketplace](http://addons.prestashop.com/), then you MUST use Bootstrap.

Why are we imposing Bootstrap for Addons?<br/>
We are very aware that the PrestaShop ecosystem is used to relying on the Bootstrap framework for both its themes and modules, and we do not want to break this expectation with the release of PS 1.7. We want to make sure that users who buy themes or modules from the community can always rely on their compatibility: we do not want to have merchants be confused over whether the module they chose for their shop works with their theme or not. 

Themes and front office modules from the Addons marketplace should work well together out of the box, and therefore should use the same CSS framework.<br/>
This is why the PrestaShop Addons marketplace will only accept 1.7 themes that use Bootstrap, and will refuse themes that do not. The theme validator will be updated accordingly.


### Will the Starter Theme or the default theme use Bootstrap?

We’re not imposing anything in the Starter Theme, so Bootstrap is not needed. Feel free!<br/>
That being said, the Addons marketplace will ony accept theme which rely on Bootstrap, so if you intend to sell your creation on Addons, you'd better use it.

The default theme, built upon the Starter Theme foundations, will make use of Bootstrap 4.

You might wonder why the Starter Theme is not simply using Bootstrap by default. That's because the two themes have different purposes.<br/>
The Starter Theme is built for developer, agencies, and all those who build a PrestaShop store from scratch. They can choose the framework they want, and should not feel constrained by our choices. They can add Bootstrap to the Starter Theme, but that's their choice when tailoring a theme for a client. The audience of the Starter Theme is therefore much wider than that of Addons contributors.<br/>
The default theme is built first and foremost for merchants, and must work within our existing community, which relies a lot on Bootstrap. The PrestaShop Addons marketplace has heaps of Bootstrap-based modules (because they were built to work well with the 1.6 default theme, based on Bootstrap already), and therefore it is in the best interest of the community that we should make sure Addons-sold modules and themes are consistent in their choice of CSS framework. Therefore, on Addons, Bootstrap it is.


### Why is the 1.7 default theme switching to one `theme.js` and one `theme.css` file for the whole site?

PrestaShop used to send many files to the browser, for every page: `global.js`, `jquery.js`, `jquery-plugin-foobar.js`, etc. Then, each page had its own set of specific JavaScript files: `product.js`, `cms.js`, `category.js`, etc. Finally, modules added their own JS. It was a useless mess: something like 30 core JS files and one file per module.

With 1.7, we just concatenate these files into a single minified `theme.js` file using Webpack. Then, modules are free to add their own files, after a single core JS file instead of 30. From there on, the browser's cache does its job.

Finally, both the default theme's `theme.css` and `theme.js` file are MUCH smaller than their 1.6 counterparts (even minified).

So the new theme's JS/CSS files are both fewer (less HTTP queries!) AND smaller. Yay!


### What will be the impact of 1.7 on the 1.6 themes?

Since the way themes are created has been completely rebuilt from the ground up, the themes will need to be rewritten.


### Do themes still use Smarty, or do they now need Twig (Symfony’s templating system)?

The Starter Theme and the default 1.7 theme use Smarty -- but contrary to the 1.5-1.6 theme system, PS 1.7 uses Smarty as a templating engine, not as a programming language, so developers and designers should really appreciate the change :)

Most of the work on the new default theme and the 1.7 theme system has been in extracting all the business logic from the templates and a lot of business logic from controllers too. It makes it a much better foundation than the 1.6 system for further improvements. 


### What’s the story about a UI Kit?

Oh, you heard about the 1.7 UI Kit? Great!<br/>
We built a whole UI Kit for the back office PrestaShop 1.7, and are making it publicly available so that designers and developers can build interfaces which are consistent in style with the administration interface.

Check its reference documentation here: [http://build.prestashop.com/prestashop-ui-kit/](http://build.prestashop.com/prestashop-ui-kit/)<br />
Check its code here: [https://github.com/PrestaShop/prestashop-ui-kit](https://github.com/PrestaShop/prestashop-ui-kit)

Note that it is still a work in progress, and should not be considered stable until 1.7 is released. It currently only works in the new back office pages: the Product page and the Modules page.


### Where is the 1.7 Designer documentation?

The Designer documentation is being worked on. Since the way themes work is still being worked on until we reach beta phase, it will not be released before the API is fully stabilized. [The current draft is available on GitHub](https://github.com/PrestaShop/docs), and you can contribute!

In the meantime, we advise you to dive into the code of [the new default theme](https://github.com/PrestaShop/PrestaShop/tree/develop/themes/classic) (currently named “Classic”).


## Module changes

### What will be the impact of Symfony for modules contributors?

Directly, the impact will be very limited, because Symfony will only be used for back-office-specific features for now -- meaning that only the Core of PrestaShop will have access to it. 

There will be some impacts for modules which target the Product and Modules pages, but those impacts are not linked to Symfony. You can either use Smarty or Symfony’s Twig templating engine for modules that target the rewritten pages (hooks are executed in the legacy environment, then retrieved for Symfony to use), but the core code of the module should remain the same.

Modules which target the theme will also need to be adapted to the new way themes work in 1.7. 


### Will 1.6 module still work with PrestaShop 1.7?

Modules built for PrestaShop 1.6 will mostly still work with 1.7 (apart from payment modules, which have seen an small API change -- see two sections below). Their presentation code will probably have to be reworked (to different extents depending on the module) in order to look good.

You can think of this side effect in the same way as if we only refactored the Product page to a new design/CSS in a regular major version: the modules’ JavaScript and CSS code would have to be adapted in the same way.

While the Developer Doc is being updated to 1.7, you can read [this article about module development changes in PS 1.7.0.0](http://build.prestashop.com/news/module-development-changes-in-17/).


### Is PrestaShop 1.7 switching from Smarty to Twig?

There used to be one default templating engine in PrestaShop 1.5-1.6: Smarty.

There are now two templating engines available in 1.7: Smarty and Symfony's Twig.

This is how they are used:

* Front office themes are written in Smarty,
* New back office pages are written in Twig. 
* Legacy ones are still written in Smarty.

Modules (both front office and back office) can use whatever template engine they want (pure PHP, Smarty, Twig, [Jade](http://jade-lang.com/), etc.), as was already possible in 1.6 -- even though the default template engine is Smarty and using another one will require a bit of work from the developer (like, 5 lines of code). 

So, module developers can use any of the two that are provided by default by PrestaShop 1.7 (Smarty and Twig), on any page (whether a Symfony-based one or a legacy one), through the power of our Adapters.

Therefore, modules targeting the Product page can still use Smarty. They WILL have to update their CSS and JavaScript code, though, because the back office design has changed. That's why we created the [PrestaShop UI Kit](http://build.prestashop.com/prestashop-ui-kit/) -- which is based on Bootstrap 4. Use it, and you’re safe!


### Will there be any impact on the payment modules?

We made a change in the payment API, the explanation and an example are available in Build: [see this article](http://build.prestashop.com/news/starter-theme-news-3/#payment-api).

You can find a sample payment module here: [https://github.com/PrestaShop/paymentexample](https://github.com/PrestaShop/paymentexample).


### Will PrestaShop 1.7 remove deprecated code, hook_alias, etc.?

A lot of deprecated code is being removed, yes. Until more detail are public, you can [join the conversation on Gitter](https://gitter.im/PrestaShop/General)!

You can an idea of what has been done [in this article](http://build.prestashop.com/news/product-page-evolution/#developers-beware).


### Is there any change planned to the override system?

PrestaShop 1.7 introduces the use of [namespaces](http://php.net/manual/en/language.namespaces.php) with its new architecture, and in short, anything that has namespaces cannot be overridden.<br />
The legacy architecture can still be overridden, though. But in general, we advise against overriding code. It is better to extend it.<br />
Also, overrides are _currently_ forbidden in the Symfony-based pages (namely, the Product page and the Modules page).

Overrides are a nice system to have, but the issue with it is that it is an uncontrolled extension system. We are working on a carefully planned process that will allow developers to extend the PrestaShop code in a much cleaner way. We will soon write about it on this blog, but the gist of it would be that the developer team would integrate your needs for overrides in the next version of PrestaShop -- kind of what [polyfills do for HTML5 features](https://en.wikipedia.org/wiki/Polyfill) :) In short, you tell us what you need, and while we include it in the next version, you can use an override.

Again: **the override system is not going away**, you will still be able to easily extend PrestaShop. We're just changing the way we want this to happen: instead of each developer having a separate set of overrides, we want developers who need an override to let us know about it, so that the next version of PrestaShop includes it directly.


### Can developers still use overrides in 1.7?

Yes, overrides will work as usual on all classes that have no namespace (so you can still override Product, Address, etc.).

Now, there has been some discussion about a more subtle point that seems to have caused ill-founded panic. _CURRENTLY_, when a Symfony component uses a legacy component (read: a class without namespace), then yes, it ignores the overrides (example: ProductCore is used in a data provider, bypassing overrides, and Product should be used here so that overrides work as expected). This was a mistake, it’s easy to fix, and it will be fixed soon.

Sure, we know overrides are popular because there are not enough hooks in PrestaShop. But rather than working on overriding code, why don't you suggest we add a hook that the whole community can use? It's an Open Source project, go ahead, open a pull request on GitHub, just like contributor Prestarocket did a few days ago: https://github.com/PrestaShop/PrestaShop/pull/4907 ! :)

The idea for 1.7 is that you can still use overrides, but we'd like you to let us know when you NEED such or such hook, so that we can possibly add it to the next major or minor version! Contribute your ideas!

Overrides are the wrong answer to a real problem, but they are not going away anytime soon, because a huge part of our ecosystem relies on them.

But relying only on overrides makes that the PS architecture cannot evolve. Sure, everyone can extend in his own corner, but if we can add hooks that answer a need for everyone, the whole community will be better for it.

If we work together, we can make the codebase easier to extend, and with better practices.


### Is there a list of all the modules impacted by the changes made on the BO product page?

We wrote a special parser which analyzed all the modules in the PrestaShop Addons catalog in order to find the ones which might not work as expected. The result of this analysis will be published in another article -- soon!


### Is there a list of all the modules impacted by the changes made for the Starter Theme?

All the 1.6 modules targeting the theme will likely be impacted (to various degrees) by the changes and need to be adapted for 1.7. From the moment your module targets the theme, it will have to be updated.

We will soon publish a guide on what to look for when updating your module.


### Where is the 1.7 Developer documentation?

The Developer documentation is being worked on. [The current draft is available on GitHub](https://github.com/PrestaShop/docs), and you can contribute!

In the meantime, we advise you to dive into the code of this 1.7-specific module: [https://github.com/PrestaShop/paymentexample](https://github.com/PrestaShop/paymentexample ).

<div class="alert alert-note" role="alert">
<p><b>Changelog for this FAQ:</b></p>

<ul>
  <li>1.0 (2016-02-11): 
    <ul>
      <li>First release of this FAQ.</li>
    </ul>
  </li>
  <li>1.1 (2016-02-22):
    <ul>
      <li>Added a sentence to the "Where will Symfony be introduced?" question.</li>
      <li>Rephrased bits of the "Will it be easy to upgrade from previous versions of PrestaShop to v1.7?" question.</li>
      <li>Expanded the "Will the Starter Theme or the default theme use Bootstrap?" question.</li>
      <li>Added new question: "Should I use Bootstrap for my theme?"</li>
      <li>Added new question: "Why are you switching to one theme.js and one theme.css file for the whole site?"</li>
      <li>Added new question: "Will my 1.6 module still work with PrestaShop 1.7?"</li>
      <li>Added new question: "Is PrestaShop 1.7 switching from Smarty to Twig?"</li>
      <li>Added new question: "Can we still use overrides in 1.7?"</li>
    </ul>
  </li>
  <li>1.2 (2016-04-04): 
    <ul>
      <li>Typos here and there.</li>
      <li>Alpha 3 publicly released! <a href="http://build.prestashop.com/news/prestashop-1-7-alpha-3-is-here/">Test it now</a>!</li>
      <li>Added reference/links to alpha 3 here and there.</li>
      <li>Added "What are the benefits of 1.7 for developers?" question.</li>
      <li>Added "Why is not named PrestaShop 2.0?" question.</li>
      <li>Expanded the "Do themes still use Smarty (...)?" question.</li>
      <li>Expanded the "Is there any change planned to the override system?" question: overrides are not going away!</li>
    </ul>
  </li>
  <li>1.2b (2016-04-07): 
    <ul>
      <li>Wording, links and such.</li>
    </ul>
  </li>
  <li>1.3 (2016-05-12): 
    <ul>
      <li>Alpha 4 publicly released! <a href="(http://build.prestashop.com/news/here-comes-prestashop-1-7-alpha-4/">Test it now</a>!</li>
      <li>Added link to current draft of <a href="https://github.com/PrestaShop/docs">Designer documentation</a>.
      <li>Added an automatic Table of Contents, at last!</li>
      <li>Made a bit of rewording, details and typo corrections here and there.</li>
    </ul>
  </li>
  <li>1.4 (2016-06-03): 
    <ul>
      <li>Beta 1 has been released! <a href="http://build.prestashop.com/news/prestashop-1-7-beta-1-open-for-feedback/">Test it now</a>!</li>
      <li>Updated "When is version 1.7.0.0 going to be released?" question.</li>
      <li>Reworded/reorganized the "What will be in PS 1.7?" question a bit.</li>
      <li>Added link in the "Where is the 1.7 Developer documentation?" questions.</li>
    </ul>
  </li>
  <li>1.5 (2016-07-18): 
    <ul>
      <li>Beta 2 has been released! <a href="http://build.prestashop.com/news/prestashop-17-beta2/">Test it now</a>!</li>
      <li>Updated the "When is version 1.7.0.0 going to be released?" question.</li>
      <li>Added a proper Forge link in the "Where is the development source code for PS 1.7?" question.</li>
      <li>Added more details to the "Why Symfony 2 and not 3?" question.</li>
      <li>Added more details to the "Will the Starter Theme or the default theme use Bootstrap?" question.</li>
      <li>Added more details to the "What’s the story about a UI Kit?" question.</li>
      <li>Added link to Build article in "Will 1.6 module still work with PrestaShop 1.7?" questions.
    </ul>
  </li>
</ul>

</div>
