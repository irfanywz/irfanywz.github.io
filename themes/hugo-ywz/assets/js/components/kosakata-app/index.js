// Modal kosakata di halaman jurnal (Alpine component "kosakataPlayerApp", dipakai x-data="kosakataPlayerApp()").
// Dibuild lewat layouts/_partials/components/inline-bundle.html; params.dataUrl = URL kosa-kata/index.json.
import * as params from '@params';
import { fetchJsonOrNull } from '../../lib/http.js';
import { categoryDescription, categoryTitle, filterVocabularies, totalVocabCount } from './vocab.js';

function kosakataPlayerApp() {
    return {
        kosakataCategories: [],
        kosakataModalOpen: false,
        categoryDropdownOpen: false, // State untuk offcanvas kategori mobile
        kosakataSearch: '',
        selectedCategorySlug: '',

        init() {
            this.loadVocabularies();
        },

        async loadVocabularies() {
            try {
                const data = await fetchJsonOrNull(params.dataUrl);
                if (data && data.categories) {
                    this.kosakataCategories = data.categories;
                }
            } catch (error) {
                console.error('Gagal meload data kosakata:', error);
            }
        },

        get totalVocabCount() {
            return totalVocabCount(this.kosakataCategories);
        },

        get activeCategoryTitle() {
            return categoryTitle(this.kosakataCategories, this.selectedCategorySlug);
        },

        get activeCategoryDescription() {
            return categoryDescription(this.kosakataCategories, this.selectedCategorySlug);
        },

        get filteredVocabularies() {
            return filterVocabularies(this.kosakataCategories, { slug: this.selectedCategorySlug, search: this.kosakataSearch });
        },
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('kosakataPlayerApp', kosakataPlayerApp);
});
