---
title: "Karakter Manusia"
slug: "karakter-manusia"
description: "Prompt builder untuk merancang karakter manusia original baru"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A young cheerful guy with short messy dark hair, wearing a casual orange hoodie and blue jeans."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for human characters based on:

  [DESKRIPSI_KARAKTER]

  Each variant must be a **clearly different individual character** with a distinct physical identity, outfit, and overall silhouette.

  ### RULES

  * Focus ONLY on physical appearance and clothing.
  * Vary meaningful combinations of age, gender, face shape, hairstyle, hair type, skin tone, body shape, clothing style, clothing colors, and distinctive facial features.
  * Do NOT create differences through clothing color alone or minor details.
  * Avoid repeating the same face structure, hairstyle, body shape, outfit combination, color combination, distinctive features, or overall silhouette.
  * Keep anatomy natural and appropriate for a stylized human cartoon character.
  * Make every character distinctive, memorable, believable, and coherent within the same cartoon world.
  * Mention only the most visually important characteristics.
  * Keep descriptions concise and directly usable for image generation.

  ### BAREFOOT LOCK

  Every character is **ALWAYS BAREFOOT**:

  * Both feet fully uncovered.
  * No shoes, sandals, slippers, socks, or any footwear.
  * Use simple, natural cartoon bare feet.
  * Footwear must NEVER be used as a variation.

  ### CHARACTER SCOPE

  Do NOT mention location, environment, background, setting, atmosphere, lighting, weather, time, events, actions, poses, movements, backstory, lore, or story.

  ### OUTPUT

  Output exactly **[JUMLAH_VARIANT] numbered variants**, matching the requested number exactly.

  Each variant must be **ONE concise sentence only**.

  Do NOT add headings, explanations, extra text, duplicate designs, or combine multiple variants into one sentence.

image_prompt: |
  Create **ONE short visual description** of the character using the provided image as the **PRIMARY VISUAL REFERENCE**.

  [ADDITIONAL_CONTEXT]

  ### RULES

  * Describe ONLY the character's visible physical appearance and clothing.
  * Prioritize: age, gender, Indonesian/local appearance, skin tone, face shape, hairstyle, hair color, body build, facial features, and **FULL OUTFIT**.
  * Describe the outfit in this order: **upper clothing → lower clothing → footwear → relevant accessories**.
  * **ALWAYS inspect and describe the lower body separately.** If pants, shorts, skirt, sarong, or another lower garment is visible, explicitly name it and describe its type, length, fit, and color when clear.
  * Never describe only the upper clothing when the lower clothing is visible.
  * Include footwear whenever visible; if the feet are clearly visible and barefoot, explicitly state **barefoot**.
  * Preserve clearly visible Indonesian/Southeast Asian characteristics when supported by the reference.
  * Use [ADDITIONAL_CONTEXT] to refine or clarify details when provided.
  * Describe clothing based on what is actually visible. Do NOT invent clothing that is hidden or cropped out.
  * If a body or clothing area is not visible, do NOT guess or fabricate its details.
  * Keep the character believable, natural, and suitable for everyday Indonesian life.
  * Avoid generic descriptions, exaggerated features, personality, backstory, biography, pose, background, camera angle, and art style.
  * If creating a new character, use the reference only as visual guidance and do NOT copy its identity.
  * Write in simple, natural English.

  ### OUTFIT COMPLETENESS LOCK

  The final sentence must include **every clearly visible clothing category**:
  **upper garment + lower garment + footwear + relevant accessories**.

  Never omit a clearly visible lower garment.

  ### OUTPUT

  Write **EXACTLY ONE concise sentence** describing the character.

  Do NOT use bullet points, headings, explanations, or multiple sentences.


database:
  "#Favorite":

    - title: "Tahanan"
      description: "A lean, mature male prisoner with a rectangular face, curly shoulder-length hair, a thin goatee, and deep brown skin, wearing a bright orange long-sleeve jumpsuit with a collared neck, a front zipper, black \"TAHANAN PULICI\" text printed on the left chest, and completely bare feet."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236C8C1E"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Tahanan</text></svg>' 
         
    - title: "Polisi"
      description: "A lean, mature male Indonesian police officer with a rectangular face, short curly black hair, a thin mustache, and deep brown skin, wearing a short-sleeve grey tactical uniform button-down shirt with shoulder insignia and dual chest pockets, a black tactical belt, dark trousers, and completely bare feet."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23B69624"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Polisi</text></svg>'


outputs: ["JSON"]
---
Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a **COMPLETELY NEW ORIGINAL HUMAN CHARACTER** based on:
  
[{humanInput}]

The new character must have its own **face, hairstyle, body shape, proportions, silhouette, outfit, colors, and identity**. Do NOT copy, recolor, or slightly modify the reference character.

### VISUAL STYLE

Match ONLY the reference's visual language:

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

* Full body visible from head to feet.
* Standing upright in a relaxed neutral pose.
* Arms naturally at the sides with hands clearly visible.
* Legs in a natural standing position.
* Head upright with a neutral expression.
* Clear readable silhouette.
* No action pose or exaggerated movement.

### MASTER CHARACTER LOCK

Design the character as a **MASTER CHARACTER REFERENCE** for future poses and animation.

Prioritize:

* clear character identity
* consistent body proportions
* recognizable face and hairstyle
* clear body construction
* clean outfit design
* distinctive silhouette
* simple animation-friendly shapes
* clearly visible white sclera

### BAREFOOT LOCK

The character is **ALWAYS BAREFOOT**:

* Both feet fully uncovered.
* No shoes, sandals, slippers, socks, or footwear.
* Simple, natural cartoon bare feet.

### FINAL RULES

* Do NOT copy, recolor, or closely modify the reference character.
* Do NOT add props, text, extra characters, dynamic movement, or unnecessary background elements.
* Keep the background clean and simple.
* Preserve the new character's design consistently for future pose variations.

**Output ONLY the new human character.**
