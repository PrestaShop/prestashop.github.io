---
layout: post
title: It's 2022, we are working on a new front office theme.
subtitle: Here are some more details about it
date: 2022-01-13
authors: [NeOMakinG]
icon: icon-laptop
tags: [news, theme, 8.x]
---

## A new front-office theme is being built 

For a long time, many community members pushed for a rework of the Classic front-office theme. The maintainer team is happy to announce that a new front-office theme is being built, and you can find it [here](https://github.com/PrestaShop/theme-refacto).

## Why such a decision?

The PrestaShop community provided a [lot of feedback](https://github.com/PrestaShop/PrestaShop/issues/14533) and ideas, with suggestions like:

-   Upgrade Bootstrap to version 5, the latest LTS
-   Rework the structure inside  `src`  directory, which was  `_dev`  before.
-   Remove the `core.js` file that theme developers could not modify or even remove
-   Use [lazy loading](https://en.wikipedia.org/wiki/Lazy_loading).
-   Choose, and use some CSS class naming strategy consistently, for example [BEM](https://github.com/getbem/getbem.com/). This is more maintainable and easier to read.
-   Use [JSON-LD](https://en.wikipedia.org/wiki/JSON-LD) instead of microdata attributes.
-   Add as many hooks as possible to extend the base theme.
-   Separate the PrestaShop styling from the Bootstrap raw styling.
-   Reduce the number of dependencies.
-   - Do not rely on jQuery, we will use the official JavaScript API provided by any browser. Note that jQuery will still be available as a lot of modules use it anyway.
- Some of the front office pages would refresh large parts of a page even though only a small part needed to be updated.
- Emit as many events as possible in JavaScript in order to allow modules and themes to use them.
-   Use as many Bootstrap components as possible.

It was pretty impossible to fix all these issues on the classic theme without breaking the whole ecosystem of modules and community themes. We decided that it was time for a change and a new theme. This is not a complete rework because we did not want to change everything, but we were able to significantly improve the default PrestaShop theme. This new theme can be considered a Classic Theme rebuilt, different yet similar.

## I would like to try it

Clone it from the [theme repository](https://github.com/PrestaShop/theme-refacto), run `npm install`, `npm run build`, enable it from the back office and off you go!

## Good base for theme developers

This new theme features two different CSS packs. First one is dedicated to the functional part, second one is only for styling.

Commenting out `@import "custom/_custom";` in theme.scss file will get you basically a pure Boostrap 5 theme base. You can get working immediately and not waste time by cleaning things you don't need.

## When will it be released?

Because of the complexity of this task, we decided to avoid writing about the release date. This means that depending on the time involved people can spend on it, the first version of the theme could be released in either PrestaShop v8, v9, or later.

We hope to release an Alpha version of the new theme at the same time as the v8 release, but it could be after, even inside a minor version.

This release date doesn't only depend on maintainers, but it also depends on many contributors working hard to make this happen, so we would like to thank every contributor you can find [here](https://github.com/PrestaShop/theme-refacto/graphs/contributors) and those involved in any GitHub issues and reviews! Keep the great work. It's crucial for us. This theme is also your theme, don't hesitate to contribute and join the adventure :-)

## How does the new theme look?

You can find the mockups of the theme [here](https://www.figma.com/file/LfVl5leeSKcVUhSaYwhbtM/New-Theme), and [the list of every issue](https://github.com/PrestaShop/theme-refacto/issues) opened.

## What about the Classic theme?

Because a new theme means more maintainer works, we decided that the Classic theme will be out of support in the future. We didn't determine the date because the new theme release date is unknown.

Of course, we'll keep you posted about our plan to release a new theme and when we decide to deprecate the Classic theme.

The above means that we continue the maintenance of the Classic theme until it gets out of support.

## Your feedback is a gift

We need your feedback on this project, don't hesitate to [join us on slack](https://www.prestashop-project.org/slack/) to discuss with us. We're actively asking a lot of things to the community to make sure the new theme will be something that meets your expectations and needs.

Are there some places in the shop where you need to display your content and there is no hook provided, or is hard to use? Let us know through [Github](https://github.com/PrestaShop/PrestaShop/issues) or on Slack.

You can also comment in this [thread](https://github.com/PrestaShop/theme-refacto/issues/2) if you want to tell us about any problems, challenges that you encountered using and developing with the classic theme.
