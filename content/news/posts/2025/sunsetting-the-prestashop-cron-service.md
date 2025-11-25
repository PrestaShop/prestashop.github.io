---
layout: post
title: "Sunsetting the PrestaShop cron service"
subtitle: "The legacy service will be retired after 8 years of inactivity"
date: 2025-11-25
authors: [ PrestaShop ]
icon: icon-leaf
opengraph_image: /assets/images/theme/banner-ps-project.png
twitter_image: /assets/images/theme/banner-ps-project.png
---

The **PrestaShop cron service** will be officially shut down in **December 2025**, marking the end of a legacy component that once helped stores without full server access automate scheduled tasks.

## What is the PrestaShop cron service?

This service was originally introduced to assist merchants on shared hosting environments that did not allow setting up native cron jobs. It worked together with the [**cronjobs**](https://github.com/PrestaShopCorp/cronjobs) module, sending periodic requests to execute scheduled actions such as currency rate updates or module maintenance routines.

However, the **cronjobs** module has not been maintained for more than eight years and was only compatible with PrestaShop 1.6. Despite its age, the service continued to run for historical and compatibility reasons.

## Why is it being retired?

Usage has declined dramatically over the years:

- Around **6,500 stores** still call the service
- Only **400 stores** successfully executed tasks in 2025
- Just **100 stores** remain active in the last months

Following earlier deprecation notices, the service is now entering its final months of operation.

## What will happen after the shutdown?

Once the service is retired, it will return an **HTTP 200** response for compatibility, but **no scheduled tasks will be executed**. This ensures stores still using the old cronjobs module do not encounter fatal errors, while making it clear that scheduled actions will no longer run.

## What should store owners do?

If your store still relies on the PrestaShop cron service, now is the time to set up a **native cron job** directly in your hosting environment. Most modern hosting providers support cron natively, offering full control over task frequency and execution reliability.

For example, currency exchange updates or automated maintenance tasks can be triggered through standard cron entries or external task schedulers.

## Looking ahead

This change helps simplify the project and remove components that are no longer maintained or widely used. If you depend on scheduled tasks, ensure your store is using standard cron jobs going forward.

