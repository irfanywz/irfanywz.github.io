---
title: "Karakter Manusia"
slug: "karakter-manusia"
description: "Prompt builder untuk merancang karakter manusia original baru"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A young cheerful guy with short messy dark hair, wearing a casual orange hoodie and blue jeans."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT visual descriptions** for human characters based on:

  [DESKRIPSI_KARAKTER]

  Each description must represent a **UNIQUE character variant**.

  Write each variant as **ONE concise sentence**, similar to:

  “A young cheerful guy with short messy dark hair, wearing a casual orange hoodie and blue jeans.”

  ### VARIATION REQUIREMENTS

  Each character must be clearly different from the others through a natural combination of:

  * age
  * gender
  * face shape
  * hairstyle
  * hair type
  * skin tone
  * body shape
  * clothing style
  * clothing colors
  * distinctive facial features

  Do NOT simply change the clothing color.

  Each variant must have a noticeably different overall visual identity.

  Make the characters feel like different real people rather than the same character with minor modifications.

  Avoid repeating the same:

  * face structure
  * hairstyle
  * body shape
  * outfit combination
  * clothing color combination
  * distinctive facial features
  * overall silhouette

  ### FOOTWEAR LOCK — ALWAYS BAREFOOT

  Every character must ALWAYS be barefoot.

  * Both feet completely uncovered
  * No shoes
  * No sandals
  * No slippers
  * No socks
  * No footwear of any kind
  * Bare feet must have simple, natural cartoon anatomy
  * Footwear must NEVER be used as a character variation

  ### RULES

  * Focus ONLY on physical appearance and clothing
  * Clearly identify the character's general look and attire
  * Describe the face, hairstyle, body shape, outfit, and distinctive physical features
  * Keep anatomy appropriate to a stylized human cartoon character
  * Mention only the most visually important characteristics
  * Give every character a distinctive and memorable appearance
  * Keep every character visually coherent within the same cartoon world
  * Keep descriptions short and directly usable for image generation
  * Every character is assumed to be barefoot

  ### DO NOT MENTION

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

  1. [One concise character description]
  2. [One concise character description]
  3. [One concise character description]
     ...
     Continue numbering until exactly **[JUMLAH_VARIANT]** descriptions are completed.

  Each variant must be **ONE sentence only**.

  Do not add explanations.
  Do not add headings.
  Do not repeat descriptions.
  Do not combine multiple variants into one sentence.

image_prompt: |
  Create ONE short visual description of the character using image reference

  If a reference image is provided, use it as the PRIMARY VISUAL REFERENCE. Carefully observe the character's visible appearance and translate only the important visual traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “A 27-year-old Indonesian man with a sturdy stocky build, square face, short buzz-cut black hair, and a calm expression, wearing a dark gray polo shirt, cargo pants, and sandals.”
  RULES:
  - Preserve the character's clearly visible Indonesian/local appearance from the reference.
  - Describe natural Indonesian/Southeast Asian facial features and appearance when visually supported.
  - Prioritize distinctive visible traits: age, gender, skin tone, face shape, hairstyle, hair color, body build, and clothing.
  - Mention body build only when visually relevant.
  - Describe clothing based on what is actually visible or appropriate for the given occupation.
  - If AGE, GENDER, OCCUPATION, or other details are provided, use them to refine the description.
  - Do not invent physical traits that are not visible or reasonably supported.
  - Do not describe the character's pose, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's identity if the task is to create a new character; use the reference only for visual guidance.
  - Make the character clearly feel Indonesian/local, not generically Western.
  - Keep the appearance believable and suitable for everyday Indonesian life.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual physical features unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.

  [ADDITIONAL_CONTEXT]  

