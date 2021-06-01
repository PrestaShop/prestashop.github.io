---
layout: post
title:  "PrestaShop 1.7.8.0 beta is open for feedback!"
subtitle: "You can download it and test it"
date: 2021-05-31
authors: [ PrestaShop ]
icon: icon-leaf
tags:
 - version
 - beta
 - minor
 - releases
 - 1.7.8
---

The first Beta version of PrestaShop 1.7.8.0 is now ready for you to test!

We are very happy to announce today the release of the beta version of 1.7.8.
This version includes many features and bug fixes, we count on you to test the Beta and report any bugs you encounter.

The latest features: we have the redesign of the translation system that facilitates export and translation of your modules and themes, a new custom header for multistore fans and many other improvements.

With more than 1,372 merged Pull Requests and 241 bug fixes, including 17 major and 4 Topwatcher (issues that are followed by more than 5 people), this is one of our biggest releases yet! We need the help of all the community to test this version.

Also, a big thank you to our 163 contributors with whom we would not have had this beautiful version. And a warm welcome to the 93 new contributors for their first contribution.

This Beta release is a great opportunity for you to start working with it before we release a stable version. Go download and install this Beta version as a test store, either on your machine or your web hosting, then play with it – and give us your feedback! We need you to test this new version of PrestaShop.

