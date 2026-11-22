# Arsitektur

Penjelasan cara situs ini disusun. Untuk pemakaian sehari-hari, baca `README.md`.

## 1. Ringkasan

| Bagian | Yang dipakai |
|---|---|
| Generator situs | Hugo extended 0.164.0 |
| Theme | `themes/hugo-ywz` (bagian dari repo ini, bukan submodule) |
| CSS | Tailwind v4 (`@tailwindcss/cli`), plugin `@tailwindcss/typography` dan `@iconify/tailwind4` (ikon `icon-[ri--...]`) |
| JavaScript | Alpine.js 3 + plugin collapse. Dibuild Hugo (`js.Build`/esbuild), tanpa framework lain |
| Hosting | GitHub Pages lewat GitHub Actions |

**Alur dari ketikan sampai tayang**

1. Edit konten/layout/JS/class Tailwind.
2. `npm run build` mengubah `assets/css/input.css` menjadi `assets/css/output.css` (minify). **File ini di-commit**, karena GitHub Actions tidak menjalankan Tailwind.
3. Push ke `main`. Workflow **Deploy Hugo site to Pages** (`.github/workflows/hugo.yaml`) memasang Hugo 0.164.0, menjalankan `npm ci`, lalu `hugo --gc --minify` dengan `HUGO_ENVIRONMENT=production`, dan men-deploy folder `public`.
4. Workflow **Test JS** (`.github/workflows/test.yml`) jalan terpisah menjalankan `npm test`. Gagal di sini tidak menghentikan deploy.

## 2. Peta folder

```
/                          repo (situs)
├─ README.md, ARCHITECTURE.md, CHANGELOG.md
├─ hugo.toml               konfigurasi situs ([params], menu, markup, output)
├─ package.json            skrip npm: start, build, dev, test, check
├─ content/                isi situs (markdown)
├─ data/                   data pendukung (mis. aff.yml)
├─ static/                 file apa adanya (gambar, kursor, favicon, ads.txt, dst.)
├─ tests/                  tes JS (lihat bagian 7)
├─ scripts/                test.mjs, check.mjs, dev.mjs (dipanggil lewat npm)
├─ z_*.bat, github.bat     pintasan untuk Windows
├─ .github/workflows/      hugo.yaml (deploy), test.yml (tes)
└─ themes/hugo-ywz/        theme
   ├─ layouts/             template Hugo
   ├─ assets/js/           JavaScript
   ├─ assets/css/          input.css, output.css (hasil build, di-commit), code.css, syntax.css
   ├─ archetypes/          template front matter untuk `hugo new`
   ├─ static/, i18n/, content/ (kosong), hugo.toml (default theme)
   └─ dev/lic/lic.source.html   sumber terbaca dari shortcode lic (lihat bagian 9)
```

`hugo_backup.toml` di root adalah cadangan konfigurasi lama; Hugo tidak membacanya.

## 3. Layout (`themes/hugo-ywz/layouts`)

**Kerangka.** `_default/baseof.html` membungkus semua halaman. Template halaman mengisi block `config`, `head`, `main`, dan `footer`.
Halaman bisa mengatur header lewat `.Store` (`hideHeader`, `noIndex`, dst.). Block `head` dirender **sebelum** `baseof/js.html` memuat `main.js`; hal ini dipakai untuk urutan script (bagian 5).

**Per section.** Setiap folder (`posts`, `journal`, `services`, `tools`, `prompt`, `animasi`, `musik`, `quote`, `kosa-kata`, `topics`, `keywords`, `search`, `go`, `about`, `contact`, `membership`, dst.)
berisi `list.html` / `single.html`, dan `*.index.json` untuk section yang datanya dibaca JavaScript (prompt, animasi, musik, playlist-music, quote, kosa-kata, journal, tools, go). `index.json` di root adalah indeks pencarian.
Artikel (`posts/single.html`) memilih tata letak dari front matter `layout`: `withsidebar` (default), `nosidebar`, `naskah`, `affiliate`, atau `landing`.

**Partial** (`_partials`, total 90 file):

