---
title: "Naskah Generator"
date: 2026-09-02T17:00:00+07:00
description: "Prompt builder untuk menghasilkan naskah animasi pendek pose-to-pose efisien berbasis karakter modular lokal Indonesia"
icon: "icon-[ri--clapperboard-line]"
categories:
  - "Scriptwriting"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="scriptBuilderApp()"> <!-- Input Form Section --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5"> <div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between"> <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"> <i class="icon-[ri--clapperboard-line] text-indigo-600 dark:text-indigo-400"></i> Naskah Animasi Pose-to-Pose Prompt Builder </h3> <button @click="randomizeParams()" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer"> 🎲 Randomize Ide Cerita </button> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <!-- Input Ide Cerita --> <div class="md:col-span-3 space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">IDE CERITA SEDERHANA</label> <div class="relative flex items-center"> <input type="text" x-model="storyIdea" placeholder="e.g. Ujang meminjam uang kas ronda untuk beli token listrik tapi habis buat top-up game." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> <button @click="showModal = true" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Template Cerita"> <i class="icon-[ri--list-settings-line] text-lg"></i> </button> </div> </div> <!-- Input Jumlah Part --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">JUMLAH PART</label> <input type="text" x-model="storyParts" placeholder="e.g. 3 Part" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> </div> <!-- Input Target Durasi --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">TARGET DURASI TOTAL</label> <input type="text" x-model="storyDuration" placeholder="e.g. 60 Detik" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> </div> <!-- Input Nuansa --> <div class="space-y-1.5"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400">NUANSA</label> <input type="text" x-model="storyTone" placeholder="e.g. KOMEDI / SATIRE" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"> </div> </div> </div> <!-- Output Section: Opsi 1 & Opsi 2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Opsi 1: Ringkasan Parameter / Prompt Pendek --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--text-snippet] text-indigo-600 dark:text-indigo-400"></i> Opsi 1: Ringkasan Input Naskah </h3> <button @click="copyText(generatedSummary, 'copied1')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied1 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[140px] flex items-center"> <p class="text-xs text-indigo-200 font-mono leading-relaxed" x-text="generatedSummary"></p> </div> </div> <!-- Opsi 2: Full Base Prompt Template --> <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col justify-between space-y-4"> <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"> <h3 class="text-xs font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <i class="icon-[ri--terminal-box-line] text-indigo-600 dark:text-indigo-400"></i> Opsi 2: Full Prompt Template </h3> <button @click="copyText(fullPrompt, 'copied2')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1 shadow-sm"> <i class="icon-[ri--file-copy-line]"></i> <span x-text="copied2 ? 'Disalin!' : 'Salin'"></span> </button> </div> <div class="bg-gray-950 p-3.5 rounded-xl flex-1 relative min-h-[140px] max-h-[240px] overflow-y-auto"> <pre class="text-xs text-indigo-200 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt"></pre> </div> </div> </div> <!-- Modal Picker Database Cerita / Template --> <div x-show="showModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showModal = false"> <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]"> <!-- Modal Header --> <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"> <h3 class="text-base font-semibold text-gray-800 dark:text-gray-200">Pilih Template Ide Cerita</h3> <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg"> <i class="icon-[ri--close-line]"></i> </button> </div> <!-- Filter Dropdown Kategori --> <div class="px-6 pt-4 pb-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2"> <label class="text-xs font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">Filter Kategori:</label> <select x-model="activeCategory" class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500 cursor-pointer"> <template x-for="(cat, catName) in storyDatabase" :key="catName"> <option :value="catName" x-text="catName"></option> </template> </select> </div> <!-- Modal Body --> <div class="p-6 overflow-y-auto space-y-4"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> <template x-for="item in storyDatabase[activeCategory]" :key="item.title"> <div @click="selectItem(item)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3 flex flex-col cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 space-y-1"> <span class="text-xs font-semibold text-gray-800 dark:text-gray-200" x-text="item.title"></span> <span class="text-[11px] text-indigo-600 dark:text-indigo-400 font-mono" x-text="item.idea"></span> <span class="text-[10px] text-gray-500 dark:text-gray-400 italic" x-text="'Durasi: ' + item.duration + ' | Nuansa: ' + item.tone"></span> </div> </template> </div> </div> </div> </div>
</div>

