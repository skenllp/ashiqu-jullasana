(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var v = $('v'), intro = $('intro'), au = $('bg-music'), mu = $('mu'), pt = $('pt');
  var done = false, on = false;

  /* scroll reveal */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.r').forEach(function (el) { io.observe(el); });

  /* music */
  function setM(s) {
    on = s;
    mu.textContent = s ? '♪' : '✕';
    mu.style.opacity = s ? 1 : 0.6;
    mu.setAttribute('aria-pressed', String(s));
    if (s) { var p = au.play(); if (p && p.catch) p.catch(function () {}); } else { au.pause(); }
  }

  /* cover petals (only once the cover has scrolled out of focus) */
  function petals() {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    var f = document.createDocumentFragment();
    for (var i = 0; i < 14; i++) {
      var s = document.createElement('i'), z = 9 + Math.random() * 8;
      s.style.cssText = '--x:' + (Math.random() * 100) + '%;width:' + z + 'px;height:' + (z * 1.3) + 'px;--o:' +
        (0.35 + Math.random() * 0.3) + ';--dx:' + ((Math.random() - 0.5) * 30) + '%;--rot:' + (180 + Math.random() * 360) +
        'deg;animation-duration:' + (14 + Math.random() * 10) + 's;animation-delay:' + (Math.random() * 14) + 's';
      f.appendChild(s);
    }
    pt.appendChild(f);
    new IntersectionObserver(function (e) {
      pt.classList.toggle('show', !e[0].isIntersecting || e[0].intersectionRatio < 0.5);
    }, { threshold: [0, 0.5, 1] }).observe(document.querySelector('.hero'));
  }

  /* opening */
  var heroImg = document.querySelector('.hero-bg');
  var heroReady = heroImg && heroImg.decode ? heroImg.decode().catch(function () {}) : Promise.resolve();
  function end() {
    if (done) return; done = true;
    try { v.pause(); } catch (e) {}
    heroReady.then(function () {
      scrollTo(0, 0);
      document.body.classList.remove('lock');
      document.body.classList.add('opened');
      intro.classList.add('out');
      petals();
      setTimeout(function () { intro.remove(); }, 1600);
    });
  }
  $('open').addEventListener('click', function () {
    $('open').classList.add('gone');
    mu.classList.add('show');
    setM(true);
    var p = v.play(); if (p && p.catch) p.catch(end);
    setTimeout(end, 12000);
  });
  v.addEventListener('ended', end);
  v.addEventListener('error', end);
  mu.addEventListener('click', function () { setM(!on); });

  /* smooth anchors */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.querySelector(a.getAttribute('href'));
      if (!t) return; e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
