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

            // 2. De-obfuscation auth (ambil key & salt dari atribut data-auth yang di-reverse)
            const obfuscatedAuth = targetEl.getAttribute("data-auth") || "";
            const decodedAuth = obfuscatedAuth.split("").reverse().join("");
            const [secretKey, salt] = decodedAuth.split(":");

            if (!secretKey || !salt) {
                console.error("Paywall: Autentikasi kunci atau salt tidak valid.");
                return;
            }

            // 3. Fungsi untuk menyuntikkan konten asli + badge verifikasi Google
            const injectAndExecuteScripts = (container, htmlString, licenseInfo) => {
                let finalContent = htmlString;

                if (licenseInfo) {
                    const formattedExpiry = licenseInfo.expiry 
                        ? new Date(licenseInfo.expiry).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })
                        : 'Aktif Otomatis via Google';

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
                                <div>Status: <strong class="text-gray-900 dark:text-white font-medium">${formattedExpiry}</strong></div>
                            </div>
                        </div>
                    `;
                    finalContent = htmlString + licenseBadgeHTML;
                }

                container.innerHTML = finalContent;

                // Eksekusi ulang script di dalam konten yang di-inject
                const scripts = container.querySelectorAll("script");
                scripts.forEach((oldScript) => {
                    const newScript = document.createElement("script");
                    Array.from(oldScript.attributes).forEach((attr) => {
                        newScript.setAttribute(attr.name, attr.value);
                    });
                    if (oldScript.textContent) {
                        newScript.textContent = oldScript.textContent;
                    }
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
            };

            // 4. Eksekusi dekripsi konten
            const runDecrypt = (rawKey, licenseInfo = null) => {
                var r = hashFormatDecrypt(rawKey, salt);
                var n = decrypt(r, ciphertext);
                if (n) {
                    injectAndExecuteScripts(targetEl, n, licenseInfo);
                    return true;
                }
                return false;
            };

            // 5. Cek Entitlements Google RRM
            const checkGoogleEntitlements = async (basicSubscriptions) => {
                try {
                    if (typeof basicSubscriptions.getEntitlements === "function") {
                        const entitlements = await basicSubscriptions.getEntitlements();
                        if (entitlements && entitlements.hasActiveEntitlement()) {
                            console.log("Akses Google RRM terdeteksi aktif. Membuka konten...");
                            const googleLicenseInfo = {
                                productName: "Langganan Google Reader Revenue Manager",
                                expiry: null,
                                rawKey: "google-swg-active"
                            };
                            runDecrypt(secretKey, googleLicenseInfo);
                            return true;
                        }
                    }
                } catch (err) {
                    console.log("Belum ada langganan Google aktif pada sesi ini.");
                }
                return false;
            };

            // 6. Muat script SwG Google
            if (!window.SWG_BASIC) {
                const s = document.createElement("script");
                s.src = "https://news.google.com/swg/js/v1/swg-basic.js";
                s.async = true;
                document.head.appendChild(s);
            }

            // 7. Inisialisasi Google SwG & Event Listener Tombol
            (self.SWG_BASIC = self.SWG_BASIC || []).push(async basicSubscriptions => {
                try {
                    basicSubscriptions.init({
                        type: "NewsArticle",
                        isPartOfType: ["Product"],
                        isPartOfProductId: "CAowmczhCw:member",
                        clientOptions: { theme: "light", lang: "id" },
                    });

                    // Cek status langganan otomatis saat halaman dimuat
                    const alreadyUnlocked = await checkGoogleEntitlements(basicSubscriptions);
                    if (alreadyUnlocked) return;

                    const btnSubscribe = document.querySelector("#btn-subscribe");
                    if (btnSubscribe) {
                        btnSubscribe.removeAttribute("disabled");
                        
                        btnSubscribe.addEventListener("click", async (e) => {
                            e.preventDefault();
                            try {
                                if (typeof basicSubscriptions.showOffers === "function") {
                                    await basicSubscriptions.showOffers({ isClosable: true });
                                    // Cek ulang entitlements setelah pop-up penawaran ditutup/dibayar
                                    await checkGoogleEntitlements(basicSubscriptions);
                                } else {
                                    alert("Fitur langganan Google belum siap. Pastikan script SwG dimuat dengan benar.");
                                }
                            } catch (err) {
                                console.error("Gagal menampilkan dialog penawaran Google:", err);
                                alert("Terjadi kesalahan saat memuat dialog langganan Google.");
                            }
                        });
                    }
                } catch (err) {
                    console.error("Gagal inisialisasi SwG Basic:", err);
                }
            });

        } catch (err) {
            console.error("Gagal memuat sistem paywall", err);
        }
    };

    // Lazy load pakai IntersectionObserver
    new IntersectionObserver((entries, observer) => {
        entries.some(entry => entry.isIntersecting) && (observer.disconnect(), loadScriptsAndDecrypt());
    }, { root: null, rootMargin: "0px", threshold: 0.1 }).observe(targetEl);
})();