---
title: "Pose Picker"
slug: "karakter-pose"
description: "Prompt builder untuk mengubah pose karakter"
icon: "icon-[ri--body-scan-line]"
categories:
  - "Karakter"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="posePickerApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--run-line] text-indigo-600 dark:text-indigo-400"></i> Pose Picker & Builder </h3> <button @click="randomize()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Pose </button> </div> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">Selected Pose (Action & Posture)</label> <div class="relative flex items-center"> <input type="text" x-model="poseDesc" placeholder="e.g. standing upright, relaxed posture, arms hanging naturally at the sides." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="openPicker()" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Dari List Pose"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Deskripsi Pose Doang --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Deskripsi Pose Doang </h3> <button @click="copyText(generatedDesc, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedDesc"></p> </div> </div> <!-- Opsi 2: Full Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[120px] max-h-[220px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal / Offcanvas Picker Database Kategori Pose dengan Image Placeholder --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Kategori Pose Karakter</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Modal Body (Kategori & List dengan Image Placeholder SVG) --> <div class="p-6 overflow-y-auto space-y-6"> <template x-for="(cat, catName) in poseDatabase" :key="catName"> <div class="space-y-2"> <h4 class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider" x-text="catName"></h4> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"> <template x-for="item in cat"> <div @click="selectPose(item.desc)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col items-center text-center cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20"> <div class="w-full h-20 bg-gray-200 dark:bg-gray-800 rounded-lg mb-2 overflow-hidden flex items-center justify-center"> <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300"> </div> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-0.5" x-text="item.title"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-2" x-text="item.desc"></span> </div> </template> </div> </div> </template> </div> </div> </div> </div>

<script>
function posePickerApp() {
    return {
        poseDesc: 'standing upright, relaxed posture, arms hanging naturally at the sides.',
        copied1: false,
        copied2: false,
        showModal: false,

        // Database Pose yang Dikelompokkan dengan Image Placeholder SVG Base64
        poseDatabase: {
            "Dasar & Ekspresi": [
                { 
                    title: "Neutral Standing", 
                    desc: "standing upright, relaxed posture, arms hanging naturally at the sides.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Neutral</text></svg>"
                },
                { 
                    title: "Hands on Hips", 
                    desc: "standing upright with both hands resting on the hips.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Hips</text></svg>"
                },
                { 
                    title: "Arms Crossed", 
                    desc: "standing upright with both arms crossed over the chest.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Crossed</text></svg>"
                },
                { 
                    title: "Angry / Tense", 
                    desc: "fists clenched, arms slightly bent, tense posture, angry facial expression.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Angry</text></svg>"
                },
                { 
                    title: "Explaining", 
                    desc: "one hand raised with an open palm while explaining something.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Explain</text></svg>"
                },
                { 
                    title: "Scratching Head", 
                    desc: "scratching the side of his head with a confused expression.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Confused</text></svg>"
                }
            ],
            "Interaksi Smartphone": [
                { 
                    title: "Looking at iPhone", 
                    desc: "Standing naturally while holding a modern iPhone with one hand and looking down at the screen.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Phone Look</text></svg>"
                },
                { 
                    title: "Typing on iPhone", 
                    desc: "Standing naturally while holding a modern iPhone with both hands and typing naturally with both thumbs while looking at the screen.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Typing</text></svg>"
                },
                { 
                    title: "Talking on iPhone", 
                    desc: "Standing naturally while holding a modern iPhone against one ear with one hand while speaking naturally.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Call</text></svg>"
                },
                { 
                    title: "Taking a Selfie", 
                    desc: "Standing naturally while extending one arm outward and holding an iPhone vertically toward the face while looking directly at the phone camera.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Selfie</text></svg>"
                },
                { 
                    title: "Shocked by Phone", 
                    desc: "Standing while holding an iPhone in one hand and staring at the screen with a shocked reaction.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Shocked</text></svg>"
                }
            ],
            "Merokok & Santai": [
                { 
                    title: "Rokok: Santai", 
                    desc: "Standing casually while holding a cigarette between two fingers beside his body.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Smoke 1</text></svg>"
                },
                { 
                    title: "Rokok: Dekat Mulut", 
                    desc: "Standing casually with one hand holding a cigarette near his mouth.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Smoke 2</text></svg>"
                },
                { 
                    title: "Rokok: Tangan di Saku", 
                    desc: "Standing casually with one hand in his pocket and a cigarette held in the other hand.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Smoke 3</text></svg>"
                },
                { 
                    title: "Rokok: Bersandar Tembok", 
                    desc: "Leaning against a wall with one shoulder while smoking a cigarette.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Leaning</text></svg>"
                },
                { 
                    title: "Rokok: Siku di Lutut (Duduk)", 
                    desc: "Sitting with his elbows resting on his knees, holding a cigarette between two fingers.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Sitting</text></svg>"
                }
            ],
            "Aksi & Gerakan": [
                { 
                    title: "Walking", 
                    desc: "walking toward the right, one leg forward and the opposite leg backward, arms swinging naturally.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Walking</text></svg>"
                },
                { 
                    title: "Running", 
                    desc: "running toward the right with one leg extended forward and the opposite arm swinging forward.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Running</text></svg>"
                },
                { 
                    title: "Jumping", 
                    desc: "jumping upward with both feet off the ground, arms raised naturally.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Jumping</text></svg>"
                },
                { 
                    title: "Sitting on Chair", 
                    desc: "sitting naturally on a chair, both feet on the floor, hands resting on the thighs.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Chair</text></svg>"
                }
            ],
            "Contoh": [
                { 
                    title: "Test", 
                    desc: "Pose berdiri setengah badan dengan posisi sedikit menghadap ke samping, sementara kedua tangan dimasukkan ke dalam saku celana dengan ekspresi wajah tersenyum santai.",
                    image: "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"%23374151\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%239CA3AF\" font-size=\"12\">Test</text></svg>"
                }
            ]            
        },

        openPicker() {
            this.showModal = true;
        },

        selectPose(desc) {
            this.poseDesc = desc;
            this.showModal = false;
        },
        
        get generatedDesc() {
            if (!this.poseDesc) return 'standing upright, relaxed posture.';
            let cleaned = this.poseDesc.trim();
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1) + (cleaned.endsWith('.') ? '' : '.');
        },

        get fullPrompt() {
return `Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **SAME CHARACTER** from the reference image in a new pose.

**POSE:**
[${this.generatedDesc}]

**CHARACTER LOCK:**

* Keep the exact same face and facial features
* Keep the exact same hairstyle and hair shape
* Keep the exact same hair color
* Keep the exact same skin tone
* Keep the exact same body proportions and body shape
* Keep the exact same outfit, clothing design, colors, and details
* Keep the exact same character identity and visual style
* Do not redesign, replace, simplify, or modify the character

The new image must show the character performing the requested pose naturally and clearly.

Maintain correct anatomy, consistent proportions, and recognizable character construction. The character's face, hairstyle, outfit, and overall silhouette must remain consistent with the reference.

Show the full body unless the requested pose requires otherwise.

Keep the composition clean and animation-friendly:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* slightly handmade line quality
* minimal details

Do not add props, extra characters, text, new clothing, background elements, or unnecessary visual effects.

**IMPORTANT:**
Only change the **POSE**. Everything else must remain consistent with the reference character.`;
        },

        randomize() {
            let allPoses = [];
            for (let cat in this.poseDatabase) {
                allPoses = allPoses.concat(this.poseDatabase[cat]);
            }
            let randomItem = allPoses[Math.floor(Math.random() * allPoses.length)];
            this.poseDesc = randomItem.desc;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>