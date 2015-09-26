---
layout: post
title:  "PrestaShop 1.6.1.0: a new level of performances"
subtitle: "Where version 1.6.1.0's performances shine"
date:   2015-06-22 18:29:47
author: jocelynfournier
icon: icon-row-setting
tags:
 - core-weekly
---

A lot of things have been improved on PrestaShop 1.6.1.0:

* Design.
* Invoices.
* Search.
* Performance.

We have done a lot of work to improve the overall performances of PrestaShop, and reached in some cases a whooping **10x improvement**.

Let’s now dig into the optimizations we have put in place, and do some benchmarks.

_Note: This article was first published by Jocelyn on his blog at Softizy. [Read the original here](https://www.softizy.com/blog/prestashop-1-6-1-0-performances/)._

## Which parts of PrestaShop are faster?

### Faster single-threaded performances

Thanks to our internal tools (to be publicly released soon!), we quickly identified the bottlenecks of PrestaShop which were directly impacting the generation time of some pages, and hence the SEO and user satisfaction.

At the PHP level, with the cache deactivated and after launching a crawl on a real shop, we collected all the data we needed in a few minutes:

![PHP bottleneck](/assets/images/2015/06/perfs/php_bottleneck.jpg)

Same at the SQL level:

![SQL bottleneck](/assets/images/2015/06/perfs/bottleneck.jpg)

Thanks to these findings, we have rewritten a large amount of SQL queries to improve their efficiency, and we improved the PHP core to remove the detected bottlenecks.

### Faster multi-threaded performances

Beside the huge work on the query performances, we have worked a lot on the SQL queries to make sure the MySQL query cache is used efficiently. We also fixed a few nasty issues in the PrestaShop cache. Actually, most of the time the use of the PrestaShop cache was decreasing the performance. This is no longer the case!


### Specific optimizations for multi-front / cloud environment

PrestaShop is using Smarty to handle the templates. If you are using several front servers, the out of the box Smarty implementation forces you to centralize its cache on a shared filesystem (NFS).

To remove this limitation, we added a custom Smarty module which makes it work perfectly with a local Smarty cache (no more NFS needed!). Moreover, our implementation sped up a lot the cases where the cache had to be invalidated: instead of flushing all the files at once, each template is flushed asynchronously.

This quickened a lot all the back office operations!

### Better back office performances

We removed the most frustrating bottleneck in the PrestaShop back office:

* **Faster imports**: We worked hard to improve the import speed. The more you import products, the more you’ll see the speed up!
* **Better search indexing**: We improved both the memory usage and the search indexing speed.
* **No more issue with huge cart rules or categories**: Cart rules and categories are now loaded asynchronously.

## Let’s bench!

### The configuration

To do this benchmark, we chose to use a dedicated Mini HG server from OVH, which offers high performances for a fairly decent price:

* CPU: Intel(R) Xeon(R) CPU E5-2650 v2 @ 2.60GHz (8 cores, 16 threads)
* Memory: 64 GB
* Disk: 2x SSD 600 GB
* RAID Controller: LSI MegaRAID SAS 9271-4i CacheVault 1G FastPath

We used a [Debian Jessie](https://www.debian.org/releases/stable/), with the standard packages, and a properly optimized configuration:

* Apache 2.4.10, with [mpm_event](http://httpd.apache.org/docs/2.4/mod/event.html) and the following configuration:

<pre>ServerLimit             16
MaxClients              400
StartServers            3
ThreadLimit             64
ThreadsPerChild         25
MaxRequestWorkers       400
MaxConnectionsPerChild  0</pre>

* PHP 5.6.7 and [APCu](https://pecl.php.net/package/APCu) + [Zend OpCache](https://pecl.php.net/package/ZendOpcache) v7.0.4-dev in [PHP-FPM](http://php-fpm.org/) mode with the following configuration:

<pre>pm                    = dynamic
pm.max_children       = 400
pm.start_servers      = 75
pm.min_spare_servers  = 50
pm.max_spare_servers  = 100</pre>

* MariaDB 10.0.0.19, with the following configuration:

<pre>performance_schema                    = OFF
innodb_lock_wait_timeout              = 120
default_storage_engine                = InnoDB
max_allowed_packet                    = 16M
key_buffer_size                       = 128M
table_cache                           = 4096
read_buffer_size                      = 2M
read_rnd_buffer_size                  = 1M
thread_cache_size                     = 80
join_buffer_size                      = 2M
sort_buffer_size                      = 2M
max_connections                       = 400
tmp_table_size                        = 32M
max_heap_table_size                   = 32M
table_definition_cache                = 8192
query_cache_size                      = 32M
innodb_buffer_pool_size               = 3G
innodb_log_file_size                  = 128M
innodb_log_files_in_group             = 2
innodb_log_buffer_size                = 8M
innodb_flush_log_at_trx_commit        = 2
innodb_thread_concurrency             = 32
innodb_read_io_threads                = 8
innodb_write_io_threads               = 8
innodb_flush_method                   = O_DIRECT
innodb_file_per_table                 = 1
innodb_io_capacity                    = 2000
innodb_file_format                    = Barracuda
innodb_buffer_pool_dump_at_shutdown   = ON
innodb_buffer_pool_load_at_startup    = ON
innodb_checksum_algorithm             = crc32
innodb_log_compressed_pages           = 0
# SSD
innodb_flush_neighbors                = 0
# Mutex contention
innodb_adaptive_hash_index_partitions = 16
innodb_buffer_pool_instances          = 16</pre>

We tested a real shop with:

* 1,827 categories
* 10,843 cart rules
* 1,904 products
* 2M product attributes
* 16.5M attribute combinations

When Memcached is used, it’s configured locally, with 128 MB of memory.

The single-threaded and multi-threaded benchmarks results are the average of 5 “[siege](https://www.joedog.org/siege-home/) -i -b -t 20S” (20s benchmark), on representative pages which have a direct impact on user navigation and SEO:

* Category pages
* Product pages
* Home pages
* Cart pages
* Best sales pages
* Tag search pages
* Manufacturer pages
* New product pages
* Price drop pages
* Supplier pages
* Search pages

### The results

#### Front performances

First, the single-threaded performances:

![Prestashop 1.6.1.0: single-threaded performances](/assets/images/2015/06/perfs/single-threaded-performances2.jpg)

It looks promising: up to **10x improvement** when Memcached is On!

Let’s take a look at how the new 1.6.1.0 scales:

![Prestashop 1.6.1.0 : Multi-threaded performances with Query Cache and Memcached disabled](/assets/images/2015/06/perfs/multi-threaded-performances1.jpg)

Even without any cache, 1.6.1.0 scales much better than 1.6.0.14, and is **up to 65% faster with 15 concurrent connections**.

![Prestashop 1.6.1.0: Multi-threaded performances with Query Cache enabled and Memcached disabled](/assets/images/2015/06/perfs/multi-threaded-performances-qc-on-memcached-off1.png)

If we enable the query cache, the 1.6.1.0 is still **up to 50% faster with 10 concurrent connections**.

![CC0 Logo](/assets/images/2015/06/perfs/multi-threaded-performances-qc-on-memcached-on3.png)

Well, we definitely fixed the PrestaShop cache issue. We reach almost a **10x improvement with 10 concurrent connections**!

Here are the performances side by side, at 10 concurrent connections:

![CC0 Logo](/assets/images/2015/06/perfs/multi-threaded-performances1.jpg)


#### Back office performances

Here are a few results from the back office.

**Full search reindexing:**

![CC0 Logo](/assets/images/2015/06/perfs/search-index-time3.png)

On the performance side, when Memcached is enabled, 1.6.0.14 times out after 900s, and eats more than 128 MB of memory. When Memcached is disabled, **1.6.1.0 is 2.3x faster than 1.6.0.14, eats 1.7x less memory**, and fixes a bug with multi attributes. Not bad!

**Import speed:**

![CC0 Logo](/assets/images/2015/06/perfs/import-time1.png)

Although those results were not computed on the same machine, I decided to include them as well to show you the potential speed you could expect with the import in 1.6.1.0 (here **almost a 5x speed up**).



Now let’s measure the time to load some back office pages.

**Product edit:**

![CC0 Logo](/assets/images/2015/06/perfs/edit-product3.png)

In our case, with 1,827 categories, **1.6.1.0 is 1.7x faster**.

**Cart rules:**

![CC0 Logo](/assets/images/2015/06/perfs/edit-cart-rules1.png)

With 10843 cart rules, once again **1.6.1.0 is 1.7x faster**.

## Conclusion

1.6.1.0 is a major release in terms of performances, with up to 10x speed up in some cases.

To achieve those results we have worked really closely with the PrestaShop team, modifying about 6600 lines of code in a few months. We hope you’ll be happy with this version, and don’t hesitate to report any performance issues on [the Forge](http://forge.prestashop.com)!

Final note: Whereas in 1.6.0.14 we recommended to not enable the PrestaShop cache, in 1.6.1.0 we recommend you to enable it, with a local Memcached server (APC should be OK as well).
