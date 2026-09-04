---
title: "Face Shape Picker"
slug: "karakter-bentuk-wajah"
description: "Alat untuk menghasilkan prompt modifikasi bentuk wajah karakter dengan konsistensi penuh"
icon: "icon-[ri--pencil-ruler-line]"
categories:
  - "Karakter"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="faceShapeApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-4"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--user-smile-line] text-indigo-600 dark:text-indigo-400"></i> Pilih Bentuk Wajah Baru </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Contoh Cepat </button> </div> <div class="space-y-3"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Target Bentuk Wajah</label> <div class="relative flex items-center"> <input type="text" x-model="faceShape" placeholder="e.g. round face with soft cheeks" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2.5 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="showModal = true" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Face Shape Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Face Shape Prompt (Siap Salin) </h3> <button @click="copyPrompt()" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3.5 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied ? 'Berhasil Disalin!' : 'Salin Prompt Wajah'"></span> </button> </div> <div class="bg-gray-950 p-4 rounded-xl relative"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto" x-text="masterPromptTemplate"></pre> </div> </div> <!-- Modal Picker Database Wajah --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Bentuk Wajah Alternatif</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <div class="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-4"> <template x-for="item in database"> <div @click="selectStyle(item.label)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-3 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" x-text="item.label"></span> </div> </template> </div> </div> </div> </div>

<script>
function faceShapeApp() {
    return {
        faceShape: 'round face with soft cheeks',
        copied: false,
        showModal: false,

        database: [
            { label: 'round face with soft cheeks', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
            { label: 'sharp angular face with defined jawline', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
            { label: 'oval face with soft chin', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
            { label: 'square face with strong jaw', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
            { label: 'heart-shaped face with narrow chin', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' }
        ],

        selectStyle(label) {
            this.faceShape = label;
            this.showModal = false;
        },

        get masterPromptTemplate() {
            return `**FACE SHAPE REPLACEMENT**

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new face shape.

**NEW FACE SHAPE:**
[${this.faceShape}]

**CHARACTER LOCK — DO NOT CHANGE:**

* exact same eyes
* exact same eyebrows
* exact same mouth
* exact same hairstyle
* exact same hair shape
* exact same hair color
* exact same skin tone
* exact same body shape
* exact same body proportions
* exact same age and identity
* exact same pose
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

**ONLY CHANGE THE FACE SHAPE.**

Preserve the exact placement, size, and design of the existing eyes, eyebrows, nose, and mouth.

The new face shape must remain compatible with the existing hairstyle and character proportions.

Do not redesign the facial features.
Do not change the hairstyle.
Do not change the skin tone.
Do not change the body.
Do not change the pose.
Do not change the camera angle.

**The ONLY intended change is the face shape.**`;
        },

        randomize() {
            const items = this.database;
            const rand = items[Math.floor(Math.random() * items.length)].label;
            this.faceShape = rand;
        },

        copyPrompt() {
            navigator.clipboard.writeText(this.masterPromptTemplate);
            this.copied = true;
            setTimeout(() => { this.copied = false; }, 2000);
        }
    }
}
</script>