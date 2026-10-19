---
layout: world
author_profile: true 
permalink: /project 
title: "Design Projects"
---

{% include base_path %}

<div class="page-head">
  <h1>Projects</h1>
  <p>A collection of projects related to design, user research and prototyping.</p>
</div>

<section class="section" aria-label="Project rooms">
  {% for post in site.projects %}
    <article class="room">
      <div class="room__head">
        <h3><a href="{{ base_path }}{{ post.url }}">{{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}</a></h3>
      </div>
      <div>
        {% if post.excerpt %}<p class="room__outcome">{{ post.excerpt | markdownify | strip_html | truncate: 200 }}</p>{% endif %}
        {% if post.stack %}<dl class="facts"><dt>stack</dt><dd>{{ post.stack }}</dd></dl>{% endif %}
        <details>
          <summary>Inside the room</summary>
          {% if post.sidebar %}{% for s in post.sidebar %}<p>{{ s.title }}: {{ s.text }}</p>{% endfor %}{% endif %}
          {% if post.header.teaser %}<a href="{{ base_path }}{{ post.url }}"><img class="room-thumb" src="{{ post.header.teaser | prepend: "/images/" | prepend: base_path }}" alt="" loading="lazy"></a>{% endif %}
          <p><a href="{{ base_path }}{{ post.url }}">Read the full project</a></p>
        </details>
      </div>
    </article>
  {% endfor %}
</section>
