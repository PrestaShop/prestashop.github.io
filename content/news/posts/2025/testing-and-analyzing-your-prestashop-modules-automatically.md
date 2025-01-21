---
layout: post
title: PSDevCon 2024 - testing and analyzing your PrestaShop modules automatically
subtitle: Learn more about Jonathan Danse’s PrestaShop Developer Conference module presentation
date: 2025-01-21
authors: [ PrestaEdit ]
icon: icon-leaf
tags: [psdevcon, news, event, module, test, analyze]
---

During the PrestaShop Developer Conference 2024, [Jonathan Danse](https://github.com/prestaedit) presented methods for automatically testing and analyzing modules, ensuring their quality and reliability. In this guest article, Jonathan shares the key points from his conference and offers practical advice. Learn how to ensure high-performing modules with every deployment. 

You can find the sources for the module created in this article on the following GitHub repository: [PrestaEdit/modulenine](https://github.com/PrestaEdit/modulenine). Jonathan, the floor is now yours!

# Preamble

When developing a module, it is very often created on a single instance and primarily on a more recent version of PrestaShop. However, the users of these modules are not always on the same platform. 
Over the course of both minor and major versions, PrestaShop introduces code changes that can impact the proper functioning of the module. Nevertheless, manually testing on each version of PrestaShop and with each batch of new methods is tedious.

Performing these tests at the end of development can also prove more complicated than expected, especially if an entire section of code is not backward compatible. Let us then see how to test the code of your module automatically for compatibility across all versions.


# PhpStan
### Introduction

[PHPStan](https://phpstan.org/) is a static code analysis tool specifically for PHP. It analyzes your code for errors and potential issues, helping you improve the quality of your code and avoid common mistakes. At the PrestaShop level, you can already use PhpStan outside of this project. For that, see the [official documentation](https://devdocs.prestashop-project.org/8/modules/testing/advanced-checks/#static-analysis).

### Configuration

Before getting to the matter, let's first explore the necessary setup. We are going to create two shell script files. In our example, we use the module name directly in the file, without using a variable.

*About this topic, you could pass the module name directly in the GitHub workflow by using the repository name. This will not be covered in this article.*

/tests/phpstan.sh

```
#!/bin/bash
PS_VERSION=$1

set -e

# Docker images prestashop/prestashop may be used, even if the shop remains uninstalled
echo "Pull PrestaShop files (Tag ${PS_VERSION})"

docker rm -f temp-ps || true
docker volume rm -f ps-volume || true

docker run -tid --rm -v ps-volume:/var/www/html --name temp-ps prestashop/prestashop:$PS_VERSION

# Run a container for PHPStan, having access to the module content and PrestaShop sources.
# This tool is outside the composer.json because of the compatibility with PHP 5.6
echo "Run PHPStan using phpstan-${PS_VERSION}.neon file"

docker run --rm --volumes-from temp-ps \
       -v $PWD:/var/www/html/modules/modulenine \
       -e _PS_ROOT_DIR_=/var/www/html \
       --workdir=/var/www/html/modules/modulenine phpstan/phpstan:0.12.54 \
       analyse \
       --configuration=/var/www/html/modules/modulenine/tests/phpstan/phpstan-$PS_VERSION.neon
```

/tests/phpstan-v9.sh

This is necessary to enable the `prestaedit/prestashop` registry use instead of prestashop/prestashop, as the Docker image for PrestaShop 9 will only be available upon its official release. Furthermore, the PhpStan version utilized is different, as it is compatible with PHP 8.1, among others.

```
#!/bin/bash
PS_VERSION=$1

set -e

# Docker images prestashop/prestashop may be used, even if the shop remains uninstalled
echo "Pull PrestaShop files (Tag ${PS_VERSION})"

docker rm -f ps9-php8 || true
docker volume rm -f ps9-php8 || true

docker run -tid --rm -v ps9-php8:/var/www/html --name ps9-php8 prestaedit/prestashop:$PS_VERSION

docker exec -i ps9-php8 php -v

# Run a container for PHPStan, having access to the module content and PrestaShop sources.
# This tool is outside the composer.json because of the compatibility with PHP 5.6
echo "Run PHPStan using phpstan-${PS_VERSION}.neon file"

docker run --rm --volumes-from ps9-php8 \
       -v $PWD:/var/www/html/modules/modulenine \
       -e _PS_ROOT_DIR_=/var/www/html \
       --workdir=/var/www/html/modules/modulenine ghcr.io/phpstan/phpstan:nightly-php8.1 \
       analyse \
       --configuration=/var/www/html/modules/modulenine/tests/phpstan/phpstan-$PS_VERSION.neon
```

Next, we will add all the files corresponding to a tested version of PrestaShop. These files will have the `.neon` extension. Its basic content will be as follows: 

```
includes:
	- %currentWorkingDirectory%/vendor/prestashop/php-dev-tools/phpstan/ps-module-extension.neon

parameters:
  paths:
    # From PHPStan 0.12, paths to check are relative to the neon file
    - ../../modulenine.php
    - ../../classes/
    - ../../controllers/
  reportUnmatchedIgnoredErrors: false
  level: 5
  ignoreErrors:
```

### About ps-module-extension.neon 

This initial configuration file will handle the definition of useful constants related to a PrestaShop instance. It will also set up stubs for the Module and Tab classes. Subsequently, we will establish a workflow to test the module under PrestaShop versions 1.6.1.23, 1.7.8, 8.1.7, and 9.0.0-alpha.1.

We will therefore have these four files:
* tests/phpstan/phpstan-1.6.1.23.neon
* tests/phpstan/phpstan-1.7.8.neon
* tests/phpstan/phpstan-8.1.7.neon
* tests/phpstan/phpstan-9.0.0-alpha.1.neon

Just like me [Editor’s Note: Jonathan Danse], you might feel the urge to modify the call to PhpStan configuration files - which we will write later - to use a single file, as the content is identical. But no, you will not do that. This division into files will be necessary for us later.

# Module

Up next in the article, we will design a module aimed at illustrating the handling of errors.

```
<?php

class ModuleNine extends Module
{
    public function __construct()
    {
        $this->name = 'modulenine';

        parent::__construct();
    }

    protected function prestashop16()
    {
        // Methods are more times deprecated, but not removed.
        // So, use a newer one
        $temp = new EmployeeSession();
    }

    protected function prestashop17()
    {
        // Methods are more times deprecated, but not removed, again.
        // So, use a newer one
        $temp = new CustomerSession();
    }

    protected function prestashop8()
    {
        $temp = Carrier::getCarrierNameFromShopName();
    }

    protected function prestashop9()
    {
        $temp = new Order(1);
        $temp->getDiscounts();
    }
}
```

As an experienced developer, you might quickly dismiss an objection - and you would be right to do so: calls to non-existent methods for a specific version of PrestaShop are isolated in methods that are never invoked by our module. Therefore, using this module on any version of PrestaShop, would not cause any issues, at least for now.

Since the code analysis is performed statically and without your developer's eye, an error will still be reported to you. Take it seriously and ensure you address it with conditions as soon as possible, especially since it involves unused code that should be corrected (or removed, if necessary!).

Here is an output from the GitHub console during the execution of our jobs. *During this test, we had not yet introduced errors in the functions for PrestaShop 1.6 and 1.7.*

![php_test47](/assets/images/2025/01/phptest47.png)

By viewing the details of a failed job, you can obtain the desired information:

![php_stan](/assets/images/2025/01/phpstan.png)

By modifying the module as follows, to add a condition on the code execution, you can rerun your job and the error will be gone.

```
    protected function prestashop8()
    {
        if (version_compare(_PS_VERSION_, '8.0.0', '<')) {
            $temp = Carrier::getCarrierNameFromShopName();
        }
    }
```

You just reran the job and the error didn’t go away?! In reality, PhpStan - *although it knows the value of the constant PS_VERSION* - cannot interpret the conditional in the same way it doesn't know that your methods are never called.

As a result, the static code analysis will always return the encountered error. Once it is handled, you will be able to modify your neon file for the affected version (hence the previous separation) to tell it to ignore the error.

```
parameters:
  ignoreErrors:
    - '~^Call to an undefined static method Carrier::getCarrierNameFromShopName\(\)\.$~'
```

# Workflow GitHub

For the sake of this article, we wanted to start with the introduction and the expected result regarding the use of PhpStan. With the goal of making this more automated, we will now write the GitHub workflow configuration.

.github/workflows/php.yml
```
name: PHP tests
on: [workflow_dispatch, pull_request]
jobs:
  php-linter:
    name: PHP Syntax check 7.1 => 8.3
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: PHP syntax checker 7.1
        uses: prestashop/github-action-php-lint/7.1@master

      - name: PHP syntax checker 7.2
        uses: prestashop/github-action-php-lint/7.2@master

      - name: PHP syntax checker 7.3
        uses: prestashop/github-action-php-lint/7.3@master

      - name: PHP syntax checker 7.4
        uses: prestashop/github-action-php-lint/7.4@master

      - name: PHP syntax checker 8.0
        uses: prestashop/github-action-php-lint/8.0@master

      - name: PHP syntax checker 8.1
        uses: prestashop/github-action-php-lint/8.1@master

      - name: PHP syntax checker 8.2
        uses: prestashop/github-action-php-lint/8.2@master

      - name: PHP syntax checker 8.3
        uses: prestashop/github-action-php-lint/8.3@master

  php-cs-fixer:
    name: PHP-CS-Fixer
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Run PHP-CS-Fixer
        uses: prestashopcorp/github-action-php-cs-fixer@master
        with:
          other-cmds: "--config=.php-cs-fixer.dist.php"

  # Run PHPStan against the module and a PrestaShop release
  phpstan-v16:
    name: PHPStan
    runs-on: ubuntu-latest
    continue-on-error: true
    strategy:
      matrix:
        presta-versions: ["1.6.1.23"]
    steps:
      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: "7.1"

      - name: Checkout
        uses: actions/checkout@v3.1.0

      # Add vendor folder in cache to make next builds faster
      - name: Cache vendor folder
        uses: actions/cache@v3
        with:
          path: vendor
          key: php-${{ hashFiles('composer.lock') }}

      # Add composer local folder in cache to make next builds faster
      - name: Cache composer folder
        uses: actions/cache@v3
        with:
          path: ~/.composer/cache
          key: php-composer-cache

      - run: composer install

      # Docker images prestashop/prestashop may be used, even if the shop remains uninstalled
      - name: Execute PHPStan on PrestaShop (Tag ${{ matrix.presta-versions }})
        run: chmod +x ./tests/phpstan.sh && ./tests/phpstan.sh ${{ matrix.presta-versions }}

  phpstan:
    name: PHPStan
    runs-on: ubuntu-latest
    continue-on-error: true
    strategy:
      matrix:
        presta-versions: ["1.7.8", "8.1.7"]
    steps:
      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: "7.4"

      - name: Checkout
        uses: actions/checkout@v3.1.0

      # Add vendor folder in cache to make next builds faster
      - name: Cache vendor folder
        uses: actions/cache@v3
        with:
          path: vendor
          key: php-${{ hashFiles('composer.lock') }}

      # Add composer local folder in cache to make next builds faster
      - name: Cache composer folder
        uses: actions/cache@v3
        with:
          path: ~/.composer/cache
          key: php-composer-cache

      - run: composer install

      # Docker images prestashop/prestashop may be used, even if the shop remains uninstalled
      - name: Execute PHPStan on PrestaShop (Tag ${{ matrix.presta-versions }})
        run: chmod +x ./tests/phpstan.sh && ./tests/phpstan.sh ${{ matrix.presta-versions }}

  phpstan-v9:
    name: PHPStan
    runs-on: ubuntu-latest
    strategy:
      matrix:
        presta-versions: ["9.0.0-alpha.1"]
    steps:
      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: "8.1"

      - name: Checkout
        uses: actions/checkout@v4

      # Add vendor folder in cache to make next builds faster
      - name: Cache vendor folder
        uses: actions/cache@v3
        with:
          path: vendor
          key: php-${{ hashFiles('composer.lock') }}

      # Add composer local folder in cache to make next builds faster
      - name: Cache composer folder
        uses: actions/cache@v3
        with:
          path: ~/.composer/cache
          key: php-composer-cache

      - run: composer install

      # Docker images prestashop/prestashop may be used, even if the shop remains uninstalled
      - name: Execute PHPStan on PrestaShop (Tag ${{ matrix.presta-versions }})
        run: chmod +x ./tests/phpstan-v9.sh && ./tests/phpstan-v9.sh ${{ matrix.presta-versions }}
```


For every pull request made to the repository or via an automatic trigger - thanks to the *workflow_dispatch* event - you will be able to run all the jobs defined previously. Going further, you will notice that we also use a syntax check for a set of PHP versions as well as PHP CS Fixer. Since these steps are not part of our article, we will not go into further detail about them.


# Alternative location: act

During the development of a module, as with any development, you won't necessarily push changes to Git after every function. Therefore, since the GitHub workflow is only triggered by a code push and on the code available in the repository at the time of execution, you wouldn't be able to visualize the issues during development.

To do this, you can use [nektos/act, "Run your GitHub Actions locally"](https://nektosact.com/) to use a runner locally. Workflows using Docker images require you to run Docker (e.g., Docker Desktop). The advantage of this solution, in addition to being local, is the ability to use the same workflow as the one defined in GitHub without having to interchange it to a solution with its own naming conventions. Regarding its installation, I leave it to you to choose the method that best suits your environment. Working on MacOS, the installation via [Homebrew](https://brew.sh/) was preferred.

In the command line, at the root of your repository, you can now write this command to run all your jobs:
```
act workflow_dispatch
```

We specify the GitHub event so that act knows which jobs to run. You can also specify a particular workflow file:

```
act workflow_dispatch -W '.github/workflows/php.yml'
```

Alternatively, you can get the list of available jobs in your workflow and make a direct call to them:

```
act --list
```

And then make a direct call of this type (omitting the GitHub event):

```
act -j 'php-linter'
act -j 'phpstan-v9'
```

You should obtain a result similar to the GitHub console output.

![detected_version](/assets/images/2025/01/detectedversion.png)

### Parallelism issue

For convenience and to run the same job on a series of PrestaShop versions, we use a matrix in the GitHub workflow. However, with Act, this can cause issues with concurrent execution. You can then choose to modify your workflow to avoid using matrices, or you can alter the matrix without changing your configuration.

```
act -j 'phpstan' --matrix presta-versions:8.1.7
```

# Conclusion: module quality and automated testing

To conclude, thanks to the tips shared by Jonathan Danse during the PrestaShop Developer Conference 2024, you now have all the tools to automate the testing and analysis of your modules as well as ensure their quality. By adopting these best practices, you can deploy reliable and high-performing modules.
To explore further, feel free to check the module sources presented in this article on this GitHub repository: [PrestaEdit/modulenine](https://github.com/PrestaEdit/modulenine).
