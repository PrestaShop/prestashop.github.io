---
layout: post
title:  "PrestaShop 1.7.8 and the search bar issue"
subtitle: "Search bar problem. How to solve it?"
date:   2021-12-06 00:00:00
authors:  [ kpodemski ]
icon: icon-laptop
tags: [module, issue, searchbar, upgrade, theme]
---

We have been informed, that many of you have encountered a problem with the search bar display right after upgrading to PrestaShop 1.7.8.
This problem also affected installations that were using the standard "classic" theme.

This problem caused some heated discussions in our community, this is why we decided to comment on it and provide you with information about it.

- What is the problem?
- Why did this happen?
- How to fix it?
- What do we plan to do to avoid these types of issues in the future?

## What is the problem?

If you are using a default theme or a theme that overrides the default look of the search bar from the "ps_searchbar" module, after installing the 1.7.8 update you might have seen it displayed like this:

![ps_searchbar issue](/assets/images/2021/12/searchbar_bug.png)

Unfortunately, this problem also affected you when you wanted to skip updates to the default theme.

## Why did this happen?

After one of the last module updates we did, the search bar template file from `/themes/classic/modules/ps_searchbar/ps_searchbar.tpl` was removed from the default theme.

When updating the theme, to avoid major problems, we do not delete its files. We decided to do this because we know that some of the users modify it and it may cause more trouble than benefits. Thus, we came to a situation where one of the files that remained in the default theme was causing the search bar to not display properly.We noticed this problem, and we developed a proper solution for it, but too late.

## How to fix it?

When you upgrade PrestaShop to version 1.7.8 at this time, the problem should no longer affect you. Version 2.1.2 released at the beginning of November introduced a solution, where the update script renames the module view override so that the original file from the module directory will work.

However, if you run into this problem, you can go to your theme directory, search for this file:
`themes/your_theme/modules/ps_searchbar/ps_searchbar.tpl`
and rename or delete it. This should help.

## What do we plan to do to avoid these types of issues in the future?

We responded in a few weeks, in the future we would like to see better communication about "Known issues" in case of these situations, or just no issues at all :-)

We are also working on an update mechanism for PrestaShop to better communicate these types of potential problems that may occur in the future when moving from one version to another. Directly in the module.

Also, please remember that if you have problems while updating PrestaShop, it is best to report such bugs on our [GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose). We appreciate your comments and feedback anywhere you choose, but for us to act on it as quickly as possible, it would be best to have it on GitHub.

### Let’s keep in touch on Slack

If you have any questions or feedback, feel free to share them on [the PrestaShop open source project's Slack](https://www.prestashop-project.org/slack/).