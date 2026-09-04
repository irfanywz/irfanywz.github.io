---
title: "Shirt Replacement"
slug: "outfit-baju"
description: "Prompt builder untuk mengganti pakaian atas karakter animasi"
icon: "icon-[ri--t-shirt-line]"
categories:
  - "Outfit"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="shirtApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--t-shirt-line] text-indigo-600 dark:text-indigo-400"></i> Top / Shirt Replacement Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Shirt </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">New Upper-Body Clothing Description</label> <div class="relative flex items-center"> <input type="text" x-model="shirtDesc" placeholder="e.g. He is wearing a vintage thrifted graphic t-shirt with bold 'Cosmic Journey 1973' typography." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari List Baju"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Baju Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Deskripsi Baju Doang </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal / Offcanvas Picker Database Kategori Baju --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori & Jenis Baju</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in shirtDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body (List Grid Card dengan Gambar Preview Besar) --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in shirtDatabase[activeCategory]" :key="item.title"> <div @click="selectShirt(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function shirtApp() {
    return {
        shirtDesc: 'He is wearing a vintage thrifted graphic t-shirt with bold "Cosmic Journey 1973" typography.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Graphic Print',

        shirtDatabase: {
            "Graphic Print": [
                { 
                    title: "Motorcycle Illustration", 
                    desc: "He is wearing a faded black graphic t-shirt with a large vintage motorcycle illustration.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Graphic</text></svg>'
                },
                { 
                    title: "Tiger Chest Print", 
                    desc: "He is wearing a white graphic t-shirt with a small illustrated tiger on the chest.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Tiger</text></svg>'
                },
                { 
                    title: "Distressed Rock Band", 
                    desc: "He is wearing a vintage graphic t-shirt with a distressed rock band illustration.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Rock Band</text></svg>'
                }
            ],
            "Typography": [
                { 
                    title: "Cosmic Journey 1973", 
                    desc: 'He is wearing a vintage thrifted graphic t-shirt with bold "Cosmic Journey 1973" typography.',
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Cosmic</text></svg>'
                },
                { 
                    title: "Road King Block Letters", 
                    desc: 'He is wearing a faded black t-shirt with large white block lettering reading "ROAD KING."',
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Road King</text></svg>'
                },
                { 
                    title: "Retro Gray Letters", 
                    desc: "He is wearing a worn-out gray t-shirt with small retro lettering across the chest.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Retro</text></svg>'
                }
            ],
            "Logo Design": [
                { 
                    title: "Embroidered Polo", 
                    desc: "He is wearing a dark green polo shirt with a small embroidered company logo on the chest.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Polo</text></svg>'
                },
                { 
                    title: "Motorcycle Club Back", 
                    desc: "He is wearing a black t-shirt with a large motorcycle club emblem printed on the back.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Emblem</text></svg>'
                },
                { 
                    title: "Retro Badge Logo", 
                    desc: "He is wearing a faded red t-shirt with a small retro badge logo on the chest.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Badge</text></svg>'
                }
            ],
            "Illustration": [
                { 
                    title: "Eagle & Flame", 
                    desc: "He is wearing a black graphic t-shirt with a bold eagle and flame illustration.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Eagle</text></svg>'
                },
                { 
                    title: "Mountain Landscape", 
                    desc: "He is wearing a faded brown t-shirt with a vintage mountain landscape illustration.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Mountain</text></svg>'
                },
                { 
                    title: "Cartoon Character", 
                    desc: "He is wearing a dark gray t-shirt with a cartoon character illustration on the front.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Cartoon</text></svg>'
                }
            ],
            "Vintage": [
                { 
                    title: "California Road Trip", 
                    desc: 'He is wearing a faded vintage graphic t-shirt with retro "California Road Trip" lettering.',
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">California</text></svg>'
                },
                { 
                    title: "1980s Racing Graphic", 
                    desc: "He is wearing a thrifted black t-shirt with a distressed 1980s-style racing graphic.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Racing</text></svg>'
                },
                { 
                    title: "Worn Gray Biker", 
                    desc: "He is wearing a worn gray t-shirt with faded retro typography and a small motorcycle illustration.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Biker</text></svg>'
                }
            ],
            "Music": [
                { 
                    title: "Heavy Metal Distressed", 
                    desc: "He is wearing a faded black band t-shirt with a distressed heavy-metal graphic.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Metal</text></svg>'
                },
                { 
                    title: "Concert Tour Typography", 
                    desc: "He is wearing a vintage concert t-shirt with bold tour typography across the front.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Tour</text></svg>'
                },
                { 
                    title: "Skull Rock Band", 
                    desc: "He is wearing a black rock band graphic t-shirt with a large skull illustration.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Skull</text></svg>'
                }
            ],
            "Motorcycle": [
                { 
                    title: "Vintage Biker Club", 
                    desc: "He is wearing a faded gray biker t-shirt with a motorcycle club emblem and distressed lettering.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Club</text></svg>'
                },
                { 
                    title: "Road Kings Racing", 
                    desc: 'He is wearing a dark graphic t-shirt with a vintage racing motorcycle and bold "Road Kings" typography.',
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Road Kings</text></svg>'
                },
                { 
                    title: "Skull & Crossbones", 
                    desc: "He is wearing a faded black graphic t-shirt with a large distressed skull-and-crossbones print.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Crossbones</text></svg>'
                }
            ],
            "Pattern & Casual": [
                { 
                    title: "Plaid Button-Up", 
                    desc: "He is wearing a loose-fitting red-and-black plaid button-up shirt.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Plaid</text></svg>'
                },
                { 
                    title: "Vertical Stripes", 
                    desc: "He is wearing a faded blue shirt with thin vertical stripes.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Stripes</text></svg>'
                },
                { 
                    title: "Tropical Floral Print", 
                    desc: "He is wearing a short-sleeve shirt with a muted tropical floral print.",
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Floral</text></svg>'
                }
            ]
        },

        openPicker() {
            this.showModal = true;
        },

        selectShirt(desc) {
            this.shirtDesc = desc;
            this.showModal = false;
        },
        
        get generatedDesc() {
            if (!this.shirtDesc) return 'He is wearing a simple plain t-shirt.';
            let cleaned = this.shirtDesc.trim();
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + (cleaned.endsWith('.') ? '' : '.');
        },

        get fullPrompt() {
            return `TOP / SHIRT REPLACEMENT
Use the attached character image as the STRICT CHARACTER REFERENCE.
Create the EXACT SAME CHARACTER with new upper-body clothing.
NEW TOP:
[${this.generatedDesc}]
Replace ONLY the character's upper-body clothing with the new clothing described above.
CHARACTER AND LOWER CLOTHING LOCK — DO NOT CHANGE:
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
- original pants, skirt, shorts, or other lower-body clothing
- original footwear
- original accessories unless they are part of the upper-body clothing
ONLY CHANGE:
- shirt
- t-shirt
- blouse
- polo shirt
- jacket
- sweater
- hoodie
- cardigan
- dress top or other upper-body clothing specified in [NEW TOP]
The new upper-body clothing must naturally fit the character's existing body shape and proportions.
Follow the new clothing description accurately, including important colors, patterns, sleeves, collar, and visible details.
Keep the same visual style:
- simple 2D cartoon
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal details
- slightly handmade line quality
- animation-friendly design
Do not change the pants, skirt, shorts, or other lower-body clothing.
Do not change the footwear.
Do not redesign the character.
Do not change the face.
Do not change the hairstyle.
Do not change the body.
Do not change the pose.
Do not change the camera angle.
Do not add props, extra characters, or text.
The ONLY intended change is the upper-body clothing.`;
        },

        randomize() {
            let allShirts = [];
            for (let cat in this.shirtDatabase) {
                allShirts = allShirts.concat(this.shirtDatabase[cat]);
            }
            let randomItem = allShirts[Math.floor(Math.random() * allShirts.length)];
            this.shirtDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>