import test from 'node:test';
import assert from 'node:assert/strict';
import { attachWeb3Form } from '../themes/hugo-ywz/assets/js/lib/web3form.js';

const CLASSES = { wait: 'w', success: 's', error: 'e' };
const MESSAGES = { success: 'OK!', error: 'Gagal.' };
const tick = () => new Promise(r => setImmediate(r));

function setup(fetchImpl, extra = {}) {
    const calls = { fetch: [], timers: [], reset: 0, errors: [] };
    const result = { style: {}, textContent: '', className: '' };
    let submit;
    const form = { addEventListener: (e, cb) => { submit = cb; }, reset() { calls.reset++; }, fields: [['name', 'Budi'], ['access_key', 'k']] };
    const saved = { fetch: globalThis.fetch, FormData: globalThis.FormData, setTimeout: globalThis.setTimeout, error: console.error };
    globalThis.FormData = class { constructor(f) { this.e = f.fields; } [Symbol.iterator]() { return this.e[Symbol.iterator](); } };
    globalThis.fetch = async (url, opts) => { calls.fetch.push([url, opts]); return fetchImpl(); };
    globalThis.setTimeout = (fn, ms) => { calls.timers.push([fn, ms]); };
    console.error = (...a) => calls.errors.push(a);
    attachWeb3Form({ form, result, messages: MESSAGES, classes: CLASSES, hideAfterMs: 1234, ...extra });
    const restore = () => Object.assign(globalThis, { fetch: saved.fetch, FormData: saved.FormData, setTimeout: saved.setTimeout }) && (console.error = saved.error);
    return { calls, result, form, restore, send: () => submit({ preventDefault() { calls.prevented = true; } }) };
}
const json = (status, body) => async () => ({ status, json: async () => body });

test('submit sukses: kirim JSON ke Web3Forms, tampil pesan sukses, form di-reset', async (t) => {
    const s = setup(json(200, { success: true })); t.after(s.restore);
    s.send();
    assert.equal(s.calls.prevented, true);
    assert.equal(s.result.textContent, 'Mohon tunggu sebentar...');
    assert.equal(s.result.className, 'w');
    await tick(); await tick();
    const [url, opts] = s.calls.fetch[0];
    assert.equal(url, 'https://api.web3forms.com/submit');
    assert.equal(opts.method, 'POST');
    assert.equal(opts.body, '{"name":"Budi","access_key":"k"}');
    assert.equal(s.result.textContent, 'OK!');
    assert.equal(s.result.className, 's');
    assert.equal(s.calls.reset, 1);
});

test('galat API: pakai message dari API, kalau tidak ada pakai pesan default, galat dicatat', async (t) => {
    let s = setup(json(400, { message: 'Key salah' })); t.after(s.restore);
    s.send(); await tick(); await tick();
    assert.equal(s.result.textContent, 'Key salah');
    assert.equal(s.result.className, 'e');
    assert.equal(s.calls.errors.length, 1);
    s.restore();
    s = setup(json(500, {}));
    s.send(); await tick(); await tick();
    assert.equal(s.result.textContent, 'Gagal.');
    s.restore();
});

test('jaringan putus atau respons bukan JSON: pesan jaringan', async (t) => {
    let s = setup(async () => { throw new Error('net'); }); t.after(s.restore);
    s.send(); await tick(); await tick();
    assert.equal(s.result.textContent, 'Terjadi kesalahan jaringan! Coba lagi.');
    assert.equal(s.calls.reset, 1);
    s.restore();
    s = setup(async () => ({ status: 200, json: async () => { throw new SyntaxError('x'); } }));
    s.send(); await tick(); await tick();
    assert.equal(s.result.textContent, 'Terjadi kesalahan jaringan! Coba lagi.');
    s.restore();
});

test('pesan dihapus setelah hideAfterMs; onStart dan afterHide dipanggil', async (t) => {
    const order = [];
    const s = setup(json(200, {}), { onStart: () => order.push('start'), afterHide: () => order.push('hide') }); t.after(s.restore);
    s.send(); await tick(); await tick();
    assert.deepEqual(s.calls.timers.map(x => x[1]), [1234]);
    s.calls.timers[0][0]();
    assert.equal(s.result.textContent, '');
    assert.deepEqual(order, ['start', 'hide']);
});
