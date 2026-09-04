---
title: "Outfit Picker"
slug: "outfit-prompt"
description: "Prompt builder untuk mengubah pakaian karakter"
icon: "icon-[ri--t-shirt-line]"
categories:
  - "Outfit"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="outfitPickerApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--t-shirt-line] text-indigo-600 dark:text-indigo-400"></i> Outfit Picker & Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Outfit </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">New Outfit Description</label> <div class="relative flex items-center"> <input type="text" x-model="outfitDesc" placeholder="e.g. Pinafore dress maroon FULL BODY, Turtleneck stripe hitam putih, black sandals." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari List Outfit"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Outfit Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Deskripsi Outfit Doang </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal / Offcanvas Picker Database Kategori Outfit --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori Outfit Karakter</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Tab Kategori Pria, Wanita, Universal --> <div class="flex border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-6 gap-2 pt-3"> <template x-for="(cat, catName) in outfitDatabase" :key="catName"> <button @click="activeCategory = catName" :class="activeCategory === catName ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 shadow-xs' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'" class="px-4 py-2 text-xs font-semibold border-b-2 rounded-t-xl transition cursor-pointer uppercase tracking-wider" x-text="catName"> </button> </template> </div> <!-- Modal Body (List Grid Item) --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in outfitDatabase[activeCategory]" :key="item.title"> <div @click="selectOutfit(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-20 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function outfitPickerApp() {
    return {
        outfitDesc: 'Pinafore dress maroon FULL BODY, Turtleneck stripe hitam putih, black sandals.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Universal',

        // Database Outfit Kategori: Universal, Pria, Wanita
        outfitDatabase: {
            "Universal": [
                { 
                    title: "Casual Pinafore", 
                    desc: "Pinafore dress maroon FULL BODY, Turtleneck stripe hitam putih, black sandals.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Pinafore</text></svg>' 
                },
                { 
                    title: "Hoodie Streetwear", 
                    desc: "Oversized black hoodie, dark denim jeans, white sneakers.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Hoodie</text></svg>' 
                },
                { 
                    title: "Sporty Tracksuit", 
                    desc: "Green tracksuit jacket with white stripes, matching sweatpants, running shoes.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Tracksuit</text></svg>' 
                },
                { 
                    title: "Seragam Sekolah SMA", 
                    desc: "White short-sleeve shirt, grey pleated skirt FULL BODY, black belt, white socks, black shoes.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">School</text></svg>' 
                },
                { 
                    title: "Jas Formal", 
                    desc: "Dark navy formal blazer FULL BODY, crisp white button-up shirt, matching dress pants, black leather shoes.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Suit</text></svg>' 
                },
                { 
                    title: "Seragam Pemadam Kebakaran", 
                    desc: "Heavy-duty orange firefighter turnout gear FULL BODY with yellow-silver reflective stripes, safety helmet, heavy boots.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Fire</text></svg>' 
                },
                { 
                    title: "Seragam Polisi", 
                    desc: "Dark brown tactical police uniform FULL BODY, utility belt with holster, police cap, combat boots.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Police</text></svg>' 
                },
                { 
                    title: "Jas Lab Dokter", 
                    desc: "White medical laboratory coat FULL BODY over blue scrubs, stethoscope around the neck, white clean sneakers.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Doctor</text></svg>' 
                },
                { 
                    title: "Pakaian Pilot", 
                    desc: "White pilot shirt with epaulets, black tie, black formal trousers FULL BODY, pilot cap, polished shoes.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Pilot</text></svg>' 
                },
                { 
                    title: "Pakaian Chef / Koki", 
                    desc: "Traditional double-breasted white chef jacket FULL BODY, black and white houndstooth chef pants, apron, slip-resistant shoes.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Chef</text></svg>' 
                },
                { 
                    title: "Kostum Astronot", 
                    desc: "White bulky astronaut space suit FULL BODY with NASA patches, helmet with golden tinted visor, heavy boots.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Space</text></svg>' 
                },
                { 
                    title: "Pakaian Militer / Tentara", 
                    desc: "Green camouflage tactical military uniform FULL BODY, tactical vest, combat helmet, rugged combat boots.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Army</text></svg>' 
                }
            ],
            "Pria": [
                { 
                    title: "Simple Casual Tee", 
                    desc: "Plain white t-shirt, blue chinos, casual loafers.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Tee</text></svg>' 
                },
                { 
                    title: "Formal Suit", 
                    desc: "Dark grey blazer, crisp white button-up shirt, matching formal trousers, leather shoes.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Suit</text></svg>' 
                },
                { 
                    title: "Bomber Jacket Style", 
                    desc: "Olive green bomber jacket, black graphic t-shirt, distressed denim jeans, combat boots.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Bomber</text></svg>' 
                }
            ],
            "Wanita": [
                { 
                    title: "Summer Floral Dress", 
                    desc: "Light blue floral midi dress with short sleeves, white strap sandals.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Floral</text></svg>' 
                },
                { 
                    title: "Knitted Cardigan Set", 
                    desc: "Pastel pink oversized knit cardigan, white crop top, high-waisted pleated skirt, sneakers.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Cardigan</text></svg>' 
                },
                { 
                    title: "Chic Blazer & Skirt", 
                    desc: "Beige blazer over a black fitted top, plaid midi skirt, ankle boots.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Blazer</text></svg>' 
                }
            ]
        },

        openPicker() {
            this.showModal = true;
        },

        selectOutfit(desc) {
            this.outfitDesc = desc;
            this.showModal = false;
        },
        
        get generatedDesc() {
            if (!this.outfitDesc) return 'casual t-shirt and jeans.';
            let cleaned = this.outfitDesc.trim();
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + (cleaned.endsWith('.') ? '' : '.');
        },

        get fullPrompt() {
            return `**OUTFIT REPLACEMENT**

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** wearing the new outfit described below.

**NEW OUTFIT:**
[${this.generatedDesc}]

Replace the character's current clothing with the new outfit.

The new outfit must naturally fit the character's existing body shape, proportions, age, and anatomy.

**CHARACTER LOCK — DO NOT CHANGE:**

* exact same character identity
* exact same head and face
* exact same facial features
* exact same face shape
* exact same hairstyle and hair shape
* exact same hair color
* exact same skin tone
* exact same body shape
* exact same body proportions
* exact same age
* exact same pose
* exact same body position
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

**OUTFIT RULES:**

* change ONLY the clothing and footwear
* follow the outfit description accurately
* adapt the clothing naturally to the character's body
* keep the outfit visually clear and easy to recognize
* maintain simple, believable clothing construction
* include all clothing pieces specified in [DESCRIPTION]
* preserve specified colors, patterns, and important clothing details
* do not add unnecessary clothing or accessories
* do not remove clothing pieces unless required by the new outfit description

Keep the same visual style:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

Do not redesign the character.
Do not change the head or face.
Do not change the hairstyle.
Do not change the hair color.
Do not change the skin tone.
Do not change the body shape or proportions.
Do not change the pose or body position.
Do not change the camera angle or view.
Do not add props, extra characters, or text.

**The ONLY intended change is the character's clothing and footwear.**`;
        },

        randomize() {
            let allOutfits = [];
            for (let cat in this.outfitDatabase) {
                allOutfits = allOutfits.concat(this.outfitDatabase[cat]);
            }
            let randomItem = allOutfits[Math.floor(Math.random() * allOutfits.length)];
            this.outfitDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>