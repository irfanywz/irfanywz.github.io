// assets/js/nav-widget.js

function updateNavClock() {
    const timeEl = document.getElementById('nav-time');
    const dateEl = document.getElementById('nav-date');
    const greetEl = document.getElementById('nav-greeting');
    
    if (!timeEl || !dateEl || !greetEl) return;
    
    const now = new Date();
    const hours = now.getHours();

    timeEl.innerText = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false }).replace(/\./g, ':');
    
    dateEl.innerText = now.toLocaleDateString('id-ID', { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });

    let greeting = "HALO";
    if (hours >= 5 && hours < 11) greeting = "PAGI";
    else if (hours >= 11 && hours < 15) greeting = "SIANG";
    else if (hours >= 15 && hours < 19) greeting = "SORE";
    else greeting = "MALAM";
    
    greetEl.innerText = greeting;
}

async function updateWeather() {
    const weatherContainer = document.getElementById('nav-weather');
    const tempEl = document.getElementById('weather-temp');
    const iconEl = document.getElementById('weather-icon');

    if (!weatherContainer || !tempEl || !iconEl) return;

    const cachedWeather = localStorage.getItem('weatherData');
    const cacheExpiry = 30 * 60 * 1000; 
    const now = new Date().getTime();

    if (cachedWeather) {
        const { data, timestamp } = JSON.parse(cachedWeather);
        if (now - timestamp < cacheExpiry) {
            console.log("Menggunakan data cuaca dari cache");
            displayWeather(data, tempEl, iconEl, weatherContainer);
            return; 
        }
    }

    try {
        const lat = -6.455069401623014; 
        const lon = 106.85066008971673;

        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia%2FJakarta`);
        const data = await response.json();
        const weather = data.current_weather;

        localStorage.setItem('weatherData', JSON.stringify({
            data: weather,
            timestamp: now
        }));

        displayWeather(weather, tempEl, iconEl, weatherContainer);
    } catch (error) {
        console.error("Gagal mengambil data cuaca:", error);
    }
}

function displayWeather(weather, tempEl, iconEl, container) {
    const code = weather.weathercode;
    let icon = "☀️"; 
    if (code >= 1 && code <= 3) icon = "⛅";
    if (code >= 45 && code <= 48) icon = "🌫️";
    if (code >= 51 && code <= 67) icon = "🌧️";
    if (code >= 80 && code <= 82) icon = "🌦️";
    if (code >= 95) icon = "⚡";

    tempEl.innerText = `${Math.round(weather.temperature)}°C`;
    iconEl.innerText = icon;
    container.classList.remove('hidden');
}

// Inisialisasi menggunakan Defer.dom saat elemen widget navigasi / jam / cuaca masuk ke view atau diinteraksi
document.addEventListener('DOMContentLoaded', function() {
    // Jalankan jam & cuaca pas elemen #nav-time atau #nav-weather masuk viewport pakai Defer.dom
    Defer.dom('#nav-time, #nav-weather', 0, 'widget-triggered', function(node) {
        updateNavClock();
        updateWeather();

        // Interval per menit untuk jam dan per 30 menit untuk cuaca setelah elemen aktif
        setInterval(updateNavClock, 60000);
        setInterval(updateWeather, 1800000);
    }, { rootMargin: '200px' });


    // Integrasi dengan Alpine.js
    document.addEventListener('alpine:init', () => {
        Alpine.effect(() => {
            if (Alpine.store('nav') && Alpine.store('nav').isOpen) {
                updateNavClock();
            }
        });
    });
});