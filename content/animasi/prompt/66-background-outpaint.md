---
title: "Background Outpainting"
slug: "background-outpaint"
description: "Prompt builder interaktif untuk memperluas area gambar background 2D animasi (outpainting) ke berbagai arah (kiri, kanan, atas, bawah) secara natural dan konsisten dengan gaya aslinya."
icon: "icon-[ri--fullscreen-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="backgroundOutpaintApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--fullscreen-line] text-indigo-600 dark:text-indigo-400"></i> Background Outpainting Canvas Extender
</h3>
<div class="flex items-center gap-2">
<!-- Tombol View Base Prompt Deskripsi Arah -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Prompt Arah
</button>
<!-- Tombol Prompt Ekstraksi Gambar Referensi Style -->
<button @click="showExtractModal = true" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--image-ai-line]"></i> Ekstraksi Style
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
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[OUTPAINTING EXTENSION DIRECTION]</label>
<div class="relative flex items-center">
<input type="text" x-model="outpaintDir" @focus="$el.select()" placeholder="e.g. Extend the scene naturally to the LEFT, continuing the wall and sidewalk..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Contoh Arah Outpaint">
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

<!-- Modal Picker Database Arah Outpainting Background -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Referensi Arah Perluasan Canvas</h3>
<button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>

<!-- Swiper Filter Kategori Buttons -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
<div class="swiper category-swiper w-full overflow-hidden">
<div class="swiper-wrapper">
<!-- Tombol Filter All -->
<div class="swiper-slide !w-auto">
<button @click="activeCategory = 'All'" 
class="text-xs px-3.5 py-1.5 rounded-full transition font-medium cursor-pointer border whitespace-nowrap shadow-xs"
:class="activeCategory === 'All' ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500'">
All
</button>
</div>
<template x-for="(cat, catName) in outpaintDatabase" :key="catName">
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

