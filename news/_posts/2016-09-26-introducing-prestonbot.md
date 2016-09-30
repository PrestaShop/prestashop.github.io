---
layout: post
title:  "Introducing PrestonBot"
subtitle: "The PrestaShop community best friend"
date:   2016-09-26 11:00:00
author: [ mandrieu ]
icon: icon-daft-punk
tags:
 - contributing
---

Some of you may have noticed that a few weeks ago, we have a new team member in the core team: Preston!

PrestonBot aims to help both maintainers and contributors of PrestaShop. Let's see together what he's already able to do and what you may expect from him in the future.

## Be able to merge faster, with confidence

We are continuously improving the way we work with GitHub, for instance we recently added a new mandatory pull request template:

![Pull Request template](/assets/images/2016/09/pull_request_template.png)

This is a summary of all the details asked to the contributor and why we may need it as maintainers:

| Questions | Why do we need it?
|----------|-------------
| Description | The most important question: WHY should we accept this contribution, what is the problem encountered?
| Type | Is it a bug fix, an improvement or a new feature? Bug fixes are often privileged, and new features are refused in the `1.6.x` branch.
| Category | In case of a regression, prefixing commit names helps us figure out which code change is responsible for the issue. Also, this will help us to generate changelogs.
| BC Break | We accept [Backward Compatible](https://en.wikipedia.org/wiki/Backward_compatibility#Bugwards_compatible) breaks **only** for security purposes.
| Deprecations | Deprecations may be accepted if features are improved or removed.
| Fixed ticket | If you are fixing a [Forge issue](http://forge.prestashop.com/), don't forget to tell it. We can then notify the reporter that the issue will be fixed thanks to you.
| How to test | Probably the *most important topic*: indicate how to best verify that this PR is correct. Contributions without testing instructions are mostly *never* checked.

Of course, this template can be improved, so don't hesitate to give us feedbacks about it.

If you complete the pull request template, PrestonBot is already able to make some "pre-validation" passes on new contributions. For instance, let's say you forgot to add a meaningful description to your contribution: he will automatically comment to help you complete your contribution.

![Pull Request validated](/assets/images/2016/09/pull_request_validated.png)

 Nice, isn't it? Every time you update the pull request, PrestonBot will check again and stop annoying you when it's valid!


## Be able to work together with the community

PrestaShop involves a lot of different people: developers of course but also translators, testers, product managers and so on.
The project is hosted on GitHub. Until recently, the tools it had to allow people to interact with the PrestaShop team were very limited:
basicaly, if you wanted to allow someone to labelize an issue, you had to give him mostly all the rights on the project.

*~~PrestonBot is able to labelize for you~~ => this is not required anymore!*

Since the recent [GitHub announcements](https://github.com/blog/2256-a-whole-new-github-universe-announcing-new-tools-forums-and-features), giving rights to any contributor is now really easy. Using [protected branches](https://help.github.com/articles/about-protected-branches/), we can give "Write" rights to anyone without allowing any possibility of adding/removing any code.

Our own - "non developer" - team members are already enjoying the new GitHub system and we will welcome community members in PrestaShop organization very soon as *Code reviewers*!


## What we hope to do with PrestonBot


We'd like to improve again the validation system provided by PrestonBot, to help us manage more and more pull requests.

For instance, we are aware that our [commit message conventions](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message) is not understood and
we want PrestonBot to give you the right information to get your work accepted.

Then, PrestonBot can be able to add more labels regarding the pull request description: we will automatize the triage of contributions as most as possible,
and focus our energy on review and merge.

Finally, we have some ideas to make the interaction between you and us (the core team) more enjoyable, introducing some mecanisms of gamification in the contribution process.

We have listed on the Forge the ongoing issue related to this [topic](http://forge.prestashop.com/browse/BOOM-1363?jql=status%20%3D%20Open%20AND%20labels%20%3D%20Community), don’t hesitate to create new ones (using the « Community » label) to share your ideas on how we can work better together! And let us know what you think about PrestonBot.

See you on [GitHub](https://github.com/PrestaShop/PrestaShop)!
