---
layout: post
title:  "PrestaShop 1.7.6.0 is available!"
subtitle: "You waited for it, here it is!"
date:   2019-07-10 18:00:00
authors: [ PrestaShop ]
image: /assets/images/2019/07/176_available_banner.jpg
icon: icon-checked
tags:
 - 1.7
 - 1.7.6.x
 - version
 - minor
 - releases
 - development
---

We are happy to announce PrestaShop 1.7.6.0 is officially available!

It has been quite a journey to deliver this huge release, our biggest yet since 1.7.1.0. Six months of development, a six week-long Beta, two Release Candidates... Was it worth it? We absolutely think so, and hope that you will enjoy using it.

![1.7.6.0 available!](/assets/images/2019/07/176_available_banner.jpg)

In this version we focused on improving and bringing back important 1.6 features to merchants, and kept working on code quality and performance improvements. We have made important progress on the Symfony migration as well.


[Download PrestaShop 1.7.6.0 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

<div class="alert alert-warning" role="alert">
<h4><i class='icon-warning'> </i>Be careful!</h4>
<p>If you plan to upgrade, we recommend you to use the version 4.9.0 of the 1-click upgrade module. You can upgrade it from the “Module Manager" tab, or if you don’t have it yet, find it in the “Module Catalog” tab in your BO.</p>
</div>


## Changes

This minor version is our biggest since 1.7.1. Here’s 1.7.6 in numbers:

748 merged Pull Requests (vs 210 in 1.7.3, 260 in 1.7.4 and 448 in 1.7.5)
7349 files changed (294661 insertions, 107638 deletions)
4431 commits merged
249 issues fixed
108 people contributed, including 60 new contributors!


## New features

**Front office**
- New design for transactional emails (optimized for mobile display), which strengthen the customer relationship and improve the shopping experience.

![New transactional emails template](/assets/images/2019/07/176_available_emails_templates.png)

- Improved display of the price details (product price, shipping, taxes, etc.) at all key stages of the purchasing process to improve customer reassurance and conversions.
- New profile menu with direct access to resources (documentation, training, agencies, help center...).
- Updated version of the Product Comments module, with rich snippets. Available on 1.7.6+ versions.

![Updated Product Comments module](/assets/images/2019/07/176_available_product_reviews.png)

- Fully refactored faceted search (for sorts and filters) on the categories and listings pages with the addition of a price slider. The new version is available for all 1.7.1+ versions.

![Refactored faceted Search module](/assets/images/2019/07/176_available_faceted_search.png)

- Improved Catalog mode: for showcase websites, you can now choose to display or to hide product prices.
- Improved currency management subsystem. This is the basis to allow more customization in the next versions, adding custom currencies for example.
- Improved SEO for products with combinations.

**Back office**
- Manage and preview your transactional emails directly from a new back-office page: Email Theme.
- In order to gather all prices in the same place, a “Price (tax incl.)” column has been added to the product listing. In one glance, it is now possible to get both tax included and excluded prices for each product.
- New helper cards have been added on important pages to improve the software onboarding: Categories, Customers, Pages, Employees.
- Dynamic preview of search engine results have been added to more pages: Product page, Categories, CMS.

![SEO preview added to more pages](/assets/images/2019/07/176_seo_preview.gif)

- The watermark module has been updated to 1.7 - thanks to the [community](http://build.prestashop.com/news/contributor-interview-rodrigo-laurindo). The module is available in the Module Catalog.
- Improved translation system for multilingual modules.
- The Design section of the back office has been reworked. Now you are able to have an overview of all design features (RTL, logos, favicon and theme) and manage them the way you want.

![The Design page after rework](/assets/images/2019/07/176_available_design_page.png)

- Optimized back office administration on mobile devices.

![Improved BO mobile responsive](/assets/images/2019/07/176_available_improved_responsive.png)


## Major Bug Fixes

**Front Office**
- Checkout used to proceed automatically from carrier selection to payment selection, it was an issue for some carrier modules requiring extra configuration steps in the carrier selection.
- Enhanced security checks for virtual goods. Previously anyone with the correct link (correct &key=... URL parameter) could download a virtual good.
- We fixed a longtime bug that was creating an error in discount calculation when adding a cart rule in a cart containing only virtual product.
- In the meantime, we also fixed a bug on carrier price calculation. Price is now calculated on the real order price and not the one including after a discount is applied
- DNI fields is now forced only for countries which require it
- Fixed the minimum order in the second currency bug - fixed by the [community](https://github.com/PrestaShop/PrestaShop/issues/9665)

**Core**
- Themes are not reset anymore when already active (also prevent hooks to be reset) - fixed in the Autoupgrade module


## The technical side

### Technical improvements

- Nightly builds and nightly board is now available at https://nightly.prestashop.com/
- Translation Manager of Back Office can now manage legacy translations of modules as well as symfony modules
- Added support for Doctrine Entities in modules (both Front and Back-office)
- Price computation are now covered by Integration tests powered by Behat (human-readable tests)
- New mail template system based on Twig, along with a new generation system which avoids downloading all the mail templates; will allow easier customization in the future versions
- New CLDR standard implementation: improved localization of prices and amounts, will allow creating custom currencies in future versions
- Support for multiple grids on the same page
- Performance:
  - Improved employee authorization process
  - Cache introduced when loading modules
  - The number of SQL requests to get the employee authorizations has been significantly reduced
- Web services:
  - Product customization is now reachable
  - Product combination information in Pack content is now available



### New hooks
- displayProductActions (Product page, close to the “Add to cart” button)
- displayPersonalInformationTop (Checkout funnel, before the customer login form)
- additionalCustomerAddressFields (In CustomerAddressFormatter)
- actionProductFlagsModifier (Allows to customize product flags)
- Form hooks
- Kpi hooks
- Mail generator hooks:
  - actionListMailThemes
  - actionGetMailThemeFolder
  - actionBuildLayoutVariables
  - actionGetMailLayoutTransformations


### Improved hooks

- actionProductAdd now receives id_product_old when duplicating a product



### Breaking or risky changes

- The new CLDR implementation replaces the old one. Some breaking changes were needed:
  - The Currency ObjectModel is now multilingual
  - The IcanBoogie/CLDR library has been removed
  - Calls to Tools::getCldr() throw a PrestaShopException
  - The namespace “PrestaShop\PrestaShop\Core\Cldr” has been removed
  - The CLDR files in the “/translations” directory have been removed
- Import:
  - You no longer can just add categories to current categories with import to a force ID. You will have to set them all and the first will become the default_category.)
- Replaced library:
  - PhpExcel (no longer supported) has been replaced by PHPSpreadsheet)
- Version comparison:
  - AppKernel::MAJOR_VERSION is now “7” instead of “17”
  - “1.2.4” is no longer greater than “1.2.3.4” (the latter is now interpreted as “2.3.4”)
- Endpoints other than index.php have been deprecated):
  - All BO endpoints now require a token
  - AdminModelAdapter.php now requires the Router in its constructor
