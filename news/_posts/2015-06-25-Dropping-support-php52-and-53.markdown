---
layout: post
title:  "Dropping support for PHP 5.2 and 5.3"
subtitle: "Welcome Namespaces, Closures, Traits, Composer, and much more!"
date:   2015-06-24 17:00:00
author:  [ julienbourdeau ]
icon: fa-paper-plane
tags:
 - php
 - composer
 - namespaces
 - closures
 - major version
---

At PrestaShop, we want to make e-commerce possible for everyone. No matter where you are, no matter how much you can (or cannot) spend on your hosting, no matter how big or how small your store is. Because we’ve always made sure your PrestaShop store could run on a cheap shared hosting plan in a far far away land, we had to support PHP all the way back to version 5.2 -- a version that has been unsupported [since January 2011][1].

But today, things have changed. Not because all of a sudden cheap hosts have begun to drop deprecated versions of PHP (although it’s getting there), but because we have released PrestaShop Cloud a few months ago. PrestaShop Cloud is a free service offering high-quality PrestaShop hosting for everyone. And by free, we mean really free, with no hidden fee: those who cannot afford to get a quality host with a recent version of PrestaShop can choose to create their store on PrestaShop Cloud, and start selling without any charge!

Thus, we remain true to our quest: make it possible for everyone to have their own online store. If you have a good up-to-date host, then PrestaShop will keep evolving for you. If you cannot afford a good host, then PrestaShop will host your store for you, with the PrestaShop Cloud service.

Hence, if your hosting plan only supports an old version of PHP, you are welcome to drop it and open a [free account on PrestaShop Cloud][2].

Now, as you understand it, PrestaShop Cloud frees us from having to be stuck with PHP 5.2, and allows us to move to greener pastures (read: more recent versions of PHP). Yes, we are planning to skip PHP 5.3 altogether (a version that has also been [deprecated since August 2014][1], and has not received any update since, not even security-related ones), and get working directly with all the PHP 5.4 features soon. That version is still receiving development love for the coming months (namely, [it is in Security Support mode until September 2015][3]) and [its adoption rate is growing steadily][4]). We could jump all the way to version 5.5 or even 5.6, but those are still supported [by very few hosts][5].

So, what can you expect from the PrestaShop codebase once we move to PHP 5.4? Let’s see...


## What to expect with PHP 5.4

### Composer and Namespaces

The past few years, the PHP community has lived a lot of changes, and my favorite is: **Composer**.

> Composer is an application-level dependency manager for the PHP programming language that provides a standard
> format for managing dependencies of PHP software and required libraries. Composer is strongly inspired by
> Node.js’s “npm” and Ruby’s “bundler”.
> -– <cite>Wikipedia</cite>

With [Composer](https://getcomposer.org/) and [namespaces](http://php.net/manual/en/language.namespaces.php), our [override system](http://doc.prestashop.com/display/PS16/Overriding+default+behaviors) will get some attention and get better.

There will also be an easy way for you to use external libraries in your modules, and we think you are going to seriously like it.


### Closures and lambda functions

If you are using JavaScript regularly, you are certainly familiar with the [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#The_function_expression_%28function_expression%29) (aka [lambda/anonymous functions](https://en.wikipedia.org/wiki/Anonymous_function)) and [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures). They exist in PHP as well, but they’ve been introduced in PHP 5.3. They will be used to simplify the code base. For example, maybe you need a simple function to pass as an argument of `array_map()`. We will thus avoid polluting the global scope with code we don’t reuse.

I recommend reading [this article from Fabien Potencier](http://fabien.potencier.org/article/17/on-php-5-3-lambda-functions-and-closures) if you want to learn more about it. And, of course, the [official documentation about PHP closures](http://php.net/manual/en/class.closure.php).

### Shorthands

I know, it's a much smaller improvement, but a few shorthands have been introduced in PHP 5.3 and PHP 5.4 and they usually make life way easier. For instance:

{% highlight php startinline=true %}
  ($this->name) ?: "John Doe"
  // instead of
  ($this->name) ? $this->name : "John Doe"
{% endhighlight %}


{% highlight php startinline=true %}
  $var = [1, 2, 3];
  // instead of
  $var = array(1, 2, 3);
{% endhighlight %}


{% highlight php startinline=true %}
  $var = (new Customer(1))->firstname;
  // instead of
  $customer = new Customer(1);
  $var = $customer->firstname;
{% endhighlight %}



## When to expect these changes

Since [we moved to a more semantic versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/), this change is expected to land in the next major release: **PrestaShop 1.7**.

There is no release date yet, but we are very excited about it and we can’t wait to tell you more!

[1]: http://php.net/eol.php
[2]: https://www.prestashop.com/
[3]: http://php.net/supported-versions.php
[4]: http://w3techs.com/technologies/details/pl-php/5.4/all
[5]: http://w3techs.com/technologies/details/pl-php/5/all
