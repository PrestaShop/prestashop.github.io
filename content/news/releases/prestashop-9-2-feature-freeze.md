---
layout: post
title:  "PrestaShop 9.2 is in feature freeze"
subtitle: "Explore the next steps and what's coming in PrestaShop 9.2"
date:   2026-07-09
authors: [ PrestaShop ]
icon: icon-compass
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
tags:
- news
- version
- beta
- minor
- releases
- "9.2"
- "9.x"
- "9.2.x"
---

As of July 9th, 2026, PrestaShop version 9.2 has entered the feature freeze phase. Learn more about the feature freeze, the next steps, and what's coming in PrestaShop 9.2.

### PrestaShop 9.2 feature freeze is in effect

As of today, PrestaShop 9.2 is in feature freeze. What is a feature freeze? _Feature freeze_ marks a stage in development when no new features are accepted. The focus shifts to polishing what's built and validating quality before release.

A new branch, "9.2.x", has been created to stabilize the code for the next release. Bug fixes to be integrated into version 9.2 should be submitted to this branch, and the `develop` branch now targets future versions.

### Next steps

With everyone now focused on polishing the 9.2 features, the next step is a public beta version. Once the software is stable enough for broad testing, the team will release it, and we expect this to happen within a couple of weeks.

With the feature freeze, the testing process starts: we encourage the community to actively participate, by providing [feedback](https://github.com/PrestaShop/PrestaShop/discussions) and [reporting any bugs](https://github.com/PrestaShop/PrestaShop/issues/new?assignees=&labels=Bug%2CNew&template=1_bug_report.yml) or issues encountered. This phase is essential to securing the highest quality for the final PrestaShop 9.2 release.

### What's new in PrestaShop 9.2?

Here are the headline improvements you can expect in 9.2. We'll share more details for each one on the blog as we approach the public beta.

- **One Page Checkout** - the native One Page Checkout module we postponed from 9.1 is finally here. It brings the entire checkout experience together onto a single page for a faster, smoother flow, bundled directly into PrestaShop so merchants no longer have to rely on third-party solutions. Follow the [project discussion](https://github.com/PrestaShop/PrestaShop/discussions/40913) for the details.
- **Extra Properties** - a new native way for developers to attach extra fields to core entities such as Product, Customer, or Order, with built-in support for multistore, multilang, back office forms and grids, front office access, and the Admin API. No more rebuilding the same persistence plumbing in every module. You can [follow the development on GitHub](https://github.com/PrestaShop/PrestaShop/issues/41422).
- **The Symfony migration continues** - another batch of legacy pages has completed its migration to the Symfony framework and is now ready for testing behind a feature flag. Migrated pages are cleaner, easier to maintain and extend, and benefit from Symfony's modern security and form handling.

We'll share more details about these additions on the blog over the coming weeks. Stay tuned, and please share your feedback in our GitHub discussions.

### Testing PrestaShop 9.2

To test the development version, you should work from the Git repository, the dedicated `9.2.x` branch, and work from sources. Typical steps:

1. Clone the repository and switch to the `9.2.x` branch:

```bash
git clone git@github.com:PrestaShop/PrestaShop.git
cd PrestaShop
git fetch
git checkout 9.2.x
git pull origin 9.2.x
```

2. Install PHP and JavaScript dependencies and build assets:
```bash
composer install
./tools/assets/build.sh
# or alternatively
make assets
```

3. Then, you can proceed with the web installation as usual, from the `install-dev` folder.

## Your feedback is essential!

We're focusing on stabilizing 9.2 - you can help by testing the `9.2.x` branch and reporting regressions early so we can fix them before release.

How you can help
- Test from sources on the `9.2.x` branch (see instructions above) and try to reproduce real-world scenarios.
- Module and theme authors: verify compatibility with 9.2 and report any breaking changes.
- When you find a problem, [file a clear bug report on GitHub (choose the Bug template)](https://github.com/PrestaShop/PrestaShop/issues/new/choose). Mention you tested the `9.2.x` branch and include steps to reproduce, environment (PHP version, OS, browser), and logs where applicable.
- If you can code, submit a pull request to fix bugs, following the contribution guide: [Contribute: Pull Requests](https://devdocs.prestashop.com/9/contribute/contribute-pull-requests/).
- Share questions or broader feedback in [GitHub Discussions](https://github.com/PrestaShop/PrestaShop/discussions) or on [Slack](https://www.prestashop-project.org/slack/) so the team can prioritize work.

The feature freeze exists to ensure stability. The earlier issues are reported and fixed, the fewer regressions will reach the final 9.2 release.

Thank you for your help in making PrestaShop 9.2 the best it can be!
