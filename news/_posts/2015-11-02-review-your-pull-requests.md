---
layout: post
title:  "Let's review pull requests!"
subtitle: "Making sure that your code makes it to Core"
date:   2015-10-30 12:00:41
author: xavierborderie
icon: icon-leaf
tags:
 - github
 - pullrequests
 - pr
 - gardening
---

The PrestaShop team has three main ways to get feedback from the Community:

* The [Support Forums](http://www.prestashop.com/forums/), where we try to answer the most pressing matters (and there's never enough hours in the day).
* The [Forge](http://forge.prestashop.com/), our bugtracker, where users (both developers and merchants) report issues or suggestion improvements, and the team handles them one by one, according to their complexity and impact.
* The [GitHub repository](https://github.com/PrestaShop/), where developers can submit code changes to the team through pull requests (hereafter "PR"). The repo contains the code for the Core of PrestaShop, as well as individual projects for each module.
* The comments on the Build devblog. Hey, that's here!

As anyone lurking on our GitHub repository knows, PRs have gotten from a trickle to a more steady flow of code suggestions, currently reaching more than 360 PR just for the main project. Modules also have their share of PRs waiting.

While we are more than happy to see the Community involved, the current plans for version 1.7 of PrestaShop made it that until now, the devteam had little time to dive into all these PRs and separate the wheat from the chaff.

That's where you, dear reader who contributed one or more PRs, can easily help us! 


### Essential links

Here is a link to all the currently open pull requests in all of PrestaShop's branches: https://github.com/PrestaShop/PrestaShop/pulls Remember that each module also has its own set of PRs!

Here's how you can display all your pull requests submitted to the PrestaShop project:

1. Display all your currently open pull requests: https://github.com/pulls.
2. Open the "Organization" filter and choose "PrestaShop".


### How to proceed

Look at the pull requests that you have created in the past and ask yourself:

* Is this still relevant?
* Does this still need to be fixed?
* Is the suggestion still valid?

If you answer "no" to any of the above questions, please leave a comment explaining the situation, and close the ticket.

If you have answered "yes" to all the above questions, then let's continue!

Now, please look at your code, and ask yourself:

* Do the code changes you suggested at the time still apply?
* Is there any conflict risk with the current code?<br/>GitHub should indicate this at the bottom of the PR.
* Can the solution be improved?
* Does your patch follow the [PSR-2 coding style](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)?<br/>We adopted PSR-2 [back in June 2015](http://build.prestashop.com/news/prestashop-moves-to-psr-2/).
* Is the PR made on the correct branch?<br/>It should be:
 * '`develop`' for an improvement or a bug fix targeted at the forthcoming 1.7.
 * '`1.6.1.x`' for a bug fix for version 1.6.1.x (currently 1.6.1.2). PrestaShop 1.6 will not receive any new feature.
 * '`dev`' for a PR made on a module.

If a rewrite of your patch is needed, either because you can think of a better solution, or because PrestaShop's codebase has changed since your proposal and thus your patch cannot be applied as-is, please take the time to upgrade your code! It would be of tremendous help to provide an updated patch, one that we can possibly apply more quickly.

In any case, please leave a comment aknowledging that you aware of the PR's situation, and willing to starting working with us to have it possibly merged!

If you aim at fixing version 1.5 or below, please port your code the `1.6.x` or `develop` branch. PrestaShop's versions below 1.6 will not receive updates anymore, except for security issues.

By following these simple suggestions, you can help us go through the open tickets quicker, spot the real gems faster, and thus make PrestaShop a better e-commerce solution!

Thank you for giving us an update on every one of your open pull requests!
