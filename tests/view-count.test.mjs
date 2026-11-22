import test from 'node:test';
import assert from 'node:assert/strict';
import { defaultReactions, newPostData, postPath, sanitizeId } from '../themes/hugo-ywz/assets/js/view-count/post-data.js';
import { createFirebaseLoader } from '../themes/hugo-ywz/assets/js/view-count/firebase.js';
import { updatePostViews } from '../themes/hugo-ywz/assets/js/view-count/views.js';
import { handleReactionClick, loadReactions } from '../themes/hugo-ywz/assets/js/view-count/reactions.js';

// ---------------- post-data ----------------
test('sanitizeId / postPath: titik dan garis miring jadi underscore', () => {
    assert.equal(sanitizeId('/blog/a.b/'), '_blog_a_b_');
    assert.equal(postPath('/post-a/'), 'pages/id/_post-a_');
});

test('newPostData / defaultReactions: bentuk data awal, objek baru setiap kali', () => {
    assert.deepEqual(newPostData('/p/', 'https://x/p/'), { value: 0, url: 'https://x/p/', id: '/p/', reactions: { clap: 0, wow: 0, hmm: 0 } });
    assert.deepEqual(Object.keys(newPostData('/p/', 'u')), ['value', 'url', 'id', 'reactions']);
    assert.notEqual(defaultReactions(), defaultReactions());
});

// ---------------- firebase loader ----------------
function fakeImporter(log, { failTimes = 0 } = {}) {
    let calls = 0;
    return async () => {
        calls++;
        if (calls <= failTimes) throw new Error('offline');
        return {
            app: { initializeApp: (o) => { log.push(['init', o.databaseURL]); return {}; } },
            database: { getDatabase: () => ({ id: 'db' }), ref: () => ({}), child: () => ({}), get: async () => ({}), update: async () => {}, set: async () => {} },
        };
    };
}
const muteErrors = async (fn) => { const e = console.error; console.error = () => {}; try { return await fn(); } finally { console.error = e; } };

test('createFirebaseLoader: singleton (diimpor sekali), onReady sekali, databaseURL dari config', async () => {
    const log = []; let ready = 0;
    const init = createFirebaseLoader({ databaseUrl: 'https://db.test', importer: fakeImporter(log), onReady: () => ready++ });
    const [a, b] = await Promise.all([init(), init()]);
    assert.equal(a, b);
    await init();
    assert.deepEqual(log, [['init', 'https://db.test']]);
    assert.equal(ready, 1);
    assert.equal(a.db.id, 'db');
});

test('createFirebaseLoader: gagal = galat dicatat dan dilempar, lalu mencoba lagi pada pemanggilan berikutnya', async () => {
    const log = []; let ready = 0;
    const init = createFirebaseLoader({ databaseUrl: 'u', importer: fakeImporter(log, { failTimes: 1 }), onReady: () => ready++ });
    await muteErrors(async () => { await assert.rejects(() => init(), /offline/); });
    assert.equal(ready, 0);
    const fb = await init();
    assert.ok(fb.db);
    assert.equal(ready, 1);
});

// ---------------- views & reactions dengan DB palsu ----------------
function fakeDb(initial) {
    const store = new Map(Object.entries(initial || {})); const ops = [];
    const fb = {
        db: {}, ref: () => ({ path: '' }), child: (r, p) => ({ path: p }),
        get: async (r) => { const v = store.has(r.path) ? structuredClone(store.get(r.path)) : null; return { val: () => v }; },
        update: async (r, o) => { ops.push(['update', r.path, o]); store.set(r.path, { ...store.get(r.path), ...structuredClone(o) }); },
        set: async (r, v) => { ops.push(['set', r.path, structuredClone(v)]); store.set(r.path, structuredClone(v)); },
    };
    return { initFirebase: async () => fb, store, ops };
}
const cl = (init = []) => { const s = new Set(init); return { add: (...c) => c.forEach(x => s.add(x)), remove: (...c) => c.forEach(x => s.delete(x)), has: x => s.has(x) }; };
function viewNode(id) {
    const ph = { textContent: '?', classList: cl(['view-load']) };
    return { ph, getAttribute: () => id, querySelector: (s) => (s === '.post-views-count-placeholder' ? ph : null) };
}
function withWindow(href, pathname, fn) {
    const saved = { window: globalThis.window, alert: globalThis.alert, setTimeout: globalThis.setTimeout };
    const alerts = [];
    globalThis.window = { location: { href, pathname } };
    globalThis.alert = (m) => alerts.push(m);
    globalThis.setTimeout = () => {};
    return Promise.resolve(fn(alerts)).finally(() => Object.assign(globalThis, saved));
}

