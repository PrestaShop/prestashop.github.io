---
layout: post
title:  "Coming Soon: A New Translation System for PrestaShop 1.7"
subtitle: "Or how it should be easier to translate PrestaShop from now on"
date:   2016-07-01 06:09:47
author: alexeven
icon: icon-flag
tags: [translation, i18n, l10n, 1.7]
---



With the [introduction of Symfony in PrestaShop 1.7](), we had to rethink how our system of translation worked, to make sure new pages were translatable too. Instead of merely adapting our current system to Symfony, we took this opportunity to rethink how it works, to optimize it a bit.

*This is still a work-in-progress project, and even if we plan on opening 1.7 to translation on Crowdin soon, it doesn’t mean the 1.7 version is ready to support translations yet. We’ll keep you updated as the project moves forward.*

In short:

* We’re introducing a new translation system to be compatible with Symfony
* There are new standards on how to write strings
* Using translations domains, that are organized functionally
* So words like “Save” will be translated only once across the whole project
* And the Crowdin project will have more folders and smaller files for 1.7 version


## Why we needed a new system

The big WHY is that we had to **adapt our former in-house translation system to Symfony**, to technically support translations in PrestaShop 1.7. From there, it seemed to be a good occasion to improve how the translation system works in Crowdin too.

For those of you who are familiar with the Crowdin translation project, its organization is not that optimal. Among its flaws, users have unanimously elected the following ones as most annoying:

* **Lack of context**: The only context given was the name of the source file - if you knew where to find the information.
* **Duplicated strings**: Strings with many occurrences like “Save”, “Products”, “Order” had to be translated several (many) times, because they came from different files, and therefore different “contexts”.
* **Massive, endless files**: Everything that was related to admin (or theme, for that matter) was gathered inside one big file.

All this has one main cause: both context and project organization rely on the source file from where the string comes from.

For instance, most of the content from the back office is gathered in the “Admin” folder, but each string is given a different context, based on the exact file from which it was extracted.
Which gave something like:

<img style="border: 1px solid #CCC; padding: 10px;" width="500" src="/assets/images/2016/07/string_context_crowdin2.png">

