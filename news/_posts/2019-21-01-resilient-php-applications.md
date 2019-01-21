---
layout: post
title:  "Resilient PHP applications"
subtitle: "Introducing the PrestaShop Circuit Breaker library"
date:   2019-01-21 10:00:00
authors: [ mandrieu ]
icon: icon-blaster
tags:
 - 1.7
---

No matter how well designed is your project and how many tests you have, at some point your website can become inaccessible.

And this because of your database, or calls to third-party services that are unavailable (e.g: payment methods API, PrestaShop REST API to retrieve modules information, synchronization with an ERP, automatization of warehouse & logistic, etc.).

Instead of thinking everything will be ok, we - as developers - need to manage our systems' failures.

Indeed, we need to create both resilient systems and websites able to recover quickly from network disasters.

## The risks of depending on external services

Assuming that all external services will work just fine is risky because you don't think about what could happen in case of unavailability:

* If the payment APIs are not reachable, instead of freezing your shop, you could suggest your customer to come back once the system is ok and offer them a little discount;
* You ought to be able to install PrestaShop even if translations APIs are not reachable, at least in English;
* You ought to be able to access your back office, no matter how many external APIs respond.

**The collapse of a third party service should never impact your shop.**

Another issue with this kind of naive assumptions is that your system will try to contact again and again the third-party service. As a consequence, it slows down your system and makes the user experience terrible when you could instead find out an alternative response.

> There is no good reason to provide such a terrible user experience! period.

## Introducing the PrestaShop Circuit Breaker library

The [Circuit Breaker](https://martinfowler.com/bliki/CircuitBreaker.html) design pattern provides strategies and functions to manage the unavailability of the third party services.

The idea behind the circuit breaker is very simple:

* Every call to a third-party service is wrapped into a function call from the Circuit Breaker;
* Once we reach a defined numbers of failures (means the service is unreachable), the Circuit Breaker is "Open": an alternative response is provided and no calls to the service are done;
* After a defined amount of time (sometimes called "reset timeout"), the Circuit Breaker tries to access the service: if the service is available it will be used again, otherwise it provides an alternative response.

![https://martinfowler.com/bliki/CircuitBreaker.html](https://martinfowler.com/bliki/images/circuitBreaker/sketch.png)

> Schema from Martin Fowler's blog.

It implies a big change of mindset for both e-merchants and developers. Indeed, for each process, they will have to think about/anticipate what should be done in case a service is not available.

Just like web developers do when handling old web browsers to design a website, it is possible to think since the beginning about a "degraded experience" when some third-party services are not available, using a "circuit breaker".

### How works the PrestaShop Circuit Breaker?

We were not satisfied with the quality and the constraints of the existing libraries or Symfony bundles:

* We want something **really** extensible;
* We want something **fully tested** and with **high quality** standards;
* We want something that doesn't require uncommon PHP extensions (like *pcntl*);
* And ... we stil need to provide PHP 5.6+ compatibility.


This is why we have worked on our own implementation of the design pattern, that relies on the popular HTTP Client [Guzzle](http://docs.guzzlephp.org/en/stable/index.html) to make third service calls, and on the [Symfony Cache](https://symfony.com/doc/3.4/components/cache.html#simple-caching-psr-16) component to store and log every call.

Let's see how it will be used in PrestaShop modules controllers starting from PrestaShop 1.7.6:

```php
$fallbackResponse = function () {
    return '{
        "error": "service is unreachable right now."
    }';
};

$this->call('https://api.some-domain.com', $fallbackResponse);
```

As this library doesn't depend on PrestaShop core libraries, you can use it in every PHP project:

```php
use PrestaShop\CircuitBreaker\SimpleCircuitBreakerFactory;

$circuitBreakerFactory = new SimpleCircuitBreakerFactory();
$circuitBreaker = $circuitBreakerFactory->create(
    [
        'closed' => [2, 0.1, 0],
        'open' => [0, 0, 10],
        'half_open' => [1, 0.2, 0],
        'client' => ['proxy' => '192.168.16.1:10'],
    ]
);

$fallbackResponse = function () {
    return '{}';
};

$circuitBreaker->call('https://api.domain.com', $fallbackResponse);
```

## What’s next?

We will start to use it on the "so well-known" gamification module soon, and the library will be available in the PrestaShop next minor version (1.7.6). Step by step, we will make PrestaShop's core and native modules resilient to networks failures.

The Circuit Breaker library is developed and distributed under the MIT license, like many other librairies and dependencies already included in the PrestaShop project (example: Symfony). This way, it is possible for anyone to use it with any other project. Your feedback and your contribution are welcome: feel free to open pull requests and issues about your needs.
