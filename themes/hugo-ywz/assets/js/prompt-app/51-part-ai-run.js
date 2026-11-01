/* ==========================================================================
   Component part: AI generation
   Runs a prompt through the active provider with key/model/provider fallback.
   Per-prompt frontmatter: use_ai, ai_provider, ai_model, ai_system, ai_temperature, ai_output, ai_reasoning.
   ========================================================================== */
const aiRunPart = () => ({
    aiPane: 'form', // 'form' | 'result' | 'prompt': which pane is shown on small screens; on large screens form is always visible
    aiStatus: '',
    aiStatusProvider: '', // provider that produced aiStatus ('*' = restored from history, always shown)
    aiFormatChoice: 'auto',
    aiLoading: false,
    aiOutput: '',
    aiError: '',
    aiController: null,

    /* ------------------------------------------------------------------
       AI generation (prompts with `use_ai: true`, regular dynamic form only)
       Optional per-prompt fields: ai_model, ai_system
       ------------------------------------------------------------------ */
    get useAi() {
        const flag = this.activePrompt.use_ai;
        return (flag === true || flag === 'true') && !this.activePrompt.has_database;
    },

    /** Panel header: the last run's provider/key/model while it is still the provider that would run now, else what the next run will use. */
    get aiHeaderLabel() {
        const fresh = this.aiLoading || ['*', this.aiActiveProvider].includes(this.aiStatusProvider);
        return this.aiStatus && fresh ? this.aiStatus : `${this.aiProviderLabel} · ${this.aiModels[0]}`;
    },

    /** Output as the chosen format: { kind: 'html' | 'cards', html, heading, cards, partial, text (what "Salin Hasil" copies) }. */
    get aiView() {
        const text = this.aiOutput;
        if (!text) return { kind: 'html', html: '', text: '' };
        let mode = this.aiFormatChoice;

        const json = mode === 'text' || mode === 'markdown' ? null : parseJsonLoose(text);
        if (json) {
            const built = mode === 'json' ? null : buildCards(json.data);
            if (built) {
                return { kind: 'cards', ...built, partial: json.partial, text: built.cards.map((c) => c.text).join('\n\n---\n\n') };
            }
            // Not card-shaped: show highlighted JSON, but never a repaired fragment of unfinished streaming output.
            if (!json.partial || mode === 'json') {
                const pretty = JSON.stringify(json.data, null, 2);
                return { kind: 'html', html: `<pre class="font-mono text-xs leading-relaxed whitespace-pre-wrap break-words">${highlightJson(pretty)}</pre>`, partial: json.partial, text: pretty };
            }
        }

        if (mode === 'auto' || mode === 'cards' || mode === 'json') mode = MARKDOWN_HINT.test(text) ? 'markdown' : 'text';
        if (mode === 'markdown') return { kind: 'html', html: renderMarkdown(text), text };
        return { kind: 'html', html: `<div class="whitespace-pre-wrap">${escapeHtml(text)}</div>`, text };
    },

    stopAi() { this.aiController?.abort(); },

    async generateAi() {
        if (this.aiLoading) return this.stopAi();

        // Providers to try: the active one first, then (optionally) every other provider that has keys.
        const providers = [this.aiActiveProvider, ...(this.aiFallback ? AI_PROVIDER_IDS.filter((id) => id !== this.aiActiveProvider) : [])]
            .filter((id) => this.keysOf(id).length);
        if (!providers.includes(this.aiActiveProvider)) { // fallback only kicks in after the active provider's keys fail
            this.aiShowSettings = true;
            this.aiHistoryOpen = false;
            this.aiError = `Isi minimal satu API key ${this.aiProviderLabel} di pengaturan sebelum generate.`;
            return;
        }

        // Per provider: round-robin start, then every key for the first model, then every key for the next model...
        // Keys/models still on cooldown are skipped.
        const all = providers.flatMap((provider) => {
            const keys = this.keysOf(provider);
            const start = (this.aiKeyCursors[provider] || 0) % keys.length;
            return this.modelsOf(provider).flatMap((model) => keys.map((_, i) => {
                const keyIndex = (start + i) % keys.length;
                return { provider, model, key: keys[keyIndex], keyIndex, keyCount: keys.length };
            }));
        });
        const attempts = all.filter(({ key, model }) => this.keyWait(key, model) === 0);
        if (!attempts.length) {
            const wait = Math.min(...all.map(({ key, model }) => this.keyWait(key, model)));
            this.aiShowSettings = true;
            this.aiHistoryOpen = false;
            this.aiError = `Semua key sedang cooldown (sekitar ${wait} detik lagi). Tunggu sebentar atau reset cooldown di pengaturan.`;
            return;
        }

        const controller = new AbortController();
        Object.assign(this, { aiController: controller, aiLoading: true, aiOutput: '', aiError: '', aiStatus: '', aiStatusProvider: '', aiShowSettings: false, aiHistoryOpen: false });
        this.aiPane = 'result'; // small screens: jump to the result tab
        let tried = 0;
        let lastError = '';

        try {
            for (const { provider, model, key, keyIndex, keyCount } of attempts) {
                tried++;
                const label = AI_PROVIDERS[provider].label;
                this.aiStatus = `${label} · Key ${keyIndex + 1}/${keyCount} · ${model}`;
                this.aiStatusProvider = provider;
                try {
                    await this.streamAi(provider, model, key, controller.signal);
                    this.aiKeyCursors = { ...this.aiKeyCursors, [provider]: (keyIndex + 1) % keyCount }; // next time start with the next key
                    storage.set(AI_CURSOR_STORAGE, JSON.stringify(this.aiKeyCursors));
                    this.addHistory(`${label} · ${model}`);
                    lastError = '';
                    break;
                } catch (err) {
                    if (err.name === 'AbortError') { lastError = ''; break; }
                    lastError = err.message;
                    this.markKey(key, model, err);
                    console.warn(`Percobaan ${tried} gagal (${this.aiStatus}):`, err.message);
                    if (!err.retryable || this.aiOutput) break; // never restart a half-streamed answer
                }
            }
            if (lastError) this.aiError = `Gagal: ${lastError}${tried > 1 ? ` (sudah mencoba ${tried} kombinasi key/model)` : ''}`;
        } finally {
            this.aiLoading = false;
            this.aiController = null;
        }
    },

    /** Dispatch to the provider; throws an Error with `.retryable` when another key/model/provider is worth trying. */
    async streamAi(provider, model, apiKey, signal) {
        if (isOpenAiProvider(provider)) await this.streamOpenAi(provider, model, apiKey, signal);
        else await this.streamGemini(model, apiKey, signal);
        if (!this.aiOutput) {
            throw Object.assign(new Error('AI tidak mengembalikan hasil (kemungkinan diblokir filter keamanan). Coba ubah prompt.'), { retryable: false });
        }
    },

    scrollAiBody() { this.$nextTick(() => { if (this.$refs.aiBody) this.$refs.aiBody.scrollTop = this.$refs.aiBody.scrollHeight; }); },
});
