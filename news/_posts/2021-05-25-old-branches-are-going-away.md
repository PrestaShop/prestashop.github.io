---
layout: post
title:  "Heads up: old development branches are going away"
subtitle: "We are cleaning up old branches from our repository"
date:   2021-05-25
authors:  [ PrestaShop ]
icon: icon-branch
tags:
- news
- development
---

The month of June is fast approaching, so it's time for a late Spring clean!

On June 1st, 2021 we will delete all branches from our [main repository](https://github.com/PrestaShop/PrestaShop/) that are no longer subject to new releases.

The affected branches are:

- 1.7.0.x
- 1.7.1.x
- 1.7.2.x
- 1.7.3.x
- 1.7.4.x
- 1.7.5.x
- 1.7.6.x

Future branches will be deleted as well once they will become stale (e.g. 1.7.7.x will be deleted shortly after 1.7.8 is out).

**Important note:** Please be aware that this is a routine cleanup and has absolutely no impact on source code availability for previous versions.

You can always retrieve any older version of PrestaShop using git tags, just like before:

```
git clone https://github.com/PrestaShop/PrestaShop.git --branch 1.7.5.2
```

We are providing this heads up because it has come to our attention that some people are relying on development branches for their deployment scripts. **Don't do that!** Branches are for development only. Use tags for automation.
