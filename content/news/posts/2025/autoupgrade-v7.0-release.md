---
layout: post
title: "Update Assistant module v7.0.0 is available (Autoupgrade)"
subtitle: "A New Era for PrestaShop updates"
date:   2025-03-31
authors: [ GericFosse ]
icon: icon-leaf
tags: [ module, autoupgrade ]
---

We are pleased to introduce the latest major release of the Update Assistant module (formerly known as 1-Click Upgrade).

First launched in 2012, this module takes a significant leap forward with this new version, which is the result of several months of development and over 350 merged Pull Requests. As announced at the PrestaShop Developer Conference and [Live Update](https://build.prestashop-project.org/news/2024/live-update-november-2024/) in November 2024, this release pushes the boundaries of PrestaShop store updates even further.

What's new? A redesigned user interface, a new Command-Line Interface (CLI), optimized update management, enhanced performance, greater reliability, technical improvements, and brand-new dedicated documentation. Explore all the features of Update Assistant version 7 in the changelog below!

## **Welcome to Update Assistant 7!**

### A Brand-New User Interface: more intuitive and efficient

Update Assistant 7.0.0 introduces a completely redesigned interface for a smoother and more accessible experience. With a modernized design and simplified navigation, every step of the update process is now clearer and more intuitive. 

![Screenshot of Update Assistant, on the version selection step with a selected version and the requirements OK](/assets/images/2025/03/autoupgrade-v7-update-version-choice-online-check-ok.png)


Here’s what’s new:

- **Easier updates** to the latest version of PrestaShop (coming soon with PrestaShop V9).
- **Dedicated steps** for each process: update, backup, and restore.
- **Context-aware update version** tailored to your store’s environment (PHP version, PrestaShop version, etc.).
- **Improved progress tracking** for better visibility on update, backup & restore status.

This revamped interface makes updating your PrestaShop store more seamless and reliable than ever!

### A new Command-Line Interface (CLI) for greater flexibility

This version brings a brand-new CLI, allowing advanced users to run updates directly from the terminal. This feature offers greater control and seamlessly integrates into automation workflows, making it easier to manage updates across multiple stores. 

![Update Assistant v7 on the command line interface](/assets/images/2025/03/autoupgrade-v7-cli.jpg)

New features and enhancements:

- **Redesigned commands** with improved structure and new commands for update, backup, and restore.
- **Consistent experience** between the CLI and the module’s web UI.
- **New interactive mode** to provide contextual guidance for users navigating the CLI.
- **Optimized arguments and options** for a more reliable and streamlined CLI experience.

With these enhancements, the new CLI makes managing PrestaShop updates more efficient and user-friendly.

### Faster Update, Backup, and Restoration

We have optimized the module’s core processes to reduce execution times and minimize the risk of failures. Update, backup, and restoration management have been improved to ensure greater reliability, even for large stores. Now, every update is faster, more robust, and more secure.

![Better. Faster. Stronger.](/assets/images/2025/03/autoupgrade-v7-better-faster-stronger.png)

Here are some key improvements:

- **Separation of update, backup, and restore processes** for better overall performance.
- **Optimized database queries** to process large data volumes more efficiently.
- **Redesigned update file manager** for improved efficiency and reliability.
- **Faster execution** for update and backup processes.

With these optimizations, updating, backing up, and restoring your PrestaShop store is now faster and more efficient.

### Better requirements checks, logs, and error reports

Update Assistant 7.0.0 performs more in-depth technical checks before each update, helping to prevent common errors. The module now provides deeper analysis of system requirements, while logs and error reports have been improved with more detailed insights. This makes it easier for merchants and developers to diagnose and resolve potential issues. 

![Update Assistant v7 applying an update on a store](/assets/images/2025/03/autoupgrade-v7-update-execution.png)

Here’s what’s been improved:

- **Enhanced requirement validation** and version management for a smoother update process.
- **Contextualized logs** tailored to each process (update, backup, and restore).
- **Redesigned error tracking** with a unified experience across the web UI and CLI.
- **Improved log management**, with dedicated logs available for every process (update, backup, and restore).

These enhancements provide greater visibility into the update, backup, and restore processes, while improving troubleshooting, error prevention, and overall quality.

### Technical enhancements for improved stability, security, and quality

Under the hood, this new version includes multiple technical improvements: better compatibility with the latest PHP versions, improved support for modules and themes, and a codebase overhaul for easier maintenance. These enhancements ensure a more stable and scalable module, ready for future PrestaShop versions. 

![Example of Github Actions results on the Update Assistant repository](/assets/images/2025/03/autoupgrade-v7-github-action.jpg)

What’s changed:

- **Refactored and modernized codebase** using TypeScript, Symfony Filesystem, improved class instantiation, and more.
- **Updated dependencies**, including Symfony, Twig, and others.
- **Enhanced existing tests** and automated new UI tests for better reliability.
- **Optimized CI/CD operations**, integrating tools like PHPStan and SonarQube for improved quality control.

These improvements make the Update Assistant more robust, maintainable, and future-proof!

### A new dedicated documentation: clearer and more comprehensive

Update Assistant 7.0.0 now comes with a brand-new, dedicated documentation to help you navigate the update process with confidence ([available in the PrestaShop Developer Documentation](https://devdocs.prestashop-project.org/8/basics/keeping-up-to-date/update/)). Whether you're a merchant or a developer, you’ll find all the information you need to ensure a smooth update.

Here’s what you can expect in this documentation:

- **Step-by-step guides** covering every aspect of the update process.
- **Detailed explanations** of update options and how to choose the best one for your store.
- **Troubleshooting tips** to quickly resolve common issues.
- **Best practices** to optimize your update workflow and minimize downtime.

With this improved documentation, keeping your PrestaShop store up to date has never been easier!

### And much more

For a complete overview of all the new features and improvements in Update Assistant, visit the module's GitHub Release Notes.

[Discover what's new in Update Assistant 7](https://github.com/PrestaShop/autoupgrade/releases)

## **Download the Update Assistant version 7!**

You can download or update the latest version of the module directly from your Back Office. Alternatively, you can access the module’s ZIP file from the project’s GitHub repository by clicking the link below:

[Download Autoupgrade v7.0.0 now!](https://github.com/PrestaShop/autoupgrade/releases/download/v7.0.0/autoupgrade-v7.0.0.zip)

If you experience any issues during the update that are not caused by third-party modules or custom modifications in your shop, please [submit a bug report](https://www.prestashop-project.org/get-involved/report-issues/).

## A huge thank you to our contributors

This new release of the Update Assistant module is the result of a collective effort from all project contributors. We’d like to extend our gratitude to everyone involved, including both the PrestaShop SA team and the broader community. Your contributions make this possible!

## Get involved

Contributing to PrestaShop goes beyond coding, there are many ways to participate! Getting started and making an impact is easier than you think. Learn more about how you can [contribute](https://devdocs.prestashop-project.org/9/contribute/) and be part of this exciting journey to improve PrestaShop.