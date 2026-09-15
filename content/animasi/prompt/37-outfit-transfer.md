---
title: "Transfer Outfit"
slug: "transfer-outfit"
description: "Prompt builder untuk mentransfer pakaian dari gambar referensi outfit ke karakter referensi dengan presisi tinggi dan gaya seni yang konsisten"
icon: "icon-[ri--t-shirt-line]"
categories:
  - "Outfit"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="transferOutfitApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--t-shirt-line] text-indigo-600 dark:text-indigo-400"></i> Outfit Transfer Prompt Builder
</h3>
<div class="flex items-center gap-2">
<!-- Tombol View Base Prompt Outfit Transfer -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Base Prompt
</button>
<button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer">
🎲 Random
</button>
</div>
</div>

<!-- Input Outfit Notes & Active Image Previews -->
<div class="grid grid-cols-1 sm:grid-cols-[160px_1px_1fr] gap-4 items-center">
<!-- Image Preview Box (Character & Outfit Refs) -->
<div class="flex items-center justify-center space-x-2">
<div class="flex flex-col items-center space-y-1">
<div class="w-16 h-16 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center shadow-xs">
<img :src="charImage" alt="Char Ref" class="w-full h-full object-cover">
</div>
<span class="text-[9px] text-gray-400 font-medium">Character</span>
</div>
<div class="flex flex-col items-center space-y-1">
<div class="w-16 h-16 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center shadow-xs">
<img :src="outfitImage" alt="Outfit Ref" class="w-full h-full object-cover">
</div>
<span class="text-[9px] text-gray-400 font-medium">Outfit</span>
</div>
</div>

<div class="hidden sm:block h-full bg-gray-100 dark:bg-gray-700"></div>

<!-- Description Input -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[OUTFIT TRANSFER FOCUS / NOTES]</label>
<div class="relative flex items-center">
<input type="text" x-model="outfitNotes" @focus="$el.select()" placeholder="e.g. Transfer casual hoodie, layered jacket, and matching sneakers accurately..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Select Outfit Style Template">
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

