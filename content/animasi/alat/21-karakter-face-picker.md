---
title: "Face Picker"
slug: "karakter-wajah"
description: "membangun prompt struktur wajah lengkap (shape, cheeks, jaw, chin, nose, mouth)"
icon: "icon-[ri--user-settings-line]"
categories:
  - "Karakter"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="allInOneBuilderApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--user-smile-line] text-indigo-600 dark:text-indigo-400"></i> All-in-One Face & Eye Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize All </button> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> <!-- Face Shape --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Face Shape</label> <div class="relative flex items-center"> <input type="text" x-model="faceShape" placeholder="e.g. oval" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('faceShape')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Cheeks --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Cheeks</label> <div class="relative flex items-center"> <input type="text" x-model="cheeks" placeholder="e.g. normal" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('cheeks')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Jaw --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Jaw</label> <div class="relative flex items-center"> <input type="text" x-model="jaw" placeholder="e.g. rounded" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('jaw')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Chin --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Chin</label> <div class="relative flex items-center"> <input type="text" x-model="chin" placeholder="e.g. pointed" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('chin')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Nose --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Nose</label> <div class="relative flex items-center"> <input type="text" x-model="nose" placeholder="e.g. medium" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('nose')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Mouth --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Mouth</label> <div class="relative flex items-center"> <input type="text" x-model="mouth" placeholder="e.g. medium" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('mouth')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Eye Shape --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Eye Shape</label> <div class="relative flex items-center"> <input type="text" x-model="eyeShape" placeholder="e.g. almond" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('eyeShape')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Eye Color --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Eye Color</label> <div class="relative flex items-center"> <input type="text" x-model="eyeColor" placeholder="e.g. dark brown" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker('eyeColor')" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Style"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Wajah & Mata Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Deskripsi Wajah & Mata </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[140px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[140px] max-h-[240px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal / Offcanvas Picker Database Kosakata --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200 capitalize" x-text="`Pilih Style untuk: ${activeField}`"></h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Modal Body (Grid Pilihan Style dengan Tag <img> Base64 Placeholder) --> <div class="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-4"> <template x-for="item in database[activeField] || []"> <div @click="selectStyle(item)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-3 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" x-text="item.label"></span> </div> </template> </div> </div> </div> </div>

<script>
function allInOneBuilderApp() {
    return {
        faceShape: 'oval',
        cheeks: 'normal',
        jaw: 'rounded',
        chin: 'pointed',
        nose: 'medium',
        mouth: 'medium',
        eyeShape: 'almond',
        eyeColor: 'dark brown',
        copied1: false,
        copied2: false,
        
        showModal: false,
        activeField: '',

        database: {
            faceShape: [
                { label: 'round', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Round</text></svg>' },
                { label: 'oval', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Oval</text></svg>' },
                { label: 'square', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Square</text></svg>' },
                { label: 'long', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Long</text></svg>' },
                { label: 'heart', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Heart</text></svg>' },
                { label: 'pear', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Pear</text></svg>' }
            ],
            cheeks: [
                { label: 'full', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Full</text></svg>' },
                { label: 'normal', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Normal</text></svg>' },
                { label: 'slim', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Slim</text></svg>' },
                { label: 'hollow', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Hollow</text></svg>' }
            ],
            jaw: [
                { label: 'soft', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Soft</text></svg>' },
                { label: 'rounded', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Rounded</text></svg>' },
                { label: 'defined', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Defined</text></svg>' },
                { label: 'wide', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Wide</text></svg>' }
            ],
            chin: [
                { label: 'short', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Short</text></svg>' },
                { label: 'rounded', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Rounded</text></svg>' },
                { label: 'pointed', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Pointed</text></svg>' },
                { label: 'broad', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Broad</text></svg>' }
            ],
            nose: [
                { label: 'small', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Small</text></svg>' },
                { label: 'medium', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Medium</text></svg>' },
                { label: 'wide', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Wide</text></svg>' },
                { label: 'long', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Long</text></svg>' },
                { label: 'straight', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Straight</text></svg>' }
            ],
            mouth: [
                { label: 'small', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Small</text></svg>' },
                { label: 'medium', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Medium</text></svg>' },
                { label: 'wide', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Wide</text></svg>' },
                { label: 'thin', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Thin</text></svg>' }
            ],
            eyeShape: [
                { label: 'round', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Round</text></svg>' },
                { label: 'oval', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Oval</text></svg>' },
                { label: 'almond', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Almond</text></svg>' },
                { label: 'narrow', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Narrow</text></svg>' },
                { label: 'monolid', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Monolid</text></svg>' }
            ],
            eyeColor: [
                { label: 'dark brown', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Brown</text></svg>' },
                { label: 'black', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Black</text></svg>' },
                { label: 'blue', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Blue</text></svg>' },
                { label: 'green', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Green</text></svg>' },
                { label: 'amber', image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239CA3AF" font-size="12">Amber</text></svg>' }
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
        
        get generatedDesc() {
            let parts = [];
            if (this.faceShape) parts.push(`${this.faceShape} face shape`);
            if (this.cheeks) parts.push(`${this.cheeks} cheeks`);
            if (this.jaw) parts.push(`${this.jaw} jaw`);
            if (this.chin) parts.push(`${this.chin} chin`);
            if (this.nose) parts.push(`${this.nose} nose`);
            if (this.mouth) parts.push(`${this.mouth} mouth`);
            if (this.eyeShape && this.eyeColor) {
                parts.push(`${this.eyeColor} ${this.eyeShape} eyes`);
            } else if (this.eyeShape) {
                parts.push(`${this.eyeShape} eyes`);
            }
            
            if (parts.length === 0) return 'coherent overall facial structure and eyes.';
            
            let result = parts.join(', ') + '.';
            return result.charAt(0).toUpperCase() + result.slice(1);
        },

        get fullPrompt() {
return `FACE REPLACEMENT

Use the attached character image as the STRICT CHARACTER REFERENCE.

Create the EXACT SAME CHARACTER with a new overall facial structure and eyes.

NEW FACE:
${this.generatedDesc}

The new face should naturally fit the character's head, hairstyle, age, and body proportions.

FACIAL FEATURES THAT MAY CHANGE:

* overall face shape
* forehead shape
* cheek shape
* jawline
* chin shape
* eye shape
* eyebrow shape
* nose shape
* mouth shape
* facial proportions

CHARACTER LOCK — DO NOT CHANGE:

* exact same character identity
* exact same age
* exact same hairstyle
* exact same hair shape
* exact same hair color
* exact same skin tone
* exact same body shape
* exact same body proportions
* exact same outfit
* exact same pose
* exact same hand and body position
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

IMPORTANT:
Change the overall facial structure and eyes according to [NEW FACE], not just one individual feature.
The new facial features must work together as one coherent face.
Maintain natural facial proportions.
Keep the face appropriate for the character's age and gender.
Keep the new face visually consistent with the original character.
Do not exaggerate facial features unless specifically requested.
The hairstyle must remain completely unchanged and naturally fit the new face.

VISUAL STYLE:
* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

Do not change the hairstyle.
Do not change the hair color.
Do not change the skin tone.
Do not change the body.
Do not change the outfit.
Do not change the pose.
Do not change the camera angle.
Do not change the art style.

The ONLY intended change is the overall facial structure, facial features, and eyes.`;
        },

        randomize() {
            const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)].label;
            
            this.faceShape = getRandomItem(this.database.faceShape);
            this.cheeks = getRandomItem(this.database.cheeks);
            this.jaw = getRandomItem(this.database.jaw);
            this.chin = getRandomItem(this.database.chin);
            this.nose = getRandomItem(this.database.nose);
            this.mouth = getRandomItem(this.database.mouth);
            this.eyeShape = getRandomItem(this.database.eyeShape);
            this.eyeColor = getRandomItem(this.database.eyeColor);
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>