---
title: Pelatihan Cyber Security dari JIDA, apa saja yang dipelajari difase 1
slug: pelatihan-cyber-security-jida-fase-1
description: "kemanan digital bukan hanya tugas seseorang melainkan tugas setiap orang, agar aman dalam menggunakan internet memahami dasar kemanan digital bisa menghindari kejahatan yang tidak di-inginkan"
date: 2026-09-04T19:00:00+07:00
image: pelatihan-cyber-security.avif
topics: ["Teknologi"]
keywords: ["Cyber Security", "Keamanan Digital"]
series: "Pelatihan Cyber Security"
showAds: false
adPositions: []
draft: false
---

mengartikan kata cyber security, bisa disebut sebagai keamanan siber.

dimana seseorang melakukan perlindungan mencakup ruang lingkup digital, diantaranya aset digital, data, jaringan dan sistem

awalnya saya merasa bingung, apa yang dilakukan dari pekerjaan cyber security ini. 

kalau programmer kan jelas dia melakukan kode, kalau desainer dia mendesain gambar. tapi kalau cyber security dia ngapain ya ?

disinilah saya mulai penasaran dari tugas yang dilakukan cyber security, hingga saya tertarik dengan pelatihan ini

saat awal mempelajari materi pelatihan, saya mulai memahami kalau setiap proses yang terjadi ada kemungkinan kerentanan yang harus diatasi

artinya cyber security itu luas sekali cakupannya, kata cyber security itu hanya permukaannya saja. tapi ketika mencoba mempelajari kedalam akan banyak sekali jalurnya

...

untungnya pelatihan yang saya ikuti ini masih berupa dasar keamanan digital, jadi saya bisa paham dan sedikit nyambung dengan basic saya sebagai mantan penulis kode

nah buat yang penasaran apa saja yang saya pelajari, disini saya mau berbagi ringkasannya

{{< toc >}}

## Network Communication


### Device

disini saya diajarin dasar jaringan, bagaimana sebuah perangkat bisa berkomunikasi satu antar lainnya yaitu dengan menggunakan jaringan komputer

### Paket Data

dilanjut bagaimana data bisa dikirim dari satu perangkat ke perangkat lainnya, yang ternyata data tersebut dipecah menjadi sebuah paket 

### Alamat Digital

untuk mengidentifikasi perangkat agar tidak salah kirim paket data, maka alamat digital diterpkan. alamat digital ini berupa IP Address dan Mac Address

IP Address bisa diartikan alamat sementara yang digunakan perangkat saat terhubung kejaringan, sedangkan mac address adalah identitas unik dari perangkat yang sifatnya permanen

artinya 1 perangkat memiliki mac adressnya masing-masing dan itu selalu unik

### Protokol Jaringan

untuk pengiriman paket data, perangkat pengirim dan penerima harus menggunakan aturan yang sama atau bisa disebut protokol

protokol inilah yang menjembatani pengiriman paket data tersebut, 

terdapat berbagai macam jenis protokol yang bisa digunakan, namun yang dijelaskan disini hanya 1 protokol saja yaitu http/https

mungkin karena prtokol http/s adalah jenis protokol yang sering digunakan secara umum

### Perangkat Penghubung

nah tahap selanjutnya agar data bisa dikirimkan dari satu perangkat keperangkat lainnya, maka dibutuhkan peran dari perangkat keras (hardware) dan layanan jaringan seperti router, switch dan isp

router berfungsi sebagai pengarah jalur rute data

switch berfungsi sebagai penghubung antar perangkat dalam satu jaringan lokal yang sama

isp berfungsi sebagai penyedia layanan internet, yang menghubungkan jaringan lokal ke jaringan global sehingga data bisa dikirimkan ke perangkat yang sangat jauh lokasinya

### Perjalanan Data

kalau dirangkum rute pengiriman data antar perangkat bisa digambarkan seperti ini

perangkat -> router/swtich -> isp -> internet -> server

### Memahami Model OSI

penjelasn diatas bisa dibilang merupakan bagian dari Model OSI (Open Systems Interconnection)

Model OSI sendiri merupakan kerangka kerja yang ditetapkan oleh organisasi ISO (International Organization for Standardization) untuk menjadi standar dalam proses komunikasi data

hal ini dilakukan agar berbagai perangkat dari vendor yang berbeda bisa saling berkomunikasi

dalam komunikasi data, Model OSI membagi 7 Lapisan atau tahapan yang bisa disebut OSI Layer

ke-7 lapisan ini bekerja secara terstruktur untuk menangani komunikasi data, berikut urutannya

