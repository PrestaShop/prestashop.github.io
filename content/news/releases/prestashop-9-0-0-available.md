---
layout: post
title:  PrestaShop 9.0 Is Available
subtitle: The new, improved foundation for your e-commerce
date: 2025-04-29
authors: [ PrestaShop ]
image: /assets/images/theme/banner-core-monthly.jpg
twitter_image: /assets/images/theme/banner-core-monthly.jpg
icon: icon-leaf
tags:
- version
- major
- releases
- "9.0"
- "9.0.x"
---

It's finally here! PrestaShop 9.0 is available for download. This new version brings a modernized architecture, new developer tools, and powerful features designed to support the future of ecommerce.

## PrestaShop 9 is here!

After nearly three years of development and collaboration with the community, it’s time to take another major step forward. **PrestaShop 9.0** is here — bringing a modernized architecture, new developer tools, and powerful features designed to support the future of ecommerce.

This new major version introduces long-term supported technologies like **Symfony 6.4**, compatibility with **PHP 8.4**, a brand-new **Admin API**, and an improved developer experience both in the back office and the front. It’s a strong, forward-compatible foundation for merchants, developers, and integrators alike.

> ⚠️ PrestaShop 9 is a **major version**: some modules and themes may require updates to work correctly. We recommend testing thoroughly before upgrading your shop.


![PrestaShop 8.0 is available!](/assets/images/2022/10/bannerPS8.png)

## Highlights of PrestaShop 9

- **Symfony 6.4 LTS**  
- **PHP 8.1 – 8.4 support**
- **New Admin API** powered by [API Platform](#)
- **Modern Hummingbird theme**
- **Many SEO improvements**
- **Native support for WebP and AVIF images**
- **The new product page in back office**
- **Continuous code cleanup and performance improvements**
- **Experimental Symfony container in front office**
- **Back office fully rendered with Symfony**
- **Improved module actions tracking, feature flags, installer customization, and more**

## What's New in PrestaShop 9

### Symfony 6.4 and PHP 8.4 Support

PrestaShop 9 is built on **Symfony 6.4**, the latest long-term support version of the framework, ensuring security and compatibility until **November 2027**. It also supports **PHP 8.1, 8.2, 8.3**, and now **8.4**, giving developers access to modern PHP features and performance improvements.

---

### New Admin API

A fully new **Admin API** has been introduced, built with **API Platform**. While still evolving, this API makes it easier than ever to interact with PrestaShop programmatically, automate tasks, and build integrations.

- Explore the API usage: [How to use the new Admin API](#)
- Watch the presentation by @jolelievre (link)
- Share your feedback — it’s key to refining the API

---

### Optional Hummingbird Theme

PrestaShop 9 includes an optional, modern theme called **Hummingbird**, built with **Bootstrap 5**, **TypeScript**, and **BEM**. While not the default yet, it's the new foundation for future theme development and a great starting point for theme creators.

---

### SEO & URL Management Improvements

- Clean product URLs by default (category removed, optional to restore)
- Option to remove the default language prefix from URLs
- Inactive categories can now use **301** or **302** redirects
- Filtered product listing pages are excluded from indexing

---

### Front Office Improvements

- **Support for WebP and AVIF** image formats
- Experimental Symfony container now available in the front office
- Faster jQuery UI loading
- Front Office rendering improvements for Categories, Manufacturers, Suppliers, and Stores using **Presenters**
- Product breadcrumbs reflect the accessed category

---

### Enhanced Product Management

- New product page is now the default (legacy page removed)
- Manual sorting of feature values and default sorting configuration
- Option to notify customers if the viewed product is already in their cart
- Category thumbnail handling improved in the front office

---

### Improved Back Office UX & Features

- Back Office now fully rendered using Symfony & Twig
- Redesigned pages include: Login, Products, Orders, Attributes, Statuses, and more
- Improved layout, unified wording, and better navigation
- Guest customers can now be created manually
- You can now order as a guest, even if a customer account exists

---

### Better Debugging and Security

- Debug mode can be limited to users with a specific cookie
- Table prefix is now randomized by default during installation
- Direct file access protection improved
- Better tracking of module actions (install/update/uninstall)

## Acknowledgments

A big thank you to the X people who contributed to Y Pull Requests included in this version:

TBD

PrestaShop is above all a community project: the vast majority of contributors are not directly affiliated with PrestaShop SA.

We would also like to thank the people who contributed aside from code:

- Product management: 
- Quality assurance: 
- UX design: 
- Wording management and proofreading: 
