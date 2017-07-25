---
layout: post
title:  "6 months of PrestaShop"
subtitle: "Let's sit back and count up those commits"
date:   2017-07-25 09:10:11
authors: [ xavierborderie ]
icon: icon-calendar-grid
tags:
 - 1.7
 - 1.7.1.x
 - 1.7.2.x
 - 1.6
 - 1.6.1.x
 - contribution
--- 

July is almost over and more than 6 months have come and gone since the beginning of the year. Time to gather some numbers and make sense of them. Infographic included!


## High-level numbers

Between January 1st and June 31st of 2017, we've released 13 updates to PrestaShop:

* 1 minor release for 1.7: 1.7.1.0.
  * The next one is coming soon! [Test it today](http://build.prestashop.com/news/prestashop-1-7-2-0-rc-1/)!
* 5 patch releases for 1.7: from 1.7.0.4, 1.5.0.5, 1.7.0.6, 1.7.1.1, and 1.7.1.2.
* 5 patch releases for 1.6: from 1.6.1.11 to 1.6.1.15.
* 2 test releases: 1.7.1.0 Beta, and 1.7.2.0 RC.

We did our best to follow [our Release Schedule](http://build.prestashop.com/howtos/misc/2017-release-schedule/), published in early January: monthly patch releases, and minor releases every three months or so. Sure, the releases could get delayed here and there: that's what happens when you plan a release late in the month - a delay pushes it to the next month :) <br/>
Meanwhile, v1.7.2.0 got delayed almost a month, as it comes with [some nifty features](http://build.prestashop.com/news/stock-management-in-prestashop-1-7-part-2/) and many fixes!

All these releases accounted for more than 600 merged pull-requests (603, to be exact). Because Open Source is nothing without discussions and trials, we can also talk about the almost 300 pull requests that were closed without merge since January 1st -- many of which were fixed in a later PR which _did_ get merged in time. That's some 900 pull requests that were handled by the Core team in 6 months. Phew!


## Community involvement

Now, what about the community?

I've been tracking community involvement, and here are a few numbers my spreadsheet gave me:

* 229 pull-requests were created by community members since January 1st. That's almost 1/3rd of all created PRs coming from outside of PrestaShop! Thank you!
* Of those, 117 were merged. That's more than 50%! (51.09, to be exact)
* 66 of those 229 were created for the 1.6 codebase.
* 22 community-created PRs were merged into the 1.6 codebase.

That's nice, but what is the impact of the community on PrestaShop releases? Let's seee:

* The PrestaShop 1.7.1.x versions featured 18 community PRs and 108 from the Core team in total. That's 15% of the merged PRs coming from the community. Not too shabby: can you feel that 1.7.1.0 was a lot about stabilization?
* So far, v1.7.2.0 features 53 community PRs (from 37 individual contributors), and 135 from the Core team.
  * Close to 30% of merged PRs in 1.7.2.0 come from the community! That's twice as many as for the whole 1.7.1.x branch!
  * Special thanks to @prestamodule and @martinfoktik, who are each responsible for 5 PRs merged in 1.7.2.0 so far: thanks guys!
  
As for version 1.6: the 5 patch versions released in 2017 so far were built from exactly 100 pull requests (20+21+19+21+19, count it up, not even done on purpose!), 66 of which came from the community. I guess that means that 66% of the changes brought to 1.6 are community-led. Yup, I'm good at math :)<br/>
It's a great thing to see the community working alongside the Core team in hardening the 1.6 -- which, as a reminded, will be maintained until October 2018. Thank you!

Finally, because these numbers were gathered for every 2-week sprint, I also can say that there is a median of 13 community members who submit at least 1 pull request per sprint.

As for the number of community members, roughly 100 people get their code merged in the codebase since January 2017 -- I say roughly because "git shortlog" gives me 104, but there are certainly duplicates in there :)


## The infographic

Because many of these numbers are nice, we figured an infographic would offer a nice overview, so here goes!

![6 months of PrestaShop](/assets/images/2017/07/prestashop-first-semester-2017.png)


## Parting words

See you in January for the next edition :)
