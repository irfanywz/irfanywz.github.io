/* ==========================================================================
   Component part: database prompt builder
   Prompts with a database: item picker, [VAR] customization and the master prompt.
   ========================================================================== */
const builderPart = () => ({
    // --- Database builder state ---
    builderInput: '',
    builderValues: {}, // values for [VAR] placeholders in builderInput
    builderImage: '',
    selectedItem: null,
    showDbPicker: false,
    dbSearchQuery: '',
    selectedDbCategory: 'all',

    /* ------------------------------------------------------------------
       Database prompt builder
       ------------------------------------------------------------------ */
    /** [VAR] names found in the current description (drives the customization form). */
    get builderParams() { return extractPlaceholders(this.builderInput, BUILDER_RESERVED_KEYS); },

    get builderFilledCount() { return this.builderParams.filter((name) => this.builderValues[name]).length; },

    /** Fill [VAR] placeholders in any text with the customization form values. */
    fillBuilderVars(text, styled = false) {
        const params = extractPlaceholders(text, BUILDER_RESERVED_KEYS);
        return fillTemplate(text || '', { params, values: this.builderValues, styled });
    },

    get builderInputResolved() { return this.fillBuilderVars(this.builderInput); },

    get dbPromptRendered() {
        const inputClass = this.builderParams.length ? HUMAN_INPUT_CLASS : HIGHLIGHT_CLASS;
        const inputHtml = `<span class="${inputClass}">${this.fillBuilderVars(this.builderInput, true) || '[humanInput]'}</span>`;
        return escapeHtml(this.activePrompt.raw_content || '').replace(HUMAN_INPUT_PATTERN, () => inputHtml);
    },

    /** Master prompt with [humanInput] replaced by the given (already resolved) description. */
    buildMasterPrompt(input) {
        return (this.activePrompt.raw_content || '').replace(HUMAN_INPUT_PATTERN, () => input);
    },

    get dbPromptRaw() { return this.buildMasterPrompt(this.builderInputResolved); },

    /** True when the prompt ships a non-empty database. `database: false` (or none) hides the picker button. */
    get hasDatabase() {
        const db = this.activePrompt.database;
        return !!db && typeof db === 'object' && Object.keys(db).length > 0;
    },

    get dbCategories() {
        return ['all', ...Object.keys(this.activePrompt.database || {})];
    },

    get flattenedDatabase() {
        const database = this.activePrompt.database || {};
        const query = this.dbSearchQuery.toLowerCase().trim();

        return Object.entries(database)
            .filter(([category]) => this.selectedDbCategory === 'all' || category === this.selectedDbCategory)
            .flatMap(([, items]) => (Array.isArray(items) ? items : []))
            .filter((item) => !query || includesQuery(query, item.title, item.description));
    },

    selectDbItem(item) {
        // JSON round-trip: structuredClone throws on Alpine's reactive Proxy objects.
        this.selectedItem = JSON.parse(JSON.stringify(item));
        this.builderInput = item.description;
        this.builderImage = item.image;
        this.builderValues = {};
        this.dynamicInputs = {};
        this.showDbPicker = false;
    },
});
