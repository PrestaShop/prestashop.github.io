---
layout: post
aliases: ["/news/fighting-against-spamming-again"]
title:  "Fighting against spamming - again!"
subtitle: "Don't play spam invaders"
date:   2019-04-25 09:10:11
authors: [ LouiseBonnard ]
icon: icon-shield
tags:
 - news
---

Remember the movie scene from Terminator when Arnold Swcharzenegger says "I’ll be back"? Well, this is pretty close to what spammers said last year after we prevented them from spamming our merchants’ contact forms (see article [here](http://build.prestashop.com/news/fighting-against-spamming)).

A lot of PrestaShop users approached us these past few days because they were experiencing spam issues. Indeed, a stream of spammers is currently exploiting PrestaShop in order to flood people under a mass of undesired emails, generated by the creation of fake new customer accounts. 

Before getting more into details on how this spamming works and what to do to prevent it, we would like to say a big thank you to our community, especially on PrestaShop forum, who has been really active and helpful on this issue.


## How are those spammers spamming?

All versions might be concerned, the spamming method affects all merchants the same way: spammers are exploiting the account creation forms, available on shop front-offices by replacing the first and/or last names with a malicious website URL. Here is how customer accounts look like on affected shops’ back offices:

![Spam illustration 1](/assets/images/2019/04/spam-emails1.png)

![Spam illustration 2](/assets/images/2019/04/spam-emails2.png)

Screenshots taken from the PrestaShop forum, thanks to those who shared them! 

It has 2 major impacts :

- Merchants are flooded with undesired emails (caused by account creation notifications), therefore it might not only negatively impact their shop’s performance but also make merchants be flagged as spammers by some email domains and block them for future email sendings.

- When real email addresses are used, it sends a confirmation email to a real user including the spammer’s URL in it. We think it can be used for fake advertisement, or phishing if users click on this link.


## What to do to prevent those spammers from spamming?

Well, the solution is the same for both 1.6 and 1.7 versions.

Because this attack is caused by massive account creations containing untrustworthy links, we took the decision to prevent people from writing anything that looks like a URL within the customer account creation form. And therefore it will be impossible to create a customer with an URL as the first name and/or the last name.

A patch is thus going to be released for versions 1.7.5.x and 1.6.1.x in order to mitigate the attack vector. Shops based on 1.6 will be able to retrieve this patch in the next 1.6.1.24 release - PR to come. As for PrestaShop 1.7, it will be included in the forthcoming 1.7.5.2 version. Have a look at the pull request [here](https://github.com/PrestaShop/PrestaShop/pull/13549) while waiting for the releases to upgrade your store.


## What to do next?

We suggest deleting all fake accounts in your back office. Here are three steps to follow before their deletion, just to make sure you won’t be bothered again: 

- remove spam accounts from your mailing lists
- go in the Customers page of your back office and select all these accounts
- finally, click on delete and check the option “I want my customers to be able to register again with the same email address. All data will be removed from the database.”

We strongly encourage all 1.6 and 1.7 merchants to upgrade to the latest version (1.7.5.2 and 1.6.1.24) as soon as it is released to benefit from this patch and prevent this kind of spam in the future. 

We also recommend merchants to get a CAPTCHA solution to be able to fully protect your forms from spammers. See below for further information.

 
## About CAPTCHAs
 
CAPTCHA stands for Completely Automated Public Turing test to tell Computers and Humans Apart, we are pretty sure you all already know about it. It is a great solution to protect your shop from robot attacks and, obviously, it was the first thing we thought about.

But it turns out it is also a tool that can be complicated to install and set up. Indeed, it either requires the merchant to configure third-party services or install PHP libraries that are not always available or easy to activate in the server.

For this reason, we choose to to leave you the choice to get a CAPTCHA for your store or not. Because it implies some configurations that not everybody will feel like doing it. You can find modules for that on our [Addons marketplace](https://addons.prestashop.com/fr/recherche?pab=1&search_query=captcha).


We are aware that this kind of unfortunate situation can affect your business and for that we make a point of guaranteeing the security of all the PrestaShop stores. We are deeply involved in solving this issue as it is our number one priority today. Be sure that it will soon be fixed!