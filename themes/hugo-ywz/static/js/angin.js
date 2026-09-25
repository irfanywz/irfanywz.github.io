/**
 * Stardew Valley Fall Weather Effect (Wind & Leaves)
 * Lightweight & Cozy Autumn Ambience
 */

(function() {
    "use strict";

    const config = {
        LEAF_COUNT: 1,
        LEAF_EMOJIS: ['🍂', '🍁', '🍃'],
        MIN_SIZE: 14,
        MAX_SIZE: 24,
        WIND_SPEED_X: 3.5,     // Kecepatan dorong angin ke kanan
        FALL_SPEED_Y: 1.2,     // Kecepatan jatuh vertikal
        STREAK_COUNT: 5,       // Jumlah garis angin cepat ala Stardew
    };

    const items = [];
    const streaks = [];

    const random = (min, max) => Math.random() * (max - min) + min;
    const randomInt = (max) => Math.floor(Math.random() * max);

    // --- Inject CSS Khusus ---
    function injectStyles() {
        if (document.getElementById('stardew-fall-style')) return;
        const style = document.createElement('style');
        style.id = 'stardew-fall-style';
        style.textContent = `
            .sdv-leaf {
                position: fixed;
                top: 0;
                left: 0;
                opacity: 0.8;
                pointer-events: none;
                user-select: none;
                z-index: 9999;
                will-change: transform;
            }
            .sdv-streak {
                position: fixed;
                top: 0;
                left: 0;
                height: 1.5px;
                border-radius: 999px;
                background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%);
                pointer-events: none;
                z-index: 9998;
                will-change: transform;
            }
        `;
        document.head.appendChild(style);
    }

    // --- Buat Objek Daun Terbang Miring ---
    function createLeaf(isInitial = false) {
        const size = random(config.MIN_SIZE, config.MAX_SIZE);
        const el = document.createElement('span');
        el.className = 'sdv-leaf';
        el.textContent = config.LEAF_EMOJIS[randomInt(config.LEAF_EMOJIS.length)];
        el.style.fontSize = `${size}px`;
        document.body.appendChild(el);

        return {
            el: el,
            size: size,
            x: isInitial ? random(0, window.innerWidth) : random(-100, -20),
            y: isInitial ? random(0, window.innerHeight) : random(-50, 0),
            speedX: config.WIND_SPEED_X * random(0.8, 1.4),
            speedY: config.FALL_SPEED_Y * random(0.7, 1.3),
            rotation: random(0, 360),
            spin: random(1, 3) * (Math.random() > 0.5 ? 1 : -1),
            waveAngle: random(0, Math.PI * 2),
            waveSpeed: random(0.02, 0.05),
        };
    }

    // --- Buat Garis Angin Cepat (Wind Gust Streaks) ---
    function createStreak(isInitial = false) {
        const width = random(100, 250);
        const el = document.createElement('div');
        el.className = 'sdv-streak';
        el.style.width = `${width}px`;
        document.body.appendChild(el);

        return {
            el: el,
            width: width,
            x: isInitial ? random(0, window.innerWidth) : -width,
            y: random(0, window.innerHeight),
            speed: config.WIND_SPEED_X * random(3.5, 5.5), // Jauh lebih cepat dari daun
            opacity: random(0.1, 0.3),
        };
    }

    // --- Loop Animasi Utama ---
    function animateWeather() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // Update Daun
        for (const leaf of items) {
            leaf.waveAngle += leaf.waveSpeed;
            // Angin meniup ke kanan sambil daunnya berayun naik-turun tipis
            leaf.x += leaf.speedX + Math.sin(leaf.waveAngle) * 0.8;
            leaf.y += leaf.speedY + Math.cos(leaf.waveAngle) * 0.5;
            leaf.rotation += leaf.spin;

            leaf.el.style.transform = `translate3d(${leaf.x}px, ${leaf.y}px, 0) rotate(${leaf.rotation}deg)`;

            // Kalau keluar layar (kanan atau bawah), reset ke kiri/atas
            if (leaf.x > vw + 50 || leaf.y > vh + 50) {
                leaf.x = random(-100, -20);
                leaf.y = random(-50, 0);
            }
        }

        // Update Garis Angin
        for (const s of streaks) {
            s.x += s.speed;
            s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0)`;
            s.el.style.opacity = s.opacity;

            if (s.x > vw + s.width) {
                s.x = -s.width;
                s.y = random(0, vh);
            }
        }

        requestAnimationFrame(animateWeather);
    }

    // --- Inisialisasi ---
    function init() {
        injectStyles();
        for (let i = 0; i < config.LEAF_COUNT; i++) {
            items.push(createLeaf(true));
        }
        for (let i = 0; i < config.STREAK_COUNT; i++) {
            streaks.push(createStreak(true));
        }
        animateWeather();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();