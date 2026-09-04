---
title: "Background Outpainting"
slug: "background-outpaint"
description: "Prompt builder untuk memperluas area background (outpainting) 2D cartoon secara horizontal atau vertikal"
icon: "icon-[ri--expand-diagonal-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="outpaintingBgApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--expand-diagonal-line] text-indigo-600 dark:text-indigo-400"></i> Background Outpainting Prompt Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Extension </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Extension Direction</label> <div class="relative flex items-center"> <input type="text" x-model="directionDesc" placeholder="e.g. Extend the scene horizontally to the left and right, revealing more of the room and side walls." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari Database Arah Perluasan"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Ringkasan Arah --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Ringkasan Perluasan </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Arah Perluasan --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori Arah Perluasan</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in outpaintDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in outpaintDatabase[activeCategory]" :key="item.title"> <div @click="selectItem(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function outpaintingBgApp() {
    return {
        directionDesc: 'Extend the scene horizontally to the left and right, revealing more of the room and side walls.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Horizontal Expansion',

        outpaintDatabase: {
            "Horizontal Expansion": [
                { 
                    title: "Kiri & Kanan (Horizontal)", 
                    desc: "Extend the scene horizontally to the left and right, revealing more of the room and side walls.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Horizontal</text></svg>'
                },
                { 
                    title: "Lebar ke Kanan Saja", 
                    desc: "Extend the background horizontally to the right side, continuing the landscape and structures naturally.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Expand Right</text></svg>'
                }
            ],
            "Vertical & Full Expansion": [
                { 
                    title: "Atas & Bawah (Vertical)", 
                    desc: "Extend the scene vertically upward to show more sky/ceiling and downward to show more floor or ground.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Vertical</text></svg>'
                },
                { 
                    title: "Full 360 Wide Panorama", 
                    desc: "Extend the background in all directions (wide panoramic framing), expanding the environment completely while keeping the center intact.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231E3A8A"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393C5FD" font-size="12">Full Wide</text></svg>'
                }
            ]
        },

        openPicker() {
            this.showModal = true;
        },

        selectItem(desc) {
            this.directionDesc = desc;
            this.showModal = false;
        },

        get generatedDesc() {
            let dir = this.directionDesc ? this.directionDesc.trim() : 'Specified extension direction.';
            return `Extend background: [${dir}]`;
        },

        get fullPrompt() {
            let dir = this.directionDesc ? this.directionDesc.trim() : 'Extend the scene horizontally to the left and right, revealing more of the room and side walls.';

            return `Use the attached image as the STRICT BACKGROUND REFERENCE.

Extend the existing background in the following direction:

[${dir}]

Extend the scene naturally based on the existing environment.

Preserve the entire original image exactly as it is.

Do NOT change, redesign, move, resize, recolor, remove, or replace anything inside the original image.

Keep the original:
- buildings
- roads
- walls
- floors
- trees
- furniture
- objects
- environmental elements
- object positions
- composition
- proportions
- perspective
- camera angle
- lighting
- time of day
- atmosphere
- colors
- linework
- visual style

ONLY generate new environmental areas outside the boundaries of the original image.

The newly generated area must continue the existing environment naturally.

Maintain consistency in:
- perspective
- horizon level
- ground level
- environmental scale
- object proportions
- architectural style
- vegetation
- colors
- lighting
- atmosphere
- cartoon linework

Continue roads, walls, buildings, landscapes, skies, floors, or other environmental elements naturally when appropriate.

Do not create unrelated locations or sudden changes in the environment.

The extended area must feel like a natural continuation of the SAME location.

STRICT REFERENCE LOCK:
Keep the original image unchanged.
Keep all existing objects unchanged.
Keep the same environment.
Keep the same perspective.
Keep the same camera angle.
Keep the same lighting.
Keep the same atmosphere.
Keep the same visual style.

ONLY expand the environment beyond the original boundaries.

The final result must look like the original background was always part of a larger continuous environment.

Output a clean wide 2D animation background.`;
        },

        randomize() {
            let allItems = [];
            for (let cat in this.outpaintDatabase) {
                allItems = allItems.concat(this.outpaintDatabase[cat]);
            }
            let randomItem = allItems[Math.floor(Math.random() * allItems.length)];
            this.directionDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>