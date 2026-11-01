/* ==========================================================================
   Pure helpers (no component state)
   ========================================================================== */

const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const highlight = (value) => `<span class="${HIGHLIGHT_CLASS}">${escapeHtml(value)}</span>`;
const includesQuery = (query, ...fields) => fields.some((f) => f && f.toLowerCase().includes(query));

/** Size of a text: characters, words and an estimated token count. */
function formatTextStats(text = '') {
    const trimmed = text.trim();
    const chars = [...text].length;
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const tokens = Math.ceil(chars / TOKEN_CHARS_RATIO);
    const fmt = (n) => n.toLocaleString('id-ID');
    return `${fmt(chars)} karakter, ${fmt(words)} kata, ≈ ${fmt(tokens)} token`;
}

/** Category slug for URLs: explicit alias/slug from index.json, else the folder name without its order prefix ("01-karakter" -> "karakter"). */
function getCategorySlug(category) {
    const folder = category.category || '';
    return category.alias || category.slug || folder.replace(/^\d+-/, '') || folder;
}

/** "/animasi/15-kendaraan/kendaraan-extract-wheel/index.json" -> "kendaraan-extract-wheel" */
function getPromptSlug(jsonUrl = '') {
    const segments = jsonUrl.split('?')[0].replace(/\.json$/i, '').replace(/\/index$/i, '').split('/').filter(Boolean);
    return segments.pop() || jsonUrl;
}

/** localStorage can throw (private mode, blocked storage); fail soft. */
const storage = {
    get: (key, fallback = '') => { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } },
    /** Returns false when the write failed (e.g. quota exceeded). */
    set: (key, value) => { try { localStorage.setItem(key, value); return true; } catch { return false; } },
    remove: (key) => { try { localStorage.removeItem(key); } catch { /* ignore */ } },
};

const loadJson = (key, fallback) => { try { return JSON.parse(storage.get(key)) ?? fallback; } catch { return fallback; } };
/**
 * Choice databases, from _index.md (global) or a prompt's own front matter (`choice_databases`).
 * Accepts per database either a plain list or
 * { title, description, items }. An item is a string or { value, label?, group?, description? }.
 * Names are lower-cased because Hugo lower-cases front-matter keys.
 */
const CHOICE_UNGROUPED = '__none__'; // filter key for items without a group

function normalizeChoiceDbs(raw) {
    const out = {};
    if (raw === null || typeof raw !== 'object' || Array.isArray(raw)) return out;
    for (const [name, def] of Object.entries(raw)) {
        const isList = Array.isArray(def);
        const list = isList ? def : def?.items;
        if (!Array.isArray(list)) continue;
        const seen = new Set();
        const items = [];
        for (const it of list) {
            const plain = it !== null && typeof it === 'object' ? it : { value: it };
            const value = plain.value ?? plain.label ?? plain.name;
            if (value === undefined || value === null || String(value).trim() === '' || seen.has(String(value))) continue;
            seen.add(String(value));
            items.push({ value: String(value), label: String(plain.label ?? value), group: String(plain.group ?? ''), description: String(plain.description ?? '') });
        }
        out[name.toLowerCase()] = {
            title: (!isList && def.title) ? String(def.title) : name.charAt(0).toUpperCase() + name.slice(1).replace(/[_-]+/g, ' '),
            description: isList ? '' : String(def.description || ''),
            items,
        };
    }
    return out;
}

const splitList = (text) => [...new Set(String(text).split(/[\s,;]+/).filter(Boolean))];

/**
 * Resource links from _index.md (global) or a prompt's front matter (`resources`): [{ title, description, url, icon }].
 * Drops entries without a url, duplicates (the url is the list key) and any scheme other than http(s), so a
 * `javascript:` or `data:` link can never reach an href. Relative urls are kept.
 */
function normalizeResources(raw) {
    if (!Array.isArray(raw)) return [];
    const seen = new Set();
    const out = [];
    for (const item of raw) {
        if (item === null || typeof item !== 'object') continue;
        const url = String(item.url ?? '').trim();
        const scheme = /^([a-z][a-z0-9+.-]*):/i.exec(url);
        if (!url || (scheme && !/^https?$/i.test(scheme[1])) || seen.has(url)) continue;
        seen.add(url);
        out.push({ url, title: String(item.title ?? url), description: String(item.description ?? ''), icon: String(item.icon ?? '') });
    }
    return out;
}

async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return res.json();
}

/** Unique (case-insensitive) [placeholder] names found in a template, minus reserved keys. */
function extractPlaceholders(text, reserved = []) {
    const seen = new Set(reserved);
    return [...(text || '').matchAll(PLACEHOLDER_PATTERN)]
        .map((m) => m[1].trim())
        .filter((name) => {
            const key = name.toLowerCase();
            if (!name || seen.has(key)) return false;
            seen.add(key);
            return true;
        });
}

/**
 * Fill [placeholders] in a template.
 *  - replacements: case-insensitive reserved keys  { key: value }
 *  - params/values/prefix: custom placeholders (case-sensitive) read from values[prefix + name]
 *  - styled: HTML-escape everything and highlight custom values (for x-html); otherwise plain text.
 */
function fillTemplate(text, { replacements = {}, params = [], values = {}, prefix = '', styled = false } = {}) {
    let output = styled ? escapeHtml(text) : text;
    const format = styled ? escapeHtml : (v) => v;

    for (const [key, value] of Object.entries(replacements)) {
        output = output.replace(new RegExp(`\\[${escapeRegExp(key)}\\]`, 'gi'), () => format(value));
    }
    for (const param of params) {
        const value = values[prefix + param] || `[${param}]`;
        // Case-insensitive: Hugo lowercases front-matter keys, so "WAJAH" arrives as "wajah".
        output = output.replace(new RegExp(`\\[${escapeRegExp(param)}\\]`, 'gi'), () => (styled ? highlight(value) : value));
    }
    return output;
}
