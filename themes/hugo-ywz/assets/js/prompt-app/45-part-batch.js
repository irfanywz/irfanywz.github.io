/* ==========================================================================
   Component part: batch generator
   One master prompt per non-empty description line.
   ========================================================================== */
const batchPart = () => ({
    // --- Batch generator state ---
    batchFormats: BATCH_FORMATS,
    showBatchModal: false,
    batchInput: '',
    batchFormat: BATCH_FORMATS[0].id,

    /* ------------------------------------------------------------------
       Batch generator: one master prompt per non-empty description line.
       [VAR] placeholders use the builder's customization values.
       ------------------------------------------------------------------ */
    get batchItems() {
        return this.batchInput
            .split(/\r?\n/)
            .map((line) => line.trim())
            .filter(Boolean)
            .map((description, id) => ({ id, description, prompt: this.buildMasterPrompt(this.fillBuilderVars(description)) }));
    },

    get batchOutput() {
        const format = BATCH_FORMATS.find((f) => f.id === this.batchFormat) || BATCH_FORMATS[0];
        return format.join(this.batchItems.map((item) => item.prompt));
    },
});
