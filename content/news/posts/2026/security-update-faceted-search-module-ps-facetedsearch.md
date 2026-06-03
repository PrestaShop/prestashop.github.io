---
layout: post
title:  "Security update for the Faceted Search module (ps_facetedsearch)"
subtitle: "A new version of the Faceted Search module is available and fixes a security issue. We recommend updating to v4.0.4."
date:   2026-06-03
authors: [ PrestaShop ]
icon: icon-warning
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
tags: [module, module-releases, security]
---

A security vulnerability has been identified in the Faceted Search module ([ps_facetedsearch](https://github.com/PrestaShop/ps_facetedsearch)). Under certain conditions, specially crafted requests could be processed unsafely by the module and lead to the execution of unauthorized code on the server. The issue does not require an account or authentication, so any shop running an affected version is exposed.

A fix is available in **version 4.0.4**. If you use `ps_facetedsearch`, update to this version as soon as possible. This is the only complete way to close the issue.

{{% notice type="warning" title="Update to v4.0.4" %}}
If you use ps_facetedsearch, updating to **v4.0.4** is the recommended next step. The recommendations further down this article add useful extra layers, but the update is what actually closes the issue.
{{% /notice %}}

## Affected versions

The vulnerability affects **ps_facetedsearch 3.0.0 and later**, up to and including **4.0.3**, on any shop running **PrestaShop 1.7.1.0 or newer**.

It is fixed in **ps_facetedsearch 4.0.4**.

Full details are tracked in the [security advisory](https://github.com/PrestaShop/ps_facetedsearch/security/advisories/GHSA-m5f5-28qr-9g9r).

Because the module is widely installed (it powers product filtering on a large share of PrestaShop stores) and because no authentication is required to reach the issue, we consider this a high-priority update for every merchant using it.

## How to update

The recommended path is to install the latest version of the module:

1. In your Back Office, go to **Modules** and check for available updates for Faceted Search.
2. Update the module to **v4.0.4**.
3. If the update does not appear yet, you can download it directly from the release page and install it manually.

{{< cta "https://github.com/PrestaShop/ps_facetedsearch/releases/tag/v4.0.4" >}}Download ps_facetedsearch v4.0.4{{< /cta >}}

After updating, confirm that the installed version reported in the Back Office is **4.0.4** (or later).

## If you cannot update right away

Updating to v4.0.4 is the recommended action and the only complete remediation. If you are temporarily unable to install the new version (for example, a heavily customized module or a constrained release process), advanced users can apply the official fix directly from the source.

The change is contained in a single commit. Apply it to your installed copy of the module, then redeploy:

{{< cta "https://github.com/PrestaShop/ps_facetedsearch/commit/9ca839fac68a60641d8187a3ff9730ab09af33cb" "info" >}}View the fix commit{{< /cta >}}

{{% notice type="note" title="A patch is a stopgap, not the destination" %}}
Applying the commit manually closes the same issue, but it leaves you on an older module version that is missing every other fix and improvement shipped since. Treat it as a bridge and schedule the update to v4.0.4 as soon as you can.
{{% /notice %}}

If you are not comfortable editing module files on a production shop, do this on a staging copy first, or ask a PrestaShop expert to apply it for you.

## How to tell if you are impacted

Updating closes the vulnerability, but if your shop ran an affected version, it is worth checking for signs that it was already targeted. Connect to your server via FTP or shell access and look for the following:

- **Unexpected PHP files** in the `modules/ps_facetedsearch/` directory (and its subdirectories). The module ships a known set of files; any extra or unfamiliar `.php` file that you did not install is a warning sign.
- **Unusual entries in your server access logs**, in particular repeated or malformed requests targeting files under the `modules/ps_facetedsearch/` path.

You can also review the **Advanced Parameters > Information** page in your Back Office, which lists changed core files, though this check alone is not sufficient to confirm a shop is clean.

{{% notice type="warning" title="If you find something" %}}
If you discover unexpected files, suspicious log activity, or any other sign of compromise, do not assume that updating the module is enough. A shop that has already been breached needs to be investigated and cleaned. Contact a PrestaShop expert, rotate your Back Office passwords once the shop is confirmed clean, and review any other modules and credentials on the server.
{{% /notice %}}

## Additional recommendations

These measures add layers of defense and limit the impact of attacks in general. None of them is a substitute for updating ps_facetedsearch to v4.0.4, but together they make your server harder to exploit.

### Web Application Firewall (WAF)

A Web Application Firewall inspects incoming HTTP requests and can block requests that match known malicious patterns before they reach PrestaShop. A WAF is a useful layer, but treat it as defense-in-depth rather than a fix: signature-based filtering can be evaded by reshaping or relocating a malicious request, so a WAF rule may reduce opportunistic attacks without closing the underlying issue. Keep the update as your primary remediation and use a WAF on top of it.

### Cloudflare and similar edge services

Cloudflare (and comparable CDN or reverse-proxy services) can help by absorbing traffic and applying managed WAF rules at the edge, and a tuned rule may catch some attempts. The same caveat applies: edge filtering is pattern-based and can be bypassed, and it offers no protection against a request that does not match a known signature. It is a worthwhile layer, not a guarantee, and not a reason to delay updating.

### Restrict dangerous PHP functions on the server

Disabling PHP functions that are commonly abused to run system commands limits what unauthorized code can do if it ever reaches your server. In your `php.ini`, set `disable_functions` to block the functions your shop does not need, for example:

```ini
disable_functions = exec,passthru,shell_exec,system,proc_open,popen,proc_close,proc_nice,pcntl_exec,popen,proc_get_status
```

The key functions to consider disabling are `exec`, `system`, `shell_exec`, `passthru`, `proc_open`, `popen`, and `pcntl_exec`, since these are the typical vehicles for executing operating-system commands from PHP. PrestaShop's normal operation does not rely on them, but some hosting setups or third-party modules might, so apply this on a staging environment first and confirm your shop and modules still work before rolling it out to production.

### General hygiene

- **Keep everything updated.** Run a maintained version of PrestaShop and keep all native and third-party modules current. If you are on an end-of-life PrestaShop branch, plan an upgrade: older branches no longer receive fixes, which compounds risks like this one.
- **Back up regularly.** Recent, tested backups of your database and files let you recover quickly if a shop is compromised.
- **Monitor advisories.** Follow the [PrestaShop security advisories](https://github.com/PrestaShop/PrestaShop/security/advisories) and community resources such as [Friends of Presta](https://security.friendsofpresta.org/) so you hear about issues early.

## In short

Update ps_facetedsearch to **v4.0.4** now if you run version 3.0.0 or later. Check your `modules/ps_facetedsearch/` directory and access logs for signs of past activity, and add a WAF, edge filtering, and restricted PHP functions as additional layers. If you find any indication that your shop was compromised, treat it as a security incident and bring in an expert.

Thank you Frédéric Moreau (Antadis) and Gilles Caudal (Datalinx) for reporting, and helping keep the PrestaShop ecosystem secure.
