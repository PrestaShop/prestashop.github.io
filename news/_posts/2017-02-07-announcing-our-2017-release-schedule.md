---
layout: post
title:  "Announcing our 2017 release schedule"
subtitle: "What to expect, and when to expect it"
date: 2017-02-07 09:10:11
author: xavierborderie
icon: icon-world
tags:
 - release
 - 1.6
 - 1.7
---

Today we are shining a light on a information that the community has long requested: our release calendar for the next versions of PrestaShop 1.7 and 1.6!


## TL;DR

In short: **we intend to release 4 minor versions of PrestaShop 1.7 in 2017, and monthly patch versions of both 1.7 and 1.6**.

When, you ask? Here’s a handy table:

![Prestashop 2017 release schedule](/assets/images/2017/01/2017-release-schedule.jpg)


Now, for the longer part of the article...

## The current release cycle

Keen readers of the Build devblog are aware that the last few releases have been dedicated to fixing issues and stabilizing both major versions of PrestaShop:

* [PrestaShop 1.7.0.0 was released on November 7th, 2016](http://build.prestashop.com/news/prestashop-1-7-0-0-released/), and has since received 4 patch versions -- with the 5th coming very soon!
* PrestaShop 1.6 is in maintenance mode, and 5 patch versions have been released since September -- with 1.6.1.12 coming soon too!

Hence, we've been roughly having 1 patch release per month for each supported version of PrestaShop. Because those releases are light, they make for easy upgrades, and thus safer merchants.  
Regularity is key: we want our community to know that they can expect monthly improvements to their chosen version -- with the exceptional additional patch release in case of a blocking issue or a security fix, of course.


## Our plan for 2017

As written above, we've been releasing patch releases for both supported version of PrestaShop roughly every month. We plan on keeping that release schedule for patch versions: one each month for both 1.7 and 1.6.

As for when to expect minor releases (1.7.1.0, 1.7.2.0, etc.), here's how we are planning to work things out:

* We want to have regular minor releases for 1.7.
* The Core team has been following the [Scrum](https://www.scrumalliance.org/why-scrum) ["Sprint" methodoloy](https://en.wikipedia.org/wiki/Scrum_(software_development)#Workflow) for several months now, with each sprint lasting two weeks. If you don't know what Scrum or a sprint are, read up! :)
* Our experience shows that it takes roughly 20 weeks from building the backlog to delivering QA results.

<div class="alert alert-info" role="alert">
<b>How we came up with 20 weeks</b>

<p>It takes two sprints to <a href="http://www.scrum-institute.org/The_Scrum_Product_Backlog.php">build the work backlog</a> for a minor release, roughly six sprints to have those tasks developed and tested, and we are planning on two sprints after code freeze in order to have a proper QA process. One final sprint is dedicated to the release itself (packaging, final checks, Addons updates, etc.).</p>

<p>Count it up: that's 10 sprints from building the backlog to the end of QA.<br/>
Take your TI-81 out: that’s 20 weeks to have a minor version of PrestaShop, from planning to general release.</p>
</div>

Thanks to parallel work (backlog for 1.7.3.0 being prepared while 1.7.2.0 is being coded and 1.7.1.0 is going through QA), we think we can have a minor release of v1.7 every 6 sprints -- which means one release every 12 weeks, and therefore 4 minor releases of 1.7 in 2017.

Now you see where we stand. With these metrics, we were able to establish a release calendar for the whole year to come. While we cannot give precise release dates yet, the table that opens this article shows you our intents.

A few notes:

* All these dates are estimates. There are not set in stone, and may change depending on ongoing developments. 
* There can be more than 2 patch releases for each 1.7 minor release. Indeed, should a pressing issue arise (such as an urgent issue or a security fix), we would of course build another patch version, released as soon as the fix is in place.
* While there is no mention of a possible v1.6.2.0, keep in mind that we are still open to a minor 1.6 version, should excellent (and 1.7-ported) community features justify it.


## Organization

All of this we can call an industrialization of our releases. Release often, fix issues as soon as possible, and bring new features on a regular basis.

The Core and Product team comprises more than 20 people dedicated to improving both 1.7 and 1.6, with 1.6 having its own dedicated team. We are constantly improving our processes in order to have a faster reaction to community tickets or pull requests.

In the end, our aim is to keep on improving the codebase, making it stronger and more stable, while adding much-requested features all year long.


<div class="alert alert-info" role="alert">
<b>About SemVer</b>

As a reminder, PrestaShop follows a SemVer-like numbering system for its version since July 2015. <a href="http://semver.org/">SemVer</a>'s summary is:

<blockquote>
Given a version number MAJOR.MINOR.PATCH, increment the:

<ol>
  <li>MAJOR version when you make incompatible API changes,</li>
  <li>MINOR version when you add functionality in a backwards-compatible
manner, and</li>
  <li>PATCH version when you make backwards-compatible bug fixes.</li>
</ol>

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
</blockquote>

Because of our own history, <a hef="http://build.prestashop.com/news/a-more-semantic-versioning-scheme/">we chose to follow a SemVer-like versioning</a>: 1.MAJOR.MINOR.PATCH. This means that, as of today (with 1.7.0.4):

<ol>
  <li>The next patch version is 1.7.0.5</li>
  <li>The next minor version is 1.7.1.0</li>
  <li>The next major version would be 1.8.0.0</li>
</ol>
</div>

There you go! The table will be updated as we go.

Tell us what you think!
