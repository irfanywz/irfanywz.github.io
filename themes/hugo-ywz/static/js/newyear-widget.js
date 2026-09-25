(function() {
    "use strict";

    // 1. Inject CSS Styles secara otomatis ke dalam <head>
    const styleId = 'newyear-widget-styles';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            #newyear-widget-container {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                position: fixed;
                bottom: 25px;
                right: 25px;
                z-index: 99999;
            }

            .ny-fab {
                width: 55px;
                height: 55px;
                background: linear-gradient(145deg, #111827, #030712);
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

            .ny-fab:hover {
                transform: scale(1.1);
            }

            .ny-card {
                position: absolute;
                bottom: 70px;
                right: 0;
                width: 340px;
                background: linear-gradient(145deg, #0f172a, #020617);
                border: 2px solid #fbbf24;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(251, 191, 36, 0.2);
                color: #f8fafc;
                padding: 24px;
                overflow: hidden;
                user-select: none;
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                pointer-events: none;
                transition: opacity 0.3s ease, transform 0.3s ease;
            }

            .ny-card.active {
                opacity: 1;
                transform: translateY(0) scale(1);
                pointer-events: auto;
            }

            .ny-close-btn {
                position: absolute;
                top: 12px;
                right: 14px;
                background: none;
                border: none;
                color: #94a3b8;
                font-size: 16px;
                cursor: pointer;
                transition: color 0.2s;
            }

            .ny-close-btn:hover {
                color: #fbbf24;
            }

            .ny-card::before {
                content: "🎉";
                position: absolute;
                top: -4px;
                right: 25px;
                font-size: 35px;
                opacity: 0.3;
                pointer-events: none;
            }

            .ny-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 16px;
            }

            .ny-icon {
                font-size: 32px;
                animation: ny-pulse 2s infinite ease-in-out;
            }

            .ny-title-group h2 {
                margin: 0;
                font-size: 18px;
                letter-spacing: 1px;
                color: #fbbf24;
                text-transform: uppercase;
                font-weight: 800;
                text-shadow: 0 0 8px rgba(251, 191, 36, 0.4);
            }

            .ny-date {
                margin: 2px 0 0 0;
                font-size: 12px;
                color: #cbd5e1;
            }

            .ny-clock-box {
                background: rgba(0, 0, 0, 0.4);
                border: 1px solid rgba(251, 191, 36, 0.3);
                border-radius: 10px;
                padding: 12px;
                text-align: center;
                margin-bottom: 16px;
                position: relative;
            }

            .ny-time {
                font-size: 28px;
                font-weight: bold;
                color: #ffffff;
                letter-spacing: 1.5px;
                font-family: monospace;
            }

            .ny-badge {
                display: inline-block;
                margin-top: 4px;
                background: #b45309;
                color: #fef3c7;
                font-size: 10px;
                font-weight: bold;
                padding: 2px 8px;
                border-radius: 20px;
                border: 1px solid #d97706;
                letter-spacing: 0.5px;
                text-transform: uppercase;
            }

            .ny-stats {
                display: flex;
                flex-direction: column;
                gap: 8px;
                font-size: 13px;
                background: rgba(255, 255, 255, 0.03);
                padding: 12px;
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.05);
            }

            .ny-stat-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #e2e8f0;
            }

            .ny-stat-row span:last-child {
                font-weight: 600;
                color: #fbbf24;
            }

            /* Efek Konfeti / Kilau Emas Jatuh */
            .ny-confetti {
                position: fixed;
                top: -10px;
                user-select: none;
                pointer-events: none;
                z-index: 99998;
                font-size: 12px;
                animation: ny-fall linear infinite;
            }

            @keyframes ny-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); filter: drop-shadow(0 0 6px #fbbf24); }
            }

            @keyframes ny-fall {
                0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
                100% { transform: translateY(105vh) rotate(360deg); opacity: 0.2; }
            }
        `;
        document.head.appendChild(style);
    }

    // 2. Audio Terompet / Suara Perayaan Tahun Baru
    const nyAudio = new Audio('https://www.myinstants.com/media/sounds/movie_1.mp3');
    nyAudio.preload = 'auto';

    // 3. Buat Container Utama
    const container = document.createElement('div');
    container.id = 'newyear-widget-container';
    document.body.appendChild(container);

    // 4. Buat Floating Action Button (FAB)
    const fab = document.createElement('div');
    fab.className = 'ny-fab';
    fab.innerHTML = '🎆';
    fab.title = 'Widget Tahun Baru';
    container.appendChild(fab);

    // 5. Buat Kartu Widget Tahun Baru
    const card = document.createElement('div');
    card.className = 'ny-card';
    card.innerHTML = `
        <button class="ny-close-btn" id="ny-close">✕</button>
        
        <div class="ny-header">
            <div class="ny-icon">🎊</div>
            <div class="ny-title-group">
                <h2>Tahun Baru</h2>
                <p class="ny-date">1 Januari • Semangat Baru</p>
            </div>
        </div>

        <div class="ny-clock-box">
            <div class="ny-time" id="ny-time-display">00:00:00</div>
            <div id="ny-badge-container"></div>
        </div>

        <div class="ny-stats">
            <div class="ny-stat-row">
                <span>🎇 Menuju Tahun Baru:</span>
                <span id="ny-countdown">-</span>
            </div>
            <div class="ny-stat-row">
                <span>✨ Status Perayaan:</span>
                <span>Siap Pesta 🥳</span>
            </div>
            <div class="ny-stat-row">
                <span>🎯 Target Resolusi:</span>
                <span style="color: #38bdf8;">Capai Impian</span>
            </div>
        </div>
    `;
    container.appendChild(card);

    // 6. Fungsi Efek Konfeti Emas Berjatuhan
    function createConfetti() {
        const symbols = ['✨', '🌟', '🎊', '🎉', '⭐'];
        const confetti = document.createElement('div');
        confetti.className = 'ny-confetti';
        confetti.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.fontSize = (Math.random() * 8 + 10) + 'px';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }

    let confettiInterval = null;

    // 7. Event Listener Buka/Tutup & Efek Suara
    fab.addEventListener('click', () => {
        const isOpen = card.classList.toggle('active');
        if (isOpen) {
            nyAudio.currentTime = 0;
            nyAudio.play().catch(e => {
                console.log("Audio diblokir browser:", e);
            });
            if (!confettiInterval) {
                confettiInterval = setInterval(createConfetti, 250);
            }
        } else {
            if (confettiInterval) {
                clearInterval(confettiInterval);
                confettiInterval = null;
            }
        }
    });

    document.getElementById('ny-close').addEventListener('click', () => {
        card.classList.remove('active');
        if (confettiInterval) {
            clearInterval(confettiInterval);
            confettiInterval = null;
        }
    });

    // 8. Logika Waktu & Hitung Mundur Tahun Baru
    function updateWidget() {
        const now = new Date();
        
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const timeStr = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}${ampm}`;
        
        const timeDisplay = document.getElementById('ny-time-display');
        if (timeDisplay) timeDisplay.textContent = timeStr;

        // Badge Spesial Tanggal 1 Januari
        const badgeContainer = document.getElementById('ny-badge-container');
        if (badgeContainer) {
            if (now.getMonth() === 0 && now.getDate() === 1) {
                badgeContainer.innerHTML = `<span class="ny-badge">✨ Selamat Tahun Baru! 🎆</span>`;
            } else {
                badgeContainer.innerHTML = ``;
            }
        }

        // Hitung Mundur ke 1 Januari Tahun Berikutnya
        const year = now.getFullYear();
        let nyDate = new Date(year, 0, 1); // 1 Januari tahun ini
        if (now > nyDate) {
            nyDate = new Date(year + 1, 0, 1); // 1 Januari tahun depan
        }
        const diffTime = nyDate - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        const countdownEl = document.getElementById('ny-countdown');
        if (countdownEl) {
            if (diffDays === 0) {
                countdownEl.textContent = "Malam Ini! 🥳";
                countdownEl.style.color = "#ff4d4d";
            } else {
                countdownEl.textContent = `${diffDays} Hari Lagi`;
            }
        }
    }

    setInterval(updateWidget, 1000);
    updateWidget();
})();