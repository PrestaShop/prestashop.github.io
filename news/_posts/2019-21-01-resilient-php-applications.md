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

No matter how well designed is your project and how many tests you have, at some point your website can become unavailable.

This can be because of your database, or calls to third party services are unavailable (e.g: payment methods API, PrestaShop REST API to retrieve modules information, synchronization with an ERP, automatisation of warehouse & logistic, ...)

Instead of thinking everything will be ok, we need - as developers - to manage the failures of our systems.

We need to create resilient systems, to create websites able to recover quickly from network disasters.

## The risks of depending on external services

Assuming all external services will works fine is risky because you don't think about what should happens in case of unavailability:

* if the payment APIs are not reachable, instead of freezing your shop you could suggest your customer to contact them back once the system is ok and provide them a little discount;

* you should be able to install PrestaShop even if the translations APIs are not reachable,
at least in english;

* you should be able to access your back office, no matter how many external APIs are not available;

**The collapse of a third party service shouldn't collapse your shop.**

Another issue with this kind of naive assumptions is that your system will try to contact again and again the third party service. This is slowing your system and make the user experience terrible when you could manage to provide an alternative response.

> There is no good reason to provide such a terrible user experience! period.

## Introducing the PrestaShop Circuit Breaker library

The [Circuit Breaker](https://martinfowler.com/bliki/CircuitBreaker.html) design pattern provides strategies and functions to manage the unavailability of the third party services.

The basic idea behind the circuit breaker is very simple:

* every call of third party service is wrapped into a function call from the Circuit Breaker;
* once we reach a defined numbers of failures (means the service is unreachable), the Circuit Breaker is "Open": an alternative response is provided and no calls to the service are done;
* after a defined amount of time (called "reset timeout" sometimes), the Circuit Breaker try to access the service: if the service is available it will be used again, else the alternative response is provided instead;

![https://martinfowler.com/bliki/images/circuitBreaker/sketch.png](https://martinfowler.com/bliki/images/circuitBreaker/sketch.png)

> Schema from Martin Fowler's blog.

This is also a big change of mindset for both the e-merchants and the developers, because for each process they need to think about what should be done in case of unavailability of a service.

While the web developers try to handle the old web browsers constraints when they design a website, it's possible to think from the beginning about a "degraded experience" when some third party services are not available.

### How works the PrestaShop Circuit Breaker?

We were not satisfied with the quality and the constraints of the existing libraries or Symfony bundles:

* we want something **really** extensible;
* we want something **fully tested** and with **high quality** standards;
* we want something that doesn't require uncommon PHP extensions (like *pcntl*)
* and ... we still need to provide PHP 5.6+ compatibility;

This is why we have worked on our own implementation of the design pattern, making adapters that relies on the popular HTTP Client [Guzzle](http://docs.guzzlephp.org/en/stable/index.html) to make calls and on the [Symfony Cache](https://symfony.com/doc/3.4/components/cache.html#simple-caching-psr-16) component for the storage/logging of the calls.

Let's see how it will be used in PrestaShop modules controllers starting from PrestaShop 1.7.6:

```php
$fallbackResponse = function () {
    return '{
        "error": "service is unreachable right now."
    }';
};

$this->call('https://api.some-domain.com', $fallbackResponse);
```

As this library doesn't depends on PrestaShop core libraries, you can use it in every PHP project:

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

We will start to use it on the "so well-known" _gamification_ module soon,
and the library will be available in PrestaShop in the next minor release (1.7.6). Step by step, we will make PrestaShop Core and native modules resilient to networks failures.

The Circuit Breaker library is developed and distributed under the MIT license, like many other librairies and dependencies included in the PrestaShop project (example: Symfony). This way, it is possible for anyone to use it with any other project. Your feedback and your contribution are welcome: feel free to open pull requests and issues about your needs.
