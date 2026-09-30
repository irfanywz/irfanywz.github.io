---
title: "Karakter Mata"
slug: "karakter-mata"
description: "Prompt builder untuk merancang variasi bentuk, gaya, dan ekspresi mata karakter kartun original"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Cartoon eyes with visible white sclera, clear dark pupils, and clean outlines."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for the character's eyes based on:

  [DESKRIPSIKAN]

  Each variant must describe a **clearly different eye design**, with noticeable differences in eye shape, eyelid structure, sclera visibility, pupil style, and visual characteristics.

  Write each variant as **ONE concise sentence**, describing the eye shape, visible white sclera, pupil style, and important eye details clearly.

  Rules:

  * Focus **ONLY on the eyes**
  * Clearly describe the eye shape and overall eye structure
  * **ALWAYS include clearly visible white sclera**
  * Clearly describe the pupil shape or style
  * Describe eyelids, iris shape, eyelashes, or other eye details only when relevant
  * Create natural, believable, and animation-friendly eye designs
  * Make each variant visually distinct
  * Do NOT make variants different only by eye color
  * Do NOT make variants different only by expression
  * Avoid repeating the same eye shape, eyelid structure, pupil style, or overall silhouette

  **CHARACTER LOCK:**

  * DO NOT modify or mention character identity
  * DO NOT modify or mention face shape
  * DO NOT modify or mention head shape
  * DO NOT modify or mention nose
  * DO NOT modify or mention eyebrows
  * DO NOT modify or mention mouth or lips
  * DO NOT modify or mention hairstyle or hair
  * DO NOT modify or mention skin tone
  * DO NOT modify or mention body, clothing, accessories, pose, or background
  * ONLY change the eye design

  **EYE STYLE:**

  * Keep the eyes consistent with the provided target description
  * Maintain clearly visible white sclera in every variant
  * Keep the design simple, clean, readable, and suitable for 2D animation
  * Avoid overly realistic or highly detailed eyes unless specifically requested

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
  Create ONE short visual description of the character's new eyes using image reference

  If a reference image is provided, use it as the PRIMARY EYE STYLE REFERENCE. Carefully observe the character's visible eye shape, white sclera, pupil design, iris color, and expression style to translate only the important eye traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Cartoon eyes with visible white sclera, clear dark pupils, and clean outlines.”
  RULES:
  - Preserve the character's clearly visible eye design, shape, and style traits from the reference, ensuring the white sclera is explicitly defined.
  - Prioritize distinctive visible eye traits: shape, white sclera, and pupil layout.
  - Do not invent eye features or styles that are not visible or reasonably supported.
  - Do not describe the character's exact identity, specific facial features, outfit, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's exact identity if the task is to create new eyes; use the reference only for eye style guidance.
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
  "Example":
    - title: "Pria Tegas (Confident)"
      description: "Confident male cartoon eyes with visible white sclera, sharp upper eyelids, and focused dark pupils."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="11" font-family="sans-serif">Pria Tegas</text></svg>'

outputs:
  - JSON
---

EYE REPLACEMENT

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT CHARACTER** with new eyes.

**NEW EYES:**

<br>

[{humanInput}]

<br>

**CHARACTER LOCK — DO NOT CHANGE:**

* exact same face
* exact same face shape
* exact same hairstyle
* exact same hair shape
* exact same hair color
* exact same skin tone
* exact same eyebrows
* exact same mouth
* exact same body shape
* exact same body proportions
* exact same age and identity
* exact same pose
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

ONLY CHANGE THE EYES.

The new eyes must naturally fit the existing face and maintain the original eye position, spacing, scale, and facial proportions unless specifically changed in [NEW EYES].

Keep the same visual style:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

Do not change the face shape.
Do not change the hairstyle.
Do not change the eyebrows.
Do not change the mouth.
Do not change the skin tone.
Do not change the body.
Do not change the pose.
Do not change the camera angle.

The ONLY intended change is the eyes.