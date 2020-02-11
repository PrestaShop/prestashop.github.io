---
layout: post
title:  "Security issue with PHPUnit, post-incident analysis"
subtitle: "The mysterious development dependencies!"
date:   2020-02-11 08:00:00
authors: [ PierreRambaud, PrestaShop ]
icon: icon-chat
image: /assets/images/theme/meta-logo-build.png
tags: [maintenance, patch, modules]
---

Early January, we encountered a [security issue with PHPUnit](https://build.prestashop.com/news/critical-security-vulnerability-in-prestashop-modules/) in some modules that allowed attackers to perform arbitrary code execution without authorization through the PHPUnit dependency. This vulnerability was discovered through a merchant whose shops were compromised. 

## Background

At PrestaShop, there is an automatic system on the Addons Marketplace which gets the module from the [PrestaShop-modules](https://github.com/PrestaShop/PrestaShop-modules) repository and uses Composer to install dependencies to be distributed by the API. During this step, by mistake, development dependencies have been built inside.
 
This was a code error, fixed after a short time, but the bad archives were already downloaded and unfortunately some archives which contained PHPUnit were not properly cleaned up.

Moreover, when the PrestaShop software upgrades a module, it only overrides already-existing files, so files that were inserted once were not removed, even if a more recent version of dependency was provided. 

This means that if a module was installed once with unprotected files, these files would remain there until someone removes or updates them. This problem also applies to themes.

## Communication

The security team reached out to other major CMS teams in order to inform them about the issue so they could check whether the issue affected modules or plugins on their side.
 
Since last year's [Google CMS Security summit](https://build.prestashop.com/news/we-were-at-the-cms-security-summit-with-google/), we have been part of a Slack channel that gathers many people from the CMS ecosystem (Wordpress, Joomla, host providers, etc.) to share security issues. This allowed us to share frequent information with other CMS people.

Once the full scope of the vulnerability was confirmed and that, by upgrading to the latest PrestaShop softwares, users would be protected against the vulnerability, we communicated through multiple channels to inform our users and the PrestaShop community at large about the incident.

Finally, we communicated through our social networks to warn the community.

Since this day, we still communicate with community members who reach us to inform them about the nature of the vulnerability and provide guidance about what to do if they find themselves impacted.

## Technical changes

All PrestaShop and module archives have been checked, and the faulty archives have been updated. 
Latest releases of the corrupted modules do not contain the vulnerable PHPUnit vendor directory and, during upgrade process, remove previous PHPUnit vendors if they are found, removing all vulnerable files.

There was no need to fix our pipeline which builds modules ZIP archive as it was already secure. The vulnerability was only present for the modules built before the pipeline was fixed and that were not rebuilt.

## Next steps

A Bug Bounty program will be launched very soon with [YesWeHack](https://www.yeswehack.com/) and will help to prevent this kind of issue by promoting security researchers to search and report security issues.

Internal processes and tools are also being improved to make sure similar issues will not happen again in the future. Multiple solutions are being explored to detect such vulnerabilities before they are released.

If you need more information about what is a Bug Bounty program, have a look at [https://en.wikipedia.org/wiki/Bug_bounty_program](https://en.wikipedia.org/wiki/Bug_bounty_program)

If you just discovered this article, please refer to [https://build.prestashop.com/news/critical-security-vulnerability-in-prestashop-modules/ ](https://build.prestashop.com/news/critical-security-vulnerability-in-prestashop-modules/) to make sure you are not impacted by the vulnerability or if you are impacted, help you to remove the vulnerable files and protect your shop. 