- The following currencies are no longer available:
  - BYR: Belarusian Ruble (2000–2016)
  - LTL: Lithuanian Litas (end 2014-12-31)
  - STD: São Tomé & Príncipe Dobra (end 2017-12-31)
- Other:
  - Slashes are no longer removed from $_GET and $_POST variables
  - src/Core/Addon/Module/ModuleManager.php::_construct() receives an instance of CacheClearerInterface instead of CacheClearer
  - Permissions for files created by PrestaShop are no longer set to 0777. Permissions are now set to 0755 for directories and 0644 for files
  - To prevent having jQuery included twice, It is no longer possible to add jQuery in BO controllers based on the new theme using addJquery()
  - Error messages are no longer html escaped


## PrestaShop ❤ Community

PrestaShop is above all a community project: from the 108 committers who contributed to this release, 60 are new contributors. The vast majority of PrestaShop contributors are not directly affiliated with the PrestaShop company.

A huge thanks to everyone involved in this version!

Thank you again for helping improve the lives of more than 300,000 online merchants with ideas, improvements, and fixes!


## Download

You can download PrestaShop 1.7.6.0 here:

[Download PrestaShop 1.7.6.0 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

PrestaShop 1.7.6 is also available through the 1-Click Upgrade module.
Please use the v4.9.0 version of the module to avoid compatibility issues with PS 1.7.6.

And don’t forget to give us your feedback in the comments or [on Github](https://github.com/PrestaShop/PrestaShop/issues/new/choose)!

