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

In 2011, Marc Andreessen famously wrote "Software is eating the world".
We can all see nowadays that this prophecy turned out very true: software has definitely eaten this world in this entirety. However software has also evolved in how it is being built.

It becomes harder every day to find an application that does not have dependencies. By dependency we refer to a software component (a package, a library, an application...) that require some specific other software packages to function. For example the package [Doctrine ORM](https://github.com/doctrine/orm) that requires the [Symfony Console](https://github.com/symfony/console) package.

Most of the time, using a dependency is a practical mean to avoid reinventing the wheel. Why would you re-implement a PHP HTTP Client when the famous [Guzzle](http://docs.guzzlephp.org/en/stable/) is available, why would you re-build a Logger when the widely used [Monolog](https://github.com/Seldaek/monolog) can be used instead ? The right dependencies allow developers to build faster and focus on the core of their business rather than reinventing components that already exist. This is a great example of the concept of ["dwarfs standing on the shoulders of giants"](https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants) being implemented.

Dependencies can come in many shapes and forms:
- A SDK that depends on a web API definition, such as GitHub
- A library that depends on a software package
- A Java application that needs to be run into the Java Virtual Machine

However **depending on an external software package also means you tie somehow your project fate to this component**. This package is likely to evolve through new versions and your project will be affected by what changes these new versions bring.

For now, let's focus on PrestaShop usecase: a project that rely on library dependencies such as [Symfony](https://symfony.com/) or Guzzle.

## Backward Compatibility and Backward Compatibility Breaks

From the moment a project starts relying on dependencies, a relationship emerges. And also comes the concept of _Backward Compatibility and Backward Compatibility Breaking Changes_.

According to Wikipedia, [Backward compatibility is a property of a system, product, or technology that allows for interoperability with an older legacy system](https://en.wikipedia.org/wiki/Backward_compatibility).

Let us consider a project A using library B as a dependency and project A is built using version 3.4 of library B.

If a new version 4.0 of library B is released and project A is still fully functional when using version 4.0 instead of version 3.4, we can say this version 4.0 is _backward compatible_ (and that is a relief for the developers of project A).

If however some changes have been introduced in version 4.0 of library B in a way that is not compatible anymore with how the project A was using the library B, it means this version 4.0 has broken the backward compatibility. Consequently we can say version 4.0 of library B introduced _Backward Compatibility Breaks_ ... and developers of project A need to find what exactly these changes are, in order to update their project to run with the new version 4.0 of library B.

There is no standard definition of a Breaking Change, but I’ll borrow [the one from Brian Ambielli](https://bambielli.com/til/2018-01-12-what-is-a-breaking-change/) to define that breaking changes are _non-backwards compatible changes to the contracts of methods you expose to your consumers through your API interfaces_.


## The contract and API interfaces for dependencies

What does "API interface" or "contract" exactly mean in the definition "non-backwards compatible change to the contracts of methods you expose to your consumers through your API interfaces" ?

The API interface of a dependency is, by default, the public and/or available interfaces that allow another project to use/interact with it.

For example if we consider the following class from [this example library](https://github.com/matks/bc-break-example):

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

    public function print()
    {
        return sprintf('%s %s', $this->amount, $this->currency);
    }

    public function getCurrency()
    {
        return $this->currency;
    }
```

If a project integrates this library as a dependency and wishes to extend this behavior, a very standard way to do so is to use [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)).

For example maybe project A needs a Money object with an identifier ? So it could create its own child class:

```php
class ExtendedMoney extends Money
{
    /** string */
    public $identifier;
}
```

This is possible because the class is not [final](https://www.php.net/manual/en/language.oop5.final.php) so it is open for inheritance. It can be then considered that this class, and all of its protected and public properties and methods, are part of the API interface of this project. And the _contract_ of this library is the current definition of this interface: the method name, the parameters, the return type... This means that any non-backwards compatible change to this contract is a Breaking Change.

For example this would be a Breaking Change:
```php
class Money
{
    /** @var float */
    private $amount;
    /** @var Currency */
    private $currency;

    public function __construct(float $amount, Currency $currency, bool $aNewVariable) // a new argument
```
Adding a parameter to the `__construct()` is a change of the class contract. This is going to break how the project A uses this library. As a result, when instantiating the `ExtendedClass` the following error message will be thrown:

```
PHP Fatal error:  Uncaught ArgumentCountError: Too few arguments to function __construct(), 2 passed and exactly 3 expected
```

However this is not a Breaking Change:
```php
class Money
{
    /** @var float */
    private $amount;
    /** @var Currency */
    private $currency;

    public function __construct(float $amount, Currency $currency, ?bool $aNewVariable = null)
```
Providing a default value for the new argument preserves constructions of the class Money using only two arguments. This is a change in the contract of this class, but it is backward compatible.

## SemVer

In order to make it easier for developers to predict whether a new version of a dependency introduces Backward Compatibility Breaks, [Tom Preston Werner](http://tom.preston-werner.com/) invented a convention: [SemVer](https://semver.org/). [SemVer](https://semver.org/) aims, among other goals, to help developers immediately understand, when seeing a new software version, what to expect regarding its compatibility with current software.

SemVer requires the version number of a project to be constituted of 3 parts: MAJOR.MINOR.PATCH. For example 3.5.27 is a valid SemVer version number while 2.3 is not.

### Summary of SemVer rules 

This is the definition of SemVer:

```
Given a version number MAJOR.MINOR.PATCH, increment the:
MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards compatible manner, and
PATCH version when you make backwards compatible bug fixes.
```

This can be translated as follow:

When a new version of a project is released, if the new version contains bug fixes introduced in a backward compatible manner, it is a new _patch version_ and then the PATCH number is increased.

> Example: upgrading from 3.5.27 to 3.5.28 is a patch version upgrade

When a new version of a project is released, if the new version contains bug fixes and new features, all of them having been introduced into the project in a backward compatible manner, it is a new _minor version_ and then the MINOR number is increased while the PATCH number is reset.

> Example: upgrading from 3.5.27 to 3.6.0 is a minor version upgrade

When a new version of a project is released, if the new version contains changes to the project API interfaces that are not backward compatible, it is a new _major version_ and then the MAJOR number is increased while the PATCH number and MINOR numbers are reset.

> Example: upgrading from 3.5.27 to 4.0.0 is a major version upgrade

<hr>

A developer who uses a dependency that follows SemVer can consequently easily find whether a new version introduces Backward Compatibility Breaking Changes, or, shorter, "BC breaks".

Looking at the new version number, it is possible to see whether this is a patch, a minor or a major version. And consequently one knows that:

- If it is a patch version, upgrading to use the new version will bring no change in behavior, it will only bring backward compatible bug fixes
- If it is a minor version, upgrading to use the new version might bring new functionalities but all behaviors previously existing before are still functioning, this version is backward compatible
- If it is a major version, it is needed to check what has been modified because it contains incompatible changes. Changes in the code relying on this software are to be expected.

## Defining an API interface

When a library is built to be used as a dependency, it must define its contract. This is the contract that follows SemVer rules, the contract that the library developers bound themselves to maintain.

There are two ways to define this contract: explicitely or implicitely.

Projects that have an explicit contract provide a description of the API interface it covers.

It can be a list of PHP classes, it can be a list of reachable Web API endpoints, it can be a markup language used to interact with the dependency... the shape is free. What is important is that these projects clearly define the API interface, so the rest of the project (outside of the contract) does not need to comply with SemVer rules, and can evolve with a lot more freedom.

However very few projects do define this contract. Most projects, as far as I know, rather default to an implicit contract.

An implicit contract could be summarized by "everything that is open for extension is in the contract". For a PHP library, this means all classnames, all public and protected methods, all public properties, all interfaces. Basically "if you can use it from outside, it is in the contract". 

For this class example:
```php
class Money
{
    /** @var float */
    private $amount;
    /** @var Currency */
    private $currency;

    public function __construct(float $amount, Currency $currency)

    public function print()

    public function getCurrency()
```
If no contract is explicitely defined, then the implicit contract is:
- the classname : changing it is a BC break
- the constructor and its argument types: changing it is a BC break
- the function print and its return type: changing it is a BC break
- the function getCurrency and its return type: changing it is a BC break
- also since the class has not been marked `final` it is implicitely supporting inheritance 
- the private properties, however, are not usable from external classes so they are not part of the contract

As you can see, the "default contract" is a greedy contract. "Everything that is open for extension is covered by the contract".

### Major version zero

One interesting situation regarding SemVer and API interfaces is projects using _major version zero_.

These projects, that are in an early phase of their life, will keep releasing 0.x releases until they consider they have reached a level of maturity high enough to be able to define an API interface that can stand in time. Once they reach this stage, they release a first major version 1.0.0 and from this moment start following SemVer rules for backward compatibility.

[React](https://en.wikipedia.org/wiki/React_(web_framework)) is a famous example for having performed a huge version leap by releasing a version 15.0.0 following their latest version zero release 0.14.0 . [PHPStan](https://github.com/phpstan/phpstan/) is still in the major version zero phase with its latest release being 0.12.47.

## Why do projects introduce Backward Compatibility Breaks ?

BC breaks are a [hindrance](https://www.snoyman.com/blog/2018/04/stop-breaking-compatibility) for the users of a dependency as they require an upgrade of the code relying on it. So it seems getting rid of them, never introducing BC breaks would be a nice idea, right?

Unfortunately BC breaks are necessary for software to evolve. Maintaining backward compatibility strongly limits the options of the dependency maintainers and can stand in the way of necessary evolutions. This is why they are needed and why they are introduded in new major releases.

However maintainers must be aware that upgrading a project because of a BC break introduced in a dependency can be a very costly operation. This is why it is important for maintainers to provide their users with the means to perform the necessary adjustments: at least a list of the BC breaks introduced per version, even better is a document explaining how to update their code or helper messages in the code such as [deprecation messages](https://en.wikipedia.org/wiki/Deprecation).

### Backward Compatibility Breaks in the case of PrestaShop

PrestaShop is a [CMS](https://en.wikipedia.org/wiki/Content_management_system), which means it is customizable and extensible. Extension can be achieved by using modules, themes, or using other [extension mechanisms](https://devdocs.prestashop.com/1.7/modules/concepts/) of the platform.

In this situation, PrestaShop _is_ the dependency on which extensions rely.

These extensions need stability from the API interface they rely on. Hooks, overrides, inheritance: these extension mechanisms are a critical part of the API interface provided by the PrestaShop project.

For example the modules and themes are built by developers that want to market their products to an audience as large as possible. If these modules rely on an API interface that is being changed in a backwards incompatible manner, this is a bother for the modules developers. It means for example they have to provide a different version of their product for PrestaShop 1.7.5 and 1.7.6 because of such a change in PrestaShop 1.7.6.

Hence, BC breaks limit the capability of modules to provide a huge compatibility range.

This is an example of the consequences of introducing a BC break in PrestaShop.

Yet BC breaks are a necessary step for PrestaShop to evolve in time. And [evolution is necessary](https://build.prestashop.com/news/prestashop-in-2019-and-beyond-part-3-the-future-architecture/) to ensure the CMS continues to fit the needs of its user community, needs that evolve with time. Software that does not evolve is bound to disappear, replaced by better competitors.

## Next part

In this article, I introduced many concepts and challenges that emerge when working and using an open source software. Although they are critical, they are not widely understood and I hope that I have helped making it less abstract.

In this article we have discovered together these concepts and what they mean. In a next article, I will dive into the details of Backward Compatibility Breaks in PrestaShop software: the different kind of BC breaks you might encounter and how maintainers manage them to help modules and themes adapt to these changes.
