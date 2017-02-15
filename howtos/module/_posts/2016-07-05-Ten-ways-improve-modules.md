---
layout: post
title:  "Ten ways to improve your PrestaShop modules!"
subtitle: "Stop the bugs, get back to innovating!"
date: 2016-07-05 8:07:11
authors: [ mdekker ]
icon: icon-puzzle
tags: [ howto, tutorial, modules ]
published: true
---

PrestaShop has numerous features in the API, both hidden in its code as well as in the developer documentation and there are many tools that allow you to create your own module in no time!
Unfortunately I have noticed that many developers do not use these features and tools to their advantage, so I think it's time to change all that :)
Hopefully, these tips will increase your development speed and save you lots and lots of time. And if not satisfied, you'll get your money back! (Oh, wait...)

Here is a list of very very useful tools and features. Prepare for some technical stuff as we're going to cover some of them in depth.

* TOC
{:toc}


### 1. Use an Integrated Development Environment
Using an integrated development environment such as PhpStorm or NetBeans is a great way to improve your productivity.
Tools such as these come with dozens of nifty features out-of-the-box to develop quicker... a lot quicker!

As the name implies, they intend to integrate as many features as possible, allowing you for example to automatically upload your changes over FTP. It is also possible to make a direct connection with the MySQL database and browse it from your IDE (not recommended for production environments!) to see what was actually written to the database by your module.
An IDE is aware of your code, guiding you while you write your code, wherever and whenever you need it. Cool tip for PhpStorm users: navigate to *Help > Productivity guide*. It will show you how many keystrokes it has saved you, as well as amount of bugs prevented and hours saved. The numbers will add up quickly after using it for a while!
These IDEs were designed to never take your hands off the keyboard while performing basic programming tasks. Feel free to configure the keyboard shortcuts in a way you're comfortable with and don't disable the "Tip of the day" messages. They can make the "steep" learning curve of using an IDE a little bit less steep.

### 2. Stick to coding standards
PrestaShop has changed their coding standards a few times in the past and as of May this year, another coding standard has gone into effect. Why does PrestaShop change its [coding standards](/news/prestashop-coding-standards/)?
It is mostly because PrestaShop is an open source projects and needs several standards to abide to, because otherwise the whole codebase would become an unreadable mess and the GitHub repository would become a place full of (small) conflicts --  no time to actually focus on the software itself.
("What color is [the bikeshed](http://bikeshed.com/)?", "I think it should be [PrestaShop purple](http://251B5B.bikeshed.com/)!" -- just to name a few examples!)

The latest standards used by PrestaShop are based on the Symfony standards. By adopting these common standards, it makes it easier to rely on solid and proven guidelines you can use on other projects.
Even though these standards are very specific to open source, you can incorporate them into your own workflow as well, in order to increase productivity.
There are probably numerous times where a co-worker might have to look at your work and need to adjust your code. Having someone else take a look at your code may apply even if you're a one man army coder.
Using standards makes it much easier to cooperate. Don't forget that these standards were also designed to make the code somewhat "predictable" and allows for less mistakes, thus making the code you write less error-prone. Isn't that cool?
If you use these standards and rules that have (originally) been designed for open source projects to your advantage, you'll definitely save yourself some time!

### 3. Generate the module's configuration page
When working with PrestaShop modules you might have seen the fancied configuration pages. Notice how many of them are different? Some include wizard pages or popups, others have millions of tabs to separate the different configuration types.
At first sight, some of them might look cool and you might get tempted to copy these as well, but don't forget that this will cost you some maintainability. This is particularly true when having to support multiple versions of PrestaShop. The `HelperForm` and `HelperOptions` classes were designed to help you with this.
Did you know that it is possible to extend these templates and that you can define your own configuration elements? Here's a code snippet that will allow you to use PrestaShop 1.6's switch element on an older version of PrestaShop:

{% gist firstred/b5016aab980ade678d741691e5b15c5b %}

You can simply place this file in the location `views/templates/admin/_configure/helper/form/form.tpl` relative to the root of your module's folder and the `HelperForm` template has been extended.
Do you see the `$smarty.const._PS_VERSION_|@addcslashes:'\'' < '1.6'` check? This simply allows us to define several templates for different versions of PrestaShop. Pretty cool if you want to keep your code together and the view separated in a different file.
It also keeps your main module file readable as you will only need to define an array with the right values in order to generate the form. Remember PrestaShop's MVC nature? You're perfectly respecting this pattern by implementing your configuration page this way.

### 4. Contribute to PrestaShop's core code
PrestaShop's core code is baked on [GitHub](https://github.com/PrestaShop/PrestaShop). This is where developers gather and contribute to PrestaShop. Not only do developers contribute code, you will also see some of the visitors comment on your Pull Request.
Before your contribution is merged, it will also be checked by PrestaShop's developers and quality assurance team. Sometimes they might merge your code right away, but it can also happen that your code contains some bugs.
The advantage of such an open and transparent process, is that others will see your code (guaranteed, as all pull requests are at least being checked once) and might reveal some bad coding habits you might have developed over time, without you even realizing it.
Most contributors visit the GitHub repository in order to improve PrestaShop and the contributions, so the chance of someone suggesting improvements for your code is very high. Use the advice to your advantage!

