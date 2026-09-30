---
title: "Background Interior"
slug: "background-interior"
description: "Prompt builder untuk background interior"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Cozy traditional Indonesian living room with bamboo walls and bale-bale"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for an interior background based on:

  [{target}]

  Each variant must describe a **clearly different interior setup**, with meaningful differences in room layout, furniture arrangement, major objects, and decorative elements.

  Write each variant as **one concise sentence**, describing the interior from **foreground → middle ground → background → upper area**.

  Rules:

  * Focus **ONLY on the interior room setup, furniture, environmental objects, and decorative elements**
  * Clearly describe the room type and spatial arrangement
  * Clearly describe important foreground, middle-ground, background, and upper-area elements
  * Make each variant meaningfully different in **room layout, furniture arrangement, major furniture, architectural features, or decorative elements**
  * Do NOT create variants that differ only by color, lighting, or one small decorative object
  * Keep each interior coherent with [{target}]
  * Use furniture and objects appropriate to the described room
  * Keep the setup believable, readable, and suitable for 2D animation
  * Do not force any specific cultural or regional style unless relevant to [{target}]

  **CHARACTER LOCK:**
  Do NOT mention or modify:

  * characters
  * people
  * animals
  * character actions
  * character poses
  * clothing
  * appearance

  **CONTENT LOCK:**
  Do NOT mention:

  * text
  * logos
  * dialogue
  * story
  * backstory
  * actions
  * lighting
  * camera movement
  * weather
  * unrelated environments

  **OUTPUT RULES:**

  * Output exactly **[JUMLAH_VARIANT]** variants
  * Number them sequentially
  * One sentence per variant
  * Each sentence must follow: **Foreground → Middle ground → Background → Upper area**
  * No explanations
  * No headings
  * No additional commentary
  * Do not output fewer or more variants than requested


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

Create a completely original horizontal sidescroll view 2D animation background based on:

<br>

[{humanInput}]

<br>

Use the reference image ONLY to understand the general visual language:
line quality, rendering technique, level of detail, shading approach, texture treatment, and overall illustration feel.

**DO NOT copy or closely reproduce the reference image.**

DO NOT reuse its layout, architecture, furniture, objects, shapes, proportions, composition, or specific visual elements.

Create a fresh and original environment with a clearly different design and arrangement.

### ENVIRONMENT STRUCTURE

Build the environment as four clear visual layers:

**Bottom layer:**
Floor and lower foreground area.

**Middle layer:**
Furniture, objects, and environmental elements occupying the character's main acting area.

**Background layer:**
Main walls, doors, windows, structures, and dominant environmental elements.

**Top layer:**
Ceiling and upper environmental elements.

All layers must connect naturally and belong to the same environment.

### COMPOSITION

Maintain a wide horizontal sidescroller composition with a large usable floor area for characters.

Use a front-facing, eye-level view with shallow depth separation and minimal perspective.

Avoid strong vanishing points, extreme perspective distortion, cinematic camera angles, or dramatic depth.

Maintain natural spatial depth so the environment still feels dimensional rather than completely flat.

### ENVIRONMENT INTERPRETATION

The description determines the environment, architecture, furniture, objects, condition, materials, decoration, lifestyle, and atmosphere.

Interpret the description naturally and creatively.

Invent an original arrangement and visual design rather than reproducing the reference.

### VISUAL RENDERING

Create a **semi-realistic 2D illustration** with:

* hand-drawn linework
* believable environmental proportions
* natural material textures
* subtle surface variation
* soft dimensional shading
* believable lighting
* realistic-looking wood, bamboo, ceramic, fabric, concrete, tile, and other materials when appropriate
* controlled environmental detail
* clear readable shapes
* consistent depth
* animation-friendly rendering

Avoid an overly flat cartoon appearance.

Avoid childish proportions, toy-like objects, excessive exaggeration, overly simplified surfaces, plastic-looking materials, and completely flat colors.

Keep the result visually detailed enough to feel believable while remaining clean and practical for 2D animation.

### STYLE CONSISTENCY

Maintain the reference's overall illustration character while allowing the new environment to have its own architecture, objects, composition, and design.

The final result should feel like a **semi-realistic hand-drawn 2D animation background**, not a photorealistic image, 3D render, anime scene, or flat vector cartoon.

No characters, no people, no animals.

No unnecessary text or logos.

Output ONLY the background.