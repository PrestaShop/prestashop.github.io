---
layout: post
title:  "Fighting against spamming"
subtitle: "Don't play spam invaders"
date:   2018-03-16 09:10:11
authors: [ LouiseBonnard ]
icon: icon-shield
tags:
 - translation
 - community
---
 
Remember some Rocky fight scenes where Sylvester Stallone is beating the living daylights out of his opponents? Well, this is pretty close to the situation we are experiencing now, fighting against spammers.
 
We do hope you have not noticed because it would mean that this spamming wave spares you, how lucky! For the others, know that it happens because a stream of spammers is currently exploiting PrestaShop, among other platforms, to flood people under a mass of undesired emails.
 
In our case, the attacks take different ways to reach merchants. Here is the situation for both 1.6 and 1.7 versions.
 
 
## About the 1.6 version
 
### How?
 
For merchants based on the 1.6 version, spammers are exploiting the native module “Send to a Friend” which allows customers to send a product link to a friend. They are also abusing the contact form, which sends a copy of the contact message to a user-entered email address.
 
### Our answer
 
First, we have decided to retire the “Send to a friend” module. This module has not been made available for 1.7, nor has it received updates in a long time. We believe the effort needed to protect this module from spammers far surpasses the value it provides for merchants.

This means that this module won’t be available to download from the PrestaShop Addons marketplace starting today, nor will it be installed automatically after the upcoming release of PrestaShop 1.6.1.19 – which should be out next month.

**We strongly encourage all merchants to uninstall this module, as it exposes your shop to abuse from spammers**.
 
As for the contact form, PrestaShop 1.6.1.17 included a solution that mitigates the problem, but it may not be enough, depending on how stubborn the attacker is. In order to make this form less interesting for spammers, PrestaShop will no longer send a confirmation email to the address entered on the form, starting on the upcoming version 1.6.1.19. 

Either way, be aware that only a CAPTCHA will be able to fully protect your form from spammers.
 
 
## About the 1.7 version
 
### How?
 
There’s no “Send to a Friend” module for PrestaShop 1.7, so there is that. For merchants based on this major version, spammers are mainly abusing the contact form.

 
### Our answer
 
We are porting the mitigating features we added on PrestaShop 1.6.1.17 to the contact form on PrestaShop 1.7. In addition, we will be adding an option to let merchants decide whether they still want the contact form to send a confirmation message or not. By default, PrestaShop 1.7 won’t send confirmation messages anymore.

Keep in mind that in order to discourage spammers, if the merchant chooses to enable sending the confirmation message, the user will receive a generic confirmation message instead of the text he or she wrote in the form.

The goods news is that since this feature is handled by a native module, you won’t need to wait for 1.7.3.1 to get this new features. You simply need to update the Contact form module when it’s released in the next few days, and that’s it.

In addition, we are fixing a problem where this module couldn’t be disabled, and removing it produced an error.

Again, be aware that only a CAPTCHA can fully protect your form from spammers.

 
## About CAPTCHAs
 
CAPTCHA stands for Completely Automated Public Turing test to tell Computers and Humans Apart, we are pretty sure you all already know about it. It is a great solution to prevent from robot attacks and, obviously, it was the first thing we thought about.
 
But it turns out it is also a tool that could complicate the installing and setting process. Indeed, it either requires the merchant to configure third-party services, or install PHP native libraries that are not always available or easy to activate in the server.
 
For this reason, we choose to to leave you the choice to get a CAPTCHA for your store or not. Because it implies some configurations that not everybody will feel like doing it. You can find modules for that on our [Addons marketplace](https://addons.prestashop.com/fr/recherche?pab=1&search_query=captcha).


We are aware that this kind of unfortunate situation can affect your business and for that we make a point of guaranteeing the security of all the PrestaShop stores. We are deeply involved in solving this issue as it is our number one priority today. Be sure that it will soon be fixed!
