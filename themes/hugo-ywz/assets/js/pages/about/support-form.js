// Tab "support" di halaman about: formulir konfirmasi dukungan (Web3Forms).
// Dibuild lewat layouts/_partials/components/inline-bundle.html.
import { attachWeb3Form } from '../../lib/web3form.js';

const BASE = 'mt-4 p-3 rounded-xl text-xs';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('support-form');
    const result = document.getElementById('support-result');

    if (form && result) {
        attachWeb3Form({
            form,
            result,
            messages: {
                success: 'Konfirmasi berhasil terkirim! Terima kasih banyak dukungannya ❤️',
                error: 'Terjadi kesalahan saat mengirim.',
            },
            classes: {
                wait: `${BASE} bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400`,
                success: `${BASE} bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400`,
                error: `${BASE} bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400`,
            },
            hideAfterMs: 6000,
            onStart: (el) => { el.style.display = 'block'; },
            afterHide: (el) => { el.style.display = 'none'; },
        });
    }
});
