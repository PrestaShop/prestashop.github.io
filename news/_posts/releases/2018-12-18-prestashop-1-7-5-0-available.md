---
layout: post
title:  "PrestaShop 1.7.5.0 is available!"
subtitle: "Improvements and bugs fixes under the hood, and exciting new features"
date:   2018-12-18 10:15:00
authors: [ AntoineThomas, PrestaShop ]
icon: icon-checked
tags:
 - 1.7
 - 1.7.5.x
 - version
 - minor
 - releases
 - development
---

After a Beta and a Release Candidate, the long awaited PrestaShop 1.7.5.0 is released and is available for download.
As usual, you can upgrade with the Auto upgrade module. However, considering that the current period is usually critical for merchants sales, for sure, some might prefer to wait for a more appropriate time :-)

![1.7.5.0 Available](/assets/images/2018/12/1.7.5.jpg)

## What’s new

### SEO improvements in category page:

- The first page no longer has a duplicate URL with &page=1
- The category block is no longer displayed after the first page
- Improved default URLs for brands & suppliers (now are /brand/123-somebrand and /supplier/123-mysupplier instead of /123_somebrand and /123__mysupplier)
- Helper card in SEO & URL page


### Product page

- Specific prices can now be edited
- The SEO section now displays a preview so that you can see how your page would be shown in Google results
- When a product is taken offline, by default visitors will be redirected to the product’s main category, instead of a “Not found” page.
- A “stock location” field has been added

![Balise Meta - screenshot](/assets/images/2018/12/baliseMeta.jpg)

![Store location is back](/assets/images/2018/12/storeLocation.jpg)


### Module management

- UX improvements on Module pages
- New module manager page with new categorization (Addons categories) and ability to manage modules by last use


### New & fixed native modules

- The google sitemap module is now available for PrestaShop 1.7
- Favicon notifications in Back Office
- Buy Button Lite
- Cross selling module
- Viewed products

![Favicon notification - screenshot](/assets/images/2018/12/faviconNotifications.png)

![Viewed products - screenshot](/assets/images/2018/12/viewedProducts.jpg)


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

### Bugs fixes

You can see the comprehensive list of [the **114 bugs** fixed for 1.7.5.0 on GitHub](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+label%3ABug+milestone%3A1.7.5.0+is%3Aclosed).

Top watchers:

- [#10638](https://github.com/PrestaShop/PrestaShop/issues/10638) - Undefined $urls index in ajax rendered template
- [#9942](https://github.com/PrestaShop/PrestaShop/issues/9942) - Add new referer error 
- [#9916](https://github.com/PrestaShop/PrestaShop/issues/9916) - Viewed products don't work on fresh installed PS1.7 
- [#9883](https://github.com/PrestaShop/PrestaShop/issues/9883) - Error in Chrome when hit back from product to category 
- [#9697](https://github.com/PrestaShop/PrestaShop/issues/9697) - Unable to translate some strings in bank wire payment module 


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
- International -> Translations (Page 1 out of 2)
- Shop Parameters -> Order Settings -> Order Settings
- Shop parameters > Traffic & SEO > SEO & URLs
- Advanced Parameters -> Database -> DB Backup
- Advanced Parameters > Webservice (hidden, because the page “Advanced Parameters > Webservice -> Add key” has not been migrated and it does not make UX sense to have only one of them)
- Advanced Parameters -> Logs
- Advanced parameters -> Email

Controllers:

- You can now link migrated controllers to legacy one to avoid breaking links thanks to the [_legacy_link routing property](https://devdocs.prestashop.com/1.7/development/architecture/migration-guide/controller-routing/#more-about-the-legacy-link-property).

The style of the migrated forms has been improved.


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


### Clear cache on module action

PrestaShop now clears the symfony cache when an action is performed on a module (install, uninstall, enable, …) This is necessary because modules can now use Symfony routing and services, so we need to clear the cache if we want these services/routing to be updated.


### Changes

A lot has been done to make this “minor” PrestaShop version a reality. Here’s 1.7.5 in numbers:

- 448 merged Pull Requests (vs 210 in 1.7.3 and 260 in 1.7.4)
- files changed (164812 insertions, 129497 deletions)
- 2903 files changed
- 2079 commits merged
- 114 issues fixed
- 75 people contributed!


## PrestaShop ❤ Community

PrestaShop 1.7.5 is above all a community project: from the 75 committers who contributed to this release, **4 are new contributors** and over two thirds were community members.

A huge “thank you!” to these 75 number fine people: Amazzing, Anas Mammeri, Andy Pieters, anegoda1995, Ansar Mallouli, Antoine THOMAS, Aurélien Pelletier, Axome, azisyus, Ben Wallis, can, Code Utopia, Cristiano Verardi, Dhavalkumar Prajapati, Dheeraj Sharma, fatmaBouchekoua, fouratachour, FranckRIBEIRO, Fransuisse, Guillaume Durand, hadrich-hatem, idnovate, iqit-commerce (Marcin Sz), Ishiki, jf-viguier, Jocelyn Fournier, Johannes Schramm, Jonathan Lelievre, JuanjoSCu, Jérôme H, khouloud.belguith, Lathanao, Leandro F. L, Louise Bonnard, lozal2244, Lucas Rolff, mahdi, Marion François, Mathias Reker, Mathieu Ferment, Matt75, Matthieu Mota, Mehdi, mehdi-ghezal, Michael Käfer, Mickaël Andrieu, okom3pom, Oskar Andersson, Pablo Borowicz, Patrick Weinstein, Pedro Câmara, Pedro Rendeiro, Peter Schaeffer, Pierre RAMBAUD, Presta Module, rdy4ever, Rokas Zygmantas, Rudra Sarkar, Rémi Gaillard, sadlyblue, sallemiines, seleda, Sergey P, Simone, Sébastien Bareyre, Sébastien LE, RUCHEC, Thomas Leviandier, Thomas Nabord, tolispy, Tomas Ilginis, Tony Botalla, unlocomqx, Web Premiere, yosra.akrout, Šarūnas Jonušas!

Thank you again for helping improve the life of more than 270,000 online merchants with ideas, improvements, and fixes!


## Download

You can download PrestaShop 1.7.5.0 here:


[Download PrestaShop 1.7.5.0 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}
 
And don’t forget to [give us your feedback](https://github.com/PrestaShop/PrestaShop/issues/new/choose)! 
