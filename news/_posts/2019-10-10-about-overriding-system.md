---
layout: post
title:  "The future of PrestaShop's overrides system"
subtitle: "From 2010 to 2019, what we have learned"
date:   2019-12-27 10:30:00
authors: [ mickaelandrieu ]
icon: icon-calendar
tags:
 - core
 - hooks
---

# The future of PrestaShop's overrides system

TLDR; the overrides system is deprecated in 1.7. It's not fully usable in the back office, and using it the front office is discouraged. It will be removed in the next major version of PrestaShop.


## What are the overrides?

Introduced in PrestaShop 1.4.x almost 9 years ago (in 2010 for the first alphas!), the overrides system allows developers to replace PrestaShop Core classes in their shop with their own. Since 1.6.x, this system was extended to allow modules to do it as well.

At the time, the goal was to provide a better solution for developers who needed to alter the default behavior of PrestaShop for their needs, and who used to modify the source files directly. Changing files made it harder to keep PrestaShop updated, as changes to files were lost after the upgrade.
With overrides, the modified files were located in a specific folder, both at the Shop or Module level. This way, upgrading the shops was easier: no need to care about these modified files anymore, PrestaShop was able to deal with them on its own.

### Please, show me an example!

A community member [recently requested](https://github.com/PrestaShop/PrestaShop/pull/11910) some classes to be changed in order to allow module developers to alter both the Customer Form and Customer Form Formatter.

PrestaShop provides two native (or Core) classes for this, *CustomerForm* and *FormFormatter*, but their implementation didn't fit his client's needs. So his strategy was to override the two classes with his own, extending the core classes to avoid having to rewrite the common parts.

We didn't discuss details about the developer's needs, but we can imagine he wants to be able to override this function in charge of defining the Customer form:

```php
<?php
// override/classes/form/CustomerFormatter
use CustomerFormatter as NativeCustomerFormatter;

class CustomerFormatter extends NativeCustomerFormatter
{
    public function getFormat()
    {
        // Here is the business logic to create the form
        // with the right fields.
    }
}
```

Doing that allow this class to be used as a replacement of the original class in the Core.

 But... the core implementation is not "extensible" enough: this is a problem! Most of its properties are private and a function named `addConstraints` (in charge of  the Form validation) is private!

Also, he'd like to use the translator directly from the customer.

 His request was reasonable, but we won't be able to accept this kind of changes anymore.

### The end of the overrides system

The overrides system has been here for 9 years now, and we have had a lot of feedback about it. Since developers are allowed to alter the Core's behavior from their modules, and since it's impossible for us to make sure that Core upgrades won't break those changes, we have been unable to fix the so-called "upgrading was terrible mistake" issue (as frequently seen in the forums). We have only have taken the responsibility of it.

The truth is that the only person able to ensure that its override won't break when the core will be upgraded is the person in charge of that override. After nine years, upgrading a shop is still a terrible experience for some, which are (rightfully so) very vocal about it. This in turn scares many people away from upgrading, because they would prefer letting their shop get outdated (from technical point of view) rather than risking breaking it. We have worked hard on the upgrade module, which now is much better at identifying what could go wrong during the upgrade: database migrations, non existing/deprecated classes, functions/cache issues and so on. It's a very complex process, and it's better than it has ever been, even if there will always be edge cases.

 > We can say that undoubtely, the overrides system was a bad idea and we
> are deprecating it.

### Overriding system deprecation in 1.7.x releases

As most of you have noticed, it's not possible to override core classes located in the `src` folder: this is intended and not something that will be implemented/introduced back later.

The overrides system is still available on "soon-to-be-migrated" back office pages, but we strongly discourage you from using it as when pages will be migrated, this feature won't be backported.

The overrides system is deprecated in PrestaShop Front Office (and on the Customer Back Office): it will be available until the end of 1.7.x. An opt-in warning will be issued when they are used, in order to help developers prepare the migration to the next major version.

The documentation will be updated and we will remove every mention of overrides.

### Overrides system in the next major release

The roadmap for the next major version is far from ready, but one of the main features we are aiming for is the complete migration of the Front Office using Symfony Framework and Twig. This will allow developers to have the same experience in both the Front Office and the Back Office.
Overrides won't work and the override folder will be ignored.
It's really too soon to think about it, but this probably means that the native PrestaShop autoloader will be removed in the next major, and be replaced completely by Composer's autoloader.

## How to override PrestaShop native behavior?

**The best and recommended way of altering PrestaShop behavior is using the hook system for data changes, and the templating override system for view changes.**

Because we had the overrides system, we became lazy: after all, why should we care about adding extension points when developers can override almost everything in the classes?

PrestaShop has a very long list of useful and not-that-useful hooks. In PrestaShop 1.7.3 we introduced a new Hook Profiler to help developers figure out which hook(s) can help them to improve their shop and fulfill their customer's needs.

In PrestaShop 1.7.5 the profiler has been further improved, making executed hooks and available arguments in the modules discoverable in a web interface. We have many ideas to continue improving this system and make your experience with hooks more enjoyable.

However, hooks are slow, which made us less and less at ease with the idea of adding new hooks (ie. adding new extension points) in the core: isn't that weird in an extensible platform?

In PrestaShop 1.7.5, we have started working on a new hook architecture, built on top of the Symfony Event Dispatcher component. This won't be available in 1.7 because we don't want to break the current system, but this new architecture will allow a very large number of hooks with minimal impact on system performance.

The main advantage of hooks compared to the overrides is that they are not exclusive, meaning that multiple modules can "hook" together and alter the same behavior, and they are easy to track thanks to the new hook profiler.

### Good news, nothing new to learn!

In the next major, the class names linked to the Hook may change, but the system, the idea, the principles are the heart of PrestaShop and will stay and be improved.
Since we will continue adding more and more hooks to the Core, most of the time developers won't need to use overrides.

### And we are improving the way business logic is organized

If you compare legacy files on the `classes` folder to `src` folder, where most of the new 1.7 code lives, you will probably notice  that classes and templates are smaller, more meaningful and organized by domain.

Back in the old days of MVC (Model View Controller) system, Controllers were supposed to own most of the business logic, and Models and Views should avoid declaring business logic at all costs.

Inspired by [Symfony's Best Practices](https://symfony.com/doc/3.4/best_practices/index.html), we are now switching to really thin controllers with only one responsibility: receive a request from the user and send back a valid response. Most of the business logic is now owned by "Domain" classes (alternatively referred to as "services").

In PrestaShop 1.6, most of the interesting functions were in huge classes like Tools, Product or Cart... those classes have way too many responsibilities, making them hard to understand and almost impossible to test or to override properly without breaking a lot of behavior without even noticing it.

In PrestaShop 1.7, and for a big part in the ``Core`` folder we are working on uncoupling our domain (Product management, Cart management, Grid management...) from our framework (Forms, Validation, Pages, Security).
This work has allowed us to start adding [unit tests](https://en.wikipedia.org/wiki/Unit_testing) and apply widely accepted best practices in software design, like the [SOLID principles](https://en.wikipedia.org/wiki/SOLID).
For instance, since PrestaShop 1.7 you have a Service Container in charge of constructing objects and to making them available everywhere you need them: no more `new XX(XX, YY, ..)` in your code.

More importantly, since this service container is available in the modules, you can reuse the core services or even... "override" them with your own!

### So, the overrides system is back... but in another way?

Not... exactly, because as core team members we need to decide which service/class can be overridden or not: this means finally working on the right extension points. 

> This is why we need you to tell us your needs!

Also, you won't be able to extend the classes you plan to override.
Thinking about development best practices: a class must have one and only one responsibility, right?

*This means that - if this class doesn't fits your needs - at some point, someday you will consider its behavior as a bug.*

So, instead of making our implementations more open and extensible, we want to make our platform easier to enrich: each implementation will have a contract, and once you implement the contract you are garanteed your "override" will works smoothly on the platform.

Let's be honest, it's a little bit more work for you (and a lot for us), but you will have more control on your shop (you own the code, you do what you want to do in your classes) and your upgrading path will be easier (an upgrade won't be able to break cause of your override).
