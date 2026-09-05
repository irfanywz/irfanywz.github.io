---
title: "Karakter Supranatural"
slug: "karakter-supranatural"
description: "Prompt builder untuk merancang karakter supranatural original baru dengan pratinjau gambar SVG, basis data referensi Swiper.js filter, dan template master prompt"
icon: "icon-[ri--ghost-line]"
categories:
  - "Karakter"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="supernaturalApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--ghost-line] text-indigo-600 dark:text-indigo-400"></i> Supernatural Character Prompt Builder
</h3>
<div class="flex items-center gap-2">
<!-- Tombol View Prompt Gambar Referensi Supranatural -->
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
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[NEW SUPERNATURAL CHARACTER DESCRIPTION]</label>
<div class="relative flex items-center">
<input type="text" x-model="supernaturalInput" @focus="$el.select()" placeholder="e.g. A floating eerie spirit with a glowing wispy tail..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
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

<!-- Modal Picker Database Karakter Supranatural (Compact Medium Size with Swiper) -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Contoh Karakter Supranatural</h3>
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
<template x-for="(cat, catName) in supernaturalDatabase" :key="catName">
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

<!-- Modal Viewer & Editor Prompt Gambar Referensi Supranatural -->
<div x-show="showImagePromptModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showImagePromptModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Ekstraksi Gambar Referensi Supranatural
</h3>
<button @click="showImagePromptModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Catatan/Detail Tambahan Opsional:</label>
<input type="text" x-model="imagePromptNote" @focus="$el.select()" placeholder="Ex: Berikan penekanan pada wujud entitas atau atribut khusus..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
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
<input type="text" x-model="descInput" @focus="$el.select()" placeholder="Ex: Pocong Buncit, Genderwo Saraf, dll..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<!-- Live Preview Base Prompt -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicDescBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicDescBasePrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function supernaturalApp() {
    return {
        supernaturalInput: 'A floating eerie spirit with a glowing wispy body, pale cyan skin, hollow dark eye sockets, and tattered ghostly edges.',
        descInput: 'POCONG BUNCIT',
        imagePromptNote: '',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Spirit</text></svg>',
        copied: false,
        descCopied: false,
        imagePromptCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showImagePromptModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        supernaturalDatabase: {
            "Spirits & Entities": [
                {
                    title: "Floating Spirit",
                    description: "A floating eerie spirit with a glowing wispy body, pale cyan skin, hollow dark eye sockets, and tattered ghostly edges.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Spirit</text></svg>'
                },
                {
                    title: "Shadow Imp",
                    description: "A small mischievous imp with dark purple skin, pointed ears, curved tiny horns, and wide glowing yellow eyes.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Imp</text></svg>'
                }
            ],
            "Folklore & Creatures": [
                {
                    title: "Hollow Spectre",
                    description: "A tall slender apparition with draped grey cloth-like form, floating posture, blank expression, and subtle ethereal glow.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="12" font-family="sans-serif">Spectre</text></svg>'
                }
            ],
            "Mythical Beasts": [
                {
                    title: "Demon Brute",
                    description: "A stocky demon with obsidian skin, glowing amber eyes, protruding tusks, and a heavy muscular build.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23450a0a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fca5a5" font-size="12" font-family="sans-serif">Demon</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.supernaturalDatabase) {
                    allItems.push(...this.supernaturalDatabase[cat]);
                }
                return allItems;
            }
            return this.supernaturalDatabase[this.activeCategory] || [];
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
            this.supernaturalInput = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.supernaturalDatabase) {
                allItems.push(...this.supernaturalDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.supernaturalInput = rand.description;
            this.activeImage = rand.image;
        },

        get dynamicImagePrompt() {
            let note = this.imagePromptNote ? `Additional notes/context: ${this.imagePromptNote.trim()}` : '';
            return `Create ONE short visual description of the supernatural character using image reference

If a reference image is provided, use it as the PRIMARY VISUAL REFERENCE. Carefully observe the character's visible appearance and translate only the important visual traits into a concise description.
Write exactly ONE natural sentence, similar to:
“A sinister female ghost with a slender body, pale reddish skin, long messy black hair, sharp dark eyes, and a disturbing expression.”
RULES:
- Preserve the character's clearly visible supernatural species and appearance from the reference.
- Prioritize distinctive visible traits: supernatural type, body shape, proportions, skin/surface color, hair, facial features, and unique markings.
- Mention body build only when visually relevant.
- Do not invent physical traits that are not visible or reasonably supported.
- Do not describe the character's pose, background, camera angle, or art style unless specifically requested.
- Do not copy the reference character's identity if the task is to create a new character; use the reference only for visual guidance.
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
            let target = this.descInput ? this.descInput.trim() : 'SETAN PERUT BUNCIT';
            return `Create **ONE short visual description** for the supernatural character based on:

[${target}]

Write it as **one concise sentence**, similar to:

“A sinister female ghost with a slender body, pale reddish skin, long messy black hair, sharp dark eyes, and a disturbing expression.”

Rules:

* Focus **ONLY on the character's physical appearance**
* Clearly identify the supernatural being
* Describe the character's body, face, skin or surface, hair, eyes, and other distinctive physical features when relevant
* Let the supernatural type strongly influence the character's visual design
* Let age and gender influence the appearance when visually appropriate
* Personality may influence the facial expression or visual impression, but do not explain the personality
* Make the character clearly supernatural through its actual physical design
* Keep anatomy appropriate to the supernatural being
* Mention clothing only when it is an important part of the character's visual identity
* Mention only the most visually important characteristics
* Give the character a distinctive and memorable appearance
* Keep the appearance visually coherent and believable within a supernatural cartoon world
* **DO NOT mention location, environment, background, setting, atmosphere, scene, lighting, weather, time, or events**
* **DO NOT describe actions, poses, movements, powers, abilities, backstory, lore, or story**
* **DO NOT add environmental elements such as houses, forests, graves, roads, trees, fire, fog, or darkness**
* Avoid overly detailed descriptions
* Keep it **short and directly usable for image generation**

**Output ONE sentence only.**`;
        },

        get fullPrompt() {
            let desc = this.supernaturalInput ? this.supernaturalInput.trim() : 'A unique supernatural character.';

            return `Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a completely **NEW SUPERNATURAL CHARACTER** based on this description:

[${desc}]

The new character must have a unique supernatural appearance, body shape, silhouette, facial features, colors, distinctive traits, and identity. Do not copy, recolor, or slightly modify the original character.

Keep the **SAME VISUAL ART STYLE, DRAWING LANGUAGE, AND DESIGN APPROACH** of the reference:
- simple 2D cartoon
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal details
- slightly handmade line quality
- simple expressive facial features
- animation-friendly design
- same level of stylization and visual simplicity as the reference

Do not redesign or reinterpret the art style. **Match the reference's overall visual appearance as closely as possible while creating a completely different character.**

POSE:
Create the character in a neutral **FRONT 3/4 VIEW**, facing slightly to the right.

Show the character in a simple neutral pose appropriate to its form:
- complete character clearly visible
- relaxed neutral position
- clear readable silhouette
- natural-looking proportions for the creature
- neutral facial expression
- no action pose
- no exaggerated movement

This image will be used as the **MASTER CHARACTER REFERENCE** for generating other poses later.

Therefore, prioritize:
- strong character identity
- clear silhouette
- consistent proportions
- recognizable supernatural features
- clear facial design
- distinctive colors
- simple readable shapes
- animation-friendly construction
- visual consistency with the reference style

The supernatural nature must come from the **character's actual design**, not from adding random horror effects, excessive details, or complicated visual elements.

Do not add props, text, extra characters, dynamic movement, or complex background.

The final character must look like a **completely original supernatural being**, while feeling as if it was designed and illustrated by the **same artist using the same visual style and design language as the reference**.

Centered composition, clean simple background.`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>