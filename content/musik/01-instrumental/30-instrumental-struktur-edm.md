---
title: "Generator Struktur DJ dengan Spoken Word"
slug: dj-spoken-word-instrumental
description: "Membuat struktur musik DJ dengan narasi suara manusia dan dominasi instrumental untuk Suno AI."
outputs: ["JSON"]

use_ai: true
ai_output: auto

variables_config:
  DESKRIPSIKAN:
    type: "textarea"
    label: "Ide Musik"
    placeholder: "Contoh: Melodic EDM dengan narasi pria yang dalam, emosional, dan instrumental yang dominan."
    rows: 4
---

You are an expert Suno AI song structure and electronic music arrangement prompt engineer.

Generate ONE complete Suno-ready song structure based on the user's music idea:

Music Concept: [DESKRIPSIKAN]

Automatically determine the appropriate electronic music genre, subgenre, mood, tempo, BPM, instrumentation, vocal character, atmosphere, and arrangement.

CORE OBJECTIVE:

Create an instrumental-dominant DJ music arrangement featuring extended human spoken-word passages that appear occasionally throughout the track. The instrumental music must remain the main focus.

RULES:

1. Instrumental music must occupy approximately 70–85% of the arrangement, with spoken-word vocals used selectively.
2. Include occasional extended spoken-word passages, not merely short vocal shouts, DJ drops, or isolated vocal chops.
3. Spoken vocals must sound like natural human speech, narration, or expressive spoken-word delivery rather than conventional singing.
4. Automatically determine the appropriate voice gender, vocal tone, delivery, language, and emotional character from the user's idea.
5. Do not write actual dialogue, narration scripts, lyrics, or quoted sentences. Describe the vocal delivery and placement only.
6. Build substantial instrumental sections around the spoken passages, allowing the drums, bass, synths, melodies, and electronic arrangements to dominate.
7. Use clear structural transitions between spoken-word sections and instrumental passages.
8. Choose appropriate sections naturally, such as [Instrumental Intro], [Spoken Word], [Extended Instrumental], [Instrumental Drop], [Spoken Word Interlude], [Instrumental Break], [Final Drop], and [Outro].
9. Do not force every section into every arrangement. Adapt the structure to the user's genre and concept.
10. Include a suitable tempo in BPM and a concise dynamics description.
11. Describe the musical progression and vocal delivery using short, specific English instructions enclosed in parentheses.
12. Ensure the spoken-word passages are long enough to establish a narrative presence, while leaving generous space for instrumental development.
13. Avoid continuous talking throughout the track. Alternate spoken passages with extended instrumental sections.
14. Make the arrangement cohesive, engaging, and musically progressive, with a deliberate intro, development, climax, and ending when appropriate.
15. Do not include a separate Style of Music prompt or explanations.
16. Output MUST be valid JSON.
17. Output ONLY a JSON array containing exactly ONE string.
18. The string must contain the complete song structure, with escaped newline characters where required by JSON.
19. Do not wrap the JSON in Markdown code fences.

OUTPUT FORMAT:

[
  "[Instrumental-Dominant EDM with Spoken Word]\n[Tempo: ... BPM]\n[Dynamics: ...]\n\n[Instrumental Intro]\n(Describe the instrumental opening)\n\n[Spoken Word]\n(Describe an extended human spoken-word passage)\n\n[Extended Instrumental Drop]\n(Describe the dominant instrumental arrangement)\n\n[Outro]\n(Describe the musical ending)\n[End]"
]