(function() {
    "use strict";

    // 1. Inject CSS Styles secara otomatis ke dalam <head>
    const styleId = 'ramadhan-widget-styles';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #ramadhan-widget-container {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                position: fixed;
                bottom: 25px;
                right: 25px;
                z-index: 99999;
            }

            .ram-fab {
                width: 55px;
                height: 55px;
                background: linear-gradient(145deg, #064e3b, #022c22);
                border: 2px solid #fbbf24;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 26px;
                cursor: pointer;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7), 0 0 15px rgba(251, 191, 36, 0.4);
                transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                user-select: none;
            }

            .ram-fab:hover {
                transform: scale(1.1);
            }

            .ram-card {
                position: absolute;
                bottom: 70px;
                right: 0;
                width: 340px;
                background: linear-gradient(145deg, #022c22, #021a14);
                border: 2px solid #fbbf24;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(251, 191, 36, 0.2);
                color: #f3f4f6;
                padding: 24px;
                overflow: hidden;
                user-select: none;
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                pointer-events: none;
                transition: opacity 0.3s ease, transform 0.3s ease;
            }

            .ram-card.active {
                opacity: 1;
                transform: translateY(0) scale(1);
                pointer-events: auto;
            }

            .ram-close-btn {
                position: absolute;
                top: 12px;
                right: 14px;
                background: none;
                border: none;
                color: #d1fae5;
                font-size: 16px;
                cursor: pointer;
                transition: color 0.2s;
            }

            .ram-close-btn:hover {
                color: #fbbf24;
            }

            .ram-card::before {
                content: "⭐";
                position: absolute;
                top: -4px;
                right: 25px;
                font-size: 35px;
                opacity: 0.3;
                pointer-events: none;
            }

            .ram-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 16px;
            }

            .ram-icon {
                font-size: 32px;
                animation: ram-pulse 2s infinite ease-in-out;
            }

            .ram-title-group h2 {
                margin: 0;
                font-size: 18px;
                letter-spacing: 1px;
                color: #fbbf24;
                text-transform: uppercase;
                font-weight: 800;
                text-shadow: 0 0 8px rgba(251, 191, 36, 0.4);
            }

            .ram-date {
                margin: 2px 0 0 0;
                font-size: 12px;
                color: #a7f3d0;
            }

            .ram-clock-box {
                background: rgba(0, 0, 0, 0.4);
                border: 1px solid rgba(251, 191, 36, 0.3);
                border-radius: 10px;
                padding: 12px;
                text-align: center;
                margin-bottom: 16px;
                position: relative;
            }

            .ram-time {
                font-size: 28px;
                font-weight: bold;
                color: #ffffff;
                letter-spacing: 1.5px;
                font-family: monospace;
            }

            .ram-badge {
                display: inline-block;
                margin-top: 4px;
                background: #065f46;
                color: #fbbf24;
                font-size: 10px;
                font-weight: bold;
                padding: 2px 8px;
                border-radius: 20px;
                border: 1px solid #047857;
                letter-spacing: 0.5px;
                text-transform: uppercase;
            }

            .ram-stats {
                display: flex;
                flex-direction: column;
                gap: 8px;
                font-size: 13px;
                background: rgba(255, 255, 255, 0.03);
                padding: 12px;
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.05);
            }

            .ram-stat-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #e5e7eb;
            }

            .ram-stat-row span:last-child {
                font-weight: 600;
                color: #fbbf24;
            }

            /* Efek Bintang / Cahaya Berkelap-kelip */
            .ram-star-fx {
                position: fixed;
                color: #fbbf24;
                user-select: none;
                pointer-events: none;
                z-index: 99998;
                opacity: 0.7;
                font-size: 10px;
                animation: ram-twinkle 2s infinite ease-in-out;
            }

            @keyframes ram-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); filter: drop-shadow(0 0 6px #fbbf24); }
            }

            @keyframes ram-twinkle {
                0%, 100% { opacity: 0.2; transform: scale(0.8); }
                50% { opacity: 1; transform: scale(1.2); }
            }
        `;
        document.head.appendChild(style);
    }

    // 2. Audio Nuansa Ramadhan (Sound effect instrumen/rebana)
    const ramAudio = new Audio('https://www.myinstants.com/media/sounds/movie_1.mp3');
    ramAudio.preload = 'auto';

    // 3. Buat Container Utama
    const container = document.createElement('div');
    container.id = 'ramadhan-widget-container';
    document.body.appendChild(container);

    // 4. Buat Floating Action Button (FAB)
    const fab = document.createElement('div');
    fab.className = 'ram-fab';
    fab.innerHTML = '🌙';
    fab.title = 'Widget Ramadhan & Idul Fitri';
    container.appendChild(fab);

    // 5. Buat Kartu Widget Ramadhan
    const card = document.createElement('div');
    card.className = 'ram-card';
    card.innerHTML = `
        <button class="ram-close-btn" id="ram-close">✕</button>
        
        <div class="ram-header">
            <div class="ram-icon">🕌</div>
            <div class="ram-title-group">
                <h2>Ramadhan Mubarak</h2>
                <p class="ram-date">Bulan Suci Penuh Berkah</p>
            </div>
        </div>

        <div class="ram-clock-box">
            <div class="ram-time" id="ram-time-display">00:00:00</div>
            <div id="ram-badge-container"></div>
        </div>

        <div class="ram-stats">
            <div class="ram-stat-row">
                <span>🌙 Menuju Idul Fitri:</span>
                <span id="ram-countdown">-</span>
            </div>
            <div class="ram-stat-row">
                <span>🥣 Waktu Sahur:</span>
                <span>03:30 - 04:30 WIB</span>
            </div>
            <div class="ram-stat-row">
                <span>🌅 Waktu Berbuka:</span>
                <span>± 18:00 WIB</span>
            </div>
        </div>
    `;
    container.appendChild(card);

    // 6. Fungsi Efek Bintang Berkelap-kelip
    function createStars() {
        const star = document.createElement('div');
        star.className = 'ram-star-fx';
        star.innerHTML = '✨';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.animationDuration = (Math.random() * 1.5 + 1) + 's';
        
        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 4000);
    }

    let starInterval = null;

    // 7. Event Listener Buka/Tutup & Efek Suara
    fab.addEventListener('click', () => {
        const isOpen = card.classList.toggle('active');
        if (isOpen) {
            ramAudio.currentTime = 0;
            ramAudio.play().catch(e => {
                console.log("Audio diblokir browser:", e);
            });
            if (!starInterval) {
                starInterval = setInterval(createStars, 400);
            }
        } else {
            if (starInterval) {
                clearInterval(starInterval);
                starInterval = null;
            }
        }
    });

    document.getElementById('ram-close').addEventListener('click', () => {
        card.classList.remove('active');
        if (starInterval) {
            clearInterval(starInterval);
            starInterval = null;
        }
    });

    // 8. Logika Waktu & Indikator Sahur/Berbuka
    function updateWidget() {
        const now = new Date();
        
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const timeStr = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
        
        const timeDisplay = document.getElementById('ram-time-display');
        if (timeDisplay) timeDisplay.textContent = timeStr;

        // Deteksi Status Waktu (Sahur / Berbuka / Biasa)
        const currentHour = now.getHours();
        const badgeContainer = document.getElementById('ram-badge-container');
        if (badgeContainer) {
            if (currentHour >= 3 && currentHour < 5) {
                badgeContainer.innerHTML = `<span class="ram-badge">🥣 Waktu Sahur Aktif</span>`;
            } else if (currentHour >= 17 && currentHour < 19) {
                badgeContainer.innerHTML = `<span class="ram-badge">🌅 Bersiap Berbuka</span>`;
            } else {
                badgeContainer.innerHTML = `<span class="ram-badge">✨ Perbanyak Ibadah</span>`;
            }
        }

        // Estimasi Hitung Mundur Sederhana (Contoh target Idul Fitri / Pergantian siklus)
        // Kamu bisa menyesuaikan tanggal target Idul Fitri sesuai tahun Hijriyah yang berlaku
        const year = now.getFullYear();
        let targetEid = new Date(year, 2, 31); // Perkiraan contoh
        if (now > targetEid) {
            targetEid = new Date(year + 1, 2, 20);
        }
        const diffTime = targetEid - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        const countdownEl = document.getElementById('ram-countdown');
        if (countdownEl) {
            countdownEl.textContent = `${diffDays > 0 ? diffDays : 0} Hari Lagi`;
        }
    }

    setInterval(updateWidget, 1000);
    updateWidget();
})();