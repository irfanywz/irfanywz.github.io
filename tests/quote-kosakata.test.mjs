import test from 'node:test';
import assert from 'node:assert/strict';
import { activeCategoryTitle, groupQuotes, pickRandomQuote, quoteMatches } from '../themes/hugo-ywz/assets/js/components/quote-app/quotes.js';
import { categoryDescription, categoryTitle, filterVocabularies, totalVocabCount } from '../themes/hugo-ywz/assets/js/components/kosakata-app/vocab.js';

// ---------------- quote ----------------
const QC = [
    { slug: 'motivasi', category_title: 'Motivasi', quotes: [{ text: 'Terus Melangkah', author: 'Budi' }, { text: 'Jangan Menyerah', author: 'Ani' }] },
    { slug: 'cinta', category_title: 'Cinta', quotes: [{ text: 'Cinta itu Sabar', author: 'Citra' }] },
    { slug: 'kosong', category_title: 'Kosong' },
];

test('pickRandomQuote: dari semua kategori, null bila kosong, RNG bisa disuntik', () => {
    assert.equal(pickRandomQuote([], () => 0), null);
    assert.equal(pickRandomQuote(undefined), null);
    assert.equal(pickRandomQuote([{ slug: 'k' }], () => 0), null);
    assert.equal(pickRandomQuote(QC, () => 0).text, 'Terus Melangkah');
    assert.equal(pickRandomQuote(QC, () => 0.99).text, 'Cinta itu Sabar');
});

test('activeCategoryTitle: judul kategori, atau "Semua Kutipan"', () => {
    assert.equal(activeCategoryTitle(QC, 'cinta'), 'Cinta');
    assert.equal(activeCategoryTitle(QC, ''), 'Semua Kutipan');
    assert.equal(activeCategoryTitle(QC, 'nope'), 'Semua Kutipan');
});

test('quoteMatches: cocok di teks atau penulis (query lowercase)', () => {
    assert.ok(quoteMatches({ text: 'Halo Dunia', author: 'X' }, 'dunia'));
    assert.ok(quoteMatches({ text: 'A', author: 'Budi' }, 'bud'));
    assert.ok(!quoteMatches({ text: 'A', author: 'B' }, 'zzz'));
    assert.ok(!quoteMatches({}, 'a'));
});

test('groupQuotes: filter slug + pencarian, kategori tanpa hasil dibuang, tanpa filter = semua', () => {
    assert.deepEqual(groupQuotes(QC, { slug: '', search: '' }).map(g => g.categorySlug), ['motivasi', 'cinta']);
    assert.deepEqual(groupQuotes(QC, { slug: 'cinta', search: '' }).map(g => g.categoryTitle), ['Cinta']);
    const g = groupQuotes(QC, { slug: '', search: 'ANI' });
    assert.deepEqual(g.map(x => [x.categorySlug, x.quotes.length]), [['motivasi', 1]]);
    assert.deepEqual(groupQuotes(QC, { slug: '', search: 'zzz' }), []);
    assert.deepEqual(groupQuotes(undefined, { slug: '', search: '' }), []);
    assert.deepEqual(groupQuotes(QC, { slug: '', search: undefined }).length, 2);
});

// ---------------- kosakata ----------------
const KC = [
    { slug: 'it', category_title: 'Teknologi', description: 'Istilah IT', vocabularies: [{ term: 'Bandwidth', definition: 'Lebar pita' }, { term: 'Cache', definition: 'Simpanan sementara' }] },
    { slug: 'bisnis', category_title: 'Bisnis', vocabularies: [{ term: 'Profit', definition: 'Keuntungan' }] },
    { slug: 'kosong', category_title: 'Kosong' },
];

test('totalVocabCount: jumlah semua kosakata, kategori tanpa daftar dihitung 0', () => {
    assert.equal(totalVocabCount(KC), 3);
    assert.equal(totalVocabCount([]), 0);
});

test('categoryTitle dan categoryDescription: default untuk semua, slug tak dikenal, tanpa deskripsi', () => {
    assert.equal(categoryTitle(KC, ''), 'Semua Kategori');
    assert.equal(categoryTitle(KC, 'bisnis'), 'Bisnis');
    assert.equal(categoryTitle(KC, 'nope'), 'Kategori');
    assert.equal(categoryDescription(KC, ''), 'Menampilkan seluruh daftar kosakata dari semua kategori.');
    assert.equal(categoryDescription(KC, 'it'), 'Istilah IT');
    assert.equal(categoryDescription(KC, 'bisnis'), 'Kumpulan istilah dalam kategori ini.');
    assert.equal(categoryDescription(KC, 'nope'), '');
});

test('filterVocabularies: kategori terpilih, categoryTitle ditambahkan, cari di istilah atau arti', () => {
    const all = filterVocabularies(KC, { slug: '', search: '' });
    assert.equal(all.length, 3);
    assert.equal(all[0].categoryTitle, 'Teknologi');
    assert.deepEqual(filterVocabularies(KC, { slug: 'bisnis', search: '' }).map(v => v.term), ['Profit']);
    assert.deepEqual(filterVocabularies(KC, { slug: '', search: 'LEBAR' }).map(v => v.term), ['Bandwidth']);
    assert.deepEqual(filterVocabularies(KC, { slug: '', search: 'cache' }).map(v => v.term), ['Cache']);
    assert.deepEqual(filterVocabularies(KC, { slug: 'it', search: 'profit' }), []);
    assert.equal(filterVocabularies(KC, { slug: '', search: undefined }).length, 3);
});
