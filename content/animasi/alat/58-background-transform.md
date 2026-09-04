---
title: "Background Transform"
slug: "background-transform"
description: "Prompt builder untuk mengubah kondisi fisik, usia, dan tingkat perawatan (age & condition) pada background 2D cartoon"
icon: "icon-[ri--history-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="transformBgApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--history-line] text-indigo-600 dark:text-indigo-400"></i> Background Condition & Age Prompt Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Condition </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Condition / Age Description</label> <div class="relative flex items-center"> <input type="text" x-model="conditionDesc" placeholder="e.g. Transform the environment into an abandoned, rundown place with cracked walls, peeling paint, and overgrown vines." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari Database Kondisi"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Ringkasan Kondisi --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Ringkasan Kondisi </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Kondisi & Usia --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori Kondisi & Usia</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in conditionDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in conditionDatabase[activeCategory]" :key="item.title"> <div @click="selectItem(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div> </div>

<script>
function transformBgApp() {
    return {
        conditionDesc: 'Transform the environment into an abandoned, rundown place with cracked walls, peeling paint, and overgrown vines.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Abandoned & Run-down',

        conditionDatabase: {
            "Abandoned & Run-down": [
                { 
                    title: "Terbengkalai & Lumut", 
                    desc: "Transform the environment into an abandoned, rundown place with cracked walls, peeling paint, and overgrown vines.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Abandoned</text></svg>'
                },
                { 
                    title: "Sangat Tua & Lapuk", 
                    desc: "Transform the location into an ancient, weathered space with heavy wood rot, rusted metal fixtures, and deep surface cracks.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Ancient</text></svg>'
                }
            ],
            "Clean & Brand New": [
                { 
                    title: "Baru & Berkilau", 
                    desc: "Transform the environment into a brand new, pristine condition with spotless clean surfaces, fresh bright paint, and polished materials.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231E3A8A"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393C5FD" font-size="12">Brand New</text></svg>'
                },
                { 
                    title: "Baru Direnovasi", 
                    desc: "Transform the location into a freshly renovated space with neat finishing, clean repainted walls, and well-maintained features.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065F46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23A7F3D0" font-size="12">Renovated</text></svg>'
                }
            ],
            "Post-Apocalyptic / Dusty": [
                { 
                    title: "Berdebu & Kotor", 
                    desc: "Transform the environment into a dusty, neglected interior covered in thick layers of dust, cobwebs, and minor debris.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234B5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23D1D5DB" font-size="12">Dusty</text></svg>'
                }
            ]
        },

        openPicker() {
            this.showModal = true;
        },

        selectItem(desc) {
            this.conditionDesc = desc;
            this.showModal = false;
        },

        get generatedDesc() {
            let cond = this.conditionDesc ? this.conditionDesc.trim() : 'Specified condition.';
            return `Transform environment condition: [${cond}]`;
        },

        get fullPrompt() {
            let cond = this.conditionDesc ? this.conditionDesc.trim() : 'Transform the environment into an abandoned, rundown place with cracked walls, peeling paint, and overgrown vines.';

            return `Use the attached image as the STRICT BACKGROUND REFERENCE.

Transform the condition and age of the existing environment based on:

[${cond}]

Preserve the original environment and its identity.

Do NOT change the location, architecture, layout, perspective, camera angle, or major environmental elements.

Keep consistent:
- buildings
- roads
- walls
- floors
- trees
- furniture
- major objects
- architectural structure
- object positions
- composition
- perspective
- proportions
- camera angle
- visual style

ONLY change the apparent age, condition, cleanliness, maintenance, and physical state of the existing environment.

Apply the requested condition naturally through appropriate visual changes such as:
- surface wear
- faded colors
- minor stains
- weathering
- aging materials
- worn paint
- slightly damaged surfaces
- overgrown vegetation
- accumulated dirt
- signs of neglect
- subtle deterioration

Keep the original structure recognizable.

Do NOT completely destroy, rebuild, replace, or redesign the environment unless specifically requested.

The transformation must remain believable and proportional to the requested condition.

Maintain the original:
- 2D cartoon art style
- thick black outlines
- flat solid colors
- clean simple shapes
- slightly handmade line quality
- perspective
- proportions
- lighting
- atmosphere

Do not add characters, text, logos, or unrelated objects.

Do not dramatically change the lighting, weather, or time of day unless specifically requested.

STRICT REFERENCE LOCK:
Same location.
Same environment.
Same architecture.
Same major objects.
Same object positions.
Same composition.
Same perspective.
Same camera angle.
Same visual style.

ONLY change the age and physical condition of the existing environment.

The final result must look like the SAME location at a different stage of age or maintenance.

Output a clean 2D animation background.`;
        },

        randomize() {
            let allItems = [];
            for (let cat in this.conditionDatabase) {
                allItems = allItems.concat(this.conditionDatabase[cat]);
            }
            let randomItem = allItems[Math.floor(Math.random() * allItems.length)];
            this.conditionDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>