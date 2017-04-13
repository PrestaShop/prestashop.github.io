---
layout: post
title:  "What's new regarding translations in PrestaShop 1.7.1.0"
subtitle: "How we tweaked a few things to improve your experience"
date:   2017-04-13 06:09:47
author: [ alexeven ]
icon: icon-world
tags: [translation, i18n, l10n, 1.7, 1.7.1.x]
---

PrestaShop 1.7.1.0 has been shipped with several new features to improve internationalization and localization. Here is a short tour of what's new and how it makes things better for you, both as a merchant and a translator!


## Daily language packs update

Previously translation packs were updated manually on our side, and at this frequency:

* 1.6 - every two weeks
* 1.7 - every Monday

This wasn't convenient for translators who wanted to quickly see their contribution into production.

Thus, we completely changed the way the translation packs are generated and uploaded, and automated the whole process. Since the 1st of March, **both 1.6 and 1.7 translation packs are updated every day, automatically**.

That is, when installing or updating a language, merchants will have the latest translations from the community. And day to day, you can fetch the new translations (that have been validated). At last!

## Removed import section

In the Translation page, the "Import" section is no longer available. You might be wondering why?

With the 1.7 version and the new translation system, you can't simply import translation files to see your shop fully translated. The files need to be processed and adapted to PrestaShop, particularly the email files. So we simply removed the option to avoid false hopes and confusion.

You're next question will probably be "why keeping the export section then?". Well, the export section is still useful for theme builders who will want to export the custom translations they made for their themes.


## No more XML translations!

Some content in PrestaShop was exceptionally available through large and cumbersome XML files.

* These files were not available for translation in Crowdin, but only on GitHub.
* It wasn't translated when you added a new language, but stayed in the default installation language.

All this made it hard to provide a fully localized experience to our merchants. This was particularly impacting the translation of the navigation menu. Order states, default category names or meta titles are also among the content which wasn't easily translated.

With PrestaShop 1.7.1.0, we've reworked the way this data works, and made it available in Crowdin (thank you @aleeks for the hard work on this!).
**From now on, you can simply translate this content in Crowdin**, and it will be available the next day in PrestaShop. That easy :)

And when adding a new language in your interface, more content will be available in your language.

Another benefit of this improvement: it makes it much easier to add new languages to the installer, so expect a more localized PrestaShop in the future!

### How it works:

We've kept the English version of the XML files, for reference. From there:

1. When you install PrestaShop, a database is created, based on these English XML files.
2. If you install PrestaShop in another language than English, the pack for this language will be downloaded and installed.
3. PrestaShop will duplicate the English database, and translate it in the installed language to provide all the translations.
4. If you install another language, the same process will repeat: duplicate the default language database, load the pack, translate the new database. That's it! :)

![XML translation](/assets/images/2017/03/Build_XML_translation.png)

### In Crowdin

You will find this content in relevant domains:

| Content | Domain |
| ---------- | -------- |
| Admin menu | Admin.Navigation.Menu |
| Order statuses | Admin.Orderscustomers.Feature |
| Attributes and features of demo products | Shop.Demo.Catalog |
| Meta titles and page names from default theme | Shop.Navigation|

We gathered all the translations in all the languages we add in GitHub (in the XML files), and we uploaded it in Crowdin. That way we are losing no translations, and from there you can correct or complete the current translations.

See [this Build article](http://build.prestashop.com/news/new-translation-system-prestashop-17/#what-is-a-domain-and-how-to-code-strings) to learn more about PrestaShop’s translation domains


## Translating country names with CLDR

At the same time we reworked the XML system, we also improved the translation of country names, and even went a little further. Countries were previously translated using the XML files, and all the same, they weren't translated when you added a new language. You had to do it yourself (ouch!).

To avoid sending all the country names for translation in Crowdin, and thus relieve translators of this tedious task, we're using [CLDR](http://cldr.unicode.org/) data.

###  About CLDR

CLDR stands for "Common Locale Data Repository" and provides resources for software localization. For each country and language, it says how numbers should be written, which calendar to use, how prices and currencies should be displayed, among (many) other things. The CLDR also provides the list of all the countries, translated in most of the languages.

###  How we're using it

Just like for the XML data, at the installation, we will import all the country names in English first, stored in the database.
When adding a new language, we will call the CLDR and retrieve the corresponding translations for country names. This way, **country names will automatically be translated, and provided in all languages**.

In case you'd want to modify one translation, you'll still be able to do it directly in your back office, in the International > Location > Countries page.

![PrestaShop country translation](/assets/images/2017/03/Build_171_country_translation.png)

CLDR is a powerful tool, so expect more coming from it in future versions!


## Improved translation page

You've probably seen that we introduced a new translation page in 1.7.0.0. We further improved it in 1.7.1.0 so that it would be easier for you to translate PrestaShop.

### What's new with this page?

* It uses **domains** to provide more context to text strings,
* It has a **search bar** to help you easily find the sentence you need to edit,
* It saves your edits in a **new database**. You won't lose your translations if you update your language to retrieve the latest translation available.

And like in version 1.6, it highlights where translations are missing.

![PrestaShop 1.7.1.x translation page](/assets/images/2017/03/Build_translation_page.png)

### And what remains to be done

* **Batch-saving translations**. Today you need to save each modification independently, string by string. There is no global "Save" button. This is something we'd like to change.
* **Pushing untranslated strings to the top**. When you have a language that is not fully completed, you have to browse the various pages of a domain to find the untranslated strings. This is not the most convenient, so we're thinking of improving this behavior.

If you've been using the 1.7 translation page and have add issues with it, please don't hesitate to [open a Forge ticket](http://forge.prestashop.com/) or leave a comment, so that we'll know what we can further improve! Thanks!


## Live translation module

To help with the translation of 1.7.1.x, we brought back to life the in-context translation module. It connects PrestaShop to the [translation project on Crowdin](https://crowdin.com/project/prestashop-official).

The [Live translation module](https://github.com/PrestaShop/ps_livetranslation) (formerly known as [TranslaTools](https://github.com/PrestaShop/translatools), for those who knew it) makes it possible to translate PrestaShop right from your back office and front office. You can translate each string by clicking on it, it will send the translation directly to the Crowdin project.

![PrestaShop Live translation module](/assets/images/2017/04/Live_translation.png)

It is much easier for you to translate PrestaShop, as you'll see strings in their original context. The quality of translations should be improved too. Everybody wins!

What you should know:

* It only works for 1.7.1.0 version and later ones
* The experience is better if you are already logged in to your Crowdin account (if you don't have any, [join us](https://crowdin.net/project/prestashop-official)!)

Last but not least, some of you requested more information about the translation for themes. We have an how-to article to guide you with the translation of your theme coming up soon! Stay tuned!


