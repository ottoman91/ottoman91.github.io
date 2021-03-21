---
layout: archive
author_profile: true
permalink: /book
title: "Book Reviews"
---

{% include base_path %}

<p><i>Random musings, some more coherent than others, on books that I have read.
</i></p>
<div class="grid__wrapper">
  {% for post in site.books %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>




