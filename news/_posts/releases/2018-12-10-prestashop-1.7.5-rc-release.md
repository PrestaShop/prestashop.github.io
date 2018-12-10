---
layout: post
title:  "PrestaShop 1.7.5.0 release candidate is open for feedback!"
subtitle: "You can download it and test it"
date:   2018-12-10 18:30:00
authors: [ PrestaShop ]
icon: icon-leaf
tags:
 - version
 - beta
 - minor
 - releases
 - 1.7.5
---

A few weeks after the beta, the first release candidat for PrestaShop 1.7.5.0 is now ready for you to test!

This is the last step before releasing the final 1.7.5.0. The aim of this version is to check there is no regression and no critical issues reported by the community users. If nothing is reported in the next seven days, then 1.7.5.0 will be available.

Please note that this is not possible to upgrade from the Beta to the Release Candidate. And, it will not be possible to upgrade from the Release Candidate to the final release.

Go download and install this RC version as a test store, either on your machine or your web hosting, then play with it – and [give us your feedback](https://github.com/PrestaShop/PrestaShop/issues/new/choose)! We need YOU to test this new version of PrestaShop.

**Remember, this release candidate version is pre release software. Do not use it on your production shop!**

## New in the release candidate

### Clear cache on module action

PrestaShop now clears the symfony cache when an action is performed on a module (install, uninstall, enable, ...)
This is necessary because modules can now use Symfony routing and services, so we need to clear the cache if we want
these services/routing to be updated.

### Changelog

44 pull requests from 14 developers have been merge since the beta release. Read the [Changelog](https://assets.prestashop2.com/en/system/files/ps_releases/changelog_1.7.5.0-rc.1.txt) for details.

A total of [130 issues have been fixed for the 1.7.5.0 milestone](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+label%3AFixed+milestone%3A1.7.5.0+is%3Aclosed).


## News & improvements already announced in the beta release

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
  - Latvian
  - Galician
  - Arabic
 

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


## Download

You can download PrestaShop 1.7.5 RC here:  

[Download PrestaShop 1.7.5.0 RC now!](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
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
