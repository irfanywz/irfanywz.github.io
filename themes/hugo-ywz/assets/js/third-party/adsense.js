/** Muat adsbygoogle.js untuk publisher `pubId` (ca-pub-...). */
export function loadAdSense(pubId) {
    const ad = document.createElement('script');
    ad.type = 'text/javascript';
    ad.async = true;
    ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + pubId;
    ad.crossOrigin = 'anonymous';

    const first = document.getElementsByTagName('script')[0];
    if (first && first.parentNode) {
        first.parentNode.insertBefore(ad, first);
    } else {
        document.head.appendChild(ad);
    }
}
