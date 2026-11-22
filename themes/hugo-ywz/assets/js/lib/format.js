// Format angka/teks untuk tampilan.

const rupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

/** 150000 → "Rp 150.000" */
export function formatRupiah(number) {
    return rupiah.format(number);
}
