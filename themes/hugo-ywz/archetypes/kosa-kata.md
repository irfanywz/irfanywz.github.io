{{- $title := .File.ContentBaseName | replaceRE `^\d+\s*-\s*` "" | replaceRE `[-_]+` " " | title -}}
---
# Satu file = satu kategori kosakata. Data-only: tidak punya halaman HTML.
title: "{{ $title }}"
slug: "{{ $title | urlize }}"
description: ""
build:
  render: never
  list: always
vocabularies:
  - term: ""
    definition: ""
    # example: ""
draft: true
---
