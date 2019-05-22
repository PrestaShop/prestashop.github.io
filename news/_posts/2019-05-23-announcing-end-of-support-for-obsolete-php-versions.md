---
layout: post
title: "Announcing end of support for obsolete PHP versions"
subtitle: "It's time to move forward"
date:   2019-05-22 09:10:11
authors: [ PabloBorowicz ]
icon: icon-compass
tags:
 - 1.7
 - architecture
 - development
---

About a year and a half ago, we announced that PrestaShop 1.7.4.0 would be [dropping support for PHP 5.4 and 5.5](http://build.prestashop.com/news/prestashop-1-7-is-moving-to-symfony-3-4-and-php-5-6/). At that time, this decision was justified by the impending end-of-maintenance for Symfony 2 and its replacement by Symfony 3, which didn't support PHP versions older than 5.5. 

By late 2018, as the end-of-life of PHP 5.6 approached, a great deal of shared hosting providers started dropping support for that version on their services and upgrading their clients, forcibly or otherwise, to an officially maintained PHP 7.x version. Our metrics show that during the last year, the number of active shops running PrestaShop 1.7 on a PHP 7 or greater has increased significantly and is now over 75%.

![PHP version support roadmap](/assets/images/2019/05/php-support-roadmap.png){:.text-center}

_PHP version support roadmap  
(green background: active support; orange background: security fixes only) - ([Source](https://www.php.net/supported-versions.php))_
{:.text-center}

Fast forward to 2019, the exceptionally long support period that PHP 5.6 benefited from is now over. As of May 2019, PHP is back on a shorter, three-year-long version lifecycle, consisting of a new minor release every year, with two years of active support and one year of security fixes only. As a result, the PHP community has started picking up speed as well, adopting new versions and dropping compatibility with older versions faster than ever.


## PrestaShop is directly affected by this change. But how exactly?

PrestaShop has many dependencies, PHP being just one of them. Dependency management has two sides: the minimum supported version, and the maximum supported version. In our case, PrestaShop 1.7.6 supports all versions of PHP from 5.6 to 7.2, but not the latest 7.3. Why not? Some of the [breaking changes](https://www.php.net/manual/en/migration73.incompatible.php) introduced in that version [affect libraries that PrestaShop depends on](https://github.com/PrestaShop/PrestaShop/issues/12461) and has no control over, in particular [Doctrine](https://github.com/doctrine/orm/issues/7402). In that specific case, the version of Doctrine where the fix was applied has dropped support for PHP 5, which puts us in the difficult situation of having to choose to either support older PHP versions or newer ones.

Doctrine is not the only library to stop supporting older PHP versions. Many other libraries like PHP-Parser and PhpUnit have dropped support for PHP 5 for a long time. Even some quality tools, like PhpStan, never supported it in the first place, preventing us from using them.

In the case of Symfony, while they dropped support for PHP 5 on Symfony 4, PrestaShop is based on the 3.4 long-term-support (LTS) version, which is unlikely to drop support for PHP 5 in the near future.


![Symfony version support roadmap](/assets/images/2019/05/symfony-support-roadmap.png){:.text-center}

_Symfony version support roadmap. ([Source](https://symfony.com/roadmap#maintained-symfony-branches))_
{:.text-center}

Even though Symfony is the exception, the PHP dependency problem is becoming an increasingly complex problem, and we had to make a choice. Many other PHP-based CMS are facing the same problems: [Drupal dropped compatibility with PHP 5 back in March](https://www.drupal.org/node/2938726), while Wordpress, who has traditionally supported very old PHP versions, is now [requiring at least 5.6 and will soon drop it as well](https://wordpress.org/news/2019/04/minimum-php-version-update/).


## Here is what we decided

The upcoming PrestaShop 1.7.6.0 compatibility will stay unchanged. Starting from 1.7.7.0, and for every new minor or major version of PrestaShop, the PHP compatibility range will be decided as follows:

**Lower bound** – Defined by the most recent version among:  

  - The oldest PHP version supported by our main dependencies,
  - The oldest PHP version whose official support is not over, or has not been over for more than a year at the time of final release of the PrestaShop version.

**Upper bound** – Defined by the oldest version among:

  - The latest stable PHP version available at the time of the PrestaShop version's feature freeze,
  - The latest PHP version supported by our main dependencies (whichever is the lowest).

These rules will be applied in a “best effort” philosophy.

### Example

Let's say the feature freeze date for 1.7.7 was set to be in December 2019, with a final release in January 2020.

#### Oldest compatible PHP version 

According to the chart above, the official support for PHP 7.0 ended in December 2018. Our first rule is that the oldest supported PHP version must be officially supported at the time of PrestaShop's version feature freeze, or if it's support has ended, it must not have been over a year ago. If the feature freeze is in December 2019, then official support for PHP versions equal or lower to 7.0 would have been over for more than a year, so they don't conform to this rule.
 
Support for PHP 7.1 will be over by late 2019, but since it would have been for less than a year counting back from December, it would qualify to become the lower bound — but only as long as our main dependencies support it.

#### Latest compatible PHP version 

PHP 7.4 is due for release in December 2019, probably after PrestaShop 1.7.7 feature freeze date, so it's possible that not everything will be ready for it.

In that case, the upper bound will be PHP 7.3, which is the most recent PHP version supported by our dependencies.

**This would mean that PrestaShop 1.7.7 will most likely be compatible from PHP 7.1 to PHP 7.3.**

In conclusion, keeping up with newer PHP versions will not only allow developers to benefit from all the nice new language features, but it will also allow us to use newer, more recent libraries to make PrestaShop better and safer.

## Next steps / How can you help

As stated previously, PrestaShop 1.7.7.0 will [add support for PHP 7.3](https://github.com/PrestaShop/PrestaShop/issues/12461). A [Pull Request dropping support for older PHP versions](https://github.com/PrestaShop/PrestaShop/pull/13761) has already been created on GitHub. 

Here are some things you can do to help:

- Join us on [GitHub](https://github.com/PrestaShop/PrestaShop/) and [Gitter](https://gitter.im/PrestaShop/General) to discuss this project
- Test the [development branch of PrestaShop](https://github.com/PrestaShop/PrestaShop/tree/develop) with PHP 7.3 (once the Pull Request above has been merged)
- If you are a module developer, start testing your modules with PHP 7.3
- Help us make sure that our [Open Source Modules](https://github.com/PrestaShop/PrestaShop-modules) are working well with PHP 7.3 
