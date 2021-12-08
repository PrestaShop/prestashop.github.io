---
layout: post
title: PrestaShop beyond 1.7
subtitle: Here is what we are planning next!
date: 2021-12-14
authors: [PabloBorowicz]
icon: icon-compass
tags: [news, version, 8.0]
---

Five years ago, PrestaShop 1.7 was released to the world, introducing Symfony, the Classic theme and child theme features, interface improvements, and so much more. With each one of the eight minor versions that followed, 1.7 kept on growing both in features and stability. Its maturity is recognized by its success: with over 170,000 live shops detected at the time of writing, it’s the most popular PrestaShop version used in production shops on the web.

PrestaShop 1.7 also kickstarted an ambitious technical transformation towards what we call [The Future Architecture](https://build.prestashop.com/news/prestashop-in-2019-and-beyond-part-3-the-future-architecture/). Last year, we discussed [some concrete ideas](https://build.prestashop.com/news/from-legacy-to-future-architecture-connecting-the-dots/) to help make the project advance in that direction, some of which had already started being implemented in 1.7. As we said in that article, the transformation PrestaShop envisions cannot be made in a single shot — there's a lot of work ahead of us, and it will take time.

In 2018, we said we intended the migration of PrestaShop's Back office to Symfony to be completed within the lifetime of 1.7, so that the next major version could be built with a clean base. However, as the project moved forward, the migration proved to be significantly more complex than it was originally imagined. And although enormous progress has been made in the last five years, a lot is still to be done.

Although the migration moves forward steadily, many refactoring projects (some of which are required to fix longstanding issues) keep getting pushed farther and farther into the future, waiting for the next major version. Does it make sense to block those projects for another five years until the migration is done?

In addition, **maintaining a software version without introducing backward-incompatible changes is hard**, and it gets worse with time. PrestaShop doesn't exist in the void, and our ecosystem has an agenda of its own. With new PHP versions being released (and abandoned) every year, libraries are forced to evolve quickly to keep up. Symfony 3.4 has already reached its end of life. PrestaShop cannot risk using obsolete, abandoned libraries, so it needs to keep up as well.

As we said last year, we think that one of the key challenges for achieving PrestaShop's technical transformation is about finding the right pace, so that it can be delivered both progressively and predictably. We believe that the best answer for that is to steer the project towards an iterative cycle of **smaller, more focused, more frequent releases** — each building on the work laid out by the previous one.

## Introducing a new release roadmap

The [Semantic Versioning convention](https://build.prestashop.com/news/a-more-semantic-versioning-scheme/) (SemVer) only allows introducing backward-incompatible changes in major versions. This means that in order to boost PrestaShop's technical transformation, major versions need to be published more often than once every five years or more. At the same time, the community needs time to adapt to changes, as they carry a cost for merchants and developers alike. They need visibility to anticipate **what** kind of changes to expect, **when** will they encounter them, and finally, **how long** will their investment last until they need to adapt again.

This requires a delicate balance: change too slowly, and project becomes obsolete; change too quickly, and it becomes too expensive for the community to keep up. With that in mind, here is our proposal.

The new release roadmap will adhere more closely to the SemVer definition: a version is considered "major" when it introduces breaking changes, while minor versions only add features in a retrocompatible way. By following these principles strictly, upgrading from a major version to the minor version following it should be as easy as upgrading to a patch version, as everything is expected to work the same way. In this sense, it also means that a major version doesn't necessarily mean _big_ changes, just _some_ changes.

Starting with the next release, PrestaShop will begin alternating between major versions, focusing on refactoring and technology advancements, and minor versions, emphasizing on new or improved features. This means that **the next PrestaShop release will be a major version**, which will be followed by a minor version, then a major version, then a minor version, and so on.

The target is to be able to publish a release every 6–9 months. Since every other release will be a major version, the community will be able to expect a new major version every 12 to 18 months.

Now let's talk about support. Currently, patch versions are released at most 6 weeks counting from the moment the maintainers decided that a given bug justifies a patch release. Since patches are only published for the latest version, this effectively means that support of a given PrestaShop minor version generally ends the moment the following minor version is published (e.g. support for 1.7.7.x version ended when 1.7.8.0 was released). This will continue to be true with the new release roadmap.

However, we understand that upgrading to a major version will be harder than upgrading to a minor or patch version, and that people might choose not to upgrade to a new major version as soon as it's released. Because of this, we decided to provide extended critical and security bug fixes for minor versions, as necessary, for up to 12 months after the following major version has been released.

Here is what our ideal release & support roadmap should look like:

![Ideal roadmap](/assets/images/2021/12/roadmap.png)

To recap:

- A release every 6~9 months
- Alternating minor and major versions
- Patches when necessary between releases
- Up to 1 year of additional critical fixes for minor versions

## Say hello to PrestaShop 8

The next release, **PrestaShop 8**, will mark the simplification of the project's version numbering scheme. The "1" that preceded previous versions, a heritage that didn't carry any semantic meaning, will no longer be included in future releases.

![New version scheme](/assets/images/2021/12/v8-scheme.png)


Adopting the industry standard 3-group version scheme will allow to simplify the way PrestaShop versions are identified, as well as enhance interoperability with third-party software, like Composer, who depend on standardized versions.

### An evolutionary, not revolutionary, release

As explained before, the SemVer convention defines a version in terms of backward compatibility, not "big" or "small" changes. This means that a major version doesn't necessarily introduce big, revolutionary changes. It just means that _some_ things won't work the exact same way as before, that's all.

In that sense, PrestaShop 8 will continue and accelerate the transformative work towards the Future Architecture started in 1.7, but with a more pragmatic and focused approach (which will be covered in a dedicated article).

This new version will focus on two main initiatives:

##### 1. Technology update & cleanup

In addition to updated libraries (including Guzzle 7) and an upgraded **Symfony 4.4** framework, PrestaShop 8 will introduce **compatibility with the newest PHP 8** version. We will also take the opportunity to remove old, deprecated code that had been replaced by newer components in 1.7.

##### 2. Renewed product page

The all-new Back office product page that was introduced as experimental in 1.7.8.0 will be fully integrated into PrestaShop 8. This new page will provide merchants with an enhanced user experience and increased performance, especially when dealing with a large number of combinations. Developers will also benefit from a fully Symfony-based page, with extendable forms and reusable Commands and Queries.

### A company neutral project

PrestaShop is a community open source project, giving anyone the freedom to download it, use it, and modify it to their needs. During the last few years, a lot of work has been done to clarify how an open source project like PrestaShop is different from a "freemium product".

The maintainer team is committed to strengthening the community-built nature of the project. Last year, the project welcomed its first two maintainers not affiliated with PrestaShop SA. In 2021, to better distinguish the project from the company who originally created it, the project got a website of its own: [prestashop-project.org](https://www.prestashop-project.org/).

In 2022, the differentiation between the open source project and the homonymous company will be pushed even further, by removing all company-related products and services from the project: PrestaShop 8 will no longer be bundled with the PrestaShop Addons marketplace, nor will it automatically download products from PrestaShop SA, nor will it depend on resources loaded from prestashop.com APIs. This represents a big leap forward in the project's neutrality, as the work on an independent project governance progresses.

Of course, PrestaShop SA will continue to provide its products and services, for previous and new versions — but they will be distributed differently, as separate packages. These will likely be bundled in future products, which much like Linux distributions, will remain independent from the original open source project.

Rest assured that contrary to other companies, who have chosen to abandon their open source platforms by treating them as spinoffs of their proprietary developments, PrestaShop SA will continue (and increase) its support to the open source project, and its future products will continue to be built _on top_ of the project — and not the other way around.

### What happens with 1.7?

PrestaShop 1.7.8 will follow the same support path described in the release roadmap above, meaning that it will receive:

- Bug fixes until PrestaShop 8 is released
- Critical and security fixes, if needed, for up to one year afterward.

Upgrading from 1.7.8 to 8.0 should be significantly easier than upgrading from 1.6 to 1.7. Existing themes for 1.7 should remain fully compatible with this new version. While many modules that work with 1.7.8 should also work with PrestaShop 8 without any changes, some of them might need to be updated, in particular those affected by updated core libraries or PHP 8 compatibility.

## Final words

The current target for PrestaShop 8's feature freeze is April 2022, with a final release expected by mid-2022. You can follow our updates on [this GitHub issue](https://github.com/PrestaShop/PrestaShop/issues/26427).

We are really excited about building the future of PrestaShop with you! Tell us what you think in the comments, or [chat with us on Slack](https://www.prestashop-project.org/slack/).

