---
layout: post
title:  "PrestaShop Coding Standards"
subtitle: "How to contribute to PrestaShop project"
date:   2016-05-10 03:00:00
author: [ maximebiloe ]
icon: icon-code
tags:
- coding-standards
- development
---


Working on an open source project as massive as the PrestaShop codebase, a few ground rules have long been established in order to ease the participation of developers, be they from the PrestaShop Core team or the Community at large.

For long, we used our own coding standards. We then switched to PSR-2 last year.

Because we want to have an always better codebase, clearer, easier to read and to maintain, we have decided to follow some more established standards for the languages used in PrestaShop.

This means that we are updating our current standards requirements for languages that already have one, or selecting a standard for the languages which did not have one in use yet.
This means that we now have clear standards and norms for PHP, JavaScript, HTML, CSS, pull requests and commits.

We already see your face, don't panic :smile: These standards are pretty common and natural.

Below, you'll find a little overview of these standards and some examples of the most significant points. Do not hesitate to look at [our documentation](http://doc.prestashop.com/display/PS16/Coding+Standards) to see all the details.

At the same time, to make it easier for you to contribute, we also updated our commit and pull-requests norms. Read all about it below.


## Coding standards

### PHP

As you already know if you have read [this article](http://build.prestashop.com/news/prestashop-1-7-and-symfony/), we chose to integrate the Symfony framework into PrestaShop. So, what's more natural than to follow their coding standards? It comes as a complement of the PSR standards ([PSR-0](http://www.php-fig.org/psr/psr-0/), [PSR-1](http://www.php-fig.org/psr/psr-1/), [PSR-2](http://www.php-fig.org/psr/psr-2/) and [PSR-4](http://www.php-fig.org/psr/psr-4/)).

Some noteworthy rules:

* Use camelCase, not_underscores, for variable names, function names, method names, and arguments names.
* <img src="/assets/images/2016/05/yoda.gif" style="display:inline;width:24px;vertical-align:top;"> [Yoda conditions](https://en.wikipedia.org/wiki/Yoda_conditions) you should use.
* Add a comma after each array item in a multi-line array, even after the last one.

{% highlight php startinline=true %}
$defaultOptions = array(
    'some_default' => 'values',
    'another_default' => 'more values',
);

if (true === isset($defaultOptions['some_default'])) {
    return;
}
{% endhighlight %}

More details and a complete example can be found on [Symfony documentation](http://symfony.com/doc/current/contributing/code/standards.html).

### JavaScript

For our JavaScript code, we chose to follow the well-detailed and documented [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript). Code should be written in ECMAScript 6 and Babel will transpile it into ECMAScript 5 for a wider browser compatibility.

Some noteworthy rules:

* Always use semicolons at the end of an instruction.
* Use soft tabulations with two spaces to indent.
* Use braces with all multi-line blocks.

{% highlight javascript startinline=true %}
(function () {
  if (test) {
    return false;
  }
}());
{% endhighlight %}

Do not hesitate to look at their [complete documentation](https://github.com/airbnb/javascript).

### CSS & HTML

Regarding the CSS and HTML codebase, because we have integrated Bootstrap 4 both in the back office and front office, we have decided to follow their [coding standards](http://codeguide.co), maintained by @mdo.

When you are writing HTML code, if your line is longer than 120 characters, we have chosen to do a line break after each attributes with an indentation. For example, it will look like this:

{% highlight html startinline=true %}
<img class="test"
  id="..."
  name="..."
  data="..."
  src="..."
  title="..."
  alt="..."
  role="..."
>
{% endhighlight %}

Some noteworthy rules:

* HTML
  * Use soft tabulations with two spaces to indent.
  * Avoid superfluous HTML markup.
  * No more self-closing tag.
* CSS
  * Use soft tabulations with two spaces to indent.
  * When grouping selectors, keep individual selectors to a single line.
  * End all declarations with a semicolon, even the last one.

{% highlight html startinline=true %}
<img class="test" src="...">
{% endhighlight %}

{% highlight css startinline=true %}
img,
a,
input[type="text"] {
  display: block;
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
{% endhighlight %}

### Smarty / Twig

PrestaShop 1.7 uses both the Smarty and Twig template engine. Because they are mostly used to generate HTML, we ask that Smarty/Twig code be written following the HTML standards above -- as well as the one used by SensioLabs for Twig.

Some noteworthy rules:

* Use soft tabulations with two spaces to indent.
* Use single quotes to surround strings.
* Use [snake case](https://en.wikipedia.org/wiki/Snake_case) (underscores) to name your blocks.

{% highlight twig startinline=true %}
{% raw %}
{% block my_block_name %}
   {% set foo = 'foo' %}
{% endblock %}
{% endraw %}
{% endhighlight %}


## Commits & Pull-requests

### Commits

In the past, we used to have only one commit by pull request. This was a bad habit. We now require contributors to make **atomic commits**, so you will surely have more than one commit in a single pull request. This will be helpful to review, cherry-pick or revert (we hope to never have to do that :wink: ) the changes.

**What's an atomic commit?**
It means that the commit's purpose is **one, and only one, complete fix or change**. Typically, ask yourself if what you are doing is one or several tasks. Do not hesitate to use "git add -p ..." (details [here](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging)) if you have made several changes in the same file but not all those changes are meant to be in the current commit.

When you are modifying CSS and/or JavaScript files, we invite you to make a separate commit for the compiled files. If you want to know more about compiling assets, you can look at [our documentation](https://github.com/PrestaShop/docs/blob/master/themes/assets/assets.rst).

The commit name should also give an idea of the context or of the file that is being changed. The more details, the better!
The commit name should be as unique and recognizable as your commit itself.

To make the commits context easier to read and hassle-free, we have chosen to prefix them with two letters depending on the modification scope:

| Code | Scope |
|:----:|:------|
| FO | if the changes impact the front office |
| BO | if the changes impact the back office |
| IN | if the changes impact the installer |
| WS | if the changes impact the web service |
| CO | if the changes impact the core | 
| TE | if the changes impact the tests |

Examples:

* CO: Retrieve all required data for notifications
* BO: JS for notifications in new BO theme
* FO: Fix voucher layout in cart
* TE: PHP 7 is no longer an option

### Pull Requests

Now that you have made atomic commits, you surely have a lot of commits for one pull request. A pull request answers to a given issue. Do not ever make a single pull request for many purposes. Do not hesitate to split your big commit into several subprojects. It will be easier and quicker to review.

As all your commits messages are well-formated, just make a summary of your pull request's purpose in its GitHub title. A summary does not mean it can not be explicit. Please describe what your pull request does in details (avoid "Fix product page" or "Category page improvement"). Then, just fill the PR template table to answer some questions which will help the team make a decision faster.

Please note that all the pull requests **must** follow those guidelines. If the commit messages are not well-formatted, the pull request's title is not correct, or the table is not properly filled, we will not be able to accept your pull request.

Find more information and all the details on [our documentation](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message).

## FAQ

### When will these standards be mandatory?

You can (and should :wink:) already use these standards. We will not reject your contributions for now if you do not respect them, there will be a transitional phase. We will ask you to respect these standards from 1st July, 2016 onward.

Don't be worry, during that transition phase, we will gladly help you and indicate you what you could improve for the next time.

### In which cases do I have to use those standards?

All the new files and new contributions will have to respect them. You will not have to change the entire file to the new standards, but you must not submit new contributions with old standards.

You are now ready to contribute and to help us to improve PrestaShop. If you have any questions about a pull request you want to make, or need help to contribute, do not hesitate to contact us on our [dedicated Gitter channel](https://gitter.im/PrestaShop/GitHub-Git-PullRequest).
