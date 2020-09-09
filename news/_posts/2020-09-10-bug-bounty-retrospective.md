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

During months, we experimented a Bug Bounty Program with the [YesWeHack](https://yeswehack.com) interface. Here's the retrospective about why we did this, and what happened during this period.


## Private program

We never really know the security of our software before it has been tested by a lot of hunters.

PrestaShop is full of dependencies, with hundred of thousands lines of code, and for most of them exist since the first version. 

Using a public program directly would have been a too big risk for us, causing a huge charge of duplicated reports and creating frustration among hunters.

The benefit of the private program is to limit the number of hunters and manage the reporting flow. Because on each security issue, you need to take in consideration the time to understand, reproduce, fix, test by the QA Team, etc. 

It is a process which can seems long and painful but necessary to leave no room for doubt.


## Public program

After a few months of tests and an increasingly low number of reports, we put the program in public the July 23 and to our great surprise, hunters who participated to the private program helped us to fix a large majority of security issues. 

At the time of writing this article, only one report was valid.

The big aim of having a Bug Bounty Programm in public is to show to everyone and particulary our community that we trust our software, we know it is secured because it has been tested by a lof of hunters and will be continusly tested by new hunters.


## Some statistics

Opened in March, more than **70** hunters have been invited to the program.

Since, we received a total of **98** reports
 - Invalid: **4**
 - Out of Scope: **6**
 - Informative: **26**
 - Duplicate: **17**
 - Won't fix: **2**
 - Valid: **43**
 - CVSS Score average: **5.59**

These graphs are taking the whole period and the reason why we put on the program in public.
It takes in consideration only valid reports.

The graph below is a represation of the number of reports we received during the period.

[![Valid reports](/assets/images/2020/09/bug-bounty-all-valid-reports.png)](/assets/images/2020/09/bug-bounty-all-valid-reports.pn)g

Here is the represation of the CVSS3 Score results.

[![CVSS3 Score](/assets/images/2020/09/bug-bounty-all-valid-cvss.png)](/assets/images/2020/09/bug-bounty-all-valid-cvss.png)

List of main vulnerabilities.
[![Common vulnerabilities](/assets/images/2020/09/bug-bounty-all-valid-types.png)](/assets/images/2020/09/bug-bounty-all-valid-types.png)


## What's next

We have nothing to do except waiting for reports, we are really happy to use YesWeHack and the interface is really smooth, elegant and make the security reports easier to manage than the old security mailing list.

For next release, hunters will be notified automatically, so, we are waiting for you hunters!
