---
title: "Outfit Celana"
slug: "outfit-celana"
description: "Prompt builder untuk merancang, mengganti, dan mengekstrak variasi pakaian bawahan, celana, rok, dan sarong karakter kartun secara presisi"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Dark distressed slim-fit jeans"
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for new lower-body clothing based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different lower-body clothing design, not merely a color or minor detail change.
  * Focus ONLY on the lower garment.
  * Describe the garment type, silhouette, fit, length, material/fabric style, and colors when relevant.
  * Vary the garment type, cut, silhouette, fit, length, construction, and material meaningfully between variants.
  * Avoid repeating the same overall garment design across variants.
  * Keep each design simple, believable, readable, and suitable for modular 2D animation.
  * Do NOT mention or modify the character, head, face, hair, skin, body proportions, upper clothing, footwear, accessories, pose, expression, or movement.
  * Do NOT mention the environment, background, setting, lighting, weather, atmosphere, time, actions, personality, or story.
  * Avoid excessive folds, patterns, textures, or tiny decorative details unless relevant to [DESKRIPSIKAN].

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.

image_prompt: |
  BOTTOM / PANTS EXTRACTION ANALYSIS

  Use the attached reference image to analyze and extract the precise lower-body clothing and pants details.

  Create **ONE concise visual description sentence** of the lower-body clothing for character replacement.

  Rules:
  * Focus **ONLY on the pants, trousers, jeans, shorts, skirt, or bottom pieces**
  * Clearly specify colors, patterns, style, length, shape, and fit
  * **DO NOT include character facial features, hair, or upper body shape**
  * **DO NOT include background, lighting, or environment**
  * Keep the text short, clean, and directly usable for the bottom replacement tool

  **Output ONE description sentence only.**

database:
  "Example":
    - title: "Casual Shorts"
      description: "Simple knee-length casual cotton shorts."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2314b8a6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Shorts</text></svg>'

outputs: ["JSON"]
---
Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with new lower-body clothing based on:

[[{humanInput}]]

### ONLY CHANGE

Replace **ONLY the lower-body clothing** according to [[{humanInput}]].

The new garment must fit the existing body and leg proportions naturally and accurately follow the requested **garment type, length, silhouette, fit, color, material, pattern, and important visible details**.

### CHARACTER & UPPER CLOTHING LOCK

Keep EVERYTHING ELSE EXACTLY UNCHANGED:

* character identity and age
* head, face, and facial features
* hairstyle, hair shape, and hair color
* skin tone
* body shape and proportions
* pose and body position
* 3/4 front view facing slightly right
* camera angle and perspective
* original upper-body clothing
* original footwear
* original accessories not belonging to the lower clothing
* art style and line quality

Do NOT redesign, resize, reposition, recolor, or modify any locked element.

### VISUAL STYLE

Match the original character:

* simple 2D cartoon
* thick natural black outlines
* flat solid colors
* clean simple shapes
* minimal detail
* slightly handmade line quality
* animation-friendly design

### FINAL LOCK

Do NOT add props, extra characters, text, or unrelated elements.

The result must look like the **same original character with ONLY the lower-body clothing replaced**.

**ONLY CHANGE THE LOWER-BODY CLOTHING.**
