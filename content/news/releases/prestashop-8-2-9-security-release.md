---
layout: post
title:  PrestaShop 8.2.9 is available
subtitle: "Security release for the 8.2 branch, fixing fifteen vulnerabilities reported through coordinated disclosure."
date: 2026-11-09 06:00:00
authors: [ PrestaShop ]
icon: icon-leaf
image: /assets/images/2026/11/banner_8.2.9_1200x627.jpg
opengraph_image: /assets/images/2026/11/banner_8.2.9_1200x627.jpg
twitter_image: /assets/images/2026/11/banner_8.2.9_1024x512.jpg
tags:
- version
- patch
- releases
- security
- "8.2"
- "8.2.x"
---

<!-- DO NOT PUBLISH before the GHSA advisories are public (step V.6): the links below are private drafts until then.
     CVE ids are pending at GitHub except CVE-2026-71519 and CVE-2026-71531: add the others to the Identifier lines once assigned. -->

PrestaShop 8.2.9 is available. This is a security-only release for the 8.2 branch that fixes fifteen vulnerabilities, twelve of them rated High, and ships two updated modules (newsletter and GDPR). Several of them can be exploited without any account on the shop. Updating as soon as possible is strongly recommended.

![PrestaShop 8.2.9 is available!](/assets/images/2026/11/banner_8.2.9_1534x424.jpg)

## Security fixes

* **Stored XSS through SVG files uploaded with the back office file manager and logo uploader** (Severity: High 8.7/10, CWE-79)
  * Identifier: [GHSA-99cp-c6mm-p7h5](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-99cp-c6mm-p7h5)
  * **Requires admin access:** a back office employee account.
  * SVG files uploaded through the back office file manager or as the shop logo were accepted even when they contained scripts. A crafted file could then run JavaScript in the browser of whoever displayed it, including other employees. Such SVG files are now rejected.
* **Path traversal in attachments allows file read and deletion outside the download directory** (Severity: High 8.5/10, CWE-22)
  * Identifier: [GHSA-wrmc-gmx5-9hhc](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-wrmc-gmx5-9hhc)
  * **Requires a webservice key:** a webservice key with write permission on attachments.
  * Attachment files were not strictly kept inside the download directory, so an attacker with write access to attachments could read or delete files elsewhere on the server. This completes the fix of CVE-2023-39529.
