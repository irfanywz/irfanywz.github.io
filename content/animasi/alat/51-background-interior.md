---
title: "Background Interior"
slug: "background-interior"
description: "Prompt builder untuk membuat background interior ruangan 2D cartoon"
icon: "icon-[ri--landscape-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="backgroundApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--home-line] text-indigo-600 dark:text-indigo-400"></i> Indoor Background Prompt Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Room </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Indoor Environment Description</label> <div class="relative flex items-center"> <input type="text" x-model="bgDesc" placeholder="e.g. A cozy traditional Indonesian living room with a rattan armchair, wooden coffee table, and a small ceramic jar." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari List Ruangan"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Background Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Deskripsi Background Doang </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal / Offcanvas Picker Database Kategori Background Interior --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori & Jenis Ruangan Interior</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in bgDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body (List Grid Card dengan Gambar Preview Besar) --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in bgDatabase[activeCategory]" :key="item.title"> <div @click="selectBg(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function backgroundApp() {
    return {
        bgDesc: 'A cozy traditional Indonesian living room with a rattan armchair, wooden coffee table, and a small ceramic jar.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Living Room',

        bgDatabase: {
            "Living Room": [
                { 
                    title: "Traditional Living Room", 
                    desc: "A cozy traditional Indonesian living room with a rattan armchair, wooden coffee table, and a small ceramic jar.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Living Room</text></svg>'
                },
                { 
                    title: "Minimalist Lounge", 
                    desc: "A clean minimalist apartment living room featuring a low sofa, a simple abstract wall painting, and a potted indoor plant.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Lounge</text></svg>'
                },
                { 
                    title: "Retro 90s Sitting Room", 
                    desc: "A retro 1990s Indonesian home sitting room with a box television on a wooden rack, patterned curtains, and a vinyl record shelf.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Retro Room</text></svg>'
                }
            ],
            "Bedroom": [
                { 
                    title: "Simple Bedroom", 
                    desc: "A simple tidy bedroom with a single wooden bed, a bedside table with a small desk lamp, and a small clothing wardrobe.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Bedroom</text></svg>'
                },
                { 
                    title: "Cozy Attic Room", 
                    desc: "A cozy sloped-ceiling attic bedroom with a mattress on the floor, a stack of books, and a round window looking outside.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Attic</text></svg>'
                }
            ],
            "Kitchen & Dining": [
                { 
                    title: "Indonesian Dapur", 
                    desc: "A traditional Indonesian kitchen with a brick stove counter, hanging traditional woven baskets, and clay kitchen utensils.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Kitchen</text></svg>'
                },
                { 
                    title: "Simple Dining Room", 
                    desc: "A simple dining room featuring a square wooden table, four matching chairs, and a small wall cabinet with glassware.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Dining</text></svg>'
                }
            ],
            "Office & Workshop": [
                { 
                    title: "Creative Workroom", 
                    desc: "A modest creative workroom with an old wooden desk, a desktop computer setup, and shelves neatly stacked with sketchbooks.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Workroom</text></svg>'
                },
                { 
                    title: "Repair Workshop", 
                    desc: "A small electronics repair workshop with a workbench, various tools hanging on a pegboard, and spare equipment parts.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Workshop</text></svg>'
                }
            ],
            "Shop & Store": [
                { 
                    title: "Traditional Warung", 
                    desc: "A small neighborhood warung interior with wooden shelves containing snack jars, glass bottles, and a display counter.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Warung</text></svg>'
                },
                { 
                    title: "Vintage Bookstore", 
                    desc: "A cozy old bookstore interior filled with tall wooden bookshelves, a reading desk, and a vintage table lamp.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Bookstore</text></svg>'
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
            if (!this.bgDesc) return 'A clean indoor room with simple furniture and clear open floor space.';
            let cleaned = this.bgDesc.trim();
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + (cleaned.endsWith('.') ? '' : '.');
        },

        get fullPrompt() {
            return `Use the attached image as the STRICT STYLE REFERENCE ONLY.

Create a completely NEW indoor 2D cartoon environment based on this description:

[${this.generatedDesc}]

Do not copy, trace, recreate, recolor, or slightly modify the room, furniture, objects, composition, or layout from the reference image.

Keep ONLY the visual art style of the reference:
- simple 2D cartoon illustration
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal visual details
- slightly handmade line quality
- simple stylized furniture and objects
- clear readable silhouettes
- animation-friendly environment design

Create a completely NEW interior with its own unique room layout, furniture arrangement, objects, colors, and environmental identity based on the provided description.

COMPOSITION:
Create the room in a clear SIDE VIEW or FRONT 3/4 VIEW suitable for 2D character animation.

Design the room with:
- wide horizontal composition
- clear visible floor area
- enough open space for characters
- clear wall and floor separation
- readable furniture placement
- simple consistent perspective
- important objects clearly visible
- uncluttered composition

ROOM DESIGN:
The environment should feel believable and functional.
Include only objects that naturally belong in the location described.

Prioritize:
- clear room identity
- simple furniture arrangement
- readable object placement
- enough empty acting space
- animation-friendly proportions
- easy-to-understand spatial layout

When appropriate, reflect everyday Indonesian environments and local interior details.

ANIMATION PRIORITY:
This image will be used as a MASTER BACKGROUND REFERENCE for animation.

Therefore, prioritize:
- clear floor space for characters
- clean composition
- reusable room layout
- consistent perspective
- readable furniture and props
- simple shapes
- easy separation between walls, floor, furniture, and objects

Do not add people, characters, text, logos, or unnecessary objects unless specifically requested.

Avoid photorealism, realistic textures, excessive decoration, complex lighting, dramatic shadows, gradients, cinematic effects, or overly detailed interiors.

The final image must depict a completely NEW environment while clearly belonging to the same cartoon animation style as the reference.

Wide horizontal 16:9 composition, clean 2D animation background, clear room layout, empty of characters.`;
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