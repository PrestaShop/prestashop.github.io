---
layout: post
title:  "Introducing PrestaShop's Community Framework"
subtitle: "Listing best practices and responsibility in order to involve the community more."
date:   2016-10-12 09:10:11
author: xavierborderie
icon: icon-leaf
tags:
 - development
 - community
---


Open Source is in the DNA of PrestaShop, and with it comes the great responsibility that the Core team has towards the project and its community -- both users and contributors.

PrestaShop values greatly the contributions of its community members, and as contributors improve their skills, the PS codebase gets better. By growing the community of knowledgeable contributors, the Core team hopes to fully realize the Open Source potential of the PrestaShop project.

To support that growth, we decided to create a Community Framework a few months ago: a definitive set of rules and obligations which, together with tools such as [PrestonBot](http://build.prestashop.com/news/introducing-prestonbot/) and the keen eye of Core contributors, should make it possible to better handle pull requests -- and in a more timely fashion!

This Community Framework is made of two sides: the Contributor’s Rules, and the Project Roles. One is for both everyday contributors AND Core developers; the other is for trusted contributors who want to be involved further with the project.


## Contribution rules

As a contributor, there are certain things which are expected from your contribution in order to help the Core team review and possibly merge your code contribution in no time.

The following rules are what the Core team looks at in a contribution in order to review it and build trust with the contributor. Note that they are cumulative: don’t skip a rule, they are all important.

1. The commits are made on the **correct branch** (`develop` for PS 1.7, `1.6.1.x` for PS 1.6), thanks to a clear understanding of [PrestaShop’s SemVer-like versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/).
2. The commits are made from an **up-to-date branch**.
3. The commits pass the **PrestaShop automatic unit tests** (as shown by the Travis CI indicator at the bottom of the PR in GitHub).
4. The code of the commits follows the **[PSR-2 coding style guide](http://doc.prestashop.com/display/PS16/Coding+Standards)** (which implies PSR-1 too).
  * [Symfony’s coding standards](http://symfony.com/doc/current/contributing/code/standards.html) are also an inspiration to keep in mind.
5. The commits are **[atomic](http://seesparkbox.com/foundry/atomic_commits_with_git)**.
6. The commits are named in accordance with the **[PrestaShop naming convention](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)**.
7. The pull request for the commits has a **short and descriptive title in English**.
8. The pull request for the commits contains a table with a **clear description of what the contained commits do**, with **steps to reproduce/test the issue(s)**, and if necessary a **link to the Forge ticket(s)** that is/are fixed by the commits. All texts (including the PR discussion) are to be written in English.
9. The pull request does not contain any “*`Merge branch ‘xxx’...`*” commit (which breaks the project’s Git history). Use `git pull --rebase` whenever in doubt. -- see the [official `git pull` documentation](https://git-scm.com/docs/git-pull), or [this tutorial](http://gitready.com/advanced/2009/02/11/pull-with-rebase.html).
10. The code changes have been fully tested and present **no unexpected side-effects** anywhere in the back office or the front office, for a clean PrestaShop installation on a standard PHP/MySQL server.

A contributor can be more noticed with the quality AND quantity of pull requests submitted, and also if (s)he contributes in other ways: feedback on [other PRs than his/her own](https://github.com/PrestaShop/PrestaShop/pulls), feedback on [Forge tickets](http://forge.prestashop.com/), participation to the [documentation wiki](http://doc.prestashop.com/) or the [1.7 techdoc repo](https://github.com/PrestaShop/docs), translation on the [PrestaShop project on Crowdin](http://crowdin.net/project/prestashop-official), participation in the [PrestaShop forums](http://www.prestashop.com/forums/), etc. This shows that the contributor is a thorough member of the PrestaShop ecosystem.


## PrestaShop project roles

The PrestaShop project is wide and far-reaching, between the Core codebase and native modules which go from the mundane to the advanced. All were initially built by the PrestaShop team, and all are open to developer contributions.

Contributors who respect the above rules and become quite involved with the PrestaShop project will now follow a path of roles, which naturally result from a strong and healthy relationship.

Climbing up the “role ladder” can take from a few weeks to several months, depending on the responsibilities of the role and the feedback from the Core team, and eventually anyone who makes contributions that at are regularly merged, can become part of the group of people in charge of the PrestaShop project.

Let’s see these cumulative roles:

### 1) PR reviewer

Help the Core team by asserting the “mergeability” of PRs, with a thorough code review, and by possibly completing the PR description with the necessary information for testing the issue (if none is available).

Reviews, whether positive or negative, are to be submitted directly in each PR’s comment section, through GitHub’s own code reviewing tools. The reviewer should follow the PR’s subsequent comments and commit, until merge or closure. In short, taking care of the PR during its whole lifetime.


### 2) Cherry-picker

Help the Core team by making it possible to merge interesting pull requests that are either made on the wrong branch or that have too many conflicts, and therefore cannot be merged as is. Cherry-picking means the “Cherry-pickability” will be asserted by the Core team or the Product Managers first, and you are welcome to rebase that code into a new PR. 

The original PR must be kept open until the new PR is closed/merged. The author of the original PR must be named in the resulting PR.


### 3) Patch release merger

Once a patch version’s release date has been chosen (by the Product Managers and the Core team), the PRs attached to its GitHub milestone (which must have been code-reviewed and QA-approved) can be merged, one by one and with a final test in order to make sure that there is no unwanted side-effect (such as a behavioral change or a break of backward compatibility).

_Note: A contributor MUST only merge other contributors’ PRs, not his/her own._


### 4) Minor release merger

Once a minor version’s release date has been chosen (by the Product Managers and the Core team), the PRs attached to its GitHub milestone (which must have all been code-reviewed and QA-approved) can be merged, one by one and with a final QA session in order to make sure that there is no unwanted side-effect (such as a break of backward compatibility).

_Note: A contributor MUST only merge other contributors’ PRs, not his/her own._


### 5) Major release merger

Once a major version’s release date has been chosen (by the Product Managers and the Core team), the PRs attached to its GitHub milestone (which must have been code-reviewed and QA-approved) can be merged, one by one and with a final QA session in order to make sure that there is no unwanted side-effect.

_Note: This role is mostly reserved to employees from the PrestaShop company._

You’ll understand that the last two roles (merger for minor versions and merged for major versions), which involve responsibilities that can have an impact on both 250,000+ online stores and the PrestaShop business itself, can only be reached after months of trustful work with the Core team -- at least for the time being.


## Onwards!

So, there you have it: the contributor role ladder within the PrestaShop project, and the rules to follow in order to reach its first step. While seemingly strict, they allow enough freedom to let anyone enter the team of caretakers for the Core codebase and the native modules, and helps build a circle of exceptional trust upon which thousands of online merchants will be able to rely for their daily activity. 


## Introducing our first Code Reviewer from the Community: Michael Dekker!

Michael comes from the Netherlands. Comparatively, he has only recently joined the community of contributors, but he has done a lot already:

* In May 2015, he joined PrestaShop’s translation project on Crowdin, and has since made sure the Dutch language was always among the top-translated.
* In July 2015, he asked to translate the 1.6 User Guide into Dutch. [By September, it was all done](http://doc.prestashop.com/display/PS16/Gebruikershandleiding)!
* In August, 2015, he made his first pull request. Since then, [he has made 183 PRs](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Afirstred%20), [127 of which have been merged into the codebase](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Afirstred%20is%3Amerged). Recently, he has been on a spree of “simple” but very useful PRs, added proper comments to PHP methods: [he has suggested updates to 78 classes](https://github.com/PrestaShop/PrestaShop/pulls?utf8=%E2%9C%93&q=is%3Apr%20author%3Afirstred%20doc%20class%20) so far!
* In September 2015, he became part of the [PrestaShop Ambassadors program](https://ambassadors.prestashop.com/), and has been proactive in promoting PrestaShop in his country, both through local modules and visits to meetups.

You can understand that Michael has become a well-known name among the PrestaCrew, and we are pleased to welcome him as the first one to “climb the role ladder” that the Community Framework puts in place.

We took this as an opportunity to introduce Michael to the community at large through this small interview:

> _**Hi Michael! What is your day job?**_
> 
> Hi there! I am a fullstack developer, meaning that I work with both PHP and JavaScript.
> 
> _**What pushed you to start contributing to the PrestaShop project?**_
> 
> The first version of PrestaShop I used was a beta of 1.6. I noticed that the software had great potential, but it was hard to launch a store in the Netherlands with it. I noticed that it missed a lot of local stuff. Apparently PrestaShop noticed that as well, because shortly after that the Ambassador project and the Integration fund were launched. I was a little ahead of that :)
> 
> _**What do you think are your biggest contribution(s) to PS so far?**_
> 
> Oh, probably modifying more than 100,000 lines of code, and of course translating the whole User Guide into Dutch.

Thanks lot for being part of the Community, Michael! We hope to see you soon giving code reviews to the project’s pull requests!
