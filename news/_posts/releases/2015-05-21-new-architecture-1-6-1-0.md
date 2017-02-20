---
layout: post
title:  "Architecture Improvements in 1.6.1.0"
subtitle: "Cool new toys for PrestaShop developers"
date:   2015-05-21 19:13:37
authors: [ djfm ]
icon: icon-code
tags:
 - 1.6
 - 1.6.1.x
 - releases
 - architecture
---

With the release of PrestaShop 1.6.1.0 we are going to introduce exciting new tools in the codebase that are designed to help write more modular, testable code that enforces [separation of concerns](http://en.wikipedia.org/wiki/Separation_of_concerns).

We are releasing our work on the software architecture of PrestaShop to start discussing it with our community, gather ideas and feedback, and improve it together.

Since we are introducing many new concepts we felt a few explanations were in order.

## The Plan

The driving idea behind this project is that we want our code to be more robust.

To be robust, code needs unit tests. To have unit tests, code needs to be modular. To write modular code, we need a few tools. The recent changes provide some of these tools, which will be enriched in the coming months.

First of all, don't panic. We are not breaking anything (yet). We're just adding new abstraction layers that are primarily meant to be used by new code.

As much as possible, new features will be implemented using the elements from the new architecture. Old code will benefit from the new components where they provide an obvious improvement but we have no intent to systematically rewrite legacy code and move it to the new architecture. This is not a 2.0 version, but a (big) step to bring PrestaShop up to speed.

Besides architecture improvements, our plan for the coming year includes:

- adopting the PSR-2 norm
- switching to PHP 5.4 (namespaces, closures...!)
- switching to composer for dependency management (no more submodules!)

Stay tuned!

## Disclaimer

Before getting into more details we want to insist on the fact that the architecture changes we have introduced are at this stage still a work in progress.

*The code is production ready, but the APIs may change in the near future.*

You're of course welcome to experiment with the new classes and services, but please be warned there will likely be short notice breaking changes in the coming months.

If in doubt, do not directly depend on code in the `Core` or `Adapter` folders.

## New Directories in the Source Tree


    PrestaShop/
        |-- Core/
        |    |-- Foundation/
        |    └-- Business/
        |-- Adapter/
        └-- *Legacy*/

Two new top-level directories were added to the source tree, `Core` and `Adapter`.

Code in the `Core` directory is what we refer to when we say "the new architecture".

There are two main requirements for all the code in `Core` :

- Code in `Core` MUST HAVE *meaningful* unit tests
- Code in `Core` MUST BE modular
    - no hidden dependencies: use Dependency Injection
    - as a general rule, NO global variables use, direct or indirect (e.g. no access to `$_GET` so no `Tools::getValue()`)

The code in `Adapter` serves as a bridge between the `Core` and the legacy parts. Code in `Core` MAY call into legacy code, but only through an `Adapter`.

Currently we're using pseudo-namespaces, which leads to cumbersome class names like `Core_Foundation_Database_EntityManager`.

They will be replaced as soon as possible with proper namespaces, so:

> `Core_Foundation_Database_EntityManager`

will soon become:

> `Core\Foundation\Database\EntityManager`

which will improve readability a lot. Please bear with us for a little longer :)

## Key New Software Components

### Dependency Injection

To better manage the many dependencies between components inside PrestaShop, we introduced an Inversion Of Control component (class `Core_Foundation_IoC_Container`).

The job of the `Core_Foundation_IoC_Container` class is to store all of the application-wide services (like the database, the configuration...) and pass them on to other components that need them.

Services are bound to the container at the very early stage of the application initialization (`config/bootstrap.php`).

At the moment you mostly access the IoC container through the Service Locator.

For instance:  `Adapter_ServiceLocator::get('Core_Foundation_Database_DatabaseInterface')` will retrieve the instance of the database from the container.

*In the future, Adapter_ServiceLocator will no longer be needed. The IoC container will be threaded down from the application bootstrapping code to the controllers layer and controllers will pull their dependencies from the container directly. Using the `Adapter_ServiceLocator` is a temporary measure that enables us to work with the concepts from the new architecture without the need for risky refactoring.*

