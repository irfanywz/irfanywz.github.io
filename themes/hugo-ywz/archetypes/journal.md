{{- $title := .File.ContentBaseName | replaceRE `^\d+\s*-\s*` "" | replaceRE `[-_]+` " " | title -}}
---
title: "{{ $title }}"
slug: "{{ $title | urlize }}"
date: {{ .Date }}
weather: ""
location: ""
journal_category: []
draft: true

# --- opsional ---
# tags: []
---
