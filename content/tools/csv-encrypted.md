---
title: "CSV to Encrypted Paywall"
slug: csv-encrypted
date: 2026-03-31T00:00:00+07:00
description: "Unggah file CSV, konversi otomatis menjadi tabel, dan enkripsi dalam format paywall terlindungi sandi."
icon: "icon-[ri--file-excel-line]"
categories:
  - "Konten"
  - "Konverter"
---

<div x-data="csvEncryptTool()" class="max-w-4xl mx-auto my-8 px-4 sm:px-6">
<div class="flex flex-col gap-6 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
<div class="flex flex-col gap-2">
<label class="block font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-300">Kunci Rahasia Enkripsi</label>
<input type="text" x-model="secretKey" placeholder="Masukkan kata sandi pembuka..." class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors">
</div>
<div class="flex flex-col gap-2">
<div class="flex items-center justify-between">
<label class="block font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-300">Sumber Data CSV</label>
<button @click="loadSample()" type="button" class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer font-semibold">Muat Contoh Data CSV</button>
</div>
<input type="file" accept=".csv" @change="handleFileUpload($event)" class="w-full text-xs text-gray-500 dark:text-gray-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-indigo-50 dark:file:bg-indigo-950/60 file:text-indigo-600 dark:file:text-indigo-400 hover:file:bg-indigo-100 cursor-pointer border border-gray-200 dark:border-gray-700 rounded-xl p-2 bg-gray-50 dark:bg-gray-800">
<textarea x-model="csvInput" @input="generatePreview()" placeholder="Atau ketik/tempel data CSV di sini..." rows="5" class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-xs sm:text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-colors resize-y mt-2"></textarea>
</div>
<div class="flex flex-col gap-2" x-show="htmlOutput" style="display: none;">
<label class="block font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-300">Pratinjau Tabel (HTML)</label>
<div class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 overflow-x-auto max-h-60">
<div x-html="htmlOutput" class="prose dark:prose-invert text-xs"></div>
</div>
</div>
<button @click="encryptCSVData()" type="button" class="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm hover:bg-indigo-700 transition-all shadow-md active:scale-95 cursor-pointer text-center">Buat Snippet Terenkripsi</button>
<div class="flex flex-col gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
<label class="block font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-300">Hasil Snippet HTML (Paywall)</label>
<textarea readonly rows="6" x-model="encryptedSnippet" aria-label="Hasil Snippet" class="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-xs sm:text-sm min-h-[140px] resize-y focus:ring-2 focus:ring-indigo-500 outline-none transition-colors"></textarea>
<div class="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
<button @click="copyToClipboard()" type="button" class="px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-700 transition shadow-sm active:scale-95 cursor-pointer text-center">Salin Snippet</button>
<span x-text="copyStatus" class="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-semibold min-h-[1.2em] flex items-center"></span>
</div>
</div>
</div>
</div>

