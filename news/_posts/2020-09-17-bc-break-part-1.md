---
layout: post
title: "A deeper look at Backward Compatibility Changes"
subtitle: "About dependencies, API interfaces, SemVer and Backward Compatibility Changes"
date:   2020-09-17
authors: [ MathieuFerment ]
image: /assets/images/theme/meta-logo-build.png
icon: icon-code
tags: [contribution, opensource, development]
---

In 2011, Marc Andreessen famously "Software is eating the world".
We can all see nowadays that this prophecy turned out very true: software has definitely eaten this world in this entirety. However software has also evolved in how it is being built.

It becomes harder every day to find an application that does not have dependencies. By dependency we refer to a software component (a package, a library, an application...) that require some specific other software packages to function. For example the package [Doctrine ORM](https://github.com/doctrine/orm) requires the [Symfony Console](https://github.com/symfony/console) package.

Most of the time, using a dependency is a practical mean to avoid reinventing the wheel. Why would you re-implement a PHP HTTP Client when the famous [Guzzle](http://docs.guzzlephp.org/en/stable/) is available, why would you re-build a Logger when the widely used [Monolog](https://github.com/Seldaek/monolog) can be used instead ? The right dependencies allow developers to build faster and focus on the core of their business rather than reinventing components that already exist. This is a great example of the concept of ["dwarfs standing on the shoulders of giants"](Standing on the shoulders of giants) being implemented.

Dependencies can come in many shapes and forms:
- A SDK that depend on a web API definition, such as GitHub
- A library that depends on a software package
- A Java application that needs to be run into the Java Virtual Machine

However **depending on an external software package also means you tie somehow your project fate to this component**. This package is likely to evolve through new versions and your project will be affected by what changes these new versions bring.

For now, let's focus on PrestaShop usecase: a project that rely on library dependencies such as [Symfony](https://symfony.com/) or Guzzle.

## Backward Compatibility and Backward Compatibility Breaks

From this relationship between a project and its dependency, comes the concept of _Backward Compatibility and Backward Compatibility Breaking Changes_.

According to Wikipedia, [Backward compatibility is a property of a system, product, or technology that allows for interoperability with an older legacy system](https://en.wikipedia.org/wiki/Backward_compatibility).

Let us consider a project A using library B as a dependency and project A is built using version 3.4 of library B.

If a new version 4.0 of library B is released and project A is still fully functional when using version 4.0 instead of version 3.4, we can say this version 4.0 is _backward compatible_ and that is a relief for the developers of project A.

There is no standard definition of a Breaking Change, but I’ll borrow [the one from Brian Ambielli](https://bambielli.com/til/2018-01-12-what-is-a-breaking-change/) to define that breaking changes are _non-backwards compatible changes to the contracts of methods you expose to your consumers through your API interfaces_.

Back to our project A, this means that if some changes have been introduced in version 4.0 of library B in a way that is not compatible anymore with how the project A was using the library B, it means this version 4.0 has introduced Backward Compatibility Breaks ... and developers A need to find what exactly these changes are, in order to update their project to run with this new version.

## API interfaces for dependencies

The definition we used for Breaking Change is "non-backwards compatible change to the contracts of methods you expose to your consumers through your API interfaces."

What does API interface exactly mean ?

The API interface of a dependency is, by default, the public and/or available interfaces that allow another project to use/interact with it.

For example if we consider the following class from [this library](https://github.com/matks/bc-break-example):

```php
class Money
{
	/** @var float */
	private $amount;
	/** @var Currency */
	private $currency;

	public function __construct(float $amount, Currency $currency)
	{
		$this->amount = $amount;
		$this->currency = $currency;
	}
```

If a project integrates this library as a dependency and wishes to extend this behavior, a very standard way to do so is to use [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)).

For example maybe project A needs a Money object with an identifier ? So it could do:

```php
class ExtendedMoney extends Money
{
	/** string */
    public $identifier;
}
```

This is possible because the class is not [final](https://www.php.net/manual/en/language.oop5.final.php) so it is open for inheritance. It can be then considered that this class, and all of its protected and public properties and methods, are part of the API interface of this project. This means than any non-backwards compatible change to this class is a Breaking Change.

So this is a Breaking Change:
```php
class Money
{
	/** @var float */
	private $amount;
	/** @var Currency */
	private $currency;

	public function __construct(float $amount, Currency $currency, bool $aNewVariable)
```
Changing the signature of the `__construct()` is going to break how the project A uses this library. Because when instantiated, the `ExtendedClass` with the following error message:

```
PHP Fatal error:  Uncaught ArgumentCountError: Too few arguments to function __construct(), 2 passed and exactly 3 expected
```

But this is not a Breaking Change:
```php
class Money
{
	/** @var float */
	private $amount;
	/** @var Currency */
	private $currency;

	public function __construct(float $amount, Currency $currency, bool $aNewVariable = null)
```
By providing a default value for the new argument, previous constructions of the class Money using only two arguments will continue functioning.

## SemVer

In order to make it easier for these developers to predict whether a new version introduces Backward Compatibility Breaks, [Tom Preston Werner](http://tom.preston-werner.com/) has invented a convention: [SemVer](https://semver.org/). [SemVer](https://semver.org/) aims to help people immediately understand, when seeing a new software version, what to expect regarding its compatibility with current software.

SemVer requires a version number to be constituted of 3 parts: MAJOR.MINOR.PATCH (example: 3.5.27) .

### SemVer summary

```
Given a version number MAJOR.MINOR.PATCH, increment the:
MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards compatible manner, and
PATCH version when you make backwards compatible bug fixes.
```

When you release a new version of your software, if the new version only contains bug fixes, it is a patch version and you increase the PATCH number. Theoretically no BC Breaks are to be found in this version.

> Example: 3.5.27 => 3.5.28
When you release a new version of your software, if the new version only contains bug fixes and new features, but it is backward compatible, it is a minor version and you increase the MINOR number and reset the PATCH. Theoretically no BC Breaks are to be found in this version.

> Example: 3.5.27 => 3.6.0
When you release a new version of your software, if the new version number contains BC Breaks, it is a major version and you increase the MAJOR number and reset the MINOR and the PATCH numbers.

> Example: 3.5.27 => 4.0.0
<hr>

As a developer who builds software relying on this library, when you see a new version number, you can see whether this is a patch, a minor or a major version. And consequently you know that:

- If it's a patch version, upgrading to use the new version will bring no change in behavior, it will only bring bug fixes
- If it's a minor version, upgrading to use the new version might bring new behaviors you can use but all behaviors you are using are still usable, this version is backward compatible
- If it's a major version, you need to check what has been changed to see whether you need to adjust your code

This is very useful for developers. Being able, from the version number, to understand the impact this change can have on your software is very useful!

## Why do projects introduce BC breaks ?

When reading this, you might wonder why people release new major versions of a software. If everybody would only release minor versions following SemVer, nobody would ever be afraid of upgrading its software because of BC breaks! Would'nt it be amazing, a software world without BC breaks and the fear of them?

Moreover PrestaShop is a CMS, which means it is customizable and extensible. Extension often comes from installing modules and a theme.

These modules and themes are built by developers that want to sell it to an audience as large as possible. A BC break that impacts some code they are using is [a bother to them](https://www.snoyman.com/blog/2018/04/stop-breaking-compatibility).
It means for example they have to provide a different version of their product for PrestaShop 1.7.5 and 1.7.6 because of a change in PrestaShop 1.7.6.

BC breaks hinder the capability of modules to provide a huge compatibility range.

Unfortunately... BC breaks are necessary for software to evolve. Not all software changes can be done while maintaining backward compatibility, and BC breaks are a necessary step for a project to evolve in time. And [evolution is necessary](https://build.prestashop.com/news/prestashop-in-2019-and-beyond-part-3-the-future-architecture/) to ensure it continues to fit the needs of its user community, who evolve in time. Software that does not evolve is bound to disappear, replaced by better contributors.

