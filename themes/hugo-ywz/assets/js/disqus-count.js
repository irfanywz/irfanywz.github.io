(function() {
  var countLoaded = false;

  function loadDisqusCount() {
    if (countLoaded) return;
    countLoaded = true;

    var script = document.createElement('script');
    script.id = 'dsq-count-scr';
    script.async = true;
    script.src = 'https://muhamad-irfan.disqus.com/count.js';
    document.head.appendChild(script);
  }

  // Memicu load script count saat ada interaksi pengguna (scroll, klik, hover, dll)
  var interactionEvents = ['mouseover', 'keydown', 'touchstart', 'scroll'];
  interactionEvents.forEach(function(event) {
    window.addEventListener(event, loadDisqusCount, { passive: true, once: true });
  });
})();