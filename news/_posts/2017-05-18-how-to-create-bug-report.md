---
layout: post
title:  "How to create the best bug reports"
subtitle: "Three rules: up-to-date, reproducible, and detailed."
date:   2017-05-18 09:10:11
authors: [ xavierborderie ]
icon: icon-bug
tags:
- contribution
- forge
---

Every morning, the Product and QA team gather around a big screen, and review the new Forge tickets that were created since the day before. At the end of the meeting, all new tickets must be asserted, and if need be, placed into the hand of a team member.

Reviewing Forge ticket can be very brain-consuming: sometimes, report incompleteness can make for a need to ask for more info, thus slowing down. On the other hand, we sometimes get tickets that are a pleasure to work with. Here are their most common denominators.

<div class="alert alert-note" role="alert">
Quick summary:

<ul>
  <li>Always test on the latest version.</li>
  <li>Always provide step-by-step reproduction instructions.</li>
  <li>Always give details, such as server configuration</li>
  <li>Try to add pictures/video.</li>
  <li>Try to enable the Debug Mode.</li>
  <li>Try to check if the issue has not already been reported.</li>
  <li>Try to add log files.</li>
</ul>
</div>


### The basics

Apart from the obvious descriptive title, there is a trifecta of must-haves in a useful Forge ticket.

#### Up-to-date

Oftentimes, bug reporters provide us with information about what happens in their own situation, chiefly their current version of PrestaShop -- which is seldom the latest version.

This can make reviewing harder, because there is a number of things that could have changed between the reporter's version and the latest version of PrestaShop -- even fixing that very bug!

