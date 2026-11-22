// Helper HTML/regex yang aman dipakai berulang.

const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escape teks untuk disisipkan ke HTML (isi elemen maupun atribut). */
export function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

/** Escape teks agar dipakai literal di dalam `new RegExp(...)`. */
export function escapeRegExp(value) {
    return String(value).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
