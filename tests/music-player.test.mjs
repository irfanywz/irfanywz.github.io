import test from 'node:test';
import assert from 'node:assert/strict';
import {
    LOOP, filterTracks, flattenCategories, formatTime, indexAfterReorder,
    loopIconClass, shuffled, volumeIconClass,
} from '../themes/hugo-ywz/assets/js/components/music-player/playlist.js';
import { readSettings, writeSettings } from '../themes/hugo-ywz/assets/js/components/music-player/settings.js';
import { ensureYouTubeApi } from '../themes/hugo-ywz/assets/js/components/music-player/youtube.js';

const tracks = [
    { youtubeId: 'a', searchText: 'lagu satu rock' },
    { youtubeId: 'b', searchText: 'lagu dua pop' },
    { youtubeId: 'c', searchText: 'lagu tiga pop' },
];

// ---------------- playlist.js ----------------
test('flattenCategories: gabung semua kategori, searchText lowercase tanpa nilai kosong', () => {
    const out = flattenCategories([
        { category_title: 'Rock', playlist: [{ title: 'Satu', artist: 'Band', youtubeId: 'a' }, { title: 'Dua', youtubeId: 'b' }] },
        { category_title: 'Kosong' },
    ]);
    assert.equal(out.length, 2);
    assert.equal(out[0].categoryTitle, 'Rock');
    assert.equal(out[0].searchText, 'satu band rock');
    assert.equal(out[1].searchText, 'dua rock');
});

test('shuffled: salinan baru berisi elemen yang sama, input tidak berubah, bisa deterministik', () => {
    const input = [1, 2, 3, 4, 5];
    const out = shuffled(input, () => 0);
    assert.deepEqual(input, [1, 2, 3, 4, 5]);
    assert.notEqual(out, input);
    assert.deepEqual([...out].sort(), [1, 2, 3, 4, 5]);
    assert.deepEqual(out, shuffled(input, () => 0));
});

test('formatTime: m:ss, nilai tidak valid jadi 0:00', () => {
    assert.equal(formatTime(0), '0:00');
    assert.equal(formatTime(NaN), '0:00');
    assert.equal(formatTime(75), '1:15');
    assert.equal(formatTime(3599), '59:59');
});

test('filterTracks: kosong = array yang sama, query dicocokkan case-insensitive', () => {
    assert.equal(filterTracks(tracks, '   '), tracks);
    assert.deepEqual(filterTracks(tracks, ' POP ').map(t => t.youtubeId), ['b', 'c']);
    assert.deepEqual(filterTracks(tracks, 'xyz'), []);
});

test('indexAfterReorder: ikut lagu yang sama, 0 bila tidak ada', () => {
    assert.equal(indexAfterReorder(tracks, 'c'), 2);
    assert.equal(indexAfterReorder(tracks, 'zzz'), 0);
});

test('ikon volume dan loop', () => {
    assert.equal(volumeIconClass({ isMuted: true, volume: 90 }), 'icon-[ri--volume-mute-fill]');
    assert.equal(volumeIconClass({ isMuted: false, volume: 0 }), 'icon-[ri--volume-mute-fill]');
    assert.equal(volumeIconClass({ isMuted: false, volume: 49 }), 'icon-[ri--volume-down-fill]');
    assert.equal(volumeIconClass({ isMuted: false, volume: 50 }), 'icon-[ri--volume-up-fill]');
    assert.equal(loopIconClass(LOOP.ONE), 'icon-[ri--repeat-one-fill]');
    assert.equal(loopIconClass(LOOP.ALL), 'icon-[ri--repeat-2-fill]');
    assert.equal(loopIconClass(LOOP.OFF), 'icon-[ri--repeat-2-line]');
});

// ---------------- settings.js ----------------
const DEFAULTS = { volume: 80, isMuted: false, loopMode: 0, isShuffled: false };
const fakeStorage = (initial) => {
    const m = new Map(Object.entries(initial || {}));
    return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, v), m };
};
const silenceWarn = (fn) => { const w = console.warn; console.warn = () => {}; try { return fn(); } finally { console.warn = w; } };

test('readSettings: belum ada = null; sebagian kunci diisi default', () => {
    assert.equal(readSettings('k', DEFAULTS, fakeStorage()), null);
    const s = readSettings('k', DEFAULTS, fakeStorage({ k: '{"volume":30,"loopMode":2}' }));
    assert.deepEqual(s, { volume: 30, isMuted: false, loopMode: 2, isShuffled: false });
});

test('readSettings: JSON rusak atau storage error tidak melempar, hasil null', () => {
    assert.equal(silenceWarn(() => readSettings('k', DEFAULTS, fakeStorage({ k: '{bad' }))), null);
    const broken = { getItem() { throw new Error('denied'); } };
    assert.equal(silenceWarn(() => readSettings('k', DEFAULTS, broken)), null);
});

test('writeSettings: menyimpan JSON; error storage ditelan', () => {
    const st = fakeStorage();
    writeSettings('k', { volume: 10 }, st);
    assert.equal(st.m.get('k'), '{"volume":10}');
    const full = { setItem() { throw new Error('quota'); } };
    assert.doesNotThrow(() => silenceWarn(() => writeSettings('k', {}, full)));
});

// ---------------- youtube.js ----------------
const withGlobals = (win, doc, fn) => {
    const prev = { window: globalThis.window, document: globalThis.document };
    globalThis.window = win; globalThis.document = doc;
    try { return fn(); } finally { globalThis.window = prev.window; globalThis.document = prev.document; }
};
const fakeDoc = (existing = {}) => {
    const appended = [];
    return { appended, getElementById: id => existing[id] || null, createElement: () => ({}), head: { appendChild: t => appended.push(t) } };
};

test('ensureYouTubeApi: API sudah ada = langsung onReady, tanpa tambah script', () => {
    const doc = fakeDoc(); let called = 0;
    withGlobals({ YT: { Player: class {} } }, doc, () => ensureYouTubeApi({ scriptId: 'yt', src: 's', onReady: () => called++ }));
    assert.equal(called, 1); assert.equal(doc.appended.length, 0);
});

test('ensureYouTubeApi: script sudah ada (sedang loading) = tidak melakukan apa-apa', () => {
    const doc = fakeDoc({ yt: {} }); const win = {}; let called = 0;
    withGlobals(win, doc, () => ensureYouTubeApi({ scriptId: 'yt', src: 's', onReady: () => called++ }));
    assert.equal(called, 0); assert.equal(doc.appended.length, 0); assert.equal(win.onYouTubeIframeAPIReady, undefined);
});

test('ensureYouTubeApi: tambah script dan rantai callback lama', () => {
    const doc = fakeDoc(); const order = [];
    const win = { onYouTubeIframeAPIReady: () => order.push('lama') };
    withGlobals(win, doc, () => ensureYouTubeApi({ scriptId: 'yt', src: 'https://x/iframe_api', onReady: () => order.push('baru') }));
    assert.deepEqual(doc.appended.map(t => [t.id, t.src]), [['yt', 'https://x/iframe_api']]);
    win.onYouTubeIframeAPIReady();
    assert.deepEqual(order, ['lama', 'baru']);
});
