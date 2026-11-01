/* ==========================================================================
   Component part: list, categories and URL
   Category sidebar, prompt list filtering and the shareable ?category= / ?prompt= URL.
   ========================================================================== */
const listPart = () => ({
    // --- List / navigation state ---
    pageData: {},
    allPrompts: [],
    isLoadingList: true,
    selectedCategory: 'all',
    globalSearchQuery: '',
    categoryOpen: false,

    flattenPrompts(categories = []) {
        return categories.flatMap((cat) =>
            (cat.prompts || []).map((prompt) => ({
                ...prompt,
                slug: prompt.alias || prompt.slug || getPromptSlug(prompt.json_url),
                categorySlug: getCategorySlug(cat),
                categoryTitle: cat.category_title || cat.category,
            }))
        );
    },

    /** Resolve ?category= to a category slug; the old folder-name form ("01-karakter") still works. */
    resolveCategoryParam(param) {
        const match = (this.pageData.categories || []).find((c) => getCategorySlug(c) === param || c.category === param);
        return match ? getCategorySlug(match) : 'all';
    },

    /** Slug used in the shareable URL (?prompt=...) for the open prompt. */
    get activePromptSlug() {
        return this.allPrompts.find((p) => p.json_url === this.activePromptUrl)?.slug || '';
    },

    /** Resolve ?prompt=: slug/alias first (preferring the selected category), then legacy json_url links. */
    findPromptByParam(param) {
        if (!param) return null;
        const matches = this.allPrompts.filter((p) => p.slug === param);
        return matches.find((p) => p.categorySlug === this.selectedCategory)
            || matches[0]
            || this.allPrompts.find((p) => p.json_url === param || p.json_url.endsWith(param))
            || null;
    },

    updateUrlParams() {
        const url = new URL(window.location);
        const query = this.globalSearchQuery.trim();
        const entries = {
            category: this.selectedCategory !== 'all' ? this.selectedCategory : '',
            search: query,
            prompt: this.modalOpen ? this.activePromptSlug : '',
        };
        Object.entries(entries).forEach(([key, value]) => {
            value ? url.searchParams.set(key, value) : url.searchParams.delete(key);
        });
        window.history.replaceState({}, '', url);
    },

    /** Keep the address bar in sync with the selected category and the search text. */
    watchUrlParams() {
        ['selectedCategory', 'globalSearchQuery'].forEach((key) => this.$watch(key, () => this.updateUrlParams()));
    },

    /* ------------------------------------------------------------------
       List: categories, filtering, labels
       ------------------------------------------------------------------ */
    get categoryItems() {
        const categories = (this.pageData.categories || []).map((cat) => ({
            slug: getCategorySlug(cat),
            title: cat.category_title || cat.category,
            count: (cat.prompts || []).length,
            icon: 'icon-[ri--folder-3-line]',
        }));
        return [{ slug: 'all', title: 'Semua', count: this.allPrompts.length, icon: 'icon-[ri--apps-2-line]' }, ...categories];
    },

    get currentCategoryTitle() {
        return this.categoryItems.find((c) => c.slug === this.selectedCategory)?.title || '';
    },

    get categoryTriggerLabel() {
        return this.selectedCategory === 'all' ? 'Pilih Kategori (Semua)' : `Kategori: ${this.currentCategoryTitle}`;
    },

    get activeFilterLabel() {
        if (this.globalSearchQuery) return `Pencarian: "${this.globalSearchQuery}"`;
        return this.selectedCategory === 'all' ? 'Semua Kategori Aktif' : `Kategori: ${this.currentCategoryTitle}`;
    },

    get filteredPrompts() {
        const query = this.globalSearchQuery.toLowerCase().trim();
        return this.allPrompts.filter((p) =>
            (this.selectedCategory === 'all' || p.categorySlug === this.selectedCategory) &&
            (!query || includesQuery(query, p.title, p.description, p.categoryTitle))
        );
    },

    selectCategory(slug) {
        this.selectedCategory = slug;
    },
});
