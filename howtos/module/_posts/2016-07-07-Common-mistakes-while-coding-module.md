---
layout: post
title:  "10+ common mistakes while coding module"
subtitle: "Do you commit these mistakes? Do not make them further."
date: 2016-07-20 17:10:00
author: [ kpodemski ]
icon: icon-bug
tags: [ howto, tutorial, modules ]
published: false
---

PrestaShop has been around for a many years, thousands of modules were made, thousands of developers was able to create modules or themes, yet we still see a lot of many simple mistakes made by developers which can be easily avoided.

Here is a list of 10+ common mistakes while coding PrestaShop module and short information how to avoid them.

### 1. Creating/using module with hardcoded database prefix.
This can be suprised but, yes, I saw this few times, developers used "ps_" prefix in their sql schemas, or sql queries. How to avoid this? Always use prefix already defined by PHP constant (_DB_PREFIX_).

### 2. Translations
PrestaShop has amazing translations system. User can easily translate themes and modules from back-office, but it is not available anywhere, why? Module developers still forgot to translate their modules or made mistake by using not proper code for a translations.

Remember:

- translations inside module files:
`$this->l('Translatable text')`

- inside module back-office controller (which extends ModuleAdminController):
`$this->l('Translatable text')`

- inside module front-office controller (which extends ModuleFrontController):
`$this->module->l('Translatable text', 'controller_name')`

- mails:
`Mail::l('Translatable text')`

- pdf's:
`PDF:l('Translatable text')`

Remember to use English as your first language in translations, it is always easier to find people to translate from English than other languages.

### 3. Data validation - do not trust yourself

Recent events shows that even most popular modules or themes can be affected by hackers. There are few simple steps which will help you to keep your modules secure:

- Check input datas, use `Tools::getValue('var')` instead of `$_POST['var']`, `$_GET['var']`,
- use typehinting, remember to use `(int)`, `(bool)`, `(float)` properly, check `classes/Validate.php` and methods like `isUnsignedInt`,
- check the token while doing action for logged in customers, example?

{% gist kpodemski/13a33eba6b43e9b6db7d29e491104ae1 %}

You can also check token for guests users, two additional methods for this are [here](https://github.com/PrestaShop/PrestaShop/pull/5863).

- secure files outside your module base file like ajax.php, upload.php etc. Here is example:

{% gist kpodemski/5717d7c36d4277a71fa67746bb8efade %}

### 4. Setup module compatibility and restrictions

Let's be honest, sometimes it's hard to maintain module from version to version, sometimes you'd like to release module only for specific versions of PrestaShop, even specific countries!

How to set the compatibility of your module ? In your `__construct` method:

`$this->ps_versions_compliancy = array('min' => '1.6.1.0', 'max' => _PS_VERSION_)`

This code will not allow to install module if you have PrestaShop in version lower than 1.6.1.0.

How to restrict your module for specific countries? In your `__construct` method:

`$this->limited_countries = array('fr', 'pl');`

This code will not allow to install module in countries other than France and Poland.

### 5. Do not fire code, if your code is for a specific page

If you creating a module which helps you integrate some additional features for Product Page, and you're using for example `displayHeader` hook, do not use this code if you're not on page where you have single product.

You can easily target your code by using simple `if` statement:

{% highlight php %}
public function hookDisplayHeader($params)
{
    // Good practice is to stop code as soon as possible if we don't need it
    if ($this->context->controller->php_self !== 'product') {
        return;
    }

    // Rest of the code
}
{% endhighlight %}

Quick tip: it's worth notice that if you want to get some informations from product object you can do this with this code:
`$product = $this->context->controller->getProduct()`

There is no need to do `new Product(...)`. This code will work on a single product page.

### 6. Too much going on in your __constructor

Yes, this can be tricky. Very often I see modules where developers try to do some stuff in `__construct` method of their module, it is not good. Definitely. This code will fire on front-office, on back-office Modules page and in few other pages. Be responsible, place your code in hooks or target specific page like it was described in point #5.

### 7. Conflicts, conflicts everywhere!

So you've created amazing carousel with products selected from back-office, you're using owlCarousel, slick.js or other popular library. Now your customer bought different module, carousel with product reviews, it turned out that this module is using same library and now nothing is really working.

What can we do to avoid this problem? Well, there's no 100% solution for this problem but you, as a good developer, can be nice to other developers, or theme authors, and allow your customers to disable loading of libraries from your module. Take a time and create additional section in your Settings called for example: Troubleshooting; add settings where your user can select which libraries can by turn off from your module.

### 8. Your module has front-office controllers but you didn't register them...

...and if that's a case, your user cannot set where left or right column should be displayed. If you're using front-office controllers within your module remember to register them properly in your `__construct` method:

`$this->controllers = array('my-controller', 'other-controller');

### 9. Weird ways to do module updates

The day has come, you have new version of your module and you'd like to change database schema, add some new hooks etc. There's no need to implement your own update mechanisms, PrestaShop already have one!

Let's assume that you have MyModule v1.0.0 and you'd like to run update to v1.1.0, this is example file:

{% gist kpodemski/51d470da4ced53fd946f5d774044f69f %}

You need to remember about few things:
- this code will fire only if your module version is 1.0.0 and you'll visit Module's page
- you have access to `$object` variable which is simply instance of your module
- you always should return boolean, true or false, this will trigger success or error message in back-office

As you can see you can create migration of db, change configurations, add new hooks and do almost everything what you need to do while updating your module to the next version.

Quick note: if you'll have few files for example: install-1.1.0.php, install-1.2.0.php they'll run one by one, make sure that you'll check if for example db table exists, files exists, it is easy to broke something here if you're not careful.
 
### 10. Lack of multi-lang, multi-store support

This is real problem, many modules are not compatible with multi-store, even multi-lang feature. There are many examples how to create module which is compilant with PrestaShop multi-store, take some time and check how it's done in modules like: homeslider, blocklink, blocktopmenu and many other native modules.

### 11. Ignoring/not knowing PrestaShop Validator

Did you know that PrestaShop has pretty good validator for your PrestaShop modules? No? Visit [validator.prestashop.com](http://validator.prestashop.com) and test your module today.

You'll avoid many basic mistakes while creating your module, as some rules are... doubtful :) there are many things which can be fixed thanks to Validator.

Even if you don't agree with some rules you shouldn't ignore Validator completely, it is a good start for checking if your module is compilant with PrestaShop standards.

### 12. Inventing the wheel again

You'd like to do ajaxed autocomplete? Or maybe create settings form for your module? Check how it's done with native modules, be familiar with `HelperForm`, `HelperOptions`, and read code, read code of the Core, analyze native modules, analyze open-source modules. Many times developers don't know how something is constructed, and they are willing to sit for 2-3 hours more, create something by themeselves, without reading how it's already done in different modules or places of back-office. If you want to be better developer of PrestaShop's modules look how many features and tools PrestaShop API already provides you.

<hr>

Did these tips help you create module better? Do you still have some questions? Was there a step too hard? Let us know in the comments!

<div class="alert alert-note" role="alert">
<h4><i class='icon-file'></i> Note</h4>
This article is a contribution from a member of the PrestaShop community, and not a PrestaShop employee. If you too want to help the community by sharing tips and advice on the Build devblog, <a href="http://build.prestashop.com/about/#contribute">read this</a>!
</div>
