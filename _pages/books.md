---
layout: archive
author_profile: true
permalink: /book
title: "Reading Notes"
---

{% include base_path %}

<p><i>Random musings, some more coherent than others, on books and papers that I have read.
</i></p>
<div class="grid__wrapper">
  {% for post in site.books %}
    {% include archive-single.html %}
  {% endfor %}
</div>




