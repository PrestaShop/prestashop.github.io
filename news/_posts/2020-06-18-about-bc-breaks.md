---
layout: post
title: "A deeper look at Backward Compatibility Breaks"
subtitle: "What exactly is a BC break and how do they relate to PrestaShop"
date:   2020-06-18
authors: [ MathieuFerment ]
image: /assets/images/theme/meta-logo-build.png
icon: icon-code
tags:
---

## A deeper look at Backward Compatibility Breaks

This article explains what exactly are Backward Compatibility Breaks also known as Breaking Changes or BC breaks and how it influences how an open source project like PrestaShop is built. It explains the different types of BC breaks, why they are needed sometimes and how PrestaShop maintainers manage them.


### What does BC break mean

If you look at issues or Pull Requests on PrestaShop GitHub repository, you might notice statements like "Sorry, we cannot do that because it would introduce a BC break" or "Cannot be done without a BC break" when discussing code changes.

_You might be familiar with the concept, however if you are not, here is a short explanation:_

PrestaShop is a Open Source Project that is being built with the idea that people will use it as a foundation to build their own project. Some will use it as a CMS and extend it with modules and themes. Some will use it as a shop system and customize parts of the e-commerce process. Some will even use it for either its Front-Office or Back-Office but handle the other part in another system, like an ERP or a headless CMS, and manage the communication between the two systems through API calls. So we have "external code" that uses PrestaShop "internal code" (the Core).

All of these people will use code and logic that is written inside the software. However, as time passes, new versions of the software are released and this code and logic are changed to be improved, upgraded, made faster or more secure. When, from one version to another, the code changes in a way that breaks the "external code" that has been built around it, this is a Breaking Change.

Here is a very simple example:

```php
public function transferPrices($product)
```
becoming
```php
public function transferPrices($product, $prices)
```

If you have some php code using the function `transferPrices()`, when the function changes, any code that was working previously will now crash with following error message:
```php
PHP Fatal error:  Uncaught ArgumentCountError: Too few arguments to function transferPrices(), 1 passed and exactly 2 expected
```

So this is what a Breaking Change is: a change in the code that, when introduced into the software, might break some tools, modules, themes, whatever that is running PrestaShop Core code.

So when a BC break is introduced, what happens quick is that we get angry bug reports like "my code, that was working with previous version, is broken when I run it with the new version !" start piling up in GitHub!

## SemVer

The concept of BC Break is not specific to PrestaShop. This is actually a very common issue for all code that is being used as a foundation for other software to use: operating systems like Linux, libraries like Guzzle, tools like cURL, frameworks like Symfony ... and CMS like Drupal or PrestaShop.

