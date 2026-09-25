// assets/js/ga-lazy.js
(function() {
    var gaId = 'G-VVGW3VPZZG';

    // Menggunakan Defer dengan parameter ketiga untuk menunggu interaksi pengguna
    Defer(function() {
        // Load Script Gtag.js
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
        document.head.appendChild(script);

        // Inisialisasi DataLayer
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', gaId);
        
        console.log('Google Analytics Lazy Loaded via Defer.js');
    }, 0, ['mouseover', 'keydown', 'touchstart', 'scroll']);
})();