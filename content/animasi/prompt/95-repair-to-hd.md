---
title: "Enhance & Fix Gambar HD"
slug: "enhance-fix-gambar-hd"
description: "Prompt builder untuk meningkatkan kualitas gambar menjadi HD, tajam, dan bebas artifak tanpa mengubah gaya atau konten asli"
icon: "icon-[ri--image-edit-line]"
categories:
  - "Script"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="fixImageApp()" x-init="initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--image-edit-line] text-indigo-600 dark:text-indigo-400"></i> HD Image Enhancer Prompt Builder
</h3>
<div class="flex items-center gap-2">
<!-- Tombol View Base Prompt Fix Image -->
<button @click="showDescBaseModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--file-text-line]"></i> Base Prompt
</button>
<button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer">
🎲 Random
</button>
</div>
</div>

<!-- Input Additional Problems & Active Image Preview -->
<div class="grid grid-cols-1 sm:grid-cols-[100px_1px_1fr] gap-4 items-center">
<!-- Image Preview Box -->
<div class="flex flex-col items-center justify-center space-y-1.5">
<div class="w-20 h-20 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center shadow-xs">
<img :src="activeImage" alt="Preview" class="w-full h-full object-cover">
</div>
<span class="text-[10px] text-gray-400 font-medium">Ref Image</span>
</div>

<div class="hidden sm:block h-full bg-gray-100 dark:bg-gray-700"></div>

<!-- Description Input -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[ADDITIONAL PROBLEMS]</label>
<div class="relative flex items-center">
<input type="text" x-model="additionalProblems" @focus="$el.select()" placeholder="e.g. Fix blurry line art, remove compression artifacts, and sharpen low resolution details..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showModal = true; $nextTick(() => { if(categorySwiper) categorySwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Select Problem Template">
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

<!-- Modal Picker Database Template Problem -->
<div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">

<!-- Modal Header -->
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Select Enhancement Focus Template</h3>
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
<template x-for="(cat, catName) in fixImageDatabase" :key="catName">
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
function fixImageApp() {
    return {
        additionalProblems: 'Fix blurry line art, remove compression artifacts, jagged jagged edges, and sharpen low resolution details',
        activeImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e1b4b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c7d2fe" font-size="10" font-family="sans-serif">Fix Image HD</text></svg>',
        copied: false,
        descCopied: false,
        showModal: false,
        showDescBaseModal: false,
        activeCategory: 'All',
        categorySwiper: null,

        fixImageDatabase: {
            "Line Art & Sketch": [
                {
                    title: "Fix Blurry Line Art",
                    description: "Fix blurry line art, remove compression artifacts, jagged edges, and sharpen low resolution details",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="10" font-family="sans-serif">Line Art</text></svg>'
                },
                {
                    title: "Clean Sketch & Strokes",
                    description: "Clean up messy sketchy strokes, eliminate fuzzy double lines, and define crisp sharp contours",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23312e81"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c7d2fe" font-size="10" font-family="sans-serif">Clean Sketch</text></svg>'
                }
            ],
            "Pixelation & Noise": [
                {
                    title: "Remove Pixelation & Noise",
                    description: "Remove heavy pixelation, digital noise, pixel grids, and blocky compression artifacts while keeping original shapes intact",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237f1d1d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fecaca" font-size="10" font-family="sans-serif">No Pixel</text></svg>'
                },
                {
                    title: "Upscale Low Resolution",
                    description: "Upscale low resolution pixel blur, smooth out staircase jagged pixel steps on diagonal lines into clean smooth vectors",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="10" font-family="sans-serif">Upscale</text></svg>'
                }
            ],
            "AI Artifacts & Blur": [
                {
                    title: "Fix AI Distortion & Blur",
                    description: "Eliminate unwanted AI generation artifacts, strange melted details, blurry textures, and warped deformed shapes",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23581c87"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e9d5ff" font-size="10" font-family="sans-serif">Fix AI</text></svg>'
                },
                {
                    title: "Restore Soft Shading & Details",
                    description: "Restore soft muddy gradients into clean crisp shading bands, fix low contrast, and recover lost facial/background fine details",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23831843"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fbcfe8" font-size="10" font-family="sans-serif">Shading</text></svg>'
                }
            ]
        },

        get filteredDatabase() {
            if (this.activeCategory === 'All') {
                let allItems = [];
                for (let cat in this.fixImageDatabase) {
                    allItems.push(...this.fixImageDatabase[cat]);
                }
                return allItems;
            }
            return this.fixImageDatabase[this.activeCategory] || [];
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
            this.additionalProblems = item.description;
            this.activeImage = item.image;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.fixImageDatabase) {
                allItems.push(...this.fixImageDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.additionalProblems = rand.description;
            this.activeImage = rand.image;
        },

        get fullPrompt() {
            let problems = this.additionalProblems ? this.additionalProblems.trim() : 'Fix overall blur, softness, and low resolution.';

            return `Use the attached image as the STRICT IMAGE REFERENCE.
Enhance and restore the image to a clean, sharp, high-definition version while preserving the original image exactly as much as possible.

ADDITIONAL PROBLEMS TO FIX
[${problems}]

Improve the overall image quality by correcting:
* blur
* softness
* low resolution
* jagged or broken edges
* blurry outlines
* pixelation
* compression artifacts
* unwanted AI artifacts
* inconsistent line quality
* unclear small details
* distorted or malformed details
* noise
* visual inconsistencies

Recover and sharpen existing details naturally.
Improve clarity and definition without inventing unnecessary new details.

STRICT CONTENT LOCK
Preserve the original:
* subject
* objects
* elements
* shapes
* details
* positions
* proportions
* composition
* perspective
* camera angle
* pose
* expression
* clothing
* hairstyle
* colors
* lighting
* shadows
* atmosphere
* visual style
* rendering style

Do NOT redesign the image.
Do not add new objects.
Do not remove existing objects.
Do not change the subject's identity.
Do not change shapes or proportions.
Do not change the composition.
Do not change the perspective.
Do not change the camera angle.
Do not change the pose.
Do not change the colors.
Do not change the lighting.
Do not change the visual style.

DETAIL RESTORATION
Restore existing details that are unclear because of blur or low resolution.
Make edges clean and well-defined.
Make outlines sharp and consistent.
Preserve the original shapes instead of replacing them with newly generated shapes.
Preserve small details instead of simplifying them.
If an area is unclear, reconstruct it conservatively based on the surrounding original information.
Do not hallucinate unnecessary details.

STYLE LOCK
Maintain the exact visual language of the original image:
* same linework
* same outline thickness
* same shapes
* same color treatment
* same texture
* same shading
* same rendering
* same level of detail

The enhancement must look like a higher-quality version of the original image, not a newly generated image.

QUALITY TARGET
Produce a clean, sharp, high-resolution result with:
* crisp edges
* clear details
* clean outlines
* reduced blur
* reduced noise
* reduced artifacts
* consistent shapes
* natural detail restoration
* high visual clarity

Do not over-sharpen.
Do not create halos around edges.
Do not create artificial textures.
Do not make the image look overly processed.

FINAL RESULT
The final image must remain visually identical to the original, except that its technical image quality has been improved.
It should look as if the original image was created or captured in much higher resolution from the beginning.
ENHANCE QUALITY ONLY. DO NOT REDESIGN THE IMAGE.`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>