database:
  "Anak":
    - title: "Raka"
      description: "A 9-year-old Indonesian boy with a sharp playful face, short spiky black hair, and an active look, wearing a bright orange graphic t-shirt, comfortable shorts, and running sneakers."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23c2410c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Raka</text></svg>'
    - title: "Kirana"
      description: "A 12-year-old Indonesian girl with a bright smile, round bright eyes, long hair in a braided style, wearing a pastel green hoodie, pleated skirt, and casual sneakers."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2315803d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Kirana</text></svg>'
    - title: "Bimo"
      description: "A 10-year-old Indonesian boy with a chubby cheerful face, short neat black hair, wearing a navy blue scout-style shirt, dark trousers, and sturdy school shoes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Bimo</text></svg>'
    - title: "Alya"
      description: "A 11-year-old Indonesian girl with an expressive energetic face, short bob hair with neat bangs, wearing a cheerful purple t-shirt, denim overalls, and colorful slip-ons."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237e22ce"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Alya</text></svg>'

  "Muda":
    - title: "Dimas"
      description: "A 28-year-old Indonesian man with a creative hipster vibe, wavy medium hair, light stubble beard, wearing a flannel overshirt, plain white t-shirt, slim-fit jeans, and leather boots."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230f766e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Dimas</text></svg>'
    - title: "Maya"
      description: "A 26-year-old Indonesian woman with a modern professional style, shoulder-length sleek black hair, confident expression, wearing a stylish blazer, smart casual trousers, and loafers."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234338ca"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Maya</text></svg>'
    - title: "Rizky"
      description: "A 24-year-old Indonesian man with a sporty athletic build, short fade haircut, energetic look, wearing a minimalist sporty jacket, sweatpants, and stylish running shoes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b91c1c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Rizky</text></svg>'
    - title: "Siti"
      description: "A 25-year-old Indonesian woman with a calm artistic aura, long wavy hair tied back loosely, wearing an elegant pastel tunic, comfortable loose pants, and flat sandals."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23be185d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Siti</text></svg>'
    - title: "Reza"
      description: "A 27-year-old Indonesian man with a casual urban look, messy dark hair, subtle smiling expression, wearing a dark hoodie, tapered cargo pants, and skate shoes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23334155"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Reza</text></svg>'

  "Ibu & Bapak":
    - title: "Pak Slamet"
      description: "A 53-year-old Indonesian man with a kind grandfatherly face, neatly combed white-streaked hair, wearing a traditional batik shirt, dark formal trousers, and leather slip-ons."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23854d0e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Slamet</text></svg>'
    - title: "Bu Sri"
      description: "A 49-year-old Indonesian woman with a warm hospitable smile, tied-back dark hair with gentle gray streaks, wearing a floral patterned blouse, long skirt, and comfortable walking shoes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%239a3412"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Sri</text></svg>'
    - title: "Pak Joko"
      description: "A 56-year-old Indonesian man with a strong build, sharp friendly eyes, short graying hair, wearing a simple polo shirt, relaxed trousers, and classic everyday sandals."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e293b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Joko</text></svg>'
    - title: "Bu Ratna"
      description: "A 51-year-old Indonesian woman with a neat graceful appearance, short styled black hair, wearing a classic pastel blouse, elegant trousers, and low-heeled formal shoes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23047857"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Ratna</text></svg>'                     
outputs:
  - JSON
---

Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a completely **NEW HUMAN CHARACTER** based on this description:

<br>

[{humanInput}]

<br>

The new character must have a unique face, hairstyle, body shape, silhouette, outfit, colors, and identity. Do not copy, recolor, or slightly modify the original character.

Keep **ONLY the visual art style of the reference**:
- simple 2D cartoon
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal details
- slightly handmade line quality
- simple expressive facial features
- animation-friendly design

POSE:
Create the character in a neutral **FRONT 3/4 VIEW**, facing slightly to the right.

Show the character standing upright in a relaxed neutral pose:
- full body visible from head to feet
- arms hanging naturally at the sides
- hands clearly visible
- legs in a natural standing position
- head upright
- neutral facial expression
- no action pose
- no exaggerated body movement

This image will be used as the **MASTER CHARACTER REFERENCE** for generating other poses later.

Therefore, prioritize:
- clear character identity
- consistent proportions
- clear body construction
- recognizable face
- recognizable hairstyle
- clean outfit design
- clear silhouette
- animation-friendly shapes
- the eyes are rendered with a clear white sclera

Do not add props, text, extra characters, dynamic movement, or complex background.

The final character must look like a completely different person from the reference, while clearly belonging to the same cartoon animation style.

Full body, centered, clean simple background.