---
title: "Naskah Dialog Animasi Custom"
slug: "animasi-dialog-script-custom"
description: "Tool builder interaktif naskah dialog animasi komedi dan cerita Indonesia dengan database karakter lengkap berstatus aktif/non-aktif, tombol pembatalan edit, serta modal pilihan genre dan ide cerita."
icon: "icon-[ri--chat-quote-line]"
categories:
  - "Script"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="animasiScriptApp()" x-init="initData(); initSwiper()">

<!-- Input Form Section -->
<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-5">
<div class="border-b border-gray-100 dark:border-gray-700 pb-3 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--chat-quote-line] text-indigo-600 dark:text-indigo-400"></i> Pose-to-Pose Dialogue Script Generator
</h3>
<div class="flex items-center gap-2">
<!-- Tombol Kelola Database Karakter -->
<button @click="showCharModal = true" class="text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--team-line]"></i> Kelola Karakter (<span x-text="characters.filter(c => c.active).length"></span>/<span x-text="characters.length"></span>)
</button>
<!-- Tombol Backup / Export-Import -->
<button @click="showBackupModal = true" class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5">
<i class="icon-[ri--database-2-line]"></i> Backup
</button>
</div>
</div>

<!-- Form Grid: Ide, Bagian, Durasi, Nuansa/Genre -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<!-- Ide Cerita / Premis (Dengan Modal Picker & Suggestion) -->
<div class="space-y-1.5 sm:col-span-2">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[IDE CERITA / PREMIS]</label>
<div class="relative flex items-center">
<input type="text" x-model="idea" @focus="$el.select()" placeholder="e.g. Debat soal aturan ronda malam yang berujung salah paham..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showIdeaModal = true; $nextTick(() => { if(ideaSwiper) ideaSwiper.update(); })" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Ide Cerita / Premis">
<i class="icon-[ri--list-settings-line] text-lg"></i>
</button>
</div>
</div>

<!-- Jumlah Part (Input Biasa) -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[JUMLAH PART]</label>
<input type="text" x-model="parts" @focus="$el.select()" placeholder="e.g. 3 Part" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<!-- Target Durasi Total (Input Biasa) -->
<div class="space-y-1.5">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[TARGET DURASI TOTAL]</label>
<input type="text" x-model="duration" @focus="$el.select()" placeholder="e.g. 30 Menit" class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>

<!-- Nuansa / Genre (Dengan Modal Picker & Pilihan Kosakata Luas) -->
<div class="space-y-1.5 sm:col-span-2">
<label class="text-xs font-medium text-gray-600 dark:text-gray-400">[NUANSA / GENRE]</label>
<div class="relative flex items-center">
<input type="text" x-model="tone" @focus="$el.select()" placeholder="Pilih atau ketik nuansa/genre..." class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl pl-3 pr-10 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<button @click="showGenreModal = true" class="absolute right-2 text-indigo-600 dark:text-indigo-400 p-1 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-lg cursor-pointer" title="Pilih Nuansa/Genre">
<i class="icon-[ri--list-settings-line] text-lg"></i>
</button>
</div>
</div>
</div>
</div>

<!-- Output Section: Master Prompt Template -->
<div class="bg-gray-900 dark:bg-gray-950 rounded-2xl border border-gray-800 shadow-lg overflow-hidden">
<div class="px-5 py-4 bg-gray-950/60 border-b border-gray-800/80 flex items-center justify-between">
<h3 class="text-xs font-semibold text-gray-200 flex items-center gap-2">
<i class="icon-[ri--terminal-box-line] text-indigo-400 text-base"></i> Full Master Prompt Template
</h3>
<button @click="copyText(fullPrompt, 'copied')" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3.5 py-1.5 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5 shadow-sm">
<i class="icon-[ri--file-copy-line]"></i>
<span x-text="copied ? 'Disalin!' : 'Salin Prompt'"></span>
</button>
</div>
<div class="overflow-y-auto">
<pre class="text-xs text-indigo-200/90 font-mono leading-relaxed whitespace-pre-wrap" x-text="fullPrompt" style="margin: 0 !important;"></pre>
</div>
</div>

