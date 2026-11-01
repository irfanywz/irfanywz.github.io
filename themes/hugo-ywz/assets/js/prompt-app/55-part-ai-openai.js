/* ==========================================================================
   Component part: OpenAI-compatible providers
   Key check (/models) and streaming for every AI_PROVIDERS entry with type: 'openai'.
   ========================================================================== */
const aiOpenAiPart = () => ({
    /** OpenAI-compatible: GET {base}/models (Bearer). Not every API has it, so a 404/405 only means "cannot verify". */
    async checkOpenAi(provider, apiKey, models) {
        const { label } = AI_PROVIDERS[provider];
        const chatUrl = openAiChatUrl(this.aiCfg[provider].endpoint);
        if (!chatUrl) throw new Error('Endpoint URL belum diisi');
        const res = await aiFetch(chatUrl.replace(/\/chat\/completions$/i, '/models'), { headers: { Authorization: `Bearer ${apiKey}` } }, label);
        if ([404, 405].includes(res.status)) return { ok: true, label: 'tersimpan · endpoint ini tidak punya daftar model, key belum bisa diverifikasi' };
        const data = await res.json().catch(() => null);
        if (!res.ok) throw aiHttpError(res.status, data);
        const list = Array.isArray(data?.data) ? data.data : [];
        for (const m of list) {
            const id = String(m.id ?? '');
            if (id) models.set(id, { id, displayName: m.owned_by || 'model' });
        }
        return { ok: true, label: `valid · ${list.length} model tersedia` };
    },

    /** reasoning_effort to send: the prompt's `ai_reasoning` (active provider only), else the provider's setting; '' = do not send. */
    openAiEffort(provider) {
        const own = String(this.activePrompt.ai_reasoning ?? '').trim().toLowerCase();
        const value = provider === this.aiActiveProvider && own ? own : String(this.aiCfg[provider].effort || '').toLowerCase();
        return value === 'off' ? '' : value;
    },

    /** Any OpenAI-compatible API: POST {endpoint}/chat/completions (Bearer auth, SSE streaming). */
    async streamOpenAi(provider, model, apiKey, signal) {
        const prompt = this.activePrompt;
        const { label } = AI_PROVIDERS[provider];
        const url = openAiChatUrl(this.aiCfg[provider].endpoint);
        if (!url) throw Object.assign(new Error(`Endpoint URL ${label} belum diisi di pengaturan.`), { retryable: true });
        if (!model) throw Object.assign(new Error(`Nama model ${label} belum diisi di pengaturan.`), { retryable: true });

        const messages = prompt.ai_system ? [{ role: 'system', content: prompt.ai_system }] : [];
        messages.push({ role: 'user', content: this.regularPromptRaw });
        const body = { model, messages, stream: true };
        const effort = this.openAiEffort(provider);
        if (effort) body.reasoning_effort = effort;
        if (prompt.ai_temperature !== undefined && prompt.ai_temperature !== '' && !Number.isNaN(Number(prompt.ai_temperature))) {
            body.temperature = Number(prompt.ai_temperature);
        }

        const res = await aiFetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify(body),
            signal,
        }, label);
        if (!res.ok) throw aiHttpError(res.status, await res.json().catch(() => null));

        if (!(res.headers.get('content-type') || '').includes('text/event-stream')) { // plain JSON fallback
            const data = await res.json();
            if (data?.error) throw Object.assign(new Error(data.error.message || `Respons gagal dari ${label}`), { retryable: true });
            this.aiOutput = extractOpenAiText(data);
            return;
        }
        await readSse(res, (evt) => {
            if (evt.error) throw Object.assign(new Error(evt.error.message || `Respons gagal dari ${label}`), { retryable: true });
            const delta = evt.choices?.[0]?.delta?.content;
            if (typeof delta === 'string') this.aiOutput += delta;
            this.scrollAiBody();
        });
    },
});
