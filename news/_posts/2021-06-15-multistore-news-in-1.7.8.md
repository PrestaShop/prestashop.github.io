---
layout: post
title:  "Multistore feature in PrestaShop 1.7.8: What's new?"
subtitle: "Introducing the revamp of the multistore"
date:   2021-06-16 09:00:00
authors: [MarionFrancois]
icon: icon-lightning
tags:
 - 1.7.8
 - version
 - minor
 - product
 - ux
---

With the release of the new version 1.7.8 which is in progress, this article details one of the main features revamps of this version: the multistore.

The multistore feature allows merchants to manage several front offices through a single back office. It’s frequently used by merchants who sell in different countries and therefore have different languages and/or currencies. It is also used by merchants who do both B2B and B2C. And it is more rarely used by merchants who have several brands.

We are thrilled to introduce you to the new features and changes around the multistore feature. But before jumping into the features awaiting our users in this new version, we would like to share our research and conception process.

**Firstly, why rethinking this feature?**


The multistore feature was introduced in PrestaShop 1.5 and had not been reworked for many years. 
In addition, some features of the multistore having disappeared with the Symfony migration, this feature was becoming particularly unattractive. It was also hard to use in the back office because of its old interface that led to misunderstanding and configuration errors for users.

In late 2019, the PrestaShop Product team decided to revamp the multistore feature in the back office. At the origins of this project was a thorough investigation to understand the main pain points.

This decision opened an opportunity to revamp the multistore feature which would be more understandable and easier to use.

**A long process to ensure the full success of the revamp.**


First, to have a better understanding of our users' pain points, we interviewed merchants with a different number of shops and different business activities such as B2B / B2C, selling in different countries. We also interviewed web agencies of different sizes. 

Secondly, we made a competitive analysis to identify opportunities and threats.

Then, once the pain points were well understood and with better knowledge of the market, the Product team and Product designers organized mockup tests to present different solutions to users.

Finally, pain points encountered were addressed with a new user interface, new features, and more information messages.
 
**Now, let’s present these changes.**

## I.  The new color system and multistore header
One of the main difficulties for the merchants was to know which store they were configuring in the back office and this was bringing a lot of configuration errors.

To solve this problem, a color picker has been added to choose a color for each group and shop. The color can be configured while creating or editing the group or the shop (in the back-office > Advanced parameters > Multistore).

![The new multistore colorpicker](/assets/images/2021/06/multistore_colorpicker.png)

Once configured, the color is displayed in the new multistore header, when a group or a shop is selected, making it easy for the user to know what shop he/she is working on.

![The new multistore header](/assets/images/2021/06/multistore_header_maintenance.png)

If you have existing groups and shops without colors, the default color is light grey. We highly recommend editing them to add a personalized color. By the way, it’s possible to change it by clicking directly on the color icon, before the name of each group and shop in the drop-down of the header.

![The new multistore drop-down context](/assets/images/2021/06/multistore_context_dropdown.png)

![Edit color](/assets/images/2021/06/multistore_edit_color.png)

Please note, the “all shops” context is blue by default and this color can’t be changed.

![Multistore all shops context](/assets/images/2021/06/multistore_allshops_context.png)

**The new header**

The new multistore header is displayed on Symfony pages and is more visible than the old shop context selector, still present on legacy pages. Merchants can find in this header everything related to the multistore and can perform several actions:

- Changing context through the drop-down: Select “All shops” context to apply a change to all stores, select a group of shops to apply changes to all the stores of this group, or select a specific store.
- Changing context through the search bar with autocompletion: allows you to search and select a shop or a group quickly, this is particularly helpful if you have a lot of shops.
- Configure URL: This link is displayed if no URL has been configured, it redirects to the shop URL edition page and allows to add the URL of the shop.
- View my shop: This link is displayed if an URL has been configured and opens the shop front-office to quickly have access to your store.
 
## II.  Checkboxes 
Checkboxes are displayed in a specific shop context and a group context.
They are displayed before each field/toggle/parameter and allow merchants to apply specific settings to a store or a group of shops. Merchants just need to select the parameter to modify, bring their modifications, and then save.

When checkboxes are not selected, the fields or toggles are disabled.

Checkboxes allow:
- to select one or many fields/toggles
- to enable selected fields/toggles
- to apply a different configuration for the selected shop or group
- the merchant to see which parameters have a different value for the selected store or group

![Multistore checkboxes](/assets/images/2021/06/multistore_checkboxes.png)
 
For now, they have been implemented **only on the Maintenance page of the back office**. It will be implemented on the pages not yet migrated during the Symfony migration. For the pages already migrated in Symfony, we are looking for developers to implement it, so if you are willing to do this, please let us know :)
 
## III.  Specific settings drop-down
This drop-down is displayed in the “all shops” context and group contexts. It allows you to see which settings have been customized in one or several specific shops. And therefore, the settings that will not be overridden following a change made in “all shops” or in a group context.

For now, it has been implemented **only on the Maintenance page of the back office**. It will be implemented on the pages not yet migrated during the Symfony migration. For the pages already migrated in Symfony, we are looking for developers to implement it, so if you are willing to do this, please let us know :)

