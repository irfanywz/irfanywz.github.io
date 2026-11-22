// Store untuk Theme (Dark Mode). Dipakai: $store.theme (nav-offcanvas.html).
// Class `dark` di <html> diset lebih awal oleh baseof/theme-init.html (anti-flash).
export function themeStore() {
    return {
        isDark: document.documentElement.classList.contains('dark'),
        toggle() {
            this.isDark = !this.isDark;
            localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', this.isDark);
        },
    };
}
