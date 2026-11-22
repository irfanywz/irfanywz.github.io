// Halaman daftar produk/jasa (komponen Alpine "shopList").
// Dibuild lewat layouts/_partials/components/inline-bundle.html.
import { countFilters, filtersFromQuery, matchesItem, writeFiltersToUrl } from './filters.js';

document.addEventListener('alpine:init', () => {
    Alpine.data('shopList', (items, categories) => ({
        items: items,
        categories: categories || [],
        search: '',
        filters: { type: 'all', category: 'all', price: 'all' },
        onlyAvailable: false,
        filterOpen: false,

        init() {
            // Baca filter dari URL: ?type=produk&category=Software&price=free
            Object.assign(this.filters, filtersFromQuery(window.location.search, this.categories));

            // Sinkronkan filter ke URL (tanpa menambah riwayat browser)
            this.$watch('filters', (f) => {
                const url = writeFiltersToUrl(new URL(window.location), f);
                window.history.replaceState({}, '', url);
            });
        },

        matches(item) {
            return matchesItem(item, this);
        },
        isVisible(id) {
            return this.matches(this.items[id]);
        },
        get visibleCount() {
            return this.items.filter(i => this.matches(i)).length;
        },
        // jumlah filter aktif di dropdown (tanpa search)
        get filterCount() {
            return countFilters(this.filters, this.onlyAvailable);
        },
        get activeCount() {
            return this.filterCount + (this.search.trim() ? 1 : 0);
        },
        resetFilters() {
            this.filters = { type: 'all', category: 'all', price: 'all' };
            this.onlyAvailable = false;
        },
        reset() {
            this.search = '';
            this.resetFilters();
        },
    }));
});