The dependency injection component is already used in one very interesting place: module constructors.

Now if you declare a dependency in your module constructor, it will be injected into your module automatically.

This helps make modules safer, because they can specify to the application which components they need to do their work.

For instance, let's say I need access to the database for my module.

Instead of writing things like:

{% highlight php startinline=true %}
class MyModule extends Module
{
    public function __construct()
    {
        // initialization code
    }

    public function getSomeData()
    {
        // Where does Db come from?!
        Db::getInstance()->executeS('SELECT x FROM Y');
    }
}
{% endhighlight %}

You can now write:

{% highlight php startinline=true %}
class MyModule extends Module
{
    private $db;

    public function __construct(Core_Foundation_Database_DatabaseInterface $db)
    {
        // initialization code
        $this->db = $db;
    }

    public function getSomeData()
    {
        $this->db->select('SELECT x FROM Y');
    }
}
{% endhighlight %}

There are several benefits to the new approach:

- no access to global variables
- easier to test: you can `new` the module and pass a database mock to it
- people reading the code know immediately what kind of dependencies the module needs

### Entity Repositories

In PrestaShop many `ObjectModel` subclasses implement methods to retrieve models from the database according to some criteria.
The methods are not generic even though they perform very generic tasks.

For instance in `CountryCore` you can find this method:

{% highlight php startinline=true %}
public static function getByIso($iso_code, $active = false)
{
    if (!Validate::isLanguageIsoCode($iso_code))
        die(Tools::displayError());
    $result = Db::getInstance(_PS_USE_SQL_SLAVE_)->getRow('
        SELECT `id_country`
        FROM `'._DB_PREFIX_.'country`
        WHERE `iso_code` = \''.pSQL(strtoupper($iso_code)).'\''
        .($active ? ' AND active = 1' : '')
    );
    return (int)$result['id_country'];
}
{% endhighlight %}

Which is not needed any longer thanks to the generic entity retrieving capabilities provided by the new `EntityRepository` class:

{% highlight php startinline=true %}
$countryRepository = $entityManager->getRepository('Country');
$country = $countryRepository->findOneBy([
    'iso_code' => 'us',
    'active' => false
]);
{% endhighlight %}

In the code above, you can get access to the `$entityManager` either by declaring it as a dependency in your constructor if you're inside a module, or using the service locator if there is really no better way to pass the dependency:

{% highlight php startinline=true %}
Adapter_ServiceLocator::get('Core_Foundation_Database_EntityManager');
{% endhighlight %}

*Again, `Adapter_ServiceLocator` will eventually disappear from the API. You should only use it where you cannot do proper dependency injection.*

Currently, entity repositories support the following methods:

- `findOne($id)` : finds an entity by its primary key
- `findOneByXYZ($XYZFieldValue)` : finds zero or one entity
- `findByXYZ($XYZFieldValue)` : finds zero or more entities
- `findOneBy(array $conditions)` : finds zero or one entity that matches all of the passed conditions
- `findBy(array $conditions)` : finds zero or more entities that match all of the passed conditions

*It remains to be decided how to fit the more complex parts of our ORM into this abstraction: language fields, multishop fields. Ideas?*

Going forward, we want to move all of the SQL queries out of the entity (`ObjectModel`) classes and into repository classes (or dedicated service classes for more complex tasks that involve different types of entities).

We want models to be as small as possible and `EntityRepository`s provide a great way to separate the database interaction layer from the business code.

For database interaction in general, we are considering a hybrid DataMapper / ActiveRecord pattern where `EntityRepository`s would be used to retrieve models from the database but where we would still have a `save` method on models that persists them to the database.

## Conclusion

We now have some of the building blocks we need to create more robust code with confidence.

We're releasing these new technical features knowing that they will need to be improved upon and nothing is set in stone yet.

Please feel free to comment, share any concerns you may have, or [join us on GitHub](https://github.com/PrestaShop) and contribute!

More articles and examples from the new architecture will follow.
