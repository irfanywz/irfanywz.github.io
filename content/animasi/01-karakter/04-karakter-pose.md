---
title: "Karakter Pose"
slug: "karakter-pose"
description: "Prompt builder untuk merancang variasi pose karakter kartun original baru"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A natural standing pose."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for character poses based on:

  [NAMA_POSE]

  Each description must represent a **UNIQUE pose variant** that naturally fits the given pose category.

  ### VARIATION REQUIREMENTS

  Every variant must show a clearly different combination of:

  * arm position
  * hand gesture
  * leg position
  * foot placement
  * body direction
  * torso position
  * weight distribution
  * head direction when relevant
  * leaning or body angle
  * overall posture

  Do NOT simply change one small body part.

  Each variant must have a noticeably different overall pose and silhouette while still belonging to the same pose category.

  Avoid repeating the same:

  * arm position
  * hand gesture
  * leg position
  * foot placement
  * body direction
  * leaning direction
  * weight distribution
  * overall silhouette

  ### POSE RULES

  * Focus ONLY on pose, action, gesture, and physical movement
  * Keep poses simple and natural
  * Make poses suitable for 2D animation
  * Keep body movement physically believable
  * Use clear and readable body positions
  * Make each pose easy to reproduce from the description
  * Keep movements appropriate to `[NAMA_POSE]`
  * Use natural variations rather than random or exaggerated movements

  ### CHARACTER LOCK

  Do NOT modify:

  * character identity
  * face
  * facial features
  * hairstyle
  * hair color
  * body design
  * body proportions
  * skin tone
  * clothing
  * accessories

  Only the **pose, gesture, and body position** may change.

  ### DO NOT MENTION

  * location
  * environment
  * background
  * setting
  * atmosphere
  * lighting
  * weather
  * time
  * character appearance
  * clothing
  * props
  * backstory
  * lore
  * story

  ### OUTPUT REQUIREMENTS

  Generate **EXACTLY [JUMLAH_VARIANT] variants**.

  The number of descriptions MUST match **[JUMLAH_VARIANT] EXACTLY**.

  For example:

  * `[JUMLAH_VARIANT] = 5` → output exactly 5 poses
  * `[JUMLAH_VARIANT] = 8` → output exactly 8 poses
  * `[JUMLAH_VARIANT] = 10` → output exactly 10 poses
  * `[JUMLAH_VARIANT] = 15` → output exactly 15 poses

  Do NOT default to 10.
  Do NOT generate fewer variants.
  Do NOT generate more variants.

  ### OUTPUT FORMAT

  1. [One concise pose description]
  2. [One concise pose description]
  3. [One concise pose description]
     ...
     Continue numbering until exactly **[JUMLAH_VARIANT]** descriptions are completed.

  Each variant must be **ONE concise sentence only**.

  Do not add explanations.
  Do not add headings.
  Do not repeat poses.
  Do not combine multiple poses into one sentence.


image_prompt: |
  Create ONE short visual description of the character pose using image reference

  If a reference image is provided, use it as the PRIMARY POSE REFERENCE. Carefully observe the character's visible body position and translate only the important pose traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Running energetically forward with arms swinging and a dynamic leaning posture.”
  RULES:
  - Preserve the character's clearly visible action and posture from the reference.
  - Prioritize distinctive visible pose traits: action, body position, limb angles, leaning posture, and gesture.
  - Mention body build only when visually relevant to the pose.
  - Do not invent physical traits or poses that are not visible or reasonably supported.
  - Do not describe the character's identity, face, hair, clothing, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's identity if the task is to create a new pose; use the reference only for pose visual guidance.
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
    - title: "Running Fast"
      description: "Running energetically forward with arms swinging and a dynamic leaning posture."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Run</text></svg>'

outputs:
  - JSON
---

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **SAME CHARACTER** from the reference image in a new pose.

**POSE:**

<br>

[{humanInput}]

<br>

**CHARACTER LOCK:**

* Keep the exact same face and facial features
* Keep the exact same hairstyle and hair shape
* Keep the exact same hair color
* Keep the exact same skin tone
* Keep the exact same body proportions and body shape
* Keep the exact same outfit, clothing design, colors, and details
* Keep the exact same character identity and visual style
* Do not redesign, replace, simplify, or modify the character

The new image must show the character performing the requested pose naturally and clearly.

Maintain correct anatomy, consistent proportions, and recognizable character construction. The character's face, hairstyle, outfit, and overall silhouette must remain consistent with the reference.

Show the full body unless the requested pose requires otherwise.

Keep the composition clean and animation-friendly:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* slightly handmade line quality
* minimal details

Do not add props, extra characters, text, new clothing, background elements, or unnecessary visual effects.

**IMPORTANT:**
Only change the **POSE**. Everything else must remain consistent with the reference character.