/* ==========================================================================
   Component part: AI settings, keys and cooldown
   Provider selection, per-provider keys/models/endpoint, "Cek key" and key cooldown.
   Provider-specific checks live in the 53-55 files.
   ========================================================================== */
const aiConfigPart = () => ({
    // --- AI state (prompts with `use_ai: true`) ---
    aiProvider: AI_PROVIDERS[storage.get(AI_PROVIDER_STORAGE)] ? storage.get(AI_PROVIDER_STORAGE) : 'gemini',
    aiFallback: storage.get(AI_FALLBACK_STORAGE) === '1',
    // Per provider: one API key per line, one model per line (models are tried in order as fallbacks)
    aiCfg: Object.fromEntries(AI_PROVIDER_IDS.map((id) => [id, {
        keys: storage.get(AI_PROVIDERS[id].keyStorage),
        models: storage.get(AI_PROVIDERS[id].modelStorage, AI_PROVIDERS[id].defaultModel),
        ...(isOpenAiProvider(id) && { // OpenAI-compatible providers also have an endpoint and a reasoning_effort
            endpoint: storage.get(AI_PROVIDERS[id].endpointStorage, AI_PROVIDERS[id].defaultEndpoint),
            effort: storage.get(AI_PROVIDERS[id].effortStorage, AI_PROVIDERS[id].defaultEffort),
        }),
    }])),
    aiKeyCursors: loadJson(AI_CURSOR_STORAGE, {}),
    aiChecks: {}, // { provider: { keyFingerprint: { ok, label, credits? } } } from "Cek key"
    aiChecking: false,
    aiModelLists: {}, // { provider: models } returned by "Cek key" (Gemini and OpenAI-compatible)
    aiShowAllModels: false,
    aiRevealKeys: false,
    aiNow: Date.now(),
    aiKeyHealth: Object.fromEntries(Object.entries(loadJson(AI_HEALTH_STORAGE, {})).filter(([, h]) => h.until > Date.now())),
    aiShowSettings: false,

    /** Persist AI settings and keep the cooldown countdown ticking. */
    watchAiSettings() {
        setInterval(() => { if (this.modalOpen && this.aiShowSettings) this.aiNow = Date.now(); }, 1000); // live cooldown countdown
        this.$watch('aiCfg', (cfg) => AI_PROVIDER_IDS.forEach((id) => {
            storage.set(AI_PROVIDERS[id].keyStorage, cfg[id].keys.trim());
            storage.set(AI_PROVIDERS[id].modelStorage, cfg[id].models.trim());
            if (isOpenAiProvider(id)) {
                storage.set(AI_PROVIDERS[id].endpointStorage, cfg[id].endpoint.trim());
                storage.set(AI_PROVIDERS[id].effortStorage, cfg[id].effort);
            }
        }));
        this.$watch('aiProvider', (value) => storage.set(AI_PROVIDER_STORAGE, value));
        this.$watch('aiFallback', (value) => storage.set(AI_FALLBACK_STORAGE, value ? '1' : '0'));
    },

    /** Provider used for this prompt: frontmatter `ai_provider`, else the one chosen in settings. */
    get aiActiveProvider() { return AI_PROVIDERS[this.activePrompt.ai_provider] ? this.activePrompt.ai_provider : this.aiProvider; },

    /** True when the open prompt pins its own provider (`ai_provider`), so the choice in settings does not apply to it. */
    get aiProviderPinned() { return Boolean(AI_PROVIDERS[this.activePrompt.ai_provider]); },

    get aiProviderLabel() { return AI_PROVIDERS[this.aiActiveProvider].label; },

    get aiProviderTabs() { return AI_PROVIDER_IDS.map((id) => ({ id, label: AI_PROVIDERS[id].label })); },

    get aiTab() { return AI_PROVIDERS[this.aiProvider]; }, // provider being edited in settings

    keysOf(id) { return splitList(this.aiCfg[id].keys); },

    /** Prompt's own ai_model first (only for its provider), then the saved list; later entries are fallbacks. */
    modelsOf(id) {
        const own = id === this.aiActiveProvider ? [this.activePrompt.ai_model] : [];
        const list = [...new Set([...own, ...splitList(this.aiCfg[id].models)].filter(Boolean))];
        return list.length ? list : [AI_PROVIDERS[id].defaultModel];
    },

    get aiKeys() { return this.keysOf(this.aiProvider); }, // shown in settings

    get aiModels() { return this.modelsOf(this.aiActiveProvider); }, // shown in the panel header

    get aiModelList() { return this.aiModelLists[this.aiProvider] || []; },

    get aiModelOptions() {
        const used = new Set(splitList(this.aiCfg[this.aiProvider].models));
        return this.aiModelList
            .filter((m) => this.aiShowAllModels || !NON_TEXT_MODEL.test(m.id))
            .map((m) => ({ ...m, used: used.has(m.id) }));
    },

    toggleModel(id) {
        const cfg = this.aiCfg[this.aiProvider];
        const list = splitList(cfg.models);
        cfg.models = (list.includes(id) ? list.filter((m) => m !== id) : [...list, id]).join('\n');
    },

    formatNumber(n) { return Number(n).toLocaleString('id-ID'); },

    /* ------------------------------------------------------------------
       "Cek key": validates every key of the provider being edited.
       Gemini -> lists the models each key can use; OpenAI-compatible -> GET /models when the endpoint has it.
       ------------------------------------------------------------------ */
    async checkKeys() {
        const provider = this.aiProvider;
        const keys = this.keysOf(provider);
        if (!keys.length || this.aiChecking) return;
        this.aiChecking = true;
        const results = {};
        const models = new Map();
        try {
            await Promise.all(keys.map(async (key) => {
                const id = keyId(key);
                try {
                    results[id] = await this.checkProvider(provider, key, models);
                    this.clearInvalid(key);
                } catch (err) {
                    results[id] = { ok: false, label: `gagal: ${err.message}` };
                    if (err.status !== 429) this.markKey(key, '*', err); // invalid key -> skipped when generating
                }
            }));
            this.aiChecks = { ...this.aiChecks, [provider]: results };
            if (provider === 'gemini' || isOpenAiProvider(provider)) {
                this.aiModelLists = { ...this.aiModelLists, [provider]: [...models.values()].sort((a, b) => a.id.localeCompare(b.id)) };
            }
        } finally {
            this.aiNow = Date.now();
            this.aiChecking = false;
        }
    },

    checkProvider(provider, apiKey, models) {
        if (isOpenAiProvider(provider)) return this.checkOpenAi(provider, apiKey, models);
        return this.checkGemini(apiKey, models);
    },

    /** A key that passes the check is no longer "invalid"/"out of credits". */
    clearInvalid(apiKey) {
        const id = `${keyId(apiKey)}|*`;
        if (!this.aiKeyHealth[id]) return;
        const { [id]: _removed, ...rest } = this.aiKeyHealth;
        this.aiKeyHealth = rest;
        storage.set(AI_HEALTH_STORAGE, JSON.stringify(rest));
    },

    /* ------------------------------------------------------------------
       Key cooldown: 429 pauses a key for that model (honours Google's retryDelay);
       an invalid key (401/403/"API key") is skipped for every model for a while.
       ------------------------------------------------------------------ */
    keyWait(apiKey, model) {
        const now = Date.now();
        const until = Math.max(...[`${keyId(apiKey)}|${model}`, `${keyId(apiKey)}|*`].map((id) => this.aiKeyHealth[id]?.until || 0));
        return until > now ? Math.ceil((until - now) / 1000) : 0;
    },

    markKey(apiKey, model, err) {
        let id; let entry;
        if (err.status === 429) {
            const seconds = err.retryAfter ?? (err.dailyQuota ? 1800 : 60);
            id = `${keyId(apiKey)}|${model}`;
            entry = { until: Date.now() + Math.ceil(seconds) * 1000 + 1000, reason: 'limit' };
        } else if (err.status === 402) { // payment required / out of credits
            id = `${keyId(apiKey)}|*`;
            entry = { until: Date.now() + 3600 * 1000, reason: 'credits' };
        } else if ([401, 403].includes(err.status) || /api key/i.test(err.message)) {
            id = `${keyId(apiKey)}|*`;
            entry = { until: Date.now() + 3600 * 1000, reason: 'invalid' };
        } else return; // 5xx etc. are not the key's fault
        this.aiKeyHealth = { ...this.aiKeyHealth, [id]: entry };
        this.aiNow = Date.now();
        storage.set(AI_HEALTH_STORAGE, JSON.stringify(this.aiKeyHealth));
    },

    resetKeyHealth() {
        this.aiKeyHealth = {};
        storage.remove(AI_HEALTH_STORAGE);
    },

    get aiKeyStatus() {
        const now = this.aiNow;
        return this.aiKeys.map((apiKey) => {
            const fp = keyId(apiKey);
            const chk = this.aiChecks[this.aiProvider]?.[fp];
            const failed = chk && !chk.ok;
            const base = { name: `…${apiKey.slice(-4)}`, state: failed ? 'invalid' : 'ok', dot: failed ? 'bg-red-500' : 'bg-emerald-500', label: chk ? chk.label : 'siap' };
            const hits = Object.entries(this.aiKeyHealth).filter(([id, h]) => id.startsWith(`${fp}|`) && h.until > now);
            if (!hits.length) return base;
            const [id, h] = hits.sort((a, b) => b[1].until - a[1].until)[0];
            const secs = Math.ceil((h.until - now) / 1000);
            const wait = secs >= 90 ? `${Math.ceil(secs / 60)} mnt` : `${secs} dtk`;
            if (h.reason === 'invalid') return { ...base, state: 'invalid', dot: 'bg-red-500', label: `tidak valid · dilewati ${wait}` };
            if (h.reason === 'credits') return { ...base, state: 'invalid', dot: 'bg-red-500', label: `kredit habis · dilewati ${wait}` };
            return { ...base, state: 'cooldown', dot: 'bg-amber-500', label: `limit · ${id.split('|')[1]} · ${wait}` };
        });
    },
});
