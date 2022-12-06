---
layout: post
title:  "Release of PrestaShop 1.7.8.7"
subtitle: "Maintenance version of the 1.7.8.x branch"
date:   2022-07-25
authors: [ PrestaShop ]
image: /assets/images/2022/05/1.7.8.7_banner.jpg
icon: icon-checked
tags:
 - version
 - patch
 - releases
 - 1.7.8.x
 - 1.7

---

PrestaShop version 1.7.8.7 is now available. This release fixes one important security issue, read this article for more information.

![1.7.8.7 is available!](/assets/images/2022/07/1.7.8.7_banner.jpg)

The maintainer team has been made aware that malicious actors are exploiting a combination of known and unknown security vulnerabilities to inject malicious code in PrestaShop websites, allowing them to execute arbitrary instructions, and potentially steal customer’s payment information. You can [read our dedicated article](https://build.prestashop.com/news/major-security-vulnerability-on-prestashop-websites/) to find out what’s happening, how the attack works and what to do to keep your shop safe.

While investigating this attack, we found a previously unknown vulnerability chain that has been fixed in this release. At the moment, however, we cannot be sure that it’s the only way for them to perform the attack.

We suggest upgrading your shop quickly in order to benefit from this fix. Please remember to back up before you upgrade.

Be aware that upgrading your software **might not be enough to secure your store if it has been hacked already**. Consider contacting a specialist to perform a full audit of your site and make sure that no malicious content has been planted.

Reminder: the latest version of the 1-Click Upgrade is v4.14.2 and has been just released, don’t forget to upgrade it.

## About the security fix

This security fix strengthens the MySQL Smarty cache storage against code injection attacks. Read the [security advisory](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-hrgx-p36p-89q4) for more details.

Note: this legacy feature is maintained for backward compatibility reasons and will be removed from future PrestaShop versions. It is recommended not to enable it due to reduced performance.

We would like to take the opportunity to stress once more the importance of keeping your system updated to keep your shop safe from attacks. This means regularly updating both your PrestaShop software and its modules, as well as your server environment.

## Acknowledgements

Contributors to PrestaShop version 1.7.8.7:
* Dominik Shaim who first reached out to the security team and helped investigate the vulnerability
* Maintainers Daniel Hlavacek and Krystian Podemski who helped investigate the vulnerability
* Maintainer and security lead Thomas Baccelli who helped investigate the vulnerability and build the fix
* QA analysts and engineers who tested this release and the upgrade process: Florine Hea, Sarah Cavrot, Khouloud Belguith, Hana Rebai, Marwa Chelly, Hibatallah Aouadni, Boubker Bribri and Aurelien Rita.

Thank you!

[Download PrestaShop 1.7.8.7 now!](https://www.prestashop.com/versions){: .btn .btn-lg .btn-success}
{: .text-center}

Since version 1.7.8.7 is a “patch” update to version 1.7.8.6, upgrading from any 1.7.8 version will be easy: features will work better, and modules & themes which worked fine on 1.7.8.x will work just as well with 1.7.8.7.
