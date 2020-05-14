---
layout: post
title:  "CMS Security Summit with Google"
subtitle: "Security is very important for PrestaShop"
date:   2020-05-14 17:00:00
authors: [ PierreRambaud ]
icon: icon-padlock
tags: [security]
---

[Once again](https://build.prestashop.com/news/we-were-at-the-cms-security-summit-with-google/), open source CMSs Security leads shared knowledge together at an event organized by Google in Munich.

# Lightning talks & Security technologies

After spending the first evening with stakeholders and meeting the newcomers over a few beers, we spent two days at Google Munich office and [Information Security Hub (ISH)](https://www.ish-muc.com/) to speak about what we did since the last years and talk about what's next.
And of course learnt about each others.


We had lightning talks as well as conferences about multiple technologies focusing on security and data privacy.

Similarly to last year, components like [Strict Content Security Policy](https://bit.ly/strict-csp), [Trusted Types](https://bit.ly/tt-spec) and [Scripting Policy](https://bit.ly/scripting-policy) are again discussed and brought to the forefront.

[Cross-Origin Resource Policy (CORP)](https://fetch.spec.whatwg.org/#cross-origin-resource-policy-header), [Cross-Origin-Embedded-Policy](https://bit.ly/coep-spec) and [Securer Contexts](https://bit.ly/securer-contexts) are strongly recommended to enhance isolation and mitigate side-channel attacks.

We also discover the interesting [OpenSK](https://github.com/google/OpenSK) as a [Tock OS](https://www.tockos.org/) application, an open-source security key to be used for multi-factor authentication.

We talked again about the potential of PSR-9 and PSR-10 PHP Standards Recommendations, but sadly no real progress has been done since last year.

[Snyk](https://snyk.io) gave us a talk about [Javascript Prototype Pollution](https://snyk.io/vuln/SNYK-JS-LODASH-450202) which reminds us that we must pay close attention about all dependencies we use, even if they are widely trusted.
It is mandatory to update them as soon as possible even if this introduces [BC Breaks](bc-breaks).

And lastly and interesting talk about [Virus Total API](https://developers.virustotal.com/reference) to cluster and classify potential malware on the web.


# Breakout Sessions

The rest of the time was used for breakout sessions, allowing participants to share ideas, experiences around many differents themes defined before the summit.

## Rapid Detection and prevention

Content Management Systems are used by the majority of websites in the world and the number of attacks keep increasing every years.
It has been identified as a high priority for everyone to be able to quickly detect attacks and act as fast as possible accordingly.

On the PrestaShop side, the open source project decided to greatly improve the communication around security issues and get closer to (YesWeHack)[https://yeswehack.com/] for the implementation of a Bug Bounty program.
By doing so, we will detect security issues easier, faster and provide a security fix as fast as possible regarding the criticality of the issue.


## Automatic updates

As everyone already know, the main risk for a software is its age, keeping it updated is mandatory and considerably reduce the risk of having security issues.
Even if you think at a given time there are no issues, nobody and nothing can predict the future. Something like a [0-day](https://en.wikipedia.org/wiki/Zero-day_(computing)) on PHP, Apache, Nginx could be found at any time...
Keeping the software up-to-date allows you to be sure it stays compatible with latest secured system softwares versions.

However, updating a CMS is riskier when you use a custom theme, incompatible modules, modules not compliant with best practices or if [BC Breaks](bc-breaks) are introduced in latest versions due to security reasons or performance gain.

We're not going to lie to each other, we've clearly putting the autoupgrade module on the back, and that hurts us.
Everyone know how important and necessary it is for the community.

We spent a lot of time during the summit talking about the self upgrade process, sure we will took time this year improving this module!

## Disclose + Distribute + Query security bulletins in a standardized way?

We paid the price at the beginning of the year, during weeks we sent and re sent emails to [cve.mitre.org](https://cve.mitre.org/) hoping they will update the [CVE-2017-9841](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9841) about the PHPUnit issue in order to add the CGI/FastCGI context. We are still waiting...

PSR-9 and PSR-10 are always on the side, this is the reason why the open source project decided to use and follow [GitHub Advisories](https://help.github.com/en/github/managing-security-vulnerabilities/about-github-security-advisories), and after weeks of usage, we got positive feedbacks from the community about we being more transparent on security issues.

However we will never go as far as disclosing how to reproduce (and exploit) security issues. You will never find any scripts in advisories or in CVE declared by PrestaShop. This is to avoid making hackers' work easier.

Obviously this is not perfect, and it will never be. But we learn from the past, and we will do our best to listen to the community and improve how we work.

## PrestaShop release schedule will follow PHP ecosystem release schedule

PrestaShop 1.7.7 will be compatible with PHP7.3. In order to achieve this, we had to update some dependencies we use in the software, which introduced some [BC Breaks](bc-breaks), either because the dependency upgrade contains BC break or because the dependency upgrade drops compatibility with old PHP versions.

We expect PHP7.4 to require new dependency upgrades and BC breaks, and so on with next PHP versions.
Moreover, PHP core team plan to release versions more often in the next years. This means, in the future, many operating systems and software will have no choice than follow them (or stay behind). PrestaShop is no exception. Consequently we will have to release more often and drop more quickly compatibility with old PHP versions. 
We hope that famous people from the PHP community, such as the maintainers of Composer, will attend the next summit.

## Lighthouse score for security

[LightHouse](https://developers.google.com/web/tools/lighthouse) is an automated tool for improving the quality of web pages. But it is missing features on security area.
It was suggested that the first thing that Google could do would be an integration of [security.txt](https://securitytxt.org/) or [securityheaders.io](https://securityheaders.io) and allow people to submit report directly inside the browser.
But why not adding a JavaScript scanner inside it too, and show outdated one.
Whatever it is, Google is working on very interesting things for this year 2020 :)


## Other sessions

Unfortunately, we did not have enough time to attend all breakout sessions but we also had discussions around security tools, API, funding security improvements, static analysis and two factor authentication.

# Thanks 

We would like to say thanks to Google for organizing the event and to all participants for being active and passionate about improving security.
Spending time with security folks has been very interesting, people know they need each other to go further.


[bc-breaks]: https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/#bc-breaks
