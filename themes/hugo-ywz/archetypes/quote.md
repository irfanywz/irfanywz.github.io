{{- $title := .File.ContentBaseName | replaceRE `^\d+\s*-\s*` "" | replaceRE `[-_]+` " " | title -}}
---
# Satu file = satu kategori kutipan. Data-only: tidak punya halaman HTML.
title: "{{ $title }}"
slug: "{{ $title | urlize }}"
description: ""
build:
  render: never
  list: always
quotes:
  - text: ""
    author: ""
    date: {{ now.Format "2006-01-02" }}
draft: true
---
