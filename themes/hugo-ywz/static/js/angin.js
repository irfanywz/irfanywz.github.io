/**
 * Standalone Wind Effect Script
 * Leaves blowing across the screen + fast wind streaks.
 * Style follows snow.js / hallowen.js conventions.
 */

(function() {
    "use strict";

    // --- Configuration (Adjust these values) ---
    const config = {
        MAX_LEAVES: 10,               // Number of leaves on screen (more is heavier on CPU)
        LEAF_EMOJIS: ['🍃', '🍂', '🌾'],
        MIN_LEAF_SIZE_PX: 12,
        MAX_LEAF_SIZE_PX: 26,
        MAX_STREAKS: 6,               // Number of wind streak lines
        MIN_STREAK_WIDTH_PX: 80,
        MAX_STREAK_WIDTH_PX: 220,
        WIND_SPEED: 2.5,              // Leaf base horizontal speed (higher = stronger wind)
        STREAK_SPEED: 14,             // Streak speed (should be faster than leaves)
        VERTICAL_WOBBLE: 18,          // Max vertical sine wobble amplitude in pixels
        LEAF_OPACITY: 0.55,
        STREAK_OPACITY_MAX: 0.35,
    };

    // --- Variables ---
    const leaves = [];
    const streaks = [];
    let animationFrameId = null;

    // --- Helper Functions ---
    const random = (min, max) => Math.random() * (max - min) + min;
    const randomInt = (max) => Math.floor(Math.random() * max);

    // Account for potential scrollbar width
    const getViewportWidth = () => window.innerWidth - 15;
    const getViewportHeight = () => window.innerHeight;

    function injectBaseStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .wind-leaf {
                position: fixed;
                top: 0;
                left: 0;
                opacity: ${config.LEAF_OPACITY};
                pointer-events: none;
                user-select: none;
                z-index: 9999;
                will-change: transform;
            }
            .wind-streak {
                position: fixed;
                top: 0;
                left: 0;
                height: 2px;
                border-radius: 999px;
                background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%);
                filter: blur(1px);
                pointer-events: none;
                z-index: 9998;
                will-change: transform;
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Creates a leaf element with randomized physics.
     * `initial` = true scatters it across the screen (first load),
     * otherwise it enters from the left edge.
     */
    function createLeaf(initial) {
        const size = random(config.MIN_LEAF_SIZE_PX, config.MAX_LEAF_SIZE_PX);

        const el = document.createElement('span');
        el.className = 'wind-leaf';
        el.textContent = config.LEAF_EMOJIS[randomInt(config.LEAF_EMOJIS.length)];
        el.style.fontSize = `${size}px`;
        document.body.appendChild(el);

        return {
            el: el,
            size: size,
            posx: initial ? random(-size, getViewportWidth()) : -size * 2,
            posy: random(-40, getViewportHeight()),
            rotation: random(0, 360),
            spin: random(0.5, 3) * (Math.random() > 0.5 ? 1 : -1), // deg/frame, either direction
            crds: random(0, Math.PI * 2),
            wob_speed: random(0.01, 0.04),
            speed: config.WIND_SPEED * random(0.7, 1.4),
        };
    }

    function createStreak(initial) {
        const width = random(config.MIN_STREAK_WIDTH_PX, config.MAX_STREAK_WIDTH_PX);

        const el = document.createElement('div');
        el.className = 'wind-streak';
        el.style.width = `${width}px`;
        el.style.opacity = random(0.15, config.STREAK_OPACITY_MAX).toFixed(2);
        document.body.appendChild(el);

        return {
            el: el,
            width: width,
            posx: initial ? random(-width, getViewportWidth()) : -width,
            posy: random(0, getViewportHeight()),
            crds: random(0, Math.PI * 2),
            wob_speed: random(0.02, 0.05),
            wobble_amp: random(4, 14),
            speed: config.STREAK_SPEED * random(0.8, 1.5),
        };
    }

    /**
     * Animation loop using requestAnimationFrame.
     */
    function moveWindItems() {
        const vw = getViewportWidth();
        const vh = getViewportHeight();

        for (const leaf of leaves) {
            leaf.crds += leaf.wob_speed;
            leaf.posx += leaf.speed;
            leaf.rotation += leaf.spin;

            const newY = leaf.posy + Math.sin(leaf.crds) * config.VERTICAL_WOBBLE;

            leaf.el.style.transform =
                `translate(${leaf.posx}px, ${newY}px) rotate(${leaf.rotation}deg)`;

            // Reset once fully off-screen to the right (or wobbled out of bounds)
            if (leaf.posx > vw + leaf.size || newY < -80 || newY > vh + 80) {
                leaf.posx = -leaf.size * 2;
                leaf.posy = random(-40, vh);
            }
        }

        for (const s of streaks) {
            s.crds += s.wob_speed;
            s.posx += s.speed;

            const newY = s.posy + Math.sin(s.crds) * s.wobble_amp;
            const stretch = 1 + Math.sin(s.crds * 3) * 0.15; // subtle gust pulse

            s.el.style.transform = `translate(${s.posx}px, ${newY}px) scaleX(${stretch})`;

            if (s.posx > vw + s.width) {
                s.posx = -s.width;
                s.posy = random(0, vh);
                s.el.style.opacity = random(0.15, config.STREAK_OPACITY_MAX).toFixed(2);
            }
        }

        animationFrameId = requestAnimationFrame(moveWindItems);
    }

    // --- Initialization ---

    function initialize() {
        // Respect users who prefer reduced motion
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        if (document.body) {
            injectBaseStyles();
            for (let i = 0; i < config.MAX_LEAVES; i++) leaves.push(createLeaf(true));
            for (let i = 0; i < config.MAX_STREAKS; i++) streaks.push(createStreak(true));
            moveWindItems();
        } else {
            document.addEventListener('DOMContentLoaded', initialize);
        }
    }

    initialize();
})();
