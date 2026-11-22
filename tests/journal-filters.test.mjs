import test from 'node:test';
import assert from 'node:assert/strict';
import { FILTER_TABS, buildOptions, groupByMonth, matchesFilters, normalizeJournal } from '../themes/hugo-ywz/assets/js/pages/journal/filters.js';

const raw = (over = {}) => ({ title: 'Rapat Besar', year: 2025, month: 'Desember', categories: ['Kerja'], ...over });

test('normalizeJournal: tahun jadi string, kategori dirapikan, judul lowercase', () => {
    const j = normalizeJournal(raw({ year: 2025, categories: [' Kerja ', '', 'Rutin'] }));
    assert.equal(j.year, '2025');
    assert.deepEqual(j.categories, ['Kerja', 'Rutin']);
    assert.equal(j.titleLower, 'rapat besar');
});

test('normalizeJournal: tahun kosong dan kategori hilang tidak error', () => {
    const j = normalizeJournal({ title: 'X', year: null });
    assert.equal(j.year, '');
    assert.deepEqual(j.categories, []);
});

test('buildOptions: opsi "semua" di depan, tahun terbaru dulu, kategori alfabetis, ada hitungan', () => {
    const js = [raw({ year: 2024 }), raw({ year: 2026, categories: ['Kerja', 'Rutin'] }), raw({ year: 2026, categories: ['Rutin'] })].map(normalizeJournal);
    const { year, category } = buildOptions(js);
    assert.deepEqual(year.map(o => [o.value, o.count]), [['', 3], ['2026', 2], ['2024', 1]]);
    assert.deepEqual(category.map(o => [o.value, o.count]), [['', 3], ['Kerja', 2], ['Rutin', 2]]);
    assert.equal(year[0].label, FILTER_TABS[0].allLabel);
});

test('groupByMonth: bulan sama beda tahun tidak digabung', () => {
    const js = [raw({ year: 2024, month: 'Januari' }), raw({ year: 2025, month: 'Januari' }), raw({ year: 2025, month: 'Januari' })].map(normalizeJournal);
    const groups = groupByMonth(js, { showYear: true });
    assert.equal(groups.length, 2);
    assert.deepEqual(groups.map(g => [g.label, g.items.length]), [['Januari 2024', 1], ['Januari 2025', 2]]);
});

test('groupByMonth: tahun tidak ditambahkan bila sudah ada di nama bulan atau showYear=false', () => {
    const a = groupByMonth([normalizeJournal(raw({ year: 2026, month: 'November 2026' }))], { showYear: true });
    assert.equal(a[0].label, 'November 2026');
    const b = groupByMonth([normalizeJournal(raw({ year: 2026, month: 'November' }))], { showYear: false });
    assert.equal(b[0].label, 'November');
});

test('matchesFilters: tiap filter opsional, query dicocokkan ke judul lowercase', () => {
    const j = normalizeJournal(raw());
    assert.equal(matchesFilters(j, { year: '', category: '', query: '' }), true);
    assert.equal(matchesFilters(j, { year: '2025', category: 'Kerja', query: 'rapat' }), true);
    assert.equal(matchesFilters(j, { year: '2024', category: '', query: '' }), false);
    assert.equal(matchesFilters(j, { year: '', category: 'Liburan', query: '' }), false);
    assert.equal(matchesFilters(j, { year: '', category: '', query: 'xyz' }), false);
});
