/* ==========================================================================
   Component part: backup (export / import JSON)
   Everything this app stores lives in localStorage of this browser only; this part moves it between browsers.
   Exported: provider settings (+ API keys only when ticked), result history, saved form values.
   Not exported: key cooldown state and rotation cursors (transient).
   An imported file is untrusted input: it is validated field by field, never evaluated.
   ========================================================================== */
const BACKUP_APP = 'prompt-app';
const BACKUP_VERSION = 1;
const BACKUP_MAX_BYTES = 5 * 1024 * 1024;
const BACKUP_MAX_ENTRIES = 500;
const BACKUP_EFFORTS = ['off', 'low', 'medium', 'high']; // OpenAI-compatible reasoning_effort choices in the settings UI
const BACKUP_FORBIDDEN_KEYS = ['__proto__', 'constructor', 'prototype'];

/** Flat { field: string | number | boolean } copy of untrusted data. */
function backupValues(raw) {
    const out = {};
    if (!isPlainObject(raw)) return out;
    for (const [key, value] of Object.entries(raw).slice(0, 200)) {
        if (BACKUP_FORBIDDEN_KEYS.includes(key)) continue;
        if (typeof value === 'string') out[key] = value.slice(0, 20000);
        else if (typeof value === 'number' || typeof value === 'boolean') out[key] = value;
    }
    return out;
}

/** A history entry is only accepted when its url stays on this site, because restoring it fetches that url. */
function backupEntry(raw) {
    if (!isPlainObject(raw) || typeof raw.id !== 'string' || typeof raw.output !== 'string' || typeof raw.url !== 'string') return null;
    let url;
    try {
        const parsed = new URL(raw.url, window.location.href);
        if (parsed.origin !== window.location.origin) return null;
        url = raw.url.slice(0, 2000);
    } catch { return null; }
    const text = (v, max) => (typeof v === 'string' ? v.slice(0, max) : '');
    return {
        id: raw.id.slice(0, 64),
        ts: Number.isFinite(Number(raw.ts)) ? Number(raw.ts) : Date.now(),
        url,
        title: text(raw.title, 500),
        model: text(raw.model, 500),
        values: backupValues(raw.values),
        output: raw.output,
        format: AI_FORMATS.includes(raw.format) ? raw.format : 'auto',
        pinned: raw.pinned === true,
    };
}

