---
title: "Ensuring your font stack is optimized for emoji use"
date: "2019-06-02"
template: "post"
draft: false
slug: "/posts/emoji-font-stack/"
category: "Code"
description: ""
tags:
  - "Emoji"
---

If you use emoji on your website and expect people’s computers to render them using whatever native emoji support they have (eg you don’t use any JS polyfill like [Twitter’s](https://github.com/twitter/twemoji), nor a custom font like [Google’s](https://www.google.com/get/noto/help/emoji/)) you’ll want to make sure your font stack is optimized for emoji use.

This is probably a well known fact to many people but I honestly had no clue until recently (ugh I hate admitting my ignorance but it’s probably good for me to do so 😅) when one of my coworkers on Ubuntu complained about it. (Because on mac, of course, this just magically works, even if you don’t specify "Apple Color Emoji" in your stack.)

```css
font-family: "Your usual fonts here", "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji";
```


- `Apple Color Emoji` - Apple emoji, (duh)
- `Segoe UI Emoji ` - Windows emoji
- `Noto Color Emoji` - Google emoji. Used by Google devices and some versions of linux.

Font stacks work so that if a certain character isn’t supported by the first font listed (or if the font listed cannot be found), then it will fall back down the stack until it finds a font that _does_ support the character. So in this case, if you list your main fonts first, they can handle all standard letters, and the emoji fallback fonts can handle all the characters that represent emoji.  [CSS Tricks](https://css-tricks.com/css-basics-fallback-font-stacks-robust-web-typography/) has a nice article on fallback fonts (of course!)
