---
layout: post
title: "Introducing a new bug severity classification"
subtitle: "Discover how issues related to PrestaShop software are qualified and prioritized"
date:   2019-05-29 11:30:00
authors: [ MarionFrancois ]
icon: icon-code
tags:
 - qa
---

According to the [Information Technology Infrastructure Library (ITIL)](https://fr.wikipedia.org/wiki/Information_Technology_Infrastructure_Library), a bug is an "event that is not part of the standard operation of a service and causes an unplanned interruption or decrease the quality of service". And it is everybody’s job to chase them all!

At the PrestaShop Quality Assurance team (aka QA), we browse issues on GitHub all day long. As we go about doing that, we often come across messages from people who are annoyed about a bug taking a long time to be fixed, and saying "this is a major issue, why is it still not fixed?”, or “This bug is marked as minor but it should be major”. Everyone agrees that not all bugs can be fixed at once, and that the more critical bugs should be fixed first. The problem is that since this appreciation is subjective, any opinion will almost always be challenged by the people who are personally affected by that specific issue, and who want to get it resolved first.

In order to avoid frustration and misunderstandings, it was time to come up with a better, more formal and transparent definition for the criteria used to qualify issues’ severity, and how they should be applied. 

The first thing to learn is that severity is to be distinguished from priority. Indeed, severity is used to measure the negative impact that a bug has on a system, a feature, a component or on the project development. It is usually defined by the QA team. As for the priority, it is used to organize all the tasks (bugs, improvements, features, technical tasks) that have to be done in order to meet the project’s deadlines. 


## Issue Severity Criteria

When a new issue is created, the first step is to understand what the problem is and then reproduce it. Once that work is done, the second step is to define the severity of that bug.

Four severity levels have been defined, as explained below.


### Critical

The bug affects critical functionality or critical data and there is no workaround (no way to avoid it).
A critical issue affects a very large percentage of users (> 60%) and matches at least one of the following:

- It can lead to data loss, introduce a security vulnerability or break the automatic end to end tests
- It prevents the essential shop operations or puts your business at great risk

Examples:

- Difficulty accessing the front office or back office (significant slowdown, error during installation or update, fatal error)
- Difficulty to globally manage categories, products or customers
- Difficulty to globally place and manage orders

A critical issue should result in a patch version that should be released as soon as possible. [PrestaShop 1.7.2.5](http://build.prestashop.com/news/prestashop-1-7-2-5-maintenance-release/) is a good example: this patch release fixes two vulnerabilities affecting the Back Office.


### Major

The bug affects major functionality or major data and there is a workaround, but it is not obvious or can be difficult to put in practice.

A major issue affects a large percentage of users (> 30%) and matches at least one of the following:

- It impacts law compliance
- It has a strong impact on the usability of the front-office / back-office or blocks another project
- It is an important problem but not necessarily blocking the main activity of the seller

Examples:

- Being unable to add, configure or delete a theme or a module
- Difficulty in operating a module properly
- Impacts the price the customer pays

### Minor

The bug affects minor functionality or non-critical data and there is a reasonable workaround, even if it can be annoying when using your shop.


Examples:

- A tolerable slowdown
- A display problem that prevents users from doing something non-critical (eg: can’t click on an element that can be accessible in another way)
- An error message displayed in your back-office that can be dismissed
- The product doesn't get added to cart after deleting product customisation
- Cloning a product doesn't copy all of it's data
- Inaccurate statistics


### Trivial

The bug doesn’t affect any functionality or data. It does not impact productivity or efficiency. It is only an inconvenience without functional impact and it does not even need a workaround.

Examples:

- Cosmetic issues
- Wrong translation in a specific language: that can be solved on [Crowdin](https://crowdin.com/project/prestashop-official)
- Missing confirmation message after an action
- A link opened in the same tab instead of a new tab

## Issue Prioritization

Assessing severity helps to prioritize issues but it is not the only criterion at stake. Given two equally severe issues, how to choose one over the other ?

At PrestaShop, prioritization is done by representatives of the Development team, the Product Management team, and the Quality Assurance team. Together, during regular meetings, we look at the new confirmed issues and we sort them.

One of the things we value a lot is making sure that a given bug does not damage PrestaShop’s image nor it affects the confidence merchants can have in PrestaShop. This factor is really important as it can durably damage the adoption of the project and its long-term survival. 

We take special care and strive to make every version of PrestaShop better than the one before. Since no one wants to introduce new bugs while fixing other bugs, regressions (new bugs created accidentally when fixing or improving an existing feature) are usually prioritized higher than older bugs. By doing this, we can assure that the overall software stability is ever increasing. 

In addition, we also study the issue's technical complexity, that is, whether the bug is easy or complex to fix. In some cases we will choose to prioritize a smaller bug over a bigger one, not because we are lazy, but because a complex bug may require big technical changes which are not suitable until a later version. This may be because a would require applying backwards-incompatible changes (which are bad for module developers), or because it can be better addressed as a part of a larger project – there is no use fixing a bug if the whole feature is due to be revamped in the near future. Speaking of which, sometimes we will prioritize some bugs just because of the “opportunity cost” of fixing them together, as it’s usually easier to fix several bugs within the same component. For example, during the migration of a page to Symfony, the bugs of this page are prioritized higher in order to fix them all at once.

Finally, we pay attention to the business impact. Since we care a lot about PrestaShop users (merchants, agencies, developers ...), we are eager to find a solution when it affects their sales proceeds. Or ours. After all, we need to eat as well, and we use PrestaShop too.

In the end, handling bugs requires two points of view: micro and macro. Severity analyzes the issue on its own, while Priority analyzes the issue in the context of the whole project.

If you encounter an issue, please [create a bug report](https://github.com/PrestaShop/PrestaShop/issues/new?template=bug_report.md). And if you have a solution, do not be shy and submit a pull request with your fix. This way, issues have better chances to be solved quickly, for everyone!
