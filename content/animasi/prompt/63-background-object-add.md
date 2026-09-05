---
title: "Background Object Add"
slug: "background-object-add"
description: "Prompt builder interaktif untuk menambahkan objek atau elemen baru secara presisi ke dalam gambar background 2D animasi tanpa mengubah lingkungan aslinya"
icon: "icon-[ri--add-circle-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="backgroundAddObjectApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--add-circle-line] text-indigo-600 dark:text-indigo-400"></i> Background Object Adder & Placer
</h3>
<div class="flex items-center gap-2">
<!-- Tombol View Base Prompt Deskripsi Objek -->
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

<!-- Object & Placement Inputs -->
<div class="space-y-4">
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[NEW OBJECT/ELEMENT]</label>
<div class="relative flex items-center">
<input type="text" x-model="objectDesc" @focus="$el.select()" placeholder="e.g. A vintage bicycle leaning against the wall..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Contoh Objek">
<i class="icon-[ri--list-settings-line] text-lg"></i>
</button>
</div>
</div>

<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[PRECISE PLACEMENT LOCATION]</label>
<input type="text" x-model="placementDesc" @focus="$el.select()" placeholder="e.g. On the left sidewalk, next to the blue door..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
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

<!-- Modal Picker Database Objek Background -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Referensi Objek Tambahan</h3>
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
<template x-for="(cat, catName) in objectDatabase" :key="catName">
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