/** Validates a parsed backup and returns only what the app understands; throws a user-facing Error otherwise. */
function sanitizeBackup(raw) {
    if (!isPlainObject(raw) || raw.app !== BACKUP_APP) throw new Error('Ini bukan file cadangan prompt app.');
    if (!Number.isInteger(raw.version) || raw.version < 1 || raw.version > BACKUP_VERSION) throw new Error('Versi file cadangan tidak didukung.');

    const out = { settings: { providers: {} }, history: [], forms: {} };
    const settings = isPlainObject(raw.settings) ? raw.settings : {};
    if (AI_PROVIDER_IDS.includes(settings.provider)) out.settings.provider = settings.provider;
    if (typeof settings.fallback === 'boolean') out.settings.fallback = settings.fallback;

    const providers = isPlainObject(settings.providers) ? settings.providers : {};
    // providers this version no longer has (e.g. from an older backup) are skipped, but reported
    out.skippedProviders = Object.keys(providers).filter((k) => !AI_PROVIDER_IDS.includes(k) && !BACKUP_FORBIDDEN_KEYS.includes(k)).slice(0, 5).map((k) => k.slice(0, 30));
    for (const id of AI_PROVIDER_IDS) { // only ids this app knows, never keys taken from the file
        const p = providers[id];
        if (!isPlainObject(p)) continue;
        const clean = {};
        if (typeof p.models === 'string') clean.models = p.models.slice(0, 2000);
        if (typeof p.keys === 'string') clean.keys = p.keys.slice(0, 20000);
        if (isOpenAiProvider(id)) {
            if (typeof p.endpoint === 'string' && (p.endpoint.trim() === '' || /^https?:\/\//i.test(p.endpoint.trim()))) clean.endpoint = p.endpoint.trim().slice(0, 2000);
            if (BACKUP_EFFORTS.includes(p.effort)) clean.effort = p.effort;
        }
        if (Object.keys(clean).length) out.settings.providers[id] = clean;
    }

    if (Array.isArray(raw.history)) {
        out.history = raw.history.slice(0, BACKUP_MAX_ENTRIES).map(backupEntry).filter(Boolean);
    }
    if (isPlainObject(raw.forms)) {
        for (const [key, values] of Object.entries(raw.forms).slice(0, BACKUP_MAX_ENTRIES)) {
            if (!key.startsWith(FORM_STORAGE_PREFIX) || key.length > 2100) continue;
            const clean = backupValues(values);
            if (Object.keys(clean).length) out.forms[key] = clean;
        }
    }
    return out;
}

const aiBackupPart = () => ({
    backupIncludeKeys: false,
    backupMessage: '',
    backupError: '',

    /** Download everything as one JSON file. API keys are included only when the checkbox is ticked. */
    exportBackup() {
        this.backupMessage = '';
        this.backupError = '';
        if (this.backupIncludeKeys && !confirm('File cadangan akan berisi API key dalam teks biasa. Simpan dengan aman dan jangan dibagikan. Lanjutkan?')) return;

        const providers = {};
        for (const id of AI_PROVIDER_IDS) {
            const cfg = this.aiCfg[id];
            providers[id] = { models: cfg.models };
            if (isOpenAiProvider(id)) Object.assign(providers[id], { endpoint: cfg.endpoint, effort: cfg.effort });
            if (this.backupIncludeKeys) providers[id].keys = cfg.keys;
        }
        const forms = {};
        try {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(FORM_STORAGE_PREFIX)) forms[key] = loadJson(key, {});
            }
        } catch { /* storage blocked: export without forms */ }

        const data = {
            app: BACKUP_APP,
            version: BACKUP_VERSION,
            exportedAt: new Date().toISOString(),
            settings: { provider: this.aiProvider, fallback: this.aiFallback, providers },
            history: this.aiHistory,
            forms,
        };
        const iso = data.exportedAt;
        const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = `prompt-app-backup-${iso.slice(0, 10).replace(/-/g, '')}-${iso.slice(11, 16).replace(':', '')}.json`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);

        this.backupMessage = `Diekspor: ${this.aiHistory.length} entri riwayat, ${Object.keys(forms).length} form tersimpan${this.backupIncludeKeys ? ', termasuk API key' : ', tanpa API key'}.`;
    },

    /** <input type="file"> change handler. Validates, asks for confirmation, then applies. */
    async importBackup(event) {
        const input = event.target;
        const file = input.files && input.files[0];
        input.value = ''; // lets the same file be chosen again
        this.backupMessage = '';
        this.backupError = '';
        if (!file) return;
        try {
            if (file.size > BACKUP_MAX_BYTES) throw new Error('File terlalu besar (maksimal 5 MB).');
            let raw;
            try { raw = JSON.parse(await file.text()); } catch { throw new Error('File bukan JSON yang valid.'); }
            const clean = sanitizeBackup(raw);

            // An imported endpoint receives your API key on Generate, so show every endpoint that would change.
            const endpoints = Object.entries(clean.settings.providers)
                .filter(([id, p]) => p.endpoint && p.endpoint !== this.aiCfg[id].endpoint)
                .map(([id, p]) => `${AI_PROVIDERS[id].label}: ${p.endpoint}`);
            let message = 'Impor akan menimpa pengaturan yang sama, menggabungkan riwayat, dan menimpa nilai form yang sama.';
            if (Object.values(clean.settings.providers).some((p) => p.keys)) message += '\n\nFile ini berisi API key yang akan menggantikan key saat ini.';
            if (endpoints.length) message += `\n\nEndpoint yang akan diubah (API key Anda dikirim ke alamat ini saat Generate):\n${endpoints.join('\n')}`;
            message += '\n\nHanya impor file yang Anda ekspor sendiri. Lanjutkan?';
            if (!confirm(message)) return;

            this.backupMessage = this.applyBackup(clean);
        } catch (err) {
            this.backupError = err.message || 'Gagal mengimpor file.';
        }
    },

    /** Applies sanitized data. Settings are persisted by the watcher of watchAiSettings(). Returns a summary. */
    applyBackup(clean) {
        const { settings } = clean;
        if (settings.provider) this.aiProvider = settings.provider;
        if (settings.fallback !== undefined) this.aiFallback = settings.fallback;
        let providerCount = 0;
        for (const [id, p] of Object.entries(settings.providers)) {
            Object.assign(this.aiCfg[id], p);
            providerCount++;
        }

        const known = new Set(this.aiHistory.map((e) => e.id));
        const added = clean.history.filter((e) => !known.has(e.id));
        const merged = [...this.aiHistory, ...added].sort((a, b) => b.ts - a.ts);
        while (merged.length > AI_HISTORY_MAX) { // same trimming rule as addHistory: oldest unpinned first
            const i = merged.findLastIndex((e) => !e.pinned);
            if (i < 0) break;
            merged.splice(i, 1);
        }
        this.persistHistory(merged);
        const kept = added.filter((e) => merged.includes(e)).length;

        let formCount = 0;
        for (const [key, values] of Object.entries(clean.forms)) {
            if (storage.set(key, JSON.stringify(values))) formCount++;
        }
        return `Impor selesai: ${providerCount} provider, ${kept} entri riwayat baru, ${formCount} form tersimpan. Buka ulang prompt yang sedang tampil untuk memuat nilai form yang diimpor.${clean.skippedProviders.length ? ` Dilewati (provider tidak ada lagi): ${clean.skippedProviders.join(', ')}.` : ''}`;
    },
});
