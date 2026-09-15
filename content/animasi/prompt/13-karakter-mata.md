---
title: "Mata Karakter"
slug: "eye-replacement-karakter"
description: "Prompt builder untuk menghasilkan variasi mata baru pada karakter 2D dengan mempertahankan struktur wajah, kepala, dan pose yang konsisten"
icon: "icon-[ri--eye-line]"
categories:
  - "Karakter"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="characterEyeApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--eye-line] text-indigo-600 dark:text-indigo-400"></i> Eye Replacement Builder
</h3>
<div class="flex items-center gap-2">
<!-- Tombol Prompt Mata dari Gambar -->
<button @click="showImageEyeBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--image-line]"></i> Prompt Mata dari Gambar
</button>
<!-- Tombol View Base Prompt Deskripsi Mata -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Prompt Mata
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
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[NEW EYES]</label>
<div class="relative flex items-center">
<input type="text" x-model="eyeStyle" @focus="$el.select()" placeholder="e.g. Cartoon eyes with visible white sclera..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Gaya Mata">
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

<!-- Modal Picker Database Mata Karakter -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Tipe / Varian Mata Karakter</h3>
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
<template x-for="(cat, catName) in eyeDatabase" :key="catName">
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

<!-- Modal Viewer & Editor Base Prompt Mata -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--file-text-line] text-indigo-600 dark:text-indigo-400"></i> Deskripsi Generator Mata
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Input Cepat untuk Ganti Konsep Mata di Base Prompt -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Ubah Konsep Mata (Masukin Disini):</label>
<input type="text" x-model="eyeInputNote" @focus="$el.select()" placeholder="Ex: Cartoon eyes with white sclera..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<!-- Live Preview Base Prompt Mata -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicEyeBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicEyeBasePrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Viewer & Editor Base Prompt Mata dari Gambar -->
<div x-show="showImageEyeBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showImageEyeBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Mata dari Gambar
</h3>
<button @click="showImageEyeBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Live Preview Base Prompt Mata dari Gambar -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="imageEyeBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(imageEyeBasePrompt, 'imageDescCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="imageDescCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function characterEyeApp() {
    return {
        eyeStyle: 'Cartoon eyes with visible white sclera, clear dark pupils, and clean outlines.',
        eyeInputNote: 'CARTOON EYES WITH VISIBLE WHITE SCLERA AND CLEAR PUPILS',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Eyes</text></svg>',
        copied: false,
        descCopied: false,
        imageDescCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showImageEyeBaseModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        eyeDatabase: {
            "Mata Pria": [
                {
                    title: "Pria Tegas (Confident)",
                    description: "Confident male cartoon eyes with visible white sclera, sharp upper eyelids, and focused dark pupils.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="11" font-family="sans-serif">Pria Tegas</text></svg>'
                },
                {
                    title: "Pria Santai (Casual)",
                    description: "Relaxed male cartoon eyes featuring a clear white sclera, gentle oval shape, and calm dark pupils.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="11" font-family="sans-serif">Pria Santai</text></svg>'
                },
                {
                    title: "Pria Serius (Focused)",
                    description: "Focused male cartoon eyes with prominent white sclera, narrow proportions, and determined expression.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23064e3b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236ee7b7" font-size="11" font-family="sans-serif">Pria Serius</text></svg>'
                },
                {
                    title: "Pria Lelah (Tired)",
                    description: "Tired male cartoon eyes with heavy eyelids, visible white sclera, and drooping dark pupils.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23422006"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="11" font-family="sans-serif">Pria Lelah</text></svg>'
                },
                {
                    title: "Pria Penasaran (Curious)",
                    description: "Curious wide male cartoon eyes with clear white sclera, large attentive pupils, and lively look.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e1b4b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a5b4fc" font-size="11" font-family="sans-serif">Pria Penasaran</text></svg>'
                }
            ],
            "Mata Wanita": [
                {
                    title: "Wanita Ekspresif (Expressive)",
                    description: "Expressive female cartoon eyes with clear white sclera, large bright pupils, and subtle light highlights.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="11" font-family="sans-serif">Wanita Ekspresif</text></svg>'
                },
                {
                    title: "Wanita Lembut (Gentle)",
                    description: "Gentle female cartoon eyes featuring visible white sclera, rounded curves, and soft friendly pupils.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23450a0a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fca5a5" font-size="11" font-family="sans-serif">Wanita Lembut</text></svg>'
                },
                {
                    title: "Wanita Ceria (Cheerful)",
                    description: "Cheerful female cartoon eyes with clean white sclera, sparkling pupils, and upbeat lively styling.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%233730a3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c7d2fe" font-size="11" font-family="sans-serif">Wanita Ceria</text></svg>'
                },
                {
                    title: "Wanita Anggun (Elegant)",
                    description: "Elegant female cartoon eyes with refined soft arch curves, clear white sclera, and graceful expression.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23581c87"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23f3e8ff" font-size="11" font-family="sans-serif">Wanita Anggun</text></svg>'
                },
                {
                    title: "Wanita Mengantuk (Sleepy)",
                    description: "Sleepy soft female cartoon eyes with half-closed eyelids, visible white sclera, and drowsy calm vibe.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23831843"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fbcfe8" font-size="11" font-family="sans-serif">Wanita Mengantuk</text></svg>'
                }
            ],
            "Wobbly Style": [
                {
                    title: "Wobbly Goyang (Bouncy)",
                    description: "Wobbly rubberhose style cartoon eyes with hand-drawn shaky outlines, visible white sclera, and bouncy quirky look.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230f172a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2338bdf8" font-size="11" font-family="sans-serif">Wobbly Bouncy</text></svg>'
                },
                {
                    title: "Wobbly Retro (Vintage)",
                    description: "Retro rubberhose wobbly cartoon eyes featuring organic shaky line art, visible white sclera, and classic pie-cut elements.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23422006"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="11" font-family="sans-serif">Wobbly Retro</text></svg>'
                },
                {
                    title: "Wobbly Kooky (Surprised)",
                    description: "Kooky wobbly style cartoon eyes with uneven shaky outlines, wide visible white sclera, and eccentric distorted vibe.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2314532d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bbf7d0" font-size="11" font-family="sans-serif">Wobbly Kooky</text></svg>'
                },
                {
                    title: "Wobbly Loopy (Dizzy)",
                    description: "Loopy wobbly cartoon eyes with sketchy shaky line strokes, clear white sclera, and whimsical abstract expression.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23581c87"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e9d5ff" font-size="11" font-family="sans-serif">Wobbly Loopy</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.eyeDatabase) {
                    allItems.push(...this.eyeDatabase[cat]);
                }
                return allItems;
            }
            return this.eyeDatabase[this.activeCategory] || [];
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
            this.eyeStyle = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.eyeDatabase) {
                allItems.push(...this.eyeDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.eyeStyle = rand.description;
            this.activeImage = rand.image;
        },

        get dynamicEyeBasePrompt() {
            let target = this.eyeInputNote ? this.eyeInputNote.trim() : 'CARTOON EYES WITH VISIBLE WHITE SCLERA AND CLEAR PUPILS';
            return `Create **ONE short visual description** for the character's new eyes based on:

[${target}]

Write it as **one concise sentence**, describing the eye shape, visible white sclera, pupil style, and expression details clearly.

Rules:
* Focus **ONLY on the eye features, shape, and style**
* **Ensure the eyes feature a clear visible white sclera**
* **DO NOT modify character identity, head shape, or mouth features**
* **DO NOT mention location, environment, background, setting, or lighting**
* Keep it **short and directly usable for image generation**

**Output ONE sentence only.**`;
        },

        get imageEyeBasePrompt() {
            return `Create ONE short visual description of the character's new eyes using image reference

If a reference image is provided, use it as the PRIMARY EYE STYLE REFERENCE. Carefully observe the character's visible eye shape, white sclera, pupil design, iris color, and expression style to translate only the important eye traits into a concise description.
Write exactly ONE natural sentence, similar to:
“Cartoon eyes with visible white sclera, clear dark pupils, and clean outlines.”
RULES:
- Preserve the character's clearly visible eye design, shape, and style traits from the reference, ensuring the white sclera is explicitly defined.
- Prioritize distinctive visible eye traits: shape, white sclera, and pupil layout.
- Do not invent eye features or styles that are not visible or reasonably supported.
- Do not describe the character's exact identity, specific facial features, outfit, background, camera angle, or art style unless specifically requested.
- Do not copy the reference character's exact identity if the task is to create new eyes; use the reference only for eye style guidance.
- Keep the appearance believable and suitable for a stylized cartoon world.
- Avoid generic descriptions.
- Avoid exaggerated or unusual structural features unless clearly present in the reference.
- Avoid backstory, biography, personality explanation, or unnecessary details.
- Keep the sentence short and directly usable as an image-generation prompt.
- Use simple, natural English.
- Do not use bullet points or multiple sentences.
- OUTPUT EXACTLY ONE SENTENCE.`;
        },

        get fullPrompt() {
            let styleDesc = this.eyeStyle ? this.eyeStyle.trim() : 'Cartoon eyes with visible white sclera, clear dark pupils, and clean outlines.';

            return `EYE REPLACEMENT

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT CHARACTER** with new eyes.

**NEW EYES:**
[${styleDesc}]

**CHARACTER LOCK — DO NOT CHANGE:**

* exact same face
* exact same face shape
* exact same hairstyle
* exact same hair shape
* exact same hair color
* exact same skin tone
* exact same eyebrows
* exact same mouth
* exact same body shape
* exact same body proportions
* exact same age and identity
* exact same pose
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

ONLY CHANGE THE EYES.

The new eyes must naturally fit the existing face and maintain the original eye position, spacing, scale, and facial proportions unless specifically changed in [NEW EYES].

Keep the same visual style:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

Do not change the face shape.
Do not change the hairstyle.
Do not change the eyebrows.
Do not change the mouth.
Do not change the skin tone.
Do not change the body.
Do not change the pose.
Do not change the camera angle.

The ONLY intended change is the eyes.`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>