(async () => {
    const targetEl = document.querySelector("#locked-content");
    if (!targetEl) return;

    const LICENSE_SALT = "???";

    const crc32 = (str) => {
        let crc = 0 ^ (-1);
        for (let i = 0; i < str.length; i++) {
            let c = (crc ^ str.charCodeAt(i)) & 0xff;
            for (let j = 0; j < 8; j++) {
                c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
            }
            crc = (crc >>> 8) ^ c;
        }
        return (crc ^ (-1)) >>> 0;
    };

    const loadScriptsAndDecrypt = async () => {
        try {
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

            // --- PENGKABURAN & PEMISAHAN KEY & SALT ---
            // Ambil dari atribut gabungan yang sudah di-reverse (misal: data-auth)
            const obfuscatedAuth = targetEl.getAttribute("data-auth") || "";
            
            // Balikkan teks ke posisi normal, lalu split berdasarkan pemisah (misal tanda titik dua ":")
            const decodedAuth = obfuscatedAuth.split("").reverse().join("");
            const [secretKey, salt] = decodedAuth.split(":");

            if (!secretKey || !salt) {
                console.error("Paywall: Autentikasi kunci atau salt tidak valid.");
                return;
            }

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
                            </div>
                            <div class="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                                <div>Metode Akses: <strong class="text-gray-900 dark:text-white font-medium">${licenseInfo.productName}</strong></div>
                                <div>Status: <strong class="text-gray-900 dark:text-white font-medium">${formattedExpiry}</strong></div>
                            </div>
                        </div>
                    `;

                    finalContent = htmlString + licenseBadgeHTML;

                    window.CURRENT_LICENSE = {
                        product: licenseInfo.productName,
                        expiryDate: new Date(licenseInfo.expiry),
                        rawKey: licenseInfo.rawKey
                    };
                }

                container.innerHTML = finalContent;

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

            const runDecrypt = (rawKey, licenseInfo = null) => {
                var r = hashFormatDecrypt(rawKey, salt);
                var n = decrypt(r, ciphertext);
                if (n) {
                    injectAndExecuteScripts(targetEl, n, licenseInfo);
                    return true;
                }
                return false;
            };

            const verifyAndGetLicense = (licenseKey) => {
                try {
                    const parts = licenseKey.trim().split("-");
                    if (parts.length < 3) return null;

                    const receivedHash = parts[0];
                    const expiryStr = parts[parts.length - 1];
                    const productName = parts.slice(1, parts.length - 1).join("-");
                    const expiryTime = parseInt(expiryStr, 10);

                    if (isNaN(expiryTime) || expiryTime <= Date.now()) {
                        return { valid: false, reason: "Lisensi sudah kedaluwarsa." };
                    }

                    const payloadToVerify = `${productName}:${expiryTime}:${LICENSE_SALT}`;
                    const expectedHash = crc32(payloadToVerify).toString(16);

                    if (expectedHash !== receivedHash) {
                        return { valid: false, reason: "Kode lisensi tidak valid atau telah dimanipulasi." };
                    }

                    return { valid: true, productName, expiry: expiryTime, rawKey: licenseKey };
                } catch (e) {
                    return { valid: false, reason: "Struktur lisensi korup." };
                }
            };

            const savedLicense = localStorage.getItem("irfanywz_secure_license");
            if (savedLicense) {
                const check = verifyAndGetLicense(savedLicense);
                if (check && check.valid) {
                    if (runDecrypt(secretKey, check)) return;
                } else {
                    localStorage.removeItem("irfanywz_secure_license");
                }
            }

            setupSecureLicenseUI(secretKey, runDecrypt, verifyAndGetLicense);

            if (!window.SWG_BASIC) {
                const s = document.createElement("script");
                s.src = "https://news.google.com/swg/js/v1/swg-basic.js";
                s.async = true;
                document.head.appendChild(s);
            }

            (self.SWG_BASIC = self.SWG_BASIC || []).push(basicSubscriptions => {
                try {
                    basicSubscriptions.init({
                        type: "NewsArticle",
                        isPartOfType: ["Product"],
                        isPartOfProductId: "CAowmczhCw:openaccess",
                        clientOptions: { theme: "light", lang: "id" },
                    });

                    const btnSubscribe = document.querySelector("#btn-subscribe");
                    if (btnSubscribe) {
                        btnSubscribe.removeAttribute("disabled");
                        
const SIMULATE_GOOGLE_SUCCESS = false; // Ubah ke true kalau mau testing lokal

btnSubscribe.addEventListener("click", async (e) => {
    e.preventDefault();

    // 1. MODE SIMULASI (Buat testing lokal)
    if (SIMULATE_GOOGLE_SUCCESS) {
        console.log("🛠️ [SIMULASI] Memproses pembayaran tiruan...");
        btnSubscribe.disabled = true;
        const originalHTML = btnSubscribe.innerHTML;
        btnSubscribe.innerHTML = `<span class="animate-pulse">Menghubungkan ke Google Pay...</span>`;

        setTimeout(() => {
            const googleLicenseInfo = {
                productName: "Langganan Google (Simulasi)",
                expiry: null,
                rawKey: "google-swg-active"
            };

            const success = runDecrypt(secretKey, googleLicenseInfo);
            if (!success) {
                alert("Simulasi gagal: Kunci dekripsi konten tidak cocok!");
                btnSubscribe.disabled = false;
                btnSubscribe.innerHTML = originalHTML;
            } else {
                console.log("🛠️ [SIMULASI] Berhasil! Konten terbuka.");
            }
        }, 1200);
        return;
    }

    // 2. MODE LIVE GOOGLE SWG (Dengan feedback alert yang jelas)
    try {
        if (typeof basicSubscriptions.showOffers === "function") {
            console.log("Menjalankan basicSubscriptions.showOffers()...");
            await basicSubscriptions.showOffers({ isClosable: true });
            
            // Cek entitlements setelah pop-up ditutup
            checkGoogleEntitlements(basicSubscriptions, secretKey, runDecrypt);
        } else {
            console.warn("Fungsi basicSubscriptions.showOffers tidak ditemukan atau belum siap.");
            alert("Fitur langganan Google belum siap. Pastikan koneksi stabil atau script SwG dimuat dengan benar.");
        }
    } catch (err) {
        console.error("Gagal menampilkan dialog penawaran Google:", err);
        alert("Terjadi kesalahan saat memuat dialog langganan Google.");
    }
});


                    }

                    // 3. CEK OTOMATIS SAAT HALAMAN DIMUAT
                    // Kalau user sebelumnya udah pernah langganan, langsung buka kuncinya tanpa perlu klik tombol lagi
                    checkGoogleEntitlements(basicSubscriptions, secretKey, runDecrypt);

                } catch (err) {
                    console.error("Gagal inisialisasi SwG Basic:", err);
                }
            });

        } catch (err) {
            console.error("Gagal memuat sistem paywall", err);
        }
    };

    const checkGoogleEntitlements = async (basicSubscriptions, secretKey, runDecrypt) => {
        try {
            if (typeof basicSubscriptions.getEntitlements === "function") {
                const entitlements = await basicSubscriptions.getEntitlements();
                
                // Cek apakah user punya entitlements yang valid untuk produk ini
                // (biasanya Google ngebales objek entitlements yang berisi produk aktif)
                if (entitlements && entitlements.hasActiveEntitlement()) {
                    console.log("Akses Google terdeteksi aktif! Membuka konten...");
                    
                    // Buat dummy object lisensi khusus untuk Google supaya badge-nya tetap muncul rapi
                    const googleLicenseInfo = {
                        productName: "Langganan Google",
                        expiry: null,
                        rawKey: "google-swg-active"
                    };
                    
                    // Jalankan fungsi dekripsi konten utama lu
                    runDecrypt(secretKey, googleLicenseInfo);
                }
            }
        } catch (err) {
            console.log("Belum ada langganan Google aktif atau sesi belum masuk:", err);
        }
    };    

    const setupSecureLicenseUI = (secretKey, runDecrypt, verifyAndGetLicense) => {
        const btnActivate = document.querySelector("#btn-activate-license");
        const inputLicense = document.querySelector("#license-input");
        const errorBox = document.querySelector("#license-error");

        if (!btnActivate || !inputLicense) return;

        btnActivate.onclick = () => {
            const rawKey = inputLicense.value.trim();
            const validation = verifyAndGetLicense(rawKey);

            if (validation && validation.valid) {
                localStorage.setItem("irfanywz_secure_license", rawKey);
                if (errorBox) errorBox.classList.add("hidden");

                if (!runDecrypt(secretKey, validation)) {
                    if (errorBox) {
                        errorBox.textContent = "Lisensi valid, namun kunci dekripsi konten tidak cocok.";
                        errorBox.classList.remove("hidden");
                    }
                }
            } else {
                if (errorBox) {
                    errorBox.textContent = validation ? validation.reason : "Format lisensi salah.";
                    errorBox.classList.remove("hidden");
                }
            }
        };
    };

    new IntersectionObserver((entries, observer) => {
        entries.some(entry => entry.isIntersecting) && (observer.disconnect(), loadScriptsAndDecrypt());
    }, { root: null, rootMargin: "0px", threshold: 0.1 }).observe(targetEl);
})();