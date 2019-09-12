---
layout: post
title: "What happens to pull requests after they are submitted"
subtitle: "Discover what happens behind scenes during code review"
date:   2019-09-12 11:00:00
authors: [ MathieuFerment ]
icon: icon-code
tags:
 - community
 - contribution
 - review
---


The PrestaShop project currently (September 2019) has 389 pull requests open and new Pull Requests are opened almost everyday. All of these pull requests go through a thorough process which aims to provide a stable, consistent and reliable software that we all know under the name PrestaShop. Here is this process in details.

## Automatic tasks when you open a Pull Request

When you submit a new Pull Request to the project repository [https://github.com/PrestaShop/PrestaShop](https://github.com/PrestaShop/PrestaShop), a long journey starts.

### Continuous Integration

We have set up two great tools on the project that help us verify the quality of contributions.

The first tool is [PrettyCI](https://prettyci.com/). This tool will look at your Pull Request and check whether the code-style is correct. If not, it will block the PR from being merged and tell you what is wrong.

It might appear trivial, but having a unified code-style on the project actually helps a lot. It is a lot easier to work on a big codebase like PrestaShop if all code is written following the same conventions: snake_case or camelCase, how to write the phpDoc, when to use white spaces ... it makes the code look like if it was written by a single developer. Just like reading a book with two different styles in it, having a codebase with different styles is making it harder to navigate. A unified code-style also makes the pull requests easier to review!

If PrettyCI states that your pull request has issues, you need to fix the issues by looking at PrettyCI output to understand what needs to be fixed.

The second tool is [Travis](http://travis-ci.org/). Travis is a Continous Integration system that will look at the Pull Request and run several checks, be it code-style checkers, format checkers or automated tests, and provide us the result in the Pull Request. If something is wrong it will block the PR from being merged. This is a standard approach to ensure that new contributions in a codebase do not break existing features and behaviors.

If Travis states that your pull request has issues, you need to fix the issues by looking at Travis output to understand what needs to be fixed.

These tools are executed automatically for every Pull Request, so we know that every contribution has been checked. This is a great asset to help us ensure the quality of the project.

In addition, we have also recently activated the new [Github Actions](https://github.com/features/actions) on the `develop` branch, which now benefits from an additional php 7.2 syntax compliancy check.

![CI tools on github](/assets/images/2019/09/CI-github-tools.png)

### Prestonbot

[Prestonbot](https://github.com/PrestaShop/prestonbot) is a custom bot we have built that looks at all Pull Requests and try to help us manage the project. He does a lot of things! For example he detects mistakes in the pull request description and adds some labels to help us classify the pull requests and he also welcomes new contributors to the project :D . [Read his story to learn more about him.](http://build.prestashop.com/news/prestonbot-reaches-stable-version/)

If something is wrong, Prestonbot will write a comment in the pull request to tell you what to fix.

## The code review, a human task

Now that all the bots have done their job, humans finally come on the stage! Your Pull Request will be reviewed by a Core maintainer.

### What do we check in code review?

When a Core maintainer sees a pull request, they will review it and decide whether it should be accepted, if it needs changes, or if it cannot be accepted.

The review process is quite thorough in order to make sure that PrestaShop codebase gets better with each contribution. Here is all the things we look for in a Pull Request, when reviewing it:

- Of course we start by checking that the code is correct. This means both from a behavior point of view as well as from a technical point of view. This is simply an assessment of the quality of the Pull Request code, just like it happens in a lot of software teams. We check the code works as intended, it uses the right functions, it handles expectable edge-cases, has no obvious vulnerabilities, scales well, etc. We also keep in mind that PrestaShop is a CMS and consequently must provide all the necessary extension points to allow developers to customize or extend its behavior.
- We also assess the readability of the code. There is a statement that says "when a code file is opened by a developer, 9 times out of 10 it will only to be read, not to be modified". Because PrestaShop is a huge and complex codebase and because it has so many people reading through it, it is very important that its code is made as readable as possible. This is obtained by adding comments, carefully choosing function and variable names, and building an architecture that makes sense so it is easy to grasp and navigate for people who have never worked on it before.
- We also check that best practices are implemented into the Pull Request, be it standard conventions or practices like [PSR](https://www.php-fig.org/psr/) or best security recommandations like the ones from [OWASP](https://www.owasp.org/). When people use PrestaShop to build a shop, it is likely that they will follow the practices they see implemented in the Core, so we try to think of the code we merge as an example that people will use.
- PrestaShop has grown huge over the years, both as a codebase and as a software. There are hundreds of features built in the software, and some are more commonly used than others. Some contributions sometimes need to be reworked because they did not take into account one of the less popular features of the software, or are not compatible with them. Common examples are the multi-store mode or the RTL (Right-To-Left) mode, two features that adress very specific needs and that many developers are not aware of.
- PrestaShop follows [SemVer](https://semver.org/). This means that we strive not to introduce breaking compatibility changes when releasing minor and patch versions. Therefore, we make sure the Pull Request does not introduce such changes, as some developers submit pull requests without being aware of this constraint.
- We also have a vision of what PrestaShop should evolve to in order to follow the new trends in the software world. Although a big codebase like PrestaShop evolves slowly, we keep the future architecture   and features we want to include in mind, and we check whether the Pull Request is following this direction. For example today PrestaShop relies heavily on jQuery for its frontend features, and we started introducing Vue.js. So if tomorrow we see a Pull Request that is using React.js we might refuse it in order to keep a consistency in the technology stack used for the project.

So as you can see, in a Pull Request we review a lot of things! To do all of these checks, we do not only look at the code on Github. We sometimes pull the branch on our own computer to test and navigate the code in order to make sure all of these requirements are met. We discuss with other maintainers about parts we are not sure. We can even sometimes run benchmarks or audits for critical pieces of code.

Some Pull Requests are very easy to review because they are related to a part of the code we know very well, other instead are very hard to review because they are related to a complex topic, a complex area of the code or have a huge global impact on the software that is very hard to estimate and assess. Reviews can take hours or days as we try our very best to make sure every contribution merged in the project meets the level of quality we want for it.

Most of the time, if an issue is found during the review, the Core maintainer will provide feedback about the issue and requests the author to modify the parts of the Pull Request that cannot be accepted as they are. After the author of the Pull Request has implemented the requested changes, then the Pull Request can be approved and move forward to the next step.

At this moment, this button becomes green:

![Merge button on github](/assets/images/2019/09/Merge-Button.png)

But it cannot be clicked yet...

### It is not only about code

For some Pull Requests, we might look for help and ask people of the PrestaShop Product Team:

- We ask the UX design team to review changes that have a significant UX impact 
- We ask the Product team to review changes that introduce a significant behavior modification (either an existing feature or a new feature)
- We ask the Content team to review Pull Requests that introduce wording changes (labels, titles, error and information messages)

Once the Pull Request has been validated by all of the relevant people, it is finally verified by the QA team. The QA team will then make sure that the behavior of the proposed change is correct and that it does not produce any regressions (new errors).

After the Pull Request has finally passed the QA validation, it is merged in the project and the author becomes (if they weren't already) a contributor to this great open source project :) .

## Conclusion

As you can see, the process between the submission of Pull Request and its merge is a long journey. This journey is not meaningless: the goal is to make sure we build a consistent and reliable software in the end, and when you consider the size of this project, it actually does not look too much!

A downside of this long journey and the level of commitment it requires from both the reviewers and the authors is that some Pull Requests require a very long time to be reviewed. Also, we are actually not a big team. As of September of 2019, there are only 6 Core maintainers available to review more than 400 Pull Requests... this is why PrestaShop is currently hiring!

We also are working on other ideas to bring more people in the maintainer team and to be able to review/merge everything, so we hope to get better in the following months.
