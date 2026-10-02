---
title: "Karakter Mulut"
slug: "karakter-mulut"
description: "Prompt builder untuk merancang variasi bentuk fisik, garis, struktur bibir, dan gaya estetika mulut karakter kartun original"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A full lush plump mouth with thick prominent lips and soft natural shape."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for new mouth designs based on:

  **[DESKRIPSIKAN]**

  Each variant must represent a **clearly different mouth structure**, with meaningful differences in lip shape, thickness, volume, width, curvature, contours, and overall silhouette.

  ### RULES

  * Focus ONLY on the physical mouth structure and lips.
  * Describe the upper and lower lip when relevant.
  * Vary lip thickness, fullness, width, curvature, cupid's bow, contours, and overall silhouette meaningfully.
  * Make every variant visually distinct; do NOT vary only color, expression, or tiny details.
  * Avoid repeating the same mouth shape, proportions, thickness, volume, or contour.
  * Keep designs natural, believable, simple, clean, readable, and suitable for 2D animation.
  * Avoid unnecessary teeth, tongue, lipstick, gloss, lip balm, or other details unless explicitly requested in [DESKRIPSIKAN].
  * Keep the design consistent with the simple 2D cartoon style and [DESKRIPSIKAN].

  ### CHARACTER LOCK

  ONLY change the mouth design.

  Do NOT mention or modify:

  * character identity
  * face or head shape
  * eyes
  * eyebrows
  * nose
  * hair or hairstyle
  * skin tone
  * body, clothing, accessories, pose, or background

  ### EXCLUSIONS

  Do NOT mention location, environment, setting, atmosphere, lighting, weather, time, actions, personality, backstory, or story.

  ### OUTPUT

  Output exactly **[JUMLAH_VARIANT] numbered variants**, ONE concise sentence per variant, with no explanations, headings, or extra t&#x65;**_]()**

image_prompt: |
  Create ONE short visual description of the character's new mouth using image reference

  If a reference image is provided, use it as the PRIMARY MOUTH STYLE REFERENCE. Carefully observe the character's visible mouth structure, lip thickness, contour style, and makeup or line definition to translate only the important anatomical and structural traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “A full lush plump mouth with thick prominent lips and soft natural shape.”
  RULES:
  - Preserve the character's clearly visible mouth design, lip volume, thickness, and structural style traits from the reference.
  - Prioritize distinctive physical mouth traits: lip thickness, fullness, protrusion, and contour lines.
  - Do not invent mouth features or styles that are not visible or reasonably supported.
  - Do not describe the character's exact identity, specific facial features, outfit, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's exact identity if the task is to create a new mouth; use the reference only for mouth style guidance.
  - Keep the appearance believable and suitable for a stylized cartoon world.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual structural features unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.
  
  [note]

database:
  "Bentuk & Volume Bibir (Lips Structure)":
    - title: "Bibir Tebal / Dower (Plump & Full)"
      description: "A prominent full lush plump mouth with thick heavy lips and a soft protruding shape."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23831843"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fbcfe8" font-size="11" font-family="sans-serif">Bibir Tebal</text></svg>'
    - title: "Bibir Tipis Garis (Thin & Minimal)"
      description: "A delicate thin minimal mouth line with subtle narrow lips and clean simple structure."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="11" font-family="sans-serif">Bibir Tipis</text></svg>'
    - title: "Bibir Atas Tebal (Top Heavy Lips)"
      description: "A distinctive mouth shape with a thicker upper lip and a normal lower lip contour."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23450a0a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fca5a5" font-size="10" font-family="sans-serif">Bibir Atas Tebal</text></svg>'
    - title: "Bibir Bawah Tebal (Pouty Bottom Lip)"
      description: "A cartoon mouth featuring an exaggerated heavy bottom lip and softer upper contour."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23581c87"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23f3e8ff" font-size="10" font-family="sans-serif">Bawah Tebal</text></svg>'
  "Gaya & Estetika (Style & Details)":
    - title: "Bermain Lipstik (Bold Lipstick)"
      description: "A well-defined cartoon mouth accented with vibrant solid-colored lipstick and clean edges."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%239f1239"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffe4e6" font-size="11" font-family="sans-serif">Berlipstik</text></svg>'
    - title: "Mulut Mancung / Menonjol (Protruding Muzzle)"
      description: "A slightly protruding curved muzzle mouth structure typical of stylized cartoon characters."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23064e3b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236ee7b7" font-size="10" font-family="sans-serif">Mancung</text></svg>'
    - title: "Garis Klasik Retro (Classic Line)"
      description: "A classic rubberhose style simple curved stroke mouth with bold thick outlines."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23422006"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="11" font-family="sans-serif">Garis Retro</text></svg>'
    - title: "Lebar & Ekspansif (Wide Mouth)"
      description: "An extra wide horizontal cartoon mouth stretching gracefully across the lower face."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%233730a3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c7d2fe" font-size="11" font-family="sans-serif">Mulut Lebar</text></svg>'

outputs: ["JSON"]
---
Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new mouth based on:

[{humanInput}]

### MOUTH CHANGE

Change **ONLY the mouth structure, shape, and style** according to [{humanInput}].

Fit the new mouth naturally onto the existing face while preserving its original position, scale, proportions, and facial placement unless specifically changed by [{humanInput}].

### CHARACTER LOCK

Keep everything else **EXACTLY UNCHANGED**, including:

* face shape
* eyes and eyebrows
* hairstyle, hair shape, and hair color
* skin tone
* body shape and proportions
* age and identity
* pose
* camera angle and perspective
* 3/4 front view facing slightly right
* art style and line quality

Do NOT redesign, reposition, resize, or modify any locked element.

### VISUAL STYLE

Match the existing character's visual style:

* simple 2D cartoon
* clean simple shapes
* solid colors
* natural black outlines
* minimal detail
* slightly handmade line quality
* animation-friendly design

### FINAL LOCK

The result must look like the **same original character**, with the **ONLY visible change being the new mouth** described in [{humanInput}].

**ONLY CHANGE THE MOUTH.**
