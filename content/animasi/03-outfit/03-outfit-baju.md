---
title: "Outfit Baju"
slug: "outfit-baju"
description: "Prompt builder untuk merancang, mengganti, dan mengekstrak variasi pakaian atasan, kemeja, jaket, dan kaos karakter kartun secara presisi"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Casual denim jacket over a plain white t-shirt"
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for new upper-body clothing based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different upper-body clothing design, not merely a color or sleeve change.
  * Focus ONLY on the upper garment.
  * Describe the garment type, silhouette, sleeves, collar/neckline, fit, material, and colors when relevant.
  * Vary the garment type, cut, silhouette, sleeve design, construction, fit, and material meaningfully between variants.
  * Avoid repeating the same overall garment design across variants.
  * Keep each design simple, believable, readable, and suitable for modular 2D animation.
  * Keep the clothing coherent with [DESKRIPSIKAN].
  * Do NOT mention or modify the character, head, face, eyes, hair, skin, body proportions, lower clothing, footwear, accessories, pose, expression, or movement.
  * Do NOT mention the environment, background, setting, lighting, weather, atmosphere, time, actions, personality, or story.
  * Avoid excessive folds, patterns, textures, or tiny decorative details unless relevant to [DESKRIPSIKAN].

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.


image_prompt: |
  TOP / SHIRT EXTRACTION ANALYSIS

  Use the attached reference image to analyze and extract the precise upper-body clothing and shirt details.

  Create **ONE concise visual description sentence** of the upper-body clothing for character replacement.

  Rules:
  * Focus **ONLY on the upper garments, shirts, jackets, sweaters, or top pieces**
  * Clearly specify colors, patterns, style, sleeves, collar, and fit
  * **DO NOT include character facial features, hair, or body shape**
  * **DO NOT include background, lighting, or environment**
  * Keep the text short, clean, and directly usable for the top replacement tool

  **Output ONE description sentence only.**

database:
  "Mine":
    - title: "Kaos Graphic"
      description: "A light dark crew-neck short-sleeve t-shirt with a relaxed fit featuring a cute emoji smiling face with sunglases on the front."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23F244BC"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Kaos Graphic</text></svg>'    
  "T-Shirt":
    - title: "Graphic Print T-Shirt"
      description: "Faded black graphic t-shirt with a large vintage motorcycle illustration."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Graphic</text></svg>'
    - title: "Typography Text Print Tee"
      description: "Vintage thrifted graphic t-shirt with bold “Cosmic Journey 1973” typography."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234b5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Typo</text></svg>'
    - title: "Logo Design Shirt"
      description: "Dark green polo shirt with a small embroidered company logo on the chest."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Logo</text></svg>'
    - title: "Illustration Art Tee"
      description: "Black graphic t-shirt with a bold eagle and flame illustration."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23991b1b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Illust</text></svg>'
    - title: "Vintage / Retro Design Tee"
      description: "Thrifted black t-shirt with a distressed 1980s-style racing graphic."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c2d12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Vintage</text></svg>'
    - title: "Band / Music Design Tee"
      description: "Faded black band t-shirt with a distressed heavy-metal graphic."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Band</text></svg>'
    - title: "Motorcycle / Automotive Tee"
      description: "Faded gray biker t-shirt with a motorcycle club emblem and distressed lettering."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Motor</text></svg>'
    - title: "Skull / Dark Design Tee"
      description: "Worn black biker t-shirt with a bold skull-and-flame graphic and distressed lettering."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Skull</text></svg>'
    - title: "Pattern / Pola Berulang Shirt"
      description: "Loose-fitting red-and-black plaid button-up shirt with a classic checked pattern."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%239f1239"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Pattern</text></svg>'
    - title: "Distressed / Worn Design Tee"
      description: "Worn gray t-shirt with a cracked retro graphic."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23475569"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Worn</text></svg>'

outputs:
  - JSON
---
Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new upper-body clothing based on:

[{humanInput}]

### ONLY CHANGE

Replace **ONLY the upper-body clothing** according to [{humanInput}].

The new clothing must fit the existing body naturally and accurately follow the requested **garment type, color, sleeves, collar, fit, material, pattern, and important visible details**.

### CHARACTER LOCK

Keep EVERYTHING ELSE EXACTLY UNCHANGED:

* character identity and age
* head, face, and facial features
* hairstyle and hair color
* skin tone
* body shape and proportions
* pose and body position
* 3/4 front view facing slightly right
* camera angle and perspective
* original lower-body clothing
* original footwear
* original accessories not belonging to the upper clothing
* art style and line quality

Do NOT redesign, resize, reposition, recolor, or modify any locked element.

### VISUAL STYLE

Match the existing character:

* simple 2D cartoon
* thick natural black outlines
* flat solid colors
* clean simple shapes
* minimal detail
* slightly handmade line quality
* animation-friendly design

### FINAL LOCK

Do NOT add props, extra characters, text, or unrelated elements.

The result must look like the **same original character with ONLY the upper-body clothing replaced**.

**ONLY CHANGE THE UPPER-BODY CLOTHING.**
