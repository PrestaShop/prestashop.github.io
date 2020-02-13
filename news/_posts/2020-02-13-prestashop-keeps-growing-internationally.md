---
layout: post
title:  "PrestaShop keeps growing internationally"
subtitle: "PrestaShop and its community extend the frontiers of your business"
date:  2020-02-12 09:10:11
authors: [LouiseBonnard]
icon: icon-puzzle
image: /assets/images/2020/01/Localization-Packs-image.jpg
tags: [1.7, i18n, l10n, contribute]
---

No need to repeat it: PrestaShop is an international solution. We aim at providing highly global features for worldwide users, and it means providing many useful localization packs containing correct and up-to-date information.

A localization pack is a file providing, for a given country, basic local information such as currencies, states, taxes, languages, measure units, etc. Since the first 1.7.0 release in 2016, those packs have never been cleaned nor updated. Meanwhile, several tax rates have changed, Indian states have evolved, Croatia was until then not considered as a member of the EU in the software… 

Yes, a lot had to be corrected and this is why the PrestaShop team and its community (agencies, ambassadors, translators, GitHub contributors) have spent some time this summer having a close look at each file to improve PrestaShop’s localization with relevant and more accurate data, available for all 1.7.x versions. Among numerous minor changes, here are the main lines of this project.
 

![Localization packs banner](/assets/images/2020/01/Localization-Packs-banner.jpg)
 
 
## About localization packs

### :pushpin: Why add a localization pack?

When you install PrestaShop, you already benefit from no less than 89 localization packs! It is pretty huge, and will surely continue growing depending on the development of the PrestaShop community. Indeed, we make a point of staying connected to users, wherever they are located, and it implies providing local data.

When should a new localization pack be added to PrestaShop? We take two things into account: countries where there is a big activity and/or community involved locally and countries that are considered strategic for PrestaShop. 

For instance, we have ambassadors in some countries which are not localized in PrestaShop, it is kind of counterproductive. Offering them a friendly native environment with common local information is important to give more impact on their commitment and therefore increase PrestaShop’s adoption internationally.


_**What is next?**_
 
