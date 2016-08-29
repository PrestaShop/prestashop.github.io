---
layout: post
title:  "Recommended for testing: PrestaShop 1.7.0.0 RC0"
subtitle: "Now's the time to roll up your sleeves, community!"
date:   2016-08-29 09:10:11
author: xavierborderie
icon: icon-leaf
tags:
 - 1.7
 - 1.7.0.0
 - version
 - rc
 - releases
 - development
---

Have you been waiting for a "stable enough" version of PrestaShop 1.7 in order to start truly testing this new major release? Well, consider yourself in luck, because today we are releasing the RC0 of PrestaShop -- not quite a first RC, but close enough for you to start testing and provide us with the necessary feedback to make 1.7 a good fit for your needs!

![PrestaShop 1.7 Alpha 3 Release](/assets/images/2016/04/Badge1.7-Color.png)

We know how the Open Source community at large works with new major versions: pay attention only once 1.0.0 is released, and wait for 1.0.1 for production use -- because, obviously, it fixes the most important issues.
When a major versions is being developed, a few dedicated users do their best to report issue and provide fixes and improvements to be merged by the Core developers as time and (wo)manpower allows. Those users are a tremendous help, and what any Core team needs is for more professional users to give their feedback according to their own needs, BEFORE the 1.0.0 release.
All Open Source project have to live through this.

And this goes double for the PrestaShop community, indeed: while we have published 2 public alpha versions and 3 beta versions of PrestaShop 1.7.0.0, we received less and less feedback over time. Beta 3 saw a trickle of comments. At this point, a fourth beta seems pointless: we need to kickstart the RC phase. We need more people to get involved in testing 1.7.0.0 before it gets the stabel label.

We have therefore decided to release RC0. Now is the time to work with us towards a stable version. Thank you for contributing, with tests, feedback, patches and translations!

[Test PrestaShop 1.7.0.0 RC0 now!](https://www.prestashop.com/en/developers-versions ){: .btn .btn-lg .btn-success}
{: .text-center}


* TOC
{:toc}

 
## Why an RC0 and not an RC1?

Let's be transparent here: as the intro to this post shows, the community (you, dear reader!) has given us less and less feedback to work with. This can only mean that development of 1.7.0.0 is nearly perfect and ready for production, right? Or could it be that the community has exhausted all its feedback power? :)

In either case, we need to give a signal that a release is coming soon, and this RC0 (that you can see as a pre-RC1, obviously) is that signal. If you want to test the new front office, to browse the new pages of the back office, to write a module (or to update a module for 1.7) or to create a brand new theme, well, there’s no better time than now :)


## What needs to be tested by you?

First and foremost, we need to think in practical terms. The Core of the software can (and will!) receive updates, through versions 1.7.0.1, 1.7.0.2, etc., in due time. When they are released depends on the urgency of the fixes and improvements. Whole sections of the Core can be changed as needed.

