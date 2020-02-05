---
layout: post
title:  "The (new) PrestaShop Test Framework"
subtitle: "And how we're continually improving the quality of the PrestaShop project"
date:  2020-02-05 12:00:00
authors: [SimonGarny]
icon: icon-checked
image: /assets/images/theme/meta-logo-build.png
tags: [QA, tests, community]
---

For a few months, quality has been a priority for PrestaShop: the QA team and I are proud to announce that we're making great steps in improving the overall quality of the core project. Automatizing tests is a big part of this process: let’s see what we’re doing, why, and how!
Note: this article is focused on the Core only, but that is just a small part of what the QA team is working on. More to come in a future article!

## TL;DR

The PrestaShop QA team is dropping Selenium and redoing the whole Core test campaign using another tool called Puppeteer, with another design pattern (Page Object Model).
We aim for better coverage, faster answers for the devs, less time lost in maintaining and fixing the tests, and overall a real change in the quality of the open source project!

## Taking a look back

Historically, the PrestaShop Core continuous integration had a big end-to-end test campaign which purpose was to test the whole application as thoroughly as possible. [This campaign](https://build.prestashop.com/news/prestashop-test-framework/) was using Selenium as the automation tool, and was running in two places:

- The whole campaign was running on every nightly build and for every release
- A small subset of the campaign was running for every Pull Request on GitHub through Travis CI

In March 2019, the QA team decided to stop improving the Selenium campaign (doing only some maintenance) and create a new campaign using Puppeteer. It took quite some time to have a good POC and our engineers started working on it in September. Mid-September there was a sanity campaign up on Travis, and in January 2020 the nightly Selenium campaign was finally dropped and replaced with our growing Puppeteer one.

There are multiple reasons behind this choice, here are the three main ones:

- Tests were run in [headless mode](https://en.wikipedia.org/wiki/Headless_software) (mandatory on Travis). Unfortunately, Selenium is [quite](https://stackoverflow.com/questions/54984306/problem-with-chromedriver-in-headless-mode) [picky](https://github.com/SeleniumHQ/selenium/issues/4685) [when](https://github.com/SeleniumHQ/selenium/issues/4477) used in headless mode. This created multiple issues when tests would fail although the code was bug free. Alas, debugging a failing test without a GUI is very tedious. Our QA engineers used multiple workarounds (screenshots of failing screens, logging every event, ...) but ultimately it was decided to disable the failing tests as it was not possible to make them run in a reliable manner.
- Selenium itself is not very stable: the test campaign could be run 3 or 4 times in a row on Travis and have different results, with different tests failing. Sometimes it could not find a selector, or [timed out](https://github.com/PrestaShop/PrestaShop/issues/14384) when waiting for something… it was very difficult and time-consuming to make the tests more robust.
- The campaign was too complex: it was trying to test everything at once. The campaign would test all the features in a page, but also doing some [integration testing](https://devdocs.prestashop.com/1.7/testing/how-to-create-your-own-web-acceptance-tests/#functional-tests) (verifying some features work well together) and some [end-to-end testing](https://devdocs.prestashop.com/1.7/testing/how-to-create-your-own-web-acceptance-tests/#end-to-end-tests-soon) (running through the application like a real user and testing a bunch of features at once). The result was a very complex test suite, very brittle (end-to-end tests are really fragile by design) and a nightmare to maintain and fix.

There were some concerns with the structure of the code of this campaign too. Although it did the job, there was no clear architecture behind it. No separation of concerns, no proper use of inheritance, no distinction between the test logic and the page logic. The lack of structure made it very complicated to find the source of a problem sometimes, and with more than 8000 test cases this was a considerable waste of time.

All these reasons made it clear that it was time to drop the whole thing and start over.


## What the team is building now

The QA team decided to work on the three following points.

### Automation tool

It was already decided to drop Selenium, but what would be a good replacement? There are a lot of options there, including SaaS solutions ([Cypress](https://www.cypress.io/), [QAWolf](https://docs.qawolf.com/), etc). After reviewing a few possibilities, the best choice was to go for [Puppeteer](https://github.com/puppeteer/puppeteer).

Puppeteer is a Node library which provides a nice API to control Chrome. It can automate pretty much everything you do manually. It is maintained by Google, which is considered a good indicator of the quality of a project.


But more importantly, it’s more stable in headless (which was a killer feature for us !) since it was designed with headless in mind.


### New framework and architecture

As mentioned, the QA team wanted to use this opportunity to create a more robust way to create and maintain tests and avoid the issues encountered with the Selenium implementation. Since Puppeteer is just a component, QA team will create a complete framework around it, and we also introduced the use of [Page Object Pattern](https://martinfowler.com/bliki/PageObject.html). This pattern ensures you separate the test logic from the page logic.

On one hand, you create separate objects for every page you need to automate things on. Each object will then hold its own logic, from selectors to basic methods to use on the page (for example, fill a form, sort a table, choose an option from a dropdown, etc).

On the other hand, you create your test logic by using these objects. The goal is to have really small test steps which then use the methods from the objects. This way, your tests don’t know what’s happening behind the scenes. They only call methods which act as an abstraction layer.

This is a good illustration of [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns): when a page is updated, you only change the corresponding object in its separate file so that selectors and methods still work the same. When your test needs an update, you only change the logic in the steps.


### Re-focus the test effort

The third point was about the campaign itself. The goal was to redirect the campaign to be more effective, faster (the full Selenium campaign could last for up to 20 hours!) and easier to maintain. That would mean a shift in the focus of the campaign: instead of making a “do-it-all” campaign, it would be splitted up in 3 campaigns: 

- A sanity tests campaign
- An integration tests campaign
- An end-to-end tests campaign

Each of these campaigns has its perks.

The **sanity campaign** is here to make sure developers do not break some core functionalities of PrestaShop when introducing changes. To be run for every Pull Request, it checks all the critical features of the application: the frontend catalog, the cart, the checkout process; but also the backend with the product section and the order section. It is a fast campaign (about 8 minutes) and it must pass for the PR to be reviewed.

The **integration campaign** is the biggest one: every feature of every page is tested one by one (with of course a few exceptions when it’s too complicated to automate). The goal here is to verify that all features (taken individually) still work as expected. That means testing tables, filters, and CRUD functionalities (Create, Read, Update, Delete).
This campaign is the biggest so far, and my team and I are proud to say that it works wonderfully. There are still some errors sometimes but things wil be ironed out with time. It already proved itself useful by finding bugs! It’s also very consistent: when it fails it’s always in the same spot and for the same reason.

The **end-to-end campaign** will cover what’s left: it is used to test real user journeys. The goal is to make sure all the actions a merchant can do are covered by tests, so that the Tech team can be confident about the level of quality of the application. The Product team (and the QA team) already have a good idea of these user journeys (gathered through the interviews with merchants) and will try to implement journeys that are the most relevant to a merchant daily and weekly recurring actions.

There is one last campaign: it's important to make sure old issues stay fixed and don’t come back after a while. A regression campaign aims for that (or at least to get up to a comfortable coverage). It is run after the main campaign is finished. It targets critical and major issues fixed in the last few minor versions.


## That’s nice, but where can I see all the action?

The [nightly board is public](https://nightly.prestashop.com/)! You can check it and open every report. The current version was quickly engineered to let us gather the data and present it in an acceptable way, but it’s being redesigned using the UI Kit developed for PrestaShop (thanks to the UX team and our front-end developer!) and should be way easier to read in a few weeks (hopefully). Keep an eye on it!

All the tests I present in this article are also available in the [develop](https://github.com/PrestaShop/PrestaShop/tree/develop/tests/puppeteer) and [1.7.7.x](https://github.com/PrestaShop/PrestaShop/tree/1.7.7.x/tests/puppeteer) branches in the GitHub repository. Feel free to explore and execute them.

Don’t forget that you can help us by [writing tests or Page Objects through Pull Requests](https://devdocs.prestashop.com/1.7/testing/how-to-create-your-own-web-acceptance-tests/#creating-a-web-acceptance-test)!

Addendum: the team behind Puppeteer recently revealed their new project: [PlayWright](https://github.com/microsoft/playwright). Based on their work on Puppeteer, it’s also a Node library but able to communicate with Chromium, Firefox, and Edge. As soon as they release a stable version, the team will look seriously into it, as testing all major browsers would be a nice addition.

As always, at PrestaShop we’re impatient to hear your comments and suggestions.
