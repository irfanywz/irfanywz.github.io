---
title: "Background Object Replace"
slug: "background-object-replace"
description: "Prompt builder interaktif untuk menukar objek atau elemen tertentu dalam gambar background 2D animasi dengan objek baru secara presisi, menjaga konsistensi lingkungan."
icon: "icon-[ri--exchange-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="backgroundReplaceObjectApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--exchange-line] text-indigo-600 dark:text-indigo-400"></i> Background Object Replacement Tool
</h3>
<div class="flex items-center gap-2">
<!-- Tombol View Base Prompt Target & Replacement -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Prompt Objek
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

<!-- Inputs & Active Image Preview -->
<div class="grid grid-cols-1 sm:grid-cols-[100px_1px_1fr] gap-4 items-start">
<!-- Image Preview Box -->
<div class="flex flex-col items-center justify-center space-y-1.5 pt-1">
<div class="w-20 h-20 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center shadow-xs">
<img :src="activeImage" alt="Preview" class="w-full h-full object-cover">
</div>
<span class="text-[10px] text-gray-400 font-medium">Ref Preview</span>
</div>

<div class="hidden sm:block h-full bg-gray-100 dark:bg-gray-700"></div>

<!-- Target & Replacement Inputs -->
<div class="space-y-4">
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[TARGET OBJECT TO REPLACE]</label>
<div class="relative flex items-center">
<input type="text" x-model="targetObject" @focus="$el.select()" placeholder="e.g. The wooden bench on the right..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Pasangan Ganti Objek">
<i class="icon-[ri--list-settings-line] text-lg"></i>
</button>
</div>
</div>

<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[REPLACEMENT OBJECT]</label>
<input type="text" x-model="replacementObject" @focus="$el.select()" placeholder="e.g. A modern red vending machine..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
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

<!-- Modal Picker Database Pasangan Ganti Objek -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Pasangan Substitusi Objek</h3>
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
<template x-for="(cat, catName) in replacementDatabase" :key="catName">
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
<template x-for="item in filteredDatabase" :key="item.target">
<div @click="selectItem(item)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20">
<div class="w-full h-20 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center">
<img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
</div>
<span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.target + ' ➔ ' + item.replacement"></span>
<span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="'Ganti objek lama dengan versi baru'"></span>
</div>
</template>
</div>
</div>

</div>
</div>

<!-- Modal Viewer & Editor Base Prompt Target & Replacement -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--exchange-line] text-indigo-600 dark:text-indigo-400"></i> Deskripsi Generator Substitusi Objek
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Input Cepat untuk Ganti Target & Replacement di Base Prompt -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div class="space-y-1">
<label class="text-[10px] font-medium text-gray-600 dark:text-gray-400">Target Note:</label>
<input type="text" x-model="targetInputNote" @focus="$el.select()" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>
<div class="space-y-1">
<label class="text-[10px] font-medium text-gray-600 dark:text-gray-400">Replacement Note:</label>
<input type="text" x-model="replacementInputNote" @focus="$el.select()" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>
</div>

