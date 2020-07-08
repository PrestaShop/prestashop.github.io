---
layout: post
title:  "How bug reports are handled"
subtitle: "And how we want to improve the quality of the process"
date:  2020-07-08 10:45:00
authors: [SimonGarny]
icon: icon-github-alt
image: /assets/images/theme/meta-logo-build.png
tags: [community, contribution, github, issues]
---

PrestaShop is a successful Open Source project – with more than 300 000 shops worldwide, merchants trust us to help them build their ecommerce shop.

However this success has a cost: every day our users discover new bugs and inconsistencies in the project, and they come to GitHub to report them. **On average, 10 new issues are created every day on GitHub** (counting bug reports and feedback about features), and 2 out of 3 issues are either invalid or duplicates.
For every bug report on GitHub, PrestaShop maintainers have to:
- Ask and wait for additional information when it’s lacking,
- Manually verify that it is indeed linked to the Core or native modules,
- Check if the issue has been tackled in the latest version or the next version to come,
- Check if it’s not already been reported,
- Try to reproduce it in the correct environment,
- Label it correctly to make sure project maintainers can tackle it later

Half of these steps are really time-consuming (waiting for answers and clarification, reproducing, deduplicating) and these are mandatory steps: we cannot skip any of them since we need to be sure this is a proper bug report.

Sadly, PrestaShop doesn't have a dedicated team so this is becoming overwhelming. 
Given this situation, project maintainers then cannot guarantee a homogenous treatment to every issue since they’re short on time, and it’s clearly not the correct way to handle things. 

More annoyingly, a small subset of issues are low quality: questions in the template are not answered (reproduction steps missing, no PrestaShop version…) and this slows down the whole workflow.


## Stricter rules

A bug report must add value to the project: **the goal of an issue is to improve the project for everyone**, not solve someone’s particular problem. An issue must only be reported when it’s not originated by one’s specific server configuration or environment (if it doesn’t meet PrestaShop system requirements, for example), but a reproducible problem caused by a defect in the software. A good issue report should allow maintainers to pinpoint a problem that needs to be fixed in the Core or native modules.

The maintainers team really wants to improve the issue processing workflow, and for that will soon become stricter. In fact, a lot of big Open Source projects are already pretty strict about issues: if you don’t respect their template, your issue is most likely to be closed!

This is a good thing: by filtering out all the low quality issues, we ensure that developers can focus on the interesting ones, the issues that can bring the most value to the project and improve the quality of PrestaShop as a whole. It also speeds up the whole process by making sure that they can immediately start working on an issue while wasting as little time as possible reproducing, investigating, verifying the environment/the modules, etc.

**We will progressively start to enforce these rules by refusing and even closing bug reports that do not provide the information required in the template**, and in particular the mandatory information we need to verify it: reproduction steps, PrestaShop version, PHP version, etc.

**This obviously is not an absolute**, and if your issue doesn’t need reproduction steps the team will not blindly close it! However, this will help us make sure we can immediately start to work on the issue.

Please remember that if your issue is closed because of these new rules, it is NOT because the team doesn’t care or doesn’t want PrestaShop to improve: it’s about optimizing resources. We will be happy to review your issue if you open a new one with all the information we need to reproduce.


## Some examples


### :scream: Bad bug reports

- **Clearly incomplete**: you forgot to include some mandatory information like the PrestaShop version, the exact problem you encountered, or even the steps to reproduce!
- **Wrong use of Github**: the team created a few templates to help you provide the information that’s typically needed to reproduce an issue. If you delete the whole template, we most likely won’t have this information and will lose time by asking and waiting for an answer. Same thing if you don’t write your issue in English, or just paste a 200 lines long log message with zero details.
- **Request for support**: Bug reports should only be used to report issues which are caused by an error in the software. If the problem you report lies in your own configuration, or environment, or a module/theme that doesn’t belong to the project, the team will not be able to help you. You can use our [dedicated support](https://www.prestashop.com/fr/support), or reach out in our [public Slack server](https://github.com/PrestaShop/open-source/tree/master/slack) for this kind of issue!


### :+1: Good bug reports

- **Can be reproduced**: It contains all the elements needed to know exactly what your problem is, reproduce it and investigate it! That means all the versions (PHP, PrestaShop, module if necessary…) and all the reproduction steps. [Here is a good example](https://github.com/PrestaShop/PrestaShop/issues/19815).
- **Is helpful**: It contains an in-depth description of the problem, some ideas to try to tackle it, or even a Pull Request to fix it (thanks!). [Check this issue for example](https://github.com/PrestaShop/PrestaShop/issues/19822).

A good bug report respects the people processing it! To make sure you didn’t forget anything, just try to reverse the process: what would YOU need to know if you wanted to reproduce your issue?

Remember: **the goal of a bug report is to improve the project for everyone!** By making sure project maintainers can focus their efforts on fixing issues, the team as a whole will be able to save time to work on features, fixing bugs, and in overall improving the project we all love!
