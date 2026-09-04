---
title: "Background Special"
slug: "background-spesial"
description: "Prompt builder untuk membuat background 2D cartoon bernuansa spesial (spooky, misterius, atau dramatis)"
icon: "icon-[ri--landscape-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="specialBgApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--ghost-line] text-indigo-600 dark:text-indigo-400"></i> Special Environment Prompt Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Scene </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Atmospheric Environment Description</label> <div class="relative flex items-center"> <input type="text" x-model="bgDesc" placeholder="e.g. An eerie abandoned Indonesian kuburan at night with overgrown grass, old crooked mossy headstones, and low fog under a pale crescent moon." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari Preset Atmosphere"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Background Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Deskripsi Background Doang </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Atmosphere --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori Atmosphere Special</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in bgDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in bgDatabase[activeCategory]" :key="item.title"> <div @click="selectBg(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div> </div>

<script>
function specialBgApp() {
    return {
        bgDesc: 'An eerie abandoned Indonesian kuburan at night with overgrown grass, old crooked mossy headstones, and low fog under a pale crescent moon.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Horror & Graveyard',

        bgDatabase: {
            "Horror & Graveyard": [
                { 
                    title: "Kuburan Malam Hari", 
                    desc: "An eerie abandoned Indonesian kuburan at night with overgrown grass, old crooked mossy headstones, and low fog under a pale crescent moon.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236B7280" font-size="12">Kuburan</text></svg>'
                },
                { 
                    title: "Rumah Tua Kosong", 
                    desc: "A creepy abandoned wooden house in a rural Indonesian village at dusk, featuring broken shutters, a leaning porch, and tall dark trees.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236B7280" font-size="12">Rumah Tua</text></svg>'
                },
                { 
                    title: "Pohon Beringin Tua", 
                    desc: "A mysterious ancient banyan tree at night with hanging roots, a small stone shrine covered in moss at its base, and shadowy background.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236B7280" font-size="12">Beringin</text></svg>'
                }
            ],
            "Eerie Forest & Swamp": [
                { 
                    title: "Hutan Bambu Gelap", 
                    desc: "A dark moody bamboo forest path at midnight, illuminated by a faint cool moonlight filtering through dense stalks and light mist.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236B7280" font-size="12">Bambu Gelap</text></svg>'
                },
                { 
                    title: "Rawa-rawa Mistis", 
                    desc: "A foggy swamp landscape with gnarled bare trees, stagnant murky water reflections, and a dim purple-hued twilight sky.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236B7280" font-size="12">Rawa Mistis</text></svg>'
                }
            ],
            "Mysterious Urban": [
                { 
                    title: "Gang Sepi Malam Hari", 
                    desc: "A lonely dimly lit Indonesian alleyway at night with a single flickering streetlight, closed shop shutters, and long moody shadows.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236B7280" font-size="12">Gang Sepi</text></svg>'
                },
                { 
                    title: "Gedung Tua Terbengkalai", 
                    desc: "An abandoned dusty corridor inside an old building, with peeled wall paint, dark doorways, and moonlight beaming through cracked windows.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236B7280" font-size="12">Gedung Tua</text></svg>'
                }
            ],
            "Dramatic Weather": [
                { 
                    title: "Jembatan Tua Saat Badai", 
                    desc: "A dramatic wooden suspension bridge over a dark river during a heavy rainstorm, with swirling wind clouds and dark grey tones.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236B7280" font-size="12">Badai Jembatan</text></svg>'
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
            if (!this.bgDesc) return 'An eerie atmospheric outdoor environment at night with clear open space.';
            let cleaned = this.bgDesc.trim();
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + (cleaned.endsWith('.') ? '' : '.');
        },

        get fullPrompt() {
            return `Use the attached image as the STRICT STYLE REFERENCE ONLY.

Create a completely NEW atmospheric 2D cartoon environment based on this description:


[${this.generatedDesc}]

Do not copy, trace, recreate, recolor, or slightly modify the location, buildings, objects, composition, or layout from the reference image.

Keep ONLY the visual art style of the reference:
- simple 2D cartoon illustration
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal visual details
- slightly handmade line quality
- clear readable silhouettes
- animation-friendly environment design

Create a completely NEW location with its own unique environment, layout, buildings, objects, colors, and atmosphere based on the provided description.

ATMOSPHERE:
The environment may feel:
- mysterious
- eerie
- abandoned
- tense
- dark
- dramatic
- unsettling

depending on the provided description.

Create the atmosphere mainly through:
- environmental composition
- simplified lighting
- darker color relationships
- weather conditions
- sky appearance
- fog or environmental effects when appropriate
- stylized shadows

Do not change the fundamental cartoon art style into photorealism or cinematic realism.

COMPOSITION:
Design the environment specifically for 2D animation:
- wide horizontal composition
- clear space for characters
- readable foreground, middle ground, and background
- important environmental elements clearly visible
- consistent perspective
- uncluttered scene layout
- animation-friendly object placement

ANIMATION PRIORITY:
This image will be used as a MASTER BACKGROUND REFERENCE for animation.

Therefore, prioritize:
- clear environment identity
- readable acting space
- simple reusable layout
- strong visual atmosphere
- recognizable environmental silhouettes
- consistent proportions
- animation-friendly shapes
- clear separation between environmental elements

Do not add people, characters, monsters, ghosts, text, or logos unless specifically requested.

Avoid photorealism, realistic textures, excessive environmental detail, overly complex cinematic lighting, or highly realistic rendering.

The final image must depict a completely NEW environment while clearly belonging to the same cartoon animation style as the reference.

Wide horizontal 16:9 composition, atmospheric 2D animation background, clear readable environment, empty of characters.`;
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