# Changelog

Terbaru di atas. Format tanggal: bulan-tahun.

## Perapihan dan penyederhanaan (November 2026)

Tujuan: dokumentasi dan alat bantu yang gampang dipahami dan dipakai.

**Ditambah**
- `npm start`: menjalankan Tailwind (watch) dan `hugo server` sekaligus. Pintasan: `z_start.bat`.
- `npm run check`: tes JS + build Hugo percobaan dengan flag GitHub Actions (tidak menulis file). Pintasan: `z_check.bat`.
- Workflow `.github/workflows/test.yml` ("Test JS"): menjalankan tes otomatis tiap push. Terpisah dari deploy, jadi tidak bisa menggagalkan publish.
- Tes archetype (`tests/archetypes.test.mjs`): menggantikan skrip Python.
- Tiga dokumen di root: `README.md`, `ARCHITECTURE.md`, `CHANGELOG.md`.
- `.hugo_build.lock` masuk `.gitignore`.

**Diperbaiki**
- **Perintah tes sebelumnya tidak jalan di repo ini.** `package.json` bertipe `commonjs`, sehingga Node membaca file JS theme (yang memakai `import`/`export`) sebagai CommonJS dan error
  `Cannot use import statement`. Sekarang `npm test` memakai loader di `tests/_setup` yang hanya berlaku saat tes. Build Hugo tidak terpengaruh. Jangan jalankan `node --test` langsung.
- `npm start` mematikan Tailwind dan Hugo dengan bersih saat dihentikan (Windows: `taskkill /T`; Linux/macOS: grup proses).

**Diubah**
- Tes dipindah dari `themes/hugo-ywz/tests` ke `tests/` di root. Butuh Node 20.6+ (CI memakai 22). Tidak ada dependensi baru, `package-lock.json` tidak berubah.
- Tes lolos di beberapa zona waktu (UTC, Los Angeles, Jakarta, Kiritimati), termasuk zona waktu yang dipakai GitHub Actions.

**Dihapus**
- Semua dokumen lain: `themes/hugo-ywz/README.md`, `themes/hugo-ywz/docs/*`, `themes/hugo-ywz/dev/README.md` (isinya dirangkum di `ARCHITECTURE.md`).
- Skrip Python/bash: `regress.py`, `regress.sh` (pembanding output build), `check-archetypes.py`, `gen-partials-doc.py`.
- `themes/hugo-ywz/dev/archive/` (7 partial yang sudah tidak dipanggil dari mana pun; masih ada di riwayat git). `dev/lic/lic.source.html` tetap ada.

**Yang perlu dilakukan setelah memasang versi ini**
- Hapus dari repo lokal: `themes/hugo-ywz/{tests,scripts,docs,README.md}`, `themes/hugo-ywz/dev/{README.md,archive}`.
- Jalankan `npm run check` sekali.
- Cek manual singkat di browser (daftar di `ARCHITECTURE.md`, bagian 7).

---

## Refactor besar (November 2026)

### Perilaku yang berubah (disengaja)