<!-- Modal Viewer & Editor Base Prompt W objek -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--add-circle-line] text-indigo-600 dark:text-indigo-400"></i> Deskripsi Generator Penambahan Objek
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Input Cepat untuk Ganti Konsep Objek di Base Prompt -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Ubah Konsep Deskripsi Objek (Masukin Disini):</label>
<input type="text" x-model="objectInputNote" @focus="$el.select()" placeholder="Ex: A vintage bicycle leaning..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<!-- Live Preview Base Prompt W objek -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicObjectBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicObjectBasePrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Prompt Ekstraksi Gambar Referensi Style Objek -->
<div x-show="showExtractModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showExtractModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-ai-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Ekstraksi Style Gambar Referensi Objek
</h3>
<button @click="showExtractModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
Gunakan prompt master di bawah ini untuk mengekstrak ciri khas visual, detail, dan gaya rendering dari gambar objek referensi agar dapat diterapkan pada objek baru yang ditambahkan.
</p>
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap bg-gray-900 p-4 rounded-xl border border-gray-800" x-text="extractObjectStylePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(extractObjectStylePrompt, 'extractCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="extractCopied ? 'Prompt Ekstraksi Disalin!' : 'Salin Prompt Ekstraksi'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function backgroundAddObjectApp() {
    return {
        objectDesc: 'A vintage bicycle leaning against the wall',
        placementDesc: 'On the left sidewalk, next to the blue door',
        objectInputNote: 'A VINTAGE BICYCLE LEANING AGAINST THE WALL',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e0e7ff" font-size="12" font-family="sans-serif">Object</text></svg>',
        copied: false,
        descCopied: false,
        extractCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showExtractModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        objectDatabase: {
            "Properti Interior": [
                {
                    title: "Tanaman Pot Meja",
                    description: "A small potted green plant with ceramic vase",
                    placement: "On top of the wooden table or windowsill",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Tanaman</text></svg>'
                },
                {
                    title: "Tumpukan Buku",
                    description: "A small neat stack of old hardcover books",
                    placement: "On the floor in the corner or on a shelf",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234338ca"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Buku</text></svg>'
                },
                {
                    title: "Lampu Meja Klasik",
                    description: "A vintage table lamp with a soft lampshade",
                    placement: "On the counter or side table",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%233730a3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Lampu</text></svg>'
                }
            ],
            "Properti Eksterior": [
                {
                    title: "Sepeda Klasik",
                    description: "A vintage bicycle leaning against the wall",
                    placement: "On the left sidewalk, next to the wall",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Sepeda</text></svg>'
                },
                {
                    title: "Kotak Surat Kayu",
                    description: "A classic wooden wall-mounted post box",
                    placement: "Mounted beside the main front door",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Kotak Surat</text></svg>'
                },
                {
                    title: "Tong Sampah Logam",
                    description: "A simple vintage metal trash can",
                    placement: "In the corner near the street curb",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Tong Sampah</text></svg>'
                }
            ],
            "Detail & Dekorasi Dinding": [
                {
                    title: "Jam Dinding Klasik",
                    description: "A round analog wall clock with simple hands",
                    placement: "Centered high on the back wall",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23312e81"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Jam Dinding</text></svg>'
                },
                {
                    title: "Poster Seni Rangka",
                    description: "A framed rectangular minimalist art poster",
                    placement: "Hung on the empty wall space",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Poster</text></svg>'
                },
                {
                    title: "Rak Dinding Gantung",
                    description: "A simple wooden plank floating shelf",
                    placement: "Mounted horizontally on the upper right wall",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%233730a3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Rak Dinding</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.objectDatabase) {
                    allItems.push(...this.objectDatabase[cat]);
                }
                return allItems;
            }
            return this.objectDatabase[this.activeCategory] || [];
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
            this.objectDesc = item.description;
            this.placementDesc = item.placement;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.objectDatabase) {
                allItems.push(...this.objectDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.objectDesc = rand.description;
            this.placementDesc = rand.placement;
            this.activeImage = rand.image;
        },

        get dynamicObjectBasePrompt() {
            let target = this.objectInputNote ? this.objectInputNote.trim() : 'A VINTAGE BICYCLE LEANING AGAINST THE WALL';
            return `Create **ONE short visual description** for adding a specific object to an existing background based on:

[${target}]

Write it as **one concise descriptive sentence**, specifying the object and its exact placement location within the scene.

Rules:
* Focus **ONLY on the added object and placement**
* Describe the prop clearly and where it sits
* **DO NOT modify the original environment structure or layout**
* Keep it **short and directly usable for image editing**

**Output ONE sentence only.**`;
        },

        get extractObjectStylePrompt() {
            return `BACKGROUND OBJECT & PROPS STYLE EXTRACTION

Use the attached reference image to analyze and extract the precise art style, line thickness, color palette, and shading of objects.

Create **ONE concise visual style description sentence** for rendering new objects to match seamlessly.

Rules:
* Focus **ONLY on object art style and rendering characteristics**
* Keep the text short, clean, and directly usable for the object adder tool

**Output ONE style description sentence only.**`;
        },

        get fullPrompt() {
            let objText = this.objectDesc ? this.objectDesc.trim() : 'A vintage bicycle leaning against the wall';
            let placeText = this.placementDesc ? this.placementDesc.trim() : 'On the left sidewalk, next to the blue door';

            return `Use the attached image as the STRICT BACKGROUND REFERENCE.

Add ONLY the specified new object or element:

[${objText}]

Place the new object naturally in the specified location:

[${placeText}]

Preserve the original background exactly as much as possible.

Do NOT change, redesign, remove, move, resize, recolor, or replace any existing:
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
- art style

The new object must naturally match the existing environment.

Match the new object with the original:
- cartoon art style
- linework
- outline thickness
- colors
- lighting
- perspective
- scale
- proportions
- visual simplicity

Make sure the new object has the correct size and perspective relative to its position in the environment.

Do not add any additional objects or unnecessary details.

Do not alter any area outside the placement of the new object.

STRICT REFERENCE LOCK:
Same environment.
Same composition.
Same existing objects.
Same object positions.
Same perspective.
Same camera angle.
Same lighting.
Same atmosphere.
Same visual style.

ONLY add the specified object in the requested location.

The final result must look like the new object naturally belongs in the original background.

Output a clean 2D animation background.`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>