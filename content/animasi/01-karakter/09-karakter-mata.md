---
title: "Karakter Mata"
slug: "karakter-mata"
description: "Prompt builder untuk merancang variasi bentuk, gaya, dan ekspresi mata karakter kartun original"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Cartoon eyes with visible white sclera, clear dark pupils, and clean outlines."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for new eye designs based on:

  **[DESKRIPSIKAN]**

  Each variant must represent a **clearly different eye structure**, with meaningful differences in eye shape, eyelids, sclera visibility, pupil style, and overall silhouette.

  ### RULES

  * Focus ONLY on the eyes.
  * **ALWAYS include clearly visible white sclera in every variant.**
  * Clearly describe the overall eye shape and structure.
  * Clearly describe the pupil shape or style.
  * Vary eye shape, eyelid structure, sclera exposure, pupil style, proportions, and overall silhouette meaningfully.
  * Make every variant visually distinct; do NOT vary only eye color or expression.
  * Avoid repeating the same eye shape, eyelid structure, pupil style, or silhouette.
  * Mention iris shape, eyelashes, or other details only when relevant.
  * Keep designs natural, believable, simple, clean, readable, and suitable for 2D animation.
  * Avoid overly realistic or highly detailed eyes unless explicitly requested in [DESKRIPSIKAN].
  * Keep every design consistent with [DESKRIPSIKAN].

  ### CHARACTER LOCK

  ONLY change the eye design.

  Do NOT mention or modify:

  * character identity
  * face or head shape
  * eyebrows
  * nose
  * mouth or lips
  * hair or hairstyle
  * skin tone
  * body, clothing, accessories, pose, or background

  ### EXCLUSIONS

  Do NOT mention location, environment, setting, atmosphere, lighting, weather, time, actions, personality, backstory, or story.

  ### OUTPUT

  Output exactly **[JUMLAH_VARIANT] numbered variants**, ONE concise sentence per variant, with no explanations, headings, or extra text.

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
Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with new eyes based on:

[{humanInput}]

### EYE CHANGE

Change **ONLY the eyes** according to [{humanInput}].

Fit the new eyes naturally onto the existing face while preserving their original position, spacing, scale, proportions, and facial placement unless specifically changed by [{humanInput}].

### CHARACTER LOCK

Keep everything else **EXACTLY UNCHANGED**, including:

* face and head shape
* eyebrows
* mouth
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

The result must look like the **same original character**, with the **ONLY visible change being the new eyes** described in [{humanInput}].

**ONLY CHANGE THE EYES.**
