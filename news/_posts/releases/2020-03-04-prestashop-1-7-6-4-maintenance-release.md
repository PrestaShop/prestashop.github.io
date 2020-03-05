---
layout: post
title:  "Release Of PrestaShop 1.7.6.4"
subtitle: "MAINTENANCE VERSION OF THE 1.7.6.X BRANCH"
date:   2020-03-05 12:00:00
authors: [ PrestaShop ]
image: /assets/images/2020/03/meta-1.7.6.4.jpg
icon: icon-checked
tags:
 - 1.7
 - 1.7.6.x
 - version
 - patch
 - releases
---

After a few weeks dedicated to fixing a security issue and all regressions found on the previous 1.7.6 versions, PrestaShop 1.7.6.4 is finally available! 

![1.7.6.4 is available!](/assets/images/2020/03/1.7.6.4_banner.jpg)

This maintenance release fixes 9 issues reported from versions 1.7.6.0 to 1.7.6.3.
Since this version fixes a security problem, we **strongly** encourage you to upgrade your shop as soon as possible.
We suggest upgrading your shop quickly to benefit from these fixes. Of course, don’t forget to backup before.

The security patch protects your shop against attacks aimed at modifying your customers' personal information.

**Reminder:**  the 1-Click Upgrade module’s latest version is v4.10.1, don’t forget to upgrade it if needed.

## Main fixes
Below are listed all regression issues we fixed in this version :

* An error case on the customer email validation ([#17809](https://github.com/PrestaShop/PrestaShop/issues/17809))
* Failure on loading the product_page.css and translations.css files ([#17584](https://github.com/PrestaShop/PrestaShop/issues/17584))
* Display issues on the SEO live previews on Safari desktop ([#17525](https://github.com/PrestaShop/PrestaShop/issues/17525))
* A combination color wasn’t displayed when it was selected ([#17437](https://github.com/PrestaShop/PrestaShop/issues/17437))
* View on category not possible when all subcategories were disabled ([#17379](https://github.com/PrestaShop/PrestaShop/issues/17379))
* Some product combinations were not displayed on particular stock and product configurations ([#17345](https://github.com/PrestaShop/PrestaShop/issues/17345)) 
* Support link was not displayed properly in the order confirmation in Arabic ([#17242](https://github.com/PrestaShop/PrestaShop/issues/17242))
* Display issue on emails' subject with special characters ([#16847](https://github.com/PrestaShop/PrestaShop/issues/16847))
* An error on the discount occurred on the invoice when applying a specific cart rule to an order 
([#16491](https://github.com/PrestaShop/PrestaShop/issues/16491))

Read the [full changelog here](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.6.4).


## Important changes 
Find below detailed information about the security fix provided in this version:

- CVE reference: [CVE-2020-5250](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-5250)
- GitHub Security Advisory: [GHSA-mhfc-6rhg-fxp3](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-mhfc-6rhg-fxp3)

## Acknowledgments

**Contributors to this patch version, from both the Core team and the community at large:**

202 ecommerce, Clotaire 202 ecommerce, Franck Lefèvre, Ibrahima SOW, Jean-François Viguier, Mathieu Ferment, Matthieu Rolland, Pablo Borowicz, Pierre Rambaud, PK André, Thomas Baccelli, Valentin Szczupak

Thank you!


[Download PrestaShop 1.7.6.4 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}



Since version 1.7.6.4 is a “patch” update to version 1.7.6.3, upgrading from any 1.7.6 version will be easy: features will work better, and modules & themes which worked fine on 1.7.6.x will work just as well with 1.7.6.4. Upgrades from a standard 1.7.x version should work just as well.
