---
layout: post
title: "Meet the PrestaShop Wall of Fame"
subtitle: "Celebrating the people and companies powering PrestaShop"
date: 2025-08-12
authors: [ kpodemski ]
icon: icon-leaf
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
tags: [contribute, community, contribution]
---

From its very first release, PrestaShop has been built and improved thanks to the dedication of its open source community. Today, we're introducing a new way to celebrate that dedication - directly in your back office.

The **Wall of Fame** is a new tab in the back office available through the `ps_distributionapiclient` (version 1.2.0)  module that showcases the top companies and individuals contributing to PrestaShop. Merchants can now see, right where they manage their store, the vibrant community making the software better every day.

### A showcase of our community heroes

The Wall of Fame brings our contributors to the forefront by ranking the most active developers and companies improving PrestaShop. It showcases real faces and names, adding a human touch to the open source experience, while live contribution statistics highlight the vitality and ongoing evolution of the project.

To make it even more engaging, the page introduces gamification elements such as rankings and recognition, sparking friendly competition within the community. Whether you're fixing bugs, creating new features, or improving documentation - your contributions can be visible to every PrestaShop merchant.

![PrestaShop Wall of Fame](/assets/images/2025/08/prestashop-wall-of-fame.jpeg)

### How to get your company recognized?

When you submit a pull request to PrestaShop core, modules, or documentation, you can fill out the **Sponsor company** field. This allows us to attribute your contribution to your company.

If you'd like to make this process automatic (recommended), you can add your company and its employees to the [`companies.json`](https://github.com/PrestaShop/traces/blob/master/var/data/companies.json) file in the [PrestaShop/traces](https://github.com/PrestaShop/traces) repository.

Traces is our internal Symfony CLI tool that:
- Fetches all repositories of the PrestaShop organization
- Collects all contributors and their contributions in JSON format
- Lists all merged pull requests

By adding your company to `companies.json`, all contributions from your team members will be counted towards your company's ranking. You can even add a custom `avatar_url` to display your company logo in the back office.

### Why does it matter?

The Wall of Fame is more than a leaderboard - it’s a window into the people and companies driving PrestaShop forward. By seeing the names and faces of those shaping the platform, merchants can better recognize the expertise of top developers and agencies, and trust their proven involvement in the project.

It also highlights an important truth: PrestaShop SA remains the main contributor to the open source project, working hand-in-hand with a passionate community. This shared effort ensures the platform continues to grow, improve, and meet the needs of merchants worldwide.

Every contribution, big or small, helps the entire ecosystem. Whether you fix a typo in the documentation, submit a bug fix, or deliver a major feature - it all counts. By contributing, you not only help merchants worldwide, but you can also see your name (or your company's) celebrated in the Wall of Fame.

Join us, make your mark, and be part of the story shaping PrestaShop's future.
