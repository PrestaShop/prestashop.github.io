---
layout: post
title:  "Critical PHP security updates: what PrestaShop users need to know"
subtitle: "Two critical vulnerabilities in the PHP runtime were fixed on October 21. Here is what happened, how it relates to PrestaShop, and what to do now."
date:   2026-10-21
authors: [ kpodemski ]
icon: icon-warning
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
tags: [security]
---

Today, October 21, the PHP Security Team published security releases fixing two critical vulnerabilities in PHP itself, both rated **CVSS 9.2**. PHP is the language PrestaShop is built on, so this concerns virtually every PrestaShop shop, as well as most other PHP applications on the web.

There is no need to panic, but there is a need to act. The fix is a PHP update, which in most cases is handled by your hosting provider. This article explains what happened, how it relates to PrestaShop, and the steps we recommend.

{{% notice type="warning" title="The short version" %}}
Make sure the server running your shop is updated to **PHP 8.5.12, 8.4.27, 8.3.36 or 8.2.35** (or a patched package from your Linux distribution or hosting provider). If your host manages PHP for you, contact them today and ask them to confirm the update has been applied.
{{% /notice %}}

{{< toc >}}

## What happened?

On October 20, the PHP project gave [advance notice](https://www.php.net/archive/2026.php#2026-10-20-1) of an upcoming security release, scheduled for October 21 at 14:00 UTC (16:00 Paris time). The releases are now out, together with an [official security advisory](https://www.php.net/archive/2026.php#2026-10-21-5).

The two vulnerabilities, nicknamed **php2shell** by the researchers who reported them (Calif.io, Wiz, OpenAI and Quarkslab), are:

- **CVE-2026-109618** ([GHSA-w8hw-w9fx-j79w](https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w)): when PHP runs out of memory, it can be interrupted while internal request data is only partially initialized. The cleanup that follows may then treat that incomplete data as valid.
- **CVE-2026-109619** ([GHSA-6wmf-4rv5-p3rp](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp)): some internal state belonging to a request can survive after its memory has been freed. A later request handled by the same PHP worker may then use that stale state.

In plain words, both are memory-handling flaws in the PHP engine. By sending specially crafted HTTP requests, an attacker could crash PHP processes, expose sensitive data or, in the worst case, **execute their own code on the server without any authentication**. According to the PHP Security Team, all PHP installations serving web requests are at risk (PHP-FPM, Apache with mod_php, php-cgi, FrankenPHP, LiteSpeed), with the highest risk for mod_php, where a working exploit triggers the attack before any application code runs.

## How is this related to PrestaShop?

These vulnerabilities are **not in PrestaShop**, nor in any PrestaShop module. They are in the PHP runtime that executes PrestaShop (and WordPress, Magento, Drupal, Laravel applications and many more).

This has two important consequences:

1. **Updating PrestaShop or your modules will not fix this.** There is no PrestaShop patch to install. The only complete fix is updating PHP on the server.
2. **The attack can happen before PrestaShop code runs.** Security measures implemented at the application level, in PrestaShop or in modules, cannot block it. The protection has to come from the PHP update itself, and in the meantime from the server or network layer.

Because these flaws are exploitable remotely and without authentication, we consider applying the PHP update a top priority for every merchant, whatever PrestaShop version you run.

## What should merchants do?

### 1. Check your PHP version

In your Back Office, go to **Advanced Parameters > Information**. The PHP version used by your shop is listed in the server information section.

The fixed versions published by the PHP project are:

| PHP branch | Fixed version |
|---|---|
| PHP 8.5 | 8.5.12 |
| PHP 8.4 | 8.4.27 |
| PHP 8.3 | 8.3.36 |
| PHP 8.2 | 8.2.35 |

Keep in mind that Linux distributions often backport security fixes without changing the main version number (for example, a Debian or Ubuntu package may still display an older `8.2.x` version while including the fix). If your version is lower than the one in the table, it does not automatically mean you are vulnerable, but it does mean you should check with whoever manages your server.

### 2. Contact your hosting provider

If you use shared hosting, managed hosting or a PrestaShop-specialized host, PHP is managed for you. Linux distributions and long-term support vendors received the patches in advance, so most serious hosting providers are already rolling out updates.

Contact your hosting provider and ask them a simple question: **"Has the fix for CVE-2026-109618 and CVE-2026-109619 been applied to the PHP version running my shop?"** Ask for a written confirmation.

### 3. If you manage your own server

If you or your agency manage the server (VPS, dedicated server, cloud instance, containers):

- Install the updated PHP packages from your Linux distribution, or from the official PHP releases, as soon as possible.
- **Restart every PHP process** after the update (PHP-FPM pools, Apache, LiteSpeed, FrankenPHP workers). An update that is installed but not loaded does not protect you.
- If you rely on the volunteer-maintained `rpms.remirepo.net` repository, note that the PHP project has announced it will not have updates today. They recommend switching to distribution packages or building from source so you can patch immediately.
- If you run your shop in Docker, rebuild your images on the updated base image and redeploy.

If you are not comfortable updating PHP on a production server, or if your agency is no longer around to do it, you can find an agency or freelancer specialized in PrestaShop on the [PrestaShop Experts portal](https://experts.prestashop.com/en).

### 4. Running PHP 8.1 or older?

PHP 8.1 and older versions no longer receive official updates from the PHP project. This is a common situation in the PrestaShop ecosystem, since PrestaShop 1.7 and 8.x shops typically run on PHP 7.x or 8.1.

The PHP project has published minimal backports of the fix for [PHP 7.4](https://github.com/php/php-src/tree/PHP-7.4-CVE-2026-109618-109619), [PHP 8.0](https://github.com/php/php-src/tree/PHP-8.0-CVE-2026-109618-109619) and [PHP 8.1](https://github.com/php/php-src/tree/PHP-8.1-CVE-2026-109618-109619), and many Linux distributions and LTS vendors ship patched packages for the PHP versions they still support. Ask your hosting provider whether your PHP version has been patched.

Getting a patched PHP build for the version you run today is the immediate priority. Upgrading PrestaShop is a separate, longer-term topic: it is **not** an emergency fix for these vulnerabilities, and you should not rush a major upgrade to respond to them.

That said, this event is a good reminder that running an end-of-life PHP version leaves you dependent on others to backport critical fixes. If your shop is still on PrestaShop 1.7 or 8.x, consider planning an upgrade to **PrestaShop 9**, which supports PHP 8.1 up to PHP 8.5. Also note that **PHP 8.2 reaches end of life on December 31, 2026**, so if you are on PHP 8.2 today, plan your move to a newer PHP version as well. A major upgrade involves checking your theme and modules for compatibility, so schedule it according to your compatibility checks and business constraints, ideally with a [PrestaShop Expert](https://experts.prestashop.com/en) if you do not have a technical team.

## If PHP cannot be updated right away

The PHP Security Team is very clear: **there are no complete mitigations, updating is the only safe choice.** The measures below only reduce exposure to specific attack paths while the update is being scheduled. They are meant for technical teams, hosting providers and [PrestaShop Experts](https://experts.prestashop.com/en), and should be tested on a staging environment first.

**For CVE-2026-109618** (out-of-memory handling):

- Limit request sizes. Lower `post_max_size` (the advisory suggests `8M` if you do not need uploads, `32M` if you do) and keep `upload_max_filesize` below it. In PrestaShop, choose values that match your shop's real needs: product images, catalog imports, module and theme installation, and any third-party module that accepts uploads. Limits set too low can break these features.
- Enforce request size limits at the web server or reverse proxy level as well.
- **Advanced, for experienced server administrators only:** the advisory also describes setting `memory_limit=-1` through `php_admin_value` in the PHP-FPM pool or Apache configuration. This removes PHP's own memory limit, so it must **never** be applied without a properly configured and enforced external memory limit (container or cgroup). Without one, a single request could consume all available memory and take the server down. Do not use `RLIMIT_AS` or `RLIMIT_DATA` for this, as they can trigger the vulnerable behavior.

**For CVE-2026-109619** (stale state between requests):

- Set `session.upload_progress.enabled=0` in `php.ini`, the PHP-FPM pool or the server configuration, then restart all PHP workers. Do not rely on `ini_set()` or `.user.ini` files for this.
- On PHP 8.5, also set `fatal_error_backtraces=0` and restart the workers.

Hiding errors (with `error_reporting`, `display_errors` or the `@` operator) does not help. Refer to the [official advisory](https://www.php.net/archive/2026.php#2026-10-21-5) for the complete and authoritative list of interim measures.

### Web Application Firewall (WAF)

A WAF can filter malicious requests before they reach PHP, which is particularly useful here since the attack happens before application code runs. Cloudflare, for example, [has deployed dedicated WAF rules for php2shell](https://blog.cloudflare.com/php-vulnerabilities-waf-protection/), active by default on free and paid plans since October 21, 3:02 UTC. If you are on a paid Cloudflare plan, check that the managed ruleset is running in **block** mode.

Keep in mind that a WAF like Cloudflare only protects traffic that goes through its proxy. If your server can also be reached directly (by its IP address or another hostname), an attacker can bypass the WAF entirely. Make sure your origin server only accepts web traffic coming from your WAF provider.

A WAF is a very welcome extra layer during the patching window, but like any signature-based protection it can be bypassed by reshaped payloads (Cloudflare itself reports attackers mutating their payloads). It does not replace the PHP update.

## What are we doing at PrestaShop?

We have been following this closely since the advance notice was published. Our technical and infrastructure teams monitored the situation ahead of the release and are assessing and updating our services, as part of our standard security process.

We will update this article if we learn anything that requires specific action from the PrestaShop community.

## Security is a continuous effort

Events like this one are a reminder that security is not something you set up once and forget. A shop depends on many layers (the server, PHP, PrestaShop, the theme, every installed module) and a weakness in any of them can put the whole shop at risk, even when the layer at fault is not PrestaShop itself.

AI makes this even more pressing: it helps find vulnerabilities faster, but it can also help attackers exploit them faster once they are disclosed. The time you have to apply a fix keeps getting shorter.

That is why regular updates matter more than ever. Make keeping PHP, PrestaShop and your modules up to date a routine rather than a reaction, and choose hosting providers and partners who apply security updates quickly. If you would rather not handle this alone, a [PrestaShop Expert](https://experts.prestashop.com/en) can help you put a regular maintenance plan in place.

## In short

The vulnerabilities are in PHP, not in PrestaShop, and the fix is a PHP update. Check your PHP version, contact your hosting provider (or update and restart PHP yourself if you manage your server), and keep a WAF in front of your shop if you can. Separately, if you are still running an end-of-life PHP or PrestaShop version, use this opportunity to plan your upgrade at your own pace.

To follow security news about the PrestaShop ecosystem, keep an eye on the [PrestaShop security advisories](https://github.com/PrestaShop/PrestaShop/security/advisories) and the [Friends of Presta security site](https://security.friendsofpresta.org/).

Thank you to the PHP Security Team and to the researchers who reported and coordinated the disclosure of these issues, giving the whole PHP ecosystem time to prepare.
