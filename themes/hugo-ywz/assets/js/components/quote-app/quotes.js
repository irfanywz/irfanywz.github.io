// Fungsi murni untuk kutipan: tanpa DOM/Alpine (dites di tests/quote-kosakata.test.mjs).

/** Satu kutipan acak dari semua kategori; null bila tidak ada kutipan. `random` bisa diganti untuk tes. */
export function pickRandomQuote(categories, random = Math.random) {
    if (!categories || categories.length === 0) return null;
    const allQuotes = categories.flatMap(cat => cat.quotes || []);
    if (allQuotes.length === 0) return null;
    return allQuotes[Math.floor(random() * allQuotes.length)];
}

/** Judul kategori terpilih, atau "Semua Kutipan" bila slug tidak cocok/kosong. */
export function activeCategoryTitle(categories, slug) {
    const found = categories.find(cat => cat.slug === slug);
    return found ? found.category_title : 'Semua Kutipan';
}

/** Kutipan cocok bila `query` (lowercase) ada di teks atau penulis. */
export function quoteMatches(quote, query) {
    const matchesText = quote.text && quote.text.toLowerCase().includes(query);
    const matchesAuthor = quote.author && quote.author.toLowerCase().includes(query);
    return matchesText || matchesAuthor;
}

/**
 * Kutipan terfilter dan dikelompokkan per kategori (kategori tanpa hasil dibuang).
 * @param {string} slug   '' = semua kategori
 * @param {string} search teks pencarian (boleh kosong/undefined)
 */
export function groupQuotes(categories, { slug, search }) {
    const result = [];
    if (!categories) return result;

    categories.forEach(cat => {
        if (slug !== '' && cat.slug !== slug) {
            return;
        }

        const query = (search || '').toLowerCase();
        const quotes = (cat.quotes || []).filter(q => quoteMatches(q, query));

        if (quotes.length > 0) {
            result.push({
                categoryTitle: cat.category_title,
                categorySlug: cat.slug,
                quotes,
            });
        }
    });

    return result;
}
