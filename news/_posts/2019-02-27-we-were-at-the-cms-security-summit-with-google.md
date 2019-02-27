---
layout: post
title:  "We were at the CMS Security Summit with Google"
subtitle: "Security is very important for PrestaShop"
date:   2019-02-27 15:45:00
authors: [ PierreRambaud ]
icon: icon-padlock
tags: [security]
---

PrestaShop and other open source CMSs are working together to improve the security of websites.

![CMS Security Summit banner](/assets/images/2019/02/security-summit-1.png)

## Winter is not coming, it is already here!

As a member of the Open Source community, a few weeks ago PrestaShop went to the coldest place on earth, even colder than Antarctica, even colder than Siberia: YES, we went to Chicago on January 30th 2019 (-40º C)

You’re all asking: “But what can we do on January in Chicago except eating Deep Dish pizza and drinking India Pale Ale? 

![CMS Security Summit dinner](/assets/images/2019/02/security-summit-2.jpg)

(Yes, it is pretty tasty!)

Well, there was a [CMS Security Summit](https://events.withgoogle.com/cms-security-summit-19/) organized by Google, to which Prestashop was kindly invited!

Google had the great idea to welcome the main CMS open source projects such as Joomla, Wordpress, Drupal and so on alongside other players of the CMS ecosystem (as SiteGround, Symfony and so on) to have a face-to-face meeting with security specialists.


## What we learned.

First of all, you should know that 55% of the top 10 million websites are built on CMS platforms, and this number keeps growing.

As more and more websites are based on CMS technologies, maintainers do their best to make templating ever more powerful, and add features that allow to change the page structure on the fly, for example, to add a custom field to a form. 

Since the DOM tree is exposed to the user, DOM content and user input must be effectively monitored in order to prevent [XSS attacks](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)).

Google has been fairly successful at fighting these attacks by relying on [Trusted Types](https://github.com/WICG/trusted-types), a set of typed objects that replace strings when representing HTML snippets, URLs, etc.

Compilation-time analysis on JavaScript code ensures that only these types are allowed to be used with various DOM APIs that can be exploited as DOM-based XSS sinks (el.innerHTML, location.href, ScriptElement.src and so on). 
Trusted Types are currently being used internally at Google, and will be built into browsers soon.

If we want to go further about [XSS attacks](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)), I suggest having a look at [Content-Security-Policy with Google](https://csp.withgoogle.com/docs/index.html) which describes it all. 

If you are already familiar with CSP you can check if you have a strong mitigation using the [CSP Evaluator](https://csp-evaluator.withgoogle.com/)

What do you think about this? Should we plan to integrate it in PrestaShop soon?


## Third-party components and integrity control

In most systems, vulnerabilities often come from additional modules or themes that are not part of the core platform codebase.

In the case of PrestaShop, like other CMSs, it is really hard to audit what users are doing with their shop in terms of security: they are able to add custom modules, dependencies, a lot of things that cannot be controlled and secured by project maintainers.

In the Prestashop Addons Marketplace security process, each submitted module is thoroughly reviewed by our fantastic team. Each payment module is also [pentested](https://www.owasp.org/index.php/Web_Application_Penetration_Testing), even the ones not developed by the PrestaShop team. 

The conclusion that human are error-prone is obvious: that is why PrestaShop invests in continually improving the automated [Module validator](https://validator.prestashop.com/). Other CMS are also considering  static code analysis tools like [scrutinizer](https://scrutinizer-ci.com/) or [snyk](https://snyk.io/). That is maybe something to add to our validation tools.

We are currently discussing about adding PHPStan and PHPQA to our modules, which are two really great tools to improve code quality.

Another improvement currently under consideration is to cryptographically sign modules or themes sold on the PrestaShop Marketplace, so that merchants can make sure they are legitimate and haven’t been modified by an attacker.


## Vulnerability disclosures & rewards

This is known, there is no Bug Bounty program for the PrestaShop project… yet!
But it can be a real issue:

- it can be hard to spot where contributors must go to report security issues
- some developers need rewards to be motivated to create a report

What kind of reward would you want? A tee-shirt? Money? Preston Plushies? Goodies?

Drupal is kind of the leader here: they have a Bug Bounty program, documentation about [How to report a security issue](https://www.drupal.org/security-team/report-issue) and a [CVE history](https://www.drupal.org/security). 
Drupal can be a good source of inspiration for PrestaShop here. 

Moreover, since the group that creates [PHP interoperability standards](https://www.php-fig.org) has reopened what they started for PSR-9 (Security Advisories) and PSR-10 (Security Reporting Process), it appears to be a good reason to take some time between two code reviews, think about a bug bounty program and write documentation about it.


## One click upgrade or autoupgrade?

The best way to have a secure system is to stay up-to-date.Many people don’t care about upgrades, but they don’t realize that security fixes need to be applied as fast as possible, or else their shop is at risk!
 
Seeing things exclusively through an economic prism can be misleading: yes, upgrading may cost you money now. But think about what could be lost if an intruder comes, injects an XSS and stoles your clients’ information, or adds a script which turns off your shop or deletes everything you had!

Well, how to update a CMS when a lot of modules or a custom theme are already installed? How to avoid breaking something? How to be sure that users and developers are following the best practices?

Should we add an option or a command for automatic update and would you be brave enough to enable it? Would you help us to test it and debug it?


## Tools and platform innovations

Security must be an important part of the whole development process. 

All developers must take in consideration what will happen with the data they are andling. A big issue is that most tools for detecting vulnerabilities are proprietary, so obviously they won't help developers to learn more about security by analyzing how they work.

As the community needs to be educated using tools, guides and documentation, it’s our duty as CMS maintainers to pave the way by creating a website, a platform or whatever, so that this information is freely available, 
A place where anyone can contribute and be a part of the open source security community.

About 30 people attended the summit in Chicago. Right after it, the Google team created a document summarizing what happened and a Google Group so that security folks can continue to discuss and share ideas! 

I would like to thank the Google team for their excellent initiative and all the work they put in for this event. The CMS ecosystem’s security is going to change!