In order to make it easier for the people using these codebases as foundations to handle these changes, [Tom Preston Werner](http://tom.preston-werner.com/) has invented a convention: [SemVer](https://semver.org/). [SemVer](https://semver.org/) aims to help people understand immediately, when seeing a new version of software, what is contained inside it.

SemVer requires a version number to be constituted of 3 parts: MAJOR.MINOR.PATCH (example: 3.5.27) .

### SemVer summary

```
Given a version number MAJOR.MINOR.PATCH, increment the:
MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards compatible manner, and
PATCH version when you make backwards compatible bug fixes.
```

When you release a new version of your software, if the new version only contains bug fixes, it is a patch version and you increase the PATCH number.

> Example: 3.5.28

When you release a new version of your software, if the new version only contains bug fixes and new features, but everything that was working before still works, it is a minor version and you increase the MINOR number and reset the PATCH.

> Example: 3.6.0

When you release a new version of your software, if the new version number contains code changes that might break other software relying on it, it is a major version and you increase the MAJOR number and reset the MINOR and the PATCH numbers.

> Example: 4.0.0

<hr>

As a developer who builds software relying on this project, when you see a new version number, you can see whether this is a patch, a minor or a major version. And consequently you know that:

- If it's a patch version, upgrading to use the new version will bring no change in behavior, it will only bug fixes
- If it's a minor version, upgrading to use the new version might bring new behaviors you can use but all behaviors you are using are still working
- If it's a major version, you need to check what has been changed to see whether you need to adjust your code

This is very useful for developers. Being able, from just the version number, to understand the impact this change can have on the very software that you are building is critical!

### Why do projects introduce BC breaks ?

When reading this, you might wonder why people release new major versions of a software. If everybody would only release minor versions following SemVer, nobody would ever be afraid of upgrading its software because of BC breaks! Would'nt it be amazing, a software world without BC breaks and the fear of them?

Moreover PrestaShop is a CMS, which means it is customizable and extensible. Extension often comes from installing modules and a theme.

These modules and themes are built by developers that want to sell it to an audience as large as possible. A BC break that impacts some code they are using is a nightmare for them! It means for example they have to provide a different version of their product for PrestaShop 1.7.5 and 1.7.6 because of a change in PrestaShop 1.7.6. BC breaks hinder the capability of modules to provide a huge compatibility range.

Unfortunately BC breaks are necessary for software to evolve. Not all software changes can be done while maintaining backward compatibility, and BC breaks are a necessary step for a project to evolve in time. And [evolution is necessary](https://build.prestashop.com/news/prestashop-in-2019-and-beyond-part-3-the-future-architecture/) to ensure it continues to fit the needs of its user community, who evolve in time. A software that does not evolve is bound to disappear, replaced by better contributors.

## Hard BC breaks and soft BC breaks

It is possible to define two categories of BC breaks: hard BC breaks and soft BC breaks.

Hard BC breaks are changes that will make your code crash because it cannot be run anymore.

Example of a hard code BC break: (same as above)
```php
public function transferPrices($product, $prices) => public function transferPrices($product, $prices)
```

On the contrary, soft BC breaks are changes that, syntaxically, do not break your code but will nevertheless modify how the main project behaves and might require you to adjust your code accordingly. These changes are harder to handle because less obvious to spot.

Example of a soft BC break:
```php
public function transferPrices($product)
{
	return array(1 => '1', 2 => '2');
}
```
becomes
```php
public function transferPrices($product)
{
	return array(1 => 1, 2 => 2);
}
```
In this last snippet of code, the returning value is is an array. Before the change, this is an array of strings while after the change it has become an array of integers. This small change might not throw an error in external code however it might affect their behavior and introduce bugs in a vicious manner.

<hr>

*Now let's have a look at different types of BC breaks*



## Code BC breaks

Code BC breaks are the most common and known BC breaks, and so far we have only been talking about them.

The two examples used above, are code BC breaks.

### Deprecations

There is a standard mechanism to handle code BC breaks: [deprecations](https://en.wikipedia.org/wiki/Deprecation). The idea of deprecation is to put inside the code a log message, that should be read by developers, to tell them what parts of the code will be removed soon, in the next major version. This way, developers can be informed early of the parts of the code they should not rely on in the future and adapt accordingly. This mechanism is widely used in the software world and has proven its effectiveness.

So the full process goes like this:

- developers decide to deprecate part of code A
- developers put a deprecation message inside code A, warning users that "code A is deprecated and you should stop using it because it will soon be removed" however they keep it working for now
- when next major version is released, code A is gone

You can see a very recent example in [Pull Request 19657](https://github.com/PrestaShop/PrestaShop/pull/19657/files#diff-f31f293b83e5d491f378ab486297a67bR196).

### How PrestaShop maintainers handle this type of BC break

We use the deprecations standard.

## HTML Markup BC break

Since PrestaShop is a web project, we have hundreds of HTML templates inside the codebase that evolve in time. These templates have a structure and markers such as IDs and classes, that evolve too. These evolutions can introduce a BC break.

For example a lot of JavaScript code, such as jQuery, relies on HTML IDs and classes to select DOM elements to modify. This means that modifying these markers or removing them... break the JavaScript behavior relying on them !

In order to follow SemVer at PrestaShop, we also make sure we keep HTML markup backward compatible.

**Hard markup BC break example:**
```html
<div id="my-id"><a id="link" href="#anchor">Link</a></div>
```
becomes simply
```html
<div id="my-id"><a id="anchor" href="#anchor">Link</a></div>
```
In the above example, the ID "link" has been renamed to "anchor". Any external code that relied on this selector will now fail.

**Soft BC break example:**
```html
<div id="my-id"><a id="link" href="#anchor">Link</a></div>
```
becomes
```html
<div id="link"><a href="#anchor">Link</a></div>
```
In the above example, the ID "link" was moved from the `<a>` to the `<div>`. Any external code that relied on this selector might fail because of this structural change.

Example of such BC break: recently we had to modify some CSS code in order to fix a bug for mobile display, and this could not be done [without introducing a breaking change into the style](https://github.com/PrestaShop/PrestaShop/pull/17438).

### How PrestaShop maintainers handle this type of BC break

We try not to introduce such changes as there is no such thing as deprecation for markups. If however we are forced to do so, we try to inform users of the change into the Release Note.

## Dependency BC break

As most big projects, PrestaShop "is built on the shoulders of giants" and use a set of PHP and JavaScript dependencies. These dependencies provide great software assets that are being used to implement all of PrestaShop behaviors and are are shipped with PrestaShop codebase inside the final ZIP archive.

This means that any software built on top of PrestaShop, such as modules, can use these dependencies too ! And consequently removing or modifying these dependencies can introduce a BC break too.

This type of BC break is especially hard to deal with because we have no control on these packages. Sometimes, in order to avoid introduce a dependency BC break, we decided to maintain a package ourselves rather than using the latest version because of the hard BC break it would introduce.

**Hard BC break example:**
```html
<link href="/js/jquery/plugins/fancybox/jquery.fancybox.css" rel="stylesheet" type="text/css"/>
```
If the snippet above, which is responsible for loading the `fancybox` jQuery plugin, is removed, any external JavaScript code that runs and uses it will fail.

**Soft BC break example:**

Just like PrestaShop, dependencies too have release lifecycles. In order to fix known bugs, benefit from the new features being implemented and sometimes to patch security issues, we regularly upgrade our dependencies. 
Upgrading to a new version might break existing code that rely on specific behaviors of a version.

### How PrestaShop maintainers handle this type of BC break

We almost never remove dependencies except the case where it contains a security issue.

When we need to upgrade a dependency, we try to upgrade it to a version offering backward compatibility, following SemVer guidelines. We read the Changelog to find possible BC breaks.

If the dependency requires an update (example: if there is a known vulnerability embedded) and the upgrade introduces BC breaks, we sometimes decide to maintain ourselves the dependency in order to provide the security _and_ the backward compatibility. But this is a huge maintenance cost.

Recently bypassed this rule of ourselves for tinyMCE: we upgraded tinyMCE [from 4.0.16 to 4.9.8](https://github.com/PrestaShop/PrestaShop/pull/17651) although this is a not backward compatible change. This was however necessary because some huge bug fixes in recent versions were needed for PrestaShop.

### Compatibility drop

Sometimes, upgrading a dependency also brings in a new type of BC break: compatibility drop.

For example if you use the version 1.0.1 of a library which is compatible with php5.6 to php7.2 ; and if the version 2.0.4 of this library is only compatible with php 7.1 to php 7.3, then the upgrade introduced a "compatibility drop" BC break that makes the software not fully compatible with php5.6 anymore ! We actually [had this exact usecase](https://build.prestashop.com/news/announcing-end-of-support-for-obsolete-php-versions/) recently and had to make the decision of which php versions to drop.

## Templating BC break

Since PrestaShop is a web project, we use PHP templating engines Smarty and Twig to render our templates and provide modules and themes developers the ability to extend our Smarty and Twig templates.

However Twig templates use a set of available variables and functions that are loaded into templates. For example:
```php
$tpl = $this->context->smarty->createTemplate(_PS_THEME_DIR_ . 'product-list-colors.tpl');
$tpl->assign(['id_product' => (int) $product['id_product']]);
```

Modifying these variables and functions become a BC break too. This means variable being injected in our templates become part of the PrestaShop API that is being directed by SemVer.

**Hard BC break example:**
```php
$tpl->assign(['id_product' => (int) $product['id_product']]);
```
becomes simply
```php
$tpl->assign(['product_id' => (int) $product['id_product']]);
```
Any Smarty template using the variable `id_product` will now crash with error message `Notice: Undefined index: id_product`

**Soft BC break example:**
```php
$tpl->assign(['id_product' => (int) $product['id_product']]);
```
becomes
```php
$tpl->assign(['id_product' => (string) $product['id_product']]);
```
In the snippet of code above, the variable type was changed from integer to string. This might break Smarty template using this variable although thanks to PHP [Type juggling](https://www.php.net/manual/en/language.types.type-juggling.php) it might also continue to work.

### How PrestaShop maintainers handle this type of BC break

We try not to introduce such changes as there is no such thing as deprecation for Smarty/Twig variables and structure. If however we are forced to do so, we try to inform users of the change into the Release Note.

## Database BC break

PrestaShop modules can do pretty much anything once installed in PrestaShop, including querying the MySQL database. To do so they can either use the PrestaShop ORM or write custom SQL queries. If they use SQL queries, they will consequently write table and column names. If we decide to modify PrestaShop SQL schema and modify table and column names, we break the code of these modules.

This means that in PrestaShop we consider that the SQL schema is part of the PrestaShop API that is being directed by SemVer, and any change of this schema into a minor or patch version must be done in a backward compatible way.

**Hard BC break example:**
```SQL
SELECT ps_customer.lastname FROM ps_customer WHERE ps_customer.id_customer = 1
```
If `customers` SQL table is renamed to `end-users`, the SQL query above will fail with error message `Table 'ps_customers' doesn't exist`

**Soft BC break example:**
```SQL
SELECT ps_customer.lastname FROM ps_customer WHERE ps_customer.id_customer = 1
```
If we decide to stop storing first names and last names separately, we might put the full name inside `lastname` column. The SQL query above will return a valid result, but the returned data will be different from before.

### How PrestaShop maintainers handle this type of BC break

We try not to introduce such changes as there is no such thing as deprecation for database schema.
If however we are forced to modify the schema in a backward incompatible manner, we usually provide clear steps and help for developers to upgrade (example: keeping an old column to help migrating the data although it is not used anymore).

## Folders and files BC break

This is the last type of BC break we monitor in PrestaShop.

PrestaShop is a complex software and many of its features require the usage of a specific structure of folders: storing PDF files, storing images, importing CSV files, or installing modules.

This folder structure is standard and documented, and modules developers can use it to implement behaviors related to these features. Which means that if we decide to modify this folder structure, we break the modules relying on them. And here is our last type of BC break.

So we cannot rename a folder - or even a file - without introducing a BC break.

**Hard BC break example:**

Deleting or removing a folder make it impossible to use for external code.

**Soft BC break example:**

Modifying how files are stored inside this structure, consequently possibly affecting the use of this folder by external code.

### How PrestaShop maintainers handle this type of BC break

We try not to introduce such changes as there is no such thing as deprecation for folders or files.
If however we are forced to modify it in a backward incompatible manner, we usually provide clear steps and help for developers to upgrade (example: keeping an old folder to help migrating the data although it is not used anymore).

On the server side, using [symbolic links](https://en.wikipedia.org/wiki/Symbolic_link) might mitigate the issue.

## Exemples of BC breaks done at PrestaShop

We found that, although its signature said the return value should be a boolean, `Configuration::updateValue()` could return other types. However forcing the type to boolean would be a soft BC break. We discussed this matter and concluded to [introduce the BC break nonetheless](https://github.com/PrestaShop/PrestaShop/pull/16818) as it was a bug fix and the impact was supposedly very small.

When reworking how [CLDR](http://cldr.unicode.org/) is used in PrestaShop, we found that some old interfaces of ours were too limiting. After discussing this matter, we concluded that the BC break was necessary and [introduced the hard BC break](https://github.com/PrestaShop/PrestaShop/pull/15643) by adding functions to an interface. Any php class implementing this interface would break after upgrading.

In 2019, [we improved greatly how PrestaShop manages version numbers](https://github.com/PrestaShop/PrestaShop/pull/12251), but at the cost of modiying how it understand some of them.

## BC breaks can be done for security

PrestaShop 1.7 is a major version and is currently evolving through minor versions (PS 1.7.6, PS 1.7.7) which means that maintainers are not supposed to introduce BC breaks according to SemVer.

The PrestaShop team tries its very best to achieve this goal however there is one situation where backward compatibility is not a priority anymore: security. If we find that a specific set of code inside PrestaShop codebase (or in its dependencies) is a threat to the software and its community of users, we will take the necessary measures to eliminate it, and sometimes this requires introducing BC breaks.

So we value the security of PrestaShop users more than backward compatibility.

## Conclusion

Working with the constraint of SemVer is a big challenge for everybody working on the PrestaShop project ! Not only does this mean to always keep in mind the different constraints presented above but also it means sometimes having to provide an extra layer of compatibility to not only introduce a new change but also keep previous behavior working !

However if for the people working on PrestaShop, SemVer is a (sometimes painful) constraint, we know that this contract is what allows shop, module and theme developers to work confidently.

