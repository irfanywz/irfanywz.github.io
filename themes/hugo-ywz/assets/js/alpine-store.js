// Store dan komponen Alpine global. Setiap store ada di stores/<nama>.js.
// Diimpor oleh main.js sebelum Alpine.start(); registrasi harus di dalam 'alpine:init'.
import { cookieConsentStore } from './stores/cookie-consent.js';
import { lightboxStore } from './stores/lightbox.js';
import { navStore } from './stores/nav.js';
import { pageLoader } from './stores/page-loader.js';
import { shareStore } from './stores/share.js';
import { themeStore } from './stores/theme.js';
import { translateStore } from './stores/translate.js';

document.addEventListener('alpine:init', () => {
    Alpine.store('nav', navStore());
    Alpine.store('theme', themeStore());
    Alpine.store('share', shareStore());
    Alpine.store('lightbox', lightboxStore());
    Alpine.store('cookieConsent', cookieConsentStore());
    Alpine.store('translate', translateStore());

    Alpine.data('pageLoader', pageLoader);
});
