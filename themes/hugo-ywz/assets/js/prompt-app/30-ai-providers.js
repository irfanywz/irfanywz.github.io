/* ==========================================================================
   AI providers: constants and provider-agnostic helpers
   To add an OpenAI-compatible provider, add one block (type: 'openai') to AI_PROVIDERS.
   A different API format also needs a *Part file with its check/stream methods.
   ========================================================================== */

const AI_PROVIDER_STORAGE = 'prompt_ai_provider';
const AI_FALLBACK_STORAGE = 'prompt_ai_fallback';
const AI_CURSOR_STORAGE = 'prompt_ai_key_cursors';
const AI_RETRY_STATUS = [401, 402, 403, 429, 500, 503]; // next key/model/provider is tried on these
/** Gemini keeps its original storage keys, so settings saved before multi-provider support still load. */
const AI_PROVIDERS = {
    gemini: {
        label: 'Google Gemini', keyStorage: 'gemini_api_key', modelStorage: 'prompt_ai_model', defaultModel: 'gemini-2.5-flash',
        keyPlaceholder: 'AIza...', keyUrl: 'https://aistudio.google.com/app/apikey',
    },
    // type 'openai' = any OpenAI-compatible /chat/completions API. Endpoint, key and model are filled in at the settings.
    // To preset another one (fixed endpoint/model), copy this block under a new id.
    custom: {
        type: 'openai', label: 'OpenAI-compatible', keyStorage: 'custom_api_key', modelStorage: 'custom_ai_model', defaultModel: '',
        endpointStorage: 'custom_ai_endpoint', defaultEndpoint: '', endpointPlaceholder: 'https://api.openai.com/v1/chat/completions',
        effortStorage: 'custom_ai_effort', defaultEffort: 'off',
        keyPlaceholder: 'sk-...', keyUrl: '',
    },
};
const AI_PROVIDER_IDS = Object.keys(AI_PROVIDERS);
const AI_HISTORY_STORAGE = 'prompt_ai_history';
const AI_HISTORY_MAX = 50;
const AI_HEALTH_STORAGE = 'prompt_ai_key_health';
const AI_FORMATS = ['auto', 'cards', 'text', 'markdown', 'json'];
const AI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models';
const NON_TEXT_MODEL = /tts|image|embedding|veo|lyria|transcribe|aqa|robotics|computer-use|antigravity|deep-research/i; // hidden from the model list by default

const keyId = (apiKey) => apiKey.slice(-6); // short fingerprint so raw keys are never copied elsewhere

/** Normalise provider errors: Gemini / OpenAI style { error: { message } } or { message }. */
function aiHttpError(status, detail) {
    const message = detail?.error?.message || detail?.message || `HTTP ${status}`;
    const delay = detail?.error?.details?.find?.((d) => d.retryDelay)?.retryDelay; // e.g. "34s"
    return Object.assign(new Error(message), {
        status,
        retryAfter: delay ? parseFloat(delay) : null,
        dailyQuota: /PerDay/i.test(JSON.stringify(detail || {})),
        retryable: AI_RETRY_STATUS.includes(status) || /api key/i.test(message),
    });
}

/** fetch() that turns network/CORS failures into a readable, retryable error (so fallback providers still run). */
async function aiFetch(url, init, label) {
    try { return await fetch(url, init); } catch (err) {
        if (err.name === 'AbortError') throw err;
        throw Object.assign(new Error(`Tidak bisa terhubung ke ${label} (jaringan bermasalah atau diblokir CORS oleh browser).`), { retryable: true });
    }
}

/** Read a text/event-stream body and call onData(parsedJson) for every `data:` line. */
async function readSse(res, onData) {
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    const handle = (line) => {
        if (!line.startsWith('data:')) return;
        const json = line.slice(5).trim();
        if (json && json !== '[DONE]') onData(JSON.parse(json));
    };
    for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();
        lines.forEach(handle);
    }
    handle(buffer);
}

const isOpenAiProvider = (id) => AI_PROVIDERS[id]?.type === 'openai';

/** Accepts a full endpoint or just a base URL (https://host/v1); returns the /chat/completions URL, or '' when empty. */
function openAiChatUrl(endpoint) {
    const base = String(endpoint || '').trim().replace(/\/+$/, '');
    if (!base) return '';
    return /\/chat\/completions$/i.test(base) ? base : `${base}/chat/completions`;
}

/** Text of a non-streaming chat-completions result. */
const extractOpenAiText = (data) => {
    const content = data?.choices?.[0]?.message?.content;
    return Array.isArray(content) ? content.map((part) => part.text || '').join('') : (content || '');
};
