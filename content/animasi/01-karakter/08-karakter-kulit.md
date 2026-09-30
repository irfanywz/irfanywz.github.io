---
title: "Karakter Kulit"
slug: "karakter-kulit"
description: "Prompt builder untuk merancang variasi warna dan tone kulit animasi karakter kartun original"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "warm light beige skin tone"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for the character's skin tone based on:

  [DESKRIPSIKAN]

  Each variant must describe a **clearly different skin tone and complexion shade**, not merely small changes of the same color.

  Write each variant as **ONE concise sentence**, describing the skin color, shade, and undertone clearly.

  Rules:

  * Focus **ONLY on skin tone and complexion shade**
  * Clearly describe the skin color, depth of shade, and undertone
  * Create natural and believable skin-tone variations
  * Variants may range from very light to deep skin tones, with different undertones such as warm, cool, neutral, golden, olive, reddish, or peach
  * Avoid making variants different only by minor wording changes
  * Each variant should be visually distinct and easy to recognize

  **CHARACTER LOCK:**

  * DO NOT modify or mention facial features
  * DO NOT modify or mention face shape
  * DO NOT modify or mention hairstyle or hair color
  * DO NOT modify or mention body shape or proportions
  * DO NOT modify or mention clothing, accessories, pose, or expression
  * ONLY change the skin tone and complexion shade

  **DO NOT mention:**

  * location
  * environment
  * background
  * setting
  * atmosphere
  * lighting
  * weather
  * time
  * actions
  * poses
  * personality
  * backstory
  * story

  Keep every description **short and directly usable for image generation**.

  **OUTPUT RULES:**

  * Output EXACTLY **[JUMLAH_VARIANT] variants**
  * Number each variant
  * One sentence per variant
  * Do not output fewer or more variants
  * Do not default to any specific number
  * Do not add explanations, headings, or commentary


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

SKIN TONE REPLACEMENT

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new skin tone.

**NEW SKIN TONE:**

<br>

[{humanInput}]

<br>

**CHARACTER LOCK — DO NOT CHANGE:**

* exact same face
* exact same facial features
* exact same face shape
* exact same hairstyle
* exact same hair shape
* exact same hair color
* exact same eyes
* exact same eyebrows
* exact same mouth
* exact same body shape
* exact same body proportions
* exact same age and identity
* exact same pose
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

**ONLY CHANGE THE SKIN TONE.**

Apply the new skin tone consistently to all visible skin areas, including the face, neck, arms, hands, legs, and feet.

Preserve the original facial features, body proportions, silhouette, and character identity exactly.

Keep the same visual style:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

Do not change the face.
Do not change the hairstyle.
Do not change the eyes.
Do not change the body.
Do not change the outfit.
Do not change the pose.
Do not change the camera angle.

**The ONLY intended change is the skin tone.**