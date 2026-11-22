import test from 'node:test';
import assert from 'node:assert/strict';
import { countFilters, filtersFromQuery, matchesItem, writeFiltersToUrl } from '../themes/hugo-ywz/assets/js/pages/services/filters.js';
import { buildMessage, contactUrl } from '../themes/hugo-ywz/assets/js/pages/services/purchase.js';

const CATS = ['Software', 'Desain'];
const item = (over = {}) => ({ search: 'app satu', type: 'produk', category: 'Software', free: false, available: true, ...over });
const ALL = { type: 'all', category: 'all', price: 'all' };

test('filtersFromQuery: nilai valid dipakai (kategori case-insensitive), yang tidak valid diabaikan', () => {
    assert.deepEqual(filtersFromQuery('?type=jasa&category=desain&price=free', CATS), { type: 'jasa', category: 'Desain', price: 'free' });
    assert.deepEqual(filtersFromQuery('?type=bogus&category=nope&price=weird', CATS), ALL);
    assert.deepEqual(filtersFromQuery('', CATS), ALL);
});

test('writeFiltersToUrl: "all" dihapus dari query, sisanya ditulis; param lain tidak disentuh', () => {
    const url = new URL('https://x.test/services/?type=jasa&utm=1');
    writeFiltersToUrl(url, { type: 'all', category: 'Software', price: 'paid' });
    assert.equal(url.search, '?utm=1&category=Software&price=paid');
});

test('matchesItem: pencarian + tiap filter', () => {
    const base = { search: '', filters: ALL, onlyAvailable: false };
    assert.equal(matchesItem(item(), base), true);
    assert.equal(matchesItem(item(), { ...base, search: ' APP ' }), true);
    assert.equal(matchesItem(item(), { ...base, search: 'zzz' }), false);
    assert.equal(matchesItem(item(), { ...base, filters: { ...ALL, type: 'jasa' } }), false);
    assert.equal(matchesItem(item(), { ...base, filters: { ...ALL, category: 'Desain' } }), false);
    assert.equal(matchesItem(item({ free: true }), { ...base, filters: { ...ALL, price: 'free' } }), true);
    assert.equal(matchesItem(item({ free: true }), { ...base, filters: { ...ALL, price: 'paid' } }), false);
    assert.equal(matchesItem(item({ available: false }), { ...base, onlyAvailable: true }), false);
});

test('countFilters', () => {
    assert.equal(countFilters(ALL, false), 0);
    assert.equal(countFilters({ type: 'jasa', category: 'Desain', price: 'free' }, true), 4);
});

const product = { name: 'App A', type: 'produk', payQr: false };

test('buildMessage: format tebal beda per platform, varian opsional', () => {
    const wa = buildMessage({ product, variant: { name: 'Pro' }, priceLabel: 'Rp 1', platform: 'whatsapp', href: 'https://x/' });
    assert.equal(wa, 'Halo, saya tertarik dengan produk *App A*\n\nVarian: *Pro*\nHarga: *Rp 1*\nLink: https://x/');
    const tg = buildMessage({ product, variant: null, priceLabel: 'Gratis', platform: 'telegram', href: 'https://x/' });
    assert.equal(tg, 'Halo, saya tertarik dengan produk **App A**\n\nHarga: **Gratis**\nLink: https://x/');
});

test('buildMessage: produk berbayar lewat QR menyebut pembayaran dan bukti', () => {
    const m = buildMessage({ product: { ...product, payQr: true }, variant: null, priceLabel: 'Rp 1', platform: 'whatsapp', href: 'h' });
    assert.match(m, /^Halo, saya sudah melakukan pembayaran untuk produk \*App A\*/);
    assert.match(m, /Total dibayar: \*Rp 1\*/);
    assert.match(m, /Bukti pembayaran saya lampirkan di chat ini\.$/);
});

test('contactUrl: wa/telegram dengan teks ter-encode, platform lain kosong', () => {
    const c = { wa: '62812', telegram: 'user' };
    assert.equal(contactUrl('whatsapp', c, 'a b&c'), 'https://wa.me/62812?text=a%20b%26c');
    assert.equal(contactUrl('telegram', c, 'x'), 'https://t.me/user?text=x');
    assert.equal(contactUrl('signal', c, 'x'), '');
});
