---
layout: post
title:  "Introducing a new branching model for PrestaShop"
subtitle: "eeee"
date:   2015-07-16 10:13:37
author: julienbourdeau
icon: fa-fork
tags:
 - releases
 - contributing
---

PrestaShop has recently moved towards a [more semantic versioning scheme](http://build.prestashop.com/news/a-more-semantic-versioning-scheme/). Basically we want bug fixes only in patch releases (1.6.1.1, 1.6.1.2, 1.6.1.3 and so on), we introduce new features
in minor releases (1.6.1.0, 1.6.2.0, etc) and we can break backward compatibility in major version (1.7, 1.8, etc),
we had to adapt our workflow to match these requirements.


## TL;DR

If you want to submit a pull request, as a contributor, will have to decide which branch to fork and set has a destination of your pull request.
The schema above should help you with that. If you use to wrong one don't worry, we'll find a solution.

1. Is a bug fix or an new feature ?
1. If it's a new feature, is it breaking backward compatibility ?
1. If it's a bug fix, what is the older version of PrestaShop ?

SCHEMA


## PrestaShop new branching model

Before we use to have only one branch (1.6) and each dev would commit whatever they had to do on it.
Then we would make a release out of it, including everything (new feature, bug fixes...). This was simply the inheritage of SVN that we used to use for years.

We look around to understand how many open source projects manage their code with Git and we came up with the following model.

### 3 branches to understand

3 branches will now live side by side, one for each type of release.

| Branch name   | Type of release   | What to commit |
|:-------------:|:-----------------:|----------------|
| **develop**   | Major             | - Add new feature breaking backward compatibility <br /> - Add new feature fully backward compatible <br /> - Add bug fixes <br /> - Remove feature <br /> - Remove anything deprecated |
| **1.6**       | Minor             | - Add new feature fully backward compatible <br /> - Add bug fixes |
| **1.6.1.x**   | Patch             | - Bug fixes only ! |

__NOTE__: The branch name will evolve to follow release numbers, those are the current names as I'm writing.

### Where to bug fix

_Since I can add a bug fix to any branch, how do I choose ?_

This isn't an easy question, you'll have a to make the call.

First, when you want to fix a bug you have to find the

Then, you have to take into account the risk like if this bug fix on `PaymentModule.php` you should play it safe
and avoid trying to add it in the next patch version, it probably need more testing.