<!-- Modal Picker Ide Cerita / Premis -->
<div x-show="showIdeaModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showIdeaModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200">Pilih Premis & Konteks Cerita</h3>
<button @click="showIdeaModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<!-- Swiper Filter Kategori Ide -->
<div class="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
<div class="swiper idea-swiper w-full overflow-hidden">
<div class="swiper-wrapper">
<div class="swiper-slide !w-auto">
<button @click="activeIdeaCategory = 'All'" 
class="text-xs px-3.5 py-1.5 rounded-full transition font-medium cursor-pointer border whitespace-nowrap shadow-xs"
:class="activeIdeaCategory === 'All' ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500'">
All
</button>
</div>
<template x-for="(cat, catName) in ideaDatabase" :key="catName">
<div class="swiper-slide !w-auto">
<button @click="activeIdeaCategory = catName" 
class="text-xs px-3.5 py-1.5 rounded-full transition font-medium cursor-pointer border whitespace-nowrap shadow-xs"
:class="activeIdeaCategory === catName ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500'"
x-text="catName">
</button>
</div>
</template>
</div>
</div>
</div>
<!-- Modal Body (Grid Card Ide) -->
<div class="p-5 overflow-y-auto space-y-4">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
<template x-for="item in filteredIdeas" :key="item.title">
<div @click="selectIdea(item)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3.5 cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 space-y-1">
<div class="flex items-center justify-between">
<span class="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" x-text="item.title"></span>
<span class="text-[10px] bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-md font-medium" x-text="item.category"></span>
</div>
<p class="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed" x-text="item.description"></p>
</div>
</template>
</div>
</div>
</div>
</div>

<!-- Modal Picker Nuansa / Genre -->
<div x-show="showGenreModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showGenreModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--list-settings-line] text-indigo-600 dark:text-indigo-400"></i> Pilih Nuansa & Genre Cerita
</h3>
<button @click="showGenreModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<div class="p-5 overflow-y-auto space-y-3">
<template x-for="item in genreDatabase" :key="item.title">
<div @click="selectGenre(item)" class="group border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-xl p-3.5 cursor-pointer transition bg-gray-50 dark:bg-gray-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 space-y-1">
<div class="flex items-center justify-between">
<span class="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" x-text="item.title"></span>
<span class="text-[10px] bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-md font-medium" x-text="item.category"></span>
</div>
<p class="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed" x-text="item.description"></p>
</div>
</template>
</div>
</div>
</div>

<!-- Modal Kelola Database Karakter Kustom -->
<div x-show="showCharModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showCharModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[85vh]">
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--team-line] text-indigo-600 dark:text-indigo-400"></i> Database Karakter & Status Keaktifan
</h3>
<button @click="showCharModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>

<div class="p-5 overflow-y-auto space-y-4">
<!-- Form Tambah / Edit Karakter -->
<div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 space-y-3">
<h4 class="text-xs font-semibold text-gray-700 dark:text-gray-300" x-text="editIndex === null ? '+ Tambah Karakter Baru' : '✏️ Edit Karakter'"></h4>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
<input type="text" x-model="formChar.name" placeholder="Nama Karakter (Cth: JAY)" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
<input type="text" x-model="formChar.category" placeholder="Kategori (Cth: PEMUDA PRIA)" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500">
</div>
<textarea rows="2" x-model="formChar.personality" placeholder="Deskripsi & Kepribadian..." class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-3 text-xs text-gray-800 dark:text-gray-200 focus:outline-none focus:border-indigo-500"></textarea>
<div class="flex items-center justify-between">
<label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer">
<input type="checkbox" x-model="formChar.active" class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
Status Aktif Digunakan di Prompt
</label>
<div class="flex gap-2">
<button type="button" x-show="editIndex !== null" @click="resetCharForm()" class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1.5 rounded-xl transition font-medium cursor-pointer">Batal</button>
<button type="button" @click="saveCharacter()" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-1.5 rounded-xl transition font-medium cursor-pointer" x-text="editIndex === null ? 'Simpan Karakter' : 'Perbarui Karakter'"></button>
</div>
</div>
</div>