1. **Physical Layer**: mengatur transmisi data mentah melalui media fisik seperti kabel maupun gelombang radio
2. **Data Link Layer**: mengubah data menjadi frame serta melakukan koreksi data
3. **Network Layer**: menentukan rute terbaik untuk mengirimkan data ketujuan
4. **Transport Layer**: memecah data menjadi potongan-potongan kecil, lalu menyusun kembali ketika sampai ketujuan
5. **Session Layer**: membuka, mengelola, dan menutup sesi komunikasi antar aplikasi
6. **Presentation Layer**: menerjemahkan, mengenkripsi, mengompress format data agar bisa dibaca ketika sampai application layer
7. **Application Layer**: antar muka atau lapisan teratas yang dekat dengan pengguna bisa disebut aplikasi jaringan 

seperti yang terlihat diatas pengiriman data melalu banyak sekali tahapan, yang setiap tahapannya bisa saja memiliki kerentanan yang terjadi

{{< quiz
    q="Apa tujuan utama dibuatnya standar model OSI oleh ISO?" 
    a="Agar semua perangkat jaringan dari vendor yang berbeda dapat saling berkomunikasi" 
    b="Agar koneksi internet menjadi gratis tanpa kuota" 
    c="Agar komputer tidak mudah terkena virus komputer" 
    d="Agar ukuran file yang dikirimkan menjadi lebih kecil" 
    ans="a" 
>}}

## Cyber Threats

kalau didunia nyata ancaman bisa berupa kehilangan barang, pemerasan, dan lain sebagainya

sedangkan didunia digital hampir mirip juga ancamannya, misal kebocoran data, pengambil alihan akun, sampai meminta tebusan, penipuan online, bahkan sampai merusak sistem

ancaman yang bisa terjadi pada dunia digital bisa bermacam-macam bahkan sangat kompleks, penyerang biasanya memanfaatkan tahapan Model OSI untuk memeriksa kerentanan satu persatu,

ketika satu layer ada celah disitu kerentanan bisa terjadi

untuk mengetahui apa saja penyerangan yang bisa terjadi disetiap layer, berikut daftarnya

| Urutan | Nama Layer | Ancaman | 
| --- | --- |:---| 
| 7 | Application | Phising, SQL Injection, Malware | 
| 6 | Presentation | SSL Striping, Decryption Attact | 
| 5 | Session | Session Hijacking, MitM (Man in the Middle) | 
| 4 | Transport | SYN Flood, UDP Flood (DDoS) | 
| 3 | Network | IP Spoofing, Ping Flood | 
| 2 | Data Link | ARP Spoofing, MAC Flood | 
| 1 | Physical | Wiretapping, Jamming, Perusakan | 

dari sekian banyaknya penyerangan yang ada, yang paling krusial biasanya dilapisan layer ke-7 yaitu application, disini penyerang menargetkan pengguna misalnya mencuri data, membajak akun, bahkan penyebaran virus 

dan yang tidak kalah menarik yaitu penyerangan pada layer 4, yaitu DDoS disini sistem bisa lumpuh seketika ketika ada penyerangan jenis ini kalau tidak dicegah

## Jejak Digital

ketika beraktivitas didunia digital, kita bisa dengan atau tanpa sengaja meninggalkan jejak

misalnya ketika memberikan interaksi pada suatu post disosial media seperti like, komentar, share. ini bisa dikatakan jejak digital

- misal like, menandakan minat kita terhadap post tersebut
- lalu komentar, bisa memberikan gambaran tentang diri bagaimana menyikapi sebuah informasi
- postingan yang diunggah, menandakan minat dan ketertarikan
- riwayat pencarian, bisa menunjukan apa yang sedang dibutuhkan
- lokasi & aktivitas, bisa mengetahui pola aktivitas keseharian

### Kategori Jejak Digital 

jejak digital juga bisa dikategorikan menjadi 2 bagian yaitu

**Jejak Digital Aktif** : jejak ini kita tinggalkan secara sadar seperti berinteraksi disosial media, mengisi formulir dan lain sebagainya

**Jejak Digital Pasif** : jejak ini tidak sadar kita lakukan karena sistem layanan yang melakukannya, seperti menyimpan riwayat pencarian, menyimpan lokasi, dll

### Menyadari Jejak Digital

ketika menyadari adanya jejak dari sebuah aktivitas yang dilakukan, saya menjadi lebih waspada menggunakan data pribadi secara terbuka diruang digital

setiap data memiliki resikonya tersendiri, mulai dari yang resiko rendah, sedang, bahkan tinggi

