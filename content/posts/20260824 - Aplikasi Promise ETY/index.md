---
title: Aplikasi Promise ETY Gratis, Alat Riset Konten Youtube
slug: promise-ety
description: "kumpulan alat untuk ngeyoutube mulai dari research konten, mencari konten trending, dan analisa channel"
date: 2026-08-24T16:00:00+07:00
image: promise-ety.avif
topics: ["Teknologi"]
keywords: ["Aplikasi"]
series: "Portofolio Aplikasi"
# series_name: "Portofolio"
# series_links:
#   - "promise-ety"  
#   - "music-max"
showAds: false
adPositions: []
layout: "nosidebar"
draft: false
---

Aplikasi Promise ETY ini saya buat akhir tahun 2025, pengembangannya dihentikan pada bulan februari 2026

promise ety adalah aplikasi untuk manajemen channel youtube, yang dilengkapi dengan alat untuk menemukan konten potensial dengan melihat data trending saat ini

selengkapnya beberapa tampilan beserta penjelasan fitur yang tersedia pada aplikasi ini :

**Manajemen Channel**  

pada bagian ini kita bisa membuat project yang berguna untuk manajemen video per-channel

didalam project ada menu-menu untuk manajemen, diantaranya
- **overview**: tampilan statistik channel 
- **channel**: memperbarui data channel
- **videos**: manajemen konten, bisa auto upload dari sini
- **ideas**: untuk menulis catatan
- **chrome**: integrasi browser chrome, 1 project 1 profil 
- **settings**: pengaturan proyek untuk credential dan fitur auto upload

![akun manajemen](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimwrso5rP4OMX549ykOk8askDBUl_7Jk-ora6EHr2q5C1z50wTib4QcRYsJ07mqBBsq3NKUaK4e_BfJW_rkGvmn3TZLS-hQc31k8sbagTowJOp3IE6oCdjbGHLCNFcNfR-PmEoH6rUu_kYgDgmsmmPHEt9VduA5IwrWCxS1ftGZX90n0FOffHqyLO4R0o/s1600/akun-manajemen.png)

**Kumpulan Alat**  

alat yang tersedia diantaranya

- **Channel Monitor**: untuk memonitor channel, melihat perkembangan, statistik video, dan lainnya
- **Keyword Suggest**: mencari suggesti keyword dari berbagai mesin pencari
- **Video Analyzer**: mengalanisa metadata video dengan mudah
- **Youtube Localization**: mengaktifkan fitur localization pada video title dan deskripsi video menjadi berbagai bahasa dengan auto translate
- **Youtube Research**: mencari konten yang sedang trending, menganalisa, mencari berdasarkan kata kunci

![list tool](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizTsTiePAjR0hJ5qgiU2eE1m0xdcSfOsX9NOodjAQsTNqgbDrKjGMWu3ORWVbO5xx4qOz5GraLFHqBxOtspbgRjWlsEnE818F_VqKBaT9DQaGksdEzQM7uXwH1sh036Wf2_PGI7M1EhFoOJgRhX-2RWKdiSfRVUpEjtx-ZjOYcAWKlbDBtuMelm5oMQcE/s1600/list-tool.png)

**Pengaturan**

pengaturan yang dibutuhkan untuk menjalankan aplikasi, memasukan apikey, memilih provider AI, dan informasi lainnya

![pengaturan](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAh1iyMvbG74FBiucT2xZv5qGGE8E-eclDFMDBeu3Et31P7StQAyFAfpKHp5UAJLx1JX_pgza2Ii_aZ5UAxQxpFMMn4JGyssUsQo2jhaRroRhtNtpLGcb5fNkTu_4SQBgGO1JwHMRQY39B25YZIW-ePK_-tbNStwL6bt8vzM0J2V7aPhqu26K5W9f-WXI/s1600/pengaturan.png)


## Persyaratan Sistem

Pastikan komputer Anda memenuhi persyaratan sistem minimum untuk menjalankan Promise ETY:

**Minimum**

- **OS**: Windows 10 (64-bit)
- **Prosesor**: 2.4 Ghz
- **Memori**: 8 GB RAM
- **Penyimpanan**: 2 GB ruang tersedia  

## Cara Instalasi

Ikuti langkah-langkah berikut untuk menginstal Promise ETY:

1. **Unduh Aplikasi**: pertama unduh aplikasi {{< donate-download url="https://www.mediafire.com/file/lud6wfwgkcaktbl/Promise_ETY_v1.0.2.exe/file" text="Promise ETY" >}}
2. **Ekstrak File**: Ekstrak file zip ke lokasi tertentu (misalnya, `D:\Apps\Promise ETY`). jika meminta password masukan <kbd>123</kbd>
3. **Jalankan Aplikasi**: Masuk ke folder yang telah diekstrak, lalu cari dan jalankan file `Promise ETY.exe`.


## Cara Aktivasi

