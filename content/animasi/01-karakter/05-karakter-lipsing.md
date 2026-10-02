---
title: "Karakter Lipsing"
slug: "karakter-lipsing"
description: "Prompt builder untuk merancang lembar bentuk mulut animasi lip-sync karakter kartun original"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Standard clean 6-pose animation lip-sync grid sheet."
desc_prompt: |
  Create **ONE short visual description** for the character's lip sync mouth sheet based on:

  [DESKRIPSIKAN]

  Write it as **one concise sentence**, describing the grid layout, mouth count, and alignment style clearly.

  Rules:
  * Focus **ONLY on the mouth shape sheet configuration and layout style**
  * Clearly describe the 6-shape arrangement
  * **DO NOT modify character identity, head shape, or eye features**
  * **DO NOT mention location, environment, background, setting, or lighting**
  * Keep it **short and directly usable for image generation**

  **Output ONE sentence only.**

image_prompt: |
  Create ONE short visual description of the character's lip sync mouth sheet using image reference

  If a reference image is provided, use it as the PRIMARY LIP SYNC MOUTH SHEET REFERENCE. Carefully observe the character's visible mouth shapes, layout arrangement, grid configuration, and style to translate only the important mouth sheet traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Standard clean 6-pose animation lip-sync grid sheet with IDLE, A, I, U, E, O shapes.”
  RULES:
  - Preserve the character's clearly visible lip sync mouth layout, arrangement style, and mouth shape variations from the reference.
  - Prioritize distinctive visible mouth sheet traits: shape count, grid layout, and vowel types.
  - Do not invent mouth sheet features or layouts that are not visible or reasonably supported.
  - Do not describe the character's exact identity, specific facial features, outfit, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's exact identity if the task is to create a new lip sync sheet; use the reference only for layout and mouth shape style guidance.
  - Keep the appearance believable and suitable for a stylized cartoon world.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual structural features unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.
  
  [NOTE]

database:
  "Example":
    - title: "Standard AIUEO Sheet"
      description: "Standard clean 6-pose animation lip-sync grid sheet with IDLE, A, I, U, E, O shapes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Grid 6</text></svg>'

outputs: ["JSON"]
---
Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create a clean **6-cell lip-sync mouth shape sheet** for the **EXACT SAME CHARACTER**.

[{humanInput}]

The **original mouth is the PRIMARY MOUTH DESIGN REFERENCE**.

### MOUTH DESIGN LOCK

Preserve the original mouth design across **ALL 6 shapes**, including:

* lip shape and thickness
* upper and lower lip structure
* cupid's bow
* width and proportions
* lip contours
* lip color
* distinctive details such as glossy or lip-balm appearance
* overall mouth characteristics

The 6 shapes must look like **the same person's lips articulating different vowel sounds**, NOT six different mouth designs.

### LIP-SYNC SHAPES

Create exactly these 6 articulations:

1. **IDLE** — original mouth naturally relaxed and closed.
2. **A** — original lips naturally opened vertically.
3. **I** — original lips compressed into a narrower horizontal shape.
4. **U** — original lips naturally pursed and rounded.
5. **E** — original lips slightly widened and opened.
6. **O** — original lips rounded into an open O shape.

Change the mouth **only as much as necessary** to represent each vowel.

### CONSISTENCY

Across all 6 shapes:

* same lip design and visual language
* same lip thickness, color, and definition
* same distinctive lip characteristics
* same mouth position and scale
* same facial proportions

Do NOT redesign, replace, simplify, or genericize the original lips.

### CHARACTER LOCK

Keep everything else **EXACTLY UNCHANGED**:

* head and face
* eyes and eyebrows
* hairstyle and hair color
* skin tone
* age and identity
* body and proportions
* clothing and accessories
* 3/4 front view facing slightly right
* camera angle and perspective
* art style and line quality

**ONLY THE MOUTH ARTICULATION MAY CHANGE.**

### VISUAL STYLE

Match the original character:

* simple 2D cartoon
* clean shapes
* natural black outlines
* solid colors
* minimal detail
* slightly handmade line quality
* animation-friendly design

### SHEET OUTPUT

* Head and hair only; no neck, shoulders, torso, or body.
* Identical head framing and scale in all 6 cells.
* Clean 6-cell grid with consistent spacing.
* Plain white background.
* No labels, text, borders, props, extra characters, or additional mouth shapes.
* No exaggerated mouth openings.
* No oversized or tiny mouths.
* No facial or hairstyle changes.

Create **EXACTLY 6 mouth shapes**:

**IDLE — A — I — U — E — O**