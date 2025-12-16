---
layout: post
title:  "PrestaShop 9.1 is in feature freeze"
subtitle: "Explore next steps and what’s new in PrestaShop 9.1"
date:   2025-12-15
authors: [ PrestaShop ]
icon: icon-compass
image: /assets/images/2025/12/PrestaShop-9.1.0-Beta-LinkedIn_Facebook.png
opengraph_image: /assets/images/2025/12/PrestaShop-9.1.0-Beta-LinkedIn_Facebook.png
twitter_image: /assets/images/2025/12/PrestaShop-9.1.0-Beta-X.png
tags:
- news
- version
- beta
- minor
- releases
- "9.1"
- "9.x"
- "9.1.x"
---

As of December 12th, 2025, PrestaShop version 9.1 has entered the feature freeze phase. Learn more about the feature freeze, the next steps, and what’s coming in PrestaShop 9.1.

![PrestaShop 9.1](/assets/images/2025/12/PrestaShop-9.1.0-Beta-BuildBlog.png)

### PrestaShop 9.1 feature freeze is in effect

As of today, PrestaShop 9.1 is in feature freeze. What is a feature freeze? _Feature freeze_ marks a stage in development when no new features are accepted. The focus shifts to polishing what’s built and validating quality before release.

A new branch, "9.1.x", has been created to stabilize the code for the next release. Bug fixes to be integrated into version 9.1 should be submitted to this branch, and the `develop` branch now targets future versions.

When does the stabilization phase end? Once the software is stable enough for broad testing, the team will release a public beta. We expect this to happen within a couple of weeks.

### Next steps

Now that the feature freeze is in effect and everyone is focusing on polishing the 9.1 features, the next step will be to release a public beta version.

With the feature freeze, the testing process starts: we encourage the community to actively participate, by providing [feedback](https://github.com/PrestaShop/PrestaShop/discussions) and [reporting any bugs](https://github.com/PrestaShop/PrestaShop/issues/new?assignees=&labels=Bug%2CNew&template=1_bug_report.yml) or issues encountered. This phase is essential to securing the highest quality for the final PrestaShop 9.1 release.

### What’s new in PrestaShop 9.1?

Here are the headline improvements you can expect in 9.1 - some are ready for testing behind feature flags. Try them, give feedback, and help us polish them for the final release.

- [Hummingbird v2]({{< relref "/news/posts/2025/hummingbird-v2-beta" >}}) - the new default theme: refreshed look, performance optimizations, and improved front office UX.
- [New discount creation flow](https://www.youtube.com/watch?v=8PL0dwdRiho&t=1941s) - a streamlined, more intuitive interface for creating promotions (feature flag).
- [Multi-carrier](https://www.youtube.com/watch?v=JljSmYH-vdg&t=775s) - ability to assign multiple carriers to a single order and create multiple shipments within that order (feature flag).

We’ll share more details about these additions on the blog over the coming weeks. Stay tuned, and please share your feedback in our GitHub discussions.

**Note on One Page Checkout:**

Although we were planning to include OPC in 9.1, we’ve decided to postpone it to a later 9.x minor release. The team needs more time to plan and polish this important feature. We’ll share updates as soon as we have a clearer timeline.

### Testing PrestaShop 9.1

To test the development version, you should work from the Git repository, the dedicated `9.1.x` branch, and work from sources. Typical steps:

1. Clone the repository and switch to the `9.1.x` branch:

```bash
git clone git@github.com:PrestaShop/PrestaShop.git
cd PrestaShop
git fetch
git checkout 9.1.x
git pull origin 9.1.x
```

2. Install PHP and JavaScript dependencies and build assets:
```bash
composer install
./tools/assets/build.sh
# or alternatively
make assets
```

3. Then, you can proceed with the web installation as usual, from the `install-dev` folder.

### PrestaShop 9.2 - a word about the release cycle

Originally, we planned a single minor release in the `9.x` cycle, but the roadmap has evolved: we now expect to publish at least PrestaShop 9.2.

There may be further `9.x` minor releases, or the cycle may finish at 9.2 - that will depend on the team’s focus on polishing existing features and on work such as the One Page Checkout.

Our priority is stability and quality so that decisions will be guided by readiness rather than by a fixed count of versions. We’ll share updates as plans firm up.

In the meantime, if you want to stay updated regarding the release of PrestaShop 9.1, make sure to [subscribe to this GitHub issue](https://github.com/PrestaShop/PrestaShop/issues/40051).

## Your feedback is essential!

We're focusing on stabilizing 9.1 - you can help by testing the `9.1.x` branch and reporting regressions early so we can fix them before release.

How you can help
- Test from sources on the `9.1.x` branch (see instructions above) and try to reproduce real-world scenarios.
- Module and theme authors: verify compatibility with 9.1 and report any breaking changes.
- When you find a problem, [file a clear bug report on GitHub (choose the Bug template)](https://github.com/PrestaShop/PrestaShop/issues/new/choose). Mention you tested the `9.1.x` branch and include steps to reproduce, environment (PHP version, OS, browser), and logs where applicable.
- If you can code, submit a pull request to fix bugs — follow the contribution guide: [Contribute: Pull Requests](https://devdocs.prestashop.com/9/contribute/contribute-pull-requests/).
- Share questions or broader feedback in [GitHub Discussions](https://github.com/PrestaShop/PrestaShop/discussions) or on [Slack](https://www.prestashop-project.org/slack/) so the team can prioritize work.

The feature freeze exists to ensure stability. The earlier issues are reported and fixed, the fewer regressions will reach the final 9.1 release.

Thank you for your help in making PrestaShop 9.1 the best it can be!