<!-- Modal Viewer & Editor Base Prompt W arah outpaint -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--fullscreen-line] text-indigo-600 dark:text-indigo-400"></i> Deskripsi Generator Perluasan Canvas Background
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Input Cepat untuk Ganti Arah di Base Prompt -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Ubah Konsep Arah Perluasan (Masukin Disini):</label>
<input type="text" x-model="outpaintInputNote" @focus="$el.select()" placeholder="Ex: Extend scene to the LEFT..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<!-- Live Preview Base Prompt W arah outpaint -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicOutpaintBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicOutpaintBasePrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Prompt Ekstraksi Gambar Referensi Style Outpaint -->
<div x-show="showExtractModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showExtractModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-ai-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Ekstraksi Style Gambar Referensi Outpaint
</h3>
<button @click="showExtractModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
Gunakan prompt master di bawah ini untuk menganalisis dan mengekstrak gaya visual, pencahayaan, serta detail lingkungan secara presisi dari gambar background referensi agar perluasan canvas tampak menyatu secara mulus.
</p>
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap bg-gray-900 p-4 rounded-xl border border-gray-800" x-text="extractOutpaintStylePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(extractOutpaintStylePrompt, 'extractCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="extractCopied ? 'Prompt Ekstraksi Disalin!' : 'Salin Prompt Ekstraksi'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function backgroundOutpaintApp() {
    return {
        outpaintDir: 'Extend the scene naturally to the LEFT, continuing the wall and sidewalk.',
        outpaintInputNote: 'EXTEND LEFT, CONTINUE WALL & SIDEWALK',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e0e7ff" font-size="12" font-family="sans-serif">Outpaint</text></svg>',
        copied: false,
        descCopied: false,
        extractCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showExtractModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        outpaintDatabase: {
            "Perluasan Horizontal": [
                {
                    title: "Lanjut ke Kiri",
                    description: "Extend the scene naturally to the LEFT, continuing existing elements like roads, sidewalks, fences, or building facades.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Left</text></svg>'
                },
                {
                    title: "Lanjut ke Kanan",
                    description: "Extend the scene naturally to the RIGHT, seamlessly expanding the landscape, street view, or interior room structure.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%238b5cf6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Right</text></svg>'
                },
                {
                    title: "Panorama Lebar (Kiri & Kanan)",
                    description: "Expand the environment significantly on both sides to create a wide panoramic cartoon background, maintaining perfect perspective alignment.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23a855f7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Panorama</text></svg>'
                }
            ],
            "Perluasan Vertikal": [
                {
                    title: "Lanjut ke Atas",
                    description: "Extend the scene upwards, revealing more of tall buildings, upper floors, sky, or high ceiling details while preserving the low camera angle.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23d946ef"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Up</text></svg>'
                },
                {
                    title: "Lanjut ke Bawah",
                    description: "Extend the scene downwards, showing more of the ground, floor patterns, street details, or lower foundation of structures.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23ec4899"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Down</text></svg>'
                },
                {
                    title: "Full Shot Vertikal",
                    description: "Expand both upwards and downwards to capture a complete vertical view, such as a tall building from foundation to roof.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23f43f5e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Full Vertical</text></svg>'
                }
            ],
            "Kompleks & Multi-Arah": [
                {
                    title: "Perluasan Sudut (L-Shape)",
                    description: "Extend the canvas in two directions simultaneously (e.g., Left and Up) to expand a corner view while keeping the original image intact.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Corner</text></svg>'
                },
                {
                    title: "Perluasan Area Besar (Full Canvas)",
                    description: "Dramatically increase the canvas size in all directions (Left, Right, Up, Down) to create a massive environmental context around the original image.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Full Area</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.outpaintDatabase) {
                    allItems.push(...this.outpaintDatabase[cat]);
                }
                return allItems;
            }
            return this.outpaintDatabase[this.activeCategory] || [];
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
            this.outpaintDir = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.outpaintDatabase) {
                allItems.push(...this.outpaintDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.outpaintDir = rand.description;
            this.activeImage = rand.image;
        },

        get dynamicOutpaintBasePrompt() {
            let target = this.outpaintInputNote ? this.outpaintInputNote.trim() : 'EXTEND LEFT, CONTINUE WALL & SIDEWALK';
            return `Create **ONE short visual description** for outpainting an existing background based on:

[${target}]

Write it as **one concise directive sentence**, specifying the direction of extension and what environmental elements should be generated to continue the scene seamlessly.

Rules:
* Focus **ONLY on the outpainting direction and content generation**
* Describe elements to continue (buildings, roads, sky, ground)
* **DO NOT alter, move, or describe anything inside the original image area**
* **DO NOT change the original perspective or lighting**
* Keep it **short and directly usable for image extension**

**Output ONE sentence only.**`;
        },

        get extractOutpaintStylePrompt() {
            return `BACKGROUND OUTPAINTING STYLE EXTRACTION

Use the attached reference background image to analyze and extract the precise architectural continuation style, perspective lines, ground plane, and environmental coloring.

Create **ONE precise style matching rule sentence** ensuring that any extended area blends perfectly with the original aesthetic.

Rules:
* Focus **ONLY on style preservation, perspective continuation, and element matching**
* Keep text short and directly usable for background expansion pipelines

**Output ONE style instruction sentence only.**`;
        },

        get fullPrompt() {
            let dirText = this.outpaintDir ? this.outpaintDir.trim() : 'Extend the scene naturally to the LEFT, continuing the wall and sidewalk.';

            return `Use the attached image as the STRICT BACKGROUND REFERENCE.

Extend the existing background in the following direction:

[${dirText}]

Extend the scene naturally based on the existing environment.

Preserve the entire original image exactly as it is.

Do NOT change, redesign, move, resize, recolor, remove, or replace anything inside the original image.

Keep the original:
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
- linework
- visual style

ONLY generate new environmental areas outside the boundaries of the original image.

The newly generated area must continue the existing environment naturally.

Maintain consistency in:
- perspective
- horizon level
- ground level
- environmental scale
- object proportions
- architectural style
- vegetation
- colors
- lighting
- atmosphere
- cartoon linework

Continue roads, walls, buildings, landscapes, skies, floors, or other environmental elements naturally when appropriate.

Do not create unrelated locations or sudden changes in the environment.

The extended area must feel like a natural continuation of the SAME location.

STRICT REFERENCE LOCK:
Keep the original image unchanged.
Keep all existing objects unchanged.
Keep the same environment.
Keep the same perspective.
Keep the same camera angle.
Keep the same lighting.
Keep the same atmosphere.
Keep the same visual style.

ONLY expand the environment beyond the original boundaries.

The final result must look like the original background was always part of a larger continuous environment.

Output a clean wide 2D animation background.`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>