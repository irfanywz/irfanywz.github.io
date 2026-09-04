---
title: "Background Repair"
slug: "background-repair"
description: "Prompt builder untuk memperbaiki garis putus-putus, artefak AI, atau area blur (repair & cleanup) pada background 2D cartoon"
icon: "icon-[ri--tools-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="repairBgApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--tools-line] text-indigo-600 dark:text-indigo-400"></i> Background Repair & Cleanup Prompt Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Repair Issue </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Area / Problem to Repair</label> <div class="relative flex items-center"> <input type="text" x-model="repairDesc" placeholder="e.g. Clean up the broken linework and blurry artifacts around the window frame and wall corner." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari Database Masalah Perbaikan"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Ringkasan Perbaikan --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Ringkasan Perbaikan </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Masalah Perbaikan --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori Masalah Perbaikan</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in repairDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in repairDatabase[activeCategory]" :key="item.title"> <div @click="selectItem(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function repairBgApp() {
    return {
        repairDesc: 'Clean up the broken linework and blurry artifacts around the window frame and wall corner.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Linework & Outlines',

        repairDatabase: {
            "Linework & Outlines": [
                { 
                    title: "Garis Putus/Blur Jendela", 
                    desc: "Clean up the broken linework and blurry artifacts around the window frame and wall corner.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Linework</text></svg>'
                },
                { 
                    title: "Perbaikan Outline Objek", 
                    desc: "Fix the inconsistent, jagged, and broken black outlines on the furniture and major objects.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Outline Fix</text></svg>'
                }
            ],
            "AI Artifacts & Distortion": [
                { 
                    title: "Artefak AI & Distorsi", 
                    desc: "Remove unwanted AI distortion, melting textures, and strange warping on the structural walls and floor.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Artifacts</text></svg>'
                },
                { 
                    title: "Koneksi Objek Keliru", 
                    desc: "Correct incorrect object connections, overlapping distortion, and malformed proportions on structural elements.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Connections</text></svg>'
                }
            ]
        },

        openPicker() {
            this.showModal = true;
        },

        selectItem(desc) {
            this.repairDesc = desc;
            this.showModal = false;
        },

        get generatedDesc() {
            let rep = this.repairDesc ? this.repairDesc.trim() : 'Specified problem area.';
            return `Repair problem area: [${rep}]`;
        },

        get fullPrompt() {
            let rep = this.repairDesc ? this.repairDesc.trim() : 'Clean up the broken linework and blurry artifacts around the window frame and wall corner.';

            return `Use the attached image as the STRICT BACKGROUND REFERENCE.

Repair and clean up ONLY the specified problem areas:

${rep}

Preserve the original background exactly as much as possible.

Do NOT redesign, replace, move, resize, recolor, remove, or alter any correctly rendered part of the image.

Keep the original:
- environment
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
- visual style

ONLY repair the specified problem areas.

Correct issues such as:
- broken or inconsistent outlines
- blurry areas
- distorted shapes
- malformed objects
- unwanted AI artifacts
- incorrect object connections
- inconsistent proportions
- minor perspective errors
- incomplete environmental details

Reconstruct the repaired area naturally while matching the surrounding image.

Maintain consistency with the original:
- cartoon art style
- thick black outlines
- line quality
- flat solid colors
- simple shapes
- proportions
- perspective
- lighting
- environmental scale

Do not add unnecessary new objects, details, or decorations.

Do not alter any area outside the specified problem area.

STRICT REFERENCE LOCK:
Same environment.
Same composition.
Same objects.
Same object positions.
Same perspective.
Same camera angle.
Same lighting.
Same atmosphere.
Same visual style.

ONLY repair the specified problem areas.

The final result must look identical to the original background, except that the specified problems have been naturally corrected.

Output a clean and consistent 2D animation background.`;
        },

        randomize() {
            let allItems = [];
            for (let cat in this.repairDatabase) {
                allItems = allItems.concat(this.repairDatabase[cat]);
            }
            let randomItem = allItems[Math.floor(Math.random() * allItems.length)];
            this.repairDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>