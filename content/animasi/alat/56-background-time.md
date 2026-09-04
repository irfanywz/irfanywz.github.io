---
title: "Background Time"
slug: "background-time"
description: "Prompt builder untuk mengubah waktu, pencahayaan, dan suasana (time & atmosphere) pada background 2D cartoon tanpa mengubah posisi objek"
icon: "icon-[ri--sun-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="timeAtmosphereBgApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--sun-line] text-indigo-600 dark:text-indigo-400"></i> Background Time & Atmosphere Prompt Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Time / Atmosphere </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Time / Atmosphere Description</label> <div class="relative flex items-center"> <input type="text" x-model="timeDesc" placeholder="e.g. Midnight with glowing moonlight, deep indigo sky, and soft blue environmental shadows." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari Database Waktu & Suasana"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Ringkasan Waktu & Suasana --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Ringkasan Waktu </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Waktu & Suasana --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori Waktu & Atmosfer</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in timeDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in timeDatabase[activeCategory]" :key="item.title"> <div @click="selectItem(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function timeAtmosphereBgApp() {
    return {
        timeDesc: 'Midnight with glowing moonlight, deep indigo sky, and soft blue environmental shadows.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Waktu Utama',

        timeDatabase: {
            "Waktu Utama": [
                { 
                    title: "Malam Hari (Midnight)", 
                    desc: "Midnight with glowing moonlight, deep indigo sky, and soft blue environmental shadows.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231E1B4B"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Midnight</text></svg>'
                },
                { 
                    title: "Golden Hour Sunset", 
                    desc: "Late afternoon golden hour with warm orange light, long horizontal shadows, and amber glow.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237C2D12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23FDE047" font-size="12">Sunset</text></svg>'
                },
                { 
                    title: "Pagi Hari (Morning)", 
                    desc: "Early morning sunrise with soft pink and light blue gradient sky, crisp bright illumination, and gentle morning light.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230284C7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23FEF08A" font-size="12">Morning</text></svg>'
                },
                { 
                    title: "Siang Terang (Midday)", 
                    desc: "Bright midday sunshine with clear blue sky, strong direct overhead lighting, and short sharp shadows.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%232563EB"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23FEF08A" font-size="12">Midday</text></svg>'
                }
            ],
            "Cuaca & Atmosfer Khusus": [
                { 
                    title: "Hari Hujan Mendung", 
                    desc: "Overcast rainy day with grey sky, flat diffuse lighting, wet reflective surfaces, and soft atmospheric mist.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234B5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23D1D5DB" font-size="12">Rainy</text></svg>'
                },
                { 
                    title: "Senja Berkabut (Foggy Twilight)", 
                    desc: "Mystical twilight with thick atmospheric fog, purple-blue ambient lighting, and soft glowing elements.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23312E81"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23C7D2FE" font-size="12">Foggy</text></svg>'
                }
            ]
        },

        openPicker() {
            this.showModal = true;
        },

        selectItem(desc) {
            this.timeDesc = desc;
            this.showModal = false;
        },

        get generatedDesc() {
            let time = this.timeDesc ? this.timeDesc.trim() : 'Specified time & atmosphere.';
            return `Change time & atmosphere: [${time}]`;
        },

        get fullPrompt() {
            let time = this.timeDesc ? this.timeDesc.trim() : 'Midnight with glowing moonlight, deep indigo sky, and soft blue environmental shadows.';

            return `Use the attached image as the STRICT BACKGROUND REFERENCE.

ONLY change the following:

[${time}]

Preserve the original background EXACTLY.

Do not change, redesign, remove, add, move, resize, or replace any existing:
- buildings
- roads
- walls
- furniture
- trees
- objects
- environmental elements
- object positions
- composition
- perspective
- proportions
- camera angle
- scene layout

Keep the original cartoon art style, linework, shapes, and visual design unchanged.

Transform the scene naturally by adjusting ONLY:
- overall lighting
- sky appearance
- environmental brightness
- color temperature
- shadows
- atmosphere
- weather conditions when requested

The physical environment must remain exactly the same.

Do not add new buildings, objects, characters, vehicles, text, logos, or environmental elements unless specifically requested.

Do not remove any existing elements.

Maintain the exact same composition and camera view.

The result must look like the SAME background captured at a different time or under a different atmosphere.

Preserve all original object placement, proportions, perspective, and environmental structure.

STRICT REFERENCE LOCK:
Same location.
Same composition.
Same objects.
Same object positions.
Same perspective.
Same camera angle.
Same visual style.

ONLY change the time, lighting, and atmosphere.

Output a clean 2D animation background with the exact same environment and composition as the original image.`;
        },

        randomize() {
            let allItems = [];
            for (let cat in this.timeDatabase) {
                allItems = allItems.concat(this.timeDatabase[cat]);
            }
            let randomItem = allItems[Math.floor(Math.random() * allItems.length)];
            this.timeDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>