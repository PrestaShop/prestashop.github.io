---
layout: post
title:  "PrestaShop 1.7.7.0 Beta Is Ready To Be Tested!"
subtitle: "You can download it and test it"
date:   2020-05-13 10:00:00
authors: [ PrestaShop ]
image: /assets/images/2020/05/1.7.7_beta_banner.jpg
icon: icon-leaf
tags:
 - 1.7.7.x
 - version
 - beta
 - minor
 - releases
---

The first Beta version for PrestaShop 1.7.7.0 is now ready for you to test!

![Prestashop 1.7.7.0 BETA Release](/assets/images/2020/05/1.7.7_beta_banner.jpg)

After more than one year in the making, we are really thrilled to announce that we are releasing the 1.7.7.0 beta. This version is even bigger than the previous one with 957 merged pull requests, compared to 748 for 1.7.6.0 (our previous record) – and we are still at least a month away from the final version. 

This huge work has been possible thanks to the engagement of our great community, with more than 110 external contributors participating in the development of this version, fixing bugs, adding improvement to existing features or even developing new features for our merchants!
In this version we covered essential topics such as order management. By the way, you will enjoy more efficiency in daily tasks with the [full redesign and new features of order pages](https://build.prestashop.com/news/the-new-order-pages-in-prestaShop-1-7-7/). And also more stability with the upgraded compatibility to PHP 7.3 and more flexibility with new hooks.
 
It is essential that you to start testing this beta version before the release of the stable version in about a month. During this beta period, we strongly recommend checking that all your modules and themes are working properly, especially if you develop them yourself. Please download, install and test this new version of PrestaShop and give us your feedback as early as possible. Remember [our article about minor release lifecycle](https://build.prestashop.com/news/ps17-minor-release-lifecycle/): the sooner a problem is identified, the sooner it can be fixed. 
 
If you find regressions compared to the 1.7.6 version, please open an issue and describe your bug on [Github](https://github.com/PrestaShop/PrestaShop/issues/new?template=bug_report.md) so that we can reproduce it and fix it as soon as possible.
 
**Remember, this beta version is pre-release software. Do not use it in your production shop!**


## What’s new?

### New features & improvements

- The order pages have been redesigned and migrated to Symfony, including several new features to improve efficiency and avoid having to go back and forth between orders.
  To get all details and know more about the new features, read our [article](https://build.prestashop.com/news/the-new-order-pages-in-prestaShop-1-7-7/) dedicated to the full rework or the order management system.

-  To improve conversion and help our merchants' growth, we've been working on adding an improved search mechanism in front office called "Fuzzy search". Developed by community member [Lathanao](https://github.com/Lathanao) with the help of the core team, this feature implements the Levenshtein algorithm to improve PrestaShop’s native search in front-office by taking into account misspelling or typos. Read more [here](https://build.prestashop.com/news/introduction-to-the-fuzzy-search)! 

- In order to allow merchants to have all the currencies they need to meet the expectations of every customer, they can now add new official and non official currencies (e.g. local or custom) to their store and customize their display per language as desired.

![Customize currencies symbol and format](/assets/images/2020/05/Currencies-customize_symbol_and_format.png)

![Currencies format by language](/assets/images/2020/05/Currencies-format_by_language.png)

- The field Manufacturer Part Number is now available for product management. It's used to identify a specific product of a given manufacturer. It will improve indexing and searching, and also have a positive effect on SEO.

- An option has been added In Shop parameters > General to choose to enable or disable suppliers in front-office, regardless of brands. There used to be only one generic option, which could be problematic for merchants. They are now separated, to suit all merchants’ needs.

- Error page in the Back office: If an unexpected error occurs in the back office when running in production mode, you are now presented with a useful error page instead of a blank page, this way you have more information to understand what is happening.

- It is now possible to translate email contents in the Back Office when using the new Email theme feature introduced in 1.7.6 and available in Design > Email theme.

- A lot of [international improvements](https://build.prestashop.com/news/prestashop-keeps-growing-internationally/) have been made. New languages have been added to PrestaShop and its installer, localization packs have been updated to keep PrestaShop up-to-date to offer accurate international data for all businesses.

- Support for emojis: All database tables are now encoded in utf8bm4 by default, enabling support for emojis both on front and back-office fields. 


### Improved core modules

Some modules have been improved with bug fixes for increased robustness and new features for better productivity:

- Theme customization: The feature is now available for product & category pages (in addition to the home page). You can easily find, configure and customize your product and categories’ pages theme and main native modules.

- Customer reassurance (blockreassurance): Now available on all pages (above or below the header and / or the footer) in addition to product pages and during the checkout. You can customize the color of the icons, add a description and a link. With this module you build the confidence of your visitors and thus improve your conversion rate.


### Notable fixes

More than [160 bugs](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+is%3Aclosed+label%3Abug+milestone%3A1.7.7.0+-label%3ARegression+) have been fixed for the 1.7.7.0 (vs 110 for the 1.7.6.0), including [11 highly expected bug fixes](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+is%3Aclosed+label%3ATopwatchers+label%3Afixed+milestone%3A1.7.7.0), [5 front-office notable fixes](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+label%3AFO+label%3Amust-have+label%3Afixed+milestone%3A1.7.7.0+-label%3Atopwatchers+) and [5 back-office notable fixes](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aissue+label%3ABO+label%3Amust-have+label%3Afixed+milestone%3A1.7.7.0+-label%3Atopwatchers+-label%3Aregression)


### Notable technical improvements

- **Updated PHP support.** Following [our announcement last year](https://build.prestashop.com/news/announcing-end-of-support-for-obsolete-php-versions/), PrestaShop 1.7.7.0 introduces support for PHP 7.3 while dropping support for PHP versions earlier than 7.1.3 for more stability.

- **Updated jQuery to 3.4.1 everywhere.** Thanks to [jquery migrate](https://github.com/jquery/jquery-migrate), we have been able to upgrade jQuery to the latest version in Back Office as well as Classic & Core theme.

- **Automatic form rendering.** Thanks to the newly updated Twig form theme, back office forms are now much easier to render. This allows extensions to [add form fields anywhere in the form](https://devdocs.prestashop.com/1.7/modules/sample_modules/grid-and-identifiable-object-form-hooks-usage/#adding-new-form-field-to-customer-form) without need to override the form’s template. (Note: this is being implemented progressively, not all forms support it at the time of writing)

- **New CQRS Debugger in the Symfony debug bar.** With this [new feature](https://devdocs.prestashop.com/1.7/development/architecture/domain/cqrs/#cqrs-in-debug-toolbar) you can find out which commands and queries have been used to build the page you’re seeing. If you need to customize its behavior, you can [decorate or override it](https://devdocs.prestashop.com/1.7/modules/concepts/services/#override-an-existing-symfony-service) from a module.

- **Improved tab management.** Tabs now support symfony routes (no longer need a fake legacy controller), automatic detection in modules, enable/disable. When a module is disabled the Tab is now hidden (and when it is re-enabled it is visible again)


### Symfony migration

15 new pages migrated to Symfony including the order pages, resulting in reaching almost 55% of the Back office migration

- Orders > Orders: Listing, view & edit, add
- Orders > Credit Slips 
- Orders > Shopping Carts: View 
- Catalog > Monitoring
- Catalog > Brand & Suppliers: Listing, view, add & edit
- Catalog > Files: Listing, add & edit
- Customer Service > Order Messages > Listing, add & edit 
- Customers > Addresses > Listing, add & edit


### Core changes

[Notable changes in 1.7.7](https://devdocs.prestashop.com/1.7/modules/core-updates/1.7.7/) have been noted in this documentation page. Please, read it carefully, especially if you develop modules for PrestaShop 1.7.


## Download

You can download PrestaShop 1.7.7.0 beta here:  

[Download PrestaShop 1.7.7.0 beta now!](https://download.prestashop.com/download/releases/prestashop_1.7.7.0-beta.1.zip){: .btn .btn-lg .btn-success}
{: .text-center}


## How to help test 1.7.7

Your feedback on this beta is essential, the regressions you find right now are as many bugs less on the final version and less patches versions. It also means fewer problems on your (or your customer’s) online store. 

You must:

- Install it and test that there is no regression compared to the 1.7.6 version
- If you develop modules or themes, test them on this version
- Test the auto-upgrade plugin
- [Report regressions on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read how to [report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
- Fix regressions by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))


## Known issues 

- [BO - Error when viewing an order with custom product made on secondary shop](https://github.com/PrestaShop/PrestaShop/issues/18913)
- [BO - Wrong total in order detail page when adding a product with modified price](https://github.com/PrestaShop/PrestaShop/issues/18433)
- [BO - Wrong total when changing currency after placing the order and adding a product](https://github.com/PrestaShop/PrestaShop/issues/18443)
- [BO - Can't remove discount added from a cart rule on product selection after adding a product in order](https://github.com/PrestaShop/PrestaShop/issues/18379)
- [BO - Exception when deleting discount in order view](https://github.com/PrestaShop/PrestaShop/issues/18498)
- [BO - When creating a category, the simplified URL is not filled automatically when using multilang](https://github.com/PrestaShop/PrestaShop/issues/18763)
- [BO - Order page - An exception is displayed when adding a product to an old order](https://github.com/PrestaShop/PrestaShop/issues/18568)
- [BO - When creating an order, the status selected in the drop-down is canceled instead of payment accepted](https://github.com/PrestaShop/PrestaShop/issues/18831)
- [BO - Error in console in order page](https://github.com/PrestaShop/PrestaShop/issues/18776)
- [BO - Can't upload a child theme](https://github.com/PrestaShop/PrestaShop/issues/18914)
- [BO - Missing reset button in Theme & Logo](https://github.com/PrestaShop/PrestaShop/issues/18893)
- [BO - Order page - The total is incorrect in the "Add new cart rule" block after editing a product price if you don't refresh the page](https://github.com/PrestaShop/PrestaShop/issues/18844)
- [BO - Strange behavior in the add new Product page when the employee language is different from the default language](https://github.com/PrestaShop/PrestaShop/issues/18447)
- [BO - View order pagination does not display right number of products](https://github.com/PrestaShop/PrestaShop/issues/18959)
- [BO - Error in console in order page](https://github.com/PrestaShop/PrestaShop/issues/18776)
- [BO - Bad redirection when trying to access Orders when unauthorized](https://github.com/PrestaShop/PrestaShop/issues/19075)
- [BO - No access to employee's profile when not an admin](https://github.com/PrestaShop/PrestaShop/issues/19077)
- [BO - Create order - Cannot add a customized product](https://github.com/PrestaShop/PrestaShop/issues/18987)
- [FO - The promo value is not correct in the cart summary & checkout summary](https://github.com/PrestaShop/PrestaShop/issues/16842)
- [FO - checkout - The Shipping cost is incorrect in the cart detail when using a cart rule "Free shipping"](https://github.com/PrestaShop/PrestaShop/issues/18533)
- [FO - Detail discount is not good in multicurrency context](https://github.com/PrestaShop/PrestaShop/issues/18900)
- [Cumulative cart Rules with %age discount don't display the correct discount amount](https://github.com/PrestaShop/PrestaShop/issues/18810)
- [WS - Fatal error when trying to update an order through WS](https://github.com/PrestaShop/PrestaShop/issues/18789)

If everything is working well, feel free to comment on this article and share on social networks, we also need this kind of feedback! ;-)
