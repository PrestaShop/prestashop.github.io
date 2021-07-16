---

layout: post
title:  "PrestaShop 1.7.8.0 RC Is Ready To Be Tested!"
subtitle: "One months after the beta, here it is: the first release candidate for PrestaShop 1.7.8.0 is now ready for you to test!"
date:   2021-07-04
authors: [ PrestaShop ]
image: /assets/images/2021/07/
icon: icon-leaf
tags:

* 1.7.8.x
* version
* rc
* minor
* releases
* 1.7
---
## Notable changes since the Beta release

**Major:**

[Multistore configuration key is not valid html](https://github.com/PrestaShop/PrestaShop/issues/24812)

[BO - Orders - Multi-invoices - The addProductNewInvoiceInfo is not displayed when creating new invoice](https://github.com/PrestaShop/PrestaShop/issues/24533)

[BO - Add new Order page - Changing the Product quantity freeze the page](https://github.com/PrestaShop/PrestaShop/issues/24554)

[FO - Create Account / Checkout page - Order as a guest / Adresses step - Exception displayed when Firstname, Lastname or City are invalid](https://github.com/PrestaShop/PrestaShop/issues/24464)

[FO - Checkout page - the « cart-summary-products » is removed after adding a cart rule or removing it](https://github.com/PrestaShop/PrestaShop/issues/21961)

[Remove the « menu » tab in the BO menu and display an « access denied » message when trying to access to the AdminTabs controller](https://github.com/PrestaShop/PrestaShop/issues/21107)

**Back Office:**

[SubmittableInput component used in new product page has very poor feedback for user on error and even on success](https://github.com/PrestaShop/PrestaShop/issues/25025)

[[BO] Invalid product footer position in RTL](https://github.com/PrestaShop/PrestaShop/issues/24926)

[[BO] Invalid direction of checkbox marker in RTL](https://github.com/PrestaShop/PrestaShop/issues/24925)[[BO] - Multistore page is not responsive](https://github.com/PrestaShop/PrestaShop/issues/24914)

[Change GB zone to Europe (non-EU)](https://github.com/PrestaShop/PrestaShop/issues/24842)

[[BO - desktop] - Email themes loops are misplaced & .dropdown-menu>li a width is not 100%](https://github.com/PrestaShop/PrestaShop/issues/24826)

[Bad redirection on shop context links in BO](https://github.com/PrestaShop/PrestaShop/issues/24818)

[The element height which contains Product images is not calculated when you access to product edit by clicking on price or qty in the Products list](https://github.com/PrestaShop/PrestaShop/issues/24809)

[[BO - reponsive] - the fixed height in .page-head.with-tabs hide the panel-heading](https://github.com/PrestaShop/PrestaShop/issues/24804)

[[BO - Mobile] some Frontend regressions in View Order Page](https://github.com/PrestaShop/PrestaShop/issues/24732)

[Product page v2 image dropzone have some design issues](https://github.com/PrestaShop/PrestaShop/issues/24664)

[BO - the supplier of the demo pack is not selected](https://github.com/PrestaShop/PrestaShop/issues/24617)

[BO - Add new Order page - an error is displayed in the console when adding a voucher](https://github.com/PrestaShop/PrestaShop/issues/24556)

[BO - Orders - Order note with invalid data](https://github.com/PrestaShop/PrestaShop/issues/24534)

[BO - Add new theme - an error 404 is displayed in the console](https://github.com/PrestaShop/PrestaShop/issues/24468)

[Product V2 page - Indexation of product not done after creation](https://github.com/PrestaShop/PrestaShop/issues/24460)

[[Experimental product page] History of edited combinations](https://github.com/PrestaShop/PrestaShop/issues/24368)

[Missing scrollbar in Multistore dropdown](https://github.com/PrestaShop/PrestaShop/issues/24333)

[[Add support for experimental features] Fix modal behavior in Experimental Features BO Page](https://github.com/PrestaShop/PrestaShop/issues/24267)

[1.7.8 Product form display hooks reminder](https://github.com/PrestaShop/PrestaShop/issues/24249)

[BO - Simple Product -Specific price - Warning is empty when we try to remove a customer from a specific price and when we try to remove a product from a pack](https://github.com/PrestaShop/PrestaShop/issues/24142)

[BO - Experimental Feature - The help modal cannot be opened](https://github.com/PrestaShop/PrestaShop/issues/23996)

[BO - Products page - Multistore header not displayed on Product Add / Edit page](https://github.com/PrestaShop/PrestaShop/issues/23937)

[Translatations - Error in Email - Body Translations](https://github.com/PrestaShop/PrestaShop/issues/23878)

[Translation - Search in Translations Tree without result not disabled](https://github.com/PrestaShop/PrestaShop/issues/23876)

[Unneeded margin on Status, delivery, documents tab](https://github.com/PrestaShop/PrestaShop/issues/23112)

[Stock management : The attribute name is splitted if contains a dash](https://github.com/PrestaShop/PrestaShop/issues/22786)

[BO - Can’t create category on product page](https://github.com/PrestaShop/PrestaShop/issues/22144)

[Multistore - Shop parameters > Traffic & SEO > SEO & URLs > Add new page - Add information message](https://github.com/PrestaShop/PrestaShop/issues/19416)

[[BOOM-4258] On BO orders menu I have item ‘discount’ instead of ‘credit slips’](https://github.com/PrestaShop/PrestaShop/issues/9816)

**[Wrong button name for Experimental Product page button on Standard Add page](https://github.com/PrestaShop/PrestaShop/issues/24068)** 

**Front Office:**

[[FO -RTL] - the arrows direction are wrong (in the opposite way)](https://github.com/PrestaShop/PrestaShop/issues/25097)

[Wrong tab showed after changing combination on product page in the FO](https://github.com/PrestaShop/PrestaShop/issues/24800)

[[Accessibility] Default theme: form fields not associated to their label make them impossible to fill for blind users](https://github.com/PrestaShop/PrestaShop/issues/23444)

[FO - Checkout page - Number of items is not updated when adding or removing a discount free gift](https://github.com/PrestaShop/PrestaShop/issues/24817)

Core:

[Services in front container are not available once the container is cached](https://github.com/PrestaShop/PrestaShop/issues/25112)

[Commands prestashop:update:sql-upgrade-file-hooks-listing and prestashop:update:configuration-file-hooks-listing broken on develop](https://github.com/PrestaShop/PrestaShop/issues/24023)

Module:

[BO - Welcome module - Th pop up onboarding is not displayed in the step3/6 "step1" & step4/6 "step2"](https://github.com/PrestaShop/PrestaShop/issues/24463)

## Changelog

Data contribution

If you are looking for more details about all changes and new features expected in 1.7.8, the [1.7.8 beta version release note](https://build.prestashop.com/news/prestashop-1-7-8-0-beta-release/) is the perfect article for you to read!

## Known issues

The following issues are not considered edge cases and won't block the release of a stable version. They will be fixed in the next patch version.

Back office

[Incorrect display on address block in BO > Customers > View customer](https://github.com/PrestaShop/PrestaShop/issues/25174)

[[BO] - New Product Page - an error thrown while updating the price with a comma](https://github.com/PrestaShop/PrestaShop/issues/24889)

[BO - Products page - Summary & Description - the line break is calculated for allowed characters](https://github.com/PrestaShop/PrestaShop/issues/24131)

[BO - The browser is unable to show the error message on an hidden element.](https://github.com/PrestaShop/PrestaShop/issues/23365)

Front office 

[Header’s Search Field — Front Office](https://github.com/PrestaShop/PrestaShop/issues/25133)

Core

[Module blocksearch not uninstalled after upgrade from 1.6.1.24 to 1.7.8](https://github.com/PrestaShop/PrestaShop/issues/25197)

[Sanity tests randomly failing because unable to download modules from addons](https://github.com/PrestaShop/PrestaShop/issues/25031)

## Download

You can download PrestaShop 1.7.8 RC here:

[Download PrestaShop 1.7.8 RC now!](https://www.prestashop.com/en/developers-versions){: .btn .btn-lg .btn-success}
{: .text-center}

## How to help finish the 1.7.8

Your feedback on this RC is essential, the regressions you find right now are as many bugs less on the final version and less patch versions. It also means fewer problems on your (or your customer’s) online store.

You must:

- Install it and test that there is no regression compared to the 1.7.7 version
- If you develop modules or themes, test them on this version
- Test the auto-upgrade plugin
- [Report regressions on GitHub](https://github.com/PrestaShop/PrestaShop/issues) (read how to [report issues](https://devdocs.prestashop.com/1.7/contribute/contribute-reporting-issues/))
- Fix regressions by creating a [pull request](https://github.com/PrestaShop/PrestaShop/compare) (read the [contribution guidelines](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/))

If everything is working well, feel free to comment on this article to tell us, and share on social networks, we also need this kind of feedback! ;-)

## Acknowledgments

A huge thanks to everyone who got involved by reporting, testing and fixing regressions during the first beta phase.
Internal and external contributors who submitted pull requests and participated to build this release candidate: 

**→ List of contributors**

Thank you!

External contributors who reported regressions to build a more stable 1.7.8: 

Like them, please test this release candidate and give us your feedback!
