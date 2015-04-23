---
layout: post
title:  "PrestaShop Core Weekly - Week 16"
subtitle: "An inside look at PrestaShop's codebase"
date:   2015-04-22 16:12:00
author: xavierborderie
icon: fa-calendar
tags:
 - core-weekly
---

Core Weekly, expectedly back again for Week 16 of 2015!

This edition of the Core Weekly report highlights changes in PrestaShop core codebase last week, from Monday 13th to Sunday 19th of April, 2015.

The Core Weekly report is ever evolving, so if you have ideas on how to improve it, let me know!

## Milestones

The PSR-2 survey is still running, [give us your opinion](https://www.prestashop.com/forums/topic/434831-psr2-development-norm-for-prestashop/)!

Julien, one of PrestaShop's Core developers, wrote an article about [the best `.gitignore` file for PrestaShop projects](http://build.prestashop.com/howtos/misc/prestashop-perfect-gitignore/). If you use Git to version your files, you should definitely read it!

Slow week on the development front, as the Core team spent the first three days of the week in a training session, and thus had little time to both code and accept pull requests.
But I'm telling you, next week will bring a whole lot of merges!

That being said, of note among the merged PRs last week:

 * In PR 2886, gskema added a new parameter in Tools::fileAttachment(), for when you don't want to grab the files content and hold it in memory (especially large files).
 * In PR 2888, ZiZuu-store made a fix to pass the Context in Link->getLanguageLink(), which makes it possible to use the Context into templates and more.


## Code changes

Let's review last week's merged pull-requests!

As always, click on the PR's number to open its page on GitHub.

 
#### Front office

 * [2884](https://github.com/PrestaShop/PrestaShop/pull/2884): Bad rule in product.css, by gRoussac.
 
#### Back office

 * [2875](https://github.com/PrestaShop/PrestaShop/pull/2875): Updated forums link. Thank you unlocomqx!
 * [2881](https://github.com/PrestaShop/PrestaShop/pull/2881): Wrong 'back to product' button link. Thank you Shagshag!
 
#### Core

 * [2872](https://github.com/PrestaShop/PrestaShop/pull/2872): Fix a few bugs in lazy cache, by jocel1.
 * [2886](https://github.com/PrestaShop/PrestaShop/pull/2886): New parameter for Tools::fileAttachment. Thank you gskema!
 * [2888](https://github.com/PrestaShop/PrestaShop/pull/2888): actually use passed Context in Link->getLanguageLink(). Thank you ZiZuu-store!
 

See all the PRs merged into the codebase since April 13th [here](https://github.com/PrestaShop/PrestaShop/pulls?page=2&pulls_only=true&q=is%3Apr+merged%3A%3E2015-04-13+is%3Aclosed+sort%3Aupdated&utf8=%E2%9C%93).

Thank you to our contributors for their PRs: [gskema](https://github.com/gskema), [unlocomqx](https://github.com/unlocomqx), [Shagshag](https://github.com/Shagshag), [ZiZuu-store](https://github.com/ZiZuu-store) and those whose contributions haven't been merged yet! Also, a big thanks to all those who contribute with tickets on the Forge!

Remember: if you want to contribute to PrestaShop with code, read those:

 * [Contributing code to PrestaShop](http://doc.prestashop.com/display/PS16/Contributing+code+to+PrestaShop)
 * [How to write a commit message](http://doc.prestashop.com/display/PS16/How+to+write+a+commit+message)

...and if you do not know how to fix an issue but wish to report it, read this: [How to use the Forge to contribute to PrestaShop](http://doc.prestashop.com/display/PS16/How+to+use+the+Forge+to+contribute+to+PrestaShop). Thank you!

Until the next Core Weekly report, let me know if I forgot something here, or if you have ideas about how to improve this report!

Happy contributin' everyone!
