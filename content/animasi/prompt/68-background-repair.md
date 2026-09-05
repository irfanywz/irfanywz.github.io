---
title: "Background Repair"
slug: "background-repair"
description: "Prompt builder interaktif untuk memperbaiki dan membersihkan artefak, garis patah, atau distorsi pada background 2D animasi tanpa mengubah komposisi aslinya."
icon: "icon-[ri--tools-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="backgroundRepairApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--tools-line] text-indigo-600 dark:text-indigo-400"></i> Background Repair & Artifact Cleaner
</h3>
<div class="flex items-center gap-2">
<!-- Tombol View Base Prompt Perbaikan -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Prompt Area
</button>
<!-- Tombol Prompt Ekstraksi Analisis Kerusakan -->
<button @click="showExtractModal = true" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--scan-line]"></i> Analisis Kerusakan
</button>
<button @click="randomize()" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer">
🎲 Random
</button>
</div>
</div>

<!-- Single Input & Active Image Preview -->
<div class="grid grid-cols-1 sm:grid-cols-[100px_1px_1fr] gap-4 items-center">
<!-- Image Preview Box -->
<div class="flex flex-col items-center justify-center space-y-1.5">
<div class="w-20 h-20 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center shadow-xs">
<img :src="activeImage" alt="Preview" class="w-full h-full object-cover">
</div>
<span class="text-[10px] text-gray-400 font-medium">Ref Preview</span>
</div>

<div class="hidden sm:block h-full bg-gray-100 dark:bg-gray-700"></div>

<!-- Description Input -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[REPAIR PROBLEM AREAS DIRECTIVE]</label>
<div class="relative flex items-center">
<input type="text" x-model="rep" @focus="$el.select()" placeholder="e.g. Clean up blurry lines on the window frame and fix distorted bricks..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Masalah Perbaikan">
<i class="icon-[ri--list-settings-line] text-lg"></i>
</button>
</div>
</div>
</div>
</div>

<!-- Output Section: Unified Seamless Full Master Prompt Template -->
<div class="bg-gray-900 dark:bg-gray-950 rounded-2xl border border-gray-800 shadow-lg overflow-hidden">
<!-- Header Card -->
<div class="px-5 py-4 bg-gray-950/60 border-b border-gray-800/80 flex items-center justify-between">
<h3 class="text-xs font-semibold text-gray-200 flex items-center gap-2">
<i class="icon-[ri--terminal-box-line] text-indigo-400 text-base"></i> Full Master Prompt Template
</h3>
<button @click="copyText(fullPrompt, 'copied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3.5 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="copied ? 'Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
<!-- Code Box Content -->
<div class="overflow-y-auto">
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt" style="margin: 0 !important;"></pre>
</div>
</div>

<!-- Modal Picker Database Masalah Perbaikan -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Jenis Kerusakan / Area Perbaikan</h3>
<button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>

<!-- Swiper Filter Kategori Buttons -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
<div class="swiper category-swiper w-full overflow-hidden">
<div class="swiper-wrapper">
<div class="swiper-slide !w-auto">
<button @click="activeCategory = 'All'" 
class="text-xs px-3.5 py-1.5 rounded-full transition font-medium cursor-pointer border whitespace-nowrap shadow-xs"
:class="activeCategory === 'All' ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500'">
All
</button>
</div>
<template x-for="(cat, catName) in repairDatabase" :key="catName">
<div class="swiper-slide !w-auto">
<button @click="activeCategory = catName" 
class="text-xs px-3.5 py-1.5 rounded-full transition font-medium cursor-pointer border whitespace-nowrap shadow-xs"
:class="activeCategory === catName ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500'"
x-text="catName">
</button>
</div>
</template>
</div>
</div>
</div>

<!-- Modal Body (3 Columns Grid Card) -->
<div class="p-5 overflow-y-auto space-y-4">
<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
<template x-for="item in filteredDatabase" :key="item.title">
<div @click="selectItem(item)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20">
<div class="w-full h-20 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center">
<img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
</div>
<span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span>
<span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.description"></span>
</div>
</template>
</div>
</div>

</div>
</div>

