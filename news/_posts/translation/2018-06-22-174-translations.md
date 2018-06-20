---
layout: post
title:  "1.7.4 is ready for translation"
subtitle: "New strings are winking at you"
date:   2018-06-22 09:10:11
authors: [ LouiseBonnard ]
icon: icon-world
tags: [translation, i18n, l10n, 1.7]
---

PrestaShop 1.7.4 is now ready for translation and validation! So it is time for us to translate, spot mistakes, validate and perhaps reorganize domains (if needed) to get an accurate and clean translation catalog for the release.

Okay, we are a bit late compared to [what we announced first](http://build.prestashop.com/howtos/misc/2018-release-schedule) but be sure now that [PrestaShop 1.7.4]( http://build.prestashop.com/news/prestashop-1-7-4-0-beta-1-release) is for very very soon. And we're pretty excited to have it released because this new minor version makes us proud. So we hope you will like it! It contains numerous new features and big improvements that will be detailed on this devblog in the next few days… and thus new strings that already winked at you on the [Crowdin projects](https://crowdin.com/project/prestashop-official), great translators of all countries. ;-)

<img width="990" src="/assets/images/2018/06/Translation_174.jpg">


### Handling the Crowdin catalog

Until then, our usage consisted in adding a new branch, corresponding to the new minor version, and this new branch should contain all the strings from the previous branch (the previous version, you got it right) plus the new ones (relating to the new version, you got it right twice, you smarties).

However, we lately realized that keeping only the latest minor version of PrestaShop active on Crowdin was not so good an idea. Indeed, --- we decided not to close the previous branches anymore in order to avoid ---


### About the multiple generations of the 1.7.4 catalog

And that know, let’s explain why we had to regenerate the 1.7.4 catalog many times. We are very sorry for the relentless translators who have had to do the job twice, be sure the problem is solved. What happened is that we first had a bug in the library we use to extract strings, then we figured out we had deleted strings we thought were useless that actually were not that useless… so we put them back in the code and everything went back in order. Phew!


### Natural fall of all translation levels

Improving PrestaShop naturally leads to new wording. As a consequence, the 1.7.4 branch contains more strings than the 1.7.3. So all the languages that were fully translated and validated will fall under 100%. No need to panic, it is just logic. Once these few new strings translated and approved, rates of completion will get back to normal.

Of course, as the context is not fully available because PrestaSop 1.7.4 is not out for now (but will soon be), some of these strings may appear a bit unclear. But ask if you need explanations, we will do our best to answer your comments and issues - and do not forget the coming soon release will allow you to check the results and make them match a more faithful translation.


### Go for it!

All this to say new strings have been added to our projects available in Crowdin. Modifications are more than allowed, it will help us having [PrestaShop 1.7.4](https://crowdin.com/project/prestashop-official) as much ready as possible for all!
