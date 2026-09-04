---
title: "Pants Replacement"
slug: "outfit-celana"
description: "Prompt builder untuk mengganti pakaian bawah atau celana karakter animasi"
icon: "icon-[ri--scissors-line]"
categories:
  - "Outfit"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="pantsApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--pants-line] text-indigo-600 dark:text-indigo-400"></i> Bottom / Pants Replacement Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Pants </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">New Lower-Body Clothing Description</label> <div class="relative flex items-center"> <input type="text" x-model="pantsDesc" placeholder="e.g. He is wearing classic blue denim jeans with contrast stitching and rolled-up cuffs." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari List Celana"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Celana Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Deskripsi Celana Doang </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal / Offcanvas Picker Database Kategori Celana --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori & Jenis Celana</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in pantsDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body (List Grid Card dengan Gambar Preview Besar) --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in pantsDatabase[activeCategory]" :key="item.title"> <div @click="selectPants(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function pantsApp() {
    return {
        pantsDesc: 'He is wearing classic blue denim jeans with contrast stitching and rolled-up cuffs.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Denim & Jeans',

        pantsDatabase: {
            "Denim & Jeans": [
                { 
                    title: "Classic Blue Jeans", 
                    desc: "He is wearing classic blue denim jeans with contrast stitching and rolled-up cuffs.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Jeans</text></svg>'
                },
                { 
                    title: "Distressed Black Jeans", 
                    desc: "He is wearing faded black slim-fit jeans with light knee distress marks.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Black Jeans</text></svg>'
                },
                { 
                    title: "Vintage Washed Denim", 
                    desc: "He is wearing loose-fitting light-wash vintage denim jeans.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Vintage</text></svg>'
                }
            ],
            "Casual Trousers": [
                { 
                    title: "Khaki Chinos", 
                    desc: "He is wearing straight-fit khaki cotton chino trousers with side pockets.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Chinos</text></svg>'
                },
                { 
                    title: "Dark Slacks", 
                    desc: "He is wearing formal dark grey office trousers with a clean crease line.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Slacks</text></svg>'
                },
                { 
                    title: "Relaxed Fit Cords", 
                    desc: "He is wearing wide-wale brown corduroy trousers.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Cords</text></svg>'
                }
            ],
            "Cargo & Utility": [
                { 
                    title: "Olive Green Cargo", 
                    desc: "He is wearing multi-pocket olive green tactical cargo pants.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Cargo</text></svg>'
                },
                { 
                    title: "Utility Work Pants", 
                    desc: "He is wearing durable beige canvas work pants with hammer loops.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Work Pants</text></svg>'
                },
                { 
                    title: "Dark Grey Cargo", 
                    desc: "He is wearing relaxed utility cargo pants with large side leg pockets.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Dark Cargo</text></svg>'
                }
            ],
            "Shorts": [
                { 
                    title: "Denim Cutoff Shorts", 
                    desc: "He is wearing casual knee-length blue denim shorts with frayed hems.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Shorts</text></svg>'
                },
                { 
                    title: "Cargo Shorts", 
                    desc: "He is wearing outdoor khaki cargo shorts with side pockets.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Cargo Shorts</text></svg>'
                },
                { 
                    title: "Athletic Gym Shorts", 
                    desc: "He is wearing sporty dark athletic mesh shorts with a white drawstring.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Gym Shorts</text></svg>'
                }
            ],
            "Traditional & Cultural": [
                { 
                    title: "Batik Sarong", 
                    desc: "He is wearing a traditional dark-patterned batik sarong wrap around the lower body.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Sarong</text></svg>'
                },
                { 
                    title: "Ethnic Cloth Wrap", 
                    desc: "He is wearing a woven cultural woven fabric wrap skirt.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Wrap</text></svg>'
                }
            ],
            "Track & Sweatpants": [
                { 
                    title: "Grey Joggers", 
                    desc: "He is wearing comfortable light grey cotton sweatpants with elastic cuffs.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Joggers</text></svg>'
                },
                { 
                    title: "Track Pants with Stripes", 
                    desc: "He is wearing dark athletic track pants featuring side racing stripes.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Track Pants</text></svg>'
                }
            ]
        },

        openPicker() {
            this.showModal = true;
        },

        selectPants(desc) {
            this.pantsDesc = desc;
            this.showModal = false;
        },
        
        get generatedDesc() {
            if (!this.pantsDesc) return 'He is wearing simple plain pants.';
            let cleaned = this.pantsDesc.trim();
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + (cleaned.endsWith('.') ? '' : '.');
        },

        get fullPrompt() {
            return `BOTTOM / PANTS REPLACEMENT
Use the attached character image as the STRICT CHARACTER REFERENCE.
Create the EXACT SAME CHARACTER with new lower-body clothing.
NEW BOTTOM:
[${this.generatedDesc}]
Replace ONLY the character's lower-body clothing with the new clothing described above.
CHARACTER AND UPPER CLOTHING LOCK — DO NOT CHANGE:
- exact same character identity
- exact same head and face
- exact same facial features
- exact same face shape
- exact same hairstyle and hair shape
- exact same hair color
- exact same skin tone
- exact same body shape
- exact same body proportions
- exact same age
- exact same pose
- exact same body position
- exact same camera angle
- exact same 3/4 front view facing slightly right
- exact same art style
KEEP EXACTLY THE SAME:
- original shirt, t-shirt, blouse, jacket, sweater, hoodie, or other upper-body clothing
- original footwear
- original accessories unless they are part of the lower-body clothing
ONLY CHANGE:
- pants
- trousers
- jeans
- shorts
- skirt
- sarong
- or other lower-body clothing specified in [NEW BOTTOM]
The new lower-body clothing must naturally fit the character's existing body shape, proportions, and leg position.
Follow the new clothing description accurately, including important colors, length, shape, patterns, and visible details.
Keep the same visual style:
- simple 2D cartoon
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal details
- slightly handmade line quality
- animation-friendly design
Do not change the upper-body clothing.
Do not change the footwear.
Do not redesign the character.
Do not change the face.
Do not change the hairstyle.
Do not change the body.
Do not change the pose.
Do not change the camera angle.
Do not add props, extra characters, or text.
The ONLY intended change is the lower-body clothing.`;
        },

        randomize() {
            let allPants = [];
            for (let cat in this.pantsDatabase) {
                allPants = allPants.concat(this.pantsDatabase[cat]);
            }
            let randomItem = allPants[Math.floor(Math.random() * allPants.length)];
            this.pantsDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>