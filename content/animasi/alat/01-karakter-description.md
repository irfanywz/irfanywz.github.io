---
title: "Karakter Description"
slug: "karakter-deskripsi"
description: "Prompt builder untuk menghasilkan deskripsi visual karakter lokal Indonesia yang singkat dan siap pakai untuk image generation"
icon: "icon-[ri--user-shared-line]"
categories:
  - "Karakter"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="characterDescApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--user-shared-line] text-indigo-600 dark:text-indigo-400"></i> Character Description Prompt Builder </h3> <button @click="generateDescription()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Generate / Randomize </button> </div> <!-- Single Input: Parameter / Details --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">[NAME / AGE / GENDER / OCCUPATION / PERSONALITY / OTHER DETAILS]</label> <div class="relative flex items-center"> <input type="text" x-model="characterParam" placeholder="e.g. Budi / 28 / Male / Local Barista / Friendly / Wears apron" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="showModal = true" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Template Parameter"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Satu Kalimat Deskripsi (Sesuai Aturan Utama) --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: One-Sentence Output </h3> <button @click="copyText(generatedSentence, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedSentence"></p> </div> </div> <!-- Opsi 2: Full Prompt Template dengan Basis Aturan --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Parameter / Template Karakter --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Template Karakter Lokal</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Profesi:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in characterDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> <template x-for="item in characterDatabase[activeCategory]" :key="item.title"> <div @click="selectItem(item)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 space-y-1"> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200" x-text="item.title"></span> <span class="text-[11px] text-indigo-600 dark:text-indigo-400 font-mono" x-text="item.param"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 italic" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div> </div>

<script>
function characterDescApp() {
    return {
        characterParam: 'Budi / 28 / Male / Local Mechanic / Easygoing / Wears rolled-up dark blue work shirt and sneakers',
        generatedSentence: 'A 32-year-old Indonesian local mechanic with a lean build, sharp jawline, short messy black hair, and an easygoing expression, wearing a rolled-up dark blue work shirt, oil-stained dark trousers, and worn-out sneakers.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Pekerja & Lapangan',

        characterDatabase: {
            "Pekerja & Lapangan": [
                {
                    title: "Montir / Mechanic",
                    param: "Budi / 32 / Male / Mechanic / Easygoing / Rolled-up work shirt and sneakers",
                    desc: "A 32-year-old Indonesian local mechanic with a lean build, sharp jawline, short messy black hair, and an easygoing expression, wearing a rolled-up dark blue work shirt, oil-stained dark trousers, and worn-out sneakers."
                },
                {
                    title: "Ojol / Ride-Hailing Driver",
                    param: "Rian / 26 / Male / Ojek Driver / Energetic / Green jacket and helmet",
                    desc: "A 26-year-old Indonesian ride-hailing driver with an athletic build, warm smile, short cropped black hair, and an alert expression, wearing a bright green riding jacket, comfortable jeans, and practical sneakers."
                },
                {
                    title: "Pedagang Kopi / Keliling",
                    param: "Joko / 40 / Male / Street Vendor / Friendly / Simple shirt and sarung",
                    desc: "A 40-year-old Indonesian street vendor with a sturdy build, weathered friendly face, wavy black hair, and a welcoming smile, wearing a simple polo shirt, casual trousers, and worn sandals."
                }
            ],
            "Keseharian & Santai": [
                {
                    title: "Pemuda Santai (Nongkrong)",
                    param: "Reza / 24 / Male / Freelancer / Relaxed / Oversized tee and sandals",
                    desc: "A 24-year-old Indonesian young man with a casual slim build, relaxed posture, messy parted black hair, and a laid-back expression, wearing an oversized graphic t-shirt, relaxed shorts, and slip-on sandals."
                },
                {
                    title: "Ibu Warung / Lokal",
                    param: "Siti / 45 / Female / Shop Owner / Warm / Floral apron and headscarf",
                    desc: "A 45-year-old Indonesian woman with a warm hospitable presence, friendly eyes, gentle smile, wearing a comfortable floral blouse, simple skirt, and casual everyday footwear."
                }
            ]
        },

        get currentDatabase() {
            return this.characterDatabase;
        },

        selectItem(item) {
            this.characterParam = item.param;
            this.generatedSentence = item.desc;
            this.showModal = false;
        },

        generateDescription() {
            // Contoh rotasi / random sederhana jika tombol randomize ditekan
            const list = [
                "A 28-year-old Indonesian male graphic designer with a slim build, cheerful expression, neat short black hair, wearing a casual black t-shirt, dark jeans, and clean sneakers.",
                "A 35-year-old Indonesian local coffee shop owner with a warm approachable build, friendly eyes, short wavy hair, wearing a brown apron over a linen shirt and casual trousers.",
                "A 25-year-old Indonesian female local illustrator with a petite frame, creative expression, shoulder-length dark wavy hair, wearing an oversized hoodie, comfortable pants, and canvas shoes."
            ];
            this.generatedSentence = list[Math.floor(Math.random() * list.length)];
        },

        get fullPrompt() {
            let param = this.characterParam ? this.characterParam.trim() : 'Budi / 28 / Male / Local Mechanic / Friendly';
            let sentence = this.generatedSentence;

            return `Create ONE short visual description for the character based on:

[${param}]

Write it as ONE concise sentence, similar to:
“A 27-year-old Indonesian man with a sturdy stocky body, square face, short buzz-cut black hair, and a calm expression, wearing a dark gray polo shirt, cargo pants, and bare feet.”

Rules:
- Make the character clearly feel Indonesian/local
- Use natural Indonesian/Southeast Asian appearance
- Mention only the most visually important physical traits
- Include body build only when relevant
- Let height and proportions naturally follow the age and description
- Give the character a distinctive but believable appearance
- Use clothing appropriate to everyday Indonesian life and occupation
- Avoid generic Western-looking characters
- Avoid overly detailed descriptions
- Avoid unnecessary backstory or personality explanation
- Keep it short and directly usable for image generation

Output ONE sentence only.

Result:
${sentence}`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>