---
title: "Karakter Badan"
slug: "karakter-badan"
description: "Prompt builder untuk merancang variasi bentuk tubuh, proporsi, dan postur fisik karakter kartun original"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Badan Berotot Petarung MMA"
desc_prompt: |
  Create **ONE short visual description** for the character's body shape based on:

  [DESKRIPSIKAN]

  Write it as **one concise sentence**, describing torso proportions, hip width, bust/chest volume, limb thickness, and overall physical silhouette clearly.

  Rules:
  * Focus **ONLY on the body silhouette, proportions, and physical build**
  * Clearly describe shoulders, waist, hips, chest/bust volume, and limb structure
  * **DO NOT modify the head or facial features (face, eyes, eyebrows, nose, mouth, hair)**
  * **DO NOT mention location, environment, background, setting, or lighting**
  * Keep it **short and directly usable for image generation**

  **Output ONE sentence only.**

image_prompt: |
  Create ONE short visual description of the character's body shape using image reference

  If a reference image is provided, use it as the PRIMARY BODY SHAPE REFERENCE. Carefully observe the character's visible physical build, torso proportions, shoulder breadth, hip width, and limb thickness to translate only the important anatomical proportion traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Voluptuous curvy figure with exceptionally large bust, wide prominent hips, thick thighs, and a soft rounded belly.”
  RULES:
  - Preserve the character's clearly visible body silhouette, torso shape, muscle definition or soft curves, and proportion traits from the reference.
  - Prioritize distinctive visible body shape traits: shoulder width, waist definition, hip shape, and limb volume.
  - Do not invent physical features or proportions that are not visible or reasonably supported.
  - Do not describe the character's identity, head, facial features, skin tone, clothing design details, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's exact identity if the task is to create a new body shape; use the reference only for body shape visual guidance.
  - Keep the appearance believable and suitable for a stylized cartoon world.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual physical features unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.
  
  [note]

database:
  "Example":
    - title: "Hourglass Curvy"
      description: "Curvy hourglass figure with wide hips, pronounced curves, and large bust."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23831843"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fbcfe8" font-size="12" font-family="sans-serif">Hourglass</text></svg>'

outputs:
  - JSON
---

BODY SHAPE REPLACEMENT

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new body shape and physical proportions.

**NEW BODY SHAPE:**

<br>

[{humanInput}]

<br>

**CHARACTER LOCK — DO NOT CHANGE:**

* exact same face shape
* exact same facial features (eyes, eyebrows, nose, mouth)
* exact same hairstyle
* exact same hair shape
* exact same hair color
* exact same skin tone
* exact same outfit style and clothing colors
* exact same age and identity
* exact same pose
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

**ONLY CHANGE THE BODY SHAPE AND PROPORTIONS.**

Preserve the exact design, colors, and appearance of the head, face, hair, and clothing while adapting the outfit naturally to fit the new body contours.

Do not redesign the face.
Do not change the hairstyle.
Do not change the skin tone.
Do not change the clothing colors or design.
Do not change the pose.
Do not change the camera angle.

**The ONLY intended change is the body shape and silhouette.**