---
layout: post
title: "What happens to pull requests after they are submitted"
subtitle: "Discover what happens behind the scene during code review"
date:   2019-09-10 10:30:00
authors: [ MathieuFerment ]
icon: icon-code
tags:
 - community
 - contribution
 - review
---


The PrestaShop project currently has 389 pull requests open and new Pull Requests are opened almost everyday. And this is only for the main repository. Other github repositories like the [developer documentation](https://github.com/PrestaShop/docs), modules, [docker images](https://github.com/PrestaShop/docker) also have their share of pull requests waiting to be merged.

All of these pull requests go through a thorough process which aims to provide a stable, consistent and reliable software that we all know under the name PrestaShop. Here is this process in details.

## What happens when you open a Pull Request

When you submit a new Pull Request to the project repository https://github.com/PrestaShop/PrestaShop, a long journey starts.

### Continuous Integration

We have setup on the project 2 great tools that help us check the quality of contributions.

The first tool is [PrettyCI](https://prettyci.com/). This tool will look at your Pull Request and check whether the code-style is correct. If not, it will block the PR from being merged and tell you what is wrong.

It might appear trivial, but having a unified code-style on the project actually helps a lot. It is a lot easier to work on a big codebase like PrestaShop if all code is written following the same conventions: snake_case or camelCase, how to write the phpDoc, when to use white spaces ... it makes the code look like if it was written by a single developer. Just like reading a book with two different styles in it, having a codebase with different styles is making it harder to navigate. It also makes the pull requests easier to review !

If PrettyCI states that your pull request has issues, you need to fix the issues by looking at PrettyCI output to understand what needs to be fixed.

The second tool is [Travis](http://travis-ci.org/). Travis is a Continous Integration system that will look at the Pull Request and run several checks, be it code-style checkers, format checkers or automated tests, and provide us the result in the Pull Request. If something is wrong it will block the PR from being merged. This is a standard approach to ensure that new contributions in a codebase do not break existing features and behaviors.

If Travis states that your pull request has issues, you need to fix the issues by looking at Travis output to understand what needs to be fixed.

These 2 tools are being run for every Pull Request, so we know that every contribution has been checked. This is a great asset to help us ensure the quality of the project.

Note: we have also recently activated on the `develop` branch the new [Github Actions](https://github.com/features/actions) and benefit from an additional php7.2-compliancy check.

![CI tools on github](/assets/images/2019/09/CI-github-tools.png)

### Prestonbot

[Prestonbot](https://github.com/PrestaShop/prestonbot) is a custom bot we have built that looks at all Pull Requests and try to help us manage the project by detecting mistakes in the pull request description and adding some labels to help us classify the pull requests. He also welcomes new contributors to the project :D .

If something is wrong, Prestonbot will write a comment in the pull request to tell you what to fix.

### Code review

Now that all the bots have done their job, humans finally come on the stage ! Your Pull Request will be reviewed by a member of the Core Team.

#### What do we check in a code review?

When a Core Team member opens a pull request, he will review it and decide whether it should be accepted, or it needs changes, or it cannot be accepted.

The review process is quite complete in order to make sure that PrestaShop codebase gets better with each contribution. Here is all the things we look for in a Pull Request, when reviewing it:

- Of course we start by checking that the code is correct. This means both from a behavior point of view than from a technical point of view. This is simply an assessment of the quality of the Pull Request code, just like it happens in a lot of software teams. We check the code is correct, we check the code uses the right functions, we check the code handles expectable edge-cases, we check the code has no vulnerability, we check the code scales well ... We also keep in mind that PrestaShop is a CMS and consequently must be extensible to allow developers to easily customize the behavior, so we make sure to provide relevant extension points.
- We also assess the readability of the code. There is a statement that says 'when a code file is opened by a developer, 9 times out of 10 it will only to be read, not to be modified'. Because PrestaShop is a huge and complex codebase and because it has so many people reading through it, it is very important that we make the code as readable as possible. This is obtained by adding comments, choosing carefully function and variable names and building an architecture that makes sense so it is easy to grasp and navigate for people who have never worked on it before.
- We also check that best practices are implemented into the Pull Request, be it standard conventions or practices like [PSR](https://www.php-fig.org/psr/) or best security recommandations like the [OWASP](https://www.owasp.org/) recommandations. When people use PrestaShop to build a custom website, it is likely that they will follow the practices they see implemented in the Core so we try to think of the code we merge as an example that people will use.
- PrestaShop has grown huge over the years, both as a codebase and as a software. There are hundred of features built in the software, but it is not often that people use them all. That is why some contributions sometimes need to be improved because they are not compatible with one of the existing features of the software. Common examples are the multi-store mode or the RTL (Right-To-Left) mode, two feature that a lot of developers do not use (because it adresses specific merchant or countries needs) and consequently when they submit a Pull Request, they do not check whether the modification they submit is compatible with these modes.
- We follow [SemVer](https://semver.org/). This means that, as much as possible, when we release minor and patch versions, we do not introduce breaking compatibility changes. We make sure the Pull Request does not introduce such changes as some developers submit pull requests without being aware of this constraint.
- We also have a vision of what PrestaShop should evolve to in order to follow the new trends in the software world. Although a big codebase like PrestaShop is very slow to move, we keep in mind the future architecture and features we want to bring and we check whether the Pull Request is following this direction. For example today PrestaShop relies heavily on jQuery for its frontend features, and we started to introduce Vue.js . So if tomorrow we see a Pull Request that is using React.js we might refuse it in order to keep a consistency in the technology stack used for the project.

So as you can see, in a Pull Request we review a lot of things ! To do all of these checks, we do not only look at the code on github. We sometimes pull the branch on our own computer to test and navigate the code in order to make sure all of these requirements are met. We discuss with team members about parts we are not sure. We can even sometimes run benchmarks or audits for critical pieces of code.

Some Pull Requests are very easy to review because they are related to a part of the code we know very well, other instead are very hard to review because they are related to a complex topic, a complex area of the code or have a huge global impact on the software that is very hard to estimate and assess. These last reviews can take hours or days as we try our very best to make sure every contribution merged in the project meets the level of quality we want for it.

Most of the time, if an issue is found during the review, the Core Team member will provide feedback about the issue and requests the author to modify the parts of the Pull Request that cannot be accepted like it. After the author of the Pull Request have implemented the requested changes, then the Pull Request can be approved and move forward to the next step.

### It is not only technical

Also, for some Pull Requests, we might look for help and ask people of the PrestaShop Product Team:
- for Pull Requests that have a huge impact of the UX, we ask the UX design team to review it
- for Pull Requests that introduce a big change in the behavior (either an existing feature or a new feature), we ask the Product team to review it
- for Pull Requests that introduce new wordings (labels, titles, error and information messages), we ask the Content team to review it

When the Pull Request has been validated by all of these people, it finally is checked by the QA team. The QA team will check that the Pull Request behavior is correct and also that existing features and behaviors are not modified/broken by the Pull Request.

When the Pull Request has finally passed the QA validation, it is finally merged in the project and the author becomes (if he was not before) an opensource contributor to this great project :) .

![Merge button on github](/assets/images/2019/09/Merge-Button.png)

## Conclusion

As you can see, the process between the submission of Pull Request and its merge is a long journey. This journey is not meaningless: the goal is to make sure we build a consistent and reliable software in the end, and when you consider the size of the software, it actually does not look too much !

A downside of this long journey and the level of commitment it requires from both the reviewers and the authors is that the hardest Pull Requests require a very long time to be reviewed, because we are actually not a huge number . Today, September of 2019, we are 6 Core Team members: to review more than 400 Pull Requests, it is a bit short ... this is why we are currently hiring ! We also have other ideas to bring more people in the team and be able to review/merge everything, so we hope to get better in the following months.
