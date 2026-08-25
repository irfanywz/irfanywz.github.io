---
title: Prompt Website
description: Kumpulan prompt untuk membuat website
draft: false
layout: "prompt"
icon: "icon-[ri--robot-2-line]"
icon_color: "text-cyan-500"
prompts:
  - title: Tailwindcss4 + Alpine js
    prompt: buatkan saya website menggunakan tailwindcss4 dan alpine js, website ini adalah sebuah landing page produk digital

  - title: Game Quiz
    prompt: |
      ## INPUT

      **Topik:** olahraga penting untuk usia 20an
      **Jumlah Stage:** 15

      ---

      Bertindaklah sebagai **Senior Frontend Engineer dan Mobile-First UI/UX Game Designer**.

      Buatkan **satu file HTML utuh (single-file)** berisi aplikasi kuis/mini-game edukasi interaktif berdasarkan topik di atas.

      Game harus:

      * Memiliki jumlah stage sesuai input.
      * Menggunakan variasi mekanik game secara acak dan merata agar setiap stage tidak monoton.
      * Mobile-first, responsif, dan nyaman dimainkan di smartphone.
      * Memiliki UI game kasual modern dengan Tailwind CSS v4.
      * Menggunakan Google Font **Fredoka**.
      * Menggunakan Alpine.js untuk state management.
      * Menggunakan Canvas Confetti untuk efek jawaban benar.
      * Menggunakan Tone.js untuk SFX dan BGM relax/ambient.
      * BGM baru dimulai setelah pengguna menekan tombol **"Mulai Permainan"**.
      * Data setiap stage harus dipisahkan dalam array JSON agar mudah diedit.
      * Berikan kode lengkap dalam **satu blok HTML** yang bisa langsung disalin dan dijalankan.

      ### Sistem Variasi Stage

      Gunakan kombinasi acak dari mekanik berikut:

      1. `choice` — Pilihan ganda.
      2. `truefalse` — Benar atau Salah.
      3. `dragdrop` — Drag jawaban ke target.
      4. `tapgame` — Ketuk target berulang.
      5. `sequence` — Susun urutan yang benar.
      6. `slider` — Geser slider ke nilai yang tepat.
      7. `memorymatch` — Cocokkan pasangan kartu.
      8. `oddoneout` — Cari elemen yang berbeda.
      9. `fillblank` — Lengkapi kalimat.
      10. `speedclick` — Ketuk target sebelum waktu habis.
      11. `categorize` — Kelompokkan item ke kategori.
      12. `scrabbleword` — Susun huruf menjadi kata.
      13. `sliderange` — Pilih rentang nilai yang benar.
      14. `balancing` — Seimbangkan meter ke target.

      ### Aturan UI & Responsif

      * Gunakan layout `mobile-first`.
      * Konten utama menggunakan `max-w-md` atau `max-w-lg`.
      * Berikan padding yang nyaman di layar HP.
      * Semua tombol minimal tinggi **44px** dan nyaman untuk disentuh.
      * Gunakan Flexbox/Grid yang fleksibel.
      * Desain chunky, rounded, border tebal, dan nuansa game kasual modern.
      * Gunakan background gelap/indigo dengan aksen warna cerah.
      * Tampilkan progress stage, skor, dan indikator bintang.
      * Sediakan feedback visual dan suara untuk jawaban benar/salah.
      * Buat layar kemenangan setelah semua stage selesai.

      **PENTING:** Buat seluruh isi pertanyaan, jawaban, tantangan, dan materi berdasarkan **Topik** yang diberikan di bagian INPUT. Sesuaikan tingkat kesulitan dan variasi mekanik secara otomatis berdasarkan jumlah stage.      
---