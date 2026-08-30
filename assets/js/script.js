// LEA — Little Explorer of Albania — site behaviour
(function () {
  // Mobile nav toggle
  var toggle = document.getElementById('menuToggle');
  var body = document.body;
  if (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
    document.querySelectorAll('#main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Language switch stub — Albanian translation not yet available
  var langBtn = document.querySelector('.lang-switch');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      langBtn.classList.add('lang-switch--soon');
      var existing = langBtn.querySelector('.lang-note');
      if (!existing) {
        var note = document.createElement('span');
        note.className = 'lang-note';
        note.textContent = ' (soon)';
        note.style.opacity = '0.6';
        note.style.fontWeight = '600';
        langBtn.appendChild(note);
      }
    });
  }

  // Newsletter form — front-end only stub, no backend connected yet
  var form = document.getElementById('newsletterForm');
  var status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('input[name="first-name"]').value.trim();
      status.textContent = name
        ? 'Thanks, ' + name + '! You are on Lea\u2019s list.'
        : 'Thanks! You are on Lea\u2019s list.';
      form.reset();
    });
  }

  // Reduce motion respect for the flying Lea bob animation
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function applyMotionPref() {
    var flyer = document.querySelector('.lea-fly');
    if (flyer) flyer.style.animation = reduceMotion.matches ? 'none' : '';
  }
  applyMotionPref();
  reduceMotion.addEventListener && reduceMotion.addEventListener('change', applyMotionPref);
})();
