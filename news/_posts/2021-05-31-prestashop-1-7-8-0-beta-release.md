---
layout: post
title:  "PrestaShop 1.7.8.0 beta is open for feedback!"
subtitle: "You can download it and test it"
date:   2020-05-31 17:00:00
authors: [ PrestaShop ]
icon: icon-leaf
tags:
 - version
 - beta
 - minor
 - releases
 - 1.7.8
---

The first Beta version for PrestaShop 1.7.8.0 is now ready for you to test!

We are very happy to announce today the release of the beta version of 1.7.8.
This version includes many features and debug fixes, we count on you to test it in its in every nook and cranny and report any bugs you encounter.

In the new features: we have the redesign of the translation system that facilitates export and translation of your modules and themes, a new custom header for multistore fans and many other improvements.

//Focus on the contribution (stats)

We need the help of all the community to test this version. It integrates more than 1,372 Pull Request merged and 241 bug fixed including 18 major bugs and 4 Topwatchers bugs (issue that are followed by more than 5 people). 

**Remember, this beta version is pre release software. Do not use it on your production shop!**

## What’s new?

### New features & improvements

#### Translations



#### Multistore

- The MultiStore feature embeds a new header. The color of the header can be now customizable for a shop or a group shop in the MultiStore parameters. 

![the new multistore header](/assets/images/2021/multistore_header.png)

It will limit the errors via a colored header and therefore avoid setting up a store thinking it is on another one.

- Only on the maintenance page for now, you have the possibility to see if the page has inherited the group setting or has been customized.

![the new multistore specific setting drop down](/assets/images/2021/Specific_settings_drop_down_multistore.png)

It allows merchants to know at a glance which settings are applied in all stores and which ones have been customized.

#### Improvements for UI Kit
#### Product page

PrestaShop back office UI Kit has been improved in order to have a Solid Design System

