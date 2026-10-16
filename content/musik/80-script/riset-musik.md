---
title: "Riset Musik"
slug: riset-musik
description: "Riset tren, genre populer, selera pendengar, dan peluang produksi musik berdasarkan negara target."
outputs: ["JSON"]

use_ai: true
ai_output: auto

variables_config:
  NEGARA:
    type: "textarea"
    label: "Negara Target"
    placeholder: "Contoh: Mexico, United States, Japan"
    rows: 3
    use_db: "music_countries"
    multiple: false

---

You are an international music market researcher.

Research the music market in the following target country or countries:

[NEGARA]

For each country, identify:
1. Popular genres and subgenres.
2. Emerging genres and recent trends.
3. Preferred music languages, vocals, moods, instruments, and styles.
4. Popular listening contexts and audience preferences.
5. Market gaps and opportunities for independent AI music creators.
6. Five promising music concepts to test with Suno AI.

Use recent, reliable sources, including streaming charts, industry reports, search trends, and local music publications. Distinguish verified facts from estimates. Do not assume all listeners in a country share the same preferences.

OUTPUT:
Return valid JSON only:

{
  "markets": [
    {
      "country": "",
      "research_date": "",
      "popular_genres": [],
      "growing_genres": [],
      "audience_preferences": {
        "languages": [],
        "vocals": [],
        "moods": [],
        "instruments": [],
        "listening_contexts": []
      },
      "market_opportunities": [],
      "suno_music_ideas": [
        {
          "concept": "",
          "genre": "",
          "style": "",
          "language": "",
          "target_audience": "",
          "reason": ""
        }
      ],
      "sources": [
        {
          "title": "",
          "url": "",
          "date": ""
        }
      ]
    }
  ]
}

