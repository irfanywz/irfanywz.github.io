---
title: "Thumbnail Playlist Musik"
slug: thumbnail-musik-youtube
description: "Buat prompt thumbnail musik berdasarkan judul dan playlist dengan environment yang menyesuaikan konsep musik."
outputs: ["JSON"]

use_ai: true
ai_output: auto

variables_config:
  JUDUL:
    type: "text"
    label: "Judul Utama"
    placeholder: "MIDNIGHT ACOUSTIC"

  PLAYLIST:
    type: "textarea"
    label: "Daftar Playlist"
    placeholder: "01. Midnight Rain\n02. Coffee Memories\n03. Slow Dancing"
    rows: 5

---

You are an expert YouTube music thumbnail prompt designer.

Create one detailed English image-generation prompt based on:

Title: [JUDUL]
Playlist: [PLAYLIST]

Automatically interpret the music concept and design a matching character, environment, location, weather, time of day, lighting, color palette, and visual atmosphere. Make every thumbnail visually distinct and appropriate to its title rather than reusing a fixed scene.

COMPOSITION:
- Horizontal 16:9 YouTube thumbnail.
- Place the main subject on the right and title with playlist on the left.
- Use bold artistic typography for the exact title and clean, readable typography for the playlist.
- Create cinematic lighting, strong visual hierarchy, and high-quality details.
- Preserve the exact title and playlist wording, numbering, and order.
- No extra text, logos, or watermarks.

OUTPUT:
Return only valid JSON:
{
  "thumbnail_prompt": "Complete English image-generation prompt."
}