| Folder | Isi |
|---|---|
| `baseof/` (16) | `head`, `css`, `js`, `js-bottom`, header/footer, cookie consent, popup, loader halaman, lightbox, terjemahan |
| `components/` (35) | Potongan UI yang dipakai banyak halaman: music player, aplikasi quote/kosakata/prompt, kartu, paginasi "muat lagi", SWG, view-count, `inline-js`, `inline-bundle` |
| `posts/` (30) | Bagian halaman artikel: sidebar, daftar, kartu, `layout/<nama>.html` (dipilih dinamis dari front matter `layout`) |
| `services/` (3) | `details`, `purchase-card`, `vars` (nilai turunan yang dipakai bersama) |
| `about/` (3), `home/` (2) | Tab halaman about, bagian beranda |
| `config/` (1) | `site-ids.html`: mengembalikan ID AdSense/GA/verifikasi/Firebase dari `[params]` |

Selain itu ada **34 shortcode** (`_shortcodes`: kuis, spoiler, steps, youtube-lite, paywall, toc, dst.) dan 3 render hook (`_markup`: image, link, table).

## 4. Section, layout, archetype

| Section | Layout | Archetype (`hugo new`) | Catatan data |
|---|---|---|---|
| `posts` | `posts/single.html` | `posts` | front matter `layout`, `premium`, `series`, `topics`, `keywords` |
| `journal` | `journal/list.html`, `single.html` | `journal` | folder bundle `tahun/Bulan/nama/index.md` |
| `services` | `services/list.html`, `single.html` | `services`, `services-free`, `services-index` | varian harga di `variants`; QR dan kontak di `_index.md` |
| `tools` | `tools/list.html`, `single.html` | `tools`, `tools-external` | tool eksternal: `build: render never` |
| `prompt`, `animasi`, `musik` | `*/list.html` + `*.index.json` | `prompt`, `animasi`, `musik`, `prompt-index`, `section-hidden` | item: `outputs: ["JSON"]`; `variables_config` |
| `quote`, `kosa-kata` | `*/list.index.json` | `quote`, `kosa-kata` | satu file = satu kategori, `build: render never` |
| `topics` | `topics/list.html`, `term.html` | `topics` | |
| halaman lain | `about`, `contact`, `membership`, `terms`, ... | `default` | |

Judul dan slug archetype diturunkan dari nama file: awalan angka + `-` dibuang, `-`/`_` jadi spasi, lalu Title Case. Slug lama bergaya `Pipi Bengkak` tetap valid karena Hugo membuat URL yang sama.

## 5. JavaScript (`themes/hugo-ywz/assets/js`)

### Tiga cara script sampai ke halaman

| Cara | Dipakai untuk | Kenapa |
|---|---|---|
| **Bundle global** (`js.Build`, `defer`) | `main.js`: Alpine, plugin, `alpine-store.js`, `code.js`. `footer.js`: nav-widget, third-party, `cursor.js`, `favicon-dot.js`. Juga `view-count.js`, `theme-init.js`, SWG | Dimuat di (hampir) semua halaman |
| **`inline-bundle`** | Komponen Alpine dan script khusus halaman: jurnal, music player, quote, kosakata, search, services, kontak, form support, exit-intent | Dibuild `js.Build` (bisa `import`, minify, `@params`) lalu disisipkan **inline** |
| **`inline-js`** | `go-redirect.js`, `404-redirect.js` | Redirect kecil yang harus jalan langsung; disisipkan apa adanya |

**Kenapa inline, bukan `<script src defer>`:** komponen Alpine harus terdaftar **sebelum** `Alpine.start()` (di `main.js`, `defer`). Script inline jalan saat halaman di-parse, jadi urutannya terjamin.
File `defer` di body baru jalan sesudah `main.js`, dan komponennya terlambat terdaftar (error). Hasil build `inline-bundle` berformat IIFE (tanpa variabel global),
jadi komponen didaftarkan dengan `Alpine.data('nama', ...)` di dalam `alpine:init`. Data dari Hugo dikirim lewat `params` dan dibaca di JS dengan `import * as params from '@params'`.

Cara memakainya di template:

```go-html-template
{{ partial "components/inline-bundle.html" (dict "src" "js/pages/journal/index.js"
     "params" (dict "dataUrl" ("journal/index.json" | relURL))) }}
```

### Pola modul

```
assets/js/pages/<halaman>/index.js     entry: Alpine.data(...) di dalam 'alpine:init'
assets/js/pages/<halaman>/*.js         fungsi murni (tanpa DOM/Alpine), bisa dites
assets/js/components/<nama>/           sama, untuk komponen yang dipakai di beberapa halaman
assets/js/stores/<nama>.js             store Alpine global; didaftarkan di alpine-store.js
assets/js/features/<nama>.js           fitur opt-in (dimuat partial fiturnya, dikontrol param)
assets/js/lib/                         pustaka bersama (tabel di bawah)
assets/js/prompt-app/NN-*.js           aplikasi prompt: file bernomor di-concat (scope bersama); sudah rapi, dibiarkan
```