**Search bar** 


In the specific settings drop-down, there is a search bar with auto-completion allowing you to search and select a shop or a group quickly. If the user chooses one of the listed results, it is automatically selected as context.

In the specific settings drop-down there are:
- The shop groups’ names with a link to select them as context
- The shops’ names with a link to select them as context

Next to each shop name, there is a mention:
- "Inherited" if the parameter has the same value as in the “all shops” context
- "Customized" if the parameter has a different value in a specific shop

![Multistore specific settings dropdown](/assets/images/2021/06/multistore_specific_settings_dropdown.png)
 
## IV.  Information messages
Many information messages have been added on different pages and in different locations of the back office to provide better assistance, to inform of some behaviors as early as possible, and to avoid misunderstandings.

For example, some pages are available only in the “all shops” context, and consequently, when you arrive on these pages, the context automatically switches to “all shops”. To prevent any issue, an information message has been added: "Note that this page is available in all shops context only, this is why your context has just switched."
 
## V.  Modules
Another pain identified during the user research step, was the difficulty of knowing whether a module is compatible with the multistore or not.

To solve this problem the first thing to do was to define the notion of compatibility. A module can be :
- compatible, 
- partially compatible, 
- incompatible 
- or not concerned with the multistore compatibility.

A module is considered compatible with the multistore feature when it can be either:
- configured differently from one store to another;
- configured quickly in the same way on all stores thanks to the “All shops" context or the group of shops;
- or even activated for one store and deactivated for another.

A partially compatible module means that some of its options may not be available or may not work in a multistore context.

An incompatible module means that its configuration applies to all stores.

A module may also not be concerned with multistore compatibility. For example, a captcha module will have the same configuration for all stores.


The second thing was to indicate for each module their compatibility or not with the multistore. 

For native modules’, we have indicated the multistore compatibility in the  [readme.md](https://github.com/PrestaShop/ps_emailalerts/pull/44/files) of each module.

Modules developers can now indicate the multistore compatibility in the source code of their module, by declaring a `multistoreCompatibility` attribute, and give it one of the following constants as a value: `MULTISTORE_COMPATIBILITY_YES`, `MULTISTORE_COMPATIBILITY_PARTIAL`, `MULTISTORE_COMPATIBILITY_NO`, or `MULTISTORE_COMPATIBILITY_NOT_CONCERNED`.
Example: `public $multistoreCompatibility = self:: MULTISTORE_COMPATIBILITY_YES`

This way, the multistore compatibility is indicated for merchants in their back office for the installed modules. This information is displayed when clicking on the “read more” link of installed modules in the Module Manager section. 

![Multistore module compatibility](/assets/images/2021/06/multistore_module_compatibility.png)

The third thing was to help contributors to develop & make their modules compatible with multistore. For this, an [example module](https://github.com/PrestaShop/example-modules/pull/64) has been developed and the [multistore developer documentation](https://devdocs.prestashop.com/1.7/development/multistore/configuration-forms/) has been updated.
 
## VI.  Linklist module
The [linklist module](https://github.com/PrestaShop/ps_linklist) allows displaying links such as Terms & conditions, new products, contact, sitemap … in the footer.

Many users complained about the fact that [the linklist module wasn't compatible with the multistore feature](https://github.com/PrestaShop/PrestaShop/issues/9795), as it was quite annoying for their activity, not being able to have different links in their footer.

This is why we decided to make this module [compatible with the multistore](https://github.com/PrestaShop/ps_linklist/pull/114) and this was made possible thanks to the great work of [Krystian Podemski](https://github.com/kpodemski) :pray:

To do so, a feature has been added, and you must already know it because it is present on other pages. It’s the shop association block. You know, this block allows you to choose which shop(s) the element will be associated with while creating or editing it?

![Multistore shop association block](/assets/images/2021/06/multistore_shop_association_block.png)
 
The new multistore header has also been added to the linklist module.

The linklist module [version 5.0.0](https://github.com/PrestaShop/ps_linklist/releases/tag/v5.0.0) is now 100% compatible with the multistore feature and can be used for shops using PrestaShop 1.7.8 version and above.
 
## Closing notes
Over the last few months, PrestaShop has been working hard to deliver these new features and changes. Overall, the multistore feature revamp ensures a better usage and understanding, and a better global user experience by addressing the main pain points.

As you may know, big technical changes are not possible in a minor version because we must avoid backward compatibility breaks. We had to make choices, to bring value to users of this feature while maintaining backward compatibility.

We encourage you to try out the features on the beta version and share any feedback [here](https://github.com/PrestaShop/PrestaShop/issues/new/choose). Your opinion is important to us. We are counting on you to share your feedback and new ideas with us so that we can continue to improve the multistore feature that you need.

This iterative process was made possible thanks to the contribution of many merchants and web agencies who gave their time to participate in interviews, surveys, and test prototypes, which resulted in useful feedback. We are super grateful to them! That’s the open-source spirit and that’s how we can build the software that our users need.
 
