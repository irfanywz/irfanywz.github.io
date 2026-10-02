---
title: "Outfit Kepala"
slug: "outfit-kepala"
description: "Prompt builder untuk merancang, menambahkan, dan mengekstrak aksesori kepala atau topi pada karakter kartun secara presisi dan konsisten"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Classic black baseball cap worn forward"
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for new head accessories based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different head accessory design, not merely a color or tiny detail change.
  * Focus ONLY on the head accessory.
  * Describe the accessory type, shape, size, fit, structure, material, and colors when relevant.
  * Vary the accessory type, silhouette, size, construction, fit, and material meaningfully between variants.
  * Avoid repeating the same overall accessory design.
  * Keep each design simple, believable, recognizable, and suitable for modular 2D animation.
  * Keep the accessory coherent with [DESKRIPSIKAN] and naturally fitted to the character's head.
  * Do NOT mention or modify the character, face, facial features, hair, skin, body proportions, clothing, footwear, pose, expression, or movement.
  * Do NOT mention the environment, background, setting, lighting, weather, atmosphere, time, actions, personality, or story.
  * Avoid excessive details unless relevant to [DESKRIPSIKAN].

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.


image_prompt: |
  HEAD ACCESSORY EXTRACTION ANALYSIS

  Use the attached reference image to analyze and extract the precise head accessory, hat, or headwear details.

  Create **ONE concise visual description sentence** of the head accessory for character replacement.

  Rules:
  * Focus **ONLY on the head accessory, hat, ribbon, or headwear item**
  * Clearly specify colors, patterns, style, and fit
  * **DO NOT include character facial features or body shape**
  * **DO NOT include background, lighting, or environment**
  * Keep the text short, clean, and directly usable for the head accessory tool

  **Output ONE description sentence only.**

database:
  "Topi":
    - title: "Baseball Cap"
      description: "Classic fabric baseball cap worn forward with a curved brim."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230d9488"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Cap</text></svg>'
    - title: "Beanie (Kupluk)"
      description: "Cozy knitted winter beanie cap fitting snugly over the head."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230f766e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Beanie</text></svg>'
    - title: "Bucket Hat"
      description: "Casual fabric hat with a downward sloping, all-around brim."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2314b8a6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Bucket</text></svg>'
    - title: "Beret"
      description: "Soft, round, flat-crowned French-style wool cap worn slightly tilted."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23db2777"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Beret</text></svg>'

  "Topeng":
    - title: "Topeng Ski / Balaclava (Topeng Pencuri)"
      description: "Black fabric ski mask balaclava covering the entire head and face with cutouts for the eyes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">SkiMask</text></svg>'    
    - title: "Topeng Stylized (Gaya Sky / Fantasi)"
      description: "Mystical minimalist white artistic mask covering the upper face with glowing aesthetic markings."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c3aed"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Mask</text></svg>'
    - title: "Kitsune Mask (Topeng Rubah)"
      description: "Traditional Japanese stylized fox mask worn tilted on top of the head or over the face."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%239333ea"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Kitsune</text></svg>'
    - title: "Masker Medis / Kain"
      description: "Simple protective face mask worn covering the nose and mouth."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236d28d9"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">FaceMask</text></svg>'

  "Kacamata":
    - title: "Kacamata Hitam (Sunglasses)"
      description: "Stylish dark-tinted sunglasses resting on the face."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e293b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Shades</text></svg>'
    - title: "Kacamata Bulat (Round Glasses)"
      description: "Classic vintage thin-rimmed round optical glasses."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23334155"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Glasses</text></svg>'

  "Hiasan Rambut":
    - title: "Pita Rambut (Hair Bow)"
      description: "Large cute fabric hair bow ribbon attached neatly to the hairstyle."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23ec4899"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Bow</text></svg>'
    - title: "Headband (Bando)"
      description: "Simple minimalist fabric headband resting across the top of the hair."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23f43f5e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Band</text></svg>'
    - title: "Peci Hitam Tradisional"
      description: "Traditional formal black velvet peci cap worn on the head."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="12" font-family="sans-serif">Peci</text></svg>'

outputs: ["JSON"]
---

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with ONE new head accessory based on:

[[{humanInput}]]

### ONLY CHANGE

Add **ONLY the requested head accessory**.

The accessory must:

* accurately follow [[{humanInput}]]
* fit the existing head naturally
* maintain appropriate size, position, scale, and proportions
* integrate naturally with the existing hairstyle
* preserve visible hair unless naturally covered by the accessory

### CHARACTER LOCK

Keep EVERYTHING ELSE EXACTLY UNCHANGED:

* character identity and age
* head and face shape
* facial features
* hairstyle, hair shape, and hair color
* skin tone
* body shape and proportions
* outfit and footwear
* pose and body position
* 3/4 front view facing slightly right
* camera angle and perspective
* art style and line quality

Do NOT redesign, resize, recolor, reposition, or modify any locked element.

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

Do NOT add additional accessories, props, extra characters, text, or unrelated elements.

The result must look like the **same original character with ONLY the requested head accessory added**.

**ONLY ADD THE HEAD ACCESSORY.**