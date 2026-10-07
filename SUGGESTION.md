ditimer ada opsi buat nampilin judul audionya tanpa ekstensi

gua juga butuh preset 3x3 buat ngatur posisi, jadi selain drag manual dicanvas ada opsi cepat yaitu tinggal pilih mau atas tengah bawah, kiri kanan, posisinya

nah untuk fitur textnya harusnya ganti jadi Title karena fungsinya cuma buat nampilin judul aja

nah untuk fitur text yang sebenarnya dia bisa nambah hapus text,

selain fitur text gua juga pengen tambah fitur overlay, mirip kaya logo tapi ini bisa lebih dari 1 overlay

..


dimenu export tambahin opsi auto download, jadi pas render selesai langsung download
terus kualitas diset standar aja defaultnya

terus lanjut ke variasi spektrum, gua pengen ilangin semua spektrum 3dnya, karena gak ada yang bagus. sebagai gantinya daripada buat spektrum, coba buat karakter atau semacamnya yang bisa ngikutin beat musicnya, jadi karakter bisa gerak gerak gitu kekiri kanan loncat, dll

lofi equalizer kaga bisa opsi pojok equalizernya

preset warna ditambah lagi, terus warna custom harusnya bisa 2 warna biar keliatan kaya gradasi

untuk vinyl / cd, dia kan masih pake gambar dari logo kalau ada, nah gua pengen dia ada input sendiri khusus vinyl doang jadi gak ada ikut campurnya sama logo. kalau belum ada ya pakai dari background aja.

dan terakhir, gua pengen nambah spectrum yang berbeda dari biasanya, ini mirip spectrum dj dj yang ada diyoutube, nih gua sertain gambarnya

...

tambah lebih banyak beat characternya, misal roblox, obby, dll. nah untuk gerakannya jangan cuma geser geser loncat doang, tapi bisa lari, nyerang, dll. biar lebih menarik lah kaya animasi
tambah lebih banyak gaya tampilan timer, terus judul ditimer harusnya bisa diatur size, fontnya

nah bisa gak misal tambah 1 variasi spektrum ini berbentuk kepala orang, nah nanti tuh kepala bisa dimasukin gambar jadi gak cuma 3d doang tapi ada gambarnya juga

terus fitur spectrum ada opsi disablenya, 


...




...


...

nah avatar head kasih banyak variasinya
beat character, tambah lagi animasinya, sekarang jalan duduk, kedip, nunjuk, santai, yang enak dilihat aja

fitur mastering audio langsung, jadi render visual sekaligus audionya yang udah dimastering

fitur mastering ini aktif dan tidak aktif, biar kalau cuma render video mastering audio gak ikut kebawa

...

oke gas kita tambahin fitur:
- Enhance tone, dynamics & loudness
- Vinyl Crackle / Rain Ambience Layer
- Pitch Shifter Independen
- export audio saja
- Custom Foto Wajah di Beat Character, tapi jangan hilangkan yang originalnya
- terus fitur localstorage buat nyimpen preset project saat ini saja
- layer ordering

...

Saya punya komponen/file React yang sangat besar (monolithic) dengan 1000+ baris kode.
Tolong bantu saya melakukan refactoring agar kode ini menerapkan Clean Code, Clean Architecture/Feature-Based Structure, Readable, dan Maintainable.

Tolong lakukan refactoring dengan aturan dan prinsip berikut:

1. Prinsip & Arsitektur:
   - Terapkan Single Responsibility Principle (SRP): Pisahkan UI, logika bisnis, state management, dan API calls.
   - Gunakan pendekatan Feature-Based Architecture (atau Modular Component Structure) jika memungkinkan.
   - Pisahkan kode ke dalam struktur folder standar:
     * /components (UI murni / Presentation Components)
     * /hooks (Custom React Hooks untuk logika bisnis & state handler)
     * /services atau /api (API calls / Data Fetching)
     * /utils atau /helpers (Fungsi utility / murni JS)
     * /types atau /interfaces (Definisi TypeScript / Prop Types jika pakai TS)
     * /constants (Konstanta, enum, atau static data)

2. Komponen & UI:
   - Pecah komponen raksasa menjadi sub-komponen yang lebih kecil, reusabel, dan fokus pada 1 tugas UI saja.
   - Ekstrak form elements, modal, list items, atau section UI yang repetitif/kompleks menjadi file tersendiri.

3. Logika & State Management:
   - Pindahkan seluruh logika status (useState, useEffect, event handlers kompleks) ke Custom Hooks (misal: `use[NamaFitur].js`).
   - Sederhanakan `useEffect` yang bertumpuk atau memiliki dependency tidak jelas.

4. Kode Clean & Readable:
   - Gunakan nama variabel dan fungsi yang deskriptif dan mencerminkan tujuannya (self-documenting code).
   - Hapus dead code, console.log, dan komentar yang tidak perlu.
   - Terapkan early return pattern untuk menangani kondisi guard/loading/error agar meminimalkan nested if/else.

Format Output yang Saya Minta:
1. Struktur Folder Baru: Tampilkan peta hirarki folder dan file rekomendasi setelah dipecah.
2. Code Blocks Terpisah: Sediakan kode lengkap untuk setiap file baru (beserta nama file dan path-nya).
3. Ringkasan Perubahan: Jelaskan secara singkat komponen/logika apa saja yang diubah dan dipindahkan.


