---
# untuk title harus bahasa indonesia
title: "Contoh Markdown"
slug: Contoh Markdown
description: "File Markdown contoh yang mendemonstrasikan seluruh tipe input variables_config yang tersedia."
outputs: ["JSON"]

use_ai: true
ai_output: auto

# ini tidak perlu dipakai
# ai_model: "gpt-4o"
# ai_temperature: 0.7

variables_config:

  # 1. Tipe NUMBER (Angka untuk jumlah output)
  JUMLAH:
    type: "number"
    label: "Number of Prompts"
    default: 5

  # 2. Tipe TEXT (Teks singkat untuk judul/fokus utama)
  FOKUS_UTAMA:
    type: "text"
    label: "Main Focus or Concept"
    placeholder: "e.g., Cyberpunk battle scene"
    multiple: false

  # 3. Tipe TEXTAREA (Teks panjang untuk ide dasar musik)
  DESKRIPSIKAN:
    type: "textarea"
    label: "Music Idea / Description"
    placeholder: "Describe your simple music idea here, e.g., Lo-fi beats for studying in a rainy Tokyo apartment..."
    rows: 5
    use_db: "music_genre"
    multiple: true

  # 4. Tipe SELECT (Dropdown pilihan genre/kategori utama)
  GENRE_UTAMA:
    type: "select"
    label: "Preferred Genre (Multi-select)"
    use_db: "music_genre"
    multiple: true
    options: 
      - AAAA
      - BBBB
      - CCCC

  # 5. Tipe DATALIST (Input dengan saran/autocomplete gaya atau mood)
  MOOD_REFERENSI:
    type: "datalist"
    label: "Mood"
    placeholder: "Type or select mood style..."
    use_db: "music_mood"
    multiple: false

# penulisan database bisa seperti ini
choice_databases:
  # penulisan harus diawali prefix sesuai jenisnya, ini hanya contoh
  music_genre:
    title: Genre Musik
    description: Pilih satu atau beberapa genre
    items:
      - Lo-fi
      - { value: Synthwave, group: Elektronik }
      - { value: House, group: Elektronik, description: 120-130 BPM }
  music_mood:
    - Santai
    - Energik    
---
<!-- khusus prompt harus bahasa inggris -->
You are an expert Suno AI instrumental music prompt generator.

Generate exactly [JUMLAH] unique instrumental music style prompts based on:

Main Focus: [FOKUS_UTAMA]
Music Concept: [DESKRIPSIKAN]
Preferred Genres: [GENRE_UTAMA]
Target Mood Reference: [MOOD_REFERENSI]

The user only provides a simple music idea.
Automatically determine the most suitable genre, subgenre, mood, tempo, BPM, instruments, rhythm, texture, atmosphere, and arrangement.

RULES:

1. Instrumental only. NO vocals, singing, spoken words, or lyrics.
2. Use the user's idea as the main musical concept.
3. Develop each variation into a complete and coherent musical direction.
4. Automatically choose suitable genre, mood, BPM, instruments, rhythm, texture, and arrangement.
5. Each variation must be meaningfully different, not just minor word changes.
6. Keep every variation relevant to the original idea.
7. Use concise descriptive tags suitable for Suno.
8. Do not mention specific artists.
9. Do not include explanations or commentary.
10. Output MUST be valid JSON.
11. Output ONLY a JSON array of strings.

OUTPUT FORMAT:

[
  "[Instrumental] [Genre] [Mood] [BPM] [Instruments] [Atmosphere] [Arrangement]",
  "[Instrumental] [Genre] [Mood] [BPM] [Instruments] [Atmosphere] [Arrangement]"
]