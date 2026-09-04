---
title: "Footwear Picker"
slug: "outfit-kaki"
description: "Prompt builder untuk mengubah alas kaki/sepatu karakter"
icon: "icon-[ri--footprint-line]"
categories:
  - "Outfit"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="footwearPickerApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--footprint-line] text-indigo-600 dark:text-indigo-400"></i> Footwear Picker & Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Footwear </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">New Footwear Description</label> <div class="relative flex items-center"> <input type="text" x-model="footwearDesc" placeholder="e.g. Classic white sneakers with black stripes and white laces." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari List Footwear"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Alas Kaki Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Deskripsi Footwear Doang </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal / Offcanvas Picker Database Kategori Footwear --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Jenis Alas Kaki Karakter</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Tab Kategori --> <div class="flex border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-6 gap-2 pt-3"> <template x-for="(cat, catName) in footwearDatabase" :key="catName"> <button @click="activeCategory = catName" :class="activeCategory === catName ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 shadow-xs' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'" class="px-4 py-2 text-xs font-semibold border-b-2 rounded-t-xl transition cursor-pointer uppercase tracking-wider" x-text="catName"> </button> </template> </div> <!-- Modal Body (List Grid Item) --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in footwearDatabase[activeCategory]" :key="item.title"> <div @click="selectFootwear(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-20 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function footwearPickerApp() {
    return {
        footwearDesc: 'Classic white sneakers with black stripes and white laces.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Casual',

        // Database Alas Kaki
        footwearDatabase: {
            "Casual": [
                { 
                    title: "White Sneakers", 
                    desc: "Classic white sneakers with black stripes and white laces.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Sneakers</text></svg>' 
                },
                { 
                    title: "Slip-on Canvas", 
                    desc: "Casual dark blue slip-on canvas shoes with white rubber soles.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Slip-on</text></svg>' 
                },
                { 
                    title: "High-top Sneakers", 
                    desc: "Red and white high-top canvas sneakers with white laces.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">High-top</text></svg>' 
                }
            ],
            "Sandal & Nyeker": [
                { 
                    title: "Casual Sandals", 
                    desc: "Simple black strap sandals exposing bare feet.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Sandals</text></svg>' 
                },
                { 
                    title: "Flip-Flops", 
                    desc: "Casual rubber flip-flops (sandal jepit) with bare feet visible.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Flip-Flops</text></svg>' 
                },
                { 
                    title: "Barefoot (Nyeker)", 
                    desc: "Completely barefoot, bare feet resting on the ground with visible toes.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Barefoot</text></svg>' 
                }
            ],
            "Formal & Boots": [
                { 
                    title: "Leather Shoes", 
                    desc: "Polished black formal leather shoes with thin laces.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Leather</text></svg>' 
                },
                { 
                    title: "Combat Boots", 
                    desc: "Heavy-duty black leather combat boots with thick soles and laces.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Boots</text></svg>' 
                },
                { 
                    title: "School Black Shoes", 
                    desc: "Standard black school shoes with a single velcro strap or simple laces.", 
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">School</text></svg>' 
                }
            ]
        },

        openPicker() {
            this.showModal = true;
        },

        selectFootwear(desc) {
            this.footwearDesc = desc;
            this.showModal = false;
        },
        
        get generatedDesc() {
            if (!this.footwearDesc) return 'casual white sneakers.';
            let cleaned = this.footwearDesc.trim();
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + (cleaned.endsWith('.') ? '' : '.');
        },

        get fullPrompt() {
            return `Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with new footwear.

**NEW FOOTWEAR:**
[${this.generatedDesc}]

**CHARACTER LOCK — DO NOT CHANGE:**

* exact same face
* exact same facial features
* exact same face shape
* exact same hairstyle
* exact same hair shape
* exact same hair color
* exact same skin tone
* exact same body shape
* exact same body proportions
* exact same age and identity
* exact same outfit / clothing (keep upper and lower clothes 100% identical)
* exact same pose
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

**ONLY REPLACE THE FOOTWEAR / SHOES.**

The new footwear must naturally fit the character's feet and legs, matching the existing proportions and full-body composition.

Keep the same visual style:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

Do not change the face.
Do not change the hairstyle.
Do not change the body.
Do not change the outfit.
Do not change the pose.
Do not change the camera angle.
Do not redesign the character.
Do not add extra accessories.
Do not add props.
Do not add text.

**The ONLY intended change is replacing the footwear.**`;
        },

        randomize() {
            let allFootwear = [];
            for (let cat in this.footwearDatabase) {
                allFootwear = allFootwear.concat(this.footwearDatabase[cat]);
            }
            let randomItem = allFootwear[Math.floor(Math.random() * allFootwear.length)];
            this.footwearDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>