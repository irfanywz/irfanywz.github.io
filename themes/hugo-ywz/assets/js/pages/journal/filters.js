// Fungsi murni untuk halaman jurnal: tidak menyentuh DOM/Alpine, jadi bisa dites dengan Node
// (lihat tests/journal-filters.test.mjs).

/**
 * One entry per filter. Adding a new filter (e.g. "tag") means adding an
 * entry here, a `filters` key, and a case in `matchesFilters` / `buildOptions`.
 */
export const FILTER_TABS = [
    {
        id: 'year',
        label: 'Tahun',
        allLabel: 'Semua Tahun',
        sheetTitle: 'Pilih Tahun',
        icon: 'icon-[ri--calendar-line]',
        itemIcon: 'icon-[ri--calendar-line]',
        summary: (value) => 'Tahun ' + value,
    },
    {
        id: 'category',
        label: 'Kategori',
        allLabel: 'Semua Kategori',
        sheetTitle: 'Pilih Kategori',
        icon: 'icon-[ri--folder-line]',
        itemIcon: 'icon-[ri--folder-line]',
        summary: (value) => 'Kategori [' + value + ']',
    },
];

export const ALL_ICON = 'icon-[ri--archive-drawer-line]';

/** Normalise a raw journal entry once, so filtering code can stay simple. */
export function normalizeJournal(raw) {
    return {
        ...raw,
        year: raw.year == null ? '' : String(raw.year),
        categories: (raw.categories || [])
            .map(c => String(c).trim())
            .filter(Boolean),
        titleLower: (raw.title || '').toLowerCase(),
    };
}

/** Count journals per value. `getValues` returns the values a journal contributes to. */
export function countBy(journals, getValues) {
    const counts = new Map();
    for (const journal of journals) {
        for (const value of new Set(getValues(journal))) {
            counts.set(value, (counts.get(value) || 0) + 1);
        }
    }
    return counts;
}

/** Turn counts into option objects, with an "all" option first. */
export function toOptions(tab, counts, total, compareValues) {
    const options = [...counts.keys()].sort(compareValues).map(value => ({
        value,
        label: value,
        count: counts.get(value),
        icon: tab.itemIcon,
    }));
    return [{ value: '', label: tab.allLabel, count: total, icon: ALL_ICON }, ...options];
}

export function buildOptions(journals) {
    const [yearTab, categoryTab] = FILTER_TABS;
    return {
        year: toOptions(
            yearTab,
            countBy(journals, j => [j.year]),
            journals.length,
            (a, b) => Number(b) - Number(a)          // newest first
        ),
        category: toOptions(
            categoryTab,
            countBy(journals, j => j.categories),
            journals.length,
            (a, b) => a.localeCompare(b)
        ),
    };
}

/**
 * Group journals by year + month. Grouping by month name alone would merge
 * e.g. "Januari 2024" and "Januari 2025" into one block when no year is selected.
 */
export function groupByMonth(journals, { showYear }) {
    const groups = new Map();
    for (const journal of journals) {
        const key = journal.year + '|' + journal.month;
        if (!groups.has(key)) {
            const needsYear = showYear && journal.year && !String(journal.month).includes(journal.year);
            groups.set(key, {
                key,
                label: needsYear ? journal.month + ' ' + journal.year : journal.month,
                items: [],
            });
        }
        groups.get(key).items.push(journal);
    }
    return [...groups.values()];
}

/** `query` harus sudah lowercase + trim. Nilai kosong berarti "tidak difilter". */
export function matchesFilters(journal, { year, category, query }) {
    return (!year || journal.year === year) &&
        (!category || journal.categories.includes(category)) &&
        (!query || journal.titleLower.includes(query));
}
