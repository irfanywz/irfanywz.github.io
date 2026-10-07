---
title: "Arabic Nasheed + Sholawat"
slug: nasyid-arab-dengan-gumaman-dan-sholawat
description: "Generator prompt musik nasyid Arab sinematik yang memadukan gumaman vokal dengan sholawat secara sesekali."
outputs: ["JSON"]

use_ai: true
ai_output: auto

variables_config:

  JUMLAH:
    type: "number"
    label: "Jumlah Prompt"
    default: 5

  DOMINASI_VOKAL:
    type: "select"
    label: "Dominasi Vokal"
    default: "Seimbang"
    multiple: false
    options:
      - "Dominan Gumaman"
      - "Seimbang"
      - "Dominan Sholawat"
      
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
**Vocal Type:** [JENIS_VOKAL]
**Vocal Dominance:** [DOMINASI_VOKAL]

Create cinematic Arabic nasheed music that blends instrumental music, wordless humming, and Islamic sholawat vocals.

Use a [JENIS_VOKAL] lead vocalist and follow the selected **Vocal Dominance** strictly.

- **Dominant Humming:** humming and wordless vocalizing are the main vocal element, while sholawat appears occasionally as short emotional highlights.
- **Balanced:** alternate naturally between humming and sholawat, giving both elements clear space without either dominating the entire song.
- **Dominant Sholawat:** sholawat is the main vocal element, while humming and wordless vocalizing are used as supporting textures between sholawat passages.

Do not overcrowd the song with continuous vocals. Leave enough space for instrumental sections and transitions so the humming and sholawat remain clearly separated and musically effective.

Use suitable Arabic instruments, soft choral backing, melismatic vocalizing, atmospheric reverb, and a cinematic arrangement. Automatically determine the most suitable mood, tempo, instrumentation, vocal character, atmosphere, and arrangement.

The **Lyrics** should reflect the selected vocal dominance. Combine wordless humming with short sholawat passages and use appropriate song sections such as [Intro], [Verse], [Chorus], [Bridge], and [Outro].

Output ONLY a valid JSON array.

[
  {
    "Style": "...",
    "Lyrics": "[Intro]\n...\n\n[Verse]\n...\n\n[Chorus]\n...\n\n[Bridge]\n...\n\n[Outro]\n..."
  }
]