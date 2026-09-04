---
title: "Karakter Prompt"
slug: "karakter-prompt"
description: "hasilkan deskripsi karakter untuk digunakan pada base prompt karakter"
icon: "icon-[ri--user-settings-line]"
categories:
  - "Karakter"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="characterBuilderApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-4"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--user-add-line] text-indigo-600 dark:text-indigo-400"></i> Builder Parameter Karakter </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Contoh Cepat </button> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> <!-- Umur & Gender --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Umur & Subjek</label> <div class="flex gap-2"> <input type="number" x-model="age" class="w-20 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <select x-model="gender" class="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <option value="Indonesian man">Indonesian Man</option> <option value="Indonesian woman">Indonesian Woman</option> <option value="man">Man</option> <option value="woman">Woman</option> </select> </div> </div> <!-- Bentuk Badan --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Bentuk Badan</label> <div class="relative flex items-center"> <input type="text" x-model="body" placeholder="e.g. slender body" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('body')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Kepala / Wajah --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Kepala & Wajah</label> <div class="relative flex items-center"> <input type="text" x-model="head" placeholder="e.g. oval face" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('head')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Mata --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Mata</label> <div class="relative flex items-center"> <input type="text" x-model="eyes" placeholder="e.g. sharp dark eyes" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('eyes')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Rambut --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Rambut</label> <div class="relative flex items-center"> <input type="text" x-model="hair" placeholder="e.g. short textured black hair" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('hair')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Hidung & Mulut --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Hidung & Mulut</label> <div class="relative flex items-center"> <input type="text" x-model="noseMouth" placeholder="e.g. straight nose and neutral lips" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('noseMouth')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Baju --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Baju</label> <div class="relative flex items-center"> <input type="text" x-model="shirt" placeholder="e.g. simple black t-shirt" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('shirt')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Celana --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Celana</label> <div class="relative flex items-center"> <input type="text" x-model="pants" placeholder="e.g. dark pants" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('pants')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Kaki (Permanen) --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Kaki (Permanen)</label> <input type="text" value="with bare feet" disabled class="w-full bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-500 dark:text-gray-400 cursor-not-allowed"> </div> </div> </div> <!-- Output Section: Master Character Reference Base Prompt --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Master Character Reference Prompt (Siap Salin) </h3> <button @click="copyPrompt()" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3.5 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied ? 'Berhasil Disalin!' : 'Salin Master Prompt'"></span> </button> </div> <div class="bg-gray-950 p-4 rounded-xl relative"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto" x-text="masterPromptTemplate"></pre> </div> </div> <!-- Modal / Offcanvas Picker Database Kosakata --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200 capitalize" x-text="`Pilih Style untuk: ${activeField}`"></h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-4"> <template x-for="item in database[activeField] || []"> <div @click="selectStyle(item)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-3 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" x-text="item.label"></span> </div> </template> </div> </div> </div>
</div>

