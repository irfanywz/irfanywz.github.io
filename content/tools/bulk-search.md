---
title: "Bulk Search"
date: 2026-08-23T15:30:00+07:00
description: "Alat untuk menghasilkan daftar tautan pencarian dari banyak kata kunci dengan tambahan kustom teks di belakang secara instan menggunakan Alpine.js."
icon: "icon-[ri--list-check]"
categories:
  - "Cyber"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="searchOpener()">
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Input List Text -->
<div class="flex flex-col gap-2">
<label for="searchInput" class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--list-unordered]"></i> Daftar Keyword (Satu per baris)
</label>
<textarea id="searchInput" x-model="rawInput" @input="saveData()" rows="5" placeholder="" class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors resize-y shadow-sm font-mono text-sm"></textarea>
</div>

<!-- Custom Suffix Input -->
<div class="flex flex-col gap-2">
<label for="customSuffix" class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--add-line]"></i> Tambahan Kata di Belakang (Opsional)
</label>
<div class="flex flex-col justify-between h-full space-y-3">
<input type="text" id="customSuffix" x-model="customSuffix" @input="saveData()" placeholder="Contoh: blog" class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors shadow-sm font-mono text-sm">
<p class="text-xs text-gray-500 dark:text-gray-400 italic">Teks ini akan otomatis ditambahkan di belakang setiap baris keyword saat dicarikan.</p>
</div>
</div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
<div>
<label for="searchEngine" class="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Pilih Search Engine</label>
<select id="searchEngine" x-model="selectedEngine" @change="saveData()" class="w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer">
<option value="https://www.google.com/search?q=">Google</option>
<option value="https://duckduckgo.com/?q=">DuckDuckGo</option>
<option value="https://yandex.com/search/?text=">Yandex</option>
<option value="https://www.bing.com/search?q=">Bing</option>
<option value="https://search.yahoo.com/search?p=">Yahoo</option>
<option value="https://search.brave.com/search?q=">Brave Search</option>
</select>
</div>

<div>
<label class="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Mode Eksekusi</label>
<div class="flex items-center h-10 gap-6">
<label class="flex items-center gap-2 cursor-pointer text-sm text-gray-700 dark:text-gray-300 select-none">
<input type="radio" name="openMode" value="manual" x-model="openMode" class="w-4 h-4 accent-indigo-500 cursor-pointer">
<span>Manual (Klik di List)</span>
</label>
<label class="flex items-center gap-2 cursor-pointer text-sm text-gray-700 dark:text-gray-300 select-none">
<input type="radio" name="openMode" value="auto" x-model="openMode" class="w-4 h-4 accent-indigo-500 cursor-pointer">
<span>Otomatis (Buka Sekaligus)</span>
</label>
</div>
</div>
</div>

<div class="flex flex-wrap gap-3 justify-center sm:justify-start">
<button @click="clearInput()" class="px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors active:scale-95 border border-gray-200 dark:border-gray-700 cursor-pointer text-sm flex items-center gap-2">
<i class="icon-[ri--delete-bin-line]"></i> Bersihkan
</button>
<button @click="processLinks()" class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors active:scale-95 shadow-sm flex items-center gap-2 cursor-pointer text-sm">
<i class="icon-[ri--play-line]"></i> Proses Tautan (<span x-text="keywords.length"></span>)
</button>
</div>

<!-- Output List Section -->
<div class="flex flex-col gap-2">
<div class="flex justify-between items-center">
<label class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--links-line]"></i> Daftar Tautan Hasil Pencarian
</label>
<button @click="copyAllLinks()" class="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 cursor-pointer">
<span x-html="copyBtnText"></span>
</button>
</div>

<div class="w-full min-h-[150px] max-h-[300px] overflow-y-auto p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm space-y-2 shadow-inner">
<template x-if="links.length === 0">
<p class="text-gray-400 dark:text-gray-500 text-center italic py-8">Klik tombol "Proses Tautan" untuk menampilkan daftar klik...</p>
</template>

<template x-for="(item, index) in links" :key="index">
<div class="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-colors">
<div class="flex items-center gap-3 overflow-hidden">
<span class="text-xs text-gray-400 font-sans w-5 text-right" x-text="'#' + (index + 1)"></span>
<span class="font-bold text-indigo-600 dark:text-indigo-400 truncate" x-text="item.keyword"></span>
<span class="text-xs text-gray-400 truncate hidden sm:inline" x-text="item.url"></span>
</div>
<a :href="item.url" target="_blank" rel="noopener noreferrer" class="shrink-0 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs font-medium rounded-md transition-colors flex items-center gap-1">
<span>Buka</span> <i class="icon-[ri--external-link-line]"></i>
</a>
</div>
</template>
</div>
</div>
</div>

<script>
function searchOpener() {
    return {
        rawInput: "",
        customSuffix: "",
        selectedEngine: "https://www.google.com/search?q=",
        openMode: "manual",
        links: [],
        copyBtnText: '<i class="icon-[ri--file-copy-line]"></i> Salin Semua Link',

        get keywords() {
            return this.rawInput.split('\n').map(l => l.trim()).filter(Boolean);
        },

        init() {
            const savedInput = localStorage.getItem('bulk_search_input');
            const savedSuffix = localStorage.getItem('bulk_search_suffix');
            const savedEngine = localStorage.getItem('bulk_search_engine');

            if (savedInput !== null) {
                this.rawInput = savedInput;
            } else {
                this.rawInput = "ardisitompul";
            }

            if (savedSuffix !== null) {
                this.customSuffix = savedSuffix;
            }

            if (savedEngine) {
                this.selectedEngine = savedEngine;
            }

            this.processLinks();
        },

        saveData() {
            localStorage.setItem('bulk_search_input', this.rawInput);
            localStorage.setItem('bulk_search_suffix', this.customSuffix);
            localStorage.setItem('bulk_search_engine', this.selectedEngine);
        },

        processLinks() {
            this.saveData();
            const currentKeywords = this.keywords;
            if (currentKeywords.length === 0) {
                this.links = [];
                return;
            }

            const suffix = this.customSuffix.trim();

            this.links = currentKeywords.map(kw => {
                // Gabungkan keyword utama dengan custom suffix jika ada
                const fullKeyword = suffix ? `${kw} ${suffix}` : kw;
                return {
                    keyword: fullKeyword,
                    url: this.selectedEngine + encodeURIComponent(fullKeyword)
                };
            });

            if (this.openMode === 'auto') {
                this.links.forEach((item, index) => {
                    setTimeout(() => {
                        window.open(item.url, '_blank');
                    }, index * 300);
                });
            }
        },

        clearInput() {
            this.rawInput = '';
            this.customSuffix = '';
            this.links = [];
            localStorage.removeItem('bulk_search_input');
            localStorage.removeItem('bulk_search_suffix');
        },

        copyAllLinks() {
            if (this.links.length === 0) return;
            const allUrls = this.links.map(l => l.url).join('\n');
            navigator.clipboard.writeText(allUrls).then(() => {
                this.copyBtnText = '<i class="icon-[ri--check-line]"></i> Semua Link Tersalin';
                setTimeout(() => {
                    this.copyBtnText = '<i class="icon-[ri--file-copy-line]"></i> Salin Semua Link';
                }, 2000);
            });
        }
    }
}
</script>