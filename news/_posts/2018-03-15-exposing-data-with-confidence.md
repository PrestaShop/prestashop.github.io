---
layout: post
title:  "Exposing data with confidence in PrestaShop 1.7"
subtitle: "We are improving how data is exposed in the front office"
date:   2018-04-05 09:10:11
authors: [ PabloBorowicz ]
icon: icon-filter
tags:
 - 1.7
 - 1.7.3.x
---

During the last few months, we have received a lot of feedback from the community pointing out issues with how PrestaShop 1.7 makes shop data available in the front office.

In this article, we'll see how PrestaShop 1.7.3.1 addresses this problem.

**TL;DR:** We have changed the way PrestaShop filters data going to the browser. If you didn't change your Models, this shouldn't impact you :)

## Some context

PrestaShop 1.7 has several ways of making data available to the front office, including:

* General purpose variables (such as `configuration`, `cart`, `shop`...) which are automatically added to Smarty templates.
* A `prestashop` javascript object containing the same general purpose variables, which makes them available everywhere in the Front Office.
* Ajax response objects, such as the one used for search autocomplete.

Most of the exposed objects are enriched versions of PrestaShops' models (`ObjectModel`) such as `Product`, `Cart` and so on.

## The problem

In the current implementation, the server-side layer (smarty templates) and the client-side layer (prestashop object, ajax response) share _the same objects_. Why is that a problem?

### 1. Mixed concerns

Server-side layers and client-side ones actually have different needs. While the templates need as much information as possible for maximum flexibility, the client-side layer needs to receive as little as possible, both for network-related performance as well as for security reasons.

### 2. Data exposure

Since templates live in the server, it's not a problem allowing them access to sensitive data. However, data being sent to the client is a whole different story, and should be handled carefully. For example, you don't want everyone to know the wholesale price for a product, so it shouldn't be included in data being sent to the client.

### 3. Extensibiliy

PrestaShop is an extensible platform, but with extensibility comes uncertainty: it's impossible to know in advance what data will be added to the models by modules or customizations. This means that PrestaShop needs to be **open to customization** while keeping data **safe by default**.

## The solution

Starting on 1.7.3.1, PrestaShop will filter all the data it sends to the client-side using a _whitelist_-based filtering service.

**Remember:** only data sent to the client is filtered. Smarty objects will be kept as they were.

### Why not a blacklist?

A blacklist is **unsafe by default**. Not only because it needs PrestaShop to know everything it needs to remove **in advance**, which is impossible due to the extensible nature of PrestaShop, where data can be modified by anyone anytime. But it also relies on developers knowing that _they_ need to actively filter new information out, or risk data leaks – and that's too easy to miss. In fact, **it's what has actually happened**.

In comparison, a whitelist allows shops to be **safe by default**. Models can evolve in any way, and data won't accidentally be leaked – by design. Developers need to _add_ new information into the whitelist if they want to expose it. If it's not used, everything will work fine. But if it is used, they'll notice it right away.

## So how does this impact me?

If you have customized your PrestaShop or if you are a module developer, here's what you need to know.

### I customized my models but I only use my custom data in Smarty templates

Good news! You don't need to do anything. As stated before, objects being sent to the templates are not filtered, so everything will work the same as before.

### I customized my models and I need my custom data on the client side

You need to add your data keys to the front end filter service. Here's how.

Since PrestaShop 1.7.3, modules are able to access the dependency container in back office controllers. Starting on 1.7.3.1, they will also have access to the front office dependency container, so accessing the filter service from your module is as simple as:

```php
$this->get('prestashop.core.filter.front_end_object.main');
```

#### Some examples

##### Whitelisting a property

Let's say you have added `puffin_product_url` to your `Product` model and you want it to be made available on the browser when the customer adds a product to his cart.

Here's how you can add `puffin_product_url` to the whitelist by using a module attached to the `actionFrontControllerAfterInit` hook:

```php
public function hookActionFrontControllerAfterInit()
{
    $filterManager = $this->get('prestashop.core.filter.front_end_object.main');
    
    // get list of all filters applied to client-side data
    $filters = $filterManager->getFilters();
    
    // get list of filters applied to the cart object
    $cartFilters = $filters['cart']->getFilters();
    
    // add puffin_product_url to the product whitelist (remember to pass an array)
    $cartFilters['products']->whitelist(['puffin_product_url']);
}
```

##### Removing a property

Let's say you want to remove `price` from your exposed cart Products.

Again, you can hook into `actionFrontControllerAfterInit` and remove `price` from the product whitelist:

```php
public function hookActionFrontControllerAfterInit()
{
    $filterManager = $this->get('prestashop.core.filter.front_end_object.main');
    
    // get list of all filters applied to client-side data
    $filters = $filterManager->getFilters();
    
    // get list of filters applied to the cart object
    $cartFilters = $filters['cart']->getFilters();
    
    // remove "price" from the product whitelist
    $cartFilters['products']->removeFromWhitelist('price');
}
```

##### Bonus: make new information available in the Front Office

Let's say you want to add an element named `my_custom_data` to the `prestashop` object. It's super easy!

Just hook into `actionBuildFrontEndObject` and add `my_custom_data` to `$params`

```php
public function hookActionBuildFrontEndObject(&$params) {
    // contains all the data in the prestashop object
    $prestashopObject = $params['obj'];
    
    // add custom data like this
    $prestashopObject['my_custom_data'] = 'foobar';
}
```

Alternatively, this lets you _alter_ the prestashop object after it's filtered. Use with caution!
