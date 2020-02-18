---
layout: post
title:  "Security issue with PHPUnit, post-incident analysis"
subtitle: "The mysterious development dependencies!"
date:   2020-02-18 14:00:00
authors: [ PierreRambaud, PrestaShop ]
icon: icon-chat
image: /assets/images/theme/meta-logo-build.png
tags: [maintenance, patch, modules]
---

Early January, we encountered a [security issue with PHPUnit](https://build.prestashop.com/news/critical-security-vulnerability-in-prestashop-modules/) in some modules that allowed attackers to perform arbitrary code execution without authorization through the PHPUnit dependency. This vulnerability was discovered through a merchant whose shops were compromised. 

## Background

At PrestaShop, we use an automated system to build packages for native modules and make them available through the Addons Marketplace API. This process uses Composer to install dependencies before creating the zip package. During the step, by mistake, development dependencies (like PHPUnit) were not being excluded and found their way in built packages.
 
This was a code error which was fixed after a short time, but the badly built archives had already been distributed to active shops. At that time, this was considered not to be an issue, since the number of modules including development dependencies was fairly small, and we weren't aware of any vulnerability involving said dependencies.

However, when the PrestaShop software upgrades a module, it only overwrites old files with new ones. It doesn't remove files which existed in the previous version and no longer exist in the newer version. 

This means that if a module including vulnerable files is installed, then updated to a newer version which no longer includes those files, the vulnerable files will not be removed and remain as they were.

## Communication

The security team reached out to other major CMS teams in order to inform them about the issue so they could check whether it affected modules or plugins on their side.
 
Since last year's [Google CMS Security summit](https://build.prestashop.com/news/we-were-at-the-cms-security-summit-with-google/), we have been part of a Slack channel that gathers many people from the CMS ecosystem (Wordpress, Joomla, host providers, etc.) to share security issues. This allows us to share information frequently.

Once the full scope of the vulnerability was confirmed, and after verifying that users would be protected against the vulnerability by upgrading vulnerable modules to the latest version, we communicated through multiple channels to inform our users and the PrestaShop community at large about the incident.

Finally, we communicated through our social networks to warn the community.

Since this day, we still communicate with community members who reach us to inform them about the nature of the vulnerability and provide guidance about what to do if they find themselves impacted.

## Technical changes

All PrestaShop and module archives have been checked, and the faulty archives have been updated. 
Latest releases of the corrupted modules no longer contain the vulnerable PHPUnit vendor directory and, during upgrade process, they now delete any remaining instance of that directory if found.

There was no need to fix our pipeline which builds modules ZIP archive as it was already secure. The vulnerability was only present for the modules built before the pipeline was fixed and that were not rebuilt.

## Next steps

A [Bug Bounty program](https://en.wikipedia.org/wiki/Bug_bounty_program) will be launched very soon with [YesWeHack](https://www.yeswehack.com/) and will help to prevent this kind of issue by promoting security researchers to search and report security issues.

Internal processes and tools are also being improved to make sure similar issues will not happen again in the future. Multiple solutions are being explored to detect such vulnerabilities before they are released.


If you just discovered this article, please refer to [https://build.prestashop.com/news/critical-security-vulnerability-in-prestashop-modules/ ](https://build.prestashop.com/news/critical-security-vulnerability-in-prestashop-modules/) to make sure you are not impacted by the vulnerability or if you are impacted, help you to remove the vulnerable files and protect your shop. 
