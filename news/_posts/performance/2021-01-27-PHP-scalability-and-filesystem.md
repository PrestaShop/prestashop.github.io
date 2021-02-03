---
layout: post
title:  "PHP, scalability & filesystems"
subtitle: "One elephant went out to play 🎶"
date:   2021-01-27 12:00:00
authors: [ Claude-ArnaudPerrot ]
icon: icon-cpu
tags: [performance, whitepaper]
---


In this third article in the [performance series we started last year][performance-article1], we'll talk about PHP, scalability and its impact on the filesystem!

Also, we're glad to announce that our [White Paper about PrestaShop Performance](https://content.prestashop.com/hubfs/WhitePaper/PrestaShop_System_Performance.pdf) is now published. So, if you're interested by performance in general and PrestaShop in particular, have a look at it and let us know what you think!

Without further ado, let's dive into PHP, filetystem and scalability!

# Scalabilities

First thing first, let's talk about scalability a little and check this definition provided by André Bondi:

> Scalability is the property of a system to handle a growing amount of work by adding resources to the system.

So, in simplest terms, if I want more clients, or customers, or visitors, I need to add resources to my system. Which seems fair, does it not?

Of course, talking about performance here, we could argue that tuning the system's configuration and its different parts should achieve the same result. Still, once the fine tuning part is done, we should add resources to the system all the same in order to handle more load, so let's play along.

Let's review together the two main levers to enable scalability - and keep in mind those are not exclusive, you often mix them up in Real Life™️.

## Vertical

The simpliest and most efficient way to add some resources to your system if often to add some RAM, or CPU, or storage, or all of those at the same time.

![VerticalScaling][VerticalScaling]
_We require more minerals_
{: .text-center }

In a modern world made of cloud computing instances, vertical scaling can be done in a few mouse clicks by upgrading the instance type and releasing new resources. It can be a bit more tricky if you manage the hardware yourself, but it's still feasible.

Though, keep in mind some potential limitations:

* It tends to be less and less true, but pricing is not linear and 64GB of RAM may not cost twice 32GB
* There may come a point where you can NOT add more resources verticaly and you'll just hit the limit
* If you're managing your own infrastructure, you already know it takes time to upgrade or replace instances (buying, receiving and installing new parts can take weeks)
* If you're managing your own infrastructure, what will you do with the old hardware?
* Finally, if you've not already mixed a bit of horizontal scaling, **your system will be unavailable during the upgrade**! 

Nonetheless, vertical scaling remains the most efficient way to scale a system or an application, as very little resources are wasted (either in networking, or scheduling, processing, etc..).

Last but not least, vertical scaling usually requires no configuration change (either at the system's or application's level), keeping complexity to its minimum.

## Horizontal

As you may have guessed, horizontal scaling is all about adding more _instances_ of your system or application, whichever infrastructure you are using (either some docker, virtual machines or physical servers, the concept is similar):

![HorizontalScaling][HorizontalScaling]
_Just keep swimming, just keep swimming!_
{: .text-center }

