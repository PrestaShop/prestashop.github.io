---
layout: post
title:  "Docker and PrestaShop - A Beautiful Image"
subtitle: "How we use Docker to improve PrestaShop development"
date:   2017-02-17 09:10:11
authors: [ thomasn ]
icon: icon-penknife
tags:
 - development
---

You’ve most probably heard about Docker and how great it is for development (and even maybe for production). Good news: we’ve cooked some things to help you develop on PrestaShop, thanks to Docker!

Quick reminder for those of you not familiar with Docker. No, it’s not about Khaki pants (raise your hand if you’ve spotted a private joke). Docker helps you run and create images with containers, without having to install a virtual machine on your own. And once you’ve downloaded an image, you can deploy it in as many containers as needed - crazy and extremely convenient!

## How a revolution began for our processes

During summer 2015, we integrated our software among the existing images of [Docker Hub](https://hub.docker.com/r/prestashop/prestashop/).

At the beginning, the main objective of this project was to make our deployments easier (often considered as difficult by our own team members), while discovering a trendy technology at the same time. Today, we are glad to see that this image is used by a lot of people from the Docker community: the image has already been downloaded more than 10,000 times!

Let’s go back to the origin of this revolution.


## Why use Docker to develop on PrestaShop

### Deploying PrestaShop easily and quickly

The image pushed on Docker Hub is dedicated to any developer or agency who would like to open a shop and make changes on it, without losing time on its deployment. The image you download comes with everything you need to install an actual release of PrestaShop.
We use the official PHP image from Docker Hub as a base, which contains PHP 5.6 running with Apache.
We chose stability against performance with Apache, which works better natively with PrestaShop. Also, the image already provides own its internal MySQL server if needed.

You do not have to look for missing components, everything is already ready-to-use! The only thing you have to do is to personalize your own installation with the different options provided.
Just execute your new container and let it initialize itself. After a minute it’s all there, already installed.

And you can choose to install PrestaShop automatically; this means that you don’t have to go through the installer. More on that below, but that’s quite a time-saver. The PrestaShop installer is quite fast, however you’ll be gaining 10s for each installation. How many PrestaShop do you install every day?

### Customizing your installation

Just as with the regular installation, you can customize your PrestaShop installation at will. It means you can choose to:

* Install automatically
* Localize your installation (choose your locale)
* Enable the dev mode
* Call a specific external database (As it should be done when following [Docker’s best practices](http://docs.docker.com/engine/articles/dockerfile_best-practices/#best-practices-for-writing-dockerfiles))
* Use custom credentials


### Parallelizing container executions

Because running one PrestaShop container uses at most 200 MB of RAM, you can run many Docker containers on a single machine and have a better use of your memory than with classical virtual machines.

You can run several containers at the same time -- as many as you wish, in fact. Why would you do so? Because you could try different versions of PrestaShop, use different databases, or different versions of PHP. How about testing your module on both v1.6 and v1.7? It’s like everything is possible!


## Our use of Docker

We’ve been using Docker internally at PrestaShop for some times now: Addons team, Core team, single developers... Docker is helpful to us and is used every day. 

### To work on several environments at the same time

Docker makes it possible for us to deploy and test PrestaShop in different environments.

### For support

Being able to easily deploy in various environments is great to offer support on a specific version of PrestaShop. When we develop a patch or fix a bug, we need to check if it works for the version where it has been reported, as well as later ones.
When a bug is reported on our tracker, we need to check if the issue comes from the Core. Having the same version as the reporter is a perfect start to fit their environment. However, even if we are able to deploy any patch version of PrestaShop, we still recommend to our merchant to follow any patch release.

Docker allows us to quickly install any version of PrestaShop: we can test and quickly see if what we’ve done applies to our latest versions, and we do have a lot of versions out there. And since we plan on maintaining v1.6 until October 2018, Docker will come handy for sure!

### For module testing

It’s all in the title. The Addons team develops or validates modules which need to be compatible with several PrestaShop versions. So here, Docker helps us:

* Test and maintain modules on several versions of PrestaShop, at the same time.
* Check if the module isn’t affected by changes from the core.
* Clean the test shop to avoid incompatibilities. 

About that last point. During our tests, we may introduce strange or incomplete data in the shop. And sometimes, an external module alters the core files or the core tables in the database. Even if we reject the module during a validation, the shop has been too much altered to run properly. Docker allows us to fix that by restarting a container, or just doing a rollback to a previous image if we made a snapshot.


### For internationalization

PrestaShop is available in many languages, and when it comes to testing a modification in more than 20 languages, it’s rather convenient to be able to use Docker. We can launch several shop installs using different countries settings, simultaneously. Bam. That’s it.


### For testing on other environments without affecting ours

PrestaShop 1.7 is a major evolution from version 1.6, and includes many changes in its core. In parallel to our own developments, the PHP Core team has released a new revolutionary version, PHP 7, and is already working on PHP 7.1.

In consequence, we do our best to work on different environments and avoid potential compatibilities with the “obsolete” and current versions. On the following diagram is a representation of the running containers, showing two different Apache for the same PrestaShop. Each of them has its own PHP version, which are the latest stable version and the pre-release of the next version. They execute exactly the same code and work with the same database, which make the error detection easier.

![Prestashop and Docker](/assets/images/2017/02/prestashop-docker.jpg)

This infrastructure is made thanks to `docker-compose.yml`, which is a file explaining all the services to deploy and how to link them.

## Docker and its native integration to your OS

A point which was making Docker quite difficult to use was the compatibility only with Linux. Guys using Windows or Mac OS had to install a Docker Engine on a virtual machine with Linux as guest OS and were encountering different compatibility issues.

Since its 1.12.0 version, released in June 2016, Docker users can enjoy a simpler way to use their technology with Mac OS and Windows! It is still a virtual machine, but not completely isolated from the host anymore. This would not be possible without a tight collaboration with Apple and Microsoft, who have their specific tools to virtualize systems.

You can now use the power of Docker on every operating system (Networks, Volumes, etc.) in the same way, so… Join the movement!


## How to setup PrestaShop in Docker

### Basic configuration

There are different ways to use PrestaShop on Docker. The first and the simplest one is to start it in an “autonomous” mode.

```
docker run -ti --name some-prestashop -p 8080:80 -d prestashop/prestashop
```

With this command, you will start a container with PrestaShop and all its default values. It also includes its own MySQL server. Just reach your freshly deployed PrestaShop at http://localhost:8080 to find the installation wizard :)

### Customized configuration

A few parameters are available to help you customizing your PrestaShop container.  
Each environment parameter you want to set must be added to the `docker run` command before the image name, with `-e <Environment var name>=<value>`.

You can find all the available options in the full description of our image: https://hub.docker.com/r/prestashop/prestashop/


#### Development mode
For 
example, the main parameter you would like to change is the development mode flag (`PS_DEV_MODE`). Set it to 1 to enable the error reporting and the development mode in PrestaShop:

```
docker run -ti --name some-prestashop -p 8080:80 -d -e PS_DEV_MODE=1 prestashop/prestashop
```

#### Automatic installation

If you want to deploy PrestaShop as fast as possible, I recommend you to enable this option.

Once all the components are ready, the container proceeds to the installation of [PrestaShop in console mode](http://doc.prestashop.com/display/PS16/Installing+PrestaShop+using+the+command+line). And then, you directly get your ready-to-use shop when you connect on it for the first time.

But if it is the fastest and most convenient way to get your shop running, it also requires you to set all your environment variables properly. I recommend that you check the default value of all these parameters to see if they fit in your case:

* **DB_SERVER**: If set, the external MySQL database will be used instead of the volatile internal one _(default value: localhost)_
* **DB_USER**: Override default MySQL user _(default value: root)_
* **DB_PASSWD**: Override default MySQL password _(default value: admin)_
* **DB_NAME**: Override default database name _(default value: prestashop)_
* **ADMIN_MAIL**: Override default admin email _(default value: demo@prestashop.com)_
* **ADMIN_PASSWD**: Override default admin password _(default value: prestashop_demo)_
* **PS_DOMAIN**: Override the domain used to reach PrestaShop.

When you are ready, launch the long `docker run` command you will have.

Depending on your configuration, this can take almost one minute before starting completely. You can look at the logs: when you see that Apache has started, you are ready to enjoy PrestaShop on Docker!

Convinced already? Then go ahead: download Docker and our image, and start playing around!
