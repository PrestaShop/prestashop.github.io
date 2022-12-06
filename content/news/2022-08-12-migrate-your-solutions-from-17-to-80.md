---
layout: post
title: "Migrate your solutions from PrestaShop 1.7 to 8.0"
subtitle: "Summary of notable changes for developers"
date: 2022-08-15
authors: [kpodemski]
icon: icon-road
tags:
- tutorial
- major
- 8.0
---

PrestaShop 8 beta version was [released last week.](https://build.prestashop.com/news/prestashop-8-0-beta-release/) If you are a developer in our ecosystem, create modules or themes, and have clients working with PrestaShop, this is an excellent opportunity to spend some time with this version and test your solutions.

In this article, I will focus on things that might affect your work. You will read here about changes that are not backward compatible, and could require you to make changes in the code of your solutions.

It is worth noting that PrestaShop 8 is a new major version. Although it is an evolution rather than a revolution, you will find several software code changes that can significantly impact some of you.

As always, we have done our best to make all important information about changes available in the [developer documentation](https://devdocs.prestashop.com/8/). This article is an introduction and explanation to the content you will find there.

## PHP 8.0 and 8.1

PrestaShop 8 brings support for... PHP 8 and 8.1. This is one of the most important elements of the upgrade to version 8. Each new PHP version brings better performance and many features that will make the developers' work easier. This does not mean that PrestaShop will require PHP 8.1, the [minimum compatible version is PHP 7.2.5](https://devdocs.prestashop.com/8/basics/installation/system-requirements/#php-compatibility-chart), but we recommend using the latest available PHP version when possible. Security is a serious matter (always), and PHP 8.1 [guarantees support with security updates](https://www.php.net/supported-versions.php) until November 2024.

We recommend making your solutions compatible with the same range of PHP versions as PrestaShop is compatible with (that is, 7.2~8.1). For this, you must make sure not to use the language features introduced in PHP versions that are more recent than PHP 7.2. At the same time, in order to make your code work with PHP 8.1, you must make sure to take into account all features that might have been deprecated or removed in PHP 8 and 8.1, and avoid using them. The list of backward incompatible changes and new deprecations is available on the PHP website:

* [Migrating from PHP 7.4 to PHP 8](https://www.php.net/manual/en/migration80.php)
* [Migrating from PHP 8 to PHP 8.1](https://www.php.net/manual/en/migration81.php)

PrestaShop’s code also had to be modified to become compatible with the two PHP versions. You can find details of modifications in these Pull Requests:

* [Update to PHP 8.0](https://github.com/PrestaShop/PrestaShop/pull/25296)
* [Update to PHP 8.1](https://github.com/PrestaShop/PrestaShop/pull/28402)

This could give you an overview of what you might face while upgrading.

One of the changes that can directly impact many solutions that work with PrestaShop is the `Attribute` class change, which has been renamed to `ProductAttribute`. The word `Attribute` is now reserved in PHP, hence the need for this change.

Updating PHP and Symfony required some of the dependencies used in the project to be updated. You can find the list of updates here: [List of updated dependencies](https://devdocs.prestashop.com/8/modules/core-updates/8.0/#updated-dependencies).

If your solution uses one of the updated libraries, you may need to update your code to be compatible with the updated versions. Check the websites of the library creators for more details.

The [Guzzle](https://github.com/guzzle/guzzle) library has been upgraded from version 5.3 to 7.4. This is worth noting because many libraries use Guzzle as their own dependency, and this library now behaves very differently compared to previous versions. If you use a library that depends on Guzzle 5.3, you might need to update it. 

You can find more information and an upgrade guide in the Guzzle repository:
[Upgrading guide for Guzzle](https://github.com/guzzle/guzzle/blob/master/UPGRADING.md).

## Symfony 4.4

PrestaShop 1.7 was the revolution that began the migration to Symfony, first with version 2.8 in earlier releases, and 3.4 since PrestaShop 1.7.4. PrestaShop 8 introduces Symfony 4.4. As major PrestaShop versions are released in the future, expect updates to the Symfony framework as well. This can also affect your solutions.

The notable changes that directly impact PrestaShop users are available here: [Notable changes related to Symfony update](https://devdocs.prestashop.com/8/modules/core-updates/8.0/#symfony-update).

If you have modules based on Symfony and noticed any elements that need clarification in the documentation, please [add it](https://devdocs.prestashop.com/8/contribute/documentation/how/) or [let us know](https://github.com/PrestaShop/docs/issues/new).

You can find all changes related to adapting PrestaShop to Symfony 4.4 in this Pull Request: [​​Upgrade to Symfony 4.4](https://github.com/PrestaShop/PrestaShop/pull/24609).

## Deprecations and removals

This is probably one of the changes that might have the most significant impact on your solutions.

Many classes and methods marked as "deprecated" in previous versions have been removed in PrestaShop 8. These were methods that the core no longer used or that no longer made sense to keep, like wrappers around natively available PHP functions. A typical example of these functions are`Tools::jsonEncode()` and `Tools::jsonDecode()`.

In this case the change is simple, `Tools::jsonEncode()` must be replaced with `json_encode()`, and `Tools::jsonDecode()` with `json_decode()`. These two functions are natively available in PHP. 

Depending on your development environment, you might have already noticed these deprecations, as many IDEs like PHPStorm or VSCodehighlight call to deprecated methods and classes. You can find a list of deleted methods, classes, properties, constants, files, Symfony services, and others on this page:
[Code removals](https://devdocs.prestashop.com/8/modules/core-updates/8.0/#removals).

Starting with PrestaShop 8, you should see deprecation warnings on the shop’s logs and front office after enabling developer mode. Alternatively, you can configure the display of deprecation errors by setting the [error_reporting directive](https://www.php.net/manual/en/errorfunc.configuration.php#ini.error_reporting) in your PHP configuration to `E_DEPRECATED`.

I encourage you to read this list, and if you find any missing items, please [let us know](https://github.com/PrestaShop/docs/issues/new).

## Changes in methods and their behavior

Removed classes and methods are not the only changes that may cause the need to adjust your solutions.

Several methods have seen changes in their signatures, return types, parameter types, internal behavior, etc. The [complete list of changes](https://devdocs.prestashop.com/8/modules/core-updates/8.0/#api-changes) might give you a better understanding of what changes you will need to apply to update your products.
These changes will affect you if your solutions decorate or override default services or classes, or if you invoke the impacted classes and methods directly. We expect typical solutions to require minimal to no changes at all. 

## Changes in the Hook component

With version 8, PrestaShop will be stricter regarding the implementation and use of hooks in your modules. You must be aware of two changes that may impact your solutions.

The first change concerns Hook registrations that your module does not use. If PrestaShop detects that a module registers for a Hook but doesn’t implement a method for it, an exception will be thrown when in developer mode. This error message is meant to help developers identify errors during module development and should not affect modules in production.

If your PHP configuration is set up to display `E_DEPRECATED` errors, you can also expect to see deprecation messages when using hook aliases. For example, when you register `hookLeftColumn` instead of its correct counterpart, `hookDisplayLeftColumn`.

## Security

With the introduction of the new [password policy management feature](https://github.com/PrestaShop/PrestaShop/pull/28127) in PrestaShop 8, some solutions may need to be updated. For example, those that generate passwords for customers, or create fake users for external integration purposes.

Pay special attention to the field definitions of the `Customer` and `Employee` classes. From now on, these classes require passwords provided as a hash of appropriate strength according to the settings from the back office.

If you happen to have a code similar to this:

```php
$customer = new Customer();
$customer->passwd = ‘SomeWeakPassword’;
//…
$customer->save();
```

It might not work in this version, as the password score validation can fail. 

Since the method `Validate::isPasswd()` has been removed, here is a better way to handle this scenario:

```php
use PrestaShop\PrestaShop\Adapter\ServiceLocator;
use PrestaShop\PrestaShop\Core\Crypto\Hashing;

$customer = new Customer();
$crypto = ServiceLocator::get(Hashing::class);
$customer->passwd = $crypto->hash(Tools::passwdGen(64));
//…
$customer->save();
```

This example comes from the [psgdpr module upgrade](https://github.com/PrestaShop/psgdpr/blob/v1.4.2/upgrade/upgrade-1.4.2.php) file, which had to be upgraded for that exact reason.

To learn more, see the implementation of the new password policy in this Pull Request: [​​Implement a new password policy based on zxcvbn](https://github.com/PrestaShop/PrestaShop/pull/28127).

## Front office and Classic theme

PrestaShop 8 does not include many important changes in the Classic theme. You can see a list here: [Change in the classic theme](https://devdocs.prestashop.com/8/modules/core-updates/8.0/#classic-theme).

The new password policy feature, however, also impacts the storefront. You can put a special widget on the front end that measures password strength. To learn how this was implemented on the Classic Theme: [Add strict password policy](https://github.com/PrestaShop/classic-theme/pull/21).

Besides, if you are a theme developer, you might be interested in tracking the improvements [implemented in the official Classic repository](https://github.com/PrestaShop/classic-theme/pulls?q=is%3Apr+is%3Amerged) and porting them to your own theme.

## Your feedback is key

The maintainers team is doing its best to keep the documentation up-to-date with all the important changes. However, if you see any irregularities or notice behaviors that should be documented, I encourage you to [contribute to the developer documentation](https://devdocs.prestashop.com/8/contribute/documentation/how/).

In upcoming articles, I will introduce you to new features for developers included in PrestaShop 8.
