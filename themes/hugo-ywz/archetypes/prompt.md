{{- $title := .File.ContentBaseName | replaceRE `^\d+\s*-\s*` "" | replaceRE `[-_]+` " " | title -}}
---
title: "{{ $title }}"
slug: "{{ $title | urlize }}"
description: ""
outputs: ["JSON"]   # pengaturan Hugo, jangan diubah
variables_config:
  TOPIK:
    type: "text"          # text | textarea | select | datalist | number
    label: "Topik Utama"
    placeholder: ""
    default: ""
  # CATATAN:
  #   type: "textarea"
  #   label: "Catatan"
  #   rows: 4
  # GAYA:
  #   type: "datalist"    # select = pilih saja, datalist = pilih atau ketik
  #   label: "Gaya"
  #   options: ["Formal", "Santai"]
  # JUMLAH:
  #   type: "number"
  #   label: "Jumlah"
  #   default: 5
  # (select/datalist/textarea juga bisa: multiple: true, use_db: "nama_database")
# --- opsional (diteruskan apa adanya ke JSON, lihat layouts/prompt/single.index.json) ---
# image: ""
# image_prompt: ""
# desc_prompt: ""
# default_input: ""
# has_database: false
# database: ""
draft: true
---

Tulis prompt di sini. Pakai [TOPIK] untuk memasukkan nilai variabel (nama persis seperti di variables_config).
