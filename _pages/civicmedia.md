---
layout: archive
title: "Civic Media"
permalink: civicmedia/
author_profile: true
---
{% include base_path %}


*While serving as the Country Lead of Code for Sierra Leone, I built citizen engagement tools
that aimed to empowered civic society by providing platforms for people to
report civic issues to their elected representatives*

<!-- <figure class="half">
  <a href="/healthcare" target="_blank">
    <img src="/images/koldokta.png">
  </a>
   <a href="/healthcare" target="_blank">
    <img src="/images/teamimage2.jpg">
   </a>
</figure>  -->

<div class="grid__wrapper">
  {% for post in site.civicmedia %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
