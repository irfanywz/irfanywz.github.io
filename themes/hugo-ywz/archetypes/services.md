{{- $title := .File.ContentBaseName | replaceRE `^\d+\s*-\s*` "" | replaceRE `[-_]+` " " | title -}}
---
# ===== PRODUK / JASA BERBAYAR =====
title: "{{ $title }}"
slug: "{{ $title | urlize }}"
description: ""
shop_type: "produk"   # "produk" atau "jasa"
category: ""          # dipakai untuk filter Kategori di halaman list
available: true       # false = overlay "Tidak Tersedia" + tombol dinonaktifkan

# --- Harga ---
# Dengan variants: harga di list = varian termurah, di detail pilih varian.
# Tanpa variants: pakai price (angka) + display_price (teks tampilan).
variants:
  - name: ""
    price: 0
    display_price: "Rp 0"
# price: 0
# display_price: "Rp 0"
# payment_qr: false   # matikan bayar via QR untuk item ini

# --- Tombol aksi di sidebar (semua opsional) ---
# download_url: ""
# download_label: "Download Demo"
# landing_url: ""
# landing_label: "Kunjungi Website"
# guide_url: ""
# guide_label: "Baca Panduan"
# support_info: ""     # link support, mis. https://t.me/username

# --- Media (opsional) ---
# image: ""
# gallery: []
# demo_video_id: ""    # bagian setelah ?v= di URL YouTube

# --- Konten pendukung (opsional) ---
# benefits:
#   - icon: "icon-[ri--shield-check-line]"
#     text: ""
# product_examples:
#   - title: ""
#     description: ""
#     url: ""
# testimonials:
#   - name: ""
#     role: ""
#     comment: ""

date: {{ .Date }}
draft: true
---
