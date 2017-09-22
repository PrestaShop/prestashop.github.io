---
layout: post
title:  "About the 1.7.2.2 performance improvement"
subtitle: ""
date:   2015-06-22 18:29:47
authors: [ jocelynfournier ]
icon: icon-row-setting
tags:
 - 1.6
 - 1.6.1.x
 - performance
---

A small line might have gone unnoticed in the [PrestaShop 1.7.2.2 release announcement](http://build.prestashop.com/news/prestashop-1-7-2-2-maintenance-release/): "1.7 front-end should now be faster than 1.6’s for popular stores". What does it apply to, and how did we test for such performances? Here's how.

With the release of PrestaShop 1.7.2.2, we have tried to remove a few point of contention which were affecting badly overall PrestaShop performance:

* Specific price computation
* Bad sale page pagination, which loaded too many products on one page

Let's check the specific price improvement! 


### Why improving `specificPrice()` is important for performance?

According to our internal software, `specificPrice()` computation was particularly slow, AND present across a lot of pages.

Basically our software crawls a website, profiles each page it finds, then generates a global report. `specificPrice()` was listed in the top 5 most resource and time consuming operation, overall.


### When can I expect improvements?

Each time a price is displayed, the `specificPrice()` method is called. The logic can be greatly optimized when there is no "global" specific price rule. A global rule means it applies to all your products. Luckily, global rules don't occur that often in a real shop. In this case:

* If no specific price at all exists for a given product, don't try to compute the `specificPrice()` (makes sense, doesn't it?)
* If a specific price exists for this product, the SQL query will be optimized and executed faster.

This also allows to improve the local `specificPrice()` cache, and greatly reduces the number of SQL queries associated with it.


### Let's benchmark this!

#### The configuration

To do this benchmark, we chose to use a dedicated Mini HG server from OVH, which offers high performances for a fairly decent price:

* CPU: Intel(R) Xeon(R) CPU E5-2650 v2 @ 2.60 GHz (8 cores, 16 threads)
* Memory: 64 GB
* Disk: 2x SSD 600 GB
* RAID Controller: LSI MegaRAID SAS 9271-4i CacheVault 1G FastPath

We used a Debian Wheezy, with the standard, dotdeb & sury.org packages, and a properly optimized configuration:

* Apache 2.4.23, with mpm_event and the following configuration:

  * ServerLimit             16
  * MaxClients              400
  * StartServers            3
  * ThreadLimit             64
  * ThreadsPerChild         25
  * MaxRequestWorkers       400
  * MaxConnectionsPerChild  0

* PHP 7.0.23 & APCu + Zend OpCache v7.0.23 PHP-FPM mode with the following configuration:

  * pm =                    dynamic
  * pm.max_children       = 400
  * pm.start_servers      = 75
  * pm.min_spare_servers  = 50
  * pm.max_spare_servers  = 100

* MariaDB 10.2.8, with the following configuration:

  * performance_schema                    = OFF
  * innodb_lock_wait_timeout              = 120
  * default_storage_engine                = InnoDB
  * max_allowed_packet                    = 16M
  * key_buffer_size                       = 128M
  * table_cache                           = 4096
  * read_buffer_size                      = 2M
  * read_rnd_buffer_size                  = 1M
  * thread_cache_size                     = 80
  * join_buffer_size                      = 2M
  * sort_buffer_size                      = 2M
  * max_connections                       = 400
  * tmp_table_size                        = 32M
  * max_heap_table_size                   = 32M
  * table_definition_cache                = 8192
  * query_cache_size                      = 32M
  * innodb_buffer_pool_size               = 3G
  * innodb_log_file_size                  = 128M
  * innodb_log_files_in_group             = 2
  * innodb_log_buffer_size                = 8M
  * innodb_flush_log_at_trx_commit        = 2
  * innodb_thread_concurrency             = 64
  * innodb_read_io_threads                = 8
  * innodb_write_io_threads               = 8
  * innodb_flush_method                   = O_DIRECT
  * innodb_file_per_table                 = 1
  * innodb_io_capacity                    = 2000
  * innodb_file_format                    = Barracuda
  * innodb_checksum_algorithm             = crc32
  * innodb_log_compressed_pages           = 0
  * \# SSD
  * innodb_flush_neighbors                = 0
  * \# Mutex contention
  * innodb_buffer_pool_instances          = 32

Memcached is used, configured locally, with 128 MB of memory.

We made a benchmark with **a real shop**, which features: 

* 1,904 products
* 1,827 categories
* 10,843 cart rules
* 2M product attributes
* 16.5M attribute combinations
* 57 specific prices

The benchmarks results are the average of 5 "`siege -i -b -t 20S`" (20 s benchmark), on representative pages which have a direct impact on user navigation and SEO:

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


#### The result

![Performance benchmark](/assets/images/2017/09/ps1722-performance.png)

With this shop with few specific prices in the database, the gain is interesting. Even at low concurrency, the improved local cache reduces the number of SQL queries, and allows 1.7 to have the same level of performances than 1.6.1.

At high concurrency, the gain is even higher because a signification point of contention on the database is removed.


### Conclusion

The 1.7.2.2 performance improvement is really interesting at high concurrency, and also lowers the number of SQL queries at low concurrency. However you'll see improvement only if you don't have any global specific price rules in your database, which should be the case most of the time.

To check if you have global specific price rules, just search in your database if you have any results with `id_product=0` in the `specific_price` table!

(this article was originally [published on Softizy](https://www.softizy.com/blog/prestashop-1-7-performance/), website of Jocelyn, the author of this performance improvement)
