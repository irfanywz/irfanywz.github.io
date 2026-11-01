/* ==========================================================================
   Component part: provider Google Gemini
   Key check (model list) and streaming for the Gemini API.
   ========================================================================== */
const aiGeminiPart = () => ({
    async checkGemini(apiKey, models) {
        let token = '';
        let count = 0;
        for (let page = 0; page < 10; page++) { // the list is paginated
            const url = `${AI_ENDPOINT}?pageSize=1000${token ? `&pageToken=${encodeURIComponent(token)}` : ''}`;
            const res = await aiFetch(url, { headers: { 'x-goog-api-key': apiKey } }, 'Gemini');
            const data = await res.json().catch(() => null);
            if (!res.ok) throw aiHttpError(res.status, data);
            for (const m of data?.models || []) {
                if (!m.supportedGenerationMethods?.includes('generateContent')) continue;
                const id = String(m.name).replace(/^models\//, '');
                count++;
                models.set(id, { id, displayName: m.displayName || id, input: m.inputTokenLimit, output: m.outputTokenLimit });
            }
            token = data?.nextPageToken;
            if (!token) break;
        }
        return { ok: true, label: `valid · ${count} model tersedia` };
    },

    async streamGemini(model, apiKey, signal) {
        const prompt = this.activePrompt;
        const config = {};
        if (prompt.ai_temperature !== undefined && prompt.ai_temperature !== '' && !Number.isNaN(Number(prompt.ai_temperature))) {
            config.temperature = Number(prompt.ai_temperature);
        }
        if (['json', 'cards'].includes(String(prompt.ai_output).toLowerCase())) config.responseMimeType = 'application/json';

        const body = { contents: [{ role: 'user', parts: [{ text: this.regularPromptRaw }] }] };
        if (prompt.ai_system) body.systemInstruction = { parts: [{ text: prompt.ai_system }] };
        if (Object.keys(config).length) body.generationConfig = config;

        const res = await aiFetch(`${AI_ENDPOINT}/${encodeURIComponent(model)}:streamGenerateContent?alt=sse`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
            body: JSON.stringify(body),
            signal,
        }, 'Gemini');
        if (!res.ok) throw aiHttpError(res.status, await res.json().catch(() => null));

        await readSse(res, (chunk) => {
            this.aiOutput += (chunk.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('');
            this.scrollAiBody();
        });
    },
});
