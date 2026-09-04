---
title: "Image Diff Viewer"
date: 2026-08-24T03:00:00+07:00
description: "Alat pembanding dua gambar secara interaktif dengan slider geser langsung."
icon: "icon-[ri--exchange-line]"
categories:
  - "Image"
---

<div class="max-w-4xl mx-auto mt-6 space-y-6" x-data="imageDiffApp()"> <!-- Upload Section (Tampil jika gambar belum lengkap) --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" x-show="!original || !modified"> <!-- Upload Original --> <div class="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-6 text-center relative hover:border-indigo-500 dark:hover:border-indigo-500 transition shadow-sm cursor-pointer" @dragover.prevent @drop.prevent="handleDrop($event, 'original')" @click="$refs.fileOriginal.click()"> <input type="file" x-ref="fileOriginal" @change="loadImage($event, 'original')" accept="image/*" class="hidden"> <div x-show="!original" class="space-y-2 pointer-events-none"> <div class="inline-flex p-3 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 mb-1"> <i class="icon-[ri--image-add-line] text-2xl"></i> </div> <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Seret atau Upload <span class="text-indigo-600 dark:text-indigo-400 font-semibold">Original</span></p> <p class="text-xs text-gray-400">JPG, PNG, WEBP</p> </div> <div x-show="original" x-cloak class="relative group"> <img :src="original" class="max-h-48 mx-auto rounded-lg object-contain shadow-sm"> <button @click.stop="original = null" class="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full text-xs shadow hover:bg-red-700 transition cursor-pointer"> <i class="icon-[ri--close-line]"></i> </button> </div> </div> <!-- Upload Modified --> <div class="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-6 text-center relative hover:border-cyan-500 dark:hover:border-cyan-500 transition shadow-sm cursor-pointer" @dragover.prevent @drop.prevent="handleDrop($event, 'modified')" @click="$refs.fileModified.click()"> <input type="file" x-ref="fileModified" @change="loadImage($event, 'modified')" accept="image/*" class="hidden"> <div x-show="!modified" class="space-y-2 pointer-events-none"> <div class="inline-flex p-3 rounded-full bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 mb-1"> <i class="icon-[ri--image-edit-line] text-2xl"></i> </div> <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Seret atau Upload <span class="text-cyan-600 dark:text-cyan-400 font-semibold">Modifikasi</span></p> <p class="text-xs text-gray-400">JPG, PNG, WEBP</p> </div> <div x-show="modified" x-cloak class="relative group"> <img :src="modified" class="max-h-48 mx-auto rounded-lg object-contain shadow-sm"> <button @click.stop="modified = null" class="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full text-xs shadow hover:bg-red-700 transition cursor-pointer"> <i class="icon-[ri--close-line]"></i> </button> </div> </div> </div> <!-- Viewer Section (Aktif jika kedua gambar sudah di-upload) --> <div x-show="original && modified" x-cloak class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 space-y-4"> <!-- Controls Toolbar --> <div class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-700 pb-4"> <!-- Mode Switcher --> <div class="flex bg-gray-100 dark:bg-gray-900 p-1 rounded-xl"> <button @click="mode = 'slider'" :class="mode === 'slider' ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'" class="px-4 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer"> Slider Mode </button> <button @click="mode = 'side'" :class="mode === 'side' ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'" class="px-4 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer"> Side-by-Side </button> </div> <!-- Info text / Tip --> <div x-show="mode === 'slider'" class="text-xs text-gray-400 hidden sm:block"> 💡 Klik atau seret langsung pada gambar untuk membandingkan </div> <!-- Reset Button --> <button @click="resetAll()" class="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs px-3.5 py-2 rounded-xl transition font-medium cursor-pointer flex items-center gap-1.5"> <i class="icon-[ri--refresh-line]"></i> Reset / Ganti Gambar </button> </div> <!-- Display Area: Interactive Slider Mode --> <div x-show="mode === 'slider'" class="relative w-full overflow-hidden rounded-xl select-none flex justify-center bg-gray-950 min-h-[400px] cursor-ew-resize" @mousemove="isDragging && updateSlider($event)" @touchmove="isDragging && updateSlider($event)" @mousedown="isDragging = true; updateSlider($event)" @mouseup="isDragging = false" @mouseleave="isDragging = false" @touchstart="isDragging = true; updateSlider($event)" @touchend="isDragging = false"> <!-- Base Image (Modified / Sesudah) --> <img :src="modified" class="max-h-[600px] w-auto object-contain block mx-auto pointer-events-none"> <!-- Overlay Image (Original / Sebelum) --> <div class="absolute inset-0 overflow-hidden flex justify-center pointer-events-none" :style="`width: ${sliderPos}%`"> <img :src="original" class="max-h-[600px] w-auto max-w-none object-contain absolute left-0 h-full"> </div> <!-- Divider Line --> <div class="absolute top-0 bottom-0 w-1 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] pointer-events-none" :style="`left: ${sliderPos}%`"> <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"> ↔ </div> </div> <!-- Labels --> <span class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-xs px-2.5 py-1 rounded-md text-indigo-300 font-medium border border-white/15 pointer-events-none">Original</span> <span class="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-xs px-2.5 py-1 rounded-md text-cyan-300 font-medium border border-white/15 pointer-events-none">Modified</span> </div> <!-- Display Area: Side-by-Side Mode --> <div x-show="mode === 'side'" x-cloak class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-950 p-4 rounded-xl"> <div class="relative text-center"> <span class="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-xs px-2.5 py-1 rounded-md text-indigo-300 font-medium z-10 border border-white/15">Original</span> <img :src="original" class="max-h-[500px] mx-auto rounded-lg object-contain"> </div> <div class="relative text-center"> <span class="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-xs px-2.5 py-1 rounded-md text-cyan-300 font-medium z-10 border border-white/15">Modified</span> <img :src="modified" class="max-h-[500px] mx-auto rounded-lg object-contain"> </div> </div> </div>
</div>

<script>
function imageDiffApp() {
    return {
        original: null,
        modified: null,
        mode: 'slider',
        sliderPos: 50,
        isDragging: false,
        loadImage(event, type) {
            const file = event.target.files[0];
            if (file) this.processFile(file, type);
        },
        handleDrop(event, type) {
            const file = event.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.processFile(file, type);
            }
        },
        processFile(file, type) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this[type] = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        updateSlider(event) {
            const rect = event.currentTarget.getBoundingClientRect();
            const clientX = event.touches ? event.touches[0].clientX : event.clientX;
            let x = clientX - rect.left;
            
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;
            
            this.sliderPos = Math.round((x / rect.width) * 100);
        },
        resetAll() {
            this.original = null;
            this.modified = null;
            this.sliderPos = 50;
            this.isDragging = false;
        }
    }
}
</script>