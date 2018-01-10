---
layout: post
title:  "PrestaShop 1.7 is moving to Symfony 3.4 and PHP 5.6"
subtitle: "Why we decided to forget about Symfony 2.8"
date:   2018-01-10 09:10:11
authors: [ AurelienPelletier ]
icon: icon-blaster
tags:
 - 1.7
---

Remember? @mickaelandrieu recently introduced the [Symfony ecosystem](http://build.prestashop.com/news/make-back-office-modules-great-again) and how it will help making more powerful modules. Going on with this idea, @toutantic will tell you more about Symfony 3 and PHP 5.6 that will both work together to improve PrestaShop.


## Current situation of PrestaShop

Since november 2016 and the release of version 1.7.0, PrestaShop uses Symfony 2.8 for the back office and requires PHP 5.4+ to run. 

We chose the version 2.8 of Symfony because, at the time, it was the current [Long Time Support version of Symfony](https://symfony.com/roadmap?version=2.8#checker). PHP 5.4+ was the lowest requirement for Symfony 2.8 and, according to our numbers, most of existing PrestaShop installations were already running on a version of PHP above 5.4.

More than a year later, current LTS version for Symfony is 3.4, [PHP 5.4 is no longer receiving any security patches](http://php.net/supported-versions.php) and less than 10% of PrestaShop installs are on PHP 5.4 or below. In addition, bugfix support for Symfony 2.8 will end in november 2018 and security patches won't be available after november 2019 ([source](http://symfony.com/doc/current/contributing/community/releases.html#schedule)).


## Why choose Symfony 3.4 over 2.8?

As we keep working on moving more parts of PrestaShop to Symfony, we asked ourselves: why migrate to a soon-to-be-obsolete version of the framework? So we decided it would make sense to target Symfony 3.4 instead of 2.8. And as Symfony 3.4 requires PHP 5.5.9+, PrestaShop 1.7.4 will require PHP 5.6+ to run.

Since june 2015, PrestaShop is following a [more semantic versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme). And this is the part where you might wonder whether we are not breaking semantic versioning when changing dependencies requirements on a minor version.

According to the definition of semantic versioning, the answer is no: [you can change dependencies version on a minor](https://semver.org/#what-should-i-do-if-i-update-my-own-dependencies-without-changing-the-public-api) or even a patch version. But that is just the technical answer, what is important is that we are not breaking the existing shops. What used to work will still work.

You also wonder why we did not jump directly to Symfony 4.0? Here are our answers:

- v4 requires PHP 7.1, which is too big of a jump for many shops right now

- v3.4 has all the new features of v4, but it is an LTS version whereas v4 is not


## What does it change?

Of course, we recommend that you run your PrestaShop install on the latest version of PHP - 7.2 when writing this post.

And for PrestaShop developers, Symfony 3.4 and PHP 5.6 means that now you can use all the new features from PHP 5.5 and 5.6: [generators](http://php.net/manual/en/language.generators.overview.php), [finally](http://php.net/manual/en/language.exceptions.php#language.exceptions.finally) in try catch block or [::class for class name resolution](http://php.net/manual/en/language.oop5.basic.php#language.oop5.basic.class.class) and more.