One thing that cannot be revamped is the new theme system -- meaning the default theme, "Classic", AND the Started Theme, upon which Classic is written. 
The reason is simple: theme designers and developers will start creating themes based on Classic and the Starter Theme. Hence, once Classic and the Starter Theme are released into the wild, there’s little we will be free to change without breaking things for developers. 
We need to make sure both themes serve their purpose well, and this can only happen if you try your hand at creating a theme. 
[Read the Designer documentation](https://github.com/PrestaShop/docs) (which you can also help improve!), and tell us where we can improve things!

Likewise, as a developer, if your usual hooks are missing, or if you feel the Modules system lacks something essential, let us know! Again, [read the documentation](https://github.com/PrestaShop/docs) (and [the Build article](http://build.prestashop.com/news/module-development-changes-in-17/)) and give us your feedback!

And, of course, let us know of any broken behavior or regression, especially in the pages that were completely rewritten: the Product page, and the Modules page.

 
## What's new in RC0?

Beta 3 was released [on August 1st](http://build.prestashop.com/news/prestashop-1-7-beta-3/). Since then, [the 'develop' branch of our GitHub repository](https://github.com/PrestaShop/PrestaShop/tree/develop), which hosts the development code for PrestaShop 1.7.0.0, has seen a flurry of fixes and improvements, as well a handful of new features.

The main points are:

 * The default theme now sports a responsive header.
 * The front office has also seen an improvement of its product layout.
 * The back office's product page now fits neatly in small screens (13 inches).
 * A new Client API has been introduced into Core, for use by modules and themes.
 * All old 1.6 modules have been removed. This version now only has modules updated for 1.7.
 * All modules actions now use the POST method.

See at the bottom of this article for the full list.


## What's not in RC0?

Again, for the sake of transparency, here’s what we still intend to implement after RC0 and before we go stable:

* Catalog mode.
* Front office B2B features.
* Back office translation update.
* Mobile-ready front office.


## So, what's next?

We’re still hard at work on version 1.7.0.0, making sure it is a great release for the community.

As you might expect, there will be a RC1, and possibly other RC versions until PrestaShop 1.7.0.0 is deemed stable enough for you -- and YOU can voice your opinion!

[Use the Forge](http://forge.prestashop.com/secure/CreateIssue%21default.jspa?selectedProjectId=11322&issuetype=1) to tell us what is blocking you, or possibly broken.
[Use GitHub](https://github.com/PrestaShop/PrestaShop/pulls) to fix the issues you have noticed.
Use the comments on this post to congratulate everyone ;)

Please note that we are not looking for feedback on the overall technical or design aspects: Symfony 2, the new theming system, the back office design and other global aspects of 1.7 (such as the UX decisions on the Product page and the Modules page) are pretty much set in stone. 
However, do let us know about bugs or possible improvements to all the above aspects!


## Thank you to our contributors!

As usual, several key changes in RC0 were provided by contributors just like you! So a big "Thank you!" to those: @firstred, @martinfojtik, @makoso, @antho-girard, and @prestamodule!

We also want to acknowledge all those who submitted Forge tickets during the whole development of 1.7! They are too many to list, so we'll stick to those who wrote at least two Forge tickets: Adrian Nethercott, Arifur Rahman, Conny2500, Diego Sevillano de Miguel, El Patron, Guillaume Astier, Jonathan Danse, Kamruzzaman Kamrul, Krystian Podemski, Luigi Massa, Mads Oliver Jenssen, Markus Hitter, Martin Fojtík, Michael Dekker, Piotr Żurek, PremiumPresta, Shokinro, Steerfox DevTeam, Tod Roman, and Tomáš Bedřich. Thank you all! Keep ‘em coming :)

This release was spearheaded by the team working for the PrestaShop company: cheers to @alexeven, @fatmaBouchekoua, @ishcherbakov, @jocel1 @julienbourdeau, @maximebiloe, @mickaelandrieu, @nihco2, @paeddl, @quetzacoalt91, @shudrum, and @thierrymarianne!


## Full list of changes between Beta 3 and RC0

Want to know it all? Here goes:

 - Back Office:
   - Improvement:
     - [5984](https://github.com/PrestaShop/PrestaShop/pull/5984): Improved specific prices form
     - [6013](https://github.com/PrestaShop/PrestaShop/pull/6013): Catalog / Product page (modules) & Module page integration
     - [6009](https://github.com/PrestaShop/PrestaShop/pull/6009): Fix some wording and typos
     - [5937](https://github.com/PrestaShop/PrestaShop/pull/5937): Adapt product page for 13 inches screens
     - [5881](https://github.com/PrestaShop/PrestaShop/pull/5881): Improved design on module page
     - [5948](https://github.com/PrestaShop/PrestaShop/pull/5948): Completed webpack build for new theme
     - [5940](https://github.com/PrestaShop/PrestaShop/pull/5940): Add translation domains to controllers - 4
     - [5913](https://github.com/PrestaShop/PrestaShop/pull/5913): Add modal for Addons logout on module page
     - [5923](https://github.com/PrestaShop/PrestaShop/pull/5923): Switch error messages to new translation system
     - [5933](https://github.com/PrestaShop/PrestaShop/pull/5933): Add translation domains to controllers - 3
     - [5903](https://github.com/PrestaShop/PrestaShop/pull/5903): Old product tpls are not needed anymore
     - [5911](https://github.com/PrestaShop/PrestaShop/pull/5911): Do not display new products in the BO listing until they are saved
   - Bug fix:
     - [6010](https://github.com/PrestaShop/PrestaShop/pull/6010): Fixed store selection on product creation
     - [6006](https://github.com/PrestaShop/PrestaShop/pull/6006): Improved product type selector
     - [6000](https://github.com/PrestaShop/PrestaShop/pull/6000): Fix recommended modules popup on old theme
     - [6001](https://github.com/PrestaShop/PrestaShop/pull/6001): Refresh the combination list on specific rule form
     - [5974](https://github.com/PrestaShop/PrestaShop/pull/5974): Apply reset actions on specific prices form
     - [5977](https://github.com/PrestaShop/PrestaShop/pull/5977): Remove getCurrentUrtrans() typo (fix BOOM-1214).
     - [5951](https://github.com/PrestaShop/PrestaShop/pull/5951): Fixed popup when previewing on Product page
     - [5841](https://github.com/PrestaShop/PrestaShop/pull/5841): Update products.js to allow accessories having `|` in the name
     - [5941](https://github.com/PrestaShop/PrestaShop/pull/5941): Display 'install' on paid module when present on disk
     - [5932](https://github.com/PrestaShop/PrestaShop/pull/5932): Fixed page suppression in AdminMeta
     - [5926](https://github.com/PrestaShop/PrestaShop/pull/5926): Fixed order status bulk update
     - [5931](https://github.com/PrestaShop/PrestaShop/pull/5931): Replaced text input by select input for page name in Meta page
     - [5927](https://github.com/PrestaShop/PrestaShop/pull/5927): Avoid JS error outside of product page
     - [5928](https://github.com/PrestaShop/PrestaShop/pull/5928): Add constraint for forbidden characters in product name
     - [5919](https://github.com/PrestaShop/PrestaShop/pull/5919): Fill empty friendly URL on product save
     - [5902](https://github.com/PrestaShop/PrestaShop/pull/5902): Fix "Export to SQL Manager" buttons
     - [5920](https://github.com/PrestaShop/PrestaShop/pull/5920): Disable bulk action while combinations are loading
     - [5906](https://github.com/PrestaShop/PrestaShop/pull/5906): Fix access when adding attribute value

 - Front Office:
   - New feature:
     - [6022](https://github.com/PrestaShop/PrestaShop/pull/6022): Responsive header
   - Improvement:
     - [5894](https://github.com/PrestaShop/PrestaShop/pull/5894): New Hook after Login form
     - [5939](https://github.com/PrestaShop/PrestaShop/pull/5939): Improved product layout
     - [5947](https://github.com/PrestaShop/PrestaShop/pull/5947): Id for each link to make individual styles possible
     - [5945](https://github.com/PrestaShop/PrestaShop/pull/5945): Added Bigger border on summary
   - Bug fix:
     - [6007](https://github.com/PrestaShop/PrestaShop/pull/6007): Fix displaying products of the new product page when no product is new
     - [6017](https://github.com/PrestaShop/PrestaShop/pull/6017): Fix 404 errors for category
     - [5999](https://github.com/PrestaShop/PrestaShop/pull/5999): Display discounts by quantity table when applied to combination
     - [5959](https://github.com/PrestaShop/PrestaShop/pull/5959): Product images in front office are now filtered by combination
     - [5914](https://github.com/PrestaShop/PrestaShop/pull/5914): Render a 404 template if no products found
     - [5925](https://github.com/PrestaShop/PrestaShop/pull/5925): Fixed top menu layout
     - [5930](https://github.com/PrestaShop/PrestaShop/pull/5930): Display unit price according to tax config
     - [5897](https://github.com/PrestaShop/PrestaShop/pull/5897): Fixed multiples issues on Cart and product pages
     - [5921](https://github.com/PrestaShop/PrestaShop/pull/5921): Fix core.js and core.js.map
     - [5908](https://github.com/PrestaShop/PrestaShop/pull/5908): Fixed "print out" link display condition

 - Core:
   - Improvement:
     - [6027](https://github.com/PrestaShop/PrestaShop/pull/6027): Introduce trans method into Module class
     - [6015](https://github.com/PrestaShop/PrestaShop/pull/6015): Document Carrier class
     - [6016](https://github.com/PrestaShop/PrestaShop/pull/6016): Document Cart class
     - [6018](https://github.com/PrestaShop/PrestaShop/pull/6018): Replace parameters.yml with parameters.php
     - [5943](https://github.com/PrestaShop/PrestaShop/pull/5943): Changed visibility of installControllers() method
     - [5905](https://github.com/PrestaShop/PrestaShop/pull/5905): Introduced new Client API for addons
     - [5942](https://github.com/PrestaShop/PrestaShop/pull/5942): Refactored all routes to follow best practices
     - [5915](https://github.com/PrestaShop/PrestaShop/pull/5915): Move to new 1.7 modules and remove the old 1.6 ones
   - Bug fix:
     - [6012](https://github.com/PrestaShop/PrestaShop/pull/6012): Fix id_carrier check on module
     - [5972](https://github.com/PrestaShop/PrestaShop/pull/5972): A price fixed using a specific price rule shouldn’t be treated as a discount
     - [5971](https://github.com/PrestaShop/PrestaShop/pull/5971): When combination have no images, display all available for the product
     - [5946](https://github.com/PrestaShop/PrestaShop/pull/5946): Removed the dumped XML container (Security issue)
     - [5929](https://github.com/PrestaShop/PrestaShop/pull/5929): All modules actions use POST method
     - [5909](https://github.com/PrestaShop/PrestaShop/pull/5909): Upgrade an uploaded module when already installed


## Parting words

If you love PrestaShop and want 1.7 to be a success, contribute!

And you can start by sharing this post! :)
