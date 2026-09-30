---
title: "Karakter Ekspresi"
slug: "karakter-ekspresi"
description: "Prompt builder untuk merancang lembar ekspresi wajah animasi karakter kartun original"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Standard clean 6-pose character emotion grid sheet."
desc_prompt: |
  Create **ONE short visual description** for the character's emotion expression sheet based on:

  [{target}]

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

EMOTION EXPRESSION SHEET

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create a clean character emotion expression sheet for the exact same character.

Create exactly 6 natural facial expressions arranged in a clean grid:

* **NEUTRAL** — calm, relaxed, emotionally flat expression
* **CRYING** — emotional expression with tears and a crying mouth
* **ANGRY** — naturally angry expression with clear but not exaggerated emotion
* **SAD** — naturally sad expression with subtle emotional facial features
* **CLOSED EYE** — both eyes naturally closed, with relaxed eyelids and a simple neutral facial expression
* **CONFUSED** — puzzled or bewildered expression with asymmetric eyebrows and a slight questioning mouth

**SHEET CONFIGURATION:**

<br>

[{humanInput}]

<br>

IMPORTANT:

Each expression must look natural, clear, and suitable for 2D character animation.

Change only the facial expression, including the eyebrows, eyes, and mouth when necessary.

For **CLOSED EYE**, completely close both eyes using simple natural eyelid lines.
Do not turn the closed eyes into sleeping, crying, smiling, or exaggerated expressions.
Keep the mouth and eyebrows neutral unless necessary.

Do not exaggerate the expressions.
Keep all expressions natural and proportional to the character's original face.

**CHARACTER LOCK — DO NOT CHANGE:**

* exact same character identity
* exact same head shape
* exact same face proportions
* exact same hairstyle
* exact same hair color
* exact same skin tone
* exact same age
* exact same outfit
* exact same body proportions
* exact same 3/4 front view facing slightly right
* exact same camera angle
* exact same art style

Keep the character consistent across all 6 expressions.

Visual style:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

White background.
Clean grid layout.
Consistent spacing.

No labels.
No text.
No extra characters.
No props.
No exaggerated expressions.

Create EXACTLY 6 emotional expressions:
NEUTRAL, CRYING, ANGRY, SAD, CLOSED EYE, and CONFUSED.