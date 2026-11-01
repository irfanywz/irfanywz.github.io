/* ==========================================================================
   Component part: AI result history
   localStorage history, newest first; pinned entries survive trimming.
   ========================================================================== */
const aiHistoryPart = () => ({
    aiHistory: loadJson(AI_HISTORY_STORAGE, []),
    aiHistoryOpen: false,
    aiHistoryAll: false,
    aiHistoryQuery: '',

    /* ------------------------------------------------------------------
       Result history (localStorage, newest first, pinned entries survive trimming)
       ------------------------------------------------------------------ */
    get aiHistoryCount() { return this.aiHistory.filter((e) => e.url === this.activePromptUrl).length; }, // this prompt only

    get aiHistoryOthers() { return this.aiHistory.length - this.aiHistoryCount; },

    get aiHistoryList() {
        const q = this.aiHistoryQuery.trim().toLowerCase();
        return this.aiHistory
            .filter((e) => (this.aiHistoryAll || e.url === this.activePromptUrl)
                && (!q || `${e.title} ${e.output} ${Object.values(e.values || {}).join(' ')}`.toLowerCase().includes(q)))
            .sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.ts - a.ts);
    },

    addHistory(model) {
        const entry = {
            id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
            ts: Date.now(),
            url: this.activePromptUrl,
            title: this.activePrompt.title || '',
            model,
            values: { ...this.promptVariables },
            output: this.aiOutput,
            format: this.aiFormatChoice,
            pinned: false,
        };
        const list = [entry, ...this.aiHistory];
        while (list.length > AI_HISTORY_MAX) {
            const i = list.findLastIndex((e) => !e.pinned);
            if (i < 0) break;
            list.splice(i, 1);
        }
        this.persistHistory(list);
    },

    /** Save; if the browser quota is hit, drop the oldest unpinned entries until it fits. */
    persistHistory(list) {
        const next = [...list];
        while (!storage.set(AI_HISTORY_STORAGE, JSON.stringify(next))) {
            const i = next.findLastIndex((e) => !e.pinned);
            if (i < 0) break;
            next.splice(i, 1);
        }
        this.aiHistory = next;
    },

    toggleHistoryPin(id) { this.persistHistory(this.aiHistory.map((e) => (e.id === id ? { ...e, pinned: !e.pinned } : e))); },

    deleteHistory(id) { this.persistHistory(this.aiHistory.filter((e) => e.id !== id)); },

    clearHistory() {
        if (this.aiHistory.some((e) => !e.pinned) && confirm('Hapus semua riwayat? Entri yang di-pin tetap disimpan.')) {
            this.persistHistory(this.aiHistory.filter((e) => e.pinned));
        }
    },

    async restoreHistory(entry) {
        if (entry.url !== this.activePromptUrl) await this.openPromptDetail(entry.url);
        this.promptVariables = { ...this.promptVariables, ...entry.values };
        Object.assign(this, { aiOutput: entry.output, aiFormatChoice: entry.format, aiError: '', aiStatus: entry.model, aiStatusProvider: '*', aiHistoryOpen: false, aiPane: 'result' });
    },

    formatTime(ts) { return new Date(ts).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }); },

    snippet(text) { return String(text).replace(/\s+/g, ' ').trim().slice(0, 140); },
});
