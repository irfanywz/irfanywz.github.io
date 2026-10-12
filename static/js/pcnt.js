document.addEventListener('alpine:init', () => {
    Alpine.data('encryptionTool', () => ({
        isUnlocked: localStorage.getItem('encryption_tool_unlocked') === 'true',
        gateKey: '',
        gateError: false,
        correctKey: 'irfanywz',

        secretKey: 'irfanywz',
        inputMode: 'html',
        rawContent: '',
        encryptedResult: '',
        copyStatus: '',
        scriptsLoaded: false,

        init() {
            if (this.isUnlocked) {
                this.loadExternalScripts();
            }
        },

        loadExternalScripts() {
            if (this.scriptsLoaded) return Promise.resolve();

            const scripts = [
                'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js'
            ];

            let promises = scripts.map(src => {
                return new Promise((resolve, reject) => {
                    if (document.querySelector(`script[src="${src}"]`)) {
                        resolve();
                        return;
                    }
                    let script = document.createElement('script');
                    script.src = src;
                    script.onload = resolve;
                    script.onerror = reject;
                    document.head.appendChild(script);
                });
            });

            return Promise.all(promises).then(() => {
                this.scriptsLoaded = true;
            });
        },

        unlockTool() {
            if (this.gateKey === this.correctKey) {
                this.loadExternalScripts().then(() => {
                    this.isUnlocked = true;
                    this.gateError = false;
                    localStorage.setItem('encryption_tool_unlocked', 'true');
                }).catch(err => {
                    console.error("Gagal memuat pustaka eksternal:", err);
                    alert("Gagal memuat dependensi enkripsi. Periksa koneksi internet Anda.");
                });
            } else {
                this.gateError = true;
            }
        },

        lockToolAgain() {
            this.isUnlocked = false;
            this.gateKey = '';
            localStorage.removeItem('encryption_tool_unlocked');
        },

        generatePaywall() {
            if (!this.secretKey) {
                alert('Masukkan kunci rahasia terlebih dahulu!');
                return;
            }

            if (typeof CryptoJS === 'undefined') {
                alert('Pustaka kriptografi belum siap, mohon tunggu sebentar.');
                return;
            }

            let content = this.rawContent;

            if (this.inputMode === 'markdown' && typeof marked !== 'undefined') {
                content = marked.parse(content);
            }

            const salt = CryptoJS.lib.WordArray.random(16).toString();
            const hashKey = CryptoJS.PBKDF2(this.secretKey, salt, { keySize: 8, iterations: 1e3 }).toString();
            
            const iv = CryptoJS.lib.WordArray.random(16);
            const encrypted = CryptoJS.AES.encrypt(content, hashKey, { iv: iv, padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CBC });
            const cipherText = iv.toString() + encrypted.toString();

            const hmac = CryptoJS.HmacSHA256(cipherText, CryptoJS.SHA256(hashKey).toString()).toString() + cipherText;
            
            const combinedAuth = `${this.secretKey}:${salt}`;
            const obfuscatedAuth = combinedAuth.split('').reverse().join('');

            const openTag = '{{' + '<';
            const closeTag = '>' + '}}';
            
            this.encryptedResult = `${openTag} paywall enc=${JSON.stringify(hmac)} auth=${JSON.stringify(obfuscatedAuth)} ${closeTag}`;
            this.copyStatus = '';
        },

        copyToClipboard() {
            if (!this.encryptedResult) return;
            
            navigator.clipboard.writeText(this.encryptedResult).then(() => {
                this.copyStatus = 'Tersalin ke clipboard!';
                setTimeout(() => { this.copyStatus = ''; }, 3000);
            }).catch(() => {
                this.copyStatus = 'Gagal menyalin.';
            });
        }
    }));
});