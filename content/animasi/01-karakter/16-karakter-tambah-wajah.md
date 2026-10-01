---
title: "Karakter Tambah Wajah"
slug: "karakter-tambah-wajah"
description: "Prompt builder untuk merancang dan menambahkan wajah unik, ekspresif, serta detail khas pada karakter kartun original yang berwajah kosong (faceless)"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "sharp fierce male face with narrow eyes and thick eyebrows"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for new facial designs based on:

  [DESKRIPSIKAN]

  Each variant must describe a **clearly different face design**, with meaningful changes to facial features, proportions, expression, and distinctive facial traits.

  ### RULES

  * Focus ONLY on the face, facial features, expression, and visible facial marks.
  * Describe the eyes, eyebrows, nose, mouth, and other relevant facial features.
  * Vary the overall facial structure, feature shapes, proportions, and distinctive traits meaningfully.
  * Use traits such as freckles, moles, scars, wrinkles, dimples, facial hair, or other visible marks only when relevant.
  * Each variant must remain natural, believable, simple, readable, memorable, and suitable for 2D animation.
  * Do NOT create differences based only on expression or a small facial mark.
  * Avoid repeating the same eye, eyebrow, nose, mouth, facial proportions, or distinctive traits between variants.
  * Keep the facial design consistent with [DESKRIPSIKAN].

  ### CHARACTER LOCK

  ONLY change the facial design.

  Do NOT mention or modify:

  * head shape
  * hair or hairstyle
  * hair color
  * body shape or proportions
  * clothing
  * accessories
  * pose

  ### EXCLUSIONS

  Do NOT mention location, environment, background, setting, atmosphere, lighting, weather, time, actions, personality, backstory, or story.

  ### OUTPUT

  Output exactly **[JUMLAH_VARIANT] numbered variants**, ONE concise sentence per variant, with no explanations, headings, or extra text.

image_prompt: |
  Create ONE short visual description of the character's new face using image reference

  If a reference image is provided, use it as the PRIMARY FACE REFERENCE. Carefully observe the character's visible facial features, expression, and structure to translate only the important face traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “A sharp fierce male face with narrow eyes and thick eyebrows.”
  RULES:
  - Preserve the character's clearly visible facial design, structure, and expression traits from the reference.
  - Prioritize distinctive visible facial traits: eyes, eyebrows, nose, mouth, and marks.
  - Do not invent facial features that are not visible or reasonably supported.
  - Do not describe the character's exact identity, outfit, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's exact identity if the task is to create a new face; use the reference only for face visual guidance.
  - Keep the appearance believable and suitable for a stylized cartoon world.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual facial features unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.
  
  [note]

database:
  "Pria":
    - title: "Tegas & Garang (Sharp Fierce)"
      description: "A sharp fierce male face with narrow eyes, strong jawline, and thick eyebrows."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="11" font-family="sans-serif">Fierce Male</text></svg>'
    - title: "Santai & Tenang (Calm Chill)"
      description: "A relaxed calm male face with gentle eyes, soft smile, and friendly expression."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="11" font-family="sans-serif">Calm Male</text></svg>'
    - title: "Tangguh & Bekas Luka (Scarred Tough)"
      description: "A rugged tough male face featuring a prominent scar over the eyebrow and serious eyes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="11" font-family="sans-serif">Tough Scar</text></svg>'
  "Wanita":
    - title: "Manis & Ceria (Sweet Cheerful)"
      description: "A sweet feminine face with large expressive eyes, delicate nose, and warm gentle smile."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23831843"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fbcfe8" font-size="11" font-family="sans-serif">Sweet Female</text></svg>'
    - title: "Dingin & Elegan (Cool Elegant)"
      description: "An elegant cool female face with slender eyes, calm composure, and minimalist features."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23581c87"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e9d5ff" font-size="11" font-family="sans-serif">Cool Elegant</text></svg>'
    - title: "Kutu Buku Kacamata (Geek Glasses)"
      description: "A smart friendly female face wearing stylish round glasses, soft eyes, and an intellectual look."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23701a75"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23f5d0fe" font-size="11" font-family="sans-serif">Geek Glasses</text></svg>'


outputs:
  - JSON
---
Use the attached image as the **STRICT CHARACTER REFERENCE**.

The reference character intentionally has a **blank, faceless head**.

Create a **NEW ORIGINAL FACE** based on:

[[{humanInput}]]

### FACE DESIGN

Create a natural, unique combination of:

* eyes
* eyebrows
* nose
* mouth
* facial proportions
* distinctive facial traits
* explicitly requested marks such as scars, moles, freckles, wrinkles, dimples, or facial hair

Make all described features clearly visible and recognizable.
Do not copy or recreate any previous face, and do not use generic features that conflict with the description.

### DESCRIPTION PRIORITY

Treat **[{humanInput}] as the PRIMARY INSTRUCTION**.

If a specific feature is requested, make it clearly visible without exaggerating beyond the description.

Examples:

* “narrow eyes” → clearly narrow eye shapes
* “thick eyebrows” → visibly thick eyebrows
* “mole on the left cheek” → one visible mole on the left cheek
* “scar beside the right eye” → visible scar beside the right eye
* “large nose” → noticeably larger nose while remaining natural

### CHARACTER LOCK

**ONLY CREATE THE FACE.**

Keep everything outside the facial area **EXACTLY UNCHANGED**, including:

* head shape
* hair and hairstyle
* hair color
* skin tone
* body and proportions
* clothing
* accessories
* pose and head position
* camera angle and perspective
* composition
* art style, line quality, colors, and shading

Do NOT modify the head to accommodate the face.

### NATURAL INTEGRATION

Fit the new facial features naturally onto the existing head while respecting its shape, viewing angle, perspective, proportions, and facial placement.

Match the existing character's visual language and rendering style.

Do not add unrequested facial characteristics unless necessary for a naturally complete face.

### FINAL LOCK

The result must be the **same original faceless character with only the face newly created** from [{humanInput}].

Everything outside the facial area must remain unchanged.

**ONLY THE FACE IS NEW.**
