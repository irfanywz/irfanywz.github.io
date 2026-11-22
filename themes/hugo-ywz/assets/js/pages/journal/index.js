// Halaman daftar jurnal (Alpine component "journalApp").
// Dibuild lewat layouts/_partials/components/inline-bundle.html; params.dataUrl = URL journal/index.json.
import * as params from '@params';
import { fetchJson } from '../../lib/http.js';
import { FILTER_TABS, buildOptions, groupByMonth, matchesFilters, normalizeJournal } from './filters.js';

const OPTION_CLASS = {
    selected: 'bg-indigo-600 text-white shadow-xs',
    idle: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700',
};

const BADGE_CLASS = {
    selected: 'bg-indigo-500/40 text-white',
    idle: 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400',
};

document.addEventListener('alpine:init', () => {
    Alpine.data('journalApp', () => ({
        tabs: FILTER_TABS,

        // --- Data ---
        journals: [],
        options: { year: [], category: [] },
        groups: [],                    // filtered journals, grouped by month
        loading: true,
        loadFailed: false,

        // --- Filter state (mirrored in the URL) ---
        search: '',
        filters: { year: '', category: '' },

        // --- UI state ---
        activeTab: 'year',
        mobileFilterOpen: false,

        // ==============================================================
        // Lifecycle
        // ==============================================================
        async init() {
            this.readStateFromUrl();

            // One watcher covers search + every filter.
            this.$watch('queryString', () => {
                this.writeStateToUrl();
                this.applyFilters();
            });

            await this.loadJournals();
        },

        async loadJournals() {
            try {
                const raw = await fetchJson(params.dataUrl);
                this.journals = raw.map(normalizeJournal);
                this.options = buildOptions(this.journals);
                this.applyFilters();
            } catch (error) {
                this.loadFailed = true;
                console.error('Gagal memuat data jurnal:', error);
            } finally {
                this.loading = false;
            }
        },

        // ==============================================================
        // URL <-> state
        // ==============================================================
        readStateFromUrl() {
            const params = new URLSearchParams(window.location.search);
            this.search = params.get('q') || '';
            this.filters.year = params.get('year') || '';
            this.filters.category = params.get('category') || '';
        },

        /** Canonical query string for the current state; also the watcher's trigger. */
        get queryString() {
            const params = new URLSearchParams();
            if (this.filters.category) params.set('category', this.filters.category);
            if (this.filters.year) params.set('year', this.filters.year);
            if (this.search.trim()) params.set('q', this.search.trim());
            return params.toString();
        },

        writeStateToUrl() {
            const query = this.queryString;
            const url = query ? window.location.pathname + '?' + query : window.location.pathname;
            window.history.replaceState({}, '', url);
        },

        // ==============================================================
        // Filtering
        // ==============================================================
        applyFilters() {
            const query = this.search.trim().toLowerCase();
            const { year, category } = this.filters;

            const matches = (journal) => matchesFilters(journal, { year, category, query });

            this.groups = groupByMonth(this.journals.filter(matches), { showYear: !year });
        },

        resetFilters() {
            this.search = '';
            this.filters.year = '';
            this.filters.category = '';
        },

        get hasActiveFilters() {
            return this.activeFilterLabels.length > 0;
        },

        /** Human-readable chips, e.g. ["Kategori [Kerja]", "Tahun 2025", "\"rapat\""]. */
        get activeFilterLabels() {
            const labels = this.tabs
                .filter(tab => this.filters[tab.id])
                .map(tab => tab.summary(this.filters[tab.id]));

            const query = this.search.trim();
            if (query) labels.push('"' + query + '"');
            return labels;
        },

        // ==============================================================
        // Filter panel (desktop list + mobile sheet)
        // ==============================================================
        get currentTab() {
            return this.tabs.find(tab => tab.id === this.activeTab);
        },

        get currentOptions() {
            return this.options[this.activeTab];
        },

        /** Label for the mobile trigger button, e.g. "Semua Tahun" or "Tahun: 2025". */
        get currentFilterLabel() {
            const value = this.filters[this.activeTab];
            return value ? this.currentTab.label + ': ' + value : this.currentTab.allLabel;
        },

        isSelected(option) {
            return this.filters[this.activeTab] === option.value;
        },

        select(option) {
            this.filters[this.activeTab] = option.value;
            this.mobileFilterOpen = false;
        },

        optionClass(option) {
            return this.isSelected(option) ? OPTION_CLASS.selected : OPTION_CLASS.idle;
        },

        badgeClass(option) {
            return this.isSelected(option) ? BADGE_CLASS.selected : BADGE_CLASS.idle;
        },
    }));
});