**Ivory Coast**, thanks to [Sylvestre Nicky](https://ambassadors.prestashop.com/ambassador/sylvestre-niki), our great ambassador there. And many others such as **Bangladesh**, **Bosnia-Herzegovina**, **Cameroon**, **Madagascar**, and **Senegal**, raising to 14 the number of localization packs added to the 1.7 version!


_**Want to contribute?**_
 
Gather all official data (languages, units, taxes, etc.) and create a pull request on GitHub to add a new file in [localization](https://github.com/PrestaShop/PrestaShop/tree/develop/localization), then read the following instructions...


### :nerd_face: And how to do so?

Here is an example of how a localization pack file should look like:
 
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<localizationPack name="[type the English name of the country]" version="1.0">
        	<currencies>
                   	<currency name="[type the English currency name]" iso_code="[type the three-letter ISO 4217 alpha currency code]" iso_code_num="[type the three-number ISO 4217 numeric currency code]" sign="[type the currency symbol]" blank="[type 1 if yes, 0 if no]" format="[type the ID of the currency format]" decimals="[type 1 if yes, 0 if no]" />
        	</currencies>
        	<languages>
                   	<language iso_code="[type the two-letter ISO 639-1 language code]" />
        	</languages>
        	<taxes>
                   	<tax id="1" name="[type the local name of the tax and its percentage]" rate="[type the first rate]" />
                   	<tax id="2" name="[type the local name of the tax and its percentage]" rate="[type the second rate]" />
 
                   	<taxRulesGroup name="[type the two-letter ISO 63166-1 alpha 2 country code + the tax rate name (percentage)]">
                               	<taxRule iso_code_country="[type the two-letter ISO 63166-1 alpha 2 country code]" id_tax="1" />
                   	</taxRulesGroup>
 
                   	<taxRulesGroup name="[type the two-letter ISO 63166-1 alpha 2 country code + Standard/Reduced/Zero Rate (percentage)]">
                               	<taxRule iso_code_country="[type the two-letter ISO 63166-1 alpha 2 country code]" id_tax="2" />
                   	</taxRulesGroup>
        	</taxes>
        	<units>
                   	<unit type="weight" value="[type the right value]" />
                   	<unit type="volume" value="[type the right value]" />
                   	<unit type="short_distance" value="[type the right value]" />
                   	<unit type="base_distance" value="[type the right value]" />
                   	<unit type="long_distance" value="[type the right value]" />
        	</units>
</localizationPack>
````

Need to read an in-situ example? Have a look at the [Azerbaijan localization pack](https://github.com/PrestaShop/PrestaShop/blob/develop/localization/az.xml) to help you contribute!


<div class="alert alert-info" role="alert">
<h4>IMPORTANT</h4>
<p>**A short notice about the expected ISO codes:**<br>

country code = [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) = e.g. _AZ_, for Azerbaijan<br>
currency code = [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) = e.g. _AZN_, for the Azerbaijani manat<br>
language code = [ISO 639-1](https://www.iso.org/iso-639-language-codes.html) = e.g. _az_, for the Azeri<br></p>
</div>


<div class="alert alert-info" role="alert">
<h4>NOTE</h4>
<p>**How CLDR is used here for currencies:**<br>

When entering information about the currency in a localization pack, note the CLDR handles most of it. Such as the format, decimals or blank fields. However, this information is still read ([here](https://github.com/PrestaShop/PrestaShop/blob/1.7.0.x/classes/LocalizationPack.php#L304-L312)) so it has to be filled.</p>
</div>


### :file_folder: Relocate to better localize
 
In order to better understand how localization works, we need to dive into the Core. Localization files are bundled physically with PrestaShop, they are located in the `/localization` folder, but they are also distributed through our services via http://api.prestashop.com/localization/{majorVersion}/{countryIsoCode}.xml (where {majorVersion} is something like "17" (for 1.7) and {countryIsoCode} is a 2-letter country iso code like "fr") so that older PrestaShop versions can benefit from updated localization packs.

Problem: it is irrelevant to have files that often need to be updated at this place, complicating our ability to quickly deliver up-to-date data.

Localization data evolves, this is why it made more sense, in our opinion, to extract those files and put them in a dedicated repository. It would allow localization data to be kept up-to-date as regularly as needed since they will be separated from the releases cycle. And it happens right [here](https://github.com/PrestaShop/LocalizationFiles)!


![Localization packs image](/assets/images/2020/01/Localization-Packs-image.jpg)


## About languages

### :penguin: Packs now include official languages only
 
As PrestaShop evolved since version 1.7.0, languages have been added but last additions have not been redistributed in the concerned localization packs. Our first idea was thus to put isolated available languages in the right localization pack.

Indeed, a few languages are available only in the International > Translations section of the back office. For instance, it is the case for Hindi, Malayalam or Bengali. But when you import the Indian localization pack (International > Localization), you can only get Tamil. Whaaaaat?

It does not make sense to look for all the Indian languages available in two different places. Importing the Indian localization pack should give access to all Indian languages available in PrestaShop. 

But there is a “but”: the versioning of the software prevents us from relocating isolated languages in the matching pack. Let me explain why: logically, late versions of PrestaShop contain more supported languages than the previous ones. In 1.7.7, there will be more supported languages than in 1.7.1. Yet, distributing recently added languages in old localization pack would introduce breaking changes when upgrading packs - which is definitely not recommended. Sooo we made the decision to handle languages in packs differently.
 
From now on, no matter the version, any pack will have to contain the official language(s), from a country point of view rather than regionally. In short, you will only find official languages in a localization pack, other related languages will have to be imported.

For instance, the :fr: localization pack (in International > Localization) will only contain French (since it is the only official language). If you are looking for Breton (a regional language), you will be able to download it (in International > Translations > Add / Update a language).
 
 
### :rocket: New available languages in the installer

Since the installer is the first entry point to the software, it must be accessible to all. And this is why we aim at having it translated in as many languages as possible. In 1.7.7, the number of available languages in the install will raise to 46. Pretty nice, right?
 
So when a language has a high level of translation on [Crowdin](https://crowdin.com/project/prestashop-official) (the Install.xlf file must be 100% translated and validated) without being available in the installer, we simply add it.
 
 
_**What is next?**_
 
**Albanian** and **Korean** will be joining the installer’s languages drop-down! 
 
 
_**Want to contribute?**_
 
Create a pull request on GitHub to add a new folder in [install-dev/langs](https://github.com/PrestaShop/PrestaShop/tree/develop/install-dev/langs), named with the code of the language you want to add.
 
 
### :earth_americas: New supported languages in the software
 
Some languages are available for translation but not available in PrestaShop because of a low completion rate on Crowdin. When translators are very active and/or showed a lot of interest in an unavailable language, it is relevant to add it to the software so that they can see the result of their translation work quickly in their shop.

Khmer is a nice example. A translator, the great [Tuxy Varman](https://crowdin.com/profile/TuxyVarman), recently asked me to re-open the Khmer project so that he could contribute to it. At the time I re-opened it, the translation was nil. He started translating, then asked Khmer translators he knows to join him in this effort and now, a few weeks later, Khmer has reached a completion rate of 5%, i.e. 11,600 words!

It seems therefore useful to activate the Khmer in PrestaShop. It is the whole point of adding supported languages: translators can contribute with more context and merchants can quickly benefit from it! As a result, the 1.7.7 version will make the Khmer translations available in the software.


_**What is next?**_
 
**Khmer**, **Malagasy**, **Uzbek**, and **Tagalog** will be joining the already long list of PrestaShop’ supported languages!


_**Want to contribute?**_

Create a pull request on GitHub to add the language information in both files [app/Resources/all_languages.json](https://github.com/PrestaShop/PrestaShop/blob/develop/app/Resources/all_languages.json) and [app/Resources/legacy-to-standard-locales.json](https://github.com/PrestaShop/PrestaShop/blob/develop/app/Resources/legacy-to-standard-locales.json). In addition, make sure the [TranslationFiles](https://github.com/PrestaShop/TranslationFiles/blob/master/1.7/translations/1.7.7/available_languages.json) repository must be updated. And do not forget to read the [developer documentation](https://devdocs.prestashop.com/1.7/development/internationalization/activate-a-language-in-prestashop)!

![Localization packs Crowdin](/assets/images/2020/01/Localisation-Packs-Crowdin.png)


## About ISO codes

And here comes the frustrating part: the ISO codes part! As said earlier, we must be careful with these standards. Many codes exist, depending on what we refer to: currency, country, language. Another level of complication is reached when we extend the official layer towards regional specificities.

Let us pick Argentina as an example! Its country code (ISO 3166-1 alpha 2) is `AR` and its official language, Spanish, has the `es` code (ISO 639-1). But what about the Argentinian Spanish speaking there? It simply does not have its own language code referenced under the ISO standards!

And this is where the IETF language tags intervene. IETF language tags stand for languages from specific cultures, like `en-US` for American English or `es-AR` for Argentinian Spanish. Regarding PrestaShop, it unfortunately does not fix every issue...

Most of the new PrestaShop code uses IETF language tags but the old code must keep using two-letter language codes for backward compatibility purposes. Since it cannot be fixed in future minor versions, we do hope we will be able to solve it in the next major version by switching to IETF language tags everywhere. In short, we already have the solution, we just need to be patient to apply it. ;-)
