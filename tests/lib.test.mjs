import test from 'node:test';
import assert from 'node:assert/strict';
import { escapeHtml, escapeRegExp } from '../themes/hugo-ywz/assets/js/lib/html.js';
import { formatRupiah } from '../themes/hugo-ywz/assets/js/lib/format.js';
import { nextIndex, prevIndex } from '../themes/hugo-ywz/assets/js/lib/cycle.js';
import { fetchJson, fetchJsonOrNull } from '../themes/hugo-ywz/assets/js/lib/http.js';

test('escapeHtml: lima karakter khusus, nilai non-string dikonversi', () => {
    assert.equal(escapeHtml(`<a href="x" title='y'>&</a>`), '&lt;a href=&quot;x&quot; title=&#39;y&#39;&gt;&amp;&lt;/a&gt;');
    assert.equal(escapeHtml(42), '42');
    assert.equal(escapeHtml('aman'), 'aman');
});

test('escapeRegExp: hasilnya cocok persis dengan teks aslinya', () => {
    for (const s of ['c++', 'a.b', '(x)', '[y]', 'a-b/c', '1+1=2?', '^$|\\']) {
        assert.ok(new RegExp(escapeRegExp(s)).test(`xx${s}yy`), s);
    }
});

test('formatRupiah: tanpa desimal, pemisah ribuan titik', () => {
    const out = formatRupiah(150000).replace(/\s/g, ' ');
    assert.match(out, /^Rp ?150\.000$/);
    assert.match(formatRupiah(0).replace(/\s/g, ' '), /^Rp ?0$/);
});

test('nextIndex / prevIndex berputar di ujung', () => {
    assert.equal(nextIndex(2, 3), 0);
    assert.equal(nextIndex(0, 3), 1);
    assert.equal(prevIndex(0, 3), 2);
    assert.equal(prevIndex(2, 3), 1);
});

test('fetchJson: JSON untuk respons ok, Error("HTTP <status>") untuk selain itu', async () => {
    const real = globalThis.fetch;
    try {
        globalThis.fetch = async () => ({ ok: true, json: async () => ({ a: 1 }) });
        assert.deepEqual(await fetchJson('/x'), { a: 1 });
        globalThis.fetch = async () => ({ ok: false, status: 404, json: async () => ({}) });
        await assert.rejects(() => fetchJson('/x'), /HTTP 404/);
    } finally { globalThis.fetch = real; }
});

test('fetchJsonOrNull: null untuk jaringan gagal atau non-2xx, JSON untuk ok, parse error tetap melempar', async () => {
    const real = globalThis.fetch;
    try {
        globalThis.fetch = async () => { throw new Error('net'); };
        assert.equal(await fetchJsonOrNull('/x'), null);
        globalThis.fetch = async () => ({ ok: false, status: 404, json: async () => ({ a: 1 }) });
        assert.equal(await fetchJsonOrNull('/x'), null);
        globalThis.fetch = async () => ({ ok: true, json: async () => ({ a: 1 }) });
        assert.deepEqual(await fetchJsonOrNull('/x'), { a: 1 });
        globalThis.fetch = async () => ({ ok: true, json: async () => { throw new SyntaxError('bad'); } });
        await assert.rejects(() => fetchJsonOrNull('/x'), SyntaxError);
    } finally { globalThis.fetch = real; }
});
