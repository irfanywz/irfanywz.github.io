import { nextIndex, prevIndex } from '../../lib/cycle.js';

/** Galeri gambar + lightbox di halaman produk. Dipakai: x-data="imageGallery(images)". */
export function imageGallery(images) {
    return {
        images: images,
        currentIndex: 0,
        lightboxOpen: false,
        lightboxIndex: 0,

        next() {
            if (this.images.length === 0) return;
            this.currentIndex = nextIndex(this.currentIndex, this.images.length);
        },
        prev() {
            if (this.images.length === 0) return;
            this.currentIndex = prevIndex(this.currentIndex, this.images.length);
        },
        goTo(index) {
            this.currentIndex = index;
        },
        openLightbox(index) {
            if (this.images.length === 0) return;
            this.lightboxIndex = index;
            this.lightboxOpen = true;
            document.body.style.overflow = 'hidden';
        },
        closeLightbox() {
            this.lightboxOpen = false;
            document.body.style.overflow = '';
        },
        nextLightbox() {
            if (this.images.length === 0) return;
            this.lightboxIndex = nextIndex(this.lightboxIndex, this.images.length);
        },
        prevLightbox() {
            if (this.images.length === 0) return;
            this.lightboxIndex = prevIndex(this.lightboxIndex, this.images.length);
        },
    };
}