- misal resiko rendah, seperti penyebaran nama dan tanggal lahir. 
- jejak resiko sedang, nomor hp, alat rumah, akun sosmed, lokasi realtime
- resiko tinggi, ktp, foto wajah, password, nomor rekening / kartu kredit

dari tiap tingkatan, resiko yang paling merugikan yaitu yang paling tinggi karena bisa menyebabkan kerugian, penyalah gunaan data, pengambil alihan akun, dan masih banyak lainnya

### Serangan yang memanfaatkan Jejak Digital

ketika data bocor atau tersebar kepublik, dan data tersebut merupakan yang memiliki tingkat resiko tinggi.

biasnya akan ada penyerangan yang terjadi seperti

**Phising** : menyamar menjadi penyedia layanan atau semacamnya yang menyebarkan link palsu guna mendapatkan data kredensial layanan seperti username dan password

**Social Engineering** : melakukan rekayasa sosial untuk mendapatkan informasi tertentu, misalnya berpura pura menjadi orang dekat keluarga atau semacamnya untuk memberikan atau melakukan hal tertentu yang bisa berdampak mengabaikan presedur keamanan

**Penipuan Online** : data dipakai oleh penipu untuk merusak reputasi nama atau semacamnya, ini sering terjadi untuk merusak citra seseorang agar kehilangan kepercayaan atau bisa dituduh melakukan penipuan

## CIA Triad

awalnya saya kira CIA ini merupakan agen amerika, ternyata bukan

arti dari CIA Triad yaitu Confidentiality, Integrity, dan Availability

ini merupakan konsep dasar yang menjadi fondasi keamanan yang digunakan ketika terjadi sebuah insiden keamanan siber maupun saat membuat sisitem

ketiga pilar ini selalu menjadi acuan utama untuk menilai resiko yang terjadi

### Confidentiality (Kerahasiaan)

pilar Confidentiality ini memastikan bahwa data sensitif hanya bisa diakses oleh orang, perangkat, atau proses yang memiliki izin resmi

misalnya saya punya akun sosial media, nah yang megang username dan passwordnya saya sendiri tapi karena kecerobohan yang tidak terduga data akun bocor dan akun sosial diretas

disini sudah terlihat bahwa pilar ini sudah terdampak karena tidak bisa menjaga kerahasiaan data

...

contoh lainnya misal disebuah aplikasi web ada 2 hal akses yaitu user dan admin, user hanya bisa membaca datanya saja sedangkan admin bisa membaca semua data user

namun yang terjadi ternyata tidak seperti itu, user ternyata bisa membaca semua data user, disini terlihat kalau ada yang tidak beres. harusnya user tidak diperbolehkan membaca data user lain

### Integrity (Integritas)

Pilar integritas memastikan keaslian data, apakah data utuh, andal, dan tidak diubah oleh pihak yang tidak berwenang

integrity menekankah bahwa data yang diterima harus sama persis dengan data yang dikirim

misal contoh kasus, ujang melakukan pembayaran dan harus konfirmasi dengan nominal tertentu. alih-alih ujang mentransfer sesuai nominal yang tertera, ujang hanya mentransfer sebagian saja. lalu bukti pembayarannya diubah baru dikirim sebagai bentuk bukti pembayaran

pelanggaran integritas yang terjadi dari contoh diatas yaitu ujang mengubah bukti transaksi

### Availability (Ketersediaan)

Pilar Ketersediaan memastikan bahwa sistem, jaringan, dan data selalu dapat diakses oleh pengguna yang sah kapan pun mereka membutuhkannya.

contoh kasus, misal saya menggunakan jasa titip barang yang buka 24 jam, disana saya menitipkan barang karena saya ingin pergi tanpa terasa berat membawa barang

namun ketika saya sudah kembali dan ingin mengambil barangnya, ternyata penjaganya tidak ada ? saya jadi harus nunggu atau mungkin kembali lain waktu untuk bisa mengambil barang yang saya simpan tersebut

...

contoh nyata lainnya yaitu terjadi serangan DDoS pada layanan tertentu yang membuat layanan tidak bisa diakses saat sedang dibutuhkan, padahal keadaannya darurat sekali


### Setiap Pilar saling berkaitan

ketika satu pilar CIA Triad terserang, maka pilar lainnya akan ikut terdampak

artinya ke 3 pilar ini tidak berdiri sendiri, melainkan saling melengkapi

sistem yang aman harus bisa menjaga ke 3 pilar sekaligus, rahasia, akurat dan bisa diakses

selain itu serangan tentu tidak hanya berhenti disatu pilar, tapi bisa mengarah kepilar lainnya

