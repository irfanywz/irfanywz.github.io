---
title: "Background Interior Sidescroll"
slug: "background-interior-sidescroll"
description: "Prompt builder untuk menghasilkan background interior ruangan animasi 2D gaya side-scroller 4-layer dengan gaya visual asli yang terinspirasi dari referensi"
icon: "icon-[ri--home-smile-2-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="interiorBackgroundApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--home-smile-2-line] text-indigo-600 dark:text-indigo-400"></i> Interior Animation Background Builder
</h3>
<div class="flex items-center gap-2">
<!-- Tombol Prompt Interior dari Gambar -->
<button @click="showImageInteriorBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--image-line]"></i> Prompt Interior dari Gambar
</button>
<!-- Tombol View Base Prompt Deskripsi Interior -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Prompt Interior
</button>
<button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer">
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
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[BACKGROUND INTERIOR DESCRIPTION]</label>
<div class="relative flex items-center">
<input type="text" x-model="interiorStyle" @focus="$el.select()" placeholder="e.g. Cozy traditional Indonesian living room with bamboo walls, wooden bench (bale-bale)..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Gaya Interior">
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

<!-- Modal Picker Database Background Interior -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Tipe / Varian Ruangan Interior</h3>
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
<template x-for="(cat, catName) in interiorDatabase" :key="catName">
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

