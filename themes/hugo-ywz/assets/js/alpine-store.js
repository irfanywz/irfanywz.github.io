document.addEventListener('alpine:init', () => {
    // Store untuk Navigasi (Offcanvas)
    Alpine.store('nav', {
        isOpen: false,
        toggle() {
            this.isOpen = !this.isOpen;
            // Mencegah scroll pada body saat menu terbuka
            document.body.style.overflow = this.isOpen ? 'hidden' : '';
        },
        close() {
            this.isOpen = false;
            document.body.style.overflow = '';
        }
    });

    // Store untuk Theme (Dark Mode)
    Alpine.store('theme', {
        isDark: document.documentElement.classList.contains('dark'),
        toggle() {
            this.isDark = !this.isDark;
            localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', this.isDark);
        }
    });

    // Store untuk Share Offcanvas
    Alpine.store('share', {
        isOpen: false,
        toggle() {
            this.isOpen = !this.isOpen;
            document.body.style.overflow = this.isOpen ? 'hidden' : '';
        },
        close() { this.isOpen = false; document.body.style.overflow = ''; }
    });

    // Store untuk Lightbox Gambar
    Alpine.store('lightbox', {
        isOpen: false,
        src: '',
        alt: '',
        desc: '',
        images: [],
        index: 0,
        
        open(src, alt, desc, group) {
            this.src = src;
            this.alt = alt || '';
            this.desc = desc || '';
            this.isOpen = true;
            document.body.style.overflow = 'hidden';

            // Logika Grouping
            if (group) {
                const els = document.querySelectorAll(`.image-grid-item[data-group="${group}"]`);
                if (els.length > 1) {
                    this.images = Array.from(els).map(el => ({
                        src: el.dataset.src,
                        alt: el.dataset.alt,
                        desc: el.dataset.desc || ''
                    }));
                    this.index = this.images.findIndex(img => img.src === src);
                } else {
                    this.images = [];
                }
            } else {
                this.images = [];
            }
        },
        next() {
            if (this.images.length === 0) return;
            this.index = (this.index + 1) % this.images.length;
            this.updateView();
        },
        prev() {
            if (this.images.length === 0) return;
            this.index = (this.index - 1 + this.images.length) % this.images.length;
            this.updateView();
        },
        updateView() {
            const img = this.images[this.index];
            this.src = img.src;
            this.alt = img.alt;
            this.desc = img.desc;
        },
        close() {
            this.isOpen = false;
            setTimeout(() => {
                this.src = '';
                this.alt = '';
                this.desc = '';
                this.images = [];
            }, 300); // Tunggu transisi selesai
            document.body.style.overflow = '';
        }
    });

    // Store untuk Cookie Consent
    Alpine.store('cookieConsent', {
        isVisible: false,
        init() {
            // Tampilkan notifikasi jika persetujuan belum disimpan di localStorage
            if (!localStorage.getItem('cookie_consent_accepted')) {
                // Beri jeda sedikit agar tidak terlalu mengganggu saat halaman dimuat
                setTimeout(() => {
                    this.isVisible = true;
                }, 2000); // Tampil setelah 2 detik
            }
        },
        accept() {
            localStorage.setItem('cookie_consent_accepted', 'true');
            this.isVisible = false;
        }
    });

    // Store untuk Google Translate
    Alpine.store('translate', {
        isOpen: false,
        isLoaded: false,
        isReady: false,

        toggle() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.loadScript();
            }
        },

        close() {
            this.isOpen = false;
        },

        loadScript() {
            if (this.isLoaded) return;

            const store = this; // Simpan konteks 'this' dari store

            window.googleTranslateElementInit = () => {
                new google.translate.TranslateElement({
                    pageLanguage: 'id',
                    includedLanguages: 'en',
                    autoDisplay: false,
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
                store.isReady = true; // Gunakan variabel 'store' untuk mengakses state
            };

            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
            this.isLoaded = true;
        }
    });

    // Store untuk Exit Intent Popup
    Alpine.store('exitIntent', {
        isVisible: false,
        hasBeenTriggered: false,
        
        init() {
            // Menambahkan event listener ke body dengan opsi { once: true }
            // agar hanya terpicu sekali saat mouse meninggalkan halaman.
            document.body.addEventListener('mouseleave', () => {
                this.trigger();
            }, { once: true });
        },

        trigger() {
            if (this.hasBeenTriggered) return;

            const lastShown = localStorage.getItem('exit_intent_last_shown');
            const hasBeenShownThisSession = sessionStorage.getItem('exit_intent_shown_this_session');
            const oneDay = 24 * 60 * 60 * 1000; // 24 jam dalam milidetik

            // Kondisi untuk menampilkan popup:
            // 1. Belum pernah ditampilkan di sesi ini.
            // 2. Belum pernah ditampilkan sama sekali ATAU sudah lebih dari 24 jam sejak terakhir ditampilkan.
            if (!hasBeenShownThisSession && (!lastShown || (Date.now() - lastShown > oneDay))) {
                this.isVisible = true;
                this.hasBeenTriggered = true;
                
                // Set localStorage untuk menandai waktu terakhir popup muncul
                localStorage.setItem('exit_intent_last_shown', Date.now());
                // Set sessionStorage agar tidak muncul lagi di tab/sesi yang sama
                sessionStorage.setItem('exit_intent_shown_this_session', 'true');
            }
        },
        close() {
            this.isVisible = false;
        }
    });
});