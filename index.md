---
layout: world
title: Hello!
---

{% include base_path %}

<section class="hero" aria-labelledby="hero-name">
  <div class="hero__grid">
    <div class="window">
      <h1 id="hero-name">Usman Khaliq</h1>
      <p class="oneliner">Data scientist who loves building things: machine learning, human-centered design, and the AI-first workflow in between.</p>
      <div class="actions">
        <a class="btn-glow" href="{{ base_path }}/portfolio">See the work</a>
        <a class="btn-line" href="{{ base_path }}/pdfs/CV_Usman_Khaliq.pdf" target="_blank" rel="noopener">Resume (PDF)</a>
      </div>
      <a class="press-start" href="#rooms">press start<span class="press-start__cursor" aria-hidden="true"></span></a>
    </div>

    <div class="panes">
      <h2>Lit windows</h2>
      {% for p in site.projects %}
        {% if p.title contains 'Drawbot' %}
          <a class="pane pane--red" href="{{ base_path }}{{ p.url }}"><h3>{{ p.title }}</h3><p>{{ p.excerpt | markdownify | strip_html | truncate: 140 }}</p></a>
        {% endif %}
      {% endfor %}
      {% for p in site.projects %}
        {% if p.title contains 'Target Based Care' %}
          <a class="pane pane--blue" href="{{ base_path }}{{ p.url }}"><h3>{{ p.title }}</h3><p>{{ p.excerpt | markdownify | strip_html | truncate: 140 }}</p></a>
        {% endif %}
      {% endfor %}
      {% for p in site.projects %}
        {% if p.title contains 'Dormio' %}
          <a class="pane pane--yellow" href="{{ base_path }}{{ p.url }}"><h3>{{ p.title }}</h3><p>{{ p.excerpt | markdownify | strip_html | truncate: 140 }}</p></a>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="section" id="rooms" aria-labelledby="rooms-h">
  <h2 id="rooms-h">The rooms</h2>
  <p class="lede">Staff Data Scientist at <a href="https://www.intuit.com/" target="_blank" rel="noopener">Intuit</a>. Start with Work for the short version.</p>
  <ol class="roommap">
    <li><a href="{{ base_path }}/portfolio"><span class="roommap__n">01</span><span class="roommap__name">Work</span><span class="roommap__desc">Industry roles and the ICTD years in West Africa, outcome and stack first.</span></a></li>
    <li><a href="{{ base_path }}/project"><span class="roommap__n">02</span><span class="roommap__name">Projects</span><span class="roommap__desc">Design, research and prototyping from Stanford and after.</span></a></li>
    <li><a href="{{ base_path }}/ai-studio"><span class="roommap__n">03</span><span class="roommap__name">AI Studio</span><span class="roommap__desc">AI Projects 101. Write-ups are on the way.</span></a></li>
    <li><a href="{{ base_path }}/designlog"><span class="roommap__n">04</span><span class="roommap__name">Writing</span><span class="roommap__desc">Notes on data, tooling and life, sorted by topic.</span></a></li>
    <li><a href="{{ base_path }}/about"><span class="roommap__n">05</span><span class="roommap__name">About</span><span class="roommap__desc">Three lives, laid out as a scrapbook.</span></a></li>
    <li><a href="{{ base_path }}/ai-setup"><span class="roommap__n">06</span><span class="roommap__name">AI setup</span><span class="roommap__desc">A system readout of how I work with agents and models.</span></a></li>
    <li><a href="{{ base_path }}/book"><span class="roommap__n">07</span><span class="roommap__name">Reading Notes</span><span class="roommap__desc">Notes on books and papers I have read.</span></a></li>
  </ol>
</section>


