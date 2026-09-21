---
title: "Image Parse"
date: 2026-08-22T10:00:00+07:00
description: "Alat untuk mengonversi kode HTML Blogger (tag a & img) menjadi format markdown gambar atau Hugo shortcode secara instan."
icon: "icon-[ri--image-line]"
categories:
  - "Web"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6">
<!-- Opsi Format Toggle Switch -->
<div class="flex flex-col gap-2">
<label class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--settings-3-line]"></i> Format Output
</label>
<div class="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 w-fit">
<button type="button" id="btnMarkdown" class="px-4 py-2 text-sm font-medium rounded-lg transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm cursor-pointer">
Markdown Standar
</button>
<button type="button" id="btnShortcode" class="px-4 py-2 text-sm font-medium rounded-lg transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer">
Hugo Shortcode
</button>
</div>
</div>

<div class="flex flex-col gap-2">
<label for="inputHtml" class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--code-line]"></i> Kode HTML Blogger
</label>
<textarea id="inputHtml" rows="8" placeholder="Paste kode HTML Blogger di sini..." class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors resize-y shadow-sm font-mono text-sm"></textarea>
</div>

<div class="flex flex-wrap gap-3 justify-center sm:justify-start">
<button id="clearBtn" class="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors active:scale-95 flex items-center gap-2 border border-gray-200 dark:border-gray-700 cursor-pointer">
<i class="icon-[ri--delete-bin-line]"></i> Bersihkan
</button>
</div>

<div class="flex flex-col gap-2">
<div class="flex justify-between items-center">
<label for="outputResult" class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--file-code-line]"></i> Hasil Konversi
</label>
<button id="copyBtn" class="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 cursor-pointer">
<i class="icon-[ri--file-copy-line]"></i> Salin
</button>
</div>
<textarea id="outputResult" rows="10" readonly class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors resize-y shadow-inner" placeholder="Hasil konversi akan muncul di sini..."></textarea>
</div>
</div>

<script>
(function() {
    const inputHtml = document.getElementById('inputHtml');
    const outputResult = document.getElementById('outputResult');
    const btnMarkdown = document.getElementById('btnMarkdown');
    const btnShortcode = document.getElementById('btnShortcode');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');

    let currentFormat = 'markdown'; // Default format

    function updateToggleUI() {
        if (currentFormat === 'markdown') {
            btnMarkdown.className = 'px-4 py-2 text-sm font-medium rounded-lg transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm cursor-pointer';
            btnShortcode.className = 'px-4 py-2 text-sm font-medium rounded-lg transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer';
        } else {
            btnShortcode.className = 'px-4 py-2 text-sm font-medium rounded-lg transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm cursor-pointer';
            btnMarkdown.className = 'px-4 py-2 text-sm font-medium rounded-lg transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer';
        }
    }

    function parseBloggerHtml() {
        const htmlCode = inputHtml.value.trim();
        if (!htmlCode) {
            outputResult.value = '';
            return;
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlCode, 'text/html');
        const images = doc.querySelectorAll('img');
        let parsedItems = [];

        images.forEach(img => {
            let src = img.getAttribute('src');
            if (!src) return;

            let filenameOnly = src;
            try {
                const urlObj = new URL(src);
                const segments = urlObj.pathname.split('/');
                filenameOnly = decodeURIComponent(segments[segments.length - 1]);
            } catch (e) {}

            let alt = img.getAttribute('alt');
            if (!alt) {
                try {
                    let nameWithoutExt = filenameOnly.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ');
                    alt = nameWithoutExt.trim();
                } catch (e) {
                    alt = "Image";
                }
            }

            parsedItems.push({ src, alt, filenameOnly });
        });

        if (currentFormat === 'shortcode') {
            // Parameter ke-3 (grup) dibuat random string pendek
            const randomGroup = Math.random().toString(36).substring(2, 6);
            
            let results = ['{{' + '< image-grid >' + '}}\n'];
            
            parsedItems.forEach((item) => {
                // Parameter 1: URL gambar (item.src)
                // Parameter 2: Nama file / alt (item.filenameOnly)
                // Parameter 3: Grup (randomGroup)
                results.push('{{' + `< image-link "${item.src}" "${item.filenameOnly}" "${randomGroup}" >` + '}}');
            });

            results.push('\n{{' + '< /image-grid >' + '}}');
            outputResult.value = results.join('\n');
        } else {
            let results = parsedItems.map(item => '![' + item.alt + '](' + item.src + ')');
            outputResult.value = results.join('\n\n');
        }
    }

    btnMarkdown.addEventListener('click', function() {
        currentFormat = 'markdown';
        updateToggleUI();
        parseBloggerHtml();
    });

    btnShortcode.addEventListener('click', function() {
        currentFormat = 'shortcode';
        updateToggleUI();
        parseBloggerHtml();
    });

    inputHtml.addEventListener('input', parseBloggerHtml);

    clearBtn.addEventListener('click', function() {
        inputHtml.value = '';
        outputResult.value = '';
        inputHtml.focus();
    });

    copyBtn.addEventListener('click', function() {
        if (!outputResult.value) return;
        navigator.clipboard.writeText(outputResult.value).then(function() {
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="icon-[ri--check-line]"></i> Tersalin';
            copyBtn.classList.add('text-emerald-600', 'dark:text-emerald-400');
            setTimeout(function() {
                copyBtn.innerHTML = originalHTML;
                copyBtn.classList.remove('text-emerald-600', 'dark:text-emerald-400');
            }, 2000);
        });
    });

    updateToggleUI();
})();
</script>