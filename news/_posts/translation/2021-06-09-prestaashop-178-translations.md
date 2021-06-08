---
layout: post
title: "1.7.8 is ready for translation"
subtitle: "New features equal new strings"
date: 2021-06-09 12:00:00
authors: [JulieVarisellaz]
icon: icon-world
tags: [translation, i18n, l10n, 1.7]
---

## 1.7.8 strings are available for translation

As you probably noticed with the announcement of the beta release a few days ago, PrestaShop 1.7.8 is on its way! And new features also mean new strings. A file containing the new 1.7.8 strings has been added to Crowdin, and is ready for translation! 

Translators, proofreaders… your project needs you! Feel free to take a look at those new translations and help your language reach 100%. :muscle:

In this article, I will address the key elements of the translation process of this new catalog. 
 
![Help us translate PrestaShop 1.7.8](/assets/images/2021/06/build-help-translate-178.png)

### New strings & completion rates 

If you visited Crowdin in the last few days, you probably noticed that the completion rates for all projects have slightly decreased and that the projects that used to be 100% translated and validated are no longer complete. Don’t worry, that’s completely normal as new untranslated and unapproved strings were added to the 1.7.8 file. In order to reach a 100% completion rate, all the new strings should be translated and validated. 

### Mistakes in the source strings

Even though we always review the wording, some mistakes could have been missed. So, don’t hesitate to let us know if you notice something wrong so that we can correct it. Note that, despite the string freeze, we will wait about 2 or 3 more weeks before adding the corrections to Crowdin. After that, we won’t be able to add any new wording. If you spot a mistake, please tag me (@Julievrz) in the “Comments” section of the string, or [contact me](https://crowdin.com/profile/julievrz) directly!

### Context

As the 1.7.8 version has not been released yet, some strings may appear a bit unclear because of the lack of context. If this is the case, please don’t hesitate to ask for help! You can open an issue in the “Comments” section of a string and I will do my best to answer your questions. In any case, don’t forget that you will still be able to modify the translations when the new version is released. 

### A note on plural form

On PrestaShop, we used to add **(s)** at the end of a word to indicate that it could be both singular and plural. For example: ‘There are %NbItems% item(s) in your cart.’
But we realized this was not the best option, as some languages have more than one plural form.
In the 1.7.8 catalog, we tried to improve the way plural is handled on PrestaShop. 

You will see strings that contain both the singular and the plural form, separated by a vertical line. The appropriate string will be selected depending on the number of items, for example:

`Are you sure you want to delete the selected image?|Are you sure you want to delete the %filesNb% selected images?`

When translating these strings, you should always start with the singular form and then the plural form, separated by a vertical line, without space, just like this:
   
`singular|plural`

Sometimes, it can also look like this:

`0|singular|plural`

Indeed, in English, for example, we would say 0 items, 1 item, some items:

`items|item|%NbItems% items`

## Let’s keep in touch! :email:

Until now, to exchange with the community, we used the "Discussions" tab on Crowdin. But this option seemed a bit limited as it is not possible to share images, and there is little interaction. That's why we decided to open a Slack channel dedicated to the PrestaShop translators. On this channel, I will share information about the translation project. You will also be informed about the publication of the [Crowdin monthly report](https://build.prestashop.com/news/do-you-speak-prestashop-may-2021/). Of course, you will also be able to ask questions, suggest ideas, or get in touch with other translators. 

I think the publication of the new 1.7.8 strings is the perfect time to start a discussion, so don’t hesitate to [join us]() on the PrestaShop Open Source Slack #translation channel!


