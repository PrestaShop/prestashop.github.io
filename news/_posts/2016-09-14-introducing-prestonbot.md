---
layout: post
title:  "Introducing PrestonBot"
subtitle: "The PrestaShop community best friend"
date:   2016-09-14 11:00:00
author: [ mandrieu ]
icon: fa-users
tags:
 - contributing
---

Some of you may have noticed that since weeks, we have welcome a new team member in the core team: Preston!

PrestonBot aims to both help maintainers and contributors of PrestaShop, let's see together what he's already  able to do and what you may expect from him in the future.

## Be able to merge faster, with confidence

We are improving continuously the way we work with GitHub, adding a new mandatory Pull Request template:

![Pull Request template](/assets/images/2016/09/pull_request_template.png)

This is a summary of all informations asked to the contributor and why we may need it as maintainers:

Questions | Why do we need it ?
Branch    | A simple and stupid check to ensure the contribution realy concerns the branch used for the contribution.
Description | The most important question: WHY should we accept this contribution, what is the problem encountered?
Type | Is it a bug fix, an improvement or a new feature ? Bug fixes are often privileged, and new features are refused in `1.6.x` branch.
Category | In case of regression, prefixing commits help us figure out which update of codebase is responsible for. Also, this will help us to generate changelogs.
BC Break | We accept [Backward Compatible](https://en.wikipedia.org/wiki/Backward_compatibility#Bugwards_compatible) breaks **only** for security purposes.
Deprecations | Deprecations may be accepted if features are improved or removed.
Fixed ticket | If you are fixing a [Forge issue]((http://forge.prestashop.com/), don't forget to tell it. We can then notify the reporter that the issue will be fixed thanks to you.
How to test | Probably the *most important topic*: indicate how to best verify that this PR is correct. Contributions without testing instructions are mostly *never* checked.

Of course, this template can be improved, so don't hesitate to give us feedbacks about it.

If you complete the pull request template, PrestonBot is already able to make some "pre-validation" passes on new contributions. For instance, let's say you forgot to add a meaning full description to your contribution: he will automatically comment to help you complete your contribution.

![Pull Request validated](/assets/images/2016/09/pull_request_validated.png)

 Nice, isn't it ? Every time you update the pull request, PrestonBot will check again and stop annoying you when it's valid!


## Be able to work together with the community

PrestaShop is a project done by a lot of different people: developers of course but also translators, testers, product managers and so on.
Before, GitHub - the hosting platform of PrestaShop project - have a very limited system to allow people to interact with PrestaShop.

Basicaly, if you wanted to allow someone to labelize an issue, you have to give him mostly all the rights on the project.

*~~PrestonBot is able to labelize for you~~ => this is not required anymore!*

Since the recent [GitHub announcements](https://github.com/blog/2256-a-whole-new-github-universe-announcing-new-tools-forums-and-features), giving rights to any contributor is now really easy. Using [protected branches](https://help.github.com/articles/about-protected-branches/), we can give "Write" rights to anyone without allow any possibility of adding/removing any code.

Our own - "non developer" - teams are already enjoying the new GitHub system and we will welcome community members in PrestaShop organization very soon as *Code reviewers* !
