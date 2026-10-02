// assets/js/main.js
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)

// Daftarkan Swiper secara global agar bisa dipanggil di Alpine component
window.Alpine = Alpine

// Impor file pendukung Anda di sini
import './alpine-store.js'
import './code.js'

Alpine.start()

Defer.dom('.lazyload', 0, 'loaded', function(node) {
    if (node.dataset.src) {
        node.src = node.dataset.src;
        node.removeAttribute('data-src');
    }
}, { rootMargin: '200px' });