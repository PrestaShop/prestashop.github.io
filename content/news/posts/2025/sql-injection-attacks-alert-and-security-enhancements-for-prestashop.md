---
layout: post
title:  "SQL Injection attacks alert and security enhancements for PrestaShop"
subtitle: "Protecting your PrestaShop store from recent attacks"
date:   2025-01-22
authors: [ PrestaShop ]
icon: icon-checked

tags: [module, module-releases, security]
---

A recent wave of attacks has targeted PrestaShop stores, leveraging SQL Injection vulnerabilities in third-party modules to compromise data security. Malicious actors exploit these vulnerabilities to inject harmful code into the PrestaShop database, enabling the theft of sensitive customer information by loading unauthorized JavaScript scripts.

According to the investigation, this vulnerability is not in the PrestaShop core but in third-party modules. Stores using a custom database prefix and without SQL Injection-vulnerable modules installed should remain unaffected. To address potential security concerns, we have released an updated version of the [ps_contactinfo](https://github.com/PrestaShop/ps_contactinfo) module and strongly encourage all store owners to adopt best practices to safeguard their PrestaShop installations.

## Understanding the attack

### How to check if your store is affected

Check the `PS_SHOP_NAME` configuration value in your database for any unexpected scripts or malicious content. If you suspect your store has been affected, consider reaching out to PrestaShop Experts of your choice for assistance.

### What is SQL Injection?

SQL Injection is a type of security vulnerability that allows attackers to inject malicious SQL code into database queries. This can lead to unauthorized access, data theft, or even complete control over the database.

In this case, the attackers have exploited an SQL Injection vector to insert malicious scripts into the `PS_SHOP_NAME` configuration value in the database. These scripts act as information stealers, potentially capturing sensitive customer data, including form inputs.

### Origins and cause

The attack has been traced to vulnerabilities in third-party modules, many of which were fixed a long time ago but remain unpatched in some stores. Additionally, some older vulnerabilities in other areas have also been exploited, highlighting the importance of keeping all components up to date. The current version of PrestaShop is not affected as long as there are no SQL Injection-vulnerable modules installed and all updates have been applied.

## Security improvements in the ps_contactinfo module

To improve PrestaShop security, we have released a new version of the [ps_contactinfo](https://github.com/PrestaShop/ps_contactinfo) module. This update addresses potential vulnerabilities and improves overall security for your store. For more information, read this ([security advisory](https://github.com/PrestaShop/ps_contactinfo/security/advisories/GHSA-35pq-7pv2-2rfw)). The upgraded version is available for PrestaShop 1.7.2+, but you can apply the changes manually if you use an older version of PrestaShop.

This release is a part of our ongoing commitment to ensuring the PrestaShop ecosystem’s safety. Regular updates to modules and the PrestaShop core significantly reduce exposure to known vulnerabilities.

## Best practices for securing your PrestaShop store

Proactively protecting your store is critical to its stability, and implementing the best practices below can significantly reduce the risk of attacks.

### Keep your store updated

- **Core updates**: always run the latest stable version of PrestaShop.
- **Module updates**: regularly update all native and third-party modules.

### Use a custom database prefix

When installing PrestaShop, avoid using the default `ps_` database prefix. A custom prefix adds an additional layer of security against automated attacks.

### Use a Web Application Firewall (WAF)

A Web Application Firewall (WAF) helps protect your store by filtering and monitoring HTTP requests. It blocks malicious requests, including SQL Injections, before they reach your server. Consider implementing a reliable WAF solution to add an extra layer of defense.

### Regular backups

Ensure you regularly back up your database and files. In case of an attack, a recent backup allows you to restore your store quickly and minimizes downtime.

### Monitor security advisories

Stay informed about vulnerabilities and recommended actions by:
- Following updates in the [PrestaShop security advisories](https://github.com/PrestaShop/PrestaShop/security/advisories).
- Leveraging community-driven insights from [Friends of Presta](https://security.friendsofpresta.org/).

## How to upgrade

The latest version of the [ps_contactinfo](https://github.com/PrestaShop/ps_contactinfo) module should be available in your PrestaShop Back Office. Navigate to the "Modules" section to check for updates and install the latest version. You can also download it directly from [here](https://github.com/PrestaShop/ps_contactinfo/releases/download/v3.3.3/ps_contactinfo.zip).

Upgrading your PrestaShop core can be done using the [Auto Upgrade](https://github.com/PrestaShop/autoupgrade) module. However, if you encounter any issues or require assistance, contacting PrestaShop Experts is recommended. Remember, these steps are meant to strengthen your store’s security and ensure smooth operation.

## Conclusion

This attack highlights the need for vigilance and regular updates. Keeping your modules and core up to date, following security advisories, and using a custom database prefix are simple yet effective steps to safeguard your PrestaShop store and maintain customer trust.

Let’s work together to maintain a safer ecosystem for all PrestaShop users.
