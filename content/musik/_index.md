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

  # ==========================================
  # GENRE MUSIK
  # ==========================================

  music_genre:
    - { value: "Pop", group: "Pop & Mainstream" }
    - { value: "Indie", group: "Pop & Mainstream" }
    - { value: "Indie Pop", group: "Pop & Mainstream" }
    - { value: "Rock", group: "Rock" }
    - { value: "Alternative Rock", group: "Rock" }
    - { value: "Indie Rock", group: "Rock" }
    - { value: "Folk", group: "Folk & Acoustic" }
    - { value: "Folk Pop", group: "Folk & Acoustic" }
    - { value: "Acoustic", group: "Folk & Acoustic" }
    - { value: "Country", group: "Country" }
    - { value: "Blues", group: "Blues & Jazz" }
    - { value: "Jazz", group: "Blues & Jazz" }
    - { value: "R&B", group: "R&B & Soul" }
    - { value: "Soul", group: "R&B & Soul" }
    - { value: "Funk", group: "R&B & Soul" }
    - { value: "Disco", group: "R&B & Soul" }
    - { value: "Reggae", group: "Reggae & Ska" }
    - { value: "Ska", group: "Reggae & Ska" }
    - { value: "Hip Hop", group: "Hip Hop & Rap" }
    - { value: "Rap", group: "Hip Hop & Rap" }
    - { value: "Trap", group: "Hip Hop & Rap" }
    - { value: "EDM", group: "Electronic" }
    - { value: "House", group: "Electronic" }
    - { value: "Techno", group: "Electronic" }
    - { value: "Lo-fi", group: "Electronic" }
    - { value: "Metal", group: "Metal" }
    - { value: "Punk", group: "Punk" }
    - { value: "Gospel", group: "Gospel & Spiritual" }
    - { value: "Latin", group: "Latin" }
    - { value: "Reggaeton", group: "Latin" }
    - { value: "Dangdut", group: "Indonesia & Nusantara" }
    - { value: "Keroncong", group: "Indonesia & Nusantara" }
    - { value: "Indonesian Pop", group: "Indonesia & Nusantara" }
    - { value: "Ballad", group: "Other" }
    - { value: "Other", group: "Other" }


  # ==========================================
  # SUBGENRE
  # ==========================================

  music_subgenre:
    - { value: "Dream Pop", group: "Pop" }
    - { value: "Synth Pop", group: "Pop" }
    - { value: "Bedroom Pop", group: "Pop" }
    - { value: "Electropop", group: "Pop" }
    - { value: "Pop Rock", group: "Rock" }
    - { value: "Soft Rock", group: "Rock" }
    - { value: "Hard Rock", group: "Rock" }
    - { value: "Alternative Rock", group: "Rock" }
    - { value: "Post Rock", group: "Rock" }
    - { value: "Acoustic Folk", group: "Folk" }
    - { value: "Indie Folk", group: "Folk" }
    - { value: "Folk Rock", group: "Folk" }
    - { value: "Contemporary R&B", group: "R&B & Soul" }
    - { value: "Neo Soul", group: "R&B & Soul" }
    - { value: "Funk Soul", group: "R&B & Soul" }
    - { value: "Jazz Fusion", group: "Jazz & Blues" }
    - { value: "Smooth Jazz", group: "Jazz & Blues" }
    - { value: "Blues Rock", group: "Jazz & Blues" }
    - { value: "Country Pop", group: "Country" }
    - { value: "Country Rock", group: "Country" }
    - { value: "Melodic Rap", group: "Hip Hop & Rap" }
    - { value: "Trap Soul", group: "Hip Hop & Rap" }
    - { value: "Pop Rap", group: "Hip Hop & Rap" }
    - { value: "Deep House", group: "Electronic" }
    - { value: "Tropical House", group: "Electronic" }
    - { value: "Progressive House", group: "Electronic" }
    - { value: "Ambient", group: "Electronic" }
    - { value: "Chillout", group: "Electronic" }
    - { value: "Other", group: "Other" }


  # ==========================================
  # MOOD MUSIK
  # ==========================================

  music_mood:
    - { value: "Happy", group: "Positive & Upbeat" }
    - { value: "Joyful", group: "Positive & Upbeat" }
    - { value: "Energetic", group: "Positive & Upbeat" }
    - { value: "Upbeat", group: "Positive & Upbeat" }
    - { value: "Playful", group: "Positive & Upbeat" }
    - { value: "Funny", group: "Positive & Upbeat" }

    - { value: "Romantic", group: "Warm & Emotional" }
    - { value: "Dreamy", group: "Warm & Emotional" }
    - { value: "Peaceful", group: "Warm & Emotional" }
    - { value: "Relaxing", group: "Warm & Emotional" }
    - { value: "Chill", group: "Warm & Emotional" }
    - { value: "Warm", group: "Warm & Emotional" }
    - { value: "Hopeful", group: "Warm & Emotional" }
    - { value: "Nostalgic", group: "Warm & Emotional" }

    - { value: "Melancholic", group: "Sad & Lonely" }
    - { value: "Sad", group: "Sad & Lonely" }
    - { value: "Emotional", group: "Sad & Lonely" }
    - { value: "Lonely", group: "Sad & Lonely" }

    - { value: "Dark", group: "Dark & Tense" }
    - { value: "Mysterious", group: "Dark & Tense" }
    - { value: "Eerie", group: "Dark & Tense" }
    - { value: "Tense", group: "Dark & Tense" }
    - { value: "Dramatic", group: "Dark & Tense" }
    - { value: "Aggressive", group: "Dark & Tense" }
    - { value: "Rebellious", group: "Dark & Tense" }

    - { value: "Epic", group: "Epic & Cinematic" }
    - { value: "Other", group: "Other" }


  # ==========================================
  # KARAKTER VOKAL
  # ==========================================

  music_vocal:
    - { value: "Male vocal", group: "Male" }
    - { value: "Young male vocal", group: "Male" }
    - { value: "Deep male vocal", group: "Male" }
    - { value: "Soft male vocal", group: "Male" }
    - { value: "Warm male vocal", group: "Male" }
    - { value: "Raspy male vocal", group: "Male" }
    - { value: "Powerful male vocal", group: "Male" }

    - { value: "Female vocal", group: "Female" }
    - { value: "Young female vocal", group: "Female" }
    - { value: "Soft female vocal", group: "Female" }
    - { value: "Warm female vocal", group: "Female" }
    - { value: "Breathy female vocal", group: "Female" }
    - { value: "Powerful female vocal", group: "Female" }
    - { value: "Raspy female vocal", group: "Female" }

    - { value: "Duet", group: "Duet & Group" }
    - { value: "Male and female duet", group: "Duet & Group" }
    - { value: "Group vocals", group: "Duet & Group" }
    - { value: "Choir", group: "Duet & Group" }

    - { value: "Androgynous vocal", group: "Other" }
    - { value: "Other", group: "Other" }


  # ==========================================
  # GAYA VOKAL
  # ==========================================

  music_vocal_style:
    - { value: "Intimate singing", group: "Soft & Intimate" }
    - { value: "Soft singing", group: "Soft & Intimate" }
    - { value: "Breathy singing", group: "Soft & Intimate" }
    - { value: "Whispered vocals", group: "Soft & Intimate" }
    - { value: "Laid-back singing", group: "Soft & Intimate" }

    - { value: "Emotional singing", group: "Emotional & Expressive" }
    - { value: "Soulful singing", group: "Emotional & Expressive" }
    - { value: "Dramatic singing", group: "Emotional & Expressive" }
    - { value: "Raw singing", group: "Emotional & Expressive" }
    - { value: "Slow expressive delivery", group: "Emotional & Expressive" }

    - { value: "Powerful singing", group: "Powerful" }
    - { value: "Energetic singing", group: "Powerful" }
    - { value: "Belting", group: "Powerful" }

    - { value: "Smooth singing", group: "Melodic" }
    - { value: "Melodic singing", group: "Melodic" }
    - { value: "Falsetto", group: "Melodic" }

    - { value: "Rhythmic singing", group: "Rhythmic & Rap" }
    - { value: "Spoken-singing", group: "Rhythmic & Rap" }
    - { value: "Rap delivery", group: "Rhythmic & Rap" }
    - { value: "Fast rap delivery", group: "Rhythmic & Rap" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # TEMPO
  # ==========================================

  music_tempo:
    - { value: "Very slow", group: "Slow" }
    - { value: "Slow", group: "Slow" }
    - { value: "Slow-mid tempo", group: "Slow" }

    - { value: "Mid tempo", group: "Mid" }
    - { value: "Laid-back groove", group: "Mid" }

    - { value: "Upbeat", group: "Fast" }
    - { value: "Fast", group: "Fast" }
    - { value: "Very fast", group: "Fast" }

    - { value: "Driving rhythm", group: "Rhythmic" }
    - { value: "Danceable tempo", group: "Rhythmic" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # INSTRUMEN
  # ==========================================

  music_instrument:
    - { value: "Acoustic guitar", group: "Guitar & Bass" }
    - { value: "Electric guitar", group: "Guitar & Bass" }
    - { value: "Bass guitar", group: "Guitar & Bass" }
    - { value: "808 bass", group: "Guitar & Bass" }

    - { value: "Piano", group: "Keyboard" }
    - { value: "Electric piano", group: "Keyboard" }
    - { value: "Organ", group: "Keyboard" }

    - { value: "Synthesizer", group: "Synth & Electronic" }
    - { value: "Analog synth", group: "Synth & Electronic" }
    - { value: "Electronic drums", group: "Synth & Electronic" }
    - { value: "Ambient pads", group: "Synth & Electronic" }

    - { value: "Drums", group: "Drums & Percussion" }
    - { value: "Percussion", group: "Drums & Percussion" }

    - { value: "Strings", group: "Strings" }
    - { value: "Violin", group: "Strings" }
    - { value: "Cello", group: "Strings" }

    - { value: "Brass", group: "Brass & Wind" }
    - { value: "Saxophone", group: "Brass & Wind" }
    - { value: "Trumpet", group: "Brass & Wind" }
    - { value: "Flute", group: "Brass & Wind" }
    - { value: "Harmonica", group: "Brass & Wind" }

    - { value: "Orchestral instruments", group: "Orchestral" }
    - { value: "Mixed instrumentation", group: "Other" }
    - { value: "Other", group: "Other" }


  # ==========================================
  # PRODUKSI / SOUND
  # ==========================================

  music_production:
    - { value: "Clean studio production", group: "Studio & Modern" }
    - { value: "Modern polished production", group: "Studio & Modern" }
    - { value: "Wide stereo production", group: "Studio & Modern" }
    - { value: "Punchy production", group: "Studio & Modern" }
    - { value: "Bass-heavy production", group: "Studio & Modern" }

    - { value: "Warm analog production", group: "Analog & Vintage" }
    - { value: "Vintage production", group: "Analog & Vintage" }
    - { value: "Raw live recording feel", group: "Analog & Vintage" }
    - { value: "Lo-fi production", group: "Analog & Vintage" }

    - { value: "Intimate close production", group: "Atmospheric & Minimal" }
    - { value: "Atmospheric production", group: "Atmospheric & Minimal" }
    - { value: "Minimal production", group: "Atmospheric & Minimal" }
    - { value: "Organic production", group: "Atmospheric & Minimal" }

    - { value: "Layered production", group: "Cinematic & Layered" }
    - { value: "Cinematic production", group: "Cinematic & Layered" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # GAYA LIRIK
  # ==========================================

  lyric_style:
    - { value: "Simple and catchy", group: "Catchy & Accessible" }
    - { value: "Conversational", group: "Catchy & Accessible" }
    - { value: "Everyday language", group: "Catchy & Accessible" }
    - { value: "Rhythmic and catchy", group: "Catchy & Accessible" }
    - { value: "Minimal and direct", group: "Catchy & Accessible" }

    - { value: "Poetic", group: "Poetic & Metaphorical" }
    - { value: "Metaphorical", group: "Poetic & Metaphorical" }
    - { value: "Cinematic", group: "Poetic & Metaphorical" }

    - { value: "Storytelling", group: "Story & Narrative" }
    - { value: "Nostalgic", group: "Story & Narrative" }

    - { value: "Emotional", group: "Emotional & Romantic" }
    - { value: "Romantic", group: "Emotional & Romantic" }
    - { value: "Raw and honest", group: "Emotional & Romantic" }

    - { value: "Playful", group: "Fun & Humorous" }
    - { value: "Funny", group: "Fun & Humorous" }
    - { value: "Sarcastic", group: "Fun & Humorous" }

    - { value: "Dark", group: "Dark" }
    - { value: "Other", group: "Other" }


  # ==========================================
  # BAHASA LIRIK
  # ==========================================

  lyric_language:

    # Indonesia & Nusantara
    - { value: "Indonesian", group: "Indonesia & Nusantara" }
    - { value: "Javanese", group: "Indonesia & Nusantara" }
    - { value: "Sundanese", group: "Indonesia & Nusantara" }
    - { value: "Malay", group: "Indonesia & Nusantara" }
    - { value: "Minangkabau", group: "Indonesia & Nusantara" }
    - { value: "Banjar", group: "Indonesia & Nusantara" }
    - { value: "Buginese", group: "Indonesia & Nusantara" }
    - { value: "Makassarese", group: "Indonesia & Nusantara" }
    - { value: "Balinese", group: "Indonesia & Nusantara" }
    - { value: "Acehnese", group: "Indonesia & Nusantara" }
    - { value: "Batak Toba", group: "Indonesia & Nusantara" }
    - { value: "Madurese", group: "Indonesia & Nusantara" }
    - { value: "Batak Karo", group: "Indonesia & Nusantara" }
    - { value: "Gorontalo", group: "Indonesia & Nusantara" }
    - { value: "Lampung", group: "Indonesia & Nusantara" }
    - { value: "Tetum", group: "Indonesia & Nusantara" }

    # English
    - { value: "English", group: "English" }
    - { value: "British English", group: "English" }
    - { value: "American English", group: "English" }
    - { value: "Australian English", group: "English" }

    # Spanish
    - { value: "Spanish", group: "Spanish" }
    - { value: "Mexican Spanish", group: "Spanish" }
    - { value: "Argentine Spanish", group: "Spanish" }

    # Portuguese
    - { value: "Portuguese", group: "Portuguese" }
    - { value: "Brazilian Portuguese", group: "Portuguese" }

    # Western Europe
    - { value: "French", group: "Western Europe" }
    - { value: "Canadian French", group: "Western Europe" }
    - { value: "German", group: "Western Europe" }
    - { value: "Italian", group: "Western Europe" }
    - { value: "Dutch", group: "Western Europe" }
    - { value: "Catalan", group: "Western Europe" }
    - { value: "Galician", group: "Western Europe" }
    - { value: "Basque", group: "Western Europe" }
    - { value: "Irish", group: "Western Europe" }
    - { value: "Scottish Gaelic", group: "Western Europe" }
    - { value: "Welsh", group: "Western Europe" }
    - { value: "Breton", group: "Western Europe" }
    - { value: "Luxembourgish", group: "Western Europe" }
    - { value: "Maltese", group: "Western Europe" }
    - { value: "Frisian", group: "Western Europe" }
    - { value: "Occitan", group: "Western Europe" }
    - { value: "Corsican", group: "Western Europe" }
    - { value: "Sardinian", group: "Western Europe" }
    - { value: "Romansh", group: "Western Europe" }
    - { value: "Aragonese", group: "Western Europe" }
    - { value: "Asturian", group: "Western Europe" }

    # Eastern & Northern Europe
    - { value: "Romanian", group: "Eastern & Northern Europe" }
    - { value: "Greek", group: "Eastern & Northern Europe" }
    - { value: "Russian", group: "Eastern & Northern Europe" }
    - { value: "Ukrainian", group: "Eastern & Northern Europe" }
    - { value: "Belarusian", group: "Eastern & Northern Europe" }
    - { value: "Polish", group: "Eastern & Northern Europe" }
    - { value: "Czech", group: "Eastern & Northern Europe" }
    - { value: "Slovak", group: "Eastern & Northern Europe" }
    - { value: "Slovenian", group: "Eastern & Northern Europe" }
    - { value: "Croatian", group: "Eastern & Northern Europe" }
    - { value: "Serbian", group: "Eastern & Northern Europe" }
    - { value: "Bosnian", group: "Eastern & Northern Europe" }
    - { value: "Macedonian", group: "Eastern & Northern Europe" }
    - { value: "Bulgarian", group: "Eastern & Northern Europe" }
    - { value: "Albanian", group: "Eastern & Northern Europe" }
    - { value: "Hungarian", group: "Eastern & Northern Europe" }
    - { value: "Estonian", group: "Eastern & Northern Europe" }
    - { value: "Latvian", group: "Eastern & Northern Europe" }
    - { value: "Lithuanian", group: "Eastern & Northern Europe" }
    - { value: "Finnish", group: "Eastern & Northern Europe" }
    - { value: "Swedish", group: "Eastern & Northern Europe" }
    - { value: "Norwegian", group: "Eastern & Northern Europe" }
    - { value: "Danish", group: "Eastern & Northern Europe" }
    - { value: "Icelandic", group: "Eastern & Northern Europe" }
    - { value: "Faroese", group: "Eastern & Northern Europe" }

    # Central Asia & Turkic
    - { value: "Turkish", group: "Central Asia & Turkic" }
    - { value: "Azerbaijani", group: "Central Asia & Turkic" }
    - { value: "Kazakh", group: "Central Asia & Turkic" }
    - { value: "Kyrgyz", group: "Central Asia & Turkic" }
    - { value: "Uzbek", group: "Central Asia & Turkic" }
    - { value: "Turkmen", group: "Central Asia & Turkic" }
    - { value: "Tajik", group: "Central Asia & Turkic" }
    - { value: "Mongolian", group: "Central Asia & Turkic" }

    # Caucasus
    - { value: "Georgian", group: "Caucasus" }
    - { value: "Armenian", group: "Caucasus" }

    # Middle East
    - { value: "Persian (Farsi)", group: "Middle East" }
    - { value: "Pashto", group: "Middle East" }
    - { value: "Kurdish", group: "Middle East" }
    - { value: "Arabic", group: "Middle East" }
    - { value: "Egyptian Arabic", group: "Middle East" }
    - { value: "Levantine Arabic", group: "Middle East" }
    - { value: "Hebrew", group: "Middle East" }
    - { value: "Yiddish", group: "Middle East" }

    # South Asia
    - { value: "Urdu", group: "South Asia" }
    - { value: "Hindi", group: "South Asia" }
    - { value: "Bengali", group: "South Asia" }
    - { value: "Punjabi", group: "South Asia" }
    - { value: "Gujarati", group: "South Asia" }
    - { value: "Marathi", group: "South Asia" }
    - { value: "Nepali", group: "South Asia" }
    - { value: "Odia", group: "South Asia" }
    - { value: "Assamese", group: "South Asia" }
    - { value: "Tamil", group: "South Asia" }
    - { value: "Telugu", group: "South Asia" }
    - { value: "Kannada", group: "South Asia" }
    - { value: "Malayalam", group: "South Asia" }
    - { value: "Sinhala", group: "South Asia" }
    - { value: "Dhivehi", group: "South Asia" }
    - { value: "Sanskrit", group: "South Asia" }

    # Southeast Asia
    - { value: "Burmese", group: "Southeast Asia" }
    - { value: "Thai", group: "Southeast Asia" }
    - { value: "Lao", group: "Southeast Asia" }
    - { value: "Khmer", group: "Southeast Asia" }
    - { value: "Vietnamese", group: "Southeast Asia" }
    - { value: "Filipino (Tagalog)", group: "Southeast Asia" }
    - { value: "Cebuano", group: "Southeast Asia" }
    - { value: "Ilocano", group: "Southeast Asia" }
    - { value: "Waray", group: "Southeast Asia" }
    - { value: "Hiligaynon", group: "Southeast Asia" }

    # East Asia
    - { value: "Chinese (Simplified)", group: "East Asia" }
    - { value: "Chinese (Traditional)", group: "East Asia" }
    - { value: "Cantonese", group: "East Asia" }
    - { value: "Shanghainese (Wu)", group: "East Asia" }
    - { value: "Japanese", group: "East Asia" }
    - { value: "Korean", group: "East Asia" }

    # Pacific & Oceania
    - { value: "Hawaiian", group: "Pacific & Oceania" }
    - { value: "Maori", group: "Pacific & Oceania" }
    - { value: "Samoan", group: "Pacific & Oceania" }
    - { value: "Tongan", group: "Pacific & Oceania" }
    - { value: "Fijian", group: "Pacific & Oceania" }
    - { value: "Tahitian", group: "Pacific & Oceania" }

    # Africa
    - { value: "Swahili", group: "Africa" }
    - { value: "Amharic", group: "Africa" }
    - { value: "Tigrinya", group: "Africa" }
    - { value: "Oromo", group: "Africa" }
    - { value: "Somali", group: "Africa" }
    - { value: "Hausa", group: "Africa" }
    - { value: "Igbo", group: "Africa" }
    - { value: "Yoruba", group: "Africa" }
    - { value: "Zulu", group: "Africa" }
    - { value: "Xhosa", group: "Africa" }
    - { value: "Sesotho", group: "Africa" }
    - { value: "Setswana", group: "Africa" }
    - { value: "Chichewa", group: "Africa" }
    - { value: "Kinyarwanda", group: "Africa" }
    - { value: "Luganda", group: "Africa" }
    - { value: "Wolof", group: "Africa" }
    - { value: "Fulani", group: "Africa" }
    - { value: "Lingala", group: "Africa" }
    - { value: "Malagasy", group: "Africa" }
    - { value: "Afrikaans", group: "Africa" }

    # Latin America & Indigenous
    - { value: "Haitian Creole", group: "Latin America & Indigenous" }
    - { value: "Quechua", group: "Latin America & Indigenous" }
    - { value: "Guarani", group: "Latin America & Indigenous" }
    - { value: "Aymara", group: "Latin America & Indigenous" }
    - { value: "Nahuatl", group: "Latin America & Indigenous" }
    - { value: "Yucatec Maya", group: "Latin America & Indigenous" }

    # Classical & Constructed
    - { value: "Latin", group: "Classical & Constructed" }
    - { value: "Esperanto", group: "Classical & Constructed" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # STRUKTUR LAGU
  # ==========================================

  music_structure:
    - { value: "Verse - Chorus - Verse - Chorus - Bridge - Chorus", group: "Standard" }
    - { value: "Verse - Pre-Chorus - Chorus - Verse - Chorus - Bridge - Chorus", group: "Standard" }
    - { value: "Verse - Chorus - Verse - Chorus", group: "Simple" }
    - { value: "Verse - Chorus - Bridge - Chorus", group: "Simple" }
    - { value: "Intro - Verse - Chorus - Verse - Chorus - Outro", group: "Standard" }
    - { value: "Intro - Verse - Pre-Chorus - Chorus - Bridge - Final Chorus - Outro", group: "Extended" }
    - { value: "Short verse and catchy chorus", group: "Short & Simple" }
    - { value: "Story-driven structure", group: "Creative" }
    - { value: "Minimal structure", group: "Creative" }
    - { value: "Other", group: "Other" }


  # ==========================================
  # PANJANG LAGU
  # ==========================================

  music_length:
    - { value: "Short song", group: "Short" }
    - { value: "Around 2 minutes", group: "Short" }
    - { value: "Around 3 minutes", group: "Standard" }
    - { value: "Around 4 minutes", group: "Standard" }
    - { value: "Around 5 minutes", group: "Extended" }
    - { value: "Extended song", group: "Extended" }
    - { value: "Other", group: "Other" }


  # ==========================================
  # SUBJEK GAMBAR
  # ==========================================

  image_subject:
    - { value: "Person", group: "People" }
    - { value: "Woman", group: "People" }
    - { value: "Man", group: "People" }
    - { value: "Child", group: "People" }
    - { value: "Teenager", group: "People" }
    - { value: "Young adult", group: "People" }
    - { value: "Elderly person", group: "People" }
    - { value: "Couple", group: "People" }
    - { value: "Family", group: "People" }
    - { value: "Group of people", group: "People" }

    - { value: "Character", group: "Fictional & Animated" }
    - { value: "Creature", group: "Fictional & Animated" }
    - { value: "Robot", group: "Fictional & Animated" }

    - { value: "Animal", group: "Animals" }

    - { value: "Vehicle", group: "Objects & Products" }
    - { value: "Product", group: "Objects & Products" }
    - { value: "Food", group: "Objects & Products" }
    - { value: "Object", group: "Objects & Products" }

    - { value: "Architecture", group: "Environment" }
    - { value: "Nature", group: "Environment" }
    - { value: "Landscape", group: "Environment" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # AKSI / POSE GAMBAR
  # ==========================================

  image_action:
    - { value: "Standing naturally", group: "Standing & Posing" }
    - { value: "Standing confidently", group: "Standing & Posing" }
    - { value: "Sitting", group: "Standing & Posing" }
    - { value: "Relaxing", group: "Standing & Posing" }

    - { value: "Walking", group: "Movement" }
    - { value: "Running", group: "Movement" }
    - { value: "Dancing", group: "Movement" }
    - { value: "Running away", group: "Movement" }

    - { value: "Looking at the camera", group: "Looking & Expression" }
    - { value: "Looking away", group: "Looking & Expression" }
    - { value: "Looking into the distance", group: "Looking & Expression" }
    - { value: "Smiling", group: "Looking & Expression" }
    - { value: "Laughing", group: "Looking & Expression" }
    - { value: "Thinking", group: "Looking & Expression" }
    - { value: "Looking surprised", group: "Looking & Expression" }
    - { value: "Looking sad", group: "Looking & Expression" }
    - { value: "Looking angry", group: "Looking & Expression" }

    - { value: "Working", group: "Activity" }
    - { value: "Talking", group: "Activity" }
    - { value: "Eating", group: "Activity" }
    - { value: "Drinking", group: "Activity" }
    - { value: "Playing", group: "Activity" }
    - { value: "Fighting", group: "Activity" }

    - { value: "Holding an object", group: "Interaction" }
    - { value: "Interacting with an object", group: "Interaction" }
    - { value: "Using a tool", group: "Interaction" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # LOKASI / SETTING GAMBAR
  # ==========================================

  image_setting:
    - { value: "Indoor room", group: "Indoor" }
    - { value: "Bedroom", group: "Indoor" }
    - { value: "Living room", group: "Indoor" }
    - { value: "Kitchen", group: "Indoor" }
    - { value: "Bathroom", group: "Indoor" }
    - { value: "Office", group: "Indoor" }
    - { value: "Studio", group: "Indoor" }
    - { value: "Cafe", group: "Indoor" }
    - { value: "Restaurant", group: "Indoor" }
    - { value: "Shop", group: "Indoor" }
    - { value: "School", group: "Indoor" }
    - { value: "Hospital", group: "Indoor" }

    - { value: "Street", group: "Urban" }
    - { value: "City street", group: "Urban" }
    - { value: "Residential neighborhood", group: "Urban" }
    - { value: "Night street", group: "Urban" }

    - { value: "Indonesian village", group: "Indonesia" }
    - { value: "Traditional Indonesian house", group: "Indonesia" }
    - { value: "Rice field", group: "Indonesia" }

    - { value: "Beach", group: "Nature" }
    - { value: "Forest", group: "Nature" }
    - { value: "Mountain", group: "Nature" }
    - { value: "Lake", group: "Nature" }
    - { value: "River", group: "Nature" }
    - { value: "Garden", group: "Nature" }
    - { value: "Park", group: "Nature" }
    - { value: "Open field", group: "Nature" }

    - { value: "Abstract environment", group: "Abstract" }
    - { value: "Other", group: "Other" }


  # ==========================================
  # KOMPOSISI
  # ==========================================

  image_composition:
    - { value: "Centered composition", group: "Basic" }
    - { value: "Rule of thirds", group: "Basic" }
    - { value: "Symmetrical composition", group: "Basic" }
    - { value: "Asymmetrical composition", group: "Basic" }

    - { value: "Dynamic composition", group: "Dynamic" }
    - { value: "Diagonal composition", group: "Dynamic" }
    - { value: "Leading lines", group: "Dynamic" }

    - { value: "Minimal composition", group: "Minimal" }
    - { value: "Negative space", group: "Minimal" }

    - { value: "Layered foreground, middle ground, and background", group: "Environmental" }
    - { value: "Strong foreground framing", group: "Environmental" }
    - { value: "Environmental composition", group: "Environmental" }

    - { value: "Subject-focused composition", group: "Subject" }
    - { value: "Other", group: "Other" }


  # ==========================================
  # SHOT / PERSPEKTIF GAMBAR
  # ==========================================

  image_shot:
    - { value: "Extreme wide shot", group: "Wide" }
    - { value: "Wide shot", group: "Wide" }
    - { value: "Full body shot", group: "Wide" }
    - { value: "Medium wide shot", group: "Wide" }

    - { value: "Medium shot", group: "Medium" }
    - { value: "Medium close-up", group: "Medium" }

    - { value: "Close-up", group: "Close" }
    - { value: "Extreme close-up", group: "Close" }

    - { value: "Over-the-shoulder", group: "Perspective" }
    - { value: "POV", group: "Perspective" }
    - { value: "Three-quarter view", group: "Perspective" }
    - { value: "Side view", group: "Perspective" }
    - { value: "Front view", group: "Perspective" }
    - { value: "Rear view", group: "Perspective" }

    - { value: "Eye-level", group: "Angle" }
    - { value: "Low angle", group: "Angle" }
    - { value: "High angle", group: "Angle" }
    - { value: "Top-down", group: "Angle" }
    - { value: "Bird's-eye view", group: "Angle" }
    - { value: "Worm's-eye view", group: "Angle" }


  # ==========================================
  # GAYA VISUAL GAMBAR
  # ==========================================

  image_style:
    - { value: "Photorealistic", group: "Photography & Realism" }
    - { value: "Cinematic realism", group: "Photography & Realism" }
    - { value: "Naturalistic photography", group: "Photography & Realism" }
    - { value: "Editorial photography", group: "Photography & Realism" }
    - { value: "Studio photography", group: "Photography & Realism" }
    - { value: "Documentary photography", group: "Photography & Realism" }
    - { value: "Film still", group: "Photography & Realism" }

    - { value: "2D illustration", group: "2D & Illustration" }
    - { value: "2D cartoon", group: "2D & Illustration" }
    - { value: "Hand-drawn illustration", group: "2D & Illustration" }
    - { value: "Comic book", group: "2D & Illustration" }
    - { value: "Minimalist illustration", group: "2D & Illustration" }
    - { value: "Flat illustration", group: "2D & Illustration" }

    - { value: "Anime-inspired", group: "Anime & Manga" }
    - { value: "Manga-inspired", group: "Anime & Manga" }

    - { value: "Painterly", group: "Painting" }
    - { value: "Watercolor", group: "Painting" }
    - { value: "Oil painting", group: "Painting" }
    - { value: "Digital painting", group: "Painting" }

    - { value: "3D render", group: "3D" }
    - { value: "Stylized 3D", group: "3D" }
    - { value: "Claymation", group: "3D" }

    - { value: "Surreal", group: "Stylized & Fantasy" }
    - { value: "Fantasy", group: "Stylized & Fantasy" }
    - { value: "Dark fantasy", group: "Stylized & Fantasy" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # PENCAHAYAAN GAMBAR
  # ==========================================

  image_lighting:
    - { value: "Natural daylight", group: "Daylight" }
    - { value: "Soft daylight", group: "Daylight" }
    - { value: "Bright sunlight", group: "Daylight" }
    - { value: "Golden hour", group: "Daylight" }
    - { value: "Sunset", group: "Daylight" }
    - { value: "Sunrise", group: "Daylight" }
    - { value: "Overcast lighting", group: "Daylight" }

    - { value: "Soft diffused lighting", group: "Soft & Studio" }
    - { value: "Studio lighting", group: "Soft & Studio" }
    - { value: "Softbox lighting", group: "Soft & Studio" }

    - { value: "Warm indoor lighting", group: "Indoor" }
    - { value: "Cool indoor lighting", group: "Indoor" }

    - { value: "Dramatic lighting", group: "Dramatic" }
    - { value: "Low-key lighting", group: "Dramatic" }
    - { value: "High-key lighting", group: "Dramatic" }
    - { value: "Backlighting", group: "Dramatic" }
    - { value: "Rim lighting", group: "Dramatic" }

    - { value: "Neon lighting", group: "Special" }
    - { value: "Candlelight", group: "Special" }
    - { value: "Moonlight", group: "Special" }
    - { value: "Volumetric lighting", group: "Special" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # MOOD / ATMOSFER GAMBAR
  # ==========================================

  image_mood:
    - { value: "Calm", group: "Calm & Positive" }
    - { value: "Peaceful", group: "Calm & Positive" }
    - { value: "Relaxing", group: "Calm & Positive" }
    - { value: "Dreamy", group: "Calm & Positive" }
    - { value: "Warm", group: "Calm & Positive" }
    - { value: "Hopeful", group: "Calm & Positive" }
    - { value: "Happy", group: "Calm & Positive" }
    - { value: "Playful", group: "Calm & Positive" }
    - { value: "Funny", group: "Calm & Positive" }

    - { value: "Romantic", group: "Emotional" }
    - { value: "Nostalgic", group: "Emotional" }
    - { value: "Melancholic", group: "Emotional" }
    - { value: "Sad", group: "Emotional" }
    - { value: "Emotional", group: "Emotional" }
    - { value: "Lonely", group: "Emotional" }

    - { value: "Energetic", group: "Intense" }
    - { value: "Mysterious", group: "Intense" }
    - { value: "Eerie", group: "Intense" }
    - { value: "Dark", group: "Intense" }
    - { value: "Tense", group: "Intense" }
    - { value: "Dramatic", group: "Intense" }
    - { value: "Epic", group: "Intense" }
    - { value: "Magical", group: "Fantasy" }
    - { value: "Whimsical", group: "Fantasy" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # ARAH WARNA
  # ==========================================

  image_color:
    - { value: "Natural colors", group: "Natural" }
    - { value: "Earth tones", group: "Natural" }
    - { value: "Warm tones", group: "Warm" }
    - { value: "Warm cinematic color grade", group: "Warm" }

    - { value: "Cool tones", group: "Cool" }
    - { value: "Cool cinematic color grade", group: "Cool" }

    - { value: "Neutral tones", group: "Neutral" }
    - { value: "Pastel colors", group: "Soft" }
    - { value: "Muted colors", group: "Soft" }

    - { value: "Vibrant colors", group: "Vibrant" }
    - { value: "High contrast", group: "Contrast" }
    - { value: "Low contrast", group: "Contrast" }

    - { value: "Monochromatic", group: "Monochrome" }
    - { value: "Black and white", group: "Monochrome" }

    - { value: "Teal and orange", group: "Color Combination" }
    - { value: "Blue and purple", group: "Color Combination" }
    - { value: "Red and black", group: "Color Combination" }
    - { value: "Green and yellow", group: "Color Combination" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # TINGKAT DETAIL
  # ==========================================

  image_detail:
    - { value: "Minimal detail", group: "Low Detail" }
    - { value: "Simple detail", group: "Low Detail" }
    - { value: "Clean and simple", group: "Low Detail" }

    - { value: "Moderate detail", group: "Medium Detail" }

    - { value: "Detailed", group: "High Detail" }
    - { value: "Highly detailed", group: "High Detail" }
    - { value: "Extremely detailed", group: "High Detail" }
    - { value: "Rich environmental detail", group: "High Detail" }


  # ==========================================
  # ASPECT RATIO GAMBAR
  # ==========================================

  image_aspect_ratio:
    - "16:9"
    - "9:16"
    - "1:1"
    - "4:5"
    - "3:4"
    - "4:3"
    - "21:9"


  # ==========================================
  # SUBJEK VIDEO
  # ==========================================

  video_subject:
    - { value: "Person", group: "People" }
    - { value: "Woman", group: "People" }
    - { value: "Man", group: "People" }
    - { value: "Child", group: "People" }
    - { value: "Elderly person", group: "People" }
    - { value: "Couple", group: "People" }
    - { value: "Group of people", group: "People" }

    - { value: "Character", group: "Fictional & Animated" }
    - { value: "Creature", group: "Fictional & Animated" }

    - { value: "Animal", group: "Animals" }

    - { value: "Vehicle", group: "Objects & Products" }
    - { value: "Product", group: "Objects & Products" }
    - { value: "Object", group: "Objects & Products" }

    - { value: "Nature", group: "Environment" }
    - { value: "Architecture", group: "Environment" }
    - { value: "Landscape", group: "Environment" }


  # ==========================================
  # AKSI / GERAKAN VIDEO
  # ==========================================

  video_action:
    - { value: "Standing still with subtle natural movement", group: "Idle & Subtle" }
    - { value: "Breathing gently", group: "Idle & Subtle" }
    - { value: "Moving naturally", group: "Idle & Subtle" }
    - { value: "Reacting naturally", group: "Idle & Subtle" }
    - { value: "Subtle environmental movement", group: "Idle & Subtle" }

    - { value: "Walking slowly", group: "Walking & Turning" }
    - { value: "Walking toward the camera", group: "Walking & Turning" }
    - { value: "Walking away from the camera", group: "Walking & Turning" }
    - { value: "Turning slowly", group: "Walking & Turning" }
    - { value: "Turning around", group: "Walking & Turning" }

    - { value: "Looking around naturally", group: "Looking & Reaction" }
    - { value: "Looking toward something", group: "Looking & Reaction" }
    - { value: "Looking at the surroundings", group: "Looking & Reaction" }

    - { value: "Sitting calmly", group: "Interaction" }
    - { value: "Gesturing with the hands", group: "Interaction" }
    - { value: "Interacting with an object", group: "Interaction" }
    - { value: "Picking up an object", group: "Interaction" }
    - { value: "Putting down an object", group: "Interaction" }
    - { value: "Opening something", group: "Interaction" }
    - { value: "Closing something", group: "Interaction" }

    - { value: "Running", group: "Dynamic" }
    - { value: "Dancing", group: "Dynamic" }

    - { value: "Wind gently moving hair and clothing", group: "Environmental Motion" }
    - { value: "Floating gently", group: "Environmental Motion" }
    - { value: "Slowly rotating", group: "Environmental Motion" }
    - { value: "Pulsing softly", group: "Environmental Motion" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # LOKASI / SETTING VIDEO
  # ==========================================

  video_setting:
    - { value: "Indoor room", group: "Indoor" }
    - { value: "Bedroom", group: "Indoor" }
    - { value: "Living room", group: "Indoor" }
    - { value: "Kitchen", group: "Indoor" }
    - { value: "Office", group: "Indoor" }
    - { value: "Cafe", group: "Indoor" }
    - { value: "Restaurant", group: "Indoor" }
    - { value: "School", group: "Indoor" }
    - { value: "Hospital", group: "Indoor" }

    - { value: "Street", group: "Urban" }
    - { value: "City street", group: "Urban" }
    - { value: "Night street", group: "Urban" }
    - { value: "Train station", group: "Urban" }
    - { value: "Bus stop", group: "Urban" }

    - { value: "Village", group: "Village & Indonesia" }
    - { value: "Indonesian village", group: "Village & Indonesia" }
    - { value: "Traditional Indonesian house", group: "Village & Indonesia" }
    - { value: "Market", group: "Village & Indonesia" }

    - { value: "Beach", group: "Nature" }
    - { value: "Forest", group: "Nature" }
    - { value: "Mountain", group: "Nature" }
    - { value: "Lake", group: "Nature" }
    - { value: "River", group: "Nature" }
    - { value: "Garden", group: "Nature" }
    - { value: "Open field", group: "Nature" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # GERAKAN KAMERA
  # ==========================================

  video_camera:
    - { value: "Static locked-off camera", group: "Static & Subtle" }
    - { value: "Slow push-in", group: "Static & Subtle" }
    - { value: "Slow pull-back", group: "Static & Subtle" }
    - { value: "Slow handheld movement", group: "Static & Subtle" }
    - { value: "Subtle handheld movement", group: "Static & Subtle" }

    - { value: "Slow pan left", group: "Pan & Tilt" }
    - { value: "Slow pan right", group: "Pan & Tilt" }
    - { value: "Slow tilt up", group: "Pan & Tilt" }
    - { value: "Slow tilt down", group: "Pan & Tilt" }

    - { value: "Smooth tracking shot", group: "Tracking" }
    - { value: "Side tracking shot", group: "Tracking" }
    - { value: "Follow shot", group: "Tracking" }

    - { value: "Orbit around the subject", group: "Orbit & Reveal" }
    - { value: "Aerial movement", group: "Orbit & Reveal" }
    - { value: "Drone reveal", group: "Orbit & Reveal" }

    - { value: "POV movement", group: "POV & Perspective" }
    - { value: "Over-the-shoulder movement", group: "POV & Perspective" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # SHOT / FRAMING VIDEO
  # ==========================================

  video_shot:
    - { value: "Extreme wide shot", group: "Wide" }
    - { value: "Wide shot", group: "Wide" }
    - { value: "Full body shot", group: "Wide" }
    - { value: "Medium wide shot", group: "Wide" }

    - { value: "Medium shot", group: "Medium" }
    - { value: "Medium close-up", group: "Medium" }

    - { value: "Close-up", group: "Close" }
    - { value: "Extreme close-up", group: "Close" }

    - { value: "Over-the-shoulder shot", group: "Perspective" }
    - { value: "POV shot", group: "Perspective" }

    - { value: "Low angle", group: "Angle" }
    - { value: "High angle", group: "Angle" }
    - { value: "Eye-level shot", group: "Angle" }
    - { value: "Top-down shot", group: "Angle" }


  # ==========================================
  # GAYA VISUAL VIDEO
  # ==========================================

  video_style:
    - { value: "Cinematic realism", group: "Realism & Film" }
    - { value: "Photorealistic", group: "Realism & Film" }
    - { value: "Naturalistic", group: "Realism & Film" }
    - { value: "Documentary", group: "Realism & Film" }
    - { value: "Cinematic", group: "Realism & Film" }
    - { value: "Film look", group: "Realism & Film" }
    - { value: "Vintage film", group: "Realism & Film" }

    - { value: "2D animation", group: "2D & Illustration" }
    - { value: "2D cartoon", group: "2D & Illustration" }
    - { value: "Hand-drawn animation", group: "2D & Illustration" }
    - { value: "Illustrated", group: "2D & Illustration" }

    - { value: "3D animation", group: "3D" }
    - { value: "Stylized 3D", group: "3D" }

    - { value: "Anime-inspired", group: "Anime" }

    - { value: "Painterly", group: "Artistic" }
    - { value: "Fantasy", group: "Artistic" }
    - { value: "Surreal", group: "Artistic" }
    - { value: "Dark cinematic", group: "Artistic" }
    - { value: "Retro", group: "Artistic" }
    - { value: "Minimalist", group: "Artistic" }
    - { value: "Dreamlike", group: "Artistic" }


  # ==========================================
  # PENCAHAYAAN VIDEO
  # ==========================================

  video_lighting:
    - { value: "Natural daylight", group: "Daylight" }
    - { value: "Soft daylight", group: "Daylight" }
    - { value: "Warm sunlight", group: "Daylight" }
    - { value: "Golden hour", group: "Daylight" }
    - { value: "Sunset lighting", group: "Daylight" }
    - { value: "Sunrise lighting", group: "Daylight" }
    - { value: "Overcast soft light", group: "Daylight" }

    - { value: "Soft indoor lighting", group: "Indoor" }
    - { value: "Warm interior lighting", group: "Indoor" }
    - { value: "Cool interior lighting", group: "Indoor" }

    - { value: "Moody low-key lighting", group: "Dramatic" }
    - { value: "Dramatic cinematic lighting", group: "Dramatic" }
    - { value: "Backlighting", group: "Dramatic" }
    - { value: "Rim lighting", group: "Dramatic" }

    - { value: "Neon lighting", group: "Special" }
    - { value: "Moonlight", group: "Special" }
    - { value: "Candlelight", group: "Special" }
    - { value: "Volumetric lighting", group: "Special" }
    - { value: "Soft diffused lighting", group: "Special" }


  # ==========================================
  # ATMOSFER VIDEO
  # ==========================================

  video_atmosphere:
    - { value: "Calm", group: "Calm & Positive" }
    - { value: "Peaceful", group: "Calm & Positive" }
    - { value: "Relaxing", group: "Calm & Positive" }
    - { value: "Dreamy", group: "Calm & Positive" }
    - { value: "Warm", group: "Calm & Positive" }
    - { value: "Hopeful", group: "Calm & Positive" }
    - { value: "Happy", group: "Calm & Positive" }
    - { value: "Playful", group: "Calm & Positive" }

    - { value: "Romantic", group: "Emotional" }
    - { value: "Nostalgic", group: "Emotional" }
    - { value: "Melancholic", group: "Emotional" }
    - { value: "Emotional", group: "Emotional" }
    - { value: "Lonely", group: "Emotional" }

    - { value: "Energetic", group: "Intense" }
    - { value: "Mysterious", group: "Intense" }
    - { value: "Eerie", group: "Intense" }
    - { value: "Dark", group: "Intense" }
    - { value: "Tense", group: "Intense" }
    - { value: "Dramatic", group: "Intense" }
    - { value: "Epic", group: "Intense" }

    - { value: "Magical", group: "Fantasy" }
    - { value: "Whimsical", group: "Fantasy" }

    - { value: "Other", group: "Other" }


  # ==========================================
  # KECEPATAN GERAKAN
  # ==========================================

  video_motion_speed:
    - { value: "Extremely slow", group: "Slow" }
    - { value: "Very slow", group: "Slow" }
    - { value: "Slow", group: "Slow" }

    - { value: "Natural", group: "Natural" }
    - { value: "Moderate", group: "Natural" }

    - { value: "Fast", group: "Fast" }
    - { value: "Very fast", group: "Fast" }
    - { value: "Dynamic", group: "Fast" }


  # ==========================================
  # DURASI VIDEO
  # ==========================================

  video_duration:
    - { value: "3 seconds", group: "Short" }
    - { value: "5 seconds", group: "Short" }
    - { value: "6 seconds", group: "Short" }
    - { value: "8 seconds", group: "Short" }
    - { value: "10 seconds", group: "Short" }
    - { value: "15 seconds", group: "Medium" }
    - { value: "20 seconds", group: "Medium" }
    - { value: "30 seconds", group: "Long" }


  # ==========================================
  # ASPECT RATIO VIDEO
  # ==========================================

  video_aspect_ratio:
    - "16:9"
    - "9:16"
    - "1:1"
    - "4:5"
    - "21:9"
---