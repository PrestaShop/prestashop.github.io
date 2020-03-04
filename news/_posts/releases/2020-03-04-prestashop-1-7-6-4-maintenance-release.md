---
layout: post
title:  "Release Of PrestaShop 1.7.6.4"
subtitle: "MAINTENANCE VERSION OF THE 1.7.6.X BRANCH"
date:   2019-11-28 16:00:00
authors: [ PrestaShop ]
image: /assets/images/2019/11/meta-1762.png
icon: icon-checked
tags:
 - 1.7
 - 1.7.6.x
 - version
 - patch
 - releases
---

After a few months dedicated to fixing a security issue and all regressions found on the previous 1.7.6 versions, PrestaShop 1.7.6.4 is finally available! 

![1.7.6.4 is available!](/assets/images/2020/03/1.7.6.4_banner.jpg)

This maintenance release fixes 9 issues reported on the versions between 1.7.6.0 to the 1.7.6.3.
Since this version fixes a security problem, we **strongly** encourage you to upgrade your shop as soon as possible.
We suggest upgrading your shop quickly to benefit from these fixes. Of course, don’t forget to backup before.

The security update fixes protect your shop for attackers to change your customer's personal information.

Reminder:  the 1-Click Upgrade module’s latest version is v[VERSION], don’t forget to upgrade it.

## Main fixes
Below are listed some of the main regression issues we fixed in this version :

* An error case on the customer email validation ([#17809](https://github.com/PrestaShop/PrestaShop/issues/17809))
* Failed to product_page.css and files ([#17584](https://github.com/PrestaShop/PrestaShop/issues/17584))
* Display issues on the SEO live previews on Safari desktop ([#17525](https://github.com/PrestaShop/PrestaShop/issues/17525))
* A combination color wasn’t displayed when it was selected ([#17437](https://github.com/PrestaShop/PrestaShop/issues/17437))
* Couldn’t view a category if all subcategories were disabled ([#17379](https://github.com/PrestaShop/PrestaShop/issues/17379))
* Some products combination wasn’t displayed when depending on the stock and the product configuration([#17345](https://github.com/PrestaShop/PrestaShop/issues/17345)) 
* Support link was not displayed properly in the order confirmation in Arabic ([#17242](https://github.com/PrestaShop/PrestaShop/issues/17242))
* Email’s subject can have special character again  ([#16847](https://github.com/PrestaShop/PrestaShop/issues/16847))
* A reduction error occurred on the invoice when applying specific cart rule to an order 
([#16491](https://github.com/PrestaShop/PrestaShop/issues/16491))

Read the [full changelog here](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.6.4).
## Important changes 
Below are security changes we added in this version:
[CVE + advisory]

## Acknowledgments

Contributors to this patch version, from both the Core team and the community at large: 
202 ecommerce, Clotaire 202 ecommerce, Franck Lefèvre, Ibrahima SOW, Jean-François Viguier, Mathieu Ferment, Matthieu Rolland, Pablo Borowicz, Pierre Rambaud, PK André, Thomas Baccelli, Valentin Szczupak

Thank you!


[Download PrestaShop 1.7.6.4 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}



Since version 1.7.6.4 is a “patch” update to version 1.7.6.3, upgrading from any 1.7.6 version will be easy: features will work better, and modules & themes which worked fine on 1.7.6.x will work just as well with 1.7.6.4. Upgrades from a standard 1.7.x version should work just as well.
