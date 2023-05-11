---
layout: post
title:  "PrestaShop 9 minimum PHP version will be PHP8.1"
subtitle: "The project moves forward and drops obsolete PHP versions"
date:   2023-05-12 14:00:00
authors: [ MathieuFerment ]
icon: icon-code
tags:
 - development
 - news
 - 9.0.x
---


The `develop` branch contains the source code that will give birth to PrestaShop 9. This is the future of PrestaShop: it will be released either at the end of the year 2023 or in the beginning of the year 2024 and must carry on the ambition of the project for 2024. This major version must also embrace the change of the PHP ecosystem and consequently it must drop the support of obsolete PHP versions.

## The PHP ecosystem is moving forward

As of today, the 12th of May 2023, there is only [two officially supported versions](https://www.php.net/supported-versions.php) of PHP: PHP8.1 which will be supported until November 2023 and PHP8.2 which support ends on December 2024. PHP8.0 has already reached the security support phase which ends on November 2023.

Many open source PHP projects have already left PHP8.0 behind. For example [Symfony 6](https://symfony.com/releases) and [Drupal 10](https://www.drupal.org/docs/getting-started/system-requirements/php-requirements) minimum PHP version is PHP8.1.0.

The PHP ecosystem is moving swiftly, and open source projects are taking the pace.

## Our choice for PrestaShop 9

The project team has been thinking about PrestaShop 9 PHP support for a while. We know plenty users continue to use PHP7.x versions or PHP8.0 and we know upgrading PHP can be tedious. However after careful considerations and [asking the community](https://github.com/PrestaShop/PrestaShop/discussions/32358) we have finally chosen to **drop the support of PHP versions older than PHP8.1** in PrestaShop 9.

We are bumping the minimum PHP compatible PHP version for PrestaShop 9 to 8.1. This means that PrestaShop 9.0.0 will be compatible with PHP8.1 and higher.

This choice is driven by multiple reasons:

1. PrestaShop does rely on Composer dependencies, and some of these dependencies have chosen, in the latest released versions, to drop the support of PHP8.0 and lower. Earlier versions do support PHP8.0 but are not maintained anymore. We cannot use these earlier versions without putting the software at risk. In order to be able to use safe and maintained dependencies, the bump is necessary.

2. Support of PHP7.x versions prevent the project from benefitting from latest PHP language improvements. If we want the code to be compatible with both PHP7 and PHP8, we have to use language features that exist in both versions. Now, contributions against the `develop` branch can use features introduced in PHP8.1 (and even features introduced in PHP8.0).

3. We are aware the project acts as a pioneer in the PrestaShop ecosystem: by moving ahead, we want to show a path forward and motivate PrestaShop users to upgrade to latest PHP versions, which will make the whole ecosystem more secure. Outdated PHP versions being used on servers is a security risk.
