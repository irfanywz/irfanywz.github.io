---
title: "Karakter Ekspresi"
slug: "karakter-ekspresi"
description: "Prompt builder untuk merancang lembar ekspresi wajah animasi karakter kartun original"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Standard clean 6-pose character emotion grid sheet."
desc_prompt: |
  Create **ONE short visual description** for the character's emotion expression sheet based on:

  [DESKRIPSIKAN]

  Write it as **one concise sentence**, describing the grid layout, expression count, and alignment style clearly.

  Rules:
  * Focus **ONLY on the emotion expression sheet configuration and layout style**
  * Clearly describe the 6-expression arrangement
  * **DO NOT modify character identity, head shape, or body proportions**
  * **DO NOT mention location, environment, background, setting, or lighting**
  * Keep it **short and directly usable for image generation**

  **Output ONE sentence only.**

image_prompt: |
  Create ONE short visual description of the character's emotion expression sheet using image reference

  If a reference image is provided, use it as the PRIMARY EMOTION SHEET REFERENCE. Carefully observe the character's visible facial expressions, layout arrangement, grid configuration, and style to translate only the important emotion sheet traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Standard clean 6-pose character emotion grid sheet with Neutral, Crying, Angry, Sad, Closed Eye, and Confused expressions.”
  RULES:
  - Preserve the character's clearly visible emotion expression layout, arrangement style, and expression variations from the reference.
  - Prioritize distinctive visible emotion sheet traits: expression count, grid layout, and emotion types.
  - Do not invent emotion sheet features or layouts that are not visible or reasonably supported.
  - Do not describe the character's exact identity, specific facial features, outfit, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's exact identity if the task is to create a new emotion sheet; use the reference only for layout and expression style guidance.
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
    - title: "Standard 6-Emotion Sheet"
      description: "Standard clean 6-pose character emotion grid sheet with Neutral, Crying, Angry, Sad, Closed Eye, and Confused expressions."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23312e81"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c7d2fe" font-size="12" font-family="sans-serif">Grid 6</text></svg>'

outputs:
  - JSON
---

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create a clean **6-expression facial expression sheet** of the **EXACT SAME CHARACTER**, arranged in a consistent grid on a plain white background.

### EXPRESSIONS

Create exactly these 6 expressions:

1. **NEUTRAL** — calm, relaxed, emotionally flat.
2. **CRYING** — visible tears with a natural crying mouth.
3. **ANGRY** — clearly angry with controlled, natural emotion.
4. **SAD** — subtle, naturally sad facial features.
5. **CLOSED EYE** — both eyes completely closed with simple natural eyelid lines, neutral mouth and eyebrows.
6. **CONFUSED** — puzzled expression with asymmetric eyebrows and a slightly questioning mouth.

### EXPRESSION RULES

* Change ONLY the facial expression using the eyes, eyebrows, and mouth as needed.
* Keep every expression natural, clear, proportional, and animation-friendly.
* Do NOT exaggerate or distort the original facial proportions.
* For CLOSED EYE, use simple closed eyelid lines; do NOT make it look sleepy, crying, smiling, or exaggerated.
* Keep the underlying character and face structure consistent across all expressions.

### CHARACTER LOCK

Keep everything else **EXACTLY UNCHANGED**:

* character identity and age
* head shape and face proportions
* hairstyle and hair color
* skin tone
* body and proportions
* outfit
* 3/4 front view facing slightly right
* camera angle and perspective
* art style and line quality

### VISUAL STYLE

Match the original character's simple 2D animation style:

* clean shapes
* natural black outlines
* solid colors
* minimal detail
* slightly handmade line quality
* animation-friendly design

### SHEET LOCK

* Exactly 6 expressions.
* Clean, evenly spaced grid.
* White background.
* Consistent scale, framing, and alignment.
* No labels, text, props, extra characters, or other elements.

**ONLY THE FACIAL EXPRESSIONS MAY CHANGE.**