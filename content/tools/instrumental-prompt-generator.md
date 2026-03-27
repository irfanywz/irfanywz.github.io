---
title: "Instrumental Prompt Generator"
date: 2026-03-25T22:35:00+07:00
description: "Alat praktis untuk membuat prompt musik instrumental Suno AI menggunakan Gemini AI."
icon: "icon-[ri--music-2-line]"
---

<div class="max-w-6xl mx-auto mt-6" x-data="promptGenerator()">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
<!-- Left Column: Controls -->
<div class="lg:col-span-5 space-y-6">
<!-- API Key Section -->
<div class="p-4 rounded-xl border border-indigo-100 dark:border-indigo-900 bg-indigo-50/50 dark:bg-indigo-900/20 shadow-sm">
<label for="apiKey" class="block text-sm font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
<i class="icon-[ri--key-2-line]"></i> Gemini API Key
</label>
<div class="flex gap-2">
<input 
:type="showApiKey ? 'text' : 'password'" 
id="apiKey" 
x-model="apiKey"
class="flex-1 p-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
placeholder="Masukkan API Key Gemini Anda...">
<button @click="showApiKey = !showApiKey" class="px-3 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-800 rounded-lg text-gray-500 hover:text-indigo-500 transition-colors">
<i :class="showApiKey ? 'icon-[ri--eye-off-line]' : 'icon-[ri--eye-line]'"></i>
</button>
</div>
<p class="mt-2 text-[10px] sm:text-xs text-indigo-600 dark:text-indigo-400">
Dapatkan API Key di <a href="https://aistudio.google.com/app/apikey" target="_blank" class="underline font-bold">Google AI Studio</a>. Key disimpan secara lokal di browser Anda.
</p>
</div>

<!-- Input Section -->
<div class="flex flex-col gap-2">
<label for="userInput" class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--chat-quote-line]"></i> Deskripsi Musik
</label>
<textarea 
id="userInput" 
x-model="userInput"
rows="4" 
class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors resize-y shadow-sm" 
placeholder="Contoh: relaxing lofi hip hop with rainy mood..."></textarea>
</div>

<!-- Quantity Slider -->
<div class="flex flex-col gap-2">
<div class="flex justify-between items-center">
<label class="font-bold text-gray-700 dark:text-gray-300">Jumlah Variasi</label>
<span class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-sm font-mono font-bold" x-text="count"></span>
</div>
<input type="range" min="1" max="10" x-model="count" class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-600">
</div>

<!-- Action Buttons -->
<div class="flex flex-wrap gap-3">
<button 
@click="generatePrompt" 
:disabled="loading || !apiKey || !userInput"
class="flex-1 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
<i x-show="!loading" class="icon-[ri--magic-line]"></i>
<i x-show="loading" class="icon-[ri--loader-4-line] animate-spin"></i>
<span x-text="loading ? 'Generating...' : 'Generate Prompt'"></span>
</button>
<button 
@click="clearAll"
class="px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
<i class="icon-[ri--delete-bin-line]"></i>
</button>
</div>
</div>

<!-- Right Column: Results -->
<div class="lg:col-span-7 space-y-4">
<div class="flex justify-between items-center px-1">
<h3 class="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
<i class="icon-[ri--list-settings-line]"></i> Hasil Prompt
</h3>
<template x-if="outputs.length > 0">
<button @click="copyAll" class="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
<i class="icon-[ri--file-copy-2-line]"></i> Salin Semua
</button>
</template>
</div>

<div class="space-y-4">
<!-- Empty State -->
<template x-if="outputs.length === 0">
<div class="h-64 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl flex flex-col items-center justify-center text-gray-400 gap-2">
<i class="icon-[ri--music-ai-line] text-4xl"></i>
<p class="text-sm italic">Belum ada prompt yang dihasilkan.</p>
</div>
</template>

<!-- Result Cards -->
<template x-for="(item, index) in outputs" :key="index">
<div class="group relative p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-sm">
<div class="flex justify-between items-start mb-2">
<span class="text-[10px] font-bold uppercase tracking-wider text-gray-400" x-text="'Variation ' + (index + 1)"></span>
<button 
@click="copyOne(item, index)"
class="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 transition-colors">
<i :class="copiedIndex === index ? 'icon-[ri--check-line] text-emerald-500' : 'icon-[ri--file-copy-line]'"></i>
</button>
</div>
<p class="text-sm font-mono text-gray-700 dark:text-gray-300 break-words leading-relaxed" x-text="item"></p>
</div>
</template>
</div>
</div>
</div>
</div>

<script>
function promptGenerator() {
    return {
        apiKey: localStorage.getItem('gemini_api_key') || '',
        userInput: '',
        outputs: [],
        count: 5,
        loading: false,
        copiedIndex: null,
        showApiKey: false,

        init() {
            this.$watch('apiKey', value => localStorage.setItem('gemini_api_key', value));
        },

        async generatePrompt() {
            if (!this.apiKey || !this.userInput) return;
            
            this.loading = true;
            this.outputs = [];

            const systemPrompt = `You are an expert Suno AI music prompt generator. Generate exactly ${this.count} unique variations of detailed instrumental music style prompts based on user input. 
            CRITICAL RULES:
            1. Output MUST be instrumental only (no vocals).
            2. Each prompt should be a string of descriptive tags (e.g., [Instrumental], [Genre], [Mood], [BPM], [Instruments]).
            3. Format the response as a simple JSON array of strings. 
            4. Do not include any Markdown formatting like \`\`\`json or explanations. Just the array.`;

            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: `${systemPrompt}\n\nUser input: ${this.userInput}` }]
                        }]
                    })
                });

                const data = await response.json();
                if (data.error) throw new Error(data.error.message);
                
                let textResponse = data.candidates[0].content.parts[0].text.trim();
                // Cleaning common AI markdown junk if any
                textResponse = textResponse.replace(/^```json/i, '').replace(/```$/i, '').trim();
                
                this.outputs = JSON.parse(textResponse);
            } catch (error) {
                console.error(error);
                this.outputs = ["Error: Gagal memproses data. Pastikan API Key benar atau format response sesuai."];
            } finally {
                this.loading = false;
            }
        },

        copyOne(text, index) {
            navigator.clipboard.writeText(text).then(() => {
                this.copiedIndex = index;
                setTimeout(() => this.copiedIndex = null, 2000);
            });
        },

        copyAll() {
            const allText = this.outputs.join('\n\n');
            navigator.clipboard.writeText(allText).then(() => {
                alert('Semua prompt telah disalin!');
            });
        },

        clearAll() {
            this.userInput = '';
            this.outputs = [];
        }
    }
}
</script>