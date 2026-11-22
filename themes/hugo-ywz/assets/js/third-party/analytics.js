/** Muat gtag.js lalu inisialisasi Google Analytics 4. */
export function loadGoogleAnalytics(gaId) {
    // Load Script Gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    document.head.appendChild(script);

    // Inisialisasi DataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', gaId);
}
