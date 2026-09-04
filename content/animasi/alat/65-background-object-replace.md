---
title: "Background Object Replace"
slug: "background-object-replace"
description: "Prompt builder untuk mengganti objek tertentu pada background 2D cartoon dengan tetap mempertahankan referensi background asli"
icon: "icon-[ri--refresh-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="objectReplaceApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--refresh-line] text-indigo-600 dark:text-indigo-400"></i> Background Object Replace Prompt Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Objects </button> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Input 1: Object to Replace --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Object to Replace (Existing)</label> <div class="relative flex items-center"> <input type="text" x-model="targetObject" placeholder="e.g. The wooden bench on the right side..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('target')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Objek Asal"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Input 2: New Object --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">New Object Replacement</label> <div class="relative flex items-center"> <input type="text" x-model="newObject" placeholder="e.g. A modern red vending machine..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('new')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Objek Pengganti"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Ringkasan Penggantian --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Ringkasan Objek </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Objek --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200" x-text="pickerMode === 'target' ? 'Pilih Objek yang Ingin Diganti' : 'Pilih Objek Pengganti Baru'"></h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in currentDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in currentDatabase[activeCategory]" :key="item.title"> <div @click="selectItem(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function objectReplaceApp() {
    return {
        targetObject: 'The wooden bench placed on the right side of the foreground.',
        newObject: 'A modern red vending machine with illuminated buttons and glass display.',
        copied1: false,
        copied2: false,
        showModal: false,
        pickerMode: 'target',
        activeCategory: 'Outdoor & Street',

        targetDatabase: {
            "Outdoor & Street": [
                { 
                    title: "Wooden Bench", 
                    desc: "The wooden bench placed on the right side of the foreground.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="11">Bench</text></svg>'
                },
                { 
                    title: "Street Lamp", 
                    desc: "The tall vintage street lamp standing near the sidewalk curb.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="11">Lamp</text></svg>'
                },
                { 
                    title: "Trash Bin", 
                    desc: "The metallic public trash bin located beside the path.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="11">Trash Bin</text></svg>'
                }
            ],
            "Indoor & Room": [
                { 
                    title: "Office Desk", 
                    desc: "The wooden office desk positioned against the center wall.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234B5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23D1D5DB" font-size="11">Desk</text></svg>'
                },
                { 
                    title: "Bookshelf", 
                    desc: "The tall bookshelf filled with books on the left side of the room.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234B5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23D1D5DB" font-size="11">Bookshelf</text></svg>'
                }
            ]
        },

        newObjectDatabase: {
            "Electronics & Machines": [
                { 
                    title: "Vending Machine", 
                    desc: "A modern red vending machine with illuminated buttons and glass display.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231E1B4B"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="11">Vending</text></svg>'
                },
                { 
                    title: "Arcade Cabinet", 
                    desc: "A retro arcade gaming cabinet with colorful pixel art marquee and glowing joystick panel.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237C2D12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23FDE047" font-size="11">Arcade</text></svg>'
                }
            ],
            "Plants & Nature": [
                { 
                    title: "Large Potted Plant", 
                    desc: "A large leafy monstera plant inside a ceramic terracotta pot.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065F46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23A7F3D0" font-size="11">Plant</text></svg>'
                },
                { 
                    title: "Stone Fountain", 
                    desc: "A small decorative stone water fountain with clear trickling water.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231E3A8A"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393C5FD" font-size="11">Fountain</text></svg>'
                }
            ]
        },

        get currentDatabase() {
            return this.pickerMode === 'target' ? this.targetDatabase : this.newObjectDatabase;
        },

        openPicker(type) {
            this.pickerMode = type;
            this.activeCategory = Object.keys(this.currentDatabase)[0];
            this.showModal = true;
        },

        selectItem(desc) {
            if (this.pickerMode === 'target') {
                this.targetObject = desc;
            } else {
                this.newObject = desc;
            }
            this.showModal = false;
        },

        get generatedDesc() {
            let target = this.targetObject ? this.targetObject.trim() : 'Default object.';
            let replacement = this.newObject ? this.newObject.trim() : 'Default replacement.';
            return `Replace [${target}] with [${replacement}]`;
        },

        get fullPrompt() {
            let target = this.targetObject ? this.targetObject.trim() : 'The wooden bench placed on the right side of the foreground.';
            let replacement = this.newObject ? this.newObject.trim() : 'A modern red vending machine with illuminated buttons and glass display.';

            return `Use the attached image as the STRICT BACKGROUND REFERENCE.

Replace ONLY the specified existing object:
[${target}]
with:
[${replacement}]

Preserve the original background exactly as much as possible.

The new object must occupy the same general location and naturally fit into the existing environment.

Do NOT change, redesign, remove, move, resize, recolor, or replace any other existing:
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
- visual style

ONLY replace the specified target object with the requested new object.

The replacement must:
- remain in the same general position
- match the surrounding scale
- follow the existing perspective
- fit naturally into the environment
- maintain believable proportions
- match the original cartoon art style
- match the original linework and outline thickness
- match the existing color simplicity and visual quality

Adjust ONLY the immediate surrounding area when necessary to make the replacement object naturally fit into the environment.

Do not alter unrelated areas of the image.

STRICT REFERENCE LOCK:
- Same environment.
- Same location.
- Same composition.
- Same perspective.
- Same camera angle.
- Same lighting.
- Same atmosphere.
- Same surrounding objects.
- Same visual style.

ONLY replace the specified object.

The final result must look like the SAME original background, except that the specified object has been naturally replaced with the new object.

Output a clean and consistent 2D animation background.`;
        },

        randomize() {
            let targets = [];
            for (let cat in this.targetDatabase) {
                targets = targets.concat(this.targetDatabase[cat]);
            }
            let news = [];
            for (let cat in this.newObjectDatabase) {
                news = news.concat(this.newObjectDatabase[cat]);
            }

            let randomTarget = targets[Math.floor(Math.random() * targets.length)];
            let randomNew = news[Math.floor(Math.random() * news.length)];

            this.targetObject = randomTarget.desc;
            this.newObject = randomNew.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>