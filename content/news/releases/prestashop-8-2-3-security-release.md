---
layout: post
title:  PrestaShop 8.2.3 is available
subtitle: Security patch for branch 8.2.x is available
date: 2025-09-01
authors: [ PrestaShop ]
image: /assets/images/2025/09/banner_8.2.3_1200x627.jpg
opengraph_image: /assets/images/2025/09/banner_8.2.3_1200x627.jpg
twitter_image: /assets/images/2025/09/banner_8.2.3_1024x512.jpg
tags:
- version
- patch
- releases
- security
- "8.2"
- "8.2.x"
---

PrestaShop 8.2.3 is a security‑driven patch release for the 8.2 branch. Its primary goal is to address an email enumeration vulnerability in the back office password reset feature. A handful of low-risk improvements and bug fixes that have already been validated have also been included.

![PrestaShop 8.2.3 is available!](/assets/images/2025/09/banner_8.2.3_1534x424.jpg)

## Why this release now?

PrestaShop 8.2 is in the extended support phase, so only security and critical fixes are shipped. Over the past days, we observed (via community reports and partners) automated probes abusing the back office password reset page to enumerate employee emails. This led us to plan a security release for branch `8.2.x`.

## Details of the vulnerability

An unauthenticated attacker could abuse the password reset page by crafting `id_employee` and `reset_token` parameters to discover which employee accounts exist (email enumeration). Exploitation requires the attacker to already know (or have guessed/discovered) your back office URL. Hiding or customizing this URL can reduce noise from opportunistic scans, but it must not be treated as a sufficient mitigation.

Update to 8.2.3 or apply the manual patch below. Full details are available in the official advisory: [GHSA-8xx5-h6m3-jr33](https://github.com/PrestaShop/PrestaShop/security/advisories/GHSA-8xx5-h6m3-jr33). 

**PrestaShop 9 is not affected.** 

## Update to PrestaShop 8.2.3

It is recommended to update to version 8.2.3 as soon as possible. The [Update Assistant](https://github.com/PrestaShop/autoupgrade/releases/) makes the update process mostly point-and-click: enable maintenance mode, run the update, review logs, test, and then reopen your store.

Since (as noted in [PrestaShop 8.2.x enters the extended support phase]({{< relref "/news/posts/2025/82x-extended-support-phase" >}})) the 8.2.x branch receives only security and critical fixes now. You should begin planning your move to PrestaShop 9 to gain new features and its strengthened security architecture.

If you encounter an issue that appears to be a core problem (not caused by custom modules, overrides, or themes), please [open a bug report](https://www.prestashop-project.org/get-involved/report-issues/) with clear reproduction steps.

## Download
{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.2.3" >}}Download PrestaShop 8.2.3 now!{{< /cta >}}

## Possible workarounds

Only updating to 8.2.3 (or applying the manual patch) fully fixes the issue. The steps below do not fix it, but they can lower the risk and reduce automated scan noise until you update:

- Restrict network access to the back office (VPN, IP allow‑list, reverse proxy).
- Add an extra HTTP authentication layer in front of the back office.
- Customize/obfuscate the back office URL.
- Add rate limiting or WAF rules for the password reset route and repeated requests with varying `id_employee`.
- Monitor logs for bursts of `reset_token` / `id_employee` parameter combinations.
- Enable 2FA for employee accounts (through a third-party module) to limit follow‑on impact.

Remember: these steps reduce risk but do not replace updating or fixing the underlying issue.

## PrestaShop 9

PrestaShop 9, built on a modern Symfony flow for authentication and password resets, is not affected by this issue. We encourage merchants to plan their migration to benefit from its hardened security architecture and ongoing feature development.

## Manual patch instructions (advanced users)

Upgrading to 8.2.3 is the safest approach, but if you cannot update immediately, you may patch manually:

**Details of the fix**

The patch ensures that:
1. Both `reset_token` and `id_employee` must be present.
2. The employee object must load successfully.
3. The stored valid reset token retrieved via `Employee::getValidResetPasswordToken()` must match the provided token.
4. Only then are the `reset_email`, `reset_token`, and `id_employee` values assigned to the template. Otherwise, nothing is revealed that confirms an association between an email and an employee.

In simplified form, the corrected code now resembles:

```php
$reset_token = Tools::getValue('reset_token');
$id_employee = (int) Tools::getValue('id_employee');

if ($reset_token && $id_employee) {
	$employee = new Employee($id_employee);
	if (Validate::isLoadedObject($employee)) {
		$valid_reset_token = $employee->getValidResetPasswordToken();
		if ($valid_reset_token !== false && $valid_reset_token === $reset_token) {
			$this->context->smarty->assign([
				'reset_token' => $reset_token,
				'id_employee' => $id_employee,
				'reset_email' => $employee->email,
			]);
		}
	}
}
```

### How to patch manually

1. Backup (files + database).
2. Open `controllers/admin/AdminLoginController.php`.
3. Find the block starting with `// For reset password feature` that assigns `id_employee` / `reset_email` before validating the token.
4. Replace that entire block with the validated code sequence shown earlier.
5. Test: request a password reset, use the emailed link, then try tampering with `id_employee` / `reset_token` to ensure no other email is revealed.
6. (Only if you use opcode or external caching layers) clear OPcache, Varnish, CDN, or reverse proxy caches. Clearing Smarty cache alone is not required for this change.

**If unsure, prefer a full update to 8.2.3.**

## Acknowledgments

We extend our sincere thanks to:
* Maxime Morel-Bailly for responsibly reporting the vulnerability.
* [@M0rgan01](https://github.com/M0rgan01) & [@matthieu-rolland](https://github.com/matthieu-rolland) for implementing the fix.
* OpenServis and TouchWeb for alerting us about ongoing waves of enumeration attempts in the wild.
* [@jolelievre](https://github.com/jolelievre) for the Distribution API Client improvement.
* [@Codencode](https://github.com/Codencode), [@touxten](https://github.com/touxten) for their bug fix contributions included in this release.

Your collaboration helps keep the ecosystem secure.
