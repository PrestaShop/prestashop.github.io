---
layout: post
title:  "1.7.2 is ready for translation"
subtitle: "... with fresh new content to translate!"
date:   2017-06-26 06:09:47
authors: [ alexeven ]
icon: icon-world
tags: [translation, i18n, l10n, 1.7]
---

As you might have guessed, [PrestaShop 1.7.2 is on its way](http://build.prestashop.com/news/announcing-our-2017-release-schedule/), and with it some new strings are coming too. We've just updated the [Crowdin project](https://crowdin.com/project/prestashop-official) to add the strings that appeared since v1.7.1.0: PrestaShop 1.7.2 is now open for translation!

Our goal is to release PrestaShop 1.7.2 with the highest possible level of translation, therefore we're opening the translation some time before the actual release takes place.
It is possible that some strings will be updated afterward - if we spot some mistakes or add some more domains.

### New domains and domain transfers

Two translation domains were added, therefore we have new folders in the project:

| Domain | Content |
| ---------- | -------- |
| Admin.Navigation.Search | Content for the search bar and its result page. |
| Admin.Login.Feature | Strings from the login page of the administration panel. |

If you need a reminded about what domains are for, [read this article](http://build.prestashop.com/news/new-translation-system-prestashop-17/).

To provide still more context, we transferred a lot of strings available in the *messages* domain to the most relevant domains, mainly in the *Admin* section. This is not supposed to affect the existing translations, but it might, however, incur some losses. Fingers crossed!

### New content

The major changes on the 1.7.2 are to be found on the side of **stock management**. With a [new stock management interface](http://build.prestashop.com/news/stock-management-in-prestashop-1-7-part-2/), some new strings appeared in version 1.7.2.

The new stock interface is displayed in the Catalog section, therefore most stock-related strings will fall under the *Admin.Catalog* subdomains.

Some more changes to the codebase imply new or modified strings, among which:

* new strings for the search on the translation page
* updated error messages with clearer variables
* some strings that were previously not translatable are now available on Crowdin
* various strings rewritten for improvement.


### Closing 1.7.1 translation project

For maintenance purpose, we're only keeping the latest minor version active on Crowdin. We will thus **soon remove the 1.7.1 project from Crowdin**. Only 1.7.2 will be available for translation from there on (until version 1.7.3 comes).

The 1.7.1 language packs will be updated one last time when closing the 1.7.1 project and will no longer be updated. New translations will be available with 1.7.2 (on its way!).


So, well, what's the conclusion? We're calling for translators to help [translate PrestaShop 1.7.2](https://crowdin.com/project/prestashop-official)!

