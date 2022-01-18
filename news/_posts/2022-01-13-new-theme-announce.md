---
layout: post
title: We are working on a new front office theme
subtitle: Here are some more details about it
date: 2022-01-13
authors: [NeOMakinG]
icon: icon-laptop
tags: [news, theme, 8.0]
---

## A new front-office theme is being built

For a long time, many community members pushed for a rework of the Classic front-office theme. The maintainer team is happy to announce that a new front-office theme is being built, and you can find [here](https://github.com/PrestaShop/theme-refacto).

## Why such a decision?

The PrestaShop community provided a [lot of feedback](https://github.com/PrestaShop/PrestaShop/issues/14533) and ideas, with suggestions like:

-   Upgrade to Bootstrap 5
-   Rework the structure inside  `src`  directory, which was  `_dev`  before.
-   Remove the `core.js` file, a theme developer can't modify anything inside it or even remove it from his theme.
-   Use [lazy loading](https://en.wikipedia.org/wiki/Lazy_loading).
-   Use a good CSS/class naming, like [BEM](http://getbem.com/). This is more maintainable and easier to read.
-   Use [JSON-LD](https://en.wikipedia.org/wiki/JSON-LD) instead of microdata attributes.
-   Add as many hooks as possible to extend the base theme.
-   Separate the PrestaShop styling from the Bootstrap raw styling.
-   Reduce the number of dependencies.
-   Stop using jQuery in the theme as a first step, because modules are using it anyway so we can't remove it
-   The JavaScript is completely replacing some big content parts, instead, it should update the content.
-   Add as many events as possible in the JavaScript part so modules and themes can use them.
-   Use as many Bootstrap components as possible.

It was pretty impossible to fix all these issues on the classic theme without breaking the whole ecosystem of modules and community themes.

## When will it be released?

Regarding the complexity of this task, we decided to avoid fixing a release date. This means that depending on the time every people involved can work on it, the theme could be released in one month, 2 years, or never.

We hope to release an Alpha version of the new theme at the same time as the v8 release, but it could be after, even inside a minor version.

This release date doesn't only depend on us, but it also depends on a lot of contributors working hard to make this happen, so we would like to thank every contributor you can find [here](https://github.com/PrestaShop/theme-refacto/graphs/contributors) and those involved in any issues and reviews! Keep the great work, it's important for us, this theme is also your theme, don't hesitate to contribute and join the family!

## What's the content?

You'll be able to find the mockups of the theme [here](https://www.figma.com/file/LfVl5leeSKcVUhSaYwhbtM/New-Theme), and [the list of every issue](https://github.com/PrestaShop/theme-refacto/issues) opened.

## What about the Classic theme?

Because a new theme means more maintainer works, we decided that the Classic theme will be out of support in the future. We didn't decide the date because as the new theme release date isn't decided too, we can't.

Don't worry, you will have the time to see it happen, because we will announce to you one or two versions before that the Classic theme will be deprecated, to let you some time if you rely on it.

This means that we continue the maintenance of the Classic theme until it gets out of support.

## Feedback is a gift!

We need your feedback on this project, don't hesitate to [join us on slack](https://join.slack.com/t/prestashop/shared_invite/zt-dkmbz5qf-I~FlEWwmRUOXunc5ui0Ucg) because we're asking a lot of things to the community. 

Feel free to comment on this [thread](https://github.com/PrestaShop/theme-refacto/issues/2) if you want to tell us any problems you encountered on the classic theme.