<script>
function scriptBuilderApp() {
    return {
        storyIdea: 'Ujang meminjam uang kas ronda untuk beli token listrik tapi habis buat top-up game.',
        storyParts: '3 Part',
        storyDuration: '60 Detik',
        storyTone: 'KOMEDI / SATIRE',
        copied1: false,
        copied2: false,
        showModal: false,
        activeCategory: 'Keseharian & Warga',

        storyDatabase: {
            "Keseharian & Warga": [
                {
                    title: "Uang Kas Ronda",
                    idea: "Ujang meminjam uang kas ronda untuk beli token listrik tapi habis buat top-up game.",
                    parts: "3 Part",
                    duration: "60 Detik",
                    tone: "KOMEDI / SATIRE"
                },
                {
                    title: "Gosip Ronda Malam",
                    idea: "Tuti membawa berita heboh tentang warga yang beli mobil baru padahal jarang keluar rumah.",
                    parts: "3 Part",
                    duration: "50 Detik",
                    tone: "KOMEDI / SATIRE"
                }
            ],
            "Konflik Pemuda": [
                {
                    title: "Hilangnya Dompet Kontrakan",
                    idea: "Jay menuduh Ujang mengambil uang kontrakan, tapi Ujang ngeles dengan logika investasi bodong.",
                    parts: "4 Part",
                    duration: "75 Detik",
                    tone: "KOMEDI / DRAMA"
                }
            ]
        },

        selectItem(item) {
            this.storyIdea = item.idea;
            this.storyParts = item.parts;
            this.storyDuration = item.duration;
            this.storyTone = item.tone;
            this.showModal = false;
        },

        randomizeParams() {
            const samples = [
                { idea: "Jay menuduh Ujang mengambil uang kontrakan, tapi Ujang ngeles dengan logika investasi bodong.", parts: "4 Part", duration: "75 Detik", tone: "KOMEDI / DRAMA" },
                { idea: "Tuti membawa berita heboh tentang warga yang beli mobil baru padahal jarang keluar rumah.", parts: "3 Part", duration: "50 Detik", tone: "KOMEDI / SATIRE" },
                { idea: "Supri Hansip menginterogasi Ilham karena nongkrong lewat jam malam di pos ronda.", parts: "3 Part", duration: "60 Detik", tone: "KOMEDI" }
            ];
            let rand = samples[Math.floor(Math.random() * samples.length)];
            this.storyIdea = rand.idea;
            this.storyParts = rand.parts;
            this.storyDuration = rand.duration;
            this.storyTone = rand.tone;
        },

        get generatedSummary() {
            let idea = this.storyIdea ? this.storyIdea.trim() : 'Ide cerita kosong.';
            let parts = this.storyParts ? this.storyParts.trim() : '3 Part';
            let duration = this.storyDuration ? this.storyDuration.trim() : '60 Detik';
            let tone = this.storyTone ? this.storyTone.trim() : 'KOMEDI';

            return `IDE CERITA: ${idea}\nJUMLAH PART: ${parts}\nTARGET DURASI: ${duration}\nNUANSA: ${tone}`;
        },

        get fullPrompt() {
            let idea = this.storyIdea ? this.storyIdea.trim() : 'Ujang meminjam uang kas ronda untuk beli token listrik tapi habis buat top-up game.';
            let parts = this.storyParts ? this.storyParts.trim() : '3 Part';
            let duration = this.storyDuration ? this.storyDuration.trim() : '60 Detik';
            let tone = this.storyTone ? this.storyTone.trim() : 'KOMEDI / SATIRE';

            return `Bertindak sebagai penulis naskah animasi Indonesia yang memahami keterbatasan produksi animasi pose-to-pose dengan aset karakter modular.
Naskah akan digunakan untuk animasi yang sebagian besar menggunakan pose statis, dengan perubahan utama pada ekspresi wajah dan bentuk mulut untuk dialog.
Karena itu, jangan menulis naskah seperti film live-action yang membutuhkan banyak gerakan kamera, blocking, gestur, atau animasi tubuh.
Prioritaskan:
DIALOG → KONFLIK → REAKSI → PERGANTIAN POSE SEDERHANA
bukan:
GERAKAN → AKSI → GERAKAN → GERAKAN

INPUT
IDE CERITA:
${idea}
JUMLAH PART:
${parts}
TARGET DURASI TOTAL:
${duration}
NUANSA:
${tone}

DATABASE KARAKTER
Gunakan karakter berikut sebagai CHARACTER POOL. Pilih karakter berdasarkan kebutuhan cerita.
- REMAJA PRIA: ILHAM, AKMAL
- REMAJA WANITA: ZAHRA, NISA
- PEMUDA PRIA: JAY, UJANG, HERMAN
- PEMUDA WANITA: LINA, VIRA, LARAS, AMEL
- ORANG TUA PRIA: KARTO, JUNED, SUPRI (HANSIP), JALAL (USTAD), BOKIR (RT)
- ORANG TUA WANITA: DARMI, TUTI, LELA

PRINSIP UTAMA ANIMASI (POSE-TO-POSE):
1. DIALOG ADALAH PRIORITAS (Duduk, berdiri, diam, interaksi lewat percakapan & konflik).
2. MINIMALKAN PERGANTIAN POSE (Satu pose untuk banyak dialog, ubah MULUT + EKSPRESI).
3. GUNAKAN AKSI HANYA JIKA PENTING (Ambil HP, buka pintu, dll. Hindari stage direction panjang).
4. JANGAN MEMBUAT DIALOG BERGANTUNG PADA GERAKAN.
5. PRIORITASKAN PERUBAHAN EKSPRESI & REAKSI SEBAGAI ANIMASI.
6. BATASI PERGANTIAN LOKASI.
7. RAPID-FIRE DIALOGUE (Dialog pendek, hindari kalimat terlalu panjang).
8. KOMEDI DARI DIALOG, LOGIKA NGAWUR, SALAH PAHAM, DAN PUNCHLINE.
9. DURASI EFISIEN (Capai target durasi lewat beat percakapan, bukan tambahan animasi/gerakan).

FORMAT OUTPUT WAJIB:
- [JUDUL CERITA]
- RINGKASAN (3-5 kalimat)
- STRUKTUR PART (Part, Durasi, Karakter, Lokasi, Konflik, Perkembangan)
- NASKAH LENGKAP (Beat demi beat, format dialog KARAKTER — EKSPRESI: "Dialog.")
- ATURAN STAGE DIRECTION MINIMAL & CHECKLIST PRODUKSI`;
        },

        copyText(text, targetKey) {
            navigator.clipboard.writeText(text);
            this[targetKey] = true;
            setTimeout(() => { this[targetKey] = false; }, 2000);
        }
    }
}
</script>