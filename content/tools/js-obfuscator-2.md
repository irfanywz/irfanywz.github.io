---
title: "JS Obfuscator 2"
date: 2026-09-06T10:00:00+07:00
description: "Alat untuk mengonversi dan memproteksi kode JavaScript langsung di browser dengan enkripsi XOR & Base64 tanpa backend."
icon: "icon-[ri--lock-password-line]"
categories:
  - "Web"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6">
<!-- Input Kode JavaScript -->
<div class="flex flex-col gap-2">
<label for="inputJs" class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--code-box-line]"></i> Masukkan Kode JavaScript Asli
</label>
<textarea id="inputJs" rows="8" class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors resize-y shadow-inner" placeholder="console.log('Halo Dunia!');"></textarea>
</div>

<!-- Tombol Aksi -->
<div class="flex flex-wrap gap-3 justify-center sm:justify-start">
<button id="obfuscateBtn" class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors active:scale-95 flex items-center gap-2 shadow-sm cursor-pointer">
<i class="icon-[ri--shield-keyhole-line]"></i> Obfuskasi Kode
</button>
<button id="clearBtn" class="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors active:scale-95 flex items-center gap-2 border border-gray-200 dark:border-gray-700 cursor-pointer">
<i class="icon-[ri--delete-bin-line]"></i> Bersihkan
</button>
</div>

<!-- Output Hasil Obfuskasi -->
<div class="flex flex-col gap-2">
<div class="flex justify-between items-center">
<label for="outputJs" class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--code-s-slash-line]"></i> Hasil Kode Terproteksi
</label>
<button id="copyBtn" class="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 cursor-pointer">
<i class="icon-[ri--file-copy-line]"></i> Salin
</button>
</div>
<textarea id="outputJs" rows="10" readonly class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors resize-y shadow-inner" placeholder="Hasil kode terobfuskasi akan muncul di sini..."></textarea>
</div>
</div>

<script>
(function() {
    const inputJs = document.getElementById('inputJs');
    const outputJs = document.getElementById('outputJs');
    const obfuscateBtn = document.getElementById('obfuscateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');

    // Fungsi Enkripsi XOR + Base64 (mirip logika Go sebelumnya)
    function xorEncrypt(input, key) {
        let rawBytes = new TextEncoder().encode(input);
        let xored = new Uint8Array(rawBytes.length);
        for (let i = 0; i < rawBytes.length; i++) {
            xored[i] = rawBytes[i] ^ key;
        }
        // Konversi Uint8Array ke Base64 aman untuk browser
        let binaryString = '';
        for (let i = 0; i < xored.length; i++) {
            binaryString += String.fromCharCode(xored[i]);
        }
        return btoa(binaryString);
    }

    function generateVMScript(payload, xorKey) {
        return `(function(_global) {
    'use strict';
    var _K = ${xorKey};
    var _PAYLOAD = "${payload}";
    var _d = function(b, k) {
        var r = atob(b), o = "";
        for (var i = 0; i < r.length; i++) {
            o += String.fromCharCode(r.charCodeAt(i) ^ k);
        }
        return decodeURIComponent(escape(o));
    };
    var VMRunner = {
        init: function() {
            try {
                var decodedCode = _d(_PAYLOAD, _K);
                var isolatedFunc = new Function('window', 'document', decodedCode);
                isolatedFunc(_global, _global.document);
            } catch (err) {
                _global.console.clear();
            }
        }
    };
    if (typeof window !== 'undefined') {
        VMRunner.init();
    }
})(typeof window !== 'undefined' ? window : global);`;
    }

    obfuscateBtn.addEventListener('click', function() {
        const code = inputJs.value.trim();
        if (!code) {
            alert('Masukkan kode JavaScript terlebih dahulu!');
            return;
        }

        // Kunci XOR statis/dinamis acak per klik
        const xorKey = Math.floor(Math.random() * 200) + 15; 
        const encrypted = xorEncrypt(code, xorKey);
        const finalScript = generateVMScript(encrypted, xorKey);

        outputJs.value = finalScript;
    });

    clearBtn.addEventListener('click', function() {
        inputJs.value = '';
        outputJs.value = '';
    });

    copyBtn.addEventListener('click', function() {
        if (!outputJs.value) return;
        navigator.clipboard.writeText(outputJs.value).then(function() {
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="icon-[ri--check-line]"></i> Tersalin';
            copyBtn.classList.add('text-emerald-600', 'dark:text-emerald-400');
            setTimeout(function() {
                copyBtn.innerHTML = originalHTML;
                copyBtn.classList.remove('text-emerald-600', 'dark:text-emerald-400');
            }, 2000);
        });
    });
})();
</script>