That is why it is always preferable for the reporter to make sure that the bug happens in the latest available version -- either [an official release](https://www.prestashop.com/en/download), or [the current in-development version](https://github.com/PrestaShop/PrestaShop/tree/develop).

Because not everyone can afford the time to upgrade their online shop to the latest version in hope that their issue is fixed, we encourage the more technical users to make tests on their local machines, using an Apache-PHP-MySQL/MariaDB stack such as [WampServer](http://www.wampserver.com/), [MAMP](https://www.mamp.info/en/), [XAMPP](https://www.apachefriends.org/) or any other.<br/>
Not only will it then be able to easily install the latest version, but it will also make it possible to test in the default conditions -- indeed, third-party themes and modules can create issues that the PrestaShop simply cannot fix.


#### Reproducible

Writing how to reproduce an issue time helps tremendously. Even better if its reproducible in a fresh install of PrestaShop.

Simply put, if the team cannot reproduce the issue on their side, there is little to no chance that the issue will be fixed. They cannot fix bugs blindly.<br/>
Often, issues that cannot be reproduced are either due to customization (theme, modules, override, etc.), or by local problems that are specific to the shop.

The best way to help the team to reproduce issues is to give precise step-by-step instructions. For instance:

<blockquote>
Steps to reproduce:
<ul>
  <li>Go to Sell > Catalog.</li>
  <li>Click "Create a product".</li>
  <li>Save without entering a title.</li>
</ul>

Expected result: an empty product is created and saved.

Actual result: the computer turns into a unicorn. THANK YOU!
</blockquote>

Thanks to these steps (which you should test more than once), you can lead the team on the way to reproduce the issue you found -- and thus on a quick fix!


#### Detailed

The title and description should bring the team half-way to understanding what is happening. While the reproduction steps are important, sometimes there are implied information that is also useful. This is where a detailed description comes in.

The idea of the description is not to tell a whole story of how you stumbled upon the issue. You should it keep it to the point: keep the information that is specific to the issue, remove that information this is specific to your situation. Your description should be general enough to apply to any other installation.

Details such as your software stack can be particularly useful:

* Precise version of PrestaShop ("1.6.1.13" is more helpful than "1.6").
* Server setup: 
  * Operating system.
  * Type and version of webserver (Apache, Nginx, IIS, other).
  * Version of PHP.
  * Version of MySQL/MariaDB.
  * Make sure you have emptied PrestaShop's cache!
* Browser setup:
  * Operating system.
  * Version of the browser.
  * Make sure you have emptied your browser's cache!
* Any error message.
  

### The bonuses

Follow the rules above, and your ticket will already be on the path to fix-finding.

There are a handful of nice things you can do to improve your ticket further.


#### Checking past issues

Of course you may think that you are the first on to stumble upon that wrong behavior -- and you may be right!

But quite often, a ticket already exists for that issue: you should search the Forge with a couple of keywords, in order to see if you're really first on this one.

If there is indeed already a ticket for your issue, you can still help! Simply comment the ticket with details that you think are pertinent -- or even better, improve the ticket by adding any of the suggestion from this page: steps to reproduce, test on updated version, etc.


#### Making one issue per ticket

It's tempting to finish your ticket with "Another issue I found is that (...)", because to you the two issues happen in the same context.

On the developer side, the two issues might be completely unrelated, and therefore following-up on any supplementary issue using a single Forge ticket is quite a hassle.

So, even if it takes you more time, please create one ticket per issue -- and only mention one issue per ticket :)


#### Adding logs

Sometimes you just don't know what's wrong: something's not happening, that's all.

That's where log data can be helpful. They keep track of what is happening, and allows to trace back to the moment when the issue happens.

There are several different log data that you can add as a file to your ticket:

* Server log:
  * Apache: /var/log/apache/apache_error.log
  * Nginx: /var/log/nginx/nginx_error.log
  * IIS: %SystemDrive%\inetpub\logs\LogFiles
* PHP error log:
  * Apache: /var/log/apache/php_error.log
  * Nginx: /var/log/php-fpm/default/error.log
  * IIS: %SystemDrive%\inetpub\logs\LogFiles
* Console log:
  * Firefox and Chrome: press Ctrl+Shit+J or Cmd+Shift+J.
  * Internet Explorer and Edge: press F12 then go to the Console tab.
  
Copy the content relevant to your issue (or to the time the issue appeared), and paste it into the ticket (or in a text file attached to the ticket).


#### Enabling Debug Mode + cache

PrestaShop has a debug mode, which can be used to see the non-obvious errors on your shop. For instance, in these situations:
 
* The browser displays a blank pages.
* The browser displays a 500 Internal Server Error.
* You cannot log into your dashboard, or access certain pages of the back office.

To turn on the Debug mode on PrestaShop 1.7, follow these steps:

* Got to Advanced Parameters > Performance
* In the Debug Mode section, set "Debug Mode" to "Yes".
* Click the "Save" button.
 
If you can't access your dashboard, you can still enable the Debug Move using an FTP client (for instance the free Filezilla tool) to edit the config/defines.inc.php file. Find the following line in the file:

`define('_PS_MODE_DEV_', false);`

... and change it to:

`define('_PS_MODE_DEV_', true);`

Finally, emptying the cache of PrestaShop can also be useful, because it ensures that your browser only displays newly-generated files instead of old cached ones. In PrestaShop 1.7, you can empty the cache here:

* Go to Advanced Parameters > Performance.
* Click on the "Clear Cache" button at the top right.
* You're done!

#### Providing screenshots

Most of the time, bugs are visual: whether a button is not displaying well, or a error message pops up, or you want to indicate the content of a form before a failed submission.

That's where screenshot come in very handy! Providing one or more screen captures right into the ticket's attached file can help visually spot and reproduce the issue, and can save a lot of time in understanding your words.


#### Providing a (short) video

If your issue is only triggered in a series of steps, it is great to list them textually, but it can also help to provide a video of these steps, so that we can reproduce your problem with certainty. 

To be perfectly useful:

* Keep it short. Less than a minute is best. Do not repeat your bug description; just follow your own step by step instructions.
* Do not talk too much. Accents and even languages other than French and English can be confusing.
* Prefer details to file size. A small screen size or blurry compression can prevent the team from having a clear view of your actions in the video.


#### Being patient

Thank you for reporting your issue! Please understand that it will not be fixed right away: you will have to wait at least for the next bugfix version to be released. 

Several new Forge tickets are created every day, and the team spends a lot of time building the developers' workload using these tickets. Depending on its asserted priority and the existing workload, your ticket can either go straight to the top (if your issue is considered blocking or critical), near the top (if it's a major or standard issue), or left for later consideration (if it's a minor or trivial issue).

Thank you for your patience, then!
