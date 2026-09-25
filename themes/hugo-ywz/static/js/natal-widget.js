(function() {
    "use strict";

    // 1. Inject CSS Styles secara otomatis ke dalam <head>
    const styleId = 'xmas-widget-styles';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #xmas-widget-container {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                position: fixed;
                bottom: 25px;
                right: 25px;
                z-index: 99999;
            }

            .xmas-fab {
                width: 55px;
                height: 55px;
                background: linear-gradient(145deg, #b30000, #800000);
                border: 2px solid #ffcc00;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 28px;
                cursor: pointer;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 204, 0, 0.4);
                transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                user-select: none;
            }

            .xmas-fab:hover {
                transform: scale(1.1);
            }

            .xmas-card {
                position: absolute;
                bottom: 70px;
                right: 0;
                width: 340px;
                background: linear-gradient(145deg, #0b2e13, #06180a);
                border: 2px solid #d4af37;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.2);
                color: #f3f3f3;
                padding: 24px;
                overflow: hidden;
                user-select: none;
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                pointer-events: none;
                transition: opacity 0.3s ease, transform 0.3s ease;
            }

            .xmas-card.active {
                opacity: 1;
                transform: translateY(0) scale(1);
                pointer-events: auto;
            }

            .xmas-close-btn {
                position: absolute;
                top: 12px;
                right: 14px;
                background: none;
                border: none;
                color: #ffcccc;
                font-size: 16px;
                cursor: pointer;
                transition: color 0.2s;
            }

            .xmas-close-btn:hover {
                color: #ffcc00;
            }

            .xmas-card::before {
                content: "🎄";
                position: absolute;
                top: -8px;
                right: 25px;
                font-size: 45px;
                opacity: 0.3;
                pointer-events: none;
            }

            .xmas-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 16px;
            }

            .xmas-santa-icon {
                font-size: 32px;
                animation: xmas-pulse 2s infinite ease-in-out;
            }

            .xmas-title-group h2 {
                margin: 0;
                font-size: 18px;
                letter-spacing: 1px;
                color: #ff4d4d;
                text-transform: uppercase;
                font-weight: 800;
                text-shadow: 0 0 8px rgba(255, 77, 77, 0.4);
            }

            .xmas-date {
                margin: 2px 0 0 0;
                font-size: 12px;
                color: #a3c1ad;
            }

            .xmas-clock-box {
                background: rgba(0, 0, 0, 0.4);
                border: 1px solid rgba(212, 175, 55, 0.3);
                border-radius: 10px;
                padding: 12px;
                text-align: center;
                margin-bottom: 16px;
                position: relative;
            }

            .xmas-time {
                font-size: 28px;
                font-weight: bold;
                color: #ffffff;
                letter-spacing: 1.5px;
                font-family: monospace;
            }

            .xmas-badge {
                display: inline-block;
                margin-top: 4px;
                background: #800000;
                color: #ffcc00;
                font-size: 10px;
                font-weight: bold;
                padding: 2px 8px;
                border-radius: 20px;
                border: 1px solid #b30000;
                letter-spacing: 0.5px;
                text-transform: uppercase;
            }

            .xmas-stats {
                display: flex;
                flex-direction: column;
                gap: 8px;
                font-size: 13px;
                background: rgba(255, 255, 255, 0.03);
                padding: 12px;
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.05);
            }

            .xmas-stat-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #d1e7dd;
            }

            .xmas-stat-row span:last-child {
                font-weight: 600;
                color: #ffcc00;
            }

            /* Efek Salju Turun */
            .xmas-snowflake {
                position: fixed;
                top: -10px;
                color: #ffffff;
                user-select: none;
                pointer-events: none;
                z-index: 99998;
                opacity: 0.8;
                font-size: 12px;
                animation: xmas-fall linear infinite;
            }

            @keyframes xmas-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); filter: drop-shadow(0 0 6px #ffcc00); }
            }

            @keyframes xmas-fall {
                0% { transform: translateY(-10px) rotate(0deg); }
                100% { transform: translateY(105vh) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    // 2. Audio Lonceng Natal (Jingle Bells / Sleigh Bells Sound)
    const xmasAudio = new Audio('https://www.myinstants.com/media/sounds/christmas-jingles.mp3');
    xmasAudio.preload = 'auto';

    // 3. Buat Container Utama
    const container = document.createElement('div');
    container.id = 'xmas-widget-container';
    document.body.appendChild(container);

    // 4. Buat Floating Action Button (FAB)
    const fab = document.createElement('div');
    fab.className = 'xmas-fab';
    fab.innerHTML = '🎅';
    fab.title = 'Widget Natal & Tahun Baru';
    container.appendChild(fab);

    // 5. Buat Kartu Widget Natal
    const card = document.createElement('div');
    card.className = 'xmas-card';
    card.innerHTML = `
        <button class="xmas-close-btn" id="xmas-close">✕</button>
        
        <div class="xmas-header">
            <div class="xmas-santa-icon">🎁</div>
            <div class="xmas-title-group">
                <h2>Suasana Natal</h2>
                <p class="xmas-date">25 Desember • Musim Liburan</p>
            </div>
        </div>

        <div class="xmas-clock-box">
            <div class="xmas-time" id="xmas-time-display">00:00:00</div>
            <div id="xmas-badge-container"></div>
        </div>

        <div class="xmas-stats">
            <div class="xmas-stat-row">
                <span>🎄 Hari Menuju Natal:</span>
                <span id="xmas-countdown">-</span>
            </div>
            <div class="xmas-stat-row">
                <span>❄️ Suhu Musim Dingin:</span>
                <span>Salju Turun 🌨️</span>
            </div>
            <div class="xmas-stat-row">
                <span>⭐ Status Santa:</span>
                <span style="color: #ff4d4d;">Menyiapkan Hadiah</span>
            </div>
        </div>
    `;
    container.appendChild(card);

    // 6. Fungsi Membuat Efek Salju
    function createSnowflakes() {
        const snowflake = document.createElement('div');
        snowflake.className = 'xmas-snowflake';
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    let snowInterval = null;

    // 7. Event Listener Buka/Tutup & Efek Suara
    fab.addEventListener('click', () => {
        const isOpen = card.classList.toggle('active');
        if (isOpen) {
            xmasAudio.currentTime = 0;
            xmasAudio.play().catch(e => {
                console.log("Audio diblokir browser:", e);
            });
            // Aktifkan salju turun saat widget dibuka
            if (!snowInterval) {
                snowInterval = setInterval(createSnowflakes, 300);
            }
        } else {
            if (snowInterval) {
                clearInterval(snowInterval);
                snowInterval = null;
            }
        }
    });

    document.getElementById('xmas-close').addEventListener('click', () => {
        card.classList.remove('active');
        if (snowInterval) {
            clearInterval(snowInterval);
            snowInterval = null;
        }
    });

    // 8. Logika Waktu & Hitung Mundur Natal
    function updateWidget() {
        const now = new Date();
        
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const timeStr = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}${ampm}`;
        
        const timeDisplay = document.getElementById('xmas-time-display');
        if (timeDisplay) timeDisplay.textContent = timeStr;

        // Badge Spesial Tanggal 25 Desember
        const badgeContainer = document.getElementById('xmas-badge-container');
        if (badgeContainer) {
            if (now.getMonth() === 11 && now.getDate() === 25) {
                badgeContainer.innerHTML = `<span class="xmas-badge">✨ Selamat Hari Natal! 🎄</span>`;
            } else {
                badgeContainer.innerHTML = ``;
            }
        }

        // Hitung Mundur ke 25 Desember
        const year = now.getFullYear();
        let xmasDate = new Date(year, 11, 25); // Bulan 11 = Desember
        if (now > xmasDate) {
            xmasDate = new Date(year + 1, 11, 25);
        }
        const diffTime = xmasDate - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        const countdownEl = document.getElementById('xmas-countdown');
        if (countdownEl) {
            if (diffDays === 0) {
                countdownEl.textContent = "Hari Ini! 🎅";
                countdownEl.style.color = "#ff4d4d";
            } else {
                countdownEl.textContent = `${diffDays} Hari`;
            }
        }
    }

    setInterval(updateWidget, 1000);
    updateWidget();
})();