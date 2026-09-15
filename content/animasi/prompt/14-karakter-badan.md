---
title: "Bentuk Badan Karakter"
slug: "bentuk-badan-karakter"
description: "Prompt builder untuk mengubah bentuk badan dan proporsi fisik karakter (Pria & Wanita) sambil mempertahankan elemen wajah, gaya rambut, dan pakaian yang konsisten"
icon: "icon-[ri--body-scan-line]"
categories:
  - "Karakter"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="characterBodyShapeApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--body-scan-line] text-indigo-600 dark:text-indigo-400"></i> Body Shape Prompt Builder
</h3>
<div class="flex items-center gap-2">
<!-- Tombol Prompt Badan dari Gambar -->
<button @click="showImageBodyBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--image-line]"></i> Prompt Badan dari Gambar
</button>
<!-- Tombol View Base Prompt Deskripsi Badan -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Prompt Badan
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
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[NEW BODY SHAPE]</label>
<div class="relative flex items-center">
<input type="text" x-model="bodyShape" @focus="$el.select()" placeholder="e.g. Voluptuous figure with exceptionally large bust and wide hips..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Bentuk Badan">
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

<!-- Modal Picker Database Bentuk Badan Karakter (Pria & Wanita) -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Bentuk Badan Karakter</h3>
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
<template x-for="(cat, catName) in bodyDatabase" :key="catName">
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

