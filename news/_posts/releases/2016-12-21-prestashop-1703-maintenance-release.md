---
layout: post
title:  "Release of PrestaShop 1.7.0.3"
subtitle: "Maintenance version of the 1.7.0.x branch"
date:   2016-12-21 10:00:00
author: maximebiloe
icon: icon-leaf
tags:
 - version
 - maintenance
 - patch
 - releases
 - 1.7.0.x
---

PrestaShop 1.7.0.3 is now available. This maintenance release closes 28 of the most pressing issues reported since v1.7.

More than a year ago, we announced that we wanted to [release more regular and focused patch versions](http://build.prestashop.com/news/more-focused-patch-versions/) for 1.6 (and eventually 1.7), and that's exactly what we are currently doing: packing a few specific fixes (in order to limit regression potential) in regular releases. All this is done thanks in no small part to [our SemVer-like versioning](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/) and the 1-Click Upgrade module (update it if you haven't already done it for 1.7.0.2!).

We are therefore happy to deliver the third "patch" release of PrestaShop 1.7.0.0. Version 1.7 of PrestaShop continues to be explored by the community, and we keep working at fixing critical and major issues that were discovered since the release of v1.7.0.0, making regular fixes to the codebase. Prepare yourself to see more patch releases in the coming weeks while we review the feedback from the community!

[Download 1.7.0.3 now!](https://www.prestashop.com/en/download){: .btn .btn-lg .btn-success}
{: .text-center}

<div class="alert alert-important" role="alert">
Want to upgrade using the 1-Click Upgrade module? Make sure to upgrade the module itself first! This way you will have access to a new, 1.7-specific channel, which makes upgrading safer for merchants. Upgrading from 1.7.0.0 to 1.7.0.3 should be smooth as silk -- but do a safety backup anyway :)
</div>

Here are the changes:

  - Back Office:
    - Bug fix:
      - [7169](https://github.com/PrestaShop/PrestaShop/pull/7169): Add Request to hook parameters
      - [7151](https://github.com/PrestaShop/PrestaShop/pull/7151): Allow installed modules translation from translation page
      - [7024](https://github.com/PrestaShop/PrestaShop/pull/7024): Fixed product permissions
      - [7153](https://github.com/PrestaShop/PrestaShop/pull/7153): Update docs & compile
      - [7143](https://github.com/PrestaShop/PrestaShop/pull/7143): Fixed image of module on Payment page
      - [7091](https://github.com/PrestaShop/PrestaShop/pull/7091): Fix some of the functions on the product page (JS)
      - [7090](https://github.com/PrestaShop/PrestaShop/pull/7090): Fix error when saving translations (1.7.0.0)
      - [7028](https://github.com/PrestaShop/PrestaShop/pull/7028): Removed module card on uninstall
      - [7215](https://github.com/PrestaShop/PrestaShop/pull/7215): TinyMCE media plugin shouldn't be activated twice

  - Front Office:
    - Bug fix:
      - [7130](https://github.com/PrestaShop/PrestaShop/pull/7130): Fix nav header menu icon on classic
      - [7046](https://github.com/PrestaShop/PrestaShop/pull/7046): Fix classic css override of featuredproduct
      - [7160](https://github.com/PrestaShop/PrestaShop/pull/7160): Fix sort by text display
      - [7131](https://github.com/PrestaShop/PrestaShop/pull/7131): Fix bootstrap version
      - [7077](https://github.com/PrestaShop/PrestaShop/pull/7077): Fix "too much recursion" error on ajax search
      - [7078](https://github.com/PrestaShop/PrestaShop/pull/7078): Fix select filter & filter criteria by ajax

  - Core:
    - Improvement:
      - [6984](https://github.com/PrestaShop/PrestaShop/pull/6984): Use the right languages name
      - [7146](https://github.com/PrestaShop/PrestaShop/pull/7146): Updated README
    - Bug fix:
      - [7224](https://github.com/PrestaShop/PrestaShop/pull/7224): Removed finfo use for theme upload
      - [7205](https://github.com/PrestaShop/PrestaShop/pull/7205): Fix warnings in translate.php
      - [7200](https://github.com/PrestaShop/PrestaShop/pull/7200): Fix module install and blank screen after PS install
      - [7197](https://github.com/PrestaShop/PrestaShop/pull/7197): Check in Symfony catalog for translations for native modules
      - [7191](https://github.com/PrestaShop/PrestaShop/pull/7191): Shutdown addons client on error
      - [7190](https://github.com/PrestaShop/PrestaShop/pull/7190): Escape translated strings to prevent XSS
      - [7187](https://github.com/PrestaShop/PrestaShop/pull/7187): Fix already defines smarty function
      - [7184](https://github.com/PrestaShop/PrestaShop/pull/7184): Fix inactive scope for request in HookManager
      - [7173](https://github.com/PrestaShop/PrestaShop/pull/7173): Revert "BO: fixed other XSS issues on translation module page"
      - [7165](https://github.com/PrestaShop/PrestaShop/pull/7165): Licences & assets
      - [7156](https://github.com/PrestaShop/PrestaShop/pull/7156): Fix SmartyLazyLoader for multiple smarty instances
      - [7087](https://github.com/PrestaShop/PrestaShop/pull/7087): Protect translations display against XSS injections
      - [7129](https://github.com/PrestaShop/PrestaShop/pull/7129): Fix timeout option for guzzle config
      - [7144](https://github.com/PrestaShop/PrestaShop/pull/7144): Use default catalog as a fallback
      - [7119](https://github.com/PrestaShop/PrestaShop/pull/7119): Use PhpParser to check parse errors in modules
      - [7134](https://github.com/PrestaShop/PrestaShop/pull/7134): Fix mails with invoices
      - [7080](https://github.com/PrestaShop/PrestaShop/pull/7080): Add unit price to order confirmation mail (1.7.0.0)
      - [7096](https://github.com/PrestaShop/PrestaShop/pull/7096): Use english email template as fallback in getEmailTemplateContent

The [PrestaShop 1.7.0.3 changelog](https://www.prestashop.com/en/developers-versions/changelog/1.7.0.3-stable) is available.

Since version 1.7.0.3 is a "patch" update to version 1.7.0.0, upgrading from that version will be easy: features will work better, and modules & themes which worked fine on 1.7.0.0 will work just as well with 1.7.0.3.