<script>
document.addEventListener('alpine:init', () => {
  Alpine.data('csvEncryptTool', () => ({
    secretKey: 'irfanywz',
    csvInput: '',
    htmlOutput: '',
    encryptedSnippet: '',
    copyStatus: '',
    libLoaded: false,

    init() {
      this.loadCryptoLibrary();
    },

    loadCryptoLibrary() {
      if (typeof CryptoJS !== 'undefined') {
        this.libLoaded = true;
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js';
      script.onload = () => { this.libLoaded = true; };
      document.head.appendChild(script);
    },

    escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    },

    loadSample() {
      this.csvInput = "Nama,Jabatan,Departemen,Status\nAndi Pratama,Software Engineer,IT,Aktif\nSiti Aminah,Product Manager,Product,Aktif\nBudi Santoso,UI/UX Designer,Design,Cuti";
      this.generatePreview();
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.csvInput = e.target.result;
        this.generatePreview();
      };
      reader.readAsText(file);
    },

    parseCSV(text) {
      const lines = text.split(/\r\n|\n/);
      const result = [];

      for (let i = 0; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        const line = lines[i];
        const row = [];
        let insideQuote = false;
        let entry = '';

        for (let j = 0; j < line.length; j++) {
          const char = line[j];
          if (char === '"') {
            if (insideQuote && line[j + 1] === '"') {
              entry += '"';
              j++;
            } else {
              insideQuote = !insideQuote;
            }
          } else if (char === ',' && !insideQuote) {
            row.push(entry.trim());
            entry = '';
          } else {
            entry += char;
          }
        }
        row.push(entry.trim());
        result.push(row);
      }
      return result;
    },

    generatePreview() {
      if (!this.csvInput.trim()) {
        this.htmlOutput = '';
        return;
      }

      const rows = this.parseCSV(this.csvInput);
      if (rows.length === 0) {
        this.htmlOutput = '';
        return;
      }

      const headers = rows[0];
      const dataRows = rows.slice(1);

      let html = '<table class="w-full text-left border-collapse text-xs"><thead><tr class="border-b border-gray-200 dark:border-gray-700">';
      headers.forEach(h => {
        html += '<th class="p-2.5 font-bold text-gray-900 dark:text-white">' + this.escapeHtml(h) + '</th>';
      });
      html += '</tr></thead><tbody>';

      dataRows.forEach((row, index) => {
        const bgClass = index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800/50';
        html += '<tr class="' + bgClass + ' border-b border-gray-100 dark:border-gray-800/60">';
        headers.forEach((_, colIdx) => {
          const val = row[colIdx] !== undefined ? row[colIdx] : '';
          html += '<td class="p-2.5 text-gray-600 dark:text-gray-300 break-all">' + this.escapeHtml(val) + '</td>';
        });
        html += '</tr>';
      });
      html += '</tbody></table>';

      this.htmlOutput = html;
    },

    hashFormatEncrypt(key) {
      const salt = CryptoJS.lib.WordArray.random(128 / 8).toString();
      const hashKey = CryptoJS.PBKDF2(key, salt, {
        keySize: 256 / 32,
        iterations: 1000
      });
      return { salt: salt, hashKey: hashKey.toString() };
    },

    encrypt(msg, key) {
      const iv = CryptoJS.lib.WordArray.random(128 / 8);
      const encrypted = CryptoJS.AES.encrypt(msg, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
      });
      return iv.toString() + encrypted.toString();
    },

    encryptCSVData() {
      if (!this.secretKey) {
        alert('Masukkan kunci rahasia terlebih dahulu!');
        return;
      }
      if (!this.htmlOutput) {
        alert('Data CSV masih kosong atau belum dikonversi!');
        return;
      }
      if (typeof CryptoJS === 'undefined') {
        this.loadCryptoLibrary();
        alert('Pustaka kriptografi masih dimuat, coba sesaat lagi.');
        return;
      }

      const goHash = this.hashFormatEncrypt(this.secretKey);
      const hashKey = goHash.hashKey;
      const salt = goHash.salt;

      const encrypted = this.encrypt(this.htmlOutput, hashKey);
      const hmac = CryptoJS.HmacSHA256(encrypted, CryptoJS.SHA256(hashKey).toString()).toString();
      const encryptedMsg = hmac + encrypted;

      // Penutup tag script dipecah agar tidak mengakhiri blok <script> halaman ini
      const closeScript = '<' + '/script>';

      const formUnlock = `<style>#form_card{background:#fff;padding:30px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,.05);width:100%;text-align:center}#form_hash{display:flex;flex-direction:column;gap:15px;margin-top:20px}#key{padding:12px 15px;border:1px solid #cbd5e1;border-radius:10px;font-size:14px;width:100%;box-sizing:border-box;outline:0}#key:focus{border-color:#6366f1;box-shadow:0 0 0 3px rgba(99,102,241,.2)}input[type=submit]{background-color:#6366f1;color:#fff;padding:12px;border:none;border-radius:10px;cursor:pointer;font-size:14px;font-weight:700;transition:background-color .3s}input[type=submit]:hover{background-color:#4f46e5}</style>
<div id="form_card">
<form id="form_hash"><input autofocus id="key" name="password" type="password" placeholder="Masukan Kunci Akses"> <input type="submit" value="???"></form>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js">${closeScript}
<script>
function hashFormatDecrypt(t,e){return CryptoJS.PBKDF2(t,e,{keySize:8,iterations:1e3}).toString()}
function decrypt(t,e){var r=e.substring(0,64),n=e.substring(64);return CryptoJS.HmacSHA256(n,CryptoJS.SHA256(t).toString()).toString()===r&&decryptMsg(n,t)}
function decryptMsg(t,e){var r=CryptoJS.enc.Hex.parse(t.substr(0,32)),n=t.substring(32);return CryptoJS.AES.decrypt(n,e,{iv:r,padding:CryptoJS.pad.Pkcs7,mode:CryptoJS.mode.CBC}).toString(CryptoJS.enc.Utf8)}
function csvSaver(){
  var btn=document.getElementById("btn_csv");
  btn.addEventListener("click",function(){
    var table=document.querySelector("table");
    if(!table)return;
    var lines=[];
    var trs=table.querySelectorAll("tr");
    for(var i=0;i<trs.length;i++){
      var cells=trs[i].querySelectorAll("th,td");
      var row=[];
      for(var j=0;j<cells.length;j++){
        row.push('"'+cells[j].textContent.replace(/"/g,'""')+'"');
      }
      lines.push(row.join(","));
    }
    var csv="\\uFEFF"+lines.join("\\r\\n");
    var blob=new Blob([csv],{type:"text/csv;charset=utf-8;"});
    var a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download="data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function(){URL.revokeObjectURL(a.href)},1000);
  });
}
document.getElementById("form_hash").addEventListener("submit",function(t){
  t.preventDefault();
  var r=hashFormatDecrypt(document.getElementById("key").value,"${salt}");
  var n=decrypt(r,"${encryptedMsg}");
  if(n){
    var w=window.open();
    if(w){
      w.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Data CSV Terenkripsi</title><script src="https://cdn.tailwindcss.com"><\\/script></head><body class="bg-gray-50 p-6 md:p-10"><div class="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 overflow-x-auto"><div class="flex items-center justify-between gap-4 mb-4"><h2 class="text-lg font-bold text-gray-900">Data CSV Terbuka</h2><button id="btn_csv" type="button" class="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 cursor-pointer">Simpan sebagai CSV</button></div>'+n+'</div><script>('+csvSaver.toString()+')()<\\/script></body></html>');
      w.document.close();
    } else {
      alert("Popup diblokir oleh browser! Izinkan popup untuk melihat data.");
    }
  } else {
    alert("Kata sandi salah!");
  }
});
${closeScript}
`;
this.encryptedSnippet = formUnlock;
this.copyStatus = '';
},
copyToClipboard() {
if (!this.encryptedSnippet) return;
navigator.clipboard.writeText(this.encryptedSnippet).then(() => {
this.copyStatus = 'Snippet tersalin ke clipboard!';
setTimeout(() => { this.copyStatus = ''; }, 3000);
}).catch(() => {
this.copyStatus = 'Gagal menyalin.';
});
}
}));
});
</script>