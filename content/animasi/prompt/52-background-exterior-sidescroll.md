---
title: "Background Exterior Sidescroll"
slug: "background-exterior-sidescroll"
description: "Generator prompt background sidescroller 4-layer bertema lingkungan Indonesia dengan referensi gaya visual konsisten"
icon: "icon-[ri--stack-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="characterBackgroundApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--landscape-line] text-indigo-600 dark:text-indigo-400"></i> Animation Background Builder
</h3>
<div class="flex items-center gap-2">
<!-- Tombol Prompt Background dari Gambar -->
<button @click="showImageBackgroundBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--image-line]"></i> Prompt Background dari Gambar
</button>
<!-- Tombol View Base Prompt Deskripsi Background -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Prompt Background
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
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[BACKGROUND ENVIRONMENT DESCRIPTION]</label>
<div class="relative flex items-center">
<input type="text" x-model="backgroundStyle" @focus="$el.select()" placeholder="e.g. Traditional Indonesian village alley with bamboo fences and tropical trees..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Gaya Background">
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

<!-- Modal Picker Database Background Animasi -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Tipe / Varian Lingkungan Background</h3>
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
<template x-for="(cat, catName) in backgroundDatabase" :key="catName">
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

<!-- Modal Viewer & Editor Base Prompt Background -->
<div x-show="showDescBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showDescBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--file-text-line] text-indigo-600 dark:text-indigo-400"></i> Deskripsi Generator Background
</h3>
<button @click="showDescBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Input Cepat untuk Ganti Konsep di Base Prompt -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">Ubah Konsep Lingkungan (Masukin Disini):</label>
<input type="text" x-model="backgroundInputNote" @focus="$el.select()" placeholder="Ex: Traditional Indonesian village alley with bamboo fences..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<!-- Live Preview Base Prompt Background -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="dynamicBackgroundBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(dynamicBackgroundBasePrompt, 'descCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="descCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

<!-- Modal Viewer & Editor Base Prompt Background dari Gambar -->
<div x-show="showImageBackgroundBaseModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showImageBackgroundBaseModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-line] text-indigo-600 dark:text-indigo-400"></i> Prompt Background dari Gambar
</h3>
<button @click="showImageBackgroundBaseModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Modal Body -->
<div class="p-5 overflow-y-auto space-y-4">
<!-- Live Preview Base Prompt Background dari Gambar -->
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="imageBackgroundBasePrompt"></pre>
</div>
<!-- Modal Footer with Copy Button -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end">
<button @click="copyText(imageBackgroundBasePrompt, 'imageDescCopied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="imageDescCopied ? 'Base Prompt Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
</div>
</div>

</div>

<script>
function characterBackgroundApp() {
    return {
        backgroundStyle: 'Traditional Indonesian village alley with bamboo fences, tropical banana trees, and classic rural houses.',
        backgroundInputNote: 'TRADITIONAL INDONESIAN VILLAGE ALLEY WITH BAMBOO FENCES AND TROPICAL TREES',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23064e3b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="12" font-family="sans-serif">Background</text></svg>',
        copied: false,
        descCopied: false,
        imageDescCopied: false,
        showModal: false,
        showDescBaseModal: false,
        showImageBackgroundBaseModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        backgroundDatabase: {
            "Desa & Pedesaan": [
                {
                    title: "Desa Tradisional Indonesia",
                    description: "Traditional Indonesian village alley with bamboo fences, tropical banana trees, and classic rural houses.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23064e3b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="12" font-family="sans-serif">Desa</text></svg>'
                },
                {
                    title: "Pematang Sawah Tropis",
                    description: "Indonesian terraced rice fields (sawah) with coconut trees, small hut (pondok), and distant mountain silhouettes.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2314532d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bbf7d0" font-size="12" font-family="sans-serif">Sawah</text></svg>'
                }
            ],
            "Perkotaan & Kampung": [
                {
                    title: "Gang Kampung Padat",
                    description: "Narrow urban Indonesian alley (gang sempit) with brick walls, potted plants, hanging laundry wires, and tiled roofs.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2378350f"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="12" font-family="sans-serif">Gang</text></svg>'
                },
                {
                    title: "Pinggir Jalan Raya Kota",
                    description: "Indonesian suburban roadside with sidewalk, telephone poles with tangled cables, concrete fences, and shophouses (ruko).",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e293b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23cbd5e1" font-size="12" font-family="sans-serif">Jalan</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.backgroundDatabase) {
                    allItems.push(...this.backgroundDatabase[cat]);
                }
                return allItems;
            }
            return this.backgroundDatabase[this.activeCategory] || [];
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
            this.backgroundStyle = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.backgroundDatabase) {
                allItems.push(...this.backgroundDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.backgroundStyle = rand.description;
            this.activeImage = rand.image;
        },

        get dynamicBackgroundBasePrompt() {
            let target = this.backgroundInputNote ? this.backgroundInputNote.trim() : 'TRADITIONAL INDONESIAN VILLAGE ALLEY WITH BAMBOO FENCES AND TROPICAL TREES';
            return `Create **ONE short visual description** for the Indonesian animation background based on:

[${target}]

Write it as **one concise sentence**, describing the environment theme, key elements, and atmosphere clearly.

Rules:
* Focus **ONLY on the environmental setting and specific Indonesian local elements**
* Clearly describe the foreground and background components
* **DO NOT mention characters, people, animals, text, or logos**
* Keep it **short and directly usable for image generation**

**Output ONE sentence only.**`;
        },

        get imageBackgroundBasePrompt() {
            return `Create ONE short visual description of the Indonesian animation background using image reference

If a reference image is provided, use it as the PRIMARY BACKGROUND STYLE REFERENCE. Carefully observe the environment's art style, linework, color palette, lighting, and composition to translate only the important background traits into a concise description.
Write exactly ONE natural sentence, similar to:
“Traditional Indonesian village alley with bamboo fences, tropical banana trees, and classic rural houses.”
RULES:
- Preserve the environmental theme, architectural style, and regional characteristics visible in the reference.
- Prioritize distinctive visual traits: structure layout, vegetation types, and surface textures.
- Do not invent background features or elements that are not visible or reasonably supported.
- Do not describe specific characters, people, animals, text, or logos.
- Do not copy the reference exact composition if the task is to create a new scene; use the reference only for style guidance.
- Keep the appearance believable and suitable for an Indonesian animated world.
- Avoid generic descriptions.
- Avoid unnecessary details or backstory.
- Keep the sentence short and directly usable as an image-generation prompt.
- Use simple, natural English.
- Do not use bullet points or multiple sentences.
- OUTPUT EXACTLY ONE SENTENCE.`;
        },

        get fullPrompt() {
            let styleDesc = this.backgroundStyle ? this.backgroundStyle.trim() : 'Traditional Indonesian village alley with bamboo fences, tropical banana trees, and classic rural houses.';

            return `Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a new horizontal Indonesian animation background based on:

[${styleDesc}]

Use the reference ONLY for its overall visual language, rendering quality, line quality, shading approach, texture treatment, and artistic feel.

**DO NOT copy or reproduce the reference image.**

Do NOT copy its composition, layout, architecture, perspective, proportions, objects, furniture, shapes, colors arrangement, or specific visual elements.

Create a completely new environment with its own layout, architecture, objects, shapes, and composition while maintaining a consistent visual style with the reference.

### VISUAL STYLE

Create a **semi-realistic 2D illustrated animation background**, not a flat cartoon.

The environment should have:

* detailed but controlled hand-drawn linework
* natural material textures
* believable surface variation
* subtle shading and lighting
* dimensional buildings and objects
* realistic-looking wood, bamboo, concrete, tile, soil, metal, glass, and vegetation
* natural imperfections and wear
* convincing depth and spatial separation
* subtle ambient shadows
* realistic proportions
* clean but visually rich rendering

Avoid an overly simplified cartoon appearance.

Do NOT use extremely flat colors, overly rounded shapes, childish proportions, exaggerated outlines, toy-like objects, excessive cel shading, or overly clean vector-like surfaces.

The result should feel like a **semi-realistic illustrated environment designed for 2D animation**.

### ENVIRONMENT STRUCTURE

Build the environment with clear visual depth:

**Foreground:**
Ground, road, floor, or nearby environmental surfaces.

**Middle ground:**
Fences, vegetation, walls, furniture, vehicles, small structures, and other environmental elements.

**Background:**
Main houses, buildings, roads, structures, and dominant scenery.

**Upper environment:**
Sky, distant trees, rooftops, clouds, poles, wires, and other elements extending into the upper frame.

All environmental layers must naturally belong to the same location and connect with believable depth.

### COMPOSITION

Wide horizontal 16:9 composition.

Front-facing eye-level camera unless another viewpoint is specifically requested.

Maintain a large readable area where characters can be placed and animated.

Keep the environment visually balanced without making the scene excessively empty or excessively detailed.

Create clear separation between foreground, middle ground, and background.

### MATERIAL AND ENVIRONMENT DETAIL

Use realistic visual cues appropriate to the described environment.

Show subtle differences between materials through texture, shading, surface variation, and wear.

Examples:

* bamboo should have visible natural texture and irregularity
* wood should show subtle grain and weathering
* concrete should have slight surface variation
* tiled roofs should have individual tile definition
* soil and roads should have natural texture
* vegetation should have recognizable leaf and plant structure
* metal should have appropriate subtle reflections and surface wear

Keep these details controlled and animation-friendly.

### TEXT AND SIGNAGE

If the described environment contains signs, shop names, banners, labels, advertisements, house numbers, or other visible writing, render the text **clearly and legibly**.

Use simple readable lettering with correct letter shapes and spacing.

Do NOT generate random scribbles, blurred pseudo-text, distorted characters, or unreadable writing.

Text should remain secondary to the environment and naturally fit the scene.

If no text is described or naturally required, do not add unnecessary text.

### INDONESIAN ENVIRONMENT

When appropriate, use believable Indonesian architectural and environmental characteristics.

Use natural local details rather than exaggerated stereotypical decorations.

The environment should feel like a believable everyday Indonesian location.

### EXCLUSIONS

No characters.
No people.
No animals.
No vehicle.

Do not add unrelated objects.

Do not overdecorate the environment.

Do not turn the scene into anime, children's cartoon, 3D render, photorealistic photography, or a completely flat vector illustration.

The final result should look like a **semi-realistic hand-drawn 2D animation background with believable materials, depth, lighting, and environmental detail**.

Output ONLY the background.
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