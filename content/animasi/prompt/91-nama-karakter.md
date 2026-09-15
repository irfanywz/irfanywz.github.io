---
title: "Nama Karakter Generator"
slug: "nama-karakter-generator"
description: "Tool generator daftar deskripsi karakter 2D animasi serial Indonesia berdasarkan kelompok usia dan peran secara acak atau kustom"
icon: "icon-[ri--user-shared-line]"
categories:
  - "Script"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="characterDescApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--user-shared-line] text-indigo-600 dark:text-indigo-400"></i> Character Description Builder
</h3>
<div class="flex items-center gap-2">
<!-- Tombol Prompt Karakter dari Gambar -->
<button @click="showImageCharBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--image-line]"></i> Prompt Karakter dari Gambar
</button>
<!-- Tombol View Base Prompt Deskripsi Karakter -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Prompt Karakter
</button>
<button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer">
🎲 Random
</button>
</div>
</div>

<!-- Grid Dual Input: Target Negara & Tema Karakter -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Input Target Negara / Budaya -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[TARGET COUNTRY / NATIONALITY]</label>
<div class="relative flex items-center">
<input type="text" x-model="targetCountry" @focus="$el.select()" placeholder="e.g. Indonesian, Japanese, Malaysian..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<span class="absolute right-3 text-xs text-gray-400 font-mono">🌍</span>
</div>
</div>

<!-- Input Tema Karakter -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[CHARACTER THEME / DESCRIPTION]</label>
<div class="relative flex items-center">
<input type="text" x-model="characterTheme" @focus="$el.select()" placeholder="e.g. Village neighborhood community characters..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Tema Karakter">
<i class="icon-[ri--list-settings-line] text-lg"></i>
</button>
</div>
</div>
</div>

<!-- Active Image Preview Banner kecil -->
<div class="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700/60">
<div class="w-10 h-10 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center shrink-0">
<img :src="activeImage" alt="Preview" class="w-full h-full object-cover">
</div>
<div class="text-xs text-gray-500 dark:text-gray-400 truncate">
Ref Style: <span class="font-medium text-gray-700 dark:text-gray-300" x-text="characterTheme"></span>
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

<!-- Modal Picker Database Tema Karakter -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Tema / Latar Karakter Serial</h3>
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
<template x-for="(cat, catName) in characterDatabase" :key="catName">
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

