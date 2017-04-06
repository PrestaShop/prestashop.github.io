---
layout: post
title:  "Test the updated 1-Click Upgrade module!"
subtitle: "We heard you like upgrades, so we upgraded your upgrades"
date:   2017-03-27 09:10:11
authors: [xavierborderie]
icon: icon-upload
tags:
 - 1.7
 - 1.7.1.x
 - autoupgrade
---

After much work and hair-pulling, we finally did it: the 1-Click Upgrade module supports upgrading from 1.6 to 1.7.1.0. Are you ready to test it before the release?

![We heard you like upgrading!](/assets/images/2017/03/upgrade-module00-yo-we-heard-you-like-upgrading.png)

This is your chance to try your hand at the updated 1-Click Upgrade module! We’ve tested it in many configurations, but there’s nothing like community feedback!

[Download the update 1-Click upgrade module now!](http://www.prestashop.com/download/private/autoupgrade.zip){: .btn .btn-lg .btn-success}
{: .text-center}

### The story so far

Those of you who follow our Git history know this: the ‘autoupgrade’ project had not received serious attention for a long time when the team started cleaning up the code in November 2016. 

In order to prepare for the release of 1.7.1.0 and its patch versions, a lot of moving parts were fixed, much refactoring was done in order to improve the codebase, and a special 1.7 channel was added. 


### Upgrading to 1.7.1 gets easier

A lot of work was therefore done in order to upgrade between versions of PrestaShop 1.7, but nothing so far to upgrade from 1.6 to 1.7 in one click.

For there remained a fact: PrestaShop 1.7 is a major version, and thus upgrading from 1.6 is not easy. 
The theme has been completely rewritten or changed, modules have to be checked for compatibility (or replaced by equivalent modules), and a couple of major features have been pushed back for later release (such as the Stock Management feature, [currently expected for 1.7.2.0, in June](http://build.prestashop.com/news/announcing-our-2017-release-schedule/)).

All this cannot be magically checked and fixed by the module. While we wanted to ensure that those wanting to move from 1.5/1.6 to 1.7 could do so, we couldn’t make it appear like a simple click on a button would solve all of the merchant’s issue.

<div class="alert alert-note" role="alert">
The update 1-Click Upgrade module can only upgrade your store from 1.6 to v1.7.1.0 of PrestaShop. Versions 1.7.0.0 to 1.7.0.6 are skipped altogether, ensuring that you only get the best and latest 1.7 version.
</div>


### How we chose to update the 1.6 upgrade module

Upgrading from PrestaShop 1.6 to 1.7.1 switches your theme to the default theme (Classic), and disables all non-native modules.

The idea is to allow upgrading from 1.6 to 1.7.1, and at the same time insisting of the implications of such a move (theme, modules, stock management, etc.). While we wanted to improve the code, the most important part was reordering the information, in order to give as much context and warnings as possible.

A full rewrite for 1.7.1 was out of question, since the module had to remain compatible with PrestaShop 1.5/1.6. The interface is extremely old-school but we chose to work with and include new phrasings within the design constraints.

Also, in order discourage non-technical merchants to move to 1.7 with a single click, we changed the default setting so that the module targets only minor versions by default. If you really want to upgrade to 1.7 using the module, you have to select the Expert mode. This ensures that only the ones who upgrade to a major version are those who really mean it.


###  Step and validation forms

#### Upgrading to the right version

Graphically, the changes are minor as long as you remain in default (minor) mode.

![The interface for a minor upgrade](/assets/images/2017/03/upgrade-module01-minor.png)

Next, in the Expert Mode section, change the "Channel" setting to “Major release”, and click the "Save" button: now the real changes happen.

![The interface for a major upgrade](/assets/images/2017/03/upgrade-module02-majorNext.png)

As you can see, the whole interface cleans up: all the various informational blocks disappear, leaving only a green “Next” button. Click that button will make the blocks appear again, but the point is made: pay attention now.
Furthermore, most of the settings in the “Upgrade options” and “Backup options” block are grayed out: 

* Server performance is set at “Low” by default, but you can set it to high if you feel adventurous.
* Theme, module and email options are disabled, since they have become useless: by switching to 1.7.1.0, you understand that your store will be switched to the default theme (“Classic”), with its default email templates and all non-native modules disabled.
* Your database, images and files are always backed up (that being said, you should always double that with your own backup, for safety purpose).

Scroll to the bottom and click the “Upgrade to PrestaShop 1.7.1.0” button. The option blocks make way to a block full of checkboxes

#### Last chance to get fully ready

![Such block. Much checkboxes. Wow.](/assets/images/2017/03/upgrade-module03-block.png)

This block is purposefully blocking (pun intended): you cannot upgrade without checking all of its boxes. This further pushes those who upgrade to make sure that they really know what they are doing.
When all conditions are met, check the corresponding boxes. Only then can you click the “Switch to 1.7.1.0 for good” button.

#### The upgrade itself

The update is now triggered. Depending on your settings and server configuration, this can take several minutes: please do not reload the page!

![so many lines...](/assets/images/2017/03/upgrade-module04-upgrading.png)

This is your time to grab a cup of coffee/tea :)

#### Success!

After a few minutes, the upgrader will indicate whether everything has gone according to plan (green lines galore!), or if there was an issue (the upgrade log is here to help!).

![Everything's A-OK.](/assets/images/2017/03/upgrade-module05-finished.png)

We wish you a good many green lines! If not, that’s when the module’s “Revert” button shows its usefulness. At worst, you will have to use the backups for your files and your database...

Let’s assume the upgrade went as expected. Leave the module by clicking on the “Dashboard” link in PrestaShop's navigation menu. After logging in again, PrestaShop brings up the new 1.7 back office interface -- with a few kinks, because of usual CSS caching issues. Just press Ctrl-Shift-R to reload the page with fresh CSS files, and you should be good to go.

![Hello, good lookin’!](/assets/images/2017/03/upgrade-module06-dashboard.png)

#### Checking everything up

Now is the time to test your store:

* First, empty the server cache. Go to Advanced Parameters > Performance, and click on the “Clear cache” button at the top right of the screen.
* Next, go to your front office and navigate from page to page. Try buying a product or creating a customer account.
* Finally browse your catalog and settings in order to make sure that everything is as expected.
  * Pay attention to your permission, you may have to reconfigure them.
  * Have a look at your modules. You may also have to reconfigure them.
  * Work on customizing your store!

### Get ready!

The update 1-Click Upgrade module is ready for you to test! The download link we’re giving leads to a special version of the module -- because 1.7.1.0 is not ready yet :)

That being said, 1.7.1.0 will be available real soon, so if you wish to test this module, go ahead now!

Thank you for your feedback!
