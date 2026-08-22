---
title: "Image Parse"
date: 2026-08-22T10:00:00+07:00
description: "Alat untuk mengonversi kode HTML Blogger (tag a & img) menjadi format markdown gambar secara instan."
icon: "icon-[ri--image-line]"
categories:
  - "Web"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6">
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
<label for="outputMarkdown" class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--markdown-line]"></i> Hasil Markdown Gambar
</label>
<button id="copyBtn" class="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 cursor-pointer">
<i class="icon-[ri--file-copy-line]"></i> Salin
</button>
</div>
<textarea id="outputMarkdown" rows="8" readonly class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors resize-y shadow-inner" placeholder="Hasil markdown gambar akan muncul di sini..."></textarea>
</div>
</div>

<script>
(function() {
    const inputHtml = document.getElementById('inputHtml');
    const outputMarkdown = document.getElementById('outputMarkdown');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');

    function parseBloggerHtml() {
        const htmlCode = inputHtml.value.trim();
        if (!htmlCode) {
            outputMarkdown.value = '';
            return;
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlCode, 'text/html');
        const images = doc.querySelectorAll('img');
        let results = [];

        images.forEach(img => {
            let src = img.getAttribute('src');
            if (!src) return;

            let alt = img.getAttribute('alt');
            if (!alt) {
                try {
                    const urlObj = new URL(src);
                    const segments = urlObj.pathname.split('/');
                    let filename = segments[segments.length - 1];
                    filename = decodeURIComponent(filename)
                        .replace(/\.[^/.]+$/, "")
                        .replace(/[-_]/g, ' ');
                    alt = filename.trim();
                } catch (e) {
                    alt = "Image";
                }
            }

            results.push('![' + alt + '](' + src + ')');
        });

        outputMarkdown.value = results.join('\n\n');
    }

    inputHtml.addEventListener('input', parseBloggerHtml);

    clearBtn.addEventListener('click', function() {
        inputHtml.value = '';
        outputMarkdown.value = '';
        inputHtml.focus();
    });

    copyBtn.addEventListener('click', function() {
        if (!outputMarkdown.value) return;
        navigator.clipboard.writeText(outputMarkdown.value).then(function() {
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