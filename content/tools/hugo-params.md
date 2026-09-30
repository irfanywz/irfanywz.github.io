---
title: "Hugo Parameter Generator"
date: 2026-03-25T23:00:00+07:00
description: "Alat praktis untuk menghasilkan parameter YAML Hugo dari teks secara otomatis dengan tata letak 1 kolom dan random SVG warna."
icon: "icon-[ri--code-box-line]"
categories:
  - "Hugo"
---

<div class="max-w-3xl mx-auto mt-6" x-data="hugoGenerator()">
<div class="space-y-6">

<!-- Top Controls & Settings -->
<div class="p-5 rounded-2xl border border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/20 shadow-sm space-y-4">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<label class="block text-sm font-bold text-blue-900 dark:text-blue-300 mb-2">
Mode Output YAML
</label>
<div class="inline-flex rounded-lg p-1 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800">
<button 
@click="outputMode = 'db'" 
:class="outputMode === 'db' ? 'bg-blue-600 text-white font-bold shadow-sm' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'"
class="py-1.5 px-4 rounded-md text-xs transition-all">
Dengan Database Key
</button>
<button 
@click="outputMode = 'direct'" 
:class="outputMode === 'direct' ? 'bg-blue-600 text-white font-bold shadow-sm' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600'"
class="py-1.5 px-4 rounded-md text-xs transition-all">
Langsung Inti
</button>
</div>
</div>

<div x-show="outputMode === 'db'" x-transition class="flex-1 max-w-xs">
<label for="dbKey" class="block text-sm font-bold text-blue-900 dark:text-blue-300 mb-1">
Nama Database Key
</label>
<input 
type="text" 
id="dbKey" 
x-model="dbName"
@input="generateHugo"
class="w-full p-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono"
placeholder="Contoh: Seragam">
</div>
</div>
</div>

<!-- Input Section with Utility Buttons -->
<div class="space-y-2">
<div class="flex justify-between items-center px-1">
<label for="userInput" class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2 text-sm">
<i class="icon-[ri--text-snippet]"></i> Input Data (Format: TITLE|Description)
</label>
<div class="flex items-center gap-2">
<button @click="pasteFromClipboard" class="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center gap-1">
<i class="icon-[ri--clipboard-line]"></i> Paste
</button>
<span class="text-gray-300 dark:text-gray-700">|</span>
<button @click="clearAll" class="text-xs text-red-500 hover:underline flex items-center gap-1">
<i class="icon-[ri--delete-bin-line]"></i> Hapus Semua
</button>
</div>
</div>

<div class="relative">
<textarea 
id="userInput" 
x-model="userInput"
@input="generateHugo"
rows="6" 
class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors resize-y shadow-sm font-mono text-xs" 
placeholder="TAHANAN|A bright orange long-sleeve jumpsuit..."></textarea>
</div>

<!-- Quick Row Manipulation Toolbar -->
<div class="flex flex-wrap items-center justify-between gap-2 pt-1">
<div class="text-xs text-gray-500 dark:text-gray-400">
Tip: Gunakan baris baru untuk setiap item berbeda.
</div>
<div class="flex items-center gap-2">
<button @click="sortLines(true)" class="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700 flex items-center gap-1 transition-all">
<i class="icon-[ri--sort-asc]"></i> Urutkan A-Z
</button>
<button @click="removeEmptyLines" class="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700 flex items-center gap-1 transition-all">
<i class="icon-[ri--eraser-line]"></i> Bersihkan Baris Kosong
</button>
</div>
</div>
</div>

<!-- Results Section -->
<div class="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
<div class="flex justify-between items-center px-1">
<h3 class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2 text-sm">
<i class="icon-[ri--file-code-line]"></i> Hasil Hugo Parameter (YAML)
</h3>
<template x-if="outputYaml">
<button @click="copyOutput" class="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800 transition-all">
<i :class="copied ? 'icon-[ri--check-line] text-emerald-500' : 'icon-[ri--file-copy-2-line]'"></i>
<span x-text="copied ? 'Berhasil Disalin!' : 'Salin YAML'"></span>
</button>
</template>
</div>

