---
layout: post
title: "A fresh start for PrestaShop issues: Bringing clarity to chaos"
subtitle: "How we're transforming 2,300 issues into a clear and efficient system for everyone"
date:   2025-12-02
authors: [ AlexisGuyomar ]
icon: icon-leaf
tags: [ issues ]
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
---

## 2,300 issues. Un nombre. Un problème.

Imagine searching for a needle in a haystack of 2,300 straws. That's exactly what PrestaShop contributors experience today when trying to check if their bug has already been reported. It's also the daily challenge for our QA teams navigating this ocean of issues, some dating back to 2018.

This historical centralization in [PrestaShop/PrestaShop](https://github.com/PrestaShop/PrestaShop/issues) made sense... until it didn't. Today, we're changing course.

##  Our vision: Every issue in its place, a place for every issue

### Before: Centralized chaos
```
Everything → PrestaShop/PrestaShop → 2,300+ mixed issues
         ↓
    - Lost contributors
    - Overwhelmed QA
    - Slow resolution
```

### After: Distributed organization
```
Core bug → Core repo → [BUG] Core project
Hummingbird / Classic bug → Theme repo → [BUG] Themes project  
Module X bug → Module repo → [BUG] Modules project
         ↓
    - Immediate clarity
    - Fast qualification
    - Global view preserved
```

## What concretely changes for you

### 📍 Issues live where they belong

- **Bug in Core?** → Open the issue in [PrestaShop/PrestaShop](https://github.com/PrestaShop/PrestaShop/issues)
- **Problem with a Theme?** → Head to [PrestaShop/hummingbird](https://github.com/PrestaShop/hummingbird/issues) or [PrestaShop/classic-theme](https://github.com/PrestaShop/classic-theme/issues)
- **Module issue?** → Directly in the module's repo

Harmonized templates guide you, and each issue automatically arrives in the right project with a transparent workflow:
`Waiting for QA → Ready → In progress → In review → Done`

### Expected benefits

- **Easier search**: Finding if your bug already exists becomes instant
- **Accelerated qualification**: QA navigates more efficiently
- **Fewer duplicates**: Better visibility = less repetition
- **Total transparency**: Track each issue's progress in real-time

## FAQ: Your questions, our answers

**"I don't know if it's a Core, Theme, or Module bug?"**
> No stress! Open the issue where you observe the problem. Our QA team will move it if needed.

**"What happens to the existing 2,300 issues?"**
> They stay in the Core repo for now. We're working on several sorting solutions. The most relevant ones may join the new projects after qualification.

**"Can I still have an overview?"**
> Absolutely! The three [BUG] projects offer you a macro vision, with filters by repo if needed.

**"Will documentation be updated?"**
> Yes, but after the pilot phase to avoid unnecessary changes in case of adjustments.

## The pilot phase starts TODAY!

### Week 1 (Dec 8-15): Themes lead the way
- Hummingbird and Classic test the new workflow

### Week 2 (Dec 15-22): Popular modules follow
- ps_facetedsearch and autoupgrade join the movement

### Week 3 (Dec 22-29): Generalization (if all green)

**Transparent success criteria:**
- Less than 50% misrouted issues
- Qualification within 5 business days
- QA satisfaction on target

## 📢 Maintainers: This is your moment!

Do you maintain a popular module? Want to be a pioneer of this change?

**→ Contact [@ga-devfront](https://github.com/ga-devfront) on GitHub or on community Slack** to join the pilot phase!

## How to participate starting now

1. **Use "Search existing issues" links** in templates before opening an issue
2. **Provide maximum context**: reproduction steps, versions, screenshots
3. **Follow your issues** in the new [BUG] projects
4. **Share your feedback**: your experience helps us improve the system

## Together, let's transform chaos into clarity

This change isn't just a technical reorganization. It's our commitment to a smoother, more rewarding, more efficient contributor experience.

Thank you for your continued support of PrestaShop open source.

**The pilot phase starts today. Are you ready?**
