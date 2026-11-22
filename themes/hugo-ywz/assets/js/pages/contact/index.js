// Halaman kontak: formulir Web3Forms. Dibuild lewat layouts/_partials/components/inline-bundle.html.
import { attachWeb3Form } from '../../lib/web3form.js';

const BASE = 'mt-4 p-4 rounded-lg text-sm';
const form = document.getElementById('form');
const result = document.getElementById('result');

// Tampilkan elemen result di awal (untuk memastikan styling diterapkan)
result.style.display = 'block';

attachWeb3Form({
    form,
    result,
    messages: {
        success: 'Pesan berhasil terkirim! Terima kasih.',
        error: 'Terjadi kesalahan saat mengirim pesan.',
    },
    classes: {
        wait: `${BASE} bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400`,
        success: `${BASE} bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400`,
        error: `${BASE} bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400`,
    },
    hideAfterMs: 5000,
    afterHide: (el) => { el.className = BASE; },
});
