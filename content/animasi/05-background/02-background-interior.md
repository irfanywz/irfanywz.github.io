---
title: "Background Interior"
slug: "background-interior"
description: "Prompt builder untuk background interior"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Cozy traditional Indonesian living room with bamboo walls and bale-bale"
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for an interior background based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different interior setup, not merely a color change or minor decoration.
  * Focus ONLY on room type, layout, furniture, architectural features, major objects, and decorative elements.
  * Vary the room layout, furniture arrangement, major features, and decorative elements meaningfully.
  * Describe each variant in this order: **Foreground → Middle ground → Background → Upper area**.
  * Keep the setup coherent with [DESKRIPSIKAN] and use believable room-appropriate elements.
  * Do NOT mention characters, people, animals, actions, poses, clothing, appearance, text, logos, dialogue, story, lighting, weather, camera movement, or unrelated environments.
  * Keep each setup readable, believable, and suitable for 2D animation background generation.
  * Keep each description concise and directly usable for asset generation pipelines.

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, following **Foreground → Middle ground → Background → Upper area**, with no explanations or extra text.

image_prompt: |
  Create ONE short visual description of the interior animation background using image reference

  If a reference image is provided, use it as the PRIMARY INTERIOR STYLE REFERENCE. Carefully observe the room's art style, linework, color palette, lighting, and composition to translate only the important interior traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Cozy traditional Indonesian living room with bamboo walls, wooden bench (bale-bale), ceramic jar, and woven mat.”
  RULES:
  - Preserve the interior theme, architectural style, and regional characteristics visible in the reference.
  - Prioritize distinctive visual traits: furniture layout, wall textures, and object placement.
  - Do not invent background features or elements that are not visible or reasonably supported.
  - Do not describe specific characters, people, animals, text, or logos.
  - Do not copy the reference exact composition if the task is to create a new scene; use the reference only for style guidance.
  - Keep the appearance believable and suitable for an animated room setting.
  - Avoid generic descriptions.
  - Avoid unnecessary details or backstory.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.

database:
  "Rumah Tradisional":
    - title: "Ruang Tamu Tradisional"
      description: "Cozy traditional Indonesian living room with bamboo walls, wooden bench (bale-bale), ceramic jar, and woven mat."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23451a03"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="12" font-family="sans-serif">Tamu</text></svg>'
    - title: "Dapur Jadul Klasik"
      description: "Traditional Indonesian country kitchen with wood-burning stove (tungku tanah liat), hanging kitchen utensils, and wooden shelves."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c2d12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffedd5" font-size="12" font-family="sans-serif">Dapur</text></svg>'

  "Kamar & Ruang Kerja":
    - title: "Kamar Tidur Sederhana"
      description: "Simple retro Indonesian bedroom with a wooden bed frame, vintage wooden wardrobe, small desk, and curtained window."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="12" font-family="sans-serif">Kamar</text></svg>'
    - title: "Ruang Kerja/Studio Retro"
      description: "Indonesian retro workspace with wooden desk, old box television, bookshelves filled with cassette tapes, and patterned tile floor."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="12" font-family="sans-serif">Studio</text></svg>'

outputs:
  - JSON
---
Use the attached image as a **STRICT STYLE REFERENCE ONLY**.

Create a completely original horizontal sidescroll **interior 2D animation background** based on:

[{humanInput}]

Use the reference image ONLY to understand its general visual language: line quality, rendering technique, detail level, shading, texture, and illustration feel.

**DO NOT copy or closely reproduce the reference.**
Do NOT reuse its layout, architecture, furniture, objects, shapes, proportions, composition, or specific visual elements.

### ENVIRONMENT STRUCTURE

Build the environment as four connected visual layers:

**Bottom:** floor and lower foreground area.
**Middle:** furniture, objects, and main acting area.
**Background:** walls, doors, windows, and major structures.
**Top:** ceiling and upper environmental elements.

### COMPOSITION

* Wide horizontal sidescroller composition with a large usable floor area for characters.
* Front-facing, eye-level view with shallow depth and minimal perspective.
* Avoid strong vanishing points, extreme perspective, cinematic angles, or dramatic depth.
* Keep natural spatial depth so the environment feels dimensional, not completely flat.

### ENVIRONMENT INTERPRETATION

Interpret [{humanInput}] naturally and creatively, including its architecture, furniture, objects, materials, condition, decoration, lifestyle, and atmosphere.

Create a fresh arrangement and original design rather than reproducing the reference.

### VISUAL RENDERING

Create a **semi-realistic hand-drawn 2D illustration** with:

* natural hand-drawn linework
* believable proportions
* realistic-looking material textures
* subtle surface imperfections
* soft dimensional shading
* believable lighting
* controlled environmental detail
* clear readable shapes
* consistent depth
* animation-friendly rendering

The result should feel like a **real-world environment simplified into hand-drawn 2D animation art**, not a flat vector illustration, vector icon, logo, 3D render, CGI scene, anime scene, or photorealistic image.

Avoid clean geometric vector shapes, perfectly uniform outlines, flat fills, glossy digital surfaces, plastic-looking materials, childish proportions, toy-like objects, and overly simplified surfaces.

Keep the environment detailed enough to feel believable while remaining clean and practical for 2D animation.

### FINAL LOCK

No characters, people, animals, unnecessary text, or logos.

Output ONLY the background.
