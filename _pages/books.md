---
layout: archive
author_profile: true 
permalink: /book 
title: "My Reviews on Some Books That I Found Interesting"
---

{% include base_path %}

I am an ardent bibliophile, never the one to not buy a book from a book store
(notwithstanding the number of unread books in my library back home). 
Science fiction, history, 
philosophy and economics are some of my favourite genres. 

Reviewed below are some books that have influenced my thinking in one way or 
another. I do plan on expanding this space in the future.

<div class="grid__wrapper">
  {% for post in site.books %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>




