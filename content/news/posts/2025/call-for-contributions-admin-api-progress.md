---
layout: post
title: "Call for contributions: Admin API - great start!"
subtitle: "The community is building the future of PrestaShop's integration layer"
date: 2025-11-12
authors: [ kpodemski ]
icon: icon-leaf
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
tags: [contribute, community, contribution]
---

Two months ago, we launched our [second Call for Contributions initiative]({{< relref "/news/posts/2025/call-for-contributions-admin-api" >}}), this time focusing on the Admin API. We're excited to share the progress that's been made!

![Admin API Contributions Progress](/assets/images/theme/banner-ps-project.png)

## What is this initiative about?

Following the success of our [first Call for Contributions focused on hooks]({{< relref "/news/posts/2025/call-for-contributions-hooks-summary" >}}), we asked the community during the FoP Days to vote on what to tackle next. The Admin API emerged as a top priority, alongside hooks and web accessibility.

The new Admin API introduced in PrestaShop 9 provides a modern, standardized way to interact with PrestaShop programmatically. Built on the [API Platform](https://api-platform.com/), it offers a solid foundation - but to make it truly useful for the entire ecosystem, we need to expand it with more endpoints covering all major PrestaShop entities.

That's where you come in! We invited the community to contribute new Admin API endpoints, helping the ecosystem transition away from legacy web services toward a robust, future-proof integration layer.

## Setting up for success

To make contributing as smooth as possible, we prepared:

- **Comprehensive documentation**: a complete guide on [how to contribute a new endpoint](https://devdocs.prestashop-project.org/9/admin-api/contribute-to-core-api/)
- **Dedicated support channel**: the `#cfc-adminapi` channel on [PrestaShop Slack](https://www.prestashop-project.org/slack/) where contributors can get help quickly
- **Clear visibility**: all contributions are labeled `Admin API Contribution` for easy tracking

## The results so far

Contributors from various companies and individual developers have been submitting high-quality endpoints at an impressive pace.

You can track the full progress in our [API coverage tracker](https://github.com/PrestaShop/PrestaShop/issues/39630), which shows exactly which endpoints have been implemented and what's still available to work on.

## Who's contributing?

Companies from our ecosystem are investing time in expanding the API, knowing it will benefit everyone who integrates with PrestaShop.

So far, we've received fantastic contributions from:

- **[@Codencode](https://github.com/Codencode)** - added crucial endpoints for categories (including bulk operations and image management), attributes, and hooks
- **[@Progi1984](https://github.com/Progi1984)** - contributed endpoints for Store, Supplier, Tax Rules Groups, and Title domains
- **[@Jeremie-Kiwik](https://github.com/Jeremie-Kiwik)** from [Kiwik](https://kiwik.com) - worked on Address endpoints

The PrestaShop SA Core Team has been actively supporting this initiative by reviewing pull requests, stabilizing existing endpoints, and working on new endpoints for the upcoming Discounts feature that will be part of PrestaShop 9.1.

Every contribution, whether it's a simple GET endpoint or a complex bulk operation, moves the project forward and makes PrestaShop more powerful for everyone.

## What's still needed?

While progress has been steady, **there's still a lot of room for more contributions!** The [coverage tracker](https://github.com/PrestaShop/PrestaShop/issues/39630) highlights the entities that still need endpoints. Let’s work together to improve further!

## How to get started

Ready to contribute? Here's how:

1. **Join the conversation**: head to the `#cfc-adminapi` channel on [PrestaShop Slack](https://www.prestashop-project.org/slack/)
2. **Read the docs**: check out the [Admin API documentation](https://devdocs.prestashop-project.org/9/admin-api/) and the [contribution guide](https://devdocs.prestashop-project.org/9/admin-api/contribute-to-core-api/)
3. **Pick an endpoint**: review the [coverage tracker](https://github.com/PrestaShop/PrestaShop/issues/39630) to see what's available
4. **Announce your work**: drop a message in the Coverage Tracker, Slack channel or open a draft PR to let others know what you're working on
5. **Submit your PR**: we'll label it with `Admin API Contribution`, so it can be tracked properly.

Contributing to the Admin API does require solid knowledge of PHP, Symfony, and API Platform. However, we've prepared comprehensive documentation to guide you through the process. If you run into any issues or have questions, the `#cfc-adminapi` Slack channel is there to help you find solutions.

## Timeline and what's next

Project members are actively reviewing Admin API contributions, with the goal of completing the initiative by the end of 2025. All merged endpoints will be integrated into the `ps_apiresources` module, making them available to the entire PrestaShop ecosystem.

But this isn't a race to December - it's about building a solid, well-documented, and maintainable API that will serve the PrestaShop community for years to come. Quality matters more than speed.

## A huge thank you!

To everyone who has contributed so far: **thank you!** Your work is making PrestaShop more powerful, more flexible, and easier to integrate with. Every endpoint you add helps agencies, developers, and merchants build better solutions.

This is what open source is all about - a community coming together to build something greater than any single company could achieve alone.

## Join us!

If you're an experienced PrestaShop developer with knowledge of Symfony and API Platform, we'd love to have your contribution. The Admin API is one of the most important improvements in PrestaShop 9, and you can be part of making it complete.

Check out the [coverage tracker](https://github.com/PrestaShop/PrestaShop/issues/39630), review the [documentation](https://devdocs.prestashop-project.org/9/admin-api/contribute-to-core-api/), and join the [Slack channel](https://www.prestashop-project.org/slack/) to get started!

**Useful links:**

- [Admin API documentation](https://devdocs.prestashop-project.org/9/admin-api/)
- [How to contribute a new endpoint](https://devdocs.prestashop-project.org/9/admin-api/contribute-to-core-api/)
- [API coverage tracker](https://github.com/PrestaShop/PrestaShop/issues/39630)
- [Meet PrestaShop 9 Admin API - user guide]({{< relref "/news/posts/2024/meet-prestashop9-api" >}})
- [How to use the new Admin API](https://devdocs.prestashop-project.org/9/admin-api/how-to-use/)
- [Join PrestaShop Slack](https://www.prestashop-project.org/slack/)
