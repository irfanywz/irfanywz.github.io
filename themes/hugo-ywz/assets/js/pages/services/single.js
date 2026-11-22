// Halaman produk/jasa (komponen Alpine "imageGallery" dan "productPurchase").
// Dibuild lewat layouts/_partials/components/inline-bundle.html.
import { imageGallery } from './gallery.js';
import { productPurchase } from './purchase.js';

document.addEventListener('alpine:init', () => {
    Alpine.data('imageGallery', imageGallery);
    Alpine.data('productPurchase', productPurchase);
});