* **Webservice API cross-tenant customer takeover via missing record-level shop check** (Severity: High 8.1/10, CWE-639, CWE-862)
  * Identifier: [GHSA-hjwq-7qvv-qxj4](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-hjwq-7qvv-qxj4), [CVE-2026-71519](https://www.cve.org/CVERecord?id=CVE-2026-71519)
  * **Requires a webservice key:** a webservice key allowed on at least one shop of a multistore installation.
  * On multistore installations, the webservice did not check that a requested record belonged to a shop the API key was allowed on. A key limited to one shop could reach the customers of another shop, up to taking over their accounts.
* **Installer can be re-run without an already-installed check, allowing configuration overwrite** (Severity: High 8.1/10, CWE-306, CWE-862)
  * Identifier: [GHSA-8rxw-79mh-gmm5](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-8rxw-79mh-gmm5)
  * The web installer did not check whether the shop was already installed. When the installer was still reachable, anyone could run it again and overwrite the shop configuration. It now refuses to run on an installed shop.
* **Unauthenticated PHP object injection in the installer session cookie leads to remote code execution** (Severity: High 8.1/10, CWE-502)
  * Identifier: [GHSA-h2q4-7fp7-m5jp](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-h2q4-7fp7-m5jp)
  * The installer restored its session from a cookie without making sure the content was safe to unserialize. A visitor sending a crafted cookie to a reachable installer could execute code on the server.
* **Webservice API multishop scope bypass via `id_shop=all` / `id_shop_group`** (Severity: High 8.1/10, CWE-862, CWE-863)
  * Identifier: [GHSA-3f36-4qv4-vfgh](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-3f36-4qv4-vfgh), [CVE-2026-71531](https://www.cve.org/CVERecord?id=CVE-2026-71531)
  * **Requires a webservice key:** a webservice key restricted to some shops.
  * By adding `id_shop=all` or an `id_shop_group` parameter to a request, an API key restricted to some shops could reach the data of every shop in the installation. Keys now stay within the shops they are allowed on.
* **Cart rule usage limits can be bypassed through a race condition in order validation** (Severity: High 7.5/10, CWE-367)
  * Identifier: [GHSA-r246-6gw4-pj3p](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-r246-6gw4-pj3p)
  * By validating several orders at the same time, a customer could use a cart rule more times than its quantity allows. The remaining quantity is now taken into account when the order validation checks the cart rule.
* **Duplicate orders can be created from a single cart through a race condition in free-order checkout** (Severity: High 7.5/10, CWE-362, CWE-367)
  * Identifier: [GHSA-2676-hc74-gg7v](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-2676-hc74-gg7v)
  * When the order total was zero, concurrent checkout requests on the same cart could each create an order. A single cart now leads to a single order.
* **Path traversal in theme and module import allows an authenticated administrator to write files outside the intended folder** (Severity: High 7.2/10, CWE-22, CWE-434)
  * Identifier: [GHSA-7q68-ch46-pxmc](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-7q68-ch46-pxmc)
  * **Requires admin access:** a back office employee allowed to import themes or modules.
  * The content of an imported theme or module archive was not kept inside its destination folder, so a crafted archive could write files anywhere the web server can write, leading to code execution.
* **Arbitrary file inclusion through the module parameter of the back office translations page** (Severity: High 7.2/10, CWE-98)
  * Identifier: [GHSA-fxq4-2mc8-99pr](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-fxq4-2mc8-99pr)
  * **Requires admin access:** a back office employee with access to the translations page.
  * The module name passed to the translations page was used to load a file without being checked, which allowed an employee with access to that page to execute code. Translation files are now only loaded for installed modules, and PHP archives are rejected in import uploads.
* **Remote code execution through the theme "Import from the web" feature** (Severity: High 7.2/10, CWE-434)
  * Identifier: [GHSA-95w6-v2wq-cv8w](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-95w6-v2wq-cv8w)
  * **Requires admin access:** a back office employee allowed to import themes.
  * A theme archive imported from a URL was saved into the admin directory, where a crafted file could be executed. Downloaded archives now go to the cache directory.
* **Path traversal in back office email translations allows arbitrary file write** (Severity: High 7.2/10, CWE-22, CWE-94)
  * Identifier: [GHSA-5p6p-mx64-96jf](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-5p6p-mx64-96jf)
  * **Requires admin access:** a back office employee with access to email translations.
  * The mail template name was not always validated before translation files were written, so an employee with access to email translations could write a PHP file outside the mails folder and execute it.
* **Unauthenticated disclosure of a customer's customization file through the order reference** (Severity: Medium 5.9/10, CWE-639, CWE-863)
  * Identifier: [GHSA-fg9q-mm4c-h5xc](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-fg9q-mm4c-h5xc)
  * Files uploaded by customers to customize a product could be downloaded by anyone knowing the order reference. The download now also requires the order secure key.
* **Back office employees with create-only order permission can modify existing orders** (Severity: Medium 4.9/10, CWE-862, CWE-863)
  * Identifier: [GHSA-mgcf-mrg4-mcxv](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-mgcf-mrg4-mcxv)
  * **Requires admin access:** a back office employee with the create permission on orders.
  * An employee only allowed to create orders could add products to existing ones. This now requires the order edit permission.
* **Predictable password reset token allows a customer account takeover** (Severity: Medium 4.8/10, CWE-330)
  * Identifier: [GHSA-g6p7-cx52-hcrj](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-g6p7-cx52-hcrj)
  * Password reset tokens were derived from predictable values, so someone who knew a customer's secure key could guess the token and take over the account. Tokens are now generated with a cryptographically secure random generator.

Full technical details, attack vectors, and workarounds are documented in each advisory.

These issues are also fixed in PrestaShop 9.2.1, released simultaneously, which additionally fixes three vulnerabilities that only concern PrestaShop 9.

### Module updates

PrestaShop 8.2.9 also ships version 3.0.1 of the **ps_emailsubscription** module, which fixes a CSV injection in the subscribers export ([GHSA-pg6j-qf29-gc43](https://github.com/PrestaShop/ps_emailsubscription/security/advisories/GHSA-pg6j-qf29-gc43), Medium 6.1/10, CWE-1236). Email addresses starting with a formula character were accepted at newsletter sign-up and written as-is in the export, so they could be interpreted as formulas when an administrator opened the file in a spreadsheet application.

PrestaShop 8.2.9 also ships version 1.4.4 of the **psgdpr** module, which fixes an insecure direct object reference in the front office consent logging ([GHSA-wwqh-cf9m-347f](https://github.com/PrestaShop/psgdpr/security/advisories/GHSA-wwqh-cf9m-347f), [CVE-2026-92809](https://www.cve.org/CVERecord?id=CVE-2026-92809), Medium 5.3/10, CWE-639). The module trusted the customer id sent in the request, so anyone, even a visitor without an account, could record a consent on behalf of another customer in the GDPR log.

If you do not update the shop right away, you can update these modules on their own from the Module Manager.

## Update to PrestaShop 8.2.9

Updating your shop to version 8.2.9 is highly recommended. You can use the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/) to perform the update.

Always remember to make a full backup of your database and files before performing any update.

If you encounter any problems during the update that, in your opinion, are not caused by third-party modules or modifications used in your shop, [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## Download

The Classic edition now ships PrestaShop Checkout 5.5.6 (8.5.5.6), which includes the fixes of the module advisories [GHSA-6q9v-2g94-hxm5](https://github.com/PrestaShopCorp/ps_checkout/security/advisories/GHSA-6q9v-2g94-hxm5) and [GHSA-678f-q3v5-9fw4](https://github.com/PrestaShopCorp/ps_checkout/security/advisories/GHSA-678f-q3v5-9fw4).

{{< cta "https://prestashop.com/versions/#:~:text=PrestaShop%208.2.9" >}}Download PrestaShop 8.2.9 now!{{< /cta >}}

## PrestaShop 9

If you are looking for the latest features and a more modern architecture, we encourage you to check out [PrestaShop 9.2](https://prestashop.com/versions/). PrestaShop 9.2 brings One Page Checkout, Ask AI, and Extra Properties on top of the modernized foundation introduced in PrestaShop 9.

As a reminder, [PrestaShop 8.2.x is in its extended support phase]({{< relref "/news/posts/2025/82x-extended-support-phase" >}}) and now receives only security and critical fixes. Start planning your migration today to benefit from the latest innovations in the PrestaShop ecosystem.

## Full changelog

- Back Office:
  - Bug fix:
    - [GHSA-fxq4-2mc8-99pr](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-fxq4-2mc8-99pr): Only load translation files of installed modules and reject PHP archives in import uploads (by [@nicosomb](https://github.com/nicosomb))
    - [GHSA-95w6-v2wq-cv8w](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-95w6-v2wq-cv8w): Download theme archives from a URL into the cache directory (by [@mattgoud](https://github.com/mattgoud))
- Front Office:
  - Bug fix:
    - [GHSA-fg9q-mm4c-h5xc](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-fg9q-mm4c-h5xc): Require the order secure key to download a customization file by reference (by [@M0rgan01](https://github.com/M0rgan01))
- Core:
  - Bug fix:
    - Update ps_emailsubscription (by [@jolelievre](https://github.com/jolelievre))
    - [#43444](https://github.com/PrestaShop/PrestaShop/pull/43444): Update psgdpr to 1.4.4 (by [@nicosomb](https://github.com/nicosomb))
    - [GHSA-g6p7-cx52-hcrj](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-g6p7-cx52-hcrj): Generate the password reset tokens with a CSPRNG (by [@M0rgan01](https://github.com/M0rgan01))
    - [GHSA-7q68-ch46-pxmc](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-7q68-ch46-pxmc): Keep extracted archives and installed themes inside their destination folder (by [@nicosomb](https://github.com/nicosomb))
    - [GHSA-wrmc-gmx5-9hhc](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-wrmc-gmx5-9hhc): Keep attachment files inside the download directory (by [@nicosomb](https://github.com/nicosomb))
    - [GHSA-99cp-c6mm-p7h5](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-99cp-c6mm-p7h5): Block corrupted SVG files uploaded through the FileManager and the logo uploader (by [@Quetzacoalt91](https://github.com/Quetzacoalt91))
    - [GHSA-2676-hc74-gg7v](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-2676-hc74-gg7v): Prevent duplicate orders from a single cart in concurrent checkouts (by [@M0rgan01](https://github.com/M0rgan01))
    - [GHSA-mgcf-mrg4-mcxv](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-mgcf-mrg4-mcxv): Require the order edit permission to add a product to an existing order (by [@M0rgan01](https://github.com/M0rgan01))
    - [GHSA-r246-6gw4-pj3p](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-r246-6gw4-pj3p): Take the cart rule quantity when the order validation checks it (by [@mattgoud](https://github.com/mattgoud))
    - [GHSA-5p6p-mx64-96jf](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-5p6p-mx64-96jf): Always validate the mail template name before writing translation files (by [@mattgoud](https://github.com/mattgoud))
- Installer:
  - Bug fix:
    - [GHSA-h2q4-7fp7-m5jp](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-h2q4-7fp7-m5jp): Fix dangerous unserialization in the installer session (by [@clotairer](https://github.com/clotairer))
    - [GHSA-8rxw-79mh-gmm5](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-8rxw-79mh-gmm5): Refuse to run the web installer on an already installed shop (by [@mattgoud](https://github.com/mattgoud))
- Web Services:
  - Bug fix:
    - [GHSA-hjwq-7qvv-qxj4](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-hjwq-7qvv-qxj4): Keep webservice record access within the shops a key is allowed on (by [@M0rgan01](https://github.com/M0rgan01))
    - [GHSA-3f36-4qv4-vfgh](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-3f36-4qv4-vfgh): Keep webservice keys within the shops they are allowed on (by [@M0rgan01](https://github.com/M0rgan01))

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.2.9" >}}See the full release notes{{< /cta >}}

## Acknowledgments

This security release was made possible thanks to a coordinated disclosure process between external researchers and the PrestaShop maintainers team. Many of these issues were reported by several researchers independently: each of them is credited below.

We would like to thank:

* **Nguyễn Vương Tuấn Hiệp (nvth)** for the stored XSS through SVG uploads;
* **Jean-Jamil Khalife** (HDW Sec), and independently **Abraxas Labs**, **Calif.io** in collaboration with Anthropic, **Nikhil Thomas** and **Ayushman Dubey** (Warpnet), and **Bani Montoya**, for the path traversal in attachments;
* a researcher coordinated by **VulnCheck**, and independently **boo-code** and **Gurvir Bajwa**, for the webservice cross-tenant customer takeover;
* a researcher coordinated by **VulnCheck**, and independently **Sakil Ahamed Gayen** and **Gurvir Bajwa**, for the webservice multishop scope bypass;
* **Bilguundalai**, and independently **Wenhao Wu** (Southeast University), for the installer re-run;
* **Wenhao Wu** (Southeast University) for the customization file disclosure;
* **Kamaldeep Rajal**, and independently **Santhoshkumar S**, for the object injection in the installer session cookie;
* **NEC Security**, and independently **Mufeed VH** (Winfunc Research), for the cart rule usage limit bypass;
* **Mufeed VH** (Winfunc Research) for the duplicate orders in free-order checkout and the order permission issue;
* **Vitish Bhardwaj**, and independently **tuan nguyen**, **VulnCheck**, **Duc Anh Le** and **JoyBoy**, for the path traversal in theme and module import;
* **Leonardo Kauan** for the file inclusion through the translations page;
* **Viet Son** for the remote code execution through the theme "Import from the web" feature;
* **Mukul Goyal** (parameter.ai), and independently **boo-code**, for the path traversal in email translations;
* **Savio** ([Doyensec](https://www.doyensec.com/)) in collaboration with Anthropic Research, and independently **Sanghyeon Lee**, **Dawit Jeong**, **Amit Chavan** and **abraxas**, for the predictable password reset token.

On the maintainers side, thank you to [@M0rgan01](https://github.com/M0rgan01), [@mattgoud](https://github.com/mattgoud), [@nicosomb](https://github.com/nicosomb), [@clotairer](https://github.com/clotairer), [@Quetzacoalt91](https://github.com/Quetzacoalt91), [@jolelievre](https://github.com/jolelievre) and [@matthieu-rolland](https://github.com/matthieu-rolland) for analysing the reports and preparing the patches, and to [@seiwan](https://github.com/seiwan) for the PrestaShop Checkout advisories.

{{< contributors-grid "M0rgan01" "mattgoud" "nicosomb" "clotairer" "Quetzacoalt91" "jolelievre" "matthieu-rolland" "seiwan" >}}
Thank you to everyone who contributes to keeping PrestaShop secure! Reporting responsibly, reviewing a patch, or testing a fix before it ships all make a real difference.

Want to help? [Start contributing today](https://www.prestashop-project.org/get-involved/), or report a security issue to security-core@prestashop.com.
{{< /contributors-grid >}}
