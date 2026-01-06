---
layout: post
title: "Hummingbird v2.0.0 Beta Is Available"
subtitle: "A new era for PrestaShop themes"
date:   2026-01-06
authors: [ IliesBahloul ]
icon: icon-leaf
tags: [ feature, "9.x", "9.1.x" ]
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
---

# Why?

This feature deserved more than a simple iso-functional migration. Indeed, during previous discovery phases, the same pain points kept coming up (a lack of simplicity and especially performance issues related to the compatibility of cart rules with each other) and we deemed it preferable to provide a solution rather than keep the existing user journey.

# How?

We reviewed the user journey to ease the creation of discounts and bring clarity when viewing them (list & detail).

Our objective is to put things in their right place by having:

- on one side, features that allow applying discounts to products
- on other side, features that allow declining a product's price based on certain criteria

# What?

The creation of discounts is structured around 4 types that define where the discount is applied on the order.

![Discount Types](attachment:fd7ea585-6612-4501-a348-9b0b2453f2ac:image.png)

**1st type: Catalog**

- This type allows applying a discount to a specific product or to a segment of products (one or more products whose characteristics match specific criteria).
- This discount is either a fixed amount or a percentage
- The discount will be applied as many times as the concerned product is present in the cart

**2nd type: Cart**

- This type allows applying a discount to the cart amount (excluding shipping costs)
- This discount is either a fixed amount or a percentage

**3rd type: Free Shipping**

- This type simply allows offering free shipping costs
- Only one discount of this type can be applied to an order (since shipping costs can only be offered once)

**4th type: Free Gift**

- This type allows offering a product that will be added to the order (excluding customizable products)

At the configuration level, discount types have both common elements and others that differ.

**Common elements**

A section for general information which includes the name, internal description, discount status

![Discount General Information](attachment:75fea6b6-c546-44e7-a52f-ad8d6e089bba:image.png)

The activation period that allows scheduling a discount with or without an expiration date

![Discount Activation Period](attachment:5e6a7801-cdf1-4f03-8dbd-304cc794be81:image.png)

Customer eligibility which allows assigning a discount to a specific user, one or more customer groups, or all users.

![Discount Customer Eligibility](attachment:4cd3884e-988e-4d62-9d3a-6672cc06ae94:image.png)
Usage conditions that allow:

- defining in which mode the discount should be triggered (automatically or via promo code entry)
- the possibility to add a usage limit for a given discount, or the number of times it can be used by the same user
- defining compatibility with the same type or other types of discounts

![Discount Usage Conditions](attachment:d468344b-e0f7-44d7-868a-12f63ebcbb74:image.png)

**Different elements**

Trigger conditions:

- based on cart content
    - presence of a specific product
    - presence of one or more product(s) whose specificities match the criteria of a defined segment (based on categories, brands, suppliers, features and attributes)
    - quantity of items
    - the amount
- based on shipping options
    - delivery country
    - carrier

![Discount Trigger Conditions](attachment:21292e8b-5c45-4871-865d-77a1e0957ed2:image.png)

The actual discount result:

- a fixed amount
- a percentage
- free shipping costs
- the addition of a free product

![Discount Result](attachment:1631f401-333d-49cd-be7b-e5a1b0b40931:image.png)

New compatibility system that operates at the discount type level:

1. The usage mode of a discount (via promo code, automatic) does not impact the application order
2. For each order, the system applies eligible discounts in this order:
    1. First, discounts that apply to products
    2. Then, discounts that apply to the cart amount (which are compatible with Catalog type discounts)
    3. Next, the highest priority discount that offers free shipping (which is compatible with Catalog and Cart type discounts)
    4. And finally, discounts that offer a product (which are compatible with other types)
3. Discounts can be compatible with the same type, so when there are multiple eligible discounts of the same type, they are applied in an order set by priority (from lowest to highest)
    1. If discounts of the same type compatible with each other have the same priority, then they are ordered by creation date
4. With each order modification, or each promo code application, eligible discounts are re-evaluated and applied according to their compatibility and in priority order

Implementation

- This feature is available from PrestaShop version 9.1. Like all features under development, you need to enable a feature flag to test it.
- Under the hood, these 4 new discount types are plugged to the cart rules system which allows backward compatibility with the existing system.