---
layout: post
title:  "PrestaShop 8.1 Release Candidate Is Ready To Be Tested!"
subtitle: "After the Beta, the first release candidate for PrestaShop 8.1 is now ready for you to test!"
date: 2023-05-25
authors: [ PrestaShop ]
image: /assets/images/2023/02/banner_8.1_1200x627.jpg
opengraph_image: /assets/images/2023/02/banner_8.1_1200x627.jpg
twitter_image: /assets/images/2023/02/banner_8.1_1024x512.jpg
icon: icon-leaf
tags:
- version
- rc
- minor
- releases
- 8.1
---

We are happy to announce the first release candidate of PrestaShop 8.1.

![PrestaShop 8.1 release candidate 1 is available](/assets/images/2023/02/banner_8.1_1534x424.png)

We're on the brink of releasing the final 8.1 version. This time, the release candidate version is being shared simultaneously with the community and the project's Quality Assurance (QA) team. The idea is for everyone to collectively confirm that all issues identified in the beta version have been resolved, ensuring their suitability for production use. If no major problems are reported by June 26th, we'll move ahead and launch the final version of 8.1.

Remember, this version might still have some problems. So, it's not safe to use it in a production environment yet! Also, please remember that right now, you can't move from the beta to the release candidate version, and you also can't move from this RC version to the final version using the upgrade module.

## Your feedback is important!

Much like the public beta, the release candidate phase holds great significance in gearing up for the forthcoming release. At this stage, we're urging all community members to get this version, install it, and see how it performs in their individual settings.

Here are some examples of how you can help:
* If you are a module or theme developer, check if they work well with this new version.
* If you notice any problem and you think it is caused by the new version, please [report it on GitHub](https://github.com/PrestaShop/PrestaShop/issues/new/choose).
* Don’t hesitate to [contribute to fixing bugs](https://devdocs.prestashop-project.org/8/contribute/contribute-pull-requests/) if you can!

**Your feedback is essential.** The more issues you report right now, the fewer bugs there will be on the final release, which means fewer patch versions and fewer problems on your (or your customer’s) online store.

**Please submit all your feedback by June 26th, 2023.** If no new critical or major issue remains to be fixed by then, the final release will be made available. This is the final chance to test this new version before the final release is out!

If you have any questions about the version and its features, feel free to share them on [the PrestaShop project’s Slack](https://www.prestashop-project.org/slack/).

And if everything is working well, feel free to comment on this article to tell us, and share your thoughts on social networks, we also need this kind of feedback! ;-)

## Upgrade from 1.7.8 and 8.0 to 8.1

The upgrade path to PrestaShop 8.1.0 is not available yet. We are prioritizing the development of the autoupgrade module which will let you upgrade your shops from versions 8.0.x and 1.7.8.x to the upcoming 8.1.0 version. We set a one-month goal to complete this module before the 8.1.0 final release on June 26th, 2023. However, regardless of the module's completion status, the 8.1.0 release will proceed.

## Notable changes since the beta release

- [Code related to the old product page has been deprecated and will be removed in PrestaShop 9.0](https://github.com/PrestaShop/PrestaShop/pull/32194)
- [New image management system is now under the "New feature" flag](https://github.com/PrestaShop/PrestaShop/pull/31662)
- [Some of the smarty functions are now registered manually, these changes may impact some of the third-party solutions](https://github.com/PrestaShop/PrestaShop/pull/32197)
- [Classic theme has been updated to version 2.1.1](https://github.com/PrestaShop/PrestaShop/pull/32574)

Besides that, numerous modifications were made to the new product page and additional features that are now accessible in version 8.1.
Check out the [changelog](https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.0-rc.1) to see all the changes in detail.

All the critical bugs have been fixed, and [the remaining ones](https://github.com/PrestaShop/PrestaShop/issues?q=is%3Aopen+is%3Aissue+label%3A8.1.x+label%3ABug+label%3ARegression) will be fixed in the upcoming 8.1.x patch release.

If you're curious about all the changes and new things coming in 8.1, the [8.1 beta version release note]({{< relref "/news/releases/prestashop-8-1-beta-release" >}}) is just the right thing for you to look at!

## Download

You can download PrestaShop 8.1 release candidate here:

{{< cta "https://github.com/PrestaShop/PrestaShop/releases/tag/8.1.0-rc.1" >}}Download PrestaShop 8.1 release candidate now!!{{< /cta >}}

## Acknowledgments

A big thank you to the 36 people who contributed to this release candidate:

Alexandre Hellin, Antonin Clauzier, bibips, Boris Hermans, Boubker Bribri, Cedric Vangout, Codencode, Daniel Hlavacek, Fabien Papet, Franck Lefèvre, Ibrahima Sow, Jakub Łach, Jens Wilke, jevgenijvisockij, Jonathan Lelievre, Julius Žukauskas, Krystian Podemski, Léa Delin, Lorenz Meyer, Mathias Reker, Mathieu Ferment, Matthieu Rolland, Maxime Flasquin, Nesrine Abdmouleh, Nicolas Lœuillet, Pablo Borowicz, PICHAT Morgan, Prestaworks, PrestonBot, Robin Fischer, Salim Benouamer, Sharak, Thomas Baccelli, Thomas Nares, Thomas Leone
