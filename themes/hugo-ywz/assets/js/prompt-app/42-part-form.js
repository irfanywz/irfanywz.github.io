/* ==========================================================================
   Component part: regular prompt form
   Dynamic form for regular prompts, plus remembering the values per prompt (only values that differ from defaults).
   ========================================================================== */
const formPart = () => ({
    promptOverride: null, // manually edited prompt text (use_ai layout only); null = follow the form
    /* ------------------------------------------------------------------
       Regular prompt (form builder)
       ------------------------------------------------------------------ */
    get promptFields() {
        const { raw_content: raw, variables_config: config } = this.activePrompt;
        if (!raw) return [];

        if (config) {
            return Object.entries(config).map(([name, cfg]) => {
                const type = (cfg.type || 'text').toLowerCase();
                const useDb = String(cfg.use_db ?? cfg.usedb ?? '').trim().toLowerCase(); // database name (prompt-level or global)
                const db = this.activeChoiceDbs[useDb];
                return {
                    name,
                    type,
                    label: cfg.label || name,
                    placeholder: cfg.placeholder || `Pilih atau ketik ${name}...`,
                    // select/datalist fields fed by a database; explicit `options` still win
                    options: cfg.options || (db && ['select', 'datalist'].includes(type) ? db.items.map((i) => i.value) : []),
                    rows: cfg.rows || 3,
                    default: cfg.default !== undefined ? cfg.default : '',
                    useDb,
                    multiple: cfg.multiple === true || cfg.multiple === 'true',
                    separator: cfg.separator !== undefined ? String(cfg.separator) : ', ',
                };
            });
        }

        return extractPlaceholders(raw).map((name) => ({
            name,
            type: 'text',
            label: name.charAt(0).toUpperCase() + name.slice(1),
            placeholder: `Masukkan ${name}...`,
            options: [],
            default: '',
        }));
    },

    renderRegularPrompt(styled) {
        return fillTemplate(this.activePrompt.raw_content || '', {
            params: this.promptFields.map((f) => f.name),
            values: this.promptVariables,
            styled,
        });
    },

    get regularPromptRendered() { return this.renderRegularPrompt(true); },

    /** Prompt built from the form only (ignores manual edits). */
    get promptAuto() { return this.renderRegularPrompt(false); },

    /** The prompt that is copied and sent to the AI: the manual edit when there is one, else the form result. */
    get regularPromptRaw() { return this.promptOverride ?? this.promptAuto; },

    /** Textarea input: text equal to the form result means "not edited". */
    editPrompt(text) { this.promptOverride = text === this.promptAuto ? null : text; },

    resetPromptOverride() { this.promptOverride = null; },

    formDefaults() { return Object.fromEntries(this.promptFields.map((f) => [f.name, f.default])); },

    loadSavedForm() {
        const fields = Object.fromEntries(this.promptFields.map((f) => [f.name, f]));
        const saved = loadJson(FORM_STORAGE_PREFIX + this.activePromptUrl, {});
        return Object.fromEntries(Object.entries(saved).filter(([name, value]) =>
            fields[name] && (fields[name].type !== 'select' || value === '' || fields[name].options.includes(value))));
    },

    saveFormValues() {
        if (this.isLoadingDetail || !this.activePromptUrl || this.activePrompt.has_database) return;
        const defaults = this.formDefaults();
        const changed = Object.fromEntries(Object.entries(this.promptVariables).filter(([name, value]) => name in defaults && value !== defaults[name]));
        const key = FORM_STORAGE_PREFIX + this.activePromptUrl;
        if (Object.keys(changed).length) storage.set(key, JSON.stringify(changed)); else storage.remove(key);
    },

    resetForm() { this.promptVariables = this.formDefaults(); },

    /** Empty one field (small clear button, use_ai layout). */
    clearField(name) { this.promptVariables[name] = ''; },

    /** Remember the form values of the open prompt. */
    watchFormValues() {
        this.$watch('promptVariables', () => this.saveFormValues());
    },
});
