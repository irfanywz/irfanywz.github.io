// Bilah progres saat berpindah halaman. Dipakai: x-data="pageLoader" (baseof/page-loader.html)

/**
 * Apakah klik pada `link` akan memuat halaman internal baru (perlu menampilkan progres)?
 * Bukan: link luar, hash (#), halaman yang sama, target=_blank, atau download.
 */
export function isInternalNavigation(link, { origin, currentUrl }) {
    const targetUrl = link.href;
    return targetUrl.startsWith(origin) &&
        !targetUrl.includes('#') &&
        targetUrl !== currentUrl &&
        link.getAttribute('target') !== '_blank' &&
        !link.hasAttribute('download');
}

export function pageLoader() {
    return {
        loading: false,
        progress: 0,
        timer: null,

        init() {
            // Reset total jika halaman kembali dari cache browser (Tombol Back/Forward)
            window.addEventListener('pageshow', (event) => {
                if (event.persisted) {
                    this.forceStop();
                } else {
                    this.finish();
                }
            });
        },

        handleClick(e) {
            const link = e.target.closest('a');
            if (!link || !link.href) return;

            if (isInternalNavigation(link, { origin: window.location.origin, currentUrl: window.location.href })) {
                this.start();
            }
        },

        start() {
            // Kalau lagi proses, clear dulu biar gak numpuk
            this.clearTimer();
            this.loading = true;
            this.progress = 15;

            // Simulasi progress naik perlahan tapi berhenti di 85% nunggu halaman beneran pindah
            this.timer = setInterval(() => {
                if (this.progress < 85) {
                    this.progress += Math.floor(Math.random() * 15) + 5;
                }
            }, 100);
        },

        finish() {
            if (!this.loading) return;
            this.clearTimer();
            this.progress = 100;

            // Tunggu animasi CSS selesai baru di-hide total
            setTimeout(() => {
                this.loading = false;
                this.progress = 0;
            }, 300);
        },

        forceStop() {
            this.clearTimer();
            this.loading = false;
            this.progress = 0;
        },

        clearTimer() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        },
    };
}
