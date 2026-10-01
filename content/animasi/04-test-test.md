---
title: "Prompt Penulis Arteikel SEO"
description: "Membuat artikel SEO friendly otomatis."
has_database: false
variables_config:
  topik:
    type: "text"
    label: "Topik Utama"
    placeholder: ""
    default: ""
  gaya:
    type: "datalist"
    label: "Gaya Bahasa / Tone"
    placeholder: "Pilih atau ketik gaya sendiri..."
    default: "Formal"
    options:
      - "Formal & Profesional"
      - "Santai & Kasual"
      - "Humoris"
      - "Serius & Akademis"
  panjang:
    type: "number"
    label: "Jumlah Kata"
    default: 500
outputs:
  - JSON    
draft: true
---

Buatkan artikel tentang [topik] dengan gaya bahasa [gaya] dan panjang sekitar [panjang] kata.