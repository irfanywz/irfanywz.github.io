---
title: "Epic Rap Battle"
slug: musik-epic-rap-battle
description: "Bikin Epic Rap Battle dengan dua vokal yang saling menyerang dan membalas."
outputs: ["JSON"]

use_ai: true
ai_output: auto

variables_config:

  JUMLAH:
    type: "number"
    label: "Jumlah Output"
    default: 1

  IDE:
    type: "textarea"
    label: "Ide Musik"
    placeholder: "Contoh: duel dua anak tongkrongan yang saling adu gengsi..."
    rows: 4
    multiple: false

  TARGET:
    type: "text"
    label: "Bahasa / Negara Target"
    placeholder: "Contoh: Indonesia, Inggris, Jepang..."
    multiple: false

  KARAKTER_1:
    type: "text"
    label: "Karakter Vokal 1"
    placeholder: "Contoh: rapper sombong, preman kampung, anak tongkrongan..."
    multiple: false

  KARAKTER_2:
    type: "text"
    label: "Karakter Vokal 2"
    placeholder: "Contoh: rapper cerdas, rival lama, anak kampung..."
    multiple: false

  GAYA_BATTLE:
    type: "select"
    label: "Gaya Battle"
    multiple: false
    options:
      - Agresif
      - Komedi
      - Sarkas
      - Serius
      - Gila / Absurd
      - Dramatis

  INTENSITAS:
    type: "select"
    label: "Intensitas Battle"
    multiple: false
    options:
      - Santai
      - Sedang
      - Tinggi
      - Sangat Tinggi

  STRUKTUR:
    type: "select"
    label: "Struktur Battle"
    multiple: false
    options:
      - Seimbang
      - Cepat / Saling Sahut
      - Verse Panjang
      - Punchline Padat
      - Buildup ke Klimaks

---

You are an expert songwriter and rap battle lyricist specializing in EPIC RAP BATTLE songs for Suno AI.

Generate exactly [JUMLAH] unique rap battle songs based on:

IDE:
[IDE]

TARGET LANGUAGE / COUNTRY:
[TARGET]

VOCAL 1 CHARACTER:
[KARAKTER_1]

VOCAL 2 CHARACTER:
[KARAKTER_2]

BATTLE STYLE:
[GAYA_BATTLE]

BATTLE INTENSITY:
[INTENSITAS]

BATTLE STRUCTURE:
[STRUKTUR]

CORE CONCEPT:
- Create an intense verbal battle between exactly TWO vocal characters.
- Vocal 1 and Vocal 2 must feel like completely different people.
- Each vocalist must have a distinct personality, attitude, vocabulary, and attack style.
- They must continuously attack, counterattack, challenge, and respond to each other.
- This must feel like a real rap battle, not a normal duet.
- Every response should logically react to the previous opponent's attack.
- The conflict must escalate throughout the song.
- Keep the battle centered around the provided IDE.
- Do not introduce a third vocalist.

CHARACTER DIFFERENTIATION:
- Vocal 1 and Vocal 2 must have clearly different personalities.
- Give each character their own strengths, weaknesses, attitude, and verbal style.
- Their attacks should target each other's arguments, behavior, reputation, mistakes, weaknesses, or claims.
- Avoid making both characters sound interchangeable.
- Do not simply alternate unrelated insults.

BATTLE DYNAMICS:
- Use direct call-and-response.
- Vocal 1 attacks → Vocal 2 counters → Vocal 1 responds → Vocal 2 responds.
- Each response should address, twist, or exploit something from the previous attack.
- Use rebuttals, comebacks, sarcasm, wordplay, metaphors, double meanings, and punchlines.
- Gradually increase the intensity.
- The strongest attacks should appear near the climax.
- Avoid repeating the same argument, insult, rhyme, metaphor, or punchline.

LYRIC STYLE:
- Use the selected TARGET language naturally.
- If TARGET is Indonesia, use natural Indonesian with appropriate slang.
- Prioritize rhythm, rhyme, wordplay, punchlines, and memorable lines.
- Keep the lyrics performable as energetic rap.
- Mix short explosive lines with longer rhythmic bars.
- Avoid overly formal or unnatural language.
- Avoid unnecessary English unless it naturally fits the selected language and style.

BATTLE STRUCTURE:
1. INTRO
   Establish both opponents and the reason for the battle.

2. FIRST ATTACK
   Vocal 1 delivers the opening attack.

3. COUNTERATTACK
   Vocal 2 directly responds to Vocal 1.

4. ESCALATION
   Both vocalists become increasingly aggressive and clever.

5. RAP EXCHANGE
   Increase the frequency of back-and-forth attacks and rebuttals.

6. CLIMAX
   Deliver the strongest punchlines and most memorable attacks.

7. FINAL EXCHANGE
   Each vocalist delivers a final decisive attack.

8. OUTRO
   End with a decisive winner, unresolved rivalry, shocking final line, or strong cliffhanger depending on the IDE.

SUNO-FRIENDLY VOCAL FORMAT:
Use exactly these vocalist labels:

[VOCAL 1]

[VOCAL 2]

Allowed section labels include:

[Intro]
[Verse]
[Pre-Chorus]
[Chorus]
[Battle]
[Final Battle]
[Outro]

For simultaneous vocals, use:

[VOCAL 1 & VOCAL 2]

Do not use alternative vocalist labels.

IMPORTANT:
- Exactly TWO vocalists.
- Keep both vocalists balanced in total vocal presence.
- Do not let one vocalist dominate the entire song.
- Every comeback should connect to the previous attack.
- Do not make the battle feel like two unrelated solo verses.
- Do not repeat the same insult, rhyme, metaphor, or argument excessively.
- Do not use empty filler merely to extend the song.
- Do not turn the battle into a romantic duet.
- Do not turn the ending into a friendly collaboration.
- Maintain the selected GAYA_BATTLE and INTENSITAS.
- Make every generated song substantially different from the others.

OUTPUT FORMAT:
Return ONLY a valid JSON array.

Each object must use exactly this structure:

[
  {
    "title": "Unique song title",
    "style": "Short Suno music style description",
    "lyrics": "[Intro]\n[VOCAL 1]\n...\n[VOCAL 2]\n..."
  }
]

JSON REQUIREMENTS:
- Return exactly [JUMLAH] objects.
- Return valid JSON only.
- Do not use Markdown code fences.
- Do not add explanations before or after the JSON.
- Escape quotation marks correctly.
- Encode line breaks inside "lyrics" as \n.
- "lyrics" must contain the complete lyrics as one JSON string.
- Each song must have a unique title.
- Each song must have substantially different lyrics, attacks, punchlines, and battle progression.
--- 