<!-- List Karakter yang Tersimpan -->
<div class="space-y-2">
<h4 class="text-xs font-semibold text-gray-600 dark:text-gray-400">Daftar Seluruh Karakter:</h4>
<template x-for="(char, idx) in characters" :key="idx">
<div class="flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs" :class="!char.active && 'opacity-60 bg-gray-50 dark:bg-gray-900/40'">
<div class="space-y-0.5 pr-2">
<div class="flex items-center gap-2">
<span class="font-bold text-gray-800 dark:text-gray-200" x-text="char.name"></span>
<span class="text-[10px] bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-md font-medium" x-text="char.category"></span>
<span class="text-[10px] px-2 py-0.5 rounded-md font-medium" :class="char.active ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'" x-text="char.active ? 'Aktif' : 'Non-Aktif'"></span>
</div>
<p class="text-gray-500 dark:text-gray-400" x-text="char.personality"></p>
</div>
<div class="flex items-center gap-1 shrink-0">
<button @click="toggleActive(idx)" class="p-1.5 hover:text-indigo-600 cursor-pointer" :title="char.active ? 'Nonaktifkan' : 'Aktifkan'"><i :class="char.active ? 'icon-[ri--toggle-fill] text-indigo-600 text-base' : 'icon-[ri--toggle-line] text-gray-400 text-base'"></i></button>
<button @click="editCharacter(idx)" class="p-1.5 text-gray-500 hover:text-indigo-600 cursor-pointer" title="Edit"><i class="icon-[ri--edit-line]"></i></button>
<button @click="deleteCharacter(idx)" class="p-1.5 text-gray-500 hover:text-red-600 cursor-pointer" title="Hapus"><i class="icon-[ri--delete-bin-line]"></i></button>
</div>
</div>
</template>
</div>
</div>
</div>
</div>

<!-- Modal Backup & Export-Import LocalStorage -->
<div x-show="showBackupModal" x-cloak class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4" @click.self="showBackupModal = false">
<div class="bg-white dark:bg-gray-800 w-full max-w-lg rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col">
<div class="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
<h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
<i class="icon-[ri--database-2-line] text-indigo-600 dark:text-indigo-400"></i> Backup & Sinkronisasi Data Karakter
</h3>
<button @click="showBackupModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer text-lg">
<i class="icon-[ri--close-line]"></i>
</button>
</div>
<div class="p-5 space-y-4 text-xs">
<p class="text-gray-500 dark:text-gray-400 leading-relaxed">
Semua database karakter kustom Anda tersimpan otomatis di browser (<code class="text-indigo-600 dark:text-indigo-400">localStorage</code>). Anda dapat mengekspor data ke file JSON atau mengimpornya ke perangkat lain.
</p>
<div class="flex gap-2">
<button @click="exportData()" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition font-medium cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
<i class="icon-[ri--download-line]"></i> Ekspor JSON
</button>
<label class="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-xl transition font-medium cursor-pointer flex items-center justify-center gap-1.5 text-center">
<i class="icon-[ri--upload-line]"></i> Impor JSON
<input type="file" @change="importData($event)" accept=".json" class="hidden">
</label>
</div>
</div>
</div>
</div>

</div>

