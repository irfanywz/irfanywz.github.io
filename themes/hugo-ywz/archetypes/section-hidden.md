{{- $title := .File.ContentBaseName | replaceRE `^\d+\s*-\s*` "" | replaceRE `[-_]+` " " | title -}}
---
# Sub-folder pengelompok: tampil di daftar tapi tidak punya halaman sendiri.
# Pakai: hugo new -k section-hidden content/<section>/<folder>/_index.md
title: "{{ $title }}"
slug: "{{ $title | urlize }}"
build:
  render: never
  list: always
---
