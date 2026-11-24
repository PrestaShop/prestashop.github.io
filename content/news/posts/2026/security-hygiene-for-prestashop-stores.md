---
layout: post
title: "Security hygiene for your PrestaShop store: a practical checklist"
subtitle: "WAF, Back Office lockdown, 2FA, database isolation, and why you can stop changing your password every 90 days."
date: 2026-11-24
authors: [ marsaldev ]
icon: icon-shield
opengraph_image: /assets/images/theme/banner-security.jpg
twitter_image: /assets/images/theme/banner-security.jpg
tags:
 - security
 - tutorial
 - "9.x"
---

Earlier this month, we released [PrestaShop 9.2.1](/news/2026/prestashop-9-2-1-security-release/) and [8.2.9](/news/2026/prestashop-8-2-9-security-release/), security releases for vulnerabilities reported through coordinated disclosure. Of the eighteen fixed in 9.2.1, twelve could only be exploited with a Back Office account or a webservice key. In other words, how much damage a flaw can do depends a lot on how well everything around the software is protected.

Fixing vulnerabilities in PrestaShop is our job. Protecting the store around it is in the hands of merchants, agencies, and hosting providers, so we've gathered the practices we recommend most often. None of them needs a security team, most take less than an hour, and together they form layers: when one fails, the next one is still standing.

## 1. Keep everything up to date

This one comes first because it matters most. The vast majority of PrestaShop security advisories concern modules, and fixes only protect you once they are installed.

