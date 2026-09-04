---
title: "Props Picker"
slug: "props"
description: "Prompt builder untuk membuat objek atau props animasi original"
icon: "icon-[ri--box-3-line]"
categories:
  - "Props"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="propsPickerApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--box-3-line] text-indigo-600 dark:text-indigo-400"></i> Props Picker & Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Prop </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">New Object / Prop Description</label> <div class="relative flex items-center"> <input type="text" x-model="propDesc" placeholder="e.g. A vintage wooden treasure chest with brass locks and gold coins spilling out." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari List Prop"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Prop Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Deskripsi Prop Doang </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal / Offcanvas Picker Database Kategori Props --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori & Jenis Prop</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown / List Select (Pengganti Tab) --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in propsDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body (List Grid Item) --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in propsDatabase[activeCategory]" :key="item.title"> <div @click="selectProp(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-20 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div> </div>

<script>
function propsPickerApp() {
    return {
        propDesc: 'A vintage wooden treasure chest with brass locks and gold coins spilling out.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Peralatan & Tas',

        // Database Props / Objek Animasi
        propsDatabase: {
            "Peralatan & Tas": [
                { 
                    title: "Treasure Chest", 
                    desc: "A vintage wooden treasure chest with brass locks and gold coins spilling out.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Chest</text></svg>' 
                },
                { 
                    title: "School Backpack", 
                    desc: "A classic canvas school backpack with front pockets and zipper details.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Backpack</text></svg>' 
                },
                { 
                    title: "Toolbox Besi", 
                    desc: "A red metal mechanical toolbox with a sturdy top handle and latch lock.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Toolbox</text></svg>' 
                }
            ],
            "Elektronik & Gadget": [
                { 
                    title: "Retro Television", 
                    desc: "An old-school bulky CRT television set with dial knobs and a small antenna.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">TV</text></svg>' 
                },
                { 
                    title: "Vintage Camera", 
                    desc: "A classic retro rangefinder camera with a prominent lens and silver dials.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Camera</text></svg>' 
                },
                { 
                    title: "Boombox Radio", 
                    desc: "A vintage 80s ghetto blaster boombox with dual cassette decks and large speakers.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Radio</text></svg>' 
                }
            ],
            "Makanan & Minuman": [
                { 
                    title: "Kue Tart / Cake", 
                    desc: "A round birthday cake with white frosting, strawberry toppings, and lit candles.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Cake</text></svg>' 
                },
                { 
                    title: "Gelas Kopi / Mug", 
                    desc: "A ceramic coffee mug with steam rising from hot dark coffee inside.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Mug</text></svg>' 
                },
                { 
                    title: "Keranjang Buah", 
                    desc: "A woven wicker basket filled with apples, bananas, and grapes.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Fruit</text></svg>' 
                }
            ],
            "Tanaman & Alam": [
                { 
                    title: "Pot Tanaman Kaktus", 
                    desc: "A small terracotta pot containing a cute green cactus with little spines.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Cactus</text></svg>' 
                },
                { 
                    title: "Batu Kristal", 
                    desc: "A cluster of glowing purple gemstone crystals emerging from raw rock.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Crystal</text></svg>' 
                }
            ]
        },

        openPicker() {
            this.showModal = true;
        },

        selectProp(desc) {
            this.propDesc = desc;
            this.showModal = false;
        },
        
        get generatedDesc() {
            if (!this.propDesc) return 'A simple wooden crate.';
            let cleaned = this.propDesc.trim();
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + (cleaned.endsWith('.') ? '' : '.');
        },

        get fullPrompt() {
            return `Use the attached image as the STRICT STYLE REFERENCE ONLY.
Create a completely NEW OBJECT / PROP based on this description:
[${this.generatedDesc}]
The new object must have a unique shape, structure, proportions, silhouette, details, materials, colors, and identity. Do not copy, recolor, or slightly modify any object from the reference.
Keep ONLY the SAME VISUAL ART STYLE, DRAWING LANGUAGE, AND DESIGN APPROACH of the reference:

simple 2D cartoon
thick black outlines
flat solid colors
clean simple shapes
minimal details
slightly handmade line quality
clear readable design
animation-friendly construction
DESIGN:
Create the object in a clear FRONT 3/4 VIEW, facing slightly to the right when applicable.
Show the complete object clearly:

full object visible
clear overall shape
clear silhouette
natural proportions
readable construction
important functional parts clearly visible
simple clean details
no unnecessary complexity
The object should be designed as a standalone animation prop, with a clear and recognizable shape that can easily be reused in different scenes and poses.
This image will be used as the MASTER PROP REFERENCE for generating other views, variations, and uses later.
Therefore, prioritize:

clear object identity
consistent proportions
clear construction
recognizable shape
distinctive silhouette
readable functional parts
consistent colors and materials
simple visual details
animation-friendly shapes
strong visual consistency with the reference style
Do not add characters, text, labels, extra objects, dynamic movement, or complex background.
The final object must look like a completely original prop, while feeling as if it was designed and illustrated by the same artist using the same visual style and design language as the reference.
Centered composition, complete object visible, clean simple background.`;
        },

        randomize() {
            let allProps = [];
            for (let cat in this.propsDatabase) {
                allProps = allProps.concat(this.propsDatabase[cat]);
            }
            let randomItem = allProps[Math.floor(Math.random() * allProps.length)];
            this.propDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>