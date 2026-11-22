// Store untuk Navigasi (Offcanvas). Dipakai: $store.nav (header.html, nav-offcanvas.html)
export function navStore() {
    return {
        isOpen: false,
        toggle() {
            this.isOpen = !this.isOpen;
            // Mencegah scroll pada body saat menu terbuka
            document.body.style.overflow = this.isOpen ? 'hidden' : '';
        },
        close() {
            this.isOpen = false;
            document.body.style.overflow = '';
        },
    };
}
