// Navigasi indeks melingkar (galeri, playlist). `length` harus > 0.

export function nextIndex(current, length) {
    return (current + 1) % length;
}

export function prevIndex(current, length) {
    return (current - 1 + length) % length;
}
