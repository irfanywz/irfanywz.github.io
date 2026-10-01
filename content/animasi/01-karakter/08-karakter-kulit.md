---
title: "Karakter Kulit"
slug: "karakter-kulit"
description: "Prompt builder untuk merancang variasi warna dan tone kulit animasi karakter kartun original"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "warm light beige skin tone"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for skin tones based on:

  **[DESKRIPSIKAN]**

  Each variant must represent a **clearly different skin tone and complexion**, with meaningful differences in shade depth and undertone.

  ### RULES

  * Focus ONLY on skin tone, complexion shade, and undertone.
  * Clearly describe the skin color, shade depth, and undertone.
  * Vary the shade meaningfully from light to deep when appropriate.
  * Use distinct undertones such as warm, cool, neutral, golden, olive, peach, or reddish when relevant.
  * Make every variant visually distinct and easy to recognize.
  * Do NOT create differences through minor wording changes or tiny shade adjustments.
  * Keep all skin tones natural, believable, and suitable for 2D character design.
  * Keep each variant consistent with [DESKRIPSIKAN].

  ### CHARACTER LOCK

  ONLY change the skin tone and complexion.

  Do NOT mention or modify:

  * face or facial features
  * head shape
  * hair or hair color
  * body shape or proportions
  * clothing or accessories
  * pose or expression

  ### EXCLUSIONS

  Do NOT mention location, environment, background, setting, atmosphere, lighting, weather, time, actions, personality, backstory, or story.

  ### OUTPUT

  Output exactly **[JUMLAH_VARIANT] numbered variants**, ONE concise sentence per variant, with no explanations, headings, or extra text.

image_prompt: |
  Create ONE short visual description of the character's skin tone using image reference

  If a reference image is provided, use it as the PRIMARY SKIN TONE REFERENCE. Carefully observe the character's visible skin shade and translate only the important skin tone traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Warm light beige skin tone with soft neutral undertones.”
  RULES:
  - Preserve the character's clearly visible skin color and complexion shade from the reference.
  - Prioritize distinctive visible skin traits: color shade, undertone (warm, cool, or neutral), and complexion depth.
  - Do not invent skin features or tones that are not visible or reasonably supported.
  - Do not describe the character's identity, face, hair, clothing, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's identity if the task is to create a new skin tone; use the reference only for skin visual guidance.
  - Keep the appearance believable and suitable for a stylized cartoon world.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual color features unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.
  
  [note]

database:
  "Example":
    - title: "Porcelain Fair"
      description: "pale porcelain fair skin tone with cool undertones"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23fdf4f8"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23db2777" font-size="12" font-family="sans-serif">Fair</text></svg>'

outputs:
  - JSON
---
Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new skin tone based on:

[{humanInput}]

### SKIN TONE CHANGE

Change **ONLY the skin tone**.

Apply the new skin tone consistently to **all visible skin areas**, including the face, neck, arms, hands, legs, and feet.

Preserve the original skin shading and natural tonal variation while adapting them to the new skin tone.

### CHARACTER LOCK

Keep everything else **EXACTLY UNCHANGED**, including:

* face shape and facial features
* eyes, eyebrows, and mouth
* hairstyle, hair shape, and hair color
* body shape, proportions, silhouette, age, and identity
* clothing and accessories
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

The result must look like the **same original character**, with the **ONLY visible change being the new skin tone** described in [{humanInput}].

**ONLY CHANGE THE SKIN TONE.**