| Perubahan | Penjelasan |
|---|---|
| Popup exit-intent jadi opt-in | Store-nya keluar dari bundle global. Dinyalakan lewat `enableExitIntent = true` (sekarang `false`, sama seperti sebelumnya) |
| Bug `ai_system` di prompt musik | `musik/single.index.json` salah membaca `ai_temperature`; sekarang membaca `ai_system`, yang dipakai sebagai system prompt Gemini/OpenAI |
| Pencarian meng-escape HTML | Judul, `alt`, `href`, dan tag di hasil pencarian di-escape. Item tanpa judul/permalink menghasilkan teks kosong, bukan kata `undefined` |
| Form kontak/support | `innerHTML` diganti `textContent` (pesan galat dari API pihak ketiga tidak lagi dirender sebagai HTML) |
| Widget jam/cuaca di menu | Lima perbaikan: (1) jam disegarkan saat menu dibuka (sebelumnya kode mati); (2) interval tidak ganda; (3) cache cuaca rusak tidak lagi mematikan widget; (4) respons API bukan 2xx tidak lagi menulis cache rusak; (5) tab tersembunyi tidak memperbarui, dan langsung diperbarui saat kembali terlihat |
| `console.log` informasional dibuang | Dari loader GA/AdSense, view-count, dan cuaca. `console.error`/`warn` tetap |
| ID layanan dipindah ke `[params]` | `adsensePublisherId`, `googleAnalyticsId`, `googleSiteVerification`, `firebaseDatabaseUrl`, `weatherLatitude`, `weatherLongitude`. Kalau kosong dipakai nilai lama dan build memberi peringatan |
| `thirdPartyFallbackMs` (baru) | Opsi memuat GA/AdSense otomatis sekian ms setelah load. Default `0` = perilaku lama |
| `54-part-ai-kie.js` dihapus | Tidak ada di daftar bundle dan tidak direferensikan |

### Yang sengaja tidak diubah

- **Waktu muat GA/AdSense.** Sudah diuji dengan Defer.js asli: baru dimuat setelah load **dan** `keydown`/`mousemove`/`mousedown`/`touchstart`/`wheel`. `scroll` dan `mouseover` tidak dihitung, dan tanpa interaksi keduanya tidak pernah dimuat.
  Komentar lama soal cadangan 5 detik tidak pernah berlaku. Keputusan ada di `thirdPartyFallbackMs`.
- **Cara `view-count` menulis ke Firebase** (tidak atomik; lihat `ARCHITECTURE.md` bagian 9), serta galat saat `data-id` kosong.
- `swg.js` dan `lic.html` (kode di-obfuscate).
- Store `share` (tidak dipakai layout, mungkin dipakai di content).

### Struktur

- **Konvensi template:** `.Site.X` menjadi `site.X` (73 tempat), `.Scratch` menjadi `.Store` (8 tempat), `isset` berlebihan disederhanakan, 7 partial yang tidak dipakai dihapus, `affiliate/` yang kembar dengan `_default` dihapus, line ending jadi LF, key legacy `pygments*` dihapus dari `hugo.toml`.
- **JavaScript.** 14 script inline di template (±59 KB) dipindah ke `assets/js/` dan dipecah jadi modul dengan fungsi murni yang bisa dites. Pola `inline-bundle` menjaga urutan sebelum `Alpine.start()`.
  Yang dimigrasi: jurnal, music player, search, services (single + list), form kontak dan support, quote, kosakata, exit-intent. `alpine-store.js` dipecah jadi `stores/*`,
  loader GA/AdSense digabung jadi `third-party/`, `weather-time` menjadi `nav-widget/`, `view-count` dipecah jadi `view-count/*`. Pustaka bersama baru di `lib/`.
- **Ukuran template:** `services/single.html` 554 → 31 baris, `journal/list.html` 523 → 253, `music-player.html` 589 → 201, `search/single.html` 268 → 78.
- **Archetype** dari 3 menjadi 16 (termasuk `kosa-kata.md` yang memperbaiki archetype lama `vocabulary.md` yang skemanya salah dan namanya tidak pernah cocok dengan section).
  Judul dan slug dibuat otomatis dari nama file.
- **Verifikasi.** Tiap modul yang dimigrasi dibandingkan dengan versi lamanya memakai operasi acak (puluhan ribu langkah per bagian: state, panggilan jaringan/penyimpanan/timer, dan galat harus identik),
  dan alat pembandingnya sendiri diuji dengan bug sengaja. Ini dilakukan di luar repo dan tidak disertakan; yang tersisa di repo adalah tes `tests/` (±100 tes).
  Hal yang tidak bisa disimulasikan (tampilan, Alpine/Hugo asli, iklan, Firebase sungguhan) dicek manual lewat daftar di `ARCHITECTURE.md`.
