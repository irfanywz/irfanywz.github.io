---
title: "Background Object Add"
slug: "background-object-add"
description: "Prompt builder untuk menambahkan objek baru ke dalam background 2D cartoon yang sudah ada tanpa merusak layout"
icon: "icon-[ri--add-box-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="addObjectBgApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--add-box-line] text-indigo-600 dark:text-indigo-400"></i> Add Object to Background Prompt Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Object & Placement </button> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Input 1: Object to Add --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Object to Add</label> <div class="relative flex items-center"> <input type="text" x-model="objectDesc" placeholder="e.g. A small wooden stool with a warm red cushion." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('object')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Objek"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Input 2: Placement / Position --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Placement / Position</label> <input type="text" x-model="placementDesc" placeholder="e.g. Placed neatly on the right side of the room near the wall." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Objek & Penempatan Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Ringkasan Objek & Posisi </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Objek Tambahan --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori Objek Tambahan</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in objectDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in objectDatabase[activeCategory]" :key="item.title"> <div @click="selectObject(item)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function addObjectBgApp() {
    return {
        objectDesc: 'A small wooden stool with a warm red cushion.',
        placementDesc: 'Placed neatly on the right side of the room near the wall.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Furniture & Seating',

        objectDatabase: {
            "Furniture & Seating": [
                { 
                    title: "Wooden Stool", 
                    desc: "A small wooden stool with a warm red cushion.",
                    placement: "Placed neatly on the right side of the room near the wall.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Stool</text></svg>'
                },
                { 
                    title: "Rattan Chair", 
                    desc: "A classic round rattan chair with a low backrest.",
                    placement: "Positioned in the middle ground acting space facing slightly sideways.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Rattan Chair</text></svg>'
                },
                { 
                    title: "Small Coffee Table", 
                    desc: "A low rectangular wooden coffee table with short legs.",
                    placement: "Placed in the center of the foreground floor area.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Table</text></svg>'
                }
            ],
            "Electronics & Appliances": [
                { 
                    title: "Box Television", 
                    desc: "An old vintage 90s box television set on a small stand.",
                    placement: "Set against the back wall on top of a low wooden cabinet.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">TV Set</text></svg>'
                },
                { 
                    title: "Standing Fan", 
                    desc: "An old electric standing fan with a protective metal cage.",
                    placement: "Standing upright on the left corner of the room.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Fan</text></svg>'
                }
            ],
            "Plants & Decor": [
                { 
                    title: "Potted Monstera", 
                    desc: "A medium-sized tropical potted plant with broad split leaves.",
                    placement: "Placed on the floor next to the window or doorway.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Plant</text></svg>'
                },
                { 
                    title: "Wall Calendar", 
                    desc: "A paper wall calendar hanging with a spiral binder ring.",
                    placement: "Mounted flat on the upper portion of the empty wall space.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Calendar</text></svg>'
                },
                { 
                    title: "Ceramic Jar / Kendi", 
                    desc: "A traditional Indonesian clay water jar (kendi).",
                    placement: "Resting on a small wooden stool on the left side.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Kendi</text></svg>'
                }
            ],
            "Lighting & Fixtures": [
                { 
                    title: "Hanging Ceiling Lamp", 
                    desc: "A simple bulb hanging from the ceiling with a conical lampshade.",
                    placement: "Suspended from the upper center ceiling area.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Lamp</text></svg>'
                }
            ]
        },

        openPicker(type) {
            this.showModal = true;
        },

        selectObject(item) {
            this.objectDesc = item.desc;
            this.placementDesc = item.placement;
            this.showModal = false;
        },

        get generatedDesc() {
            let obj = this.objectDesc ? this.objectDesc.trim() : 'An added object.';
            let place = this.placementDesc ? this.placementDesc.trim() : 'Placed naturally in the environment.';
            return `Add object: [${obj}] | Placement: [${place}]`;
        },

        get fullPrompt() {
            let obj = this.objectDesc ? this.objectDesc.trim() : 'A small wooden stool with a warm red cushion.';
            let place = this.placementDesc ? this.placementDesc.trim() : 'Placed neatly on the right side of the room near the wall.';

            return `Use the attached image as the STRICT BACKGROUND REFERENCE.

Add ONLY the specified new object or element:

[${obj}]


Place the new object naturally in the specified location:

[${place}]

Preserve the original background exactly as much as possible.

Do NOT change, redesign, remove, move, resize, recolor, or replace any existing:
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
- perspective
- proportions
- camera angle
- lighting
- time of day
- atmosphere
- art style

The new object must naturally match the existing environment.

Match the new object with the original:
- cartoon art style
- linework
- outline thickness
- colors
- lighting
- perspective
- scale
- proportions
- visual simplicity

Make sure the new object has the correct size and perspective relative to its position in the environment.

Do not add any additional objects or unnecessary details.

Do not alter any area outside the placement of the new object.

STRICT REFERENCE LOCK:
Same environment.
Same composition.
Same existing objects.
Same object positions.
Same perspective.
Same camera angle.
Same lighting.
Same atmosphere.
Same visual style.

ONLY add the specified object in the requested location.

The final result must look like the new object naturally belongs in the original background.

Output a clean 2D animation background.`;
        },

        randomize() {
            let allObjects = [];
            for (let cat in this.objectDatabase) {
                allObjects = allObjects.concat(this.objectDatabase[cat]);
            }
            let randomItem = allObjects[Math.floor(Math.random() * allObjects.length)];
            this.objectDesc = randomItem.desc;
            this.placementDesc = randomItem.placement;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>