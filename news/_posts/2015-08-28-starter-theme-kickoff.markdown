---
layout: post
title:  "We're building a Starter Theme for PrestaShop 1.7.0.0"
subtitle: "What we have in mind and how you can contribute"
date:   2015-08-28 12:00:00
author:  [ djfm ]
icon: icon-code
---

If you've ever tried to create a PrestaShop theme from scratch, you might have noticed it requires quite a large skillset: not only must you know HTML, CSS and Smarty, but you also need to be very familiar with the inner workings of PrestaShop itself. There is a lot of business logic going on in the templates, it is hard to tell apart classes that are used for styling from classes that are used by javascript-powered features, etc.

With the Starter Theme project we are starting today, we want to re-think the way our themes work so that *anybody with only HTML and CSS skills can create a really cool, feature-complete PrestaShop theme from scratch in just a few days*.

Our goal is to deliver the Starter Theme with PrestaShop 1.7.0.0. We will also say goodbye to our old default-bootstrap theme. It will be replaced with a new theme based on the Starter Theme.

## So What's a Starter Theme?

> "It seems that perfection is attained, not when there is nothing more to add, but when there is nothing more to take away."
>
>Antoine de Saint Exupéry

### A Tool for Designers to Work Efficiently

We call Starter Theme a minimal PrestaShop theme: it is feature-complete but has no styling, nothing to take away.

But wait... no styling?! It might not be perfect for a customer, sure, but it should be perfect for a designer as turning the Starter Theme into a real, production-ready theme will be very easy.

### An Easy to Follow, Documented Standard that We All Agree On

It is sometimes hard to know whether a particular extension or feature will work correctly with a particular theme. There are so many themes out there! How can I, as a developer, know that my module will work correctly?

In principle if an extension or feature is designed to work with the Starter Theme it will always work with any theme that is based on the starter theme.

For the Starter Theme to play this role it will need a **comprehensive documentation**, including:

- the list of mandatory templates
- the description of all variables available to each template
- the list of all hooks found in a given template

## What Will PrestaShop's Starter Theme Look Like?

*Well it will look like \*\*\*\*, that's the point.*

Jokes aside, here are the main design principles we have in mind. As usual we're telling you this so that you can comment, contribute, or alert us if you think we're making a mistake. So please feel free to join the conversation!

### Logic Belongs to Controllers

Over the years lots of logic has crept into the templates (contrary to MCV principles). None of this in the Starter Theme!

This rule will be very strongly enforced. To help us keep on track while building the Starter Theme, we're considering limiting the depth of control structures in templates to 2 (we'll relax this if it turns out to be too impractical, but you get the idea).

If you're nesting 3 `if`s inside a template then your controller is probably not doing its job right.

### Controllers Pass Arrays to Templates, not Objects

Today some controllers pass lists of `Product`s to templates, while some other controllers pass lists of arrays representing `Product`s. This is true for other types of entities too.

We need to standardize this, one way or the other. We've opted for arrays because of the additional safety guarantees it offers: separation of concerns mandates that the view layer just manages the view. Passing a `Product` object to a template allows the view layer to do things like deleting the product from the database.

### A Real Layout

No more opening the `<body>` tag in `header.tpl` and closing it in `footer.tpl`. Each and every template will make sense to a designer (and to a linter!) by itself.

### Secure by Default

Tired of writing `|escape:'html':'UTF-8'` all over the place?

We too. We'll adopt the generally accepted best-practice that everything is escaped by default and you need to do extra work when you don't want to escape text (which is rare).

### As Few Classes as Possible

In our templates today, almost every HTML tag has at least one class. This feels like a bit much.

We're going to put a few classes in the Starter Theme markup, but as few as possible. Just the really important ones.

### Classes are for Styling, Not for Javascript (mostly)

In the Starter Theme we will try to remove all HTML classes that are not used for styling.

Javascript (from modules, the theme or the core) should not rely on classes to bind on events or perform other operations on the DOM.

Javascript should only rely on:

- `id`s
- `data-*` attributes
- named inputs
- as a last resort, if none of the above makes sense, on classes, but prefixed by `js-`

And probably other things too, but almost never HTML classes and when using classes, always prefixed by `js-`.

The goal of this convention is to:

- avoid bloating the HTML markup with things designers are not interested in – a designer expects a class to be used for styling and knows they can remove any class they wish without breaking functionality.
- make it easy to keep the Javascript working with different themes – we'll keep our selectors simple in the Starter Theme, adding `data-*` attributes or `id`s where needed so that when you move things around everything keeps working smoothly.

### No Bootstrap

This was a tough one.

You can do a lot with CSS but some layouts cannot be implemented with only CSS and you need to add some markup, for instance wrap your columns in a `<div class="row">`.

But since in the Starter Theme we wanted to make no assumption about which technologies designers will use, we decided to implement no layout at all. You will get columns that are displayed one after another vertically.

Want your columns to look like real columns? Then it's your job to add the necessary classes and/or markup. If you think your customers have recent browsers you may just use flexbox and be done with it - we're not imposing anything, so no bootstrap.

### Ongoing Reflection About Hooks

We're keeping the existing hooks and we're probably going to add a few.

In the future we'd also like to implement a system of widgets that you could add to any zone of your theme, thus generalizing a little bit what hooks are capable of.

We don't know the details yet, but if you have ideas how we can make hooks better let us know!

## How Are We Going to Do It? Want to Get Involved?

We believe that starting from scratch will give the best results to achieve the cleanest possible theme structure.

We've created a <a href="https://github.com/PrestaShop/StarterTheme" target="_blank">dedicated repository on GitHub</a> and issues will be tracked there (not on forge.prestashop.com). We will also create a PrestaShop branch called `starter-theme` where all necessary changes to the PrestaShop core will happen.

We know many people are interested in this project and wish to contribute. Contributions are very welcome as there will be more than enough work for everyone :)

As usual you can send us pull requests but if you want to work more closely with us, just write to us and we'll work something out.

To make discussing the project between all involved easier we've created a <a href="https://gitter.im/PrestaShop/StarterTheme" target="_blank">gitter channel</a> so come talk with us!

[![Join the chat at https://gitter.im/PrestaShop/StarterTheme](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/PrestaShop/StarterTheme?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## But Aren't You Going to Break Everything?

To be honest, it is likely. But it's a necessary evil.

We're not sure at this point if 1.6 themes will be compatible with 1.7.0.0. We have huge plans related to the Starter Theme and we do not want to sacrifice good software design in favor of backward compatibility. So for now we're not holding back.

Existing modules will probably require adjustments too, but they should be minimal.

If we break things you'll be the first to know and we'll give you time to adjust.