1. **Buka Aplikasi**: Jalankan aplikasi `Promise ETY.exe`.
2. **Masukkan License Key**: Salin "License Key" yang anda generate dibawah ini.
3. **Aktivasi**: Tekan "Enter" untuk melakukan aktivasi lisensi. Jika berhasil, aplikasi akan terbuka dan siap digunakan.


<div x-data="licenseGenerator()" x-init="init()" class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 my-6 not-prose"> <!-- Header Widget --> <div class="flex items-center gap-2 mb-5 border-b border-gray-100 dark:border-gray-700 pb-3"> <div class="w-1.5 h-5 bg-indigo-600 rounded-full"></div> <h3 class="text-base font-bold text-gray-900 dark:text-white tracking-wide"> Instant License Generator </h3> </div> <div class="space-y-4 text-sm"> <!-- Info Singkat atau Peringatan Akses --> <template x-if="!isAuthorized"> <div class="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-xs"> <b>Akses Ditolak:</b> Widget ini hanya dapat digunakan langsung dari situs resmi. </div> </template> <template x-if="isAuthorized"> <div class="space-y-4"> <p class="text-xs text-gray-500 dark:text-gray-400"> Klik tombol di bawah untuk men-generate kunci lisensi <b>Unlocked</b> baru dengan masa aktif otomatis selama <b>30 hari (1 bulan)</b>. </p> <!-- Tombol Generate Utama --> <button @click="generateKey" type="button" class="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"> <span class="icon-[ri--key-2-line] w-4 h-4"></span> <span x-text="isGenerating ? 'Memproses...' : 'Generate License Key (30 Hari)'"></span> </button> <!-- Kotak Hasil Output --> <div class="mt-4 p-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3"> <span class="text-xs font-mono break-all text-gray-700 dark:text-gray-300 font-medium" x-text="keyOutput"></span> <button @click="copyResult" type="button" class="w-full sm:w-auto px-4 py-2 text-xs font-medium bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-lg transition-colors flex-shrink-0 flex items-center justify-center gap-1.5"> <span class="icon-[ri--file-copy-line]"></span> <span x-text="copyBtnText">Salin</span> </button> </div> </div> </template> </div> </div>

<script>
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('I J(){9{\'e\':"K://L.M.N/O/s/P-Q/R",\'3\':"f g h i j k l m...",\'a\':"n",\'b\':7,\'5\':7,\'S\'(){4 o=["p.q.r","T.p.q.r","U","V.0.0.1"];4 t=u.v.w;6(o.W(t)){2.5=x}y{2.5=7}},X\'Y\'(){6(!2.5)9;2.b=x;2.3="Z 10...";11{4 z="12-13";4 A=`${2.e}?14=${z}&15=${16(u.v.w)}`;4 B=C 17(A,{18:"19",1a:"1b"});4 8=C B.1c();6(8.1d){2.3=8.1e}y{2.3="c: "+(8.1f||"D 1g E.")}}1h(d){1i.d("D F G H:",d);2.3="c: 1j 1k F G H E."}1l{2.b=7}},\'1m\'(){6(!2.5)9;6(2.3&&!2.3.1n("c")&&2.3!=="f g h i j k l m..."){1o.1p.1q(2.3).1r(()=>{2.a="1s!";1t(()=>{2.a="n"},1u)})}}}}',62,93,'||this|keyOutput|const|isAuthorized|if|false|data|return|copyBtnText|isGenerating|Kesalahan|error|endpointUrl|Kunci|yang|Anda|hasilkan|akan|muncul|di|sini|Salin|allowedDomains|irfanywz|web|id||currentHost|window|location|hostname|true|else|appId|url|response|await|Gagal|lisensi|terhubung|ke|server|function|licenseGenerator|https|script|google|com|macros|AKfycbx2fb|XAKQdhYeHtyOIlo9vaCBSRAcPLUZiQBs5AYk7mfjdI93YBIaKJUbyqslZfdSwYQ|exec|init|www|localhost|127|includes|async|generateKey|Membuat|kunci|try|promise|ety|app|origin|encodeURIComponent|fetch|method|GET|redirect|follow|json|success|key|message|menggenerate|catch|console|Tidak|dapat|finally|copyResult|startsWith|navigator|clipboard|writeText|then|Tersalin|setTimeout|1500'.split('|'),0,{}))
</script>

{{< spoiler label="Perjalanan Pengembangan" >}}
awalnya saya kira dengan membuat aplikasi saya bisa terjun ngeyoutube, tapi setelah aplikasi jadi, saya tidak sama sekali menyentuh dunia perkonten kreatoran.

<br><br>

saya menyesalinya karena membuang waktu lagi, seperti terjebak pada lingkaran waktu dan tidak bisa keluar, melakukan hal yang sama berulang kali.

<br><br>

sampai akhirnya saya sadar bahwa bukan tidak cukup alatnya, tapi belum adanya keinginan untuk memulainya...
{{< /spoiler >}}