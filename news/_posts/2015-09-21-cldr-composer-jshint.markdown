---
layout: post
title:  "CLDR, Composer, NPM, Jshint, oh my!"
subtitle: "PrestaShop development getting real"
date:   2015-09-24 18:00:41
author: xavierborderie
icon: fa-calendar
tags:
 - 1.7.0.0
 - cldr
 - composer
 - npm
 - jshint
---

As those of you who regulary look at the commits being merged in the 'develop' branch, the forthcoming 1.7.0.0 version of PrestaShop now includes a few notable improvements.

These are all part of our plan to modernize the codebase, and provide you with a professional e-commerce tool!


#### CLDR: managing local numbers the right way

PrestaShop 1.7 now implements part of the [Unicode Common Locale Data Repository](http://cldr.unicode.org/) standard in order to better manage currency and price listing. This allows us to always display a well-formatted price, whatever the locale (language and/or country).

CLDR is a huge project from the Unicode Consortium, which provides locale data, such as patterns for formatting/parsing numbers, or rules for formatting numbers in traditional numeral systems.

Core developer Luc Vandesype (@kelu95) spent several weeks deep in the trenches of PrestaShop, rewriting heaps of code and turning them into CLDR-supporting fields and forms.

Because CLDR's JSON data files are huge, we have made it so that we just use those needed (through the installed/updated language pack).
We also chose to introduce NPM in order to manage frontend dependencies. CLDR data files are shared with backend data files.

This is just one step in the path to CLDRization, and we hope to have more to bring in the version after 1.7!


#### Composer: managing dependencies the smart way

PrestaShop 1.7 now calls upon [Composer](https://getcomposer.org/) to better manage several of its non-Core components.

Composer is a package manager that provides a standard format for managing dependencies of PHP software and required libraries. It allows us to declare the libraries that PrestaShop depends on, letting it manage their installation and update. Think of it as PHP's equivalent for Node.js' npm or Ruby's Bundler... or as a modern and up-to-date PEAR project.

In the case of PrestaShop 1.7, Composer is in charge of managing:

* Smarty.
* CLDR dependencies.
* PrestaShop's native modules (loaded from [Packagist](https://packagist.org/), the main Composer repository).
* PrestaShop's unit tests.
* PrestaShop's namespaced classes

It also installs a [Git pre-commit hook](http://git-scm.com/docs/githooks) for [PSR-2 compliance](http://build.prestashop.com/news/prestashop-moves-to-psr-2/) and [PHP Lint](http://www.icosaedro.it/phplint/), a validator for PHP 5 code.


#### JSHint: JavaScript unit testing

We are introducing the usage of [Grunt](http://gruntjs.com/)/[Jasmine](http://jasmine.github.io/)+[JSHint](http://jshint.com/) in order to continually check the syntax of our JS code, and make sure they pass our unit tests.

Its use is tied to [npm](https://www.npmjs.com/), so if you want to launch our test suite, type this in your command line:

{% highlight text %}
> npm test
{% endhighlight %}

#### How to test these goodies?

All of these improvements are available from the current 'develop' branch of PrestaShop, which contains the in-development code for PrestaShop 1.7.0.0. If you want to work with this branch, you need to install both [Composer](https://getcomposer.org/) and [Node.js](https://nodejs.org/en/) (which contains npm).

Then, type these commands in your command-line interface:

{% highlight text %}
> composer install
> npm install -g grunt-cli
> npm install
{% endhighlight %}

Note that the Grunt line is optional.

Regular users are therefore not able to install PS 1.7 easily in its current state - and this is quite intentional: we want developers to dive into the code, and give them fun, modern and interesting tools to play with. Be at ease: once 1.7's development is done, its package will be just as easy to set up as any previous version, with a full installer.

#### One last thing

These are just the first part of big changes which are coming in PrestaShop 1.7. Come back soon on the Build devblog to learn how we plan on using [Symfony2 components](http://symfony.com/components), the [Twig template engine](http://twig.sensiolabs.org/) and more. Let’s keep in touch!
