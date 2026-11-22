// Cuaca untuk widget navigasi (Open-Meteo). Fungsi murni + akses cache; dites di tests/nav-widget.test.mjs.

export const CACHE_KEY = 'weatherData';
export const CACHE_TTL_MS = 30 * 60 * 1000;

/** Emoji menurut kode cuaca WMO. Aturan yang lebih bawah menimpa yang di atas (sama seperti sebelumnya). */
export function weatherIcon(code) {
    let icon = '☀️';
    if (code >= 1 && code <= 3) icon = '⛅';
    if (code >= 45 && code <= 48) icon = '🌫️';
    if (code >= 51 && code <= 67) icon = '🌧️';
    if (code >= 80 && code <= 82) icon = '🌦️';
    if (code >= 95) icon = '⚡';
    return icon;
}

export function forecastUrl(latitude, longitude) {
    return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=Asia%2FJakarta`;
}

/** Cuaca dari cache bila masih segar, selain itu null (termasuk bila cache rusak). */
export function readFreshCache(storage, now) {
    try {
        const cached = storage.getItem(CACHE_KEY);
        if (!cached) return null;
        const { data, timestamp } = JSON.parse(cached);
        return now - timestamp < CACHE_TTL_MS ? data : null;
    } catch (e) {
        return null;
    }
}

export function writeCache(storage, weather, now) {
    storage.setItem(CACHE_KEY, JSON.stringify({ data: weather, timestamp: now }));
}
