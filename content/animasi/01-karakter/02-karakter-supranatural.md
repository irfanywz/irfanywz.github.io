---
title: "Karakter Supernatural"
slug: "karakter-supranatural"
description: "Prompt builder untuk merancang karakter supernatural original baru"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A unique supernatural character."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for supernatural characters based on:

  [TARGET_KARAKTER]

  Each variant must be a **clearly different individual design** of the same supernatural character concept, with a distinct physical identity and silhouette.

  ### RULES

  * Focus ONLY on physical appearance and supernatural physical traits.
  * Clearly identify the supernatural being.
  * Vary meaningful combinations of supernatural form, body shape, proportions, age, gender, face, eyes, skin/surface, hair, clothing when relevant, distinctive features, and overall silhouette.
  * Let the supernatural type strongly influence the physical design.
  * Make the supernatural nature visually apparent through anatomy and physical features.
  * Allow species-appropriate supernatural anatomy and unusual physical traits when relevant.
  * Do NOT create differences through color alone or minor details.
  * Avoid repeating the same body shape, face structure, hairstyle, eye design, clothing combination, supernatural traits, or silhouette.
  * Make every variant distinctive, memorable, believable within the same supernatural cartoon world, and suitable for animation.
  * Keep descriptions concise and directly usable for image generation.

  ### CONTENT LOCK

  Do NOT mention location, environment, background, setting, atmosphere, lighting, weather, time, events, actions, poses, movements, powers, abilities, backstory, lore, or story.

  Do NOT add environmental elements such as houses, forests, graves, roads, trees, fire, fog, or darkness.

  ### OUTPUT

  Output exactly **[JUMLAH_VARIANT] numbered variants**, matching the requested number exactly.

  Each variant must be **ONE concise sentence only**.

  Do NOT add headings, explanations, extra text, duplicate designs, or combine multiple variants into one sentence.


image_prompt: |
  Create ONE short visual description of the supernatural character using image reference

  If a reference image is provided, use it as the PRIMARY VISUAL REFERENCE. Carefully observe the character's visible appearance and translate only the important visual traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “A sinister female ghost with a slender body, pale reddish skin, long messy black hair, sharp dark eyes, and a disturbing expression.”
  RULES:
  - Preserve the character's clearly visible supernatural species and appearance from the reference.
  - Prioritize distinctive visible traits: supernatural type, body shape, proportions, skin/surface color, hair, facial features, and unique markings.
  - Mention body build only when visually relevant.
  - Do not invent physical traits that are not visible or reasonably supported.
  - Do not describe the character's pose, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's identity if the task is to create a new character; use the reference only for visual guidance.
  - Keep the appearance believable and suitable for a stylized cartoon world.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual physical features unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.
  
  [ANOTHER_NOTE]

database:
  "Example":
    - title: "Floating Spirit"
      description: "A floating eerie spirit with a glowing wispy body, pale cyan skin, hollow dark eye sockets, and tattered ghostly edges."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Spirit</text></svg>'

outputs:
  - JSON
---
Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a **COMPLETELY NEW ORIGINAL SUPERNATURAL CHARACTER** based on:

[{humanInput}]

The new character must have its own **supernatural form, body shape, proportions, silhouette, colors, facial features, distinctive traits, and identity**. Do NOT copy, recolor, or slightly modify the reference character.

### VISUAL STYLE

Match ONLY the reference's visual language and design approach:

* simple 2D cartoon
* thick natural black outlines
* flat solid colors
* clean simple shapes
* minimal detail
* slightly handmade line quality
* simple expressive facial features
* animation-friendly construction
* consistent stylization and visual simplicity

Do NOT copy any character-specific design elements from the reference.

### POSE & VIEW

Show the character in a neutral **FRONT 3/4 VIEW**, facing slightly right.

* Full character clearly visible and centered.
* Relaxed neutral pose appropriate to its supernatural form.
* Natural or creature-appropriate proportions.
* Clear readable silhouette.
* Neutral facial expression.
* No action pose, dynamic movement, or exaggerated gesture.

### MASTER CHARACTER LOCK

Design the character as a **MASTER CHARACTER REFERENCE** for future poses and animation.

Prioritize:

* strong character identity
* recognizable supernatural features
* clear facial design
* consistent proportions
* distinctive silhouette
* distinctive colors and markings
* simple readable shapes
* animation-friendly construction
* consistent visual language with the reference

The supernatural nature must come from the **actual character design**, not random horror effects, excessive details, or complicated elements.

### FINAL RULES

* Do NOT copy, recolor, or closely modify the reference character.
* Do NOT add props, text, extra characters, complex effects, or unnecessary background elements.
* Keep the background clean and simple.
* Preserve the new character's design consistently for future pose variations.

**Output ONLY the new supernatural character.**
