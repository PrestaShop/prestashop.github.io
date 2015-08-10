---
layout: post
title:  "Do you speak PrestaShop? – July 2015 edition"
subtitle: "The awesome work of our multilingual community"
date:   2015-08-10 18:29:47
author: alexeven
icon: fa-globe
tags: [translation, i18n, l10n]
---


Here is the new report to inform you of what has been going on [PrestaShop translation project on Crowdin](https://crowdin.com/project/prestashop-official) this July 2015.

All the figures and statistics are now based on the *1.6.1.0 project*, released early June, which is the last stable version of PrestaShop. Even thought previous reports were still about the 1.6.0.14 version, the figures for this month are a comparison with the state of 1.6.1.0 in June (as the project was already available in Crowdin).

## New Crowdin workflow

Before anything, you must be aware we've changing the workflow on Crowdin, to reflect our new semantic versioning scheme, and branch organization.

We previously had two files on Crowdin, with the last stable version released (ex 1.6.0.14), and the next one to come (1.6.1.0). Translations were propagated from the oldest version to the newest (1.6.0.14 > 1.6.1.0).

From now on, we still have two files, but the way it works is a bit different. The 'main' file will be called '*next-version*' and it will include the latest strings on which we've been working. *This is where strings must be translated in the first place*.

When we're getting close to releasing a new version, we will create a new file (ex 1.6.1.1), which will inherit translations from the 'next-version' file. Any translation done or edited in this file should be reported in the 'next-version' file, otherwise it would be lost for future versions (as it stays in this file and is not shared with the 'next-version' file). The purpose of this 'release' file is mainly to allow fixes on strings once a version is released.
Today we have the '1.6.1.0' file, as it's the latest release. Remember, anything translated there will not be propagated to the main project, which is 'next-version'

It is thus important everyday translation should be done on the 'next-vesion' file. Thanks for your understanding!
Should you have any question regarding this, please don't hesitate to comment or contact me.

Now, let's get back to the congratulations for your contributions in July:


## Top contributors

A lot of you are working everyday on Crowdin to have PrestaShop available in many languages, and we can't thank you enough for your dedication! Here are the **most active translators and proofreaders** for the month of July.

#### Top 10 translators in July:

| |Translator | Language | # Words
|-|---------- | -------- | ----------------
 1. | SkaZun (raidhunters) | Ukrainian  |7902
 2. | Stanislav Yordanov (StanProg) | Bulgarian |7605
 3. | Eduardo Bonsi (ebonsi) | Portuguese (Brazilian)|5285
 4. | Michael Dekker (mdekker) | Dutch |3566
 5. | remark | Turkish |3219
 6. | eleazar | German  |2538
 7. | Patrik Lindblom (extendus) | Swedish |2231
 8. | Milan Dvorský (emdi) | Slovak |1923
 9. | DaoKakao | Russian |1918
10. | AliAlKhawaher (alihkhawaher) | Arabic |1833


#### Top 10 proofreaders in July:

| | Translator | Language | # Words
|-| ---------- | -------- | ----------------
 1. | Stanislav Yordanov (StanProg) | Bulgarian |7914
 2. | Koral | Polish |4437
 3. | Cha (cafetango) | Chinese (Trad.) | 2439
 4. | eleazar | German |2315
 5. | Patrik Lindblom (extendus) | Swedish | 2243
 6. | DaoKakao | Russian |1950
 7. | Filip Filipović (filipfilipovic) | Croatian |1501
 8. | Danni Afasyah (prestanesia) | Indonesian |1487
 9. | lolypop000 | Slovenian |1471
10. | Erik Knudsen (eriknuds) | Norwegian |1414

**A big applause to them!** And welcome to our new top contributors!


## Fully translated languages

At the end of July, PrestaShop 1.6.1.0 was fully available (= 100% translated and validated) in 11 languages:

* Bulgarian
* Croatian
* Dutch
* English
* French
* German
* Italian
* Polish
* Russian
* Slovenian
* Swedish


## 98-99% translated languages

…and almost fully translated (and validated) in the following 6 languages:

* Indonesian
* Lithuanian
* Norwegian
* Portuguese
* Portuguese BR
* Spanish


## Languages with the best evolution

In comparison with the previous month, these languages had the best progress in July:

* Georgian (+14% to reach 16% translated)
* Arabic (+10% to reach 34% translated)
* Ukrainian (+10% to reach 98% translated)
* Thai (+7% to reach 32% translated)
* Slovak (+6% to reach 77% translated)

![July 2015 best translation progress](/assets/images/2015/07/Build_Crowdin_progress_july15.png)

Congratulations to all our contributors for the hard work!!

We've imported some translations from external contributions. Georgian has now translations for the front-office kindly sent by XXX. Thank you!

We also have new active languages: thanks to translators who joined us to translate to Estonian, Azerbaïjani, Macedonian, Arabic. Welcome to the team!


## Languages that need (more) proofreaders

As you might know, a translated string will not be available in PrestaShop as long as it is not validated. For this reason, it’s important we should keep a good level of validated strings vs. translated string, to make sure everyone benefits from the latest translations!

There's been a lot of proofreading going on in July, it's great! Unfortunately some languages are still a bit behind:

* Turkish (93% translated vs 0% validated)
* Slovak (77% vs 24%)
* Ukrainian (98% vs 45%)
* Finnish (75% vs 50%)
* Vietnamese (41% vs 16%)
* Hungarian (91% vs 76%)

![July 2015 best translation progress](/assets/images/2015/07/Build_Crowdin_proofreading_july15.png)

Turkish, Ukrainian and Hungarian have a high level of completion. We need your help so that these languages can be available to PrestaShop merchants! As long as it is not proofread, it won't be available in PrestaShop. Let's do something about it!

If you wish to contribute by proofreading what has been translated, please [contact me on Crowdin](https://crowdin.com/profile/alex-even) with the language you’d like to proofread.


## Ambassador Program

As you might have heard, we're launching an [Ambassadors program](http://ambassadors.prestashop.com/). Ambassadors have joined from several countries already and some of them are Crowdin members. So don't hesitate to get in touch with them: harmonization, glossary, meeting other translators... whatever you want to do for your language / country, Ambassadors can help you to reach the community!

Here are the PrestaShop Ambassadors you can find on Crowdin:

Spanish, Argentina: shacker (Lucas Vitale) and ariels3 (Ariel Spampinato)
Spanish, Colombia: jorgevrgs (Jorge Vargas)
Spanish, Peu: carlosloyola14 (Carlos Loyola)
French, Belgium: PrestaEdit (Jonathan Danse)

You can see other ambassadors for your country [there](http://ambassadors.prestashop.com/ambassadors?page=2).

And if you wish to join the project to represent PrestaShop in your country, [join the program](http://ambassadors.prestashop.com/)!


## Miscellaneous
**87 contributors** joined the project this month, for a **total of 2,051 members** at the end of July. Welcome to them!
91 members (including PrestaShop employees) were active on the project this month (+26%).
A total of **66,405 words have been translated** (that's 30% more than the previous month) and 42.021 validated (+49%), in 40 different languages - impressive!

Again, we can’t thank you enough!


If you haven’t joined us on Crowdin yet, [it's never too late](https://crowdin.com/project/prestashop-official)!

If you want to gather your fellow translators to work towards a better harmonization (yes, we can), do let us know, we’ll include a word about it in the next monthly report.

Do you have a question, a remark? Don’t hesitate to leave a comment.

See you next month!
