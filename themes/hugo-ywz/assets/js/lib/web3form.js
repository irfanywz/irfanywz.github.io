// Pengiriman formulir ke Web3Forms (https://web3forms.com). Dipakai form kontak dan form support.
// Access key tetap di HTML form (input hidden `access_key`); modul ini hanya mengirim isi form.

const ENDPOINT = 'https://api.web3forms.com/submit';
const WAIT_MESSAGE = 'Mohon tunggu sebentar...';
const NETWORK_ERROR_MESSAGE = 'Terjadi kesalahan jaringan! Coba lagi.';

function show(result, text, className) {
    result.textContent = text;
    result.className = className;
}

/**
 * Pasang handler submit pada `form` yang menampilkan status di elemen `result`.
 *
 * @param {object}   o
 * @param {HTMLFormElement} o.form
 * @param {HTMLElement}     o.result
 * @param {{success:string, error:string}} o.messages  pesan sukses, dan pesan galat bila API tidak memberi `message`
 * @param {{wait:string, success:string, error:string}} o.classes  class elemen untuk tiap status
 * @param {number}   o.hideAfterMs  jeda sebelum pesan dihapus
 * @param {(result:HTMLElement)=>void} [o.onStart]    dipanggil di awal tiap submit
 * @param {(result:HTMLElement)=>void} [o.afterHide]  dipanggil setelah teks pesan dikosongkan
 */
export function attachWeb3Form({ form, result, messages, classes, hideAfterMs, onStart, afterHide }) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const json = JSON.stringify(Object.fromEntries(new FormData(form)));

        if (onStart) onStart(result);
        show(result, WAIT_MESSAGE, classes.wait);

        fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: json,
        })
            .then(async (response) => {
                const resJson = await response.json();

                if (response.status === 200) {
                    show(result, messages.success, classes.success);
                } else {
                    // Galat dari Web3Forms (mis. access key salah)
                    console.error('Web3Forms Error:', resJson);
                    show(result, resJson.message || messages.error, classes.error);
                }
            })
            .catch((error) => {
                // Galat jaringan, atau respons yang bukan JSON
                console.error('Fetch Error:', error);
                show(result, NETWORK_ERROR_MESSAGE, classes.error);
            })
            .finally(function () {
                form.reset();
                setTimeout(() => {
                    result.textContent = '';
                    if (afterHide) afterHide(result);
                }, hideAfterMs);
            });
    });
}
