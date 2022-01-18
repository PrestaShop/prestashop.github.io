---
layout: post
title: We are working on a new front office theme
subtitle: Here are some more details about it
date: 2022-01-13
authors: [NeOMakinG]
icon: icon-laptop
tags: [news, theme, 8.0]
---

# Work on the new theme has started

For a lot of time, the community asked us to rework the classic theme because many things were missing inside it. We announce that we are working on a new front office theme, and you can find [here](https://github.com/PrestaShop/theme-refacto/compare/develop...mparvazi:auto-rtl).

## Why such a decision?

We received a lot of feedback from the community, with suggestions like:

-   Upgrade to Bootstrap 5
-   Rework the structure inside  `src`  directory, which was  `_dev`  before.
-   Remove the `core.js` file. Theme developers can't modify anything inside it or even remove it from their theme.
-   Use lazy loading.
-   Choose, and use some CSS class naming strategy consistently, like BEM. This is more maintainable and easier to read.
-   Use JSON-LD instead of microdata attributes.
-   Add as many hooks as possible to extend the base theme.
-   Separate the PrestaShop styling from the Bootstrap raw styling.
-   Reduce the number of dependencies.
-   Stop using jQuery in the theme. This would be the first step because modules use it anyway, so we can't remove it.
-   Most of the time, JavaScript completely replaces some big parts of the content. Instead, it should update only a small part of it when needed.
-   Add as many events as possible in the JavaScript part so modules and themes can use them.
-   Use as many Bootstrap components as possible.

It was pretty impossible to fix all these issues on the classic theme without breaking the whole ecosystem of modules and community themes. We decided that it was time for a change and a new theme. We can't change everything, but we can significantly improve the default PrestaShop theme.

## How can I try it?

Clone it from the theme repository, run `npm install`, `npm run build`, activate the theme and off you go!

## Good base for theme developers

In the new theme, we separated the CSS to two packs. First one is the functionality part, the second is purely for styling.

Simply commenting out `@import "custom/_custom";` in theme.scss file will get you basically a pure Boostrap 5 theme base. You can get working immediately and not waste time by cleaning things you don't need.

## When will it be released?

Because of the complexity of this task, we decided to avoid writing about the release date. This means that depending on the time every people involved can work on it, the first version of the theme can be released in PrestaShop v8, v9, or later.

We hope to release an Alpha version of the new theme at the same time as the v8 release, but it could be after, even inside a minor version.

This release date doesn't only depend on us, but it also depends on many contributors working hard to make this happen, so we would like to thank every contributor you can find [here](https://github.com/PrestaShop/theme-refacto/graphs/contributors) and those involved in any issues and reviews! Keep the great work. It's crucial for us. This theme is also your theme, don't hesitate to contribute and join the adventure :-)

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