<!-- Modal Viewer & Editor Base Prompt Interior -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--file-text-line] text-indigo-600 dark:text-indigo-400"></i> Deskripsi Generator Interior
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Input Cepat untuk Ganti Konsep di Base Prompt -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Ubah Konsep Ruangan (Masukin Disini):</label>
<input type="text" x-model="interiorInputNote" @focus="$el.select()" placeholder="Ex: Cozy traditional Indonesian living room..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<!-- Live Preview Base Prompt Interior -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicInteriorBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicInteriorBasePrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Viewer & Editor Base Prompt Interior dari Gambar -->
<div x-show="showImageInteriorBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showImageInteriorBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Interior dari Gambar
</h3>
<button @click="showImageInteriorBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Live Preview Base Prompt Interior dari Gambar -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="imageInteriorBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(imageInteriorBasePrompt, 'imageDescCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="imageDescCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function interiorBackgroundApp() {
    return {
        interiorStyle: 'Cozy traditional Indonesian living room with bamboo walls, wooden bench (bale-bale), ceramic jar, and woven mat.',
        interiorInputNote: 'COZY TRADITIONAL INDONESIAN LIVING ROOM WITH BAMBOO WALLS AND BALE-BALE',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23451a03"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="12" font-family="sans-serif">Interior</text></svg>',
        copied: false,
        descCopied: false,
        imageDescCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showImageInteriorBaseModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        interiorDatabase: {
            "Rumah Tradisional": [
                {
                    title: "Ruang Tamu Tradisional",
                    description: "Cozy traditional Indonesian living room with bamboo walls, wooden bench (bale-bale), ceramic jar, and woven mat.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23451a03"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="12" font-family="sans-serif">Tamu</text></svg>'
                },
                {
                    title: "Dapur Jadul Klasik",
                    description: "Traditional Indonesian country kitchen with wood-burning stove (tungku tanah liat), hanging kitchen utensils, and wooden shelves.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c2d12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffedd5" font-size="12" font-family="sans-serif">Dapur</text></svg>'
                }
            ],
            "Kamar & Ruang Kerja": [
                {
                    title: "Kamar Tidur Sederhana",
                    description: "Simple retro Indonesian bedroom with a wooden bed frame, vintage wooden wardrobe, small desk, and curtained window.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="12" font-family="sans-serif">Kamar</text></svg>'
                },
                {
                    title: "Ruang Kerja/Studio Retro",
                    description: "Indonesian retro workspace with wooden desk, old box television, bookshelves filled with cassette tapes, and patterned tile floor.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="12" font-family="sans-serif">Studio</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.interiorDatabase) {
                    allItems.push(...this.interiorDatabase[cat]);
                }
                return allItems;
            }
            return this.interiorDatabase[this.activeCategory] || [];
        },

        initSwiper() {
            this.$nextTech(() => {
                if (typeof Swiper !== 'undefined') {
                    this.categorySwiper = new Swiper('.category-swiper', {
                        slidesPerView: 'auto',
                        spaceBetween: 8,
                        freeMode: true,
                    });
                }
            });
            // Fallback immediate execution
            this.$nextTick(() => {
                if (typeof Swiper !== 'undefined' && !this.categorySwiper) {
                    this.categorySwiper = new Swiper('.category-swiper', {
                        slidesPerView: 'auto',
                        spaceBetween: 8,
                        freeMode: true,
                    });
                }
            });
        },

        selectItem(item) {
            this.interiorStyle = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.interiorDatabase) {
                allItems.push(...this.interiorDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.interiorStyle = rand.description;
            this.activeImage = rand.image;
        },

        get dynamicInteriorBasePrompt() {
            let target = this.interiorInputNote ? this.interiorInputNote.trim() : 'COZY TRADITIONAL INDONESIAN LIVING ROOM WITH BAMBOO WALLS AND BALE-BALE';
            return `Create **ONE short visual description** for the interior background based on:

[${target}]

Write it as **one concise sentence**, describing the room type, furniture arrangement, and atmosphere clearly.

Rules:
* Focus **ONLY on the interior room setup, furniture, and specific decorative elements**
* Clearly describe the foreground and background components
* **DO NOT mention characters, people, animals, text, or logos**
* Keep it **short and directly usable for image generation**

**Output ONE sentence only.**`;
        },

        get imageInteriorBasePrompt() {
            return `Create ONE short visual description of the interior animation background using image reference

If a reference image is provided, use it as the PRIMARY INTERIOR STYLE REFERENCE. Carefully observe the room's art style, linework, color palette, lighting, and composition to translate only the important interior traits into a concise description.
Write exactly ONE natural sentence, similar to:
“Cozy traditional Indonesian living room with bamboo walls, wooden bench (bale-bale), ceramic jar, and woven mat.”
RULES:
- Preserve the interior theme, architectural style, and regional characteristics visible in the reference.
- Prioritize distinctive visual traits: furniture layout, wall textures, and object placement.
- Do not invent background features or elements that are not visible or reasonably supported.
- Do not describe specific characters, people, animals, text, or logos.
- Do not copy the reference exact composition if the task is to create a new scene; use the reference only for style guidance.
- Keep the appearance believable and suitable for an animated room setting.
- Avoid generic descriptions.
- Avoid unnecessary details or backstory.
- Keep the sentence short and directly usable as an image-generation prompt.
- Use simple, natural English.
- Do not use bullet points or multiple sentences.
- OUTPUT EXACTLY ONE SENTENCE.`;
        },

        get fullPrompt() {
            let styleDesc = this.interiorStyle ? this.interiorStyle.trim() : 'Cozy traditional Indonesian living room with bamboo walls, wooden bench (bale-bale), ceramic jar, and woven mat.';

            return `Use the attached image as a STRICT STYLE REFERENCE ONLY.

Create a completely original horizontal 2D animation background based on: [${styleDesc}].

Use the reference image ONLY to understand the general visual language:
line quality, rendering technique,  level of detail, and illustration feel.

DO NOT copy or closely reproduce the reference image.
DO NOT reuse its layout, architecture, furniture, objects, shapes, proportions, composition, or specific visual elements.
Create a fresh and original environment with a clearly different design and arrangement.

Build the environment as four clear visual layers:

Bottom layer:
Floor and lower foreground area.

Middle layer:
Furniture, objects, and elements occupying the character's main environment.

Background layer:
Main walls, doors, windows, structures, and dominant environment.

Top layer:
Ceiling and upper environmental elements.

Maintain a wide horizontal sidescroller composition with a large usable floor area for characters.

Front-facing, eye-level view, shallow depth separation, minimal perspective, no strong vanishing point, no cinematic camera angle.

The description determines the environment, architecture, furniture, objects, condition, materials, decoration, lifestyle, and atmosphere.

Interpret naturally and creatively. Invent an original arrangement and visual design rather than reproducing the reference.

Semi-realistic 2D illustration, hand-drawn linework, detailed environment, clean shapes, animation-friendly.

No characters, no people, no animals, no text, no logos.`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>