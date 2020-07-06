---
layout: post
title:  "Release Of PrestaShop 1.7.6.7"
subtitle: "Maintenance version of the 1.7.6.x branch"
date:   2020-07-06 11:40:00
authors: [ PrestaShop ]
image: /assets/images/2020/07/1767_meta.jpg
icon: icon-checked

tags:
 - 1.7
 - 1.7.6.x
 - version
 - patch
 - releases
---

PrestaShop 1.7.6.7 is now available. It fixes an important regression introduced in 1.7.6.6.

![1.7.6.7 is available!](/assets/images/2020/07/1767_banner.jpg)

In 1.7.6.6, one of the Front Office JavaScript file [was modified](https://github.com/PrestaShop/PrestaShop/commit/7dc8180bd3179820bb4706d37827949d2d863941#diff-a1d15e7a995aaa0459241b4974f0e4fe) through the usage of a [linter](https://en.wikipedia.org/wiki/Lint_(software)).
The modification inadvertently introduced a regression resulting in a script error in the Product page.

The main consequence of this regression is that some events usually fired on product page are not executed. This may produce a malfunction in Front Office modules which expect the `updateProduct` event being dispatched on this page.

In 1.7.6.7 the changes wrongly introduced in 1.7.6.6 have been reverted.

In order to ensure your shop is able to interact correctly with modules being enabled on the Front Office product page, we advise upgrading to 1.7.6.7 as soon as possible. Of course, as always, don’t forget to backup before.

Reminder: the 1-Click Upgrade module’s latest version is [v4.10.1](https://github.com/PrestaShop/autoupgrade/releases/tag/v4.10.1), don’t forget to upgrade it.

## Main fix

Front-office regression:

- JS crash on FO product page in 1.7.6.6, preventing updateProduct event to be received [#20044](https://github.com/PrestaShop/PrestaShop/issues/20044)

## Acknowledgments

Thank you to JBWModules for reporting this regression and Valentin Szczupak for patching it.

[Download PrestaShop 1.7.6.7 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

Since version 1.7.6.7 is a “patch” update to version 1.7.6.6, upgrading from any 1.7.6 version will be easy: features will work better, and modules & themes which worked fine on 1.7.6.x will work just as well with 1.7.6.7. Upgrades from a standard 1.7.x version should work just as well.
