(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var v = $('v'), intro = $('intro'), pt = $('pt'), done = false;

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
    }, { threshold: [0, 0.5, 1] }).observe(document.querySelector('.cover'));
  }

  var img = document.querySelector('.cover__bg');
  var ready = img && img.decode ? img.decode().catch(function () {}) : Promise.resolve();
  function end() {
    if (done) return; done = true;
    try { v.pause(); } catch (e) {}
    ready.then(function () {
      scrollTo(0, 0);
      document.body.classList.remove('lock');
      document.body.classList.add('opened', 'page-entering');
      intro.classList.add('out');
      petals();
      document.dispatchEvent(new CustomEvent('invitation:opened'));
      setTimeout(function () { intro.remove(); }, 1600);
    });
  }
  $('open').addEventListener('click', function () {
    $('open').classList.add('gone');
    var p = v.play(); if (p && p.catch) p.catch(end);
    setTimeout(end, 12000);
  });
  v.addEventListener('ended', end);
  v.addEventListener('error', end);
})();
