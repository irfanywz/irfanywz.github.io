// Loader Firebase (modul diimpor dari CDN Google saat pertama dibutuhkan).

// `import()` dengan URL literal: build (esbuild) membiarkannya sebagai impor runtime.
const importFirebase = async () => ({
    app: await import('https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'),
    database: await import('https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js'),
});

/**
 * Buat fungsi `initFirebase()` bertipe singleton: pemanggilan pertama memuat Firebase, sisanya memakai hasil yang sama.
 * Bila gagal, galat dicatat, hasil dilupakan (pemanggilan berikutnya mencoba lagi), dan galat dilempar ke pemanggil.
 *
 * @param {object} o
 * @param {string} o.databaseUrl
 * @param {Function} [o.importer]  async () => ({ app, database }); bisa diganti untuk tes
 * @param {(fb:object)=>void} [o.onReady]  dipanggil sekali setiap kali pemuatan berhasil
 * @returns {() => Promise<{db, ref, get, update, set, child}>}
 */
export function createFirebaseLoader({ databaseUrl, importer = importFirebase, onReady }) {
    let initPromise = null;

    return function initFirebase() {
        if (initPromise) return initPromise;

        initPromise = (async () => {
            try {
                const { app: appModule, database } = await importer();
                const { initializeApp } = appModule;
                const { getDatabase, ref, get, update, set, child } = database;

                const app = initializeApp({
                    databaseURL: databaseUrl,
                });

                const firebase = {
                    db: getDatabase(app),
                    ref, get, update, set, child,
                };

                if (onReady) onReady(firebase);
                return firebase;
            } catch (error) {
                console.error('Failed to load Firebase modules:', error);
                initPromise = null;
                throw error;
            }
        })();

        return initPromise;
    };
}
