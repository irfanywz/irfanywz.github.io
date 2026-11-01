/* ==========================================================================
   Component part: prompt detail modal
   Opening/closing the detail modal and loading one prompt.
   ========================================================================== */
const detailPart = () => ({
    // --- Detail modal state ---
    modalOpen: false,
    isLoadingDetail: false,
    activePrompt: {},
    activePromptUrl: '',
    promptVariables: {},
    splitLayout: false, // dialog uses the full-height two-pane layout; follows useAi once a prompt is loaded (not while loading)

    /* ------------------------------------------------------------------
       Detail modal
       ------------------------------------------------------------------ */
    async openPromptDetail(jsonUrl, updateHistory = true) {
        this.stopAi();
        this.choicePicker.open = false;
        Object.assign(this, {
            aiOutput: '',
            aiError: '',
            aiStatus: '',
            aiStatusProvider: '',
            aiFormatChoice: 'auto',
            aiPane: 'form',
            aiHistoryOpen: false,
            aiHistoryAll: false,
            aiHistoryQuery: '',
            aiShowSettings: false,
            copiedAi: false,
            modalOpen: true,
            isLoadingDetail: true,
            activePromptUrl: jsonUrl,
            copiedMaster: false,
            copiedSub: false,
            dbSearchQuery: '',
            selectedDbCategory: 'all',
            promptVariables: {},
            promptChoiceDbs: {},
            selectedItem: null,
            builderValues: {},
            dynamicInputs: {},
            batchInput: '',
            copiedBatch: false,
            copiedBatchIndex: false,
        });
        if (updateHistory) this.updateUrlParams();

        try {
            const prompt = await fetchJson(jsonUrl);
            this.promptChoiceDbs = normalizeChoiceDbs(prompt.choice_databases); // before activePrompt: promptFields reads it
            this.activePrompt = prompt;
            this.splitLayout = this.useAi;
            if (prompt.ai_provider && !AI_PROVIDERS[prompt.ai_provider]) console.warn(`ai_provider "${prompt.ai_provider}" tidak dikenal (pilihan: ${AI_PROVIDER_IDS.join(', ')}); memakai provider dari pengaturan.`);
            const fmt = String(this.activePrompt.ai_output || '').toLowerCase();
            this.aiFormatChoice = AI_FORMATS.includes(fmt) ? fmt : 'auto';
            this.initBuilderState();
        } catch (err) {
            console.error('Gagal memuat detail prompt:', err);
        } finally {
            this.isLoadingDetail = false;
        }
    },

    initBuilderState() {
        if (this.activePrompt.has_database) {
            this.builderInput = this.activePrompt.default_input || '';
            this.builderImage = this.activePrompt.image || '';
            return;
        }
        this.builderInput = '';
        this.builderImage = '';
        const defaults = this.formDefaults();
        this.promptVariables = { ...defaults, ...this.loadSavedForm() };
        this.promptFields.filter((f) => f.useDb && !this.activeChoiceDbs[f.useDb]).forEach((f) => {
            console.warn(`Database "${f.useDb}" (field "${f.name}") tidak ditemukan di choice_databases (front matter prompt ini maupun _index.md).`);
        });
    },

    closeModal() {
        this.stopAi();
        this.choicePicker.open = false;
        this.modalOpen = false;
        this.promptChoiceDbs = {};
        this.activePromptUrl = '';
        this.updateUrlParams();
    },
});
