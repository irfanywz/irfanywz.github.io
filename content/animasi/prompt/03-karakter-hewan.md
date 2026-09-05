---
title: "Karakter Hewan"
slug: "karakter-hewan"
description: "Prompt builder untuk merancang karakter hewan original baru dengan pratinjau gambar SVG, basis data referensi Swiper.js filter, dan template master prompt"
icon: "icon-[ri--bear-smile-line]"
categories:
  - "Karakter"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="animalApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--bear-smile-line] text-amber-600 dark:text-amber-400"></i> Animal Character Prompt Builder
</h3>
<div class="flex items-center gap-2">
<!-- Tombol View Prompt Gambar Referensi Hewan -->
<button @click="showImagePromptModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--image-line]"></i> Prompt Gambar
</button>
<!-- Tombol View Base Prompt Deskripsi Hewan -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Prompt Deskripsi
</button>
<button @click="randomize()" class="text-xs bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 hover:bg-amber-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer">
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
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[NEW ANIMAL CHARACTER DESCRIPTION]</label>
<div class="relative flex items-center">
<input type="text" x-model="animalInput" @focus="$el.select()" placeholder="e.g. A chubby brown bear with soft rounded ears, wearing a tiny backpack..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-amber-600 dark:text-amber-400 p-1 hover:bg-amber-50 dark:hover:bg-amber-950 rounded-lg cursor-pointer" title="Pilih Contoh Karakter Hewan">
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
<i class="icon-[ri--terminal-box-line] text-amber-400 text-base"></i> Full Master Prompt Template (Animal)
</h3>
<button @click="copyText(fullPrompt, 'copied')" class="bg-amber-600 hover:bg-amber-700 text-white text-xs px-3.5 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="copied ? 'Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
<!-- Code Box Content -->
<div class="overflow-y-auto">
<pre class="text-xs text-amber-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt" style="margin: 0 !important;"></pre>
</div>
</div>

<!-- Modal Picker Database Karakter Hewan (Compact Medium Size with Swiper) -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Contoh Karakter Hewan</h3>
<button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>

<!-- Swiper Filter Kategori Buttons -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
<div class="swiper category-swiper-animal w-full overflow-hidden">
<div class="swiper-wrapper">
<!-- Tombol Filter All -->
<div class="swiper-slide !w-auto">
<button @click="activeCategory = 'All'" 
class="text-xs px-3.5 py-1.5 rounded-full transition font-medium cursor-pointer border whitespace-nowrap shadow-xs"
:class="activeCategory === 'All' ? 'bg-amber-600 border-amber-600 text-white' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-500'">
All
</button>
</div>
<template x-for="(cat, catName) in animalDatabase" :key="catName">
<div class="swiper-slide !w-auto">
<button @click="activeCategory = catName" 
class="text-xs px-3.5 py-1.5 rounded-full transition font-medium cursor-pointer border whitespace-nowrap shadow-xs"
:class="activeCategory === catName ? 'bg-amber-600 border-amber-600 text-white' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-500'"
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
<div @click="selectItem(item)" class="group border border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-amber-50/50 dark:hover:bg-amber-950/20">
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

<!-- Modal Viewer & Editor Prompt Gambar Referensi Hewan -->
<div x-show="showImagePromptModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showImagePromptModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-line] text-amber-600 dark:text-amber-400"></i> Prompt Ekstraksi Gambar Referensi Hewan
</h3>
<button @click="showImagePromptModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Catatan/Detail Tambahan Opsional:</label>
<input type="text" x-model="imagePromptNote" @focus="$el.select()" placeholder="Ex: Berikan penekanan pada spesies atau corak tertentu..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500">
</div>

<!-- Live Preview Image Prompt -->
<pre class="text-xs text-amber-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicImagePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicImagePrompt, 'imagePromptCopied')" class="bg-amber-600 hover:bg-amber-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="imagePromptCopied ? 'Prompt Gambar Disalin!' : 'Salin Prompt Gambar'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Viewer & Editor Base Prompt Deskripsi Hewan -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--file-text-line] text-amber-600 dark:text-amber-400"></i> Deskripsi Prompt Generator (Animal)
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Input Cepat untuk Ganti Konsep Karakter Hewan di Base Prompt -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Ubah Deskripsi (Masukin Disini):</label>
<input type="text" x-model="descInput" @focus="$el.select()" placeholder="Ex: BERUANG COKLAT GEMUK, Kucing Oranye Lucu, dll..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500">
</div>

