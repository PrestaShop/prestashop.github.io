---
layout: post
title: "Multistore configuration forms"
subtitle: "How multistore configuration forms got better with PrestaShop 1.7.8"
date: 2022-01-05 
authors: [matthieu-rolland]
icon: icon-puzzle
tags: [multistore, contribute]
---

Did you know that PrestaShop has a cool feature called "multistore", which is the ability to manage multiple shops from the same back office ?

Multishop affects a lof ot PrestaShop behaviors and components. One aspect of this feature is that user can use configuration forms to set different values for different shops, which is dealt with using shop contexts.

## What does this mean

In a configuration form, a merchant can set different values for different shop contexts, of which there are three, in this order of inheritance:

- All shop context
- Group shop context
- SIngle shop context

![Shop contexts](/assets/images/2022/01/shopcontexts.png)

When a value is not set for a context, it inherits the value of the parent context. Consequently, the "All Shops" context values can be considered a default values. 

We listened to merchants feedback and were told this mechanism was not obvious, and it was not easy to see at a glance which form fields were modified or not for the current context.

We wanted to build something new to make this feature easier to use.

## Our target

Our multistore implementation had to meet 2 main criterias:

- Improve existing UX for better understanding

- Make the technical implementation as easily reusable as possible on existing and future configuration forms, so external contributors and module developers can easily reuse our implementation in configuration forms.

## How we did it

### The UX

After numerous merchant interviews, our UX team created mock-ups, then our product team wrote functional specifications in accordance with merchant feedback. 

Here is how a multistore compatible configuration form looks like since Prestashop 1.7.8:

IMAGE => capture ecran multistore

As you can see, a checkbox appears before multistore compatible fields, when it's not checked and the field is greyed out, it means that the value is inherited from a prent context. When it's checked, the value is overridden. 
A dropdown is displayed next to each field and informs whether the value is overridden or not for each context.

### Looking at the technical implementation

On the technical side, these visual elements had to be reusable and easily implementable, without having to copy HTML or rethink the logic in the backend. 

All the work of knowing if the value of a field is inherited or not, and saving the submitted value only for the right context should be done only once, and easily reused by external contributors.

For this purpose we decided to take advantage of Symfony form extensions, so that to add the new checkboxes and multistore dropdowns on a configuration form, a developer only needs to extend our our multistore extension. 

Then we added multistore helper methods for Configuration classes, to make saving data for the right context depending on which checkboxes are checked a breeze. 

Finally, we created a new multistore javascript component, which only needs to be instantiated in order to make the multistore form reactive.







