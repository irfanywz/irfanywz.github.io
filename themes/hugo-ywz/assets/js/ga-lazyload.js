(function() {
    var gaId = 'G-VVGW3VPZZG';
    var loaded = false;

    function loadGA() {
      if (loaded) return;
      loaded = true;

      // Load Script Gtag.js langsung tanpa cek DNT
      var script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
      document.head.appendChild(script);

      // Inisialisasi DataLayer
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', gaId);
      
      console.log('Google Analytics Lazy Loaded');
    }

    // List event pendeteksi interaksi pengguna
    var events = ['mouseover', 'keydown', 'touchstart', 'scroll'];
    events.forEach(function(event) {
      window.addEventListener(event, loadGA, { passive: true, once: true });
    });
})();