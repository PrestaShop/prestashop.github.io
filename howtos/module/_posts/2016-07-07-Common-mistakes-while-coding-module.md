---
layout: post
title:  "10+ common mistakes while coding a PrestaShop module"
subtitle: "Do you commit these mistakes? Do not make them further."
date: 2016-07-25 09:10:00
author: [ kpodemski ]
icon: icon-bug
tags: [ howto, tutorial, modules ]
published: true
---

PrestaShop has been around for many years, during which thousands of modules were made by thousands of developers, yet we still see the same simple mistakes being made, even though they could easily be avoided.

Here is a list of 10+ common mistakes when coding a PrestaShop module, with a short information on how to avoid them.

<div class="alert alert-note" role="alert">
<h4><i class='icon-file'></i> Note</h4>
Several tips only apply to PrestaShop 1.5-1.6 module development. [PrestaShop 1.7 changes a few things](http://build.prestashop.com/news/module-development-changes-in-17/)!
</div>

* TOC
{:toc}


### 1. Creating/using a module with hardcoded database prefix

This can be surprising to some but, yes, I saw this a few times: developers using the "ps\_" prefix in their SQL schemas, or SQL queries. 

How to avoid this? Always use PrestaShop's `_DB_PREFIX_` constant, which is the prefix that is defined by the user during installation.


### 2. Making sure your module can be translated

PrestaShop 1.6 has an amazing translations system. Users can easily translate themes and modules from their back office, but not all themes/modules are available there, why so? Some module developers still forget to make their creation translatable, or make mistakes by using not the proper code for a translation.

Remember:

- Translations inside module files:
`$this->l('Translatable text')`

- Translations inside the module's back-office controller (which extends ModuleAdminController):
`$this->l('Translatable text')`

- Translations inside the module's front-office controller (which extends ModuleFrontController):
`$this->module->l('Translatable text', 'controller_name')`

- Translations inside mails:
`Mail::l('Translatable text')`

- Translations inside PDF files:
`PDF::l('Translatable text')`

Remember to use English as your default language in translations! Indeed, it is always easier to find people to translate from English than other languages.

Note that PrestaShop 1.7 completely [updates the way translation is defined](http://build.prestashop.com/news/new-translation-system-prestashop-17/#calling-symfonys-translator).


### 3. Data validation - do not trust your users or yourself!

Recent events show that even the most popular modules or themes can be affected by security flaws and exploited by hackers. There are a few simple steps which will help you keep your modules secure:

- Always check the input data: use `Tools::getValue('var')` instead of `$_POST['var']`, `$_GET['var']`.
- [Type hinting](http://php.net/manual/en/language.oop5.typehinting.php) makes sure the value has the correct type: use `(int)`, `(bool)`, `(float)` properly, check the public methods available in the [`classes/Validate.php`](https://github.com/PrestaShop/PrestaShop/blob/develop/classes/Validate.php) file, such as  [`isUnsignedInt()`](https://github.com/PrestaShop/PrestaShop/blob/develop/classes/Validate.php#L686-L695).
- The PrestaShop token is your friend: always check the token when doing action for logged in customers. Need an example?

{% gist kpodemski/13a33eba6b43e9b6db7d29e491104ae1 %}

  You can also check the token for guest users: I suggested [these two methods](https://github.com/PrestaShop/PrestaShop/pull/5863/files).

- Secure your files: files outside your module's base file (such as `ajax.php`, `upload.php`, etc.) should have a check at their very beginning in order to make sure they cannot be triggered directly. Here is example:

{% gist kpodemski/5717d7c36d4277a71fa67746bb8efade %}


### 4. Setup module compatibility and restrictions

Let's be honest, sometimes it's hard to maintain a module from version to version, and sometimes you'd like to release a module only for specific versions of PrestaShop, even specific countries!

How to set the compatibility of your module? In your `__construct` method:

`$this->ps_versions_compliancy = array('min' => '1.6.1.0', 'max' => _PS_VERSION_);`

This code will not allow to install the module if you have PrestaShop in version lower than 1.6.1.0.

How to restrict your module for specific countries? In your `__construct` method:

`$this->limited_countries = array('fr', 'pl');`

This code will not allow to install the module in countries other than France and Poland. Use [ISO-3166 codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)!


### 5. Do not trigger code if it is for a specific page

If you are using the `displayHeader` hook to add features to the Product Page (for instance), do not use this code if you're not on page where you have a single product.

You can easily contextualize your code by simply using `if` statements:

{% highlight php %}
public function hookDisplayHeader($params)
{
    // A good practice is to stop code as soon as possible if we don't need it.
    if ($this->context->controller->php_self !== 'product') {
        return;
    }

    // Rest of the code
}
{% endhighlight %}

Quick tip: it's worth noting that if you want to get some information from the Product object, you can do this with this code:
`$product = $this->context->controller->getProduct()`.  
There is no need to do `new Product(...)`. This code will work on a single-product page.


### 6. Too much going on in your \_\_constructor

Yes, this can be tricky. Very often I see modules where developers try to do some stuff in the `__construct` method of their module. It is Not Good. Definitely. Why? Because this code will therefore be triggered on the front office, the back office Modules page, and a few other pages. Be responsible, place your code in hooks, or target a specific page like it was described in point #5.


### 7. Conflicts, conflicts everywhere!

So you've created an amazing carousel with products selected from back office, proudly using [owlCarousel](http://www.owlgraphic.com/owlcarousel/), [slick.js](http://kenwheeler.github.io/slick/) or any other popular library. Great!  
Now a customer bought another carousel module, one with product reviews, and it turns out that this module is using the same library: now nothing is really working.

What can we do to avoid this problem? Well, there's no 100%-safe solution for this problem, but you, as a Good Developer, can be nice to other developers (or theme authors), and allow your customers to disable loading of libraries from your module. Take the time to add a section in your Settings called "Troubleshooting" for example, and create a settings where your user can select which libraries can by turned off from your module.


### 8. Your module has front office controllers but you didn't register them...

...and if that's a case, your user cannot set where the left or right column should be displayed. If you're using front office controllers within your module, remember to register them properly in your `__construct` method:

`$this->controllers = array('my-controller', 'other-controller');`


### 9. Weird ways to do module updates

The day has come, you have a new version of your module and you'd like to change its database schema, add some new hooks etc. There's no need to implement your own update mechanisms, PrestaShop already has one!

Let's assume that you have MyModule v1.0.0 and you'd like to update it to v1.1.0, this is example file:

{% gist kpodemski/51d470da4ced53fd946f5d774044f69f %}

You need to remember about few things:

- This code will fire only if your current module's version is 1.0.0 and you visit the Module's page.
- You have access to the `$object` variable, which is simply an instance of your module.
- You always should return a boolean (`true` or `false`): this will trigger the success or error message in the back office.

As you can see, you can create migration of the database, change configurations, add new hooks and do almost everything you need to do while updating your module to the next version.

Quick note: if you add a few version-specific files (for example: install-1.1.0.php, install-1.2.0.php), they'll run one after the other. Make sure that you check if a target database table exists, or a file exists: it is easy to break something here if you're not careful.
 
 
### 10. Lack of multi-lang, multi-store support

This is real problem. Many modules are not compatible with PrestaShop's multi-store feature, even its multi-lang feature. Customers just cannot use these modules in their specific situation.

There are many examples on how to create a module which is compliant with PrestaShop's multi-store feature, take some time and check how it's done in modules like: [homeslider](https://github.com/PrestaShop/homeslider/tree/master), [blocklink](https://github.com/PrestaShop/blocklink/tree/master), [blocktopmenu](https://github.com/PrestaShop/blocktopmenu/tree/master) and [many other native modules](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x/modules).


### 11. Ignoring/not knowing PrestaShop Validator

Did you know that PrestaShop has a pretty good validator for your PrestaShop modules? No? Visit [validator.prestashop.com](http://validator.prestashop.com) and test your module today.

You'll avoid many basic mistakes while creating your module, as some rules are... doubtful :) There are many things which can be fixed thanks to the Validator.

Even if you don't agree with some of its rules, you shouldn't ignore the Validator completely: it is a good start for checking if your module is compliant with PrestaShop's standards.


### 12. Inventing the wheel again

You'd like to do ajaxed autocomplete? Or maybe create a settings form for your module? Check how it's done with native modules, be familiar with `[HelperForm](http://doc.prestashop.com/display/PS16/Using+the+HelperForm+class)`, `[HelperOptions](http://doc.prestashop.com/display/PS16/Using+the+HelperOptions+class)`, and read code! Read the [code of the Core](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x), analyze [native modules](https://github.com/PrestaShop/PrestaShop/tree/1.6.1.x/modules), analyze open-source modules. 

Developers often don't know how something is constructed, and they are willing to sit for 2-3 hours more in order create something by themselves, without reading how it's already done in different modules or places of the back office. If you want to be a better developer of PrestaShop's modules, look how many features and tools PrestaShop's API already provides you with.

<hr>

Did these tips help you create better modules? Do you still have some questions? Was there a step too hard? Let us know in the comments!

<div class="alert alert-note" role="alert">
<h4><i class='icon-file'></i> Note</h4>
This article is a contribution from a member of the PrestaShop community, and not a PrestaShop employee. If you too want to help the community by sharing tips and advice on the Build devblog, <a href="http://build.prestashop.com/about/#contribute">read this</a>!
</div>
