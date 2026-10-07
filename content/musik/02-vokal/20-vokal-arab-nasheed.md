---
title: "Arabic Nasheed"
slug: nasyid-arab-dengan-vokal-tanpa-lirik
description: "Generator prompt musik nasyid Arab sinematik dengan gumaman, lantunan vokal, dan vokal melismatik tanpa lirik bermakna."
outputs: ["JSON"]

use_ai: true
ai_output: auto

variables_config:

  JUMLAH:
    type: "number"
    label: "Jumlah Prompt"
    default: 5

  JENIS_VOKAL:
    type: "select"
    label: "Jenis Vokal"
    default: "Pria"
    multiple: false
    options:
      - "Pria"
      - "Wanita"
      
  DESKRIPSIKAN:
    type: "textarea"
    label: "Ide / Deskripsi Musik"
    placeholder: "Masukkan ide atau deskripsi musik..."
    rows: 5
    multiple: false

---

Create exactly [JUMLAH] ready-to-use music prompts for an AI music generator based on:

**Music Idea:** [DESKRIPSIKAN]

Create cinematic Arabic nasheed music with [JENIS_VOKAL] lead vocals, wordless humming, vocal chants, melismatic vocalizing, and soft choral backing. Automatically determine the most suitable mood, tempo, Arabic instrumentation, vocal character, atmosphere, and arrangement for each variation.

Each result must include **Style** and **Lyrics**. Lyrics must contain only wordless vocal sounds and vocalizing such as "mmm", "ah", "ooh", "hmm", and extended melismatic syllables. Do not use meaningful lyrics, sentences, or understandable words.

Use suitable sections such as [Intro], [Verse], [Chorus], [Bridge], and [Outro].

Output ONLY a valid JSON array.

[
  {
    "Style": "...",
    "Lyrics": "[Intro]\n...\n\n[Verse]\n...\n\n[Chorus]\n...\n\n[Outro]\n..."
  }
]