---
layout: post
title:  "Bug Bounty Program, the retrospective"
subtitle: "When hunters make your business safer!"
date:   2020-09-10 09:00:00
authors: [ PierreRambaud, PrestaShop ]
icon: icon-chat
image: /assets/images/2020/09/ywhbanner.jpg
tags: [bug, bounty, program, maintenance]
---

For several months, we experimented a Bug Bounty Program with the [YesWeHack](https://yeswehack.com) platform. Here is a retrospective, explaining why we did it, and what happened during this period.


## Private program

The security of software cannot be assessed unless it is tested by a lot of hunters.

PrestaShop relies on a lot of dependencies, with hundred of thousands lines of code, and this has been true since the very first versions. 

We considered that publishing a public program, available for all, in the first place was risky as it could bring a huge volume of duplicated reports and create frustration among hunters. That is why we chose a private program first.

The benefit of the private program is to limit the number of hunters and manage the reporting flow. For each reported security issue, resources must be dedicated to understand it, reproduce it, build a patch, test the patch by the QA Team, etc. This can be quite expensive, so it is important to be able to adjust how many issues are reported thanks to the private program settings.

The process can appear quite slow and boring but it is nevertheless necessary to leave no room for doubt.


## Public program

After a few months running this private program, we noticed the number of reports had decreased significantly. We finally released the program to the public on the 23rd of July 2020.

We thought that the public opening would bring in a huge volume of new reports, but this did not happen to our great surprise. It seems the hunters who participated to the private program helped us fix a large majority of security issues.

At the time we write this article, only one report submitted after the opening of the program to the public has been validated.

The big aim of having a Bug Bounty Program in public is to show everyone, and particularly our community, that our software can be trusted. We know it is secured because it has been tested by dozens of hunters and will be continuously tested by new hunters.


## Some statistics

At the opening in March, more than **70** hunters were invited to the program.

Since then, we received a total of **98** reports
 - Invalid: **4**
 - Out of Scope: **6**
 - Informative: **26**
 - Duplicate: **17**
 - Won't fix: **2**
 - Valid: **43**
 - CVSS Score average: **5.59**

The following graphs cover the full period and highlight the reason why we decided to open the program to the public.
Only valid reports are considered.

The graph below is a representation of the number of reports we received during the period.

[![Valid reports](/assets/images/2020/09/bug-bounty-all-valid-reports.png)](/assets/images/2020/09/bug-bounty-all-valid-reports.pn)g

Here is the representation of the CVSS3 Score results.

[![CVSS3 Score](/assets/images/2020/09/bug-bounty-all-valid-cvss.png)](/assets/images/2020/09/bug-bounty-all-valid-cvss.png)

List of main vulnerabilities.

[![Common vulnerabilities](/assets/images/2020/09/bug-bounty-all-valid-types.png)](/assets/images/2020/09/bug-bounty-all-valid-types.png)


## What's next?

There is no plan to modify the program in the short term. For now, the Security team of PrestaShop continue to examine incoming bug reports with dedication. We are quite happy to use YesWeHack and the platform is really smooth, elegant and make the security reports easier to manage than our old security mailing list.

For next release, hunters will be notified automatically, so we are waiting for you hunters on [YesWeHack platform](https://yeswehack.com/programs/prestashop)!
