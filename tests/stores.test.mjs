import test from 'node:test';
import assert from 'node:assert/strict';
import { readGroupImages, lightboxStore } from '../themes/hugo-ywz/assets/js/stores/lightbox.js';
import { isInternalNavigation, pageLoader } from '../themes/hugo-ywz/assets/js/stores/page-loader.js';
import { navStore } from '../themes/hugo-ywz/assets/js/stores/nav.js';
import { themeStore } from '../themes/hugo-ywz/assets/js/stores/theme.js';
import { cookieConsentStore } from '../themes/hugo-ywz/assets/js/stores/cookie-consent.js';

function withGlobals(env, fn) {
    const keys = Object.keys(env); const saved = Object.fromEntries(keys.map(k => [k, globalThis[k]]));
    Object.assign(globalThis, env);
    try { return fn(); } finally { Object.assign(globalThis, saved); }
}
const body = () => ({ style: { overflow: '' } });

// ---------- page-loader ----------
const link = (href, { target = null, download = false } = {}) => ({
    href, getAttribute: (a) => (a === 'target' ? target : null), hasAttribute: (a) => a === 'download' && download,
});
const CTX = { origin: 'https://x.test', currentUrl: 'https://x.test/a/' };

test('isInternalNavigation: hanya link internal ke halaman lain tanpa hash/_blank/download', () => {
    assert.equal(isInternalNavigation(link('https://x.test/b/'), CTX), true);
    assert.equal(isInternalNavigation(link('https://other.test/'), CTX), false);
    assert.equal(isInternalNavigation(link('https://x.test/b/#top'), CTX), false);
    assert.equal(isInternalNavigation(link('https://x.test/a/'), CTX), false);
    assert.equal(isInternalNavigation(link('https://x.test/c/', { target: '_blank' }), CTX), false);
    assert.equal(isInternalNavigation(link('https://x.test/f.zip', { download: true }), CTX), false);
});

test('pageLoader: start → progres naik dan berhenti di 85, finish → 100 lalu reset', () => {
    const intervals = [], timeouts = [];
    withGlobals({
        setInterval: (fn) => { intervals.push(fn); return 1; }, clearInterval: () => {},
        setTimeout: (fn) => { timeouts.push(fn); return 1; }, window: { addEventListener() {} },
    }, () => {
        const pl = pageLoader();
        pl.start();
        assert.equal(pl.loading, true); assert.equal(pl.progress, 15);
        for (let i = 0; i < 30; i++) intervals[0]();
        assert.ok(pl.progress >= 85 && pl.progress < 85 + 20);
        const reached = pl.progress;
        intervals[0]();
        assert.equal(pl.progress, reached);               // sudah >= 85: berhenti naik
        pl.finish();
        assert.equal(pl.progress, 100);
        timeouts[0]();
        assert.equal(pl.loading, false); assert.equal(pl.progress, 0);
        assert.equal(pl.timer, null);
        pl.finish();                                       // tidak loading: tidak melakukan apa-apa
        assert.equal(pl.progress, 0);
    });
});

// ---------- lightbox ----------
test('readGroupImages: baca data-src/alt/desc, desc default kosong', () => {
    const els = [{ dataset: { src: 'a', alt: 'A', desc: 'x' } }, { dataset: { src: 'b', alt: 'B' } }];
    assert.deepEqual(readGroupImages(els), [{ src: 'a', alt: 'A', desc: 'x' }, { src: 'b', alt: 'B', desc: '' }]);
});

test('lightbox: grup > 1 gambar bisa next/prev melingkar, tanpa grup tidak bisa', () => {
    const els = ['a', 'b', 'c'].map(s => ({ dataset: { src: s, alt: s.toUpperCase() } }));
    withGlobals({ document: { body: body(), querySelectorAll: () => els } }, () => {
        const lb = lightboxStore();
        lb.open('b', 'B', '', 'g');
        assert.equal(lb.isOpen, true); assert.equal(lb.index, 1); assert.equal(lb.images.length, 3);
        lb.next(); assert.equal(lb.src, 'c');
        lb.next(); assert.equal(lb.src, 'a');
        lb.prev(); assert.equal(lb.src, 'c');
        lb.open('solo', 'S');                              // tanpa grup
        assert.deepEqual(lb.images, []);
        const before = lb.src; lb.next(); assert.equal(lb.src, before);
    });
});

test('lightbox: grup dengan satu elemen dianggap tanpa grup; close mengembalikan scroll body', () => {
    withGlobals({ document: { body: body(), querySelectorAll: () => [{ dataset: { src: 'a' } }] }, setTimeout: (fn) => fn() }, () => {
        const lb = lightboxStore();
        lb.open('a', 'A', '', 'g');
        assert.deepEqual(lb.images, []);
        assert.equal(document.body.style.overflow, 'hidden');
        lb.close();
        assert.equal(lb.isOpen, false); assert.equal(lb.src, ''); assert.equal(document.body.style.overflow, '');
    });
});

// ---------- nav / theme / cookie ----------
test('nav: toggle membuka dan mengunci scroll body, close melepas', () => {
    withGlobals({ document: { body: body() } }, () => {
        const nav = navStore();
        nav.toggle(); assert.equal(nav.isOpen, true); assert.equal(document.body.style.overflow, 'hidden');
        nav.toggle(); assert.equal(nav.isOpen, false); assert.equal(document.body.style.overflow, '');
        nav.toggle(); nav.close(); assert.equal(nav.isOpen, false); assert.equal(document.body.style.overflow, '');
    });
});

test('theme: awal dari class dark di <html>, toggle menyimpan pilihan dan mengubah class', () => {
    const cls = new Set(['dark']); const saved = {};
    withGlobals({
        document: { documentElement: { classList: { contains: c => cls.has(c), toggle: (c, f) => (f ? cls.add(c) : cls.delete(c)) } } },
        localStorage: { setItem: (k, v) => { saved[k] = v; } },
    }, () => {
        const th = themeStore();
        assert.equal(th.isDark, true);
        th.toggle(); assert.equal(th.isDark, false); assert.equal(saved.theme, 'light'); assert.equal(cls.has('dark'), false);
        th.toggle(); assert.equal(saved.theme, 'dark'); assert.equal(cls.has('dark'), true);
    });
});

test('cookieConsent: tampil setelah 2 detik bila belum setuju; accept menyimpan dan menyembunyikan', () => {
    const store = new Map(); const timers = [];
    withGlobals({
        localStorage: { getItem: k => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, v) },
        setTimeout: (fn, ms) => timers.push([fn, ms]),
    }, () => {
        const c = cookieConsentStore();
        c.init();
        assert.equal(c.isVisible, false);
        assert.deepEqual(timers.map(t => t[1]), [2000]);
        timers[0][0]();
        assert.equal(c.isVisible, true);
        c.accept();
        assert.equal(c.isVisible, false); assert.equal(store.get('cookie_consent_accepted'), 'true');
        const c2 = cookieConsentStore(); c2.init();      // sudah setuju: tidak menjadwalkan apa-apa
        assert.equal(timers.length, 1);
    });
});
