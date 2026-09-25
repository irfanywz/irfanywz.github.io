// assets/js/adsense-lazy.js
(function() {
    var pubId = 'ca-pub-2846006866814506';

    // Menggunakan Defer() dengan opsi user action dan jeda waktu cadangan
    Defer(function() {
        var ad = document.createElement('script');
        ad.type = 'text/javascript';
        ad.async = true;
        ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + pubId;
        ad.crossOrigin = 'anonymous';
        
        var sc = document.getElementsByTagName('script')[0];
        if (sc && sc.parentNode) {
            sc.parentNode.insertBefore(ad, sc);
        } else {
            document.head.appendChild(ad);
        }

        console.log('AdSense Lazy Loaded via Defer.js');
    }, 0, ['scroll', 'mousemove', 'touchstart', 'keydown']); 
    // Parameter kedua (5000) bertindak sebagai cadangan timeout (5 detik) 
    // jika pengguna tidak melakukan interaksi apa pun.
    // Parameter ketiga menangkap event interaksi pengguna secara otomatis.
})();