---
layout: archive
title: "Civic Media"
permalink: civicmedia/
author_profile: true
share: true 
excerpt: "An illustration that explores the complexity inherent in how an individual understands themselves."
header:
  teaser: IdentityTeaserShot.jpg
---
{% include base_path %}


*Built citizen engagement tools that empower the civic society 
to  track the performance of parliamentarians and for 
reporting civic issues to their representatives*

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