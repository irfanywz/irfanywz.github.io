---
title: "Karakter Description Image"
slug: "karakter-deskripsi-dari-gambar"
description: "Prompt builder untuk mendeskripsikan karakter berdasarkan gambar referensi visual dengan satu kalimat singkat dan siap pakai"
icon: "icon-[ri--image-edit-line]"
categories:
  - "Karakter"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="refCharacterApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--image-edit-line] text-indigo-600 dark:text-indigo-400"></i> Character From Reference Prompt Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Reference Data </button> </div> <!-- Single Input: Reference Details / Context --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">[REFERENCE IMAGE & OPTIONAL DETAILS / OCCUPATION]</label> <div class="relative flex items-center"> <input type="text" x-model="refInput" placeholder="e.g. Reference image of a local young man working as a barista..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="showModal = true" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Contoh Referensi"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Satu Kalimat Output --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: One-Sentence Output </h3> <button @click="copyText(generatedSentence, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedSentence"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Contoh Referensi --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Contoh Referensi Gambar</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in refDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> <template x-for="item in refDatabase[activeCategory]" :key="item.title"> <div @click="selectItem(item)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 space-y-1"> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200" x-text="item.title"></span> <span class="text-[11px] text-indigo-600 dark:text-indigo-400 font-mono" x-text="item.input"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 italic" x-text="item.sentence"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function refCharacterApp() {
    return {
        refInput: 'Reference image of a young Indonesian man working as a local barista, wearing an apron over a casual shirt.',
        generatedSentence: 'A 26-year-old Indonesian man with a slim build, warm friendly smile, neat short black hair, wearing a brown canvas apron over a casual grey t-shirt and dark trousers.',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Pekerja & Kreatif',

        refDatabase: {
            "Pekerja & Kreatif": [
                {
                    title: "Barista Lokal",
                    input: "Reference image of a young Indonesian man working as a local barista, wearing an apron over a casual shirt.",
                    sentence: "A 26-year-old Indonesian man with a slim build, warm friendly smile, neat short black hair, wearing a brown canvas apron over a casual grey t-shirt and dark trousers."
                },
                {
                    title: "Kurir / Ojol",
                    input: "Reference image of an Indonesian ride-hailing driver wearing a green riding jacket and helmet.",
                    sentence: "A 29-year-old Indonesian man with an athletic build, alert expression, short cropped black hair, wearing a bright green riding jacket, jeans, and sneakers."
                }
            ],
            "Keseharian": [
                {
                    title: "Pemuda Santai",
                    input: "Reference image of a local young man hanging out casually in an urban neighborhood.",
                    sentence: "A 24-year-old Indonesian man with a relaxed posture, casual friendly expression, messy black hair, wearing an oversized graphic tee, shorts, and slip-on sandals."
                }
            ]
        },

        selectItem(item) {
            this.refInput = item.input;
            this.generatedSentence = item.sentence;
            this.showModal = false;
        },

        randomize() {
            const allItems = [];
            for (let cat in this.refDatabase) {
                allItems.push(...this.refDatabase[cat]);
            }
            let rand = allItems[Math.floor(Math.random() * allItems.length)];
            this.refInput = rand.input;
            this.generatedSentence = rand.sentence;
        },

        get generatedSummary() {
            return `INPUT: ${this.refInput}\nKALIMAT: ${this.generatedSentence}`;
        },

        get fullPrompt() {
            let inputRef = this.refInput ? this.refInput.trim() : 'Reference image provided.';
            let sentence = this.generatedSentence;

            return `Create ONE short visual description of the character using:

[${inputRef}]

If a reference image is provided, use it as the PRIMARY VISUAL REFERENCE. Carefully observe the character's visible appearance and translate only the important visual traits into a concise description.
Write exactly ONE natural sentence, similar to:
“A 27-year-old Indonesian man with a sturdy stocky build, square face, short buzz-cut black hair, and a calm expression, wearing a dark gray polo shirt, cargo pants, and sandals.”
RULES:
- Preserve the character's clearly visible Indonesian/local appearance from the reference.
- Describe natural Indonesian/Southeast Asian facial features and appearance when visually supported.
- Prioritize distinctive visible traits: age, gender, skin tone, face shape, hairstyle, hair color, body build, and clothing.
- Mention body build only when visually relevant.
- Describe clothing based on what is actually visible or appropriate for the given occupation.
- If AGE, GENDER, OCCUPATION, or other details are provided, use them to refine the description.
- Do not invent physical traits that are not visible or reasonably supported.
- Do not describe the character's pose, background, camera angle, or art style unless specifically requested.
- Do not copy the reference character's identity if the task is to create a new character; use the reference only for visual guidance.
- Make the character clearly feel Indonesian/local, not generically Western.
- Keep the appearance believable and suitable for everyday Indonesian life.
- Avoid generic descriptions.
- Avoid exaggerated or unusual physical features unless clearly present in the reference.
- Avoid backstory, biography, personality explanation, or unnecessary details.
- Keep the sentence short and directly usable as an image-generation prompt.
- Use simple, natural English.
- Do not use bullet points or multiple sentences.
- OUTPUT EXACTLY ONE SENTENCE.

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