// Widget navigasi: jam, sapaan, dan cuaca. Diimpor oleh footer.js (bundle global).
// Params dari layouts/_partials/baseof/js-bottom.html: weatherLatitude, weatherLongitude.
import * as params from '@params';
import { formatNavClock } from './clock.js';
import { forecastUrl, readFreshCache, weatherIcon, writeCache } from './weather.js';

const CLOCK_INTERVAL_MS = 60 * 1000;
const WEATHER_INTERVAL_MS = 30 * 60 * 1000;

function updateNavClock() {
    const timeEl = document.getElementById('nav-time');
    const dateEl = document.getElementById('nav-date');
    const greetEl = document.getElementById('nav-greeting');

    if (!timeEl || !dateEl || !greetEl) return;

    const clock = formatNavClock(new Date());
    timeEl.innerText = clock.time;
    dateEl.innerText = clock.date;
    greetEl.innerText = clock.greeting;
}

function displayWeather(weather, tempEl, iconEl, container) {
    tempEl.innerText = `${Math.round(weather.temperature)}°C`;
    iconEl.innerText = weatherIcon(weather.weathercode);
    container.classList.remove('hidden');
}

async function updateWeather() {
    const weatherContainer = document.getElementById('nav-weather');
    const tempEl = document.getElementById('weather-temp');
    const iconEl = document.getElementById('weather-icon');

    if (!weatherContainer || !tempEl || !iconEl) return;

    const now = new Date().getTime();
    const cached = readFreshCache(localStorage, now);
    if (cached) {
        displayWeather(cached, tempEl, iconEl, weatherContainer);
        return;
    }

    try {
        const response = await fetch(forecastUrl(params.weatherLatitude, params.weatherLongitude));
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const data = await response.json();
        const weather = data.current_weather;

        writeCache(localStorage, weather, now);
        displayWeather(weather, tempEl, iconEl, weatherContainer);
    } catch (error) {
        console.error('Gagal mengambil data cuaca:', error);
    }
}

let started = false;

/** Mulai sekali saja (Defer.dom memanggil callback untuk tiap elemen yang cocok). */
function start() {
    if (started) return;
    started = true;

    updateNavClock();
    updateWeather();

    // Tab yang tidak terlihat tidak perlu update; saat kembali terlihat, segarkan langsung.
    setInterval(() => { if (!document.hidden) updateNavClock(); }, CLOCK_INTERVAL_MS);
    setInterval(() => { if (!document.hidden) updateWeather(); }, WEATHER_INTERVAL_MS);
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            updateNavClock();
            updateWeather();
        }
    });
}

// Segarkan jam setiap kali menu navigasi (offcanvas) dibuka.
function watchNavOpen() {
    Alpine.effect(() => {
        if (Alpine.store('nav') && Alpine.store('nav').isOpen) {
            updateNavClock();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Jalankan saat #nav-time atau #nav-weather mendekati viewport
    Defer.dom('#nav-time, #nav-weather', 0, 'widget-triggered', start, { rootMargin: '200px' });
});

// footer.js dieksekusi setelah main.js (Alpine sudah start), jadi 'alpine:init' sudah lewat: pasang langsung.
if (window.Alpine) {
    watchNavOpen();
} else {
    document.addEventListener('alpine:init', watchNavOpen);
}
