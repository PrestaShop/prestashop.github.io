---
layout: post
title:  Prestashop News - Where We Are And Where We’re Going
subtitle: "I don't know what to write here"
date:   2024-01-04
authors: [ MathieuFerment ]
icon: icon-leaf
tags: [ news, event, community ]
---

The PrestaShop Developer Conference happened on the 30th of November 2023. During the day, I was able to present a conference, titled “PrestaShop news - Where we are and where we're going”. This blog post is a written version of the presentation that I also partially presented at the December [Live Update](https://www.youtube.com/watch?v=7CQ2Sg-v4XQ) on December 20th.

This post does not cover the first part of the presentation titled “PrestaShop 8.1 & 2023 - What’s new” because PrestaShop 8.1 has already been covered quite well [in this page](https://www.prestashop-project.org/releases/prestashop81/).

## Project evolution over time

The beginning of a new year is always a nice moment to take a step back and look how far we’ve come! Let’s take this occasion to have a look at some numbers from the PrestaShop open source project for year 2023.

### Merged Pull Requests per versions and per year

<img src="/assets/images/2024/01/ps-where-we-are-overview-img1.png" style="height:400px; margin: 20px auto;">

This chart shows the number of merged PRs (Pull Requests) per version from 1.7.4.0 to 8.1.0. At first, the last 2 columns (8.0.0 and 8.1.0) might look suspicious: they are way smaller than the two before, 1.7.7.0 and 1.7.8.0. This is actually deceiving: the number of PRs is strongly correlated to how long the version has been built.

Versions 1.7.7.0 and 1.7.8.0 both had a development duration close to 18 months, while version 8.0.0 was built over one year and version 8.1.0 in 9 months. The shorter time windows during which PRs could be merged into these versions created this effect. However when looking at the ratio between development duration and merged PRs, the numbers are a lot more good looking.

<img src="/assets/images/2024/01/ps-where-we-are-overview-img2.png" style="height:400px; margin: 20px auto;">

Another way to look at this topic is to check not only the PRs merged in one version but also during a year. I actually prefer this chart because the previous one does not acknowledge the contributions made outside of the PrestaShop core repository: the work done on modules, documentation, websites, services, and libraries is omitted. In that sense, this chart is more honest about the full project activity.

This chart shows that we had a high peak of contribution in 2020, and since then, contribution numbers have been steady.

However, on this chart, you’ll find something else I truly appreciate. The chart shows two columns: the first is the total number of contributions, no matter who is the author, and the second one excludes the people from the Open Source Tribe of PrestaShop SA, which is the main task force appointed by the PrestaShop company to work on the software. People in the Open Source Tribe of PrestaShop SA (whom I belong to) are paid full-time to contribute, hence their impact on the number of PRs. So the second column shows PRs authored by people whose job is not targeted at contribution, who contribute because they see it useful. This number has been growing every year since 2019 and has reached an all time record in 2023: more than 1000 Pull Requests merged! This demonstrates that contributions do not have to be money-driven.

### Committers number evolution

<img src="/assets/images/2024/01/ps-where-we-are-overview-img3.png" style="height:400px; margin: 20px auto;">

This final chart shows the evolution of [committers](https://www.prestashop-project.org/project-organization/people-and-roles/#committers) and [members of the technical council](https://www.prestashop-project.org/project-organization/people-and-roles/#technical-council) in the last 2 years. Again I made a distinction between people employed by PrestaShop SA and people who are not. Both numbers of committers paid by PrestaShop SA and other non-employees of the company have grown quite well in 2 years, a testimony of how the project attracts new people every year. 20 people joined the committers team in 2 years, however not all of them are still active in the project.

## PrestaShop 9.0.0 takeaways

### Symfony and PHP


PrestaShop 9.0.0 will be a new major version, and this means it will introduce new breaking changes. Among them, one was very important: bumping the version of Symfony used as PrestaShop 8.x relies on Symfony 4, [which is now EOL](https://symfony.com/releases/4.4).

In the first months of PrestaShop 9.0 development, Symfony version [was first bumped to 5.4](https://github.com/PrestaShop/PrestaShop/pull/31216), but after careful analysis of the Symfony roadmap and the needs of the software in 2024… we finally decided to go one step further: **PrestaShop 9.0.0 will be powered by Symfony 6.4, which was just recently released** and thanks to this change, the software will benefit from the Symfony LTS branch until November 2027!

As for the PHP version, it was [previously announced](https://build.prestashop-project.org/news/2023/prestashop-9-min-php-version-will-be-81/) that PrestaShop 9.0’s minimum PHP version will be PHP8.1. PrestaShop 9.0 is already compatible with PHP8.1 and 8.2. As of PHP8.3, it was [released just recently](https://www.php.net/releases/8.3/en.php), so it’s too early to be able to declare that PrestaShop 9.0 will be compatible with it… but this is something we are actively monitoring.

### Hummingbird and Classic theme

The Hummingbird theme has been maturing for more than a year now and we are fully confident it is ready to be pushed forth to PrestaShop users. It will be embedded into PrestaShop 9.0 as a second theme, next to the Classic theme, however Classic theme will remain the default theme.
This choice is motivated by the will to help developers transition from Classic to Hummingbird. PrestaShop 9.0 will push both, but PrestaShop 10.0 will be the turning point where Classic is no longer shipped with the core software.

This will be synchronized with the 1.0.0 version of Hummingbird.

### Back office API

The back office API we started [experiencing with one year ago](https://github.com/PrestaShop/PrestaShop/pull/29931) is nearing the completion of its first milestone.

During December’s Live Update on December 20th, [@jolelievre](https://github.com/jolelievre) gave more information about the API. You can [watch a replay](https://www.youtube.com/watch?v=7CQ2Sg-v4XQ) on the project’s channel.

## Conclusion

2023 was a busy year for the PrestaShop open source project, just like it has been for the PHP ecosystem. Today I was able to tell you about 4 changes to expect from PrestaShop 9: Symfony 6.4, PHP 8.1 minimum, the Hummingbird theme arrival together with a new Back office API.

But PrestaShop 9.0 will contain much more. Remember, it is an open source project: it grows with every single contribution. If you really want to see something new in PrestaShop 9.0, then isn’t it time to start [getting involved](https://www.prestashop-project.org/get-involved/)?
