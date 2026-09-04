---
title: "Background Angle"
slug: "background-angle"
description: "Prompt builder khusus untuk mengatur sudut pandang kamera (camera angle) pada background 2D cartoon"
icon: "icon-[ri--vidicon-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="backgroundAngleApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--vidicon-line] text-indigo-600 dark:text-indigo-400"></i> Background Camera Angle Prompt Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Angle </button> </div> <!-- Single Input: Camera Angle --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Camera View / Angle Description</label> <div class="relative flex items-center"> <input type="text" x-model="angleDesc" placeholder="e.g. A top-down perspective view looking straight down..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="showModal = true" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Sudut Kamera"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Ringkasan Sudut --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Ringkasan Angle </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Sudut Kamera --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori Sudut Kamera</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in angleDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in angleDatabase[activeCategory]" :key="item.title"> <div @click="selectItem(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function backgroundAngleApp() {
    return {
        angleDesc: 'A top-down perspective view looking straight down at the entire layout and ground arrangement.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Standard Angles',

        angleDatabase: {
            "Standard Angles": [
                { 
                    title: "Top-Down", 
                    desc: "A top-down perspective view looking straight down at the entire layout and ground arrangement.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="11">Top-Down</text></svg>'
                },
                { 
                    title: "Side Scroller", 
                    desc: "A classic side scroller profile view showing a flat lateral cross-section of the environment from left to right.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="11">Side Scroller</text></svg>'
                },
                { 
                    title: "Isometric", 
                    desc: "An isometric angle view displaying a 3D-like diagonal projection with parallel lines and equal foreshortening.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="11">Isometric</text></svg>'
                },
                { 
                    title: "Birds-Eye View", 
                    desc: "A high elevated birds-eye view looking far down over the expansive geography and structure layouts.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="11">Birds-Eye</text></svg>'
                }
            ],
            "Cinematic & Camera POV": [
                { 
                    title: "First Person", 
                    desc: "A first-person perspective camera angle as if viewing directly through the eyes of a character standing inside the space.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234B5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23D1D5DB" font-size="11">First Person</text></svg>'
                },
                { 
                    title: "Third Person", 
                    desc: "A third-person over-the-shoulder or trailing camera angle framing the background environment behind an implied character spot.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234B5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23D1D5DB" font-size="11">Third Person</text></svg>'
                },
                { 
                    title: "Fixed Camera", 
                    desc: "A fixed static security or room camera angle locked securely from a single wide corner viewpoint.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234B5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23D1D5DB" font-size="11">Fixed Camera</text></svg>'
                },
                { 
                    title: "Low Angle", 
                    desc: "A low angle view looking slightly upward at the front structure to give a grander perspective.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234B5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23D1D5DB" font-size="11">Low Angle</text></svg>'
                }
            ]
        },

        selectItem(desc) {
            this.angleDesc = desc;
            this.showModal = false;
        },

        get generatedDesc() {
            let angle = this.angleDesc ? this.angleDesc.trim() : 'Default angle.';
            return `Camera Angle: [${angle}]`;
        },

        get fullPrompt() {
            let angle = this.angleDesc ? this.angleDesc.trim() : 'A top-down perspective view looking straight down at the entire layout and ground arrangement.';

            return `Use the attached image as the STRICT ENVIRONMENT REFERENCE.

Recreate the SAME environment from a different camera viewpoint based on:

[${angle}]

Preserve the original environment identity and all important environmental elements.

Do NOT redesign the location or create a different environment.

Keep consistent:
- buildings
- roads
- furniture
- trees
- major objects
- object proportions
- environmental layout
- architectural design
- colors
- visual style
- linework
- overall scene identity

Adjust the visible surfaces and spatial relationships naturally according to the requested camera viewpoint.

Maintain a clean 2D cartoon animation style with:
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal details
- slightly handmade line quality
- animation-friendly environment design

Do not add characters, text, logos, new buildings, or unrelated objects.

Do not randomly move or redesign existing environmental elements.

The result must look like the SAME location viewed from a different camera position.

Output a clean animation background with consistent environment design and the requested camera viewpoint.`;
        },

        randomize() {
            let angles = [];
            for (let cat in this.angleDatabase) {
                angles = angles.concat(this.angleDatabase[cat]);
            }
            let randomAngle = angles[Math.floor(Math.random() * angles.length)];
            this.angleDesc = randomAngle.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>