<!-- Live Preview Base Prompt Substitusi -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicReplaceBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicReplaceBasePrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Prompt Ekstraksi Gambar Referensi Style Penggantian -->
<div x-show="showExtractModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showExtractModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-ai-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Ekstraksi Style Substitusi Objek
</h3>
<button @click="showExtractModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
Gunakan prompt master di bawah ini untuk menganalisis dan mengekstrak gaya visual latar belakang, pencahayaan, serta garis objek target agar penggantian objek tampak menyatu secara mulus.
</p>
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap bg-gray-900 p-4 rounded-xl border border-gray-800" x-text="extractReplaceStylePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(extractReplaceStylePrompt, 'extractCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="extractCopied ? 'Prompt Ekstraksi Disalin!' : 'Salin Prompt Ekstraksi'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function backgroundReplaceObjectApp() {
    return {
        targetObject: 'The wooden bench on the right',
        replacementObject: 'A modern red vending machine',
        targetInputNote: 'THE WOODEN BENCH ON THE RIGHT',
        replacementInputNote: 'A MODERN RED VENDING MACHINE',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234338ca"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e0e7ff" font-size="12" font-family="sans-serif">Replace</text></svg>',
        copied: false,
        descCopied: false,
        extractCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showExtractModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        replacementDatabase: {
            "Furnitur & Perabot": [
                {
                    target: "The wooden bench on the right",
                    replacement: "A modern red vending machine",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Bench</text></svg>'
                },
                {
                    target: "The old wooden chair in the corner",
                    replacement: "A sleek futuristic armchair",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234338ca"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Chair</text></svg>'
                },
                {
                    target: "The small side table",
                    replacement: "A tall indoor palm tree in a pot",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%233730a3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Table</text></svg>'
                }
            ],
            "Elemen Eksterior": [
                {
                    target: "The old street lamp",
                    replacement: "A modern glowing neon cyberpunk signage post",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Lamp</text></svg>'
                },
                {
                    target: "The wooden mailbox by the fence",
                    replacement: "A high-tech digital parcel locker unit",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Mailbox</text></svg>'
                },
                {
                    target: "The stone trash bin",
                    replacement: "A smart automated recycling receptacle",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Bin</text></svg>'
                }
            ],
            "Dekorasi Dinding": [
                {
                    target: "The framed landscape painting on the wall",
                    replacement: "A round digital holographic display screen",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23312e81"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Painting</text></svg>'
                },
                {
                    target: "The analog wall clock",
                    replacement: "A floating neon minimalist digital clock element",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Clock</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.replacementDatabase) {
                    allItems.push(...this.replacementDatabase[cat]);
                }
                return allItems;
            }
            return this.replacementDatabase[this.activeCategory] || [];
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
            this.targetObject = item.target;
            this.replacementObject = item.replacement;
            this.targetInputNote = item.target.toUpperCase();
            this.replacementInputNote = item.replacement.toUpperCase();
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.replacementDatabase) {
                allItems.push(...this.replacementDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.targetObject = rand.target;
            this.replacementObject = rand.replacement;
            this.targetInputNote = rand.target.toUpperCase();
            this.replacementInputNote = rand.replacement.toUpperCase();
            this.activeImage = rand.image;
        },

        get dynamicReplaceBasePrompt() {
            let t = this.targetInputNote ? this.targetInputNote.trim() : 'THE WOODEN BENCH ON THE RIGHT';
            let r = this.replacementInputNote ? this.replacementInputNote.trim() : 'A MODERN RED VENDING MACHINE';
            return `Create **ONE clear visual substitution description** for replacing an existing background object based on:

- Target Object: [${t}]
- Replacement Object: [${r}]

Write it as **one concise directive sentence**, detailing what object to remove and what new object must occupy its exact spatial location.

Rules:
* Focus **ONLY on the targeted object swap**
* Keep the spatial anchor and perspective identical
* **DO NOT modify the rest of the background layout**
* Output **ONE directive sentence only.**`;
        },

        get extractReplaceStylePrompt() {
            return `BACKGROUND OBJECT REPLACEMENT STYLE EXTRACTION

Analyze the attached reference image to extract the core art style, outline weight, color scheme, and environmental lighting of the background scene.

Create **ONE precise style matching rule sentence** ensuring that any object replacement blends smoothly with the original aesthetic.

Rules:
* Focus **ONLY on style preservation, line weight, and perspective fitting**
* Keep text short and directly usable for background element editing pipelines

**Output ONE style instruction sentence only.**`;
        },

        get fullPrompt() {
            let targetText = this.targetObject ? this.targetObject.trim() : 'The wooden bench on the right';
            let replacementText = this.replacementObject ? this.replacementObject.trim() : 'A modern red vending machine';

            return `Use the attached image as the STRICT BACKGROUND REFERENCE.

Replace ONLY the specified existing object:
[${targetText}]
with:
[${replacementText}]

Preserve the original background exactly as much as possible.

The new object must occupy the same general location and naturally fit into the existing environment.

Do NOT change, redesign, remove, move, resize, recolor, or replace any other existing:
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
- perspective
- proportions
- camera angle
- lighting
- time of day
- atmosphere
- visual style

ONLY replace the specified target object with the requested new object.

The replacement must:
- remain in the same general position
- match the surrounding scale
- follow the existing perspective
- fit naturally into the environment
- maintain believable proportions
- match the original cartoon art style
- match the original linework and outline thickness
- match the existing color simplicity and visual quality

Adjust ONLY the immediate surrounding area when necessary to make the replacement object naturally fit into the environment.

Do not alter unrelated areas of the image.

STRICT REFERENCE LOCK:
- Same environment.
- Same location.
- Same composition.
- Same perspective.
- Same camera angle.
- Same lighting.
- Same atmosphere.
- Same surrounding objects.
- Same visual style.

ONLY replace the specified object.

The final result must look like the SAME original background, except that the specified object has been naturally replaced with the new object.

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