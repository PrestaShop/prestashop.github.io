---
layout: post
title:  "Improvements to come on contributors board"
subtitle: "More features, more modern, and more information about contributors"
date:  2020-03-12 15:30:00
authors: [AntoineThomas]
icon: icon-board
image: /assets/images/theme/meta-logo-build.png
tags: [contribute, community]
---


After all those years without any modification nor improvement, it is time to think about the future of the "[Top contribution achievements](http://contributors.prestashop.com/)" board. While discussing with many people from the community on how to open the governance of the open source project, and how to involve more contributors, new needs have been identified. This article is about quick wins, upcoming developments, and about the general spirit behind this work.

## But, why?

In 2020, a lot of work is going to be done around the PrestaShop open source project to make it more attractive for contributors. It must of course take into account that most people don't really contribute out of generosity, because at the end of the month, everybody has to pay their bills. So, like with other well-known open source projects, people and companies who take time to contribute to PrestaShop must be able to show off: being visible in the community as an expert is valuable to attract customers, it provides proof that they know what they are doing with their PrestaShop business.

There are many ideas that are currently being tested, or will be soon:

- [Call for papers at PrestaShop events](https://build.prestashop.com/news/CFP-PrestaShop-Day-Paris-2020/), giving a place for community speakers
- Opening the maintainer role on a GitHub repository with selected developers, in order to identify problems and document how to do it well;
- Opening a chat platform for contributors (due date on Q1)
- ... and this is just the tip of the iceberg

But, in the end, the question remains: how can contributors show their knowledge, their expertise, and their investment in the project to their customers?

This is why it is time to improve the Contributors' board. Let's see what is on the schedule already.


## The current plan

### First step: quick wins

If you go on [contributors.prestashop.com](http://contributors.prestashop.com/), it is easy to notice a few issues:

- Some contributors like PrestaShop employees are not listed, although they do a huge job on the open source project since the very beginning, and this work is currently hidden
- It is not possible to see the entire list of contributors, without clicking on "see more", or on page numbers
- The board lists only contributions to the core; but the PrestaShop software is also made of modules and of other valuable contributions such as specifications, documentation, blog posts, and many more. 

So, it became obvious that the first step must be to show the work of everyone involved in the making of the PrestaShop open source software project.

In the weeks to come, a few improvements will be in production:

1. Remove the current filter to hide some contributors, in order to see everybody. Like the current version, the number of commits will be used, that part doesn't change
2. Instead of just counting commits on the core repository, it is time to count commits on all the repositories; this is easier now that the PrestaShop GitHub's organisation is focused only on the open source project
3. The page will be modified a bit to be fully scrollable, without hidden parts, with the aim to make it easy to find someone 

These will be the first improvements, and the development work has been started already. The result is subject to evolve a bit at the beginning, depending on how data will be aggregated, and also because the cleanup of the GitHub organization is not yet complete (e.g: there are still some old partner modules that need to be archived). However, the new board should quickly give a comprehensive view of the entire contributor team over years.

### Second step: new features and look'n feel

New contents are currently studied:

- A dedicated "profile page" for each contributor, with the list of repositories and other useful information
- A way to show or split the leader board per component (core, modules, ...)
- A Company leaderboard (the current one is only for individuals)
- A dedicated "profile page" for each company, with the same purpose

Also, please note that a few mockups have been done in 2019 to see how to make the look'n feel more modern and add other interesting boards and features. This should be implemented later this year, depending on the availability of a front developer.


## A few questions left

There are still a few questions that need some work, as the target is to create a good way to show the work of contributors:

- How to manage contributors that have worked for many companies over time, in order to count company contributions?
- Is it interesting to introduce contribution sponsors, like Drupal is doing, and if yes, how? (e.g: a merchant "sponsors" a bug fix by paying a developer to fix it and submit a pull request)
- Should we introduce some gamification in the contribution board? (badges, achievements, ...)
- Once the contributor profile is ready, what other useful information could be displayed? (participation to PrestaShop events, issues solved, ...)
- How to integrate other kinds of contributions to the board, like translations on Crowdin, number of code reviews done by maintainers, issues opened, and everything that takes a lot of time and makes the PrestaShop software so great?

If you have good ideas to share, or just want to discuss about this article, pleases leave a comment or get it touch with me through other channels.

Let's build a better community together.
