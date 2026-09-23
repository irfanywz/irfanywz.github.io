(async () => {
    const targetEl = document.querySelector("#locked-content");
    if (!targetEl) return;

    const loadScriptsAndDecrypt = async () => {
        try {
            // 1. Muat library CryptoJS
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

            // Fungsi inject konten + badge verifikasi
            const injectAndExecuteScripts = (container, htmlString, licenseInfo) => {
                let finalContent = htmlString;
                if (licenseInfo) {
                    const licenseBadgeHTML = `
                        <div class="mt-8 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-sm text-gray-700 dark:text-gray-300 shadow-xl transition-colors">
                            <div class="flex items-center justify-between mb-3">
                                <span class="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                                    ✨ Akses Premium Terbuka
                                </span>
                                <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">Google Verified</span>
                            </div>
                            <div class="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                                <div>Metode Akses: <strong class="text-gray-900 dark:text-white font-medium">${licenseInfo.productName}</strong></div>
                                <div>Status: <strong class="text-gray-900 dark:text-white font-medium">Aktif Otomatis via Google</strong></div>
                            </div>
                        </div>
                    `;
                    finalContent = htmlString + licenseBadgeHTML;
                }
                container.innerHTML = finalContent;

                container.querySelectorAll("script").forEach((oldScript) => {
                    const newScript = document.createElement("script");
                    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                    if (oldScript.textContent) newScript.textContent = oldScript.textContent;
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
            };

            const runDecrypt = (rawKey, licenseInfo = null) => {
                var r = hashFormatDecrypt(rawKey, salt);
                var n = decrypt(r, ciphertext);
                if (n) {
                    injectAndExecuteScripts(targetEl, n, licenseInfo);
                    return true;
                }
                return false;
            };

            // 2. Muat script swg.js utama (seperti gaya referensi)
            await new Promise((resolve, reject) => {
                if (window.SWG) return resolve();
                const s = document.createElement("script");
                s.src = "https://news.google.com/swg/js/v1/swg.js";
                s.async = true;
                s.onload = resolve;
                s.onerror = reject;
                document.head.appendChild(s);
            });

            // 3. Eksekusi antrean SWG murni tanpa auto-popup
            (self.SWG = self.SWG || []).push(async (subscriptions) => {
                try {
                    // Cek entitlements secara senyap di background
                    const entitlements = await subscriptions.getEntitlements();
                    const isEntitled = entitlements && 
                                       typeof entitlements.enablesThisWithCacheableEntitlements === "function" && 
                                       entitlements.enablesThisWithCacheableEntitlements();

                    if (isEntitled) {
                        console.log("Akses langganan terdeteksi aktif.");
                        runDecrypt(secretKey, { productName: "Google Reader Revenue Manager" });
                        try {
                            if (typeof subscriptions.dismissSwgUI === "function") {
                                subscriptions.dismissSwgUI();
                            }
                        } catch (e) {}
                        return;
                    }

                    // Jika belum berlangganan, aktifkan tombol (TIDAK ADA AUTO-POPUP)
                    const btnSubscribe = document.querySelector("#btn-subscribe");
                    if (btnSubscribe) {
                        btnSubscribe.removeAttribute("disabled");
                        btnSubscribe.addEventListener("click", (e) => {
                            e.preventDefault();
                            subscriptions.showOffers({ isClosable: true });
                        });
                    }
                } catch (err) {
                    console.error("Gagal memeriksa entitlements SWG:", err);
                } paslon: {
                    // Fallback tombol tetap aktif kalau kena error API
                    const btnSubscribe = document.querySelector("#btn-subscribe");
                    if (btnSubscribe) {
                        btnSubscribe.removeAttribute("disabled");
                        btnSubscribe.addEventListener("click", (e) => {
                            e.preventDefault();
                            if (typeof subscriptions.showOffers === "function") {
                                subscriptions.showOffers({ isClosable: true });
                            }
                        });
                    }
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