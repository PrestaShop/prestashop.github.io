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

Okay, we are a bit late compared to [what we announced first](http://build.prestashop.com/howtos/misc/2018-release-schedule) but be sure now that [PrestaShop 1.7.4](http://build.prestashop.com/news/prestashop-1-7-4-0-beta-1-release) is for very very soon. And we're pretty excited to have it released because this new minor version makes us proud. So we hope you will like it! It contains numerous new features and big improvements that will be detailed on this devblog in the next few days… and thus new strings that are already waving at you on the [Crowdin projects](https://crowdin.com/project/prestashop-official), great translators of all countries. ;-)

<img width="990" src="/assets/images/2018/06/Translation_174.jpg">


### Handling the catalog

We have identified an issue with the catalog generation. From time to time, when preparing a minor version, we improve a wording or replace it with a different one. When we generate the catalog, our tool parses the whole PrestaShop code and it extracts all the wordings it currently uses. This means old wordings from previous versions disappear from the new catalog because are no longer used.

And the problem is that old modules that aren’t updated won’t be able to load the wordings that got replaced, as those wordings are no longer in the catalog. To address this problem in the future, we are going to change the way we generate the catalog. Instead of rebuilding it from the ground up, we’ll incrementally add new wordings, while taking care of keeping all the previous ones, even if they are no longer used by the core.


### About the multiple generations of the 1.7.4 catalog

And that said, you may have noticed that we had to regenerate the 1.7.4 catalog many times. We are very sorry for the relentless translators who have had to do the job twice, be rest assured, the problem is now solved. What happened is that we first had a bug in the library we use to extract strings (it wasn't able to extract some of them), then we realized we had deleted some strings we thought we didn't need but actually we did… so we put them back in the code and everything went back in order. Phew!


### Natural fall of all translation levels

Improving PrestaShop naturally leads to new wording. As a consequence, the 1.7.4 branch contains more strings than the 1.7.3. So all the languages that were fully translated and validated will fall under 100%. No need to panic, it is just logic. Once these few new strings translated and approved, rates of completion will get back to normal.

Of course, as the context is not fully available because PrestaShop 1.7.4 is not out for now (except the beta you can already download), some of these strings may appear a bit unclear. But ask if you need explanations, we will do our best to answer your comments and issues - and do not forget the coming soon release will allow you to check the results and make them match a more faithful translation.


### Go for it!

All this to say new strings have been added to our projects available in Crowdin. Modifications are more than welcome, it will help us having [PrestaShop 1.7.4](https://crowdin.com/project/prestashop-official) as ready as possible for all!
