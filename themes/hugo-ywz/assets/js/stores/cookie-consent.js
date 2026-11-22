// Store untuk Cookie Consent. Dipakai: $store.cookieConsent (baseof/cookie-consent.html)
export function cookieConsentStore() {
    return {
        isVisible: false,
        init() {
            // Tampilkan notifikasi jika persetujuan belum disimpan di localStorage
            if (!localStorage.getItem('cookie_consent_accepted')) {
                // Beri jeda sedikit agar tidak terlalu mengganggu saat halaman dimuat
                setTimeout(() => {
                    this.isVisible = true;
                }, 2000); // Tampil setelah 2 detik
            }
        },
        accept() {
            localStorage.setItem('cookie_consent_accepted', 'true');
            this.isVisible = false;
        },
    };
}
