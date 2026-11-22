// Loader YouTube IFrame API. Satu-satunya tempat yang menyentuh window.YT / onYouTubeIframeAPIReady.

/**
 * Panggil `onReady` begitu YT.Player tersedia.
 * - API sudah ada: langsung panggil.
 * - Script sudah ditambahkan (sedang loading): tidak melakukan apa-apa.
 * - Selain itu: pasang callback (callback lain di halaman tetap dipanggil) dan tambahkan <script>.
 */
export function ensureYouTubeApi({ scriptId, src, onReady }) {
    if (window.YT && window.YT.Player) {
        onReady();
        return;
    }
    if (document.getElementById(scriptId)) return; // already loading

    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
        if (typeof previousCallback === 'function') previousCallback();
        onReady();
    };

    const tag = document.createElement('script');
    tag.id = scriptId;
    tag.src = src;
    document.head.appendChild(tag);
}
