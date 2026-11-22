// Store Alpine untuk popup exit-intent.
// Fitur opt-in: hanya dimuat bila params.enableExitIntent = true
// (lihat layouts/_default/baseof.html dan layouts/_partials/baseof/exit-intent-popup.html).
document.addEventListener('alpine:init', () => {
    Alpine.store('exitIntent', {
        isVisible: false,
        hasBeenTriggered: false,

        init() {
            // Cek apakah user pernah menekan "Jangan Tampilkan Lagi" sebelumnya
            if (sessionStorage.getItem('exit_intent_shown_this_session')) {
                this.hasBeenTriggered = true;
                return;
            }

            const lastShown = localStorage.getItem('exit_intent_last_shown');
            const oneDay = 24 * 60 * 60 * 1000; // 24 jam dalam milidetik

            if (lastShown && (Date.now() - lastShown < oneDay)) {
                this.hasBeenTriggered = true;
                return;
            }

            // 1. Trigger Desktop: Mouse meninggalkan area halaman ke atas
            document.addEventListener('mouseleave', (e) => {
                if (e.clientY <= 0) {
                    this.trigger();
                }
            });

            // 2. Trigger Mobile: Deteksi saat user menekan tombol Back
            // window.addEventListener('popstate', () => {
            //     if (!this.hasBeenTriggered) {
            //         history.pushState(null, '', window.location.href);
            //         this.trigger();
            //     }
            // });

            // if (window.history.state === null) {
            //     history.pushState(null, '', window.location.href);
            // }
        },

        trigger() {
            if (this.hasBeenTriggered) return;

            // Sekarang popup langsung muncul ketika di-trigger (tanpa langsung set storage otomatis)
            this.isVisible = true;
            this.hasBeenTriggered = true;
        },

        close() {
            // Tutup biasa: Hanya menutup modal, localStorage/sessionStorage TIDAK di-set, 
            // sehingga kalau nanti kursor naik lagi ke atas (atau pindah halaman lalu balik), popup bisa muncul lagi.
            this.isVisible = false;
        },

        dontShowAgain() {
            // Tutup modal DAN set storage agar tidak muncul lagi dalam 24 jam / sesi ini
            this.isVisible = false;

            localStorage.setItem('exit_intent_last_shown', Date.now());
            sessionStorage.setItem('exit_intent_shown_this_session', 'true');
        }
    });
});
