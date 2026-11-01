/* ==========================================================================
   Component part: provider Kie.ai
   Key check (credits), credit display and streaming for Kie.ai (OpenAI Responses format).
   ========================================================================== */
const aiKiePart = () => ({
    aiCredits: null, // { label, low } shown under the output when Kie.ai was used
    aiCreditsByKey: {}, // last known balance per key fingerprint (to show how much a request used)

    formatCredits(n) { return Number(n).toLocaleString('id-ID', { maximumFractionDigits: 2 }); },

    /** Shows the remaining Kie.ai credits under the output (and how many this request used, if the previous balance is known). */
    async refreshKieCredits(apiKey) {
        const id = keyId(apiKey);
        const before = this.aiCreditsByKey[id];
        this.aiCredits = { label: 'Sisa kredit Kie.ai: memuat...', low: false };
        try {
            const { credits } = await this.checkKie(apiKey);
            this.aiCreditsByKey = { ...this.aiCreditsByKey, [id]: credits };
            const used = before !== undefined && before > credits ? before - credits : 0;
            this.aiCredits = { label: `Sisa kredit Kie.ai: ${this.formatCredits(credits)}${used ? ` (terpakai ${this.formatCredits(used)})` : ''}`, low: credits <= 0 };
        } catch {
            this.aiCredits = null; // balance is a nice-to-have; never show an error for it
        }
    },

    async checkKie(apiKey) {
        const res = await aiFetch(KIE_CREDIT_ENDPOINT, { headers: { Authorization: `Bearer ${apiKey}` } }, 'Kie.ai');
        const data = await res.json().catch(() => null);
        if (!res.ok) throw aiHttpError(res.status, data);
        if (data && data.code !== undefined && Number(data.code) !== 200) throw aiHttpError(Number(data.code), data);
        const credits = Number(data?.data);
        if (Number.isNaN(credits)) throw new Error('respons kredit tidak dikenali');
        return { ok: true, credits, label: credits > 0 ? `valid · kredit ${this.formatNumber(credits)}` : 'valid · kredit habis' };
    },

    /** Kie.ai GPT models: POST /codex/v1/responses (OpenAI Responses format, Bearer auth). */
    async streamKie(model, apiKey, signal) {
        const prompt = this.activePrompt;
        // No documented system field on this endpoint, so the system text is prepended to the user message.
        const text = prompt.ai_system ? `${prompt.ai_system}\n\n---\n\n${this.regularPromptRaw}` : this.regularPromptRaw;
        const effort = AI_EFFORTS.includes(String(prompt.ai_reasoning).toLowerCase()) ? String(prompt.ai_reasoning).toLowerCase() : this.aiEffort;
        const body = { model, stream: true, input: [{ role: 'user', content: [{ type: 'input_text', text }] }], reasoning: { effort } };

        const res = await aiFetch(KIE_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify(body),
            signal,
        }, 'Kie.ai');
        if (!res.ok) throw aiHttpError(res.status, await res.json().catch(() => null));

        // Kie.ai sometimes reports errors as HTTP 200 with { code, msg } in the body.
        const failIfCoded = (data) => { if (data && data.code !== undefined && Number(data.code) !== 200) throw aiHttpError(Number(data.code), data); };

        if (!(res.headers.get('content-type') || '').includes('text/event-stream')) { // plain JSON fallback
            const data = await res.json();
            failIfCoded(data);
            this.aiOutput = extractKieText(data);
            return;
        }
        await readSse(res, (evt) => {
            failIfCoded(evt);
            if (evt.type === 'response.output_text.delta' && typeof evt.delta === 'string') this.aiOutput += evt.delta;
            else if (evt.choices?.[0]?.delta?.content) this.aiOutput += evt.choices[0].delta.content; // chat-completions style
            else if (evt.type === 'response.completed' && !this.aiOutput) this.aiOutput = extractKieText(evt.response);
            else if (evt.type === 'response.failed' || evt.type === 'error') {
                throw Object.assign(new Error(evt.response?.error?.message || evt.error?.message || evt.message || 'Respons gagal dari Kie.ai'), { retryable: true });
            }
            this.scrollAiBody();
        });
    },
});