### 5. Drop support for older versions
As PrestaShop's code improves over time, so does the API. The newer the version, the easier it will be to develop a module as PrestaShop's codebase has evolved over time. It is now much easier to create a module than for example four years ago.
By dropping support for older version you will not only enjoy the features of a newer API, you will also have to insert less conditional blocks into your code. In the end, this makes it a lot easier to test and maintain your code.

### 6. Use open source modules as "boilerplates"
PrestaShop 1.6's developer documentation, unfortunately, is far from finished as there is enough left to write about. You might have had numerous time where you had wished that the page contained some more information.
Luckily, most of the basics can be figured out by having a look at the basic modules on GitHub or other open source PrestaShop module projects. Yes, they exist :)

Here is a starter kit for a payment module for PrestaShop 1.7:
[https://github.com/PrestaShop/paymentexample](https://github.com/PrestaShop/paymentexample)

Do you remember the open source Google Shopping module? It's a very good base for an export module:
[https://github.com/jmartin82/ps_googleshopping](https://github.com/jmartin82/ps_googleshopping)

This module does some very complex thing -- it is hard to change PrestaShop's default URLs:
[https://github.com/ZiZuu-store/zzCleanURLs](https://github.com/ZiZuu-store/zzCleanURLs)

A full and mature open source alternative for using Stripe as a payment method:
[https://github.com/firstred/mdstripe](https://github.com/firstred/mdstripe)

Working (and changing) the way hooks are used:
[https://github.com/firstred/mppaymentstocarriers](https://github.com/firstred/mppaymentstocarriers)

Replacing PrestaShop's default search with ElasticSearch:
[https://github.com/DonatasL/PrestaShop-ElasticSearch](https://github.com/DonatasL/PrestaShop-ElasticSearch)

These are (in general) complex and/or extensive modules. Search around on GitHub for more projects like that. They can really give you a headstart when working on a new module. Be sure to always check the code license, however. Some licenses might prevent you from using the code in future (commercial) projects!

### 7. Avoid "magic numbers" and "magic strings"
When creating a module for PrestaShop there will be dozens of times in which you will need to access a configuration key (e.g. `Configuration::get('MYMODULE_ACCEPT_PAYMENTS')`). By using strings all the time you increase the chance of making a typo.
Since these strings never change during runtime you can define them as constants at the top of your module's class. By using an IDE which immediately warns you when the constant cannot be found, it's easier to prevent bugs.
You can define the constants as follows:
{% highlight php %}
class IndexControllerCore extends FrontController
{
	const ACCEPT_PAYMENTS = 'MYMODULE_ACCEPT_PAYMENTS';

	public function __construct()
	{
		// CONSTRUCTOR
	}
}
{% endhighlight %}

Configuration values can now be loaded like: `Configuration::get(self::ACCEPT_PAYMENTS)`.
You can do the same for "magic" numbers. If you use numbers which do not change during runtime, make sure that you turn those into constants, as much as possible.

### 8. Create a Gruntfile
Not necessarily a direct improvement for your code, but it allows you to pack your modules with ease, thus saving you time which you can then spend on improving your modules instead.

Here's an example of a Gruntfile:

{% gist firstred/1f6a589625ac65b2d10e07628587e9fb %}

### 9. Use the validator
This is a very simple one. You can use the validator at [https://validator.prestashop.com/](https://validator.prestashop.com/). It will show you if your module could use some improvements.
It doesn't cover all cases and might miss some problems you might have in your module, but it will give you a basic understanding of the improvements you will need. Not everything is equally important. Focusing on security has (of course) a higher priority than having enough spaces before a single opening bracket. Use your best judgement!

### 10. Go for automated testing
A human can only test so much. If you have a lot of repeating tasks that can be easily handled by a continuous integration server such as Jenkins, use it!
It's not going to be covered in detail in this blog post, but here are a few steps to get started with automatically testing PrestaShop modules:

   - Install Jenkins
   - Configure it in such a way that it
       - clones PrestaShop's repository
       - clones your module into the `modules` directory
       - [automatically](http://doc.prestashop.com/display/PS16/Installing+PrestaShop+using+the+command-line+script) installs PrestaShop
       - uses a testing framework such as [Codeception](http://codeception.com/) in order to unit, functional and acceptance test your module
       - is used together with Selenium in order to see the actual steps

By beginning with a simple acceptance test that installs your module, you will immediately get feedback on the installation process of your module and bugs in that area will be visible immediately.
Another advantage of using a continuous integration server is that you can define massive build matrices that will allow you to test on e.g. PHP 5.5, 5.6 & 7.0 + PrestaShop 1.5.0.17 - 1.6.1.6 simultaneously.
No more need to manually test the installation process on all these versions. You can now spend this time on further improving your module instead.

Did these tips help you create module faster? Do you still have some questions? Was there a step too hard? Let us know in the comments!

<div class="alert alert-note" role="alert">
<h4><i class='icon-file'></i> Note</h4>
This article is a contribution from a member of the PrestaShop community, and not a PrestaShop employee. If you too want to help the community by sharing tips and advice on the Build devblog, <a href="http://build.prestashop.com/about/#contribute">read this</a>!
</div>