<!-- Modal Picker Database Template Outfit -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Select Outfit Style Template</h3>
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
<template x-for="(cat, catName) in outfitDatabase" :key="catName">
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
function transferOutfitApp() {
    return {
        outfitNotes: 'Transfer casual hoodie, layered jacket, matching trousers, and clean footwear precisely as shown in the outfit reference',
        charImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e1b4b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c7d2fe" font-size="10" font-family="sans-serif">Character</text></svg>',
        outfitImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="10" font-family="sans-serif">Outfit Ref</text></svg>',
        copied: false,
        descCopied: false,
        showModal: false,
        showDescBaseModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        outfitDatabase: {
            "Casual & Streetwear": [
                {
                    title: "Casual Hoodie & Jacket",
                    description: "Transfer casual hoodie, layered zip jacket, matching trousers, and clean sneakers precisely as shown in the outfit reference",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="10" font-family="sans-serif">Hoodie</text></svg>'
                },
                {
                    title: "Oversized Streetwear Tee",
                    description: "Transfer oversized graphic t-shirt, cargo pants with multiple pockets, and high-top sneakers from the outfit reference",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23312e81"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c7d2fe" font-size="10" font-family="sans-serif">Streetwear</text></svg>'
                }
            ],
            "Formal & Smart Casual": [
                {
                    title: "Formal Suit & Tie",
                    description: "Transfer formal tailored suit jacket, collared dress shirt, necktie, dress pants, and polished leather shoes",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237f1d1d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fecaca" font-size="10" font-family="sans-serif">Suit</text></svg>'
                },
                {
                    title: "Smart Casual Blazer",
                    description: "Transfer smart casual blazer jacket, knit sweater vest, collared shirt, chinos, and casual loafers",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23581c87"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e9d5ff" font-size="10" font-family="sans-serif">Blazer</text></svg>'
                }
            ],
            "Fantasy & Adventure": [
                {
                    title: "Adventurer Leather Armor",
                    description: "Transfer fantasy adventurer leather chest armor, shoulder pauldrons, utility belt, tunic, and rugged leather boots",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b45309"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fef3c7" font-size="10" font-family="sans-serif">Armor</text></svg>'
                },
                {
                    title: "Wizard Cloak & Robes",
                    description: "Transfer magical wizard hooded cloak, layered embroidered robes, mystic sash belt, and leather boots",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="10" font-family="sans-serif">Robes</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.outfitDatabase) {
                    allItems.push(...this.outfitDatabase[cat]);
                }
                return allItems;
            }
            return this.outfitDatabase[this.activeCategory] || [];
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
            this.outfitNotes = item.description;
            this.outfitImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.outfitDatabase) {
                allItems.push(...this.outfitDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.outfitNotes = rand.description;
            this.outfitImage = rand.image;
        },

        get fullPrompt() {
            let notes = this.outfitNotes ? this.outfitNotes.trim() : 'Transfer the complete outfit accurately from the outfit reference.';

            return `Use the attached CHARACTER IMAGE as the STRICT CHARACTER REFERENCE.
Use the attached OUTFIT IMAGE as the STRICT OUTFIT REFERENCE.
Create the EXACT SAME CHARACTER wearing the outfit shown in the OUTFIT REFERENCE.

OUTFIT TRANSFER NOTES
[${notes}]

Extract and apply the clothing design from the OUTFIT REFERENCE to the character.
Reproduce the outfit as accurately as possible, including:
* clothing type
* clothing layers
* garment shapes
* colors
* patterns
* materials
* sleeves
* collars
* pockets
* buttons
* seams
* footwear
* distinctive clothing details

The outfit should be transferred from the OUTFIT REFERENCE, not redesigned or replaced with a similar outfit.
Adapt the outfit naturally to the character's existing body proportions and pose.

CHARACTER LOCK — DO NOT CHANGE
Keep the character exactly as shown in the CHARACTER IMAGE:
* same character identity
* same head
* same face
* same facial features
* same face shape
* same hairstyle
* same hair shape
* same hair color
* same skin tone
* same body shape
* same body proportions
* same age
* same pose
* same body position
* same hand position
* same leg position
* same camera angle
* same perspective
* same composition
* same art style

Do NOT redesign the character.

OUTFIT RULES
Change ONLY the character's clothing and footwear.
The outfit must:
* match the OUTFIT REFERENCE
* preserve its recognizable design
* preserve its important visual details
* maintain the original character's body proportions
* follow the character's existing pose
* fit naturally around the character's body
* remain clean and animation-friendly

If the OUTFIT REFERENCE contains a person or model, transfer ONLY the clothing design.
Do NOT transfer:
* face
* hairstyle
* body shape
* skin tone
* pose
* identity
* accessories unrelated to the outfit

Do not copy the model/person from the OUTFIT REFERENCE.

STYLE CONSISTENCY
Render the transferred outfit using the same visual style as the CHARACTER IMAGE.
Preserve the character's original:
* linework
* outline thickness
* color treatment
* proportions
* shading
* rendering
* level of detail

The outfit should look like it was originally designed for this character.

DO NOT ALTER
Do not change the:
* head
* face
* hairstyle
* hair color
* skin tone
* body
* body proportions
* pose
* hands
* legs
* camera angle
* perspective
* composition

Do not add props.
Do not add extra characters.
Do not add text.
Do not add accessories unless they are clearly part of the outfit shown in the OUTFIT REFERENCE.

STRICT REFERENCE PRIORITY
CHARACTER IMAGE = identity, body, pose, composition, and style.
OUTFIT IMAGE = clothing design and clothing details.
Do not mix these references.

FINAL RESULT
The final image must be the same character from the CHARACTER IMAGE wearing the outfit from the OUTFIT IMAGE.
The character must remain recognizable and unchanged.
The outfit must be clearly derived from the OUTFIT REFERENCE.
ONLY THE OUTFIT IS REPLACED.`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>