...

batch processing, jadi audionya gak cuma 1 tapi banyak nah pas dirender dia bisa sekaligus semua audionya dengan secara terpisah, batch processing lah istilahnya, coba dijelasin dulu ke gua alurnya gimana ?

...
audio fade in & out

efek background: Camera Shake / Beat Flash / Zoom Bump

efek background slider : gak cuma fade, tambahin lain mungkin bisa 

Partikel Baru: Sakura / Falling Petals, Embers / Fire Sparks, Matrix Digital Rain atau Floating Music Notes

Variasi Spektrum Baru: Retro Boombox / Jukebox, Cyber Car / Synthwave Outrun

spectrum karakter animasi tangan menari

Magnetic Snap Guides di Canvas

overlay sama text tambahin fitur effect putar, shake, dll

fitur ticker, jadi ada text berjalan divideo dengan background yang membentang secara horizontal, nah fitur ini bisa diset mau aktif terus, hanya beberapa kali muncul berdasarkan pembagian durasi audionya, dll
...

add motion preset

ide aplikasi audio playlist maker, auto content

...


oke kita breefing dulu, aplikasinya mau gua rubah total alur dan namanya

aplikasi namanya jadi : transkriboy

fungsi utama untuk transcript audio biar bisa menghasilkan subtitle baik itu .srt maupun .ass

tampilan enaknya dibuat simple aja, karena fungsinya cuma buat transcript


kondisi saat ini masih pakai ffmpeg dan bisa proses gambar juga, kedepannya fitur ini hapus aja

kita nggak pengen ketergantungan sama ffmpeg, karena fokus utama cuma buat transcript audio saja

...

kenapa ya pas gua set spectrum dia otomatis pakai gambar background buat latarnya, harusnya jangan. spectrumkan udah punya khusus input gambarnya masing masing, kalo begini spectrum yang butuh gambar jadi gak bisa punya default tampilan spectrum pas belum ada gambar

...

kira-kira ada gaya tampilan lain yang bisa ditambahin ga ke progress bar & timer lagu, gua sebenarnya butuh yang timer only, jadi dia nampilin timer, yang nanti bisa gua taruh keatas spectrum, overlay atau semacamnya


...

lanjut kita masuk kebagian spektrum lagi,

bisa gak tambahin opsi ikut denyut bass pada spectrum karakter, kepala, dll , jadi spectrum gak selalu harus ikut denyut biar animasinya keliatan lebih smooht juga

sama ditimer juga ada opsiikut denyut bass juga


dibagian latar atau background, bedanya bass pulse sama zoom bump apa ya gua liat sama aja ngebuat background jadi bergerak ngikutin beat ? kalau gak penting hapus aja salah satu


nah untuk text kenapa gak ada pengaturan align textnya misal rata kiri rata kanan, tengah. coba terapin fitur align text ke title, terus sama text layer


...

ini ko beda begini inputnya di multi text pakai icon tapi di title pakai select option ?

terus gua ngerasa gak sreg nih sama upload font, kenapa gak ditaruh dimedia aja ? jadi terpusat gitu, kan ini digunakan secara global juga ?. coba upload font yang dimulti layer dipindah ke media, terus font di title juga, 

reset project harusnya kasih konfirmasi dulu biar gak salah pencet, masa iya pas mau export tiba tiba salah pencet jadi dari ulang ?,

nah terus itu pesan preset tersimpan hapus aja user gak peduli sama preset yang tersimpan, kan gak ada fitur preset juga soalnya cuma nyimpen aktivitas saat ini yang sedang aktif biar kalau direfresh gak ilang

...

ganti nama aplikasinya jadi "Audio Spektrum"

lalu kasih menu about berbentuk icon, yang isinya tentang aplikasi, pengembang, udah sampai versi berapa, tombol donasi, tombol website.

tentang aplikasi "ditentuin ai"
pengembang: irfanywz
versi: "ditentuin ai"
tombol donasi: ngarah ke link ini https://irfanywz.web.id/about/#support
tombol website: https://irfanywz.web.id/

...

oke kita breefing lagi, andai spektrumnya bisa dicustom jadi user bisa buat spektrum sendiri, bisa import maupun export, jadi user bisa punya ciri khas spectrumnya masing masing. terus dia kan didrawing pakai js, nah si user bisa manfaatin ai buat bikinnya. nanti tinggal upload file json atau semacamnya otomatis spektrum bisa kebaca.

apakah ini posible untuk dilakukan, jadi spektrumnya bisa dibuat dari luar, lalu aplikasi bisa menambahkannya, walau berjalan local tapi fitur ini sangat signifikan kalau bisa diterapkan...

Create a 'Presets' panel in the SchemaControlPanel that allows users to save and load specific configurations (e.g., 'Aggressive Bass', 'Smooth Chill', 'Neon Pulse') for the spectrum settings, including colors, shapes, and reactivity parameters.

...

next lirik 


...


next perbaikan

...

kode worker yang error yang masih single file atau monolith, bisa di fix pakai vite biar bisa pakai export import