- **Update the core** to the latest patch release of your branch. Patch releases are drop-in and often contain security fixes. See [Keep PrestaShop up-to-date](https://devdocs.prestashop-project.org/9/basics/keeping-up-to-date/).
- **Update your modules and theme**, not only the core.
- **Remove modules you don't use.** A disabled module is still code on your server, and its files may still be reachable.
- **Never install "nulled" or pirated modules.** Backdoors in cracked modules are a classic, and they are designed to stay invisible.
- **Run a supported PHP version.** An end-of-life PHP no longer receives security fixes.
- **Follow the advisories:** the [PrestaShop security advisories on GitHub](https://github.com/PrestaShop/PrestaShop/security/advisories) for the core and native modules, and the [Friends of Presta security advisories](https://security.friendsofpresta.org/) (with an [RSS feed](https://security.friendsofpresta.org/feed.xml)) for the wider module ecosystem.

## 2. Put a WAF in front of your store

A Web Application Firewall filters malicious requests before they reach PrestaShop: SQL injection payloads, known exploit patterns, vulnerability scanners, credential stuffing bots. It won't replace updates, but it buys you time between the disclosure of a vulnerability and the moment you patch it.

You have several options:

- **A CDN/WAF service** such as Cloudflare (the free plan already provides a lot), or an equivalent offered by your hosting provider.
- **A self-hosted WAF**, such as ModSecurity (or a compatible engine) with the [OWASP Core Rule Set](https://coreruleset.org/).

A few tips if you go the CDN route:

- **Make sure the origin server only accepts traffic from the CDN.** If your server's IP is reachable directly, attackers can simply bypass the WAF. Restrict ports 80/443 to your provider's published IP ranges.
- **Add rate limiting on the Back Office login** and on the customer login and password recovery pages.
- **Start in "log" mode** for custom rules, check that nothing legitimate is blocked (payment callbacks, webhooks, your ERP), then enforce.

## 3. Lock down the Back Office

The Back Office is the keys to the kingdom: customer data, orders, payment configuration, and the ability to upload modules, which in practice means running code on your server. It deserves several layers.

### Use a non-guessable admin URL

The PrestaShop installer renames the `admin` folder with a random suffix, and that's a good thing: keep it that way. Don't rename it to `/admin`, `/backoffice`, `/administration`, or your shop name. A random URL won't stop a targeted attacker, but it removes you from the bulk of automated scans that hammer `/admin` all day long.

### Restrict it to known IP addresses

If your team works from fixed IP addresses (an office, a VPN), only allow those to reach the Back Office. With nginx:

```nginx
location ^~ /admin-a1b2c3d4/ {
    allow 203.0.113.10;   # office
    allow 198.51.100.0/24; # VPN
    deny all;

    # ...your usual PHP handling for the admin folder
}
```

With Apache, in the admin folder's `.htaccess`:

```apache
Require ip 203.0.113.10 198.51.100.0/24
```

If you use Cloudflare, you can achieve the same with a WAF rule or with Cloudflare Access (Zero Trust) in front of the admin path.

### Add an extra HTTP authentication layer

When IP restriction isn't practical (remote team, dynamic IPs), HTTP Basic Authentication on the admin folder adds a second, independent password prompt in front of the PrestaShop login. Bots that try leaked PrestaShop credentials never even reach the login form.

```nginx
location ^~ /admin-a1b2c3d4/ {
    auth_basic           "Restricted";
    auth_basic_user_file /etc/nginx/.htpasswd-admin;
    # ...
}
```

Generate the credentials file with `htpasswd -c /etc/nginx/.htpasswd-admin yourname`, and keep it **outside** the web root.

After enabling IP restriction or Basic Auth, test your integrations: some modules, payment providers, or external tools may call URLs inside the admin folder and will need an exception.

### Enable two-factor authentication

A password alone is no longer enough. Credential stuffing, phishing kits, and infostealer malware are routine, and a stolen password with no second factor means full access to the Back Office. Two-factor authentication (2FA) means a stolen password is not enough to log in.

Today, you can add 2FA to the Back Office with a module. And we have good news: **native Back Office 2FA is planned for PrestaShop 9.3**, thanks to a contribution from Paolo Cunti of [Codencode](https://github.com/Codencode), who has been working on it with the core team since the [initial discussion](https://github.com/PrestaShop/PrestaShop/discussions/40318). The [pull request](https://github.com/PrestaShop/PrestaShop/pull/40848), built on the Symfony `scheb/2fa` bundles, brings:

- one-time codes sent **by email**, or generated by an **authenticator app (TOTP)** set up by scanning a QR code;
- **trusted devices**, so you're not asked for a code on every login from your own computer;
- **backup codes** to recover access if you lose your phone;
- **rate limiting** on code verification and resend.

It's enabled shop-wide from **Advanced Parameters > Security**, then each employee activates it from their profile. The pull request is still under review, so if you'd like to see it land, testing it and leaving feedback is the best way to help. A big thank you to Paolo and Codencode for this contribution!

### Manage employees properly

- **One account per person.** No shared `admin@shop.com` account: you lose traceability and can't revoke access for one person.
- **Least privilege.** Use employee profiles and permissions: your content editor doesn't need access to modules or Advanced Parameters.
- **Offboard immediately.** Disable the account the day someone leaves, including agency and freelancer accounts once a project is over.
- **Protect the mailbox.** Password recovery (and email-based 2FA) goes through the employee's inbox. If that inbox has no 2FA, it's the weakest link.

Also have a look at the **Advanced Parameters > Security** page, which lets you configure the [password policy](https://docs.prestashop-project.org/v.8-documentation/user-guide/configuring-shop/advanced-parameters/security) and review or clear employee and customer sessions.

## 4. Stop forcing password changes every 90 days

This one might surprise you: **changing passwords on a fixed schedule doesn't make you safer.** It's a long-standing habit, and many security policies still require it, but the research and the official guidance have moved on.

When people are forced to change passwords often, they don't pick a strong new one: they pick a predictable variation of the old one (`Summer2026!` becomes `Autumn2026!`). Attackers know this, and so does the research:

- A [University of North Carolina study](https://doi.org/10.1145/1866307.1866328) of more than 7,700 accounts subject to mandatory expiration found that, knowing a user's previous password, an attacker could guess the new one in fewer than 5 attempts for 17% of accounts, and crack 41% of them offline within seconds, as [summarized by the FTC](https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2016/03/time-rethink-mandatory-password-changes).
- The FTC's then Chief Technologist, Lorrie Cranor, wrote in 2016 that "requiring regular password changes may actually do more harm than good in some cases" ([Time to rethink mandatory password changes](https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2016/03/time-rethink-mandatory-password-changes)).
- The UK's National Cyber Security Centre: "The NCSC now recommend organisations do not force regular password expiry" ([The problems with forcing regular password expiry](https://www.ncsc.gov.uk/blog-post/problems-forcing-regular-password-expiry)).
- Microsoft removed password expiration from its Windows security baseline in 2019, calling periodic expiration "an ancient and obsolete mitigation of very low value" ([Security baseline for Windows 10 v1903](https://learn.microsoft.com/en-us/archive/blogs/secguide/security-baseline-final-for-windows-10-v1903-and-windows-server-v1903)).
- And the reference standard, [NIST SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html) (revision 4, 2025), is now explicit: "Verifiers and CSPs SHALL NOT require subscribers to change passwords periodically. However, verifiers SHALL force a change if there is evidence that the authenticator has been compromised."

So what should you do instead?

- **Use long, unique passwords**, one per service, stored in a **password manager**. Uniqueness is what protects you when *another* site gets breached.
- **Enable 2FA** wherever you can (see above).
- **Change a password immediately when there's a reason to:** a breach, a phishing click, malware on a laptop, someone leaving the team.
- **Check against known breaches**, for example with [Have I Been Pwned](https://haveibeenpwned.com/Passwords).
- **Rely on the built-in password policy.** Since PrestaShop 8, password strength is evaluated with [zxcvbn](https://devdocs.prestashop-project.org/9/modules/core-updates/new-password-policy/), which estimates how hard a password is to guess, rather than just checking for "one uppercase, one digit, one symbol".

## 5. Isolate the database

### Use a custom table prefix

PrestaShop lets you choose the table prefix at installation, and the default is `ps_`. Many automated SQL injection payloads blindly target `ps_employee` or `ps_customer`. A custom prefix (for example `k7x_`) won't fix an injection vulnerability, but it can turn a ready-made, copy-paste exploit into one that fails. It costs nothing at install time, so pick one.

### Never expose the database to the internet

Your database should only accept connections from your web server.

- If MySQL/MariaDB runs on the same machine, bind it to localhost (`bind-address = 127.0.0.1`).
- If it runs on a separate server, use a private network and a firewall rule that only allows the web server's IP on port 3306.
- Don't leave **phpMyAdmin** or Adminer publicly reachable. If you need one, put it behind a VPN, IP restriction, or at least Basic Auth.
- Give PrestaShop a **dedicated database user** with privileges only on its own schema, never `root`.

## 6. Harden the server and the files

- **HTTPS everywhere**, with HSTS once you're sure everything works over HTTPS.
- **Disable debug mode in production** (`_PS_MODE_DEV_` set to `false`). Error messages and stack traces leak paths, versions, and sometimes credentials.
- **Remove the `install` folder** after installation, and don't leave `.git`, `.env`, SQL dumps, or `backup.zip` files in the web root. Scanners look for exactly those.
- **Use SFTP or SSH with keys**, not plain FTP.
- **Apply sane file permissions:** the web server should not be able to write where it doesn't need to, and PHP execution should be blocked in upload folders.
- **Protect your staging and preprod environments** too (Basic Auth, `noindex`), and avoid copying real customer data into them without anonymizing it.

## 7. Back up, and watch

- **Back up files and database daily**, keep copies **off the server**, and follow the 3-2-1 rule (3 copies, 2 media, 1 off-site). If an attacker gets on your server, backups stored on the same server can be lost too.
- **Test a restore.** A backup you have never restored is a hope, not a backup.
- **Monitor file changes**, especially on checkout and payment templates and JavaScript. Card skimmers usually live there, and they are invisible to customers.
- **Keep and read your logs:** Back Office logins, WAF events, unusual admin actions.

## The checklist

- [ ] Core, modules, theme, and PHP up to date; unused modules removed
- [ ] Subscribed to PrestaShop and Friends of Presta security advisories
- [ ] WAF in front of the store, origin not reachable directly
- [ ] Back Office on a random URL, restricted by IP and/or Basic Auth
- [ ] 2FA on the Back Office (and on the mailboxes behind it)
- [ ] One account per employee, least-privilege profiles, prompt offboarding
- [ ] Long, unique passwords in a password manager, changed on compromise, not on a calendar
- [ ] Custom database table prefix, database not reachable from the internet, dedicated DB user
- [ ] HTTPS, debug mode off, no leftover install folder, dumps, or `.git` in the web root
- [ ] Off-site backups, tested restore, file change monitoring

## Found a vulnerability?

If you discover a security issue in PrestaShop or one of its native modules, please don't open a public issue. Report it privately by following the [PrestaShop security policy](https://github.com/PrestaShop/PrestaShop/security/policy).

Security is not a one-time setup, it's a habit. Pick two or three items from the list this week, and keep going from there. If you have other tips that work well for your stores, share them with the community!
