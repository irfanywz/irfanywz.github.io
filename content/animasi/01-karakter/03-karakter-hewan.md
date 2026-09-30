---
title: "Karakter Hewan"
slug: "karakter-hewan"
description: "Prompt builder untuk merancang karakter hewan kartun original baru"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A unique animal character."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT visual descriptions** for animal characters based on:

  [DESKRIPSIKAN_HEWANNYA]

  Each description must represent a **UNIQUE animal character variant**.

  Write each variant as **ONE concise sentence**, similar to:

  “A chubby brown bear with soft rounded ears, short limbs, and a gentle friendly expression.”

  ### VARIATION REQUIREMENTS

  Each animal must be clearly different from the others through a natural combination of:

  * species characteristics
  * age
  * body size
  * body shape
  * body proportions
  * fur, skin, feathers, or scales
  * color patterns
  * face shape
  * eye shape
  * ears, horns, beak, snout, tail, or other natural features
  * distinctive markings
  * overall silhouette

  Do NOT simply change the animal's color.

  Each variant must have a noticeably different overall visual identity.

  Make the animals feel like **different individual characters of the same animal concept**, rather than the same animal with minor modifications.

  Avoid repeating the same:

  * body shape
  * body proportions
  * face structure
  * eye design
  * fur/skin pattern
  * distinctive markings
  * natural features
  * overall silhouette

  ### RULES

  * Focus ONLY on the animal's physical appearance and natural features
  * Clearly identify the animal's species
  * Describe the body shape, proportions, face, eyes, fur/skin/feathers/scales, colors, and distinctive features
  * Let the animal species strongly influence its physical design
  * Keep anatomy appropriate to the animal
  * Age may naturally influence body size and proportions
  * Give every animal a distinctive and memorable appearance
  * Keep every animal visually coherent and believable within the same cartoon world
  * Mention only the most visually important characteristics
  * Keep descriptions short and directly usable for image generation

  ### DO NOT MENTION

  * location
  * environment
  * background
  * setting
  * atmosphere
  * scene
  * lighting
  * weather
  * time
  * events
  * actions
  * poses
  * movements
  * backstory
  * lore
  * story

  ### OUTPUT REQUIREMENTS

  Generate **EXACTLY [JUMLAH_VARIANT] variants**.

  The number of descriptions MUST match **[JUMLAH_VARIANT] EXACTLY**.

  For example:

  * `[JUMLAH_VARIANT] = 5` → output exactly 5 descriptions
  * `[JUMLAH_VARIANT] = 8` → output exactly 8 descriptions
  * `[JUMLAH_VARIANT] = 10` → output exactly 10 descriptions
  * `[JUMLAH_VARIANT] = 15` → output exactly 15 descriptions

  Do NOT default to 8.
  Do NOT generate fewer variants.
  Do NOT generate more variants.

  ### OUTPUT FORMAT

  1. [One concise animal description]
  2. [One concise animal description]
  3. [One concise animal description]
     ...
     Continue numbering until exactly **[JUMLAH_VARIANT]** descriptions are completed.

  Each variant must be **ONE sentence only**.

  Do not add explanations.
  Do not add headings.
  Do not repeat descriptions.
  Do not combine multiple variants into one sentence.


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

Create a completely **NEW ANIMAL CHARACTER** based on this description:

<br>

[{humanInput}]

<br>

The new animal must have a unique species, body shape, proportions, silhouette, colors, markings, facial features, and identity. Do not copy, recolor, or slightly modify the original character.

Keep ONLY the visual art style of the reference:
* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* simple expressive facial features
* animation-friendly design

POSE:

Create the animal in a neutral **FRONT 3/4 VIEW**, facing slightly to the right.

Show the animal in a relaxed neutral standing or natural resting position appropriate to its species:
* full body clearly visible
* natural anatomy and proportions
* natural leg and body positioning
* head upright or naturally positioned
* facial features clearly visible
* neutral expression
* no action pose
* no exaggerated body movement

This image will be used as the **MASTER ANIMAL CHARACTER REFERENCE** for generating other poses later.

Therefore, prioritize:
* clear animal identity
* accurate species characteristics
* consistent body proportions
* clear body construction
* recognizable face
* distinctive markings and colors
* clear silhouette
* animation-friendly shapes
* clear eyes appropriate to the species
* natural animal anatomy

Do not add clothing, props, text, extra characters, or complex background unless specifically requested.

The final animal must look like a completely different animal character from the reference, while clearly belonging to the same cartoon animation style.

Full body, centered, clean simple background.