test('updatePostViews: halaman post menambah hitungan; post baru ditulis dengan set', async () => {
    const db = fakeDb(); const node = viewNode('/post-a/');
    await withWindow('https://x/post-a/', '/post-a/', async () => { await updatePostViews(node, db.initFirebase); });
    assert.equal(node.ph.textContent, 0);                    // yang ditampilkan: nilai sebelum ditambah
    assert.equal(node.ph.classList.has('view-load'), false);
    assert.deepEqual(db.ops.map(o => [o[0], o[1], o[2].value]), [['set', 'pages/id/_post-a_', 1]]);
});

test('updatePostViews: post yang sudah ada memakai update; daftar/beranda hanya menampilkan', async () => {
    let db = fakeDb({ 'pages/id/_post-a_': { value: 9 } }); let node = viewNode('/post-a/');
    await withWindow('https://x/post-a/', '/post-a/', async () => { await updatePostViews(node, db.initFirebase); });
    assert.equal(node.ph.textContent, 9);
    assert.deepEqual(db.ops, [['update', 'pages/id/_post-a_', { value: 10 }]]);

    db = fakeDb({ 'pages/id/_post-a_': { value: 9 } }); node = viewNode('/post-a/');
    await withWindow('https://x/', '/', async () => { await updatePostViews(node, db.initFirebase); });
    assert.equal(node.ph.textContent, 9);
    assert.deepEqual(db.ops, []);
});

test('updatePostViews: galat database menampilkan "Error"', async () => {
    const db = fakeDb(); db.initFirebase = async () => ({ ...(await fakeDb().initFirebase()), get: async () => { throw new Error('x'); } });
    const node = viewNode('/p/');
    await muteErrors(() => withWindow('https://x/p/', '/p/', async () => { await updatePostViews(node, db.initFirebase); }));
    assert.equal(node.ph.textContent, 'Error');
});

function reactionDom(postId) {
    const items = ['clap', 'wow', 'hmm'].map(type => {
        const count = { textContent: '?', classList: cl(['reaction-loading']) }; const icon = { classList: cl() };
        const item = { type, count, icon, getAttribute: (a) => (a === 'data-type' ? type : null),
            querySelector: (s) => (s === '.count' ? count : icon), closest: (s) => (s === '.reaction-item' ? item : container) };
        return item;
    });
    const container = { getAttribute: () => postId, querySelectorAll: () => items };
    return { items, container };
}

test('loadReactions: menampilkan hitungan; data kosong ditulis dengan set', async () => {
    const db = fakeDb({ 'pages/id/_p_': { value: 1, reactions: { clap: 4, hmm: 2 } } }); const dom = reactionDom('/p/');
    await withWindow('https://x/p/', '/p/', async () => { await loadReactions(dom.container, db.initFirebase); });
    assert.deepEqual(dom.items.map(i => i.count.textContent), [4, 0, 2]);
    assert.ok(dom.items.every(i => !i.count.classList.has('reaction-loading')));
    assert.deepEqual(db.ops, []);

    const empty = fakeDb(); const dom2 = reactionDom('/p/');
    await withWindow('https://x/p/', '/p/', async () => { await loadReactions(dom2.container, empty.initFirebase); });
    assert.deepEqual(empty.ops.map(o => o[0]), ['set']);
});

test('handleReactionClick: menambah hitungan reaksi di halaman post, menolak di halaman lain', async () => {
    const db = fakeDb({ 'pages/id/_p_': { value: 1, reactions: { clap: 4, wow: 0, hmm: 0 } } }); const dom = reactionDom('/p/');
    await withWindow('https://x/p/', '/p/', async (alerts) => {
        await handleReactionClick({ target: dom.items[0] }, db.initFirebase);
        assert.equal(dom.items[0].count.textContent, 5);
        assert.deepEqual(db.ops, [['update', 'pages/id/_p_', { reactions: { clap: 5, wow: 0, hmm: 0 } }]]);
        assert.deepEqual(alerts, []);
    });
    const other = fakeDb(); const dom2 = reactionDom('/p/');
    await withWindow('https://x/lain/', '/lain/', async (alerts) => {
        await handleReactionClick({ target: dom2.items[1] }, other.initFirebase);
        assert.deepEqual(alerts, ['Reaksi hanya dapat diberikan di halaman postingan.']);
        assert.deepEqual(other.ops, []);
    });
});

test('handleReactionClick: klik di luar tombol reaksi diabaikan tanpa memuat Firebase', async () => {
    let loaded = false;
    await handleReactionClick({ target: { closest: () => null } }, async () => { loaded = true; });
    assert.equal(loaded, false);
});