{{< quiz
    q="Pilar dalam CIA Triad yang memastikan bahwa data sensitif hanya dapat diakses oleh pihak yang memiliki izin resmi adalah..." 
    a="Availability" 
    b="Integrity" 
    c="Confidentiality" 
    d="Authenticity" 
    ans="c" 
>}}

## Cyber Kill Chain

kalau sebelumya kita bahas dari sisi pertahanan, kali ini kita bahas dari sisi penyerangan

dalam kasus penyerangan biasanya pola serangan selalu melalui beberapa tahapan sebelum akhirnya sampai pada tujuan utamanya

hadirnya cyber kill chain adalah untuk mengidentifikasi serangan sudah sampai sejauh mana

cyber kill chain merupakan kerangka kerja atau model dalam mengidentifikasi pola serangan, model ini dikembangkan oleh perusahaan pertahanan kemanan Lockheed Martin

cyber kill chain dibagi menjadi 7 tahapan terstruktur berikut penjelasannya

### Reconnaissance (Pengintaian)

tahap awal ini penyerang melakukan riset dan mengumpulkan informasi target sebelum melakukan serangan

aktivitas peretasan berupa : mencari informasi pribadi, meneliti arsitektur jaringan, mencari tahu teknologi web yang digunakan

### Weaponization (Persenjataan)

penyerang mulai membuat atau menggunakan senjata untuk menyerang,

biasanya berupa malware, exploit, atau payload. tergantung jenis kerentanan yang ditemui

misalnya menyisipkan script kedalam dokumen, membuat file yang bisa mengeksekusi perintah, dan semacamnya

### Delivery (Pengiriman)

tahap dimana senjata yang sebelumnya dibuat mulai diujicoba untuk melihat hasil akhirnya

ketika senjata masih kurang ampuh biasnya penyerang akan mencari celah lain lalu mengulangi tahapannya sampai bisa menemukan titik lemahnya

misalnya penyerang mencoba menyisipkan script berbahaya kedalam inputan, yang jika masuk kedalam sistem bisa membuat data rahasia terlihat

### Exploitation (Eksploitasi)

ketika senjata penyerang menghasilkan eksploit yang berhasil, maka penyerang sudah bisa dikatakan mendapatkan akses awal

misalnya setelah inputan yang sebelumnya dilakukan, ternyata memunculkan data sensitif yang bisa berguna untuk masuk kedalam sistem

### Installation (Instalasi)

Penyerang menanamkan aset atau program berbahaya secara permanen di dalam sistem korban agar mereka bisa masuk kembali kapan saja

biasanya berupa script tersembunyi yang bisa diakses penyerang kapan saja

### Command & Control (Pengendalian)

setelah penyerang berhasil memiliki akses kesistem, akses kontrol sudah bisa dilakukan

jenis kontrol yang bisa dilakukan tergantung dari eksploit yang didapatkan, ketika tahap eksploitnya sudah sangat berbahaya, sistem bisa dengan mudah dikendalikan secara penuh


### Actions on Objectives (Aksi Tujuan Penyerangan)

penyerang yang sudah memiliki akses kontrol, akan melakukan tujuan utama penyerangan yang akan berdampak pada pilar CIA Triad

- misal mencuri data, akan berdampak pada confidentiality
- mengubah isi database, berdampak pada integrity
- mengunci data bahkan menghapusnya, berdampak pada availability

### Kerangka Kerja selain Cyber kill chain

ada namanya kerangka kerja MITRE ATT&CK, kerangka ini berbeda cara penerapannya dengan Cyber Kill Chain

kalau di MITRE ATT&CK tahap identifikasi tidak secara linear atau ber-urutan, artinya pola serangan bisa saja terjadi ketika sudah ditahap installation

kalau di cyber kill chain kita mengidentifikasi lalu mencegat agar penyerang tidak bisa lanjut ketahap selanjutnya

sedangkan di MITRE ATT&CK kita sudah mengetahui serangan dan langsung mencegahnya langsung

> Cyber Kill Chain digunakan oleh level manajemen/pimpinan untuk melihat roadmap serangan, sementara MITRE ATT&CK digunakan oleh para analis teknis untuk mendeteksi kode berbahaya dan memburu peretas di lapangan secara spesifik.

{{< quiz
    q="Peretas mengunci seluruh data perusahaan menggunakan Ransomware dan meminta uang tebusan. Aktivitas ini berada pada tahap terakhir Cyber Kill Chain, yaitu..." 
    a="Weaponization" 
    b="Installation" 
    c="Command & Control" 
    d="Actions on Objectives" 
    ans="d" 
>}}

## IAM (Identity & Access Management)

