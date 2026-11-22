import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { runAfterInteraction } from '../themes/hugo-ywz/assets/js/lib/defer.js';
import { loadGoogleAnalytics } from '../themes/hugo-ywz/assets/js/third-party/analytics.js';
import { loadAdSense } from '../themes/hugo-ywz/assets/js/third-party/adsense.js';

// ---------- wrapper ----------
test('runAfterInteraction: tanpa fallback = hanya tunggu interaksi; fallbackMs > 1 diteruskan', () => {
    const saved = globalThis.Defer; const calls = [];
    globalThis.Defer = (...a) => calls.push(a);
    try {
        const fn = () => {};
        runAfterInteraction(fn);
        runAfterInteraction(fn, 0);
        runAfterInteraction(fn, 1);
        runAfterInteraction(fn, 5000);
        assert.deepEqual(calls.map(c => c.slice(1)), [[0, true], [0, true], [0, true], [0, 5000]]);
        assert.ok(calls.every(c => c[0] === fn));
    } finally { globalThis.Defer = saved; }
});

// ---------- contract: perilaku Defer.js ASLI yang ada di head.html ----------
const head = fs.readFileSync(new URL('../themes/hugo-ywz/layouts/_partials/baseof/head.html', import.meta.url), 'utf8');
const DEFER_SRC = head.match(/<script>(\/\*!@shinsenter\/defer\.js@[\d.]+\*\/.*?)<\/script>/s)?.[1];

function world(readyState = 'interactive') {
    const L = {}, timers = [];
    const ctx = {
        setTimeout: (fn, ms) => { timers.push([fn, ms]); return timers.length; },
        addEventListener: (n, cb) => { (L[n] = L[n] || []).push(cb); },
        removeEventListener: (n, cb) => { L[n] = (L[n] || []).filter(x => x !== cb); },
        document: { readyState, createElement: () => ({ setAttribute() {} }), querySelectorAll: () => [], head: { appendChild() {} } },
        Array, Math, RegExp, Object, Date, String,
    };
    ctx.window = ctx;
    vm.runInNewContext(DEFER_SRC, ctx);
    return {
        ctx,
        fire: (n) => (L[n] || []).slice().forEach(cb => cb({ type: n })),
        flush: () => timers.splice(0).forEach(([f]) => f()),
    };
}
function runs(fallbackMs, events, { complete = false } = {}) {
    const w = world(complete ? 'complete' : 'interactive');
    let count = 0;
    w.ctx.Defer(() => count++, 0, fallbackMs > 1 ? fallbackMs : true);
    if (!complete) { w.fire('load'); w.fire('pageshow'); }
    w.flush();
    events.forEach(ev => { w.fire(ev); w.flush(); });
    return count;
}

test('head.html memuat Defer.js yang bisa dijalankan', () => {
    assert.ok(DEFER_SRC, 'script Defer.js tidak ditemukan di head.html');
});

test('Defer.js: hanya keydown/mousemove/mousedown/touchstart/wheel yang memicu; scroll dan mouseover tidak', () => {
    for (const ev of ['keydown', 'mousemove', 'mousedown', 'touchstart', 'wheel']) assert.equal(runs(0, [ev]), 1, ev);
    for (const ev of ['scroll', 'mouseover']) assert.equal(runs(0, [ev]), 0, ev);
});

test('Defer.js: tanpa interaksi tidak jalan; dengan fallback jalan sendiri setelah load; fn hanya sekali', () => {
    assert.equal(runs(0, []), 0);
    assert.equal(runs(5000, []), 1);
    assert.equal(runs(5000, ['mousemove', 'keydown']), 1);
    assert.equal(runs(0, ['mousemove', 'keydown', 'wheel']), 1);
});

test('Defer.js: halaman sudah complete saat dipanggil = jalan langsung (setTimeout)', () => {
    assert.equal(runs(0, [], { complete: true }), 1);
});

// ---------- loader ----------
function fakeDom({ firstScript } = {}) {
    const ops = [];
    const doc = {
        createElement: (tag) => ({ tag }),
        head: { appendChild: (el) => ops.push(['head', el]) },
        getElementsByTagName: () => (firstScript ? [firstScript] : []),
    };
    return { ops, doc };
}
function withGlobals(env, fn) {
    const saved = { document: globalThis.document, window: globalThis.window };
    globalThis.document = env.doc; globalThis.window = env.win || {};
    try { return fn(); } finally { globalThis.document = saved.document; globalThis.window = saved.window; }
}

test('loadGoogleAnalytics: tambah gtag.js dan isi dataLayer (js + config)', () => {
    const env = fakeDom(); env.win = {};
    withGlobals(env, () => loadGoogleAnalytics('G-ABC'));
    const [, el] = env.ops[0];
    assert.equal(el.src, 'https://www.googletagmanager.com/gtag/js?id=G-ABC');
    assert.equal(el.async, true);
    const dl = env.win.dataLayer.map(a => Array.from(a));
    assert.equal(dl[0][0], 'js'); assert.ok(dl[0][1] instanceof Date);
    assert.deepEqual(dl[1], ['config', 'G-ABC']);
});

test('loadAdSense: sisipkan sebelum <script> pertama bila ada, kalau tidak ke head', () => {
    const inserted = [];
    const first = { parentNode: { insertBefore: (a, b) => inserted.push([a, b]) } };
    let env = fakeDom({ firstScript: first });
    withGlobals(env, () => loadAdSense('ca-pub-1'));
    assert.equal(inserted.length, 1);
    const ad = inserted[0][0];
    assert.equal(ad.src, 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1');
    assert.equal(ad.crossOrigin, 'anonymous'); assert.equal(ad.async, true); assert.equal(inserted[0][1], first);
    assert.equal(env.ops.length, 0);

    env = fakeDom({ firstScript: { parentNode: null } });
    withGlobals(env, () => loadAdSense('ca-pub-2'));
    assert.equal(env.ops.length, 1);
    env = fakeDom();
    withGlobals(env, () => loadAdSense('ca-pub-3'));
    assert.equal(env.ops.length, 1);
});
