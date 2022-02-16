---
layout: post
title: It's 2022, we are working on a new front office theme.
subtitle: Here are some more details about it
date: 2022-02-14
authors: [NeOMakinG]
icon: icon-laptop
tags: [news, theme, 8.x]
---

## A new front-office theme is being built 

For a long time, many community members have been pushing for a rework of the Classic front-office theme. The maintainer team is happy to announce that a new front-office theme is being built, and you can [find it here](https://github.com/PrestaShop/theme-refacto).

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
- Do not rely on jQuery, we will use the official JavaScript API provided by any browser. Note that jQuery will still be available as a lot of modules use it anyway.
- Some of the front office pages would refresh large parts of a page even though only a small part needed to be updated.
- Emit as many events as possible in JavaScript in order to allow modules and themes to use them.
-   Use as many Bootstrap components as possible.

It was pretty impossible to fix all these issues on the classic theme without breaking the whole ecosystem of modules and community themes. We decided that it was time for a change and a new theme. This is not a complete rework because we did not want to change everything, but we were able to significantly improve the default PrestaShop theme. This new theme can be considered a Classic Theme rebuilt, different yet similar.

## How to try the new theme? 

Clone it from the [theme repository](https://github.com/PrestaShop/theme-refacto), run `npm install`, `npm run build`, enable it from the back office and off you go!

## Good base for theme developers

This new theme features two different CSS packs. The first one is dedicated to the functional part, the second one is only for styling.

Commenting out `@import "custom/_custom";` in theme.scss file will get you basically a pure Boostrap 5 theme base. You can get working immediately and not waste time by cleaning things you don't need.

## When will it be released?

Because of the complexity of this task, we decided not to announce a release date. This means that, depending on how much time people can spare, the first version of the theme could be released in PrestaShop v8, v9, or later.

We hope to release an Alpha version of the new theme at the same time as the v8 release, but it could be after, even inside a minor version.

This release date is not only dependent on the maintainers, but also on the many contributors who work hard to make this project happen. So we would like to thank all the contributors mentioned [here](https://github.com/PrestaShop/theme-refacto/graphs/contributors) and those who participate in the issues and reviews on GitHub! Keep up the good work. This theme is also your theme, feel free to contribute and join the adventure. :-)

## How does the new theme look?

Have a look at the [mockups](https://www.figma.com/file/LfVl5leeSKcVUhSaYwhbtM/New-Theme), and [the list of open issues](https://github.com/PrestaShop/theme-refacto/issues).

## What about the Classic theme?

As this new theme is getting bigger and more complete, we must consider what will happen for the Classic Theme when this new theme is ready.

We do not plan to maintain both themes simultaneously, so when the new theme rises, it will be necessary to decide how to stop the support of the Classic Theme. Today we have not yet decided how this will happen.

Rest assured we will make sure that the end-of-life of Classic theme and the transition to this new theme will be made very smooth.

## Your feedback is a gift

You can vote to choose the name of this new theme [here](https://framaforms.org/vote-for-the-new-theme-name-1644576025).

We need your feedback on this project, don't hesitate to [join us on slack](https://www.prestashop-project.org/slack/) to discuss with us. We're actively asking a lot of things to the community to make sure the new theme will be something that meets your expectations and needs.

Are there some places in the shop where you need to display your content and there is no hook provided, or is hard to use? Let us know through [Github](https://github.com/PrestaShop/PrestaShop/issues) or on Slack.

You can also comment in this [thread](https://github.com/PrestaShop/theme-refacto/issues/2) if you want to tell us about any problems, challenges that you encountered using and developing with the classic theme.

If you want to learn more things about it, there is a [demo](https://build.prestashop.com/news/public-oss-demo-1-2022/) and a [replay](https://youtu.be/MrLdVbTtxjE?t=192).
