---
layout: post
title: "Extra properties: custom data fields for every PrestaShop entity"
subtitle: "A native way to attach extra fields to any PrestaShop entity, with multistore, multilang, Back Office, Front Office, and Admin API support, and no overrides."
date: 2026-07-22 04:00:00
authors: [studiokiwik, JonathanLelievre]
icon: icon-code
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
tags:
- "9.2"
- "9.2.x"
- "9.x"
- feature
---

At PrestaShop, extensibility has always been a key principle, and the platform already gives modules plenty of room to enrich it through hooks, including ones that let you adjust Symfony form builders, grids, and more.

Storing additional data on a core entity, however, has been more involved: adding extra fields to a Product, Customer, Order, or any other entity usually meant creating your own tables, wiring up the relations by hand, and repeating that same persistence logic in every module.

There are clean ways to do this today, but they ask each developer to rebuild the same plumbing every time.

Today, we're introducing extra properties: a new native way to attach extra fields to PrestaShop entities, with built-in support for multistore, multilang, Back Office forms and grids, Front Office access, and the Admin API. No overrides required.

## Why extra properties?

Adding business-specific data to core entities is a very common need. A merchant may want to store an additional product specification, an ERP reference on an order, customer-specific internal metadata, or custom content displayed in the storefront.

Until now, module developers often had to choose between altering existing database tables, creating their own side tables and wiring everything manually, or overriding core classes. All of these approaches work, but they also create maintenance complexity and make upgrades harder.

Extra properties provide a standard way to extend entities while keeping the core database and domain model clean.

## A native extension point for any entity

With extra properties, modules (or the core itself) can register additional fields on any supported entity, such as:

- Product
- Combination
- Customer
- Order
- and more.

Each property belongs to a namespace (usually the owning module), and can define:

- a SQL type (`int`, `float`, `date`, `varchar`, and so on)
- a default value
- validation rules
- visibility options
- labels (internationalized)
- indexing or uniqueness constraints

Properties can also define their data scope:

- **Common:** one value shared everywhere.
- **Lang:** a translated value per language.
- **Shop:** a specific value per shop.

These scopes can also be combined depending on the entity model. That means extra properties work naturally with PrestaShop's multilingual and multistore architecture, without module developers having to rebuild that logic themselves.

## Available everywhere in PrestaShop

Once registered, extra properties are automatically exposed across the platform.

### Back Office

They can appear in entity edit forms, inside admin grids, and positioned either after existing fields or within a dedicated section. Because they use native Symfony form types, they integrate with existing Back Office UI patterns, and labels are translated automatically.

### Front Office

Extra properties are available directly on `ObjectModels` through the `extraProperties` accessor. For example:

```php
$product->extraProperties['my_module']['erp_reference'];
```

Or in Smarty:

```smarty
{$product.extraProperties.my_module.erp_reference}
```

They are lazy-loaded, so no query runs unless the data is actually requested. Properties can also be hidden from the storefront when needed.

### Admin API

Extra properties are serialized automatically in the `extraProperties` JSON node. They remain grouped by module namespace and follow the same permissions as the parent entity. For example: if a client can write products, it can also write product extra properties.

## Under the hood: why dedicated `_extra` tables?

One important design decision was not to modify existing core tables. Instead, extra properties are stored in dedicated tables such as:

- `PREFIX_product_extra`
- `PREFIX_product_extra_lang`
- `PREFIX_product_extra_shop`

You may wonder why we decided to do that.

### Core tables stay stable

PrestaShop's database schema remains predictable: no migration burden on existing entities, and no growing number of nullable columns.

### SQL stays efficient

Each extra property is stored in a real typed SQL column. That allows efficient joins, indexes, unique constraints, and simple querying. We deliberately avoided a generic EAV/meta-value model because performance and query readability matter at scale.

### Database grows only when needed

Extra tables and columns are created automatically when a property is registered. If no extra properties exist for an entity, no extra table is used. Unused structures can also be removed automatically when no longer required. This keeps the feature lightweight while remaining scalable.

### A shared registry

All registered properties are tracked in a dedicated registry table: `extra_property_definition`. This central definition stores metadata such as:

- property name
- owning module (`null` for native/core-managed properties)
- SQL type
- scope
- default value
- validation
- visibility options
- translated labels

This registry gives PrestaShop a single source of truth for how extra properties behave everywhere in the platform.

## A better foundation for extensibility

Extra properties bring a native, structured way to extend PrestaShop entities: no overrides, multilang support, multistore support, Back Office integration, Front Office access, Admin API support, typed SQL storage, and lazy loading.

For module developers, it means less boilerplate and cleaner integrations. For the core, it creates a reusable extension point that can power future features consistently. And for merchants, it makes extra data easier to manage without sacrificing maintainability.

## A joint effort between PrestaShop and Kiwik

Extra properties is the result of a close collaboration between the PrestaShop SA teams and the [Kiwik](https://www.kiwik.com/) agency. Designing an extension point that feels native across the Back Office, Front Office, and Admin API, while keeping the core database clean and predictable, took a great deal of shared work on the architecture, the edge cases, and the developer experience.

A big thank you to the Kiwik team for their ideas, their code, and their commitment throughout the project. This feature is a wonderful example of what the community and PrestaShop can achieve when they build together, and every developer and merchant on the platform will benefit from it.

{{% notice type="info" %}}
Extra properties was built jointly by the PrestaShop SA teams and [Kiwik](https://www.kiwik.com/). Thank you to everyone involved for bringing this feature to life.
{{% /notice %}}

In the next article, we'll go deeper and show how to register extra properties in a module, display them in the Back Office, and access them in PHP and the Admin API.