<!-- Modal Viewer & Editor Base Prompt Deskripsi Badan -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--file-text-line] text-indigo-600 dark:text-indigo-400"></i> Deskripsi Generator Bentuk Badan
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Ubah Konsep Bentuk Badan (Masukin Disini):</label>
<input type="text" x-model="bodyInputNote" @focus="$el.select()" placeholder="Ex: Bokong besar, dada besar, perut buncit..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicBodyBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicBodyBasePrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Viewer & Editor Base Prompt Badan dari Gambar -->
<div x-show="showImageBodyBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showImageBodyBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Badan dari Gambar
</h3>
<button @click="showImageBodyBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="imageBodyShapeBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(imageBodyShapeBasePrompt, 'imageDescCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="imageDescCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function characterBodyShapeApp() {
    return {
        bodyShape: 'Voluptuous curvy figure with exceptionally large bust, wide prominent hips, thick thighs, and a soft rounded belly.',
        bodyInputNote: 'DADA BESAR, BOKONG BESAR & PERUT BUNCIT',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Body</text></svg>',
        copied: false,
        descCopied: false,
        imageDescCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showImageBodyBaseModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        bodyDatabase: {
            "Wanita (Female)": [
                {
                    title: "Hourglass Curvy",
                    description: "Curvy hourglass figure with wide hips, pronounced curves, and large bust.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23831843"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fbcfe8" font-size="12" font-family="sans-serif">Hourglass</text></svg>'
                },
                {
                    title: "Voluptuous & Big Belly",
                    description: "Voluptuous curvy figure with exceptionally large bust, wide prominent hips, thick thighs, and a soft rounded belly.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%239f1239"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffe4e6" font-size="10" font-family="sans-serif">Big Belly</text></svg>'
                },
                {
                    title: "Pear Shaped",
                    description: "Pear-shaped body type with wider hips, fuller thighs, and a narrower upper torso.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23581c87"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e9d5ff" font-size="12" font-family="sans-serif">Pear</text></svg>'
                },
                {
                    title: "Plump Chubby",
                    description: "Soft plump body shape with a round soft belly, fuller hips, and soft limbs.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23701a75"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23f5d0fe" font-size="12" font-family="sans-serif">Plump</text></svg>'
                },
                {
                    title: "Thick BBW / Full Figured",
                    description: "Full-figured thick body build with heavy curves, large breasts, wide hips, broad waist, and fleshy thighs.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234c0519"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fecdd3" font-size="10" font-family="sans-serif">Full Figured</text></svg>'
                },
                {
                    title: "Petite Slim",
                    description: "Slender petite body frame with a thin waist, narrow shoulders, and light build.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234a044e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fae8ff" font-size="12" font-family="sans-serif">Petite</text></svg>'
                }
            ],
            "Pria (Male)": [
                {
                    title: "Muscular Broad",
                    description: "Muscular athletic body build with broad shoulders, wide chest, and defined arms.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="12" font-family="sans-serif">Muscular</text></svg>'
                },
                {
                    title: "Dad Bod / Potbelly",
                    description: "Stocky dad bod frame with a prominent soft round potbelly, thick torso, and solid build.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="10" font-family="sans-serif">Potbelly</text></svg>'
                },
                {
                    title: "Big Belly / Chubs",
                    description: "Heavy set heavy frame with a large protruding round belly, wide waist, and thick fleshy build.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23022c22"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236ee7b7" font-size="10" font-family="sans-serif">Big Belly</text></svg>'
                },
                {
                    title: "Tall Lean",
                    description: "Tall lean body silhouette with a thin frame, long limbs, and narrow shoulders.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23134e4a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2399f6e4" font-size="12" font-family="sans-serif">Lean</text></svg>'
                },
                {
                    title: "Heavy Set",
                    description: "Heavy-set robust physical build with a wide torso, thick limbs, and heavy presence.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="12" font-family="sans-serif">Heavy</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.bodyDatabase) {
                    allItems.push(...this.bodyDatabase[cat]);
                }
                return allItems;
            }
            return this.bodyDatabase[this.activeCategory] || [];
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
            this.bodyShape = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.bodyDatabase) {
                allItems.push(...this.bodyDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.bodyShape = rand.description;
            this.activeImage = rand.image;
        },

        get dynamicBodyBasePrompt() {
            let target = this.bodyInputNote ? this.bodyInputNote.trim() : 'DADA BESAR, BOKONG BESAR & PERUT BUNCIT';
            return `Create **ONE short visual description** for the character's body shape based on:

[${target}]

Write it as **one concise sentence**, describing torso proportions, hip width, bust/chest volume, limb thickness, and overall physical silhouette clearly.

Rules:
* Focus **ONLY on the body silhouette, proportions, and physical build**
* Clearly describe shoulders, waist, hips, chest/bust volume, and limb structure
* **DO NOT modify the head or facial features (face, eyes, eyebrows, nose, mouth, hair)**
* **DO NOT mention location, environment, background, setting, or lighting**
* Keep it **short and directly usable for image generation**

**Output ONE sentence only.**`;
        },

        get imageBodyShapeBasePrompt() {
            return `Create ONE short visual description of the character's body shape using image reference

If a reference image is provided, use it as the PRIMARY BODY SHAPE REFERENCE. Carefully observe the character's visible physical build, torso proportions, shoulder breadth, hip width, and limb thickness to translate only the important anatomical proportion traits into a concise description.
Write exactly ONE natural sentence, similar to:
“Voluptuous curvy figure with exceptionally large bust, wide prominent hips, thick thighs, and a soft rounded belly.”
RULES:
- Preserve the character's clearly visible body silhouette, torso shape, muscle definition or soft curves, and proportion traits from the reference.
- Prioritize distinctive visible body shape traits: shoulder width, waist definition, hip shape, and limb volume.
- Do not invent physical features or proportions that are not visible or reasonably supported.
- Do not describe the character's identity, head, facial features, skin tone, clothing design details, background, camera angle, or art style unless specifically requested.
- Do not copy the reference character's exact identity if the task is to create a new body shape; use the reference only for body shape visual guidance.
- Keep the appearance believable and suitable for a stylized cartoon world.
- Avoid generic descriptions.
- Avoid exaggerated or unusual physical features unless clearly present in the reference.
- Avoid backstory, biography, personality explanation, or unnecessary details.
- Keep the sentence short and directly usable as an image-generation prompt.
- Use simple, natural English.
- Do not use bullet points or multiple sentences.
- OUTPUT EXACTLY ONE SENTENCE.`;
        },

        get fullPrompt() {
            let shapeDesc = this.bodyShape ? this.bodyShape.trim() : 'A standard body shape.';

            return `BODY SHAPE REPLACEMENT

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new body shape and physical proportions.

**NEW BODY SHAPE:**
[${shapeDesc}]

**CHARACTER LOCK — DO NOT CHANGE:**

* exact same face shape
* exact same facial features (eyes, eyebrows, nose, mouth)
* exact same hairstyle
* exact same hair shape
* exact same hair color
* exact same skin tone
* exact same outfit style and clothing colors
* exact same age and identity
* exact same pose
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

**ONLY CHANGE THE BODY SHAPE AND PROPORTIONS.**

Preserve the exact design, colors, and appearance of the head, face, hair, and clothing while adapting the outfit naturally to fit the new body contours.

Do not redesign the face.
Do not change the hairstyle.
Do not change the skin tone.
Do not change the clothing colors or design.
Do not change the pose.
Do not change the camera angle.

**The ONLY intended change is the body shape and silhouette.**`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>