[(And a lot of duplicated strings)](http://192.168.10.56:4000/assets/images/2016/06/duplicated_strings_crowdin.png)

We also have 46% of the whole translatable strings in one file, split down in 104 pages in Crowdin. You need much courage if you want to translate the PrestaShop 1.6 back office (and many of you didn’t stop at this, thanks a lot for your dedication!!).

<img style="border: 1px solid #CCC; padding: 10px;" width="500" src="/assets/images/2016/07/strings_distribution_16_2.png">


So, we came up with what we hope is a better translation system, which:

* Avoids duplications - no need to translate 10 times “Edit” or “Add to Cart”
* Provides richer context with
  * Comments from the source file
  * Line number from the source file
* Is better organized in Crowdin
  * More folders to provide a global context
  * Smaller files to make it easier to see one’s progress
  * Folder organization to help prioritize (translate feature-related content in priority, help text later for instance)

It’s mostly based on domains.

## What is a domain and how to code strings?

PrestaShop 1.7 having introduced the use of Symfony framework, we’re adapting the translation system to follow the [Symfony way](http://symfony.com/doc/current/components/translation/introduction.html).
[Domains](http://api.symfony.com/3.0/Symfony/Component/Translation/TranslatorInterface.html#method_trans) will give the functional context for a string, [as explained below](news/new-translation-system-prestashop-17/#domains-structure).


### What’s changing from now on
* Any string should call **Symfony’s translator**.
* We’re adding a **compulsory array() parameter for variables**, whether there are variables in the string or not. It should be here in all cases, in .php files.
* **Variables should be named clearly** after what they depict (i.e.%productname%), and no longer be a mere %s or %1$s.
* **All strings should have a domain**, for instance ‘Shop.Notifications.Error’.

The translation files structure and format in PrestaShop will also change:

* There will be folders, matching the domain architecture.
* Files will be in [.xlf](https://en.wikipedia.org/wiki/XLIFF) format, instead of .php. They will contain the source strings too (a big big improvement!).
* Files will be named like “Domains.Locale.xlf”, e.g. “Error.es-ES.xlf” for the *Shop.Notifications.Error* domain, and included in the relevant folders (“Shop > Notification” in this example)

#### Calling Symfony’s translator

##### Example for a .php file:
![String adaption for a php file](/assets/images/2016/07/domains_php_example.png)

##### Example for a .tpl file:
![String adaption for a tpl file](/assets/images/2016/07/domains_tpl_example.png)

##### Example for a .twig file:
![String adaption for a twig file](/assets/images/2016/07/domains_twig_example.png)


#### Naming variables
![Rewriting variables](/assets/images/2016/07/domains_variables_example.png)

That way, translators will have much more context from the source string than before, when they had to guess what was behind these %s.

Please refer to the following pull-requests to see how we worked on the adaptation:

#[5722](https://github.com/PrestaShop/PrestaShop/pull/5722/files) - Remove PrestaShop Translator Adapter and use Symfony default one
#[5754](https://github.com/PrestaShop/PrestaShop/pull/5754) - Adapting the module page
#[5707](https://github.com/PrestaShop/PrestaShop/pull/5707/files) - Adapting the Classic theme
#[5](https://github.com/PrestaShop/ps_imageslider/pull/5/files)  - Adapting ImageSlider module

### What it means for you

#### As a developer
If you’re creating new strings, they must use the new `trans()` method, and have the relevant domain (more on this below).
If you’re modifying existing strings, inherited from the 1.6 version, you can adapt it to the new system as you go: make sure it uses the new `trans()` method, add the relevant domain and name variables according to the new convention.

#### As a module contributor
If you have 1.6 modules compatible with the 1.7 version, don't worry! The new system will be compatible with PrestaShop 1.6 translations, so there is nothing to do. Your current translations will still be working.
On the other hand, if you're developing 1.7-specific modules, we encourage you to follow the new standards explained above.

#### As a translator
Well, it will be much easier to help translating PrestaShop on Crowdin! :)

#### Crowdin availability

We’re doing our best to upload the 1.7 project onto Crowdin as soon as possible, so that translators will have time to help before the Release Candidate is ready. We’re still running some tests but it should be a matter of weeks now! :)
Of course we’ll let you know here on Build when it’s finally there.

Now, your next question should be, “but how do I know which domain to use?”, or “what does it mean when I see one?” Glad you asked!


## Domains structure

We’ve organized domains in 4 major sections **Shop**, **Admin**, **Modules** and **Install**. All the PrestaShop translatable strings are spread across these 4 domains, according to the following definition:

![Translation domains for PrestaShop 1.7](/assets/images/2016/07/main_domains2.png)

These are called “first-level” domains. They are strictly informational, no domain should be *Modules*, *Shop*, or *Admin* only, as it should have at least two levels. Only strings from the installer have *Install* only as a domain.
Each domain is thus subdivided into sections, more or less according to the complexity of its content.

In the end a domain is like *Shop.Theme.Checkout* and it will correspond to a specific folder in Crowdin, where you’ll find all the strings from the default theme, related to the checkout process (funnel, shopping cart, etc.).

* In a given source file, several domains can appear.
* For a page displayed (either front or back), several domains can be used.
* For a Crowdin folder, only one domain is called.

Some explanations on how we organized domains and what they contain in details:

### Install
That’s the easiest one, there’s only one domain: Install. It’s the content from the installation wizard.

<img style="border: 1px solid #CCC; padding: 10px;" width="400" src="/assets/images/2016/07/domains_install.png">

There's nothing new here, it corresponds to the former “install” file we had in 1.6 project in Crowdin.


### Modules
For modules, it’s rather simple. We still have a “Modules” folder (first-level), which contains either a file or folder for each module: this the second level.
The third level is here to say whether the string appears in the front office or the back office.

Not all modules have a third level: Some modules only have strings for the back office, so in that case we’d use only the second level domain, e.g. *Modules.ImageSlider* for the "Image Slider" module, in order to keep it as simple as possible. The strings for these modules will be gathered under a simple file, and not a folder.


![Install translation domain for PrestaShop 1.7](/assets/images/2016/07/domains_modules.png)

In Crowdin, you will then have a mix of files and folders, like this:

<img style="border: 1px solid #CCC; padding: 10px;" width="350" src="/assets/images/2016/07/modules_domains_crowdin.png">


Some strings might be rather generic (like “Search” or “Settings updated”) and can be shared with other modules or pages. In that case, we’ll use the *Admin*. or *Shop*. domains to avoid unnecessary duplicates. It means that in some modules folder you will see some *Admin.Actions* or *Shop.Theme* domains.


###  Shop

For the front office, it’s getting a little bit more complex. Any string related to the front office goes into a *Shop* domain. That’s the first level. Then it’s split in various sections, mostly functional. Here’s how it works for the second level:

| Domain | Strings |
| ---------- | -------- |
| Emails | The emails sent from the shop to a customer (order confirmation, account creation, etc.).|
| PDFs | The PDFs sent to a customer (invoice, delivery slip, credit slip, etc.).|
| Theme | The strings attached to the default theme “Classic”. |
| Demo | The content from the demo products and demo pages (“About us”, “Terms and conditions of use”, etc.). If you remove the demo content, you shouldn’t need any of these strings. |
| Notifications | The warning, error or success messages that can appear in the shop. |
| Forms | The forms available in the shop (“Contact us” page, addresses, etc.).|



Each of this domain can be further divided to provide even more context.

1. The **Theme** section is divided into 4 additional sections:
  * Catalog: all the strings needed to display your catalog (product page, categories, etc.).
  * Customer Account: anything related to the management of a customer account and the orders.
  * Checkout: everything related to the act of buying - i.e. if you’re in catalog mode, you shouldn’t need these strings.
  * Actions: all the call-to-actions, buttons or links that you find on the shop and that aren’t specific to a page or context.

2. The **Demo** section has only two sections:
  * Catalog: content for demo product and categories (descriptions).
  * Pages: content inside the demo pages (formerly known as CMS pages).

3. **Notifications** are split according to their level of alert: error, warning or success. They are the messages showing up on your shop.

4. As for the **Form** sections, you’ll have
  * the form labels,
  * its corresponding errors (distinct from the theme errors, these one are specific to the form and will display inline),
  * and what we’ve called “help” - mainly the hints to help you fill in the form (special characters, etc.).

![Front office domains on Crowdin](/assets/images/2016/07/domains_front.png)


###  Admin
Now, let’s see how things are organized for the strings from the back office.

| Domain | Strings |
| ---------- | -------- |
| Global | Anything which doesn’t fall in the below categories, but is still related to the back office, that can be found in a lot of occurrences (“Max”, “Settings”, “Enabled”, etc.) AND in different parts of the software too. <br/>If a string is specific to a given page, then it shouldn’t be in the global domain. |
| Actions | All the call-to-actions, buttons or links that you find on the back office, and that are quite generic (“Save”, “Add”, “Delete”, etc.). Again, if it applies to one page and one functional domain only, then this is not the domain to use. |
| Notifications | All the warning, error or success messages that can appear in the back office.They must be general notifications applying to any part of the software (e.g. “Settings updated”).<br/> In case you have a specific notification (“Friendly URLs are currently disabled”), then it should fall under the notification subdomain for its functional domain (here *Admin.Catalog.Notification*). |
| Navigation | The structure shared by all pages of the back office. |
| Orders & Customers | Strings for the “Orders”, “Customers” and “Customer Service” sections from the back office. |
| Catalog | Strings from the “Catalog” section. |
| Modules | Strings from the Modules page. |
| Design | Strings from the “Design” section. |
| Shipping | Strings from the “Shipping” section. |
| Payment (megashopba) | Strings from the “Payment” section. |
| International | Strings form the “International” section. |
| Parameters | Content from the “Shop Parameters” and “Advanced Settings” sections. |


If you’re not familiar with the new sections in PrestaShop 1.7, [read this article about the new menu](http://build.prestashop.com/news/how-we-reorganized-main-menu-prestashop-1.7/).

From “Orders & Customers” to “Parameters”, the third levels are organized the same way, as functional domains. Each of these third levels will include three sublevels:

* **Feature**: everything specific to a functional domain. If you’re in the “Shipping” section, the domain *Admin.Shipping.Feature* will contain all the strings displaying in the Shipping menu, that are particular to these pages.
* **Notification**: info, success, warning or error messages specific to the functional domain and the pages it includes.
* **Help**: help text and placeholders.

![Back office domains on Crowdin](/assets/images/2016/07/domains_admin.png)

For example, here’s what it will give for a specific page from the back office (Design > Image settings)

![Domains example for back office](/assets/images/2016/07/domains_example2.png)

With the following domains being used:

<img style="border: 1px solid #CCC; padding: 10px;" width="250" src="/assets/images/2016/07/domains_example3.png">



## Limitations
While we wanted to have a great system, there are nevertheless a few drawbacks.

* Help texts are now separated from the features. When translating 1.6, the feature string and its attached help text were place one after the other in the Crowdin interface. With the changes in 1.7, these two strings will be in two different files. But we ignored this limitation since separating features and help texts:
  * Allows a better prioritization (= you’d want to translate the features first, which is the core of the software, then the help, which can be seen as a plus)
  * Allows a differentiation in tone (features are often using infinitives and are more neutral, while help is more personal and talks directly to the merchant)
* That’s more files to get lost in on Crowdin, but it’s a trade-off: each file will be shorter to complete and it will provide a better overall context.
* With their new format, the PrestaShop translation files will be heavier. However the .xlf format makes it possible to have the English source associated with its translations. It’s much more convenient to read (before you had only the translations keys, which aren’t very helpful).



## Disclaimer: work in progress

There a few things you need to know about this new system, as we’ve just started to deploy it.

* It’s currently being worked on. We’ve started to map the front office and new 1.7 pages (modules, product) with the domains. The rest will come as the beta phase moves forward. In the meantime, strings which haven’t got any domain will fall under a generic “messages.xlf” file on Crowdin. As time will go by, more strings will have domains, and it will move from the “messages.xlf” file to the relevant mapped file.
* We’ve presented here the ideal we want to reach. The reality might differ a bit (= we might not be able to get the demo content in Crowdin after all, this kind of things...).
* Please understand that this system is in beta phase as well. At first some strings might still have duplicates, some will move from a domain to another, etc. We’re in a trial & error mode.


So please bear with us while we’re doing our best to improve things, and if you have any suggestions, they are more than welcome!
