---
title: AI Memory Install
description: Memasang AI_Memory ke aplikasi biar gak bego pas pindah chat
outputs: ["JSON"]
# https://chatgpt.com/c/6ad98a39-43cc-83ec-b818-d5d117755905
---

## WAJIB: SISTEM AI_MEMORY LINTAS WEB CHAT

Saat membangun proyek ini, buat sistem dokumentasi dan memori proyek bernama `AI_MEMORY` agar pekerjaan bisa dilanjutkan oleh AI lain dari web chat berbeda tanpa harus membaca ulang seluruh source code dan riwayat percakapan dari awal.

### 1. Buat struktur AI_MEMORY

Buat folder `AI_MEMORY/` di root proyek dengan file berikut:

- `PROJECT.md` — tujuan aplikasi, teknologi, fitur, dan aturan pengembangan.
- `ARCHITECTURE.md` — arsitektur aplikasi, alur kerja, modul, dan hubungan dependensi.
- `CODE_MAP.md` — peta file penting, tanggung jawabnya, serta lokasi fungsi utama yang sudah diverifikasi.
- `CURRENT_TASK.md` — status pengerjaan terbaru, fitur selesai, pekerjaan tertunda, bug, dan langkah selanjutnya.
- `DECISIONS.md` — keputusan teknis penting dan alasannya.
- `CHANGELOG.md` — riwayat perubahan kode yang signifikan.
- `AI_HANDOFF.md` — ringkasan ringkas dan terbaru yang menjadi titik masuk AI saat melanjutkan proyek.
- `AI_INSTRUCTIONS.md` — aturan yang wajib diikuti AI saat membaca, mengubah, dan mendokumentasikan proyek.

### 2. Buat AI_HANDOFF.md sebagai pintu masuk utama

File ini harus ringkas, praktis, dan selalu mencerminkan kondisi proyek terbaru. Isinya minimal:

- Nama dan tujuan proyek.
- Status implementasi terkini.
- Teknologi dan arsitektur inti.
- Fitur yang sudah selesai dan yang belum.
- File yang relevan untuk pekerjaan berikutnya.
- Bug atau kendala aktif.
- Keputusan penting yang tidak boleh dilanggar.
- Langkah berikutnya yang spesifik.
- Informasi yang masih belum diverifikasi.

AI yang melanjutkan proyek harus membaca `AI_HANDOFF.md` terlebih dahulu, lalu membuka file memori lain atau source code yang relevan sesuai kebutuhan. Jangan memaksanya membaca seluruh file proyek tanpa alasan.

### 3. Aturan pemeliharaan memori

- Buat dokumentasi berdasarkan implementasi aktual, bukan asumsi.
- Jangan mengarang file, fungsi, dependensi, status, atau hasil pengujian.
- Setelah perubahan kode yang signifikan, perbarui dokumentasi yang terdampak.
- Sebelum sesi pengerjaan berakhir atau pengguna berpindah web chat, perbarui `AI_HANDOFF.md` dan `CURRENT_TASK.md`.
- Jika struktur atau hubungan modul berubah, perbarui `CODE_MAP.md` dan `ARCHITECTURE.md`.
- Jangan mengulang atau menduplikasi informasi yang tidak diperlukan.
- Jangan menyalin seluruh source code ke file memori.
- Jangan menyimpan API key, token, password, atau rahasia lain di dokumentasi.
- Jika dokumentasi berbeda dari source code terbaru, verifikasi source code dan koreksi dokumentasi.

### 4. Aturan melanjutkan pekerjaan lintas AI

`AI_INSTRUCTIONS.md` harus menjelaskan prosedur berikut:

1. Baca `AI_HANDOFF.md` terlebih dahulu.
2. Baca `CURRENT_TASK.md` dan `CODE_MAP.md` jika relevan.
3. Cocokkan informasi penting dengan source code terbaru pada file yang diperlukan.
4. Jangan membaca semua file dari awal hanya untuk memahami proyek.
5. Jangan mengulang pekerjaan yang sudah selesai.
6. Lanjutkan dari langkah berikutnya yang tercatat, kecuali hasil pemeriksaan menunjukkan bahwa langkah tersebut sudah tidak relevan.
7. Jika informasi penting tidak tersedia, lakukan pemeriksaan terarah atau ajukan pertanyaan yang diperlukan.
8. Setelah mengerjakan tugas, perbarui memori agar bisa digunakan oleh AI lain.

### 5. Buat prompt handoff siap pakai

Buat file `AI_MEMORY/PROMPT_RESUME.md` yang berisi instruksi singkat dan universal untuk diberikan kepada AI baru. Prompt tersebut harus menyuruh AI membaca `AI_HANDOFF.md` terlebih dahulu, memeriksa kode yang relevan, menghindari pembacaan ulang seluruh proyek, dan melanjutkan tugas dari kondisi terakhir.

### 6. Integrasi dengan alur pengembangan

- Buat semua file memori sejak tahap awal proyek.
- Isi dokumentasi secara bertahap ketika arsitektur dan fitur benar-benar terbentuk.
- Jangan menunda seluruh dokumentasi sampai aplikasi selesai.
- Jadikan pembaruan memori bagian dari proses penyelesaian tugas, bukan pekerjaan tambahan yang mudah terlupakan.
- Jika tersedia mekanisme penyimpanan file, gunakan mekanisme tersebut agar dokumentasi benar-benar tersimpan di proyek.

### 7. Prioritas implementasi

Utamakan implementasi aplikasi utama terlebih dahulu sambil membangun dokumentasi secara bertahap. Jangan membuat sistem AI agent, database vektor, atau infrastruktur tambahan hanya untuk kebutuhan dokumentasi ini.

Setelah implementasi awal selesai, laporkan:
- File AI_MEMORY yang sudah dibuat.
- Informasi yang sudah diverifikasi.
- Informasi yang masih belum diketahui.
- Cara menggunakan AI_HANDOFF.md ketika berpindah web chat atau model.

Tujuan akhirnya: proyek dapat dilanjutkan oleh AI berbeda dengan konteks minimum yang cukup, tanpa menghabiskan banyak token untuk membaca ulang source code dan percakapan sebelumnya.