<!-- Live Preview Base Prompt -->
<pre class="text-xs text-amber-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicDescBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicDescBasePrompt, 'descCopied')" class="bg-amber-600 hover:bg-amber-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Base Prompt'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function animalApp() {
    return {
        animalInput: 'A chubby brown bear with soft rounded ears, short limbs, and a gentle friendly expression.',
        descInput: 'BERUANG COKLAT GEMUK',
        imagePromptNote: '',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23292524"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde68a" font-size="12" font-family="sans-serif">Animal</text></svg>',
        copied: false,
        descCopied: false,
        imagePromptCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showImagePromptModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        animalDatabase: {
            "Mammals": [
                {
                    title: "Chubby Bear",
                    description: "A chubby brown bear with soft rounded ears, short limbs, and a gentle friendly expression.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23451a03"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde68a" font-size="12" font-family="sans-serif">Bear</text></svg>'
                },
                {
                    title: "Orange Cat",
                    description: "A playful orange tabby cat with white paws, big curious eyes, and a long curved tail.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2378350f"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="12" font-family="sans-serif">Cat</text></svg>'
                }
            ],
            "Wild": [
                {
                    title: "Clever Fox",
                    description: "A sleek orange fox with a bushy white-tipped tail, pointed ears, and an alert posture.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%239a3412"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffedd5" font-size="12" font-family="sans-serif">Fox</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.animalDatabase) {
                    allItems.push(...this.animalDatabase[cat]);
                }
                return allItems;
            }
            return this.animalDatabase[this.activeCategory] || [];
        },

        initSwiper() {
            this.$nextTick(() => {
                if (typeof Swiper !== 'undefined') {
                    this.categorySwiper = new Swiper('.category-swiper-animal', {
                        slidesPerView: 'auto',
                        spaceBetween: 8,
                        freeMode: true,
                    });
                }
            });
        },

        selectItem(item) {
            this.animalInput = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.animalDatabase) {
                allItems.push(...this.animalDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.animalInput = rand.description;
            this.activeImage = rand.image;
        },

        get dynamicImagePrompt() {
            let note = this.imagePromptNote ? `Additional notes/context: ${this.imagePromptNote.trim()}` : '';
            return `Create ONE short visual description of the animal using image reference

If a reference image is provided, use it as the PRIMARY VISUAL REFERENCE. Carefully observe the animal's visible appearance and translate only the important visual traits into a concise description.
Write exactly ONE natural sentence, similar to:
“A chubby brown bear with soft rounded ears, short limbs, and a gentle friendly expression.”
RULES:
- Preserve the animal's clearly visible species characteristics and appearance from the reference.
- Prioritize distinctive visible traits: species, body shape, proportions, fur/skin color, markings, facial features, and build.
- Mention body build only when visually relevant.
- Do not invent physical traits that are not visible or reasonably supported.
- Do not describe the animal's pose, background, camera angle, or art style unless specifically requested.
- Do not copy the reference animal's identity if the task is to create a new character; use the reference only for visual guidance.
- Keep the appearance believable and suitable for a stylized cartoon world.
- Avoid generic descriptions.
- Avoid exaggerated or unusual physical features unless clearly present in the reference.
- Avoid backstory, biography, personality explanation, or unnecessary details.
- Keep the sentence short and directly usable as an image-generation prompt.
- Use simple, natural English.
- Do not use bullet points or multiple sentences.
- OUTPUT EXACTLY ONE SENTENCE.
${note}`;
        },

        get dynamicDescBasePrompt() {
            let target = this.descInput ? this.descInput.trim() : 'BERUANG COKLAT GEMUK';
            return `Create **ONE short visual description** for the animal character based on:

[${target}]

Write it as **one concise sentence**, similar to:

“A chubby brown bear with soft rounded ears, short limbs, and a gentle friendly expression.”

Rules:

* Focus **ONLY on the animal's physical appearance and natural features**
* Clearly identify the animal's species, general look, and physical build
* Describe the animal's fur/skin color, body shape, facial features, and distinctive markings
* Keep anatomy appropriate to a stylized animal cartoon character
* Mention only the most visually important characteristics
* Give the animal a distinctive and memorable appearance
* Keep the appearance visually coherent and believable within a cartoon world
* **DO NOT mention location, environment, background, setting, atmosphere, scene, lighting, weather, time, or events**
* **DO NOT describe actions, poses, movements, backstory, lore, or story**
* Avoid overly detailed descriptions
* Keep it **short and directly usable for image generation**

**Output ONE sentence only.**`;
        },

        get fullPrompt() {
            let desc = this.animalInput ? this.animalInput.trim() : 'A unique animal character.';

            return `Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a completely **NEW ANIMAL CHARACTER** based on this description:

[${desc}]

The new animal must have a unique species, body shape, proportions, silhouette, colors, markings, facial features, and identity. Do not copy, recolor, or slightly modify the original character.

Keep ONLY the visual art style of the reference:
* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* simple expressive facial features
* animation-friendly design

POSE:

Create the animal in a neutral **FRONT 3/4 VIEW**, facing slightly to the right.

Show the animal in a relaxed neutral standing or natural resting position appropriate to its species:
* full body clearly visible
* natural anatomy and proportions
* natural leg and body positioning
* head upright or naturally positioned
* facial features clearly visible
* neutral expression
* no action pose
* no exaggerated body movement

This image will be used as the **MASTER ANIMAL CHARACTER REFERENCE** for generating other poses later.

Therefore, prioritize:
* clear animal identity
* accurate species characteristics
* consistent body proportions
* clear body construction
* recognizable face
* distinctive markings and colors
* clear silhouette
* animation-friendly shapes
* clear eyes appropriate to the species
* natural animal anatomy

Do not add clothing, props, text, extra characters, or complex background unless specifically requested.

The final animal must look like a completely different animal character from the reference, while clearly belonging to the same cartoon animation style.

Full body, centered, clean simple background.`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>