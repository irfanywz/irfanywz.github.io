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
                    includedLanguages: 'id,en,zh-CN,ja,ru,ar,ko',
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

    Alpine.store('exitIntent', {
        isVisible: false,
        hasBeenTriggered: false,
        
        init() {
            // Cek apakah user pernah menekan "Jangan Tampilkan Lagi" sebelumnya
            if (sessionStorage.getItem('exit_intent_shown_this_session')) {
                this.hasBeenTriggered = true;
                return;
            }

            const lastShown = localStorage.getItem('exit_intent_last_shown');
            const oneDay = 24 * 60 * 60 * 1000; // 24 jam dalam milidetik

            if (lastShown && (Date.now() - lastShown < oneDay)) {
                this.hasBeenTriggered = true;
                return;
            }

            // 1. Trigger Desktop: Mouse meninggalkan area halaman ke atas
            document.addEventListener('mouseleave', (e) => {
                if (e.clientY <= 0) {
                    this.trigger();
                }
            });

            // 2. Trigger Mobile: Deteksi saat user menekan tombol Back
            window.addEventListener('popstate', () => {
                if (!this.hasBeenTriggered) {
                    history.pushState(null, '', window.location.href);
                    this.trigger();
                }
            });

            if (window.history.state === null) {
                history.pushState(null, '', window.location.href);
            }
        },

        trigger() {
            if (this.hasBeenTriggered) return;

            // Sekarang popup langsung muncul ketika di-trigger (tanpa langsung set storage otomatis)
            this.isVisible = true;
            this.hasBeenTriggered = true;
        },

        close() {
            // Tutup biasa: Hanya menutup modal, localStorage/sessionStorage TIDAK di-set, 
            // sehingga kalau nanti kursor naik lagi ke atas (atau pindah halaman lalu balik), popup bisa muncul lagi.
            this.isVisible = false;
        },

        dontShowAgain() {
            // Tutup modal DAN set storage agar tidak muncul lagi dalam 24 jam / sesi ini
            this.isVisible = false;
            
            localStorage.setItem('exit_intent_last_shown', Date.now());
            sessionStorage.setItem('exit_intent_shown_this_session', 'true');
        }
    });

    Alpine.data('pageLoader', () => ({
        loading: false,
        progress: 0,
        timer: null,

        init() {
            // Reset total jika halaman kembali dari cache browser (Tombol Back/Forward)
            window.addEventListener('pageshow', (event) => {
                if (event.persisted) {
                    this.forceStop();
                } else {
                    this.finish();
                }
            });
        },

        handleClick(e) {
            const link = e.target.closest('a');
            if (!link || !link.href) return;

            const targetUrl = link.href;
            const currentUrl = window.location.href;

            // Validasi ketat link internal
            const isInternal = targetUrl.startsWith(window.location.origin) && 
                               !targetUrl.includes('#') && 
                               targetUrl !== currentUrl &&
                               link.getAttribute('target') !== '_blank' &&
                               !link.hasAttribute('download');

            if (isInternal) {
                this.start();
            }
        },

        start() {
            // Kalau lagi proses, clear dulu biar gak numpuk
            this.clearTimer();
            this.loading = true;
            this.progress = 15;
            
            // Simulasi progress naik perlahan tapi berhenti di 85% nunggu halaman beneran pindah
            this.timer = setInterval(() => {
                if (this.progress < 85) {
                    this.progress += Math.floor(Math.random() * 15) + 5;
                }
            }, 100);
        },

        finish() {
            if (!this.loading) return;
            this.clearTimer();
            this.progress = 100;
            
            // Tunggu animasi CSS selesai baru di-hide total
            setTimeout(() => {
                this.loading = false;
                this.progress = 0;
            }, 300);
        },

        forceStop() {
            this.clearTimer();
            this.loading = false;
            this.progress = 0;
        },

        clearTimer() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    }));   
});