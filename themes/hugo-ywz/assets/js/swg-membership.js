(() => {
    const buttons = document.querySelectorAll("[data-swg-subscribe]");
    if (!buttons.length) return;

    const statusEl = document.querySelector("[data-swg-status]");
    const setStatus = (msg = "") => { if (statusEl) statusEl.textContent = msg; };
    const SWG_SRC = "https://news.google.com/swg/js/v1/swg.js";

    // Tampilkan state "sudah member": sembunyikan CTA, tampilkan banner, ubah label badge kartu
    const showMemberState = () => {
        document.querySelectorAll("[data-guest-only]").forEach((el) => { el.style.display = "none"; });
        document.querySelectorAll("[data-member-only]").forEach((el) => { el.hidden = false; });
        document.querySelectorAll("[data-premium-label]").forEach((el) => { el.textContent = "Terbuka"; });
    };

    const loadSwg = () => new Promise((resolve, reject) => {
        if (document.querySelector(`script[src^="${SWG_SRC}"]`)) return resolve();
        const s = document.createElement("script");
        s.src = SWG_SRC;
        s.async = true;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });

    const init = async () => {
        try {
            await loadSwg();
        } catch (err) {
            console.error("Gagal memuat Google SwG:", err);
            setStatus("Layanan langganan Google gagal dimuat. Matikan pemblokir iklan lalu muat ulang halaman.");
            return;
        }

        (self.SWG = self.SWG || []).push(async (subscriptions) => {
            const checkEntitlements = async () => {
                try {
                    const entitlements = await subscriptions.getEntitlements();
                    const isEntitled = entitlements &&
                        typeof entitlements.enablesThisWithCacheableEntitlements === "function" &&
                        entitlements.enablesThisWithCacheableEntitlements();
                    if (isEntitled) {
                        showMemberState();
                        try {
                            if (typeof subscriptions.dismissSwgUI === "function") subscriptions.dismissSwgUI();
                        } catch (e) {}
                        return true;
                    }
                } catch (err) {
                    console.error("Gagal memeriksa entitlements SwG:", err);
                }
                return false;
            };

            // Cek senyap di awal: kalau sudah member, tidak perlu tombol langganan
            if (await checkEntitlements()) return;

            buttons.forEach((btn) => {
                btn.removeAttribute("disabled");
                btn.addEventListener("click", async (e) => {
                    e.preventDefault();
                    if (typeof subscriptions.showOffers !== "function") return;
                    buttons.forEach((b) => b.setAttribute("disabled", ""));
                    try {
                        // Dialog offer Google; selesai saat user menutup / menyelesaikan transaksi
                        await subscriptions.showOffers({ isClosable: true });
                        await checkEntitlements();
                    } catch (err) {
                        console.error("Gagal memproses penawaran Google:", err);
                        setStatus("Terjadi kendala saat membuka halaman langganan. Coba lagi.");
                    } finally {
                        buttons.forEach((b) => b.removeAttribute("disabled"));
                    }
                });
            });
        });
    };

    init();
})();
