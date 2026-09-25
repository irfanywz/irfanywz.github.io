(function() {
    "use strict";

    const config = {
        ELEMENT_COUNT: 1,
        ICONS: ['🦇', '🍂', '💀', '🎃', '🕸️'],
        MIN_SIZE: 18,
        MAX_SIZE: 32,
        WIND_SPEED_X: 2.5,
        FALL_SPEED_Y: 0.9,
    };

    const elements = [];

    const random = (min, max) => Math.random() * (max - min) + min;
    const randomInt = (max) => Math.floor(Math.random() * max);

    function injectStyles() {
        if (document.getElementById('halloween-fx-style')) return;
        const style = document.createElement('style');
        style.id = 'halloween-fx-style';
        style.textContent = `
            .hwy-element {
                position: fixed;
                top: 0;
                left: 0;
                opacity: 0.9;
                pointer-events: none;
                user-select: none;
                z-index: 99999;
                will-change: transform;
                filter: drop-shadow(0 0 8px rgba(255, 117, 26, 0.7));
            }
        `;
        document.head.appendChild(style);
    }

    function createSpookyItem(isInitial = false) {
        const size = random(config.MIN_SIZE, config.MAX_SIZE);
        const el = document.createElement('span');
        el.className = 'hwy-element';
        el.textContent = config.ICONS[randomInt(config.ICONS.length)];
        el.style.fontSize = `${size}px`;
        document.body.appendChild(el);

        return {
            el: el,
            size: size,
            x: isInitial ? random(0, window.innerWidth) : random(-120, -20),
            y: isInitial ? random(0, window.innerHeight) : random(-60, 0),
            speedX: config.WIND_SPEED_X * random(0.6, 1.5),
            speedY: config.FALL_SPEED_Y * random(0.5, 1.4),
            rotation: random(0, 360),
            spin: random(0.5, 2.5) * (Math.random() > 0.5 ? 1 : -1),
            waveAngle: random(0, Math.PI * 2),
            waveSpeed: random(0.01, 0.04),
        };
    }

    function animateHalloween() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        for (const item of elements) {
            item.waveAngle += item.waveSpeed;
            item.x += item.speedX + Math.sin(item.waveAngle) * 1.2;
            item.y += item.speedY + Math.cos(item.waveAngle) * 0.8;
            item.rotation += item.spin;

            item.el.style.transform = `translate3d(${item.x}px, ${item.y}px, 0) rotate(${item.rotation}deg)`;

            if (item.x > vw + 60 || item.y > vh + 60) {
                item.x = random(-100, -20);
                item.y = random(-60, 0);
            }
        }

        requestAnimationFrame(animateHalloween);
    }

    function init() {
        injectStyles();
        for (let i = 0; i < config.ELEMENT_COUNT; i++) {
            elements.push(createSpookyItem(true));
        }
        animateHalloween();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();