<div class="relative">
<template x-if="!outputYaml">
<div class="h-48 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl flex flex-col items-center justify-center text-gray-400 gap-2">
<i class="icon-[ri--database-2-line] text-3xl"></i>
<p class="text-xs italic">Masukkan teks di atas untuk mulai melihat hasil YAML secara otomatis.</p>
</div>
</template>

<template x-if="outputYaml">
<div class="relative rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-900 text-gray-100 shadow-sm overflow-hidden">
<div class="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700 text-xs text-gray-400 font-mono">
<span>YAML Output</span>
<span x-text="itemCount + ' item diproses'"></span>
</div>
<pre class="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-emerald-400 whitespace-pre" x-text="outputYaml"></pre>
</div>
</template>
</div>
</div>

</div>
</div>

<script>
function hugoGenerator() {
    return {
        outputMode: 'db', // 'db' or 'direct'
        dbName: 'Seragam',
        userInput: 'TAHANAN|A bright orange long-sleeve jumpsuit with a collared neck, a front zipper, black "TAHANAN PULICI" text printed on the left chest',
        outputYaml: '',
        itemCount: 0,
        copied: false,

        init() {
            this.generateHugo();
            this.$watch('outputMode', () => this.generateHugo());
        },

        getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },

        generateHugo() {
            if (!this.userInput.trim()) {
                this.outputYaml = '';
                this.itemCount = 0;
                return;
            }

            const lines = this.userInput.split('\n');
            let yamlResult = '';
            
            if (this.outputMode === 'db') {
                yamlResult += `database:\n  "${this.dbName}":\n\n`;
            }
            
            let count = 0;
            let validLines = [];

            lines.forEach(line => {
                if (!line.trim()) return;
                
                const separatorIndex = line.indexOf('|');
                let title = '';
                let description = '';

                if (separatorIndex !== -1) {
                    title = line.substring(0, separatorIndex).trim();
                    description = line.substring(separatorIndex + 1).trim();
                } else {
                    title = line.trim();
                    description = title;
                }

                const safeDesc = description.replace(/"/g, '\\"');
                const randomHex = this.getRandomColor();
                const encodedBg = randomHex.replace('#', '%23');

                // Menggunakan format SVG string yang bersih dan valid tanpa escape berlebih
                const svgString = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="${encodedBg}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">${title}</text></svg>`;

                let itemBlock = `    - title: "${title}"\n      description: "${safeDesc}"\n      image: '${svgString}'`;
                
                validLines.push(itemBlock);
                count++;
            });

            yamlResult += validLines.join('\n\n');
            this.outputYaml = yamlResult;
            this.itemCount = count;
        },

        async pasteFromClipboard() {
            try {
                const text = await navigator.clipboard.readText();
                if (this.userInput.trim()) {
                    this.userInput += '\n' + text;
                } else {
                    this.userInput = text;
                }
                this.generateHugo();
            } catch (err) {
                alert('Gagal membaca clipboard. Pastikan browser memberikan izin akses.');
            }
        },

        sortLines(ascending = true) {
            if (!this.userInput.trim()) return;
            let lines = this.userInput.split('\n').filter(l => l.trim() !== '');
            lines.sort((a, b) => {
                return ascending ? a.localeCompare(b) : b.localeCompare(a);
            });
            this.userInput = lines.join('\n');
            this.generateHugo();
        },

        removeEmptyLines() {
            if (!this.userInput.trim()) return;
            let lines = this.userInput.split('\n').filter(l => l.trim() !== '');
            this.userInput = lines.join('\n');
            this.generateHugo();
        },

        copyOutput() {
            navigator.clipboard.writeText(this.outputYaml).then(() => {
                this.copied = true;
                setTimeout(() => this.copied = false, 2000);
            });
        },

        clearAll() {
            this.userInput = '';
            this.outputYaml = '';
            this.itemCount = 0;
        }
    }
}
</script>