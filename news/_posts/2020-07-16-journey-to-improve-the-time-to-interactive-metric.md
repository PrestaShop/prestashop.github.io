---
layout: post
title: "A journey to improve the Time To Interactive metric in Classic Theme"
subtitle: "When the lazy loading allow us to improve the LightHouse Score"
date: 2020-07-16 9:00:00
authors: [Progi1984]
image: /assets/images/theme/meta-logo-build.png
icon: icon-lab
tags:
- development
- ux
- theme
- 1.7.8
---

The project [Core Web Vitals](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html) from Google has announced that loading time and performance will have an impact on the website ranking in search results. In advices offered by Google, they talked about lazy loading. The lazy loading should be available on Classic Theme in version 1.7.8 thanks to [Progi1984](https://github.com/Progi1984) and it will definitely improve both the user experience and the loading time on your site!

## What is lazy loading ?

Lazy loading is a technique that defers loading of non-critical resources at page load time. Instead, these non-critical resources are loaded only when needed. For example, images which are at the bottom of the page are less critical than images at the top of the page and should consequently be loaded later.

This feature used to be provided by third party plugins or modules but is now supported natively in all modern browsers.

## How can I enable native lazy loading on my theme ?

Browsers use the `loading` attribute on the `<img>` tag to defer loading of images that are off-screen until the user scrolls near them. Consequently on all your `<img>` tags, you must set a `loading` attribute with value `lazy`. And it's done.

### What browsers support this feature ?

This information can be found on multiple sources, such as "[Can I Use](https://caniuse.com/#feat=loading-lazy-attr)".

![Lazy Loading Support](/assets/images/2020/07/lazy-loading-support.png)

In 2020, native lazy loading is enabled on 68% of used browsers. And if the feature is not active on the browser, images will be loaded as usual.

## PrestaShop Classic Theme performance analysis

At first, we considered using [Lighthouse](https://developers.google.com/web/tools/lighthouse) which is an open-source, automated tool for improving the quality of web pages. But after a few attempts, we encountered an [issue](https://github.com/GoogleChrome/lighthouse/issues/11071) in Lighthouse that prevented us to do so. It turns out the detection of lazy loading images are only performed in heavy pages ([min 5000px](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/frame/settings.json5;drc=e8f3cf0bbe085fee0d1b468e84395aad3ebb2cad;l=971-1003?originalUrl=https:%2F%2Fcs.chromium.org%2Fchromium%2Fsrc%2Fthird_party%2Fblink%2Frenderer%2Fcore%2Fframe%2Fsettings.json5)).

[Progi1984](https://github.com/Progi1984) choose the Google Chrome console and its Network tab for showing you the performances evolution before and after lazy loading usage.

My test is based the New Products page with 50 products (and so 50 images minimum) per page. 

I make the test on `develop` branch and the `lazyloading` branch.

In the first scenario, I work on the `develop` branch. 

I made two tests :  

- the first on desktop mode with no throlling

![Test without Lazy Loading on desktop mode with no throlling](/assets/images/2020/07/lazy-loading-test-before-desktop-no-throlling.png)

- the second on emulated device "iPad Pro" mode with Fast 3G throlling

![Test without Lazy Loading on emulated device "iPad Pro" mode with Fast 3G throlling](/assets/images/2020/07/lazy-loading-test-before-mobile-3G-throlling.png)

In the second scenario, I work on the `lazyloading` branch.

I made two tests :  

- the first on desktop mode with no throlling

![Test with Lazy Loading on desktop mode with no throlling](/assets/images/2020/07/lazy-loading-test-after-desktop-no-throlling.png)

- the second on emulated device "iPad Pro" mode with Fast 3G throlling

![Test with Lazy Loading on emulated device "iPad Pro" mode with Fast 3G throlling](/assets/images/2020/07/lazy-loading-test-after-mobile-3G-throlling.png)

You can see between 21% and 28% win with lazyloading  between our two tests.

Imagine the win for users who browse your websites every in the world, with different connections types.

## Conclusion

As a developer or theme provider, you should implement this feature considering the time it take to implement it and the win.
