---
layout: post
title: "A Fresh Start for PrestaShop Issues: Bringing Clarity to Chaos"
subtitle: "How we're transforming 2,300 issues into a clear and efficient system for everyone"
date:   2025-12-08
authors: [ AlexisGuyomar ]
icon: icon-leaf
tags: [ issues ]
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
---
## 2,300 issues. One number. One Challenge.

Imagine searching for a needle in a haystack of 2,300 straws. That's exactly what PrestaShop contributors experience today when trying to check if their bug has already been reported. It's also the daily challenge for our QA teams navigating this ocean of issues, some dating back to 2018.

This historical centralization in [PrestaShop/PrestaShop](https://github.com/PrestaShop/PrestaShop/issues) made sense... until it didn't. Today, we're changing course.

## Our vision: every issue in its place, a place for every issue

We're opening issues directly in each repository that needs them (Core, Themes, Modules) so every repo tracks its own bugs. This provides immediate visibility into each component's health and makes it much easier to find existing issues. To maintain a global overview, we're creating three projects that aggregate these issues: **[BUG] Core**, **[BUG] Themes**, and **[BUG] Modules**. Standardized issue templates will automatically route each new issue to its corresponding project: no manual intervention is required!

![IssueBeforeAfter](/assets/images/2025/12/IssueBeforeAfter.png)

| Before            | After                         |
|-------------------|-------------------------------|
| Confused contributors | Immediate clarity             |
| Overwhelmed QA    | Fast qualification            |
| Global view       | Macro & global view by sector |

## What concretely changes for you

### Issues live where they belong

- **Bug in the Core?** → Open the issue in [PrestaShop/PrestaShop](https://github.com/PrestaShop/PrestaShop/issues)
- **Problem with a theme?** → Head to [PrestaShop/hummingbird](https://github.com/PrestaShop/hummingbird/issues) or [PrestaShop/classic-theme](https://github.com/PrestaShop/classic-theme/issues)
- **Module issue?** → Directly in the module's repo

Harmonized templates guide you, and each issue automatically arrives in the right project with a transparent workflow:

![IssueWorkflow](/assets/images/2025/12/IssueWorkflow.png)

### Discussions now open on Hummingbird
Hummingbird is one of PrestaShop Core's flagship projects, and it deserves its own dedicated space for community exchange. Starting today, discussions are open directly on the Hummingbird repository. You can now submit your suggestions, improvement ideas, and theme-specific questions right where they belong, without cluttering Core discussions. Another step towards clearer, more efficient organization!

### Expected benefits

- **Easier search**: finding if your bug already exists becomes instant
- **Accelerated qualification**: QA navigates more efficiently
- **Fewer duplicates**: better visibility means less repetition
- **Total transparency**: track each issue's progress in real-time

## FAQ: your questions, our answers

**"I don't know if it's a Core, Theme, or Module bug?"**
> No stress! Open the issue where you observe the problem. Our QA team will move it if needed.

**"What happens to the existing 2,300 issues?"**
> They stay in the Core repo for now. We're working on several sorting solutions. The most relevant ones may join the new projects after qualification.

**"Can I still have an overview?"**
> Absolutely! The three [BUG] projects offer you a macro vision, with filters by repo if needed.

**"Will documentation be updated?"**
> Yes, but after the pilot phase to avoid unnecessary changes in case of adjustments.

## The pilot phase starts TODAY!

![PilotBanner](/assets/images/2025/12/pilotBanner.png)

### Week 1 (December 8 - 15): themes lead the way
- Hummingbird and Classic test the new workflow.

### Week 2 - 3 (December 15 - January 5): popular modules follow
- [autoupgrade](https://github.com/PrestaShop/autoupgrade), [ps_facetedsearch](https://github.com/PrestaShop/ps_facetedsearch) & [ps_apiresources](https://github.com/PrestaShop/ps_apiresources) join the movement.

### Week 4 (January 5 - 9): generalization (if all green)

**Transparent success criteria:**
- Less than 50% misrouted issues
- Qualification within 5 business days
- QA satisfaction on target

## Maintainers: this is your moment!

Do you maintain a popular module? Want to be a pioneer of this change?

**Contact [@ga-devfront](https://github.com/ga-devfront) on GitHub or on community Slack** to join the pilot phase!

## How to participate starting now

1. **Use "Search existing issues" links** in templates before opening an issue.
2. **Provide maximum context**: reproduction steps, versions, screenshots.
3. **Follow your issues** in the new [BUG] projects.
4. **Share your feedback**: your experience helps us improve the system.

## Together, let's transform complexity into clarity

This change isn't just a technical reorganization. It's our commitment to a smoother, more rewarding, more efficient contributor experience.

Thank you for helping power the PrestaShop open source community.

**The pilot phase starts today. Are you ready?**
