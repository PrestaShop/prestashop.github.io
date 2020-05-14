---
layout: post
title:  "CMS Security Summit with Google"
subtitle: "Security is very important for PrestaShop"
date:   2020-05-14 17:00:00
authors: [ PierreRambaud ]
icon: icon-padlock
tags: [security]
---

[Once again](https://build.prestashop.com/news/we-were-at-the-cms-security-summit-with-google/), open source CMSs Security leads shared knowledge together to an event organized by Google in Munich.

# Lightingtalks & Security technologies

After spending the first evening with stakeholders and meeting the newcomers over a few beers, we spent two days at Google Munich office and [Information Security Hub (ISH)](https://www.ish-muc.com/) to speak about what we did since the last years and talk about what's next.
And of course learnt about each others.


We had ligthingtalks as well as conferences about different technologies around the security and data privacy.

As the last year, components like [Strict Content Security Policy](https://bit.ly/strict-csp), [Trusted Types](https://bit.ly/tt-spec) and [Scripting Policy](https://bit.ly/scripting-policy) are again discussed and brought to the forefront.

[Cross-Origin Resource Policy (CORP)](https://fetch.spec.whatwg.org/#cross-origin-resource-policy-header), [Cross-Origin-Embedded-Policy](https://bit.ly/coep-spec) and [Securer Contexts](https://bit.ly/securer-contexts) to enhance isolation and mitigate side-channel attacks.

We also discover the interesting [OpenSK](https://github.com/google/OpenSK) as a [Tock OS](https://www.tockos.org/) application, an open-source security key to be used for multi-factor authentication.

We talked again about the potential of PSR-9 and PSR-10 PHP Standards Recommendations, but since the last year, nothing really moved which is a little sad.

[Snyk](https://snyk.io) gave us a talk about [Javascript Prototype Pollution](https://snyk.io/vuln/SNYK-JS-LODASH-450202) which reminds us that we must pay attention about dependencies we used, even if they are famous.
It's mandatory to update them as soon as possible even this results in [BC Breaks](bc-breaks).

And to finish and interresting talk about [Virus Total API](https://developers.virustotal.com/reference) to cluster and classify potential malware on the web.


# Breakout Sessions

The rest of the time was used for breakout sessions, allowing participants to share ideas, experiences around many differents themes defined before the summit.

## Rapid Detection and prevention

Content Management Systems are used by the majority of websites in the world and the number of attacks are still increased every years.
This has been identified as a priority for everyone to be able to quickly detect attacks and act as fast as possible accordingly.

On the PrestaShop side, the open source project decided to greatly improve the communication around security issues and get closer to (YesWeHack)[https://yeswehack.com/] for the implementation of a Bug Bounty program.
By doing so, we will detect security issues easier, faster and provide a security fix as fast as possible regarding the criticiy of the issue.


## Automatic updates

As everyone already know, the principal risk for a software is its age, keeping it updated is mandatory and considerably reduce the risk of having security issues.
Even if you think at a T time there are no problems, nobody and nothing can predict the future, a 0 day on PHP, Apache, Nginx ...
By updating the software you're sure it's compatible with latest system softwares versions.

However, updating a CMS is more risky when you have custom theme, uncompatible modules, modules not following good practices or if [BC Breaks](bc-breaks) are introduced due to security reasons or performance gain.

We're not going to lie to each other, we've clearly putting the autoupgrade module on the back, and that hurts us.
Everyone know how important and necessary it is for the community.

We spent a lot of time during the summit talking about the self upgrade process, sure we will took time this year improving this module!

## Disclose + Distribute + Query security bulletins in a standardized way?

We paid the price at the beginning of the year, during weeks we sent and re sent emails to [cve.mitre.org](https://cve.mitre.org/) hoping they will update the [CVE-2017-9841](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9841) about the PHPUnit issue in order to add the CGI/FastCGI context. We are still waiting...

PSR-9 and PSR-10 are always on the side, this is the reason why the open source project decided to use and follow [GitHub Advisories](https://help.github.com/en/github/managing-security-vulnerabilities/about-github-security-advisories), and after weeks of usage, people look happy to see we are more transparent about security issues.

But keep in mind we will never disclose how to reproduce security issues, you will never find any scripts in advisories or in CVE declared by PrestaShop, for your own goods.

Of course it's not perfect, and we will never be. But we learn from the past, and we will do our best to listen the community and improve how we work.

## Release window coordination

To be compatible with PHP 7.3, we had no other choice than updating our dependencies, adding [BC Breaks](bc-breaks), etc. And we will certainly do the same for PHP 7.4 and so on.
Moreover, PHP planned to release versions more often, which mean, in the future, many operating systems will have no choice than follow them, and PrestaShop too.
We hope having the PHP community, Composer, and others famous people to the next summit.

## Lighthouse score for security

[LightHouse](https://developers.google.com/web/tools/lighthouse) is an automated tool for improving the quality of web pages. But something is missing around the security.
The first thing can be an integration of [security.txt](https://securitytxt.org/) or [securityheaders.io](https://securityheaders.io) and allow people to submit report directly inside the browser.
But why not adding a JavaScript scanner inside it too, and show outdated one.
Whatever, Google prepare good things for this year 2020 :)


## Other sessions

Unfortunately, we don't have time to spend on all breakout sessions but we also had discussions around security tools, API, funding securituy improvements, static analysis and two factor authentication during breakout sessions. 

# Thanks 

We would like to say thanks to Google for organizing the event and to all participants for being active and passionate about improving security.
Spending time with security folks has been very interesting, people know they need each other to go further.


[bc-breaks]: https://devdocs.prestashop.com/1.7/contribute/contribution-guidelines/#bc-breaks
