---
layout: page
title:  ".htaccess generator"
subtitle: "Add another security layer to your backoffice"
date:   2015-04-03 11:12:00
author: julienbourdeau
icon: fa-lock
---

Even if your backoffice is already secured by PrestaShop's login, you might want to add another
layer of security with your Apache webserver. After you're done you'll be prompt a username and password
before you access your backoffice.

1. Find out what's your website root path.
1. Generate your htaccess file
1. Rename it from `htaccess.txt` to `.htaccess`
1. Generate your htpasswd file
1. Rename it from `htpasswd.txt` to `.htpasswd`
1. Drop both files in your admin folder through FTP.


### Generate htaccess file

<div class="form-group">
  <label for="admin_abs_path">Admin directory absolute path</label>
  <input type="text" name="admin_abs_path" class="form-control" id="admin_abs_path" placeholder="/homez.106/myname/www/admin4152">
</div>

<a id="generate-htaccess" class="btn btn-lg btn-info">Download your custom .htaccess file</a>


### Generate htpasswd file

<div class="form-group">
  <label for="username">Username</label>
  <input type="text" name="username" name="username" class="form-control" id="username" placeholder="yourname">
</div>

<div class="form-group">
  <label for="password">Password</label>
  <input type="text" name="password" class="form-control" id="password">
</div>

<a id="generate-htpasswd" class="btn btn-lg btn-info">Download your custom .htpasswd file</a>
