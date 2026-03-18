---
layout: post
title: "AI-Powered API Hackathon: 14+ Endpoints in a Single Day"
subtitle: "How PrestaShop teams used Claude Code to accelerate Admin API contributions"
date: 2026-03-17
authors: [ kpodemski ]
icon: icon-rocket
tags:
 - news
 - community
 - development
 - api
 - ai
---

On March 12th, developers from across PrestaShop's tech teams joined forces for a hackathon, splitting into four teams with one clear mission: accelerate the development of the Admin API.

Some teams used AI to generate endpoint code, others relied on it primarily for writing integration tests, and some mixed both approaches depending on the complexity of their assigned domain. The result exceeded expectations: **14+ new API endpoints** created in a single day, plus a reusable Claude Code Skill to help create endpoints even faster in the future.

![PrestaShop API Hackathon - teams working on Admin API endpoints with Claude Code](/assets/images/2026/03/api-hackathon-claude-code.jpg)

## The Admin API: why it matters

PrestaShop 9 introduced a modern Admin API built on [API Platform](https://api-platform.com/), a well-established PHP framework for building web APIs. This API follows the CQRS (Command Query Responsibility Segregation) pattern and provides a structured, standards-compliant way to interact with your store programmatically.

The long-term goal is to cover all the resources that merchants and developers need. As of today, around 29% of the planned 453 endpoints have been implemented. That's solid progress, but there's a long road ahead, and this is exactly where a community-driven open source project can shine: by making it easy for many hands to contribute.

## Hackathon day: teams, structure, and goals

The day kicked off with a presentation on the Admin API architecture, covering API Platform, CQRS integration, and the conventions for creating new endpoints. Each of the four teams, led by an experienced champion, was assigned a set of API resources to implement.

The domains covered included Country, Search Engine, Employee, and Profile, among others. Teams followed the [step-by-step contribution guide](https://devdocs.prestashop-project.org/9/admin-api/contribute-to-core-api/) available in the developer documentation.

## Claude Code as a development partner

What made this hackathon different from previous events was the widespread adoption of AI tools. Many teams chose to use [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview), Anthropic's CLI tool for AI-assisted development, as part of their workflow.

Here's how it helped those who used it:

- **Scaffolding new endpoints.** Claude Code understands the CQRS and API Platform patterns used in PrestaShop. Given the right context, it generated the boilerplate code for commands, queries, handlers, and API resource definitions, tasks that normally require careful copy-pasting from existing examples.
- **Writing integration tests.** PHPUnit integration tests for API endpoints follow a predictable structure. Claude Code produced test scaffolding that teams could then refine and validate.
- **Navigating conventions.** With project-specific instructions loaded through a CLAUDE.md file, the AI assistant stayed aligned with PrestaShop's coding standards, Rector rules, and CI requirements.
- **Faster onboarding.** Team members who had never created an API endpoint before were able to contribute meaningfully because the AI handled the boilerplate while the developer focused on understanding the business logic.

One team went a step further and created a **Claude Code Skill** (a reusable prompt template) specifically for endpoint creation. This means future contributors can use the same structured workflow to create new endpoints even more efficiently. You can find it in [this pull request](https://github.com/PrestaShop/ps_apiresources/pull/154).

## What was achieved

By the end of the day, teams had opened pull requests covering a wide range of operations:

- [CREATE Country](https://github.com/PrestaShop/ps_apiresources/pull/157) and [DELETE Country](https://github.com/PrestaShop/ps_apiresources/pull/158)
- [CREATE Search Engine](https://github.com/PrestaShop/ps_apiresources/pull/156) and [DELETE Search Engine](https://github.com/PrestaShop/ps_apiresources/pull/150), with GET and LIST coming soon
- [Full CRUD for Employees](https://github.com/PrestaShop/ps_apiresources/pull/155) (CREATE, UPDATE, GET, LIST, DELETE)
- [CREATE, GET, DELETE Profile](https://github.com/PrestaShop/ps_apiresources/pull/152)
- [Claude Code Skill for endpoint creation](https://github.com/PrestaShop/ps_apiresources/pull/154)

That's **14+ new endpoints** produced in a single day. To put those numbers in context: the Admin API currently tracks 473 total endpoints, of which 140 are implemented (29.6%) and 72 are in progress. The hackathon alone contributed roughly 3 percentage points of progress. If all pending pull requests are merged, coverage would jump to nearly 45%, bringing the project close to the halfway mark.

## AI for open source: responsible and transparent

We want to be upfront about how we see AI fitting into PrestaShop's development process. The goal has always been to remove friction, not to replace developers.

This conviction comes from the top. As [Mikołaj Król](https://www.linkedin.com/in/bitbager/), CEO of PrestaShop, [shared recently](https://www.linkedin.com/posts/activity-7435229420967305216--R-k): he wants PrestaShop to become one of the most vibe-coding-friendly platforms out there. And open source projects are in a uniquely strong position to make that happen. Twenty years of community questions, forum threads, Stack Overflow answers, and GitHub issues give AI models an incredibly rich training ground. On top of that, the way we structure our documentation directly impacts the quality of AI-generated output, something we're already seeing with tools like Claude Code.

As Mikołaj puts it, AI may well rekindle the old love for open source. The barrier to becoming a developer has dropped significantly, and that's a win for merchants, agencies, and the entire community.

Creating a new API endpoint involves a significant amount of structured, repetitive code. The business logic, the part that actually matters, is a relatively small portion of the total work. AI tools are excellent at handling the predictable parts so that developers can invest their energy where human judgment is essential: understanding requirements, making architectural decisions, and reviewing code quality.

A few principles guide our approach (you can also read our [contribution guidelines on AI use](https://devdocs.prestashop-project.org/9/contribute/contribution-guidelines/#on-ai-use-in-contributions)):

1. **AI assists, humans decide.** Every pull request goes through the same review process regardless of how the code was written. The CI pipeline, Rector checks, and human reviewers ensure quality.
2. **Transparency matters.** We're open about using AI tools, and we encourage contributors to be transparent about it too.
3. **Lowering the barrier to contribution.** If AI can help a developer who has never contributed to the Admin API submit a working pull request on their first attempt, that's a win for the entire community.

## Not our first AI internal event

This API hackathon wasn't the first time PrestaShop explored AI-assisted contributions. A recent internal event saw people from across the company, not just engineers, try their hand at contributing to PrestaShop with the help of AI tools.

Perhaps the most striking example: [Olivier Binet](https://www.linkedin.com/in/olivierbinet/), PrestaShop SA's Managing Director, submitted [his very first pull request](https://github.com/PrestaShop/ps_banner/pull/79) without ever having touched PrestaShop's codebase before. A lighthearted experiment for sure, but it perfectly illustrates the point: when AI handles the technical scaffolding, the barrier to contributing drops dramatically, and the possibilities become genuinely exciting.

## What's next

This hackathon was a starting point, not a one-off event. We're investing in making AI-assisted contribution a repeatable, documented workflow that anyone in the community can follow. The Claude Code Skill for endpoint creation is a concrete example of this effort.

If you're a PrestaShop developer interested in contributing to the Admin API, here are some resources to get started:

- [Admin API endpoint tracking](https://github.com/PrestaShop/PrestaShop/issues/39630) to see which endpoints still need implementation
- [ps_apiresources repository](https://github.com/PrestaShop/ps_apiresources) where the API resource module lives
- [Step-by-step contribution guide](https://devdocs.prestashop-project.org/9/admin-api/contribute-to-core-api/) in the developer documentation.

The Admin API is one of the most impactful areas where contributions can make a difference for the entire PrestaShop ecosystem. With AI as a development partner, there has never been a better time to get involved.
