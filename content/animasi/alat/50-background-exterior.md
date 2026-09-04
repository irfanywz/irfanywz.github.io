---
title: "Background Exterior"
slug: "background-exterior"
description: "Prompt builder untuk membuat background environment animasi 2D gaya lokal"
icon: "icon-[ri--landscape-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="backgroundApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--landscape-line] text-indigo-600 dark:text-indigo-400"></i> Background Exterior Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Background </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">New Environment Description</label> <div class="relative flex items-center"> <input type="text" x-model="bgDesc" placeholder="e.g. A small Indonesian village road in front of several modest houses, daytime. SIDE SCROLL VIEW" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari List Background"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Lokasi Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Deskripsi Lokasi Doang </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal / Offcanvas Picker Database Kategori Background --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori & Jenis Environment</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in backgroundDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body (List Grid Card dengan Gambar Preview Besar) --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in backgroundDatabase[activeCategory]" :key="item.title"> <div @click="selectBackground(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function backgroundApp() {
    return {
        bgDesc: 'A small Indonesian village road in front of several modest houses, with a wide open roadside area for character interaction, daytime. SIDE SCROLL VIEW',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Perkampungan & Jalan',

        backgroundDatabase: {
            "Perkampungan & Jalan": [
                { 
                    title: "Jalan Kampung Sederhana", 
                    desc: "A small Indonesian village road in front of several modest houses, with a wide open roadside area for character interaction, daytime. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Jalan</text></svg>'
                },
                { 
                    title: "Gang Sempit Perumahan", 
                    desc: "A narrow neighborhood alleyway between small suburban houses with potted plants and brick walls, daytime. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Gang</text></svg>'
                },
                { 
                    title: "Pos Ronda & Lapangan", 
                    desc: "A neighborhood security post (pos ronda) next to a grassy village courtyard with large shady trees, daytime. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Pos Ronda</text></svg>'
                }
            ],
            "Warung & Komersial Lokal": [
                { 
                    title: "Warung Kelontong Madura", 
                    desc: "The storefront of a local Indonesian neighborhood grocery warung with colorful product shelves visible through the glass, daytime. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Warung</text></svg>'
                },
                { 
                    title: "Warung Kopi / Warkop", 
                    desc: "A traditional roadside coffee shop (warkop) with wooden benches, plastic tables, and a kettle display, daytime. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Warkop</text></svg>'
                },
                { 
                    title: "Pangkalan Tukang Ojek", 
                    desc: "A shady roadside shelter with a bench and an old motorcycle parked next to a small drink stall, daytime. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Ojek</text></svg>'
                }
            ],
            "Pendidikan & Publik": [
                { 
                    title: "Gerbang Sekolah Dasar", 
                    desc: "The colorful metal gate and exterior fence of a local Indonesian elementary school with a paved sidewalk, daytime. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Sekolah</text></svg>'
                },
                { 
                    title: "Halaman Masjid Kampung", 
                    desc: "The outer courtyard wall and entrance archway of a neighborhood mosque with shady mango trees, daytime. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Masjid</text></svg>'
                },
                { 
                    title: "Puskesmas / Balai Warga", 
                    desc: "The front exterior of a modest community hall (balai warga) with a notice board and parking yard, daytime. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Balai</text></svg>'
                }
            ],
            "Alam & Pedesaan": [
                { 
                    title: "Pematang Sawah Hijau", 
                    desc: "A wide open green rice paddy field pathway with distant coconut palm trees and mountains under a blue sky, daytime. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Sawah</text></svg>'
                },
                { 
                    title: "Kebun Pinggir Sungai", 
                    desc: "A quiet riverbank with lush bamboo thickets, a small wooden bridge, and grassy ground, daytime. SIDE SCROLL VIEW",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Sungai</text></svg>'
                }
            ]
        },

        openPicker() {
            this.showModal = true;
        },

        selectBackground(desc) {
            this.bgDesc = desc;
            this.showModal = false;
        },
        
        get generatedDesc() {
            if (!this.bgDesc) return 'A simple outdoor background environment, daytime. SIDE SCROLL VIEW';
            let cleaned = this.bgDesc.trim();
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + (cleaned.endsWith('.') ? '' : '.');
        },

        get fullPrompt() {
            return `Use the attached image as the STRICT STYLE REFERENCE ONLY.

Create a completely NEW outdoor 2D cartoon environment based on this description:

[${this.generatedDesc}]

Do not copy, trace, recreate, recolor, or slightly modify the location, buildings, objects, composition, or layout from the reference image.

Keep ONLY the visual art style of the reference:

* simple 2D cartoon illustration
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal visual details
* slightly handmade line quality
* simple stylized architecture and objects
* clear readable silhouettes
* animation-friendly environment design

Create a completely NEW outdoor location with its own unique environment, layout, buildings, objects, colors, and visual identity based on the provided description.

COMPOSITION:

Create the environment in a clear SIDE VIEW or FRONT 3/4 VIEW, depending on the location.

Design the scene specifically for 2D character animation:

* wide horizontal composition
* clear open ground for characters
* enough empty space for walking and acting
* simple readable environment layout
* clear foreground, middle ground, and background separation
* consistent perspective
* natural scale between buildings, roads, and objects
* important environmental elements clearly visible

ENVIRONMENT DESIGN:

Prioritize recognizable Indonesian surroundings when appropriate:

* local residential architecture
* village houses
* small neighborhood streets
* warung
* roadside structures
* fences
* trees and vegetation
* electrical poles
* simple local environmental details

Keep the environment believable, simple, and suitable for an Indonesian cartoon animation.

ANIMATION PRIORITY:

This image will be used as a MASTER BACKGROUND REFERENCE for animation.

Therefore, prioritize:

* clear environment identity
* simple reusable layout
* readable walking area
* clean object placement
* animation-friendly shapes
* easy-to-understand spatial layout
* consistent proportions
* clear separation between environmental layers

Do not add people, characters, text, logos, or unnecessary vehicles unless specifically requested.

Avoid photorealism, realistic textures, excessive details, complex lighting, dramatic cinematic effects, heavy shadows, gradients, or overly complicated scenery.

The final image must depict a completely NEW environment while clearly belonging to the same cartoon animation style as the reference.

Wide horizontal 16:9 composition, clean 2D animation background, clear readable environment, empty of characters.`;
        },

        randomize() {
            let allBgs = [];
            for (let cat in this.backgroundDatabase) {
                allBgs = allBgs.concat(this.backgroundDatabase[cat]);
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