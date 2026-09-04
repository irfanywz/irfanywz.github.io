---
title: "Background Auto Decor"
slug: "background-decor"
description: "Prompt builder untuk menambahkan detail pendukung (auto decor) atau menyederhanakan background (simplify) 2D cartoon"
icon: "icon-[ri--magic-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="decorSimplifyApp()"> <!-- Mode Selector Tab --> <div class="flex rounded-2xl bg-gray-100 dark:bg-gray-900 p-1.5 border border-gray-200 dark:border-gray-700"> <button @click="activeMode = 'decor'" :class="activeMode === 'decor' ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800'" class="flex-1 py-2 text-xs font-semibold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"> <i class="icon-[ri--spark-2-line]"></i> Auto Decor (Tambah Detail) </button> <button @click="activeMode = 'simplify'" :class="activeMode === 'simplify' ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800'" class="flex-1 py-2 text-xs font-semibold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"> <i class="icon-[ri--minimize-line]"></i> Simplify (Sederhanakan) </button> </div> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i :class="activeMode === 'decor' ? 'icon-[ri--spark-2-line]' : 'icon-[ri--minimize-line]'" class="text-indigo-600 dark:text-indigo-400"></i> <span x-text="activeMode === 'decor' ? 'Auto Decor Prompt Builder' : 'Simplify Background Prompt Builder'"></span> </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Focus </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400" x-text="activeMode === 'decor' ? 'Additional Enhancement Details' : 'Simplification Focus'"></label> <div class="relative flex items-center"> <input type="text" x-model="customDesc" :placeholder="activeMode === 'decor' ? 'e.g. Add small potted plants, soft ivy on the wall, and subtle electrical wires.' : 'e.g. Remove complex textures and excessive wall decorations while keeping main shapes.'" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari Database"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Ringkasan --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Ringkasan Aksi </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200" x-text="activeMode === 'decor' ? 'Pilih Kategori Detail Pendukung' : 'Pilih Kategori Penyederhanaan'"></h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in currentDatabase" :key="item.title"> <div @click="selectItem(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function decorSimplifyApp() {
    return {
        activeMode: 'decor',
        customDesc: 'Add small potted plants, soft ivy on the wall, and subtle electrical wires.',
        copied1: false,
        copied2: false,
        showModal: false,

        decorDatabase: [
            { 
                title: "Tanaman & Tumbuhan", 
                desc: "Add small potted plants, soft ivy on the wall, and natural vegetation.",
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065F46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23A7F3D0" font-size="12">Plants</text></svg>'
            },
            { 
                title: "Detail Arsitektur", 
                desc: "Add subtle architectural details, roof trims, bricks textures, and window frames.",
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231E3A8A"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23BFDBFE" font-size="12">Architecture</text></svg>'
            },
            { 
                title: "Kabel & Elemen Jalan", 
                desc: "Add electrical wires, simple roadside elements, and minor background clutter.",
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23E5E7EB" font-size="12">Wires</text></svg>'
            }
        ],

        simplifyDatabase: [
            { 
                title: "Kurangi Tekstur Rumit", 
                desc: "Remove complex textures and excessive wall decorations while keeping main shapes clean.",
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234B5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23F3F4F6" font-size="12">Clean Textures</text></svg>'
            },
            { 
                title: "Sederhanakan Bentuk", 
                desc: "Simplify background clutter, reduce small repetitive objects, and maximize visual space for characters.",
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231F2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Simplify Shapes</text></svg>'
            }
        ],

        get currentDatabase() {
            return this.activeMode === 'decor' ? this.decorDatabase : this.simplifyDatabase;
        },

        openPicker() {
            this.showModal = true;
        },

        selectItem(desc) {
            this.customDesc = desc;
            this.showModal = false;
        },

        get generatedDesc() {
            let desc = this.customDesc ? this.customDesc.trim() : 'Specified adjustments.';
            if (this.activeMode === 'decor') {
                return `Enhance background with subtle details: [${desc}]`;
            } else {
                return `Simplify background and reduce clutter: [${desc}]`;
            }
        },

        get fullPrompt() {
            let desc = this.customDesc ? this.customDesc.trim() : (this.activeMode === 'decor' ? 'Add small potted plants, soft ivy on the wall, and subtle electrical wires.' : 'Remove complex textures and excessive wall decorations while keeping main shapes.');

            if (this.activeMode === 'decor') {
                return `Use the attached image as the STRICT BACKGROUND REFERENCE.[cite: 3]

Enhance the existing background by adding subtle and appropriate environmental details:
${desc}

Preserve the original environment, composition, layout, and all major elements exactly as they are.[cite: 3]

Do NOT redesign, remove, move, resize, replace, or significantly alter any existing:[cite: 3]
- buildings[cite: 3]
- roads[cite: 3]
- walls[cite: 3]
- floors[cite: 3]
- trees[cite: 3]
- furniture[cite: 3]
- major objects[cite: 3]
- environmental structures[cite: 3]
- object positions[cite: 3]
- composition[cite: 3]
- perspective[cite: 3]
- camera angle[cite: 3]
- lighting[cite: 3]
- time of day[cite: 3]
- atmosphere[cite: 3]

ONLY add small supporting details that naturally belong in the existing environment.[cite: 3]

The added details must improve the visual richness and believability of the scene without changing its original identity.[cite: 3]

Do not overcrowd the scene.[cite: 3]
Keep the environment clean, readable, and suitable for 2D character animation.[cite: 3]

Prioritize:[cite: 3]
- subtle details[cite: 3]
- simple shapes[cite: 3]
- clear silhouettes[cite: 3]
- readable composition[cite: 3]
- natural object placement[cite: 3]
- animation-friendly design[cite: 3]

All added details must match the original:[cite: 3]
- cartoon art style[cite: 3]
- thick black outlines[cite: 3]
- flat solid colors[cite: 3]
- simple clean shapes[cite: 3]
- slightly handmade line quality[cite: 3]
- perspective[cite: 3]
- proportions[cite: 3]
- lighting[cite: 3]

Do not add characters, people, text, logos, vehicles, or large new objects unless specifically requested.[cite: 3]

STRICT REFERENCE LOCK:[cite: 3]
Same environment.[cite: 3]
Same composition.[cite: 3]
Same major objects.[cite: 3]
Same object positions.[cite: 3]
Same perspective.[cite: 3]
Same camera angle.[cite: 3]
Same lighting.[cite: 3]
Same atmosphere.[cite: 3]
Same visual style.[cite: 3]

ONLY enhance the background with subtle supporting details.[cite: 3]

The final result must look like the SAME background, naturally enriched with additional environmental details.[cite: 3]

Output a clean, detailed, but still simple 2D animation background.[cite: 3]`;
            } else {
                return `Use the attached image as the STRICT BACKGROUND REFERENCE.[cite: 4]

Simplify the existing background while preserving the original environment and its main visual identity:[cite: 4]
${desc}

Reduce unnecessary visual complexity and remove non-essential details.[cite: 4]

Preserve all important:[cite: 4]
- buildings[cite: 4]
- roads[cite: 4]
- walls[cite: 4]
- floors[cite: 4]
- trees[cite: 4]
- furniture[cite: 4]
- major objects[cite: 4]
- environmental structures[cite: 4]
- object positions[cite: 4]
- composition[cite: 4]
- perspective[cite: 4]
- camera angle[cite: 4]
- lighting[cite: 4]
- time of day[cite: 4]
- atmosphere[cite: 4]

Do NOT redesign the environment or create a different location.[cite: 4]

ONLY simplify unnecessary details and visual clutter.[cite: 4]

Keep the major environmental elements clear and recognizable.[cite: 4]

Prioritize:[cite: 4]
- clean readable composition[cite: 4]
- simple shapes[cite: 4]
- clear silhouettes[cite: 4]
- open visual space for characters[cite: 4]
- animation-friendly design[cite: 4]
- easy-to-read environmental structure[cite: 4]

Maintain the original:[cite: 4]
- cartoon art style[cite: 4]
- thick black outlines[cite: 4]
- flat solid colors[cite: 4]
- simple visual language[cite: 4]
- perspective[cite: 4]
- proportions[cite: 4]
- lighting[cite: 4]
- atmosphere[cite: 4]

Do not remove important objects that define the identity or function of the location.[cite: 4]
Do not make the environment empty or overly minimal.[cite: 4]
Keep a balanced amount of detail.[cite: 4]

STRICT REFERENCE LOCK:[cite: 4]
Same environment.[cite: 4]
Same location.[cite: 4]
Same major objects.[cite: 4]
Same composition.[cite: 4]
Same perspective.[cite: 4]
Same camera angle.[cite: 4]
Same lighting.[cite: 4]
Same atmosphere.[cite: 4]
Same visual style.[cite: 4]

ONLY reduce unnecessary complexity and visual clutter.[cite: 4]

The final result must look like the SAME background redesigned into a cleaner, simpler, and more animation-friendly version.[cite: 4]

Output a clean and readable 2D animation background.[cite: 4]`;
            }
        },

        randomize() {
            let list = this.currentDatabase;
            let randomItem = list[Math.floor(Math.random() * list.length)];
            this.customDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>