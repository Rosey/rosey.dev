---
title: "Git workflow hacks: Comparing to upstream branch"
date: "2019-04-14"
template: "post"
draft: false
slug: "/posts/git-worklow-compare-to-upstream/"
category: "Code"
tags:
  - "Git"
---

Small git alias that has made my life so much better: The ability to compare my local branch to its upstream equivalent.

In your `.gitconfig`’s `[alias]` section:

```bash
[alias]
  du = "diff @{upstream}"
```

And then you can type in

```bash
git du
```

or even better

```bash
g du
```
if you have `g` aliased to `git`

#### But Rose I am a bit of a git newbie and I have no idea what any of those words mean

OK no fears. Let’s say you have a repo on github. When you work locally you clone that repo. The github one is saved as a `remote` which can have a name (since you can define multiple remotes.) When you use `git clone` the remote that you cloned from is by default named `origin`.

Individual branches that you name can be set to track an upstream branch, which means that when you use things like `git push` and `git pull` git will know that your local `master` needs to pull from `origin/master`

If you type in `git diff origin/master` when you have `master` checked out locally, you can see the difference between your local master and the master on origin.

But having to type out `origin/branch_name_here` every time is a bit tedius, hence the alias `du`

Don’t know what aliases are? You totally should, because they are awesome. [Here is a howto on git aliases](https://githowto.com/aliases).
