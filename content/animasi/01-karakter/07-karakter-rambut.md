---
title: "Karakter Rambut"
slug: "karakter-rambut"
description: "Prompt builder untuk merancang variasi gaya rambut animasi karakter kartun original (pria dan wanita)"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "short messy black hair"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for hairstyles based on:

  **[DESKRIPSIKAN]**

  Each variant must represent a **clearly different hairstyle**, with meaningful differences in length, haircut, texture, volume, bangs, shape, and overall silhouette.

  ### RULES

  * Focus ONLY on hairstyle, haircut, hair shape, texture, and volume.
  * Clearly describe the overall silhouette and haircut.
  * Vary hair length, texture, volume, bangs, top, sides, back, and overall shape meaningfully.
  * Each variant must have a noticeably different hairstyle, not merely a color or minor detail change.
  * Avoid repeating the same haircut, length, texture, bangs, volume, or silhouette.
  * Keep hairstyles natural, believable, coherent, distinctive, and suitable for 2D animation.
  * Describe bangs only when relevant.
  * Keep each description concise and directly usable for image generation.
  * Keep every hairstyle consistent with [DESKRIPSIKAN].

  ### CHARACTER LOCK

  ONLY describe the hairstyle.

  Do NOT mention or modify:

  * face or facial features
  * head shape
  * skin tone
  * body
  * clothing
  * accessories
  * pose or expression

  ### EXCLUSIONS

  Do NOT mention location, environment, background, setting, atmosphere, lighting, weather, time, actions, movement, personality, backstory, lore, or story.

  ### OUTPUT

  Output exactly **[JUMLAH_VARIANT] numbered variants**, ONE concise sentence per variant.

  Do NOT default to any number, repeat hairstyles, combine multiple hairstyles into one variant, or add explanations, headings, or extra text.

image_prompt: |
  Create ONE short visual description of the character's hairstyle using image reference

  If a reference image is provided, use it as the PRIMARY HAIRSTYLE REFERENCE. Carefully observe the character's visible hairstyle and translate only the important hair traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Short messy black hair with textured bangs and natural volume.”
  RULES:
  - Preserve the character's clearly visible hair length, cut style, texture, and color from the reference.
  - Prioritize distinctive visible hair traits: hair cut style, bangs, hair texture, and volume.
  - Do not invent hair features or styles that are not visible or reasonably supported.
  - Do not describe the character's identity, face, skin tone, clothing, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's identity if the task is to create a new hairstyle; use the reference only for hair visual guidance.
  - Keep the appearance believable and suitable for a stylized cartoon world.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual hair features unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.
  
  [note]

database:
  "Pria (Male)":
    - title: "Short Messy Black"
      description: "short messy black hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Curly Afro Black"
      description: "curly afro black hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Bald Clean Shaved"
      description: "bald clean shaved head"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Neat Side-Parted"
      description: "neat side-parted brown hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Spiky Anime Style"
      description: "spiky anime style dark hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Burst Fade Mohawk"
      description: "burst fade modern mohawk hairstyle"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Edgar Cut Fringe"
      description: "edgar cut textured fringe hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Low Fade Slicked"
      description: "low fade slicked back hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "French Crop"
      description: "french crop textured fringe hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Undercut Pompadour"
      description: "undercut pompadour hairstyle"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
  "Wanita (Female)":
    - title: "Long Straight Bangs"
      description: "long straight black hair with bangs"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "High Ponytail Blonde"
      description: "high ponytail blonde hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Short Bob Brown"
      description: "short bob brown haircut"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Wavy Shoulder-Length"
      description: "wavy shoulder-length dark hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Twin Tails Cute"
      description: "twin tails cute style hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Butterfly Layers"
      description: "butterfly layers haircut with face-framing"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Hush Cut Medium"
      description: "hush cut textured medium layered hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Curtain Bangs Layered"
      description: "curtain bangs layered long hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Pixie Cut Textured"
      description: "pixie cut short textured hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Korean Choppy Bob"
      description: "korean choppy bob hairstyle"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Medium to Long Wolf Cut"
      description: "medium to long wolf cut hairstyle"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'

outputs:
  - JSON
---
Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new hairstyle based on:

[{humanInput}]

### HAIR CHANGE

Change **ONLY the hairstyle** according to [{humanInput}].

Fit the new hairstyle naturally to the existing head shape while preserving the character's facial placement, proportions, and identity.

Do NOT change the head shape to accommodate the new hairstyle.

### CHARACTER LOCK

Keep everything else **EXACTLY UNCHANGED**, including:

* face shape and facial features
* eyes, eyebrows, and mouth
* skin tone
* body shape and proportions
* age and identity
* clothing and accessories
* pose
* camera angle and perspective
* 3/4 front view facing slightly right
* art style and line quality

Do NOT redesign, reposition, resize, or modify any locked element.

Do NOT add hair accessories unless explicitly requested in [{humanInput}].

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

The result must look like the **same original character**, with the **ONLY visible change being the new hairstyle** described in [{humanInput}].

**ONLY CHANGE THE HAIRSTYLE.**
