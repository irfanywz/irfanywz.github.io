// Pembungkus tipis untuk Defer.js (@shinsenter/defer.js 3.9.0), dimuat inline di <head>
// (layouts/_partials/baseof/head.html), jadi `Defer` tersedia sebagai global.

/**
 * Jalankan `fn` setelah halaman selesai dimuat DAN pengguna berinteraksi pertama kali.
 *
 * Interaksi yang dihitung (milik Defer.js): keydown, mousemove, mousedown, touchstart, wheel.
 * `scroll` dan `mouseover` TIDAK termasuk. Tanpa interaksi, `fn` tidak pernah dijalankan.
 *
 * @param {Function} fn
 * @param {number} [fallbackMs=0]  bila > 1: `fn` tetap jalan `fallbackMs` ms setelah load
 *                                 jika belum ada interaksi. 0 = hanya menunggu interaksi.
 */
export function runAfterInteraction(fn, fallbackMs = 0) {
    Defer(fn, 0, fallbackMs > 1 ? fallbackMs : true);
}