### Pustaka bersama (`lib/`)

| File | Isi |
|---|---|
| `http.js` | `fetchJson` (galat bila bukan 2xx) dan `fetchJsonOrNull` (`null` bila gagal; untuk data opsional) |
| `html.js` | `escapeHtml`, `escapeRegExp` |
| `format.js` | `formatRupiah` |
| `cycle.js` | `nextIndex`, `prevIndex` (navigasi melingkar) |
| `web3form.js` | `attachWeb3Form`: kirim form ke Web3Forms (kontak dan support) |
| `defer.js` | `runAfterInteraction`: pembungkus Defer.js |

### Script pihak ketiga dan Defer.js

Defer.js 3.9.0 dimuat inline di `baseof/head.html` (jadi `Defer` ada sebagai global). GA dan AdSense (`third-party/`) dimuat lewat `runAfterInteraction`.
Perilaku yang **sudah diuji dengan Defer.js asli**: keduanya baru dimuat setelah halaman selesai dimuat **dan** ada `keydown`, `mousemove`, `mousedown`, `touchstart`, atau `wheel`.
`scroll` dan `mouseover` **tidak** dihitung, dan tanpa interaksi keduanya tidak pernah dimuat. `thirdPartyFallbackMs` (di `hugo.toml`) menambah cadangan: muat otomatis sekian ms setelah load.
Ada tes kontrak yang menjalankan Defer.js asli, supaya upgrade Defer yang mengubah perilaku ini langsung ketahuan.

### Store Alpine (`stores/`)

`nav`, `theme`, `lightbox`, `cookie-consent`, `translate`, `page-loader`, dan `share`. Semuanya dipakai partial di `baseof` (ada di setiap halaman), kecuali `share`: tidak ada layout yang memakainya
(dipertahankan kalau dipakai di content; boleh dihapus bersama baris registrasinya di `alpine-store.js`).

### Widget navigasi dan view-count

- `nav-widget/`: jam, sapaan, dan cuaca (Open-Meteo, cache 30 menit di localStorage). Jam disegarkan saat menu dibuka dan saat tab kembali terlihat; tab tersembunyi tidak memperbarui apa pun.
- `view-count/`: angka view dan reaksi artikel di Firebase Realtime Database. Firebase dimuat dari CDN Google saat dibutuhkan.

## 6. Tailwind

`assets/css/input.css` memakai `@import "tailwindcss"` dengan beberapa `@source`; deteksi class otomatis tetap aktif dan memindai seluruh repo dari folder tempat perintah dijalankan (kecuali yang ada di `.gitignore`).
Karena itu class yang ditulis di `assets/js/**` ikut terbaca, begitu juga class di layout dan content. Class harus ditulis **utuh** di sumber (jangan dirakit dari potongan seperti `` `bg-${warna}-100` ``), kalau tidak Tailwind tidak menemukannya.
Setelah mengubah class, jalankan `npm run build`.

## 7. Tes

Semua ada di folder `tests/` dan dijalankan dengan `npm test`:

| File | Yang dites |
|---|---|
| `journal-filters`, `search`, `services`, `quote-kosakata`, `music-player` | Logika murni tiap halaman/komponen (filter, pencarian, format pesan, playlist, pengaturan, dst.) |
| `nav-widget`, `view-count`, `web3form`, `stores` | Perilaku dengan DOM/Firebase/jaringan tiruan (cache cuaca, hitungan view, pengiriman form, lightbox, dst.) |
| `third-party` | Loader GA/AdSense, termasuk **tes kontrak Defer.js asli** dari `head.html` |
| `lib` | Pustaka bersama |
| `archetypes` | Setiap archetype: action template dikenal, YAML tanpa tab, front matter ditutup |

Cara kerja yang perlu diketahui:
- `package.json` repo bertipe `commonjs`, sedangkan file JS theme memakai `import`/`export`. `scripts/test.mjs` menjalankan Node dengan **loader** (`tests/_setup`) yang memaksa file di `themes/hugo-ywz/assets/js` dibaca sebagai ES module, **hanya saat tes**. Build Hugo tidak terpengaruh.
- `tests/helpers/load-entry.mjs` menjalankan file "entry" (yang memakai `@params` dan `import` relatif) di sandbox dengan global palsu, supaya bisa dites tanpa Hugo.
- Menambah tes: buat `tests/nama.test.mjs` (format `node:test`, contoh ada di file yang sudah ada).

