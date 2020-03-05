---
layout: post
title:  "Announcing our first Bug Bounty program"
subtitle: "It's time to make PrestaShop better and safer that it already is!"
date:   2020-03-11 08:00:00
authors: [ PierreRambaud, PrestaShop ]
icon: icon-chat
image: /assets/images/theme/meta-logo-build.png
tags: [bug, bounty, program, maintenance]
---

Protecting the business, data and privacy of PrestaShop's users is one of our top priorities. We build our software with this goal in mind.
That's why we decided to put our security to the test. To encourage the security community to help us, today we are announcing our first bug bounty program!

# Why this program

Bug bounties are used by many leading companies to improve the security of their products.
These programs provide an incentive for researchers to responsibly disclose software bugs and allow security teams to
leverage the external community to help keep users safe.

Cyber criminals from around the world are continuously finding new ways of breaking websites or stealing
personal information, even more so when they are related to e-commerce.

It invites White Hat Hacker to play with us and report issues before a "bad guy" messes up the PrestaShop open source project.

# What's in scope

First of all, keep in mind this bounty programm does not concern regular bugs, but only security flaws.
If you encounter any bug in PrestaShop not related to security, feel free to [create an issue in our public bug tracker](https://github.com/PrestaShop/PrestaShop/issues/new/choose).

Then, this bounty program covers code from our GitHub repository [PrestaShop/PrestaShop](https://github.com/PrestaShop/PrestaShop) plus all PrestaShop modules defined in the composer.json file.

We are particularity interested in Remote Code Execution, SQL Injections, Authentication bypass, and obviously XSS with demonstrable business impact.

Also, we consider non-qualitfying vulnerabilities for any [CVSS3](https://www.first.org/cvss/calculator/3.0) score lower than 4.0, unless it can be combined with other vulnerabilities to achieve a higher score.

Find more information about qualifying and non-qualifying vulnerabilities and of course everything about vulnerability disclosure on [PrestaShop's YesWeHack Public Program](https://yeswehack.com/programs/prestashop)!

Let the hunt begin!