Still, depending on your ecosystem, it may require some more work, at least a way to [load balance](https://en.wikipedia.org/wiki/Load_balancing_(computing)) traffic between the instances.

And probably a way to distribute the application's files, especially for application like PrestaShop.

Hence, the most simple architecture schema you will come with looks a lot like this (either load balancing with your kubernetes service through an ingress or just setting up your F5 BigIP appliance):

![HorizontalScalingExpanded][HorizontalScalingExpanded]
_I've a feeling we're not in Kansas anymore._
{: .text-center }

And we are not even mentioning the redundancy systems that could be setup for the load balancing and the shared filesystem parts. 

Of course, if you can avoid a shared filesystem, please do - it is a lot of constraints, technical complexity and performances issues to resolve. But sometimes you can't, because your application or system requires it, and it becomes a new challenge to manage. Wich is fine!

Let's face it : even with cloud computing within reach of our keyboards, horizontal scaling remains more complicated to setup than vertical scaling. It may even require some configuration (but more on that later) and, in some rare cases, code adaptation.

So, why should we even consider horizontal scaling?

* A more linear pricing when adding instances and resources
* More granularity as well (you can size each instance as needed)
* If you're managing your own infrastructure, you're not wasting resources when adding a new server
* Uptime : with several instances running simultaneously, **you can update and upgrade your system seamlessly**!
* Once setup, it can enable some new deployment methods, facilitating rollout, rollbacks, and so on

# PHP & Filesystems

So, now that we're all on the same page about our scalability options, we all want some uptime, some performance and some fine PHP. 

Thing is, the first thing we see when running PHP on a shared filesystem is some performance issues. It can be expected with some network overhead due to the shared filesystem, but PHP inner workings are taking it up to another level.

## System calls

On an unix system, when you want to access a file, one way or another, the kernel has to resolve it. Because everything is a file on a Unix system, this mechanism is used wether your target is a directory, a socket, a link or a plain file - the main difference being the file type.

It does this by calling `stat`, which is a bit heavy on the system, not only because it requires disks metadata but also because of [context switching](https://en.wikipedia.org/wiki/Context_switch).

## PHP filesystem usage

PHP not being a compiled language, it does use several files.

Even more today, with [Composer](https://getcomposer.org/) enabling package management, adding plenty of modules and files.

Just a quick example here, a standard PrestaShop installation, just the modules directory contains around 10k files:

```
$ ll -R|wc -l
10775
```

And this is not limited, or specific, to PrestaShop. Here's the vendor directory of a custom application: 

```
$ ll -R vendor/|wc -l
40539
```

And we've not even seen the application's files at this point.

Of course, your mileage may vary, but that remains something to take into account when developing and designing your application, because faster storages will only mitigate this: context switching will remain, metadata will still be required, and so on.

As stated before, PHP _will_ resolve those files, requiring the kernel to do so, calling `stat` for *each of them*, *each time*.

# Optimizations

Of course, there are ways to attenuate PHP's behaviour regarding the filesystem usage. Though, as you'll see, those solutions could impact the way you manage your system.

Caching may not always be easy, but it's always efficient.

## realpath cache

First configuration directive to keep in mind when dealing with PHP and performance is realpath cache. As mentionned earlier, PHP does scan the directories for files and subdirectories, which takes some system resources and introduces even more latency in a distributed system with a shared storage.

But PHP allowing us to cache those calls and their responses since version 5.3, we'll make good use of this option and enable it as such:

```
realpath_cache_size = 4096K
realpath_cache_ttl = 600
```

As usual, you may need to adjust those values depending on your own system and application (path length, number of files, etc..).

### The open_basedir dilemma

Don't forget that the real path cache directives are incompatible with the `open_basedir` one. Hence, you won't be able to enable both of them. Which could be a conundrum as one directive enables performance when the other enforces security.

Our best advice would be to work on both sides by:

* Either with containers (at PHP or kernel level), or Virtual Machines or whichever technology you're the most confortable with, working on security by minimizing the directories and contents the application can access to
* Enabling the realpath cache directive in order to improve the application's or system's performances

As always, we're aware our advice can not take several parameters into account - such as the security requirements of your application or system, your access to different platform architectures types or the resources at your disposal.

Security is always a trade-off (performance, accessibility, ease of use: you name it).

## opcache

Opcache is another cache system available to us through PHP.

This time we are not caching the filesystem paths, files and directories but the files contents themselves. And more precisely: the compiled files' contents, stored *in memory*. Which will minimize as much as possible the filesystem's accesses.

This is a real booster for your system and/or application, here are some suggested configuration parameters:

```
[opcache]
opcache.enable=1
opcache.enable_cli=0
opcache.memory_consumption=256
opcache.interned_strings_buffer=32
opcache.max_accelerated_files=16229
opcache.max_wasted_percentage=10
opcache.revalidate_freq=10
opcache.fast_shutdown=1
opcache.enable_file_override=0
opcache.max_file_size=0
```

If you can manage it, here are few options you could also configure:

```
opcache.validate_timestamps=0
opcache.revalidate_path=0
```

Keep in mind that, if you deactivate `validate_timestamps`, OPCache will never update your code, unless you trigger it (either through internal functions or by restarting the web server). Which will impact your deployment method if you're dealing with VMs and physical servers - but be irrelevant when working with containers.

## Results

So, what can you expect from a bit of caching, when trying to minimize the filesystem impact on PHP?

Well, we're glad you ask!

![TuningUsersCount][TuningUsersCount]
_As usual, the more the merrier_
{: .text-center }

As you can see, even with a small instance with a single vCPU and standard disks, we see a huge performance improvement.

Something that you will be able to reproduce, whatever your environment and setup is.

Just in case you were wondering about the filesystem and disks impact, here is another test with SSD disks on the same instance type:

![TuningUsersCountSSD][TuningUsersCountSSD]
_Again, the more the merrier_
{: .text-center }

Let's have a quick look at the CPU usage before wrapping up:

![TuningCPUUsage][TuningCPUUsage]
_More CPU usage means less bottlenecks_
{: .text-center }

We do hope this article helped to shine some light on some PHP mechanics,  their intrications with performance and how to alleviate them.

If you wonder about other parameters that could fasten your PHP application and PrestaShop specifically, plenty of them can be found in our [devdocs](https://devdocs.prestashop.com/1.7/scale/optimizations/). 

## About the series

Here are the topics that have currently been covered during this series:

1. [Performance (& PrestaShop)][performance-article1]
2. [Apache Vs. NGINX : Match Of The Millennium][performance-article2]
3. [PHP, scalability & filesystems][performance-article3]

[performance-article1]: /news/performance-and-prestashop/
[performance-article2]: /news/apache-vs-nginx/
[performance-article3]: /news/PHP-scalability-and-filesystem/
[VerticalScaling]: /assets/images/2021/01/VerticalScaling.png
[HorizontalScaling]: /assets/images/2021/01/HorizontalScaling.png
[HorizontalScalingExpanded]: /assets/images/2021/01/HorizontalScalingExpanded.png
[TuningCPUUsage]: /assets/images/2021/01/TuningCPUUsage.png
[TuningUsersCount]: /assets/images/2021/01/TuningUsersCount.png
[TuningUsersCountSSD]: /assets/images/2021/01/TuningUsersCountSSD.png