<script>
function characterBuilderApp() {
    return {
        age: 26,
        gender: 'Indonesian man',
        body: 'slender body',
        head: 'oval face',
        eyes: 'sharp dark eyes',
        hair: 'short textured black hair',
        noseMouth: 'straight nose and neutral lips',
        shirt: 'simple black t-shirt',
        pants: 'dark pants',
        copied: false,
        
        showModal: false,
        activeField: '',

        database: {
            body: [
                { label: 'slender body', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'tall lean body', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'muscular body', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'petite body', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' }
            ],
            head: [
                { label: 'oval face', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'angular face', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'round face', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'square jaw face', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' }
            ],
            eyes: [
                { label: 'sharp dark eyes', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'gentle brown eyes', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'deep-set eyes', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' }
            ],
            hair: [
                { label: 'short textured black hair', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'classic taper fade hair', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'messy curly hair', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'buzz cut hair', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' }
            ],
            noseMouth: [
                { label: 'straight nose and neutral lips', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'sharp nose and subtle smile', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'button nose and closed lips', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' }
            ],
            shirt: [
                { label: 'simple black t-shirt', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'vintage thrifted graphic t-shirt', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'oversized hoodie', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'formal button-up shirt', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' }
            ],
            pants: [
                { label: 'dark pants', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'casual trousers', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'denim blue jeans', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' },
                { label: 'cargo shorts', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Preview</text></svg>' }
            ]
        },

        openPicker(field) {
            this.activeField = field;
            this.showModal = true;
        },

        selectStyle(item) {
            this[this.activeField] = item.label;
            this.showModal = false;
        },
        
        get generatedDescription() {
            let parts = [];
            let subject = `A ${this.age}-year-old ${this.gender}`;
            let features = [];
            
            if (this.body) features.push(`a ${this.body}`);
            if (this.head) features.push(`${this.head}`);
            if (this.eyes) features.push(`${this.eyes}`);
            if (this.hair) features.push(`${this.hair}`);
            if (this.noseMouth) features.push(`${this.noseMouth}`);
            
            if (features.length > 0) {
                subject += ` with ${this.formatList(features)}`;
            }
            parts.push(subject);
            
            let clothing = [];
            if (this.shirt) clothing.push(this.shirt);
            if (this.pants) clothing.push(this.pants);
            
            if (clothing.length > 0) {
                parts.push(`wearing a ${clothing.join(', ')}`.replace('wearing a a ', 'wearing a '));
            }
            
            parts.push('with bare feet');
            
            let result = parts.join(', ');
            if (!result.endsWith('.')) {
                result += '.';
            }
            return result;
        },

        get masterPromptTemplate() {
            return `Use the attached image as the STRICT STYLE REFERENCE ONLY.

Create a completely NEW human character based on this description:

[${this.generatedDescription}]

The new character must have a unique face, hairstyle, body shape, silhouette, outfit, colors, and identity. Do not copy, recolor, or slightly modify the original character.

Keep ONLY the visual art style of the reference:
- simple 2D cartoon
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal details
- slightly handmade line quality
- simple expressive facial features
- animation-friendly design

POSE:
Create the character in a neutral FRONT 3/4 VIEW, facing slightly to the right.

Show the character standing upright in a relaxed neutral pose:
- full body visible from head to feet
- arms hanging naturally at the sides
- hands clearly visible
- legs in a natural standing position
- head upright
- neutral facial expression
- no action pose
- no exaggerated body movement

This image will be used as the MASTER CHARACTER REFERENCE for generating other poses later.

Therefore, prioritize:
- clear character identity
- consistent proportions
- clear body construction
- recognizable face
- recognizable hairstyle
- clean outfit design
- clear silhouette
- animation-friendly shapes
- the eyes are rendered with a clear white sclera

Do not add props, text, extra characters, dynamic movement, or complex background.

The final character must look like a completely different person from the reference, while clearly belonging to the same cartoon animation style.

Full body, centered, clean simple background.`;
        },

        formatList(arr) {
            if (arr.length === 1) return arr[0];
            if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
            return arr.slice(0, -1).join(', ') + `, and ${arr[arr.length - 1]}`;
        },

        randomize() {
            const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)].label;
            const genders = ['Indonesian man', 'Indonesian woman', 'man', 'woman'];
            
            this.age = Math.floor(Math.random() * (45 - 20 + 1)) + 20;
            this.gender = genders[Math.floor(Math.random() * genders.length)];
            this.body = getRandomItem(this.database.body);
            this.head = getRandomItem(this.database.head);
            this.eyes = getRandomItem(this.database.eyes);
            this.hair = getRandomItem(this.database.hair);
            this.noseMouth = getRandomItem(this.database.noseMouth);
            this.shirt = getRandomItem(this.database.shirt);
            this.pants = getRandomItem(this.database.pants);
        },

        copyPrompt() {
            navigator.clipboard.writeText(this.masterPromptTemplate);
            this.copied = true;
            setTimeout(() => { this.copied = false; }, 2000);
        }
    }
}
</script>