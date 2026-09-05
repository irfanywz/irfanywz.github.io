---
title: "Karakter Manusia"
slug: "karakter-manusia"
description: "Prompt builder untuk merancang karakter manusia original baru dengan pratinjau gambar SVG, basis data referensi Swiper.js filter, dan template master prompt"
icon: "icon-[ri--user-line]"
categories:
  - "Karakter"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="humanApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--user-line] text-indigo-600 dark:text-indigo-400"></i> Human Character Prompt Builder
</h3>
<div class="flex items-center gap-2">
<!-- Tombol View Prompt Gambar Referensi -->
<button @click="showImagePromptModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--image-line]"></i> Prompt Gambar
</button>
<!-- Tombol View Base Prompt Deskripsi -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Prompt Deskripsi
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
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[NEW HUMAN CHARACTER DESCRIPTION]</label>
<div class="relative flex items-center">
<input type="text" x-model="humanInput" @focus="$el.select()" placeholder="e.g. A young cheerful guy with short messy dark hair, wearing a casual orange hoodie and blue jeans..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Contoh Karakter">
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

<!-- Modal Picker Database Karakter Manusia (Compact Medium Size with Swiper) -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Contoh Karakter Manusia</h3>
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
<template x-for="(cat, catName) in humanDatabase" :key="catName">
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

