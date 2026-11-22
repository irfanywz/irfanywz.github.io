{{- $title := .File.ContentBaseName | replaceRE `^\d+\s*-\s*` "" | replaceRE `[-_]+` " " | title -}}
---
# ===== PRODUK GRATIS =====
title: "{{ $title }}"
slug: "{{ $title | urlize }}"
description: ""
shop_type: "produk"
category: ""
available: true

# free: true -> harga tampil "Gratis", badge Gratis muncul;
# price / display_price / variants diabaikan.
free: true

# File lokal: taruh di static/downloads/ lalu tulis "/downloads/nama-file.zip"
download_url: ""
download_label: "Download"
# landing_url: ""
# guide_url: ""
# guide_label: ""
# support_info: ""

# image: ""
# gallery: []
# demo_video_id: ""

benefits:
  - icon: "icon-[ri--gift-line]"
    text: "Gratis Selamanya"

date: {{ .Date }}
draft: true
---
