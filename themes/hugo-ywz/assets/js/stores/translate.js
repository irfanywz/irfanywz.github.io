// Store untuk Google Translate. Dipakai: $store.translate (baseof/translate.html).
// Script Google baru dimuat saat panel dibuka pertama kali.
export function translateStore() {
    return {
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
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                }, 'google_translate_element');
                store.isReady = true; // Gunakan variabel 'store' untuk mengakses state
            };

            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
            this.isLoaded = true;
        },
    };
}
