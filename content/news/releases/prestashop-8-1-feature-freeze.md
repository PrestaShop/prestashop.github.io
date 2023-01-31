---
layout: post
title:  "PrestaShop 8.1 is now in feature freeze"
subtitle: "PrestaShop 8.1 enters stabilization phase"
date:   2023-02-01
authors: [ kpodemski ]
icon: icon-compass
image: /assets/images/2023/02/banner_8.1_1200x627.jpg
twitter_image: /assets/images/2023/02/banner_8.1_1024x512.jpg
tags:
 - news
 - version
 - "8.1"
---


As of February 1, 2023, PrestaShop version 8.1 has entered the feature freeze phase. This article will provide more information about the feature freeze, what the next steps will be, and what to expect from PrestaShop 8.1.

![PrestaShop 8.1](/assets/images/2023/02/banner_8.1_1534x424.png)

### Feature freeze for PrestaShop 8.1

As of today, PrestaShop version 8.1 has entered a feature freeze. What is a feature freeze? _Feature freeze_ refers to a specific stage in the software development process after which no new features can be added to a version. Instead, the focus shifts to polishing existing features and ensuring their quality before release.

A new branch, "8.1.x", has been created to stabilize the code for the next release. Bug fixes to be integrated into version 8.1 should be submitted to this branch. 

When will the stabilization phase end? When the software will be considered stable enough to test, project members will release a public beta. We expect this to happen in a couple of weeks.

### Next steps

Now that the feature freeze is in effect and everyone is focusing on polishing the 8.1 features, the next step will be to release a public beta version. In order to speed up the release of PrestaShop 8.1, for the first time, the QA team will perform a complete test campaign of the new beta version at the same time as the community.

This approach will not only allow for a more efficient testing process but will also allow the community to participate in the testing sooner, and provide valuable feedback that will help to identify and resolve any issues more quickly.

We encourage the community to actively participate in the testing process by providing [feedback](https://github.com/PrestaShop/PrestaShop/discussions) and [reporting any bugs](https://github.com/PrestaShop/PrestaShop/issues/new?assignees=&labels=Bug%2CNew&template=1_bug_report.yml) or issues that they encounter. This will be an important step in ensuring that the final release of PrestaShop 8.1 is of the highest quality.

### New in PrestaShop 8.1

Here are the most notable features that will be included in this version:

- The new and improved product page is enabled by default for the feature freeze (it will be decided later if it is kept for the final version)
- An experimental feature: you can now generate separate images in a few additional formats, e.g., WebP, and Avif.
- Manage availability labels for each combination separately.
- Better control over products that are discontinued and no longer available.
- Allow access to employees to the front office even with maintenance mode enabled (and without providing their IP addresses).
- Enable store profiler directly from the back office.
- For developers: more options for Symfony services configuration.

### PrestaShop 9

Feature freeze for PrestaShop 8.1 also means that work around PrestaShop 9.0 starts. The `develop` branch will become a home for the next major version. This allows anyone to contribute with changes without worrying about [backward compatibility promise](https://github.com/PrestaShop/ADR/blob/master/0017-backward-compatibility-promise.md). For many, it’s the best time to contribute! You can often suggest impactful changes that were impossible to merge during work on the minor version. If you have any plan to contribute, let's discuss [your idea here](https://github.com/PrestaShop/PrestaShop/discussions/categories/ideas).

Make sure to follow this blog, Live Updates, and other project communication channels because we’ll have more news to share about PrestaShop 9.0 soon!

In the meantime, if you want to stay updated regarding PrestaShop 8.1.0 release, make sure to follow [this issue](https://github.com/PrestaShop/PrestaShop/issues/30719) to get the latest updates.
