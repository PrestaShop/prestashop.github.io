---
layout: post
title:  "PrestaShop & GDPR"
subtitle: "PrestaShop actions to help you comply with GDPR"
date: 2018-04-16 16:00:00
authors: [ ColineGinestet, AntoineThomas ]
icon: icon-world
tags:
 - release
 - 1.5
 - 1.6
 - 1.7
---


As you are probably already aware, in a few weeks (May 25th of this year) the new european law on personal data protection will come into effect.

As an e-commerce software, our goal is to help merchants all around the world to sell their products while complying with legal regulations. This is why it is important for us to provide a tool which will allow your shop to become GDPR compliant.

Many are concerned about this new regulation (especially in view of possible financial penalties) and what PrestaShop plans to do about it. This article aims at providing answers to the most frequent questions we have received and sharing more details about our forthcoming actions.


## What is GDPR?

**The General Data Protection Regulation (GDPR)** which will come into effect on May 25th aims at unifying regulations related to data privacy policies in the European Union. This text reinforces people’s rights and imposes a new accountability logic on entities involved by requiring them to take the necessary, appropriate measures to ensure a suitable level of security when processing personal data.

GDPR is intended to apply to all processing of personal data, whether automated or manual. Processing of data is defined as an operation or set of operations carried out and applied to personal data or data sets (e.g. Collection, storage, modification, extraction, viewing, use, communication, destruction, etc.). 

Personal data comprises all information relating to a natural person and enabling that person to be directly or indirectly identified (E.g. full name, email address, IP address, telephone number, location data, consumer habits, etc.).

The main requirements of this law include:
<ul>
<li><b>For the merchants’ customers</b>
 <ul>
 <li>The right to access their personal data;</li>
 <li>The right to data portability;</li>
 <li>The right to obtain rectification and/or erasure of their personal data;</li>
 <li>The right to give and withdraw consent.</li>
 </ul></li>
<li><b>For the merchants</b>
 <ul>
 <li>The obligation to keep a record of processing activities (especially for access, consent and erasure).</li>
 </ul></li>
</ul>

For more information, you can read our GDPR white paper [in english](https://www.prestashop.com/en/system/files/filedepot/9/gdpr_whitepaper_prestashop_en.pdf) or [in french](https://www.prestashop.com/en/system/files/filedepot/9/rgpd_whitepaper_prestashop.pdf).


## Who is concerned?

Given the extent of these concepts and your e-commerce business, it is highly likely that you process personal data. Furthermore, the GDPR affects not only every european companies, but also companies located outside of Europe which collect european citizens’ personal data. Needless to say that no merchant can avoid it and store compliance upgrade is not an option. 

Modules which collect and stock personal data are also affected **as they must be updated to be GDPR compliant**, so module developers, this applies for you too!


## What is PrestaShop doing to help you comply with GDPR?

In addition to the work being done to ensure our own compliance, we are currently developing new features **to help both merchants and module developers** comply with the main regulation’s requirements listed above.

More precisely, a specific GDPR module will bring those new features, **available for 1.5, 1.6 and 1.7 versions**. It should have no impact on the core software and should be compatible with most themes (custom ones included).

Our objective for this module is to handle customers’ personal data collected by the PrestaShop software, native modules **and also** community modules installed on PrestaShop stores. As a module developer, it will require some work on your side, but our module will bring the necessary tools to make updates easier :) 
 
This module will provide new features for both store merchants and their customers and tools for modules’ developers to help them update their module for GDPR.

### As a community developer

The GDPR module will provide:
* new hooks that will enable you to automatically add a new checkbox and a specific text on the front-office of your module (if needed);
* a new hook to select and display the personal data being collected by your module. 

More information will be provided in a few days!

### As a e-commerce merchant

PrestaShop's official GDPR Module will allow merchants to:
<ol>
<li>Make it easier for their customers to give their consent by adding a consent confirmation checkbox to different forms of your store (account creation, newsletter subscription, etc.). You will be able to customize the consent request message for each checkbox and refer to the CMS page of your choice to give more information to your customers.</li>
<li>Easily manage your customers’ requests related to their personal data erasure and modification. If your customer requests to delete his account, you will be able to:
 <ul>
 <li>Download all of his invoices in one click (if he has any);</li>
 <li>Delete his customer account and his personal data in one click;</li>
 <li>If he has made one or several orders on your website in the past, they will be automatically transferred to a GDPR anonymous account. This will enable you to keep exact order results, reportings and accountability while deleting your customers’ personal data.</li>
 </ul></li>
<li>Keep track of the effective exercise of their right to access and manage their consent actions (obtainment and withdrawal) regarding marketing emails (newsletter).</li>
</ol>


### As a customer

Eventually, the module will also allow customers to: 
1. Manage access their personal data, as well as  the portability of it (through a automatic download of a csv file including all their personal data collected on the website) – directly via their customer account.
2. Contact you through your contact form for erasure / modification purposes.

<hr />

Our Official GDPR module - currently being developed by our team due for release at the beginning of May will be: 
* **Provided for free for all 1.7 versions**
* Available as a **paid plugin** on the Addons PrestaShop marketplace for **1.5 and 1.6 versions**.  
