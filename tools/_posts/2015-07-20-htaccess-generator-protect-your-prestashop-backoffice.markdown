---
layout: page
title:  ".htaccess generator"
subtitle: "Add another security layer to your back office"
date:   2015-04-03 11:12:00
author: julienbourdeau
icon: fa-lock
---

Even if your back office is already secured by PrestaShop's login, you might want to add another layer of security from your webserver itself. This is done using the `htaccess.txt` and `htpasswd.txt` files. After you've uploaded them  at the root of the folder to secure (in our case, your back office folder), the server will ask you for a username and a password before you can even access your PrestaShop back office login page.

1. Find out what's your website root path. Ask your host if necessary.
1. Generate your htaccess file with the tool on this page.
1. Rename it from `htaccess.txt` to `.htaccess`.
1. Generate your htpasswd file with the tool on this page.
1. Rename it from `htpasswd.txt` to `.htpasswd`.
1. Upload both files at the root of your back office's folder through your FTP software.


### Generate htaccess file

<div class="form-group">
  <label for="admin_abs_path">Absolute path of your back office folder </label>
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
