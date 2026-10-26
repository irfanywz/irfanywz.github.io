---
title: "CSV to Markdown Converter"
date: 2026-03-31T00:00:00+07:00
description: "Alat praktis untuk mengubah data tabel CSV menjadi format tabel Markdown secara instan"
icon: "icon-[ri--table-line]"
categories:
  - "Konten"
---

<div x-data="csvMarkdownTool()" class="max-w-4xl mx-auto my-8 px-4 sm:px-6">

<div class="flex flex-col gap-6 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">

<!-- Input CSV -->
<div class="flex flex-col gap-2">
<div class="flex items-center justify-between">
<label for="csvInput" class="block font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-300">Data CSV</label>
<button @click="loadSample()" type="button" class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">
Muat Contoh Data
</button>
</div>
<textarea x-model="csvInput" @input="convert()" placeholder="Contoh:&#10;Nama, Usia, Kota&#10;Andi, 25, Jakarta&#10;Budi, 30, Bandung" rows="6" class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors font-mono resize-y"></textarea>
</div>

<!-- Pengaturan Tambahan -->
<div class="flex flex-wrap items-center gap-6 py-2 border-y border-gray-100 dark:border-gray-800">
<span class="font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-300">Penyelarasan (Alignment):</span>
<div class="flex items-center gap-4">
<label class="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
<input type="radio" value="left" x-model="alignment" @change="convert()" class="text-indigo-600 focus:ring-indigo-500"> Kiri
</label>
<label class="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
<input type="radio" value="center" x-model="alignment" @change="convert()" class="text-indigo-600 focus:ring-indigo-500"> Tengah
</label>
<label class="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
<input type="radio" value="right" x-model="alignment" @change="convert()" class="text-indigo-600 focus:ring-indigo-500"> Kanan
</label>
</div>
</div>

<!-- Hasil Markdown -->
<div class="flex flex-col gap-2">
<label class="block font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-300">Hasil Tabel Markdown</label>
<textarea readonly rows="6" x-model="markdownOutput" aria-label="Hasil Markdown" class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-xs sm:text-sm min-h-[140px] resize-y focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"></textarea>

<div class="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
<button @click="copyToClipboard()" type="button" class="px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-700 transition shadow-sm active:scale-95 cursor-pointer text-center">
Salin Markdown
</button>
<span x-text="copyStatus" class="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-semibold min-h-[1.2em] flex items-center"></span>
</div>
</div>

</div>

</div>

<script>
document.addEventListener('alpine:init', () => {
    Alpine.data('csvMarkdownTool', () => ({
        csvInput: '',
        markdownOutput: '',
        alignment: 'left',
        copyStatus: '',

        loadSample() {
            this.csvInput = "Nama,Pekerjaan,Kota\nBudi Santoso,Frontend Developer,Jakarta\nSiti Rahma,UI/UX Designer,Bandung\nAhmad Fauzi,Backend Engineer,Surabaya";
            this.convert();
        },

        // Parser CSV sederhana yang menangani tanda kutip (quotes)
        parseCSV(text) {
            let lines = text.split(/\r\n|\n/);
            let result = [];
            
            for (let i = 0; i < lines.length; i++) {
                if (!lines[i].trim()) continue;
                let row = [];
                let insideQuote = false;
                let entry = '';
                
                for (let j = 0; j < lines[i].length; j++) {
                    let char = lines[i][j];
                    if (char === '"') {
                        insideQuote = !insideQuote;
                    } else if (char === ',' && !insideQuote) {
                        row.push(entry.trim());
                        entry = '';
                    } else {
                        entry += char;
                    }
                }
                row.push(entry.trim());
                result.push(row);
            }
            return result;
        },

        convert() {
            if (!this.csvInput.trim()) {
                this.markdownOutput = '';
                return;
            }

            let rows = this.parseCSV(this.csvInput);
            if (rows.length === 0) {
                this.markdownOutput = '';
                return;
            }

            let headers = rows[0];
            let dataRows = rows.slice(1);

            // Buat baris pemisah berdasarkan alignment
            let delimiter = headers.map(() => {
                if (this.alignment === 'center') return ':---:';
                if (this.alignment === 'right') return '---:';
                return '---'; // default left
            });

            let mdLines = [];
            mdLines.push('| ' + headers.join(' | ') + ' |');
            mdLines.push('| ' + delimiter.join(' | ') + ' |');

            dataRows.forEach(row => {
                // Pastikan jumlah kolom sinkron dengan header
                while (row.length < headers.length) {
                    row.push('');
                }
                mdLines.push('| ' + row.slice(0, headers.length).join(' | ') + ' |');
            });

            this.markdownOutput = mdLines.join('\n');
            this.copyStatus = '';
        },

        copyToClipboard() {
            if (!this.markdownOutput) return;

            navigator.clipboard.writeText(this.markdownOutput).then(() => {
                this.copyStatus = 'Tersalin ke clipboard!';
                setTimeout(() => { this.copyStatus = ''; }, 3000);
            }).catch(() => {
                this.copyStatus = 'Gagal menyalin.';
            });
        }
    }));
});
</script>