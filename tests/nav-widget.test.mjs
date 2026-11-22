import test from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { formatNavClock, greetingFor } from '../themes/hugo-ywz/assets/js/nav-widget/clock.js';
import { CACHE_KEY, CACHE_TTL_MS, forecastUrl, readFreshCache, weatherIcon, writeCache } from '../themes/hugo-ywz/assets/js/nav-widget/weather.js';
import { runEntry } from './helpers/load-entry.mjs';

const ENTRY = fileURLToPath(new URL('../themes/hugo-ywz/assets/js/nav-widget/index.js', import.meta.url));

// ---------------- murni ----------------
test('greetingFor: batas jam', () => {
    const at = (h) => greetingFor(h);
    assert.deepEqual([4, 5, 10, 11, 14, 15, 18, 19, 23, 0].map(at),
        ['MALAM', 'PAGI', 'PAGI', 'SIANG', 'SIANG', 'SORE', 'SORE', 'MALAM', 'MALAM', 'MALAM']);
});

test('formatNavClock: jam 24-jam dengan titik dua, tanggal Indonesia, sapaan', () => {
    const d = new Date(2026, 0, 7, 14, 5); // waktu lokal proses
    const c = formatNavClock(d);
    assert.equal(c.time, '14:05');
    assert.match(c.date, /7 Januari 2026/);
    assert.equal(c.greeting, 'SIANG');
});

test('weatherIcon: aturan bawah menimpa atas', () => {
    assert.equal(weatherIcon(0), '☀️');
    assert.equal(weatherIcon(2), '⛅');
    assert.equal(weatherIcon(46), '🌫️');
    assert.equal(weatherIcon(61), '🌧️');
    assert.equal(weatherIcon(81), '🌦️');
    assert.equal(weatherIcon(95), '⚡');
    assert.equal(weatherIcon(99), '⚡');
});

test('forecastUrl: koordinat dan zona waktu', () => {
    assert.equal(forecastUrl(-6.4, 106.8),
        'https://api.open-meteo.com/v1/forecast?latitude=-6.4&longitude=106.8&current_weather=true&timezone=Asia%2FJakarta');
});

test('cache cuaca: segar dipakai, kedaluwarsa/korup/kosong tidak', () => {
    const store = (v) => ({ getItem: () => v });
    const now = 10_000_000;
    const data = { weathercode: 1, temperature: 20 };
    assert.deepEqual(readFreshCache(store(JSON.stringify({ data, timestamp: now - 1000 })), now), data);
    assert.equal(readFreshCache(store(JSON.stringify({ data, timestamp: now - CACHE_TTL_MS })), now), null);
    assert.equal(readFreshCache(store('{rusak'), now), null);          // perbaikan: dulu melempar
    assert.equal(readFreshCache(store(null), now), null);
    const saved = {}; writeCache({ setItem: (k, v) => { saved[k] = v; } }, data, now);
    assert.deepEqual(JSON.parse(saved[CACHE_KEY]), { data, timestamp: now });
});

// ---------------- entry: perilaku hasil perbaikan ----------------
function setup({ cache, fetchImpl, hidden = false, withAlpine = false, navOpen = false } = {}) {
    const log = { intervals: [], fetch: [], errors: [], listeners: {}, effects: [] };
    const els = {};
    for (const id of ['nav-time', 'nav-date', 'nav-greeting', 'nav-weather', 'weather-temp', 'weather-icon'])
        els[id] = { innerText: '', classList: { remove() {}, add() {} } };
    const doc = {
        hidden,
        getElementById: id => els[id],
        addEventListener: (e, cb) => { (log.listeners[e] = log.listeners[e] || []).push(cb); },
    };
    const store = new Map(cache ? [[CACHE_KEY, cache]] : []);
    let deferCb = null;
    const nav = { isOpen: navOpen };
    const globals = {
        document: doc,
        window: withAlpine ? { Alpine: null } : {},
        localStorage: { getItem: k => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, v) },
        setInterval: (fn, ms) => { log.intervals.push([fn, ms]); },
        console: { error: (...a) => log.errors.push(a) },
        fetch: async (u) => { log.fetch.push(u); return fetchImpl(); },
        Defer: { dom: (sel, d, c, cb) => { deferCb = cb; } },
    };
    if (withAlpine) {
        globals.Alpine = { effect: (fn) => { log.effects.push(fn); fn(); }, store: () => nav };
        globals.window.Alpine = globals.Alpine;
    }
    runEntry(ENTRY, { params: { weatherLatitude: 1, weatherLongitude: 2 }, globals });
    log.listeners.DOMContentLoaded?.forEach(cb => cb());
    return { log, els, doc, nav, store, trigger: () => deferCb({}) };
}
const ok = (weather) => async () => ({ ok: true, status: 200, json: async () => ({ current_weather: weather }) });
const tick = () => new Promise(r => setImmediate(r));

test('start hanya sekali walau Defer.dom memanggil callback untuk dua elemen (interval tidak ganda)', async () => {
    const s = setup({ fetchImpl: ok({ weathercode: 0, temperature: 20 }) });
    s.trigger(); s.trigger();
    await tick();
    assert.deepEqual(s.log.intervals.map(i => i[1]), [60000, 1800000]);
    assert.equal(s.log.fetch.length, 1);
    assert.equal(s.log.fetch[0], forecastUrl(1, 2));
});

test('tab tersembunyi: interval tidak memperbarui; kembali terlihat: langsung diperbarui', async () => {
    const s = setup({ fetchImpl: ok({ weathercode: 0, temperature: 20 }) });
    s.trigger(); await tick();
    s.els['nav-time'].innerText = 'x';
    s.doc.hidden = true;
    s.log.intervals[0][0]();
    assert.equal(s.els['nav-time'].innerText, 'x');
    s.doc.hidden = false;
    s.log.listeners.visibilitychange.forEach(cb => cb());
    assert.notEqual(s.els['nav-time'].innerText, 'x');
});

test('cache korup tidak lagi mematikan widget: ambil ulang dari API', async () => {
    const s = setup({ cache: '{rusak', fetchImpl: ok({ weathercode: 3, temperature: 27.6 }) });
    s.trigger(); await tick(); await tick();
    assert.equal(s.log.fetch.length, 1);
    assert.equal(s.els['weather-temp'].innerText, '28°C');
    assert.equal(s.els['weather-icon'].innerText, '⛅');
});

test('respons bukan 2xx: galat dicatat, cache TIDAK ditulis, tampilan tidak berubah', async () => {
    const s = setup({ fetchImpl: async () => ({ ok: false, status: 503, json: async () => ({}) }) });
    s.trigger(); await tick(); await tick();
    assert.equal(s.log.errors.length, 1);
    assert.equal(s.store.has(CACHE_KEY), false);
    assert.equal(s.els['weather-temp'].innerText, '');
});

test('jam disegarkan saat menu dibuka: efek Alpine dipasang langsung bila Alpine sudah ada', () => {
    const s = setup({ withAlpine: true, navOpen: true, fetchImpl: ok({ weathercode: 0, temperature: 20 }) });
    assert.equal(s.log.effects.length, 1);
    assert.notEqual(s.els['nav-time'].innerText, '');       // efek pertama langsung memperbarui jam karena nav terbuka
});

test('tanpa Alpine saat load: efek dipasang lewat alpine:init', () => {
    const s = setup({ fetchImpl: ok({ weathercode: 0, temperature: 20 }) });
    assert.equal(s.log.listeners['alpine:init']?.length, 1);
});
