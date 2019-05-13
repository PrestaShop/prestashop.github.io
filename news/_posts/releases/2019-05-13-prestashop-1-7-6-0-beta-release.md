---
layout: post
title:  "PrestaShop 1.7.6.0 beta is open for feedback!"
subtitle: "You can download it and test it"
date:   2019-05-13 15:00:00
authors: [ PrestaShop ]
icon: icon-leaf
tags:
 - version
 - beta
 - minor
 - releases
 - 1.7.6.x
---


The first Beta version for PrestaShop 1.7.6.0 is now ready for you to test!

![Prestashop 1.7.6.0 BETA Release](/assets/images/2019/05/1.7.6_beta_banner_May19.jpg)

We are really happy to announce that we are close to releasing 1.7.6.0.
This minor version (in the SemVer meaning of the term) brings important new features and improvements to the 1.7 codebase, and we can’t wait to receive your feedback!

This Beta release is a great opportunity for you to start working with it before we release a stable version. Go download and install this Beta version as a test store, either on your machine or your web hosting, then play with it – and give us your feedback! We need YOU to test this new version of PrestaShop.

If you find regressions compared to previous versions, please create an issue on [Github](https://github.com/PrestaShop/PrestaShop/issues/new?template%3Dbug_report.md) to help us to make it stable more quickly.

Remember, this beta version is pre-release software. Do not use it on your production shop!


## News & improvements

### New features & improvements

-   SEO optimization for combination products: all combinations now have the parent product’s URL as their canonical, accessing it no longer issues a redirection, displays the default combination [\#13009](https://github.com/PrestaShop/PrestaShop/pull/13009)
-   A “Price tax included” column has been added to the products list [\#11484](https://github.com/PrestaShop/PrestaShop/pull/11484)
-   A new “modern” template design & wording for transactional emails and a
    new email template generation system[\#13004](https://github.com/PrestaShop/PrestaShop/pull/13004)

![New emails template](/assets/images/2019/05/1.7.6_beta_email_template_EN.jpg)

-   Improved Catalog mode: it is now possible to choose to display or hide the prices [\#11688](https://github.com/PrestaShop/PrestaShop/pull/11688)
-   Price & taxes project 
    - Bug fixes
    - Front-office improvements: cart price details, add to cart pop up,
      order confirmation [\#13047](https://github.com/PrestaShop/PrestaShop/pull/13047)

![Improved Prices and Taxes display](/assets/images/2019/05/1.7.6_beta_popup_cart_EN.png)

-   New Theme & logo page design
-   Improved mobile responsive in the Back-office [\#13049](https://github.com/PrestaShop/PrestaShop/pull/13049)
-   Improved employee profile menu in the Back-office [\#12707](https://github.com/PrestaShop/PrestaShop/pull/12707)
    -   Four new tabs added: Resources, Training, Find an expert and
      PrestaShop Marketplace
    -   New contextual welcome messages
    -   An avatar image is now displayed
- More Helpers cards and Empty states added to the BO

![More Helpers Cards in the BO](/assets/images/2019/05/1.7.6_beta_empty_states.jpg)


-   We have fixed many Back-office / Front-office design bugs and made some integration improvements:
    -   Fix bug on contact when mail is too long [\#12893](https://github.com/PrestaShop/PrestaShop/pull/12893)
    -   Fix labels display computing [\#13407](https://github.com/PrestaShop/PrestaShop/pull/13407)
    -   Fix label "Web only" [\#12872](https://github.com/PrestaShop/PrestaShop/pull/12872)
    -   Fix quantity placeholder issue in the Stock management page [\#10199](https://github.com/PrestaShop/PrestaShop/pull/10199)
    -   Fix image dimensions in Product Card view [\#10297](https://github.com/PrestaShop/PrestaShop/pull/10297)
    -   Limit carrier image size on checkout page [\#12892](https://github.com/PrestaShop/PrestaShop/pull/12892)
    -   Add modal-dialog-centered class to classic theme [\#10253](https://github.com/PrestaShop/PrestaShop/pull/10253)


### New & improved core modules 

-   Faceted search: The module has been massively refactored and new features have been added [\#52](https://github.com/PrestaShop/ps_facetedsearch/pull/52)
-   Customer reviews with rich snippets: new module available for 1.7.6
-   Reassurance module: we made a major update of the module
-   Image Slider module: fixed [\#10341](https://github.com/PrestaShop/PrestaShop/pull/10341)


## The technical side

### Technical improvements 

-   Support of legacy translations of modules in Translations Manager of
    BO [\#11321](https://github.com/PrestaShop/PrestaShop/pull/11321)
-   Support for translation in modules’ twig templates
-   Nightly builds and nightly board [https://nightly.prestashop.com/](https://nightly.prestashop.com/)
-   Support of Doctrine for modules and annotated Entities (both Front
    and Back-office) [\#12564](https://github.com/PrestaShop/PrestaShop/pull/12564)
-   Price computation are now covered by Integration tests powered by Behat (human-readable tests) [\#12634](https://github.com/PrestaShop/PrestaShop/pull/12634)
-   New mail template system based on Twig, along with a new generation system which avoids downloading all the mail templates; will allow easier customization in the future versions
-   Performance:
    -   Improve employee authorization process
    -   Cache introduced when loading modules
-   Support of multiple grids on the same page
-   New1.7.6_beta_banner_May19.jpg [CLDR standard](http://cldr.unicode.org) implementation: improved localization of prices and amounts, will allow creating custom currencies in future versions
-   Web services:
    -   Product customization is now reachable [\#11938](https://github.com/PrestaShop/PrestaShop/pull/11938)
    -   Product combination information in Pack content is now available [\#12329](https://github.com/PrestaShop/PrestaShop/pull/12329)


### Notable fixes

-   Fixed minimum order in the second currency [\#9665](https://github.com/PrestaShop/PrestaShop/issues/9665)
-   Dni field is required if the associated country needs it [\#9891](https://github.com/PrestaShop/PrestaShop/issues/9891)
-   Calculate carrier price on the real order price [\#9540](https://github.com/PrestaShop/PrestaShop/issues/9540)
-   Cart rules not applied if the cart contains only virtual products [\#10264](https://github.com/PrestaShop/PrestaShop/issues/10264)
-   Hook reseted during upgrade [\#11873](https://github.com/PrestaShop/PrestaShop/issues/11873)
-   Catalog mode correctly hides prices and cart, a new option allows
    displaying prices while disabling orders [\#11688](https://github.com/PrestaShop/PrestaShop/pull/11688)
-   Enhanced security checks for virtual goods [\#12023](https://github.com/PrestaShop/PrestaShop/pull/12023)
-   The number of SQL requests to get the employee authorizations has
    been significantly reduced [\#12914](https://github.com/PrestaShop/PrestaShop/pull/12914)
-   Checkout doesn’t proceed automatically from carrier selection to payment selection [\#12456](https://github.com/PrestaShop/PrestaShop/issues/12456)

The complete [list of bugs fixed for 1.7.6.0](https://github.com/PrestaShop/PrestaShop/issues?utf8%3D%25E2%259C%2593%26q%3Dis%253Aissue%2Bmilestone%253A1.7.6.0%2Blabel%253Afixed%2B) is available on Github.


### Hooks

#### New hooks

-   displayProductActions (Product page, close to the “Add to cart” button, [\#13103](https://github.com/PrestaShop/PrestaShop/pull/13103))
-   displayPersonalInformationTop (Checkout funnel, before the customer login form, [\#13103](https://github.com/PrestaShop/PrestaShop/pull/13103))
-   additionalCustomerAddressFields (In CustomerAddressFormatter, [\#9132](https://github.com/PrestaShop/PrestaShop/pull/9132))
-   actionProductFlagsModifier (Allows to customize product flags, [\#11614](https://github.com/PrestaShop/PrestaShop/pull/11614))
-   Form hooks
-   Kpi hooks [\#12706](https://github.com/PrestaShop/PrestaShop/pull/12706)
-   Mail generator hooks (will be defined with Doc as well)
    -   actionListMailThemes
    -   actionGetMailThemeFolder
    -   actionBuildLayoutVariables
    -   actionGetMailLayoutTransformations


#### Improved hooks

-   actionProductAdd now receives id\_product\_old when duplicating a
    product


### Symfony Migration - new pages 

-   Catalog \> Categories
-   Catalog \> Categories \> Add new / edit category
-   Catalog \> Brand & Suppliers \> Brands \> Add new brand
-   Catalog \> Brand & Suppliers \> Suppliers (will be hidden)
-   Catalog \> Brand & Suppliers \> Brands
-   Catalog \> Brand & Suppliers \> Brands \> Add new brand address
-   Catalog \> Brand & Suppliers \> Brands \> View brand
-   International \> Localization \> Currencies
-   International \> Localization \> Currencies \> Add new / edit currency
-   International \> Localization \> Languages
-   International \> Localization \> Languages \> Add new / edit language
-   International \> Taxes \> Taxes
-   International \> Taxes \> Taxes \> Add new / edit tax
-   Design \> Theme & Logo
-   Design \> Theme & Logo \> Add new theme
-   Design \> Theme & Logo \> Choose layouts
-   Design \> Pages
-   Design \> Pages \> Add new / edit page
-   Design \> Pages \> Add new / edit page category
-   Advanced Parameters \> Team \> Employees
-   Advanced Parameters \> Team \> Employees \> Profiles
-   Advanced Parameters \> Team \> Employees \> Profiles \> Add new profile
-   Advanced Parameters \> Team \> Employees \> Add new employee
-   Advanced Parameters \> Webservice \> Add new webservice key
-   Shop parameters \>Traffic & SEO \> SEO & URL \> Add new / edit page
-   Shop parameters \> Contact \> Contacts
-   Shop parameters \> Contact \> Contacts \> Add new / edit contact
-   Customers \> Customers
-   Customers \> Customers \> Add new / edit customer
-   Customers \> Customers \> View customer


### Breaking or risky changes

- The new CLDR implementation replaces the old one [\#12999](https://github.com/PrestaShop/PrestaShop/pull/12999). Some breaking changes were needed:
  -   The Currency ObjectModel is now multilingual
  -   The IcanBoogie/CLDR library has been removed
  -   Calls to Tools::getCldr() throw a PrestaShopException
  -   The namespace “PrestaShop\\PrestaShop\\Core\\Cldr” has been removed
  -   The CLDR files in the “/translations” directory have been removed
- Import:
  -   You no longer can just add categories to current categories with import to a force ID. You will have to set them all and the first will become the default\_category. [\#10930](https://github.com/PrestaShop/PrestaShop/pull/10930))

- Replaced library:
  -   PhpExcel (no longer supported) has been replaced by PHPSpreadsheet [\#11246](https://github.com/PrestaShop/PrestaShop/pull/11246))

- Version comparison [\#12251](https://github.com/PrestaShop/PrestaShop/pull/12251):
  -   AppKernel::MAJOR\_VERSION is now "7" instead of "17".
  -   "1.2.4" is no longer greater than "1.2.3.4" (the latter is now
    interpreted as "2.3.4")

- Endpoints other than index.php have been deprecated [\#12708](https://github.com/PrestaShop/PrestaShop/pull/12708)):
  -   All BO endpoints now require a token
  -   AdminModelAdapter.php now requires the Router in its constructor

- The following currencies are no longer available:
  -   BYR: Belarusian Ruble (2000–2016)
  -   LTL: Lithuanian Litas (end 2014-12-31)
  -   STD: São Tomé & Príncipe Dobra (end 2017-12-31)

- Other:
  -   Slashes are no longer removed from \$\_GET and \$\_POST variables [\#11962](https://github.com/PrestaShop/PrestaShop/pull/11962)
  -   src/Core/Addon/Module/ModuleManager.php::\_construct() receives an instance of CacheClearerInterface instead of CacheClearer [\#12022](https://github.com/PrestaShop/PrestaShop/pull/12022)
  -   Permissions for files created by PrestaShop are no longer set to 0777. Permissions are now set to 0755 for directories and 0644 for files.
  -   To prevent having jQuery included twice, It is no longer possible to add jQuery in BO controllers based on the new theme using addJquery() [\#12716](https://github.com/PrestaShop/PrestaShop/pull/12716)
  -   Error messages are no longer html escaped [\#12788](https://github.com/PrestaShop/PrestaShop/pull/12788)


### Known Issues 

Incomplete Improvements
-   Better alert for customer creation and customer info edit forms [\#13640](https://github.com/PrestaShop/PrestaShop/issues/13640)

Issues
-   Some native modules wordings do not have domain [\#13476](https://github.com/PrestaShop/PrestaShop/issues/13476)
-   Bulk action & the Select all doesn't work in the SQL manager page [\#13620](https://github.com/PrestaShop/PrestaShop/issues/13620)
-   BO - We can create a new customer successfully without setting required field "Partner offers" [\#13556](https://github.com/PrestaShop/PrestaShop/issues/13556)
-   ToggleColumn option name changed between 1.7.5 and 1.7.6 [\#13544](https://github.com/PrestaShop/PrestaShop/issues/13544)
-   Catalog \> Monitoring \> Empty categories list status toggling action not working [\#13541](https://github.com/PrestaShop/PrestaShop/issues/13541)
-   Message with gift wrapping option in order not display in back office [\#13478](https://github.com/PrestaShop/PrestaShop/issues/13478)
-   Strange behavior when we are moving the mouse under the "Status" label [\#12068](https://github.com/PrestaShop/PrestaShop/issues/12068)
-   Private comment in Order [\#13428](https://github.com/PrestaShop/PrestaShop/issues/13428)
-   New theme & logo page - Design fixes [\#13467](https://github.com/PrestaShop/PrestaShop/issues/13467)
-   Old admincustomer URL in notifications [\#13450](https://github.com/PrestaShop/PrestaShop/issues/13450)
-   Discount line not always removed during checkout [\#12969](https://github.com/PrestaShop/PrestaShop/issues/12969)
-   Vertically align the pagination system components [\#12392](https://github.com/PrestaShop/PrestaShop/issues/12392)
-   Help isn't displayed on add customer page [\#13449](https://github.com/PrestaShop/PrestaShop/issues/13449)
-   An exception is displayed when we try to upload in the logo section with an image which has a not recognized format [\#13729](https://github.com/PrestaShop/PrestaShop/issues/13729)
- Tax excl column in catalog page doesn't take into account specific prices [\#13731](https://github.com/PrestaShop/PrestaShop/issues/13731)


## Download

You can download PrestaShop 1.7.6 beta here:  

[Download PrestaShop 1.7.6 beta now!](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}

## How to help finish the 1.7.6

Your help will be very appreciated to finish the work on PrestaShop 1.7.6. Even if you are not a developer, your feedback has a lot of value.

You can:
- Install it and test it
- If you develop modules or themes, test them on this version
- [Report bugs on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read [how to report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
- Submit a bug fix by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))

 
If everything is working well, comment this article to tell us, and share on social networks, we also need this feedback.
