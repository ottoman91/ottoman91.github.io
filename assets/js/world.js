(function () {
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  /* light switch */
  var sw = document.getElementById('theme-switch');
  function current() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'night';
  }
  function sync() {
    if (!sw) { return; }
    var light = current() === 'light';
    sw.setAttribute('aria-checked', light ? 'true' : 'false');
    var label = sw.querySelector('.switch__label');
    if (label) { label.textContent = light ? 'golden hour' : 'night'; }
  }
  if (sw) {
    sw.addEventListener('click', function () {
      var next = current() === 'light' ? 'night' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    });
    sync();
  }

  /* follow the system until the visitor flips the switch */
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: light)');
    var follow = function (e) {
      if (stored()) { return; }
      root.setAttribute('data-theme', e.matches ? 'light' : 'night');
      sync();
    };
    if (mq.addEventListener) { mq.addEventListener('change', follow); }
    else if (mq.addListener) { mq.addListener(follow); }
  }

  /* first-visit CRT power-on: skip with any key, click or touch */
  if (/\bboot\b/.test(root.className)) {
    var skip = function () {
      root.className = root.className.replace(/\bboot\b/g, '');
      document.removeEventListener('keydown', skip);
      document.removeEventListener('pointerdown', skip);
    };
    document.addEventListener('keydown', skip);
    document.addEventListener('pointerdown', skip);
    window.setTimeout(skip, 900);
  }

  /* topic tabs on the Writing page */
  var tabs = document.querySelector('[data-tabs]');
  var list = document.querySelector('[data-tab-list]');
  if (tabs && list) {
    var buttons = tabs.querySelectorAll('button');
    var items = list.querySelectorAll('li[data-topic]');
    var status = document.querySelector('[data-tab-status]');
    var show = function (topic) {
      var count = 0;
      for (var i = 0; i < items.length; i++) {
        var match = topic === 'all' || items[i].getAttribute('data-topic') === topic;
        items[i].hidden = !match;
        if (match) { count++; }
      }
      for (var j = 0; j < buttons.length; j++) {
        buttons[j].setAttribute('aria-pressed', buttons[j].getAttribute('data-topic') === topic ? 'true' : 'false');
      }
      if (status) { status.textContent = count + (count === 1 ? ' post' : ' posts'); }
    };
    for (var k = 0; k < buttons.length; k++) {
      buttons[k].addEventListener('click', function () {
        show(this.getAttribute('data-topic'));
      });
    }
    show('all');
  }
})();
