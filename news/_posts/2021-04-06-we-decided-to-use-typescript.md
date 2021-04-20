---
layout: post
title: "We decided to use TypeScript!"
subtitle: "Why did we do this?"
date: 2021-04-06 17:00:00
authors: [NeOMakinG]
icon: icon-world
image: /assets/images/2019/01/Build-Crowdin-banner.jpg
tags: [news, core]
---

Recently, the PrestaShop core team decided to use TypeScript (TS) on the project. [We recently submitted an Architecture Decision Records (ADR)](https://github.com/PrestaShop/ADR/pull/19) and a [Proof of Concept (POC)](https://github.com/PrestaShop/PrestaShop/pull/23221) in order to use TypeScript on every development we do.

# Why did we do this?

PrestaShop recently increased its code quality by adding a lot of tools:
- ESLint is used to lint the whole JavaScript codebase.
- Stylelint is used to lint our SCSS files, including the UIKit files.
- PHPStan, CSFixer...

PHP recent works are also strictly typed. This is mainly why we want to strictly type the JavaScript side! 

## What are the benefits?

We've already seen some benefits about strictly typing PHP, it provides a robust codebase and avoids a lot of bugs by spotting these really early while coding. This will provide us a safe development way and increase our confidence about what we're still building.

It also makes the code way more self-expressive, which means that our codebase will be more friendly to new developers and contributors.

As our codebase is mainly using OOP, TypeScript will provide a lot of concepts to empower our pattern that JavaScript doesn't provide for the moment such as private methods for example...

## Why TypeScript and not another typing library such as Flow?

One good reason is that every big JavaScript projects switched its codebase from Flow to TypeScript recently (Vue 3, Jest for example), this means that a lot of external developers are building projects using this library, this way we ensure that JavaScript contributors won't be lost when reading our work.

There are a lot more reasons:
- TypeScript has better performance.
- It has a larger community (TypeScript is listed on [state of JS](https://2020.stateofjs.com/en-US/technologies/)).
- It's open-source and powered by a big company (Microsoft).
- It's natively compatible with most editors making the autocomplete powerfull and bug discovery way easier.

## What's the future?

For the moment, every new JS file will be written using TypeScript, with strongly typed components. We also need to refactor every sensible component such as grids and important page scripts, in order to be able to catch as many bugs as we can and provide a maintainable codebase.

We're focusing on the Back-Office, Classic theme won't be refactor using TS for the moment, because it will lead to a lot of breaking changes, meaning that every theme using Classic may be broken. This is not something we want.