<!-- Modal Viewer & Editor Base Prompt Karakter -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--file-text-line] text-indigo-600 dark:text-indigo-400"></i> Deskripsi Generator Karakter
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Live Preview Base Prompt Karakter -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(fullPrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Viewer & Editor Base Prompt Karakter dari Gambar -->
<div x-show="showImageCharBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showImageCharBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Karakter dari Gambar
</h3>
<button @click="showImageCharBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="imageCharBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(imageCharBasePrompt, 'imageDescCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="imageDescCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function characterDescApp() {
    return {
        targetCountry: 'Indonesian',
        characterTheme: 'Village neighborhood community characters in a rural Indonesian setting including local kids, teenagers, parents, and village elders.',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="12" font-family="sans-serif">Karakter</text></svg>',
        copied: false,
        descCopied: false,
        imageDescCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showImageCharBaseModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        characterDatabase: {
            "Desa & Kampung": [
                {
                    title: "Komunitas Warga Desa",
                    description: "Village neighborhood community characters in a rural Indonesian setting including local kids, teenagers, parents, and village elders.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="12" font-family="sans-serif">Desa</text></svg>'
                },
                {
                    title: "Pedagang Pasar Tradisional",
                    description: "Traditional market merchants and local shoppers, featuring fruit sellers, vegetable vendors, and neighborhood buyers.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="12" font-family="sans-serif">Pasar</text></svg>'
                }
            ],
            "Sekolah & Remaja": [
                {
                    title: "Anak Sekolah & Remaja",
                    description: "School students and teenagers hanging out after class, wearing casual everyday clothes and school attributes.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b45309"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fef3c7" font-size="12" font-family="sans-serif">Sekolah</text></svg>'
                },
                {
                    title: "Karang Taruna Pemuda",
                    description: "Youth organization members active in neighborhood social events, sports, and community gathering activities.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c2d12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffedd5" font-size="12" font-family="sans-serif">Pemuda</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.characterDatabase) {
                    allItems.push(...this.characterDatabase[cat]);
                }
                return allItems;
            }
            return this.characterDatabase[this.activeCategory] || [];
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
            this.characterTheme = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.characterDatabase) {
                allItems.push(...this.characterDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.characterTheme = rand.description;
            this.activeImage = rand.image;
        },

        get imageCharBasePrompt() {
            let country = this.targetCountry ? this.targetCountry.trim() : 'Indonesian';
            return `Create ONE short visual theme description of character lists using image reference for a ${country} 2D animated series.

If a reference image is provided, use it as the PRIMARY CHARACTER STYLE REFERENCE. Carefully observe the character art style, linework, color palette, and clothing presentation to translate only the important character design traits into a concise description.
Write exactly ONE natural sentence, similar to:
“Village neighborhood community characters in a rural ${country} setting including local kids, teenagers, parents, and village elders.”
RULES:
- Preserve the character theme, clothing style, and regional characteristics visible in the reference.
- Prioritize distinctive visual traits: everyday attire, demographic diversity, and natural appearance.
- Do not invent character features or elements that are not visible or reasonably supported.
- Do not copy the reference exact composition if the task is to create a new scene; use the reference only for style guidance.
- Keep the appearance believable and suitable for a ${country} animated series.
- Avoid generic descriptions.
- Avoid unnecessary details or backstory.
- Keep the sentence short and directly usable as a prompt.
- Use simple, natural English.
- Do not use bullet points or multiple sentences.
- OUTPUT EXACTLY ONE SENTENCE.`;
        },

        get fullPrompt() {
            let country = this.targetCountry ? this.targetCountry.trim() : 'Indonesian';
            let themeDesc = this.characterTheme ? this.characterTheme.trim() : 'Village neighborhood community characters in a rural setting including local kids, teenagers, parents, and village elders.';

            return `Act as a character designer for a ${country} 2D animated series.

Based on this input:

[${themeDesc}]

Create a complete list of unique ${country} human characters.

### FIXED CHARACTER STYLE

All characters MUST follow these fixed visual rules:

**OUTFIT — STRICTLY LOCKED**

* Simple everyday clothing only
* Plain basic T-shirt or simple short-sleeve shirt as the default top
* Simple everyday pants, shorts, or simple skirt as the bottom
* Clothing must look ordinary, inexpensive, practical, and suitable for daily life
* Keep clothing simple and easy to reproduce in 2D animation
* Different characters may use different shirt and bottom colors
* Different characters may use slightly different basic T-shirt/shirt designs

DO NOT use:

* jackets
* hoodies
* coats
* sweaters
* blazers
* suits
* formalwear
* uniforms unless specifically required by the input
* traditional ceremonial clothing unless specifically required by the input
* fashionable outfits
* luxury clothing
* layered outfits
* elaborate clothing
* complicated patterns
* unnecessary accessories

The default outfit should look like an ordinary person wearing a **basic T-shirt and simple everyday bottoms**.

**FOOTWEAR — STRICTLY LOCKED**

* All characters are barefoot
* No shoes
* No sandals
* No slippers
* No socks

**POSE & EXPRESSION — STRICTLY LOCKED**

Every character must always be described in a neutral idle state:

* Calm neutral facial expression
* Mouth closed
* Eyes naturally open
* Head upright
* Standing upright
* Shoulders relaxed
* Arms hanging naturally at the sides
* Hands relaxed and visible
* Legs in a natural standing position
* Feet planted naturally on the ground
* Static idle pose
* No action
* No gesture
* No dynamic movement

DO NOT use:

* smiling
* laughing
* crying
* angry expression
* surprised expression
* scared expression
* shouting
* waving
* pointing
* running
* walking
* sitting
* jumping
* leaning
* fighting
* dancing
* any active pose

Organize the characters into suitable groups based on age or role, for example:

**Kelompok Anak**
**Kelompok Muda**
**Kelompok Ibu & Bapak**
**Kelompok Lansia**

The groups should adapt naturally to the characters requested in the input.

Each character must have:

* a unique ${country} name
* a suitable age
* a clearly different body type
* a different face shape
* a distinct hairstyle
* a simple basic everyday outfit
* different clothing colors
* a unique overall silhouette
* a calm neutral expression
* bare feet

Make the characters visually diverse through differences in age, gender, body shape, height, face shape, hairstyle, clothing colors, and silhouette.

However, keep the **overall clothing category and idle state consistent across all characters**.

Keep all character designs simple, natural, and suitable for a ${country} everyday environment.

The descriptions must be practical for consistent 2D cartoon character generation and modular animation.

Avoid anime characteristics, fantasy elements, exaggerated physiques, complex accessories, props, fashionable clothing, layered clothing, or unnecessary visual details.

### OUTPUT FORMAT

**[GROUP NAME]**

01 — [CHARACTER NAME]
[A single complete English character description.]

02 — [CHARACTER NAME]
[A single complete English character description.]

03 — [CHARACTER NAME]
[A single complete English character description.]

Continue until all suitable characters for the input are created.

Each character description MUST follow this structure:

A [age]-year-old ${country} [man/woman/boy/girl] with a [body type], [face shape], [hairstyle], and a calm neutral expression, wearing a simple basic [T-shirt/short-sleeve shirt] and [simple everyday pants/shorts/skirt], barefoot, standing in a relaxed idle posture.

Do not add explanations, tables, character analysis, pose variations, or extra notes.

The final output must contain only the character groups, names, numbering, and ready-to-use English character descriptions.
`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>