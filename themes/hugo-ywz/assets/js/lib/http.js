/** fetch + parse JSON. Melempar Error('HTTP <status>') bila respons bukan 2xx. */
export async function fetchJson(url, options) {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.json();
}

/**
 * Untuk data opsional: kembalikan JSON, atau `null` bila jaringan gagal atau respons bukan 2xx
 * (tanpa melempar). Respons 2xx yang isinya bukan JSON valid tetap melempar.
 */
export async function fetchJsonOrNull(url, options) {
    const res = await fetch(url, options).catch(() => null);
    if (!res || !res.ok) return null;
    return res.json();
}
