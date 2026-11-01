/* ==========================================================================
   Component part: sub-prompts
   Description and image prompt generators (one sub-modal driven by subModalType).
   ========================================================================== */
const subPromptPart = () => ({
    // --- Sub-modal state ---
    showSubModal: false,
    subModalType: 'desc',
    dynamicInputs: {},

    /* ------------------------------------------------------------------
       Sub-prompts (description & image generators)
       ------------------------------------------------------------------ */
    /** Generator buttons to show: only types whose template exists (not missing, false or empty). */
    get subModalButtons() { return SUB_MODAL_BUTTONS.filter(({ type }) => this.hasSubPrompt(type)); },

    hasSubPrompt(type) {
        const template = this.activePrompt[SUB_PROMPTS[type].field];
        return typeof template === 'string' && template.trim() !== '';
    },

    get subConfig() { return SUB_PROMPTS[this.subModalType]; },

    get subTemplate() { return this.activePrompt[this.subConfig.field] || ''; },

    get subParams() { return extractPlaceholders(this.subTemplate, this.subConfig.reserved); },

    /** Values for reserved placeholders such as [character] or [description]. */
    get subReplacements() {
        const input = this.builderInputResolved;
        const item = this.selectedItem;
        const isImage = this.subModalType === 'image';
        const itemText = isImage ? item?.imagePrompt || item?.image_prompt || item?.description : item?.description;
        const description = itemText ? this.fillBuilderVars(itemText) : input;

        return {
            character: item?.title || input,
            target: input,
            direction: input,
            title: item?.title || '',
            description,
            input,
            ...(isImage && { imageprompt: description }),
        };
    },

    renderSubPrompt(styled) {
        return fillTemplate(this.subTemplate, {
            replacements: this.subReplacements,
            params: this.subParams,
            values: this.dynamicInputs,
            prefix: this.subConfig.prefix,
            styled,
        });
    },

    get subRendered() { return this.subTemplate ? this.renderSubPrompt(true) : this.subConfig.emptyMessage; },

    get subRaw() { return this.subTemplate ? this.renderSubPrompt(false) : ''; },

    openSubModal(type) {
        this.subModalType = type;
        this.showSubModal = true;
        this.copiedSub = false;
    },
});
