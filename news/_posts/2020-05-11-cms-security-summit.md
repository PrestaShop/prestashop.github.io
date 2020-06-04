---
layout: post
title:  "CMS Security Summit 2020 with Google"
subtitle: "PrestaShop and CMS work together with Google for a safer web"
date:   2020-06-04 17:00:00
authors: [ PierreRambaud ]
image: /assets/images/theme/meta-logo-build.png
icon: icon-padlock
tags: [security]
---

[Once again](https://build.prestashop.com/news/we-were-at-the-cms-security-summit-with-google/), open source CMSs Security leads shared knowledge together at an event organized by Google in 2020 in Munich.


# Lightning talks & Security technologies

After spending the first evening with stakeholders and meeting the newcomers over a few beers, we spent two days at Google's Munich office and [Information Security Hub (ISH)](https://www.ish-muc.com/) to talk about what we have achieved since last year and about what's coming.

And of course we learned a lot about each other.

We had lightning talks as well as conferences about multiple technologies focusing on security and data privacy.

Similarly to last year, components like [Strict Content Security Policy](https://bit.ly/strict-csp), [Trusted Types](https://bit.ly/tt-spec) and [Scripting Policy](https://bit.ly/scripting-policy) were again discussed and brought to the forefront.

[Cross-Origin Resource Policy (CORP)](https://fetch.spec.whatwg.org/#cross-origin-resource-policy-header), [Cross-Origin-Embedded-Policy](https://bit.ly/coep-spec) and [Securer Contexts](https://bit.ly/securer-contexts) are still strongly recommended to enhance isolation and mitigate side-channel attacks.

We discovered the interesting [OpenSK](https://github.com/google/OpenSK) as a [Tock OS](https://www.tockos.org/) application, an open-source security key to be used for multi-factor authentication.

We talked again about the potential of PSR-9 and PSR-10 PHP Standards Recommendations, but sadly no real progress has been done since last year.

[Snyk](https://snyk.io) gave us a talk about [Javascript Prototype Pollution](https://snyk.io/vuln/SNYK-JS-LODASH-450202) which reminds us that we must pay close attention to all dependencies we use, even if they are widely trusted.
It is mandatory to keep them as updated as possible even if this introduces [BC Breaks](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/#bc-breaks).

And lastly we attended an interesting talk about [Virus Total API](https://developers.virustotal.com/reference), an API used to cluster and classify potential malware on the web.


# Breakout Sessions

Breakout sessions were organised for the rest of the time, allowing participants to share ideas and experiences about many differents themes related to the summit.

## Rapid Detection and prevention

Content Management Systems are used by most websites in the world and the number of attacks keep increasing every year.

It has been identified as a high priority for everyone to be able to quickly detect attacks and act as swiftly as possible accordingly.

On PrestaShop's side, the open source project decided to greatly improve the communication about security issues and get closer to [YesWeHack](https://yeswehack.com/) to setup a Bug Bounty program.
By doing so, we will detect faster more security issues, which will allow us to provide a very fast security fix following the criticality of the issue.

## Automatic updates

It is a well known fact that the main risk for a software is its age. Keeping it updated is mandatory as it will considerably reduce the risk of having security issues.

Even if at a given time there are no known issues, nobody can predict the future. Something like a [0-day](https://en.wikipedia.org/wiki/Zero-day_(computing)) on PHP, Apache, Nginx could be found at any time. Keeping the software up-to-date also ensures it stays compatible with the latest security system softwares versions if you need to upgrade fast to patch a security issue.

However, updating a CMS is riskier when you use a custom theme, incompatible modules, modules not compliant with best practices or if [BC Breaks](https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/#bc-breaks) are introduced in latest versions, due to security reasons or performance gain.

We're not going to lie to each other, we've clearly been putting the autoupgrade module on the back, and that has impacted the PrestaShop project.
Everyone knows how important and necessary it is for the community.

During the summit, we spent a lot of time talking about the self upgrade process, and we will surely take time this year to make improvements for this topic!

## Disclose + Distribute + Query security bulletins in a standardized way?

At the beginning of the year, we had a major [security incident](https://build.prestashop.com/news/phpunit-security-issue-post-analysis/) which demonstrated that we need to improve our security process.

For example, we wanted to report the incident as an official CVE. The root cause was similar to [CVE-2017-9841](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9841) but slightly different with (with CGI/FastCGI context), so we tried to reach out to CVE authority [cve.mitre.org](https://cve.mitre.org/) in order to either update the entry or create a new one. We still have not received an answer.

PSR-9 and PSR-10 are not yet enforced, so PrestaShop maintainers decided to use one of the latest GitHub features: [GitHub Advisories](https://help.github.com/en/github/managing-security-vulnerabilities/about-github-security-advisories). After many weeks, we got positive feedbacks from the community about us being more transparent on security issues, thanks to this community!

However we will never go as far as disclosing how to reproduce (and exploit) security issues. You will never find any scripts in advisories or in CVE declared by PrestaShop. This is to avoid making hackers' work easier.

Obviously this is not perfect, and it will never be. But we learn from the past, and we will do our best to listen to the community and improve how we work.

## PrestaShop release schedule will follow PHP ecosystem release schedule

PrestaShop 1.7.7 will be compatible with PHP7.3. In order to achieve this, we had to update some dependencies we use in the software, which introduced some BC Breaks, either because the dependency upgrade contains BC break or because the dependency upgrade drops compatibility with old PHP versions.

We expect PHP7.4 to require new dependency upgrades and BC breaks, and so on with next PHP versions.
Moreover, the PHP core team plans to release versions more often in the next years.

This means, in the future, many operating systems and softwares will have no other choice than to follow them (or stay behind). PrestaShop is not an exception. Consequently we will have to release more often and drop more quickly compatibility with old PHP versions.

We hope that famous people from the PHP community, such as the maintainers of Composer, will attend the next summit so we can work together on this topic.

## Lighthouse score for security

[LightHouse](https://developers.google.com/web/tools/lighthouse) is a Google automated tool for improving the quality of web pages. But it is missing features on security area.
It was suggested that the first thing Google could do would be an integration of [security.txt](https://securitytxt.org/) or [securityheaders.io](https://securityheaders.io) and allow people to submit reports directly inside the browser.

Maybe even adding a JavaScript scanner inside it, and show outdated ones ?

Whatever it is, Google is working on very interesting things for this year 2020 :)

## Other sessions

Unfortunately, we did not have enough time to attend all breakout sessions but we also had discussions around security tools, API, funding security improvements, static analysis and two factor authentication.

# Thanks 

We would like to say thanks to Google for organizing the event and to all participants for being active and passionate about improving security.

Spending time with security folks has been very interesting, people know they need to work together to make the web safer.
