// Logika filter daftar produk/jasa: murni, tanpa DOM/Alpine (dites di tests/services.test.mjs).

export const FILTER_KEYS = ['type', 'category', 'price'];

/**
 * Baca filter dari query string, mis. ?type=produk&category=Software&price=free.
 * Nilai yang tidak valid diabaikan (tetap 'all').
 */
export function filtersFromQuery(search, categories) {
    const filters = { type: 'all', category: 'all', price: 'all' };
    const p = new URLSearchParams(search);
    const type = p.get('type');
    const cat = p.get('category');
    const price = p.get('price');
    if (['produk', 'jasa'].includes(type)) filters.type = type;
    if (cat) {
        const match = categories.find(c => c.toLowerCase() === cat.toLowerCase());
        if (match) filters.category = match;
    }
    if (['free', 'paid'].includes(price)) filters.price = price;
    return filters;
}

/** Tulis filter ke objek URL (mengubah `url`): 'all' dihapus dari query. */
export function writeFiltersToUrl(url, filters) {
    FILTER_KEYS.forEach(k => {
        if (filters[k] === 'all') url.searchParams.delete(k);
        else url.searchParams.set(k, filters[k]);
    });
    return url;
}

/** Apakah `item` lolos pencarian + semua filter. */
export function matchesItem(item, { search, filters, onlyAvailable }) {
    const q = search.trim().toLowerCase();
    if (q && !item.search.includes(q)) return false;
    if (filters.type !== 'all' && item.type !== filters.type) return false;
    if (filters.category !== 'all' && item.category !== filters.category) return false;
    if (filters.price === 'free' && !item.free) return false;
    if (filters.price === 'paid' && item.free) return false;
    if (onlyAvailable && !item.available) return false;
    return true;
}

/** Jumlah filter aktif di dropdown (tanpa kotak pencarian). */
export function countFilters(filters, onlyAvailable) {
    return (filters.type !== 'all' ? 1 : 0)
        + (filters.category !== 'all' ? 1 : 0)
        + (filters.price !== 'all' ? 1 : 0)
        + (onlyAvailable ? 1 : 0);
}
