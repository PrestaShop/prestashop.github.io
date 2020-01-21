---
layout: post
title:  "Release Of PrestaShop 1.7.6.3"
subtitle: "Maintenance version of the 1.7.6.x branch"
date:   2020-01-21 09:10:11
authors: [ PrestaShop ]
image: /assets/images/2020/01/1763-image.jpg
icon: icon-checked
tags:
 - 1.7
 - 1.7.6.x
 - version
 - patch
 - releases
---

After a few months dedicated to fixing all regressions found on the previous 1.7.6 versions, PrestaShop 1.7.6.3 is finally available! 

![1.7.6.3 is available!](/assets/images/2020/01/1763-banner.jpg)

This maintenance release fixes *16 issues* reported on versions 1.7.6.0, 1.7.6.1, and 1.7.6.2.

Obviously, we suggest upgrading your shop quickly in order to benefit from those fixes - and do not forget to backup before. ;-)

Reminder: our 1-Click Upgrade module’s latest version is v4.10.1 ([read here](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.10.1)), do not forget to upgrade it as well.


## Regression fixes

Below are listed all the regression issues we fixed in this version:

* Unclear error notifications about the number of characters allowed on both following pages:
  * Advanced Parameters > Team > Profiles ([#16725](https://github.com/PrestaShop/PrestaShop/issues/16725))
  * Catalog > Categories > Edit ([#16514](https://github.com/PrestaShop/PrestaShop/issues/16514))
* Cost price & unit price sections on a product sheet do not save the changes ([#16353](https://github.com/PrestaShop/PrestaShop/issues/16353))
* When I install a new language, emails are not translated at the first generation ([#16273](https://github.com/PrestaShop/PrestaShop/issues/16273))
* Quickview and product flags bug ([#16633](https://github.com/PrestaShop/PrestaShop/issues/16633))
* Wrong encoding for viewed products ([#16739](https://github.com/PrestaShop/PrestaShop/issues/16739))
* Currency translatable fields empty in webservice 1.7.6.1 ([#16760](https://github.com/PrestaShop/PrestaShop/issues/16760))
* Customers export from the BO - Wrong 50 limit ([#16328](https://github.com/PrestaShop/PrestaShop/issues/16328))
* Error in mails/it/order_customer_comment.html ([#16829](https://github.com/PrestaShop/PrestaShop/issues/16829))
* Missing chart in Shop Search stats for new employees ([#16730](https://github.com/PrestaShop/PrestaShop/issues/16730))
* Dashboard - customer link not working 1.7.6.1 ([#16460](https://github.com/PrestaShop/PrestaShop/issues/16460))
* Can't enable/disable Newsletter option & Enabled option when the field "Partner offers" is required ([#16509](https://github.com/PrestaShop/PrestaShop/issues/16509))
* PrestaShop’s front office should be displayed right-to-left when in Arabic ([#17245](https://github.com/PrestaShop/PrestaShop/issues/17245))

Read the full changelog [here](https://github.com/PrestaShop/PrestaShop/releases/tag/1.7.6.3).


## Important changes

Below are listed all issues we improve in this version:

* Quick access error when having a wrong url ([#17050](https://github.com/PrestaShop/PrestaShop/pull/17050))
* Protect modules vendor folder on install/upgrade/enable ([#17036](https://github.com/PrestaShop/PrestaShop/pull/17036)) 
* Email Theme permissions settings are not saved when trying to enable them ([#16337](https://github.com/PrestaShop/PrestaShop/issues/16337))


## Acknowledgments

Contributors to this patch version, from both the core team and the community at large, are Thomas Baccelli, Pablo Borowicz, Mathieu Ferment, Maxim Krizhanovsky, Franck Lefèvre, Jonathan Lelievre, Pierre Rambaud, Matthieu Rolland, Valentin Szczupak, and Michael Voříšek. Thank you very much!


[Download PrestaShop 1.7.6.1 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}


Since version 1.7.6.3 is a “patch” update to version 1.7.6.2, upgrading from any 1.7.6 version will be easy: features will work better, and modules & themes which worked fine on 1.7.6.x will work just as well with 1.7.6.3. Upgrades from a standard 1.7.x version should work just as well.
