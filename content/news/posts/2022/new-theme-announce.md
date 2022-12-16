---
layout: post
aliases: ["/news/new-theme-announce"]
slug: "new-theme-announce"
title: Hello 2022, meet our new Front office theme
subtitle: Here are some more details about it
date: 2022-02-17
authors: [NeOMakinG]
icon: icon-laptop
tags: [news, theme, "8.x"]
---

For a long time, many community members have been pushing for a rework of the Classic front-office theme. The maintainer team is happy to announce that a new front-office theme is being built, and you can [find it here](https://github.com/PrestaShop/theme-refacto).

## Why such a decision?

The PrestaShop community provided a [lot of feedback](https://github.com/PrestaShop/PrestaShop/issues/14533) and ideas, with suggestions like:

- Upgrade Bootstrap to version 5, the latest LTS
- Rework the structure inside  `src`  directory, which was `_dev` before.
- Remove the `core.js` file that theme developers could not modify or even remove
- Use [lazy loading](https://en.wikipedia.org/wiki/Lazy_loading).
- Choose, and use a consistent CSS class naming strategy, for example [BEM](https://github.com/getbem/getbem.com/). This is more maintainable and easier to read.
- Use [JSON-LD](https://en.wikipedia.org/wiki/JSON-LD) instead of microdata attributes.
- Add new hooks to help extend the base theme.
- Separate the PrestaShop styling from the Bootstrap raw styling.
- Reduce the number of dependencies.
- Do not rely on jQuery, the theme will use standard JavaScript APIs. Note that jQuery will still be available because a lot of modules need it.
- Some of the Front office pages would refresh large parts of a page even though only a small part needed to be updated.
- Emit as many events as possible in JavaScript in order to allow modules and themes to use them.
- Reuse as many Bootstrap components as possible.

It was impossible to fix all these issues on the Classic theme without breaking the whole ecosystem of modules and community themes. We decided that it was time for a change and a new theme. This is not a complete rework because we did not want to change everything, but we were able to significantly improve the default PrestaShop theme. This new theme can be considered a rebuilt Classic Theme, different, yet similar.

## How to try the new theme? 

Clone the [theme repository](https://github.com/PrestaShop/theme-refacto) into your `themes` directory, run `npm install && npm run build`, enable it from the back office, and off you go!

## Good base for theme developers

This new theme features two different CSS packs. The first one is dedicated to the functional part, the second one is only for styling.

Commenting out `@import "custom/_custom";` in theme.scss file will get you basically a pure Boostrap 5 theme base. You can get working immediately and not waste time by cleaning things you don't need.

## When will it be released?

Because of the complexity of this task, we decided not to announce a release date. This means that, depending on how much time people can spare, the first version of the theme could be released in PrestaShop v8, v9, or later.

We hope to release an Alpha version of the new theme at the same time as the v8 release, but it could be after, alongside a minor version.

This upcoming release is not only dependent on the maintainers, but also on the many contributors who are working hard to make this project happen. So we would like to thank [all the contributors](https://github.com/PrestaShop/theme-refacto/graphs/contributors) as well as everyone who has been participating in the issues and reviews on GitHub. Keep up the good work! This theme is also your theme, feel free to contribute and join the adventure. :-)

## How does the new theme look?

This is how the current mockups look like:

![New theme mockup](/assets/images/2022/02/new-theme-mockup.png)
{.text-center }

To see more, have a look at [all the mockups](https://www.figma.com/file/LfVl5leeSKcVUhSaYwhbtM/New-Theme), and [the list of open issues](https://github.com/PrestaShop/theme-refacto/issues).

## What about the Classic theme?

As this new theme is getting bigger and more complete, we must consider what will happen for the Classic Theme when this new theme is ready.

The classic theme has been moved into a [dedicated repository](https://github.com/PrestaShop/classic-theme) and should be compatible with PrestaShop 1.7 and the upcoming PrestaShop 8.

It is not planned to maintain both themes simultaneously, so once the new theme has graduated to become the default theme for new releases, the support of the Classic Theme will be over.

Rest assured, we will make sure that the end-of-life of Classic and the transition to this new theme will be made in the smoothest possible way.

## Your feedback is a gift

You can [vote to choose the name of this new theme](https://framaforms.org/vote-for-the-new-theme-name-1644576025) until February 23, 2022.

We need your feedback on this project, don't hesitate to [join the discussion on slack](https://www.prestashop-project.org/slack/). The community is being regularly consulted there to make sure the new theme will meet the expectations and needs of everyone.

Is there anywhere in the shop where you need to display content and there is no hook available, or is it hard to use? [Report it on Github](https://github.com/PrestaShop/PrestaShop/issues) or on Slack.

You can also [comment in this thread](https://github.com/PrestaShop/theme-refacto/issues/2) if you want to discuss any problems or challenges that you encountered while using or developing with the classic theme.

If you want to learn more about this project, [watch this video](https://youtu.be/MrLdVbTtxjE?t=192).
