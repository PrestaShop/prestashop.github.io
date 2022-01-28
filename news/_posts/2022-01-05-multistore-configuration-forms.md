---
layout: post
title: "Introduction to Symfony multistore configuration forms"
subtitle: "How multistore configuration forms got better with PrestaShop 1.7.8"
date: 2022-01-05 
authors: [matthieu-rolland]
icon: icon-puzzle
tags: [multistore, contribute]
---

With the release of PrestaShop 1.7.8, we expanded PrestaShop multistore capabilities to Symfony forms in order to build a reusable form component to make configuration forms multishop-compatible.

Multishop affects a lof ot PrestaShop behaviors and components. One aspect of this feature is that user can use configuration forms to set different values for different shops, which is dealt with using shop contexts.

## What does this mean

In a configuration form, a merchant can set different values for three different shop contexts, in this order of inheritance:

- All shops context
- Group shop context
- Single shop context

![Shop contexts](/assets/images/2022/01/shopcontexts.png)

When a value is not set for a context, it inherits the value of the parent context. Consequently, the "All Shops" context values can be considered default values.

Product designers listened to merchants feedback and were told this mechanism was not obvious, and it was not easy to see at a glance which form fields were modified or not for the current context in the back-office.

We wanted to build something new to make this feature easier to use.

## Our target

We set ourselves two main criteria:

- Improve existing User Experience for better understanding

- Make the technical implementation as reusable as possible on existing and future configuration forms, to make sure external contributors and module developers can easily reuse it.

## Building multistore configuration forms

### User interface

After numerous merchant interviews, UX designers team created mock-ups, then Product owners worked out how it should behave and wrote it down as specifications in accordance with users feedback. 

Here is how a multistore compatible configuration form looks like since Prestashop 1.7.8:

![Shop contexts](/assets/images/2022/01/checkbox.png)

As you can see, a checkbox appears before multistore compatible fields. When it's not checked and the field is greyed out, it means that the value is inherited from a parent context. When it's checked, the value is overridden. In our screenshot example we can see that:

- The field "Enable store" is greyed out, checkbox unchecked: its value is inherited from parent context (all shop context in this case)
- The field "Maintenance IP" is greyed out, checkbox unchecked: its value is inherited from parent context (all shop context in this case)
- The field "Custom maintenance text" is not greyed out, and its checkbox is checked: it means its value is overriding the parent context, this value is specifically defined for this context (single shop context in this case)

In "All shops" and group context, if a child context has a field that is overridden, a dropdown is displayed next to it and informs whether the value is overridden or not for each context:

![Shop contexts](/assets/images/2022/01/dropdown.png)

Here, we are looking at the dropdown for the field "Maintenance IP", in "All shops" context, and we are given these pieces of information:

- the shop called "Awesome store" has an overriden value for this field, that is to say a customized value
- the shop called "Shop 2" inherits the value from this context (127.0.0.1)

As you see, we did not fully reinvent the feature, we kept the concept of checkboxes, but we tried to make clearer what it does with the dropdowns and by graying fields when they are inherited their value from the parent context.

### Looking at the technical implementation

On the technical side, these visual elements had to be reusable and easily implementable, without having to copy HTML or rethink the logic in the backend. 

All the work of knowing if the value of a field is inherited or not, and saving the submitted value only for the right context should be done only once, and easily reused by external contributors.

For this purpose, we decided to take advantage of Symfony form extensions. To add the new checkboxes and multistore dropdowns on a configuration form, a developer simply needs to extend our multistore extension and configure each multishop field with its related configuration name.

Then we added multistore helper methods for Configuration classes, to make saving data for the right context a breeze (depending on which checkboxes are checked). See how the new `updateConfigurationValue` method is used [here](https://github.com/PrestaShop/example-modules/blob/master/demomultistoreform/src/Form/ContentBlockDataConfiguration.php).

Finally, we created a new multistore Javascript component, which only needs to be instantiated in order to make the multistore form reactive. You can see it in action in [the multistore example module](https://github.com/PrestaShop/example-modules/blob/master/demomultistoreform/views/js/form.js).

## Friendly reminder :)

As most of you may know, PrestaShop is open source, which means you are more than welcome to contribute ! Multistore's technical documentation [can be found here](https://devdocs.prestashop.com/1.7/development/multistore/), there's also [a module example](https://github.com/PrestaShop/example-modules/tree/master/demomultistoreform) showing you how you can make your configuration forms multistore compatible in your own modules.

Feedback is always appreciated, so don't hesitate to contact us on [one of our Slack channels](https://www.prestashop-project.org/slack/channels/), see you soon !
