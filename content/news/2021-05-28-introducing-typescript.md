---
layout: post
title: "Introducing TypeScript"
subtitle: "Moving our Javascript code to the next level"
date: 2021-05-28
authors: [NeOMakinG]
icon: icon-lightning
tags: [news, development]
---

Following a recent [Architecture Decision Records (ADR) submission](https://github.com/PrestaShop/ADR/pull/19) and a [Proof of Concept (POC)](https://github.com/PrestaShop/PrestaShop/pull/23221), the Core Maintainers team has decided to introduce [TypeScript](https://www.typescriptlang.org/) (TS) on the project.

# Why TypeScript?

During the last few years, the PrestaShop Project has been increasingly raising the code quality bar. To help maintainers ensure that quality keeps increasing, a number of automatic quality verification tools have been added to the CI pipeline:
- ESLint analyzes the whole JavaScript codebase to ensure it follows our code style and find problems.
- Stylelint verifies SCSS files, including the UIKit files.
- PHPStan finds errors and prevents introducing risky behavior in PHP files.
- PHP CS Fixer verifies code style in PHP files.

In addition, we have started enforcing [strict types](https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.strict) in all new PHP classes since PrestaShop 1.7.7, which allows us to catch a lot of problems before they become bugs. This is why our next step is to bring strict types to JavaScript as well!

## What are the benefits?

We have already seen the benefits of strictly typing in PHP: it has increased the codebase's robustness by making type juggling bugs evident while coding and in CI. A type-safe environment reduces the chances of errors and enhances developers' confidence in what they are building.

TypeScript also allows more expressive code, which will help new developers and contributors.

In addition to strict types, TypeScript also provides a lot of useful language features that JavaScript doesn't, such as private methods, interfaces, generics, and more.

## Why TypeScript and not another strict type library such as Flow?

One good reason is that many big JavaScript projects like Vue and Jest have recently switched their codebases from Flow to TypeScript – This means that a lot of developers are building their projects using TypeScript. Hence, we think that using TypeScript will maximize the chances that developers won't be lost when reading PrestaShop's code.

There are many more reasons:
- TypeScript has better performance.
- It has a larger community (TypeScript is listed on [state of JS](https://2020.stateofjs.com/en-US/technologies/)).
- It's open-source and backed by a big company (Microsoft).
- Most IDEs support it out of the box, providing autocomplete and inspections.

## What's next?

For the moment, only new components will be written using TypeScript. In time, we will progressively refactor important components such as grids and page scripts, to benefit from the enhanced stability and maintainability provided by TypeScript's strong-typing features.
