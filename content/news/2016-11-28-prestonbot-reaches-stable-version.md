---
layout: post
title:  "PrestonBot has reached stable version"
subtitle: "Your PrestaShop community best friend"
date:   2016-11-28 08:09:10
authors: [ mandrieu ]
icon: icon-daft-punk
tags:
 - contributing
---

Some weeks ago, we welcomed a new team member in the core team: Preston(Bot)!

Today, I'm glad to announce that Preston(Bot) reaches his first stable version. Let's see together the main features already available:

## Make the contribution easy again

This is one of our main objective: make the contribution to PrestaShop easier, keeping our quality standards high.

Previously, we have described why we have introduced a pull request template and how Preston is able to validate it to help both contributors and maintainers.

At PrestaShop, we also have [commits naming convention](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message) that helps contributors to quickly figure out when a regression have been introduced and to generate changelogs.

### Ease the commit label conventions

We know that this convention is a pain for every contributor - core team included - and some months ago we have simplified it:

```
before:

[-] BO : fixed naming conventions

after:

BO: fixed naming conventions
```

### The Commit Label validator

Since PrestonBot 1.0, there is a little bit more to help anyone with this (still) difficult subject.

![Commit label validator](http://i.imgur.com/qaYrTnL.png)

Regardless there is one or more invalid commits, PrestonBot will list them and provide you with an example of valid commit. When your commits are finally valid, the help message disappears like the one for the pull request description validation.

If you have some ideas to improve the contribution workflow, don't forget that [PrestonBot](https://github.com/PrestaShop/prestonbot) is open source and available in the PrestaShop organization.


## Make the maintainers work easier

### Make the traductor's contributions easier

Previously, we said that a lot of very different people are involved in PrestaShop: developers, but also testers, product managers and translators.

PrestaShop wants to be available for everyone in the world, and even in the universe :)
One of the most precious contributions to do that are the ones related to the translation and the content.

For instance, thanks to many contributors PrestaShop 1.7 is already available in 25 languages, making the software usable mostly everywhere in the world!

The process to get a translation key available from Crowdin - the platform that host translations for every language of PrestaShop - to the users is still a little bit complex and we are improving the way we want to deliver the translation packs.

PrestaShop 1.7 introduced the "domainization" of translation keys. Using the new back office of translations, this make the work of traductors. We are also faster on delivering new versions of translation packs in both `1.6` and `1.7` versions.

### Make the core team management of translations easier

What happens every time a contributor wants to add or update a translation in PrestaShop?

* We need to notify @AlexEven: our content manager, using *waiting for wording* label;
* @AlexEven approves the contribution;
* We merge the contribution;
* We update the translation pack for every languages;

Most of the time, the update or the addition of a translation goes unnoticed by the team, often when happens in big contributions... until now.

PrestonBot is able to analyze the contribution, and to add the **Waiting for wording** label when required. And @AlexEven only need to filter every contributions with the label, and to remove the label when the wording is valid.

## Welcome and help the beginners

Usually, people are really afraid of contribute, because of the well-known "[Impostor syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome)".

We - as a community - need to be friendly and kind, regarding the quality we expect from every contribution.
We want a better environment to empower and encourage people to make their first contribution, because this is the most difficult one.

This is why we have started to welcome community members in the core team, because we think everyone that want to be involved in this project is precious, and should be helped and thanked.

In this case, the contribution of PrestonBot can help and the first use case we have adressed is to welcome every new contributor in our community.

![Welcome drAlberT](http://i.imgur.com/MkAhH9d.png)

As we do, we encourage you to welcome every new member and to be kind with every community member:
let's concentrate on what brings us closer, not on what differentiates us :)

## We ❤ contributors

PrestaShop can't really exists without the contributors.
We are working hard to make the experience with GitHub easier for everyone: beginners, traductors, every contributor is welcomed.

If you have questions, ideas for improvement, let's talk about it and never forget that we ❤ you!
