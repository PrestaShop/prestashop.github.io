---
layout: post
title:  "The (new) PrestaShop Test Framework"
subtitle: "And how we’re continually improving the quality of the PrestaShop project"
date:  2020-02-05 12:00:00
authors: [SimonGarny]
icon: icon-checked
image: /assets/images/theme/meta-logo-build.png
tags: [QA, tests, community]
---

For a few months, quality has been a priority for PrestaShop: the QA team and I are proud to announce that we’re making great steps in improving the overall quality of the core project. Automatizing tests is a big part of this process: let’s see what we’re doing, why, and how !
Note: this article is focused on the Core only, but that’s just a small part of what the QA team is working on. More to come in a future article !


## What was before

Historically, the PrestaShop Core continuous integration had a big end-to-end test campaign which purpose was to test the whole application as thoroughly as possible. This campaign was using Selenium as the automation tool, and we were running it in two places:

- The whole campaign was running on every nightly build and for every release
- A small subset of the campaign was running for every Pull Request on GitHub through Travis CI

At the beginning of 2019, the QA team decided to drop this campaign and start over. In September 2019, we started the new version.

Why? There were mainly 3 reasons:

- Tests are run in headless mode (mandatory on Travis) and sadly, Selenium is kind of picky in headless. There were a lot of problems with it, and as you can imagine, it’s way more complicated to debug a failing test when there’s no GUI ! Screenshots have been tried, logs, everything possible but ultimately the failing tests had to be disabled as it was impossible to find a good solution.
- Selenium itself is not very stable: the test campaign can be run 3 or 4 times in a row on Travis and have different results, with different tests failing. Sometimes it couldn’t find a selector, or timed out when waiting for something… it was very difficult and time-consuming to make the tests more robust.
- The campaign was too complex: it was trying to test everything at once. The campaign would test all the functionalities in a page, but also doing some [functional testing](https://devdocs.prestashop.com/1.7/testing/how-to-create-your-own-web-acceptance-tests/#functional-tests) (verifying some functionalities work well together) and some [end-to-end testing](https://devdocs.prestashop.com/1.7/testing/how-to-create-your-own-web-acceptance-tests/#end-to-end-tests-soon) (running through the application like a real user and testing a bunch of functionalities at once). The result was a very complex test suite, very brittle (end-to-end tests are by design really fragile) and a nightmare to maintain and fix.

There were some concerns with the code too: although it was working, there was no real framework behind it. No separation of concerns, no proper use of inheritance, no distinction between the test logic and the page logic. It was very complicated to find the source of a problem sometimes, and with more than 8000 test cases it frequently was not possible to fix it.

All these reasons made it clear that it was time to drop the whole thing and start over.


## What is coming

The QA team decided to work on three points.

### Automation tool

It was already decided to drop Selenium, but what would be a good replacement ? There are a lot of options there, including SaaS solutions (Cypress, QAWolf, etc). After reviewing a few possibilities, the best choice was to go for [Puppeteer](https://github.com/puppeteer/puppeteer).

Puppeteer is a Node library which provides a nice API to control Chrome. It can pretty much do everything you can do manually. It’s maintained by Google, which is always a good sign.
It’s also more robust and more stable in headless (which was a killer feature for us) since it was designed with headless in mind.


### New framework

The aim was also to create a more robust way to create and maintain tests to avoid the problems we had with the last implementation. Since Puppeteer is “just” a library, the QA team would have to create a whole framework around it, and that was a good opportunity to take a look at the [Page Object Pattern](https://martinfowler.com/bliki/PageObject.html). This pattern makes you separate the test logic from the page logic.

On one hand, you create separate objects for every page you’ll need to automate things on. Each object will then hold its own logic, from selectors to basic methods to use on the page (for example, fill a form, sort a table, choose an option from a dropdown, etc).

On the other hand, you create your test logic by using these objects. The goal is to have really small test steps which then use the methods from the objects. This way, your tests don’t know what’s happening behind the scenes. They only call methods which act as an abstraction layer.

This is a good illustration of the separation of concerns: when a page is updated, you only change the corresponding object in its separate file so that selectors and methods still work the same. When your test needs an update, you only change the logic in the steps.


### Re-focus the test effort

The third point was about the campaign itself. We wanted to redirect the campaign to be more effective, faster (the full Selenium campaign could last for up to 20 hours !) and easier to maintain. That would mean a shift in the focus of the campaign: instead of making a “do-it-all” campaign, we would split up the effort in 3 campaigns: 

- A sanity tests campaign
- An integration tests campaign
- An end-to-end tests campaign

Each of these campaigns had its perks.

The **sanity campaign** is here to make sure devs don’t break some core functionalities of PrestaShop. Ran for every PR, it checks all the critical features of the app: the frontend catalog, the cart, the checkout process; but also the backend with the product section and the order section. It’s a fast campaign (about 8 min) and it must pass for the PR to be reviewed: a fail in this section means being back to the coding board for the incriminated dev, with all the shame it brings (not really, but we QA engineers like to think it does).

The **integration campaign** is the big pièce de résistance: every feature of every page is tested one by one (with of course a few exceptions when it’s too complicated to automate). The goal here is to verify that all features (taken individually) still work as expected. That means testing tables, filters, and CRUD functionalities (Create, Read, Update, Delete).
This campaign is the biggest so far, and my team and I are proud to say that it works wonderfully. There are still some errors sometimes but we hope to iron things out with time. It already proved itself useful by finding bugs ! It’s also very consistent: when it fails it’s always in the same spot and for the same reason.

The **end-to-end campaign** will cover what’s left: it is used to test real user paths. The goal is to make sure all the actions a merchant can do are covered by tests, so that the Tech team can be confident about the level of quality of the application. The Product team (and the QA team) already have a good idea of those user paths (gathered through the interviews with merchants) and we will try to implement paths that are the most relevant to a merchant daily and weekly recurring actions.

There is one last campaign: we want to make sure old issues stay fixed and don’t come back after a while. There will be a regression campaign for this sole purpose after (or at least get up to a comfortable coverage) the main campaign is finished. It will target critical and major issues for the last few minor versions.


## That’s nice, but where can I see all the action ?

Our [nightly board is public](https://nightly.prestashop.com/)! You can check it and open every report. The current version was quickly engineered to let us gather the data and present it in an acceptable way, but it’s being redone (thanks to the UX team and our front-end developer!) in a few weeks (hopefully), using the UI Kit developed for PrestaShop. Keep an eye on it!

All the tests I present in this article are also available in the [develop](https://github.com/PrestaShop/PrestaShop/tree/develop/tests/puppeteer) and [1.7.7.x](https://github.com/PrestaShop/PrestaShop/tree/1.7.7.x/tests/puppeteer) branches in the GitHub repository. Feel free to explore and execute them.

Don’t forget that you can help us by [writing tests or Page Objects through Pull Requests](https://devdocs.prestashop.com/1.7/testing/how-to-create-your-own-web-acceptance-tests/#creating-a-web-acceptance-test)!

Addendum: the team behind Puppeteer recently revealed their new project: [PlayWright](https://github.com/microsoft/playwright). Based on their work on Puppeteer, it’s also a Node library but able to communicate with Chromium, Firefox, and Edge. As soon as they release a stable version, we’ll look seriously into it, since testing all major browsers would be a nice addition.


## TL;DR

The PrestaShop QA team is dropping Selenium and redoing the whole Core test campaign using another tool called Puppeteer, with another design pattern (Page Object Model).
We aim for better coverage, faster answers for the devs, less time lost in maintaining and fixing the tests, and overall a real change in the quality of the open source project we love !

As always, at PrestaShop we’re impatient to hear your comments and suggestions.

