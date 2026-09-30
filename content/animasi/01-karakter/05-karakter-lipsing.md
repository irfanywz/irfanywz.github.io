---
title: "Karakter Lipsing"
slug: "karakter-lipsing"
description: "Prompt builder untuk merancang lembar bentuk mulut animasi lip-sync karakter kartun original"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
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

outputs:
  - JSON
---
# AIUEO LIP SYNC MOUTH SHAPE SHEET

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

**SHEET CONFIGURATION:**

<br>

[{humanInput}]

<br>

Create a clean lip-sync mouth shape sheet for the **EXACT SAME CHARACTER**.

The original mouth in the reference image is the **PRIMARY MOUTH DESIGN REFERENCE**.

### ORIGINAL MOUTH DESIGN LOCK — VERY IMPORTANT

**Preserve the original mouth design throughout ALL 6 lip-sync shapes.**

The original mouth's:

* lip shape
* lip thickness
* upper-lip shape
* lower-lip shape
* cupid's bow
* mouth width
* mouth proportions
* lip contour
* lip color
* lip-balm / glossy appearance
* visual details
* overall feminine mouth characteristics

must remain visually recognizable in **EVERY** mouth variation.

**DO NOT redesign the mouth.**

The lip-sync shapes are only **phonetic variations of the ORIGINAL MOUTH**, not completely different mouth designs.

If the original mouth has **lip balm, glossy lips, defined lips, fuller lips, thin lips, a cupid's bow, or another distinctive feature**, those characteristics MUST remain visible and consistent across all 6 shapes.

For example:

**Original mouth = glossy lip-balm feminine lips**

Then:

* IDLE = same glossy lip-balm lips, naturally closed
* A = same glossy lip-balm lips, naturally opened vertically
* I = same glossy lip-balm lips, narrowed horizontally
* U = same glossy lip-balm lips, naturally pursed
* E = same glossy lip-balm lips, slightly widened
* O = same glossy lip-balm lips, rounded open

Do NOT replace the original lips with generic cartoon lips.

### LIP-SYNC SHAPES

Create exactly 6 natural mouth variations:

**IDLE** — original mouth design, naturally relaxed and closed.

**A** — original mouth design naturally adapted into a vertically open A shape.

**I** — original mouth design naturally compressed into a narrow horizontal I shape.

**U** — original mouth design naturally pursed into a rounded U shape.

**E** — original mouth design naturally widened into a slightly open E shape.

**O** — original mouth design naturally rounded into an O shape.

The mouth should change **only as much as necessary to represent each vowel sound**.

### MOUTH CONSISTENCY

Across all 6 shapes:

* same mouth design language
* same lip thickness
* same lip color
* same lip contour style
* same feminine characteristics
* same level of lip definition
* same glossy or lip-balm appearance
* same mouth position
* same mouth scale
* same facial proportions

The mouth must look like **the same person's lips performing different sounds**, not six different mouths.

### CHARACTER LOCK — DO NOT CHANGE

* exact same head shape
* exact same face
* exact same eyes
* exact same eyebrows
* exact same hairstyle
* exact same hair color
* exact same skin tone
* exact same age and character identity
* exact same outfit
* exact same proportions
* exact same 3/4 front view facing slightly right
* exact same art style

**ONLY the mouth articulation changes.**

### VISUAL STYLE

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

### OUTPUT

JUST HEAD ZOOM.

Show only the character's head and hair.

Do not show:

* neck
* shoulders
* torso
* arms
* hands
* legs
* full body

Keep identical head framing and head size across all 6 shapes.

White background.

Clean 6-cell grid.

Consistent spacing.

No labels.
No text.
No extra mouth shapes.
No redesigned lips.
No generic replacement lips.
No facial feature changes.
No hairstyle changes.
No exaggerated mouth opening.
No oversized or tiny mouths.
No extra characters.
No props.

Create **EXACTLY 6 mouth shapes**:

**IDLE — A — I — U — E — O**
