---
title: "Head Accessory Picker"
slug: "outfit-kepala"
description: "Alat untuk menghasilkan prompt penambahan aksesori kepala karakter dengan kategori pilihan"
icon: "icon-[ri--vip-crown-line]"
categories:
  - "Outfit"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="headAccessoryApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-4"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--user-settings-line] text-indigo-600 dark:text-indigo-400"></i> Pilih Aksesori Kepala Baru </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Contoh Cepat </button> </div> <div class="space-y-3"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Target Aksesori Kepala (Head Accessory)</label> <div class="relative flex items-center"> <input type="text" x-model="accessory" placeholder="e.g. backward Snapback cap" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2.5 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="showModal = true" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Head Accessory Prompt (Siap Salin) </h3> <button @click="copyPrompt()" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3.5 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied ? 'Berhasil Disalin!' : 'Salin Prompt Aksesori'"></span> </button> </div> <div class="bg-gray-950 p-4 rounded-xl relative"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto" x-text="masterPromptTemplate"></pre> </div> </div> <!-- Modal Picker Database Aksesori Kepala --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-3xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori Aksesori Kepala</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Tab Kategori --> <div class="flex border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-6 gap-2 pt-3"> <template x-for="(items, category) in accessoryDatabase" :key="category"> <button @click="activeCategory = category" :class="activeCategory === category ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 shadow-xs' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400'" class="px-4 py-2 text-xs font-semibold border-b-2 rounded-t-xl transition cursor-pointer" x-text="category"> </button> </template> </div> <!-- Grid Item Berdasarkan Kategori Aktif --> <div class="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-4"> <template x-for="item in accessoryDatabase[activeCategory]" :key="item.label"> <div @click="selectStyle(item.label)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-3 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" x-text="item.label"></span> </div> </template> </div> </div> </div>
</div>

<script>
function headAccessoryApp() {
    return {
        accessory: 'backward Snapback cap',
        copied: false,
        showModal: false,
        activeCategory: 'Universal',

        accessoryDatabase: {
            "Universal": [
                { label: 'backward Snapback cap', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Snapback</text></svg>' },
                { label: 'classic bucket hat', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Bucket</text></svg>' },
                { label: 'knitted winter beanie hat', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Beanie</text></svg>' },
                { label: 'wireless over-ear headphones', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Headphones</text></svg>' },
                { label: 'classic round sunglasses on head', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Glasses</text></svg>' }
            ],
            "Pria": [
                { label: 'curved brim baseball cap', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Baseball</text></svg>' },
                { label: 'traditional peci hat', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Peci</text></svg>' },
                { label: 'urban streetwear flat cap', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Flat Cap</text></svg>' },
                { label: 'military tactical bany hat', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Tactical</text></svg>' }
            ],
            "Wanita": [
                { label: 'wide-brim summer straw hat', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Straw Hat</text></svg>' },
                { label: 'cute cat ear headband', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Cat Ears</text></svg>' },
                { label: 'floral hair garland crown', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Floral</text></svg>' },
                { label: 'fabric bow hair band', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Bow</text></svg>' }
            ]
        },

        selectStyle(label) {
            this.accessory = label;
            this.showModal = false;
        },

        get masterPromptTemplate() {
            return `**HEAD ACCESSORY REPLACEMENT**

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new head accessory.

**NEW HEAD ACCESSORY:**
[${this.accessory}]

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
* exact same outfit
* exact same pose
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

**ONLY ADD THE HEAD ACCESSORY.**

The accessory must naturally fit the character's existing head shape and scale.

Preserve the character's original hairstyle and visible hair unless the accessory naturally covers part of it.

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

**The ONLY intended change is adding the head accessory.**`;
        },

        randomize() {
            const allCategories = Object.keys(this.accessoryDatabase);
            const randomCat = allCategories[Math.floor(Math.random() * allCategories.length)];
            const items = this.accessoryDatabase[randomCat];
            this.accessory = items[Math.floor(Math.random() * items.length)].label;
        },

        copyPrompt() {
            navigator.clipboard.writeText(this.masterPromptTemplate);
            this.copied = true;
            setTimeout(() => { this.copied = false; }, 2000);
        }
    }
}
</script>