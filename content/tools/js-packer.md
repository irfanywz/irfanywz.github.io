---
title: "JavaScript Packer & Unpacker"
date: 2026-03-30T12:00:00+07:00
description: "Alat online gratis untuk melakukan packer (mengemas) dan unpacker (membuka) kode JavaScript dengan mudah."
icon: "icon-[ri--code-box-line]"
categories:
  - "Web"
---

<div class="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md" x-data="deanEdwardsPackerWithRunner()">
  <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Dean Edwards JS Packer, Unpacker & Tester</h2>
  <p class="text-gray-600 dark:text-gray-300 mb-6">
    Alat pack/unpack skrip JS mandiri lengkap dengan simulator eksekusi untuk uji coba langsung.
  </p>

  <!-- Input Area -->
  <div class="mb-4">
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Kode Masukan (Input)</label>
    <textarea 
      x-model="inputCode" 
      rows="8" 
      class="w-full p-3 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      placeholder="Tempel kode JavaScript di sini..."></textarea>
  </div>

  <!-- Action Buttons -->
  <div class="flex flex-wrap gap-3 mb-6">
    <button 
      @click="packScript()" 
      class="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
      Pack JavaScript
    </button>
    <button 
      @click="unpackScript()" 
      class="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
      Unpack JavaScript
    </button>
    <button 
      @click="runScript()" 
      class="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition">
      Jalankan Script (Test Run)
    </button>
    <button 
      @click="clearAll()" 
      class="px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition dark:bg-gray-700 dark:text-gray-200">
      Bersihkan
    </button>
  </div>

  <!-- Output Area -->
  <div class="mb-4">
    <div class="flex justify-between items-center mb-2">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Hasil (Output)</label>
      <button 
        @click="copyOutput()" 
        x-show="outputCode"
        class="text-xs text-blue-600 dark:text-blue-400 hover:underline">
        <span x-text="copied ? 'Berhasil Disalin!' : 'Salin ke Clipboard'"></span>
      </button>
    </div>
    <textarea 
      x-model="outputCode" 
      rows="8" 
      readonly 
      class="w-full p-3 font-mono text-sm border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      placeholder="Hasil akan muncul di sini..."></textarea>
  </div>

  <!-- Console Log / Test Result Area -->
  <div class="mt-6">
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Virtual Console Output (Hasil Eksekusi)</label>
    <div class="w-full p-3 font-mono text-xs bg-black text-green-400 rounded-lg h-36 overflow-y-auto border border-gray-700">
      <template x-if="logs.length === 0">
        <span class="text-gray-500">// Belum ada eksekusi. Klik "Jalankan Script" untuk menguji kode pada kotak input atau output.</span>
      </template>
      <template x-for="log in logs">
        <div x-text="log" class="mb-1"></div>
      </template>
    </div>
  </div>
</div>

<script>
document.addEventListener('alpine:init', () => {
    Alpine.data('deanEdwardsPackerWithRunner', () => ({
        inputCode: '',
        outputCode: '',
        logs: [],
        copied: false,

        packScript() {
            if (!this.inputCode.trim()) {
                this.outputCode = '// Masukkan kode terlebih dahulu!';
                return;
            }
            try {
                let code = this.inputCode.trim();
                code = code.replace(/\/\*[\s\S]*?\*\/|([^:])\/\/.*/g, '$1');

                let words = code.match(/\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g) || [];
                let freq = {};
                words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
                
                let sortedWords = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
                let keywords = sortedWords.slice(0, 62);

                let compressed = code;
                let keywordMap = [];

                keywords.forEach((word, index) => {
                    let encodedWord = this.toBase62(index);
                    keywordMap.push(word);
                    let regex = new RegExp('\\b' + word + '\\b', 'g');
                    compressed = compressed.replace(regex, encodedWord);
                });

                let p = compressed.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/[\r\n]+/g, '\\n');
                let k = keywordMap.join('|');
                let c = keywordMap.length;

                let packed = `eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}('${p}',36,${c},'${k}'.split('|'),0,{}))`;

                this.outputCode = packed;
                this.logs.push('[INFO] Skrip berhasil di-pack.');
            } catch (e) {
                this.outputCode = '// Gagal melakukan pack: ' + e.message;
                this.logs.push('[ERROR] Pack gagal: ' + e.message);
            }
        },

        unpackScript() {
            if (!this.inputCode.trim()) {
                this.outputCode = '// Masukkan kode terlebih dahulu!';
                return;
            }
            try {
                let code = this.inputCode.trim();
                if (code.startsWith('eval(function(p,a,c,k,e')) {
                    let unpacked = eval('(' + code.replace(/^eval/, '') + ')');
                    this.outputCode = unpacked;
                    this.logs.push('[INFO] Skrip berhasil di-unpack.');
                } else {
                    this.outputCode = '// Bukan format Dean Edwards Packer yang valid!';
                    this.logs.push('[WARN] Format bukan Dean Edwards Packer.');
                }
            } catch (e) {
                this.outputCode = '// Gagal unpack, pastikan kodenya valid: ' + e.message;
                this.logs.push('[ERROR] Unpack gagal: ' + e.message);
            }
        },

        runScript() {
            // Prioritaskan jalankan dari Output jika ada, kalau kosong pakai Input
            let targetCode = this.outputCode.trim() || this.inputCode.trim();
            if (!targetCode) {
                this.logs.push('[ERROR] Tidak ada kode untuk dijalankan!');
                return;
            }

            this.logs.push('[RUN] Memulai eksekusi kode...');
            
            // Buat penangkap console.log kustom agar masuk ke UI
            let capturedLogs = [];
            let customConsole = {
                log: (...args) => capturedLogs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ')),
                error: (...args) => capturedLogs.push('[ERROR LOG] ' + args.join(' ')),
                warn: (...args) => capturedLogs.push('[WARN LOG] ' + args.join(' '))
            };

            try {
                // Eksekusi sandboxed menggunakan Function constructor
                let executeFn = new Function('console', targetCode);
                executeFn(customConsole);
                
                this.logs.push('[SUCCESS] Kode berhasil dijalankan tanpa syntax error.');
                if (capturedLogs.length > 0) {
                    capturedLogs.forEach(l => this.logs.push('  ↳ ' + l));
                } else {
                    this.logs.push('  ↳ (Tidak ada output console.log yang dihasilkan)');
                }
            } catch (e) {
                this.logs.push('[CRASH] Error saat eksekusi: ' + e.message);
            }
        },

        toBase62(n) {
            let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let res = '';
            if (n === 0) return chars[0];
            while (n > 0) {
                res = chars[n % 62] + res;
                n = Math.floor(n / 62);
            }
            return res;
        },

        clearAll() {
            this.inputCode = '';
            this.outputCode = '';
            this.logs = [];
            this.copied = false;
        },

        copyOutput() {
            navigator.clipboard.writeText(this.outputCode);
            this.copied = true;
            setTimeout(() => { this.copied = false; }, 2000);
        }
    }));
});
</script>