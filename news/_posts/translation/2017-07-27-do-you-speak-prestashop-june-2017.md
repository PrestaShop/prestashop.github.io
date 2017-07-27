---
layout: post
title:  "Do you speak PrestaShop? – June 2017 edition"
subtitle: "The latest news from our translation project"
date:   2017-06-23 06:09:47
authors: [ alexeven ]
icon: icon-world
tags: [translation, i18n, l10n]
---

Contributing to PrestaShop is not only about the code, it's also about taking part to the [PrestaShop translation project](https://crowdin.com/project/prestashop-official)! Read this report to see how the translations of the software evolved in June.

![Crowdin Monthly banner](/assets/images/2017/04/DYSpeakPS.jpg)

## Project news


### 1.7.1 made way for 1.7.2

As we've recently released the new version 1.7.2.0, the translations folder for the version 1.7.1 have been removed.
The version brings some new content and you can read more about it [here]().

### Domain change in 1.7.2 (read this for your themes)

As theme creator, the 1.7.2.0 version contains modifications that could impact the theme you're selling.
If you are using the Classic strings and translations for your own theme, we've made some changes in 1.7.2 that you should report on your theme if you still want to benefit from the PrestaShop translations.

* Translation domain "Shop.Theme" is now "Shop.Theme.Global"
* Harmonization of domains for customer form: [see domains to update](https://github.com/PrestaShop/PrestaShop/pull/8120/files?w=1#diff-a2cd912578d421dc72b8143048ad6b16)
* Correction of "Brands list" to "Brand list": [see domains to update](https://github.com/PrestaShop/PrestaShop/pull/8120/files?w=1#diff-78e1e3c6e9dc564ccd16b9f633b61f7f)

And as a reminder, you can read this article to know [how theme translation works in 1.7](http://build.prestashop.com/howtos/translation/how-to-translate-your-theme/) (and 1.7.2.0 brings many improvements on this side).


### Propagation process

Each time we add a new version, there can be some propagation issues. Old translations seem to come back and some more recent work can be lost.

When a string is identical between versions, here is how it works:

* If translated in 1.6 folder, it will be shared with 1.7.2 folder
* If not translated in 1.6, it won't be shared with 1.7.2 folder. But if translated in 1.7.1, the 1.7.1 translation will be propagated to 1.7.2.
* If a string is updated in 1.7.1 but NOT in 1.6 folder, it is still the 1.6 version which will be shared with new folders (1.7.2 in the present case).

Because of this propagation process, sometimes you will see old translations coming back. If you are editing existing translations, please make sure it's also corrected in version 1.6 too.

To check whether a string is available in 1.6, you need to display all strings from the project, make a search for the string, then over on the file name to see if it comes from 1.6 or 1.7 version. Then you can edit the 1.6 version too:

[Search among all strings](/assets/images/2017/07/Crowdin_search_all_Strings.jpg)

[Identify 1.6 strings](/assets/images/2017/07/Crowdin_search_1.6_Strings.jpg)

### 4,000+ members!

We recently welcomed the 4,000th member to the PrestaShop translation project. As of today, we're already more than 4,100 members: WOW.
Thanks for believing in open source and for helping fellow merchants in having a software translated in their language!

[Welcome to our 4,000th member](/assets/images/2017/07/4000members.jpg)


Now let's get back to our Crowdin project, and the full report of its activity in June:

## A few stats

* **40 members** were active on the project this month.
* A total of **26,340 words have been translated** and **12,237 validated**.
* All this in **30 different languages**.

Thank you for your involvement!


## Top contributors

A lot of you are working every day on Crowdin to have PrestaShop available in many languages, and we can't thank you enough for your dedication! Here are the **most active translators and proofreaders** for June 2017.

#### Top 10 translators in June:

| |Translator | Language | # Words
|-|---------- | -------- | ----------------
 1. | Jesús Ruiz (jruiz) | Spanish | 14,046
 2. | Yosef Esses Cohen (ppesses) | Spanish, Mexico | 8,857
 3. | SeongHyeon Cho (jaymz9634) | Korean | 3,024
 4. | Morten Borg (mortenborg) | Danish | 2,800
 5. | Yuji Sugimoto (bm-sugi) | Japanese | 2,007
 6. | Olta Çantası (soyalp.ms.ms) | Turkish | 1,463
 7. | Anouar Talidi (Anouar_Talidi) | Arabic | 1,100
 8. | Enzo Ferrara (ferribbotte) | Italian | 934
 9. | jinjit | Hebrew | 932
10. | Nikos Krontiris (nikoskrontirist) | Greek | 929


#### Top 10 proofreaders in June:

| | Proofreader | Language | # Words
|-| ---------- | -------- | ----------------
 1. | Jesús Ruiz (jruiz) | Spanish | 13,989
 2. | Yuji Sugimoto (bm-sugi) | Japanese | 3,643
 3. | Morten Borg (mortenborg) | Danish | 2,800
 4. | SeongHyeon Cho (jaymz9634) | Korean | 1,188
 5. | lolypop000 | Slovenian | 915
 6. | AmirRzd | Persian | 704
 7. | Enzo Ferrara (ferribbotte) | Italian | 646
 8. | Gabriel Tenita (ggedamed)| Romanian | 618
 9. | Stanislav Yordanov (StanProg) | Bulgarian | 269
10. | Patrik Lindblom (extendus) | Swedish | 230

Congrats, and welcome to our new top contributors!

Remember, you can see who's been contributing to our translation project thanks to the [Translators page](http://translators.prestashop.com/).


## Complete translations

#### Fully translated languages

At the end of July 2017, PrestaShop 1.6.1 was fully available (= 100% translated and validated) in **15 languages**:

| **Bulgarian** | English | French | French, Canada |
| French, Canada | German | Greek | Italian |
| Norwegian | Russian | Slovak | Slovene |
| **Spanish** | Swedish | Turkish |


On its side, PrestaShop 1.7.2 is fully available in **10 languages**!

| Croatian | English | French | French, Canada |
| German | Greek | Italian | Norwegian |
| Russian | Slovak | Slovene | Spanish |
| Swedish | Turkish | Ukrainian |


## Languages with the best evolution

In comparison with May 2017, the following languages had the best progress thanks to the translation community:

* **Spanish, MX** (+6% to reach 49% translated in 1.7)
* **Korean** (+2% to reach 23% translated in 1.6)
* **Romanian** (+1% to reach 100% translated in 1.6)

![Best translation progress for June 2017](/assets/images/2017/07/Build_Crowdin_progress_June17.png)

Thanks to all the contributors!

Of course, this is highlighting the languages that made some progress with new translations; but it doesn't mean that the languages that aren't mentioned here aren't active. Indeed, some editing and rewriting could be going on, but the % of translation wouldn't be modified (since it's working on strings that are already translated). So let's not forget about the work of these proofreaders! Thank you too!

## Languages that need (more) proofreaders

A translated string will not be available in PrestaShop as long as it is not validated. For this reason, it’s important we should keep a good level of validated strings vs. translated strings, to make sure everyone benefits from the latest translations!

The list has quite evolved over the last few months, meaning that a lot of proofreading took place. It's great!

At the end of June 2017, some languages would still benefit from some proofreading:

* **Arabic** (64% translated vs 18% validated in 1.7)
* **Galician** (65% vs 46% in 1.7)
* **Romanian** (94% vs 75% in 1.7)


![Languages that need proofreading](/assets/images/2017/07/Build_Crowdin_proofreading_June17.png)

Again, these figures are mostly for 1.7, but 1.6 needs some proofreading too :)

If you wish to help to proofread what has been translated, please [contact me on Crowdin](https://crowdin.com/profile/alex-even) with the language you'd like to proofread. We need your help!

If you haven’t joined us on Crowdin yet, [it's never too late](https://crowdin.com/project/prestashop-official)!

If you want to gather your fellow translators to work towards a better harmonization, start a glossary, or anything else, do let us know: we'll include a word about it in the next monthly report.

Do you have a question, a remark? Don't hesitate to leave a comment. See you next month!
