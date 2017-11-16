---
layout: archive
title: "Financial Inclusion"
permalink: fin/
author_profile: true
---
{% include base_path %}


*Designed feature phone applications that provided financial services to
unbanked individuals, and conducted research to understand financial behaviour
of the end users in West Africa*

<!-- <figure class="half">
  <a href="/healthcare" target="_blank"> 
    <img src="/images/koldokta.png">
  </a>
   <a href="/healthcare" target="_blank">
    <img src="/images/teamimage2.jpg">
   </a>
</figure>  -->

<div class="grid__wrapper">
  {% for post in site.fin %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>