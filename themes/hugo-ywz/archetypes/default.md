{{- $title := .File.ContentBaseName | replaceRE `^\d+\s*-\s*` "" | replaceRE `[-_]+` " " | title -}}
---
title: "{{ $title }}"
description: ""
date: {{ .Date }}
draft: true
---
