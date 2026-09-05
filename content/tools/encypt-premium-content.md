---
title: "Enkripsi Konten"
date: 2025-10-07T00:00:00+07:00
description: "Alat sederhana untuk mengenkripsi konten dan menghasilkan format shortcode paywall"
icon: "icon-[ri--key-fill]"
categories:
  - "Konten"
---

<!-- Marked.js for Markdown conversion -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<form id="form_hash" class="max-w-3xl mx-auto flex flex-col gap-6 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm my-8">

<div class="flex flex-col gap-2">
        <label for="key" class="block font-semibold text-gray-600 dark:text-gray-400">Kunci Rahasia / Key</label>
        <input type="text" id="key" value="irfanywz" placeholder="Masukkan kunci rahasia (contoh: mysecretkey123)" class="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors">
</div>

<div class="flex items-center gap-4">
    <span class="font-semibold text-gray-600 dark:text-gray-400">Mode Input:</span>
    <div class="flex items-center gap-2">
        <input type="radio" id="modeHtml" name="inputMode" value="html" checked class="text-indigo-600 focus:ring-indigo-500">
        <label for="modeHtml" class="text-gray-700 dark:text-gray-300 cursor-pointer">HTML</label>
    </div>
    <div class="flex items-center gap-2">
        <input type="radio" id="modeMarkdown" name="inputMode" value="markdown" class="text-indigo-600 focus:ring-indigo-500">
        <label for="modeMarkdown" class="text-gray-700 dark:text-gray-300 cursor-pointer">Markdown</label>
    </div>
</div>

<div class="flex flex-col gap-2">
        <label for="content" class="block font-semibold text-gray-600 dark:text-gray-400">Konten yang Dilindungi</label>
        <textarea id="content" placeholder="<p>masukkan konten HTML atau markdown di sini...</p>" rows="5" class="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors min-h-[160px] resize-y"></textarea>
</div>

<button type="submit" class="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-md active:scale-95">Buat Shortcode Paywall</button>

</form>

<div class="max-w-3xl mx-auto flex flex-col gap-4">
    <textarea readonly onclick="this.select()" rows="6" id="resultEncrypt" aria-label="Hasil Shortcode" class="w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm min-h-[120px] resize-y focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"></textarea>
    <div class="flex flex-col gap-2 items-start">
        <button id="copyResult" type="button" class="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all shadow-sm active:scale-95">Salin Shortcode</button>
        <span id="copyStatus" class="text-sm text-gray-500 dark:text-gray-400 min-h-[1.2em]"></span>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
<script>
    function hashFormatEncrypt(t) {
        var e = CryptoJS.lib.WordArray.random(16).toString();
        return {
            salt: e,
            hashKey: CryptoJS.PBKDF2(t, e, { keySize: 8, iterations: 1e3 }).toString()
        };
    }

    function encrypt(t, e) {
        var n = CryptoJS.lib.WordArray.random(16),
            r = CryptoJS.AES.encrypt(t, e, { iv: n, padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CBC });
        return n.toString() + r.toString();
    }

    document.getElementById("form_hash").addEventListener("submit", function(t) {
        t.preventDefault();
        let e = document.getElementById("content").value;
        const n = document.getElementById("key").value;
        
        if (!n) return void alert("Masukkan kunci rahasia terlebih dahulu!");

        if ("markdown" === document.querySelector('input[name="inputMode"]:checked').value && "undefined" != typeof marked) {
            e = marked.parse(e);
        }

        var r = hashFormatEncrypt(n),
            o = r.hashKey,
            s = r.salt,
            a = encrypt(e, o);

        const y = CryptoJS.HmacSHA256(a, CryptoJS.SHA256(o).toString()).toString() + a;
        const openTag = "{{" + "<";
        const closeTag = ">" + "}}";
        
        const d = `${openTag} paywall enc=${JSON.stringify(y)} key=${JSON.stringify(n)} salt=${JSON.stringify(s)} ${closeTag}`;
        
        document.getElementById("resultEncrypt").textContent = d;
        var i = document.getElementById("copyStatus");
        i && (i.textContent = "");
    });
</script>
<script>
    document.getElementById("copyResult").addEventListener("click", function() {
        var t = document.getElementById("resultEncrypt"),
            e = document.getElementById("copyStatus");
        if (t) {
            try {
                t.select();
                document.execCommand("copy") ? e && (e.textContent = "Tersalin ke clipboard") : e && (e.textContent = "Gagal menyalin");
            } catch (n) {
                navigator.clipboard ? navigator.clipboard.writeText(t.value).then(function() {
                    e && (e.textContent = "Tersalin ke clipboard");
                }, function() {
                    e && (e.textContent = "Gagal menyalin");
                }) : e && (e.textContent = "Gagal menyalin");
            }
            e && setTimeout(function() {
                e.textContent = "";
            }, 3e3);
        }
    });
</script>