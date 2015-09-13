---
layout: post
title:  "How to override modules in PrestaShop"
subtitle: "Override module methods in PrestaShop 1.6.0.11 and above"
date:   2015-05-10 12:15:00
disqus_url: "http://build.prestashop.com/module/how-to-override-modules/"
author:  [ gskema ]
icon: icon-code
tags: [override, module]
published: true
---

Since version 1.6.0.11 of PrestaShop, there is a new feature that allows developers to override a module's instance classes (ie. its main module files, [see the PR by @axometeam](https://github.com/PrestaShop/PrestaShop/pull/2133)).

Since PrestaShop uses lots of modules for both core and custom features, module overrides are a welcome addition to an already great override system in PrestaShop. Let's take a look on how to use it.

<div class="alert alert-note" role="alert">
<h4><i class='icon-file'></i> Note</h4>
Remember that overrides in PrestaShop are exclusive. This means that if your module overrides one of PrestaShop's behaviors, another module will not be able to use that behavior properly, or override it in an predictable way.

Therefore, overrides should only be used for your own local modules, when you have a specific need that cannot be applied without it.

It is not recommended to use an override in a module that you intend to distribute (for instance through the PrestaShop Addons marketplace), and they are forbidden in partner modules.
</div>

## Override a module's instance class by extending it

To override a module's instance class, you have to extend it, giving the extended class the same name and adding `Override` suffix:

<script src="https://gist.github.com/gskema/51aa05a814fa510a2202.js"></script>

This file should be put in `/override/modules/blockuserinfo/blockuserinfo.php`.
 
When you manually add an override, do not forget to clean the class reference cache by deleting `cache/class_index.php`. The next time PrestaShop loads, it will regenerate `class_index.php` and your module override will be active!

You may even make a module that has overrides for other modules! For example, `/modules/mymodule/override/modules/blockuserinfo/blockuserinfo.php` will be copied to `/override/modules/blockuserinfo/blockuserinfo.php` during the installation of the `mymodule` module. However, this is not recommended, since the exact usage of a module to be overridden is unknown and may be different in a particular shop.

## Troubles overriding some modules

Some modules (mainly core modules) have methods that can't be extended (at the moment).

For example:

<script src="https://gist.github.com/gskema/04af5a98b56ee59f01e1.js"></script>

As you can see, this class has a variety of properties and methods. Some methods are `public`, some are `protected` and others are `private`.

Sometimes you may need to extend a method that is currently set to be `private`. Unfortunately, it is not possible to extend private variables or methods in PHP (and most other class-based programming languages).

This is a design issue. Core modules were written long before the introduction of module overrides. Difference is that `private` scope "locks down" class features, while `protected` scope is less strict and allows overrides by a child class.

If you come across a core module method that is private, the best thing to do is change it to `protected` and to make a pull request on GitHub for that module. Everyone will benefit!

## How to make cleaner method overrides

Overrides are great, but do they keep up with the updates? We are talking about a situation where the whole function is copied to an override and one minor modification is made:

<script src="https://gist.github.com/gskema/751e2791b35008beb71f.js"></script>

We added the line `'company_name' => ($this->context->customer->logged ? $this->context->customer->company : false),`, which adds a `company_name` Smarty variable that we want to use in our template.

The problem is that we essentially "snapshotted" the method code that we took from the module. The code of this method may and will change in the future version. What if wanted to have the updated code but also add our one little modification?

When the code structure and logic allows it, you should always aim to execute the whole unmodified parent method **and then** (before or after) add that one little modification. The way you can do this is by using `parent` keyword, which calls the method from the parent class:

<script src="https://gist.github.com/gskema/0adf2da86ff78750d161.js"></script>

In the example above, we add our Smarty variable, and then return the parent method, which will call the unmodified and possibly updated `hookDisplayTop` method. There is no need to copy the whole method.

**P.S.** There is one small issue in the example, which you may have noticed. In the parent method, there is a  statement, `if (!$this->active)`, which should've been taken into consideration when making the override. We could put it in our overridden method, or for the purpose of this example, we can imagine that it's not there :)

## Module overrides are great!

As we mentioned before, PrestaShop already has a great system for overrides, and module overrides make it even greater. Overrides truly empower developers and saves a lot of time for everyone.

In the past, overriding module behaviour was a real issue. If using hooks, modifying templates and JavaScript files wasn't enough, you had to write your own module or rename and modify the module you were trying to change. The updates were instantly lost.
 
Luckily, now it is possible to override module classes and change the behaviours right at their sources.

Modules overrides have not been documented very well, so not many of you may know about it. Hopefully this gave you some clearance on how to use them.
