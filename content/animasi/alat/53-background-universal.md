---
title: "Background Universal"
slug: "background-universal"
description: "Prompt builder untuk membuat background universal 2D cartoon dengan komposisi fleksibel untuk animasi"
icon: "icon-[ri--landscape-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="universalBgApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--landscape-line] text-indigo-600 dark:text-indigo-400"></i> Universal Background Prompt Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Location </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Universal Environment Description</label> <div class="relative flex items-center"> <input type="text" x-model="bgDesc" placeholder="e.g. A small traditional Indonesian roadside warung with simple tables, shelves of goods, and an open seating area for character interaction. SIDE SCROLL VIEW" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari Database Universal"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Background Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Deskripsi Background Doang </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Universal --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori Universal Background</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in bgDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in bgDatabase[activeCategory]" :key="item.title"> <div @click="selectBg(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function universalBgApp() {
    return {
        bgDesc: 'A small traditional Indonesian roadside warung with simple tables, shelves of goods, and an open seating area for character interaction. SIDE SCROLL VIEW',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Local Commercial',

        bgDatabase: {
            "Local Commercial": [
                { 
                    title: "Warung Pinggir Jalan", 
                    desc: "A small traditional Indonesian roadside warung with simple tables, shelves of goods, and an open seating area for character interaction. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Warung</text></svg>'
                },
                { 
                    title: "Bengkel Motor Kecil", 
                    desc: "A modest Indonesian neighborhood motorcycle repair shop with spare tires stacked, a workbench with tools, and open space in front. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Bengkel</text></svg>'
                },
                { 
                    title: "Warung Kopi Tradisional", 
                    desc: "A traditional local coffee shop (warkop) with wooden benches, a kettle on a simple stove counter, and open street-facing view. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" terxt-anchor="middle" fill="%239CA3AF" font-size="12">Warkop</text></svg>'
                }
            ],
            "Street & Alley": [
                { 
                    title: "Gang Perumahan Kampung", 
                    desc: "A narrow Indonesian suburban alleyway lined with potted plants, brick fences, and telephone poles with overhead cables. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Gang Kampung</text></svg>'
                },
                { 
                    title: "Pinggir Jalan Raya Desa", 
                    desc: "A quiet village roadside with lush green bushes, a wooden fence, distant coconut trees, and clear walking sidewalk space. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Jalan Desa</text></svg>'
                }
            ],
            "Residential Exterior": [
                { 
                    title: "Teras Rumah Kampung", 
                    desc: "The front terrace of a modest Indonesian suburban house featuring a small tiled porch, a pair of wooden chairs, and potted flowers. FRONT 3/4 VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Teras Rumah</text></svg>'
                },
                { 
                    title: "Halaman Depan Rumah", 
                    desc: "The front yard of a cozy suburban home with a low brick wall gate, a shady mango tree sapling, and clean paved yard floor. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Halaman</text></svg>'
                }
            ],
            "Public & Nature": [
                { 
                    title: "Pos Ronda Malam", 
                    desc: "A small open-air neighborhood security post (pos ronda) built with wood and bamboo pillars, equipped with a wooden bench and hanging bell. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Pos Ronda</text></svg>'
                },
                { 
                    title: "Pinggir Sawah Hijau", 
                    desc: "A scenic agricultural pathway beside a green rice paddy field, featuring a small farmer hut (gubug) and distant mountain silhouettes. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Sawah</text></svg>'
                }
            ]
        },

        openPicker() {
            this.showModal = true;
        },

        selectBg(desc) {
            this.bgDesc = desc;
            this.showModal = false;
        },

        get generatedDesc() {
            if (!this.bgDesc) return 'A clean outdoor environment layout with clear space for animation.';
            let cleaned = this.bgDesc.trim();
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + (cleaned.endsWith('.') ? '' : '.');
        },

        get fullPrompt() {
            return `Use the attached image as the STRICT STYLE REFERENCE ONLY.

Create a completely NEW 2D cartoon background based on this description:

[BACKGROUND DESCRIPTION]
${this.generatedDesc}
[/BACKGROUND DESCRIPTION]

Do not copy, trace, recreate, recolor, or slightly modify the location, buildings, objects, composition, or layout from the reference image.

Keep ONLY the visual art style of the reference:
- simple 2D cartoon illustration
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal visual details
- slightly handmade line quality
- simple stylized architecture and objects
- clear readable silhouettes
- animation-friendly environment design

Create a completely NEW location with its own unique layout, buildings, objects, colors, and environmental details based on the provided description.

COMPOSITION:
Create the scene in a clear SIDE / FRONT 3/4 ENVIRONMENT VIEW suitable for 2D animation.

The composition must be easy to use as an animation background:
- clear foreground, middle ground, and background separation
- readable open space for characters
- simple and uncluttered composition
- important objects clearly visible
- natural environmental proportions
- consistent perspective
- enough empty space for character movement
- avoid unnecessary small details

ANIMATION BACKGROUND PRIORITY:
This image will be used as a MASTER BACKGROUND REFERENCE for animation.

Therefore, prioritize:
- clear environment identity
- clean composition
- consistent perspective
- simple reusable environment design
- readable buildings and objects
- clear walking or acting space for characters
- animation-friendly shapes
- easy-to-separate visual elements
- consistent scale and proportions

Do not add people, characters, vehicles, text, logos, or unnecessary foreground objects unless specifically requested in the description.

Avoid photorealism, realistic textures, complex lighting, excessive shadows, gradients, highly detailed architecture, cinematic effects, or overly complicated scenery.

The final image must depict a completely NEW environment while clearly belonging to the same cartoon animation style as the reference.

Clean 2D animation background, clear composition, readable environment, consistent perspective.`;
        },

        randomize() {
            let allBgs = [];
            for (let cat in this.bgDatabase) {
                allBgs = allBgs.concat(this.bgDatabase[cat]);
            }
            let randomItem = allBgs[Math.floor(Math.random() * allBgs.length)];
            this.bgDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>