### Cek manual di browser (tidak bisa dites otomatis)

Jalankan `npm start`, buka DevTools → Console (tidak boleh ada error merah), lalu cek:

| Halaman | Cek |
|---|---|
| `/journal/` | daftar, filter tahun/kategori, pencarian, `?year=&category=&q=` di URL; tombol musik (modal, daftar lagu, play/pause/next/shuffle/loop/volume, pengaturan tersimpan setelah reload); modal kutipan dan kosakata |
| `/search/` | hasil, sorotan kata, `?q=kata` |
| `/services/` dan satu produk | filter, galeri + lightbox, pilih varian, salin nominal, tombol WhatsApp/Telegram |
| `/contact/` dan tab support di `/about/` | kirim form: pesan tunggu, sukses/galat, lalu hilang |
| satu artikel | angka view bertambah, reaksi jalan, tidak ada `Failed to load Firebase modules` |
| semua halaman | menu, dark mode (tersimpan), banner cookie, lightbox gambar, panel terjemahan, bilah progres, jam/cuaca di menu |
| Network (DevTools) | tanpa menggerakkan mouse/menekan tombol, `googletagmanager.com` dan `googlesyndication.com` **tidak** muncul; setelah mouse digerakkan, muncul |
| Setelah `npm run build` | tampilan tidak polos (class Tailwind dari JS tetap ada) |

## 8. Konvensi

- Template: pakai `site.Params` (bukan `.Site.Params`) dan `.Store` (bukan `.Scratch`). Untuk param opsional: `{{ if .Params.x }}` atau `| default`; `isset` hanya untuk map dinamis atau saat "ada tapi kosong" harus dibedakan.
- ID/URL layanan eksternal jangan di-hardcode di layout atau JS: taruh di `hugo.toml` `[params]`, baca lewat `config/site-ids.html` (ada nilai cadangan + peringatan saat build), kirim ke JS lewat `params`.
- JS panjang jangan ditulis di template: taruh di `assets/js/` lalu `inline-bundle`. Fungsi murni dipisah ke file sendiri dan dites.
- Fitur opt-in dikontrol param dan JS-nya hanya dimuat oleh partial fitur itu, bukan dari bundle global.
- Template di atas ±250 baris dipecah per area visual menjadi partial dengan context `.` (halaman); nilai turunan bersama ditaruh di partial `return` (contoh: `services/vars.html`).
- Script pihak ketiga lewat `third-party/` + `lib/defer.js`.

## 9. Hal yang perlu diperhatikan

- **Kode yang di-obfuscate.** `assets/js/swg.js` dan `layouts/_shortcodes/lic.html` berisi kode yang dipak/di-obfuscate dan tidak bisa dibaca atau dirawat langsung. Dari string yang terbaca,
  `swg.js` memuat CryptoJS dari cdnjs dan `swg.js` resmi Google, dan ada operasi dekripsi AES (tampaknya skrip paywall untuk post premium). Jangan diubah. Sumber terbaca `lic` ada di `themes/hugo-ywz/dev/lic/lic.source.html`
  (belum diverifikasi masih sinkron). Kalau file-file ini bukan buatanmu, pastikan asalnya terpercaya. Catatan: paywall yang mendekripsi di browser tidak aman secara kriptografi karena kuncinya ada di sisi klien.
- **Hitungan view dan reaksi tidak atomik.** Alurnya `get` lalu `update(nilai + 1)`. Dua pengunjung bersamaan hanya menambah satu. Firebase punya `increment()` yang atomik, tapi mengubahnya menyentuh aturan database. Periksa juga **Realtime Database rules**:
  kalau klien boleh menulis bebas, siapa pun bisa mengisi angka sembarang. Elemen `.post-view` tanpa `data-id` menyebabkan galat (dibiarkan agar perilaku lama tidak berubah).
- **Pencarian meng-escape HTML.** Judul berisi `<` atau `"` kini tampil benar (dulu bisa merusak markup).
- **`z_publish.bat` memakai `git push --force`** yang menimpa riwayat di GitHub. `github.bat` pilihan `[1]` melakukan push biasa.
- **`.hugo_build.lock`** dibuat Hugo; sudah masuk `.gitignore` (kalau sudah terlanjur ter-commit: `git rm --cached .hugo_build.lock`).
- **Peringatan build `WARN config/site-ids`** berarti ada param di `hugo.toml` yang kosong dan theme memakai nilai cadangan lama.
