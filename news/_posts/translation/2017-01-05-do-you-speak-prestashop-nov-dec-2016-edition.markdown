---
layout: post
title:  "Do you speak PrestaShop? – November & December 2016 edition"
subtitle: "With some news about translations that you should read!"
date:   2017-01-05 06:09:47
authors: [ alexeven ]
icon: icon-world
tags: [translation, i18n, l10n]
---


We're starting this new year with a look back on the last two months of activity on the [PrestaShop translation project on Crowdin](https://crowdin.com/project/prestashop-official), that is, November and December 2016. But before diving into specific, the whole team at PrestaShop wishes you a very happy new year 2017!

<iframe width="796" height="448" src="https://www.youtube.com/embed/fEnxCDFJbAo" frameborder="0" allowfullscreen></iframe>


## Project news


### Expect new strings by next month (roughly)

We're currently preparing the next minor version of PrestaShop 1.7, version 1.7.1. This version will include new and updated strings which should be available on Crowdin a few weeks before a release candidate is available. This will allow some time for translation before the official release.

### Changes regarding the 1.7 translation system

In July we introduced our plans for a [new translation system introduced by PrestaShop 1.7](http://build.prestashop.com/news/new-translation-system-prestashop-17/). For some technical reasons, we had to go back on a few decisions made.

#### No more camel case for domains
Until now, we were using camel case in domains, like "Modules.BlockCart.Admin". We're having some troubles because of camel case, so we will change the domains to remove it. For example, *Modules.BlockCart.Admin* will become *Modules.Blockcart.Admin*. If you have any question about this, please don't hesitate.

#### Keep using the legacy translation system for your modules
We've been too optimistic when we said the new translation system would be available for contributors' modules built specifically for PrestaShop 1.7. This is not working. I repeat, this is not working.
**You should keep using the legacy translation system** and it will work just like before. Otherwise you won't be able to translate your modules, which we want to avoid.

We're still trying to find a workaround so that new modules can benefit from the new translation system, but that is not going to happen in a near future, unfortunately.

These comments do not apply to theme development, for the whole theme structure has been redesigned in 1.7. 1.7-specific themes should use the new translation system. Just not modules :(


### Translations update

As usual, 1.7 translations are updated each Monday, and 1.6 translations every two weeks.

Last updates:

* 1.6 - Tuesday, January the 3rd
* 1.7 - Monday, January the 2nd

### New language : Spanish, El Salvador

At your request, we've added a new Spanish variation to the project for El Salvador. If you come from El Salvador, don't hesitate to join! This is project dependent on the main Spanish project, so only strings that would be translated differently in El Salvador need to be translated. Other strings will fetch the translations from the main Spanish project.


Now let's get back to our Crowdin project, and the full report of its activity these last two months:

## A few stats

* **172 contributors** joined the project these last two months, for a **total of 3,496 members** at the end of 2016. Welcome to all of them!
* **87 members** were active on the project.
* A total of **61,031 words have been translated** and **71,538 validated**.
* All this in **37 different languages**.

Thank you for your involvement!


## Top contributors

A lot of you are working every day on Crowdin to have PrestaShop available in many languages, and we can't thank you enough for your dedication! Here are the **most active translators and proofreaders** for November and December 2016.

#### Top 10 translators in October:

| |Translator | Language | # Words
|-|---------- | -------- | ----------------
 1. | Gabriel Teniță (ggedamed)| Romanian  | 12,817
 2. | Oriol Duarri (oduarri) | Catalan  | 7,573
 3. | Mauro Tschiedel (mauroagr) | Portuguese, BR | 6,959
 4. | pixelwebmx1 | Spanish, MX | 4,466
 5. | Cha (cafetango) | Chinese, Trad. | 2,704
 6. | eleazar | German | 2,068
 7. | SeongHyeon Cho (jaymz9634) | Korean | 1,941
 8. | Saeed Sattar Beglou (saeedsb) | Persian | 1,938
 9. | anubis2702 | Romanian | 1,680
10. | Daniel Valente (dgv) | Portuguese, BR | 1,500


#### Top 10 proofreaders in October:

| | Proofreader | Language | # Words
|-| ---------- | -------- | ----------------
 1. | Gabriel Teniță (ggedamed)| Romanian  | 21,319
 2. | SkaZun (raidhunters) | Ukrainian | 9,406
 3. | Alper Demir (alper-demir) | Turkish  | 8,862
 4. | Tomáš Hink (tomas254)| Czech | 7,772
 5. | Daniel Valente (dgv) | Portuguese, BR | 2,792
 6. | Cha (cafetango) | Chinese, Trad. | 2,720
 7. | Jesús Ruiz (jruiz) | Spanish | 2,628
 8. | eleazar | German | 1,778
 9. | A Petapouca (petapouca) | Galician | 1,633
10. | dzuman | Vietnamese | 1,509

**A big applause to them!** And welcome to our new top contributors!

Remember, you can see who's been contributing to our translation project thanks to the [Translators page](http://translators.prestashop.com/).


## Complete translations

#### Fully translated languages

At the end of 2016, PrestaShop 1.6.1 was fully available (= 100% translated and validated) in **17 languages**:

| Bulgarian | Croatian | Czech | Dutch |
| English | French | German | Indonesian |
| Italian | Lithuanian | Norwegian | Persian |
| Russian | Slovak | Slovenian | Swedish |
| Turkish |


On its side, PrestaShop 1.7.0 is now fully available in **20 languages**!

| Bulgarian | Croatian | Czech | Danish |
| Dutch | English | French | German |
| Indonesian | Hungarian | Polish | Spanish |
| Russian | Turkish | Slovak | Slovenian |
| Swedish | Turkish | Ukrainian |  Vietnamese |

Eight more languages are 100% translated but need a little bit of proofreading to be 100% fully validated and available.



## Languages with the best evolution

In comparison with October 2016, the following languages had the best progress thanks to the translation community:

* **Khmer** (+100% to reach 2% translated in 1.7)
* **Korean** (+50% to reach 12% translated in 1.7)
* **Spanish, MX** (+32% to reach 50% translated in 1.7)
* **Catalan** (+27% to reach 4% translated in 1.7)
* **Portuguese, BR** (+25% to reach 100% translated in 1.7)

![Best translation progress for November and December 2016](/assets/images/2017/01/Build_Crowdin_progress_Nov-Dec16.png)

Thanks to all the contributors!

Of course, this is highlighting the languages that made some progress with new translations; but it doesn't mean that the languages that aren't mentioned here aren't active. Indeed, some editing and rewriting could be going on, but the % of translation wouldn't be modified (since it's working on strings that are already translated). So let's not forget about the work of these proofreaders! Thank you too!

## Languages that need (more) proofreaders

A translated string will not be available in PrestaShop as long as it is not validated. For this reason, it’s important we should keep a good level of validated strings vs. translated strings, to make sure everyone benefits from the latest translations!

The list has quite evolved over the last few months, meaning that a lot of proofreading took place. It's great!

At the end of 2016, some languages would still benefit from some proofreading:

* Catalan (94% translated vs 68% validated)
* Arabic (43% translated vs 21% validated)
* Galician (70% vs 53%)
* Portuguese (100% vs 85%)
* Spanish, Mexico (50% vs 36%)

![Languages that need proofreading](/assets/images/2016/11/Build_Crowdin_proofreading_Oct16.png)

Again, these figures are for 1.7, but 1.6 also need some proofreading too :)

If you wish to help to proofread what has been translated, please [contact me on Crowdin](https://crowdin.com/profile/alex-even) with the language you’d like to proofread. We need your help!

If you haven’t joined us on Crowdin yet, [it's never too late](https://crowdin.com/project/prestashop-official)!

If you want to gather your fellow translators to work towards a better harmonization, start a glossary, or anything else, do let us know: we’ll include a word about it in the next monthly report.

Do you have a question, a remark? Don’t hesitate to leave a comment. See you next month!