<script>
function animasiScriptApp() {
    return {
        idea: 'Debat soal iuran ronda malam di pos kamling yang berujung salah paham antara hansip senior dan preman pasar setempat.',
        parts: '3 Part',
        duration: '30 Menit',
        tone: 'Komedi satire tongkrongan bapak-bapak, ceplas-ceplos, santai',
        copied: false,
        showCharModal: false,
        showIdeaModal: false,
        showGenreModal: false,
        showBackupModal: false,
        editIndex: null,
        activeIdeaCategory: 'All',
        ideaSwiper: null,

        formChar: {
            name: '',
            category: '',
            personality: '',
            active: true
        },

        ideaDatabase: {
            "Satire & Warga": [
                {
                    title: "Debat Iuran Ronda",
                    category: "Satire & Warga",
                    description: "Debat soal iuran ronda malam yang berujung salah paham konyol antara hansip dan warga."
                },
                {
                    title: "Gosip Pos Ronda",
                    category: "Satire & Warga",
                    description: "Dua emak-emak membahas harga sembako yang naik tapi berujung ngegosipin tetangga sebelah."
                }
            ],
            "Kerajaan & Klasik": [
                {
                    title: "Rapat Darurat Istana",
                    category: "Kerajaan",
                    description: "Sultan dan patih kerajaan panik karena anggaran kas kerajaan habis dipakai buat beli koleksi batu akik permaisuri."
                },
                {
                    title: "Sayembara Pangeran",
                    category: "Kerajaan",
                    description: "Pangeran kerajaan mengadakan sayembara mencari jodoh, tapi pesertanya malah tukang utang keliling."
                }
            ],
            "Percintaan & Hubungan": [
                {
                    title: "Gombalan Maut Warung Kopi",
                    category: "Percintaan",
                    description: "Pemuda mencoba merayu gebetan menggunakan diksi puisi sastra tinggi tapi salah konteks di warung kopi."
                },
                {
                    title: "Drama Restu Calon Mertua",
                    category: "Percintaan",
                    description: "Calon pengantin salah paham mendiskusikan mas kawin yang berujung debat sengit urusan dapur."
                }
            ],
            "Remaja & Teknologi": [
                {
                    title: "Gamer Gagal Paham",
                    category: "Remaja",
                    description: "Remaja ngobrolin strategi mabar game online tapi nyambungnya ke urusan perdukunan kampung."
                },
                {
                    title: "Tugas Kelompok Online",
                    category: "Remaja",
                    description: "Ribut kerja kelompok online tapi ujung-ujungnya malah bahas pinjol dan makanan warteg."
                }
            ]
        },

        genreDatabase: [
            {
                title: "Komedi Satire Tongkrongan (Bapak-bapak)",
                category: "Satire",
                description: "Nuansa obrolan santai di pos ronda atau warung kopi, penuh sindiran sosial ringan, ceplas-ceplos, dan gaya bapak-bapak."
            },
            {
                title: "Komedi Slapstick & Salah Paham Absurd",
                category: "Slapstick",
                description: "Fokus pada konflik logika ngawur yang meningkat cepat akibat kesalahpahaman konyol antar karakter."
            },
            {
                title: "Komedi Obrolan Remaja / Zilenial Sarkas",
                category: "Zilenial",
                description: "Gaya bahasa tongkrongan anak muda zaman sekarang yang sarkas, penuh istilah gaul, namun cepat berdebat hal sepele."
            },
            {
                title: "Komedi Situasi Istana / Kerajaan Klasik",
                category: "Kerajaan",
                description: "Nuansa dialog kolosal klasik kerajaan namun dibumbui keluh kesah modern, bahasa baku campur gaul yang absurd."
            },
            {
                title: "Komedi Romantis & Drama Percintaan Koplak",
                category: "Romantis",
                description: "Nuansa percintaan manis yang mendadak hancur karena obrolan realistis, salah tingkah, dan gombalan garing."
            },
            {
                title: "Komedi Situasi Emak-emak / Tetangga Julid",
                category: "Sitcom",
                description: "Dinamika obrolan tetangga atau emak-emak rumpik yang hobi memelintir fakta dan membongkar rahasia."
            },
            {
                title: "Komedi Misteri & Horor Jomplang",
                category: "Misteri / Horor",
                description: "Suasana mistis atau investigasi serius yang mendadak jadi konyol karena karakternya penakut dan ribut soal hal sepele."
            },
            {
                title: "Komedi Petualangan Fantasi Absurd",
                category: "Fantasi",
                description: "Kisah petualangan dunia fantasi ala RPG atau isekai, tapi karakternya malas jalan dan ributin urusan logistik makanan."
            }
        ],

        characters: [
            { name: 'ILHAM', category: 'REMAJA PRIA', personality: 'Remaja santai, sering sok tahu tapi penakut kalau ditegur.', active: true },
            { name: 'AKMAL', category: 'REMAJA PRIA', personality: 'Remaja pendiam, hobi main game offline tapi jadi kompor dalam obrolan.', active: true },
            { name: 'ZAHRA', category: 'REMAJA WANITA', personality: 'Remaja kritis, hobi nyinyir dan memotong pembicaraan orang.', active: true },
            { name: 'NISA', category: 'REMAJA WANITA', personality: 'Remaja ceria yang gampang panik dan hobi ngemil keripik.', active: true },
            { name: 'JAY', category: 'PEMUDA PRIA', personality: 'Pemuda preman pasar, nada bicara ngegas tapi berhati lembut.', active: true },
            { name: 'UJANG', category: 'PEMUDA PRIA', personality: 'Pemuda pengangguran filosofis, hobi nyeletuk ngawur.', active: true },
            { name: 'HERMAN', category: 'PEMUDA PRIA', personality: 'Pemuda ambisius tapi selalu sial dalam setiap usaha.', active: true },
            { name: 'LINA', category: 'PEMUDA WANITA', personality: 'Gadis mandiri pekerja pabrik yang ceplas-ceplos.', active: true },
            { name: 'VIRA', category: 'PEMUDA WANITA', personality: 'Kasir toko kelontong yang hobi menghakimi pilihan belanja orang.', active: true },
            { name: 'LARAS', category: 'PEMUDA WANITA', personality: 'Pencinta tanaman hias yang sensitif kalau tanamannya dikritik.', active: true },
            { name: 'AMEL', category: 'PEMUDA WANITA', personality: 'Anak senja penikmat kopi sachet yang suka bikin status galau.', active: true },
            { name: 'KARTO', category: 'ORANG TUA PRIA', personality: 'Pensiunan pemarah yang hobi mengeluh soal harga bensin dan listrik.', active: true },
            { name: 'JUNED', category: 'ORANG TUA PRIA', personality: 'Warga senior yang suka pura-pura tuli kalau diminta iuran.', active: true },
            { name: 'SUPRI', category: 'ORANG TUA PRIA (HANSIP)', personality: 'Hansip senior yang baperan, tegas tapi gampang kena mental.', active: true },
            { name: 'JALAL', category: 'ORANG TUA PRIA (USTAD)', personality: 'Tokoh agama kampung yang sabar tapi sering kepancing logika nyeleneh warga.', active: true },
            { name: 'BOKIR', category: 'ORANG TUA PRIA (RT)', personality: 'Pak RT licik yang hobi cari muka dan manipulasi dana sumbangan.', active: true },
            { name: 'DARMI', category: 'ORANG TUA WANITA', personality: 'Emak-emak ketua arisan yang hobi membongkar rahasia tetangga.', active: true },
            { name: 'TUTI', category: 'ORANG TUA WANITA', personality: 'Pemilik warung sembako yang hobi ngebon-in utang warga.', active: true },
            { name: 'LELA', category: 'ORANG TUA WANITA', personality: 'Ibu-ibu hobi senam pagi yang suka menyebar info hoaks grup WhatsApp.', active: true }
        ],

        get filteredIdeas() {
            if (this.activeIdeaCategory === 'All') {
                let all = [];
                for (let cat in this.ideaDatabase) {
                    all.push(...this.ideaDatabase[cat]);
                }
                return all;
            }
            return this.ideaDatabase[this.activeIdeaCategory] || [];
        },

        initSwiper() {
            this.$nextTick(() => {
                if (typeof Swiper !== 'undefined') {
                    this.ideaSwiper = new Swiper('.idea-swiper', {
                        slidesPerView: 'auto',
                        spaceBetween: 8,
                        freeMode: true,
                    });
                }
            });
        },

        initData() {
            const saved = localStorage.getItem('animasi_dialog_chars_v2');
            if (saved) {
                try {
                    this.characters = JSON.parse(saved);
                } catch(e) {
                    console.error('Gagal memuat localstorage karakter');
                }
            }
        },

        saveStorage() {
            localStorage.setItem('animasi_dialog_chars_v2', JSON.stringify(this.characters));
        },

        selectIdea(item) {
            this.idea = item.description;
            this.showIdeaModal = false;
        },

        selectGenre(item) {
            this.tone = item.title;
            this.showGenreModal = false;
        },

        saveCharacter() {
            if(!this.formChar.name.trim() || !this.formChar.personality.trim()) return;
            if(this.editIndex === null) {
                this.characters.push({ ...this.formChar });
            } else {
                this.characters[this.editIndex] = { ...this.formChar };
                this.editIndex = null;
            }
            this.resetCharForm();
            this.saveStorage();
        },

        editCharacter(index) {
            this.editIndex = index;
            this.formChar = { ...this.characters[index] };
        },

        resetCharForm() {
            this.editIndex = null;
            this.formChar = { name: '', category: '', personality: '', active: true };
        },

        deleteCharacter(index) {
            this.characters.splice(index, 1);
            if(this.editIndex === index) {
                this.resetCharForm();
            }
            this.saveStorage();
        },

        toggleActive(index) {
            this.characters[index].active = !this.characters[index].active;
            this.saveStorage();
        },

        exportData() {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.characters, null, 2));
            const dlAnchor = document.createElement('a');
            dlAnchor.setAttribute("href", dataStr);
            dlAnchor.setAttribute("download", "karakter_animasi_dialog.json");
            document.body.appendChild(dlAnchor);
            dlAnchor.click();
            dlAnchor.remove();
        },

        importData(event) {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const parsed = JSON.parse(e.target.result);
                    if (Array.isArray(parsed)) {
                        this.characters = parsed;
                        this.saveStorage();
                        alert('Database karakter berhasil diimpor!');
                    }
                } catch(err) {
                    alert('Format file JSON tidak valid.');
                }
            };
            reader.readAsText(file);
        },

        get fullPrompt() {
            let ideaText = this.idea ? this.idea.trim() : 'Debat konyol antar warga di pos ronda.';
            let partsText = this.parts ? this.parts.trim() : '3 Part';
            let durationText = this.duration ? this.duration.trim() : '30 Menit';
            let toneText = this.tone ? this.tone.trim() : 'Komedi satire tongkrongan bapak-bapak, ceplas-ceplos, santai';
            let charPoolFormatted = this.characters
                .filter(c => c.active)
                .map(c => `- ${c.name} (${c.category}): ${c.personality}`)
                .join('\n');

            return `Bertindak sebagai penulis naskah animasi Indonesia yang memahami keterbatasan produksi animasi pose-to-pose dengan aset karakter modular.

Naskah akan digunakan untuk animasi yang sebagian besar menggunakan pose statis, dengan perubahan utama pada ekspresi wajah dan bentuk mulut untuk dialog.
Karena itu, jangan menulis naskah seperti film live-action yang membutuhkan banyak gerakan kamera, blocking, gestur, atau animasi tubuh.

Prioritaskan:
DIALOG → KONFLIK → REAKSI → PERGANTIAN POSE SEDERHANA
bukan:
GERAKAN → AKSI → GERAKAN → GERAKAN

INPUT
IDE CERITA:
${ideaText}

JUMLAH PART:
${partsText}

TARGET DURASI TOTAL:
${durationText}

NUANSA / GENRE:
${toneText}

DATABASE KARAKTER KUSTOM & KEPRIBADIAN:
Pilih karakter dari pool berikut dan pertahankan konsistensi kepribadian serta gaya bicaranya dalam dialog:
${charPoolFormatted}

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