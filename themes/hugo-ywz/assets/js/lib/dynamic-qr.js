import { toDynamicQris } from './qris.js';
import { qrToSvg } from './qrcode.js';

/**
 * Buat QRIS dinamis + gambar QR (data URI SVG) untuk satu nominal.
 * Bila QRIS statis kosong/tidak valid atau nominal <= 0, mengembalikan { payload: '', src: '' }
 * sehingga pemanggil bisa jatuh kembali ke gambar QR statis.
 */
export function buildDynamicQr(staticQris, amount) {
    const empty = { payload: '', src: '' };
    if (!staticQris || !(amount > 0)) return empty;
    try {
        const payload = toDynamicQris(staticQris, amount);
        const svg = qrToSvg(payload, { ecl: 'M', border: 2, scale: 12 });
        return { payload, src: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg) };
    } catch (e) {
        return empty;
    }
}
