---
title: "Background Time Description"
slug: "background-waktu-deskripsi"
description: "Tool generator khusus untuk merakit base prompt deskripsi perubahan waktu dan atmosfer background 2D animation."
icon: "icon-[ri--sun-line]"
categories:
  - "Environment"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="timeBasePromptApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> [TIME / WEATHER / LIGHTING / ATMOSPHERE / MOOD] </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1"> 🎲 Randomize Focus </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Parameter Nilai Suasana</label> <div class="relative flex items-center"> <input type="text" x-model="moodValue" placeholder="e.g. calm nighttime atmosphere with a dark blue sky, dim environmental lighting, subtle moonlight, and soft nighttime shadows." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="showModal = true" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari Database"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Full Base Prompt Sesuai Instruksi Murni --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--file-code-line] text-indigo-600 dark:text-indigo-400"></i> Full Base Prompt (Output Sesuai Perintah) </h3> <button @click="copyText(fullBasePrompt, 'copied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied ? 'Disalin!' : 'Salin Base Prompt'"></span> </button> </div> <div class="bg-gray-950 p-4 rounded-xl relative max-h-[350px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullBasePrompt"></pre> </div> </div> <!-- Modal Picker Database --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Database Atmosfer</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in db" :key="item.title"> <div @click="selectItem(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-24 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5 line-clamp-1" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function timeBasePromptApp() {
    return {
        moodValue: 'calm nighttime atmosphere with a dark blue sky, dim environmental lighting, subtle moonlight, and soft nighttime shadows.',
        copied: false,
        showModal: false,

        db: [
            { 
                title: "Malam Tenang", 
                desc: "calm nighttime atmosphere with a dark blue sky, dim environmental lighting, subtle moonlight, and soft nighttime shadows.",
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231E1B4B"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23C7D2FE" font-size="12">Night</text></svg>'
            },
            { 
                title: "Golden Hour Sunset", 
                desc: "warm golden hour atmosphere with a soft orange gradient sky, long horizontal lighting, and amber glow.",
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237C2D12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23FDE047" font-size="12">Sunset</text></svg>'
            },
            { 
                title: "Pagi Hari Cerah", 
                desc: "fresh morning atmosphere with a light blue and pink sky, crisp bright illumination, and gentle morning light.",
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230284C7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23FEF08A" font-size="12">Morning</text></svg>'
            },
            { 
                title: "Hari Hujan Mendung", 
                desc: "overcast rainy atmosphere with a grey sky, flat diffuse lighting, wet reflective surfaces, and soft atmospheric mist.",
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234B5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23D1D5DB" font-size="12">Rainy</text></svg>'
            }
        ],

        selectItem(desc) {
            this.moodValue = desc;
            this.showModal = false;
        },

        get formattedSentence() {
            let val = this.moodValue ? this.moodValue.trim() : 'calm nighttime atmosphere with a dark blue sky, dim environmental lighting, subtle moonlight, and soft nighttime shadows.';
            let cleaned = val.toLowerCase();
            if (cleaned.startsWith('transform the scene into a ')) {
                cleaned = cleaned.replace('transform the scene into a ', '');
            }
            if (cleaned.endsWith('.')) {
                cleaned = cleaned.slice(0, -1);
            }
            return `Transform the scene into a ${cleaned}.`;
        },

        get fullBasePrompt() {
            let sentence = this.formattedSentence;
            return `Create ONE short and clear visual description for changing the time, lighting, weather, or atmosphere of an existing 2D animation background based on:

[${sentence}]

Write the description as ONE concise sentence.

Focus ONLY on changes to the visual conditions of the existing environment.

Describe when relevant:

* time of day
* sky appearance
* lighting
* brightness
* color temperature
* shadows
* weather
* fog
* environmental atmosphere
* overall mood

The existing background environment must remain unchanged.

Do NOT describe or change:

* buildings
* roads
* furniture
* trees
* objects
* object positions
* composition
* perspective
* camera angle
* characters
* new environmental elements

The description should explain ONLY how the existing background should visually change.

Prioritize subtle and believable environmental changes suitable for a 2D animation background.

Write in this style:

"Transform the scene into a calm nighttime atmosphere with a dark blue sky, dim environmental lighting, subtle moonlight, and soft nighttime shadows."

Output ONLY the final atmosphere description.
`;
        },

        randomize() {
            let item = this.db[Math.floor(Math.random() * this.db.length)];
            this.moodValue = item.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>