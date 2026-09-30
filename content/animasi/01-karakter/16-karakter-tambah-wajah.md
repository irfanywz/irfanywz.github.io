---
title: "Karakter Tambah Wajah"
slug: "karakter-tambah-wajah"
description: "Prompt builder untuk merancang dan menambahkan wajah unik, ekspresif, serta detail khas pada karakter kartun original yang berwajah kosong (faceless)"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "sharp fierce male face with narrow eyes and thick eyebrows"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for the character's new face based on:

  [DESKRIPSIKAN]

  Each variant must describe a **clearly different facial design**, with noticeable differences in facial features, expression, and distinctive traits.

  Write each variant as **ONE concise sentence**, describing the facial features, expression, and unique facial traits clearly.

  Rules:

  * Focus **ONLY on the face, facial features, expression, and distinct facial marks**
  * Clearly describe the eyes, eyebrows, nose, mouth, and other important facial features when relevant
  * Describe distinctive traits such as freckles, moles, scars, wrinkles, dimples, facial hair, or other visible marks when relevant
  * Create natural, believable, and animation-friendly facial designs
  * Make each variant visually distinct
  * Do NOT make variants different only by expression
  * Do NOT make variants different only by adding a mole, scar, or other small mark
  * Avoid repeating the same eye shape, eyebrow shape, nose structure, mouth shape, facial proportions, or distinctive traits

  **CHARACTER LOCK:**

  * DO NOT modify or mention head shape
  * DO NOT modify or mention hairstyle or hair
  * DO NOT modify or mention hair color
  * DO NOT modify or mention body shape or proportions
  * DO NOT modify or mention clothing
  * DO NOT modify or mention accessories
  * DO NOT modify or mention pose
  * ONLY change the facial design

  **FACE STYLE:**

  * Keep the face consistent with the provided target description
  * Keep facial features simple, clean, readable, and suitable for 2D animation
  * Maintain natural cartoon proportions
  * Make the face distinctive and memorable without excessive detail
  * Expression should support the target description without changing the underlying facial structure

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

The character in the reference image intentionally has a blank, faceless head.

Create a **NEW ORIGINAL FACE** based on the following description:

**FACE DESCRIPTION:**

<br>

[{humanInput}]

<br>

Interpret the description creatively and translate it into a natural facial design.

The described facial characteristics must be clearly visible and recognizable while remaining consistent with the character's existing design.

**CHARACTER LOCK — DO NOT CHANGE**

Keep everything from the original character exactly as provided:

* same head shape
* same hairstyle
* same hair shape
* same hair color
* same skin tone
* same body shape
* same body proportions
* same clothing
* same accessories
* same pose
* same head position
* same camera angle
* same perspective
* same composition
* same art style
* same line quality
* same colors
* same shading

**ONLY CREATE THE NEW FACE.**

**FACE DESIGN**

Create a completely new and unique combination of:

* eyes
* eyebrows
* nose
* mouth
* facial proportions
* facial characteristics
* scars
* moles
* wrinkles
* facial marks
* other characteristics explicitly described in [FACE DESCRIPTION]

The new face must feel like a naturally designed identity for this character.

Do not copy or recreate a previous face.

Do not use generic facial features if they conflict with the description.

**DESCRIPTION PRIORITY**

Treat [FACE DESCRIPTION] as the PRIMARY INSTRUCTION for the new face.

If the description specifies a particular feature, make that feature clearly visible.

Examples:

* "sharp fierce male face" → create a naturally intimidating facial expression and feature combination.
* "narrow eyes" → use clearly narrow eye shapes.
* "thick eyebrows" → create visibly thick eyebrows.
* "mole on the left cheek" → place one visible mole on the left cheek.
* "scar beside the right eye" → create a visible scar beside the right eye.
* "large nose" → create a noticeably larger nose while maintaining the character's proportions.

Do not exaggerate features beyond what the description reasonably implies.

**NATURAL INTEGRATION**

Fit the new face naturally onto the existing head.

Respect the existing:

* head shape
* viewing angle
* perspective
* facial placement
* character proportions

Do not modify the head to accommodate the face.

The facial features must use the same visual language as the character.

**DO NOT ALTER**

Do not change:

* hairstyle
* head shape
* skin tone
* body
* clothing
* accessories
* pose
* proportions
* camera angle
* composition
* art style

Do not add facial characteristics that are not requested unless they are necessary to make the face look naturally complete.

Do not recreate any previous face.

**FINAL RESULT**

Create the same faceless character with a completely new face based on [FACE DESCRIPTION].

The face must have a distinct and recognizable identity while seamlessly matching the original character.

Everything outside the facial area must remain unchanged.

**ONLY THE FACE IS NEW.**