<!-- Modal Viewer & Editor Prompt Gambar Referensi -->
<div x-show="showImagePromptModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showImagePromptModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Ekstraksi Gambar Referensi
</h3>
<button @click="showImagePromptModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Catatan/Detail Tambahan Opsional:</label>
<input type="text" x-model="imagePromptNote" @focus="$el.select()" placeholder="Ex: Berikan penekanan pada pakaian atau profesi tertentu..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<!-- Live Preview Image Prompt -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicImagePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicImagePrompt, 'imagePromptCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="imagePromptCopied ? 'Prompt Gambar Disalin!' : 'Salin Prompt Gambar'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Viewer & Editor Base Prompt Deskripsi -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--file-text-line] text-indigo-600 dark:text-indigo-400"></i> Deskripsi Prompt Generator
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Input Cepat untuk Ganti Konsep Karakter di Base Prompt -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Ubah Deskripsi (Masukin Disini):</label>
<input type="text" x-model="descInput" @focus="$el.select()" placeholder="Ex: COWOK GAUL HOODIE ORANGE, Cewek Jaket Denim, dll..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<!-- Live Preview Base Prompt -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicDescBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicDescBasePrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Base Prompt'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function humanApp() {
    return {
        humanInput: 'A young cheerful guy with short messy dark hair, wearing a casual orange hoodie and blue jeans.',
        descInput: 'COWOK GAUL HOODIE ORANGE',
        imagePromptNote: '',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Human</text></svg>',
        copied: false,
        descCopied: false,
        imagePromptCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showImagePromptModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        humanDatabase: {
            "Casual": [
                {
                    title: "Casual Guy",
                    description: "A young cheerful guy with short messy dark hair, wearing a casual orange hoodie and blue jeans.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Casual</text></svg>'
                },
                {
                    title: "Urban Girl",
                    description: "A stylish young woman with long wavy brown hair, wearing a denim jacket, white t-shirt, and dark skirt.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Urban</text></svg>'
                }
            ],
            "Professional": [
                {
                    title: "Office Worker",
                    description: "A neat professional man with slicked-back black hair, wearing a clean white shirt, thin tie, and formal trousers.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="12" font-family="sans-serif">Office</text></svg>'
                }
            ],
            "Adventurer": [
                {
                    title: "Explorer",
                    description: "An adventurous traveler with a ponytail, utility vest, cargo pants, and sturdy boots.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23450a0a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fca5a5" font-size="12" font-family="sans-serif">Explorer</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.humanDatabase) {
                    allItems.push(...this.humanDatabase[cat]);
                }
                return allItems;
            }
            return this.humanDatabase[this.activeCategory] || [];
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
            this.humanInput = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.humanDatabase) {
                allItems.push(...this.humanDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.humanInput = rand.description;
            this.activeImage = rand.image;
        },

        get dynamicImagePrompt() {
            let note = this.imagePromptNote ? `Additional notes/context: ${this.imagePromptNote.trim()}` : '';
            return `Create ONE short visual description of the character using image reference

If a reference image is provided, use it as the PRIMARY VISUAL REFERENCE. Carefully observe the character's visible appearance and translate only the important visual traits into a concise description.
Write exactly ONE natural sentence, similar to:
“A 27-year-old Indonesian man with a sturdy stocky build, square face, short buzz-cut black hair, and a calm expression, wearing a dark gray polo shirt, cargo pants, and sandals.”
RULES:
- Preserve the character's clearly visible Indonesian/local appearance from the reference.
- Describe natural Indonesian/Southeast Asian facial features and appearance when visually supported.
- Prioritize distinctive visible traits: age, gender, skin tone, face shape, hairstyle, hair color, body build, and clothing.
- Mention body build only when visually relevant.
- Describe clothing based on what is actually visible or appropriate for the given occupation.
- If AGE, GENDER, OCCUPATION, or other details are provided, use them to refine the description.
- Do not invent physical traits that are not visible or reasonably supported.
- Do not describe the character's pose, background, camera angle, or art style unless specifically requested.
- Do not copy the reference character's identity if the task is to create a new character; use the reference only for visual guidance.
- Make the character clearly feel Indonesian/local, not generically Western.
- Keep the appearance believable and suitable for everyday Indonesian life.
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
            let target = this.descInput ? this.descInput.trim() : 'COWOK GAUL HOODIE ORANGE';
            return `Create **ONE short visual description** for the human character based on:

[${target}]

Write it as **one concise sentence**, similar to:

“A young cheerful guy with short messy dark hair, wearing a casual orange hoodie and blue jeans.”

Rules:

* Focus **ONLY on the character's physical appearance and clothing**
* Clearly identify the character's general look and attire
* Describe the character's face, hairstyle, body shape, outfit, and distinctive physical features
* Keep anatomy appropriate to a stylized human cartoon character
* Mention only the most visually important characteristics
* Give the character a distinctive and memorable appearance
* Keep the appearance visually coherent and believable within a cartoon world
* **DO NOT mention location, environment, background, setting, atmosphere, scene, lighting, weather, time, or events**
* **DO NOT describe actions, poses, movements, backstory, lore, or story**
* Avoid overly detailed descriptions
* Keep it **short and directly usable for image generation**

**Output ONE sentence only.**`;
        },

        get fullPrompt() {
            let desc = this.humanInput ? this.humanInput.trim() : 'A unique human character.';

            return `Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a completely **NEW HUMAN CHARACTER** based on this description:

[${desc}]

The new character must have a unique face, hairstyle, body shape, silhouette, outfit, colors, and identity. Do not copy, recolor, or slightly modify the original character.

Keep **ONLY the visual art style of the reference**:
- simple 2D cartoon
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal details
- slightly handmade line quality
- simple expressive facial features
- animation-friendly design

POSE:
Create the character in a neutral **FRONT 3/4 VIEW**, facing slightly to the right.

Show the character standing upright in a relaxed neutral pose:
- full body visible from head to feet
- arms hanging naturally at the sides
- hands clearly visible
- legs in a natural standing position
- head upright
- neutral facial expression
- no action pose
- no exaggerated body movement

This image will be used as the **MASTER CHARACTER REFERENCE** for generating other poses later.

Therefore, prioritize:
- clear character identity
- consistent proportions
- clear body construction
- recognizable face
- recognizable hairstyle
- clean outfit design
- clear silhouette
- animation-friendly shapes
- the eyes are rendered with a clear white sclera

Do not add props, text, extra characters, dynamic movement, or complex background.

The final character must look like a completely different person from the reference, while clearly belonging to the same cartoon animation style.

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