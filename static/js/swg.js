(async () => {
    const targetEl = document.querySelector("#locked-content");
    if (!targetEl) return;

    const loadScriptsAndDecrypt = async () => {
        try {
            // 1. Muat library CryptoJS jika belum ada
            if (typeof CryptoJS === "undefined") {
                await new Promise((resolve, reject) => {
                    const s = document.createElement("script");
                    s.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js";
                    s.async = true;
                    s.onload = resolve;
                    s.onerror = reject;
                    document.head.appendChild(s);
                });
            }

            const hashFormatDecrypt = (t, e) => CryptoJS.PBKDF2(t, e, { keySize: 8, iterations: 1e3 }).toString();
            const decrypt = (t, e) => {
                var r = e.substring(0, 64), n = e.substring(64);
                return CryptoJS.HmacSHA256(n, CryptoJS.SHA256(t).toString()).toString() === r && decryptMsg(n, t);
            };
            const decryptMsg = (t, e) => {
                var r = CryptoJS.enc.Hex.parse(t.substr(0, 32)), n = t.substring(32);
                return CryptoJS.AES.decrypt(n, e, { iv: r, padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CBC }).toString(CryptoJS.enc.Utf8);
            };

            const ciphertext = targetEl.getAttribute("data-enc");
            const obfuscatedAuth = targetEl.getAttribute("data-auth") || "";
            const decodedAuth = obfuscatedAuth.split("").reverse().join("");
            const [secretKey, salt] = decodedAuth.split(":");

            if (!secretKey || !salt) return;

            // 2. Fungsi suntik konten + card terima kasih yang bersih
            const injectAndExecuteScripts = (container, htmlString) => {
                const thankYouCardHTML = `
                    <div class="mt-8 p-6 rounded-3xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/40 text-sm text-gray-700 dark:text-gray-300 shadow-xl transition-colors">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-600/30">
                                <span class="icon-[lucide--sparkles]"></span>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900 dark:text-white">Terima Kasih Telah Berlangganan!</h4>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Akses premium terverifikasi otomatis oleh Google.</p>
                            </div>
                        </div>
                        <p class="text-xs text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                            Nikmati akses penuh ke seluruh konten eksklusif, tutorial mendalam, dan update artikel terbaru langsung di sini.
                        </p>
                    </div>
                `;

                container.innerHTML = htmlString + thankYouCardHTML;

                // Eksekusi ulang script di dalam konten yang di-inject
                container.querySelectorAll("script").forEach((oldScript) => {
                    const newScript = document.createElement("script");
                    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                    if (oldScript.textContent) newScript.textContent = oldScript.textContent;
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
            };

            const runDecrypt = (rawKey) => {
                var r = hashFormatDecrypt(rawKey, salt);
                var n = decrypt(r, ciphertext);
                if (n) {
                    injectAndExecuteScripts(targetEl, n);
                    return true;
                }
                return false;
            };

            // 3. Muat script swg.js utama
            await new Promise((resolve, reject) => {
                if (window.SWG) return resolve();
                const s = document.createElement("script");
                s.src = "https://news.google.com/swg/js/v1/swg.js";
                s.async = true;
                s.onload = resolve;
                s.onerror = reject;
                document.head.appendChild(s);
            });

            // 4. Inisialisasi Google SWG & Cek Entitlements
            (self.SWG = self.SWG || []).push(async (subscriptions) => {
                try {
                    const checkEntitlementsAndUnlock = async () => {
                        const entitlements = await subscriptions.getEntitlements();
                        const isEntitled = entitlements && 
                                           typeof entitlements.enablesThisWithCacheableEntitlements === "function" && 
                                           entitlements.enablesThisWithCacheableEntitlements();

                        if (isEntitled) {
                            runDecrypt(secretKey);
                            try {
                                if (typeof subscriptions.dismissSwgUI === "function") {
                                    subscriptions.dismissSwgUI();
                                }
                            } catch (e) {}
                            return true;
                        }
                        return false;
                    };

                    // Cek akses otomatis di awal secara senyap
                    const alreadyUnlocked = await checkEntitlementsAndUnlock();
                    if (alreadyUnlocked) return;

                    // Aktifkan tombol langganan (tanpa auto-popup)
                    const btnSubscribe = document.querySelector("#btn-subscribe");
                    if (btnSubscribe) {
                        btnSubscribe.removeAttribute("disabled");
                        btnSubscribe.addEventListener("click", async (e) => {
                            e.preventDefault();
                            try {
                                if (typeof subscriptions.showOffers === "function") {
                                    // Tampilkan dialog offer, tunggu sampai user selesai transaksi/tutup pop-up
                                    await subscriptions.showOffers({ isClosable: true });
                                    
                                    // Begitu pop-up ditutup, langsung cek ulang tanpa perlu refresh!
                                    await checkEntitlementsAndUnlock();
                                }
                            } catch (err) {
                                console.error("Gagal memproses penawaran Google:", err);
                            }
                        });
                    }
                } catch (err) {
                    console.error("Gagal memeriksa entitlements SWG:", err);
                }
            });

        } catch (err) {
            console.error("Gagal memuat sistem paywall", err);
        }
    };

    // Lazy load pakai IntersectionObserver (40% elemen masuk viewport baru script jalan)
    new IntersectionObserver((entries, observer) => {
        entries.some(entry => entry.isIntersecting) && (observer.disconnect(), loadScriptsAndDecrypt());
    }, { root: null, rootMargin: "0px", threshold: 0.4 }).observe(targetEl);
})();