// Fungsi murni untuk kosakata: tanpa DOM/Alpine (dites di tests/quote-kosakata.test.mjs).

export function totalVocabCount(categories) {
    return categories.reduce((acc, cat) => acc + (cat.vocabularies ? cat.vocabularies.length : 0), 0);
}

/** Judul kategori terpilih; '' = "Semua Kategori"; slug tak dikenal = "Kategori". */
export function categoryTitle(categories, slug) {
    if (slug === '') return 'Semua Kategori';
    const cat = categories.find(c => c.slug === slug);
    return cat ? cat.category_title : 'Kategori';
}

export function categoryDescription(categories, slug) {
    if (slug === '') return 'Menampilkan seluruh daftar kosakata dari semua kategori.';
    const cat = categories.find(c => c.slug === slug);
    return cat ? (cat.description || 'Kumpulan istilah dalam kategori ini.') : '';
}

/** Semua kosakata (dengan `categoryTitle`) dari kategori terpilih, difilter oleh `search` (istilah atau arti). */
export function filterVocabularies(categories, { slug, search }) {
    const allItems = [];

    categories.forEach(cat => {
        if (slug === '' || cat.slug === slug) {
            if (cat.vocabularies) {
                cat.vocabularies.forEach(v => {
                    allItems.push({ ...v, categoryTitle: cat.category_title });
                });
            }
        }
    });

    const query = (search || '').toLowerCase();
    if (!query) return allItems;

    return allItems.filter(v => {
        const matchesTerm = v.term && v.term.toLowerCase().includes(query);
        const matchesDef = v.definition && v.definition.toLowerCase().includes(query);
        return matchesTerm || matchesDef;
    });
}
