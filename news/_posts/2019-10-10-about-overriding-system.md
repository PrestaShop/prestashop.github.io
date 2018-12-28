---
layout: post
 title:  "The future of PrestaShop's overrides system"
subtitle: "From 2010 to 2019, what we have learned"
date:   2019-10-10 10:30:00
authors: [ mickaelandrieu ]
icon: icon-calendar
tags:
 - core
 - hooks
---

# About the future of the overriding system of PrestaShop

TLDR; the system is deprecated and not usable anymore in the back office and deprecated/discouraged in the front office. It will be removed in the next major version of PrestaShop in its original form.


## What are the overrides?

Introduced in PrestaShop 1.4.x almost 9 years ago (in 2010 for the first alphas!), the overrides system allows developers to replace PrestaShop Core classes in their shop with their own. Since 1.6.x, this system was extended to allow modules to do it as well.

At the time, the goal was to provide a better solution for developers who needed to alter the default behavior of PrestaShop for their needs, and who used to modify the source files directly. Changing files made it harder to keep PrestaShop updated, as changes to files were lost after the upgrade.
With overrides, the modified files were located in a specific folder, both at the Shop or Module level. This way, upgrading the shops was easier: no need to care about these modified files anymore, PrestaShop was able to deal with them on its own.

 ### Please, show me an example!

A community member [recently requested](https://github.com/PrestaShop/PrestaShop/pull/11910) some classes to be changed in order to allow module developers to alter both the Customer Form and Customer Form Formatter.

PrestaShop provides two native (or Core) classes for this, *CustomerForm* and *FormFormatter*, but their implementation didn't fit his client's needs. So his strategy was to override the two classes with his own, extending the core classes to avoid having to rewrite the common parts.

We didn't discuss details that much the developers needs, but we can imagine he wants to be able to override this function in charge of defining the Customer form:

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

But... the core implementation is not "extensible" enough: this is a bug! Most of its properties are private and a function named `addConstraints` (in charge of  the Form validation) is private!

Also, he'd like to use the translator directly from the customer.

His request was reasonnable, but we won't be able to accept it.

### The end of the overriding system

Overrides are here since 9 years, and we now have a lot of feedbacks about it. Because developers are allowed to alter behavior of Core from their modules and because we are unable to ensure that Core update won't break updates from their modules, we didn't have fixed the "upgrade terrible mistake" issue, we only have taken the responsibility of it.

The truth is that the only person able to ensure that its override won't break when the core will be upgraded is the person in charge of the override. In nine years, upgrading a shop is still a terrible experience and most of the times people don't upgrade their shop and keep their business outdated (technical point of view). We have worked hard on the upgraded module, describing more and more information about what could go wrong during the upgrade: databases migrations, non existing/deprecated classes functions/cache issues and so on.

> We can say that undoubtely, Overriding system was a bad idea and we
> are deprecating it.

### Overriding system deprecation in 1.7.x releases

As most of you have noticed, it's not possible to override core classes located in the `src` folder: this is intended and not something we will implement/introduce back later.

The override system is still available on "soon-to-be-migrated" pages, but we strongly discourage you to rely on it as when pages will be migrated, this feature won't be backported.

The override system is deprecated in PrestaShop Front Office (and on the Customer Back Office): this will works until the end of 1.7.x and we will probably add some warnings when used to help developers to prepare the migration to the next major version.

The documentation will be updated and we will remove every mention of overrides.

### Overriding system in 1.8.x releases

The roadmap of 1.8.0 is far from ready, but the very first major feature is the complete migration of the Front Office using Symfony Framework and Twig to get the same developer experience in both Front Office and Back Office.
Overrides won't work and the override folder will be ignored.
It's really too soon to think about it, but this probably means that the native PrestaShop autoloader won't be available in 1.8.x release, and we will depends on Composer only for the class autoloading.

## How to override PrestaShop native behaviors?

**The best and recommended way to alter PrestaShop behavior are the hooks for the data and the templating overriding system for the view.**

Because we had the override system, we (the core developers) were lazy: after all, why should we care about extension points when developers can override almost everything in the classes?

PrestaShop have a very long list of useful and not-that-useful hooks: since PrestaShop 1.7.3 we have introduced a new Hook Profiler to help developers figure out which hook(s) can help them to improve their shop and fits their customers needs.

In PrestaShop 1.7.5 we have improved this profiler, making hooks executed and arguments available in the modules discoverables in a web interface and we have a lot of new ideas to make your experience with hooks enjoyable again.

Also, Hooks are slow and we were less and less easy with the idea to add new hooks (ie add new extension points) in the core: isn't that weird in an extensible platform?

In PrestaShop 1.7.5, we have started to work on a new architecture to manage hooks, on top of the Symfony Event Dispatcher component. This won't be available in 1.7 because we don't want to break hooks but the new system will allows us (and you) to add an infinity of hooks with a very low footprint on your shop performance.

The main advantage of hooks compared to the override is that they are not exclusives (ie multiples modules can alter a behavior) and are easy to track (thanks to the new Hooks profiler).

### Good news, nothing new to learn!

In the next major, the class names linked to the Hook may change, but the system, the idea, the principles are the heart of PrestaShop and will stay and be improved.
Because we are adding more and more hooks to the application, most of the time developers doesn't need to use overrides.

### And we improve the way we organize our business logic

If you compare 1.6 files to `src` folder where lives most of the 1.7 'code, you should have noticed  that classes and templates are shorter, more meaningful and organized by domain.

Back in the old days of MVC (Model View Controller) system, Controllers were supposed to own most of the business logic, then the Models and the View should avoid to store business logic at all costs.

Introducing Symfony Framework Best Practices, we have really thin controllers with only one responsibility: get a user request and send a valid response to the user. Most of the business logic is now owned in "Domain" classes (or alternatively named "services").

In PrestaShop 1.6, most of the interesting functions were in classes like Tools, or Product or Cart... theses classes have tens of responsibilities, making them almost impossible to be tested or to be overriden properly without breaking a lot of behaviors without even notice it.

In PrestaShop 1.7, and for a big part in the ``Core`` folder we are working on uncoupling our domain (Product management, Cart management, Grid management...) from our framework (Forms, Validation, Pages, Security).
This work allows us to complete our test suite and to start to follow some best practices of developpement like SOLID.
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
