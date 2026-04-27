---
layout: post
title:  PrestaShop 9.1.1 is available
subtitle: "Critical security patch for branch 9.1.x: stored XSS in the back office Customer Service view (GHSA-w9f3-qc75-qgx9)."
date: 2026-04-27
authors: [ PrestaShop ]
icon: icon-leaf
image: /assets/images/2026/04/PrestaShop-9.1.1-BuildBlog.png
opengraph_image: /assets/images/2026/04/PrestaShop-9.1.1-LinkedIn_Facebook.png
twitter_image: /assets/images/2026/04/PrestaShop-9.1.1-X.png
tags:
- version
- patch
- releases
- security
- "9.1"
- "9.1.x"
---

PrestaShop 9.1.1 is available. This security patch for the 9.1 branch addresses a **Critical** stored Cross-Site Scripting vulnerability. Updating as soon as possible is strongly recommended.

![PrestaShop 9.1.1 is available!](/assets/images/2026/04/PrestaShop-9.1.1-BuildBlog.png)

## Security fix

* **Stored XSS in the back office Customer Service view** (Severity: Critical 9.3/10, CWE-79)
  * Identifier: [GHSA-w9f3-qc75-qgx9](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-w9f3-qc75-qgx9)

Full technical details and attack vector are documented in the advisory.

This issue is also fixed in PrestaShop 8.2.6, released simultaneously.

## Update to PrestaShop 9.1.1

Updating your shop to version 9.1.1 is highly recommended. You can use the [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/) to perform the update.

Always remember to make a full backup of your database and files before performing any update.

If you cannot update immediately, we recommend two alternatives to close the vulnerability in the meantime. See [If you cannot update immediately](#if-you-cannot-update-immediately) below.

## Download

{{< cta "https://prestashop.com/versions/" >}}Download PrestaShop 9.1.1 now!{{< /cta >}}

## If you cannot update immediately

Updating to 9.1.1 is the safest option. If that is not possible right away, you have two alternatives to close the vulnerability.

### Option 1: install the hotfix module

Download the latest release of [pshotfix_ghsaw9f3qc75qgx9](https://github.com/PrestaShop/pshotfix_ghsaw9f3qc75qgx9/releases) and upload the ZIP from **Modules > Module Manager > Upload a module**. On install, the module backs up the vulnerable template and applies the fix automatically. It supports PrestaShop 1.7, 8.x, and 9.x.

### Option 2: apply the fix manually (advanced users)

The fix has two parts. The first one stops the malicious payload from being rendered in the back office (the actual XSS sink). The second one tightens email validation so that addresses containing characters that enable this kind of payload are rejected when the customer thread is created. Both should be applied for a complete defense.

#### Part 1: escape the email in the customer threads template

The vulnerability is caused by a customer thread email value being rendered in the back office without HTML escaping, in two places: the reply form title (`<h3>`) and a hidden input. The patch escapes both occurrences using Smarty's `escape` modifier with HTML context and UTF-8 encoding.

1. Make a copy of the file before editing it.
2. Open the following file on your server (edit it directly in place):

   ```
   {YOUR_ADMIN_DIR}/themes/default/template/controllers/customer_threads/helpers/view/view.tpl
   ```

   {{% notice type="important" %}}
   `{YOUR_ADMIN_DIR}` is the name of **your** back office folder. On a fresh installation this is `admin-dev`, but most production shops rename it (for example `admin1a2b3c/`) for security reasons. Use whichever directory name your shop actually uses. If you are unsure, look at the URL you use to reach the back office.
   {{% /notice %}}

3. Find every occurrence of `{$thread->email}` (there are two: one in the reply form `<h3>` title near line 76, and one in a hidden input near line 97) and replace it with:

   ```smarty
   {$thread->email|escape:'html':'UTF-8'}
   ```

   Concretely, the `<h3>` line changes from:
   ```smarty
   {else} {$thread->email}{/if}
   ```
   to:
   ```smarty
   {else} {$thread->email|escape:'html':'UTF-8'}{/if}
   ```

   And the hidden input changes from:
   ```smarty
   <input type="hidden" name="msg_email" value="{$thread->email}" />
   ```
   to:
   ```smarty
   <input type="hidden" name="msg_email" value="{$thread->email|escape:'html':'UTF-8'}" />
   ```

4. Clear the Smarty cache from the back office (Advanced Parameters > Performance) or by deleting `var/cache/*`.

#### Part 2: tighten email validation in `classes/Validate.php`

`Validate::isEmail()` previously validated email addresses in `loose` mode, which accepts RFC-compliant constructs (such as quoted local parts) that can carry characters used in XSS payloads. Switching to `strict` mode rejects those addresses before they are stored in a customer thread.

1. Make a copy of the file before editing it.
2. Open `classes/Validate.php` at the root of your shop and locate the `isEmail()` method.
3. Replace:

   ```php
   'mode' => 'loose',
   ```

   with:

   ```php
   'mode' => 'strict',
   ```

**If unsure, prefer a full update to 9.1.1.**

## Acknowledgments

This security release was made possible thanks to a coordinated disclosure process between external researchers and the PrestaShop maintainers team.

We would like to thank **Savio** at [Doyensec](https://www.doyensec.com/), in collaboration with Anthropic Research, for responsibly reporting this vulnerability, and [@matthieu-rolland](https://github.com/matthieu-rolland) for handling the advisory and coordinating the fix.

Thank you to everyone who contributes to keeping PrestaShop secure!
