/* ==========================================================================
   AI output formatters (JSON pretty-print + highlight, minimal Markdown)
   ========================================================================== */

const stripFence = (text) => text.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');

/**
 * Parse JSON that may still be streaming or got cut off: closes open strings/brackets and drops dangling keys/commas.
 * Returns null if it doesn't look like JSON, else { data, partial } (partial = strict parse failed, data was repaired).
 */
function parseJsonLoose(text) {
    const cleaned = stripFence(text);
    if (!/^[\[{]/.test(cleaned)) return null;
    try { return { data: JSON.parse(cleaned), partial: false }; } catch { /* repair below */ }

    const stack = [];
    let inString = false;
    let escaped = false;
    for (const ch of cleaned) {
        if (inString) { if (escaped) escaped = false; else if (ch === '\\') escaped = true; else if (ch === '"') inString = false; }
        else if (ch === '"') inString = true;
        else if (ch === '{' || ch === '[') stack.push(ch);
        else if (ch === '}' || ch === ']') stack.pop();
    }
    let head = cleaned;
    if (inString) head = `${escaped ? head.slice(0, -1) : head.replace(/\\u[0-9a-fA-F]{0,3}$/, '')}"`;
    const closers = stack.reverse().map((c) => (c === '{' ? '}' : ']')).join('');
    const candidates = [
        head,
        head.replace(/,\s*$/, ''),                                   // trailing comma
        head.replace(/,?\s*"(?:\\.|[^\\"])*"\s*:\s*$/, ''),          // key without value
        head.replace(/,?\s*"(?:\\.|[^\\"])*"\s*$/, ''),              // key without colon
    ];
    for (const candidate of candidates) {
        try { return { data: JSON.parse(candidate + closers), partial: true }; } catch { /* next */ }
    }
    return null;
}

const isPlainObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

/** "song_style" / "songStyle" -> "Song style" */
const humanize = (key) => {
    const words = String(key).replace(/[_-]+/g, ' ').replace(/([a-z0-9])([A-Z])/g, '$1 $2').trim().toLowerCase();
    return words.charAt(0).toUpperCase() + words.slice(1);
};

function toField(key, value) {
    const label = humanize(key);
    if (Array.isArray(value) && value.length && value.every((v) => v === null || typeof v !== 'object')) {
        const items = value.map(String);
        return items.every((i) => i.length <= 30)
            ? { key, label, type: 'chips', items, text: items.join(', ') }
            : { key, label, type: 'text', text: items.join('\n') };
    }
    if (value !== null && typeof value === 'object') return { key, label, type: 'code', text: JSON.stringify(value, null, 2) };
    return { key, label, type: 'text', text: String(value) };
}

function objectCard(obj) {
    const entries = Object.entries(obj);
    const titleKey = entries.find(([k, v]) => /^(title|name|judul|nama)$/i.test(k) && typeof v === 'string' && v.trim())?.[0];
    const all = entries.map(([k, v]) => toField(k, v));
    return {
        title: titleKey ? obj[titleKey] : '',
        fields: all.filter((f) => f.key !== titleKey),
        text: all.map((f) => `${f.label}:\n${f.text}`).join('\n\n'), // what "Salin kartu" copies
    };
}

/** Turn parsed JSON into cards: array of objects, array of scalars, one object, or { "anything": [...] }. Null if it doesn't fit. */
function buildCards(data) {
    let heading = '';
    if (isPlainObject(data)) {
        const keys = Object.keys(data);
        if (keys.length === 1 && Array.isArray(data[keys[0]])) { heading = humanize(keys[0]); data = data[keys[0]]; }
        else data = [data];
    }
    if (!Array.isArray(data) || !data.length) return null;
    if (!(data.every(isPlainObject) || data.every((v) => v === null || typeof v !== 'object'))) return null;

    const cards = data
        .map((item) => (isPlainObject(item)
            ? objectCard(item)
            : { title: '', fields: [{ key: '', label: '', type: 'text', text: String(item) }], text: String(item) }))
        .filter((card) => card.fields.length);
    return cards.length ? { heading, cards } : null;
}

/** Highlight an already pretty-printed JSON string; only token text is escaped (the rest is punctuation/whitespace). */
function highlightJson(pretty) {
    const tokens = /("(?:\\.|[^\\"])*")(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
    return pretty.replace(tokens, (match, str, colon) => {
        const color = str
            ? (colon ? 'text-indigo-600 dark:text-indigo-400' : 'text-emerald-600 dark:text-emerald-400')
            : match === 'null' ? 'text-gray-400'
            : /^(true|false)$/.test(match) ? 'text-amber-600 dark:text-amber-400'
            : 'text-sky-600 dark:text-sky-400';
        return `<span class="${color}">${escapeHtml(str || match)}</span>${colon || ''}`;
    });
}

/** Small safe Markdown renderer: headings, bold/italic, inline + fenced code, lists, quotes, rules, links. */
function renderMarkdown(text) {
    const codeBlocks = [];
    const source = escapeHtml(text).replace(/```[^\n]*\n([\s\S]*?)(?:```|$)/g, (_, code) => {
        codeBlocks.push(`<pre class="mb-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 font-mono text-xs overflow-x-auto whitespace-pre">${code}</pre>`);
        return `\u0000${codeBlocks.length - 1}\u0000`;
    });
    const inline = (t) => t
        .replace(/`([^`]+)`/g, '<code class="px-1 rounded bg-gray-100 dark:bg-gray-800 font-mono text-[0.9em]">$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 underline">$1</a>');

    const out = [];
    let para = [];
    let list = null;
    const flushPara = () => { if (para.length) out.push(`<p class="mb-3">${inline(para.join(' '))}</p>`); para = []; };
    const flushList = () => {
        if (!list) return;
        const style = list.tag === 'ul' ? 'list-disc' : 'list-decimal';
        out.push(`<${list.tag} class="mb-3 pl-5 space-y-1 ${style}">${list.items.map((i) => `<li>${inline(i)}</li>`).join('')}</${list.tag}>`);
        list = null;
    };

    for (const line of source.split('\n')) {
        let m;
        if ((m = line.match(/^\u0000(\d+)\u0000$/))) { flushPara(); flushList(); out.push(codeBlocks[m[1]]); }
        else if ((m = line.match(/^(#{1,6})\s+(.*)/))) { flushPara(); flushList(); out.push(`<p class="${m[1].length <= 2 ? 'text-base' : 'text-sm'} font-bold mt-4 mb-2">${inline(m[2])}</p>`); }
        else if (/^\s*(---|\*\*\*)\s*$/.test(line)) { flushPara(); flushList(); out.push('<hr class="my-3 border-gray-200 dark:border-gray-700">'); }
        else if ((m = line.match(/^&gt;\s?(.*)/))) { flushPara(); flushList(); out.push(`<blockquote class="mb-3 pl-3 border-l-2 border-indigo-300 dark:border-indigo-700 text-gray-500 dark:text-gray-400">${inline(m[1])}</blockquote>`); }
        else if ((m = line.match(/^\s*([-*+]|\d+\.)\s+(.*)/))) {
            const tag = /\d/.test(m[1]) ? 'ol' : 'ul';
            if (!list || list.tag !== tag) { flushPara(); flushList(); list = { tag, items: [] }; }
            list.items.push(m[2]);
        }
        else if (!line.trim()) { flushPara(); flushList(); }
        else { flushList(); para.push(line.trim()); }
    }
    flushPara(); flushList();
    return out.join('');
}
