---
layout: post
title:  "PR Testing on PrestaShop"
subtitle: ""
date:   2020-12-08 16:00:00
authors: [ Robin-Fischer-PS ]
icon: icon-airplane
tags:
 - 
---

Prestashop created a Quality Assurance team 4 years ago, in order to improve the quality of the solution.

For more than a year now, the team has grown quickly, allowing us to take quality to the next level !
Our field of action is widening (test of new services like Prestashop Checkout, specification test and review…), but the core of the manual testers activity remains testing the Pull Requests on Github, and testing every release.

# 1 - Some questions you may have in mind

## 1.1 - Why do we test PR ?

First question that might come to your mind : Why is there QA on each PR ? Why not test only during build release ?

- The earlier a bug is detected in the process, the easier it is to fix it
- Test on each PR allows us to make more detailed tests, and to improve the overall quality of the PrestaShop solution
- There can be several months between the merge of a PR and the first test of the release, enough time for the author of the PR to have “forgotten” what he did exactly.
