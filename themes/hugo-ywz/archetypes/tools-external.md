{{- $title := .File.ContentBaseName | replaceRE `^\d+\s*-\s*` "" | replaceRE `[-_]+` " " | title -}}
---
# Tool di situs lain: hanya tampil di daftar, tidak punya halaman sendiri.
title: "{{ $title }}"
description: ""
date: {{ .Date }}
icon: "icon-[ri--external-link-line]"
link: ""
categories: []
build:
  render: never
  list: always
---
