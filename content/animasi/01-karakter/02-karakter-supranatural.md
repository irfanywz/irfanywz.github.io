---
title: "Karakter Supernatural"
slug: "karakter-supranatural"
description: "Prompt builder untuk merancang karakter supernatural original baru"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A unique supernatural character."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT visual descriptions** for supernatural characters based on:

  [TARGET_KARAKTER]

  Each description must represent a **UNIQUE supernatural character variant**.

  Write each variant as **ONE concise sentence**, similar to:

  “A sinister female ghost with a slender body, pale reddish skin, long messy black hair, sharp dark eyes, and elongated fingers.”

  ### VARIATION REQUIREMENTS

  Each supernatural character must be clearly different from the others through a natural combination of:

  * supernatural form
  * body shape
  * body proportions
  * face shape
  * skin or surface appearance
  * hairstyle or hair characteristics
  * eye shape and appearance
  * distinctive physical features
  * age
  * gender
  * clothing when visually relevant
  * unique supernatural characteristics
  * overall silhouette

  Do **NOT** simply change the color.

  Do **NOT** create the same supernatural character with only minor changes.

  Each variant must have a noticeably different overall visual identity while still matching the same supernatural character concept.

  Avoid repeating the same:

  * body shape
  * face structure
  * hairstyle
  * eye design
  * distinctive features
  * clothing combination
  * supernatural traits
  * overall silhouette

  ### SUPERNATURAL DESIGN RULES

  * Clearly identify the supernatural being
  * Let the supernatural type strongly influence each design
  * Let age and gender influence appearance when visually appropriate
  * Personality may influence facial expression or visual impression, but do not explain the personality
  * Make the supernatural nature come from the actual physical design
  * Keep anatomy appropriate to the supernatural being
  * Clothing only when visually important
  * Allow creative variation in anatomy and physical features when appropriate to the supernatural type
  * Make every variant distinctive and memorable
  * Keep every variant visually coherent within the same supernatural cartoon world
  * Keep descriptions short and directly usable for image generation

  ### STRICT CONTENT LIMITS

  Focus **ONLY on physical appearance**.

  DO NOT mention:

  * location
  * environment
  * background
  * setting
  * atmosphere
  * lighting
  * weather
  * time
  * events
  * actions
  * poses
  * movements
  * powers
  * abilities
  * backstory
  * lore
  * story

  DO NOT add environmental elements such as:

  * houses
  * forests
  * graves
  * roads
  * trees
  * fire
  * fog
  * darkness

  Avoid overly detailed descriptions.

  ### OUTPUT FORMAT

  1. [One concise supernatural character description]
  2. [One concise supernatural character description]
  3. [One concise supernatural character description]
  4. [One concise supernatural character description]
  5. [One concise supernatural character description]
     ...continue until exactly **[JUMLAH_VARIANT]** variants are generated.

  Each variant must be **ONE sentence only**.

  Do not add explanations.
  Do not add headings.
  Do not repeat descriptions.
  Do not combine multiple variants into one sentence.

  Generate **exactly [JUMLAH_VARIANT] unique variants**.

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

Create a completely **NEW SUPERNATURAL CHARACTER** based on this description:


<br>

[{humanInput}]

<br>

The new character must have a unique supernatural appearance, body shape, silhouette, facial features, colors, distinctive traits, and identity. Do not copy, recolor, or slightly modify the original character.

Keep the **SAME VISUAL ART STYLE, DRAWING LANGUAGE, AND DESIGN APPROACH** of the reference:
- simple 2D cartoon
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal details
- slightly handmade line quality
- simple expressive facial features
- animation-friendly design
- same level of stylization and visual simplicity as the reference

Do not redesign or reinterpret the art style. **Match the reference's overall visual appearance as closely as possible while creating a completely different character.**

POSE:
Create the character in a neutral **FRONT 3/4 VIEW**, facing slightly to the right.

Show the character in a simple neutral pose appropriate to its form:
- complete character clearly visible
- relaxed neutral position
- clear readable silhouette
- natural-looking proportions for the creature
- neutral facial expression
- no action pose
- no exaggerated movement

This image will be used as the **MASTER CHARACTER REFERENCE** for generating other poses later.

Therefore, prioritize:
- strong character identity
- clear silhouette
- consistent proportions
- recognizable supernatural features
- clear facial design
- distinctive colors
- simple readable shapes
- animation-friendly construction
- visual consistency with the reference style

The supernatural nature must come from the **character's actual design**, not from adding random horror effects, excessive details, or complicated visual elements.

Do not add props, text, extra characters, dynamic movement, or complex background.

The final character must look like a **completely original supernatural being**, while feeling as if it was designed and illustrated by the **same artist using the same visual style and design language as the reference**.

Centered composition, clean simple background.