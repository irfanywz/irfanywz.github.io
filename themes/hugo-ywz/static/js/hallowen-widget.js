(function() {
    "use strict";

    // 1. Inject CSS Styles secara otomatis ke dalam <head>
    const styleId = 'halloween-widget-styles';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #halloween-widget-container {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                position: fixed;
                bottom: 80px;
                right: 10px;
                z-index: 99999;
            }

            .hw-fab {
                width: 55px;
                height: 55px;
                background: linear-gradient(145deg, #2b1810, #1a0f0a);
                border: 2px solid #ff751a;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 28px;
                cursor: pointer;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 117, 26, 0.4);
                transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                user-select: none;
            }

            .hw-fab:hover {
                transform: scale(1.1);
            }

            .hw-card {
                position: absolute;
                bottom: 70px;
                right: 0;
                width: 340px;
                background: linear-gradient(145deg, #18122B, #120C1F);
                border: 2px solid #ff751a;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 117, 26, 0.2);
                color: #f3f3f3;
                padding: 24px;
                overflow: hidden;
                user-select: none;
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                pointer-events: none;
                transition: opacity 0.3s ease, transform 0.3s ease;
            }

            .hw-card.active {
                opacity: 1;
                transform: translateY(0) scale(1);
                pointer-events: auto;
            }

            .hw-close-btn {
                position: absolute;
                top: 12px;
                right: 14px;
                background: none;
                border: none;
                color: #b3a4c4;
                font-size: 16px;
                cursor: pointer;
                transition: color 0.2s;
            }

            .hw-close-btn:hover {
                color: #ff751a;
            }

            .hw-card::before {
                content: "🕸️";
                position: absolute;
                top: -8px;
                right: 25px;
                font-size: 45px;
                opacity: 0.3;
                pointer-events: none;
            }

            .hw-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 16px;
            }

            .hw-pumpkin-icon {
                font-size: 32px;
                animation: hw-pulse 2s infinite ease-in-out;
            }

            .hw-title-group h2 {
                margin: 0;
                font-size: 18px;
                letter-spacing: 1px;
                color: #ff944d;
                text-transform: uppercase;
                font-weight: 800;
                text-shadow: 0 0 8px rgba(255, 148, 77, 0.4);
            }

            .hw-date {
                margin: 2px 0 0 0;
                font-size: 12px;
                color: #b3a4c4;
            }

            .hw-clock-box {
                background: rgba(0, 0, 0, 0.4);
                border: 1px solid rgba(255, 117, 26, 0.3);
                border-radius: 10px;
                padding: 12px;
                text-align: center;
                margin-bottom: 16px;
                position: relative;
            }

            .hw-time {
                font-size: 28px;
                font-weight: bold;
                color: #ffffff;
                letter-spacing: 1.5px;
                font-family: monospace;
            }

            .hw-witching-badge {
                display: inline-block;
                margin-top: 4px;
                background: #4a154b;
                color: #e2b714;
                font-size: 10px;
                font-weight: bold;
                padding: 2px 8px;
                border-radius: 20px;
                border: 1px solid #79277d;
                letter-spacing: 0.5px;
                text-transform: uppercase;
            }

            .hw-stats {
                display: flex;
                flex-direction: column;
                gap: 8px;
                font-size: 13px;
                background: rgba(255, 255, 255, 0.03);
                padding: 12px;
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.05);
            }

            .hw-stat-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #d1c7e0;
            }

            .hw-stat-row span:last-child {
                font-weight: 600;
                color: #ff944d;
            }

            .hw-bat {
                position: absolute;
                font-size: 14px;
                pointer-events: none;
                animation: hw-fly linear infinite;
                opacity: 0.6;
            }

            @keyframes hw-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); filter: drop-shadow(0 0 6px #ff751a); }
            }

            @keyframes hw-fly {
                0% { transform: translate(-30px, 50px) scale(0.6); opacity: 0; }
                50% { opacity: 0.8; }
                100% { transform: translate(380px, -20px) scale(1); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    // 2. Siapkan Objek Audio untuk Sound Effect
    const spookyAudio = new Audio('https://www.myinstants.com/media/sounds/movie_1.mp3');
    spookyAudio.preload = 'auto';

    // 3. Buat Container Utama secara dinamis
    const container = document.createElement('div');
    container.id = 'halloween-widget-container';
    document.body.appendChild(container);

    // 4. Buat Floating Action Button (FAB)
    const fab = document.createElement('div');
    fab.className = 'hw-fab';
    fab.innerHTML = '🎃';
    fab.title = 'Widget Malam Seram';
    container.appendChild(fab);

    // 5. Buat Kotak Kartu Widget (Bahasa Indonesia)
    const card = document.createElement('div');
    card.className = 'hw-card';
    card.innerHTML = `
        <button class="hw-close-btn" id="hw-close">✕</button>
        <div class="hw-bat" style="top: 20px; animation-duration: 7s; animation-delay: 0s;">🦇</div>
        <div class="hw-bat" style="top: 80px; animation-duration: 5s; animation-delay: 3s;">🦇</div>
        
        <div class="hw-header">
            <div class="hw-pumpkin-icon">🎃</div>
            <div class="hw-title-group">
                <h2>Malam Seram</h2>
                <p class="hw-date">31 Oktober • Edisi Khusus</p>
            </div>
        </div>

        <div class="hw-clock-box">
            <div class="hw-time" id="hw-time-display">00:00:00</div>
            <div id="hw-badge-container"></div>
        </div>

        <div class="hw-stats">
            <div class="hw-stat-row">
                <span>👻 Hari Menuju Halloween:</span>
                <span id="hw-countdown">-</span>
            </div>
            <div class="hw-stat-row">
                <span>🌕 Fase Bulan:</span>
                <span>Bulan Cembung</span>
            </div>
            <div class="hw-stat-row">
                <span>🔮 Aktivitas Roh:</span>
                <span style="color: #a366ff;">Sangat Tinggi</span>
            </div>
        </div>
    `;
    container.appendChild(card);

    // 6. Event Listener untuk Buka/Tutup Widget & Play Sound
    fab.addEventListener('click', () => {
        const isOpen = card.classList.toggle('active');
        if (isOpen) {
            spookyAudio.currentTime = 0; // Reset audio ke awal
            spookyAudio.play().catch(e => {
                console.log("Audio diblokir browser sebelum ada interaksi user:", e);
            });
        }
    });

    document.getElementById('hw-close').addEventListener('click', () => {
        card.classList.remove('active');
    });

    // 7. Fungsi Logika Waktu & Hitung Mundur
    function updateWidget() {
        const now = new Date();
        
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const timeStr = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}${ampm}`;
        
        const timeDisplay = document.getElementById('hw-time-display');
        if (timeDisplay) timeDisplay.textContent = timeStr;

        const realHours = now.getHours();
        const badgeContainer = document.getElementById('hw-badge-container');
        if (badgeContainer) {
            if (realHours >= 0 && realHours < 3) {
                badgeContainer.innerHTML = `<span class="hw-witching-badge">⚡ Jam Sihir Aktif</span>`;
            } else {
                badgeContainer.innerHTML = ``;
            }
        }

        const year = now.getFullYear();
        let hallowenDate = new Date(year, 9, 31);
        if (now > hallowenDate) {
            hallowenDate = new Date(year + 1, 9, 31);
        }
        const diffTime = hallowenDate - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        const countdownEl = document.getElementById('hw-countdown');
        if (countdownEl) {
            if (diffDays === 0) {
                countdownEl.textContent = "Malam Ini! 🎃";
                countdownEl.style.color = "#ff4d4d";
            } else {
                countdownEl.textContent = `${diffDays} Hari`;
            }
        }
    }

    setInterval(updateWidget, 1000);
    updateWidget();
})();