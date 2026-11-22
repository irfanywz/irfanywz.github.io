import test from 'node:test';
import assert from 'node:assert/strict';
import { highlightText, onlyPosts, renderResult, renderResults, searchPosts, searchableText } from '../themes/hugo-ywz/assets/js/pages/search/core.js';

const post = (over = {}) => ({ section: 'posts', title: 'Belajar Hugo', topics: ['Web'], tags: 'x,y', content: 'tutorial', permalink: '/a/', ...over });

test('onlyPosts: hanya section posts', () => {
    assert.deepEqual(onlyPosts([post(), { section: 'journal' }, { title: 'tanpa section' }]).length, 1);
});

test('searchableText: gabungan judul, topik, tag, isi (array atau string), lowercase', () => {
    assert.equal(searchableText(post()), 'belajar hugo web x,y tutorial');
    assert.equal(searchableText({ title: 'T', topics: ['A', 'B'], tags: ['C'], summary: 'Ringkas' }), 't a b c ringkas');
    assert.equal(searchableText({}), '   ');
});

test('searchPosts: cocok case-insensitive, unik per permalink (yang terakhir menang)', () => {
    const data = [post(), post({ title: 'Hugo Duplikat' }), post({ title: 'Lain', permalink: '/b/', content: 'resep' })];
    const out = searchPosts(data, 'HUGO');
    assert.deepEqual(out.map(p => p.title), ['Hugo Duplikat']);
    assert.deepEqual(searchPosts(data, 'resep').map(p => p.permalink), ['/b/']);
    assert.deepEqual(searchPosts(data, 'zzz'), []);
});

test('highlightText: sorot semua kemunculan, query dengan karakter regex aman', () => {
    assert.equal(highlightText('Hugo hugo', 'hugo').match(/<span/g).length, 2);
    assert.ok(highlightText('C++ dan C++', 'c++').includes('>C++</span>'));
    assert.doesNotThrow(() => highlightText('a (b) [c]', '('));
    assert.equal(highlightText('tanpa cocok', 'xyz'), 'tanpa cocok');
    assert.equal(highlightText('teks', ''), 'teks');
});

test('highlightText: seluruh teks di-escape, entity tidak ikut tersorot', () => {
    const html = highlightText('Q&A <b>', 'amp');
    assert.equal(html, 'Q&amp;A &lt;b&gt;');             // "amp" ada di "&amp;" tapi bukan di teks asli
    assert.equal(highlightText('a<b', 'b'), 'a&lt;<span class="bg-yellow-200 dark:bg-yellow-900/50 text-gray-900 dark:text-white px-0.5 rounded">b</span>');
});

test('renderResult: nilai berbahaya di-escape (judul, gambar, permalink)', () => {
    const html = renderResult(post({ title: '<img onerror=x>', image: '"><script>', permalink: '/a/"x' }), 'q');
    assert.ok(!html.includes('<img onerror'));
    assert.ok(!html.includes('<script>'));
    assert.ok(html.includes('&lt;img onerror=x&gt;'));
    assert.ok(html.includes('href="/a/&quot;x"'));
});

test('renderResult: badge premium hanya muncul bila ada gambar, waktu baca opsional', () => {
    assert.ok(renderResult(post({ image: '/i.avif', premium: true }), 'q').includes('icon-[lucide--crown]'));
    assert.ok(renderResult(post({ image: '/i.avif', isPremium: true }), 'q').includes('icon-[lucide--crown]'));
    assert.ok(!renderResult(post({ premium: true }), 'q').includes('icon-[lucide--crown]'));
    assert.ok(renderResult(post({ readingTime: 7 }), 'q').includes('7 menit baca'));
    assert.ok(!renderResult(post(), 'q').includes('menit baca'));
});

test('renderResult: tag dari array maupun string dipisah koma', () => {
    assert.equal(renderResult(post({ topics: ['A', 'B'] }), 'q').match(/inline-flex items-center px-2/g).length, 2);
    assert.equal(renderResult(post({ topics: undefined, tags: 'x, y, z' }), 'q').match(/inline-flex items-center px-2/g).length, 3);
});

test('renderResults: gabungan semua kartu, kosong untuk daftar kosong', () => {
    assert.equal(renderResults([], 'q'), '');
    assert.equal(renderResults([post(), post({ permalink: '/b/' })], 'q').match(/group relative flex/g).length, 2);
});
