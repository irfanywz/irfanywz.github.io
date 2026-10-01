---
title: "Karakter Hewan"
slug: "karakter-hewan"
description: "Prompt builder untuk merancang karakter hewan kartun original baru"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A unique animal character."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for animal characters based on:

  [DESKRIPSIKAN_HEWANNYA]

  Each variant must be a **clearly different individual character of the same animal concept**, with a distinct body shape, silhouette, facial structure, and natural features.

  ### RULES

  * Focus ONLY on physical appearance and natural features.
  * Clearly identify the animal species.
  * Vary meaningful combinations of species traits, age, size, body proportions, body shape, face, eyes, fur/skin/feathers/scales, color patterns, and distinctive natural features.
  * Vary features such as ears, horns, beak, snout, tail, markings, or other species-specific traits when relevant.
  * Do NOT create differences through color alone or minor details.
  * Avoid repeating the same body shape, proportions, face structure, eye design, patterns, markings, natural features, or overall silhouette.
  * Keep anatomy appropriate to the species and age.
  * Make every variant visually distinctive, memorable, believable, and coherent within the same cartoon world.
  * Mention only the most visually important characteristics.
  * Keep descriptions concise and directly usable for image generation.

  ### CHARACTER SCOPE

  Do NOT mention or modify any location, environment, background, setting, atmosphere, lighting, weather, time, action, pose, movement, props, backstory, lore, or story.

  ### OUTPUT

  Output exactly **[JUMLAH_VARIANT] numbered variants**, matching the requested number exactly.

  Each variant must be **ONE concise sentence only**.

  Do NOT add headings, explanations, extra text, duplicate designs, or combine multiple variants into one sentence.



image_prompt: |
  Create ONE short visual description of the animal using image reference

  If a reference image is provided, use it as the PRIMARY VISUAL REFERENCE. Carefully observe the animal's visible appearance and translate only the important visual traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “A chubby brown bear with soft rounded ears, short limbs, and a gentle friendly expression.”
  RULES:
  - Preserve the animal's clearly visible species characteristics and appearance from the reference.
  - Prioritize distinctive visible traits: species, body shape, proportions, fur/skin color, markings, facial features, and build.
  - Mention body build only when visually relevant.
  - Do not invent physical traits that are not visible or reasonably supported.
  - Do not describe the animal's pose, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference animal's identity if the task is to create a new character; use the reference only for visual guidance.
  - Keep the appearance believable and suitable for a stylized cartoon world.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual physical features unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.
  
  [NOTE]

database:
  "Example":
    - title: "Chubby Bear"
      description: "A chubby brown bear with soft rounded ears, short limbs, and a gentle friendly expression."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23451a03"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde68a" font-size="12" font-family="sans-serif">Bear</text></svg>'

outputs:
  - JSON
---
Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a **COMPLETELY NEW ORIGINAL ANIMAL CHARACTER** based on:

[{humanInput}]

The new animal must have its own **species, body shape, proportions, silhouette, colors, markings, facial features, and identity**. Do NOT copy, recolor, or slightly modify the reference character.

### VISUAL STYLE

Use ONLY the reference's general art style:

* simple 2D cartoon
* thick natural black outlines
* flat solid colors
* clean simple shapes
* minimal detail
* slightly handmade line quality
* simple expressive facial features
* animation-friendly design

### POSE & VIEW

Show the animal in a neutral **FRONT 3/4 VIEW**, facing slightly right.

* Full body visible and centered.
* Relaxed standing or natural resting position appropriate to the species.
* Natural anatomy, proportions, and body positioning.
* Head naturally positioned with clearly visible facial features.
* Neutral expression.
* No action, exaggerated movement, or dynamic pose.

### MASTER CHARACTER LOCK

Design the animal as a **MASTER CHARACTER REFERENCE** for future poses and animation.

Prioritize:

* clear species identity
* recognizable face and natural features
* consistent body proportions
* distinctive markings and colors
* strong readable silhouette
* clear body construction
* species-appropriate anatomy
* simple animation-friendly shapes

### FINAL RULES

* Do NOT copy any character-specific features from the reference.
* Do NOT add clothing, props, text, extra characters, or unnecessary background elements.
* Keep the background clean and simple.
* Preserve the new animal's design consistently.

**Output ONLY the new animal character.**
