---
layout: post
title:  "Release of PrestaShop 1.7.5.2 and 1.6.1.24"
subtitle: "Maintenance version of the 1.7.5.x and 1.6.1.x branch"
date:   2019-05-02 15:00:00
authors: [ PabloBorowicz ]
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.5.x
 - 1.7
 - 1.6.1.x
 - 1.6
---

PrestaShop 1.7.5.2 and 1.6.1.24 are now available. These versions fix a security issue for both 1.7.5.x and 1.6.1.x. For the details, please read below:

These two security updates address a validation issue on the customer registration form, which is currently being exploited by spammers who were entering URLs as customer name.

This update mitigates the problem by preventing attackers to use URLs as names. However, [as we discussed before](http://build.prestashop.com/news/fighting-against-spamming-again/), the best protection against this kind of attack still is to add a CAPTCHA module on your shop. You can find them on the [Addons marketplace](https://addons.prestashop.com/fr/recherche?pab=1&search_query=captcha).

## Important note

Once this update has been applied, customers won't be able to register if their name contains a dot followed by a letter. For example, "John R.Hammond" won't work, but "John R. Hammond" will.

There may already be customers on your shop with names like that. If that's the case, next time they update their personal information, the form will require that they update their names manually either by removing dots, adding a space after any dot, or replacing all dots by spaces.


## Additional information

Changes for 1.7.5.2:

- Core:
  - Bug fix:
    - #13599: Forbid URLs to be added in customer names
    - #13580: Fixed dispatched hook on the Grid presenter

Changes for 1.6.1.24:

- Core:
  - Bug fix:
    - #13607: Forbid URLs to be inserted into Name fields
    - #10859: Fixed keywords disappear from search index


[Download PrestaShop now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Contributors to this patch versions, from both the Core team and the community at large: Casper Olsen, Geoffray Warnants, Mathieu Ferment, Mickaël Andrieu, Nesrine Abdmouleh, Pablo Borowicz, Pierre Rambaud and Thomas N. Thank you!

A very special thank you to @doekia and @okom3pom who were really helpful regarding the best approach for this major issue.

Since version 1.7.5.2 is a “patch” update to version 1.7.5.1, upgrading from any 1.7.5 version will be easy: features will work better, and modules & themes which worked fine on 1.7.5.2 will work just as well with 1.7.5.1.
Upgrades from a standard 1.7.x version should work just as well.

This the same for 1.6.1.24 regarding 1.6.1.x versions.