identity dan akses manajemen digunakan untuk mengatur pengguna agar hanya dapat melakukan hal-hal yang bisa dilakukannya.

setiap pengguna tentu memiliki akses yang berbeda, misal guest, user, admin

## Password Management 

password management digunakan untuk mengelola password, ketika memiliki banyak akun sosial media, market place, dan sejenisnya. password management dibutuhkan agar mengelola akun menjadi mudah 

dengan menggunakan alat password management seperti google password manager, hanya butuh satu akun google untuk menyimpan banyak akun lainnya.

perlu diketahui akun google yang dipakai untuk menyimpan banyak password akun lain harus memiliki tingkat keamanan yang tinggi, mengaktifkan mfa, otp, serta backup recoverynya

## MFA (Multi-Factor Authentication)

faktor yang biasa dipakai untuk authentikasi: know, have, are
- know : yang kita ketahui, misal password, pin, dll
- have : yang kita miliki, misal hp, kartu, dll
- are : yang ada ditubuh, misal sidik jari, wajah, mata

multi factor authentication, melakukan vertifikasi lebih dari 1x untuk memastikan bahwa yang mengakses adalah orang yang layak. 

MFA menggabungkan 2 faktor atau lebih, misalnya ketika sudah memasukan password, maka ada langkah tambahan seperti memasukan kode otp, pin, dll. ini menggabungkan 2 faktor know dan have.

jadi ketika penyerang mengetahui password (know), maka masih ada lapisan keamanan lainnya yang dia tidak punya (have) seperti kode otp maupun pin 

ada 5 jenis mfa yang biasa digunakan :
- sms otp
- email otp
- authentication app
- biometrik
- hardware key

pertanyakan ini untuk mengetahui apakah akun tidak mudah diretas atau tidak:
- apakah password sulit ditebak, pastikan menggunakan kombinasi angka huruf simbol
- apakah sudah mengaktifkan mfa, dengan mfa penyerang brute force tidak akan bisa masuk hanya dengan password saja
- apakah perangkat aman dari virus, pastikan perangkat tidak ada virus, biasanya penyerang bisa memanfaatkan cookies browser untuk mengambil alih akun

## Compliance (Kepatuhan Dasar)

Kepatuhan dasar pada kebijakan yang berlaku bisa meningkatkan keamanan serta kenyamanan

dengan mempraktekan kepatuhan dasar	kita bisa menutup celah serangan siber paling umum

### Kebiasaan Keamanan Tingkat Personal
- menggunakan kata sandi yang kuat untuk setiap akun
- mengaktifkan MFA pada akun penting
- memisahkan akun untuk kebutuhan tertentu (misal personal, game, bisnis)
- tidak menyimpan password dibrowser maupun aplikasi chat
- tidak menggunakan aplikasi tani
- menggunakan antivirus
- memperbarui aplikasi dan sistem
- membackup data secara berkala
- berhati-hati ketika menggunakan layanan internet publik dan mengakses web 

### Praktik Keamanan Digital tingkat Instansi
- Kebijakan akses jelas, siapa berhak mengakses apa
- Pelatihan keamanan secara rutin untuk seluruh anggota
- Melaporkan Insiden secepat mungkin
- Audit dan Evaluasi keamanan secara berkala


### Aturan, Kebiasaan, dan Konsistensi

pada akhirnya keamanan digital terletak pada setiap individu itu sendiri, 

dengan aturan yang jelas, lalu membangun kebiasaan sampai ketahap konsistensi

semua perlu dilakukan untuk mencapai keamanan digital yang sepenuhnya aman

{{< quiz
    q="Meskipun sistem IT sudah dipasang firewall canggih, organisasi tetap wajib mengadakan 'Security Awareness Training' bagi karyawan karena..." 
    a="Karyawan harus belajar cara meretas server kompetitor" 
    b="Manusia sering kali menjadi mata rantai terlemah yang rentan menjadi target serangan Phishing/Social Engineering" 
    c="Regulasi pemerintah mewajibkan semua karyawan memiliki sertifikasi hacker" 
    d="Pelatihan tersebut bertujuan untuk mengajarkan cara memperbaiki kabel LAN yang rusak" 
    ans="b" 
>}}


{{< accordion title="Catatan" open="true" >}}
sedikit informasi, pelatihan yang saya ikuti ini diselenggarakan oleh [JIDA (jabar istimewa digital academy)](https://digitalacademy.jabarprov.go.id), untuk yang melaksanakan pembelajarannya dari [eliteacademy.id](https://eliteacademy.id). nah JIDA ini setiap tahun selalu membuka pelatihan gratis yang bisa diikuti warga jabar
{{< /accordion >}}