If you find regressions compared to previous versions, please create an [issue on Github](https://github.com/PrestaShop/PrestaShop/issues/new/choose) to help us to make it stable more quickly.

**Remember, this beta version is pre-release software and is expected to have bugs. Do not use it in your production shop!**

## New features & improvements

### Translations

- The translation feature has been revamped, adding the possibility to export back office, front office, email, themes, and module translations.

![The new translation export](/assets/images/2021/translation-export.png)


- Modules using the [new translation system](https://devdocs.prestashop.com/1.7/modules/creation/module-translation/new-system/) introduced in 1.7.6 can now distribute their own translation files in the XLF format.
You can use the export tool to migrate from legacy PHP catalogue to XLF catalogue


### Multistore

- Shops running on Multistore now feature a new Back Office header that makes it easy for merchants to tell which context they are on. Its background color can be customized for each shop or shop group in the Multistore parameters. 

![The new multistore header](/assets/images/2021/multistore_header.png)

- Only on the maintenance page for now, a drop-down list allows the merchant to view the shops list and find out if the page has inherited the group setting or has been customized.

![The new multistore specific setting drop down](/assets/images/2021/Specific_settings_drop_down_multistore.png)

It allows merchants to know at a glance which settings are applied in all shops and which ones have been customized to understand the different behaviors of theirs shops.

### Experimental features

The version 1.7.8 is introducing the Experimental features so that complex new features can be disabled or hidden by default until considered stable. Experimental features, also known as feature flags, allow developers to deliver small incremental chunks without compromising the system stability, which is a common practice in the software world. So on Advanced Parameters > Experimental Features, knowing the risks involved, the developers can enable or disable an experimental feature.

![The new Experimental features page](/assets/images/2021/experimental-features.png)

### Back Office Product page

New features and improvements have been shipped for the product page. However, as the product page is a key piece of the Back Office, we are delivering them with extra caution:
- In 1.7.8, the changes are added in an Experimental product page behind a feature flag: Back Office user must enable the Experimental page before using it. This should allow the community to try out this improved page in test environments and give us a lot of feedback.
- In the version after 1.7.8, the new and improved product page will replace the current page.

This 2-step delivery aims to ensure the stability of the changes before they are made definitive.

The new page includes:
- **A bulk suppression in the image manager**

It allows the user to remove images from the product easily (especially useful when the product features a large number of images). 

- **The possibility to replace an image**

It allows the user to avoid having to remove then add then re-assign an image.

- **A new pagination on the list of combinations**

Current pages loads every combinations of the product, even if there are hundred of them, which can make the page very slow. Pagination only loads a relevant number of combinations therefore it has a huge performance improvement.

- **A filter system to help user find combinations. Back Office user can filter the combinations by attributes**
 
It will help the user to find the right combination quickly.

### Improvements of the UI Kit

- PrestaShop back-office UI Kit has been improved to have a solid Design System with adjustment of alert colors, font size, buttons contrasts, and an enhancement of the responsiveness. [#16587](https://github.com/PrestaShop/PrestaShop/issues/16587) [#22358](https://github.com/PrestaShop/PrestaShop/issues/22358) [#104](https://github.com/PrestaShop/prestashop-ui-kit/pull/104)

![the new mobile improvements](/assets/images/2021/mobile-improvements.png)


### Front-Office improvements

- Improvements of classic theme images width, accessibility and some [lighthouse](https://developers.google.com/web/tools/lighthouse) KPI [#23352](https://github.com/PrestaShop/PrestaShop/issues/23352)[#20775](https://github.com/PrestaShop/PrestaShop/pull/20775)
- The implementation of Native Lazy Loading on theme Classic ([see the complete detail of the feature](https://build.prestashop.com/news/journey-to-improve-the-time-to-interactive-metric/)) [#19549](https://github.com/PrestaShop/PrestaShop/issues/19549)
- The label ‘Out of Stock’ is displayed on Catalog pages [#21105](https://github.com/PrestaShop/PrestaShop/issues/21105)
- The images on the Product Page can now be swiped on mobile for Classic theme [#20431](https://github.com/PrestaShop/PrestaShop/issues/20431)
- The subcategories are displayed on Categories pages [#10407](https://github.com/PrestaShop/PrestaShop/issues/10407)
- Return a 404 response when user visits product page for a product that does not exist [#21330](https://github.com/PrestaShop/PrestaShop/pull/21330/)

### Back-Office improvements

- TinyMCE mobile theme is enabled in the Back-Office [#23225](https://github.com/PrestaShop/PrestaShop/issues/23225)
- The overrides done in the shop are displayed in the Informations tab [#21368](https://github.com/PrestaShop/PrestaShop/issues/21368)
- A new order internal note is available in the Order View Page [#14753](https://github.com/PrestaShop/PrestaShop/issues/14753)
- Back Office users can upload custom avatars [#18653](https://github.com/PrestaShop/PrestaShop/issues/18653)

## Notable fixes

### **Topwatchers:**

- When a product had a specific price applied and was discounted by unit, the discount displayed on the product page was false [#16163](https://github.com/PrestaShop/PrestaShop/issues/16163) (Major)
- When Clear cache button was clicked twice, the user would see an error page [#11105](https://github.com/PrestaShop/PrestaShop/issues/11105) (Major)
- Profiler was not compatible with hooks and module [#9659](https://github.com/PrestaShop/PrestaShop/issues/9659)
- Double click on "Add to cart" on the product page FO was freezing the page [#9634](https://github.com/PrestaShop/PrestaShop/issues/9634) (Major)

### Major bugs:

**Front-Office**

- Guest Order Tracking redirected to shop Homepage when Friendly URLs were disabled [#20194](https://github.com/PrestaShop/PrestaShop/issues/20194)
- An error was displayed on checkout when Legal compliance module was installed [#12509](https://github.com/PrestaShop/PrestaShop/issues/12509)
- Checkout slowdown when many orders were made with a Guest account [#16584](https://github.com/PrestaShop/PrestaShop/issues/16584)
- Ecotax was displayed tax excl. instead of tax incl. [#18835](https://github.com/PrestaShop/PrestaShop/issues/18835)
- Confirmation button on Checkout should be disabled if Terms and conditions are not approved [#19161](https://github.com/PrestaShop/PrestaShop/issues/19161)

**Back-Office**

- An exception was thrown when adding an invalid parameter to the Language form and "No picture" image [#22500](https://github.com/PrestaShop/PrestaShop/issues/22500)
- In Back-Office, some of the JavaScript code relied on form field's ids and attributes that were modified in 1.7.8 [#21819](https://github.com/PrestaShop/PrestaShop/issues/21819)
- When creating a customer account, the number of characters was only checked browser-side [#19505](https://github.com/PrestaShop/PrestaShop/issues/19505)
- It was possible to create a catalog price rule with percentage value greater than 100% [#19013](https://github.com/PrestaShop/PrestaShop/issues/19013)
- A bug in TinyMCE Update 4.0.16 was creating errors, fixed by upgrading TinyMCE to 4.9.8 [#11011](https://github.com/PrestaShop/PrestaShop/issues/11011)
- Unit price was reset to 0 upon activating/disabling or duplicating products from the Product List [#10792](https://github.com/PrestaShop/PrestaShop/issues/10792)
- Installing PrestaShop with SSL was complex because some settings were not acknowledged [#10482](https://github.com/PrestaShop/PrestaShop/issues/10482)

**WebServices**

- The id_group_shop was shared instead of id_shop_group in webservice parameter [#19566](https://github.com/PrestaShop/PrestaShop/issues/19566)

**Distribution**

- `.docker` folder should not be inside release zip [#22233](https://github.com/PrestaShop/PrestaShop/issues/22233)


## Notable technical improvements

**Hooks**
- New hooks into Presenters, allowing to enrich the data built by these services [#11125](https://github.com/PrestaShop/PrestaShop/issues/11125)
- New hook to control TinyMCE configuration [#19408](https://github.com/PrestaShop/PrestaShop/issues/19408)
- New hooks for cart modal - crosseling and promotion [#17709](https://github.com/PrestaShop/PrestaShop/issues/17709)
- Ability to enable and disable Hooks [#20848](https://github.com/PrestaShop/PrestaShop/issues/20848)
- Allow override of checkoutProcess construction [#19848](https://github.com/PrestaShop/PrestaShop/issues/19848)

**Tooling**
- Introduce phpstan extension for PrestaShop [#22728](https://github.com/PrestaShop/PrestaShop/issues/22728)
- Introduce PHPStan level 4 [#16471](https://github.com/PrestaShop/PrestaShop/issues/16471)
- Apply ESLint to themes and Classic Theme folders [#20080](https://github.com/PrestaShop/PrestaShop/pull/20080)
- Apply ESLint to default Back Office Theme [#22998](https://github.com/PrestaShop/PrestaShop/issues/22998)
- Apply StyleLint to default Back Office Theme [#22885](https://github.com/PrestaShop/PrestaShop/issues/22885)

**Theme**
- Remove microdata in HTML flow and replace by JSON-LD for Classic theme [#22867](https://github.com/PrestaShop/PrestaShop/issues/22867)
- CSS classes / element attributes selectors now prefixed by `js-` [#14346](https://github.com/PrestaShop/PrestaShop/issues/14346)
- Add selectors mapping so themes can override it [#20002](https://github.com/PrestaShop/PrestaShop/pull/20002)
- Update jQuery from 3.4.1 to 3.5.1 [#23122](https://github.com/PrestaShop/PrestaShop/pull/23122)

**Other**
- Fix sessions cookies SameSite bug [#22711](https://github.com/PrestaShop/PrestaShop/issues/22711)
- Enabled High DPI support in ImageRetriever [#19798](https://github.com/PrestaShop/PrestaShop/issues/19798)
- Make the Back Office menu translatable through the translation interface and fix many translation problems when installing other languages [#9762](https://github.com/PrestaShop/PrestaShop/issues/9762)
- There is no more legacy Back Office service container, the Symfony container is now available everywhere: [#14995](https://github.com/PrestaShop/PrestaShop/issues/14995)
- New Webservices endpoint to manage and download Attachments [#12728](https://github.com/PrestaShop/PrestaShop/pull/12728)
- The UI Kit source files are now imported [#18396](https://github.com/PrestaShop/PrestaShop/pull/18396)
- Update jQuery from 3.4.1 to 3.5.1 on default BO theme [#23122](https://github.com/PrestaShop/PrestaShop/pull/23122)
- Update BO theme style in legacy pages to match the UI kit [#22435](https://github.com/PrestaShop/PrestaShop/issues/22435)
- Introduce Javascript component loading through window.prestashop [#20591](https://github.com/PrestaShop/PrestaShop/pull/20591)


## Dependencies and Software compatibility

- Add blockwishlist v2.0.0 as native module [#23617](https://github.com/PrestaShop/PrestaShop/pull/23617)
- Remove archived modules from the ZIP [#23617](https://github.com/PrestaShop/PrestaShop/pull/23617)
- Update CLDR to latest version 38 (2020-10-28) [#21678](https://github.com/PrestaShop/PrestaShop/issues/21678)
- Enable use of Composer 2.0 [#20986](https://github.com/PrestaShop/PrestaShop/issues/20986)
- Enable compatibility for PHP 7.4 [#16477](https://github.com/PrestaShop/PrestaShop/issues/16477)

## Symfony migration

See the new pages migrated in Symfony, we are now about 65% of the Back-Office pages migrated.

- Catalog > Attributes & Features > Attributes listing 
- Shop parameters > Order settings > Statuses > Add new / edit order status 
- Shop parameters > Order settings > Statuses
- Shop parameters > Order settings > Statuses > Add new / edit order return status
- International > Locations > Zones
- International > Locations > Add new / edit zone

## Download

You can download PrestaShop 1.7.8.0 beta here:  

[Download PrestaShop 1.7.8.0 beta now!](https://download.prestashop.com/download/releases/prestashop_1.7.8.0-beta.1.zip){: .btn .btn-lg .btn-success}
{: .text-center}


## How to help test 1.7.8

Your feedback on this beta is essential. The more regressions you find right now, the fewer bugs there will be on the final release, which means fewer patch versions and fewer problems on your (or your customer's) online store. 

You must:

- Install it and test that there is no regression compared to the 1.7.7 version
- If you develop modules or themes, test them on this version
- Test the auto-upgrade plugin
- [Report regressions on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read how to [report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
- Fix regressions by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))

If you have any questions about the version and its features, feel free to share them on [the PrestaShop open source project's Slack](https://join.slack.com/t/prestashop/shared_invite/zt-dkmbz5qf-I~FlEWwmRUOXunc5ui0Ucg).

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
- [When an account is created, an exception is displayed when the first name and/or last name fields contain invalid characters](https://github.com/PrestaShop/PrestaShop/issues/24464) 
- [When browsing a disabled category, an error is displayed](https://github.com/PrestaShop/PrestaShop/issues/24370) 
- [The scrollbar is missing in the new multistore dropdown](https://github.com/PrestaShop/PrestaShop/issues/24333) 
- [The warning message is empty when we try to remove a customer from a specific price](https://github.com/PrestaShop/PrestaShop/issues/24142) 
- [The summary and description fields of the Product Page form allow more characters than the defined limit](https://github.com/PrestaShop/PrestaShop/issues/24131) 
- [When running a CLI command prestashop:update:sql-upgrade-file-hooks-listing and prestashop:update:configuration-file-hooks-listing, an error is displayed](https://github.com/PrestaShop/PrestaShop/issues/24023) 
- [The new Multistore header is not displayed on Product Add / Edit page](https://github.com/PrestaShop/PrestaShop/issues/23937) 
- [When modifying a translation of Email Body, an error is displayed](https://github.com/PrestaShop/PrestaShop/issues/23878) 
- [When searching for a translation through the interface, the « leaves » of the tree that do not include the searched term are not disabled](https://github.com/PrestaShop/PrestaShop/issues/23876) 
- [An error is displayed in the browser console when creating a category](https://github.com/PrestaShop/PrestaShop/issues/23365) 
- [Cannot add an official currency to a non-official language from the CLDR](https://github.com/PrestaShop/PrestaShop/issues/22545) 
- [The block to promote the discounts is removed after adding a cart rule on Checkout](https://github.com/PrestaShop/PrestaShop/issues/21961) 
- [The Menu Page should be disabled in the Back-Office](https://github.com/PrestaShop/PrestaShop/issues/21107) 
