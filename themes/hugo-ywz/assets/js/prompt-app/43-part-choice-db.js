/* ==========================================================================
   Component part: choice databases
   Picker for form fields with `use_db`. Data: `choice_databases` in _index.md (global) and in the open prompt's
   own front matter (prompt-level); when both define the same name, the prompt's own database wins.
   ========================================================================== */
const choiceDbPart = () => ({
    // Global choice databases (_index.md `choice_databases`), used by fields with `use_db` in variables_config
    choiceDbs: {},
    promptChoiceDbs: {}, // `choice_databases` of the open prompt, normalized once when the prompt is loaded
    choicePicker: { open: false, fieldName: '', query: '', group: '' }, // group: '' = all, else a group name (or CHOICE_UNGROUPED)

    /* ------------------------------------------------------------------
       Global choice databases: picker for fields with `use_db`
       ------------------------------------------------------------------ */
    /** Select fields already list the database as their options; every other type gets a picker button. */
    /** Global databases overlaid with the open prompt's own; same name = the prompt's wins. */
    get activeChoiceDbs() { return { ...this.choiceDbs, ...this.promptChoiceDbs }; },

    hasChoiceDb(field) { return !!field.useDb && field.type !== 'select' && !!this.activeChoiceDbs[field.useDb]; },

    choiceDbTitle(field) { return this.activeChoiceDbs[field.useDb]?.title || ''; },

    get choiceField() { return this.promptFields.find((f) => f.name === this.choicePicker.fieldName) || null; },

    get choiceDb() { const field = this.choiceField; return field ? this.activeChoiceDbs[field.useDb] || null : null; },

    /** Does the item match the search box? (label, value, group and description are searched) */
    choiceMatches(item, q) {
        return !q || `${item.label} ${item.value} ${item.group} ${item.description}`.toLowerCase().includes(q);
    },

    /**
     * Group filter chips: one per group with how many items match the current search.
     * Only offered when the database really has groups (2+ distinct, at least one named).
     */
    get choiceGroupChips() {
        const db = this.choiceDb;
        if (!db) return [];
        const q = this.choicePicker.query.trim().toLowerCase();
        const counts = new Map();
        for (const item of db.items) counts.set(item.group, (counts.get(item.group) || 0) + (this.choiceMatches(item, q) ? 1 : 0));
        const keys = [...counts.keys()];
        if (keys.length < 2 || !keys.some(Boolean)) return [];
        return keys
            .sort((a, b) => (a === '') - (b === '')) // ungrouped ("Lainnya") last, authors' order otherwise
            .map((key) => ({ key: key || CHOICE_UNGROUPED, name: key || 'Lainnya', count: counts.get(key) }));
    },

    /** Items after search + group filter, grouped for display. `selected` is precomputed once per render (lists can be long). */
    get choiceGroups() {
        const db = this.choiceDb;
        const field = this.choiceField;
        if (!db || !field) return [];
        const q = this.choicePicker.query.trim().toLowerCase();
        const only = this.choicePicker.group;
        const picked = new Set(field.multiple ? this.choiceTokens : [String(this.promptVariables[field.name] ?? '').trim()]);
        const hasNamed = db.items.some((i) => i.group);
        const groups = new Map();
        for (const item of db.items) {
            if (only && (item.group || CHOICE_UNGROUPED) !== only) continue;
            if (!this.choiceMatches(item, q)) continue;
            if (!groups.has(item.group)) groups.set(item.group, []);
            groups.get(item.group).push({ ...item, selected: picked.has(item.value) });
        }
        return [...groups].map(([name, items]) => ({ name, title: name || (hasNamed ? 'Lainnya' : ''), items }));
    },

    get choiceShownCount() { return this.choiceGroups.reduce((n, g) => n + g.items.length, 0); },

    /** Filter chip: filled when active, dimmed when the current search leaves it empty. */
    choiceChipClass(key, count) {
        const on = this.choicePicker.group === key;
        return [
            on ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-500/20'
               : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/60 dark:hover:bg-indigo-950/30',
            !on && count === 0 ? 'opacity-40' : '',
        ];
    },

    choiceBadgeClass(key) {
        return this.choicePicker.group === key ? 'bg-white/25 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300';
    },

    resetChoiceFilter() { Object.assign(this.choicePicker, { query: '', group: '' }); },

    /** Values currently in the field (multi-select fields keep a separator-joined list; manual entries are preserved). */
    get choiceTokens() {
        const field = this.choiceField;
        if (!field) return [];
        const sep = field.separator.trim() || field.separator;
        return String(this.promptVariables[field.name] ?? '').split(sep).map((t) => t.trim()).filter(Boolean);
    },

    isChoiceSelected(value) {
        const field = this.choiceField;
        if (!field) return false;
        return field.multiple ? this.choiceTokens.includes(value) : String(this.promptVariables[field.name] ?? '').trim() === value;
    },

    openChoicePicker(field) {
        Object.assign(this.choicePicker, { open: true, fieldName: field.name, query: '', group: '' });
        if (window.matchMedia('(min-width: 640px)').matches) this.$nextTick(() => this.$refs.choiceSearch?.focus()); // no keyboard pop-up on phones
    },

    closeChoicePicker() { this.choicePicker.open = false; },

    pickChoice(item) {
        const field = this.choiceField;
        if (!field) return;
        if (field.multiple) {
            const tokens = this.choiceTokens;
            const next = tokens.includes(item.value) ? tokens.filter((t) => t !== item.value) : [...tokens, item.value];
            this.promptVariables[field.name] = next.join(field.separator);
        } else {
            this.promptVariables[field.name] = item.value;
            this.closeChoicePicker();
        }
    },

    clearChoice() {
        const field = this.choiceField;
        if (field) this.promptVariables[field.name] = '';
    },
});
