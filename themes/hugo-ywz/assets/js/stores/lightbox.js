// Store untuk Lightbox Gambar. Dipakai: $store.lightbox (render-image, image-link, baseof/lightbox.html, dst.)
import { nextIndex, prevIndex } from '../lib/cycle.js';

/** Baca daftar gambar dari elemen `.image-grid-item` (atribut data-src/alt/desc). */
export function readGroupImages(elements) {
    return Array.from(elements).map(el => ({
        src: el.dataset.src,
        alt: el.dataset.alt,
        desc: el.dataset.desc || '',
    }));
}

export function lightboxStore() {
    return {
        isOpen: false,
        src: '',
        alt: '',
        desc: '',
        images: [],
        index: 0,

        open(src, alt, desc, group) {
            this.src = src;
            this.alt = alt || '';
            this.desc = desc || '';
            this.isOpen = true;
            document.body.style.overflow = 'hidden';

            // Logika Grouping
            if (group) {
                const els = document.querySelectorAll(`.image-grid-item[data-group="${group}"]`);
                if (els.length > 1) {
                    this.images = readGroupImages(els);
                    this.index = this.images.findIndex(img => img.src === src);
                } else {
                    this.images = [];
                }
            } else {
                this.images = [];
            }
        },
        next() {
            if (this.images.length === 0) return;
            this.index = nextIndex(this.index, this.images.length);
            this.updateView();
        },
        prev() {
            if (this.images.length === 0) return;
            this.index = prevIndex(this.index, this.images.length);
            this.updateView();
        },
        updateView() {
            const img = this.images[this.index];
            this.src = img.src;
            this.alt = img.alt;
            this.desc = img.desc;
        },
        close() {
            this.isOpen = false;
            setTimeout(() => {
                this.src = '';
                this.alt = '';
                this.desc = '';
                this.images = [];
            }, 300); // Tunggu transisi selesai
            document.body.style.overflow = '';
        },
    };
}
