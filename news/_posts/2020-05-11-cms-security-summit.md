---
layout: post
title:  "We were at Google's CMS Security Summit 2020"
subtitle: "PrestaShop continues working together with Google and the top CMS vendors for a safer web."
date:   2020-06-04 17:00:00
authors: [ PierreRambaud ]
image: /assets/images/theme/meta-logo-build.png
icon: icon-padlock
tags: [security]
---

[Once again](https://build.prestashop.com/news/we-were-at-the-cms-security-summit-with-google/), open source CMSs Security leads shared knowledge together last February at an event organized by Google in Munich.


## Lightning talks & Security technologies

After spending the first evening with stakeholders and meeting the newcomers over a few beers, the attendees and I spent two days at Google's Munich office and [Information Security Hub (ISH)](https://www.ish-muc.com/) to talk about what we have achieved since last year and about what's coming.
And of course we learned a lot about each other.

We had lightning talks as well as conferences about multiple technologies focusing on security and data privacy.

Similarly to last year, components like [Strict Content Security Policy](https://bit.ly/strict-csp), [Trusted Types](https://bit.ly/tt-spec) and [Scripting Policy](https://bit.ly/scripting-policy) were again discussed and brought to the forefront. 
[Cross-Origin Resource Policy (CORP)](https://fetch.spec.whatwg.org/#cross-origin-resource-policy-header), [Cross-Origin-Embedded-Policy](https://bit.ly/coep-spec) and [Securer Contexts](https://bit.ly/securer-contexts) are still strongly recommended to enhance isolation and mitigate side-channel attacks.

We discovered the interesting [OpenSK](https://github.com/google/OpenSK) as a [Tock OS](https://www.tockos.org/) application, an open-source security key to be used for multi-factor authentication.

We talked again about the potential of PSR-9 and PSR-10 PHP Standards Recommendations, but sadly no real progress has been done since last year.

[Snyk](https://snyk.io) gave us a talk about [Javascript Prototype Pollution](https://snyk.io/vuln/SNYK-JS-LODASH-450202) which reminds us that we must pay close attention to all dependencies we use, even if they are widely trusted.
It is mandatory to keep them as up-to-date as possible, even if this introduces [BC Breaks](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/#bc-breaks).

And lastly, we attended an interesting talk about the [Virus Total API](https://developers.virustotal.com/reference), which is used to cluster and classify potential malware on the web.


## Breakout Sessions

Breakout sessions were organised for the rest of the time, allowing participants to share ideas and experiences about many different themes related to the summit. Here's what we discussed about.

### Rapid Detection and prevention

Content Management Systems (CMSs) are used by most websites in the world and the number of attacks targeting them keep increasing every year.
Therefore, the ability to quickly detect attacks and to respond accordingly as swiftly as possible has been identified as a high priority for everyone.

On PrestaShop's side, the project maintainers have decided to greatly encourage communication and contribution regarding security issues. For this, we approached [YesWeHack](https://yeswehack.com/) to set up a [Bug Bounty program](https://en.wikipedia.org/wiki/Bug_bounty_program).
This will help us detect more security issues and respond more quickly through security releases.

### Automatic updates

It is a well-known fact that the main risk for a software is its age. Keeping it updated is mandatory as it will considerably reduce the risk of having unpatched security issues.

Even if at a given time there are no known issues, nobody can predict the future. [0-day](https://en.wikipedia.org/wiki/Zero-day_(computing)) vulnerabilities on PHP, Apache, Nginx and the like could be discovered at any time. Keeping your software up-to-date also enhances your chances of being compatible with the latest security systems, protocols, or encryption versions you might need in case you need to upgrade quickly to patch a security issue.

However, updating a CMS is not without risk, especially when you use custom themes or modules, modules that don't follow best practices or if [backward-incompatible changes](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/#bc-breaks) have been introduced in the latest versions.

We know that the [Autoupgrade module](https://github.com/PrestaShop/autoupgrade) has received little attention lately, and that this has had and impact in the PrestaShop ecosystem.
Everyone knows how important and necessary it is for the community.

During the summit, we spent a lot of time talking about the self upgrade process, and we will surely take time this year to make improvements for this topic!

### Disclose + Distribute + Query security bulletins in a standardized way?

At the beginning of the year, we experienced a [major security incident](https://build.prestashop.com/news/phpunit-security-issue-post-analysis/) which demonstrated that we needed to improve our security process.

For example, we wanted to report the incident as an official [CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures). The root cause was similar to [CVE-2017-9841](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9841) but with a slightly different context (involving CGI/FastCGI). We tried to reach out to [CVE authority](https://cve.mitre.org/) in order to either update the entry or create a new one. However, as of June 2020, we have not received an answer yet.

Since PSR-9 and PSR-10 are not yet enforced, PrestaShop maintainers decided to start using one of the latest GitHub features: [GitHub Advisories](https://help.github.com/en/github/managing-security-vulnerabilities/about-github-security-advisories). After many weeks of use, the maintainer team has been receiving positive feedback from the community about us being more transparent on security issues. A big up to the community!

That said, the Core team will never go as far as disclosing how to reproduce (and exploit) security issues. You will never find any scripts in advisories or in CVE declared by PrestaShop. This is to avoid making hackers' work easier.

Obviously this is not perfect, and it will never be. But we learn from the past, and we will do our best to listen to the community and improve how we work.

## PrestaShop release schedule will follow PHP ecosystem release schedule

PrestaShop 1.7.7 will be compatible with PHP 7.3. In order to achieve this, some dependencies PrestaShop relies on had to be upgraded. This change introduced a few BC Breaks, either because the upgraded dependency contains BC breaks or because it dropped compatibility with older PHP versions.

We expect PHP 7.4 to require new dependency upgrades and BC breaks, and so on with next PHP versions.
Moreover, the PHP core team plans to release versions more often in the next years.

This means, in the future, many operating systems and software vendors will have no other choice than to follow their tech ecosystem, or stay behind. PrestaShop is not an exception. Consequently, we expect future PrestaShop versions will have to be released more often and introduce breaking changes more often as well.

We hope that well-known developers from the PHP community, such as the maintainers of Composer, will attend the next summit so we can work together on this topic.

### Lighthouse score for security

[LightHouse](https://developers.google.com/web/tools/lighthouse) is an automated tool from Google that provides metrics which can be used to improve the quality of web pages. However, it is missing features on security area.

It was suggested that the first thing Google could do would be to integrate [security.txt](https://securitytxt.org/) or [securityheaders.io](https://securityheaders.io) in Chromium as to allow people to submit security reports directly from their browser as they browse the web.

Maybe even adding a JavaScript scanner inside Lighthouse, and show outdated libraries?

Whatever it is, Google is working on very interesting things for this year 2020 :)

## Other sessions

Unfortunately, we did not have enough time to attend all breakout sessions but there were also discussions around security tools, APIs, funding security improvements, static analysis and two-factor authentication.

## Thanks 

I would like to say thanks to Google for organizing the event and to all participants as well for being active and passionate about improving security.

Spending time with security folks has been very interesting. We all know we need to work together to make the web safer.
