---
layout: post
title:  "PrestaShop 1.7.5.0 beta is open for feedback!"
subtitle: "You can download it and test it"
date:   2018-11-08 10:45:00
authors: [ PrestaShop ]
icon: icon-leaf
tags:
 - version
 - beta
 - minor
 - releases
 - 1.7.5
---

The first Beta version for PrestaShop 1.7.5.0 is now ready for you to test!

We are happy to announce that we are close to releasing 1.7.5.0. This minor version (in the SemVer meaning of the term) brings important new features and improvements to the 1.7 codebase, and we can’t wait to receive your feedback!

This Beta release is a great opportunity for you to start working with it before we release a stable version.
Go download and install this Beta version as a test store, either on your machine or your web hosting, then play with it – and [give us your feedback](https://github.com/PrestaShop/PrestaShop/issues/new/choose)! We need YOU to test this new version of PrestaShop.

**Remember, this beta version is pre release software. Do not use it on your production shop!**

## News & improvements

### Features

- SEO improvements in category page:
  - The first page no longer has a duplicate URL with `&page=1`
  - The category block is no longer displayed after the first page
  - Improved default URLs for brands & suppliers (now are `/brand/123-somebrand` and `/supplier/123-mysupplier` instead of `/123_somebrand` and `/123__mysupplier`)
- Product page:
  - Specific prices can now be edited
  - The SEO section now displays a preview so that you can see how your page would be shown in Google results
  - When a product is taken offline, by default visitors will be redirected to the product’s main category, instead of a “Not found” page.
  - A "stock location" field has been added
- New module manager page with new categorization (Addons categories) and ability to manage modules by last use
- Improved style for migrated forms


### UX

- UX improvements on Module pages
- Helper card in SEO & URL page

### New & fixed modules

- The google sitemap module is now available for PrestaShop 1.7
- Favicon notifications in Back Office (native module)
- Buy Button Lite (native module)
- Cross selling module (native)
- Viewed products (native)


### Installer

- During install, if there is a more recent stable version of PrestaShop available, it will suggest and allow downloading and installing the latest instead
- New languages in installer:
  - Hindi
  - Bosnian
  - Mexican Spanish
 

## The technical side

### Symfony migration

Newly migrated pages:
- Orders -> Delivery slips
- Orders -> Invoices
- Design -> Theme Catalog
- Design -> Positions
- Shipping -> Preferences
- Payment -> Payment Methods
- Payment -> Preferences
- International -> Localization -> Localization
- International -> Localization -> Geolocation
- International -> Translations (Page 1 out of 2)
- Shop Parameters -> Order Settings -> Order Settings
- Shop parameters > Traffic & SEO > SEO & URLs
- Advanced Parameters -> Database -> DB Backup
- Advanced Parameters > Webservice (hidden, because the page "Advanced Parameters > Webservice -> Add key" has not been migrated and it does not make UX sense to have only one of them)
- Advanced Parameters -> Logs
- Advanced parameters -> Email

Controllers:
- You can now link migrated controllers to legacy one to avoid breaking links thanks to the [`_legacy_link` routing property](https://devdocs.prestashop.com/1.7/development/architecture/migration-guide/controller-routing/#more-about-the-legacy-link-property)

### Components and dependencies

- New [Grid component](https://devdocs.prestashop.com/1.7/development/components/grid/)
- Compatibility with Twig 2
- Improved compatibility with PHP 7.2
- The core theme is now built using Webpack 4 and includes jQuery 2.2.4
- Modules can now [declare modern (symfony-based) Back Office controllers](https://devdocs.prestashop.com/1.7/modules/concepts/controllers/admin-controllers/) and use the UI kit
- Modules can now [declare and use Symfony commands](https://devdocs.prestashop.com/1.7/modules/concepts/commands/)
- [Read about possible module regressions](https://devdocs.prestashop.com/1.7/modules/core_updates/1.7.5/)


### New hooks

- action{GridId}GridQueryBuilderModifier
- action{GridId}GridDefinitionModifier
- action{GridId}GridDataModifier
- action{GridId}GridFilterFormModifier
- action{GridId}GridPresenterModifier
- actionFrontControllerSetVariables

The developer documentation includes a [description of hooks](https://devdocs.prestashop.com/1.7/modules/concepts/hooks/list-of-hooks/).

## Issues

### Notable bug fixes

- Fixed a bug in robots.txt which blocked CSS and JS files, potentially preventing Google to form index pages properly.
- Multistore: fix in order and product pages in all shop contexts (PHP errors) and in the domain name ([#9145](https://github.com/PrestaShop/PrestaShop/pull/9145) and [#9450](https://github.com/PrestaShop/PrestaShop/pull/9450))

The complete [list of bugs fixed for 1.7.5.0](https://github.com/PrestaShop/PrestaShop/issues?utf8=%E2%9C%93&q=is%3Aissue+milestone%3A1.7.5.0+label%3Afixed) is availaible on GitHub.

### Known issues

- [#11264](https://github.com/PrestaShop/PrestaShop/issues/11264) The page "Module Catalog" is not found after uninstalling the mbo module
- [#10838](https://github.com/PrestaShop/PrestaShop/issues/10838) It is impossible to import data - ERR_TOO_MANY_REDIRECTS
- [#10345](https://github.com/PrestaShop/PrestaShop/issues/10345) Search isn't working in catalog > product page
- [#11152](https://github.com/PrestaShop/PrestaShop/issues/11152) It is impossible to change position of products into a category in the catalog > product page
- [#11112](https://github.com/PrestaShop/PrestaShop/issues/11112) Issue with help in BO with an RTL language
- [#11229](https://github.com/PrestaShop/PrestaShop/issues/11229) Logger::addLog does not log from from the front office
- [#11164](https://github.com/PrestaShop/PrestaShop/issues/11164) Max size of short description is equal to 0
- [#11220](https://github.com/PrestaShop/PrestaShop/issues/11220) It impossible to Add the Gaeilge (Gaelic) language - Translations page
- [#10412](https://github.com/PrestaShop/PrestaShop/issues/10412) HookDispatcher issue
- [#11042](https://github.com/PrestaShop/PrestaShop/issues/11042) Bad display with modal
- [#10430](https://github.com/PrestaShop/PrestaShop/issues/10430) Some issues in the import page
- [#10757](https://github.com/PrestaShop/PrestaShop/issues/10757) Multiple features with same value are causing not described errors

## Download

You can download PrestaShop 1.7.5 beta here:  

[Download PrestaShop 1.7.5.0 beta now!](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}

## How to help finish the 1.7.5

Your help will be very appreciated to finish the work on PrestaShop 1.7.5. Even if you are not a developer, your feedback has a lot of value.

You can:
 - Install it and test it
 - If you develop modules or themes, test them on this version
 - Test the auto-upgrade plugin
 - [Report bugs on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read [how to report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
 - Submit a bug fix by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))
 
 If everything is working well, comment this article to tell us, and share on social networks, we also need this feedback ;-)
