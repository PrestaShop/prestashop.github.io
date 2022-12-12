---
layout: post
slug: "178-and-searchbar"
title:  "How to solve the search bar issue after upgrading to PrestaShop 1.7.8"
subtitle: "Everything you need to know to fix the issue"
date:   2021-12-07
authors:  [ kpodemski ]
icon: icon-laptop
tags: [module, issue, searchbar, upgrade, theme]
---

We have recently been informed that many of you have encountered a display problem with the search bar in Front office, right after upgrading to PrestaShop 1.7.8. This problem also affected shops using the built-in "classic" theme.

## What is the problem?

After having updated your shop to 1.7.8, if you are using the default theme or a theme that overrides the default look of the search bar from the "ps_searchbar" module, you might have seen it displaying like this:

![ps_searchbar issue](/assets/images/2021/12/searchbar_bug.png)

This problem might also have affected you, even if you decided to skip updates to the default theme during the upgrade process.

## Why did this happen?

In November 2020, version 2.1.0 of the search bar module (ps_searchbar) was released, featuring a [new design](https://github.com/PrestaShop/PrestaShop/pull/22032). Up until this release, the layout of the search bar had been overridden by the PrestaShop's default theme, using this file: `/themes/classic/modules/ps_searchbar/ps_searchbar.tpl`. However, with the new design, the override was no longer needed, so it was removed from the default theme for the 1.7.8.0 release.

To avoid unintended loss of data when performing the upgrade, the update module will not delete old or "extra" files if they are placed within a subfolder called `modules`. Most of the time, any files left over from previous installs don't cause any negative effect on the upgraded shop. However, in some cases, they do.

In this case, the remaining override in the default theme was causing the search bar to not display properly. This is why the bug only appears when updating from a previous PrestaShop version, and not with a clean shop.

## How to fix it


If you're currently using ps_searchbar 2.1.1 or lower, upgrading the module to v2.1.2 (released at the beginning of November) will fix the problem automatically, by renaming the template override in the classic theme.

If you continue experiencing this problem, rename or delete this file:

`themes/<your_theme>/modules/ps_searchbar/ps_searchbar.tpl`

This might help fix the problem for you, but the results will be different depending on your theme.

## How can we avoid this kind of issues in the future

In the future, we will do our best to communicate better about known issues in release notes.

This issue was already present in beta 1, released back in June, which serves as a reminder of the importance of testing and [reporting bugs](https://github.com/PrestaShop/PrestaShop/issues/new/choose) during the beta period, especially if you are a theme or module developer.

### Let’s keep in touch on Slack

If you have any questions or feedback, come [talk with us on Slack](https://www.prestashop-project.org/slack/).
