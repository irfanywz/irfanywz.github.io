---
title: "Prompt Musik"
description: "Kumpulan Prompt untuk kebutuhan AI"
outputs: ["HTML", "JSON"]

resources:
  - title: "Suno AI"
    description: "Tempat Generate Musik"
    url: "https://suno.com/create"
    icon: "icon-[ri--code-box-line]"
    color: "blue"

choice_databases:

  # ============================================================
  # DATABASE LIRIK / VOCAL
  # Digunakan untuk prompt yang menghasilkan lagu dengan vokal.
  # ============================================================

  # --- LIRIK: Genre ---
  lyric_genre:
    title: "Genre Musik — Lirik"
    description: "Genre utama untuk lagu dengan vokal"
    items:
      - Pop
      - Rock
      - Indie
      - Folk
      - Alternative
      - Hip-Hop
      - Rap
      - R&B
      - Soul
      - Funk
      - Jazz
      - Blues
      - Country
      - Reggae
      - Ska
      - Punk
      - Metal
      - Gospel
      - Classical
      - Orchestral
      - Lo-fi
      - Ambient
      - Experimental

      - { value: "EDM", group: "Elektronik" }
      - { value: "House", group: "Elektronik", description: "Groove-driven electronic dance music" }
      - { value: "Deep House", group: "Elektronik" }
      - { value: "Tech House", group: "Elektronik" }
      - { value: "Progressive House", group: "Elektronik" }
      - { value: "Techno", group: "Elektronik" }
      - { value: "Trance", group: "Elektronik" }
      - { value: "Drum & Bass", group: "Elektronik" }
      - { value: "Dubstep", group: "Elektronik" }
      - { value: "Future Bass", group: "Elektronik" }
      - { value: "Synthwave", group: "Elektronik" }
      - { value: "Vaporwave", group: "Elektronik" }
      - { value: "Chillwave", group: "Elektronik" }

      - { value: "Dangdut", group: "Indonesia" }
      - { value: "Dangdut Koplo", group: "Indonesia" }
      - { value: "Campursari", group: "Indonesia" }
      - { value: "Keroncong", group: "Indonesia" }
      - { value: "Pop Jawa", group: "Indonesia" }
      - { value: "Indonesian Folk", group: "Indonesia" }

      - { value: "K-Pop", group: "Regional" }
      - { value: "J-Pop", group: "Regional" }
      - { value: "C-Pop", group: "Regional" }
      - { value: "Latin Pop", group: "Regional" }

      - { value: "Reggaeton", group: "Latin" }
      - { value: "Salsa", group: "Latin" }
      - { value: "Bossa Nova", group: "Latin" }
      - { value: "Flamenco", group: "Latin" }


  # --- LIRIK: Mood ---
  lyric_mood:
    title: "Mood — Lirik"
    description: "Suasana atau emosi lagu"
    items:
      - Santai
      - Bahagia
      - Ceria
      - Energik
      - Romantis
      - Sedih
      - Melankolis
      - Nostalgia
      - Damai
      - Hangat
      - Intim
      - Dreamy
      - Mellow
      - Hopeful
      - Inspirational
      - Emotional
      - Dramatic
      - Epic
      - Dark
      - Mysterious
      - Tense
      - Aggressive
      - Playful
      - Funny
      - Groovy
      - Sexy
      - Spiritual
      - Meditative
      - Uplifting


  # --- LIRIK: Bahasa ---
  lyric_language:
    title: "Bahasa Lirik"
    description: "Bahasa utama lirik"
    items:
      - Indonesia
      - English
      - Japanese
      - Korean
      - Spanish
      - Portuguese
      - French
      - Italian
      - German
      - Arabic
      - Hindi
      - Mandarin
      - Thai
      - Vietnamese
      - Malay


  # --- LIRIK: Tipe Vocal ---
  lyric_vocal:
    title: "Tipe Vocal"
    description: "Karakter atau konfigurasi vocal"
    items:
      - Male Vocal
      - Female Vocal
      - Male & Female Duet
      - Duet
      - Group Vocal
      - Choir
      - Child Vocal
      - Whisper Vocal
      - Spoken Vocal
      - Rap Vocal
      - Mixed Vocal


  # --- LIRIK: Gaya Vocal ---
  lyric_vocal_style:
    title: "Gaya Vocal"
    description: "Karakter suara vocal"
    items:
      - Soft
      - Breathless
      - Breathy
      - Warm
      - Deep
      - Raspy
      - Husky
      - Powerful
      - Emotional
      - Soulful
      - Intimate
      - Smooth
      - Airy
      - Bright
      - Melodic
      - Aggressive
      - Energetic
      - Playful
      - Dreamy
      - Dramatic
      - Raw
      - Gritty
      - Gentle
      - Expressive


  # --- LIRIK: Energy ---
  lyric_energy:
    title: "Energy — Lirik"
    description: "Tingkat energi musik"
    items:
      - Very Low
      - Low
      - Low-Medium
      - Medium
      - Medium-High
      - High
      - Very High


  # --- LIRIK: Tempo ---
  lyric_tempo:
    title: "Tempo — Lirik"
    description: "Kecepatan lagu"
    items:
      - { value: "Very Slow", description: "40-60 BPM" }
      - { value: "Slow", description: "60-80 BPM" }
      - { value: "Mid Tempo", description: "80-110 BPM" }
      - { value: "Upbeat", description: "110-130 BPM" }
      - { value: "Fast", description: "130-160 BPM" }
      - { value: "Very Fast", description: "160+ BPM" }


  # --- LIRIK: Gaya Penulisan ---
  lyric_style:
    title: "Gaya Lirik"
    description: "Gaya penulisan lirik"
    items:
      - Natural & Emotional
      - Simple & Catchy
      - Poetic
      - Storytelling
      - Conversational
      - Romantic
      - Nostalgic
      - Dark
      - Humorous
      - Satirical
      - Philosophical
      - Inspirational
      - Street
      - Raw
      - Dramatic
      - Cinematic
      - Abstract
      - Minimalist


  # --- LIRIK: Perspektif ---
  lyric_perspective:
    title: "Sudut Pandang"
    description: "Sudut pandang cerita dalam lirik"
    items:
      - First Person
      - Second Person
      - Third Person
      - Multiple Characters
      - Narrative
      - Observational


  # --- LIRIK: Panjang Lagu ---
  lyric_song_length:
    title: "Panjang Lagu"
    description: "Perkiraan panjang lagu"
    items:
      - Short
      - Standard
      - Long


  # --- LIRIK: Struktur Lagu ---
  lyric_structure:
    title: "Struktur Lagu"
    description: "Struktur lagu dengan vokal"
    items:
      - Standard Pop
      - Verse-Chorus
      - Verse-Pre-Chorus-Chorus
      - AABA
      - Storytelling
      - Progressive
      - Loop-Based
      - Cinematic
      - Experimental


  # --- LIRIK: Instrumen ---
  lyric_instrumentation:
    title: "Instrumen — Lirik"
    description: "Instrumen yang mendukung lagu dengan vokal"
    items:
      - Acoustic Guitar
      - Electric Guitar
      - Piano
      - Electric Piano
      - Synth
      - Analog Synth
      - Bass
      - Electric Bass
      - Acoustic Bass
      - Drums
      - Electronic Drums
      - Percussion
      - Strings
      - Violin
      - Cello
      - Brass
      - Trumpet
      - Saxophone
      - Flute
      - Organ
      - Choir
      - Pad
      - Arpeggiator
      - 808 Bass
      - Drum Machine
      - Traditional Indonesian Instruments
      - Traditional Asian Instruments
      - Orchestral Instruments


  # ============================================================
  # DATABASE INSTRUMENTAL
  # Digunakan khusus untuk musik TANPA vokal/lirik.
  # ============================================================

  # --- INSTRUMENTAL: Genre ---
  instrumental_genre:
    title: "Genre Musik — Instrumental"
    description: "Genre utama musik instrumental"
    items:
      - Ambient
      - Cinematic
      - Classical
      - Orchestral
      - Soundtrack
      - Electronic
      - EDM
      - Lo-fi
      - Jazz
      - Blues
      - Funk
      - Soul
      - Rock
      - Indie
      - Folk
      - Country
      - Reggae
      - World
      - New Age
      - Experimental

      - { value: "House", group: "Elektronik" }
      - { value: "Deep House", group: "Elektronik" }
      - { value: "Tech House", group: "Elektronik" }
      - { value: "Progressive House", group: "Elektronik" }
      - { value: "Techno", group: "Elektronik" }
      - { value: "Trance", group: "Elektronik" }
      - { value: "Drum & Bass", group: "Elektronik" }
      - { value: "Dubstep", group: "Elektronik" }
      - { value: "Future Bass", group: "Elektronik" }
      - { value: "Synthwave", group: "Elektronik" }
      - { value: "Vaporwave", group: "Elektronik" }
      - { value: "Chillwave", group: "Elektronik" }

      - { value: "Dangdut", group: "Indonesia" }
      - { value: "Dangdut Koplo", group: "Indonesia" }
      - { value: "Campursari", group: "Indonesia" }
      - { value: "Keroncong", group: "Indonesia" }
      - { value: "Indonesian Folk", group: "Indonesia" }

      - { value: "Latin", group: "Regional" }
      - { value: "Bossa Nova", group: "Latin" }
      - { value: "Salsa", group: "Latin" }
      - { value: "Flamenco", group: "Latin" }


  # --- INSTRUMENTAL: Mood ---
  instrumental_mood:
    title: "Mood — Instrumental"
    description: "Suasana atau emosi musik instrumental"
    items:
      - Relaxing
      - Peaceful
      - Calm
      - Chill
      - Dreamy
      - Romantic
      - Nostalgic
      - Melancholic
      - Sad
      - Warm
      - Hopeful
      - Emotional
      - Happy
      - Playful
      - Funny
      - Groovy
      - Energetic
      - Uplifting
      - Dark
      - Mysterious
      - Eerie
      - Tense
      - Dramatic
      - Epic
      - Aggressive
      - Meditative
      - Spiritual
      - Cinematic


  # --- INSTRUMENTAL: Energy ---
  instrumental_energy:
    title: "Energy — Instrumental"
    description: "Tingkat energi musik instrumental"
    items:
      - Very Low
      - Low
      - Low-Medium
      - Medium
      - Medium-High
      - High
      - Very High


  # --- INSTRUMENTAL: Tempo ---
  instrumental_tempo:
    title: "Tempo — Instrumental"
    description: "Kecepatan musik instrumental"
    items:
      - { value: "Very Slow", description: "40-60 BPM" }
      - { value: "Slow", description: "60-80 BPM" }
      - { value: "Mid Tempo", description: "80-110 BPM" }
      - { value: "Upbeat", description: "110-130 BPM" }
      - { value: "Fast", description: "130-160 BPM" }
      - { value: "Very Fast", description: "160+ BPM" }


  # --- INSTRUMENTAL: Instrumen ---
  instrumental_instrumentation:
    title: "Instrumen — Instrumental"
    description: "Instrumen utama musik instrumental"
    items:
      - Piano
      - Acoustic Guitar
      - Electric Guitar
      - Bass
      - Electric Bass
      - Acoustic Bass
      - Drums
      - Electronic Drums
      - Percussion
      - Violin
      - Viola
      - Cello
      - Strings
      - String Ensemble
      - Trumpet
      - Trombone
      - French Horn
      - Brass
      - Saxophone
      - Flute
      - Clarinet
      - Oboe
      - Organ
      - Electric Piano
      - Synth
      - Analog Synth
      - Synth Bass
      - Pad
      - Arpeggiator
      - Bells
      - Mallets
      - Harp
      - Drum Machine
      - 808 Bass
      - Traditional Indonesian Instruments
      - Traditional Asian Instruments
      - Orchestral Instruments


  # --- INSTRUMENTAL: Atmosphere ---
  instrumental_atmosphere:
    title: "Atmosphere — Instrumental"
    description: "Karakter atmosfer dan ruang suara"
    items:
      - Warm
      - Soft
      - Bright
      - Dark
      - Airy
      - Spacious
      - Intimate
      - Organic
      - Atmospheric
      - Ethereal
      - Dreamlike
      - Mystical
      - Cinematic
      - Minimal
      - Dense
      - Raw
      - Gritty
      - Vintage
      - Retro
      - Modern
      - Futuristic
      - Nature
      - Underwater
      - Space
      - Other


  # --- INSTRUMENTAL: Rhythm ---
  instrumental_rhythm:
    title: "Rhythm — Instrumental"
    description: "Karakter ritme musik instrumental"
    items:
      - Minimal
      - Steady
      - Smooth
      - Groovy
      - Swing
      - Syncopated
      - Driving
      - Bouncy
      - Rolling
      - Rhythmic
      - Percussive
      - Tribal
      - Complex
      - Free
      - Loop-Based
      - Other


  # --- INSTRUMENTAL: Texture ---
  instrumental_texture:
    title: "Texture — Instrumental"
    description: "Kepadatan dan karakter lapisan suara"
    items:
      - Minimal
      - Sparse
      - Clean
      - Soft
      - Warm
      - Layered
      - Rich
      - Dense
      - Lush
      - Atmospheric
      - Organic
      - Synthetic
      - Gritty
      - Distorted
      - Experimental
      - Other


  # --- INSTRUMENTAL: Era / Karakter Zaman ---
  instrumental_era:
    title: "Era / Style — Instrumental"
    description: "Karakter musik berdasarkan era atau gaya zaman"
    items:
      - Classical
      - Vintage
      - 1950s
      - 1960s
      - 1970s
      - 1980s
      - 1990s
      - 2000s
      - Modern
      - Contemporary
      - Futuristic
      - Timeless
      - Other
---