---
title: "Instrumental Humming"
slug: instrumental-humming
description: "Generator prompt musik instrumental dengan vocal humming atau atmospheric vocals tanpa lirik."
outputs: ["JSON"]

use_ai: true
ai_output: auto

variables_config:

  JUMLAH:
    type: "number"
    label: "Jumlah"
    default: 5

  DESKRIPSIKAN:
    type: "textarea"
    label: "Masukan Ide"
    placeholder: "Describe your music idea, e.g., rain at night by a quiet lake..."
    rows: 5
    multiple: false

---

Create exactly [JUMLAH] ready-to-use music prompts for an AI music generator based on:

**Music Idea:** [DESKRIPSIKAN]

Make sure each prompt combines instrumental music elements with wordless humming/vocalizing that naturally fits the characteristics of its genre.

Each result must include both a **Style** and **Lyrics** section. The Lyrics section should contain only wordless vocal sounds such as humming, vocalizing, "mmm", "ah", "ooh", etc., arranged into suitable song sections such as [Intro], [Verse], [Chorus], [Bridge], and [Outro]. Do not use meaningful words or conventional lyrics.

**Output format:**

[
{
"Style": "...",
"Lyrics": "[Intro]\n...\n\n[Verse]\n...\n\n[Chorus]\n...\n\n[Outro]\n..."
}
]
