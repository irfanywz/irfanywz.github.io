// Modal kutipan di halaman jurnal (Alpine component "quotePlayerApp", dipakai x-data="quotePlayerApp()").
// Dibuild lewat layouts/_partials/components/inline-bundle.html; params.dataUrl = URL quote/index.json.
import * as params from '@params';
import { fetchJsonOrNull } from '../../lib/http.js';
import { activeCategoryTitle, groupQuotes, pickRandomQuote } from './quotes.js';

function quotePlayerApp() {
    return {
        quoteCategories: [],
        currentQuote: { text: '', author: '' },
        quoteModalOpen: false,
        mobileCategoryOpen: false,
        quoteSearch: '',
        selectedCategoryQuote: '',

        init() {
            this.loadQuotes();
        },

        async loadQuotes() {
            try {
                const quoteData = await fetchJsonOrNull(params.dataUrl);
                if (quoteData && quoteData.categories) {
                    this.quoteCategories = quoteData.categories;
                    this.randomizeQuote();
                }
            } catch (error) {
                console.error('Gagal meload data quote:', error);
            }
        },

        randomizeQuote() {
            const quote = pickRandomQuote(this.quoteCategories);
            if (quote) this.currentQuote = quote;
        },

        getActiveCategoryTitle() {
            return activeCategoryTitle(this.quoteCategories, this.selectedCategoryQuote);
        },

        get filteredGroupedQuotes() {
            return groupQuotes(this.quoteCategories, { slug: this.selectedCategoryQuote, search: this.quoteSearch });
        },
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('quotePlayerApp', quotePlayerApp);
});