See all issues listed in [https://github.com/PrestaShop/PrestaShop/issues/16587](https://github.com/PrestaShop/PrestaShop/issues/16587)

- [UI Kit] Improvements and corrections [#17177](https://github.com/PrestaShop/PrestaShop/issues/17177) [#21832](https://github.com/PrestaShop/PrestaShop/issues/21832)
PRs : [#17253](https://github.com/PrestaShop/PrestaShop/pull/17253) [#22736](https://github.com/PrestaShop/PrestaShop/pull/22736)
See also : [Adjustement of alert colors, fontsize and buttons contrasts](https://github.com/PrestaShop/prestashop-ui-kit/pull/104)
#### Feature flags

*  [Fix classic theme images width, accessibilty and some lighthouse improvements](https://github.com/PrestaShop/PrestaShop/issues/23352)
*  [Add TinyMCE mobile theme in the BO](https://github.com/PrestaShop/PrestaShop/issues/23225)
*  [Implement Native Lazy Loading on theme classic](https://github.com/PrestaShop/PrestaShop/issues/19549)
*  [A lot of responsive improvements in the Backoffice](https://github.com/PrestaShop/PrestaShop/issues/22358) 
*  [Some classic theme improvements (styling and more)](https://github.com/PrestaShop/PrestaShop/pull/20775)
*  [Display ‘Out of Stock’ on Catalog pages](https://github.com/PrestaShop/PrestaShop/issues/21105)
*  [Ability to enable and disable Hooks](https://github.com/PrestaShop/PrestaShop/issues/20848)
*  [Hook for modifying TinyMce](https://github.com/PrestaShop/PrestaShop/issues/19408)
*  [Display the overrides list in the Informations tab](https://github.com/PrestaShop/PrestaShop/issues/21368)
*  [Product page images should be able to swipe on mobile for classic theme](https://github.com/PrestaShop/PrestaShop/issues/20431)

- [Display subcategories in FO categories pages](https://github.com/PrestaShop/PrestaShop/issues/10407)
- [Add order internal notes](https://github.com/PrestaShop/PrestaShop/issues/14753)
- [Allow users to better handle avatars](https://github.com/PrestaShop/PrestaShop/issues/18653)
- [Replace Tools::redirect('index.php?controller=404') by Tools::redirect('pagenotfound')](https://github.com/PrestaShop/PrestaShop/pull/20410)


### Notable fixes

### **Topwatchers:**

- [When a product has a specific price applied and has a discounted by unit, the discount displayed on the product page is false](https://github.com/PrestaShop/PrestaShop/issues/16163) (Major)
- [When the cache is cleared, an error 500 is displayed](https://github.com/PrestaShop/PrestaShop/issues/11105)
- [Profiler was not compatible with hooks and module](https://github.com/PrestaShop/PrestaShop/issues/9659)
- [Double click on "Add to cart" on the product page FO freezes the page](https://github.com/PrestaShop/PrestaShop/issues/9634)

### Major bugs:

* **Front-Office**

- [Guess Order Tracking redirects to shop Homepage when the Friendly URLs are disabled](https://github.com/PrestaShop/PrestaShop/issues/20194)
- [An error is error is displayed on the checkout if Legal compliance module is installed](https://github.com/PrestaShop/PrestaShop/issues/12509)
- [Checkout slowdown when many orders are made with Guest account](https://github.com/PrestaShop/PrestaShop/issues/16584)
- [Ecotax is displayed tax excl instead of tax incl in FO](https://github.com/PrestaShop/PrestaShop/issues/18835)
- [Confirmation button on Checkout should be disabled if Terms and conditions are not approved](https://github.com/PrestaShop/PrestaShop/issues/19161)

* **Back-Office**

- [An exception is thrown when adding invalid parameter to Language form and "No picture" image](https://github.com/PrestaShop/PrestaShop/issues/22500)
- [In Back-Office, some of the js parts rely on form field's ids and attributes that are modified since 1.7.8](https://github.com/PrestaShop/PrestaShop/issues/21819)
- [The number of characters is only checked by the Front-End](https://github.com/PrestaShop/PrestaShop/issues/19505)
- [Possibility to create catalog price rule with a percentage value greater than 100%](https://github.com/PrestaShop/PrestaShop/issues/19013)
- [JS issue when editing an image in TinyMCE](https://github.com/PrestaShop/PrestaShop/issues/11011)
- [Unit price reset to 0 if you activate/deactivate or duplicate products from the Product List](https://github.com/PrestaShop/PrestaShop/issues/10792)
- [Issues when installing PrestaShop with SSL](https://github.com/PrestaShop/PrestaShop/issues/10482)

* **WebServices**
- [The id_group_shop is shared instead of id_shop_group in webservice parameter](https://github.com/PrestaShop/PrestaShop/issues/19566)
* **CO**
- [.docker folder is present in release zip](https://github.com/PrestaShop/PrestaShop/issues/22233)

### Notable technical improvements

- [New hooks into Presenters, allowing to enrich the data built by these services](https://github.com/PrestaShop/PrestaShop/issues/11125)
- [Remove microdata in html flow and replace by JSON-LD for classic theme](https://github.com/PrestaShop/PrestaShop/issues/22867)
- [Automatize some of our rules with PHPStan : Introduce phpstan extension](https://github.com/PrestaShop/PrestaShop/issues/22728)
- [Problem with sessions cookies for SameSite issue](https://github.com/PrestaShop/PrestaShop/issues/22711)
- [Two service containers coexist in back office](https://github.com/PrestaShop/PrestaShop/issues/14995)
- [Add hooks to cart modal - crosseling and promotion](https://github.com/PrestaShop/PrestaShop/issues/17709)
- [Use static analyser to improve code quality](https://github.com/PrestaShop/PrestaShop/issues/16471)
- [No High DPI support in ImageRetriever](https://github.com/PrestaShop/PrestaShop/issues/19798)
- [Allow override of checkoutProcess construction #19848](https://github.com/PrestaShop/PrestaShop/issues/19848)
- [BO Menu translation](https://github.com/PrestaShop/PrestaShop/issues/9762) 
- [Added the ability to manage and download Attachments via Webservice](https://github.com/PrestaShop/PrestaShop/pull/12728)
- [CSS classes / element attributes called by core.js are marked with js prefixed selectors](https://github.com/PrestaShop/PrestaShop/issues/14346)
- [Import source files of the UIKit instead of dist files to use prestakit variables](https://github.com/PrestaShop/PrestaShop/pull/18396)
- [Default theme is the only folder not having ESLint installed and configured](https://github.com/PrestaShop/PrestaShop/issues/22998)
- [Default theme has no specific SCSS rules](https://github.com/PrestaShop/PrestaShop/issues/22885)
- [Add selectors mapping so themes can override it](https://github.com/PrestaShop/PrestaShop/pull/20002)
- [Add eslint to themes and classic folders](https://github.com/PrestaShop/PrestaShop/pull/20080)
- [Update BO theme style in legacy pages to match the UI kit](https://github.com/PrestaShop/PrestaShop/issues/22435)
- [Update jQuery on classic, FO core and default BO theme](https://github.com/PrestaShop/PrestaShop/pull/23122)
- [Introduce Javascript component loading through window.prestashop (part1)](https://github.com/PrestaShop/PrestaShop/pull/20591)


#### Dependencies and Software compatibility

- [Add blockwishlist as native module & Remove archived modules](https://github.com/PrestaShop/PrestaShop/pull/23617)
- [Update CLDR to latest version 38 (2020-10-28)](https://github.com/PrestaShop/PrestaShop/issues/21678)
- [Composer 2.0 to be compliant with PSR-4](https://github.com/PrestaShop/PrestaShop/issues/20986)
- [Compatibility to PHP 7.4](https://github.com/PrestaShop/PrestaShop/issues/16477)

### Symfony migration

See the new pages migrated in Symfony, we are now about 65% of the Back-Office pages migrated.

- Catalog > Attributes & Features > Attributes listing 
- Shop parameters > Order settings > Statuses > Add new / edit order status 
- Shop parameters > Order settings > Statuses
- Shop parameters > Order settings > Statuses > Add new / edit order return status
- International > Locations > Zones
- International > Locations > Add new / edit zone

### Core changes

## Download

You can download PrestaShop 1.7.8.0 beta here:  

[Download PrestaShop 1.7.8.0 beta now!](https://download.prestashop.com/download/releases/prestashop_1.7.8.0-beta.1.zip){: .btn .btn-lg .btn-success}
{: .text-center}


## How to help test 1.7.8

Your feedback on this beta is essential, the regressions you find right now are as many bugs less on the final version and less patches versions. It also means fewer problems on your (or your customer’s) online store. 

You must:

- Install it and test that there is no regression compared to the 1.7.7 version
- If you develop modules or themes, test them on this version
- Test the auto-upgrade plugin
- [Report regressions on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read how to [report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
- Fix regressions by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))

## Known issues 

- [When the catalog is exported the metadata is missing](https://github.com/PrestaShop/PrestaShop/issues/24716) 
- [When reducing the screen in the order page, the icon of error, confirmation, warning messages is broken](https://github.com/PrestaShop/PrestaShop/issues/24695) 
- [An error is displayed in the console when adding a discount on the Add New Order Page](https://github.com/PrestaShop/PrestaShop/issues/24556) 
- [On the Add new Order page when I change the product quantity, the page freezes](https://github.com/PrestaShop/PrestaShop/issues/24554) 
- [When we add an order note with invalid data, an update successful alert is displayed](https://github.com/PrestaShop/PrestaShop/issues/24534) 
- [When adding a product into a new invoice in the Order Page, the block product new invoice info is not displayed](https://github.com/PrestaShop/PrestaShop/issues/24533) 
- [The Invoice details on the Order Preview is missing the address mail of the customer](https://github.com/PrestaShop/PrestaShop/issues/24482) 
- [When Adding a new theme, an error 404 is displayed in the console](https://github.com/PrestaShop/PrestaShop/issues/24468) 
- [When the client uses another address for the invoice as a guest, we are redirected to the Information step instead of the Shipping method step](https://github.com/PrestaShop/PrestaShop/issues/24465) 
- [When an account is created, an exception is displayed when the first name and/or last name fields contain invalid characters.](https://github.com/PrestaShop/PrestaShop/issues/24464) 
- [When accessing to a disabled category, an error is displayed](https://github.com/PrestaShop/PrestaShop/issues/24370) 
- [The scrollbar is missing in the new multistore dropdown](https://github.com/PrestaShop/PrestaShop/issues/24333) 
- [The warning message is empty when we try to remove a customer from a specific price](https://github.com/PrestaShop/PrestaShop/issues/24142) 
- [The summary & the description of the Product Page allows more characters than the defined limit](https://github.com/PrestaShop/PrestaShop/issues/24131) 
- [When running a CLI command prestashop:update:sql-upgrade-file-hooks-listing and prestashop:update:configuration-file-hooks-listing, an error is displayed](https://github.com/PrestaShop/PrestaShop/issues/24023) 
- [Multistore header not displayed on Product Add / Edit page](https://github.com/PrestaShop/PrestaShop/issues/23937) 
- [When modifying a translation of Email Body, an error is displayed](https://github.com/PrestaShop/PrestaShop/issues/23878) 
- [When searching for the translation, the « leaves » of the tree that does not include the searched term is not disabled](https://github.com/PrestaShop/PrestaShop/issues/23876) 
- [An error displayed in the console when creating a category](https://github.com/PrestaShop/PrestaShop/issues/23365) 
- [Cannot add an official currency to a non-official language from the CLDR](https://github.com/PrestaShop/PrestaShop/issues/22545) 
- [The block to promote the discounts is removed after adding a cart rule](https://github.com/PrestaShop/PrestaShop/issues/21961) 
- [Menu Page is still displayed in the Back-Office](https://github.com/PrestaShop/PrestaShop/issues/21107) 
