---
title: "Image to Base64"
date: 2026-09-06T10:00:00+07:00
description: "Alat untuk mengonversi gambar lokal menjadi format Base64 dalam bentuk tag HTML img yang siap disalin."
icon: "icon-[ri--file-code-line]"
categories:
  - "Web"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6">
<div class="flex flex-col gap-2">
<label class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--image-add-line]"></i> Pilih Gambar
</label>
<div id="dropZone" class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors cursor-pointer flex flex-col items-center justify-center gap-2">
<i class="icon-[ri--upload-cloud-2-line] text-4xl text-gray-400"></i>
<span class="text-sm text-gray-600 dark:text-gray-400 font-medium">Seret gambar ke sini atau <span class="text-indigo-600 dark:text-indigo-400 underline">klik untuk memilih</span></span>
<span class="text-xs text-gray-400">Mendukung PNG, JPG, GIF, WebP, SVG</span>
<input type="file" id="imageInput" accept="image/*" multiple class="hidden">
</div>
</div>

<div class="flex flex-wrap gap-3 justify-center sm:justify-start">
<button id="clearBtn" class="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors active:scale-95 flex items-center gap-2 border border-gray-200 dark:border-gray-700 cursor-pointer">
<i class="icon-[ri--delete-bin-line]"></i> Bersihkan
</button>
</div>

<div class="flex flex-col gap-2">
<div class="flex justify-between items-center">
<label for="outputBase64" class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--code-s-slash-line]"></i> Hasil Tag HTML (&lt;img&gt;)
</label>
<button id="copyBtn" class="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 cursor-pointer">
<i class="icon-[ri--file-copy-line]"></i> Salin
</button>
</div>
<textarea id="outputBase64" rows="8" readonly class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors resize-y shadow-inner" placeholder="Tag HTML img base64 akan muncul di sini..."></textarea>
</div>
</div>

<script>
(function() {
    const dropZone = document.getElementById('dropZone');
    const imageInput = document.getElementById('imageInput');
    const outputBase64 = document.getElementById('outputBase64');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');

    function processFiles(files) {
        if (!files || files.length === 0) return;
        let results = [];
        let processedCount = 0;

        Array.from(files).forEach((file, index) => {
            if (!file.type.startsWith('image/')) {
                processedCount++;
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                const base64String = e.target.result;
                const fileName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ');
                const imgTag = `<img src="${base64String}" alt="${fileName}" />`;
                results[index] = imgTag;

                processedCount++;
                if (processedCount === files.length) {
                    outputBase64.value = results.filter(Boolean).join('\n\n');
                }
            };
            reader.readAsDataURL(file);
        });
    }

    dropZone.addEventListener('click', () => imageInput.click());

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('border-indigo-500', 'bg-indigo-50/50', 'dark:bg-gray-700/50');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('border-indigo-500', 'bg-indigo-50/50', 'dark:bg-gray-700/50');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-indigo-500', 'bg-indigo-50/50', 'dark:bg-gray-700/50');
        processFiles(e.dataTransfer.files);
    });

    imageInput.addEventListener('change', (e) => {
        processFiles(e.target.files);
    });

    clearBtn.addEventListener('click', function() {
        imageInput.value = '';
        outputBase64.value = '';
    });

    copyBtn.addEventListener('click', function() {
        if (!outputBase64.value) return;
        navigator.clipboard.writeText(outputBase64.value).then(function() {
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