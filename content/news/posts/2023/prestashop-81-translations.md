---
layout: post
aliases: ["/news/prestashop-81-translations"]
title: "PrestaShop 8.1 is ready for translation"
subtitle: "New features equal new strings"
date: 2023-05-15 10:00:00
authors: [LéaDelin]
icon: icon-world
tags: [translation, i18n, l10n, "8.1"]
---

PrestaShop’s [8.1 beta release](https://build.prestashop-project.org/news/2023/prestashop-8-1-beta-release/) was announced a few months ago. The stable release is now just around the corner. While it brings new features, a new version also means new strings. A file containing all 8.1 strings has been pushed to Crowdin, and is ready for translation!

## 8.1 strings are available for translation
Translators, proofreaders… your project needs you! Feel free to take a look at those new strings and help your language reach 100% translation. 💪
In this article, I will address the key elements of the translation process of this new catalog.

### New strings & completion rates 
If you visited Crowdin in the last few days, you probably noticed that the completion rates for all projects have slightly decreased and that the projects that used to be 100% translated and validated are no longer complete. Don’t worry, that’s completely normal! New untranslated and unapproved strings were added to the project. To get back to a 100% completion rate, all the new strings should be translated and validated.

### Mistakes in the source strings
Even though the wording is always reviewed when a pull request is submitted, some mistakes could have been missed. So, don’t hesitate to let us know if you notice something wrong so that we can correct it. Note that, despite the string freeze, we will wait for about 3 or 4 more weeks before adding the corrections to Crowdin. After that, we won’t be able to add any new wording. If you spot a mistake, please tag me (@lea.delin) in the “Comments” section of the string, or contact me directly!

### Context
The 8.1 version has not been released yet, so some strings may appear a bit unclear because of a lack of context. If this is the case, please don’t hesitate to ask for help! You can [open an issue](https://docs.prestashop-project.org/translating-prestashop/translating-prestashop-software-basics/translating-on-crowdin/the-dos-and-donts-of-crowdin-translation#use-the-comments-and-issue-features) in the “Comments” section of a string and I will do my best to answer your questions. In any case, don’t forget that you will still be able to edit the translations when the new version is released.

### A note on variables & QA checker
If you don’t know what a variable is, it’s a value that can change depending on its context in the software. On Crowdin, these variables are highlighted in green in the source string and must **not be translated**, as they can result in major software bugs.
In the Crowdin editor, you can simply click on a variable to copy and paste it into the target language. Always make sure to copy and paste the variable **exactly as displayed on the original string**!

Note that the QA checker will be enabled in the project in the upcoming weeks. Variables will then be automatically checked in target translations to make sure no variables slip through the cracks anymore. If you wish to know more about these changes, keep an eye out for next Crowdin Monthly, or check out the PrestaShop Open Source project's Slack translation channel.

### Translation guide: all you need to know
Are you new to the Crowdin translation project or simply curious about it? 
Feel free to check out the PrestaShop translator’s guide, available [here](https://docs.prestashop-project.org/translating-prestashop/translating-prestashop-software-basics/translating-on-crowdin). 
In it, you’ll learn how to contribute to the translation project, the Do’s and Don’ts of translation, proofreading, and many other things.

## Let’s keep in touch

If you have not joined us on Crowdin yet, [it is never too late](https://crowdin.com/project/prestashop-official)! :wink:
You can also {{< cta "https://www.prestashop-project.org/slack/" >}}join us on Slack{{< /cta >}} ! 🙌