<!-- Modal Viewer & Editor Base Prompt Area Repair -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--tools-line] text-indigo-600 dark:text-indigo-400"></i> Deskripsi Generator Area Perbaikan
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Ubah Catatan Masalah Perbaikan (Masukin Disini):</label>
<input type="text" x-model="repairInputNote" @focus="$el.select()" placeholder="Ex: Clean up blurry lines on window..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicRepairBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicRepairBasePrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Prompt Analisis Kerusakan Gambar -->
<div x-show="showExtractModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showExtractModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--scan-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Analisis Kerusakan Background
</h3>
<button @click="showExtractModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
Gunakan prompt master di bawah ini untuk mendeteksi artefak AI, garis patah, atau distorsi bentuk pada gambar referensi sebelum melakukan proses perbaikan.
</p>
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap bg-gray-900 p-4 rounded-xl border border-gray-800" x-text="extractRepairStylePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(extractRepairStylePrompt, 'extractCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="extractCopied ? 'Prompt Analisis Disalin!' : 'Salin Prompt Analisis'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function backgroundRepairApp() {
    return {
        rep: 'Clean up blurry outlines, fix distorted geometric shapes, and remove unwanted AI artifacts on structures.',
        repairInputNote: 'CLEAN UP BLURRY OUTLINES & FIX DISTORTED SHAPES',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e0e7ff" font-size="12" font-family="sans-serif">Repair</text></svg>',
        copied: false,
        descCopied: false,
        extractCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showExtractModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        repairDatabase: {
            "Garis & Outline": [
                {
                    title: "Perbaikan Garis Patah",
                    description: "Fix broken or inconsistent outlines, making line art crisp, clean, and uniform throughout the background.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Outlines</text></svg>'
                },
                {
                    title: "Menghapus Area Blurry",
                    description: "Clean up blurry areas, hazy textures, or low-resolution noise, replacing them with sharp vector-like cartoon lines.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%238b5cf6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Blurry Fix</text></svg>'
                }
            ],
            "Bentuk & Geometri": [
                {
                    title: "Koreksi Bentuk Distorsi",
                    description: "Fix distorted shapes, warped windows, doors, or crooked pillars, restoring proper geometric alignment and perspective.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23d946ef"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Distortion</text></svg>'
                },
                {
                    title: "Koneksi Objek Keliru",
                    description: "Correct incorrect object connections where walls meet floors or structural elements merge unnaturally.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23ec4899"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Connections</text></svg>'
                }
            ],
            "Artefak & Detail": [
                {
                    title: "Pembersihan Artefak AI",
                    description: "Remove unwanted AI artifacts, random floating pixels, smudges, or corrupted patterns across the background canvas.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23f43f5e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Artifacts</text></svg>'
                },
                {
                    title: "Detail Lingkungan Tidak Lengkap",
                    description: "Complete incomplete environmental details, missing textures, or unfinished asset patterns to maintain full visual consistency.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Details</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.repairDatabase) {
                    allItems.push(...this.repairDatabase[cat]);
                }
                return allItems;
            }
            return this.repairDatabase[this.activeCategory] || [];
        },

        initSwiper() {
            this.$nextTick(() => {
                if (typeof Swiper !== 'undefined') {
                    this.categorySwiper = new Swiper('.category-swiper', {
                        slidesPerView: 'auto',
                        spaceBetween: 8,
                        freeMode: true,
                    });
                }
            });
        },

        selectItem(item) {
            this.rep = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.repairDatabase) {
                allItems.push(...this.repairDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.rep = rand.description;
            this.activeImage = rand.image;
        },

        get dynamicRepairBasePrompt() {
            let target = this.repairInputNote ? this.repairInputNote.trim() : 'CLEAN UP BLURRY OUTLINES & FIX DISTORTED SHAPES';
            return `Create **ONE short directive sentence** for identifying and repairing problems based on:

[${target}]

Rules:
* Focus **ONLY on problem identification and repair instruction**
* Keep it **short and directly usable for image fixing pipelines**

**Output ONE sentence only.**`;
        },

        get extractRepairStylePrompt() {
            return `BACKGROUND REPAIR ANALYSIS

Use the attached reference background image to analyze and detect problem areas such as broken lines, blurry zones, distorted geometry, or AI artifacts.

Create **ONE precise diagnostic sentence** specifying what needs correction while preserving the rest of the image.

**Output ONE instruction sentence only.**`;
        },

        get fullPrompt() {
            let repairText = this.rep ? this.rep.trim() : 'Clean up blurry outlines, fix distorted geometric shapes, and remove unwanted AI artifacts on structures.';

            return `Use the attached image as the STRICT BACKGROUND REFERENCE.

Repair and clean up ONLY the specified problem areas:

[${repairText}]

Preserve the original background exactly as much as possible.

Do NOT redesign, replace, move, resize, recolor, remove, or alter any correctly rendered part of the image.

Keep the original:
- environment
- buildings
- roads
- walls
- floors
- trees
- furniture
- objects
- environmental elements
- object positions
- composition
- proportions
- perspective
- camera angle
- lighting
- time of day
- atmosphere
- colors
- visual style

ONLY repair the specified problem areas.

Correct issues such as:
- broken or inconsistent outlines
- blurry areas
- distorted shapes
- malformed objects
- unwanted AI artifacts
- incorrect object connections
- inconsistent proportions
- minor perspective errors
- incomplete environmental details

Reconstruct the repaired area naturally while matching the surrounding image.

Maintain consistency with the original:
- cartoon art style
- thick black outlines
- line quality
- flat solid colors
- simple shapes
- proportions
- perspective
- lighting
- environmental scale

Do not add unnecessary new objects, details, or decorations.

Do not alter any area outside the specified problem area.

STRICT REFERENCE LOCK:
Same environment.
Same composition.
Same objects.
Same object positions.
Same perspective.
Same camera angle.
Same lighting.
Same atmosphere.
Same visual style.

ONLY repair the specified problem areas.

The final result must look identical to the original background, except that the specified problems have been naturally corrected.

Output a clean and consistent 2D animation background.`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>