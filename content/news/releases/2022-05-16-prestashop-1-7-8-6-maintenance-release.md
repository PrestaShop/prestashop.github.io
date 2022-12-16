---
layout: post
aliases: ["/news/prestashop-1-7-8-6-maintenance-release"]
slug: "prestashop-1-7-8-6-maintenance-release"
title:  "Release of PrestaShop 1.7.8.6"
subtitle: "Maintenance version of the 1.7.8.x branch"
date:   2022-05-17
authors: [ PrestaShop ]
image: /assets/images/2022/05/1.7.8.6_banner.jpg
icon: icon-checked
tags:
 - version
 - patch
 - releases
 - "1.7.8.x"
 - "1.7"

---

It has been decided to deliver a new maintenance release for 1.7.8.X branch.

In this release we fix a couple of issues, notably : 

- 2 Major bugs
- 4 Minor bugs

![1.7.8.6 is available!](/assets/images/2022/05/1.7.8.6_banner.jpg)

Reminder: the 1-Click Upgrade module’s latest version is v4.14.1, don’t forget to upgrade it.

## Issues addressed in release 1.7.8.6

### Front office

- [FO - Create an account - the alert is duplicated when we create a new account with invalid firstname and lastname](https://github.com/PrestaShop/PrestaShop/issues/27876)

### Back office

- [BO - An unnecessary comma is displayed in the location page](https://github.com/PrestaShop/PrestaShop/issues/27897)
- [BO - An exception is displayed in the Oustanding page when the customer with valid orders is deleted](https://github.com/PrestaShop/PrestaShop/issues/27785)
- [BO - Module manager- Exception is displayed when profiling is active](https://github.com/PrestaShop/PrestaShop/issues/27684)
- [BO - Unable to import 'United State' at localization.](https://github.com/PrestaShop/PrestaShop/issues/27156)
- [BO - Bad display of header itmes in medium screen](https://github.com/PrestaShop/PrestaShop/issues/27385)

### Others

- ["Out of stock" label displayed with stock management disabled](https://github.com/PrestaShop/PrestaShop/issues/28097)
- [.browserslistrc file shouldn't be located in themes folder](https://github.com/PrestaShop/PrestaShop/issues/28082)
- [Notice: Trying to access array offset on value of type bool](https://github.com/PrestaShop/PrestaShop/issues/27774)
- [Updating an attachment via the webservice does not delete the old file](https://github.com/PrestaShop/PrestaShop/issues/27690)
- [Blockwishlist doesn't work after changing theme](https://github.com/PrestaShop/PrestaShop/issues/27478)
- [Fixed incompatibility of private property in PS 1.7.8.0](https://github.com/PrestaShop/PrestaShop/issues/26606)
- [Image slider module lang switch is NOK](https://github.com/PrestaShop/PrestaShop/issues/25840)
- [docker-compose fails to bring up services in 1.7.8.x branch under Linux](https://github.com/PrestaShop/PrestaShop/issues/26950)
- [Display issue for the polish language and the search bar](https://github.com/PrestaShop/PrestaShop/issues/27077)

## Acknowledgments

Contributors to this patch version, from both the Core team and the community at large:

Ali Shareei, Amit Kumar Tiwari, Daniel Martin, Franck Lefèvre, Jonathan Lelievre, Krystian Podemski, Lorenz Meyer, Mathieu Ferment, Matthieu Rolland, Mickaël Fernandez, Miguel Paolino, Nesrine Abdmouleh, NicolasCador, Pascal Cescon, Pierre Rambaud, Ricardo González Garza, Romain Soulard, Thomas Baccelli, Valentin Szczupak

Thank you!

{{< cta "https://www.prestashop.com/versions" >}}Download PrestaShop 1.7.8.6 now!{{< /cta >}}

Since version 1.7.8.6 is a “patch” update to version 1.7.8.5, upgrading from any 1.7.8 version will be easy: features will work better, and modules & themes which worked fine on 1.7.8.x will work just as well with 1.7.8.5. Upgrades from a standard 1.7.x version should work just as well.
