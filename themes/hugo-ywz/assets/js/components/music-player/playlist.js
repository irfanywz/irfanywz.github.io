// Fungsi murni untuk music player: tanpa DOM/Alpine/YouTube, jadi bisa dites dengan Node
// (lihat tests/music-player-playlist.test.mjs).

export const LOOP = Object.freeze({ OFF: 0, ALL: 1, ONE: 2 });

/** Flatten categories into one track list, with precomputed search text. */
export function flattenCategories(categories) {
    return categories.flatMap(cat =>
        (cat.playlist || []).map(track => ({
            ...track,
            categoryTitle: cat.category_title,
            searchText: [track.title, track.artist, cat.category_title]
                .filter(Boolean).join(' ').toLowerCase(),
        }))
    );
}

/** Fisher–Yates shuffle; returns a new array. `random` bisa diganti untuk tes. */
export function shuffled(items, random = Math.random) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

export function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const date = new Date(seconds * 1000);
    return `${date.getUTCMinutes()}:${String(date.getUTCSeconds()).padStart(2, '0')}`;
}

/** Filter by search text; tanpa query mengembalikan array yang sama (bukan salinan). */
export function filterTracks(playlist, query) {
    const q = query.trim().toLowerCase();
    if (!q) return playlist;
    return playlist.filter(track => track.searchText.includes(q));
}

/** Index lagu yang sedang diputar setelah playlist diacak/dikembalikan; 0 bila tidak ketemu. */
export function indexAfterReorder(playlist, currentId) {
    const index = playlist.findIndex(t => t.youtubeId === currentId);
    return index !== -1 ? index : 0;
}

export function volumeIconClass({ isMuted, volume }) {
    if (isMuted || volume === 0) return 'icon-[ri--volume-mute-fill]';
    return volume < 50 ? 'icon-[ri--volume-down-fill]' : 'icon-[ri--volume-up-fill]';
}

export function loopIconClass(loopMode) {
    if (loopMode === LOOP.ONE) return 'icon-[ri--repeat-one-fill]';
    return loopMode === LOOP.ALL ? 'icon-[ri--repeat-2-fill]' : 'icon-[ri--repeat-2-line]';
}
