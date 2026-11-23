// QRIS statis -> dinamis (murni, tanpa DOM). Port dari qris-dinamis (MIT).
// Langkah: tag 01 "11" -> "12", sisipkan tag 54 (nominal) sebelum tag 58, hitung ulang CRC16 (tag 63).

/** CRC16-CCITT (poly 0x1021, init 0xFFFF) -> 4 hex huruf besar. */
export function crc16(str) {
    let crc = 0xffff;
    for (let i = 0; i < str.length; i++) {
        crc ^= str.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
        }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
}

/** Pecah string TLV top-level menjadi [{tag, value}]; berhenti bila format rusak. */
export function parseTlv(data) {
    const out = [];
    let pos = 0;
    while (pos + 4 <= data.length) {
        const tag = data.substring(pos, pos + 2);
        const len = parseInt(data.substring(pos + 2, pos + 4), 10);
        if (Number.isNaN(len) || pos + 4 + len > data.length) break;
        out.push({ tag, value: data.substring(pos + 4, pos + 4 + len) });
        pos += 4 + len;
    }
    return out;
}

/** Validasi struktur dasar + CRC. Mengembalikan daftar pesan error ([] = valid). */
export function validateQris(str) {
    const errors = [];
    const s = (str || '').trim();
    if (!s) return ['QRIS kosong'];
    if (!s.startsWith('000201')) errors.push('QRIS harus diawali 000201');
    if (s.length < 20) return [...errors, 'QRIS terlalu pendek'];
    if (crc16(s.slice(0, -4)) !== s.slice(-4).toUpperCase()) errors.push('CRC tidak cocok');
    const tags = new Set(parseTlv(s).map(e => e.tag));
    ['00', '01', '52', '53', '58', '59', '60', '63'].forEach(t => {
        if (!tags.has(t)) errors.push(`Tag ${t} tidak ditemukan`);
    });
    return errors;
}

/**
 * Buat QRIS dinamis dari QRIS statis.
 * @param {string} staticQris string QRIS statis (hasil scan QR toko)
 * @param {number} amount nominal rupiah (bilangan bulat > 0)
 * @returns {string} payload QRIS dinamis lengkap dengan CRC baru
 */
export function toDynamicQris(staticQris, amount) {
    const nominal = Math.round(Number(amount));
    if (!Number.isFinite(nominal) || nominal <= 0) throw new Error('Nominal tidak valid');

    const elements = parseTlv((staticQris || '').trim());
    if (!elements.length) throw new Error('QRIS statis tidak valid');

    const tlv = (tag, value) => `${tag}${String(value.length).padStart(2, '0')}${value}`;
    let body = '';
    let amountDone = false;

    for (const el of elements) {
        if (['54', '55', '56', '57', '63'].includes(el.tag)) continue; // dibuat ulang / dibuang
        if (el.tag === '01') { body += tlv('01', '12'); continue; }
        if (el.tag === '58' && !amountDone) { body += tlv('54', String(nominal)); amountDone = true; }
        body += tlv(el.tag, el.value); // tag bersarang (26-51, 62) disalin apa adanya
    }
    if (!amountDone) throw new Error('QRIS statis tidak punya tag 58 (Country Code)');

    const withCrcTag = body + '6304';
    return withCrcTag + crc16(withCrcTag);
}
