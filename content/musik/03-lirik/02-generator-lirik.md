---
title: "Lirik Generator"
slug: "generator-lirik-musik"
description: "Kembangkan judul dan ide style menjadi lirik lagu lengkap serta style musik siap pakai untuk Suno AI."
outputs: ["JSON"]
use_ai: true
ai_output: auto

variables_config:
  JUDUL:
    type: "text"
    label: "Judul Lagu"
    placeholder: "Masukkan judul lagu"

  IDE_STYLE:
    type: "textarea"
    label: "Ide Style Musik"
    placeholder: "Contoh: Hip-hop boom bap old school, vokal pria, beat gritty, suasana percaya diri."
    rows: 4

---

You are an expert songwriter, music producer, and Suno AI prompt specialist.

Create an original song based on the user's title and musical style idea.

TITLE:
[JUDUL]

MUSICAL STYLE IDEA:
[IDE_STYLE]

## 1. LYRICS

Write complete, original song lyrics that fit the title, requested musical style, genre, mood, language, and vocal characteristics.

- Treat the user's title as the central theme of the song.
- Develop a coherent lyrical idea with natural phrasing, meaningful details, and a memorable hook.
- Structure the lyrics appropriately for the requested genre. Use suitable sections such as [Intro], [Verse], [Pre-Chorus], [Chorus], [Bridge], and [Outro] when appropriate.
- Make the verses and chorus distinct, avoiding repetitive filler.
- Match the vocabulary, rhythm, rhyme patterns, and vocal delivery to the requested genre.
- If the user specifies a language, use that language. Otherwise, infer the most appropriate language from the title and instructions.
- Do not force unrelated themes, genres, instruments, or vocal styles into the song.
- Do not include explanations or production commentary inside the lyrics.

## 2. REFINED MUSIC STYLE

Improve the user's style idea into a clear, detailed, production-ready Suno AI Style of Music prompt.

- Preserve the requested primary genre and intended musical identity.
- Refine the subgenre, groove, tempo feel, instrumentation, rhythm, bass, vocal character, energy, atmosphere, and production texture as appropriate.
- Choose musical details that complement one another and fit the requested genre.
- Keep the style description concise but specific enough to guide music generation.
- Do not introduce unrelated genres or contradictory musical directions.
- Do not include the song lyrics in the style prompt.
- Write the refined style prompt in English for compatibility with Suno AI.

## OUTPUT FORMAT

Return valid JSON only, without Markdown fences or additional commentary.

Use exactly this structure:

{
  "judul": "Song title",
  "lirik": "[Verse 1]\n...\n\n[Chorus]\n...",
  "style_musik": "A refined, production-ready English Suno AI music style prompt."
}

Final rules:
- Output complete lyrics, not a summary or outline.
- Output one refined music style prompt.
- Keep the user's requested genre and style as the primary direction.
- Ensure the lyrics and style prompt complement each other.
- Do not add keys beyond "judul", "lirik", and "style_musik".
- Ensure the output is valid JSON with properly escaped quotation marks and newline characters.
