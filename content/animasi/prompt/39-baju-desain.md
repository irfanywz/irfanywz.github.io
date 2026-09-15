---
title: "Desain Baju"
slug: "tshirt-design-prompt-builder"
description: "Prompt builder untuk merancang jenis baju, tipe grafis, tipografi, logo, pola berulang, dan efek distressed dengan presisi tinggi"
icon: "icon-[ri--shirt-line]"
categories:
  - "Outfit"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="tshirtApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--shirt-line] text-indigo-600 dark:text-indigo-400"></i> T-Shirt & Design Prompt Builder
</h3>
<div class="flex items-center gap-2">
<!-- Tombol View Base Prompt T-Shirt -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Base Prompt
</button>
<button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer">
🎲 Random
</button>
</div>
</div>

<!-- Input Clothing Description & Active Preview -->
<div class="grid grid-cols-1 sm:grid-cols-[100px_1px_1fr] gap-4 items-center">
<!-- Image Preview Box -->
<div class="flex flex-col items-center justify-center space-y-1.5">
<div class="w-20 h-20 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center shadow-xs">
<img :src="activeImage" alt="Preview" class="w-full h-full object-cover">
</div>
<span class="text-[10px] text-gray-400 font-medium">Outfit Style</span>
</div>

<div class="hidden sm:block h-full bg-gray-100 dark:bg-gray-700"></div>

<!-- Description Input -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[CLOTHING & DESIGN DESCRIPTION]</label>
<div class="relative flex items-center">
<input type="text" x-model="clothingDescription" @focus="$el.select()" placeholder="e.g. He is wearing a vintage thrifted graphic t-shirt with bold “Cosmic Journey 1973” typography..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Select T-Shirt & Design Template">
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
<span x-text="copied ? 'Copied!' : 'Copy Prompt'"></span>
</button>
</div>
<!-- Code Box Content -->
<div class="overflow-y-auto">
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt" style="margin: 0 !important;"></pre>
</div>
</div>

<!-- Modal Picker Database Template Clothing & Design -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Select Clothing & Pattern Template</h3>
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
<template x-for="(cat, catName) in tshirtDatabase" :key="catName">
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

<!-- Modal Viewer & Editor Base Prompt Template -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--file-text-line] text-indigo-600 dark:text-indigo-400"></i> Master Base Prompt Template
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(fullPrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Copied!' : 'Copy Prompt'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function tshirtApp() {
    return {
        clothingDescription: 'He is wearing a vintage thrifted graphic t-shirt with bold “Cosmic Journey 1973” typography.',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e1b4b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c7d2fe" font-size="10" font-family="sans-serif">T-Shirt Design</text></svg>',
        copied: false,
        descCopied: false,
        showModal: false,
        showDescBaseModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        tshirtDatabase: {
            "Graphic Print": [
                {
                    title: "Vintage Motorcycle Graphic (Male)",
                    description: "He is wearing a faded black graphic t-shirt with a large vintage motorcycle illustration.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237f1d1d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fecaca" font-size="10" font-family="sans-serif">Graphic M</text></svg>'
                },
                {
                    title: "Illustrated Tiger (Female/Unisex)",
                    description: "She is wearing a white graphic t-shirt with a small illustrated tiger on the chest.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="10" font-family="sans-serif">Graphic F</text></svg>'
                },
                {
                    title: "Rock Band Illustration",
                    description: "He is wearing a vintage graphic t-shirt with a distressed rock band illustration.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23312e81"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c7d2fe" font-size="10" font-family="sans-serif">Rock Print</text></svg>'
                }
            ],
            "Typography": [
                {
                    title: "Cosmic Journey Typography",
                    description: "He is wearing a vintage thrifted graphic t-shirt with bold “Cosmic Journey 1973” typography.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="10" font-family="sans-serif">Typography</text></svg>'
                },
                {
                    title: "Road King Block Letters",
                    description: "He is wearing a faded black t-shirt with large white block lettering reading “ROAD KING.”",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23581c87"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e9d5ff" font-size="10" font-family="sans-serif">Block Text</text></svg>'
                },
                {
                    title: "Retro Chest Lettering (Female)",
                    description: "She is wearing a worn-out gray t-shirt with small retro lettering across the chest.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23831843"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fbcfe8" font-size="10" font-family="sans-serif">Retro Text</text></svg>'
                }
            ],
            "Logo Design": [
                {
                    title: "Embroidered Company Polo",
                    description: "He is wearing a dark green polo shirt with a small embroidered company logo on the chest.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="10" font-family="sans-serif">Polo Logo</text></svg>'
                },
                {
                    title: "Motorcycle Club Emblem Back",
                    description: "He is wearing a black t-shirt with a large motorcycle club emblem printed on the back.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e1b4b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c7d2fe" font-size="10" font-family="sans-serif">Club Logo</text></svg>'
                }
            ],
            "Illustration & Dark": [
                {
                    title: "Skull & Flame Biker Tee",
                    description: "He is wearing a worn black biker t-shirt with a bold skull-and-flame graphic and distressed lettering.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237f1d1d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fecaca" font-size="10" font-family="sans-serif">Skull Flame</text></svg>'
                },
                {
                    title: "Mountain Landscape Tee",
                    description: "She is wearing a faded brown t-shirt with a vintage mountain landscape illustration.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b45309"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fef3c7" font-size="10" font-family="sans-serif">Landscape</text></svg>'
                }
            ],
            "Patterns (Repeating)": [
                {
                    title: "Plaid Button-Up Shirt",
                    description: "He is wearing a loose-fitting red-and-black plaid button-up shirt.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="10" font-family="sans-serif">Plaid</text></svg>'
                },
                {
                    title: "Tropical Floral Print (Female)",
                    description: "She is wearing a short-sleeve shirt with a muted tropical floral print.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="10" font-family="sans-serif">Floral</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.tshirtDatabase) {
                    allItems.push(...this.tshirtDatabase[cat]);
                }
                return allItems;
            }
            return this.tshirtDatabase[this.activeCategory] || [];
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
            this.clothingDescription = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.tshirtDatabase) {
                allItems.push(...this.tshirtDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.clothingDescription = rand.description;
            this.activeImage = rand.image;
        },

        get fullPrompt() {
            let desc = this.clothingDescription ? this.clothingDescription.trim() : 'He is wearing a stylish graphic t-shirt.';

            return `Use the attached character image as the STRICT CHARACTER REFERENCE.
Design and generate the character wearing the specific clothing described below:

CLOTHING & DESIGN DESCRIPTION
[${desc}]

FOLLOW THE FORMULA:
[STYLE] + [CONDITION/ERA] + [TYPE] + with [DESIGN]

CHARACTER LOCK — DO NOT CHANGE
Keep everything from the original character reference exactly as provided:
* same character identity
* same head
* same face
* same facial features
* same hairstyle
* same hair color
* same skin tone
* same body shape
* same body proportions
* same pose
* same camera angle
* same perspective
* same art style

OUTFIT & PATTERN RULES
Apply the clothing description precisely:
* Match the specified clothing type (t-shirt, button-up, polo, etc.).
* Render the exact graphic print, typography, logo, illustration, or repeating pattern requested.
* Accurately incorporate condition details (faded, distressed, vintage thrifted, worn-out).
* Fit the clothing naturally to the character's body proportions and pose.

STYLE CONSISTENCY
Render the clothing using the exact same visual style as the character reference:
* same linework
* same outline thickness
* same color treatment
* same shading
* same rendering style

FINAL RESULT
The final image must be the exact same character wearing the specified designed clothing item with pristine visual consistency.`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>