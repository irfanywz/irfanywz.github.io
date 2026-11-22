// Pengaturan player yang disimpan di localStorage. Semua akses storage ada di dalam try/catch
// (mode privat / storage penuh tidak boleh merusak player). `storage` bisa diganti untuk tes.

/**
 * @returns {{volume:number,isMuted:boolean,loopMode:number,isShuffled:boolean}|null}
 *          null bila belum ada pengaturan tersimpan atau gagal dibaca.
 */
export function readSettings(storageKey, defaults, storage) {
    try {
        const saved = JSON.parse((storage ?? localStorage).getItem(storageKey));
        if (!saved) return null;
        return {
            volume: saved.volume ?? defaults.volume,
            isMuted: saved.isMuted ?? defaults.isMuted,
            loopMode: saved.loopMode ?? defaults.loopMode,
            isShuffled: saved.isShuffled ?? defaults.isShuffled,
        };
    } catch (e) {
        console.warn('Gagal membaca pengaturan musik:', e);
        return null;
    }
}

export function writeSettings(storageKey, settings, storage) {
    try {
        (storage ?? localStorage).setItem(storageKey, JSON.stringify(settings));
    } catch (e) {
        console.warn('Gagal menyimpan pengaturan musik:', e);
    }
}
