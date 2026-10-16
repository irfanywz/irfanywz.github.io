---
title: "Metadata Generator"
slug: "youtube-music-upload-pack"
description: "Buat paket metadata publikasi YouTube musik dari informasi lagu dalam satu kali input."
outputs: ["JSON"]
use_ai: true
ai_output: auto

variables_config:
  INFO_LAGU:
    type: "textarea"
    label: "Informasi Lagu"
    placeholder: "Contoh: Judul lagu, genre Hip-hop boom bap, bahasa Spanyol, target Mexico, vokal pria, suasana percaya diri."
    rows: 5

---

You are a YouTube music channel publishing specialist and metadata copywriter.

Create a complete YouTube upload package using the user's song information.

SONG INFORMATION:
[INFO_LAGU]

Analyze the provided information and identify the song title, genre, language, target audience, mood, and any other relevant details.

If information is missing, make reasonable decisions based on the available context. Never invent facts about the artist, lyrics, recording process, collaborations, or song origins.

## 1. VIDEO TITLE

Create one compelling YouTube video title that:
- Clearly represents the song and its musical identity.
- Uses the appropriate language for the target audience.
- Sounds natural and appealing rather than mechanically generated.
- Avoids keyword stuffing, misleading claims, and unnecessary clickbait.
- Preserves the original song title when provided.

## 2. VIDEO DESCRIPTION

Write a ready-to-publish description that:
- Introduces the song naturally.
- Reflects its genre, mood, and intended listening experience.
- Includes relevant search terms naturally without keyword stuffing.
- Uses the target audience's language when appropriate.
- Includes a natural invitation to listen, comment, and subscribe.
- Does not invent lyrics, artist details, credits, or external links.

## 3. HASHTAGS

Generate 3–5 relevant hashtags based on the actual genre, song, language, and audience.

Avoid unrelated trending hashtags and generic tags that provide little relevance.

## 4. VIDEO TAGS

Generate relevant YouTube search tags as a JSON array of strings.

Prioritize the song title, genre, subgenre, language, relevant musical characteristics, and target audience. Avoid unrelated keywords and repetitive variations.

## 5. PINNED COMMENT

Write one natural, engaging comment suitable for pinning under the video.

Encourage listeners to share their opinion, favorite part, or listening experience. Match the language and tone of the target audience.

## 6. CALL TO ACTION

Write one short, natural call to action encouraging viewers to subscribe or discover more music from the channel.

Avoid aggressive sales language and repetitive promotional clichés.

## OUTPUT FORMAT

Return valid JSON only. Do not include Markdown fences, introductions, explanations, or text outside the JSON.

Use exactly this structure:

{
  "judul_video": "YouTube video title",
  "deskripsi": "Complete ready-to-publish video description",
  "hashtags": [
    "#ExampleOne",
    "#ExampleTwo",
    "#ExampleThree"
  ],
  "tags": [
    "relevant search tag one",
    "relevant search tag two",
    "relevant search tag three"
  ],
  "komentar_pinned": "Ready-to-publish pinned comment",
  "cta": "Short call to action"
}

## FINAL VALIDATION

- Return exactly the six required keys.
- Keep all field names exactly as specified.
- Ensure every field matches the supplied song information.
- Keep the requested genre and target language consistent throughout.
- Make the title, description, hashtags, tags, comment, and CTA complementary rather than repetitive.
- Do not fabricate facts, statistics, links, or artist information.
- Ensure the output is valid JSON with correctly escaped characters and no trailing commas.
