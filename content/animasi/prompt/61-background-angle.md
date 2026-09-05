---
title: "Background Angle"
slug: "background-angle"
description: "Prompt builder interaktif untuk mengubah sudut pandang (camera angle) pada gambar background 2D animasi (dari tampak depan, samping, close-up, hingga bird-eye view) dengan tetap mempertahankan elemen objek yang sama"
icon: "icon-[ri--vidicon-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="backgroundAngleApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--vidicon-line] text-indigo-600 dark:text-indigo-400"></i> Background Camera Angle Shifter
</h3>
<div class="flex items-center gap-2">
<!-- Tombol View Base Prompt Deskripsi Sudut Kamera -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Prompt Sudut
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
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[NEW CAMERA VIEWPOINT]</label>
<div class="relative flex items-center">
<input type="text" x-model="angleDesc" @focus="$el.select()" placeholder="e.g. Low angle shot looking up, showing towering height..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Contoh Sudut Kamera">
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

<!-- Modal Picker Database Sudut Kamera Background -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Referensi Sudut Kamera</h3>
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
<template x-for="(cat, catName) in angleDatabase" :key="catName">
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

<!-- Modal Viewer & Editor Base Prompt W sudut kamera -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--vidicon-line] text-indigo-600 dark:text-indigo-400"></i> Deskripsi Generator Sudut Kamera Background
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Input Cepat untuk Ganti Konsep Sudut di Base Prompt -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Ubah Konsep Deskripsi Sudut Kamera (Masukin Disini):</label>
<input type="text" x-model="angleInputNote" @focus="$el.select()" placeholder="Ex: Low angle shot looking up..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<!-- Live Preview Base Prompt W sudut kamera -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicAngleBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicAngleBasePrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Prompt Ekstraksi Gambar Referensi Style Sudut Kamera -->
<div x-show="showExtractModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showExtractModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-ai-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Ekstraksi Style Sudut Kamera Referensi
</h3>
<button @click="showExtractModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
Gunakan prompt master di bawah ini untuk mengekstrak sudut pandang kamera, perspektif, dan komposisi spasial secara presisi dari gambar background referensi.
</p>
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap bg-gray-900 p-4 rounded-xl border border-gray-800" x-text="extractAngleStylePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(extractAngleStylePrompt, 'extractCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="extractCopied ? 'Prompt Ekstraksi Disalin!' : 'Salin Prompt Ekstraksi'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function backgroundAngleApp() {
    return {
        angleDesc: 'Low angle shot looking up, showing towering height and dramatic perspective.',
        angleInputNote: 'LOW ANGLE SHOT LOOKING UP',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e0e7ff" font-size="12" font-family="sans-serif">Angle</text></svg>',
        copied: false,
        descCopied: false,
        extractCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showExtractModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        angleDatabase: {
            "Sudut Vertikal": [
                {
                    title: "Low Angle Shot",
                    description: "Low angle shot looking up, showing towering height and dramatic vertical perspective of the environment.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Low Angle</text></svg>'
                },
                {
                    title: "High Angle Shot",
                    description: "High angle shot looking down, viewing the scene from an elevated position with extended ground layout.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234338ca"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">High Angle</text></svg>'
                },
                {
                    title: "Bird Eye View",
                    description: "Top-down bird's-eye view, completely overhead map perspective of the environment layout.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%233730a3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Bird Eye</text></svg>'
                }
            ],
            "Sudut Horizontal & Samping": [
                {
                    title: "Side Profile View",
                    description: "Side profile view, orthogonal lateral angle showing objects and structures from the side.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230284c7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Side View</text></svg>'
                },
                {
                    title: "Three-Quarter Angle",
                    description: "Classic three-quarter isometric perspective angle, showing both front and side faces of the buildings clearly.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230369a1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">3/4 Angle</text></svg>'
                },
                {
                    title: "Reverse Back Angle",
                    description: "Reverse angle shot looking back from the opposite side of the environment, showing inverted depth.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23075985"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Reverse</text></svg>'
                }
            ],
            "Jarak & Fokus Lensa": [
                {
                    title: "Wide Establishing Shot",
                    description: "Wide angle establishing shot, capturing a much larger area of the surrounding environment with deep perspective.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230d9488"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Wide Shot</text></svg>'
                },
                {
                    title: "Close-up Detail Shot",
                    description: "Tight close-up shot focused tightly on a specific section or object of the environment with shallow depth.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230f766e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Close-up</text></svg>'
                },
                {
                    title: "Dutch Angle (Tilted)",
                    description: "Dynamic tilted Dutch angle shot, skewed horizon line creating an energetic and dramatic composition.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23115e59"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Dutch Angle</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.angleDatabase) {
                    allItems.push(...this.angleDatabase[cat]);
                }
                return allItems;
            }
            return this.angleDatabase[this.activeCategory] || [];
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
            this.angleDesc = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.angleDatabase) {
                allItems.push(...this.angleDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.angleDesc = rand.description;
            this.activeImage = rand.image;
        },

        get dynamicAngleBasePrompt() {
            let target = this.angleInputNote ? this.angleInputNote.trim() : 'LOW ANGLE SHOT LOOKING UP';
            return `Create **ONE short visual description** for changing the camera angle and viewpoint of an existing environment based on:

[${target}]

Write it as **one concise descriptive sentence**, specifying the exact camera placement, viewing height, perspective distortion, and spatial orientation clearly.

Rules:
* Focus **ONLY on camera viewpoint, perspective, and framing**
* Describe how the camera position shifts relative to the scene
* **DO NOT mention or describe any specific physical objects** (buildings, trees, etc.)
* **DO NOT redesign or replace the original environment identity**
* Keep it **short and directly usable for image transformation**

**Output ONE sentence only.**`;
        },

        get extractAngleStylePrompt() {
            return `BACKGROUND CAMERA ANGLE EXTRACTION ANALYSIS

Use the attached reference background image to analyze and extract the precise camera viewpoint, perspective lines, and framing.

Create **ONE concise visual camera angle description sentence** for applying this viewpoint to other backgrounds.

Rules:
* Focus **ONLY on camera angle, framing, height, and spatial perspective**
* Note whether it is low angle, high angle, eye-level, side view, or wide shot
* **DO NOT describe the specific physical scene elements** (buildings, objects)
* Keep the text short, clean, and directly usable for the angle-shifting tool

**Output ONE camera angle description sentence only.**`;
        },

        get fullPrompt() {
            let descText = this.angleDesc ? this.angleDesc.trim() : 'Low angle shot looking up, showing towering height and dramatic perspective.';

            return `Use the attached image as the STRICT ENVIRONMENT REFERENCE.

Recreate the SAME environment from a different camera viewpoint based on:

[${descText}]

Preserve the original environment identity and all important environmental elements.

Do NOT redesign the location or create a different environment.

Keep consistent:
- buildings
- roads
- furniture
- trees
- major objects
- object proportions
- environmental layout
- architectural design
- colors
- visual style
- linework
- overall scene identity

Adjust the visible surfaces and spatial relationships naturally according to the requested camera viewpoint.

Maintain a clean 2D cartoon animation style with:
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal details
- slightly handmade line quality
- animation-friendly environment design

Do not add characters, text, logos, new buildings, or unrelated objects.

Do not randomly move or redesign existing environmental elements.

The result must look like the SAME location viewed from a different camera position.

Output a clean animation background with consistent environment design and the requested camera viewpoint.`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>