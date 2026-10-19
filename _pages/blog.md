---
layout: world
author_profile: true 
permalink: /designlog 
title: "Design Log"
---

{% include base_path %}

<!--<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts }}</h3>-->
<div class="page-head">
  <h1>Writing</h1>
  <p>Musings on design, technology and life.</p>
</div>
<!-- {% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %} 

{% include paginator.html %} -->

<div class="tabs" data-tabs role="group" aria-label="Filter posts by topic">
  <button type="button" data-topic="all" aria-pressed="true">All</button>
  <button type="button" data-topic="ai">AI and data</button>
  <button type="button" data-topic="dev">Dev notes</button>
  <button type="button" data-topic="life">Field notes and life</button>
</div>
<p class="mono" data-tab-status aria-live="polite"></p>

<ul class="posts" data-tab-list>
  {% for post in site.posts %}
    {% assign topic = "life" %}
    {% if post.url contains "llm" or post.url contains "language-models" %}{% assign topic = "ai" %}{% endif %}
    {% if post.url contains "homebrew" or post.url contains "ssl-cert" or post.url contains "gcp" %}{% assign topic = "dev" %}{% endif %}
    <li data-topic="{{ topic }}">
      <div class="posts__meta"><span>{{ post.date | date: "%Y-%m-%d" }}</span></div>
      <h2 class="posts__title"><a href="{{ base_path }}{{ post.url }}">{{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}</a></h2>
      {% if post.excerpt %}<p class="posts__excerpt">{{ post.excerpt | markdownify | strip_html | truncate: 160 }}</p>{% endif %}
    </li>
  {% endfor %}
</ul>

