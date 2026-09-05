(async () => {
    const selector = (e, t = document) => t.querySelector(e);
    const targetEl = selector("#locked-content");
    if (!targetEl) return;

    const loadScriptsAndDecrypt = async () => {
        try {
            if (!window.SWG_BASIC) {
                await new Promise((resolve, reject) => {
                    const s = document.createElement("script");
                    s.src = "https://news.google.com/swg/js/v1/swg-basic.js";
                    s.async = true;
                    s.onload = resolve;
                    s.onerror = reject;
                    document.head.appendChild(s);
                });
            }

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
            const secretKey = targetEl.getAttribute("data-key");
            const salt = targetEl.getAttribute("data-salt");

            // Fungsi helper untuk memasukkan HTML dan mengeksekusi ulang tag <script> di dalamnya
            const injectAndExecuteScripts = (container, htmlString) => {
                container.innerHTML = htmlString;
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

            const runDecrypt = (rawKey) => {
                var r = hashFormatDecrypt(rawKey, salt);
                var n = decrypt(r, ciphertext);
                if (n) {
                    injectAndExecuteScripts(targetEl, n);
                    return true;
                }
                return false;
            };

            (self.SWG_BASIC = self.SWG_BASIC || []).push(basicSubscriptions => {
                basicSubscriptions.init({
                    type: "NewsArticle",
                    isPartOfType: ["Product"],
                    isPartOfProductId: "CAowmczhCw:openaccess",
                    clientOptions: { theme: "light", lang: "id" },
                });

                // Simulasi 2 detik untuk tes
                // setTimeout(() => {
                //     console.log("Simulasi: Mengaktifkan dekripsi otomatis...");
                //     runDecrypt(secretKey);
                // }, 2000);

                basicSubscriptions.getEntitlements().then(entitlements => {
                    const isEntitled = entitlements && entitlements.enablesThisWithCacheableEntitlements();
                    if (isEntitled) {
                        runDecrypt(secretKey);
                    } else {
                        const btn = selector("#btn-subscribe", targetEl);
                        if (btn) {
                            btn.disabled = false;
                            btn.addEventListener("click", (e) => {
                                e.preventDefault();
                                basicSubscriptions.showOffers({ isClosable: true });
                            });
                        }
                    }
                }).catch(e => {
                    console.log("SwG tidak aktif.");
                });
            });

        } catch (err) {
            console.error("Gagal memuat skrip paywall", err);
        }
    };

    new IntersectionObserver((entries, observer) => {
        entries.some(entry => entry.isIntersecting) && (observer.disconnect(), loadScriptsAndDecrypt());
    }, { root: null, rootMargin: "0px", threshold: 0.4 }).observe(targetEl);
})();