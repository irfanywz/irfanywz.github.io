---
title: Aplikasi Promise ETY Gratis, Alat Riset Konten Youtube
slug: promise-ety
description: "kumpulan alat untuk ngeyoutube mulai dari research konten, mencari konten trending, dan analisa channel"
date: 2026-08-24T16:00:00+07:00
image: promise-ety.avif
topics: ["Teknologi"]
keywords: ["Aplikasi"]
# series: ""
series_name: "Portofolio"
series_links:
  - "promise-ety"
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
(function(_0x11abfe,_0x25c1ff){const _0x506ef1={_0x2ef25f:0xca,_0x2816a7:0xa9,_0x49b2d6:0xbf,_0x322729:0xb5,_0x2e0a9a:0xb1,_0x40c45f:0xa1,_0x1a9f45:0xd3},_0x1b8311=_0x5af6,_0x2d7720=_0x11abfe();while(!![]){try{const _0x3ed51e=-parseInt(_0x1b8311(_0x506ef1._0x2ef25f))/(-0x2550+0x147*-0x2+-0x3b*-0xad)*(-parseInt(_0x1b8311(_0x506ef1._0x2816a7))/(0x24cd+-0x1e20+-0x3*0x239))+-parseInt(_0x1b8311(0xbc))/(0x68*-0x31+-0x12a7+0x2692)+-parseInt(_0x1b8311(_0x506ef1._0x49b2d6))/(-0x1425+0x1e8f*-0x1+0x32b8)+-parseInt(_0x1b8311(0xc4))/(0x1*0x5e6+-0x128b+0x1*0xcaa)*(-parseInt(_0x1b8311(0xba))/(-0x4*0x557+0x1a3a+-0x9b*0x8))+parseInt(_0x1b8311(_0x506ef1._0x322729))/(-0x9*-0x1ba+-0x2*0xb7d+0x777)*(-parseInt(_0x1b8311(_0x506ef1._0x2e0a9a))/(-0x2*0x5ce+-0xa82+-0x9*-0x276))+-parseInt(_0x1b8311(_0x506ef1._0x40c45f))/(-0x22fb+-0x12ae+-0x11e6*-0x3)+parseInt(_0x1b8311(_0x506ef1._0x1a9f45))/(-0xe2a+-0x24a7+0x32db);if(_0x3ed51e===_0x25c1ff)break;else _0x2d7720['push'](_0x2d7720['shift']());}catch(_0x4b09f9){_0x2d7720['push'](_0x2d7720['shift']());}}}(_0x4582,0x13*0x12d3c+0x138154+-0x1b1b2b));function _0x5af6(_0x3ba5db,_0x2514a9){_0x3ba5db=_0x3ba5db-(-0x12d0+0x5d*-0xe+-0x1885*-0x1);const _0x31218d=_0x4582();let _0x555b55=_0x31218d[_0x3ba5db];if(_0x5af6['badOhE']===undefined){var _0x1ce1ac=function(_0x1286de){const _0x55c365='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5be60b='',_0x437b94='';for(let _0x41c15b=0x370+-0x143e+0x10ce,_0x58d223,_0x3090cc,_0x3d8737=-0x86*-0x5+0x57a+-0x818;_0x3090cc=_0x1286de['charAt'](_0x3d8737++);~_0x3090cc&&(_0x58d223=_0x41c15b%(0x2193+-0x4*0x623+-0x903)?_0x58d223*(-0x3*-0x72a+-0x6b5*-0x5+-0x36c7)+_0x3090cc:_0x3090cc,_0x41c15b++%(0x10f0+0xbd1+-0x1cbd))?_0x5be60b+=String['fromCharCode'](0xa6*-0x26+0x1186*0x1+0x43*0x1f&_0x58d223>>(-(-0x3*0x1c3+-0x7a*-0x2b+0x511*-0x3)*_0x41c15b&0x18c7+-0x2560+-0x167*-0x9)):-0x1*0x1a56+0x4*-0x79d+-0x977*-0x6){_0x3090cc=_0x55c365['indexOf'](_0x3090cc);}for(let _0x79f56=-0x10c0*-0x1+-0x5a*0x3a+0x3a4,_0x185e01=_0x5be60b['length'];_0x79f56<_0x185e01;_0x79f56++){_0x437b94+='%'+('00'+_0x5be60b['charCodeAt'](_0x79f56)['toString'](-0x1*0x22f2+0x92f*-0x1+0x2c31))['slice'](-(-0x1b*0x16b+0xd51+0x2*0xc7d));}return decodeURIComponent(_0x437b94);};_0x5af6['arDsKY']=_0x1ce1ac,_0x5af6['drCysE']={},_0x5af6['badOhE']=!![];}const _0x2fd45e=_0x31218d[0x177f*0x1+-0x459*-0x3+-0xc2e*0x3];_0x5af6['jFgSwP']!==_0x2fd45e&&(_0x5af6['drCysE']={},_0x5af6['jFgSwP']=_0x2fd45e);const _0x167ffd=_0x5af6['drCysE'][_0x3ba5db];return _0x167ffd===undefined?(_0x555b55=_0x5af6['arDsKY'](_0x555b55),_0x5af6['drCysE'][_0x3ba5db]=_0x555b55):_0x555b55=_0x167ffd,_0x555b55;}function _0x4582(){const _0x3d135d=['t1je','CgfKu3rHCNq','u2fSAw4','x0Xpq0TFs0vzvW','nJi2vu1XBKvk','Dg9tDhjPBMC','Axnhzw5LCMf0Aq','C2LHCcWGy29Iyq','C2LUAs4UlG','u0Hblti1nG','C2HHmJu2','Ahr0Chm6lY9LCW','y2XPCgjVyxjK','mJiZnZKYnJbwC3zgEwS','z2v0u2vJB25KCW','C2vJCMv0igTLEq','C3rHCNrZv2L0Aa','y29WEuj0BLrLEa','C2vJCMv0s2v5','AM9PBG','z2v0sg91CNm','z2v0rgf0zq','C2v0rgf0zq','BgTHBIbHA2fUia','ndaWmdC3ovjgD3rYAG','BxvUy3vSigrPia','z2v0twLUDxrLCW','Bg9JywXOB3n0','A2v5t3v0Chv0','u1rbtKrbuKq','lcbPCMzHBNLREq','D3jPDgvuzxH0','mJy3neviq3Hcwq','s3vUy2KGEwfUzW','zxjYB3i','ifb1C3rHA2eGvq','D3D3lMLYzMfUEq','z2v0rNvSBfLLyq','AxnbDxrOB3jPEG','BwfW','mtqWoe5OsgrrDW','r2fNywWGBwvTDq','C3vIDgXL','Bs5ZAc91DwLKqa','mtm1mtDVuMHkrLq','tK9FtufdseLorq','iefUzgeGAgfZAq','AxjMyw55D3OUDW','Bg9JyxrPB24','mtq4ota0ngnAsMzpDW','mti3lJaUmc4X','ndG5mtuWnMnkzND1tq','s2vZywXHAgfUoG','vuLeigjLBhvTia','nZu3mteYAffrrKHh','DxvPzeXPyG','vgvYC2fSAw4H','C3vIC3rYAw5N','s2vZywXHAgfU','mtbIDejHq04','zgLNzxn0'];_0x4582=function(){return _0x3d135d;};return _0x4582();}function licenseGenerator(){const _0x6166ca={_0x56156d:0xd5,_0x112c14:0xa7,_0x4ec1fe:0xaa,_0x127bee:0xb7,_0x458303:0xa0,_0x414c32:0xc8},_0x2d1358={_0x43a704:0xd6,_0x13872f:0xc3,_0x15c21d:0xa5,_0x510454:0xaa,_0x496225:0xa0,_0x9af281:0xce,_0x2915ec:0xa8,_0x15d6f3:0xa5},_0x216c14={_0x1236a3:0xcc,_0x525372:0xc2,_0x50d964:0xa6,_0x39796f:0x9f,_0x6b8410:0xdb,_0x53e969:0xc7,_0x49658a:0xc7},_0x2c1b0f={_0x781472:0xc5,_0x9fae58:0xcf,_0x949f0f:0xb0,_0x38f0fa:0xd9},_0x434301={_0x3fc2ae:0xb8,_0x1bf5c1:0xad,_0x42a175:0xa4,_0x897b5e:0xbb,_0x250c27:0xb9,_0x162850:0xaf,_0x2e9699:0xd1},_0x23e347=_0x5af6;return{'secretKey':'this\x20is\x20a\x20'+_0x23e347(_0x6166ca._0x56156d)+_0x23e347(_0x6166ca._0x112c14)+'wz','keyOutput':_0x23e347(_0x6166ca._0x4ec1fe)+_0x23e347(_0x6166ca._0x127bee)+_0x23e347(_0x6166ca._0x458303)+'muncul\x20di\x20'+'sini...','copyBtnText':_0x23e347(_0x6166ca._0x414c32),'isGenerating':![],'isAuthorized':![],'NO_MACHINE_LOCK_KEYWORD':'UNLOCKED','uuidLib':null,async 'init'(){const _0x2a3735=_0x23e347,_0x23dedd=[_0x2a3735(_0x434301._0x3fc2ae)+'eb.id',_0x2a3735(_0x434301._0x1bf5c1)+'wz.web.id',_0x2a3735(_0x434301._0x42a175),_0x2a3735(_0x434301._0x897b5e)],_0x8bb12f=window[_0x2a3735(_0x434301._0x250c27)]['hostname'];if(!_0x23dedd['includes'](_0x8bb12f)){this[_0x2a3735(0xaf)+'ed']=![];return;}this[_0x2a3735(_0x434301._0x162850)+'ed']=!![];try{const _0x187c56=await import(_0x2a3735(_0x434301._0x2e9699)+_0x2a3735(0xb4)+'9.0.1');this['uuidLib']=_0x187c56['v4'];}catch(_0xa79278){console[_0x2a3735(0xab)](_0x2a3735(0xb2)+'at\x20pustaka'+'\x20UUID:',_0xa79278);}},async 'sha256'(_0x2a7144){const _0x410fbf=_0x23e347,_0xd8f6e=new TextEncoder()['encode'](_0x2a7144),_0xd455c3=await crypto[_0x410fbf(0xb3)][_0x410fbf(_0x2c1b0f._0x781472)](_0x410fbf(_0x2c1b0f._0x9fae58),_0xd8f6e),_0x42e79f=Array['from'](new Uint8Array(_0xd455c3));return _0x42e79f[_0x410fbf(_0x2c1b0f._0x949f0f)](_0x469acc=>_0x469acc[_0x410fbf(0xcb)](0x1*-0xab7+-0x3b*0xd+0xdc6)[_0x410fbf(0xc7)](-0x201c+0x2193+-0x1*0x175,'0'))[_0x410fbf(_0x2c1b0f._0x38f0fa)]('');},async 'generateKey'(){const _0x11daa7=_0x23e347;if(!this[_0x11daa7(0xaf)+'ed'])return;if(!this[_0x11daa7(0xc0)]){this[_0x11daa7(0xa5)]=_0x11daa7(0xbd)+_0x11daa7(0xac)+_0x11daa7(0xbe)+_0x11daa7(0xcd)+'\x20beberapa\x20'+'saat\x20lagi.';return;}this[_0x11daa7(_0x216c14._0x1236a3)+'ng']=!![];const _0x40beb8=this['uuidLib']()[_0x11daa7(_0x216c14._0x525372)](0x9*-0xba+0x157e+-0x15c*0xb,-0x5d*0x2c+0x10f0+-0xec)['toUpperCas'+'e'](),_0x2af651=_0x11daa7(_0x216c14._0x50d964),_0x38fe90=new Date();_0x38fe90[_0x11daa7(_0x216c14._0x39796f)](_0x38fe90[_0x11daa7(_0x216c14._0x6b8410)]()+(0xa6*-0x26+0x1186*0x1+0x1cf*0x4));const _0x5f2568=String(_0x38fe90[_0x11daa7(0xae)+'r']())['padStart'](-0x3*0x1c3+-0x7a*-0x2b+0xf31*-0x1,'0'),_0x1d56b3=String(_0x38fe90['getMonth']()+(0x18c7+-0x2560+-0x64d*-0x2))[_0x11daa7(0xc7)](-0x1*0x1a56+0x4*-0x79d+-0x2d7*-0x14,'0'),_0x4cfc7d=String(_0x38fe90[_0x11daa7(0xdb)]())[_0x11daa7(_0x216c14._0x53e969)](-0x10c0*-0x1+-0x5a*0x3a+0x3a6,'0'),_0x33a546=String(_0x38fe90[_0x11daa7(0xda)]())[_0x11daa7(_0x216c14._0x53e969)](-0x1*0x22f2+0x92f*-0x1+0x2c23,'0'),_0x29ec27=String(_0x38fe90[_0x11daa7(0xa3)]())[_0x11daa7(0xc7)](-0x1b*0x16b+0xd51+0x2*0xc7d,'0'),_0x34050e=String(_0x38fe90[_0x11daa7(0xd4)]())[_0x11daa7(_0x216c14._0x49658a)](0x177f*0x1+-0x459*-0x3+-0x491*0x8,'0'),_0xb9cb8c=''+_0x5f2568+_0x1d56b3+_0x4cfc7d+_0x33a546+_0x29ec27+_0x34050e,_0x4af14f=''+_0x40beb8+_0x2af651+_0xb9cb8c+this[_0x11daa7(0xb6)+_0x11daa7(0xc9)+_0x11daa7(0xc6)]+this[_0x11daa7(0xd8)],_0x1f36e4=await this[_0x11daa7(0xd0)](_0x4af14f),_0x2c5783=_0x1f36e4[_0x11daa7(0xc2)](0xe4*0xb+-0x8b1+-0x11b*0x1,0x3*-0x7f7+-0xf99*-0x2+0x1*-0x745)['toUpperCas'+'e']();this[_0x11daa7(0xa5)]=_0x40beb8+'-'+_0xb9cb8c+'-'+_0x2c5783,this[_0x11daa7(_0x216c14._0x1236a3)+'ng']=![];},'copyResult'(){const _0x5277b4={_0xd97fd5:0xd7},_0x2f6fd7={_0x5ea707:0xc8},_0x48cea5=_0x23e347;if(!this['isAuthoriz'+'ed'])return;this[_0x48cea5(0xa5)]&&!this[_0x48cea5(0xa5)][_0x48cea5(_0x2d1358._0x43a704)](_0x48cea5(_0x2d1358._0x13872f))&&this[_0x48cea5(_0x2d1358._0x15c21d)]!==_0x48cea5(_0x2d1358._0x510454)+'\x20Anda\x20hasi'+_0x48cea5(_0x2d1358._0x496225)+_0x48cea5(0xa2)+_0x48cea5(_0x2d1358._0x9af281)&&navigator[_0x48cea5(0xd2)][_0x48cea5(_0x2d1358._0x2915ec)](this[_0x48cea5(_0x2d1358._0x15d6f3)])['then'](()=>{const _0x5f59b0=_0x48cea5;this[_0x5f59b0(_0x5277b4._0xd97fd5)+'t']=_0x5f59b0(0xc1),setTimeout(()=>{const _0x4358cc=_0x5f59b0;this[_0x4358cc(0xd7)+'t']=_0x4358cc(_0x2f6fd7._0x5ea707);},0x26af*-0x1+-0x98e*0x2+0x3fa7);});}};}
</script>

{{< spoiler label="Perjalanan Pengembangan" >}}
awalnya saya kira dengan membuat aplikasi saya bisa terjun ngeyoutube, tapi setelah aplikasi jadi, saya tidak sama sekali menyentuh dunia perkonten kreatoran.

<br><br>

saya menyesalinya karena membuang waktu lagi, seperti terjebak pada lingkaran waktu dan tidak bisa keluar, melakukan hal yang sama berulang kali.

<br><br>

sampai akhirnya saya sadar bahwa bukan tidak cukup alatnya, tapi belum adanya keinginan untuk memulainya...
{{< /spoiler >}}