// Store untuk Share Offcanvas.
// CATATAN: saat ini tidak ada layout di theme yang memakai $store.share. Dipertahankan kalau-kalau
// dipakai di content; hapus bersama baris registrasinya di alpine-store.js jika memang tidak dipakai.
export function shareStore() {
    return {
        isOpen: false,
        toggle() {
            this.isOpen = !this.isOpen;
            document.body.style.overflow = this.isOpen ? 'hidden' : '';
        },
        close() { this.isOpen = false; document.body.style.overflow = ''; },
    };
}
