# irfanywz.web.id
Situs personal yang dibuat menggunakan hugo

![preview](irfanywz.web.id.avif)

## Mulai cepat

| Mau apa | Cara (ketik di terminal, atau klik dua kali file `.bat`) |
|---|---|
| Kerja harian: preview situs + CSS ikut ter-update otomatis | `npm start`  ·  `z_start.bat` |
| Cek sebelum publish: tes + build percobaan | `npm run check`  ·  `z_check.bat` |
| Bikin CSS final (minify) | `npm run build` |
| Publish | `github.bat` pilih `[1]`  ·  atau `z_publish.bat` (pakai `--force`, hati-hati) |
| Bikin konten baru | `hugo new content ...` (tabel di bawah) |

**Penting:** GitHub Actions **tidak** menjalankan Tailwind. File `themes/hugo-ywz/assets/css/output.css` harus sudah jadi dan ikut ter-commit.
Jadi kalau kamu mengubah tampilan (class Tailwind di layout, JS, atau content), jalankan `npm run build` dulu, baru publish.

## Pertama kali pasang

1. **Hugo extended** versi 0.164.0 (sama dengan GitHub Actions). Cek: `hugo version`.
2. **Node.js** 20.6 atau lebih baru (disarankan 22). Cek: `node --version`.
3. Di folder ini jalankan `npm install`.

## Bikin konten baru

Jalankan dari folder utama repo ini. Judul dan slug dibuat otomatis dari nama file:
`20261120 - naskah contoh.md` menjadi judul "Naskah Contoh". Kalau ada spasi di path, pakai tanda kutip.

| Mau bikin | Perintah |
|---|---|
| Artikel | `hugo new content posts/judul-artikel.md` |
| Jurnal | `hugo new content "journal/2026/November/04 - Judul"/index.md` |
| Produk atau jasa berbayar | `hugo new content services/nama.md` |
| Produk gratis | `hugo new -k services-free content services/nama.md` |
| Tool internal | `hugo new content tools/nama.md` |
| Tool di situs lain (hanya muncul di daftar) | `hugo new -k tools-external content tools/nama.md` |
| Prompt umum / animasi / musik | `hugo new content prompt/<folder>/01-nama.md` (ganti `prompt` dengan `animasi` atau `musik`) |
| Halaman portal prompt (`_index.md`) | `hugo new -k prompt-index content <prompt\|animasi\|musik>/_index.md` |
| Sub-folder pengelompok | `hugo new -k section-hidden content <section>/<folder>/_index.md` |
| Kategori kutipan | `hugo new content quote/nama.md` |
| Kategori kosakata | `hugo new content kosa-kata/nama.md` |
| Halaman topik | `hugo new content topics/"Nama Topik"/_index.md` |
| Halaman biasa (about, terms, dst.) | `hugo new content nama.md` |

File `.md` di `themes/hugo-ywz/archetypes/` itu **template front matter** untuk perintah di atas, bukan dokumentasi. Baris yang diawali `#` di dalamnya opsional: hapus tanda `#` untuk memakainya.

Tiga aturan yang gampang lupa:
- `outputs: ["JSON"]` di prompt/animasi/musik jangan diubah. Aplikasi prompt membaca datanya dari JSON.
- `build: render: never` artinya data saja, tidak punya halaman HTML sendiri (quote, kosa-kata, tool di situs lain).
- Variabel di isi prompt ditulis `[NAMA_VARIABEL]`, sama persis dengan nama di `variables_config`.

## Pengaturan penting (`hugo.toml`, bagian `[params]`)

| Param | Fungsi |
|---|---|
| `adsensePublisherId`, `googleAnalyticsId`, `googleSiteVerification` | ID AdSense, Google Analytics, verifikasi Search Console. Kalau kosong, theme memakai nilai lama dan build menampilkan peringatan `WARN config/site-ids` |
| `firebaseDatabaseUrl` | Database untuk angka view dan reaksi artikel |
| `thirdPartyFallbackMs` | `0` = GA dan AdSense baru dimuat setelah pengunjung berinteraksi (gerak mouse, klik, tekan tombol, roda mouse, sentuh layar). Isi mis. `5000` agar tetap dimuat 5 detik setelah halaman selesai walau tidak ada interaksi |
| `enableExitIntent` | `true` untuk menyalakan popup exit-intent (sekarang `false`) |
| `weatherLatitude`, `weatherLongitude` | Lokasi untuk cuaca di menu navigasi |
| `showAds`, `adCode`, `adCodeSidebar`, `adInterval`, ... | Pengaturan iklan |
| `enableDonationModal`, `donation*` | Pengaturan popup donasi |

## Tentang tes

**Tes** adalah program kecil yang mengecek bagian-bagian JavaScript situs (pencarian, filter jurnal, music player, form kontak, tombol reaksi, dan lain-lain) beserta template `hugo new`
masih bekerja seperti seharusnya. Kamu tidak perlu paham isinya.

- **Kapan dijalankan:** setelah mengubah file di `themes/hugo-ywz/assets/js` atau `themes/hugo-ywz/archetypes`, atau cukup jalankan `npm run check` sebelum publish.
- **Hasilnya:** `✅` berarti aman. `❌` disertai nama tes yang gagal: salin pesan itu apa adanya ke orang yang membantu.
- `npm test` menjalankan tes saja (cuma butuh Node). `npm run check` menjalankan tes **dan** build Hugo percobaan (tidak menulis file) dengan flag yang sama seperti GitHub Actions.
- GitHub menjalankan tes sendiri setiap push (tab **Actions**, workflow **Test JS**). Kalau merah, situs tetap ter-deploy; itu hanya tanda ada yang perlu dilihat.
- Gunakan `npm test`, jangan `node --test` langsung: repo ini perlu loader khusus (ada di `tests/_setup`), kalau tidak akan muncul error `Cannot use import statement`.
- Tes **tidak** mengecek tampilan di browser, Tailwind, atau iklan sungguhan. Itu dicek manual (daftarnya di `ARCHITECTURE.md`, bagian "Cek manual di browser").

## Kalau ada masalah

| Gejala | Penyebab / solusi |
|---|---|
| Tampilan sudah benar di lokal, tapi di situs belum | Lupa `npm run build` atau `output.css` belum ter-commit |
| `npm test` error `Cannot use import statement` | Jangan jalankan `node --test`; pakai `npm test` |
| GA/AdSense tidak muncul di tab Network sebelum mouse digerakkan | Memang begitu rancangannya (lihat `thirdPartyFallbackMs`) |
| Build menampilkan `WARN config/site-ids ... belum diisi` | Isi param yang disebut di `hugo.toml` |
| `npm start` gagal karena port 1313 terpakai | Tutup `hugo server` lain yang masih jalan |
| `npm run check` bilang Hugo tidak ditemukan | Pasang Hugo extended dan pastikan `hugo version` jalan di terminal |

## Todo

november 
18 - refactory tampilan toko
18 - membuat layout landing page untuk content post
18 - halaman membership, memberikan penjelasan keuntung jadi membership, tampilan data post yang butuh membership, tombol cta untuk jadi member, 
18 - shortcode tombol cta kehalaman service atau produk
18 - fix halaman jurnal list, kategori filter duplikat key

## Dokumen lain

- [`ARCHITECTURE.md`](ARCHITECTURE.md): cara situs ini disusun (folder, layout, JavaScript, Tailwind, tes).
- [`CHANGELOG.md`](CHANGELOG.md): daftar perubahan.
