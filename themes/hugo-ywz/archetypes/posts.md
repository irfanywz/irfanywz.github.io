{{- $title := .File.ContentBaseName | replaceRE `^\d+\s*-\s*` "" | replaceRE `[-_]+` " " | title -}}
---
title: "{{ $title }}"
slug: "{{ $title | urlize }}"
description: ""
date: {{ .Date }}
topics: []
keywords: []
series: ""
showAds: false
adPositions: []
draft: true

# --- opsional: hapus tanda # untuk memakai ---
# image: cover.avif
# layout: withsidebar   # withsidebar (default) | nosidebar | naskah | affiliate | landing
# premium: true         # konten member (Subscribe with Google)
# noindex: true
# categories: []        # dipakai layout naskah
# series_name: ""       # seri manual (dipakai bersama series_links)
# series_links: []
---
